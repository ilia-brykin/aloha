import {
  filterLimitTo,
} from "aloha-vue";

export default function JsAPI() {
  const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

  const codeJs = `const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

filterList(TEXT);
// ${ filterLimitTo(TEXT) }

filterList(TEXT, { limit: 10 });
// ${ filterLimitTo(TEXT, { limit: 10 }) }

filterList(TEXT, { limit: 100 });
// ${ filterLimitTo(TEXT, { limit: 100 }) }`;

  return {
    codeJs,
  };
}
