import {
  computed,
  h,
  toRef,
  withDirectives,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import ASafeHtml from "../../../directives/ASafeHtml";
import {
  AKeyLabel,
} from "../../../const/AKeys";


export default {
  name: "ASelectLabelElement",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
    labelNotFound: {
      type: String,
      required: false,
      default: undefined,
    },
    showNotFound: {
      type: Boolean,
      required: false,
      default: false,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "span",
    },
  },
  setup(props) {
    const data = toRef(props, "data");
    const labelNotFound = toRef(props, "labelNotFound");
    const showNotFound = toRef(props, "showNotFound");

    const currentLabel = computed(() => {
      if (AKeyLabel in data.value) {
        return data.value[AKeyLabel];
      }

      if (showNotFound.value) {
        return getTranslatedText({ placeholder: labelNotFound.value });
      }

      return "";
    });

    return {
      currentLabel,
    };
  },
  render() {
    return h(this.tag, {

    }, [
      this.slotName && this.$slots[this.slotName] ?
        this.$slots[this.slotName]({
          item: this.data,
          label: this.currentLabel,
          inDropdown: false,
        }) :
        withDirectives(h("span"), [
          [ASafeHtml, this.currentLabel],
        ]),
    ]);
  },
};
