import { Hono } from "hono";
const demoApp = new Hono();

const route = demoApp.get("/demo", (c) => {
  return c.json({ data: `Hello Hono!` }, 200);
});

export { demoApp };
export type DemoAppType = typeof route;
