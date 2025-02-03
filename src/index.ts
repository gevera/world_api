import { Elysia } from "elysia";
import { api } from "./api";

const app = new Elysia()
  .guard(
    {
      beforeHandle({ set, headers, error }) {
        // if (!validateSession(session.value)) return error(401)
        const SK = process.env.SECRET_KEY;
        if (!SK) {
          return error(401, { ok: false, error: "Unauthorized" });
        }

        const authHeader = headers["authorization"];

        if (!authHeader || authHeader !== SK) {
          return error(401, { ok: false, error: "Unauthorized" });
        }
      },
    },
    (app) => app.use(api),
  )

  // .use(api)
  .get("/", (c) => {
    return { ok: true };
  })
  .get("/health", () => {
    return { ok: true };
  })
  .get("*", ({ error }) => {
    return error(404, { ok: false });
  })
  .listen(parseInt(process.env.PORT ?? "3000"));

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
