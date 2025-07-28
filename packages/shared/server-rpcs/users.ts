import { Hono } from "hono";

const UsersRPC = new Hono();

const getUsersRoute = UsersRPC.get("/users");
const postUsersRoute = UsersRPC.post("/users");

export type GetUsersRoute = typeof getUsersRoute;
export type PostUsersRoute = typeof postUsersRoute;
