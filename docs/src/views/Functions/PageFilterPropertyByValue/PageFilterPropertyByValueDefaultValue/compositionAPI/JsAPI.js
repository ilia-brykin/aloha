import filterPropertyByValue from "../../../../../../../src/filters/filterPropertyByValue";

export default function JsAPI() {
  const codeJs = `filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" });
// ${ filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" }) }
filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" });
// ${ filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" }) }`;

  return {
    codeJs,
  };
}
