import{A as T,a as f}from"./chunk.AlohaExample.BzabpESL.js";import{A as P}from"./chunk.AlohaTableProps.9jib73J-.js";import{_ as E,g as R,A as S}from"./bundle.index.DEqsA1mr.js";import{r as d,R as c,aR as u,e as n,U as m,W as I,Y as s,d as p}from"./chunk.vendor.C8MJL5OZ.js";import{A as O}from"./chunk.AFilters.Cnk7XFpz.js";import"./chunk.vendor-lodash.D7ZMGyiW.js";import"./chunk.APageTabTitle.B-GVyTna.js";import"./chunk.AlohaHighlightjs.BioRad36.js";import"./chunk.ATable.T_J168av.js";import"./chunk.translations-ar.DW92vQFw.js";import"./chunk.translations-de.oT0Za61t.js";import"./chunk.translations-en.DtVu45cY.js";import"./chunk.translations-es.Bp8CMtGx.js";import"./chunk.translations-fr.YN97SXly.js";import"./chunk.translations-hr.DGAxA7oA.js";import"./chunk.translations-it.DhWidzxs.js";import"./chunk.translations-ru.FTuwrZIr.js";function L(){return{codeHtml:`<a-filters
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
};`}}const g={name:"PageFiltersRightExample",components:{AFilters:O,AlohaExample:T},setup(){const{codeHtml:e}=L(),{codeJs:t}=C(),a=[{type:"text",id:"search",label:"_A_PAGE_FILTER_SEARCH_",main:!0},{type:"text",id:"aloha",label:"_A_PAGE_FILTER_TEXT_",alwaysVisible:!0},{type:"date",id:"date",label:"_A_PAGE_FILTER_DATE_",alwaysVisible:!0}],o=d({}),i=d({});return{appliedModel:o,codeHtml:e,codeJs:t,filters:a,unappliedModel:i}}};function N(e,t,a,o,i,A){const _=n("a-filters"),r=n("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGE_FILTERS_HEADER_",description:"_A_PAGE_FILTERS_DESCRIPTION_",props:["view"]},{default:u(()=>[I("div",null,[s(_,{filters:e.filters,view:"right","applied-model":e.appliedModel,"onUpdate:appliedModel":t[0]||(t[0]=l=>e.appliedModel=l),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":t[1]||(t[1]=l=>e.unappliedModel=l)},null,8,["filters","applied-model","unapplied-model"])])]),_:1},8,["code-html","code-js"])}const y=E(g,[["render",N]]);function h(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function D(){const e=p(()=>R({placeholder:"_A_FILTERS_RIGHT_COMPONENT_NAME_"}));return{pageTitle:p(()=>`AFilters${e.value?` (${e.value})`:""}`)}}function F(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function M(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const b={name:"PageFiltersRight",components:{AlohaPage:f,AlohaTableProps:P,ATranslation:S,PageFiltersRightExample:y},setup(){const{pageTitle:e}=D(),{dataProps:t}=F(),{dataSlots:a}=M(),{dataEvents:o}=h();return{dataEvents:o,dataProps:t,dataSlots:a,pageTitle:e}}};function v(e,t,a,o,i,A){const _=n("a-translation"),r=n("page-filters-right-example"),l=n("aloha-page");return m(),c(l,{"page-title":e.pageTitle},{body:u(()=>[s(_,{tag:"p",html:"_A_FILTERS_RIGHT_COMPONENT_DESCRIPTION_"}),s(r)]),_:1},8,["page-title"])}const Q=E(b,[["render",v]]);export{Q as default};
