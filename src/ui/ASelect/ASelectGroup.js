import {
  computed,
  h, toRef,
} from "vue";

import ASelectElement from "./ASelectElement";

import AKeyId from "../const/AKeyId";
import { forEach } from "lodash-es";

export default {
  name: "ASelectGroup",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    elementsHiddenWithSearch: {
      type: Object,
      required: true,
    },
    groupElements: {
      type: Array,
      required: true,
    },
    groupIndex: {
      type: Number,
      required: true,
    },
    groupLabel: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isMultiselect: {
      type: Boolean,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
    modelSearch: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number, Array],
      required: false,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "changeModelValue",
  ],
  setup(props, { emit }) {
    const id = toRef(props, "id");
    const groupIndex = toRef(props, "groupIndex");

    const groupId = computed(() => {
      return `${ id.value }_group_${ groupIndex.value }`;
    });

    const modelSearch = toRef(props, "modelSearch");
    const elementsHiddenWithSearch = toRef(props, "elementsHiddenWithSearch");
    const groupElements = toRef(props, "groupElements");
    const isGroupVisibleWithSearch = computed(() => {
      if (!modelSearch.value) {
        return true;
      }
      let isVisible = false;
      forEach(groupElements.value, element => {
        if (!elementsHiddenWithSearch.value[element[AKeyId]]) {
          isVisible = true;
          return false;
        }
      });
      return isVisible;
    });

    const stylesGroup = computed(() => {
      return isGroupVisibleWithSearch.value ? "" : "display: none;";
    });

    const onChangeModelValue = arg => {
      emit("changeModelValue", arg);
    };

    return {
      groupId,
      onChangeModelValue,
      stylesGroup,
    };
  },
  render() {
    return h("div", {
      role: "group",
      ariaLabelledby: this.groupId,
      style: this.stylesGroup,
    }, [
      h("strong", {
        id: this.groupId,
      }, this.groupLabel),
      ...this.groupElements.map(item => {
        return h(ASelectElement, {
          data: item,
          modelValue: this.modelValue,
          modelSearch: this.modelSearch,
          isElementHiddenWithSearch: this.elementsHiddenWithSearch[item[AKeyId]],
          isSelected: false,
          isMultiselect: this.isMultiselect,
          disabled: this.disabled,
          slotName: this.slotName,
          onChangeModelValue: this.onChangeModelValue,
        }, this.$slots);
      }),
    ]);
  },
};
