"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";

import { submitContactForm } from "@/actions/contact";
import { contactSchema, type ContactSchema } from "@/lib/validations";
import type { ContactFormState } from "@/types/contact";

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
      className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Name
        </label>

        <Input
          id="name"
          placeholder="John Doe"
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name.message}
          </p>
        )}

        {state.errors?.name?.map((error) => (
          <p
            key={error}
            className="text-sm text-red-500"
          >
            {error}
          </p>
        ))}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Email
        </label>

        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

        {state.errors?.email?.map((error) => (
          <p
            key={error}
            className="text-sm text-red-500"
          >
            {error}
          </p>
        ))}
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Subject
        </label>

        <Input
          id="subject"
          placeholder="How can we help?"
          {...register("subject")}
        />

        {errors.subject && (
          <p className="text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}

        {state.errors?.subject?.map((error) => (
          <p
            key={error}
            className="text-sm text-red-500"
          >
            {error}
          </p>
        ))}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Message
        </label>

        <Textarea
          id="message"
          rows={6}
          placeholder="Write your message..."
          {...register("message")}
        />

        {errors.message && (
          <p className="text-sm text-red-500">
            {errors.message.message}
          </p>
        )}

        {state.errors?.message?.map((error) => (
          <p
            key={error}
            className="text-sm text-red-500"
          >
            {error}
          </p>
        ))}
      </div>

      {/* Server Response */}
      {state.message && (
        <div
          className={`rounded-lg p-4 text-sm ${
            state.success
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {state.message}
        </div>
      )}

      <Button
        type="submit"
        loading={isPending}
        className="w-full"
      >
        Send Message
      </Button>
    </form>
  );
}