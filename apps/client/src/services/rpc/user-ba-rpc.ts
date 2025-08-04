import { hc } from "hono/client";
import { UsersRPCType, TblBAUser } from "shared";

export const getUsersRPC = async () => {
  const client = hc<UsersRPCType>("http://localhost:8787/");
  const res = await client.users.$get();
  const result = await res.json();
  const { data, success, error } = TblBAUser.safeParse(result);
  if (error) throw new Error("json object format");
  if (success) {
    if (data.error) throw new Error(data.error);
    if (data.data) return data.data;
  }
};
