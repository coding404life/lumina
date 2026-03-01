"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signInWithCredentials, signInWithDemo } from "@/lib/actions/auth";

const SignInPage = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{ email: "", password: "" }}
    onSubmit={signInWithCredentials}
    onDemoSignIn={signInWithDemo}
  />
);

export default SignInPage;
