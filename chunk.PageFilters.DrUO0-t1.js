import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{E as c,Z as l,kt as u,t as d}from"./bundle.index.BmSiyQNH.js";import{n as f,t as p}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as m}from"./chunk.AlohaTableProps.Dksi7fmb.js";function h(){return{codeHtml:`<a-filters
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
};`}}var _={name:`PageFiltersDefaultHide`,components:{AFilters:c,AlohaExample:p},setup(){let{codeHtml:e}=h(),{codeJs:t}=g();return{appliedModel:r({}),codeHtml:e,codeJs:t,filters:[{type:`select`,id:`select1`,label:`Select 1`,alwaysVisible:!0,keyLabel:`label`,keyId:`id`,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`}]},{type:`multiselect`,id:`select_one_per_group`,label:`Select one per group`,alwaysVisible:!0,keyLabel:`label`,keyId:`id`,keyGroup:`group`,mode:`one_per_group`,translateData:!0,data:[{label:`_TXT_POSITIVE_`,id:`koeln_true`,group:`Köln`},{label:`_TXT_NEGATIVE_`,id:`koeln_false`,group:`Köln`},{label:`_TXT_NEUTRAL_`,id:`koeln_null`,group:`Köln`},{label:`_TXT_POSITIVE_`,id:`bonn_true`,group:`Bonn`},{label:`_TXT_NEGATIVE_`,id:`bonn_false`,group:`Bonn`},{label:`_TXT_NEUTRAL_`,id:`bonn_null`,group:`Bonn`},{label:`_TXT_POSITIVE_`,id:`duesseldorf_true`,group:`Düsseldorf`},{label:`_TXT_NEGATIVE_`,id:`duesseldorf_false`,group:`Düsseldorf`},{label:`_TXT_NEUTRAL_`,id:`duesseldorf_null`,group:`Düsseldorf`}]},{type:`text`,id:`search`,label:`_A_TABLE_FILTER_SEARCH_`,alwaysVisible:!0},{type:`text`,id:`aloha`,label:`_A_TABLE_FILTER_TEXT_`},{type:`dateRange`,id:`dateRange`,label:`_A_TABLE_FILTER_INPUT_DATE_RANGE_`},{type:`numberRange`,id:`numberRange`,label:`_A_TABLE_FILTER_INPUT_NUMBER_RANGE_`},{type:`date`,id:`date`,label:`_A_TABLE_FILTER_DATE_`},{type:`text`,id:`aloha1`,label:`_A_TABLE_FILTER_EXTRA_`},{type:`integerRange`,id:`integerNumber`,label:`Integer range`}],unappliedModel:r({})}}};function v(e,r,c,l,u,d){let f=n(`a-filters`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FILTERS_PAGE_DEFAULT_HIDE_HEADER_`,description:`_A_FILTERS_PAGE_FILTERS_DEFAULT_HIDE_DESCRIPTION_`,props:[`filters`]},{default:a(()=>[o(`div`,null,[i(f,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":r[0]||=t=>e.appliedModel=t,"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":r[1]||=t=>e.unappliedModel=t},null,8,[`filters`,`applied-model`,`unapplied-model`])])]),_:1},8,[`code-html`,`code-js`])}var y=d(_,[[`render`,v]]);function b(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function x(){return{codeJs:`import {
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
};`}}var S={name:`PageFiltersExample`,components:{AFilters:c,AlohaExample:p},setup(){let{codeHtml:e}=b(),{codeJs:t}=x();return{appliedModel:r({}),codeHtml:e,codeJs:t,filterMain:{type:`text`,id:`search`,label:`_A_PAGE_FILTER_SEARCH_`,labelScreenReader:`_A_PAGE_FILTER_SEARCH_SCREEN_READER_`},filters:[{type:`text`,id:`aloha`,label:`_A_PAGE_FILTER_TEXT_`,alwaysVisible:!0},{type:`date`,id:`date`,label:`_A_PAGE_FILTER_DATE_`,alwaysVisible:!0},{type:`integer`,id:`integer`,label:`_A_PAGE_FILTER_INTEGER_`,alwaysVisible:!0},{type:`dateRange`,id:`dateRange`,label:`_A_TABLE_FILTER_INPUT_DATE_RANGE_`,alwaysVisible:!0},{type:`numberRange`,id:`numberRange`,label:`_A_TABLE_FILTER_INPUT_NUMBER_RANGE_`,alwaysVisible:!0}],mainModel:r({}),unappliedModel:r({})}}};function C(e,r,c,l,u,d){let f=n(`a-filters`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_FILTERS_HEADER_`,description:`_A_PAGE_FILTERS_DESCRIPTION_`,props:[`filters`,`v-model:applied-model`,`v-model:unapplied-model`]},{default:a(()=>[o(`div`,null,[i(f,{"can-save":!0,"filter-main":e.filterMain,filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":r[0]||=t=>e.appliedModel=t,"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":r[1]||=t=>e.unappliedModel=t,"main-model":e.mainModel,"onUpdate:mainModel":r[2]||=t=>e.mainModel=t},null,8,[`filter-main`,`filters`,`applied-model`,`unapplied-model`,`main-model`])])]),_:1},8,[`code-html`,`code-js`])}var w=d(S,[[`render`,C]]);function T(){return{codeHtml:`<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`}}function E(){return{codeJs:`import {
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
};`}}var D={name:`PageFiltersModelId`,components:{AFilters:c,AlohaExample:p},setup(){let{codeHtml:e}=T(),{codeJs:t}=E();return{appliedModel:r({}),codeHtml:e,codeJs:t,filters:[{type:`text`,id:`search`,label:`_A_TABLE_FILTER_SEARCH_`},{type:`checkbox`,id:`aloha1`,label:`Aloha 1`,alwaysVisible:!0,keyLabel:`label`,keyId:`id`,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`}]},{type:`checkbox`,id:`aloha2`,label:`Aloha 2`,alwaysVisible:!0,keyLabel:`label`,keyId:`id`,data:[{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`}]}],unappliedModel:r({})}}};function O(e,r,c,l,u,d){let f=n(`a-filters`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FILTERS_PAGE_MODEL_ID_HEADER_`,description:`_A_FILTERS_PAGE_MODEL_ID_DESCRIPTION_`,props:[`filters`]},{default:a(()=>[o(`div`,null,[i(f,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":r[0]||=t=>e.appliedModel=t,"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":r[1]||=t=>e.unappliedModel=t},null,8,[`filters`,`applied-model`,`unapplied-model`])])]),_:1},8,[`code-html`,`code-js`])}var k=d(D,[[`render`,O]]);function A(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function j(){let t=e(()=>u({placeholder:`_A_FILTERS_COMPONENT_NAME_`}));return{pageTitle:e(()=>`AFilters${t.value?` (${t.value})`:``}`)}}function M(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function N(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var P={name:`PageFilters`,components:{AlohaPage:f,AlohaTableProps:m,ATranslation:l,PageFiltersExample:w,PageFiltersDefaultHide:y,PageFiltersModelId:k},setup(){let{pageTitle:e}=j(),{dataProps:t}=M(),{dataSlots:n}=N(),{dataEvents:r}=A();return{dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function F(e,r,o,c,l,u){let d=n(`a-translation`),f=n(`page-filters-example`),p=n(`page-filters-default-hide`),m=n(`page-filters-model-id`),h=n(`aloha-page`);return s(),t(h,{"page-title":e.pageTitle},{body:a(()=>[i(d,{tag:`p`,html:`_A_FILTERS_COMPONENT_DESCRIPTION_`}),i(f),i(p),i(m)]),_:1},8,[`page-title`])}var I=d(P,[[`render`,F]]);export{I as default};