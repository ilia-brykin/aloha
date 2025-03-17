import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFieldset from "../AFieldset/AFieldset";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import AJson from "../AJson/AJson";
import ASelect from "../ASelect/ASelect";

import AttributesAPI from "../ACheckbox/compositionAPI/AttributesAPI";
import ModelLocalAPI from "./compositionAPI/ModelLocalAPI";
import ParamAPI from "./compositionAPI/ParamAPI";
import RouteAPI from "./compositionAPI/RouteAPI";
import TextAfterLabelAPI from "../ACheckbox/compositionAPI/TextAfterLabelAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiDisabledAPI from "../compositionApi/UiDisabledAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  routerLinkConfigPluginOptions,
} from "../../plugins/ARouterLinkConfigPlugin";
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
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    classColumn: {
      type: [String, Object],
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.classColumn,
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.classColumns,
    },
    classFieldset: {
      type: [String, Object],
      required: false,
      default: undefined,
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
      default: () => [],
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    hasBorder: {
      type: Boolean,
      required: false,
      default: true,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    helpTextParam: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.helpTextParam,
    },
    helpTextQuery: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.helpTextQuery,
    },
    helpTextRoute: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.helpTextRoute,
    },
    helpTextTarget: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.helpTextTarget,
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
      default: () => routerLinkConfigPluginOptions.propsDefault.keyIdRoute,
    },
    keyLabelCallbackRoute: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyLabelRoute: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.keyLabelRoute,
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
    labelParam: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.labelParam,
    },
    labelQuery: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.labelQuery,
    },
    labelRoute: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.labelRoute,
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelTarget: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.labelTarget,
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
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    routes: {
      type: Array,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.routes,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    sortOrderRoute: {
      type: String,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.sortOrderRoute,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    targets: {
      type: Array,
      required: false,
      default: () => routerLinkConfigPluginOptions.propsDefault.targets,
    },
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur",
  ],
  setup(props, context) {
    const {
      disabledAttribut,
    } = UiDisabledAPI(props);

    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      textAfterLabel,
    } = TextAfterLabelAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      groupId,
    } = AttributesAPI(props, {
      htmlIdLocal,
    });

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
      htmlIdLocal,
      routePathKeyByKeyId,
    });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      changeParamModel,
      changeQueryModel,
      changeRouteModel,
      changeTargetModel,
      childrenForParam,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      groupId,
      hasParam,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
      routesLocal,
      textAfterLabel,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }
    
    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__parent",
      }, [
        h("fieldset", {
          id: this.htmlIdLocal,
          tabindex: -1,
          class: ["a_fieldset", this.classFieldset, {
            a_fieldset_invalid: this.isErrors,
            a_fieldset_no_border: !this.hasBorder,
          }],
          "aria-describedby": this.ariaDescribedbyLocal,
        }, [
          (this.label || this.labelScreenReader) ?
            h(AElement, {
              type: "text",
              alwaysTranslate: this.alwaysTranslate,
              tag: "legend",
              class: [
                "a_legend",
                {
                  a_legend_invalid: this.isErrors,
                },
                this.labelClass,
              ],
              extra: this.extra,
              html: this.label,
              textScreenReader: this.labelScreenReader,
              textAfter: this.textAfterLabel,
            }) :
            "",
          h("div", {
            id: this.groupId,
            class: [
              this.classColumns,
              "a_fieldset__content",
            ],
          }, [
            h("div", {
              class: this.classColumn,
            }, [
              h(ASelect, {
                id: "route",
                change: this.changeRouteModel,
                data: this.routesLocal,
                deselectable: true,
                helpText: this.helpTextRoute,
                idPrefix: this.htmlIdLocal,
                isLabelFloat: false,
                keyId: this.keyIdRoute,
                keyLabel: this.keyLabelRoute,
                keyLabelCallback: this.keyLabelCallbackRoute,
                label: this.labelRoute,
                modelValue: this.modelValue.route,
                required: this.required,
                search: true,
                sortOrder: this.sortOrderRoute,
                type: "select",
              }),
            ]),
            this.hasParam ?
              h("div", {
                class: this.classColumn,
              }, [
                h(AFieldset, {
                  id: "param",
                  change: this.changeParamModel,
                  children: this.childrenForParam,
                  helpText: this.helpTextParam,
                  idPrefix: this.htmlIdLocal,
                  label: this.labelParam,
                  modelValue: this.modelValue.param || {},
                  required: this.required,
                }),
              ]) :
              "",
            this.modelValue.route ?
              h("div", {
                class: this.classColumn,
              }, [
                h(AJson, {
                  id: "query",
                  change: this.changeQueryModel,
                  heightCss: "100px",
                  helpText: this.helpTextQuery,
                  idPrefix: this.htmlIdLocal,
                  label: this.labelQuery,
                  modelValue: this.modelValue.query,
                }),
              ]) :
              "",
            this.modelValue.route ?
              h("div", {
                class: this.classColumn,
              }, [
                h(ASelect, {
                  id: "target",
                  change: this.changeTargetModel,
                  data: this.targets,
                  deselectable: true,
                  helpText: this.helpTextTarget,
                  idPrefix: this.htmlIdLocal,
                  isLabelFloat: false,
                  keyId: "id",
                  keyLabel: "label",
                  label: this.labelTarget,
                  modelValue: this.modelValue.target,
                  translateData: true,
                  type: "select",
                }),
              ]) :
              "",

            (this.slotName &&
              this.$slots[this.slotName]) ?
              this.$slots[this.slotName]({
                id: this.htmlIdLocal,
                props: this.$props,
              }) :
              "",
          ]),
        ]),

        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
