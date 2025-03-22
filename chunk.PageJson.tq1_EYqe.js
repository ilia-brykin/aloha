import{A as S,a as h}from"./chunk.AlohaExample.BzabpESL.js";import{A as U}from"./chunk.AlohaTableProps.9jib73J-.js";import{A as b}from"./chunk.AlohaTableTranslate.CH1_m3Z4.js";import{h as P,_ as p,g as j,A as y}from"./bundle.index.DEqsA1mr.js";import{r as c,R as u,aR as i,e as n,U as f,Y as t,W as A,aS as O,d as E}from"./chunk.vendor.C8MJL5OZ.js";import"./chunk.vendor-lodash.D7ZMGyiW.js";import"./chunk.APageTabTitle.B-GVyTna.js";import"./chunk.AlohaHighlightjs.BioRad36.js";import"./chunk.ATable.T_J168av.js";import"./chunk.translations-ar.DW92vQFw.js";import"./chunk.translations-de.oT0Za61t.js";import"./chunk.translations-en.DtVu45cY.js";import"./chunk.translations-es.Bp8CMtGx.js";import"./chunk.translations-fr.YN97SXly.js";import"./chunk.translations-hr.DGAxA7oA.js";import"./chunk.translations-it.DhWidzxs.js";import"./chunk.translations-ru.FTuwrZIr.js";function C(){return{codeHtml:`<a-json
  v-model="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function L(){return{codeJs:`import {
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
};`}}const v={name:"PageJsonBasic",components:{AJson:P,AlohaExample:S},setup(){const e=c({}),{codeHtml:o}=C(),{codeJs:a}=L();return{codeHtml:o,codeJs:a,model:e}}};function $(e,o,a,r,_,m){const l=n("a-json"),s=n("aloha-example");return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),label:"JSON"},null,8,["modelValue"]),o[1]||(o[1]=A("div",null,"model:",-1)),A("pre",null,O(e.model),1)]),_:1},8,["code-html","code-js"])}const H=p(v,[["render",$]]);function G(){return{codeHtml:`<a-json
  :change="changeModel"
  :model-value="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`}}function q(){return{codeJs:`import {
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
};`}}const B={name:"PageJsonChange",components:{AJson:P,AlohaExample:S},setup(){const e=c({glossary:{title:"example glossary",GlossDiv:{title:"S",GlossList:{GlossEntry:{ID:"SGML",SortAs:"SGML",GlossTerm:"Standard Generalized Markup Language",Acronym:"SGML",Abbrev:"ISO 8879:1986",GlossDef:{para:"A meta-markup language, used to create markup languages such as DocBook.",GlossSeeAlso:["GML","XML"]},GlossSee:"markup"}}}}}),o=({model:_,id:m,props:l})=>{e.value=_,console.log(m,l)},{codeHtml:a}=G(),{codeJs:r}=q();return{changeModel:o,codeHtml:a,codeJs:r,model:e}}};function M(e,o,a,r,_,m){const l=n("a-json"),s=n("aloha-example");return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[t(l,{change:e.changeModel,"model-value":e.model,label:"JSON"},null,8,["change","model-value"]),o[0]||(o[0]=A("div",null,"model:",-1)),A("pre",null,O(e.model),1)]),_:1},8,["code-html","code-js"])}const V=p(B,[["render",M]]);function k(){return{codeHtml:`<a-json
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
};`}}const F={name:"PageJsonErrors",components:{AJson:P,AlohaExample:S},setup(){const e=c({}),{codeHtml:o}=k(),{codeJs:a}=x();return{codeHtml:o,codeJs:a,model:e}}};function X(e,o,a,r,_,m){const l=n("a-json"),s=n("aloha-example");return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),errors:"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Y=p(F,[["render",X]]);function w(){return{codeHtml:`<a-json
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
};`}}const W={name:"PageJsonHelpText",components:{AJson:P,AlohaExample:S},setup(){const e=c({}),{codeHtml:o}=w(),{codeJs:a}=z();return{codeHtml:o,codeJs:a,model:e}}};function Q(e,o,a,r,_,m){const l=n("a-json"),s=n("aloha-example");return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"help-text":"Aloha",label:"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const K=p(W,[["render",Q]]);function Z(){return{codeHtml:`<a-json
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
};`}}const oe={name:"PageJsonLabelScreenReader",components:{AJson:P,AlohaExample:S},setup(){const e=c({}),{codeHtml:o}=Z(),{codeJs:a}=ee();return{codeHtml:o,codeJs:a,model:e}}};function ne(e,o,a,r,_,m){const l=n("a-json"),s=n("aloha-example");return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),label:"JSON"},null,8,["modelValue"]),t(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=d=>e.model=d),"label-screen-reader":"JSON"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ae=p(oe,[["render",ne]]);function te(){return{codeHtml:`<a-json
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
};`}}const se={name:"PageJsonReadonly",components:{AJson:P,AlohaExample:S},setup(){const e=c({aloha:123,hola:[1,2,3],foo:{bar:"111"}}),o=c({}),a=c(void 0),{codeHtml:r}=te(),{codeJs:_}=le();return{codeHtml:r,codeJs:_,model1:e,model2:o,model3:a}}};function re(e,o,a,r,_,m){const l=n("a-json"),s=n("aloha-example");return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","default-label"]},{default:i(()=>[t(l,{"model-value":e.model1,readonly:!0,label:"JSON 1"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"JSON 2"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"JSON 3","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const de=p(se,[["render",re]]);function _e(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function me(){const e=E(()=>j({placeholder:"_A_JSON_COMPONENT_NAME_"}));return{pageTitle:E(()=>`AJson${e.value?` (${e.value})`:""}`)}}function ce(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"height-css",description:"_A_JSON_PROPS_HEIGHT_CSS_DESCRIPTION_",type:"String",default:"400px;",required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_json_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1}]}}function pe(){return{dataTranslate:["_A_JSON_CURRENT_VALUE_","_A_JSON_DISCARD_ALL_CHANGES_","_A_JSON_ERROR_HTML_{{error}}_","_A_JSON_FORMAT_INPUT_","_A_JSON_INPUT_","_A_JSON_RESET_INPUT_"]}}const ue={name:"PageJson",components:{AlohaPage:h,AlohaTableProps:U,AlohaTableTranslate:b,ATranslation:y,PageJsonBasic:H,PageJsonChange:V,PageJsonErrors:Y,PageJsonHelpText:K,PageJsonLabelScreenReader:ae,PageJsonReadonly:de},setup(){const{pageTitle:e}=me(),{dataProps:o}=ce(),{dataTranslate:a}=pe(),{dataEvents:r}=_e();return{dataEvents:r,dataProps:o,dataTranslate:a,pageTitle:e}}};function ie(e,o,a,r,_,m){const l=n("a-translation"),s=n("page-json-basic"),d=n("page-json-change"),R=n("page-json-help-text"),N=n("page-json-errors"),g=n("page-json-label-screen-reader"),T=n("page-json-readonly"),I=n("aloha-table-props"),J=n("aloha-table-translate"),D=n("aloha-page");return f(),u(D,{"page-title":e.pageTitle},{body:i(()=>[t(l,{tag:"p",html:"_A_JSON_COMPONENT_DESCRIPTION_"}),t(s),t(d),t(R),t(N),t(g),t(T),t(I,{data:e.dataProps},null,8,["data"]),t(I,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),t(J,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ye=p(ue,[["render",ie]]);export{ye as default};
