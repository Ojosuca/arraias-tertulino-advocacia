import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { ContactSubmissionSchema } from "@/shared/types";
const app = new Hono<{ Bindings: Env }>();

app.use("*", async (c, next) => {
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (c.req.method === "OPTIONS") {
    return c.text("", 200);
  }
  await next();
});

app.post("/api/contact", zValidator("json", ContactSubmissionSchema), async (c) => {
  try {
    const data = c.req.valid("json");
    
    // Insert into database
    await c.env.DB.prepare(`
      INSERT INTO contact_submissions (name, email, phone, subject, message, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).bind(
      data.name,
      data.email,
      data.phone || null,
      data.subject,
      data.message
    ).run();

    return c.json({ 
      success: true, 
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve." 
    });
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return c.json({ 
      success: false, 
      message: "Erro interno do servidor. Tente novamente mais tarde." 
    }, 500);
  }
});

app.get("/api/health", (c) => {
  return c.json({ status: "ok" });
});

export default app;
