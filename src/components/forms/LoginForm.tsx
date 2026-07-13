"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import { login } from "@/actions/auth";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { ROUTES } from "@/constants/routes";
import {
  loginSchema,
  type LoginSchema,
} from "@/lib/validations";

/**
 * ==========================================================
 * Login Form
 * ==========================================================
 *
 * Features
 * --------
 * ✓ React Hook Form
 * ✓ Zod Validation
 * ✓ Server Actions
 * ✓ Loading State
 * ✓ Password Visibility Toggle
 * ✓ Demo Credentials
 * ✓ Accessible
 * ✓ Responsive
 */

export default function LoginForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [serverError, setServerError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchema) => {
    setServerError("");

    startTransition(async () => {
      const result = await login(data);

      if (!result.success) {
        setServerError(result.message);
        return;
      }

      router.push(ROUTES.DASHBOARD);
      router.refresh();
    });
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-sm">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome Back
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to access your dashboard.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <Input
          label="Email Address"
          type="email"
          placeholder="admin@example.com"
          autoComplete="email"
          leftIcon={<Mail className="h-4 w-4" />}
          error={errors.email?.message}
          {...register("email")}
        />

        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            autoComplete="current-password"
            leftIcon={<Lock className="h-4 w-4" />}
            error={errors.password?.message}
            {...register("password")}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((previous) => !previous)
            }
            className="absolute right-3 top-9.5 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>

        {serverError && (
          <div className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {serverError}
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          loading={isPending}
        >
          Sign In
        </Button>
      </form>

      <div className="mt-8 rounded-xl border bg-muted/40 p-4">
        <h2 className="mb-3 text-sm font-semibold">
          Demo Credentials
        </h2>

        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">
              Email:
            </span>{" "}
            admin@example.com
          </p>

          <p>
            <span className="font-medium text-foreground">
              Password:
            </span>{" "}
            admin123
          </p>
        </div>
      </div>
    </div>
  );
}