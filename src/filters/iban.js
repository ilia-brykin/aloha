"use strict";
import {
  isString,
} from "lodash-es";

export default function(input, plain) {
  if (!input || !isString(input)) {
    return;
  }
  const sep = plain ? " " : "&nbsp;";

  let upper = input.replace(/&nbsp;/g, "").replace(/ /g, "");
  upper = upper.toUpperCase();

  let output = upper.substr(0, 4);
  for (let i = 4; i < upper.length; i += 4) {
    output += sep + upper.substr(i, 4);
  }
  return output;
}
