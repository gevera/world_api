import { Database } from "bun:sqlite";
import worldDatabase from "./world.db" with { type: "sqlite", embed: "true" };
export const wdb = worldDatabase;
// export const db = new Database(worldDatabase, { readonly: true });
