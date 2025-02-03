import { wdb } from ".";

export const queryCountries = wdb.prepare(
  `select id, name, latitude, longitude, "wikiDataId" from countries ORDER BY name;`,
);
export const queryCountryById = wdb.prepare(
  `select id, name, latitude, longitude, "wikiDataId" from countries WHERE id = $id LIMIT 1;`,
);

export const queryStates = wdb.prepare(
  `select id, name, latitude, longitude, country_id, "wikiDataId", type from states WHERE type IS NOT 'city' ORDER BY name;`,
);
export const queryStatesByCountryId = wdb.prepare(
  `select id, name, latitude, longitude, country_id, "wikiDataId", type from states WHERE type IS NOT 'city' AND country_id = $country_id;`,
);

export const totalStates = wdb.prepare(
  `select count(*) FROM states WHERE type IS NOT 'city';`,
);
