import {
  h,
  resolveComponent,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import DataAPI from "./compostionAPI/DataAPI";
import ComponentAPI from "./compostionAPI/ComponentAPI";
import ChangeModelAPI from "./compostionAPI/ChangeModelAPI";

export default {
  name: "ACheckboxRadioGroups",
  props: {
    classButtonGroupDefault: {
      type: [String, Object, Array],
      required: false,
      default: "a_btn a_btn_outline_primary",
    },
    dataGrouped: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    groupParentKey: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    groupsForLever: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    hideParentWithSearch: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    isButtonGroup: {
      type: Boolean,
      required: false,
    },
    isErrors: {
      type: Boolean,
      required: false,
    },
    isHiddenWithSearch: {
      type: Boolean,
      required: false,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    keyDisabled: {
      type: String,
      required: false,
      default: undefined,
    },
    levelIndex: {
      type: Number,
      required: true,
    },
    modelSearch: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      required: false,
    },
    searching: {
      type: Boolean,
      required: false,
    },
    searchingElements: {
      type: Object,
      required: true,
    },
    searchingGroups: {
      type: Object,
      required: true,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: true,
      validator: type => ["radio", "checkbox", "select", "multiselect"].indexOf(type) !== -1,
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
      isComponentSelect,
    } = ComponentAPI(props);

    const {
      isComponentVisible,
      currentGroups,
    } = DataAPI(props);

    return {
      currentComponent,
      currentGroups,
      isComponentSelect,
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
        let styleWithSearch = undefined;
        let isHiddenWithSearch = false;
        if (this.searching) {
          const GROUP_KEY_ALL = `${ this.groupParentKey ? `${ this.groupParentKey }_` : "" }${ group.groupKey }`;
          if (this.isHiddenWithSearch || !this.searchingGroups[GROUP_KEY_ALL]) {
            styleWithSearch = "display: none;";
            isHiddenWithSearch = true;
          }
        }
        if (group.groupKey === "_not_grouped") {
          return h("div", {
            class: {
              a_btn_group: this.isButtonGroup,
            },
            style: styleWithSearch,
          }, [
            ...this.dataGrouped[group.allGroupKeys].map((item, itemIndex) => {
              return h(this.currentComponent, {
                id: `${ this.id }`,
                classButtonGroupDefault: this.isComponentSelect ? undefined : this.classButtonGroupDefault,
                dataItem: item,
                disabled: this.disabled,
                isButtonGroup: this.isComponentSelect ? undefined : this.isButtonGroup,
                isErrors: this.isComponentSelect ? undefined : this.isErrors,
                isHiddenWithSearch,
                isWidthAuto: this.isComponentSelect ? undefined : this.isWidthAuto,
                itemIndex,
                keyDisabled: this.keyDisabled,
                modelSearch: this.modelSearch,
                modelValue: this.modelValue,
                searching: this.searching,
                searchingElements: this.searchingElements,
                slotName: this.slotName,
                type: this.type,
                onChangeModelValue: this.onChangeModelValue,
              }, this.$slots);
            }),
          ]);
        }
        return h("fieldset", {
          class: "a_fieldset",
          style: styleWithSearch,
        }, [
          h(ATranslation, {
            tag: "legend",
            class: "a_legend",
            html: group.groupLabel,
          }),
          !!(this.dataGrouped[group.allGroupKeys] || []).length && h("div", {
            class: {
              a_btn_group: this.isButtonGroup,
            },
          }, [
            ...(this.dataGrouped[group.allGroupKeys] || []).map((item, itemIndex) => {
              return h(this.currentComponent, {
                id: `${ this.id }_gr_${ groupIndex }`,
                classButtonGroupDefault: this.isComponentSelect ? undefined : this.classButtonGroupDefault,
                dataItem: item,
                disabled: this.disabled,
                isButtonGroup: this.isComponentSelect ? undefined : this.isButtonGroup,
                isErrors: this.isComponentSelect ? undefined : this.isErrors,
                isHiddenWithSearch,
                isWidthAuto: this.isComponentSelect ? undefined : this.isWidthAuto,
                itemIndex,
                keyDisabled: this.keyDisabled,
                modelSearch: this.modelSearch,
                modelValue: this.modelValue,
                searching: this.searching,
                searchingElements: this.searchingElements,
                slotName: this.slotName,
                type: this.type,
                onChangeModelValue: this.onChangeModelValue,
              }, this.$slots);
            }),
          ]),

          h(resolveComponent("ACheckboxRadioGroups"), {
            id: `${ this.id }_lev_${ this.levelIndex + 1 }_gr_${ groupIndex }`,
            classButtonGroupDefault: this.classButtonGroupDefault,
            dataGrouped: this.dataGrouped,
            disabled: this.disabled,
            groupParentKey: group.groupKey,
            groupsForLever: this.groupsForLever,
            isButtonGroup: this.isButtonGroup,
            isErrors: this.isErrors,
            isHiddenWithSearch,
            isWidthAuto: this.isWidthAuto,
            keyDisabled: this.keyDisabled,
            levelIndex: this.levelIndex + 1,
            modelSearch: this.modelSearch,
            modelValue: this.modelValue,
            searching: this.searching,
            searchingElements: this.searchingElements,
            searchingGroups: this.searchingGroups,
            slotName: this.slotName,
            type: this.type,
            onChangeModelValue: this.onChangeModelValue,
          }, this.$slots)
        ]);
      }),
    ];
  },
};
