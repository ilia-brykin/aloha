import {
  forEach,
} from "lodash-es";

const TYPES = ["numberRange", "integerNonNegativeRange", "integerPositiveRange", "integerRange"];
// "float", "floatPositiv", "floatNonNegative"

export default TYPES;

const TYPES_MAP = {};
forEach(TYPES, type => {
  TYPES_MAP[type] = true;
});

export const typesMapInputNumberRange = TYPES_MAP;
