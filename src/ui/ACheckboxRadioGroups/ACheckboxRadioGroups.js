import {
  h, resolveComponent,
} from "vue";

import DataAPI from "./compostionAPI/DataAPI";
import ComponentAPI from "./compostionAPI/ComponentAPI";
import ChangeModelAPI from "./compostionAPI/ChangeModelAPI";

export default {
  name: "ACheckboxRadioGroups",
  props: {
    type: {
      type: String,
      required: true,
      validator: type => ["radio", "checkbox"].indexOf(type) !== -1,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    dataGrouped: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    groupsForLever: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    groupParentKey: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    levelIndex: {
      type: Number,
      required: true,
    },
    id: {
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
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    isErrors: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "changeModelValue",
  ],
  setup(props, context) {
    const {
      onChangeModelValue,
    } = ChangeModelAPI(context);

    const {
      currentComponent,
    } = ComponentAPI(props);

    const {
      isComponentVisible,
      currentGroups,
    } = DataAPI(props);

    return {
      currentComponent,
      currentGroups,
      isComponentVisible,
      onChangeModelValue,
    };
  },
  render() {
    if (!this.isComponentVisible) {
      return "";
    }
    return [
      ...this.currentGroups.map((group, groupIndex) => {
        if (group.groupKey === "_not_grouped") {
          return h("div", null, [
            ...this.dataGrouped[group.allGroupKeys].map((item, itemIndex) => {
              return h(this.currentComponent, {
                id: `${ this.id }`,
                itemIndex,
                dataItem: item,
                modelValue: this.modelValue,
                disabled: this.disabled,
                slotName: this.slotName,
                isErrors: this.isErrors,
                isWidthAuto: this.isWidthAuto,
                onChangeModelValue: this.onChangeModelValue,
              }, this.$slots);
            }),
          ]);
        }
        return h("fieldset", {
          class: "a_fieldset",
        }, [
          h("legend", {
            class: "a_legend",
          }, group.groupLabel),
          ...(this.dataGrouped[group.allGroupKeys] || []).map((item, itemIndex) => {
            return h(this.currentComponent, {
              id: `${ this.id }_gr_${ groupIndex }`,
              itemIndex,
              dataItem: item,
              modelValue: this.modelValue,
              disabled: this.disabled,
              slotName: this.slotName,
              isErrors: this.isErrors,
              isWidthAuto: this.isWidthAuto,
              onChangeModelValue: this.onChangeModelValue,
            }, this.$slots);
          }),
          h(resolveComponent("ACheckboxRadioGroups"), {
            id: `${ this.id }_lev_${ this.levelIndex + 1 }_gr_${ groupIndex }`,
            dataGrouped: this.dataGrouped,
            disabled: this.disabled,
            groupsForLever: this.groupsForLever,
            groupParentKey: group.groupKey,
            isErrors: this.isErrors,
            isWidthAuto: this.isWidthAuto,
            levelIndex: this.levelIndex + 1,
            modelValue: this.modelValue,
            slotName: this.slotName,
            type: this.type,
            onChangeModelValue: this.onChangeModelValue,
          }, this.$slots)
        ]);
      }),
    ];
    // return h("fieldset", {
    //   id: this.groupId,
    //   class: [
    //     "a_fieldset",
    //   ],
    // }, [
    //   h("legend", {
    //     class: "a_legend",
    //   }, this.groupLabel),
    //   ...this.groupElements.map((item, itemIndex) => {
    //     return h(this.currentComponent, {
    //       id: this.groupId,
    //       itemIndex,
    //       dataItem: item,
    //       modelValue: this.modelValue,
    //       disabled: this.disabled,
    //       slotName: this.slotName,
    //       isErrors: this.isErrors,
    //       isWidthAuto: this.isWidthAuto,
    //       onChangeModelValue: this.onChangeModelValue,
    //     }, this.$slots);
    //   }),
    // ]);
  },
};
