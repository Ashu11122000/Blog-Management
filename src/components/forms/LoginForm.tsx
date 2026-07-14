"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useForm } from "react-hook-form";

import { login } from "@/actions/auth";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import { ROUTES } from "@/constants/routes";

import {
  loginSchema,
  type LoginSchema,
} from "@/lib/validations";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Premium Login Form
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ React Hook Form
 * ✓ Zod Validation
 * ✓ Server Actions
 * ✓ React 19
 * ✓ Premium Glass UI
 * ✓ Better UX
 * ✓ Password Visibility
 * ✓ Loading State
 * ✓ Accessible
 * ✓ Responsive
 */

export default function LoginForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [serverError, setServerError] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

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
    <div
      className={cn(
        "relative mx-auto w-full max-w-lg overflow-hidden",
        "rounded-[2rem]",
        "border border-border/60",
        "bg-background/80",
        "p-8 md:p-10",
        "backdrop-blur-2xl",
        "shadow-2xl shadow-black/5",
        "transition-all duration-500",
        "dark:shadow-black/30"
      )}
    >
      {/* ============================================== */}
      {/* Decorative Background */}
      {/* ============================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/[0.02] to-transparent" />
      </div>

      <div className="relative z-10">
        {/* ============================================== */}
        {/* Header */}
        {/* ============================================== */}

        <div className="mb-10 text-center">
          <div
            className={cn(
              "mb-5 inline-flex items-center gap-2",
              "rounded-full",
              "border border-primary/20",
              "bg-primary/10",
              "px-4 py-2",
              "text-primary"
            )}
          >
            <Sparkles className="h-4 w-4" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Welcome Back
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-foreground">
            Sign In
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-muted-foreground">
            Sign in to access your dashboard,
            manage content, publish articles,
            and continue where you left off.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-green-500" />

              Secure Authentication
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />

              Protected Dashboard
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7"
        >
          {/* ============================================== */}
          {/* Email */}
          {/* ============================================== */}

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Mail className="h-4 w-4 text-primary" />

              Email Address

              <span className="text-red-500">*</span>
            </label>

            <Input
              type="email"
              placeholder="admin@example.com"
              autoComplete="email"
              leftIcon={<Mail className="h-4 w-4" />}
              error={errors.email?.message}
              {...register("email")}
            />

            <p className="text-sm text-muted-foreground">
              Enter the email associated with your
              administrator account.
            </p>
          </div>

                    {/* ============================================== */}
          {/* Password */}
          {/* ============================================== */}

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Lock className="h-4 w-4 text-primary" />

              Password

              <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Input
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
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className={cn(
                  "absolute right-4 top-[2.85rem]",
                  "flex h-9 w-9 items-center justify-center",
                  "rounded-xl",
                  "text-muted-foreground",
                  "transition-all duration-300",
                  "hover:bg-muted/60",
                  "hover:text-foreground",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-primary/40",
                  "active:scale-95"
                )}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                Your password is securely encrypted.
              </p>

              <button
                type="button"
                className={cn(
                  "text-sm font-medium text-primary",
                  "transition-colors duration-300",
                  "hover:text-primary/80"
                )}
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* ============================================== */}
          {/* Server Error */}
          {/* ============================================== */}

          {serverError && (
            <div
              className={cn(
                "rounded-2xl",
                "border border-destructive/20",
                "bg-destructive/10",
                "p-5",
                "text-destructive",
                "transition-all duration-300"
              )}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/15">
                  <Lock className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Authentication Failed
                  </h3>

                  <p className="mt-1 text-sm leading-6">
                    {serverError}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ============================================== */}
          {/* Submit Button */}
          {/* ============================================== */}

          <div className="space-y-5">
            <Button
              type="submit"
              loading={isPending}
              className={cn(
                "h-14 w-full rounded-2xl",
                "text-base font-semibold",
                "shadow-lg shadow-blue-500/20",
                "transition-all duration-300",
                "hover:-translate-y-0.5",
                "hover:shadow-xl hover:shadow-blue-500/30"
              )}
            >
              {isPending
                ? "Signing In..."
                : "Sign In to Dashboard"}
            </Button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Secure Login
              </span>

              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

                    {/* ============================================== */}
          {/* Demo Credentials */}
          {/* ============================================== */}

          <div
            className={cn(
              "rounded-3xl",
              "border border-border/60",
              "bg-muted/30",
              "p-6",
              "backdrop-blur-xl"
            )}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-foreground">
                  Demo Credentials
                </h2>

                <p className="text-sm text-muted-foreground">
                  Use these credentials to explore the admin
                  dashboard.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div
                className={cn(
                  "flex items-center justify-between gap-4",
                  "rounded-2xl",
                  "border border-border/60",
                  "bg-background/60",
                  "px-5 py-4"
                )}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-foreground">
                    admin@example.com
                  </p>
                </div>

                <Mail className="h-5 w-5 text-primary" />
              </div>

              <div
                className={cn(
                  "flex items-center justify-between gap-4",
                  "rounded-2xl",
                  "border border-border/60",
                  "bg-background/60",
                  "px-5 py-4"
                )}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Password
                  </p>

                  <p className="mt-1 font-medium text-foreground">
                    admin123
                  </p>
                </div>

                <Lock className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          {/* ============================================== */}
          {/* Trust Indicators */}
          {/* ============================================== */}

          <div className="grid gap-4 pt-2 md:grid-cols-3">
            <div
              className={cn(
                "rounded-2xl",
                "border border-border/60",
                "bg-muted/20",
                "p-4",
                "text-center",
                "transition-all duration-300",
                "hover:border-primary/30",
                "hover:bg-muted/40"
              )}
            >
              <ShieldCheck className="mx-auto h-6 w-6 text-primary" />

              <h3 className="mt-3 text-sm font-semibold text-foreground">
                Secure Login
              </h3>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Your authentication is protected using secure
                server-side validation.
              </p>
            </div>

            <div
              className={cn(
                "rounded-2xl",
                "border border-border/60",
                "bg-muted/20",
                "p-4",
                "text-center",
                "transition-all duration-300",
                "hover:border-primary/30",
                "hover:bg-muted/40"
              )}
            >
              <Sparkles className="mx-auto h-6 w-6 text-primary" />

              <h3 className="mt-3 text-sm font-semibold text-foreground">
                Modern Experience
              </h3>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Built with Next.js, React 19, Tailwind CSS, and
                modern best practices.
              </p>
            </div>

            <div
              className={cn(
                "rounded-2xl",
                "border border-border/60",
                "bg-muted/20",
                "p-4",
                "text-center",
                "transition-all duration-300",
                "hover:border-primary/30",
                "hover:bg-muted/40"
              )}
            >
              <CheckCircle2 className="mx-auto h-6 w-6 text-primary" />

              <h3 className="mt-3 text-sm font-semibold text-foreground">
                Production Ready
              </h3>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Optimized for accessibility, responsiveness,
                and premium user experience.
              </p>
            </div>
          </div>

          {/* ============================================== */}
          {/* Footer */}
          {/* ============================================== */}

          <div className="pt-4">
            <p className="text-center text-xs leading-6 text-muted-foreground">
              By signing in, you agree to continue using the
              dashboard responsibly. This demo is intended for
              evaluation and development purposes.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}