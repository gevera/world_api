import { Static, Type } from "@sinclair/typebox";

export const Country = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  latitude: Type.Number(),
  longitude: Type.Number(),
  wikiDataId: Type.Union([Type.String(), Type.Null(), Type.Undefined()]),
});

export const State = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  latitude: Type.Union([Type.Number(), Type.Null()]),
  longitude: Type.Union([Type.Number(), Type.Null()]),
  country_id: Type.Number(),
  wikiDataId: Type.Union([Type.String(), Type.Null(), Type.Undefined()]),
  type: Type.Union([Type.String(), Type.Null(), Type.Undefined()]),
});

export const City = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  latitude: Type.Union([Type.Number(), Type.Null()]),
  longitude: Type.Union([Type.Number(), Type.Null()]),
  country_id: Type.Number(),
  state_id: Type.Number(),
  wikiDataId: Type.Union([Type.String(), Type.Null(), Type.Undefined()]),
});

export type CountryType = Static<typeof Country>;
export type StateType = Static<typeof State>;
export type CityType = Static<typeof City>;
