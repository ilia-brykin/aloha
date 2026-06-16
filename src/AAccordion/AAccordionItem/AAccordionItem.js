import {
  h,
  onBeforeUnmount,
  resolveComponent,
  watch,
  withDirectives,
} from "vue";

import AIcon from "../../AIcon/AIcon";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ChildrenAPI from "./compositionAPI/ChildrenAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";
import VisibleAPI from "./compositionAPI/VisibleAPI";

import ASafeHtml from "../../directives/ASafeHtml";
import ChevronDown from "aloha-svg/dist/js/bootstrap/ChevronDown";
import ChevronUp from "aloha-svg/dist/js/bootstrap/ChevronUp";
import {
  AKeyId,
} from "../../const/AKeys";

export default {
  name: "AAccordionItem",
  props: {
    isParentOpen: {
      type: Boolean,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    parentsIds: {
      type: Array,
      required: false,
      default: () => [],
    },
    parentIndexes: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  inject: [
    "classBody",
    "classHeader",
    "id",
    "withGap",
  ],
  setup(props) {
    const {
      closeItemIfOpen,
      currentId,
      isOpen,
      parentIndexesForChild,
      parentsIdsForChild,
      toggleLocal,
    } = ToggleAPI(props);

    const {
      children,
      hasChildren,
    } = ChildrenAPI(props);

    const {
      classBodyLocal,
      classButtonLocal,
      classHeaderLocal,
    } = ClassAPI(props);

    const {
      isBodyVisible,
      isOpenFirst,
      isRender,
    } = VisibleAPI(props);

    const {
      buttonAttributes,
      buttonTag,
      contentLocal,
      idForCollapse,
      isCaretLocal,
      labelLocal,
    } = AttributesAPI(props, {
      classButtonLocal,
      isOpen,
      toggleLocal,
      currentId,
    });

    watch(isOpen, newValue => {
      if (newValue && !isOpenFirst.value) {
        isOpenFirst.value = true;
      }
    }, {
      immediate: true,
    });

    onBeforeUnmount(() => {
      closeItemIfOpen();
    });

    return {
      buttonAttributes,
      buttonTag,
      children,
      classBodyLocal,
      classButtonLocal,
      classHeaderLocal,
      contentLocal,
      currentId,
      hasChildren,
      idForCollapse,
      isCaretLocal,
      isBodyVisible,
      isOpen,
      isRender,
      labelLocal,
      parentIndexesForChild,
      parentsIdsForChild,
    };
  },
  render() {
    let body = [];
    if (this.isBodyVisible) {
      body = [
        (this.item.slotContent && this.$slots[this.item.slotContent]) ?
          this.$slots[this.item.slotContent]({
            item: this.item,
            itemIndex: this.itemIndex,
            parentsIds: this.parentsIds,
            parentIndexes: this.parentIndexes,
            id: this.id,
            currentId: this.currentId,
          }) :
          this.$slots.accordionContent ?
            this.$slots.accordionContent({
              item: this.item,
              itemIndex: this.itemIndex,
              parentsIds: this.parentsIds,
              parentIndexes: this.parentIndexes,
              id: this.id,
              currentId: this.currentId,
            }) :
            this.contentLocal && withDirectives(h("div"), [
              [ASafeHtml, this.contentLocal],
            ]),
        this.hasChildren && h("div", {
          class: ["a_accordion"],
        }, [
          this.children.map((itemChild, itemChildIndex) => {
            return h(resolveComponent("AAccordionItem"), {
              key: itemChild[AKeyId],
              item: itemChild,
              itemIndex: itemChildIndex,
              isParentOpen: this.isOpen,
              parentsIds: this.parentsIdsForChild,
              parentIndexes: this.parentIndexesForChild,
              keyId: this.keyId,
            }, this.$slots);
          }),
        ]),
      ];
    }


    return this.isRender && h("div", {
      class: [
        "a_accordion__item",
        {
          a_accordion__item_with_gap: this.withGap,
          a_accordion__item_open: this.isOpen,
          a_accordion__item_close: !this.isOpen,
        },
      ],
    }, [
      h("div", {
        class: ["a_accordion__header", this.classHeader, this.classHeaderLocal],
      }, [
        h(this.buttonTag, this.buttonAttributes, [
          this.item.slotButton && this.$slots[this.item.slotButton] ?
            this.$slots[this.item.slotButton]({
              item: this.item,
              itemIndex: this.itemIndex,
              parentsIds: this.parentsIds,
              parentIndexes: this.parentIndexes,
              id: this.id,
              currentId: this.currentId,
            }) :
            this.$slots.accordionButton && this.$slots.accordionButton({
              item: this.item,
              itemIndex: this.itemIndex,
              parentsIds: this.parentsIds,
              parentIndexes: this.parentIndexes,
              id: this.id,
              currentId: this.currentId,
            }),
          this.labelLocal && withDirectives(h("span"), [
            [ASafeHtml, this.labelLocal],
          ]),
          this.isCaretLocal && h(AIcon, {
            class: "a_accordion__button__icon",
            icon: this.isOpen ? ChevronUp : ChevronDown,
          }),
        ]),
      ]),
      h("div", {
        id: this.idForCollapse,
        class: ["a_accordion__collapse_box", {
          a_accordion__collapse_box_show: this.isOpen,
        }],
      }, [
        h("div", {
          class: ["a_accordion__body", this.classBody, this.classBodyLocal],
        }, body),
      ]),
    ]);
  },
};
