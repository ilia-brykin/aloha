import{t as e}from"./chunk.AlohaPage.C_AWyoed.js";import{t}from"./chunk.AlohaTableProps.BrkQYKm5.js";import{t as n}from"./chunk.AlohaTableTranslate.39dY6EQ4.js";import{Ft as r,It as i,Pt as a,Qt as o,Vt as s,cn as c,mn as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{t as f}from"./chunk.AlohaExample.C1ql1MDy.js";import{Yt as p,it as m,q as h}from"./bundle.index.C6WaRsOC.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AJson,
} from "aloha-vue";
    
export default {
  name: "PageJsonBasic",
  components: {
    AJson,
  },
  setup() {
    const model = ref({});
    
    return {
      model,
    };
  },
};`}}var y={name:`PageJsonBasic`,components:{AJson:h,AlohaExample:f},setup(){let e=c({}),{codeHtml:t}=_(),{codeJs:n}=v();return{codeHtml:t,codeJs:n,model:e}}};function b(e,t,n,a,c,f){let p=u(`a-json`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:d(()=>[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`JSON`},null,8,[`modelValue`]),t[1]||=r(`div`,null,`model:`,-1),r(`pre`,null,l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{codeHtml:`<a-json
  :change="changeModel"
  :model-value="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AJson,
} from "aloha-vue";
    
export default {
  name: "PageJsonChange",
  components: {
    AJson,
  },
  setup() {
    const model = ref({
      glossary: {
        title: "example glossary",
        GlossDiv: {
          title: "S",
          GlossList: {
            GlossEntry: {
              ID: "SGML",
              SortAs: "SGML",
              GlossTerm: "Standard Generalized Markup Language",
              Acronym: "SGML",
              Abbrev: "ISO 8879:1986",
              GlossDef: {
                para: "A meta-markup language, used to create markup languages such as DocBook.",
                GlossSeeAlso: ["GML", "XML"]
              },
              GlossSee: "markup"
            }
          }
        }
      }
    });
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}var w={name:`PageJsonChange`,components:{AJson:h,AlohaExample:f},setup(){let e=c({glossary:{title:`example glossary`,GlossDiv:{title:`S`,GlossList:{GlossEntry:{ID:`SGML`,SortAs:`SGML`,GlossTerm:`Standard Generalized Markup Language`,Acronym:`SGML`,Abbrev:`ISO 8879:1986`,GlossDef:{para:`A meta-markup language, used to create markup languages such as DocBook.`,GlossSeeAlso:[`GML`,`XML`]},GlossSee:`markup`}}}}}),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=S(),{codeJs:r}=C();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function T(e,t,n,a,c,f){let p=u(`a-json`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:d(()=>[s(p,{change:e.changeModel,"model-value":e.model,label:`JSON`},null,8,[`change`,`model-value`]),t[0]||=r(`div`,null,`model:`,-1),r(`pre`,null,l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var E=g(w,[[`render`,T]]);function D(){return{codeHtml:`<a-json
  v-model="model"
  errors="Aloha"
  label="JSON"
></a-json>`}}function O(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AJson,
} from "aloha-vue";
    
export default {
  name: "PageJsonErrors",
  components: {
    AInput,
  },
  setup() {
    const model = ref({});
    
    return {
      model,
    };
  },
};`}}var k={name:`PageJsonErrors`,components:{AJson:h,AlohaExample:f},setup(){let e=c({}),{codeHtml:t}=D(),{codeJs:n}=O();return{codeHtml:t,codeJs:n,model:e}}};function A(e,t,n,r,a,c){let l=u(`a-json`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:d(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`JSON`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var j=g(k,[[`render`,A]]);function M(){return{codeHtml:`<a-json
  v-model="model"
  help-text="Aloha"
  label="JSON"
></a-json>`}}function N(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AJson,
} from "aloha-vue";
    
export default {
  name: "PageJsonHelpText",
  components: {
    AJson,
  },
  setup() {
    const model = ref({});
    
    return {
      model,
    };
  },
};`}}var P={name:`PageJsonHelpText`,components:{AJson:h,AlohaExample:f},setup(){let e=c({}),{codeHtml:t}=M(),{codeJs:n}=N();return{codeHtml:t,codeJs:n,model:e}}};function F(e,t,n,r,a,c){let l=u(`a-json`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:d(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`JSON`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var I=g(P,[[`render`,F]]);function L(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
  label-description="Aloha"
></a-json>`}}function R(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AJson,
} from "aloha-vue";
    
export default {
  name: "PageJsonLabelDescription",
  components: {
    AJson,
  },
  setup() {
    const model = ref({});
    
    return {
      model,
    };
  },
};`}}var ee={name:`PageJsonLabelDescription`,components:{AJson:h,AlohaExample:f},setup(){let e=c({}),{codeHtml:t}=L(),{codeJs:n}=R();return{codeHtml:t,codeJs:n,model:e}}};function z(e,t,n,r,a,c){let l=u(`a-json`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:d(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`JSON`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var B=g(ee,[[`render`,z]]);function V(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<a-json
  v-model="model"
  class="a_mt_3"
  label-screen-reader="JSON"
></a-json>`}}function H(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AJson,
} from "aloha-vue";
    
export default {
  name: "PageJsonLabelScreenReader",
  components: {
    AInput,
  },
  setup() {
    const model = ref({});
    
    return {
      model,
    };
  },
};`}}var U={name:`PageJsonLabelScreenReader`,components:{AJson:h,AlohaExample:f},setup(){let e=c({}),{codeHtml:t}=V(),{codeJs:n}=H();return{codeHtml:t,codeJs:n,model:e}}};function W(e,t,n,r,a,c){let l=u(`a-json`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:d(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`JSON`},null,8,[`modelValue`]),s(l,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`JSON`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var G=g(U,[[`render`,W]]);function K(){return{codeHtml:`<a-json
  :model-value="model1"
  :readonly="true"
  label="JSON 1"
></a-json>
<a-json
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="JSON 2"
></a-json>
<a-json
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="JSON 3"
  readonly-default="-"
></a-json>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AJson,
} from "aloha-vue";
    
export default {
  name: "PageJsonReadonly",
  components: {
    AJson,
  },
  setup() {
    const model1 = ref({
      aloha: 123,
      hola: [1, 2, 3],
      foo: {
        bar: "111",
      },
    });
    const model2 = ref({});
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var J={name:`PageJsonReadonly`,components:{AJson:h,AlohaExample:f},setup(){let e=c({aloha:123,hola:[1,2,3],foo:{bar:`111`}}),t=c({}),n=c(void 0),{codeHtml:r}=K(),{codeJs:i}=q();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function Y(e,t,n,r,a,c){let l=u(`a-json`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`default-label`]},{default:d(()=>[s(l,{"model-value":e.model1,readonly:!0,label:`JSON 1`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`JSON 2`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`JSON 3`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var X=g(J,[[`render`,Y]]);function Z(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function Q(){let e=a(()=>p({placeholder:`_A_JSON_COMPONENT_NAME_`})),t=a(()=>p({placeholder:`_A_JSON_COMPONENT_NAME_H1_`}));return{pageTitle:a(()=>`AJson${e.value?` (${e.value})`:``}`),pageTitleH1:a(()=>`AJson${t.value?` (${t.value})`:``}`)}}function $(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`height-css`,description:`_A_JSON_PROPS_HEIGHT_CSS_DESCRIPTION_`,type:`String`,default:`400px;`,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_json_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1}]}}function te(){return{dataTranslate:[`_A_JSON_CURRENT_VALUE_`,`_A_JSON_DISCARD_ALL_CHANGES_`,`_A_JSON_ERROR_HTML_{{error}}_`,`_A_JSON_FORMAT_INPUT_`,`_A_JSON_INPUT_`,`_A_JSON_RESET_INPUT_`]}}var ne={name:`PageJson`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:m,PageJsonBasic:x,PageJsonChange:E,PageJsonErrors:j,PageJsonHelpText:I,PageJsonLabelDescription:B,PageJsonLabelScreenReader:G,PageJsonReadonly:X},setup(){let{pageTitle:e,pageTitleH1:t}=Q(),{dataProps:n}=$(),{dataTranslate:r}=te(),{dataEvents:i}=Z();return{dataEvents:i,dataProps:n,dataTranslate:r,pageTitle:e,pageTitleH1:t}}};function re(e,t,n,r,a,c){let l=u(`a-translation`),f=u(`page-json-basic`),p=u(`page-json-change`),m=u(`page-json-help-text`),h=u(`page-json-errors`),g=u(`page-json-label-description`),_=u(`page-json-label-screen-reader`),v=u(`page-json-readonly`),y=u(`aloha-table-props`),b=u(`aloha-table-translate`),x=u(`aloha-page`);return o(),i(x,{"page-title":e.pageTitle,"page-title-h1":e.pageTitleH1},{body:d(()=>[s(l,{tag:`p`,html:`_A_JSON_COMPONENT_DESCRIPTION_`}),s(f),s(p),s(m),s(h),s(g),s(_),s(v),s(y,{data:e.dataProps},null,8,[`data`]),s(y,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),s(b,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`,`page-title-h1`])}var ie=g(ne,[[`render`,re]]);export{ie as default};