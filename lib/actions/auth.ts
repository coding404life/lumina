"use server";

import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { db } from "@/database/db";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";
import { workflowClient } from "../workflow";
import config from "../config";

export const signUp = async (params: AuthCredentials) => {
  const { email, password, fullName, universityId, universityCard } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

  const { success } = await ratelimit.limit(ip);
  if (!success) return redirect("/too-fast");

  // check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, message: "User already exists" };
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // create user
    await db.insert(users).values({
      email,
      password: hashedPassword,
      fullName,
      universityId,
      universityCard,
    });

    await workflowClient.trigger({
      url: `${config.env.apiEndpoint}/api/workflow/onboarding`,
      body: {
        email,
        fullName,
      },
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: false positive
    console.log(error, "Signup error");
    return { success: false, message: "Failed to create user" };
  }
};

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">,
) => {
  const { email, password } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

  const { success } = await ratelimit.limit(ip);
  if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: false positive
    console.log(error, "Signin error");
    return { success: false, error: "Something went wrong" };
  }
};
