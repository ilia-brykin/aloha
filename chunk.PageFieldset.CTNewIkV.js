import{A as E,a as N}from"./chunk.AlohaExample.DAr9Tlnu.js";import{A as x}from"./chunk.AlohaTableProps.DH-ZZEBp.js";import{A as v}from"./chunk.AlohaTableTranslate.CfGzxMz6.js";import{s as A,_ as u,g as U,A as L}from"./bundle.index.BKSIYICd.js";import{r as m,k as o,J as f,aQ as h,H as P,O as s,N as i,aR as p,a as S}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.APageTabTitle.Dc0mofpE.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import"./chunk.ATable.B4vpypnY.js";import"./chunk.translations-ar.DNd5WUpF.js";import"./chunk.translations-de.BW8KC1lT.js";import"./chunk.translations-en.C52QdnSW.js";import"./chunk.translations-es.DrJSkweL.js";import"./chunk.translations-fr.yYW9XAlD.js";import"./chunk.translations-hr.DHEZcPfE.js";import"./chunk.translations-it.BFeTT1Q6.js";import"./chunk.translations-ru.DS_CKcbr.js";function F(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function y(){return{codeJs:`import {
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
};`}}const $={name:"PageFieldsetBasic",components:{AFieldset:A,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"}],l=m(void 0),{codeHtml:t}=F(),{codeJs:d}=y();return{children:e,codeHtml:t,codeJs:d,model:l}}};function H(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label","children"]},{default:h(()=>[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const k=u($,[["render",H]]);function J(){return{codeHtml:`<a-fieldset
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
};`}}const B={name:"PageFieldsetChange",components:{AFieldset:A,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text1"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox1"}],l=m(void 0),t=({model:_,id:n,props:r})=>{l.value=_,console.log(n,r)},{codeHtml:d}=J(),{codeJs:c}=V();return{changeModel:t,children:e,codeHtml:d,codeJs:c,model:l}}};function q(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:h(()=>[s(n,{change:e.changeModel,children:e.children,"model-value":e.model,label:"Fieldset"},null,8,["change","children","model-value"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const j=u(B,[["render",q]]);function G(){return{codeHtml:`<a-fieldset
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
<div>model2: {{ model2 }}</div>`}}function M(){return{codeJs:`import {
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
};`}}const X={name:"PageFieldsetCollapse",components:{AFieldset:A,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha1.text"}],l=[{type:"text",label:"Text",id:"aloha2.text"}],t=m(void 0),d=m(void 0),{codeHtml:c}=G(),{codeJs:_}=M();return{children1:e,children2:l,codeHtml:c,codeJs:_,model1:t,model2:d,toggleCollapse:({isCollapsed:r,id:a,props:I})=>{console.log(r,a,I)}}}},w={class:"a_columns a_columns_count_12"},K={class:"a_column a_column_6 a_columns_count_12_touch"};function Q(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_COLLAPSE_HEADER_",description:"_A_UI_GROUP_COLLAPSE_DESCRIPTION_",props:["collapsible","is-collapsed"],emits:["toggle-collapse"]},{default:h(()=>[i("div",w,[i("div",K,[s(n,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model1=a),children:e.children1,collapsible:!0,label:"Aloha",onToggleCollapse:e.toggleCollapse},null,8,["modelValue","children","onToggleCollapse"]),i("div",null,"model1: "+p(e.model1),1),s(n,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=a=>e.model2=a),children:e.children2,collapsible:!0,"is-collapsed":!0,label:"Aloha",onToggleCollapse:e.toggleCollapse},null,8,["modelValue","children","onToggleCollapse"]),i("div",null,"model2: "+p(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const W=u(X,[["render",Q]]);function Y(){return{codeHtml:`<a-fieldset
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
};`}}const Z={name:"PageFieldsetError",components:{AFieldset:A,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"}],l=m(void 0),{codeHtml:t}=Y(),{codeJs:d}=z();return{children:e,codeHtml:t,codeJs:d,model:l}}};function ee(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:h(()=>[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,errors:"Aloha",label:"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const le=u(Z,[["render",ee]]);function oe(){return{codeHtml:`<a-fieldset
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
<div>model: {{ model }}</div>`}}function te(){return{codeJs:`import {
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
};`}}const de={name:"PageFieldsetHasBorder",components:{AFieldset:A,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"border.text"},{type:"oneCheckbox",label:"Checkbox",id:"border.checkbox"}],l=m(void 0),{codeHtml:t}=oe(),{codeJs:d}=te();return{children:e,codeHtml:t,codeJs:d,model:l}}},ne={class:"a_columns a_columns_count_12"},ae={class:"a_column a_column_6 a_columns_count_12_touch"};function se(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HAS_BORDER_HEADER_",description:"_A_UI_GROUP_HAS_BORDER_DESCRIPTION_",props:"has-border"},{default:h(()=>[i("div",ne,[i("div",ae,[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,"has-border":!0,label:"Fieldset"},null,8,["modelValue","children"]),s(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=a=>e.model=a),children:e.children,"has-border":!1,label:"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)])])]),_:1},8,["code-html","code-js"])}const re=u(de,[["render",se]]);function ie(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  help-text="Aloha"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function ce(){return{codeJs:`import {
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
};`}}const _e={name:"PageFieldsetHelpText",components:{AFieldset:A,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"aloha.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox2"}],l=m(void 0),{codeHtml:t}=ie(),{codeJs:d}=ce();return{children:e,codeHtml:t,codeJs:d,model:l}}};function me(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:h(()=>[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,"help-text":"Aloha",label:"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const pe=u(_e,[["render",me]]);function ue(){return{codeHtml:`<a-fieldset
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
<div>model: {{ model }}</div>`}}function fe(){return{codeJs:`import {
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
};`}}const he={name:"PageFieldsetLabelScreenReader",components:{AFieldset:A,AlohaExample:E},setup(){const e=[{type:"text",label:"Text",id:"label.text"},{type:"oneCheckbox",label:"Checkbox",id:"label.checkbox"}],l=m(void 0),{codeHtml:t}=ue(),{codeJs:d}=fe();return{children:e,codeHtml:t,codeJs:d,model:l}}},Pe={class:"a_columns a_columns_count_12"},Ee={class:"a_column a_column_6 a_columns_count_12_touch"};function Ae(e,l,t,d,c,_){const n=o("a-fieldset"),r=o("aloha-example");return P(),f(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:h(()=>[i("div",Pe,[i("div",Ee,[s(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=a=>e.model=a),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),s(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=a=>e.model=a),children:e.children,"label-screen-reader":"Fieldset"},null,8,["modelValue","children"]),i("div",null,"model: "+p(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Ie=u(he,[["render",Ae]]);function be(){const e=S(()=>U({placeholder:"_A_FIELDSET_COMPONENT_NAME_"}));return{pageTitle:S(()=>`AFieldset${e.value?` (${e.value})`:""}`)}}function Se(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"children",description:"_A_UI_PROPS_CHILDREN_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"class-column-default",description:"_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_column a_column_12",required:!1},{name:"class-columns",description:"_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_",type:"String / Object",default:"a_columns a_columns_count_12",required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"errors-all",description:"_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_fieldset_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"texts",description:"_A_FIELDSET_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
      })`,required:!1}]}}function Re(){return{dataEvents:[{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function Oe(){return{dataTranslate:["_A_FIELDSET_COLLAPSE_OPEN_","_A_FIELDSET_COLLAPSE_CLOSE_"]}}const Ce={name:"PageFieldset",components:{AlohaPage:N,AlohaTableProps:x,AlohaTableTranslate:v,ATranslation:L,PageFieldsetBasic:k,PageFieldsetChange:j,PageFieldsetCollapse:W,PageFieldsetError:le,PageFieldsetHasBorder:re,PageFieldsetHelpText:pe,PageFieldsetLabelScreenReader:Ie},setup(){const{pageTitle:e}=be(),{dataProps:l}=Se(),{dataEvents:t}=Re(),{dataTranslate:d}=Oe();return{dataEvents:t,dataProps:l,dataTranslate:d,pageTitle:e}}};function Te(e,l,t,d,c,_){const n=o("a-translation"),r=o("page-fieldset-basic"),a=o("page-fieldset-change"),I=o("page-fieldset-help-text"),R=o("page-fieldset-error"),O=o("page-fieldset-label-screen-reader"),C=o("page-fieldset-collapse"),T=o("page-fieldset-has-border"),b=o("aloha-table-props"),g=o("aloha-table-translate"),D=o("aloha-page");return P(),f(D,{"page-title":e.pageTitle},{body:h(()=>[s(n,{tag:"p",html:"_A_FIELDSET_COMPONENT_DESCRIPTION_"}),s(r),s(a),s(I),s(R),s(O),s(C),s(T),s(b,{data:e.dataProps},null,8,["data"]),s(b,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),s(g,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ge=u(Ce,[["render",Te]]);export{Ge as default};
