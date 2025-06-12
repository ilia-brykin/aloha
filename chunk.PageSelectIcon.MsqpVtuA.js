import{A as P,a as f}from"./chunk.AlohaExample.CnpC0kTd.js";import{A as I}from"./chunk.AlohaTableProps.D0Pllc4Z.js";import{X as O,_ as u,g as R,A as C}from"./bundle.index.BJr53Aib.js";import{r as i,U as S,aS as E,e as l,V as A,Z as _,Y as c,aT as p,d as m}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.DdGPhwvj.js";import"./chunk.APageTabTitle.IIrUvvMK.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.hv1e07P7.js";import"./chunk.translations-ar._uz0yDwl.js";import"./chunk.translations-de.COE9j2lD.js";import"./chunk.translations-en.CkuqRVlP.js";import"./chunk.translations-es.Be1FWYUt.js";import"./chunk.translations-fr.DQ2na-o9.js";import"./chunk.translations-hr.PH2dXFBk.js";import"./chunk.translations-it.DG_WjIxj.js";import"./chunk.translations-ru.BJehrSwI.js";function L(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function N(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconBasic",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}const g={name:"PageSelectIconBasic",components:{AlohaExample:P,ASelectIcon:O},setup(){const{codeHtml:e}=L(),{codeJs:t}=N(),o=i(void 0),n=i(void 0);return{codeHtml:e,codeJs:t,model1:o,model2:n}}};function y(e,t,o,n,d,T){const s=l("a-select-icon"),r=l("aloha-example");return A(),S(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:E(()=>[_(s,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=a=>e.model1=a),label:"Select",type:"select"},null,8,["modelValue"]),c("div",null,"model1: "+p(e.model1),1),_(s,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=a=>e.model2=a),label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),c("div",null,"model2: "+p(e.model2),1)]),_:1},8,["code-html","code-js"])}const D=u(g,[["render",y]]);function v(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function B(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function b(){const e=m(()=>R({placeholder:"_A_SELECT_ICON_COMPONENT_NAME_"}));return{pageTitle:m(()=>`ASelectIcon${e.value?` (${e.value})`:""}`)}}function h(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function q(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const V={name:"PageSelectIcon",components:{AlohaPage:f,AlohaTableProps:I,ATranslation:C,PageSelectIconBasic:D},setup(){const{pageTitle:e}=b(),{dataProps:t}=h(),{dataSlots:o}=q(),{dataEvents:n}=v(),{dataExposes:d}=B();return{dataEvents:n,dataExposes:d,dataProps:t,dataSlots:o,pageTitle:e}}};function $(e,t,o,n,d,T){const s=l("a-translation"),r=l("page-select-icon-basic"),a=l("aloha-page");return A(),S(a,{"page-title":e.pageTitle},{body:E(()=>[_(s,{tag:"p",html:"_A_SELECT_ICON_COMPONENT_DESCRIPTION_"}),_(r)]),_:1},8,["page-title"])}const W=u(V,[["render",$]]);export{W as default};
