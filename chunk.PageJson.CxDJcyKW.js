import{A,a as h}from"./chunk.AlohaExample.A9Ef-QbL.js";import{A as D}from"./chunk.AlohaTableProps.CpO8HcfR.js";import{A as U}from"./chunk.AlohaTableTranslate.0W11qYzs.js";import{_ as m,g as C,A as b}from"./bundle.index.Dn7qpWjQ.js";import{a as S}from"./chunk.AForm.YXJwVyl2.js";import{r as P,m as n,K as p,aK as u,J as i,P as t,O as I,aL as O,a as E}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.ATable.D_xPGUZc.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.vendor-tinymce.cPIiul0H.js";import"./chunk.ADatepicker.CCF6HQX3.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.AInputNumber.CRj1UTFu.js";import"./chunk.ATinymce.BwFOKtT3.js";function L(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import AJson from "aloha-vue/src/ui/AJson/AJson";
    
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
};`}}const $={name:"PageJsonBasic",components:{AJson:S,AlohaExample:A},setup(){const e=P({}),{codeHtml:o}=L(),{codeJs:a}=j();return{codeHtml:o,codeJs:a,model:e}}},H=I("div",null,"model:",-1);function v(e,o,a,d,_,c){const s=n("a-json"),r=n("aloha-example");return i(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:u(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),label:"JSON"},null,8,["modelValue"]),H,I("pre",null,O(e.model),1)]),_:1},8,["code-html","code-js"])}const y=m($,[["render",v]]);function G(){return{codeHtml:`<a-json
  :change="changeModel"
  :model-value="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function M(){return{codeJs:`import {
  ref,
} from "vue";

import AJson from "aloha-vue/src/ui/AJson/AJson";
    
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
};`}}const B={name:"PageJsonChange",components:{AJson:S,AlohaExample:A},setup(){const e=P({glossary:{title:"example glossary",GlossDiv:{title:"S",GlossList:{GlossEntry:{ID:"SGML",SortAs:"SGML",GlossTerm:"Standard Generalized Markup Language",Acronym:"SGML",Abbrev:"ISO 8879:1986",GlossDef:{para:"A meta-markup language, used to create markup languages such as DocBook.",GlossSeeAlso:["GML","XML"]},GlossSee:"markup"}}}}}),o=({model:_,id:c,props:s})=>{e.value=_,console.log(c,s)},{codeHtml:a}=G(),{codeJs:d}=M();return{changeModel:o,codeHtml:a,codeJs:d,model:e}}},q=I("div",null,"model:",-1);function V(e,o,a,d,_,c){const s=n("a-json"),r=n("aloha-example");return i(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:u(()=>[t(s,{change:e.changeModel,"model-value":e.model,label:"JSON"},null,8,["change","model-value"]),q,I("pre",null,O(e.model),1)]),_:1},8,["code-html","code-js"])}const x=m(B,[["render",V]]);function k(){return{codeHtml:`<a-json
  v-model="model"
  errors="Aloha"
  label="JSON"
></a-json>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import AJson from "aloha-vue/src/ui/AJson/AJson";
    
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
};`}}const X={name:"PageJsonErrors",components:{AJson:S,AlohaExample:A},setup(){const e=P({}),{codeHtml:o}=k(),{codeJs:a}=F();return{codeHtml:o,codeJs:a,model:e}}};function w(e,o,a,d,_,c){const s=n("a-json"),r=n("aloha-example");return i(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:u(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),errors:"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const z=m(X,[["render",w]]);function K(){return{codeHtml:`<a-json
  v-model="model"
  help-text="Aloha"
  label="JSON"
></a-json>`}}function Q(){return{codeJs:`import {
  ref,
} from "vue";

import AJson from "aloha-vue/src/ui/AJson/AJson";
    
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
};`}}const W={name:"PageJsonHelpText",components:{AJson:S,AlohaExample:A},setup(){const e=P({}),{codeHtml:o}=K(),{codeJs:a}=Q();return{codeHtml:o,codeJs:a,model:e}}};function Y(e,o,a,d,_,c){const s=n("a-json"),r=n("aloha-example");return i(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:u(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),"help-text":"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Z=m(W,[["render",Y]]);function ee(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<a-json
  v-model="model"
  class="a_mt_3"
  label-screen-reader="JSON"
></a-json>`}}function oe(){return{codeJs:`import {
  ref,
} from "vue";

import AJson from "aloha-vue/src/ui/AJson/AJson";
    
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
};`}}const ne={name:"PageJsonLabelScreenReader",components:{AJson:S,AlohaExample:A},setup(){const e=P({}),{codeHtml:o}=ee(),{codeJs:a}=oe();return{codeHtml:o,codeJs:a,model:e}}};function ae(e,o,a,d,_,c){const s=n("a-json"),r=n("aloha-example");return i(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:u(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),label:"JSON"},null,8,["modelValue"]),t(s,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model=l),"label-screen-reader":"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const te=m(ne,[["render",ae]]);function se(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function re(){const e=E(()=>C({placeholder:"_A_JSON_COMPONENT_NAME_"}));return{pageTitle:E(()=>`AJson${e.value?` (${e.value})`:""}`)}}function le(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"height-css",description:"_A_JSON_PROPS_HEIGHT_CSS_DESCRIPTION_",type:"String",default:"400px;",required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_json_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1}]}}function de(){return{dataTranslate:["_A_JSON_CURRENT_VALUE_","_A_JSON_DISCARD_ALL_CHANGES_","_A_JSON_ERROR_HTML_{{error}}_","_A_JSON_FORMAT_INPUT_","_A_JSON_INPUT_","_A_JSON_RESET_INPUT_"]}}const _e={name:"PageJson",components:{AlohaPage:h,AlohaTableProps:D,AlohaTableTranslate:U,ATranslation:b,PageJsonBasic:y,PageJsonChange:x,PageJsonErrors:z,PageJsonHelpText:Z,PageJsonLabelScreenReader:te},setup(){const{pageTitle:e}=re(),{dataProps:o}=le(),{dataTranslate:a}=de(),{dataEvents:d}=se();return{dataEvents:d,dataProps:o,dataTranslate:a,pageTitle:e}}};function ce(e,o,a,d,_,c){const s=n("a-translation"),r=n("page-json-basic"),l=n("page-json-change"),R=n("page-json-help-text"),N=n("page-json-errors"),g=n("page-json-label-screen-reader"),f=n("aloha-table-props"),T=n("aloha-table-translate"),J=n("aloha-page");return i(),p(J,{"page-title":e.pageTitle},{body:u(()=>[t(s,{tag:"p",html:"_A_JSON_COMPONENT_DESCRIPTION_"}),t(r),t(l),t(R),t(N),t(g),t(f,{data:e.dataProps},null,8,["data"]),t(f,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),t(T,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Te=m(_e,[["render",ce]]);export{Te as default};
