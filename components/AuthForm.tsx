"use client";

import { Controller, useForm, type Path } from "react-hook-form";
import type {
  DefaultValues,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodType } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import ImageUpload from "./ImageUpload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props<T extends FieldValues> {
  type: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<T, any, any>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  onDemoSignIn?: () => Promise<{ success: boolean; error?: string }>;
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
  onDemoSignIn,
}: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === "SIGN_IN";

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success(
        isSignIn ? "Signed in successfully" : "Account created successfully",
      );

      router.push("/");
    } else {
      toast.error(result.error || "Something went wrong", {
        description: "Please check your credentials and try again",
      });
    }
  };

  const handleDemoLogin = async () => {
    if (!onDemoSignIn) return;

    const result = await onDemoSignIn();

    if (result.success) {
      toast.success("Signed in with demo account");
      router.push("/");
      return;
    }

    toast.error(result.error || "Demo access failed");
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          {isSignIn ? "Welcome Back" : "Get Started"}
        </h2>
        <p className="text-light-100 text-sm font-light">
          {isSignIn
            ? "Welcome back! Please enter your details to continue."
            : "Create your account to start managing your library today."}
        </p>
      </div>

      <form
        id="auth-form"
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-5"
      >
        <FieldGroup>
          {Object.keys(defaultValues).map((key) => (
            <Controller
              key={key}
              name={key as Path<T>}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="flex flex-col gap-2"
                >
                  <FieldLabel
                    className="text-white/80 text-xs font-semibold uppercase tracking-wider pl-1"
                    htmlFor={key}
                  >
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FieldLabel>
                  {field.name === "universityCard" ? (
                    <ImageUpload
                      onFileChange={field.onChange}
                      defaultValue={field.value}
                    />
                  ) : (
                    <Input
                      required
                      {...field}
                      id={key}
                      aria-invalid={fieldState.invalid}
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      className="form-input bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 px-4 rounded-xl focus:bg-white/10 focus:border-primary/50 transition-all font-normal"
                    />
                  )}
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-red-400 text-xs pl-1"
                    />
                  )}
                </Field>
              )}
            />
          ))}
        </FieldGroup>

        <div className="flex flex-col gap-6 pt-4">
          <Button
            type="submit"
            form="auth-form"
            className="form-btn h-14 rounded-xl font-bold text-lg tracking-wide hover:glow-effect transition-all"
          >
            {isSignIn ? "Sign In" : "Create Account"}
          </Button>

          <Button
            type="button"
            onClick={handleDemoLogin}
            className="h-12 rounded-xl border border-primary/40 bg-transparent text-primary hover:bg-primary/10 transition-all"
          >
            {isSignIn ? "Try Demo Account" : "View Demo Instead"}
          </Button>

          <p className="text-sm text-center text-light-100/60 font-medium">
            {isSignIn ? "New to Lumina? " : "Already a member? "}
            <Link
              href={isSignIn ? "/sign-up" : "/sign-in"}
              className="text-primary hover:text-primary/80 font-bold underline underline-offset-4 transition-colors"
            >
              {isSignIn ? "Create an account" : "Sign in here"}
            </Link>
          </p>

          <p className="text-xs text-center text-light-100/50">
            Demo mode is ideal for product walkthroughs without creating a new
            account.
          </p>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
