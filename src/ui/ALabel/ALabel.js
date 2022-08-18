import {
  computed,
  h, toRef,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

const TYPES_FOR_FOCUS = {
  select: true,
  multiselect: true,
};

export default {
  name: "ALabel",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
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
  },
  setup(props) {
    const type = toRef(props, "type");
    const id = toRef(props, "id");
    const idLabel = computed(() => {
      return `${ id.value }_label`;
    });

    const onClick = () => {
      if (TYPES_FOR_FOCUS[type.value]) {
        const ELEMENT = document.getElementById(id.value);
        if (ELEMENT) {
          ELEMENT.focus();
        }
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
  },
  render() {
    return h("label", {
      id: this.idLabel,
      for: this.id,
      class: ["a_form_element_label", this.labelClass],
      onClick: this.onClick,
    }, [
      h(ATranslation, {
        tag: "span",
        text: this.label,
        textAfter: this.textAfterLabel,
      }),
    ]);
  },
};
