import {
  cloneDeep,
  forEach,
  size,
} from "lodash-es";


const UI_VALIDATED_JSON_MODE_LIST = "list";
const UI_VALIDATED_JSON_MODE_JSON = "json";
const UI_VALIDATED_JSON_MODE_SINGLE = "single";

export default {
  computed: {
    mode() {
      if (this.many && !this.asJson) {
        return UI_VALIDATED_JSON_MODE_LIST;
      } else if (this.many) {
        return UI_VALIDATED_JSON_MODE_JSON;
      }
      return UI_VALIDATED_JSON_MODE_SINGLE;
    },
    isModeList() {
      return this.mode === UI_VALIDATED_JSON_MODE_LIST;
    },
    isModeJson() {
      return this.mode === UI_VALIDATED_JSON_MODE_JSON;
    },
    isModeSingle() {
      return this.mode === UI_VALIDATED_JSON_MODE_SINGLE;
    },
    localModel() {
      return this.model || (this.isModeList ? [] : {});
    },
    modelSize() {
      return size(this.localModel);
    },
    many() {
      return this.options.many;
    },
    asJson() {
      return this.options.as_json || this.options.asJson;
    },
    keyField() {
      return this.options.key_field || this.options.keyField;
    },
    posField() {
      return this.options.pos_field || this.options.posField;
    },
    minLength() {
      return this.options.min_length || this.options.minLength;
    },
    maxLength() {
      return this.options.max_length || this.options.maxLength;
    },
    elementLabel() {
      return this.options.element_label || this.options.elementLabel;
    },
    elementTemplate() {
      return this.options.element_template || this.options.elementTemplate;
    },
    fields() {
      return this.options.fields;
    },
    fieldsReadonly() {
      const READONLY_FIELDS = cloneDeep(this.fields);
      forEach(READONLY_FIELDS, el => el.readonly = true);
      return READONLY_FIELDS;
    },
    translateExtra() {
      return { elementLabel: this.elementLabel };
    },
    isReadonly() {
      return false;
    },
    isRequired() {
      return this.options.required;
    },
    showReadonly() {
      return this.options.show_readonly || this.options.showReadonly;
    },
  },
};
