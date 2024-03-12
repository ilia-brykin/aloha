import {
  h,
  onBeforeUnmount,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AElement from "../../AElement/AElement";
import AForm from "../../ui/AForm/AForm";
import ATranslation from "../../ATranslation/ATranslation";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import DropdownAPI from "./compositionAPI/DropdownAPI";
import FormAPI from "./compositionAPI/FormAPI";
import ModelAPI from "./compositionAPI/ModelAPI";

export default {
  name: "ATableSortingAdditional",
  props: {
    additionalSortingColumns: {
      type: Array,
      required: false,
      default: () => [],
    },
    disabledSort: {
      type: Boolean,
      required: false,
    },
    modelSort: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    const {
      columnsAll,
    } = ColumnsAPI(props);

    const {
      dataForForm,
      hasLastSelectOnlyOneColumn,
      initDataForForm,
    } = FormAPI(props, {
      columnsAll,
    });

    const {
      closeDropdown,
      dropdownRef,
      isDropdownVisible,
      wasOpenDropdown,
    } = DropdownAPI(props, {
      columnsAll,
    });

    const {
      changeModelSortInTable,
      countModelSort,
      destroyEventBus,
      initEventBus,
      initUnappliedModelSort,
      removeUnappliedModelSort,
      textCountModelSort,
      unappliedModelSort,
      updateUnappliedModelSort,
    } = ModelAPI(props, {
      closeDropdown,
      hasLastSelectOnlyOneColumn,
      initDataForForm,
      wasOpenDropdown,
    });

    const {
      excludeRenderAttributes,
      idPrefix,
    } = AttributesAPI();

    initEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
    });

    return {
      changeModelSortInTable,
      closeDropdown,
      countModelSort,
      dataForForm,
      dropdownRef,
      excludeRenderAttributes,
      idPrefix,
      initUnappliedModelSort,
      isDropdownVisible,
      removeUnappliedModelSort,
      textCountModelSort,
      unappliedModelSort,
      updateUnappliedModelSort,
      wasOpenDropdown,
    };
  },
  render() {
    if (!this.isDropdownVisible) {
      return null;
    }

    return h(ADropdown, {
      ref: "dropdownRef",
      buttonClass: "a_btn a_btn_secondary a_table__action",
      buttonIconLeft: "ArrowDownUp",
      buttonText: this.textCountModelSort,
      buttonTextAriaHidden: true,
      buttonTitle: "_A_TABLE_SORT_ADDITIONAL_DROPDOWN_TITLE_{{count}}_",
      buttonTextScreenReader: "_A_TABLE_SORT_ADDITIONAL_DROPDOWN_TITLE_{{count}}_",
      buttonTextClass: "a_badge a_bg_primary",
      disabled: this.disabledSort,
      dropdownClass: "a_filter_horizontal__wrapper",
      dropdownRenderDefault: false,
      dropdownTag: "div",
      hasCaret: false,
      inBody: true,
      extra: {
        count: this.countModelSort,
      },
      isCloseByClickInside: false,
      lockArrowsNavigation: false,
      lockTabNavigation: false,
      onOpen: this.initUnappliedModelSort,
    }, {
      dropdown: () => {
        return h("div", {
          class: "a_filter_horizontal",
        }, [
          h("div", {
            class: "a_filter_horizontal__header__wrapper",
          }, [
            h("div", {
              class: "a_filter_horizontal__header",
            }, [
              h("div", {
                class: "a_filter_horizontal__header__texts",
              }, [
                h(ATranslation, {
                  class: "a_filter_horizontal__header__texts__filter",
                  tag: "span",
                  text: "_A_TABLE_SORT_ADDITIONAL_HEADER_"
                }),
              ]),
            ]),
          ]),
          h("div", {
            class: "a_filter_horizontal__body__wrapper",
          }, [
            h("div", {
              class: "a_filter_horizontal__body",
            }, [
              h(AForm, {
                idPrefix: this.idPrefix,
                class: "a_filter_horizontal__body__form",
                classColumnDefault: "",
                classColumns: "",
                data: this.dataForForm,
                excludeRenderAttributes: this.excludeRenderAttributes,
                modelValue: this.unappliedModelSort,
                showErrors: false,
                onChange: this.updateUnappliedModelSort,
              }, {
                slotAppend: ({ item }) => h(AElement, {
                  type: "button",
                  class: "a_btn a_btn_primary a_ml_2",
                  title: "_A_TABLE_SORT_ADDITIONAL_BTN_DELETE_",
                  textScreenReader: "_A_TABLE_SORT_ADDITIONAL_BTN_DELETE_",
                  disabled: !this.unappliedModelSort?.[item.additionalProps.index]?.sortId,
                  iconLeft: "Close",
                  onClick: () => this.removeUnappliedModelSort({ item }),
                }),
              }),
            ]),
            h("div", {
              class: "a_filter_horizontal__footer",
            }, [
              h("div", {
                class: "a_filter_horizontal__footer__actions",
              }, [
                h(AElement, {
                  type: "button",
                  class: "a_btn a_btn_primary a_text_nowrap a_filter_horizontal__footer__actions__btn_search",
                  iconLeft: "ArrowDownUp",
                  text: "_A_TABLE_SORT_ADDITIONAL_START_",
                  disabled: this.disabledSort,
                  onClick: this.changeModelSortInTable,
                }),
                h(AElement, {
                  type: "button",
                  class: "a_btn a_btn_secondary a_text_nowrap a_filter_horizontal__footer__actions__btn_close",
                  text: "_A_TABLE_SORT_ADDITIONAL_CLOSE_DROPDOWN_",
                  onClick: this.closeDropdown,
                }),
              ]),
            ]),
          ]),
        ]);
      }
    });
  },
};
