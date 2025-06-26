import {
  defineAsyncComponent,
} from "vue";

import ModalCreateOrUpdate from "./ModalCreateOrUpdate/ModalCreateOrUpdate.vue";

import UiValidatedJsonModeManyMixin from "./UiValidatedJsonModeManyMixin";

import {
  gettext,
} from "../../../functions/utils";
import {
  get,
  isNil,
  maxBy,
} from "lodash-es";


export default {
  components: {
    ModalCreateOrUpdate,
    PuxModal: defineAsyncComponent(() => import("../../PuxModal/PuxModal.vue")),
  },
  mixins: [
    UiValidatedJsonModeManyMixin,
  ],
  data() {
    return {
      confirmShow: undefined,
      confirmOptions: undefined,
      statusModal: undefined,
      currentModel: undefined,
      currentKey: undefined,
    };
  },
  computed: {
    nextPos() {
      if (isNil(this.posField)) {
        return this.modelSize;
      }
      return get(maxBy(this.model, this.posField), this.posField);
    },
    canMove() {
      return !this.deactivateOrdering && (!isNil(this.posField) || this.isModeList);
    },
    btnAddText() {
      return "_BTN_UI_VALIDATED_JSON_ADD_ELEMENT_{{elementLabel}}_";
    },
    btnExtra() {
      return {
        elementLabel: gettext(this.elementLabel),
      };
    },
  },
  methods: {
    openModalCreate() {
      this.statusModal = true;
    },

    openModalUpdate(key) {
      this.currentModel = this.localModel[key];
      this.currentKey = key;
      this.statusModal = true;
    },

    closeModal({ model } = {}) {
      this.onCloseModal({ model });
      this.$nextTick(() => this.updateLabelModel());
      this.currentModel = undefined;
      this.currentKey = undefined;
      this.statusModal = false;
    },

    onCloseModal() {
    },

    openConfirmDelete(key) {
      this.confirmOptions = {
        title: "_TXT_UI_VALIDATED_JSON_ELEMENT_CONFIRM_DELETE_HEADER_{{elementLabel}}_",
        msg: "_MSG_UI_VALIDATED_JSON_ELEMENT_CONFIRM_DELETE_BODY_",
        okLabel: "_BTN_REMOVE_",
        okClass: "a_btn a_btn_primary",
        okCallback: () => this.deleteElement(key),
        cancelCallback: this.closeConfirmDelete,
        extra: {
          elementLabel: gettext(this.elementLabel),
        },
        loading: false,
      };
      this.confirmShow = true;
    },

    deleteElement(key) {
      this.closeConfirmDelete();
      const MODEL = this.removeElement(this.localModel, key);
      this.change({ currentModel: MODEL });
      this.$nextTick(() => this.updateLabelModel());
    },

    removeElement() {
    },

    closeConfirmDelete() {
      this.confirmShow = false;
    },

    isFirstElement(idx) {
      return idx === 0;
    },

    isLastElement(idx) {
      return idx >= (this.modelSize - 1);
    },

    moveUpElement(key) {
      const MODEL = this.onMoveUpElement(key);
      this.change({ currentModel: MODEL });
      this.$nextTick(() => this.updateLabelModel());
    },

    onMoveUpElement(key) {
      return this.localModel[key];
    },

    moveDownElement(key) {
      const MODEL = this.onMoveDownElement(key);
      this.change({ currentModel: MODEL });
      this.$nextTick(() => this.updateLabelModel());
    },

    onMoveDownElement(key) {
      return this.localModel[key];
    },

    hasErrors(key) {
      return !isNil(get(this.errors, key));
    },

    getErrors(key) {
      return get(this.errors, key);
    },

    getElementCls(key) {
      return this.hasErrors(key) ? "has-error" : "";
    },
  },
};
