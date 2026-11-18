import {
  computed,
} from "vue";

import {
  filterInitials,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterInitials("Ilia Brykin");
// ${ filterInitials("Ilia Brykin") }

filterInitials("Anna Maria Schmidt");
// ${ filterInitials("Anna Maria Schmidt") }

filterInitials("Anna-Lena Müller");
// ${ filterInitials("Anna-Lena Müller") }

filterInitials("Ölçer Ünal");
// ${ filterInitials("Ölçer Ünal") }

filterInitials("Max");
// ${ filterInitials("Max") }`;
  });

  return {
    codeJs,
  };
}
