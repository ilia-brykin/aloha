import {
  filterFloat,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterFloat(2000, { suffix: "€" });
// ${ filterFloat(2000, { suffix: "€" }) }

filterFloat("25.5", { suffix: "%" });
// ${ filterFloat("25.5", { suffix: "%" }) }`;

  return {
    codeJs,
  };
}
