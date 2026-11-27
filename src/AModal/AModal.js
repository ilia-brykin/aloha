import {
  h,
  mergeProps,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  Teleport,
  toRef,
  watch,
} from "vue";

import AElement from "../AElement/AElement";
import ALoading from "../ALoading/ALoading";
import ATranslation from "../ATranslation/ATranslation";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import BackdropAPI from "./compositionAPI/BackdropAPI";
import BodyHtmlAPI from "./compositionAPI/BodyHtmlAPI";
import CloseFromOutsideAPI from "./compositionAPI/CloseFromOutsideAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import EscapeAPI from "./compositionAPI/EscapeAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import FocusByDestroyAPI from "../compositionAPI/FocusByDestroyAPI";
import KeydownAPI from "./compositionAPI/KeydownAPI";
import ShowModalAPI from "./compositionAPI/ShowModalAPI";
import SizeAPI from "./compositionAPI/SizeAPI";
import WrapperAPI from "./compositionAPI/WrapperAPI";
import ZIndexAPI from "./compositionAPI/ZIndexAPI";
import {
  getTranslatedAttributes,
} from "../ATranslation/compositionAPI/UtilsAPI";

import Close from "../AIcon/Icons/Close";
import {
  getPropDefault,
} from "../plugins/AComponentsPlugin";
import {
  uniqueId,
} from "lodash-es";

// @vue/component
export default {
  name: "AModal",
  inheritAttrs: false,
  props: {
    // name of the dialog when it has no header (hide-header) or the header is not a good name
    ariaLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    backdropZIndex: {
      type: Number,
      required: false,
      default: undefined,
    },
    bodyHtml: {
      type: String,
      required: false,
      default: "",
    },
    bodyHtmlClass: {
      type: [String, Array, Object],
      required: false,
      default: undefined,
    },
    classExtra: {
      type: [String, Object],
      required: false,
      default: "a_modal_class_extra",
    },
    close: {
      type: Function,
      required: true,
    },
    closeButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    closeButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: () => getPropDefault("AModal", "closeButtonClass", "a_btn a_btn_secondary"),
    },
    closeButtonId: {
      type: String,
      required: false,
      default: undefined,
    },
    // a click outside of the dialog closes the modal
    closeOnBackdrop: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AModal", "closeOnBackdrop", false),
    },
    closeButtonText: {
      type: String,
      required: false,
      default: () => getPropDefault("AModal", "closeButtonText", "_A_MODAL_BTN_CANCEL_"),
    },
    // only when set: the name of the button for screen readers instead of its visible text (WCAG 2.5.3: the name contains the visible text)
    closeButtonTextScreenReaderFooter: {
      type: String,
      required: false,
      default: () => getPropDefault("AModal", "closeButtonTextScreenReaderFooter"),
    },
    closeButtonTextScreenReaderHeader: {
      type: String,
      required: false,
      default: () => getPropDefault("AModal", "closeButtonTextScreenReaderHeader", "_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_"),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabledSave: {
      type: Boolean,
      required: false,
      default: false,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    focusStartId: {
      type: String,
      required: false,
      default: undefined,
    },
    headerTag: {
      type: String,
      required: false,
      default: () => getPropDefault("AModal", "headerTag", "h2"),
    },
    headerText: {
      type: String,
      required: false,
      default: undefined,
    },
    hideFooter: {
      type: Boolean,
      required: false,
    },
    hideHeader: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_modal_"),
    },
    isCloseButtonHide: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AModal", "isCloseButtonHide", false),
    },
    isConfirm: {
      type: Boolean,
      required: false,
    },
    isFooterSticky: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AModal", "isFooterSticky", false),
    },
    isModalHidden: {
      type: Boolean,
      required: false,
      default: false,
    },
    isSaveButtonHide: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AModal", "isSaveButtonHide", false),
    },
    loading: {
      type: Boolean,
      required: false,
    },
    modalClass: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("AModal", "modalClass"),
    },
    modalStyle: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("AModal", "modalStyle"),
    },
    save: {
      type: Function,
      required: false,
      default: undefined,
    },
    saveButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    saveButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: () => getPropDefault("AModal", "saveButtonClass", "a_btn a_btn_primary"),
    },
    saveButtonId: {
      type: String,
      required: false,
      default: undefined,
    },
    saveButtonText: {
      type: String,
      required: false,
      default: () => getPropDefault("AModal", "saveButtonText", "_A_MODAL_BTN_SAVE_"),
    },
    saveButtonTextScreenReader: {
      type: String,
      required: false,
      default: () => getPropDefault("AModal", "saveButtonTextScreenReader"),
    },
    selectorClose: {
      type: [String, Array],
      required: false,
      default: () => getPropDefault("AModal", "selectorClose"),
    },
    selectorCloseIds: {
      type: [String, Array],
      required: false,
      default: () => getPropDefault("AModal", "selectorCloseIds"),
    },
    showCloseButtonHeader: {
      type: Boolean,
      required: false,
      default: true,
    },
    size: {
      type: String,
      validator: value => ["small", "large", "xl", "xxl", "fullscreen"].indexOf(value) !== -1,
      default: () => getPropDefault("AModal", "size"),
    },
    stop: {
      type: Boolean,
      required: false,
    },
    teleportSelector: {
      type: String,
      required: false,
      default: () => getPropDefault("AModal", "teleportSelector", "body"),
    },
    useEscape: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AModal", "useEscape", true),
    },
    useFocusOnStart: {
      type: Boolean,
      required: false,
      default: true,
    },
    // the rest of the page gets inert while the modal is open: not reachable with the mouse or the virtual cursor of a screen reader
    useInert: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AModal", "useInert", true),
    },
    zIndex: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const isModalHidden = toRef(props, "isModalHidden");
    // key in the stack of the open modals
    const modalKey = Symbol("AModal");

    const {
      stylesBackdrop,
      stylesZIndexModal,
    } = ZIndexAPI(props, {
      modalKey,
    });

    const {
      bodyHtmlId,
    } = BodyHtmlAPI(props);

    const {
      destroyEventBusCloseFromOutside,
      initEventBusCloseFromOutside,
    } = CloseFromOutsideAPI(props);

    const {
      headerId,
    } = AttributesAPI(props);

    const {
      sizeClass,
    } = SizeAPI(props);

    const {
      disabledLocal,
    } = DisabledAPI(props);

    const {
      modalRef,
      modalWrapperRef,
      setFocusByShowModal,
      trapFocus,
    } = FocusAPI(props);

    const {
      setFocusByDestroy,
    } = FocusByDestroyAPI(props);

    const {
      pressEscape,
    } = EscapeAPI(props);

    const {
      setListenerForKeydown,
      removeListenerForKeydown,
    } = KeydownAPI({
      modalKey,
      pressEscape,
      trapFocus,
    });

    const {
      hideModal,
      showModal,
    } = ShowModalAPI(props, {
      modalKey,
      modalWrapperRef,
      removeListenerForKeydown,
      setFocusByDestroy,
      setFocusByShowModal,
      setListenerForKeydown,
    });

    const {
      onClickModal,
      onMousedownModal,
    } = BackdropAPI(props, {
      disabledLocal,
      modalRef,
    });

    const {
      clickWrapperStoppPropagationEventMap,
    } = WrapperAPI(props);

    watch(isModalHidden, () => {
      if (isModalHidden.value) {
        hideModal();
      } else {
        showModal();
      }
    });

    initEventBusCloseFromOutside();

    onMounted(() => {
      showModal();
    });

    onBeforeUnmount(() => {
      destroyEventBusCloseFromOutside();
    });

    onUnmounted(() => {
      hideModal();
    });

    return {
      bodyHtmlId,
      clickWrapperStoppPropagationEventMap,
      disabledLocal,
      headerId,
      modalRef,
      modalWrapperRef,
      onClickModal,
      onMousedownModal,
      sizeClass,
      stylesBackdrop,
      stylesZIndexModal,
    };
  },
  render() {
    const FOOTER = !this.hideFooter ?
      h("div", {
        ref: "modal_footer",
        class: [
          "a_modal_footer",
          {
            a_modal_footer_sticky: this.isFooterSticky,
          },
        ],
      }, [
        h(ALoading, {
          alwaysTranslate: this.alwaysTranslate,
          isLoading: this.loading,
        }, () => [
          h("div", {
            class: "a_modal_footer_actions",
          }, [
            this.$slots.modalFooterPrepend && this.$slots.modalFooterPrepend(),
            (!this.isSaveButtonHide && this.save) && h(AElement, {
              id: this.saveButtonId,
              alwaysTranslate: this.alwaysTranslate,
              class: this.saveButtonClass,
              disabled: this.disabledLocal || this.disabledSave,
              extra: this.extra,
              html: this.saveButtonText,
              textAriaHidden: !!this.saveButtonTextScreenReader,
              textScreenReader: this.saveButtonTextScreenReader,
              type: "button",
              ...this.saveButtonAttributes,
              onClick: this.save,
            }),
            !this.isCloseButtonHide && h(AElement, {
              id: this.closeButtonId,
              alwaysTranslate: this.alwaysTranslate,
              class: this.closeButtonClass,
              disabled: this.disabledLocal,
              extra: this.extra,
              html: this.closeButtonText,
              textAriaHidden: !!this.closeButtonTextScreenReaderFooter,
              textScreenReader: this.closeButtonTextScreenReaderFooter,
              type: "button",
              ...this.closeButtonAttributes,
              onClick: () => this.close(true),
            }),
            this.$slots.modalFooterAppend && this.$slots.modalFooterAppend(),
          ]),
        ]),

      ]) :
      "";

    return h(Teleport, {
      to: this.teleportSelector,
    }, [
      h("div", {
        ref: "modalWrapperRef",
        ...this.clickWrapperStoppPropagationEventMap,
      }, [
        h("div", mergeProps({
          ref: "modalRef",
          id: this.id,
          class: [
            "a_modal",
            this.modalClass,
            this.classExtra,
            {
              a_modal_confirm: this.isConfirm,
              a_modal_show: !this.isModalHidden,
            },
          ],
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": this.headerId,
          "aria-describedby": this.bodyHtmlId,
          ...getTranslatedAttributes({ attr: "aria-label", placeholder: this.ariaLabel, extra: this.extra }),
          style: [
            this.modalStyle,
            this.stylesZIndexModal,
          ],
          onMousedown: this.onMousedownModal,
          onClick: this.onClickModal,
        }, this.$attrs), [
          h("div", {
            class: ["a_modal_dialog a_modal_dialog_scrollable", this.sizeClass],
          }, [
            h("div", {
              class: [
                "a_modal_content",
                {
                  a_modal_content_with_footer_sticky: this.isFooterSticky,
                },
              ],
            }, [
              !this.hideHeader ?
                h("div", {
                  ref: "modal_header",
                  class: "a_modal_header",
                }, [
                  h("div", {
                    id: this.headerId,
                  }, [
                  this.$slots.modalHeader ?
                    this.$slots.modalHeader() :
                    "",
                  this.headerText ?
                    h(this.headerTag, {
                      class: "a_modal_title",
                    }, [
                      h(ATranslation, {
                        alwaysTranslate: this.alwaysTranslate,
                        tag: "span",
                        html: this.headerText,
                        extra: this.extra,
                      }),
                    ]) :
                    "",
                  ]),

                  this.showCloseButtonHeader ?
                    h(AElement, {
                      alwaysTranslate: this.alwaysTranslate,
                      class: "a_btn_close",
                      disabled: this.disabledLocal,
                      iconLeft: Close,
                      textScreenReader: this.closeButtonTextScreenReaderHeader,
                      title: this.closeButtonTextScreenReaderHeader,
                      type: "button",
                      onClick: () => this.close(true),
                    }) :
                    "",
                ]) :
                "",
              h("div", {
                ref: "modal_body",
                class: "a_modal_body",
              }, [
                h("div", {
                  ref: "modal_body_content",
                  class: "a_modal_body__content",
                }, [
                  this.bodyHtml && h(ATranslation, {
                    id: this.bodyHtmlId,
                    alwaysTranslate: this.alwaysTranslate,
                    class: this.bodyHtmlClass,
                    html: this.bodyHtml,
                    extra: this.extra,
                  }),
                  this.$slots.modalBody && this.$slots.modalBody(),
                ]),
                this.isFooterSticky ?
                  FOOTER :
                  "",
              ]),
              !this.isFooterSticky ?
                FOOTER :
                "",
            ]),
          ]),
        ]),
      ]),
      !this.isModalHidden && h("div", {
        class: [
          "a_backdrop a_backdrop_fade a_backdrop_show",
          {
            a_backdrop_confirm: this.isConfirm,
          },
        ],
        style: this.stylesBackdrop,
      }),
    ]);
  },
};
