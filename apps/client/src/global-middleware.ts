// app/global-middleware.ts
import { registerGlobalMiddleware } from "@tanstack/react-start";
import { loggingMiddleware } from "~/services/middlewares/example";

registerGlobalMiddleware({
  middleware: [loggingMiddleware],
});
