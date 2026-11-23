import {
  h,
} from "vue";
import {
  APlacements,
  ASelect,
  getTranslatedText,
} from "../../index";

import DataAPI from "./compositionAPI/DataAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import KeyLabelCallbackAPI from "./compositionAPI/KeyLabelCallbackAPI";
import TypeAPI from "./compositionAPI/TypeAPI";

import ChevronDown from "../../AIcon/Icons/ChevronDown";
import {
  getPropDefault,
} from "../../plugins/AComponentsPlugin";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ASelectStyle",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    buttonClass: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "buttonClass"),
    },
    buttonClassDefault: {
      type: [String, Object],
      required: false,
      default: "a_form_control a_select_toggle",
    },
    caretIcon: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("ASelectStyle", "caretIcon", ChevronDown),
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    class: {
      type: [String, Object],
      required: false,
    },
    countMultiselect: {
      type: Number,
      required: false,
      default: () => getPropDefault("ASelectStyle", "countMultiselect", 4),
    },
    data: {
      type: Array,
      required: false,
      default: undefined,
    },
    dataExtended: {
      type: Array,
      required: false,
      default: () => [],
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    deselectable: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ASelectStyle", "deselectable", true),
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    errorsAll: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    exceededItemsDeletable: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ASelectStyle", "exceededItemsDeletable", true),
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    filterGroups: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    hasCaret: {
      type: Boolean,
      required: false,
      default: true,
    },
    helpText: {
      type: String,
      required: false,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_select_styles_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inBody: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ASelectStyle", "inBody", true),
    },
    isCloseByClick: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ASelectStyle", "isCloseByClick"),
    },
    isDeselectAll: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ASelectStyle", "isDeselectAll", false),
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    labelPosition: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["float", "inset", "top"].indexOf(value) !== -1,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSelectAll: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ASelectStyle", "isSelectAll", false),
    },
    isSelectionCloseable: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ASelectStyle", "isSelectionCloseable", true),
    },
    keyDisabled: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "keyDisabled"),
    },
    keyDisabledCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyGroup: {
      type: [String, Number, Array],
      required: false,
      default: () => ["groupName", "subGroupName"],
    },
    keyGroupLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: "value",
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyTitleCallback: {
      type: Function,
      required: false,
      default: ({ item }) => getTranslatedText({
        placeholder: item.label,
      }),
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelDescription: {
      type: String,
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    maxCountMultiselect: {
      type: Number,
      required: false,
      default: () => getPropDefault("ASelectStyle", "maxCountMultiselect"),
      validator: value => value > 0,
    },
    menuWidthType: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "menuWidthType", "as_button"),
      validator: value => ["as_button", "by_content"].indexOf(value) !== -1,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelValue: {
      type: [String, Array],
      required: false,
      default: () => getPropDefault("ASelectStyle", "modelValue"),
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    placeholder: {
      type: String,
      required: false,
      default: undefined,
    },
    placement: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "placement", "bottom-end"),
      validator: placement => APlacements.indexOf(placement) !== -1,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "popperContainerId", "a_select_container"),
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyValueParentClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "readonlyDefault", ""),
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    search: {
      type: Boolean,
      required: false,
      default: true,
    },
    searchTimeout: {
      type: Number,
      required: false,
      default: () => getPropDefault("ASelectStyle", "searchTimeout", 0),
    },
    selectMenuClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    sortOrder: {
      type: String,
      required: false,
      default: () => "asc",
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    sortOrderGroup: {
      type: String,
      required: false,
      default: "asc",
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    textDeselectAll: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "textDeselectAll", "_A_SELECT_DESELECT_ALL_"),
    },
    textSelectAll: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "textSelectAll", "_A_SELECT_SELECT_ALL_"),
    },
    translateGroup: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ASelectStyle", "translateGroup", false),
    },
    type: {
      type: String,
      required: false,
      default: () => getPropDefault("ASelectStyle", "type", "select"),
      validator: value => ["select", "selectStyle", "multiselect", "multiselectStyle"].indexOf(value) !== -1,
    },
  },
  emits: [
    "blur",
    "focus",
    "open",
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      blur,
      focus,
      open,
      updateModelValue,
    } = EventsAPI(context);

    const {
      typeLocal,
    } = TypeAPI(props);

    const {
      dataLocal,
    } = DataAPI(props);

    const {
      keyLabelCallback,
    } = KeyLabelCallbackAPI();

    return {
      blur,
      dataLocal,
      focus,
      keyLabelCallback,
      open,
      typeLocal,
      updateModelValue,
    };
  },
  render() {
    return h(ASelect, {
      ...this.$props,
      keyLabelCallback: this.keyLabelCallback,
      translateData: true,
      type: this.typeLocal,
      data: this.dataLocal,
      searchInGroup: false,
      searchTextInHtml: true,
      onBlur: this.blur,
      onFocus: this.focus,
      onOpen: this.open,
      "onUpdate:modelValue": this.updateModelValue,
      filterGroups: undefined,
      dataExtended: undefined,
    }, this.$slots);
  },
};
