import {
  filterUpperCase,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterUpperCase("--foo-bar--");
// ${ filterUpperCase("--foo-bar--") }

filterUpperCase("fooBar");
// ${ filterUpperCase("fooBar") }

filterUpperCase("__foo_bar__");
// ${ filterUpperCase("__foo_bar__") }`;

  return {
    codeJs,
  };
}
