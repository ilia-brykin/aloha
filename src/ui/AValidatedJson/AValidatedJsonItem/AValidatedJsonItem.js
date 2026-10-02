import {
  h,
} from "vue";
import {
  AElement,
  AFieldset,
} from "../../../index";

import AValidatedJsonModalCreateOrUpdate from "../AValidatedJsonModalCreateOrUpdate/AValidatedJsonModalCreateOrUpdate";

import DeleteAPI from "./compositionAPI/DeleteAPI";
import DetailsAPI from "./compositionAPI/DetailsAPI";
import IdAPI from "./compositionAPI/IdAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import MoveAPI from "./compositionAPI/MoveAPI";
import UpdateAPI from "./compositionAPI/UpdateAPI";

const ChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>`;
const ChevronUp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg>`;
const PencilFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>`;
const Trash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;


// @vue/component
export default {
  name: "AValidatedJsonItem",
  props: {
    children: {
      type: Array,
      required: true,
    },
    deactivateOrdering: {
      type: Boolean,
      required: false,
    },
    deactivatePreview: {
      type: Boolean,
      required: false,
    },
    elementLabel: {
      type: String,
      required: true,
    },
    elementTemplate: {
      type: String,
      required: false,
      default: "{{ elementLabel }}",
    },
    errors: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    hidePosition: {
      type: Boolean,
      required: false,
    },
    isLast: {
      type: Boolean,
      required: false,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    mode: {
      type: String,
      required: true,
      validator: value => ["list", "json"].includes(value),
    },
    modelAll: {
      type: Array,
      required: true,
    },
    modelIndex: {
      type: Number,
      required: true,
    },
    modelItem: {
      type: Object,
      required: true,
    },
    parentHtmlId: {
      type: String,
      required: true,
    },
    parentId: {
      type: String,
      required: true,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    typedBaseId: {
      type: String,
      required: false,
      default: undefined,
    },
    typedChildren: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    uniqueChildrenIds: {
      type: Array,
      required: false,
      default: () => [],
    },
    useFlatModel: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: [
    "delete",
    "move",
    "update",
  ],
  setup(props, context) {
    const {
      idLocal,
    } = IdAPI(props);

    const {
      label,
    } = LabelAPI(props);

    const {
      btnMoveDownId,
      btnMoveUpId,
      canMove,
      disabledMoveDown,
      disabledMoveUp,
      moveDown,
      moveUp,
    } = MoveAPI(props, context);

    const {
      btnDeleteId,
      openDeleteConfirm,
    } = DeleteAPI(props, context);

    const {
      btnOpenModalUpdateId,
      closeModalUpdate,
      isModalUpdateVisible,
      openModalUpdate,
    } = UpdateAPI(props, context);

    const {
      btnToggleDetailsId,
      detailsId,
      iconBtnToggleDetails,
      isDetailsVisible,
      titleBtnToggleDetails,
      toggleDetails,
    } = DetailsAPI(props);

    return {
      btnDeleteId,
      btnMoveDownId,
      btnMoveUpId,
      btnOpenModalUpdateId,
      btnToggleDetailsId,
      canMove,
      closeModalUpdate,
      detailsId,
      disabledMoveDown,
      disabledMoveUp,
      iconBtnToggleDetails,
      idLocal,
      isDetailsVisible,
      isModalUpdateVisible,
      label,
      moveDown,
      moveUp,
      openDeleteConfirm,
      openModalUpdate,
      titleBtnToggleDetails,
      toggleDetails,
    };
  },
  render() {
    return h("li", {
      id: this.idLocal,
      class: "a_list_group__item",
    }, [
      h("div", {
        class: "a_d_flex a_justify_content_between a_align_items_center",
      }, [
        !this.deactivatePreview ?
          h(AElement, {
            id: this.btnToggleDetailsId,
            class: "a_btn a_btn_secondary a_mr_4 test_toggle_details",
            iconLeft: this.iconBtnToggleDetails,
            title: this.titleBtnToggleDetails,
            textScreenReader: this.titleBtnToggleDetails,
            type: "button",
            onClick: this.toggleDetails,
          }) :
          "",
        h("strong", {
          class: [
            "a_validated_json_list__item__label",
            {
              a_validated_json_list__item__label_error: this.errors,
            },
          ],
        }, this.label),
        !this.readonly ?
          h("div", {
            class: "a_btn_group a_ml_4",
            role: "group",
          }, [
          this.canMove ?
            h(AElement, {
              id: this.btnMoveUpId,
              ariaDisabled: this.disabledMoveUp,
              class: "a_btn a_btn_secondary test_move_up",
              iconLeft: ChevronUp,
              title: "_A_VALIDATED_JSON_MOVE_UP_",
              textScreenReader: "_A_VALIDATED_JSON_MOVE_UP_",
              type: "button",
              onClick: this.moveUp,
            }) :
            "",
          this.canMove ?
            h(AElement, {
              id: this.btnMoveDownId,
              ariaDisabled: this.disabledMoveDown,
              class: "a_btn a_btn_secondary test_move_down",
              iconLeft: ChevronDown,
              title: "_A_VALIDATED_JSON_MOVE_DOWN_",
              textScreenReader: "_A_VALIDATED_JSON_MOVE_DOWN_",
              type: "button",
              onClick: this.moveDown,
            }) :
            "",
          h(AElement, {
            id: this.btnOpenModalUpdateId,
            class: "a_btn a_btn_secondary test_edit",
            iconLeft: PencilFill,
            title: "_A_VALIDATED_JSON_ELEMENT_UPDATE_",
            textScreenReader: "_A_VALIDATED_JSON_ELEMENT_UPDATE_",
            type: "button",
            onClick: this.openModalUpdate,
          }),
          h(AElement, {
            id: this.btnDeleteId,
            class: "a_btn a_btn_danger test_remove",
            iconLeft: Trash,
            title: "_A_VALIDATED_JSON_ELEMENT_REMOVE_",
            textScreenReader: "_A_VALIDATED_JSON_ELEMENT_REMOVE_",
            type: "button",
            onClick: this.openDeleteConfirm,
          }),
          ]) :
          "",
      ]),
      this.isDetailsVisible ?
        h("div", {
          class: "a_ml_6 a_mt_2 a_px_4",
        }, [
          h(AFieldset, {
            children: this.children,
            idPrefix: this.parentHtmlId,
            modelValue: this.modelItem,
            readonly: true,
            skipOwnIdInModelPath: true,
            slotNamePrepend: "singlePrepend",
            useFlatModel: this.useFlatModel,
          }, this.$slots),
        ]) :
        "",
      this.isModalUpdateVisible ?
        h(AValidatedJsonModalCreateOrUpdate, {
          children: this.children,
          close: this.closeModalUpdate,
          currentIndex: this.modelIndex,
          currentModel: this.modelItem,
          elementLabelTranslated: this.elementLabel,
          errors: this.errors,
          isCreate: false,
          keyId: this.keyId,
          mode: this.mode,
          modelAll: this.modelAll,
          selectorCloseIds: this.btnOpenModalUpdateId,
          typedBaseId: this.typedBaseId,
          typedChildren: this.typedChildren,
          uniqueChildrenIds: this.uniqueChildrenIds,
        }) :
        "",
    ]);
  },
};
