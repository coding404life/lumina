"use client";

import AuthForm from "@/components/AuthForm";
import { signInWithDemo, signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validations";

const defaultValues = {
  fullName: "",
  email: "",
  password: "",
  universityId: 0,
  universityCard: "",
};

const SignUpPage = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={defaultValues}
    onSubmit={signUp}
    onDemoSignIn={signInWithDemo}
  />
);

export default SignUpPage;
