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
import LabelAPI from "./compositionAPI/LabelAPI";
import MoveAPI from "./compositionAPI/MoveAPI";
import UpdateAPI from "./compositionAPI/UpdateAPI";

import ChevronDown from "aloha-svg/dist/js/bootstrap/ChevronDown";
import ChevronUp from "aloha-svg/dist/js/bootstrap/ChevronUp";
import PencilFill from "aloha-svg/dist/js/bootstrap/PencilFill";
import Trash from "aloha-svg/dist/js/bootstrap/Trash";

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
            idPrefix: this.parentId,
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
