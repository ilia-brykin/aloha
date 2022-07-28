import {
  reduce,
} from "lodash-es";

export default function(value) {
  if (!value) {
    return "";
  }
  return reduce(value, (sum, v, key) => `${ sum }${ sum ? ", " : "" }${ key }: ${ v }`, "");
}
