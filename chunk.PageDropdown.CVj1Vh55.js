import{A as l,a as G}from"./chunk.AlohaExample.Be_CUvL6.js";import{A as y}from"./chunk.AlohaTableProps.fmieQLhU.js";import{D as P,_ as d,r as B,g as L,ah as x,A as k}from"./bundle.index.Xj452vTf.js";import{W as p,V as D,aT as i,e as n,_ as o,r as u,d as N,Z as h}from"./chunk.vendor.7qYoMuVo.js";import"./chunk.vendor-lodash.3oIxB44l.js";import"./chunk.APageTabTitle.BRDcb9JC.js";import"./chunk.AlohaHighlightjs.CqftpDCI.js";import"./chunk.ATable.BuDO7huT.js";import"./chunk.translations-ar.DStCCijA.js";import"./chunk.translations-de.BVoiITyD.js";import"./chunk.translations-en.DLCxJau6.js";import"./chunk.translations-es.BYz5u4IQ.js";import"./chunk.translations-fr.B9Nr_iLj.js";import"./chunk.translations-hr.DhPJ8JEd.js";import"./chunk.translations-it.D6f5eU5y.js";import"./chunk.translations-ru.BWP_gszP.js";function H(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
></a-dropdown>`}}function $(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownBasic",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const M={name:"PageDropdownBasic",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=H(),{codeJs:e}=$();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function X(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_BASIC_USAGE_",props:"actions"},{default:i(()=>[o(t,{actions:_.dropdownActions},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const J=d(M,[["render",X]]);function V(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-class="a_btn a_btn_primary"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-class="a_btn a_btn_success"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-class="a_btn a_btn_info"
></a-dropdown>`}}function Y(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownButtonClass",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const v={name:"PageDropdownButtonClass",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=V(),{codeJs:e}=Y();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function q(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_",props:"button-text"},{default:i(()=>[o(t,{actions:_.dropdownActions,"button-class":"a_btn a_btn_primary"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-class":"a_btn a_btn_success"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-class":"a_btn a_btn_info"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const j=d(v,[["render",q]]);function F(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-icon-left="Gear"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-icon-right="Files"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-icon-left="Duplicate"
  button-icon-right="Gear"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :button-icon-right="{ desktop: 'Gear', mobile: 'Files' }"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>`}}function K(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownButtonIcons",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const Z={name:"PageDropdownButtonIcons",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=F(),{codeJs:e}=K();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function z(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_",props:["button-icon-left","button-icon-right"]},{default:i(()=>[o(t,{actions:_.dropdownActions,"button-icon-left":"Gear","button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-icon-right":"Files","button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-icon-left":"Duplicate","button-icon-right":"Gear","button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-icon-right":{desktop:"Gear",mobile:"Files"},"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Q=d(Z,[["render",z]]);function __(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
  button-loading-align="left"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
  button-loading-align="right"
></a-dropdown>`}}function o_(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownButtonLoading",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const t_={name:"PageDropdownButtonLoading",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=__(),{codeJs:e}=o_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function e_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_",props:["button-loading","button-loading-align"]},{default:i(()=>[o(t,{actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_","button-loading":!0},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_","button-loading":!0,"button-loading-align":"left"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_","button-loading":!0,"button-loading-align":"right"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const n_=d(t_,[["render",e_]]);function O_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_NUMBER_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :button-text="{ desktop: '_A_DROPDOWN_BUTTON_TEXT_DESKTOP_', mobile: '_A_DROPDOWN_BUTTON_TEXT_MOBILE_' }"
></a-dropdown>`}}function a_(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownButtonText",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const c_={name:"PageDropdownButtonText",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=O_(),{codeJs:e}=a_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function r_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_",props:"button-text"},{default:i(()=>[o(t,{actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_NUMBER_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":{desktop:"_A_DROPDOWN_BUTTON_TEXT_DESKTOP_",mobile:"_A_DROPDOWN_BUTTON_TEXT_MOBILE_"}},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const s_=d(c_,[["render",r_]]);function d_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  caret-icon="EjectFill"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  caret-icon="Gear"
></a-dropdown>`}}function p_(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownCaretIcon",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const D_={name:"PageDropdownCaretIcon",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=d_(),{codeJs:e}=p_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function i_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_CARET_ICON_HEADER_",description:"_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_",props:"caret-icon"},{default:i(()=>[o(t,{actions:_.dropdownActions,"caret-icon":"EjectFill"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"caret-icon":"Gear"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const l_=d(D_,[["render",i_]]);function P_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section', 'subsection']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_"
></a-dropdown>`}}function R_(){return{codeJs:`import {
  ADropdown,
} from "aloha-vue";

export default {
  name: "PageDropdownGroup",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_OVERVIEW_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_RECENT_ACTIVITY_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_CREATE_INVOICE_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_FINANCE_",
        subsection: "_A_DROPDOWN_GROUP_INVOICES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_EXPENSE_REPORT_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_FINANCE_",
        subsection: "_A_DROPDOWN_GROUP_REPORTS_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_EMAIL_CAMPAIGN_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_MARKETING_",
        subsection: "_A_DROPDOWN_GROUP_CAMPAIGNS_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_INBOX_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
        section: "_A_DROPDOWN_GROUP_EMAIL_",
        subsection: "_A_DROPDOWN_GROUP_MESSAGES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_MEETING_NOTES_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
        section: "_A_DROPDOWN_GROUP_MEETINGS_",
        subsection: "_A_DROPDOWN_GROUP_NOTES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_FRONTEND_BOARD_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_PROJECTS_",
        subsection: "_A_DROPDOWN_GROUP_FRONTEND_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_BACKEND_BOARD_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_PROJECTS_",
        subsection: "_A_DROPDOWN_GROUP_BACKEND_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_DEPLOYMENTS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_RELEASE_",
        subsection: "_A_DROPDOWN_GROUP_PRODUCTION_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_USERS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_ACCESS_",
        subsection: "_A_DROPDOWN_GROUP_TEAM_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_API_TOKENS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_ACCESS_",
        subsection: "_A_DROPDOWN_GROUP_SECURITY_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_APPEARANCE_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_WORKSPACE_",
        subsection: "_A_DROPDOWN_GROUP_THEME_",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const A_={name:"PageDropdownGroup",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=P_(),{codeJs:e}=R_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_OVERVIEW_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_RECENT_ACTIVITY_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_CREATE_INVOICE_",type:"button",group:"_A_DROPDOWN_GROUP_BUSINESS_",section:"_A_DROPDOWN_GROUP_FINANCE_",subsection:"_A_DROPDOWN_GROUP_INVOICES_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_EXPENSE_REPORT_",type:"button",group:"_A_DROPDOWN_GROUP_BUSINESS_",section:"_A_DROPDOWN_GROUP_FINANCE_",subsection:"_A_DROPDOWN_GROUP_REPORTS_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_EMAIL_CAMPAIGN_",type:"button",group:"_A_DROPDOWN_GROUP_BUSINESS_",section:"_A_DROPDOWN_GROUP_MARKETING_",subsection:"_A_DROPDOWN_GROUP_CAMPAIGNS_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_INBOX_",type:"button",group:"_A_DROPDOWN_GROUP_COMMUNICATION_",section:"_A_DROPDOWN_GROUP_EMAIL_",subsection:"_A_DROPDOWN_GROUP_MESSAGES_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_MEETING_NOTES_",type:"button",group:"_A_DROPDOWN_GROUP_COMMUNICATION_",section:"_A_DROPDOWN_GROUP_MEETINGS_",subsection:"_A_DROPDOWN_GROUP_NOTES_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_FRONTEND_BOARD_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_PROJECTS_",subsection:"_A_DROPDOWN_GROUP_FRONTEND_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_BACKEND_BOARD_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_PROJECTS_",subsection:"_A_DROPDOWN_GROUP_BACKEND_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_DEPLOYMENTS_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_RELEASE_",subsection:"_A_DROPDOWN_GROUP_PRODUCTION_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_USERS_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_ACCESS_",subsection:"_A_DROPDOWN_GROUP_TEAM_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_API_TOKENS_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_ACCESS_",subsection:"_A_DROPDOWN_GROUP_SECURITY_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_APPEARANCE_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_WORKSPACE_",subsection:"_A_DROPDOWN_GROUP_THEME_",callback:()=>{}}]}}};function N_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_GROUPS_HEADER_",description:"_A_DROPDOWN_GROUP_GROUPS_DESCRIPTION_",props:"actions, key-group"},{default:i(()=>[o(t,{actions:_.dropdownActions,"key-group":["group","section","subsection"],"button-text":"_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const u_=d(A_,[["render",N_]]);function T_(){return{codeHtml:`<a-one-checkbox
  v-model="isDevelopmentVisible"
  :is-width-auto="true"
  label="_A_DROPDOWN_BUTTON_TEXT_TOGGLE_DEVELOPMENT_"
></a-one-checkbox>

<a-one-checkbox
  v-model="isSettingsVisible"
  :is-width-auto="true"
  label="_A_DROPDOWN_BUTTON_TEXT_TOGGLE_SETTINGS_"
></a-one-checkbox>

<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_HIDE_EMPTY_GROUPS_"
></a-dropdown>`}}function E_(){return{codeJs:`import {
  computed,
  ref,
} from "vue";

import {
  ADropdown,
} from "aloha-vue";
import AOneCheckbox from "../../../../../../src/ui/AOneCheckbox/AOneCheckbox";

export default {
  name: "PageDropdownGroupHideEmpty",
  components: {
    ADropdown,
    AOneCheckbox,
  },
  setup() {
    const isDevelopmentVisible = ref(true);
    const isSettingsVisible = ref(true);

    const dropdownActions = computed(() => {
      return [
        {
          text: "_A_DROPDOWN_ACTION_INVOICES_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_BUSINESS_",
          section: "_A_DROPDOWN_GROUP_FINANCE_",
          callback: () => {},
        },
        {
          text: "_A_DROPDOWN_ACTION_MESSAGES_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
          section: "_A_DROPDOWN_GROUP_INBOX_",
          callback: () => {},
        },
        {
          text: "_A_DROPDOWN_ACTION_FRONTEND_BOARD_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
          section: "_A_DROPDOWN_GROUP_PROJECTS_",
          callback: () => {},
          isHidden: !isDevelopmentVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_DEPLOYMENTS_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
          section: "_A_DROPDOWN_GROUP_RELEASE_",
          callback: () => {},
          isHidden: !isDevelopmentVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_USERS_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_SETTINGS_",
          section: "_A_DROPDOWN_GROUP_ACCESS_",
          callback: () => {},
          isHidden: !isSettingsVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_SECURITY_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_SETTINGS_",
          section: "_A_DROPDOWN_GROUP_WORKSPACE_",
          callback: () => {},
          isHidden: !isSettingsVisible.value,
        },
      ];
    });

    return {
      dropdownActions,
      isDevelopmentVisible,
      isSettingsVisible,
    };
  },
};`}}const I_={name:"PageDropdownGroupHideEmpty",components:{ADropdown:P,AOneCheckbox:B,AlohaExample:l},setup(){const{codeHtml:_}=T_(),{codeJs:e}=E_(),O=u(!0),c=u(!0),r=N(()=>[{text:"_A_DROPDOWN_ACTION_INVOICES_",type:"button",group:"_A_DROPDOWN_GROUP_BUSINESS_",section:"_A_DROPDOWN_GROUP_FINANCE_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_MESSAGES_",type:"button",group:"_A_DROPDOWN_GROUP_COMMUNICATION_",section:"_A_DROPDOWN_GROUP_INBOX_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_FRONTEND_BOARD_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_PROJECTS_",callback:()=>{},isHidden:!O.value},{text:"_A_DROPDOWN_ACTION_DEPLOYMENTS_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_RELEASE_",callback:()=>{},isHidden:!O.value},{text:"_A_DROPDOWN_ACTION_USERS_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_ACCESS_",callback:()=>{},isHidden:!c.value},{text:"_A_DROPDOWN_ACTION_SECURITY_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_WORKSPACE_",callback:()=>{},isHidden:!c.value}]);return{codeHtml:_,codeJs:e,dropdownActions:r,isDevelopmentVisible:O,isSettingsVisible:c}}},b_={class:"a_flex a_align_items_center a_gap_2 a_mb_3 a_flex_wrap"};function m_(_,e,O,c,r,s){const t=n("a-one-checkbox"),a=n("a-dropdown"),A=n("aloha-example");return p(),D(A,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_HEADER_",description:"_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_DESCRIPTION_",props:"actions, key-group"},{default:i(()=>[h("div",b_,[o(t,{modelValue:_.isDevelopmentVisible,"onUpdate:modelValue":e[0]||(e[0]=R=>_.isDevelopmentVisible=R),"is-width-auto":!0,label:"_A_DROPDOWN_BUTTON_TEXT_TOGGLE_DEVELOPMENT_"},null,8,["modelValue"]),o(t,{modelValue:_.isSettingsVisible,"onUpdate:modelValue":e[1]||(e[1]=R=>_.isSettingsVisible=R),"is-width-auto":!0,label:"_A_DROPDOWN_BUTTON_TEXT_TOGGLE_SETTINGS_"},null,8,["modelValue"])]),o(a,{actions:_.dropdownActions,"key-group":["group","section"],"button-text":"_A_DROPDOWN_BUTTON_TEXT_HIDE_EMPTY_GROUPS_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const S_=d(I_,[["render",m_]]);function W_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :key-group-label-callback="groupLabelCallback"
  button-text="_A_DROPDOWN_BUTTON_TEXT_ASC_GROUPS_"
  key-group="priority"
  sort-order-group="asc"
></a-dropdown>

<a-dropdown
  :actions="dropdownActions"
  :key-group-label-callback="groupLabelCallback"
  button-text="_A_DROPDOWN_BUTTON_TEXT_DESC_GROUPS_"
  class="a_ml_4"
  key-group="priority"
  sort-order-group="desc"
></a-dropdown>`}}function C_(){return{codeJs:`import {
  ADropdown,
} from "aloha-vue";

export default {
  name: "PageDropdownGroupSort",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_DEPLOY_NOW_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_RESTART_WORKER_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_ARCHIVE_REPORT_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_LOW_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_SYNC_CONTACTS_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_NORMAL_",
        callback: () => {},
      },
    ];

    const groupLabelCallback = ({ group }) => {
      const labels = {
        _A_DROPDOWN_GROUP_PRIORITY_CRITICAL_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_CRITICAL_",
        _A_DROPDOWN_GROUP_PRIORITY_LOW_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_LOW_",
        _A_DROPDOWN_GROUP_PRIORITY_MEDIUM_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_MEDIUM_",
        _A_DROPDOWN_GROUP_PRIORITY_NORMAL_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_NORMAL_",
      };

      return labels[group] || group;
    };

    return {
      dropdownActions,
      groupLabelCallback,
    };
  },
};`}}const w_={name:"PageDropdownGroupSort",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=W_(),{codeJs:e}=C_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_DEPLOY_NOW_",type:"button",priority:"_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_RESTART_WORKER_",type:"button",priority:"_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_ARCHIVE_REPORT_",type:"button",priority:"_A_DROPDOWN_GROUP_PRIORITY_LOW_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_SYNC_CONTACTS_",type:"button",priority:"_A_DROPDOWN_GROUP_PRIORITY_NORMAL_",callback:()=>{}}],groupLabelCallback:({group:r})=>({_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_:"_A_DROPDOWN_GROUP_LABEL_PRIORITY_CRITICAL_",_A_DROPDOWN_GROUP_PRIORITY_LOW_:"_A_DROPDOWN_GROUP_LABEL_PRIORITY_LOW_",_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_:"_A_DROPDOWN_GROUP_LABEL_PRIORITY_MEDIUM_",_A_DROPDOWN_GROUP_PRIORITY_NORMAL_:"_A_DROPDOWN_GROUP_LABEL_PRIORITY_NORMAL_"})[r]||r}}};function U_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_GROUPS_SORT_HEADER_",description:"_A_DROPDOWN_GROUP_GROUPS_SORT_DESCRIPTION_",props:"key-group, key-group-label-callback, sort-order-group"},{default:i(()=>[o(t,{actions:_.dropdownActions,"key-group-label-callback":_.groupLabelCallback,"button-text":"_A_DROPDOWN_BUTTON_TEXT_ASC_GROUPS_","key-group":"priority","sort-order-group":"asc"},null,8,["actions","key-group-label-callback"]),o(t,{class:"a_ml_4",actions:_.dropdownActions,"key-group-label-callback":_.groupLabelCallback,"button-text":"_A_DROPDOWN_BUTTON_TEXT_DESC_GROUPS_","key-group":"priority","sort-order-group":"desc"},null,8,["actions","key-group-label-callback"])]),_:1},8,["code-html","code-js"])}const g_=d(w_,[["render",U_]]);function f_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>`}}function G_(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownHasCaret",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const y_={name:"PageDropdownHasCaret",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=f_(),{codeJs:e}=G_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function B_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_HAS_CARET_HEADER_",description:"_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_",props:"has-caret"},{default:i(()=>[o(t,{actions:_.dropdownActions,"has-caret":!0,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"has-caret":!1,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const L_=d(y_,[["render",B_]]);function x_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_"
></a-dropdown>`}}function k_(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownInBody",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const h_={name:"PageDropdownInBody",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=x_(),{codeJs:e}=k_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function H_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_IN_BODY_HEADER_",description:"_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_",props:"in-body"},{default:i(()=>[o(t,{actions:_.dropdownActions,"in-body":!0,"button-text":"_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"in-body":!1,"button-text":"_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const $_=d(h_,[["render",H_]]);function M_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :readonly="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :readonly="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_"
></a-dropdown>`}}function X_(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownHasCaret",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const J_={name:"PageDropdownReadonly",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=M_(),{codeJs:e}=X_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function V_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_READONLY_HEADER_",description:"_A_DROPDOWN_GROUP_READONLY_DESCRIPTION_",props:"has-caret"},{default:i(()=>[o(t,{actions:_.dropdownActions,readonly:!0,"button-text":"_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,readonly:!1,"button-text":"_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Y_=d(J_,[["render",V_]]);function v_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_"
  :triggers="['click']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_"
  :triggers="['focus']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_HOVER_"
  :triggers="['hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_"
  :triggers="['click', 'focus']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_HOVER_"
  :triggers="['click', 'hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_HOVER_"
  :triggers="['focus', 'hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_HOVER_"
  :triggers="['click', 'focus', 'hover']"
></a-dropdown>`}}function q_(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownTriggers",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const j_={name:"PageDropdownTriggers",components:{ADropdown:P,AlohaExample:l},setup(){const{codeHtml:_}=v_(),{codeJs:e}=q_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function F_(_,e,O,c,r,s){const t=n("a-dropdown"),a=n("aloha-example");return p(),D(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_TRIGGERS_HEADER_",description:"_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_",props:"triggers"},{default:i(()=>[o(t,{actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_",triggers:["click"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_",triggers:["focus"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_HOVER_",triggers:["hover"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_",triggers:["click","focus"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_HOVER_",triggers:["click","hover"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_HOVER_",triggers:["focus","hover"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_HOVER_",triggers:["click","focus","hover"]},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const K_=d(j_,[["render",F_]]);function Z_(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function z_(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function Q_(){const _=N(()=>L({placeholder:"_A_DROPDOWN_COMPONENT_NAME_"}));return{pageTitle:N(()=>`ADropdown${_.value?` (${_.value})`:""}`)}}function _o(){return{dataProps:[{name:"actions",description:"_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-class",description:"_A_DROPDOWN_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_secondary",required:!1},{name:"button-icon-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-icon-class",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-icon-left",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-right",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-tag",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_TAG_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-is-title-html",description:"_A_DROPDOWN_PROPS_BUTTON_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-loading",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-loading-align",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_ALIGN_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"button-loading-class",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_CLASS_DESCRIPTION_",type:"String / Object",default:"a_spinner_small",required:!1},{name:"button-prevent",description:"_A_DROPDOWN_PROPS_BUTTON_PREVENT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-stop",description:"_A_DROPDOWN_PROPS_BUTTON_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-tag",description:"_A_DROPDOWN_PROPS_BUTTON_TAG_DESCRIPTION_",type:"String",default:"button",required:!1},{name:"button-text",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-text-aria-hidden",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_ARIA_HIDDEN_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-text-class",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-text-screen-reader",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title-placement",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"caret-icon",description:"_A_DROPDOWN_PROPS_CARET_ICON_DESCRIPTION_",type:"String",default:"ChevronDown",required:!1},{name:"class",description:"_A_DROPDOWN_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"disabled",description:"_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-attributes",description:"_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"dropdown-class",description:"_A_DROPDOWN_PROPS_DROPDOWN_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"dropdown-render-default",description:"_A_DROPDOWN_PROPS_DROPDOWN_RENDER_DEFAULT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-tag",description:"_A_DROPDOWN_PROPS_DROPDOWN_TAG_DESCRIPTION_",type:"String",default:"ul",required:!1},{name:"elements-for-arrows",description:"_A_DROPDOWN_PROPS_ELEMENTS_FOR_ARROWS_DESCRIPTION_",type:"String",default:x,required:!1},{name:"extra",description:"_A_DROPDOWN_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"key-group",description:"_A_DROPDOWN_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_DROPDOWN_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"floating-flip",description:"_A_DROPDOWN_PROPS_FLOATING_FLIP_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"floating-shift",description:"_A_DROPDOWN_PROPS_FLOATING_SHIFT_DESCRIPTION_",type:"Object",default:"() => ({ use: true, crossAxis: true, padding: 20 })",required:!1},{name:"has-caret",description:"_A_DROPDOWN_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"id",description:"_A_DROPDOWN_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_dropdown_btn_")',required:!1},{name:"in-body",description:"_A_DROPDOWN_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-close-by-click-inside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_INSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click-outside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_OUTSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide-without-action-and-slot",description:"_A_DROPDOWN_PROPS_IS_HIDE_WITHOUT_ACTION_AND_SLOT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-list-width-same-with-button",description:"_A_DROPDOWN_PROPS_IS_LIST_WIDTH_SAME_WITH_BUTTON_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"lock-arrows-navigation",description:"_A_DROPDOWN_PROPS_LOCK_ARROWS_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"lock-tab-navigation",description:"_A_DROPDOWN_PROPS_LOCK_TAB_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"persist",description:"_A_DROPDOWN_PROPS_PERSIST_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"placement",description:"_A_DROPDOWN_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-start",required:!1},{name:"popper-container-id",description:"_A_DROPDOWN_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_tooltip_container",required:!1},{name:"readonly",description:"_A_DROPDOWN_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:"false",required:!1},{name:"sort-order-group",description:"_A_DROPDOWN_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"triggers",description:"_A_DROPDOWN_PROPS_TRIGGERS_DESCRIPTION_",type:"Array",default:'() => ["click"]',required:!1},{name:"use-escape",description:"_A_DROPDOWN_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1}]}}function oo(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const to={name:"PageDropdown",components:{AlohaPage:G,AlohaTableProps:y,ATranslation:k,PageDropdownBasic:J,PageDropdownButtonClass:j,PageDropdownButtonIcons:Q,PageDropdownButtonLoading:n_,PageDropdownButtonText:s_,PageDropdownCaretIcon:l_,PageDropdownGroup:u_,PageDropdownGroupHideEmpty:S_,PageDropdownGroupSort:g_,PageDropdownHasCaret:L_,PageDropdownInBody:$_,PageDropdownReadonly:Y_,PageDropdownTriggers:K_},setup(){const{pageTitle:_}=Q_(),{dataProps:e}=_o(),{dataSlots:O}=oo(),{dataEvents:c}=Z_(),{dataExposes:r}=z_();return{dataEvents:c,dataExposes:r,dataProps:e,dataSlots:O,pageTitle:_,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{},isHidden:!0},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{},disabled:!0},{type:"divider"},{type:"divider"},{text:"_A_DROPDOWN_ACTION_2_",type:"button",callback:()=>{}},{type:"link",text:"_A_DROPDOWN_ACTION_LINK_1_",href:"#"},{type:"divider"}]}}};function eo(_,e,O,c,r,s){const t=n("a-translation"),a=n("page-dropdown-basic"),A=n("page-dropdown-button-text"),R=n("page-dropdown-button-class"),T=n("page-dropdown-button-icons"),E=n("page-dropdown-button-loading"),I=n("page-dropdown-group"),b=n("page-dropdown-group-hide-empty"),m=n("page-dropdown-group-sort"),S=n("page-dropdown-in-body"),W=n("page-dropdown-triggers"),C=n("page-dropdown-caret-icon"),w=n("page-dropdown-has-caret"),U=n("page-dropdown-readonly"),g=n("aloha-table-props"),f=n("aloha-page");return p(),D(f,{"page-title":_.pageTitle},{body:i(()=>[o(t,{tag:"p",html:"_A_DROPDOWN_COMPONENT_DESCRIPTION_"}),o(a),o(A),o(R),o(T),o(E),o(I),o(b),o(m),o(S),o(W),o(C),o(w),o(U),o(g,{data:_.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const Eo=d(to,[["render",eo]]);export{Eo as default};
