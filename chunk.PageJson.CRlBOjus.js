import{A,a as b}from"./chunk.AlohaExample.BliScsiM.js";import{A as j}from"./chunk.AlohaTableProps.BjgIoxTR.js";import{A as L}from"./chunk.AlohaTableTranslate.DN97mPDE.js";import{o as P,_ as p,g as O,A as C}from"./bundle.index.rlyFjb7C.js";import{r as c,V as u,aT as i,e as a,W as f,_ as t,Z as S,aU as R,d as I}from"./chunk.vendor.Daji9SX9.js";import"./chunk.vendor-lodash.B3VVIBC-.js";import"./chunk.APageTabTitle.2aU46WhH.js";import"./chunk.AlohaHighlightjs.BMm9LXzJ.js";import"./chunk.ATable.BcAGERP3.js";import"./chunk.translations-ar.BojwqMl_.js";import"./chunk.translations-de.Cs8AX5zd.js";import"./chunk.translations-en.B6SbFZD7.js";import"./chunk.translations-es.Bq5-ThmB.js";import"./chunk.translations-fr.CNUiPhMd.js";import"./chunk.translations-hr.BHL5VI6-.js";import"./chunk.translations-it.CT6ME8Ab.js";import"./chunk.translations-ru.-V16kngL.js";function y(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function $(){return{codeJs:`import {
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
};`}}const H={name:"PageJsonBasic",components:{AJson:P,AlohaExample:A},setup(){const e=c({}),{codeHtml:o}=y(),{codeJs:n}=$();return{codeHtml:o,codeJs:n,model:e}}};function v(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),label:"JSON"},null,8,["modelValue"]),o[1]||(o[1]=S("div",null,"model:",-1)),S("pre",null,R(e.model),1)]),_:1},8,["code-html","code-js"])}const G=p(H,[["render",v]]);function B(){return{codeHtml:`<a-json
  :change="changeModel"
  :model-value="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function M(){return{codeJs:`import {
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
};`}}const q={name:"PageJsonChange",components:{AJson:P,AlohaExample:A},setup(){const e=c({glossary:{title:"example glossary",GlossDiv:{title:"S",GlossList:{GlossEntry:{ID:"SGML",SortAs:"SGML",GlossTerm:"Standard Generalized Markup Language",Acronym:"SGML",Abbrev:"ISO 8879:1986",GlossDef:{para:"A meta-markup language, used to create markup languages such as DocBook.",GlossSeeAlso:["GML","XML"]},GlossSee:"markup"}}}}}),o=({model:d,id:m,props:l})=>{e.value=d,console.log(m,l)},{codeHtml:n}=B(),{codeJs:s}=M();return{changeModel:o,codeHtml:n,codeJs:s,model:e}}};function V(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[t(l,{change:e.changeModel,"model-value":e.model,label:"JSON"},null,8,["change","model-value"]),o[0]||(o[0]=S("div",null,"model:",-1)),S("pre",null,R(e.model),1)]),_:1},8,["code-html","code-js"])}const x=p(q,[["render",V]]);function k(){return{codeHtml:`<a-json
  v-model="model"
  errors="Aloha"
  label="JSON"
></a-json>`}}function F(){return{codeJs:`import {
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
};`}}const X={name:"PageJsonErrors",components:{AJson:P,AlohaExample:A},setup(){const e=c({}),{codeHtml:o}=k(),{codeJs:n}=F();return{codeHtml:o,codeJs:n,model:e}}};function Y(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),errors:"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const w=p(X,[["render",Y]]);function z(){return{codeHtml:`<a-json
  v-model="model"
  help-text="Aloha"
  label="JSON"
></a-json>`}}function W(){return{codeJs:`import {
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
};`}}const Q={name:"PageJsonHelpText",components:{AJson:P,AlohaExample:A},setup(){const e=c({}),{codeHtml:o}=z(),{codeJs:n}=W();return{codeHtml:o,codeJs:n,model:e}}};function Z(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),"help-text":"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const K=p(Q,[["render",Z]]);function ee(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
  label-description="Aloha"
></a-json>`}}function oe(){return{codeJs:`import {
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
};`}}const ne={name:"PageJsonLabelDescription",components:{AJson:P,AlohaExample:A},setup(){const e=c({}),{codeHtml:o}=ee(),{codeJs:n}=oe();return{codeHtml:o,codeJs:n,model:e}}};function ae(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),label:"JSON","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const te=p(ne,[["render",ae]]);function le(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<a-json
  v-model="model"
  class="a_mt_3"
  label-screen-reader="JSON"
></a-json>`}}function se(){return{codeJs:`import {
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
};`}}const re={name:"PageJsonLabelScreenReader",components:{AJson:P,AlohaExample:A},setup(){const e=c({}),{codeHtml:o}=le(),{codeJs:n}=se();return{codeHtml:o,codeJs:n,model:e}}};function de(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),label:"JSON"},null,8,["modelValue"]),t(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=_=>e.model=_),"label-screen-reader":"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const _e=p(re,[["render",de]]);function me(){return{codeHtml:`<a-json
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
></a-json>`}}function ce(){return{codeJs:`import {
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
};`}}const pe={name:"PageJsonReadonly",components:{AJson:P,AlohaExample:A},setup(){const e=c({aloha:123,hola:[1,2,3],foo:{bar:"111"}}),o=c({}),n=c(void 0),{codeHtml:s}=me(),{codeJs:d}=ce();return{codeHtml:s,codeJs:d,model1:e,model2:o,model3:n}}};function ue(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","default-label"]},{default:i(()=>[t(l,{"model-value":e.model1,readonly:!0,label:"JSON 1"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"JSON 2"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"JSON 3","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const ie=p(pe,[["render",ue]]);function fe(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Ae(){const e=I(()=>O({placeholder:"_A_JSON_COMPONENT_NAME_"})),o=I(()=>O({placeholder:"_A_JSON_COMPONENT_NAME_H1_"})),n=I(()=>`AJson${e.value?` (${e.value})`:""}`),s=I(()=>`AJson${o.value?` (${o.value})`:""}`);return{pageTitle:n,pageTitleH1:s}}function Pe(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"height-css",description:"_A_JSON_PROPS_HEIGHT_CSS_DESCRIPTION_",type:"String",default:"400px;",required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_json_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1}]}}function Ie(){return{dataTranslate:["_A_JSON_CURRENT_VALUE_","_A_JSON_DISCARD_ALL_CHANGES_","_A_JSON_ERROR_HTML_{{error}}_","_A_JSON_FORMAT_INPUT_","_A_JSON_INPUT_","_A_JSON_RESET_INPUT_"]}}const Se={name:"PageJson",components:{AlohaPage:b,AlohaTableProps:j,AlohaTableTranslate:L,ATranslation:C,PageJsonBasic:G,PageJsonChange:x,PageJsonErrors:w,PageJsonHelpText:K,PageJsonLabelDescription:te,PageJsonLabelScreenReader:_e,PageJsonReadonly:ie},setup(){const{pageTitle:e,pageTitleH1:o}=Ae(),{dataProps:n}=Pe(),{dataTranslate:s}=Ie(),{dataEvents:d}=fe();return{dataEvents:d,dataProps:n,dataTranslate:s,pageTitle:e,pageTitleH1:o}}};function Ee(e,o,n,s,d,m){const l=a("a-translation"),r=a("page-json-basic"),_=a("page-json-change"),N=a("page-json-help-text"),g=a("page-json-errors"),J=a("page-json-label-description"),T=a("page-json-label-screen-reader"),h=a("page-json-readonly"),E=a("aloha-table-props"),D=a("aloha-table-translate"),U=a("aloha-page");return f(),u(U,{"page-title":e.pageTitle,"page-title-h1":e.pageTitleH1},{body:i(()=>[t(l,{tag:"p",html:"_A_JSON_COMPONENT_DESCRIPTION_"}),t(r),t(_),t(N),t(g),t(J),t(T),t(h),t(E,{data:e.dataProps},null,8,["data"]),t(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),t(D,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title","page-title-h1"])}const Ge=p(Se,[["render",Ee]]);export{Ge as default};
