"use client";

import { useState, type FormEvent } from "react";
import { sendContactEmail } from "../actions/send-email";

type ContactFormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
};

type ContactFormProps = {
  text: {
    formTitle: string;
    formDescription: string;
    fields: ContactFormFields;
  };
};

export function ContactForm({ text }: ContactFormProps) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", senderEmail);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      await sendContactEmail(formData);
      setSubmitMessage("Message sent successfully!");
      setName("");
      setSenderEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error("Contact form error:", error);
      setSubmitMessage(`Failed to send message: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-3 pb-6 border-b border-slate-200">
        <h3 className="text-2xl font-black text-slate-950">{text.formTitle}</h3>
        <p className="leading-7 text-slate-600">{text.formDescription}</p>
      </div>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">{text.fields.name}</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={text.fields.name}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">{text.fields.email}</span>
            <input
              type="email"
              value={senderEmail}
              onChange={(event) => setSenderEmail(event.target.value)}
              placeholder={text.fields.email}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">{text.fields.subject}</span>
          <input
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder={text.fields.subject}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">{text.fields.message}</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={text.fields.message}
            rows={6}
            required
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        {submitMessage && (
          <p className={`text-sm ${submitMessage.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {submitMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-xl bg-sky-700 px-6 py-4 text-center font-black text-white transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : text.fields.submit}
        </button>
      </form>
    </div>
  );
}
