import {
  defineAsyncComponent,
} from "vue";
import {
  AButton,
} from "aloha-vue";

import UiValidatedJsonModeMixin from "../UiValidatedJsonModeMixin";

import {
  gettext,
  replaceText,
} from "../../../../functions/utils";
import {
  initModelFromList,
  toFormElementFromParameter,
} from "../../../../functions/mappingForParameterToFormElement";
import {
  assign,
  cloneDeep,
  find,
  forEach,
  get,
  isEqual,
  isNil,
  omit,
  size,
  some,
  toLower,
} from "lodash-es";


// @vue/component
export default {
  name: "ModalCreateOrUpdate",
  components: {
    AButton,
    PuxModal: defineAsyncComponent(() => import("../../../PuxModal/PuxModal.vue")),
  },
  mixins: [
    UiValidatedJsonModeMixin,
  ],
  props: {
    close: {
      type: Function,
      default: () => {},
    },
    elementLabels: {
      type: Object,
      default: undefined,
    },
    elements: {
      type: [Object, Array],
      default: undefined,
    },
    idPrefix: {
      type: String,
      default: undefined,
    },
    nextPos: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      modelLocal: {},
      fieldList: [],
      errorsLocal: {},
    };
  },
  computed: {
    modalHeader() {
      return !isNil(this.model)
      ? "_TXT_UI_VALIDATED_JSON_MODAL_UPDATE_TITLE_{{elementLabel}}_"
      : "_TXT_UI_VALIDATED_JSON_MODAL_CREATE_TITLE_{{elementLabel}}_";
    },

    btnText() {
      return !isNil(this.model)
      ? "_BTN_UI_VALIDATED_JSON_UPDATE_ELEMENT_{{elementLabel}}_"
      : "_BTN_UI_VALIDATED_JSON_ADD_ELEMENT_{{elementLabel}}_";
    },

    translateExtra() {
      return {
        elementLabel: gettext(this.elementLabel),
      };
    },

    anyRequired() {
      let required = false;
      forEach(this.fieldList, el => {
        if (el.required) {
          required = true;
          return false;
        }
      });
      return required;
    },

    someRequiredEmpty() {
      if (this.anyRequired) {
        return some(this.fieldList, field => {
          return field.type !== "boolean" &&
            field.required === true &&
            !this.modelLocal[field.id];
        });
      }

      return false;
    },

    modalOptions() {
      return {
        showCloseButton: true,
        required: this.anyRequired,
        list: this.fieldList,
        extra: this.translateExtra,
      };
    },

    isDisabledSaveButton() {
      return size(this.errorsLocal) > 0
        || (!isNil(this.keyField) && isNil(get(this.modelLocal, this.keyField)))
        || this.someRequiredEmpty;
    },

    currentErrors() {
      const ERR = assign({}, this.errors, this.errorsLocal);
      if (size(ERR) > 0) {
        return ERR;
      }
      return undefined;
    },

    currentErrorsClone() {
      return cloneDeep(this.currentErrors);
    },
  },
  created() {
    this.updateFields({ init: true });
    this.updateModel({ init: true });
  },
  methods: {
    update() {
      this.updateFields();
      this.updateModel();
    },

    updateFields({ init = false } = {}) {
      const LIST = toFormElementFromParameter({
        obj: this.fields,
        showLabel: true,
        htmlIdPrefix: `modal_${ this.idPrefix }`,
      }).list;
      this.initPosField(LIST);
      this.initKeyField(LIST);
      if (this.options.typ === "typed_form") {
        const MODEL = init ? this.model : this.modelLocal;
        const BASE_FIELD_TYPE = this.options.base_field_type;
        const BASE_FIELD_TYPE_VALUE = MODEL?.[BASE_FIELD_TYPE];
        const ADDITIONAL_FIELDS = BASE_FIELD_TYPE_VALUE && this.options.field_form?.typed?.[BASE_FIELD_TYPE_VALUE]
          ? toFormElementFromParameter({
            obj: this.options.field_form.typed[BASE_FIELD_TYPE_VALUE],
            showLabel: true,
            htmlIdPrefix: `modal_${ this.idPrefix }`,
          }).list
          : [];
        this.fieldList = [
          ...LIST,
          ...ADDITIONAL_FIELDS,
        ];

        return;
      }

      this.fieldList = LIST;
    },

    updateModel({ init = false } = {}) {
      const MODEL_LOCAL = {};
      if (init) {
        this.modelLocal = cloneDeep(this.model || {});
      }
      const DEFAULT_MODEL = initModelFromList({ list: this.fieldList });
      forEach(DEFAULT_MODEL, (v, id) => {
        MODEL_LOCAL[id] = get(this.modelLocal, id);
        if (isNil(this.modelLocal[id])) {
          MODEL_LOCAL[id] = cloneDeep(v);
        }
      });

      this.modelLocal = MODEL_LOCAL;
    },

    initPosField(fieldList) {
      if (!isNil(this.posField)) {
        const POS_FIELD = find(fieldList, field => field.id === this.posField);
        POS_FIELD.default = this.nextPos;
      }
    },

    initKeyField(fieldList) {
      if (!isNil(this.keyField)) {
        const KEY_FIELD = find(fieldList, field => field.id === this.keyField);
        KEY_FIELD.change = this.onChangeKeyField;
      }
    },

    onChangeKeyField({ currentModel, options }) {
      if (options.typ !== "single_choice") {
        this.modelLocal[this.keyField] = this.tokenize(currentModel);
      }
      const ERR = this.getFieldUniqueError(currentModel, this.keyField);
      if (!isNil(ERR)) {
        this.errorsLocal = assign({}, this.errorsLocal, { [this.keyField]: [ERR] });
      } else if (!isNil(get(this.errorsLocal, this.keyField))) {
        this.errorsLocal = omit(this.errorsLocal, this.keyField);
      }
    },

    tokenize(str) {
      if (isNil(str)) {
        return;
      }
      return toLower(str).replace(/[^a-z0-9]/g, "");
    },

    getFieldUniqueError(currentModel, id) {
      let other;
      forEach(this.elements, (el, key) => {
        if (isEqual(this.model, el)) {
          return;
        }
        if (get(el, id) === currentModel) {
          other = this.elementLabels[key];
          return false;
        }
      });
      if (!other) {
        return;
      }
      return replaceText({
        text: gettext("_ERR_UI_VALIDATED_JSON_MODAL_UNIQUE_{{other}}_"),
        object: { other: other },
      });
    },

    save() {
      if (this.isDisabledSaveButton) {
        return;
      }
      const DATA = cloneDeep(this.modelLocal) || {};
      const KEY_FIELD = find(this.fieldList, field => field.id === this.keyField);
      if (!isNil(this.keyField) && KEY_FIELD.typ !== "single_choice") {
        DATA[this.keyField] = this.tokenize(get(DATA, this.keyField, ""));
      }

      this.close({ model: DATA });
    },
  },
};
