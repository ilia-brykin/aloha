import {
  h,
} from "vue";
import {
  AFieldset,
  ARouterLinkConfigPluginOptions,
  ASelect,
  UiAPI,
} from "../../index";

import DataFormAPI from "./compositionAPI/DataFormAPI";
import ModelLocalAPI from "./compositionAPI/ModelLocalAPI";
import ParamAPI from "./compositionAPI/ParamAPI";
import RouteAPI from "./compositionAPI/RouteAPI";

import UiDependenciesMixinProps from "../mixins/UiDependenciesMixinProps";
import {
  getPropDefault,
} from "../../plugins/APropsDefaultPlugin";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ARouterLinkConfig",
  inheritAttrs: false,
  mixins: [
    UiDependenciesMixinProps,
  ],
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    attributesFieldset: {
      type: Object,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "attributesFieldset", {}),
    },
    attributesRoute: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    classColumn: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "classColumn", "a_column a_column_12"),
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "classColumns", "a_columns a_columns_count_12 a_columns_gap_y_1"),
    },
    classFieldset: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "classFieldset"),
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
      default: () => getPropDefault("ARouterLinkConfig", "excludeRenderAttributes", []),
    },
    extra: {
      type: Object,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "extra"),
    },
    filterRoutes: {
      type: Function,
      required: false,
      default: undefined,
    },
    hasBorder: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "hasBorder", true),
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    helpTextParam: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "helpTextParam", "_A_ROUTER_LINK_CONFIG_HELP_TEXT_PARAM_"),
    },
    helpTextQuery: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "helpTextQuery", "_A_ROUTER_LINK_CONFIG_HELP_TEXT_QUERY_"),
    },
    helpTextRoute: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "helpTextRoute", "_A_ROUTER_LINK_CONFIG_HELP_TEXT_ROUTE_"),
    },
    helpTextTarget: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "helpTextTarget", "_A_ROUTER_LINK_CONFIG_HELP_TEXT_TARGET_"),
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
      default: () => getPropDefault("ARouterLinkConfig", "keyIdRoute", "name"),
    },
    keyLabelCallbackRoute: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyLabelRoute: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "keyLabelRoute", "path"),
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "labelClass"),
    },
    labelDescription: {
      type: String,
      required: false,
      default: undefined,
    },
    labelParam: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "labelParam", "_A_ROUTER_LINK_CONFIG_LABEL_PARAM_"),
    },
    labelQuery: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "labelQuery", "_A_ROUTER_LINK_CONFIG_LABEL_QUERY_"),
    },
    labelRoute: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "labelRoute", "_A_ROUTER_LINK_CONFIG_LABEL_ROUTE_"),
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelTarget: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "labelTarget", "_A_ROUTER_LINK_CONFIG_LABEL_TARGET_"),
    },
    modelUndefined: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: "",
    },
    modelValue: {
      type: [String, Array, Object],
      required: false,
      default: undefined,
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
      default: () => getPropDefault("ARouterLinkConfig", "readonlyDefault", ""),
    },
    readonlyDefaultParam: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "readonlyDefaultParam"),
    },
    readonlyDefaultQuery: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "readonlyDefaultQuery"),
    },
    readonlyDefaultRoute: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "readonlyDefaultRoute"),
    },
    readonlyDefaultTarget: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "readonlyDefaultTarget"),
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    routes: {
      type: Array,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "routes", ARouterLinkConfigPluginOptions.routes),
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    sortOrderRoute: {
      type: String,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "sortOrderRoute", "asc"),
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    targets: {
      type: Array,
      required: false,
      default: () => getPropDefault("ARouterLinkConfig", "targets", [
        {
          id: "_blank",
          label: "_A_TARGET_BLANK_",
        },
        {
          id: "_self",
          label: "_A_TARGET_SELF_",
        },
        {
          id: "_parent",
          label: "_A_TARGET_PARENT_",
        },
        {
          id: "_top",
          label: "_A_TARGET_TOP_",
        },
      ]),
    },
    type: {
      type: String,
      required: false,
      default: "routerLinkConfig",
      validator: value => ["routerLinkConfig", "selectRoute", "multiselectRoute"].indexOf(value) !== -1,
    },
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur",
  ],
  setup(props, context) {
    const {
      htmlIdLocal,
    } = UiAPI(props, context);

    const {
      changeModel,
      changeParamModel,
      changeQueryModel,
      changeRouteModel,
      changeRouteModelSelect,
      changeTargetModel,
      modelLocal,
    } = ModelLocalAPI(props, context);

    const {
      routePathKeyByKeyId,
      routesLocal,
      routeType,
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
      changeModel,
      changeRouteModelSelect,
      dataFormChildren,
      hasParam,
      htmlIdLocal,
      modelLocal,
      routesLocal,
      routeType,
    };
  },
  render() {
    if (this.type === "routerLinkConfig") {
      return h(AFieldset, {
        ...this.$attrs,
        id: this.id,
        alwaysTranslate: this.alwaysTranslate,
        attributesFieldset: this.attributesFieldset,
        change: this.changeModel,
        children: this.dataFormChildren,
        classColumn: this.classColumn,
        classColumns: this.classColumns,
        classFieldset: this.classFieldset,
        disabled: this.disabled,
        dependencies: this.dependencies,
        errors: this.errors,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        hasBorder: this.hasBorder,
        helpText: this.helpText,
        htmlId: this.htmlId,
        idPrefix: this.idPrefix,
        isHide: this.isHide,
        isRender: this.isRender,
        label: this.label,
        labelClass: this.labelClass,
        labelDescription: this.labelDescription,
        labelScreenReader: this.labelScreenReader,
        modelUndefined: this.modelUndefined,
        modelDependencies: this.modelDependencies,
        modelValue: this.modelLocal,
        readonly: this.readonly,
        readonlyValueParentClass: this.readonlyValueParentClass,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        slotName: this.slotName,
      }, this.$slots);
    }

    if (this.type === "selectRoute" || this.type === "multiselectRoute") {
      return h(ASelect, {
        ...this.$attrs,
        id: this.id,
        alwaysTranslate: this.alwaysTranslate,
        change: this.changeRouteModelSelect,
        data: this.routesLocal,
        disabled: this.disabled,
        dependencies: this.dependencies,
        errors: this.errors,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        htmlId: this.htmlId,
        idPrefix: this.idPrefix,
        isHide: this.isHide,
        isRender: this.isRender,
        keyId: this.keyIdRoute,
        keyLabel: this.keyLabelRoute,
        keyLabelCallback: this.keyLabelCallbackRoute,
        label: this.label,
        labelClass: this.labelClass,
        labelDescription: this.labelDescription,
        labelScreenReader: this.labelScreenReader,
        modelUndefined: this.modelUndefined,
        modelDependencies: this.modelDependencies,
        modelValue: this.modelLocal,
        readonly: this.readonly,
        readonlyValueParentClass: this.readonlyValueParentClass,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        search: true,
        sortOrder: this.sortOrderRoute,
        type: this.routeType,
        ...this.attributesRoute,
      }, this.$slots);
    }
  },
};
