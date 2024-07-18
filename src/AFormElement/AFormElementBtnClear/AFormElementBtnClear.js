import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import {
  h,
} from "vue";

export default {
  name: "AFormElementBtnClear",
  components: {
    AIcon,
    ATranslation,
  },
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    clearButtonClass: {
      type: [String, Object],
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "clear",
  ],
  methods: {
    clearLocal($event) {
      $event.stopPropagation();
      $event.preventDefault();
      this.$emit("clear", $event);
    },
  },
  render() {
    if (this.disabled) {
      return null;
    }
    return h("button", {
      class: ["a_form_element__btn_close", this.clearButtonClass],
      type: "button",
      tabindex: -1,
      ariaHidden: true,
      disabled: this.disabled,
      onClick: this.clearLocal,
    }, [
      h(ATranslation, {
        alwaysTranslate: this.alwaysTranslate,
        class: "a_position_absolute_all",
        tag: "span",
        title: "_REMOVE_FIELD_CONTENT_",
        "aria-hidden": "true",
      }),
      h(ATranslation, {
        alwaysTranslate: this.alwaysTranslate,
        class: "a_sr_only",
        tag: "span",
        text: "_REMOVE_FIELD_CONTENT_",
      }),
      h(AIcon, {
        class: "a_form_element__btn_close__icon",
        icon: "Close",
      }),
    ]);
  },
};
