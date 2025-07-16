import {
  computed,
  h,
  toRef,
} from "vue";
import {
  ATranslation,
} from "../../index";

import {
  isString,
} from "lodash-es";

export default {
  name: "AErrorsText",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const errors = toRef(props, "errors");
    const errorsLocal = computed(() => {
      if (isString(errors.value)) {
        return [errors.value];
      }
      return errors.value;
    });

    return {
      errorsLocal,
    };
  },
  render() {
    return h("ul", {
      id: this.id,
      class: "a_form_element__invalid_text",
    }, [
      this.errorsLocal.map(error => {
        return h(ATranslation, {
          tag: "li",
          html: error,
        });
      }),
    ]);
  },
};
