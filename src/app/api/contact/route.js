// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // ✅ Validación básica en el backend
    if (
      !name ||
      !email ||
      !message ||
      name.length > 100 ||
      email.length > 100 ||
      message.length > 1000
    ) {
      return Response.json({ error: "Datos inválidos" }, { status: 400 });
    }

    // ✅ Nodemailer configurado con variables de entorno
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS0,
      },
    });

    // ✅ Enviar el mail
    await transporter.sendMail({
      from: `"Portfolio Web" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `Correo: ${email}\n\nMensaje:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    return Response.json({ error: "Error al enviar mensaje" }, { status: 500 });
  }
}
