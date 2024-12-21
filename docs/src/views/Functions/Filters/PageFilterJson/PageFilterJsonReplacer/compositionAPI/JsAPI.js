import {
  filterJson,
} from "../../../../../../../../src";

export default function JsAPI() {
  function replacer(key, value) {
    // Filtering out properties
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  }

  const aloha = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7,
  };

  const codeJs = `function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const aloha = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

filterJson(aloha, { replacer });
// ${ filterJson(aloha, { replacer }) }

filterJson(aloha, { replacer: ["week", "month", "model"] });
// ${ filterJson(aloha, { replacer: ["week", "month", "model"] }) }`;

  return {
    codeJs,
  };
}
