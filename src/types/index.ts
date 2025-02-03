import { Static, Type } from "@sinclair/typebox";

export const Country = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  latitude: Type.Number(),
  longitude: Type.Number(),
  wikiDataId: Type.Union([Type.String(), Type.Null()]),
});

export const State = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  latitude: Type.Number(),
  longitude: Type.Number(),
  country_id: Type.Number(),
  wikiDataId: Type.Union([Type.String(), Type.Null()]),
  type: Type.String(),
});

export type CountryType = Static<typeof Country>;
export type StateType = Static<typeof State>;
