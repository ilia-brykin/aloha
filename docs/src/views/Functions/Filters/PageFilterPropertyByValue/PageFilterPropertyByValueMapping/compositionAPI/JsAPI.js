import {
  filterPropertyByValue,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } });
// ${ filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } }) }
filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } });
// ${ filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } }) }`;

  return {
    codeJs,
  };
}
