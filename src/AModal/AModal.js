import {
  h,
  Teleport,
} from "vue";

import AForm from "../ui/AForm/AForm";

import AKeysCode from "../const/AKeysCode";
import {
  focusableSelector
} from "../const/AFocusableElements";
import {
  filter,
  isString,
  forEach,
  isFunction,
  get,
} from "lodash-es";

// @vue/component
export default {
  name: "AModal",
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
      default: "a_btn a_btn_secondary",
    },
    closeButtonText: {
      type: String,
      required: false,
      default: "Abbrechen",
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
      default: "h2",
    },
    headerText: {
      type: String,
      required: false,
      default: undefined,
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isCloseButtonHide: {
      type: Boolean,
      required: false,
    },
    isConfirm: {
      type: Boolean,
      required: false,
    },
    isDataFormHide: {
      type: Boolean,
      required: false,
    },
    isDataFormRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isModalHidden: {
      type: Boolean,
      required: false,
      default: false,
    },
    isRequired: {
      type: Boolean,
      required: false,
    },
    isSaveButtonHide: {
      type: Boolean,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    modalClass: {
      type: [String, Object],
      required: false,
      default: undefined,
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
      default: "a_btn a_btn_primary",
    },
    saveButtonText: {
      type: String,
      required: false,
      default: "Speichern",
    },
    selectorClose: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    size: {
      type: String,
      validator: value => ["small", "large", "xl", "xxl", "fullscreen"].indexOf(value) !== -1,
      default: undefined,
    },
    textRequired: {
      type: String,
      required: false,
      default: undefined,
    },
    withoutEscape: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "update:modelValue",
  ],
  setup(props, { emit }) {
    const updateModelLocal = model => {
      emit("update:modelValue", model);
    };

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
    listFiltered() {
      return filter(this.options.list, item => !item.readonly);
    },

    confirmOkLabel() {
      return this.confirmOptions.okLabel || "_BTN_SAVE_";
    },

    confirmCancelLabel() {
      return this.confirmOptions.cancelLabel || "_BTN_CANCEL_";
    },

    cancelLabel() {
      return this.options.cancelLabel || "_BTN_CANCEL_";
    },

    autocomplete() {
      return this.options.autocomplete || "on";
    },

    dependencyValues() {
      const DEPS = {};
      forEach(this.listFiltered, item => {
        if (item.dependency) {
          DEPS[item.id] = get(this.model, item.dependency);
        }
      });
      return DEPS;
    },

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
      if (!this.selectorClose) {
        return;
      }
      const SELECTOR_CLOSE = this.selectorClose;
      setTimeout(() => {
        if (isString(SELECTOR_CLOSE)) {
          this.onFocusByDestroyForSelector({ selector: SELECTOR_CLOSE });
        } else {
          forEach(SELECTOR_CLOSE, selector => {
            const STATUS_SUCCESS = this.onFocusByDestroyForSelector({ selector });
            if (STATUS_SUCCESS) {
              return false;
            }
          });
        }
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
                  h("span", null, this.headerText),
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
                  isHide: this.isDataFormHide,
                  isRender: this.isDataFormRender,
                  "onUpdate:modelValue": this.updateModelLocal,
                }, this.$slots),
                this.bodyHtml && h("div", {
                  innerHTML: this.bodyHtml,
                }),
                this.$slots.modalBodyAppend && this.$slots.modalBodyAppend(),
              ]),
              h("div", {
                ref: "modal_footer",
                class: "a_modal_footer",
              }, [
                this.$slots.modalFooter && this.$slots.modalFooter(),
                (!this.isSaveButtonHide && this.save) && h("button", {
                  type: "button",
                  class: this.saveButtonClass,
                  disabled: this.disabledLocal || this.disabledSave,
                  onClick: this.save,
                }, [
                  h("span", null, this.saveButtonText),
                ]),
                !this.isCloseButtonHide && h("button", {
                  type: "button",
                  class: this.closeButtonClass,
                  disabled: this.disabledLocal,
                  onClick: this.close,
                }, [
                  h("span", null, this.closeButtonText),
                ]),
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
