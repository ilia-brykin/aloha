import{A as T,a as L}from"./chunk.AlohaExample.EheeFqAD.js";import{A as S}from"./chunk.AlohaTableProps.DQSBGQmP.js";import{_ as E,g as b,A as g}from"./bundle.index.Dt_eHidu.js";import{r as p,V as A,aT as m,e as d,W as u,Z as c,_ as r,d as R}from"./chunk.vendor.BxCHGHAU.js";import"./chunk.vendor-lodash.BMPrua2s.js";import{A as f}from"./chunk.AFilters.Bq_4o5GB.js";import"./chunk.APageTabTitle.kR6jwLlO.js";import"./chunk.AlohaHighlightjs.B3F2oL8_.js";import"./chunk.ATable.CbhUJO9k.js";import"./chunk.translations-ar.D8MQqUIX.js";import"./chunk.translations-de.Cn_yzXHt.js";import"./chunk.translations-en.Cabsq1fv.js";import"./chunk.translations-es.CTtyunpM.js";import"./chunk.translations-fr.tpgV9obb.js";import"./chunk.translations-hr.v7YKJpdX.js";import"./chunk.translations-it.Dqw3KhB-.js";import"./chunk.translations-ru.Cz76XEJm.js";function y(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function M(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFilters,
} from "aloha-vue";
    
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
};`}}const F={name:"PageFiltersDefaultHide",components:{AFilters:f,AlohaExample:T},setup(){const{codeHtml:e}=y(),{codeJs:l}=M(),a=[{type:"select",id:"select1",label:"Select 1",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"}]},{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_",alwaysVisible:!0},{type:"text",id:"aloha",label:"_A_TABLE_FILTER_TEXT_"},{type:"dateRange",id:"dateRange",label:"_A_TABLE_FILTER_INPUT_DATE_RANGE_"},{type:"numberRange",id:"numberRange",label:"_A_TABLE_FILTER_INPUT_NUMBER_RANGE_"},{type:"date",id:"date",label:"_A_TABLE_FILTER_DATE_"},{type:"text",id:"aloha1",label:"_A_TABLE_FILTER_EXTRA_"},{type:"integerRange",id:"integerNumber",label:"Integer range"}],o=p({}),i=p({});return{appliedModel:o,codeHtml:e,codeJs:l,filters:a,unappliedModel:i}}};function N(e,l,a,o,i,s){const n=d("a-filters"),_=d("aloha-example");return u(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FILTERS_PAGE_DEFAULT_HIDE_HEADER_",description:"_A_FILTERS_PAGE_FILTERS_DEFAULT_HIDE_DESCRIPTION_",props:["filters"]},{default:m(()=>[c("div",null,[r(n,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=t=>e.appliedModel=t),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=t=>e.unappliedModel=t)},null,8,["filters","applied-model","unapplied-model"])])]),_:1},8,["code-html","code-js"])}const O=E(F,[["render",N]]);function h(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFilters,
} from "aloha-vue";
    
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
};`}}const D={name:"PageFiltersExample",components:{AFilters:f,AlohaExample:T},setup(){const{codeHtml:e}=h(),{codeJs:l}=C(),a={type:"text",id:"search",label:"_A_PAGE_FILTER_SEARCH_",labelScreenReader:"_A_PAGE_FILTER_SEARCH_SCREEN_READER_"},o=[{type:"text",id:"aloha",label:"_A_PAGE_FILTER_TEXT_",alwaysVisible:!0},{type:"date",id:"date",label:"_A_PAGE_FILTER_DATE_",alwaysVisible:!0},{type:"integer",id:"integer",label:"_A_PAGE_FILTER_INTEGER_",alwaysVisible:!0},{type:"dateRange",id:"dateRange",label:"_A_TABLE_FILTER_INPUT_DATE_RANGE_",alwaysVisible:!0},{type:"numberRange",id:"numberRange",label:"_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",alwaysVisible:!0}],i=p({}),s=p({}),n=p({});return{appliedModel:i,codeHtml:e,codeJs:l,filterMain:a,filters:o,mainModel:s,unappliedModel:n}}};function B(e,l,a,o,i,s){const n=d("a-filters"),_=d("aloha-example");return u(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGE_FILTERS_HEADER_",description:"_A_PAGE_FILTERS_DESCRIPTION_",props:["filters","v-model:applied-model","v-model:unapplied-model"]},{default:m(()=>[c("div",null,[r(n,{"can-save":!0,"filter-main":e.filterMain,filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=t=>e.appliedModel=t),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=t=>e.unappliedModel=t),"main-model":e.mainModel,"onUpdate:mainModel":l[2]||(l[2]=t=>e.mainModel=t)},null,8,["filter-main","filters","applied-model","unapplied-model","main-model"])])]),_:1},8,["code-html","code-js"])}const H=E(D,[["render",B]]);function $(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFilters,
} from "aloha-vue";
    
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
};`}}const G={name:"PageFiltersModelId",components:{AFilters:f,AlohaExample:T},setup(){const{codeHtml:e}=$(),{codeJs:l}=v(),a=[{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_"},{type:"checkbox",id:"aloha1",label:"Aloha 1",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"}]},{type:"checkbox",id:"aloha2",label:"Aloha 2",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"}]}],o=p({}),i=p({});return{appliedModel:o,codeHtml:e,codeJs:l,filters:a,unappliedModel:i}}};function U(e,l,a,o,i,s){const n=d("a-filters"),_=d("aloha-example");return u(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FILTERS_PAGE_MODEL_ID_HEADER_",description:"_A_FILTERS_PAGE_MODEL_ID_DESCRIPTION_",props:["filters"]},{default:m(()=>[c("div",null,[r(n,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=t=>e.appliedModel=t),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=t=>e.unappliedModel=t)},null,8,["filters","applied-model","unapplied-model"])])]),_:1},8,["code-html","code-js"])}const V=E(G,[["render",U]]);function x(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function J(){const e=R(()=>b({placeholder:"_A_FILTERS_COMPONENT_NAME_"}));return{pageTitle:R(()=>`AFilters${e.value?` (${e.value})`:""}`)}}function q(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function w(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const k={name:"PageFilters",components:{AlohaPage:L,AlohaTableProps:S,ATranslation:g,PageFiltersExample:H,PageFiltersDefaultHide:O,PageFiltersModelId:V},setup(){const{pageTitle:e}=J(),{dataProps:l}=q(),{dataSlots:a}=w(),{dataEvents:o}=x();return{dataEvents:o,dataProps:l,dataSlots:a,pageTitle:e}}};function X(e,l,a,o,i,s){const n=d("a-translation"),_=d("page-filters-example"),t=d("page-filters-default-hide"),I=d("page-filters-model-id"),P=d("aloha-page");return u(),A(P,{"page-title":e.pageTitle},{body:m(()=>[r(n,{tag:"p",html:"_A_FILTERS_COMPONENT_DESCRIPTION_"}),r(_),r(t),r(I)]),_:1},8,["page-title"])}const pe=E(k,[["render",X]]);export{pe as default};
