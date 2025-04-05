import {
  h,
} from "vue";
import {
  AFieldset,
  ARouterLinkConfigPluginOptions,
  UiAPI,
} from "../../index";

import DataFormAPI from "./compositionAPI/DataFormAPI";
import ModelLocalAPI from "./compositionAPI/ModelLocalAPI";
import ParamAPI from "./compositionAPI/ParamAPI";
import RouteAPI from "./compositionAPI/RouteAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ARouterLinkConfig",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    attributesFieldset: {
      type: Object,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.attributesFieldset,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    classColumn: {
      type: [String, Object],
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.classColumn,
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.classColumns,
    },
    classFieldset: {
      type: [String, Object],
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.classFieldset,
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
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.excludeRenderAttributes,
    },
    extra: {
      type: Object,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.extra,
    },
    hasBorder: {
      type: Boolean,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.hasBorder,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    helpTextParam: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.helpTextParam,
    },
    helpTextQuery: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.helpTextQuery,
    },
    helpTextRoute: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.helpTextRoute,
    },
    helpTextTarget: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.helpTextTarget,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_router_link_config_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    keyIdRoute: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.keyIdRoute,
    },
    keyLabelCallbackRoute: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyLabelRoute: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.keyLabelRoute,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.labelClass,
    },
    labelParam: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.labelParam,
    },
    labelQuery: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.labelQuery,
    },
    labelRoute: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.labelRoute,
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelTarget: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.labelTarget,
    },
    modelUndefined: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: "",
    },
    modelValue: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.readonlyDefault,
    },
    readonlyDefaultParam: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.readonlyDefaultParam,
    },
    readonlyDefaultQuery: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.readonlyDefaultQuery,
    },
    readonlyDefaultRoute: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.readonlyDefaultRoute,
    },
    readonlyDefaultTarget: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.readonlyDefaultTarget,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    routes: {
      type: Array,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.routes,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    sortOrderRoute: {
      type: String,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.sortOrderRoute,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    targets: {
      type: Array,
      required: false,
      default: () => ARouterLinkConfigPluginOptions.propsDefault.targets,
    },
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur",
  ],
  setup(props, context) {
    const {
      changeModel,
      htmlIdLocal,
    } = UiAPI(props, context);

    const {
      changeParamModel,
      changeQueryModel,
      changeRouteModel,
      changeTargetModel,
    } = ModelLocalAPI(props, {
      changeModel,
    });

    const {
      routePathKeyByKeyId,
      routesLocal,
    } = RouteAPI(props);

    const {
      childrenForParam,
      hasParam,
    } = ParamAPI(props, {
      changeParamModel,
      htmlIdLocal,
      routePathKeyByKeyId,
    });

    const {
      dataFormChildren,
    } = DataFormAPI(props, {
      changeQueryModel,
      changeRouteModel,
      changeTargetModel,
      childrenForParam,
      hasParam,
      htmlIdLocal,
      routesLocal,
    });

    return {
      dataFormChildren,
      hasParam,
      htmlIdLocal,
    };
  },
  render() {
    return h(AFieldset, {
      ...this.$attrs,
      alwaysTranslate: this.alwaysTranslate,
      attributesFieldset: this.attributesFieldset,
      classColumn: this.classColumn,
      classColumns: this.classColumns,
      classFieldset: this.classFieldset,
      disabled: this.disabled,
      errors: this.errors,
      excludeRenderAttributes: this.excludeRenderAttributes,
      extra: this.extra,
      hasBorder: this.hasBorder,
      helpText: this.helpText,
      htmlId: this.htmlId,
      id: this.id,
      idPrefix: this.idPrefix,
      inputAttributes: this.inputAttributes,
      isHide: this.isHide,
      isRender: this.isRender,
      label: this.label,
      labelClass: this.labelClass,
      labelScreenReader: this.labelScreenReader,
      modelUndefined: this.modelUndefined,
      modelValue: this.modelValue,
      readonly: this.readonly,
      readonlyDefault: this.readonlyDefault,
      required: this.required,
      slotName: this.slotName,
      children: this.dataFormChildren,
      "onUpdate:modelValue": this.$emit["update:modelValue"],
    });
  },
};
