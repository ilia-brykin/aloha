import {
  isNil,
} from "lodash-es";

export default function(value, { searchModel = "", searchClass = "a_search_highlight" }) {
  if (!value) {
    return "";
  }
  if (searchModel === "" || isNil(searchModel)) {
    return value;
  }
  const RE = new RegExp(searchModel, "gi");
  return value.replace(RE, val => `<span class="${ searchClass }">${ val }</span>`);
}
