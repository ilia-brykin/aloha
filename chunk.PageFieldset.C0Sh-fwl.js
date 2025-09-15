import{A as E,a as N}from"./chunk.AlohaExample.CpUXZI5-.js";import{A as U}from"./chunk.AlohaTableProps.D87dcqvC.js";import{A as x}from"./chunk.AlohaTableTranslate.D9qx979d.js";import{W as I,_ as u,g as y,A as F}from"./bundle.index.p9iszYLs.js";import{r as m,V as f,aT as h,e as o,W as P,_ as s,Z as i,aU as p,d as S}from"./chunk.vendor.BAPLGb06.js";import"./chunk.vendor-lodash.CStjNiQe.js";import"./chunk.APageTabTitle.CZyHOJ0m.js";import"./chunk.AlohaHighlightjs.BZkAdeSp.js";import"./chunk.ATable.BToynlIC.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.fV51pdAO.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function v(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function $(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetBasic",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const H={name:"PageFieldsetBasic",components:{AFieldset:I,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"}],l=m(void 0),{codeHtml:t}=v(),{codeJs:d}=$();return{children:e,codeHtml:t,codeJs:d,model:l}}};function k(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label","children"]},{default:h(()=>[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const J=u(H,[["render",k]]);function B(){return{codeHtml:`<a-fieldset
  :change="changeModel"
  :children="children"
  :model-value="model"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChange",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
    ];
    const model = ref(undefined);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      children,
      changeModel,
      model,
    };
  },
};`}}const q={name:"PageFieldsetChange",components:{AFieldset:I,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text1"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox1"}],l=m(void 0),t=({model:_,id:n,props:r})=>{l.value=_,console.log(n,r)},{codeHtml:d}=B(),{codeJs:c}=V();return{changeModel:t,children:e,codeHtml:d,codeJs:c,model:l}}};function j(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:h(()=>[s(n,{change:e.changeModel,children:e.children,"model-value":e.model,label:"Fieldset"},null,8,["change","children","model-value"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const G=u(q,[["render",j]]);function M(){return{codeHtml:`<a-fieldset
  v-model="model1"
  :children="children1"
  :collapsible="true"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-fieldset>
<div>model1: {{ model1 }}</div>
<a-fieldset
  v-model="model2"
  :children="children2"
  :collapsible="true"
  class="a_mt_3"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-fieldset>
<div>model2: {{ model2 }}</div>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetCollapse",
  components: {
    AFieldset,
  },
  setup() {
    const children1 = [
      {
        type: "text",
        label: "Text",
        id: "aloha1.text",
      },
    ];
    const children2 = [
      {
        type: "text",
        label: "Text",
        id: "aloha2.text",
      },
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    
    const toggleCollapse = ({ isCollapsed, id, props }) => {
      console.log(isCollapsed, id, props);
    };

    return {
      children1,
      children2,
      model1,
      model2,
      toggleCollapse,
    };
  },
};`}}const W={name:"PageFieldsetCollapse",components:{AFieldset:I,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha1.text"}],l=[{type:"text",label:"Text",id:"aloha2.text"}],t=m(void 0),d=m(void 0),{codeHtml:c}=M(),{codeJs:_}=X();return{children1:e,children2:l,codeHtml:c,codeJs:_,model1:t,model2:d,toggleCollapse:({isCollapsed:r,id:a,props:A})=>{console.log(r,a,A)}}}},Y={class:"a_columns a_columns_count_12"},w={class:"a_column a_column_6 a_columns_count_12_touch"};function K(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_COLLAPSE_HEADER_",description:"_A_UI_GROUP_COLLAPSE_DESCRIPTION_",props:["collapsible","is-collapsed"],emits:["toggle-collapse"]},{default:h(()=>[i("div",Y,[i("div",w,[s(n,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model1=a),children:e.children1,collapsible:!0,label:"Aloha",onToggleCollapse:e.toggleCollapse},null,8,["modelValue","children","onToggleCollapse"]),i("div",null,"model1: "+p(e.model1),1),s(n,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=a=>e.model2=a),children:e.children2,collapsible:!0,"is-collapsed":!0,label:"Aloha",onToggleCollapse:e.toggleCollapse},null,8,["modelValue","children","onToggleCollapse"]),i("div",null,"model2: "+p(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const Q=u(W,[["render",K]]);function Z(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  errors="Aloha"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetError",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const ee={name:"PageFieldsetError",components:{AFieldset:I,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"}],l=m(void 0),{codeHtml:t}=Z(),{codeJs:d}=z();return{children:e,codeHtml:t,codeJs:d,model:l}}};function le(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:h(()=>[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,errors:"Aloha",label:"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const oe=u(ee,[["render",le]]);function te(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  :has-border="true"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  :has-border="false"
  class="a_mt_3"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetHasBorder",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "border.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "border.checkbox",
      },
    ];
    const model = ref(undefined);

    return {
      children,
      model,
    };
  },
};`}}const ne={name:"PageFieldsetHasBorder",components:{AFieldset:I,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"border.text"},{type:"oneCheckbox",label:"Checkbox",id:"border.checkbox"}],l=m(void 0),{codeHtml:t}=te(),{codeJs:d}=de();return{children:e,codeHtml:t,codeJs:d,model:l}}},ae={class:"a_columns a_columns_count_12"},se={class:"a_column a_column_6 a_columns_count_12_touch"};function re(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HAS_BORDER_HEADER_",description:"_A_UI_GROUP_HAS_BORDER_DESCRIPTION_",props:"has-border"},{default:h(()=>[i("div",ae,[i("div",se,[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,"has-border":!0,label:"Fieldset"},null,8,["modelValue","children"]),s(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=a=>e.model=a),children:e.children,"has-border":!1,label:"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ie=u(ne,[["render",re]]);function ce(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  help-text="Aloha"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function _e(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetHelpText",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text2",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox2",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const me={name:"PageFieldsetHelpText",components:{AFieldset:I,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox2"}],l=m(void 0),{codeHtml:t}=ce(),{codeJs:d}=_e();return{children:e,codeHtml:t,codeJs:d,model:l}}};function pe(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:h(()=>[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,"help-text":"Aloha",label:"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const ue=u(me,[["render",pe]]);function fe(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
  label-description="Aloha"
></a-fieldset>
<div>model: {{ model }}</div>`}}function he(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetLabelDescription",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text2",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox2",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const Pe={name:"PageFieldsetLabelDescription",components:{AFieldset:I,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox2"}],l=m(void 0),{codeHtml:t}=fe(),{codeJs:d}=he();return{children:e,codeHtml:t,codeJs:d,model:l}}};function Ee(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:h(()=>[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,label:"Fieldset","label-description":"Aloha"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const Ie=u(Pe,[["render",Ee]]);function Ae(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  class="a_mt_3"
  label-screen-reader="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function be(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetLabelScreenReader",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "label.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "label.checkbox",
      },
    ];
    const model = ref(undefined);

    return {
      children,
      model,
    };
  },
};`}}const Se={name:"PageFieldsetLabelScreenReader",components:{AFieldset:I,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"label.text"},{type:"oneCheckbox",label:"Checkbox",id:"label.checkbox"}],l=m(void 0),{codeHtml:t}=Ae(),{codeJs:d}=be();return{children:e,codeHtml:t,codeJs:d,model:l}}},Re={class:"a_columns a_columns_count_12"},Oe={class:"a_column a_column_6 a_columns_count_12_touch"};function Te(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:h(()=>[i("div",Re,[i("div",Oe,[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),s(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=a=>e.model=a),children:e.children,"label-screen-reader":"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Ce=u(Se,[["render",Te]]);function ge(){return{dataEvents:[{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function De(){const e=S(()=>y({placeholder:"_A_FIELDSET_COMPONENT_NAME_"}));return{pageTitle:S(()=>`AFieldset${e.value?` (${e.value})`:""}`)}}function Le(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"attributes-fieldset",description:"_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"children",description:"_A_UI_PROPS_CHILDREN_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"class-column-default",description:"_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_column a_column_12",required:!1},{name:"class-columns",description:"_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_",type:"String / Object",default:"a_columns a_columns_count_12",required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"errors-all",description:"_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_fieldset_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"texts",description:"_A_FIELDSET_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
      })`,required:!1},{name:"use-flat-errors",description:"_A_PROPS_USE_FLAT_ERRORS_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"use-flat-model",description:"_A_PROPS_USE_FLAT_MODEL_DESCRIPTION_",type:"Boolean",default:!0,required:!1}]}}function Ne(){return{dataTranslate:["_A_FIELDSET_COLLAPSE_OPEN_","_A_FIELDSET_COLLAPSE_CLOSE_"]}}const Ue={name:"PageFieldset",components:{AlohaPage:N,AlohaTableProps:U,AlohaTableTranslate:x,ATranslation:F,PageFieldsetBasic:J,PageFieldsetChange:G,PageFieldsetCollapse:Q,PageFieldsetError:oe,PageFieldsetHasBorder:ie,PageFieldsetHelpText:ue,PageFieldsetLabelDescription:Ie,PageFieldsetLabelScreenReader:Ce},setup(){const{pageTitle:e}=De(),{dataProps:l}=Le(),{dataEvents:t}=ge(),{dataTranslate:d}=Ne();return{dataEvents:t,dataProps:l,dataTranslate:d,pageTitle:e}}};function xe(e,l,t,d,c,_){const n=o("a-translation"),r=o("page-fieldset-basic"),a=o("page-fieldset-change"),A=o("page-fieldset-help-text"),R=o("page-fieldset-error"),O=o("page-fieldset-label-description"),T=o("page-fieldset-label-screen-reader"),C=o("page-fieldset-collapse"),g=o("page-fieldset-has-border"),b=o("aloha-table-props"),D=o("aloha-table-translate"),L=o("aloha-page");return P(),f(L,{"page-title":e.pageTitle},{body:h(()=>[s(n,{tag:"p",html:"_A_FIELDSET_COMPONENT_DESCRIPTION_"}),s(r),s(a),s(A),s(R),s(O),s(T),s(C),s(g),s(b,{data:e.dataProps},null,8,["data"]),s(b,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),s(D,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ke=u(Ue,[["render",xe]]);export{Ke as default};
