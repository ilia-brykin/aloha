import {
  filterMask,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterMask("1234567812345678");
// ${ filterMask("1234567812345678") }

filterMask("9876543210", { chars: 3 });
// ${ filterMask("9876543210", { chars: 3 }) }

filterMask("secretData", { chars: 3, mask: "#" });
// ${ filterMask("secretData", { chars: 3, mask: "#" }) }

filterMask("abc", { chars: 4 });
// ${ filterMask("abc", { chars: 4 }) }

filterMask(null);
// ${ filterMask(null) }

filterMask(undefined);
// ${ filterMask(undefined) }

filterMask("");
// ${ filterMask("") }

filterMask("12345678", { chars: 0 });
// ${ filterMask("12345678", { chars: 0 }) }

filterMask("12345678", { chars: 10 });
// ${ filterMask("12345678", { chars: 10 }) }`;

  return {
    codeJs,
  };
}
