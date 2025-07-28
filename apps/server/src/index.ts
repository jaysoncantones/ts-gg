import { Hono } from "hono";

import users from "./users";

const app = new Hono();

app.route("/users", users);

export default app;
