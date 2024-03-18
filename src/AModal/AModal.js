import {
  h,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  Teleport,
  toRef,
  watch,
} from "vue";

import AButton from "../AButton/AButton";
import ALoading from "../ALoading/ALoading";
import ATranslation from "../ATranslation/ATranslation";

import CloseFromOutsideAPI from "./compositionAPI/CloseFromOutsideAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import EscapeAPI from "./compositionAPI/EscapeAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import FocusByDestroyAPI from "./compositionAPI/FocusByDestroyAPI";
import HideModalAPI from "./compositionAPI/HideModalAPI";
import KeydownAPI from "./compositionAPI/KeydownAPI";
import ShowModalAPI from "./compositionAPI/ShowModalAPI";
import SizeAPI from "./compositionAPI/SizeAPI";
import WrapperAPI from "./compositionAPI/WrapperAPI";

import {
  modalPluginOptions,
} from "../plugins/AModalPlugin";
import {
  uniqueId,
} from "lodash-es";
import AttributesAPI from "./compositionAPI/AttributesAPI";

// @vue/component
export default {
  name: "AModal",
  inheritAttrs: false,
  props: {
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
      default: () => modalPluginOptions.value.propsDefault.closeButtonClass,
    },
    closeButtonId: {
      type: String,
      required: false,
      default: undefined,
    },
    closeButtonText: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.closeButtonText,
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
    headerTag: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.headerTag,
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
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_modal_"),
    },
    isCloseButtonHide: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isCloseButtonHide,
    },
    isConfirm: {
      type: Boolean,
      required: false,
    },
    isModalHidden: {
      type: Boolean,
      required: false,
      default: false,
    },
    isSaveButtonHide: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isSaveButtonHide,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    modalClass: {
      type: [String, Object],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.modalClass,
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
      default: () => modalPluginOptions.value.propsDefault.saveButtonClass,
    },
    saveButtonId: {
      type: String,
      required: false,
      default: undefined,
    },
    saveButtonText: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.saveButtonText,
    },
    selectorClose: {
      type: [String, Array],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.selectorClose,
    },
    selectorCloseIds: {
      type: [String, Array],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.selectorCloseIds,
    },
    size: {
      type: String,
      validator: value => ["small", "large", "xl", "xxl", "fullscreen"].indexOf(value) !== -1,
      default: () => modalPluginOptions.value.propsDefault.size,
    },
    stop: {
      type: Boolean,
      required: false,
    },
    useEscape: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.useEscape,
    },
    zIndex: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const isModalHidden = toRef(props, "isModalHidden");

    const {
      destroyEventBusCloseFromOutside,
      initEventBusCloseFromOutside,
    } = CloseFromOutsideAPI(props);

    const {
      stylesBackdrop,
      stylesModal,
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
      setFocusToModal,
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
      pressEscape,
      trapFocus,
    });

    const {
      showModal,
    } = ShowModalAPI(props, {
      setFocusToModal,
      setListenerForKeydown,
    });

    const {
      hideModal,
    } = HideModalAPI({
      removeListenerForKeydown,
      setFocusByDestroy,
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
      clickWrapperStoppPropagationEventMap,
      disabledLocal,
      modalRef,
      modalWrapperRef,
      setFocusToModal,
      sizeClass,
      stylesBackdrop,
      stylesModal,
    };
  },
  render() {
    return h(Teleport, {
      to: "body",
    }, [
      h("div", {
        ref: "modalWrapperRef",
        ...this.clickWrapperStoppPropagationEventMap,
      }, [
        h("div", {
          ref: "modalRef",
          id: this.id,
          class: ["a_modal", this.modalClass, {
            a_modal_confirm: this.isConfirm,
            a_modal_show: !this.isModalHidden
          }],
          tabindex: -1,
          role: "dialog",
          ariaModal: true,
          style: this.stylesModal,
        }, [
          h("div", {
            class: ["a_modal_dialog a_modal_dialog_scrollable", this.sizeClass],
          }, [
            h("div", {
              class: "a_modal_content",
            }, [
              h("div", {
                ref: "modal_header",
                class: "a_modal_header",
              }, [
                this.$slots.modalHeader && this.$slots.modalHeader(),
                this.headerText && h(this.headerTag, {
                  class: "a_modal_title",
                }, [
                  h(ATranslation, {
                    tag: "span",
                    html: this.headerText,
                    extra: this.extra,
                  }),
                ]),
                h(AButton, {
                  class: "a_btn_close",
                  disabled: this.disabledLocal,
                  textScreenReader: this.closeButtonText,
                  title: this.closeButtonText,
                  onClick: () => this.close(true),
                })
              ]),
              h("div", {
                ref: "modal_body",
                class: "a_modal_body",
              }, [
                this.$slots.modalBody && this.$slots.modalBody(),
                this.bodyHtml && h(ATranslation, {
                  html: this.bodyHtml,
                  extra: this.extra,
                }),
              ]),
              !this.hideFooter ? h("div", {
                ref: "modal_footer",
                class: "a_modal_footer",
              }, [
                h(ALoading, {
                  isLoading: this.loading,
                }, () => [
                  this.$slots.modalFooterPrepend && this.$slots.modalFooterPrepend(),
                  (!this.isSaveButtonHide && this.save) && h(AButton, {
                    id: this.saveButtonId,
                    class: this.saveButtonClass,
                    disabled: this.disabledLocal || this.disabledSave,
                    extra: this.extra,
                    html: this.saveButtonText,
                    type: "button",
                    ...this.saveButtonAttributes,
                    onClick: this.save,
                  }),
                  !this.isCloseButtonHide && h(AButton, {
                    id: this.closeButtonId,
                    type: "button",
                    class: this.closeButtonClass,
                    disabled: this.disabledLocal,
                    html: this.closeButtonText,
                    extra: this.extra,
                    ...this.closeButtonAttributes,
                    onClick: () => this.close(true),
                  }),
                  this.$slots.modalFooterAppend && this.$slots.modalFooterAppend(),
                ]),

              ]) : "",
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
