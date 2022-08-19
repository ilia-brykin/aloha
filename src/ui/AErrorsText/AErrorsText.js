import {
  computed,
  h,
  toRef,
} from "vue";

import {
  isString,
} from "lodash-es";

export default {
  name: "AErrorsText",
  props: {
    id: {
      type: String,
      required: true,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
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
        return h("li", null, error);
      }),
    ]);
  },
};
