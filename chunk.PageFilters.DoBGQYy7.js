import{A as m,a as L}from"./chunk.AlohaExample.8rElMyDl.js";import{A as P}from"./chunk.AlohaTableProps.D9YkAByO.js";import{_ as u,g,A as S}from"./bundle.index.DouUSTKr.js";import{r as p,V as E,aT as T,e as _,W as A,Z as f,_ as r,d as R}from"./chunk.vendor.BNArDUz4.js";import"./chunk.vendor-lodash.qxhehls9.js";import{A as c}from"./chunk.AFilters.B2cNT8AQ.js";import"./chunk.APageTabTitle.uLd0LT3L.js";import"./chunk.AlohaHighlightjs.C24k7nGh.js";import"./chunk.ATable.6E3yBmHN.js";import"./chunk.translations-ar.e4PS1tyx.js";import"./chunk.translations-de.OrBYDcrv.js";import"./chunk.translations-en.DQcOH5RE.js";import"./chunk.translations-es.Q19nyFDG.js";import"./chunk.translations-fr.Bcg-ogV6.js";import"./chunk.translations-hr.DSa-1cCn.js";import"./chunk.translations-it.B3WUSlx4.js";import"./chunk.translations-ru.a1BEYSAD.js";function y(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function N(){return{codeJs:`import {
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
        type: "select",
        id: "select1",
        label: "Select 1",
        alwaysVisible: true,
        keyLabel: "label",
        keyId: "id",
        data: [
          {
            label: "Aloha 0",
            id: "aloha_0",
          },
          {
            label: "Aloha 1",
            id: "aloha_1",
          },
        ],
      },
      {
        type: "multiselect",
        id: "select_one_per_group",
        label: "Select one per group",
        alwaysVisible: true,
        keyLabel: "label",
        keyId: "id",
        keyGroup: "group",
        mode: "one_per_group",
        translateData: true,
        data: [
          {
            label: "_TXT_POSITIVE_",
            id: "koeln_true",
            group: "Köln",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "koeln_false",
            group: "Köln",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "koeln_null",
            group: "Köln",
          },
          {
            label: "_TXT_POSITIVE_",
            id: "bonn_true",
            group: "Bonn",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "bonn_false",
            group: "Bonn",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "bonn_null",
            group: "Bonn",
          },
          {
            label: "_TXT_POSITIVE_",
            id: "duesseldorf_true",
            group: "Düsseldorf",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "duesseldorf_false",
            group: "Düsseldorf",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "duesseldorf_null",
            group: "Düsseldorf",
          },
        ],
      },
      {
        type: "text",
        id: "search",
        label: "_A_TABLE_FILTER_SEARCH_",
        alwaysVisible: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_TABLE_FILTER_TEXT_",
      },
      {
        type: "dateRange",
        id: "dateRange",
        label: "_A_TABLE_FILTER_INPUT_DATE_RANGE_",
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
};`}}const O={name:"PageFiltersDefaultHide",components:{AFilters:c,AlohaExample:m},setup(){const{codeHtml:e}=y(),{codeJs:l}=N(),t=[{type:"select",id:"select1",label:"Select 1",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"}]},{type:"multiselect",id:"select_one_per_group",label:"Select one per group",alwaysVisible:!0,keyLabel:"label",keyId:"id",keyGroup:"group",mode:"one_per_group",translateData:!0,data:[{label:"_TXT_POSITIVE_",id:"koeln_true",group:"Köln"},{label:"_TXT_NEGATIVE_",id:"koeln_false",group:"Köln"},{label:"_TXT_NEUTRAL_",id:"koeln_null",group:"Köln"},{label:"_TXT_POSITIVE_",id:"bonn_true",group:"Bonn"},{label:"_TXT_NEGATIVE_",id:"bonn_false",group:"Bonn"},{label:"_TXT_NEUTRAL_",id:"bonn_null",group:"Bonn"},{label:"_TXT_POSITIVE_",id:"duesseldorf_true",group:"Düsseldorf"},{label:"_TXT_NEGATIVE_",id:"duesseldorf_false",group:"Düsseldorf"},{label:"_TXT_NEUTRAL_",id:"duesseldorf_null",group:"Düsseldorf"}]},{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_",alwaysVisible:!0},{type:"text",id:"aloha",label:"_A_TABLE_FILTER_TEXT_"},{type:"dateRange",id:"dateRange",label:"_A_TABLE_FILTER_INPUT_DATE_RANGE_"},{type:"numberRange",id:"numberRange",label:"_A_TABLE_FILTER_INPUT_NUMBER_RANGE_"},{type:"date",id:"date",label:"_A_TABLE_FILTER_DATE_"},{type:"text",id:"aloha1",label:"_A_TABLE_FILTER_EXTRA_"},{type:"integerRange",id:"integerNumber",label:"Integer range"}],o=p({}),d=p({});return{appliedModel:o,codeHtml:e,codeJs:l,filters:t,unappliedModel:d}}};function M(e,l,t,o,d,s){const n=_("a-filters"),i=_("aloha-example");return A(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FILTERS_PAGE_DEFAULT_HIDE_HEADER_",description:"_A_FILTERS_PAGE_FILTERS_DEFAULT_HIDE_DESCRIPTION_",props:["filters"]},{default:T(()=>[f("div",null,[r(n,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=a=>e.appliedModel=a),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=a=>e.unappliedModel=a)},null,8,["filters","applied-model","unapplied-model"])])]),_:1},8,["code-html","code-js"])}const F=u(O,[["render",M]]);function h(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function D(){return{codeJs:`import {
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
};`}}const C={name:"PageFiltersExample",components:{AFilters:c,AlohaExample:m},setup(){const{codeHtml:e}=h(),{codeJs:l}=D(),t={type:"text",id:"search",label:"_A_PAGE_FILTER_SEARCH_",labelScreenReader:"_A_PAGE_FILTER_SEARCH_SCREEN_READER_"},o=[{type:"text",id:"aloha",label:"_A_PAGE_FILTER_TEXT_",alwaysVisible:!0},{type:"date",id:"date",label:"_A_PAGE_FILTER_DATE_",alwaysVisible:!0},{type:"integer",id:"integer",label:"_A_PAGE_FILTER_INTEGER_",alwaysVisible:!0},{type:"dateRange",id:"dateRange",label:"_A_TABLE_FILTER_INPUT_DATE_RANGE_",alwaysVisible:!0},{type:"numberRange",id:"numberRange",label:"_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",alwaysVisible:!0}],d=p({}),s=p({}),n=p({});return{appliedModel:d,codeHtml:e,codeJs:l,filterMain:t,filters:o,mainModel:s,unappliedModel:n}}};function B(e,l,t,o,d,s){const n=_("a-filters"),i=_("aloha-example");return A(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGE_FILTERS_HEADER_",description:"_A_PAGE_FILTERS_DESCRIPTION_",props:["filters","v-model:applied-model","v-model:unapplied-model"]},{default:T(()=>[f("div",null,[r(n,{"can-save":!0,"filter-main":e.filterMain,filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=a=>e.appliedModel=a),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=a=>e.unappliedModel=a),"main-model":e.mainModel,"onUpdate:mainModel":l[2]||(l[2]=a=>e.mainModel=a)},null,8,["filter-main","filters","applied-model","unapplied-model","main-model"])])]),_:1},8,["code-html","code-js"])}const H=u(C,[["render",B]]);function V(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function G(){return{codeJs:`import {
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
};`}}const U={name:"PageFiltersModelId",components:{AFilters:c,AlohaExample:m},setup(){const{codeHtml:e}=V(),{codeJs:l}=G(),t=[{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_"},{type:"checkbox",id:"aloha1",label:"Aloha 1",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"}]},{type:"checkbox",id:"aloha2",label:"Aloha 2",alwaysVisible:!0,keyLabel:"label",keyId:"id",data:[{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"}]}],o=p({}),d=p({});return{appliedModel:o,codeHtml:e,codeJs:l,filters:t,unappliedModel:d}}};function X(e,l,t,o,d,s){const n=_("a-filters"),i=_("aloha-example");return A(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FILTERS_PAGE_MODEL_ID_HEADER_",description:"_A_FILTERS_PAGE_MODEL_ID_DESCRIPTION_",props:["filters"]},{default:T(()=>[f("div",null,[r(n,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":l[0]||(l[0]=a=>e.appliedModel=a),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":l[1]||(l[1]=a=>e.unappliedModel=a)},null,8,["filters","applied-model","unapplied-model"])])]),_:1},8,["code-html","code-js"])}const $=u(U,[["render",X]]);function v(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function k(){const e=R(()=>g({placeholder:"_A_FILTERS_COMPONENT_NAME_"}));return{pageTitle:R(()=>`AFilters${e.value?` (${e.value})`:""}`)}}function w(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function x(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const J={name:"PageFilters",components:{AlohaPage:L,AlohaTableProps:P,ATranslation:S,PageFiltersExample:H,PageFiltersDefaultHide:F,PageFiltersModelId:$},setup(){const{pageTitle:e}=k(),{dataProps:l}=w(),{dataSlots:t}=x(),{dataEvents:o}=v();return{dataEvents:o,dataProps:l,dataSlots:t,pageTitle:e}}};function q(e,l,t,o,d,s){const n=_("a-translation"),i=_("page-filters-example"),a=_("page-filters-default-hide"),I=_("page-filters-model-id"),b=_("aloha-page");return A(),E(b,{"page-title":e.pageTitle},{body:T(()=>[r(n,{tag:"p",html:"_A_FILTERS_COMPONENT_DESCRIPTION_"}),r(i),r(a),r(I)]),_:1},8,["page-title"])}const pe=u(J,[["render",q]]);export{pe as default};
