import {
  isNil,
} from "lodash-es";

export default function(value, { param = "http://", target = "_blank" } = {}) {
  if (isNil(value)) {
    return "";
  }
  let paramLocal = param;
  if (value.indexOf("https://") !== -1 || value.indexOf("http://") !== -1) {
    paramLocal = "";
  }
  return `<a href="${ paramLocal }${ value }" target="${ target }">${ value }</a>`;
}
