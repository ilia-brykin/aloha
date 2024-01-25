import {
  forEach,
} from "lodash-es";

const TYPES = ["datepickerRange", "dateRange"];

export default TYPES;

const TYPES_MAP = {};
forEach(TYPES, type => {
  TYPES_MAP[type] = true;
});

export const typesMapDatepickerRange = TYPES_MAP;
