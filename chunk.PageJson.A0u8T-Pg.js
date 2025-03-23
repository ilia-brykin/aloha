import{A as S,a as U}from"./chunk.AlohaExample.2zt6mugM.js";import{A as b}from"./chunk.AlohaTableProps.CijAev_y.js";import{A as j}from"./chunk.AlohaTableTranslate.p1HIai4a.js";import{h as A,_ as p,g as O,A as y}from"./bundle.index.Dp1Wrvxr.js";import{r as c,R as u,aR as i,e as a,U as f,Y as t,W as I,aS as R,d as P}from"./chunk.vendor.lDtj39a_.js";import"./chunk.vendor-lodash.CZTyXodc.js";import"./chunk.APageTabTitle.BGKP64mK.js";import"./chunk.AlohaHighlightjs.BZGUyHjY.js";import"./chunk.ATable.wMVaHntF.js";import"./chunk.translations-ar.CSRM3YJ8.js";import"./chunk.translations-de.Cdlrfk3w.js";import"./chunk.translations-en.BVrNHVVQ.js";import"./chunk.translations-es.DXEdiuYo.js";import"./chunk.translations-fr.CVKEU5Mu.js";import"./chunk.translations-hr.DL1l5v8s.js";import"./chunk.translations-it.BKw_NW0S.js";import"./chunk.translations-ru.CQ8apMH7.js";function C(){return{codeHtml:`<a-json
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
};`}}const L={name:"PageJsonBasic",components:{AJson:A,AlohaExample:S},setup(){const e=c({}),{codeHtml:o}=C(),{codeJs:n}=v();return{codeHtml:o,codeJs:n,model:e}}};function H(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),label:"JSON"},null,8,["modelValue"]),o[1]||(o[1]=I("div",null,"model:",-1)),I("pre",null,R(e.model),1)]),_:1},8,["code-html","code-js"])}const $=p(L,[["render",H]]);function G(){return{codeHtml:`<a-json
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
};`}}const q={name:"PageJsonChange",components:{AJson:A,AlohaExample:S},setup(){const e=c({glossary:{title:"example glossary",GlossDiv:{title:"S",GlossList:{GlossEntry:{ID:"SGML",SortAs:"SGML",GlossTerm:"Standard Generalized Markup Language",Acronym:"SGML",Abbrev:"ISO 8879:1986",GlossDef:{para:"A meta-markup language, used to create markup languages such as DocBook.",GlossSeeAlso:["GML","XML"]},GlossSee:"markup"}}}}}),o=({model:d,id:m,props:l})=>{e.value=d,console.log(m,l)},{codeHtml:n}=G(),{codeJs:s}=M();return{changeModel:o,codeHtml:n,codeJs:s,model:e}}};function B(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[t(l,{change:e.changeModel,"model-value":e.model,label:"JSON"},null,8,["change","model-value"]),o[0]||(o[0]=I("div",null,"model:",-1)),I("pre",null,R(e.model),1)]),_:1},8,["code-html","code-js"])}const V=p(q,[["render",B]]);function k(){return{codeHtml:`<a-json
  v-model="model"
  errors="Aloha"
  label="JSON"
></a-json>`}}function x(){return{codeJs:`import {
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
};`}}const F={name:"PageJsonErrors",components:{AJson:A,AlohaExample:S},setup(){const e=c({}),{codeHtml:o}=k(),{codeJs:n}=x();return{codeHtml:o,codeJs:n,model:e}}};function X(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),errors:"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Y=p(F,[["render",X]]);function w(){return{codeHtml:`<a-json
  v-model="model"
  help-text="Aloha"
  label="JSON"
></a-json>`}}function z(){return{codeJs:`import {
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
};`}}const W={name:"PageJsonHelpText",components:{AJson:A,AlohaExample:S},setup(){const e=c({}),{codeHtml:o}=w(),{codeJs:n}=z();return{codeHtml:o,codeJs:n,model:e}}};function Q(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),"help-text":"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const K=p(W,[["render",Q]]);function Z(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<a-json
  v-model="model"
  class="a_mt_3"
  label-screen-reader="JSON"
></a-json>`}}function ee(){return{codeJs:`import {
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
};`}}const oe={name:"PageJsonLabelScreenReader",components:{AJson:A,AlohaExample:S},setup(){const e=c({}),{codeHtml:o}=Z(),{codeJs:n}=ee();return{codeHtml:o,codeJs:n,model:e}}};function ne(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=_=>e.model=_),label:"JSON"},null,8,["modelValue"]),t(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=_=>e.model=_),"label-screen-reader":"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ae=p(oe,[["render",ne]]);function te(){return{codeHtml:`<a-json
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
  label="JSON 3"
  readonly-default="-"
></a-json>`}}function le(){return{codeJs:`import {
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
};`}}const se={name:"PageJsonReadonly",components:{AJson:A,AlohaExample:S},setup(){const e=c({aloha:123,hola:[1,2,3],foo:{bar:"111"}}),o=c({}),n=c(void 0),{codeHtml:s}=te(),{codeJs:d}=le();return{codeHtml:s,codeJs:d,model1:e,model2:o,model3:n}}};function re(e,o,n,s,d,m){const l=a("a-json"),r=a("aloha-example");return f(),u(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","default-label"]},{default:i(()=>[t(l,{"model-value":e.model1,readonly:!0,label:"JSON 1"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"JSON 2"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"JSON 3","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const de=p(se,[["render",re]]);function _e(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function me(){const e=P(()=>O({placeholder:"_A_JSON_COMPONENT_NAME_"})),o=P(()=>O({placeholder:"_A_JSON_COMPONENT_NAME_H1_"})),n=P(()=>`AJson${e.value?` (${e.value})`:""}`),s=P(()=>`AJson${o.value?` (${o.value})`:""}`);return{pageTitle:n,pageTitleH1:s}}function ce(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"height-css",description:"_A_JSON_PROPS_HEIGHT_CSS_DESCRIPTION_",type:"String",default:"400px;",required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_json_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1}]}}function pe(){return{dataTranslate:["_A_JSON_CURRENT_VALUE_","_A_JSON_DISCARD_ALL_CHANGES_","_A_JSON_ERROR_HTML_{{error}}_","_A_JSON_FORMAT_INPUT_","_A_JSON_INPUT_","_A_JSON_RESET_INPUT_"]}}const ue={name:"PageJson",components:{AlohaPage:U,AlohaTableProps:b,AlohaTableTranslate:j,ATranslation:y,PageJsonBasic:$,PageJsonChange:V,PageJsonErrors:Y,PageJsonHelpText:K,PageJsonLabelScreenReader:ae,PageJsonReadonly:de},setup(){const{pageTitle:e,pageTitleH1:o}=me(),{dataProps:n}=ce(),{dataTranslate:s}=pe(),{dataEvents:d}=_e();return{dataEvents:d,dataProps:n,dataTranslate:s,pageTitle:e,pageTitleH1:o}}};function ie(e,o,n,s,d,m){const l=a("a-translation"),r=a("page-json-basic"),_=a("page-json-change"),N=a("page-json-help-text"),g=a("page-json-errors"),T=a("page-json-label-screen-reader"),J=a("page-json-readonly"),E=a("aloha-table-props"),h=a("aloha-table-translate"),D=a("aloha-page");return f(),u(D,{"page-title":e.pageTitle,"page-title-h1":e.pageTitleH1},{body:i(()=>[t(l,{tag:"p",html:"_A_JSON_COMPONENT_DESCRIPTION_"}),t(r),t(_),t(N),t(g),t(T),t(J),t(E,{data:e.dataProps},null,8,["data"]),t(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),t(h,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title","page-title-h1"])}const ye=p(ue,[["render",ie]]);export{ye as default};
