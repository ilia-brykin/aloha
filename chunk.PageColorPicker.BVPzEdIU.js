import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{t as n}from"./chunk.AlohaTableTranslate.Dl6r_SFb.js";import{Gt as r,Ht as i,Jt as a,Ut as o,Vt as s,_n as c,cn as l,mn as u,on as d,un as f,wn as p,zt as m}from"./chunk.vendor.Bjd2408Z.js";import{t as h}from"./chunk.AlohaExample.CEueonn8.js";import{D as g,ct as _,hn as v,mn as y,t as b}from"./bundle.index.Dor-y9Rj.js";function x(){return{codeHtml:`<a-color-picker
  v-model="model"
  label="Color"
></a-color-picker>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerBasic",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#0775b0");

    return {
      model,
    };
  },
};`}}var C={name:`PageColorPickerBasic`,components:{AlohaExample:h,AColorPicker:_},setup(){let e=c(`#0775b0`),{codeHtml:t}=x(),{codeJs:n}=S();return{codeHtml:t,codeJs:n,model:e}}};function w(e,t,n,r,s,c){let l=f(`a-color-picker`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_COLOR_PICKER_EXAMPLE_LABEL_`},null,8,[`modelValue`]),i(`div`,null,`model: `+p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var ee=b(C,[[`render`,w]]);function T(){return{codeHtml:`<a-color-picker
  v-model="model"
  label="hex, rgb, hsl, hsv"
  :color-formats="['hex', 'rgb', 'hsl', 'hsv']"
  :show-alpha="true"
></a-color-picker>
<div>model: {{ model }}</div>
<a-color-picker
  v-model="modelRgb"
  color-formats="rgb"
  label="rgb"
></a-color-picker>
<div>model: {{ modelRgb }}</div>`}}function E(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerColorFormat",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("hsl(145, 63%, 29%)");
    const modelRgb = ref("rgb(7, 117, 176)");

    return {
      model,
      modelRgb,
    };
  },
};`}}var D={name:`PageColorPickerColorFormat`,components:{AlohaExample:h,AColorPicker:_},setup(){let e=c(`hsl(145, 63%, 29%)`),t=c(`rgb(7, 117, 176)`),{codeHtml:n}=T(),{codeJs:r}=E();return{codeHtml:n,codeJs:r,model:e,modelRgb:t}}},O={class:`a_mb_3`};function k(e,t,n,r,s,c){let l=f(`a-color-picker`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COLOR_PICKER_GROUP_COLOR_FORMAT_HEADER_`,description:`_A_COLOR_PICKER_GROUP_COLOR_FORMAT_DESCRIPTION_`,props:[`color-formats`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`hex, rgb, hsl, hsv`,"color-formats":[`hex`,`rgb`,`hsl`,`hsv`],"show-alpha":!0},null,8,[`modelValue`]),i(`div`,O,`model: `+p(e.model),1),a(l,{modelValue:e.modelRgb,"onUpdate:modelValue":t[1]||=t=>e.modelRgb=t,"color-formats":`rgb`,label:`rgb`},null,8,[`modelValue`]),i(`div`,null,`model: `+p(e.modelRgb),1)]),_:1},8,[`code-html`,`code-js`])}var A=b(D,[[`render`,k]]);function j(){return{codeHtml:`<a-color-picker
  v-model="model"
  label="disabled"
  :disabled="true"
></a-color-picker>
<a-color-picker
  v-model="model"
  label="readonly"
  :readonly="true"
></a-color-picker>`}}function M(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerDisabled",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#c81e29");

    return {
      model,
    };
  },
};`}}var N={name:`PageColorPickerDisabled`,components:{AlohaExample:h,AColorPicker:_},setup(){let e=c(`#c81e29`),{codeHtml:t}=j(),{codeJs:n}=M();return{codeHtml:t,codeJs:n,model:e}}};function P(e,t,n,r,i,s){let c=f(`a-color-picker`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COLOR_PICKER_GROUP_DISABLED_HEADER_`,description:`_A_COLOR_PICKER_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`,`readonly`]},{default:u(()=>[a(c,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`disabled`,disabled:!0},null,8,[`modelValue`]),a(c,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,label:`readonly`,readonly:!0},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var F=b(N,[[`render`,P]]);function I(){return{codeHtml:`<a-color-picker
  v-model="model"
  label="Color"
  :required="true"
  errors="Please choose a color"
  :error-icon="errorIcon"
></a-color-picker>`}}function L(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerErrors",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref(undefined);
    const errorIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>…</svg>";

    return {
      errorIcon,
      model,
    };
  },
};`}}var R={name:`PageColorPickerErrors`,components:{AlohaExample:h,AColorPicker:_},setup(){let e=c(void 0),{codeHtml:t}=I(),{codeJs:n}=L();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function z(e,t,n,r,i,s){let c=f(`a-color-picker`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COLOR_PICKER_GROUP_ERRORS_HEADER_`,description:`_A_COLOR_PICKER_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`,`error-icon`,`required`]},{default:u(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_COLOR_PICKER_EXAMPLE_LABEL_`,required:!0,errors:`_A_COLOR_PICKER_EXAMPLE_ERROR_`,"error-icon":e.errorIcon},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var B=b(R,[[`render`,z]]);function V(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
></a-form>
<div>model: {{ model }}</div>`}}function H(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageColorPickerForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      brand: "#0775b0",
      native: "#c81e29",
    });
    const data = [
      {
        id: "brand",
        type: "colorPicker",
        label: "colorPicker",
        showAlpha: true,
        predefine: ["#0775b0", "#1b7942", "#c81e29"],
      },
      {
        id: "native",
        type: "color",
        label: "color",
      },
    ];

    return {
      data,
      model,
    };
  },
};`}}var U={name:`PageColorPickerForm`,components:{AlohaExample:h,AForm:g},setup(){let e=c({brand:`#0775b0`,native:`#c81e29`}),t=[{id:`brand`,type:`colorPicker`,label:`colorPicker`,showAlpha:!0,predefine:[`#0775b0`,`#1b7942`,`#c81e29`]},{id:`native`,type:`color`,label:`color`}],{codeHtml:n}=V(),{codeJs:r}=H();return{codeHtml:n,codeJs:r,data:t,model:e}}};function W(e,t,n,r,s,c){let l=f(`a-form`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COLOR_PICKER_GROUP_FORM_HEADER_`,description:`_A_COLOR_PICKER_GROUP_FORM_DESCRIPTION_`,props:[`type`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var G=b(U,[[`render`,W]]);function K(){return{codeHtml:`<a-color-picker
  v-model="model"
  label="Color"
  label-description="Brand color of the product"
  label-position="top"
  help-text="Choose a color with enough contrast"
></a-color-picker>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerHelpText",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#1b7942");

    return {
      model,
    };
  },
};`}}var J={name:`PageColorPickerHelpText`,components:{AlohaExample:h,AColorPicker:_},setup(){let e=c(`#1b7942`),{codeHtml:t}=K(),{codeJs:n}=q();return{codeHtml:t,codeJs:n,model:e}}};function te(e,t,n,r,i,s){let c=f(`a-color-picker`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COLOR_PICKER_GROUP_HELP_TEXT_HEADER_`,description:`_A_COLOR_PICKER_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`,`label-description`]},{default:u(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_COLOR_PICKER_EXAMPLE_LABEL_`,"label-description":`_A_COLOR_PICKER_EXAMPLE_LABEL_DESCRIPTION_`,"label-position":`top`,"help-text":`_A_COLOR_PICKER_EXAMPLE_HELP_TEXT_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Y=b(J,[[`render`,te]]);function X(){return{codeHtml:`<a-color-picker
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-color-picker>
<a-color-picker
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-color-picker>
<a-color-picker
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-color-picker>
<div>model: {{ model }}</div>`}}function Z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerLabelPosition",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#0775b0");

    return {
      model,
    };
  },
};`}}var Q={name:`PageColorPickerLabelPosition`,components:{AlohaExample:h,AColorPicker:_},setup(){let e=c(`#0775b0`),t=[`float`,`inset`,`top`],{codeHtml:n}=X(),{codeJs:r}=Z();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},ne={class:`a_columns a_columns_count_12`};function re(e,t,n,s,c,h){let g=f(`a-color-picker`),_=f(`aloha-example`);return d(),o(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:u(()=>[i(`div`,ne,[(d(!0),r(m,null,l(e.labelPositions,n=>(d(),r(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[a(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),i(`div`,null,`model: `+p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var ie=b(Q,[[`render`,re]]);function ae(){return{codeHtml:`<a-color-picker
  v-model="model"
  label="Color"
  :predefine="predefine"
></a-color-picker>
<div>model: {{ model }}</div>`}}function oe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerPredefine",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref(undefined);
    const predefine = [
      "#0775b0",
      "#2f3474",
      "#8138b2",
      "#1b7942",
      "#0c8097",
      "#fa9c0f",
      "#c81e29",
      "rgb(0, 0, 0)",
      "hsl(0, 0%, 100%)",
    ];

    return {
      model,
      predefine,
    };
  },
};`}}var se={name:`PageColorPickerPredefine`,components:{AlohaExample:h,AColorPicker:_},setup(){let e=c(void 0),t=[`#0775b0`,`#2f3474`,`#8138b2`,`#1b7942`,`#0c8097`,`#fa9c0f`,`#c81e29`,`rgb(0, 0, 0)`,`hsl(0, 0%, 100%)`],{codeHtml:n}=ae(),{codeJs:r}=oe();return{codeHtml:n,codeJs:r,model:e,predefine:t}}};function ce(e,t,n,r,s,c){let l=f(`a-color-picker`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COLOR_PICKER_GROUP_PREDEFINE_HEADER_`,description:`_A_COLOR_PICKER_GROUP_PREDEFINE_DESCRIPTION_`,props:[`predefine`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_COLOR_PICKER_EXAMPLE_LABEL_`,predefine:e.predefine},null,8,[`modelValue`,`predefine`]),i(`div`,null,`model: `+p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var le=b(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-color-picker
  v-model="model"
  label="Color"
  :show-alpha="true"
></a-color-picker>
<div>model: {{ model }}</div>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerShowAlpha",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#0775b080");

    return {
      model,
    };
  },
};`}}var fe={name:`PageColorPickerShowAlpha`,components:{AlohaExample:h,AColorPicker:_},setup(){let e=c(`#0775b080`),{codeHtml:t}=ue(),{codeJs:n}=de();return{codeHtml:t,codeJs:n,model:e}}};function pe(e,t,n,r,s,c){let l=f(`a-color-picker`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COLOR_PICKER_GROUP_SHOW_ALPHA_HEADER_`,description:`_A_COLOR_PICKER_GROUP_SHOW_ALPHA_DESCRIPTION_`,props:[`show-alpha`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_COLOR_PICKER_EXAMPLE_LABEL_`,"show-alpha":!0},null,8,[`modelValue`]),i(`div`,null,`model: `+p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var $=b(fe,[[`render`,pe]]);function me(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`open`,description:`_A_COLOR_PICKER_EVENTS_OPEN_DESCRIPTION_`,type:`Function`},{name:`close`,description:`_A_COLOR_PICKER_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function he(){let e=s(()=>v({placeholder:`_A_COLOR_PICKER_COMPONENT_NAME_`}));return{pageTitle:s(()=>`AColorPicker${e.value?` (${e.value})`:``}`)}}function ge(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`color-formats`,description:`_A_COLOR_PICKER_PROPS_COLOR_FORMATS_DESCRIPTION_`,type:`String / Array`,default:`"hex"`,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_input_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:`undefined`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String`,default:`undefined`,required:!1},{name:`panel-default-color`,description:`_A_COLOR_PICKER_PROPS_PANEL_DEFAULT_COLOR_DESCRIPTION_`,type:`String`,default:`"#ff0000"`,required:!1},{name:`placement`,description:`_A_COLOR_PICKER_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"bottom-start"`,required:!1},{name:`predefine`,description:`_A_COLOR_PICKER_PROPS_PREDEFINE_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`show-alpha`,description:`_A_COLOR_PICKER_PROPS_SHOW_ALPHA_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`type`,description:`_A_COLOR_PICKER_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`"colorPicker"`,required:!1}]}}function _e(){return{dataTranslate:[`_A_COLOR_PICKER_ALPHA_`,`_A_COLOR_PICKER_CLEAR_`,`_A_COLOR_PICKER_CONFIRM_`,`_A_COLOR_PICKER_DIALOG_`,`_A_COLOR_PICKER_EMPTY_`,`_A_COLOR_PICKER_FORMAT_SWITCH_{{format}}_{{next}}_`,`_A_COLOR_PICKER_HUE_`,`_A_COLOR_PICKER_INPUT_{{format}}_`,`_A_COLOR_PICKER_INVALID_`,`_A_COLOR_PICKER_PREDEFINE_`,`_A_COLOR_PICKER_SATURATION_`,`_A_COLOR_PICKER_SATURATION_VALUE_{{saturation}}_{{brightness}}_`]}}var ve={name:`PageColorPicker`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:y,PageColorPickerBasic:ee,PageColorPickerLabelPosition:ie,PageColorPickerShowAlpha:$,PageColorPickerColorFormat:A,PageColorPickerPredefine:le,PageColorPickerHelpText:Y,PageColorPickerErrors:B,PageColorPickerDisabled:F,PageColorPickerForm:G},setup(){let{pageTitle:e}=he(),{dataProps:t}=ge(),{dataTranslate:n}=_e(),{dataEvents:r}=me();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function ye(e,t,n,r,i,s){let c=f(`a-translation`),l=f(`page-color-picker-basic`),p=f(`page-color-picker-label-position`),m=f(`page-color-picker-show-alpha`),h=f(`page-color-picker-color-format`),g=f(`page-color-picker-predefine`),_=f(`page-color-picker-help-text`),v=f(`page-color-picker-errors`),y=f(`page-color-picker-disabled`),b=f(`page-color-picker-form`),x=f(`aloha-table-props`),S=f(`aloha-table-translate`),C=f(`aloha-table-css-vars`),w=f(`aloha-page`);return d(),o(w,{"page-title":e.pageTitle},{body:u(()=>[a(c,{tag:`p`,html:`_A_COLOR_PICKER_COMPONENT_DESCRIPTION_`}),a(c,{class:`a_mb_4`,tag:`div`,html:`_A_COLOR_PICKER_ACCESSIBILITY_DESCRIPTION_`}),a(l),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x,{data:e.dataProps},null,8,[`data`]),a(x,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),a(S,{data:e.dataTranslate},null,8,[`data`]),a(C,{files:`components/ui/AColorPicker`})]),_:1},8,[`page-title`])}var be=b(ve,[[`render`,ye]]);export{be as default};