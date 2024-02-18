import {
  isArrayOfStrings,
} from "../../../../../../../../src/utils/utils";

export default function JsAPI() {
  const codeJs = `isArrayOfStrings(["hello", "Aloha"]);
// ${ isArrayOfStrings(["hello", "Aloha"]) }

isArrayOfStrings("hello Aloha");
// ${ isArrayOfStrings("hello Aloha") }

isArrayOfStrings(["Aloha", 1]);
// ${ isArrayOfStrings(["Aloha", 1]) }
isArrayOfStrings(["Aloha", false]);
// ${ isArrayOfStrings(["Aloha", false]) }
isArrayOfStrings(["Aloha", undefined]);
// ${ isArrayOfStrings(["Aloha", undefined]) }
isArrayOfStrings(["Aloha", null]);
// ${ isArrayOfStrings(["Aloha", null]) }`;

  return {
    codeJs,
  };
}
