"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { site } from "@/data/site";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Website inquiry from ${data.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Service interest: ${data.service}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-brand-dark">
          Name
          <input
            className="focus-ring rounded-md border border-slate-200 px-4 py-3 text-brand-ink"
            {...register("name", { required: true })}
            aria-invalid={Boolean(errors.name)}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-dark">
          Email
          <input
            type="email"
            className="focus-ring rounded-md border border-slate-200 px-4 py-3 text-brand-ink"
            {...register("email", { required: true })}
            aria-invalid={Boolean(errors.email)}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-dark">
          Phone
          <input
            className="focus-ring rounded-md border border-slate-200 px-4 py-3 text-brand-ink"
            {...register("phone")}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-dark">
          Service Interest
          <select className="focus-ring rounded-md border border-slate-200 px-4 py-3 text-brand-ink" {...register("service")}>
            <option>Infrastructure Management</option>
            <option>Cybersecurity</option>
            <option>Cloud Solutions</option>
            <option>Managed Services</option>
            <option>IT Consulting</option>
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-brand-dark">
        Message
        <textarea
          className="focus-ring min-h-32 rounded-md border border-slate-200 px-4 py-3 text-brand-ink"
          {...register("message", { required: true })}
          aria-invalid={Boolean(errors.message)}
        />
      </label>
      {submitted ? (
        <p className="mt-4 rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          Your email app should open with the inquiry addressed to {site.email}. Send it from there to complete your request.
        </p>
      ) : null}
      <button
        type="submit"
        className="button-ripple mt-6 inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 font-bold text-white shadow-soft"
      >
        Send Inquiry <Send size={18} aria-hidden />
      </button>
    </form>
  );
}
