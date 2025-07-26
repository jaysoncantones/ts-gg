import { hc } from "hono/client";
import { AppRPCType, TblBAUser } from "shared";

export const getUserRPC = async () => {
  const client = hc<AppRPCType>("http://localhost:8787/");
  const res = await client.demo.$get();
  const result = await res.json();
  const { data, success, error } = TblBAUser.safeParse(result);
  if (error) throw new Error("json object format");
  if (success) {
    if (data.error) throw new Error(data.error);
    if (data.data) return data.data;
  }
};
