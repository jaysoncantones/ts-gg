// import { Hono } from "hono";

// const UsersRPC = new Hono();

// // export const postUsersRoute = UsersRPC.post("/users");
// const usersRoutes = UsersRPC.get("/users").post("/users");
// export type UsersRPCType = typeof usersRoutes;
// // export type PostUsersRoute = typeof postUsersRoute;

import { Hono } from "hono";

const UsersRPC = new Hono();

// export const postUsersRoute = UsersRPC.post("/users");
const usersRoutes = UsersRPC.get("/users", (c) => {
  return c.json({
    message: "Get Users",
    data: [],
  });
});
export type UsersRPCType = typeof usersRoutes;
// export type PostUsersRoute = typeof postUsersRoute;
