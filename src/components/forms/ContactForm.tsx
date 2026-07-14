"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Mail,
  Sparkles,
  User,
} from "lucide-react";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";

import { submitContactForm } from "@/actions/contact";

import {
  contactSchema,
  type ContactSchema,
} from "@/lib/validations";

import type { ContactFormState } from "@/types/contact";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Premium Contact Form
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ React Hook Form
 * ✓ Zod Validation
 * ✓ Server Actions
 * ✓ React 19
 * ✓ Premium Glassmorphism
 * ✓ Better Spacing
 * ✓ Better Typography
 * ✓ Premium Header
 * ✓ Dark Mode
 * ✓ Accessible
 */

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const {
    register,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (state.success) {
      reset();
    }
  }, [state.success, reset]);

  return (
    <form
      action={formAction}
      className={cn(
        "relative overflow-hidden",
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

        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/[0.015] to-transparent" />
      </div>

      <div className="relative z-10">
        {/* ============================================== */}
        {/* Header */}
        {/* ============================================== */}

        <div className="mb-10">
          <div
            className={cn(
              "mb-4 inline-flex items-center gap-2",
              "rounded-full",
              "border border-primary/20",
              "bg-primary/10",
              "px-4 py-2",
              "text-primary"
            )}
          >
            <Sparkles className="h-4 w-4" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Let&apos;s Connect
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
            We&apos;d Love to Hear From You
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            Have a question, project idea, feedback, or simply
            want to say hello? Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Response within 24 hours
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              Secure & confidential
            </div>
          </div>
        </div>

        {/* ============================================== */}
        {/* Name */}
        {/* ============================================== */}

        <div className="space-y-3">
          <label
            htmlFor="name"
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <User className="h-4 w-4 text-primary" />

            Full Name

            <span className="text-red-500">*</span>
          </label>

          <Input
            id="name"
            placeholder="John Doe"
            {...register("name")}
          />

          <p className="text-sm text-muted-foreground">
            Please enter your full name.
          </p>

          {errors.name && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              {errors.name.message}
            </div>
          )}

          {state.errors?.name?.map((error) => (
            <div
              key={error}
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500"
            >
              {error}
            </div>
          ))}
        </div>

                {/* ============================================== */}
        {/* Email */}
        {/* ============================================== */}

        <div className="mt-8 space-y-3">
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Mail className="h-4 w-4 text-primary" />

            Email Address

            <span className="text-red-500">*</span>
          </label>

          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            autoComplete="email"
            {...register("email")}
          />

          <p className="text-sm text-muted-foreground">
            We&apos;ll only use your email to respond to your
            message.
          </p>

          {errors.email && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              {errors.email.message}
            </div>
          )}

          {state.errors?.email?.map((error) => (
            <div
              key={error}
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500"
            >
              {error}
            </div>
          ))}
        </div>

        {/* ============================================== */}
        {/* Subject */}
        {/* ============================================== */}

        <div className="mt-8 space-y-3">
          <label
            htmlFor="subject"
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Sparkles className="h-4 w-4 text-primary" />

            Subject

            <span className="text-red-500">*</span>
          </label>

          <Input
            id="subject"
            placeholder="How can we help you today?"
            autoComplete="off"
            {...register("subject")}
          />

          <p className="text-sm text-muted-foreground">
            Keep the subject short and descriptive.
          </p>

          {errors.subject && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              {errors.subject.message}
            </div>
          )}

          {state.errors?.subject?.map((error) => (
            <div
              key={error}
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500"
            >
              {error}
            </div>
          ))}
        </div>

        {/* ============================================== */}
        {/* Message */}
        {/* ============================================== */}

        <div className="mt-8 space-y-3">
          <label
            htmlFor="message"
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Mail className="h-4 w-4 text-primary" />

            Your Message

            <span className="text-red-500">*</span>
          </label>

          <Textarea
            id="message"
            rows={7}
            placeholder="Tell us about your project, question, feedback, or anything you'd like to discuss..."
            {...register("message")}
          />

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
            <span>
              Include as much detail as possible for a faster
              response.
            </span>

            <span className="rounded-full bg-muted/40 px-3 py-1 text-xs font-medium">
              Typically replies within 24 hours
            </span>
          </div>

          {errors.message && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              {errors.message.message}
            </div>
          )}

          {state.errors?.message?.map((error) => (
            <div
              key={error}
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500"
            >
              {error}
            </div>
          ))}
        </div>

        {/* ============================================== */}
        {/* Status Message */}
        {/* Part 3 Starts Here */}
        {/* ============================================== */}
                {/* ============================================== */}
        {/* Status Message */}
        {/* ============================================== */}

        {state.message && (
          <div
            className={cn(
              "mt-8 rounded-2xl border p-5",
              "transition-all duration-300",
              state.success
                ? [
                    "border-green-500/20",
                    "bg-green-500/10",
                    "text-green-700",
                    "dark:text-green-400",
                  ]
                : [
                    "border-red-500/20",
                    "bg-red-500/10",
                    "text-red-700",
                    "dark:text-red-400",
                  ]
            )}
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl",
                  state.success
                    ? "bg-green-500/15 text-green-600 dark:text-green-400"
                    : "bg-red-500/15 text-red-600 dark:text-red-400"
                )}
              >
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold">
                  {state.success
                    ? "Message Sent Successfully"
                    : "Unable to Send Message"}
                </h3>

                <p className="text-sm leading-6">
                  {state.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================== */}
        {/* Divider */}
        {/* ============================================== */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ============================================== */}
        {/* Privacy Notice */}
        {/* ============================================== */}

        <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-muted/25 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Your privacy matters
            </h3>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Your information is kept confidential and used
              solely to respond to your inquiry. We never share
              your personal information with third parties.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
              🔒 Secure
            </span>

            <span className="rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
              ⚡ Fast Response
            </span>

            <span className="rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
              💬 Friendly Support
            </span>
          </div>
        </div>

        {/* ============================================== */}
        {/* Submit Button */}
        {/* ============================================== */}

        <div className="mt-10 space-y-5">
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
            {isPending ? "Sending Message..." : "Send Message"}
          </Button>

          <p className="text-center text-xs leading-6 text-muted-foreground">
            By submitting this form, you agree to receive a
            response regarding your inquiry. We respect your
            privacy and will never send spam.
          </p>
        </div>
      </div>
    </form>
  );
}