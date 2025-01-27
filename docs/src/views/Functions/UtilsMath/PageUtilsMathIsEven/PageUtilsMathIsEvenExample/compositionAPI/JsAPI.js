import {
  isEven,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `isEven(2);
// ${ isEven(2) }
isEven(0);
// ${ isEven(0) }
isEven(246);
// ${ isEven(246) }

isEven(-2);
// ${ isEven(-2) }

isEven(1);
// ${ isEven(1) }
isEven(3);
// ${ isEven(3) }
isEven(353);
// ${ isEven(353) }

isEven(-1);
// ${ isEven(-1) }

isEven(2.5);
// ${ isEven(2.5) }

isEven("Aloha");
// ${ isEven("Aloha") }
isEven(null);
// ${ isEven(null) }
isEven(undefined);
// ${ isEven(undefined) }`;

  return {
    codeJs,
  };
}
