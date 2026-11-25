import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, servicio, mensaje } = body;

    // 👇 Debug: validar que la API Key se está leyendo
    console.log("API Key Brevo (primeros 10):", process.env.BREVO_API_KEY?.substring(0, 10));
    console.log("Sender configurado:", process.env.BREVO_SENDER);

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: process.env.BREVO_SENDER, name: "Centro de Ciencia" },
        to: [{ email: "centrodeciencia@ucaldas.edu.co" }],
        subject: `Nueva cotización: ${servicio || "Consulta general"}`,
        htmlContent: `
          <h2>Nueva solicitud de cotización</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Servicio:</strong> ${servicio}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `,
      }),
    });

    const data = await brevoResponse.json();

    if (!brevoResponse.ok) {
      throw new Error(JSON.stringify(data));
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error enviando correo con Brevo:", error);
    return NextResponse.json({ success: false, error });
  }
}
