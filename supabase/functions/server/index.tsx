import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a1c4eef0/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact submission endpoint
app.post("/make-server-a1c4eef0/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, title, email, contactMethod, contactValue, type, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const id = crypto.randomUUID();
    const submission = {
      id,
      name,
      title,
      email,
      contactMethod, // 'phone' | 'wechat'
      contactValue,
      type,
      message,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    // Store in KV
    // Key format: contact:{timestamp}:{uuid} to allow easy chronological sorting if needed later
    const key = `contact:${Date.now()}:${id}`;
    await kv.set(key, submission);

    return c.json({ success: true, id });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);