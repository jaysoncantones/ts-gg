import { Hono } from "hono";

import { DBNeonConnect, tbl_ba_user } from "shared";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("", async (c) => {
  try {
    const db = DBNeonConnect(c.env.DATABASE_URL);
    const data = await db.select().from(tbl_ba_user).limit(2);
    return c.json({ data, error: null }, 200);
  } catch (error) {
    return c.json({ data: null, error: "Error" }, 200);
  }
});

app.post("", async (c) => {
  try {
    const db = DBNeonConnect(c.env.DATABASE_URL);
    const data = await db.select().from(tbl_ba_user).limit(2);
    return c.json({ data, error: null }, 200);
  } catch (error) {
    return c.json({ data: null, error: "Error" }, 200);
  }
});

export default app;
