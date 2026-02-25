import { db } from "@/database/db";
import { users } from "@/database/schema";
import { sendEmail } from "@/lib/workflow";
import { serve } from "@upstash/workflow/nextjs";
import { eq } from "drizzle-orm";

type UserState = "non-active" | "active";

type InitialData = {
  email: string;
  fullName: string;
};

const ONE_DAY = 24 * 60 * 60 * 1000;
const THREE_DAYS = ONE_DAY * 3;
const ONE_MONTH = ONE_DAY * 30;

const getUserState = async (email: string): Promise<UserState> => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) return "non-active";

  const lastActivityDate = new Date(user[0].lastActivityDate as string);
  const today = new Date();
  const timeDifference = today.getTime() - lastActivityDate.getTime();

  if (timeDifference > THREE_DAYS && timeDifference <= ONE_MONTH)
    return "non-active";

  return "active";
};

export const { POST } = serve<InitialData>(async (context) => {
  const { email, fullName } = context.requestPayload;

  await context.run("new-signup", async () => {
    await sendEmail({
      email,
      subject: "Welcome to the platform",
      message: `Welcome ${fullName} to the platform`,
    });
  });

  await context.sleep("wait-for-3-days", THREE_DAYS);

  while (true) {
    const state = await context.run("check-user-state", async () => {
      return await getUserState(email);
    });

    if (state === "non-active") {
      await context.run("send-email-non-active", async () => {
        await sendEmail({
          email,
          subject: "Are you still using the platform?",
          message: `Hey, ${fullName} we just wanted to check in and see if you're still using the platform. If you're not, we're sorry to hear that. If you are, we're happy to hear that!`,
        });
      });
    } else if (state === "active") {
      await context.run("send-email-active", async () => {
        await sendEmail({
          email,
          subject: "Welcome back to the platform",
          message: `Hey, ${fullName} we just wanted to check in and see if you're still using the platform. If you're not, we're sorry to hear that. If you are, we're happy to hear that!`,
        });
      });
    }

    await context.sleep("wait-for-1-month", ONE_MONTH);
  }
});
