"use client";

import AuthForm from "@/components/AuthForm";
import { signInWithDemo, signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validations";

const SignUpPage = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      email: "",
      password: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={signUp}
    onDemoSignIn={signInWithDemo}
  />
);

export default SignUpPage;
