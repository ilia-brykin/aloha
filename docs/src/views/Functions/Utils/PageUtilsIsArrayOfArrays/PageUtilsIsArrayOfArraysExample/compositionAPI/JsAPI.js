import {
  isArrayOfArrays,
} from "../../../../../../../../src/utils/utils";

export default function JsAPI() {
  const codeJs = `isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// ${ isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) }
isArrayOfArrays([[], [], []]);
// ${ isArrayOfArrays([[], [], []]) }

isArrayOfArrays([1, 2, 3]);
// ${ isArrayOfArrays([1, 2, 3]) }

isArrayOfArrays([]);
// ${ isArrayOfArrays([]) }
isArrayOfArrays("Aloha");
// ${ isArrayOfArrays("Aloha") }
isArrayOfArrays(1);
// ${ isArrayOfArrays(1) }
isArrayOfArrays(undefined);
// ${ isArrayOfArrays(undefined) }
isArrayOfArrays(null);
// ${ isArrayOfArrays(null) }
isArrayOfArrays({});
// ${ isArrayOfArrays({}) }

isArrayOfArrays([[1, 2, 3], "This is not an array", [7, 8, 9]]);
// ${ isArrayOfArrays([[1, 2, 3], "This is not an array", [7, 8, 9]]) }`;

  return {
    codeJs,
  };
}
