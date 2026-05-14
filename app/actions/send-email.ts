"use server";

import { Resend } from "resend";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const resend = new Resend(apiKey);
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "developmentfortest1@gmail.com";

  try {
    await resend.emails.send({
      from: "Ultra Nova Contact <onboarding@resend.dev>",
      to: receiverEmail,
      subject: subject || `Contact request from ${name}`,
      html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email");
  }
}