import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{Bt as n,Ht as r,Vt as i,an as a,gn as o,ln as s,pn as c,qt as l}from"./chunk.vendor.SEynj6EJ.js";import{t as u}from"./chunk.AlohaExample.Bx3NX4bX.js";import{O as d,hn as f,mn as p,t as m}from"./bundle.index.LlT2KVEy.js";function h(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function g(){return{codeJs:`import {
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
};`}}var _={name:`PageFiltersRightExample`,components:{AFilters:d,AlohaExample:u},setup(){let{codeHtml:e}=h(),{codeJs:t}=g();return{appliedModel:o({}),codeHtml:e,codeJs:t,filters:[{type:`text`,id:`search`,label:`_A_PAGE_FILTER_SEARCH_`,main:!0},{type:`text`,id:`aloha`,label:`_A_PAGE_FILTER_TEXT_`,alwaysVisible:!0},{type:`date`,id:`date`,label:`_A_PAGE_FILTER_DATE_`,alwaysVisible:!0}],unappliedModel:o({})}}};function v(e,t,n,o,u,d){let f=s(`a-filters`),p=s(`aloha-example`);return a(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_FILTERS_HEADER_`,description:`_A_PAGE_FILTERS_DESCRIPTION_`,props:[`view`]},{default:c(()=>[i(`div`,null,[l(f,{filters:e.filters,view:`right`,"applied-model":e.appliedModel,"onUpdate:appliedModel":t[0]||=t=>e.appliedModel=t,"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":t[1]||=t=>e.unappliedModel=t},null,8,[`filters`,`applied-model`,`unapplied-model`])])]),_:1},8,[`code-html`,`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function x(){let e=n(()=>f({placeholder:`_A_FILTERS_RIGHT_COMPONENT_NAME_`}));return{pageTitle:n(()=>`AFilters${e.value?` (${e.value})`:``}`)}}function S(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_SHOW_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_A_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function C(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var w={name:`PageFiltersRight`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:p,PageFiltersRightExample:y},setup(){let{pageTitle:e}=x(),{dataProps:t}=S(),{dataSlots:n}=C(),{dataEvents:r}=b();return{dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function T(e,t,n,i,o,u){let d=s(`a-translation`),f=s(`page-filters-right-example`),p=s(`aloha-page`);return a(),r(p,{"page-title":e.pageTitle},{body:c(()=>[l(d,{tag:`p`,html:`_A_FILTERS_RIGHT_COMPONENT_DESCRIPTION_`}),l(f)]),_:1},8,[`page-title`])}var E=m(w,[[`render`,T]]);export{E as default};