import {
  h, onBeforeUnmount,
  Teleport,
  withDirectives,
} from "vue";

import AForm from "../ui/AForm/AForm";
import ATranslation from "../ATranslation/ATranslation";

import ASafeHtml from "../directives/ASafeHtml";

import CloseFromOutsideAPI from "./compositionAPI/CloseFromOutsideAPI";

import {
  modalPluginOptions,
} from "../plugins/AModalPlugin";
import AKeysCode from "../const/AKeysCode";
import {
  focusableSelector
} from "../const/AFocusableElements";
import {
  cloneDeep,
  forEach,
  isArray,
  isFunction,
  isString,
} from "lodash-es";

// @vue/component
export default {
  name: "AModal",
  inheritAttrs: false,
  props: {
    bodyHtml: {
      type: String,
      required: false,
      default: "",
    },
    close: {
      type: Function,
      required: true,
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
    dataForm: {
      type: Array,
      required: false,
      default: () => [],
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
    errors: {
      type: Object,
      required: false,
      default: () => ({}),
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
    idPrefix: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.idPrefix,
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
    isDataFormHide: {
      type: Boolean,
      required: false,
      default: modalPluginOptions.value.propsDefault.isDataFormHide,
    },
    isDataFormRender: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isDataFormRender,
    },
    isModalHidden: {
      type: Boolean,
      required: false,
      default: false,
    },
    isRequired: {
      type: Boolean,
      required: false,
      default: modalPluginOptions.value.propsDefault.isRequired,
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
    modelValue: {
      type: Object,
      required: false,
      default: undefined,
    },
    save: {
      type: Function,
      required: false,
      default: undefined,
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
    textErrorHeader: {
      type: String,
      required: false,
      default: undefined,
    },
    textRequired: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.textRequired,
    },
    withoutEscape: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.withoutEscape,
    },
  },
  emits: [
    "update:modelValue",
  ],
  setup(props, { emit }) {
    const {
      destroyEventBusCloseFromOutside,
      initEventBusCloseFromOutside,
    } = CloseFromOutsideAPI(props);

    const updateModelLocal = model => {
      emit("update:modelValue", model);
    };

    initEventBusCloseFromOutside();

    onBeforeUnmount(() => {
      destroyEventBusCloseFromOutside();
    });

    return {
      updateModelLocal,
    };
  },
  data() {
    return {
      clientHeight: 0,
      statusShow: false,
      modalInModalCount: 0,
      statusShowInfo: true,
    };
  },
  computed: {
    modalClassSize() {
      if (this.size) {
        return `a_modal_${ this.size }`;
      }
      return "";
    },

    disabledLocal() {
      return this.disabled || this.loading;
    },

    isDataForm() {
      return this.dataForm.length > 0;
    },

    selectorsCloseAll() {
      const ALL_SELECTORS = [];
      if (this.selectorCloseIds) {
        if (isString(this.selectorCloseIds)) {
          ALL_SELECTORS.push(`#${ this.selectorCloseIds }`);
        } else if (isArray(this.selectorCloseIds)) {
          forEach(this.selectorCloseIds, selectorCloseId => {
            ALL_SELECTORS.push(`#${ selectorCloseId }`);
          });
        }
      }
      if (this.selectorClose) {
        if (isString(this.selectorClose)) {
          ALL_SELECTORS.push(this.selectorClose);
        } else if (isArray(this.selectorClose)) {
          ALL_SELECTORS.push(...this.selectorClose);
        }
      }

      return ALL_SELECTORS;
    }
  },
  watch: {
    isModalHidden() {
      if (this.isModalHidden) {
        this.hideModal();
      } else {
        this.showModal();
      }
    },
  },
  mounted() {
    if (!this.isModalHidden) {
      this.showModal();
    }
  },
  unmounted() {
    this.hideModal();
  },
  methods: {
    showModal() {
      document.body.classList.add("a_modal_open");
      this.setFocusToModal();
      this.setListenerForPressButtons();
      setTimeout(() => {
        this.statusShow = true;
      });
    },

    hideModal() {
      document.body.classList.remove("a_modal_open");
      this.onFocusByDestroy();
      this.removeMouseEventListeners();
      this.removeListenerForPressButtons();
    },

    setListenerForPressButtons() {
      document.addEventListener("keydown", this.pressButton);
    },

    pressButton($event) {
      const EVENT = $event || window.$event;
      if (EVENT.key === "Escape" || EVENT.keyCode === AKeysCode.escape) {
        this.pressEscape();
      } else if (EVENT.key === "Tab" || EVENT.keyCode === AKeysCode.tab) {
        this.trapFocus(EVENT);
      }
    },

    pressEscape() {
      if (this.withoutEscape) {
        return;
      }
      this.close();
    },

    trapFocus(EVENT) {
      const FOCUSABLE_ELEMENTS = this.$refs.modal_parent.querySelectorAll(focusableSelector);
      if (FOCUSABLE_ELEMENTS.length === 0) {
        EVENT.preventDefault();
        return;
      }
      const FIRST_FOCUSABLE_ELEMENT = FOCUSABLE_ELEMENTS[0];
      const LAST_FOCUSABLE_ELEMENT = FOCUSABLE_ELEMENTS[FOCUSABLE_ELEMENTS.length - 1];
      if (EVENT.shiftKey) { // Shift + Tab
        if (document.activeElement === FIRST_FOCUSABLE_ELEMENT) {
          this.setFocusToModal(EVENT);
          EVENT.preventDefault();
        } else if (document.activeElement === this.$refs.modal) { // Focus in .modal
          LAST_FOCUSABLE_ELEMENT.focus();
          EVENT.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === LAST_FOCUSABLE_ELEMENT) {
          this.setFocusToModal(EVENT);
          EVENT.preventDefault();
        }
      }
    },

    setFocusToModal() {
      if (this.$refs.modal) {
        this.$refs.modal.focus();
      }
    },

    removeListenerForPressButtons() {
      document.removeEventListener("keydown", this.pressButton);
    },

    mousedown() {
      this.addMouseEventListeners();
      this.clientHeight = document.documentElement.clientHeight;
    },

    mousemove($event) {
      const CLIENT_Y = $event.clientY;
      const MODAL_BODY_HEIGHT = this.getModalBodyHeight(CLIENT_Y);
      this.$refs.modal_body.style.maxHeight = `${ MODAL_BODY_HEIGHT }px`;
      this.$refs.modal_body.style.height = `${ MODAL_BODY_HEIGHT }px`;
    },

    mouseup() {
      this.removeMouseEventListeners();
    },

    mouseoutDocument() {
      this.removeMouseEventListeners();
    },

    addMouseEventListeners() {
      document.addEventListener("mousemove", this.mousemove);
      document.addEventListener("mouseup", this.mouseup);
      document.addEventListener("mouseleave", this.mouseoutDocument);
    },

    removeMouseEventListeners() {
      document.removeEventListener("mouseup", this.mouseup);
      document.removeEventListener("mousemove", this.mousemove);
      document.removeEventListener("mouseout", this.mouseoutDocument);
    },

    getModalBodyHeight(clientY) {
      const CLIENT_Y = clientY + 30 > this.clientHeight ? this.clientHeight - 15 : clientY;
      const MODAL_HEADER_HEIGHT = this.$refs.modal_header.clientHeight;
      const MODAL_FOOTER_HEIGHT = this.$refs.modal_footer.clientHeight;
      const MODAL_BODY_HEIGHT = CLIENT_Y - MODAL_HEADER_HEIGHT - MODAL_FOOTER_HEIGHT - 15;
      return MODAL_BODY_HEIGHT > 0 ? MODAL_BODY_HEIGHT : 0;
    },

    onFocusByDestroy() {
      if (!this.selectorsCloseAll.length) {
        return;
      }
      const SELECTOR_CLOSE_ALL = cloneDeep(this.selectorsCloseAll);

      setTimeout(() => {
        forEach(SELECTOR_CLOSE_ALL, selector => {
          const STATUS_SUCCESS = this.onFocusByDestroyForSelector({ selector });
          if (STATUS_SUCCESS) {
            return false;
          }
        });
      }, 300);
    },

    onFocusByDestroyForSelector({ selector }) {
      const ELEMENT = document.querySelector(selector);
      if (ELEMENT) {
        ELEMENT.focus();
        return true;
      }
      return false;
    },

    saveLocal() {
      if (isFunction(this.save)) {
        this.save();
      }
    },

    hideInfo() {
      this.statusShowInfo = false;
    },
  },
  render() {
    return h(Teleport, {
      to: "body",
    }, [
      h("div", {
        ref: "modal_parent",
      }, [
        h("div", {
          ref: "modal",
          class: ["a_modal", this.modalClass, {
            a_modal_confirm: this.isConfirm,
            a_modal_show: !this.isModalHidden
          }],
          tabindex: -1,
          role: "dialog",
          ariaModal: true,
        }, [
          h("div", {
            class: ["a_modal_dialog a_modal_dialog_scrollable", this.modalClassSize],
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
                  }),
                ]),
                h("button", {
                  type: "button",
                  class: "a_btn_close",
                  ariaLabel: "Close",
                  disabled: this.disabledLocal,
                  title: this.closeButtonText,
                  onClick: this.close,
                })
              ]),
              h("div", {
                ref: "modal_body",
                class: "a_modal_body",
              }, [
                this.$slots.modalBodyPrepend && this.$slots.modalBodyPrepend(),
                this.isDataForm && h(AForm, {
                  modelValue: this.modelValue,
                  data: this.dataForm,
                  errors: this.errors,
                  idPrefix: this.idPrefix,
                  isRequired: this.isRequired,
                  textRequired: this.textRequired,
                  textErrorHeader: this.textErrorHeader,
                  isHide: this.isDataFormHide,
                  isRender: this.isDataFormRender,
                  "onUpdate:modelValue": this.updateModelLocal,
                }, this.$slots),
                this.bodyHtml && withDirectives(h("div"), [
                  [ASafeHtml, this.bodyHtml],
                ]),
                this.$slots.modalBodyAppend && this.$slots.modalBodyAppend(),
              ]),
              h("div", {
                ref: "modal_footer",
                class: "a_modal_footer",
              }, [
                this.$slots.modalFooterPrepend && this.$slots.modalFooterPrepend({
                  saveButtonClass: this.saveButtonClass,
                  closeButtonClass: this.closeButtonClass,
                  disabled: this.disabledLocal,
                  disabledSave: this.disabledSave,
                  save: this.save,
                  close: this.close,
                }),
                (!this.isSaveButtonHide && this.save) && h("button", {
                  id: this.saveButtonId,
                  type: "button",
                  class: this.saveButtonClass,
                  disabled: this.disabledLocal || this.disabledSave,
                  onClick: this.save,
                }, [
                  h(ATranslation, {
                    tag: "span",
                    text: this.saveButtonText,
                  }),
                ]),
                !this.isCloseButtonHide && h("button", {
                  id: this.closeButtonId,
                  type: "button",
                  class: this.closeButtonClass,
                  disabled: this.disabledLocal,
                  onClick: this.close,
                }, [
                  h(ATranslation, {
                    tag: "span",
                    text: this.closeButtonText,
                  }),
                ]),
                this.$slots.modalFooterAppend && this.$slots.modalFooterAppend({
                  saveButtonClass: this.saveButtonClass,
                  closeButtonClass: this.closeButtonClass,
                  disabled: this.disabledLocal,
                  disabledSave: this.disabledSave,
                  save: this.save,
                  close: this.close,
                }),
              ]),
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
      })
    ]);
  },
};
