import {
  getTotalNestedCount,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" });
// ${ getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" }) }

getTotalNestedCount({ array: [], keyChildren: "" });
// ${ getTotalNestedCount({ array: [], keyChildren: "" }) }

getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" });
// ${ getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" }) }

getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" });
// ${ getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" }) }`;

  return {
    codeJs,
  };
}
