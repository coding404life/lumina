import { borrowedBookEmail } from "@/emails/email-templates";
import { sendEmail } from "@/lib/workflow";
import { serve } from "@upstash/workflow/nextjs";

type BorrowWorkflowPayload = {
  email: string;
  fullName: string;
  universityId: number;
  bookTitle: string;
};

export const { POST } = serve<BorrowWorkflowPayload>(async (context) => {
  const { email, fullName, universityId, bookTitle } = context.requestPayload;

  await context.run("send-borrow-confirmation", async () => {
    await sendEmail({
      email,
      subject: `Borrow confirmed: ${bookTitle}`,
      message: await borrowedBookEmail({
        fullName,
        bookTitle,
        universityId,
      }),
    });
  });
});
