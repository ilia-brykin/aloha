import {
  computed,
} from "vue";

import filterBoolean from "../../../../../../../src/filters/filterBoolean";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterBoolean(null, { useNil: true });
// ${ filterBoolean(null, { useNil: true }) }
filterBoolean(null, { useNil: false });
// ${ filterBoolean(null, { useNil: false }) }

filterBoolean(undefined, { useNil: true });
// ${ filterBoolean(undefined, { useNil: true }) }
filterBoolean(undefined, { useNil: false });
// ${ filterBoolean(undefined, { useNil: false }) }

filterBoolean("null", { useNil: true });
// ${ filterBoolean("null", { useNil: true }) }
filterBoolean("null", { useNil: false });
// ${ filterBoolean("null", { useNil: false }) }

filterBoolean("undefined", { useNil: true });
// ${ filterBoolean("undefined", { useNil: true }) }
filterBoolean("undefined", { useNil: false });
// ${ filterBoolean("undefined", { useNil: false }) }`;
  });

  return {
    codeJs,
  };
}
