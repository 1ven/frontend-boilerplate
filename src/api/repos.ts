import { map, prop } from "ramda";
import { createSelector } from "reselect";
import { Maybe } from "ramda-fantasy";
import { safe } from "core/redux";
import { select } from "core/api";

type Repo = {
  id: number;
  full_name: string;
  name: string;
};

export default {
  url: "/users/:name/repos",
  method: "GET"
};

export const getEntry = api => api.repos;
