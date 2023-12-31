import filterBoolean from "../../../../../../../src/filters/filterBoolean";

export default function JsAPI() {
  const codeJs = `filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${ filterBoolean(true, { trueValue: "1", falseValue: "0" }) }
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${ filterBoolean(false, { trueValue: "1", falseValue: "0" }) }

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${ filterBoolean(1, { trueValue: "true", falseValue: "false" }) }
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${ filterBoolean(0, { trueValue: "true", falseValue: "false" }) }`;

  return {
    codeJs,
  };
}
