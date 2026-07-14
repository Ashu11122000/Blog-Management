import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

import { Card } from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Blog Management team for questions, feedback, collaboration, or business inquiries.",
  keywords: [
    "Contact",
    "Support",
    "Feedback",
    "Help",
    "Blog Management",
    "Next.js",
    "React",
    "TypeScript",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Blog Management",
    description:
      "Get in touch with the Blog Management team for questions, feedback, collaboration, or business inquiries.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Blog Management",
    description:
      "Get in touch with the Blog Management team for questions, feedback, collaboration, or business inquiries.",
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
    <main className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <Container>
        {/* Hero */}
        <section className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-12 text-center shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 lg:px-12 lg:py-16">
          <Badge className="mb-5">
            <MessageSquare className="mr-1 h-3.5 w-3.5" />
            Contact Us
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Start a Conversation
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Have a question, feedback, partnership opportunity, or simply want
            to say hello? We&apos;d love to hear from you. Send us a message and our
            team will get back to you as soon as possible.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <Mail className="mx-auto h-6 w-6 text-primary" />

              <p className="mt-3 text-3xl font-bold">&lt;24h</p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Average Response
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <Send className="mx-auto h-6 w-6 text-primary" />

              <p className="mt-3 text-3xl font-bold">100%</p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Messages Reviewed
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <Clock className="mx-auto h-6 w-6 text-primary" />

              <p className="mt-3 text-3xl font-bold">5 Days</p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Weekly Support
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr]">

                    {/* Contact Information */}
          <div>
            <div className="mb-8">
              <Badge className="mb-4">
                <Phone className="mr-1 h-3.5 w-3.5" />
                Get in Touch
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Contact Information
              </h2>

              <p className="mt-3 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-400">
                Whether you have a technical question, feedback, feature request,
                or collaboration idea, we&apos;re always happy to connect. Choose the
                method that works best for you.
              </p>
            </div>

            <div className="space-y-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={item.title}
                    className="group rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 break-words text-sm leading-7 text-slate-600 dark:text-slate-400">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Support Card */}
            <Card className="mt-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 shadow-lg dark:border-primary/30 dark:from-primary/10 dark:to-primary/5">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MessageSquare className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Need Quick Assistance?
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Most questions receive a reply within one business day.
                    Whether it&apos;s feedback, technical support, or a collaboration
                    inquiry, we&apos;re committed to providing a helpful and timely
                    response.
                  </p>
                </div>
              </div>
            </Card>
          </div>

                    {/* Contact Form */}
          <div>
            <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 lg:p-10">
              <div className="mb-8">
                <Badge className="mb-4">
                  <Send className="mr-1 h-3.5 w-3.5" />
                  Send a Message
                </Badge>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  We&apos;d Love to Hear From You
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-400">
                  Complete the form below and we&apos;ll get back to you as soon as
                  possible. Whether it&apos;s a question, suggestion, partnership, or
                  technical issue, we&apos;re here to help.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Bottom CTA */}
            <Card className="mt-8 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 shadow-lg dark:border-primary/30 dark:from-primary/10 dark:via-primary/5 dark:to-primary/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Thank You for Reaching Out
                </h3>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                  Every message is important to us. We appreciate your feedback,
                  questions, and ideas, and we&apos;ll do our best to provide a
                  thoughtful response as quickly as possible.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}