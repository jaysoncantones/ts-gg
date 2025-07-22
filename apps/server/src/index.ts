import { Hono } from "hono";

import { DBNeonConnect, schema } from "shared";

const demoApp = new Hono<{ Bindings: CloudflareBindings }>();

const app = demoApp.get("/demo", async (c) => {
  try {
    const db = DBNeonConnect(c.env.DATABASE_URL);
    const data = await db.select().from(schema.tbl_ba_user);
    return c.json({ data, error: null }, 200);
  } catch (error) {
    return c.json({ data: null, error: "Error" }, 200);
  }
});

export default app;
