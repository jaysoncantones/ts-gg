import { Hono } from "hono";
const AppRPC = new Hono();

const route = AppRPC.get("/demo");

export { AppRPC };
export type AppRPCType = typeof route;
