import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { Card } from "@/components/common/Card";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Blog Management team for questions, feedback, or collaboration.",
  openGraph: {
    title: "Contact | Blog Management",
    description:
      "Get in touch with the Blog Management team for questions, feedback, or collaboration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Blog Management",
    description:
      "Get in touch with the Blog Management team for questions, feedback, or collaboration.",
  },
};

const contactDetails = [
  {
    title: "Email",
    value: "hello@blogmanagement.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+91 98765 43210",
    icon: Phone,
  },
  {
    title: "Address",
    value: "Panchkula, Haryana, India",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Monday – Friday • 9:00 AM – 6:00 PM",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <Container className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
          Contact
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Let&apos;s Start a Conversation
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Have a question, feedback, or an idea to discuss?
          We&apos;d love to hear from you. Fill out the form below
          and we&apos;ll get back to you as soon as possible.
        </p>
      </section>

      {/* Divider */}
      <div className="my-12 h-px bg-slate-200 dark:bg-slate-800" />

      {/* Content */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Contact Information
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Reach out using any of the following details.
              We usually respond within one business day.
            </p>
          </div>

          <div className="space-y-5">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="flex items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.value}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Send Us a Message
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Complete the form below and we&apos;ll respond as
              quickly as possible.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </Container>
  );
}