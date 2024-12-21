import {
  filterLowerCase,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterLowerCase("--Foo-Bar--");
// ${ filterLowerCase("--Foo-Bar--") }

filterLowerCase("fooBar");
// ${ filterLowerCase("fooBar") }

filterLowerCase("__FOO_BAR__");
// ${ filterLowerCase("__FOO_BAR__") }`;

  return {
    codeJs,
  };
}
