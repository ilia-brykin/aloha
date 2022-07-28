import {
  isNil,
} from "lodash-es";

export default function(input, maxLength = 30) {
  if (isNil(input)) {
    return "";
  }
  if (input && input.length > maxLength) {
    input = input.slice(0, maxLength) + "...";
  }
  return input;
}
