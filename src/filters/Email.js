import {
  isNil,
} from "lodash-es";

export default function(value) {
  if (isNil(value)) {
    return "";
  }
  return `<a href="mailto:${ value }">${ value }</a>`;
}
