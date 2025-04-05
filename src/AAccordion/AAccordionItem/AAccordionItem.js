import {
  h,
  onBeforeUnmount,
  resolveComponent,
  watch,
  withDirectives,
} from "vue";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ChildrenAPI from "./compositionAPI/ChildrenAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";
import VisibleAPI from "./compositionAPI/VisibleAPI";

import ASafeHtml from "../../directives/ASafeHtml";
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
          })
: this.$slots.accordionContent ?
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
