"use client";

import { Controller, useForm, type Path } from "react-hook-form";
import type {
  DefaultValues,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import ImageUpload from "./ImageUpload";

interface Props<T extends FieldValues> {
  type: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<T, any>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);
    if (!result.success && result.error) {
      console.error(result.error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">{isSignIn ? "Welcome to Knowledge" : "Create your library account"}</h1>
      <p className="text-light-100">{isSignIn ? "Access the vast collection of resources, and stay updated" : "Please complete the form below to create your account"}</p>
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>{isSignIn ? "Sign In" : "Sign Up"}</CardTitle>
          <CardDescription>
            {isSignIn
              ? "Access your account to continue"
              : "Create an account to join our community"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form id="auth-form" onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
            <FieldGroup>

              {Object.keys(defaultValues).map((key) => (
                <Controller
                  key={key}
                  name={key as Path<T>}
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="capitalize" htmlFor={key}>{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FieldLabel>
                      {field.name === "universityCard" ? (
                        <ImageUpload />
                      ) : (
                        <Input
                        required
                          {...field}
                          id={key}
                          aria-invalid={fieldState.invalid}
                          type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                          className="form-input"
                        />
                      )}
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              ))}

            </FieldGroup>
          </form>
         </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" form="auth-form" className="form-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <Link
              href={isSignIn ? "/sign-up" : "/sign-in"}
              className="font-bold text-primary underline underline-offset-4"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
