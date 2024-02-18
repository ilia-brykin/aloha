import {
  isOdd,
} from "../../../../../../../../src/utils/utilsMath";

export default function JsAPI() {
  const codeJs = `isOdd(1);
// ${ isOdd(1) }
isOdd(3);
// ${ isOdd(3) }
isOdd(245);
// ${ isOdd(245) }

isOdd(-1);
// ${ isOdd(-1) }

isOdd(2);
// ${ isOdd(2) }
isOdd(0);
// ${ isOdd(0) }
isOdd(352);
// ${ isOdd(352) }

isOdd(-2);
// ${ isOdd(-2) }

isOdd(2.5);
// ${ isOdd(2.5) }

isOdd("Aloha");
// ${ isOdd("Aloha") }
isOdd(null);
// ${ isOdd(null) }
isOdd(undefined);
// ${ isOdd(undefined) }`;

  return {
    codeJs,
  };
}
