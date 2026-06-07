import {
  h,
  resolveComponent,
} from "vue";
import {
  ATranslation,
} from "../index";

import ADropdownAction from "./ADropdownAction/ADropdownAction";

export default {
  name: "ADropdownGroup",
  props: {
    actions: {
      type: Array,
      required: true,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    dropdownId: {
      type: String,
      required: true,
    },
    levelIndex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  render() {
    return this.actions.map((action, actionIndex) => {
      if (action.__isDropdownGroup) {
        if (!action.groupLabel) {
          return h(resolveComponent("ADropdownGroup"), {
            key: `group_${ this.levelIndex }_${ actionIndex }`,
            actions: action.children,
            alwaysTranslate: this.alwaysTranslate,
            dropdownId: this.dropdownId,
            levelIndex: this.levelIndex + 1,
          }, this.$slots);
        }

        const labelId = `${ this.dropdownId }_group_${ this.levelIndex }_${ actionIndex }`;

        return h("li", {
          key: `group_${ this.levelIndex }_${ actionIndex }`,
          class: [
            "a_dropdown__group",
            `a_dropdown__group_level_${ this.levelIndex }`,
          ],
        }, [
          h(ATranslation, {
            id: labelId,
            alwaysTranslate: this.alwaysTranslate,
            class: [
              "a_dropdown__group__label",
              "a_dropdown__item_header",
            ],
            html: action.groupLabel,
            tag: "div",
          }),
          h("ul", {
            class: "a_dropdown__group__list",
            "aria-labelledby": labelId,
          }, [
            h(resolveComponent("ADropdownGroup"), {
              actions: action.children,
              alwaysTranslate: this.alwaysTranslate,
              dropdownId: this.dropdownId,
              levelIndex: this.levelIndex + 1,
            }, this.$slots),
          ]),
        ]);
      }

      return h(ADropdownAction, {
        key: `action_${ this.levelIndex }_${ actionIndex }`,
        action,
        alwaysTranslate: this.alwaysTranslate,
      }, this.$slots);
    });
  },
};
