import {
  h,
} from "vue";
import {
  APlacements,
  ASelect,
} from "../../index";

import ASelectIconSlot from "./ASelectIconSlot/ASelectIconSlot";

import EventsAPI from "./compositionAPI/EventsAPI";
import IconsAPI from "./compositionAPI/IconsAPI";
import TypeAPI from "./compositionAPI/TypeAPI";

import {
  ASelectPluginOptions,
} from "../../plugins/ASelectPlugin";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ASelectIcon",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    buttonClass: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.buttonClass,
    },
    buttonClassDefault: {
      type: [String, Object],
      required: false,
      default: "a_form_control a_select_toggle",
    },
    caretIcon: {
      type: [String, Object],
      required: false,
      default: () => ASelectPluginOptions.propsDefault.caretIcon,
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
      default: () => ASelectPluginOptions.propsDefault.countMultiselect,
    },
    data: {
      type: Array,
      required: false,
      default: undefined,
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    deselectable: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.deselectable,
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
      default: () => ASelectPluginOptions.propsDefault.exceededItemsDeletable,
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
      default: () => uniqueId("a_select_icon_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inBody: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.inBody,
    },
    isCloseByClick: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isCloseByClick,
    },
    isDeselectAll: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isDeselectAll,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: true,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSelectAll: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isSelectAll,
    },
    isSelectionCloseable: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.isSelectionCloseable,
    },
    keyDisabled: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.keyDisabled,
    },
    keyDisabledCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyGroup: {
      type: [String, Number, Array],
      required: false,
      default: () => ASelectPluginOptions.propsDefault.keyGroup,
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
    keyTitle: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.keyTitle,
    },
    keyTitleCallback: {
      type: Function,
      required: false,
      default: undefined,
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
      default: () => ASelectPluginOptions.propsDefault.maxCountMultiselect,
      validator: value => value > 0,
    },
    menuWidthType: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.menuWidthType,
      validator: value => ["as_button", "by_content"].indexOf(value) !== -1,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      required: false,
      default: null,
    },
    modelValue: {
      type: [String, Array],
      required: false,
      default: () => ASelectPluginOptions.propsDefault.modelValue,
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
      default: () => ASelectPluginOptions.propsDefault.placement,
      validator: placement => APlacements.indexOf(placement) !== -1,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.popperContainerId,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.readonlyDefault,
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
    searchTextInHtml: {
      type: Boolean,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.searchTextInHtml,
    },
    searchTimeout: {
      type: Number,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.searchTimeout,
    },
    selectMenuClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    slotName: {
      type: String,
      required: false,
      default: "icon",
    },
    sortOrder: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.sortOrder,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    textDeselectAll: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.textDeselectAll,
    },
    textSelectAll: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.textSelectAll,
    },
    type: {
      type: String,
      required: false,
      default: () => ASelectPluginOptions.propsDefault.type,
      validator: value => ["select", "selectIcon", "multiselect", "multiselectIcon"].indexOf(value) !== -1,
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
      iconsLocal,
    } = IconsAPI(props);

    const {
      blur,
      focus,
      open,
      updateModelValue,
    } = EventsAPI(context);

    const {
      typeLocal,
    } = TypeAPI(props);

    return {
      blur,
      focus,
      iconsLocal,
      open,
      typeLocal,
      updateModelValue,
    };
  },
  render() {
    return h(ASelect, {
      ...this.$props,
      type: this.typeLocal,
      data: this.iconsLocal,
      onBlur: this.blur,
      onFocus: this.focus,
      onOpen: this.open,
      "onUpdate:modelValue": this.updateModelValue,
    }, {
      icon: ({ item, label, labelFiltered, inDropdown }) => {
        return h(ASelectIconSlot, {
          icon: item.value,
          label: label,
          labelFiltered: labelFiltered,
          inDropdown: inDropdown,
        });
      },
      ...this.$slots,
    });
  },
};
