"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signInWithCredentials, signInWithDemo } from "@/lib/actions/auth";

const defaultValues = { email: "", password: "" };

const SignInPage = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={defaultValues}
    onSubmit={signInWithCredentials}
    onDemoSignIn={signInWithDemo}
  />
);

export default SignInPage;
