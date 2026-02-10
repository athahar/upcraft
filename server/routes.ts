import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getResendClient } from "./resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, tier, q1, q2 } = req.body;

      if (!name || !email || !tier) {
        return res.status(400).json({ error: "Name, email, and tier are required." });
      }

      const { client, fromEmail } = await getResendClient();

      const q1Text = Array.isArray(q1) && q1.length > 0
        ? q1.map((item: string) => `  • ${item}`).join("\n")
        : "  (No selection)";

      const htmlBody = `
        <h2>New Project Inquiry: ${tier}</h2>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Timeline:</strong> ${q2 || "(Not specified)"}</p>
        <br />
        <p><strong>What do they have today?</strong></p>
        <ul>
          ${Array.isArray(q1) ? q1.map((item: string) => `<li>${item}</li>`).join("") : "<li>(No selection)</li>"}
        </ul>
      `;

      await client.emails.send({
        from: fromEmail,
        to: "hello@upcraft.xyz",
        replyTo: email,
        subject: `Project Inquiry: ${tier} — ${name}`,
        html: htmlBody,
      });

      return res.json({ success: true });
    } catch (error: any) {
      console.error("Email send error:", error);
      return res.status(500).json({ error: "Failed to send email. Please try again." });
    }
  });

  return httpServer;
}
