import { createMiddleware } from "@tanstack/react-start";

export const loggingMiddleware = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    console.log("Request sent");
    const result = await next();
    console.log("Response received");
    return result;
  }
);
