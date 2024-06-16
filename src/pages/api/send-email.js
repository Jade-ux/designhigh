import { createTransport } from "nodemailer";
// const nodemailer = require("nodemailer");
import dotenv from "dotenv";
dotenv.config();

export async function POST(event) {
  console.log("did the thing");
  if (event.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { message } = await event.request.json();

    const transporter = createTransport({
      service: "Gmail",
      auth: {
        user: "designhighstories@gmail.com",
        pass: "Hk4yA&n@0d$e",
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "New Message from Contact Form",
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
