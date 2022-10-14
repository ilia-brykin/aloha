import {
  computed,
  h,
  toRef,
} from "vue";

import ASpinner from "../../ASpinner/ASpinner";
import ATranslation from "../../ATranslation/ATranslation";

import {
  isFunction,
  isNil,
} from "lodash-es";


export default {
  name: "ALabel",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
    },
    clickLabel: {
      type: Function,
      required: false,
      default: undefined,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    isIdVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const id = toRef(props, "id");
    const idLabel = computed(() => {
      return `${ id.value }_label`;
    });

    const clickLabel = toRef(props, "clickLabel");
    const onClick = $event => {
      if (isFunction(clickLabel.value)) {
        clickLabel.value();
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    return {
      idLabel,
      onClick,
    };
  },
  computed: {
    textAfterLabel() {
      return this.required ? "*" : "";
    },

    isLabel() {
      return !isNil(this.label);
    },

    idObject() {
      const ID_OBJECT = {};
      if (this.isIdVisible) {
        ID_OBJECT.id = this.idLabel;
      }
      return ID_OBJECT;
    },
  },
  render() {
    return h("label", {
      for: this.id,
      class: ["a_form_element_label", this.labelClass],
      onClick: this.onClick,
      ...this.idObject,
    }, [
      this.isLabel && h(ATranslation, {
        tag: "span",
        text: this.label,
        textAfter: this.textAfterLabel,
      }, [
        this.isLabelFloat && h(ATranslation, {
          class: "a_position_absolute_all",
          ariaHidden: true,
          tag: "span",
          title: this.label,
        })
      ]),
      this.loading && h(ASpinner, {
        class: "a_spinner_small a_form_element_label__spinner",
      }),
    ]);
  },
};
