import { Resend } from "resend";

let resend: Resend | null = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  if (!resend) {
    resend = new Resend(apiKey);
  }

  return resend;
}

export async function sendLeadEmails({
  leadType,
  fullName,
  email,
  company,
  topic
}: {
  leadType: string;
  fullName: string;
  email: string;
  company: string;
  topic: string;
}) {
  const client = getResend();
  const from = process.env.RESEND_FROM_EMAIL || "PANIFIKA EXPO <onboarding@resend.dev>";
  const staffEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

  if (!client) {
    return;
  }

  const tasks = [];

  if (email) {
    tasks.push(
      client.emails.send({
        from,
        to: email,
        subject: "PANIFIKA EXPO - demande recue",
        html: `
          <div style="font-family:Arial,sans-serif;background:#120a05;color:#f5dfb6;padding:28px">
            <div style="max-width:620px;margin:auto;background:#1b0f09;border:1px solid #e9a81755;border-radius:14px;padding:24px">
              <h1 style="color:#ffd94a;margin:0 0 12px">PANIFIKA EXPO</h1>
              <p>Bonjour ${fullName || ""},</p>
              <p>Merci pour votre demande concernant <strong>${leadType}</strong>. L'equipe PANIFIKA EXPO reviendra vers vous avec les prochaines informations.</p>
              <p><strong>Societe:</strong> ${company || "-"}<br/><strong>Sujet:</strong> ${topic || "-"}</p>
              <p style="color:#e9a817">La pate dans tous ses etats.</p>
            </div>
          </div>
        `
      })
    );
  }

  if (staffEmail) {
    tasks.push(
      client.emails.send({
        from,
        to: staffEmail,
        subject: `New PANIFIKA lead - ${leadType}`,
        html: `
          <div style="font-family:Arial,sans-serif">
            <h2>New ${leadType} lead</h2>
            <p><strong>Name:</strong> ${fullName || "-"}</p>
            <p><strong>Email:</strong> ${email || "-"}</p>
            <p><strong>Company:</strong> ${company || "-"}</p>
            <p><strong>Topic:</strong> ${topic || "-"}</p>
          </div>
        `
      })
    );
  }

  const results = await Promise.allSettled(tasks);
  const failed = results.find((result) => result.status === "rejected");

  if (failed) {
    console.error("Resend notification failed", failed);
  }
}
