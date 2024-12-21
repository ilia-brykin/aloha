import {
  filterFloat,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterFloat(2000, { digits: 0 });
// ${ filterFloat(2000, { digits: 0 }) }

filterFloat("25.53451", { digits: 4 });
// ${ filterFloat("25.53451", { digits: 4 }) }`;

  return {
    codeJs,
  };
}
