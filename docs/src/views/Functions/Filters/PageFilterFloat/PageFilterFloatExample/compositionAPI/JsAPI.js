import filterFloat from "../../../../../../../../src/filters/filterFloat";

export default function JsAPI() {
  const codeJs = `filterFloat(123456);
// ${ filterFloat(123456) }

filterFloat("1000000.2345");
// ${ filterFloat("1000000.2345") }

filterFloat("aloha");
// ${ filterFloat("aloha") }

filterFloat(undefined);
// ${ filterFloat(undefined) }`;

  return {
    codeJs,
  };
}
