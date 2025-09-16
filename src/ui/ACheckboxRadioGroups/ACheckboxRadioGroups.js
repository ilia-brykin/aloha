import {
  h,
  resolveComponent,
} from "vue";

import ACheckboxLegend from "../ACheckbox/ACheckboxLegend/ACheckboxLegend";

import ChangeModelAPI from "./compostionAPI/ChangeModelAPI";
import ComponentAPI from "./compostionAPI/ComponentAPI";
import DataAPI from "./compostionAPI/DataAPI";

export default {
  name: "ACheckboxRadioGroups",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
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
    hasControlCheckbox: {
      type: Boolean,
      required: false,
      default: false,
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
    keyDisabledCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    keyTitleCallback: {
      type: Function,
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
    modelValueObj: {
      type: Object,
      required: false,
      default: undefined,
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
    searchingGroupsWithSearchInGroup: {
      type: Object,
      required: true,
    },
    searchTextInHtml: {
      type: Boolean,
      required: false,
    },
    slotAppendName: {
      type: String,
      required: false,
      default: undefined,
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
      return null;
    }
    return [
      ...this.currentGroups.map((group, groupIndex) => {
        let styleWithSearch = undefined;
        let isHiddenWithSearch = false;
        let showElementWennGroupFound = false;
        if (this.searching) {
          const GROUP_KEY_ALL = `${ this.groupParentKey ? `${ this.groupParentKey }_` : "" }${ group.groupKey }`;
          showElementWennGroupFound = this.searchingGroupsWithSearchInGroup[GROUP_KEY_ALL];
          if (this.isHiddenWithSearch ||
            (!this.searchingGroups[GROUP_KEY_ALL] &&
              !showElementWennGroupFound)) {
            styleWithSearch = "display: none;";
            isHiddenWithSearch = true;
          }
        }
        if (group.groupKey === "_not_grouped") {
          return h("div", {
            class: [
              "a_checkbox_radio_group__data",
              {
                a_btn_group: this.isButtonGroup,
              },
            ],
            style: styleWithSearch,
          }, [
            ...this.dataGrouped[group.allGroupKeys].map((item, itemIndex) => {
              return h(this.currentComponent, {
                id: `${ this.id }`,
                alwaysTranslate: this.alwaysTranslate,
                classButtonGroupDefault: this.isComponentSelect ? undefined : this.classButtonGroupDefault,
                dataItem: item,
                disabled: this.disabled,
                isButtonGroup: this.isComponentSelect ? undefined : this.isButtonGroup,
                isErrors: this.isComponentSelect ? undefined : this.isErrors,
                isHiddenWithSearch,
                isWidthAuto: this.isComponentSelect ? undefined : this.isWidthAuto,
                itemIndex,
                keyDisabled: this.keyDisabled,
                keyDisabledCallback: this.keyDisabledCallback,
                keyTitle: this.keyTitle,
                keyTitleCallback: this.keyTitleCallback,
                modelSearch: this.modelSearch,
                modelValue: this.modelValue,
                searching: this.searching,
                searchingElements: this.searchingElements,
                searchTextInHtml: this.searchTextInHtml,
                showElementWennGroupFound,
                slotAppendName: this.slotAppendName,
                slotName: this.slotName,
                type: this.type,
                onChangeModelValue: this.onChangeModelValue,
              }, this.$slots);
            }),
          ]);
        }
        return h("fieldset", {
          class: "a_fieldset a_fieldset_with_legend",
          style: styleWithSearch,
        }, [
          h(ACheckboxLegend, {
            id: `${ this.id }_lev_${ this.levelIndex + 1 }_gr_${ groupIndex }`,
            alwaysTranslate: this.alwaysTranslate,
            data: group.data,
            dataKeyByKeyId: group.dataKeyByKeyId,
            disabled: this.disabled,
            hasControlCheckbox: this.hasControlCheckbox,
            isErrors: this.isErrors,
            label: group.groupLabel,
            modelSearch: this.modelSearch,
            modelValue: this.modelValue,
            modelValueObj: this.modelValueObj,
            showSearchHighlight: showElementWennGroupFound,
            onChangeModelValue: this.onChangeModelValue,
          }),
          h("div", {
            id: `${ this.id }_lev_${ this.levelIndex + 1 }_gr_${ groupIndex }_group`,
            "aria-labelledby": `${ this.id }_lev_${ this.levelIndex + 1 }_gr_${ groupIndex }_legend`,
            role: "group",
          }, [
            !!(this.dataGrouped[group.allGroupKeys] || []).length && h("div", {
              class: [
                "a_checkbox_radio_group__data",
                {
                  a_btn_group: this.isButtonGroup,
                },
              ],
            }, [
              ...(this.dataGrouped[group.allGroupKeys] || []).map((item, itemIndex) => {
                return h(this.currentComponent, {
                  id: `${ this.id }_gr_${ groupIndex }`,
                  alwaysTranslate: this.alwaysTranslate,
                  classButtonGroupDefault: this.isComponentSelect ? undefined : this.classButtonGroupDefault,
                  dataItem: item,
                  disabled: this.disabled,
                  isButtonGroup: this.isComponentSelect ? undefined : this.isButtonGroup,
                  isErrors: this.isComponentSelect ? undefined : this.isErrors,
                  isHiddenWithSearch,
                  isWidthAuto: this.isComponentSelect ? undefined : this.isWidthAuto,
                  itemIndex,
                  keyDisabled: this.keyDisabled,
                  keyDisabledCallback: this.keyDisabledCallback,
                  keyTitle: this.keyTitle,
                  keyTitleCallback: this.keyTitleCallback,
                  modelSearch: this.modelSearch,
                  modelValue: this.modelValue,
                  searching: this.searching,
                  searchingElements: this.searchingElements,
                  searchTextInHtml: this.searchTextInHtml,
                  showElementWennGroupFound: showElementWennGroupFound,
                  slotAppendName: this.slotAppendName,
                  slotName: this.slotName,
                  type: this.type,
                  onChangeModelValue: this.onChangeModelValue,
                }, this.$slots);
              }),
            ]),
            h(resolveComponent("ACheckboxRadioGroups"), {
              id: `${ this.id }_lev_${ this.levelIndex + 1 }_gr_${ groupIndex }`,
              alwaysTranslate: this.alwaysTranslate,
              classButtonGroupDefault: this.classButtonGroupDefault,
              dataGrouped: this.dataGrouped,
              disabled: this.disabled,
              groupParentKey: group.groupKey,
              groupsForLever: this.groupsForLever,
              hasControlCheckbox: this.hasControlCheckbox,
              isButtonGroup: this.isButtonGroup,
              isErrors: this.isErrors,
              isHiddenWithSearch,
              isWidthAuto: this.isWidthAuto,
              keyDisabled: this.keyDisabled,
              keyDisabledCallback: this.keyDisabledCallback,
              keyTitle: this.keyTitle,
              keyTitleCallback: this.keyTitleCallback,
              levelIndex: this.levelIndex + 1,
              modelSearch: this.modelSearch,
              modelValue: this.modelValue,
              modelValueObj: this.modelValueObj,
              searching: this.searching,
              searchingElements: this.searchingElements,
              searchingGroups: this.searchingGroups,
              searchingGroupsWithSearchInGroup: this.searchingGroupsWithSearchInGroup,
              searchTextInHtml: this.searchTextInHtml,
              slotName: this.slotName,
              slotAppendName: this.slotAppendName,
              type: this.type,
              onChangeModelValue: this.onChangeModelValue,
            }, this.$slots),
          ]),
        ]);
      }),
    ];
  },
};
