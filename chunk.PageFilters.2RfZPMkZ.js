import{A as c,a as L}from"./chunk.AlohaExample.bHGij63B.js";import{A as S}from"./chunk.AlohaTableProps.Djt0Y_Qg.js";import{_ as E,g as b,A as g}from"./bundle.index.C_5YVLtW.js";import{A as T}from"./chunk.AFilters.PLCdnjZK.js";import{r as s,m as d,K as A,aK as m,J as u,O as f,P as r,a as R}from"./chunk.vendor.D6eG-XyB.js";import"./chunk.vendor-lodash.4mRNCQpN.js";import"./chunk.ATable.DruEzHhF.js";import"./chunk.utilsMath.Dv1kx9ss.js";import"./chunk.AForm.CSasGaDW.js";import"./chunk.ADatepicker.DsVaojwL.js";import"./chunk.UiMixinProps.BanNRFZI.js";import"./chunk.AInputNumber.Dd9Cig3P.js";import"./chunk.ATinymce.CNhjlfBT.js";import"./chunk.vendor-tinymce.Dn8nHerG.js";function y(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import AFilters from "aloha-vue/src/AFilters/AFilters";
    
export default {
  name: "PageFiltersExample",
  components: {
    AFilters,
  },
  setup() {
    const filters = [
      {
        type: "text",
        id: "search",
        label: "_A_PAGE_FILTER_SEARCH_",
        main: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_PAGE_FILTER_TEXT_",
        alwaysVisible: true,
      },
      {
        type: "date",
        id: "date",
        label: "_A_PAGE_FILTER_DATE_",
        alwaysVisible: true,
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});
    
    return {
      appliedModel,
      filters,
      unappliedModel,
    };
  },
};`}}const M={name:"PageFiltersExample",components:{AlohaExample:c,AFilters:T},setup(){const{codeHtml:e}=y(),{codeJs:l}=F(),a={type:"text",id:"search",label:"_A_PAGE_FILTER_SEARCH_",labelScreenReader:"_A_PAGE_FILTER_SEARCH_SCREEN_READER_"},o=[{type:"text",id:"aloha",label:"_A_PAGE_FILTER_TEXT_",alwaysVisible:!0},{type:"date",id:"date",label:"_A_PAGE_FILTER_DATE_",alwaysVisible:!0},{type:"integer",id:"integer",label:"_A_PAGE_FILTER_INTEGER_",alwaysVisible:!0},{type:"dateRange",id:"dateRange",label:"_A_TABLE_FILTER_INPUT_DATE_RANGE_",alwaysVisible:!0},{type:"numberRange",id:"numberRange",label:"_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",alwaysVisible:!0}],i=s({}),p=s({}),n=s({});return{appliedModel:i,codeHtml:e,codeJs:l,filterMain:a,filters:o,mainModel:p,unappliedModel:n}}};function O(e,l,a,o,i,p){const n=d("a-filters"),_=d("aloha-example");return u(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGE_FILTERS_HEADER_",description:"_A_PAGE_FILTERS_DESCRIPTION_",props:["filters","v-model:applied-model","v-model:unapplied-model"]},{default:m(()=>[f("div",null,[r(n,{"can-save":!0,"filter-main":e.filterMain,filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=t=>e.appliedModel=t),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=t=>e.unappliedModel=t),"main-model":e.mainModel,"onUpdate:mainModel":l[2]||(l[2]=t=>e.mainModel=t)},null,8,["filter-main","filters","applied-model","unapplied-model","main-model"])])]),_:1},8,["code-html","code-js"])}const N=E(M,[["render",O]]);function h(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import AFilters from "aloha-vue/src/AFilters/AFilters";
    
export default {
  name: "PageFiltersDefaultHide",
  components: {
    AFilters,
  },
  setup() {
     const filters = [
      {
        type: "text",
        id: "search",
        label: "_A_TABLE_FILTER_SEARCH_",
        main: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_TABLE_FILTER_TEXT_",
      },
      {
        type: "numberRange",
        id: "numberRange",
        label: "_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",
      },
      {
        type: "date",
        id: "date",
        label: "_A_TABLE_FILTER_DATE_",
      },
      {
        type: "text",
        id: "aloha1",
        label: "_A_TABLE_FILTER_EXTRA_",
      },
      {
        type: "integerRange",
        id: "integerNumber",
        label: "Integer range",
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});
    
    return {
      appliedModel,
      filters,
      unappliedModel,
    };
  },
};`}}const D={name:"PageFiltersDefaultHide",components:{AlohaExample:c,AFilters:T},setup(){const{codeHtml:e}=h(),{codeJs:l}=C(),a=[{type:"select",id:"select1",label:"Select 1",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"}]},{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_",alwaysVisible:!0},{type:"text",id:"aloha",label:"_A_TABLE_FILTER_TEXT_"},{type:"dateRange",id:"dateRange",label:"_A_TABLE_FILTER_INPUT_DATE_RANGE_"},{type:"numberRange",id:"numberRange",label:"_A_TABLE_FILTER_INPUT_NUMBER_RANGE_"},{type:"date",id:"date",label:"_A_TABLE_FILTER_DATE_"},{type:"text",id:"aloha1",label:"_A_TABLE_FILTER_EXTRA_"},{type:"integerRange",id:"integerNumber",label:"Integer range"}],o=s({}),i=s({});return{appliedModel:o,codeHtml:e,codeJs:l,filters:a,unappliedModel:i}}};function B(e,l,a,o,i,p){const n=d("a-filters"),_=d("aloha-example");return u(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FILTERS_PAGE_DEFAULT_HIDE_HEADER_",description:"_A_FILTERS_PAGE_FILTERS_DEFAULT_HIDE_DESCRIPTION_",props:["filters"]},{default:m(()=>[f("div",null,[r(n,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=t=>e.appliedModel=t),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=t=>e.unappliedModel=t)},null,8,["filters","applied-model","unapplied-model"])])]),_:1},8,["code-html","code-js"])}const H=E(D,[["render",B]]);function $(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import AFilters from "aloha-vue/src/AFilters/AFilters";
    
export default {
  name: "PageFiltersDefaultHide",
  components: {
    AFilters,
  },
  setup() {
     const filters = [
      {
        type: "text",
        id: "search",
        label: "_A_TABLE_FILTER_SEARCH_",
        main: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_TABLE_FILTER_TEXT_",
      },
      {
        type: "numberRange",
        id: "numberRange",
        label: "_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",
      },
      {
        type: "date",
        id: "date",
        label: "_A_TABLE_FILTER_DATE_",
      },
      {
        type: "text",
        id: "aloha1",
        label: "_A_TABLE_FILTER_EXTRA_",
      },
      {
        type: "integerRange",
        id: "integerNumber",
        label: "Integer range",
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});
    
    return {
      appliedModel,
      filters,
      unappliedModel,
    };
  },
};`}}const G={name:"PageFiltersModelId",components:{AlohaExample:c,AFilters:T},setup(){const{codeHtml:e}=$(),{codeJs:l}=v(),a=[{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_"},{type:"checkbox",id:"aloha1",label:"Aloha 1",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"}]},{type:"checkbox",id:"aloha2",label:"Aloha 2",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"}]}],o=s({}),i=s({});return{appliedModel:o,codeHtml:e,codeJs:l,filters:a,unappliedModel:i}}};function U(e,l,a,o,i,p){const n=d("a-filters"),_=d("aloha-example");return u(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FILTERS_PAGE_MODEL_ID_HEADER_",description:"_A_FILTERS_PAGE_MODEL_ID_DESCRIPTION_",props:["filters"]},{default:m(()=>[f("div",null,[r(n,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=t=>e.appliedModel=t),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=t=>e.unappliedModel=t)},null,8,["filters","applied-model","unapplied-model"])])]),_:1},8,["code-html","code-js"])}const x=E(G,[["render",U]]);function J(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function V(){const e=R(()=>b({placeholder:"_A_FILTERS_COMPONENT_NAME_"}));return{pageTitle:R(()=>`AFilters${e.value?` (${e.value})`:""}`)}}function q(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function w(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const k={name:"PageFilters",components:{AlohaPage:L,AlohaTableProps:S,ATranslation:g,PageFiltersExample:N,PageFiltersDefaultHide:H,PageFiltersModelId:x},setup(){const{pageTitle:e}=V(),{dataProps:l}=q(),{dataSlots:a}=w(),{dataEvents:o}=J();return{dataEvents:o,dataProps:l,dataSlots:a,pageTitle:e}}};function X(e,l,a,o,i,p){const n=d("a-translation"),_=d("page-filters-example"),t=d("page-filters-default-hide"),I=d("page-filters-model-id"),P=d("aloha-page");return u(),A(P,{"page-title":e.pageTitle},{body:m(()=>[r(n,{tag:"p",html:"_A_FILTERS_COMPONENT_DESCRIPTION_"}),r(_),r(t),r(I)]),_:1},8,["page-title"])}const ne=E(k,[["render",X]]);export{ne as default};
