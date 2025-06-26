import {
  AButton,
  AHttpAPI_getListHttp as getListHttp,
  ATranslation,
  filterBoolean,
  filterCurrency,
} from "aloha-vue";

import UiValidatedJsonModeMixin from "./UiValidatedJsonModeMixin";

import {
  setErrorLabel,
} from "./compositionAPI/UiValidatedJsonErrorLabelsAPI";

import {
  gettext,
  replaceText,
} from "../../../functions/utils";
import {
  toFormElementFromParameter,
} from "../../../functions/mappingForParameterToFormElement";
import {
  assign,
  cloneDeep,
  filter,
  forEach,
  get,
  isArray,
  isNil,
  isString,
  join,
  map,
  maxBy,
  pick,
  pickBy,
  size,
  sortBy,
  uniqueId,
} from "lodash-es";


export default {
  components: {
    AButton,
    ATranslation,
  },
  mixins: [
    UiValidatedJsonModeMixin,
  ],
  data() {
    return {
      showDetails: {},
      labelModel: undefined,
    };
  },
  computed: {
    modelSize() {
      return size(this.model);
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
    deactivateOrdering() {
      return this.options.deactivate_ordering || this.options.deactivateOrdering;
    },
    deactivatePreview() {
      return this.options.deactivate_preview || this.options.deactivatePreview;
    },
    hidePos() {
      return this.options.hide_pos || this.options.hidePos;
    },
    nextPos() {
      if (isNil(this.posField)) {
        return;
      }
      return get(maxBy(this.model, this.posField), this.posField);
    },
    iterationModel() {
      const ITER = map(this.localModel, (el, key) => key);
      if (!isNil(this.posField)) {
        return sortBy(ITER, key => get(this.localModel, [key, this.posField]));
      }
      return sortBy(ITER, key => key);
    },
    elementLabels() {
      if (!isString(this.elementTemplate)) {
        return {};
      }
      const LABELS = {};
      const MODEL = this.labelModel || this.localModel;
      forEach(this.iterationModel, (key, index) => {
        let currentLabel = replaceText({
          text: gettext(this.elementTemplate),
          object: assign({ element_label: this.elementLabel }, MODEL[key] || {}),
        });
        if (!this.hidePos) {
          currentLabel = `${ index + 1 }. ${ currentLabel }`;
        }
        LABELS[key] = currentLabel;
        setErrorLabel({
          id: this.getElementId(key),
          label: currentLabel,
        });
      });
      return LABELS;
    },
  },
  watch: {
    model() {
      if (this.isReadonly) {
        this.updateLabelModel();
      }
    },
  },
  created() {
    this.updateLabelModel();
  },
  methods: {
    updateLabelModel() {
      if (!isString(this.elementTemplate)) {
        return;
      }
      const RELEVANTE_KEYS = filter(
        map(
          [...this.elementTemplate.matchAll(/\{\{([\w\d_]+)\}\}/ig)],
          match => match[1],
        ),
        v => v !== "element_label",
      );
      if (size(RELEVANTE_KEYS) === 0) {
        return;
      }
      const FIELDS = pick(this.fields, RELEVANTE_KEYS);
      const KATALOG_FIELDS = toFormElementFromParameter(
        { obj: pickBy(FIELDS, field => !isNil(field.katalog)) },
      ).list;
      if (size(KATALOG_FIELDS) > 0) {
        Promise.all(
          map(KATALOG_FIELDS, field => getListHttp({
            url: field.url,
            apiSaveId: field.apiSaveId,
            urlParams: field.urlParams,
          })),
        ).then(responses => {
          const KATALOG_DATA = {};
          forEach(KATALOG_FIELDS, (field, idx) => KATALOG_DATA[field.id] = responses[idx]);
          this.buildLabelModel(FIELDS, KATALOG_DATA);
        });
      } else {
        this.buildLabelModel(FIELDS, {});
      }
    },

    buildLabelModel(fields, katalogData) {
      const LABEL_MODEL = {};
      forEach(this.localModel, (model, mkey) => {
        const LABELS = {};
        forEach(fields, (field, key) => {
          let selectModel;
          const TYP = field.typ || field.type;
          if (isNil(model[key])) {
            LABELS[key] = "-";
            return;
          }
          if (TYP === "single_choice") {
            selectModel = [model[key]];
          } else {
            selectModel = model[key];
          }
          if (!isNil(katalogData[key])) {
            const ENTRIES = map(
              filter(katalogData[key], entry => selectModel.indexOf(entry.pk) !== -1),
              entry => get(entry, field.keyLabel || "bez", entry.pk),
            );
            LABELS[key] = this.getSelectValueLabel(ENTRIES, selectModel);
          } else if (isArray(field.choices) || isArray(field.data)) {
            const ARRAY = field.choices || field.data;
            if (size(ARRAY) > 0) {
              let filterFunc;
              let mapFunc;
              if (isArray(ARRAY[0])) {
                filterFunc = entry => selectModel.indexOf(entry[0]) !== -1;
                mapFunc = entry => gettext(entry[1]);
              } else {
                filterFunc = entry => selectModel.indexOf(entry[field.keyId]) !== -1;
                mapFunc = entry => gettext(entry[field.keyLabel]);
              }
              const ENTRIES = map(filter(ARRAY, filterFunc), mapFunc);
              LABELS[key] = this.getSelectValueLabel(ENTRIES, selectModel);
            }
          } else if (TYP === "multi_select") {
            const ENTRIES = cloneDeep(selectModel);
            LABELS[key] = this.getSelectValueLabel(ENTRIES, selectModel);
          } else if (TYP === "bool" || TYP === "boolean") {
            LABELS[key] = filterBoolean(model[key], {
              trueValue: gettext(get(field, "options.true_label", "_TXT_JA_")),
              falseValue: gettext(get(field, "options.false_label", "_TXT_NEIN_")),
            });
          } else if (TYP === "decimal" || TYP === "float") {
            LABELS[key] = filterCurrency(model[key], { suffix: "", digits: get(field, "options.decimal_places", 2), digitGrouping: true });
          } else {
            LABELS[key] = model[key];
          }
        });
        LABEL_MODEL[mkey] = LABELS;
      });
      this.labelModel = LABEL_MODEL;
    },

    getSelectValueLabel(entries, selectModel) {
      if (size(entries) === 0 && size(selectModel) > 0) {
        return gettext("_LBL_UI_VALIDATED_JSON_SELECT_VALUE_LABEL_EMPTY_");
      }
      const MAPPED_ENTRIES = map(entries, el => size(el) > 0 ? el : gettext("_LBL_UI_VALIDATED_JSON_SELECT_VALUE_LABEL_ELEMENT_NO_LABEL_"));
      MAPPED_ENTRIES.sort();
      if (size(MAPPED_ENTRIES) < size(selectModel)) {
        MAPPED_ENTRIES.push(replaceText({
          text: gettext("_LBL_UI_VALIDATED_JSON_SELECT_VALUE_LABEL_SOME_NOT_FOUND_{{anz}}_"),
          object: { anz: size(selectModel) - size(MAPPED_ENTRIES) },
        }));
      }
      return join(MAPPED_ENTRIES, ", ");
    },

    getIterationKey(key) {
      return uniqueId(key);
    },

    getBtnId(btn, key) {
      return `${ this.idPrefix }_${ btn }_${ key || "" }`;
    },

    getElementId(key) {
      return `${ this.idPrefix }_${ key }`;
    },

    toggleElement(key) {
      const SHOW_DETAILS = cloneDeep(this.showDetails);
      SHOW_DETAILS[key] = !this.isElementDetailsVisible(key);
      this.showDetails = SHOW_DETAILS;
    },

    isElementDetailsVisible(key) {
      return get(this.showDetails, key, false);
    },

    getElementDetailsToggleTitle(key) {
      if (this.isElementDetailsVisible(key)) {
        return "_BTN_UI_VALIDATED_JSON_DETAILS_TOGGLE_HIDE_";
      }
      return "_BTN_UI_VALIDATED_JSON_DETAILS_TOGGLE_SHOW_";
    },

    getElementDetailsToggleIcon(key) {
      if (this.isElementDetailsVisible(key)) {
        return "eye-close";
      }
      return "eye";
    },
  },
};
