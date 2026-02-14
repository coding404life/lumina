"use client";

import AuthForm from "@/components/AuthForm";
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
    onSubmit={async (data) => ({ success: true })}
  />
);

export default SignUpPage;
