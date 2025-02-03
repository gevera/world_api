import Elysia, { t } from "elysia";
import {
  queryCountries,
  queryCountryById,
  queryStates,
  queryStatesByCountryId,
} from "../db/queries";
import { Country, State } from "../types";

export const api = new Elysia({ prefix: "/api" })
  .get(
    "/start",
    () => {
      return {
        ok: true,
        data: {
          countries: queryCountries.all(),
          states: queryStates.all(),
        },
      };
    },
    {
      response: {
        ok: t.Boolean(),
        data: t.Object({
          countries: t.Array(Country),
          states: t.Array(State),
        }),
      },
    },
  )
  .get(
    "/countries",
    () => {
      return { ok: true, data: queryCountries.all() };
    },
    {
      response: t.Object({
        ok: t.Boolean(),
        data: t.Array(Country),
      }),
    },
  )
  .get(
    "/countries/:id",
    ({ params: { id } }) => {
      return { ok: true, data: queryCountryById.get({ $id: id }) };
    },
    {
      params: t.Object({
        id: t.Number(),
      }),
      response: t.Object({
        ok: t.Boolean(),
        data: Country,
      }),
    },
  )
  .get(
    "/states",
    () => {
      return { ok: true, data: queryStates.all() };
    },
    {
      response: t.Object({
        ok: t.Boolean(),
        data: t.Array(State),
      }),
    },
  )
  .get(
    "/states/:country_id",
    ({ params: { country_id } }) => {
      return {
        ok: true,
        data: queryStatesByCountryId.all({ $country_id: country_id }),
      };
    },
    {
      params: t.Object({
        country_id: t.Number(),
      }),
      response: {
        ok: t.Boolean(),
        data: t.Array(State),
      },
    },
  );
