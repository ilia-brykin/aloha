import{A,a as D}from"./chunk.AlohaExample.LgY88rgr.js";import{A as h}from"./chunk.AlohaTableProps.kuqRkKHu.js";import{A as U}from"./chunk.AlohaTableTranslate.CMjECGgR.js";import{_ as p,g as C,A as b}from"./bundle.index.8Q71sPSv.js";import{a as S}from"./chunk.AForm.B9Zk6u16.js";import{r as P,m as n,K as c,aK as u,J as i,P as t,O as I,aL as O,a as E}from"./chunk.vendor.64oIaR0X.js";import"./chunk.vendor-lodash.LcYqUmOZ.js";import"./chunk.ATable.CuhwKmGH.js";import"./chunk.utilsMath.BJuelF38.js";import"./chunk.vendor-tinymce.BwLm5pZR.js";import"./chunk.ADatepicker.DNPeZqDQ.js";import"./chunk.UiMixinProps.tZiK99ln.js";import"./chunk.AInputNumber.Cn45k5JK.js";import"./chunk.ATinymce.B7tYp0f2.js";function L(){return{codeHtml:`<a-json
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
};`}}const H={name:"PageJsonBasic",components:{AJson:S,AlohaExample:A},setup(){const e=P({}),{codeHtml:o}=L(),{codeJs:a}=j();return{codeHtml:o,codeJs:a,model:e}}};function $(e,o,a,d,_,m){const s=n("a-json"),r=n("aloha-example");return i(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:u(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),label:"JSON"},null,8,["modelValue"]),o[1]||(o[1]=I("div",null,"model:",-1)),I("pre",null,O(e.model),1)]),_:1},8,["code-html","code-js"])}const v=p(H,[["render",$]]);function y(){return{codeHtml:`<a-json
  :change="changeModel"
  :model-value="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function G(){return{codeJs:`import {
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
};`}}const M={name:"PageJsonChange",components:{AJson:S,AlohaExample:A},setup(){const e=P({glossary:{title:"example glossary",GlossDiv:{title:"S",GlossList:{GlossEntry:{ID:"SGML",SortAs:"SGML",GlossTerm:"Standard Generalized Markup Language",Acronym:"SGML",Abbrev:"ISO 8879:1986",GlossDef:{para:"A meta-markup language, used to create markup languages such as DocBook.",GlossSeeAlso:["GML","XML"]},GlossSee:"markup"}}}}}),o=({model:_,id:m,props:s})=>{e.value=_,console.log(m,s)},{codeHtml:a}=y(),{codeJs:d}=G();return{changeModel:o,codeHtml:a,codeJs:d,model:e}}};function B(e,o,a,d,_,m){const s=n("a-json"),r=n("aloha-example");return i(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:u(()=>[t(s,{change:e.changeModel,"model-value":e.model,label:"JSON"},null,8,["change","model-value"]),o[0]||(o[0]=I("div",null,"model:",-1)),I("pre",null,O(e.model),1)]),_:1},8,["code-html","code-js"])}const q=p(M,[["render",B]]);function V(){return{codeHtml:`<a-json
  v-model="model"
  errors="Aloha"
  label="JSON"
></a-json>`}}function x(){return{codeJs:`import {
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
};`}}const k={name:"PageJsonErrors",components:{AJson:S,AlohaExample:A},setup(){const e=P({}),{codeHtml:o}=V(),{codeJs:a}=x();return{codeHtml:o,codeJs:a,model:e}}};function F(e,o,a,d,_,m){const s=n("a-json"),r=n("aloha-example");return i(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:u(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),errors:"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const X=p(k,[["render",F]]);function w(){return{codeHtml:`<a-json
  v-model="model"
  help-text="Aloha"
  label="JSON"
></a-json>`}}function z(){return{codeJs:`import {
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
};`}}const K={name:"PageJsonHelpText",components:{AJson:S,AlohaExample:A},setup(){const e=P({}),{codeHtml:o}=w(),{codeJs:a}=z();return{codeHtml:o,codeJs:a,model:e}}};function Q(e,o,a,d,_,m){const s=n("a-json"),r=n("aloha-example");return i(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:u(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),"help-text":"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const W=p(K,[["render",Q]]);function Y(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<a-json
  v-model="model"
  class="a_mt_3"
  label-screen-reader="JSON"
></a-json>`}}function Z(){return{codeJs:`import {
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
};`}}const ee={name:"PageJsonLabelScreenReader",components:{AJson:S,AlohaExample:A},setup(){const e=P({}),{codeHtml:o}=Y(),{codeJs:a}=Z();return{codeHtml:o,codeJs:a,model:e}}};function oe(e,o,a,d,_,m){const s=n("a-json"),r=n("aloha-example");return i(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:u(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),label:"JSON"},null,8,["modelValue"]),t(s,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model=l),"label-screen-reader":"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ne=p(ee,[["render",oe]]);function ae(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function te(){const e=E(()=>C({placeholder:"_A_JSON_COMPONENT_NAME_"}));return{pageTitle:E(()=>`AJson${e.value?` (${e.value})`:""}`)}}function se(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"height-css",description:"_A_JSON_PROPS_HEIGHT_CSS_DESCRIPTION_",type:"String",default:"400px;",required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_json_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1}]}}function re(){return{dataTranslate:["_A_JSON_CURRENT_VALUE_","_A_JSON_DISCARD_ALL_CHANGES_","_A_JSON_ERROR_HTML_{{error}}_","_A_JSON_FORMAT_INPUT_","_A_JSON_INPUT_","_A_JSON_RESET_INPUT_"]}}const le={name:"PageJson",components:{AlohaPage:D,AlohaTableProps:h,AlohaTableTranslate:U,ATranslation:b,PageJsonBasic:v,PageJsonChange:q,PageJsonErrors:X,PageJsonHelpText:W,PageJsonLabelScreenReader:ne},setup(){const{pageTitle:e}=te(),{dataProps:o}=se(),{dataTranslate:a}=re(),{dataEvents:d}=ae();return{dataEvents:d,dataProps:o,dataTranslate:a,pageTitle:e}}};function de(e,o,a,d,_,m){const s=n("a-translation"),r=n("page-json-basic"),l=n("page-json-change"),R=n("page-json-help-text"),N=n("page-json-errors"),g=n("page-json-label-screen-reader"),f=n("aloha-table-props"),T=n("aloha-table-translate"),J=n("aloha-page");return i(),c(J,{"page-title":e.pageTitle},{body:u(()=>[t(s,{tag:"p",html:"_A_JSON_COMPONENT_DESCRIPTION_"}),t(r),t(l),t(R),t(N),t(g),t(f,{data:e.dataProps},null,8,["data"]),t(f,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),t(T,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ne=p(le,[["render",de]]);export{Ne as default};
