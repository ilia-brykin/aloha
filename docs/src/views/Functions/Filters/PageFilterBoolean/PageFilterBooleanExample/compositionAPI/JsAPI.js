import {
  computed,
} from "vue";

import filterBoolean from "../../../../../../../../src/filters/filterBoolean";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterBoolean(true);
// ${ filterBoolean(true) }
filterBoolean(false);
// ${ filterBoolean(false) }

filterBoolean(1);
// ${ filterBoolean(1) }
filterBoolean(0);
// ${ filterBoolean(0) }

filterBoolean("aloha");
// ${ filterBoolean("aloha") }
filterBoolean("");
// ${ filterBoolean("") }`;
  });

  return {
    codeJs,
  };
}
