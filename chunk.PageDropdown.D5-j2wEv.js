import{A as D,a as L}from"./chunk.AlohaExample.Dax-hk7g.js";import{A as x}from"./chunk.AlohaTableProps.BfoIV9kS.js";import{v as P,_ as d,A as E,l as h,g as k,f as H}from"./bundle.index.BAhS3rcV.js";import{Y as p,W as i,aU as l,f as n,$ as o,_ as R,r as T,d as N}from"./chunk.vendor.BAXy2grE.js";import"./chunk.vendor-lodash.CCzoES9g.js";import"./chunk.APageTabTitle.BeAiQ7Rl.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.ATable.DZDFCSuq.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function $(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
></a-dropdown>`}}function M(){return{codeJs:`import { 
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
};`}}const X={name:"PageDropdownBasic",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=$(),{codeJs:e}=M();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function v(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_BASIC_USAGE_",props:"actions"},{default:l(()=>[o(t,{actions:_.dropdownActions},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const J=d(X,[["render",v]]);function V(){return{codeHtml:`<a-dropdown
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
};`}}const q={name:"PageDropdownButtonClass",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=V(),{codeJs:e}=Y();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function j(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_",props:"button-text"},{default:l(()=>[o(t,{actions:_.dropdownActions,"button-class":"a_btn a_btn_primary"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-class":"a_btn a_btn_success"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-class":"a_btn a_btn_info"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const F=d(q,[["render",j]]);function K(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function z(){return{codeJs:`import { 
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
};`}}const Q={name:"PageDropdownButtonIcons",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=K(),{codeJs:e}=z();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function Z(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_",props:["button-icon-left","button-icon-right"]},{default:l(()=>[o(t,{actions:_.dropdownActions,"button-icon-left":"Gear","button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-icon-right":"Files","button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-icon-left":"Duplicate","button-icon-right":"Gear","button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-icon-right":{desktop:"Gear",mobile:"Files"},"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const __=d(Q,[["render",Z]]);function o_(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function t_(){return{codeJs:`import { 
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
};`}}const e_={name:"PageDropdownButtonLoading",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=o_(),{codeJs:e}=t_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function n_(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_",props:["button-loading","button-loading-align"]},{default:l(()=>[o(t,{actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_","button-loading":!0},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_","button-loading":!0,"button-loading-align":"left"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_","button-loading":!0,"button-loading-align":"right"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const O_=d(e_,[["render",n_]]);function a_(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function c_(){return{codeJs:`import { 
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
};`}}const s_={name:"PageDropdownButtonText",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=a_(),{codeJs:e}=c_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function r_(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_",props:"button-text"},{default:l(()=>[o(t,{actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_NUMBER_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":{desktop:"_A_DROPDOWN_BUTTON_TEXT_DESKTOP_",mobile:"_A_DROPDOWN_BUTTON_TEXT_MOBILE_"}},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const d_=d(s_,[["render",r_]]);function p_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  caret-icon="EjectFill"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  caret-icon="Gear"
></a-dropdown>`}}function i_(){return{codeJs:`import { 
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
};`}}const l_={name:"PageDropdownCaretIcon",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=p_(),{codeJs:e}=i_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function D_(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_CARET_ICON_HEADER_",description:"_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_",props:"caret-icon"},{default:l(()=>[o(t,{actions:_.dropdownActions,"caret-icon":"EjectFill"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"caret-icon":"Gear"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const P_=d(l_,[["render",D_]]);function R_(){return{codeHtml:`<div
  style="max-height: 14rem; overflow: auto; padding: 1rem;"
>
  <div style="height: 26rem;">
    <p>
      <a-translation
        tag="span"
        text="_A_DROPDOWN_SCROLL_HELP_"
      ></a-translation>
    </p>

    <div style="margin-top: 6rem;">
      <a-dropdown
        :actions="dropdownActions"
        :is-close-by-button-invisible-in-viewport="true"
        button-text="_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_TRUE_"
      ></a-dropdown>
    </div>

    <div style="margin-top: 6rem;">
      <a-dropdown
        :actions="dropdownActions"
        :is-close-by-button-invisible-in-viewport="false"
        button-text="_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_FALSE_"
      ></a-dropdown>
    </div>
  </div>
</div>`}}function A_(){return{codeJs:`import {
  ADropdown,
  ATranslation,
} from "aloha-vue";

export default {
  name: "PageDropdownCloseByButtonInvisibleInViewport",
  components: {
    ADropdown,
    ATranslation,
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
      {
        text: "_A_DROPDOWN_ACTION_2_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const u_={name:"PageDropdownCloseByButtonInvisibleInViewport",components:{ADropdown:P,AlohaExample:D,ATranslation:E},setup(){const{codeHtml:_}=R_(),{codeJs:e}=A_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_2_",type:"button",callback:()=>{}}]}}},N_={style:{"max-height":"14rem",overflow:"auto",padding:"1rem"}},T_={style:{height:"26rem"}},E_={style:{"margin-top":"6rem"}},I_={style:{"margin-top":"6rem"}};function b_(_,e,O,c,s,r){const t=n("a-translation"),a=n("a-dropdown"),A=n("aloha-example");return p(),i(A,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_HEADER_",description:"_A_DROPDOWN_GROUP_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_",props:"is-close-by-button-invisible-in-viewport"},{default:l(()=>[R("div",N_,[R("div",T_,[R("p",null,[o(t,{tag:"span",text:"_A_DROPDOWN_SCROLL_HELP_"})]),R("div",E_,[o(a,{actions:_.dropdownActions,"is-close-by-button-invisible-in-viewport":!0,"button-text":"_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_TRUE_"},null,8,["actions"])]),R("div",I_,[o(a,{actions:_.dropdownActions,"is-close-by-button-invisible-in-viewport":!1,"button-text":"_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_FALSE_"},null,8,["actions"])])])])]),_:1},8,["code-html","code-js"])}const m_=d(u_,[["render",b_]]);function S_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section', 'subsection']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_"
></a-dropdown>`}}function W_(){return{codeJs:`import {
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
};`}}const C_={name:"PageDropdownGroup",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=S_(),{codeJs:e}=W_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_OVERVIEW_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_RECENT_ACTIVITY_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_CREATE_INVOICE_",type:"button",group:"_A_DROPDOWN_GROUP_BUSINESS_",section:"_A_DROPDOWN_GROUP_FINANCE_",subsection:"_A_DROPDOWN_GROUP_INVOICES_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_EXPENSE_REPORT_",type:"button",group:"_A_DROPDOWN_GROUP_BUSINESS_",section:"_A_DROPDOWN_GROUP_FINANCE_",subsection:"_A_DROPDOWN_GROUP_REPORTS_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_EMAIL_CAMPAIGN_",type:"button",group:"_A_DROPDOWN_GROUP_BUSINESS_",section:"_A_DROPDOWN_GROUP_MARKETING_",subsection:"_A_DROPDOWN_GROUP_CAMPAIGNS_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_INBOX_",type:"button",group:"_A_DROPDOWN_GROUP_COMMUNICATION_",section:"_A_DROPDOWN_GROUP_EMAIL_",subsection:"_A_DROPDOWN_GROUP_MESSAGES_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_MEETING_NOTES_",type:"button",group:"_A_DROPDOWN_GROUP_COMMUNICATION_",section:"_A_DROPDOWN_GROUP_MEETINGS_",subsection:"_A_DROPDOWN_GROUP_NOTES_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_FRONTEND_BOARD_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_PROJECTS_",subsection:"_A_DROPDOWN_GROUP_FRONTEND_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_BACKEND_BOARD_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_PROJECTS_",subsection:"_A_DROPDOWN_GROUP_BACKEND_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_DEPLOYMENTS_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_RELEASE_",subsection:"_A_DROPDOWN_GROUP_PRODUCTION_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_USERS_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_ACCESS_",subsection:"_A_DROPDOWN_GROUP_TEAM_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_API_TOKENS_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_ACCESS_",subsection:"_A_DROPDOWN_GROUP_SECURITY_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_APPEARANCE_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_WORKSPACE_",subsection:"_A_DROPDOWN_GROUP_THEME_",callback:()=>{}}]}}};function w_(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_GROUPS_HEADER_",description:"_A_DROPDOWN_GROUP_GROUPS_DESCRIPTION_",props:"actions, key-group"},{default:l(()=>[o(t,{actions:_.dropdownActions,"key-group":["group","section","subsection"],"button-text":"_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const U_=d(C_,[["render",w_]]);function g_(){return{codeHtml:`<a-one-checkbox
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
></a-dropdown>`}}function f_(){return{codeJs:`import {
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
};`}}const G_={name:"PageDropdownGroupHideEmpty",components:{ADropdown:P,AOneCheckbox:h,AlohaExample:D},setup(){const{codeHtml:_}=g_(),{codeJs:e}=f_(),O=T(!0),c=T(!0),s=N(()=>[{text:"_A_DROPDOWN_ACTION_INVOICES_",type:"button",group:"_A_DROPDOWN_GROUP_BUSINESS_",section:"_A_DROPDOWN_GROUP_FINANCE_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_MESSAGES_",type:"button",group:"_A_DROPDOWN_GROUP_COMMUNICATION_",section:"_A_DROPDOWN_GROUP_INBOX_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_FRONTEND_BOARD_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_PROJECTS_",callback:()=>{},isHidden:!O.value},{text:"_A_DROPDOWN_ACTION_DEPLOYMENTS_",type:"button",group:"_A_DROPDOWN_GROUP_DEVELOPMENT_",section:"_A_DROPDOWN_GROUP_RELEASE_",callback:()=>{},isHidden:!O.value},{text:"_A_DROPDOWN_ACTION_USERS_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_ACCESS_",callback:()=>{},isHidden:!c.value},{text:"_A_DROPDOWN_ACTION_SECURITY_",type:"button",group:"_A_DROPDOWN_GROUP_SETTINGS_",section:"_A_DROPDOWN_GROUP_WORKSPACE_",callback:()=>{},isHidden:!c.value}]);return{codeHtml:_,codeJs:e,dropdownActions:s,isDevelopmentVisible:O,isSettingsVisible:c}}},y_={class:"a_flex a_align_items_center a_gap_2 a_mb_3 a_flex_wrap"};function B_(_,e,O,c,s,r){const t=n("a-one-checkbox"),a=n("a-dropdown"),A=n("aloha-example");return p(),i(A,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_HEADER_",description:"_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_DESCRIPTION_",props:"actions, key-group"},{default:l(()=>[R("div",y_,[o(t,{modelValue:_.isDevelopmentVisible,"onUpdate:modelValue":e[0]||(e[0]=u=>_.isDevelopmentVisible=u),"is-width-auto":!0,label:"_A_DROPDOWN_BUTTON_TEXT_TOGGLE_DEVELOPMENT_"},null,8,["modelValue"]),o(t,{modelValue:_.isSettingsVisible,"onUpdate:modelValue":e[1]||(e[1]=u=>_.isSettingsVisible=u),"is-width-auto":!0,label:"_A_DROPDOWN_BUTTON_TEXT_TOGGLE_SETTINGS_"},null,8,["modelValue"])]),o(a,{actions:_.dropdownActions,"key-group":["group","section"],"button-text":"_A_DROPDOWN_BUTTON_TEXT_HIDE_EMPTY_GROUPS_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const L_=d(G_,[["render",B_]]);function x_(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function h_(){return{codeJs:`import {
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
};`}}const k_={name:"PageDropdownGroupSort",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=x_(),{codeJs:e}=h_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_DEPLOY_NOW_",type:"button",priority:"_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_RESTART_WORKER_",type:"button",priority:"_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_ARCHIVE_REPORT_",type:"button",priority:"_A_DROPDOWN_GROUP_PRIORITY_LOW_",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_SYNC_CONTACTS_",type:"button",priority:"_A_DROPDOWN_GROUP_PRIORITY_NORMAL_",callback:()=>{}}],groupLabelCallback:({group:s})=>({_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_:"_A_DROPDOWN_GROUP_LABEL_PRIORITY_CRITICAL_",_A_DROPDOWN_GROUP_PRIORITY_LOW_:"_A_DROPDOWN_GROUP_LABEL_PRIORITY_LOW_",_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_:"_A_DROPDOWN_GROUP_LABEL_PRIORITY_MEDIUM_",_A_DROPDOWN_GROUP_PRIORITY_NORMAL_:"_A_DROPDOWN_GROUP_LABEL_PRIORITY_NORMAL_"})[s]||s}}};function H_(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_GROUPS_SORT_HEADER_",description:"_A_DROPDOWN_GROUP_GROUPS_SORT_DESCRIPTION_",props:"key-group, key-group-label-callback, sort-order-group"},{default:l(()=>[o(t,{actions:_.dropdownActions,"key-group-label-callback":_.groupLabelCallback,"button-text":"_A_DROPDOWN_BUTTON_TEXT_ASC_GROUPS_","key-group":"priority","sort-order-group":"asc"},null,8,["actions","key-group-label-callback"]),o(t,{class:"a_ml_4",actions:_.dropdownActions,"key-group-label-callback":_.groupLabelCallback,"button-text":"_A_DROPDOWN_BUTTON_TEXT_DESC_GROUPS_","key-group":"priority","sort-order-group":"desc"},null,8,["actions","key-group-label-callback"])]),_:1},8,["code-html","code-js"])}const $_=d(k_,[["render",H_]]);function M_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
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
};`}}const v_={name:"PageDropdownHasCaret",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=M_(),{codeJs:e}=X_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function J_(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_HAS_CARET_HEADER_",description:"_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_",props:"has-caret"},{default:l(()=>[o(t,{actions:_.dropdownActions,"has-caret":!0,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"has-caret":!1,"button-text":"_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const V_=d(v_,[["render",J_]]);function Y_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_"
></a-dropdown>`}}function q_(){return{codeJs:`import { 
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
};`}}const j_={name:"PageDropdownInBody",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=Y_(),{codeJs:e}=q_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function F_(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_IN_BODY_HEADER_",description:"_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_",props:"in-body"},{default:l(()=>[o(t,{actions:_.dropdownActions,"in-body":!0,"button-text":"_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"in-body":!1,"button-text":"_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const K_=d(j_,[["render",F_]]);function z_(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :readonly="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :readonly="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_"
></a-dropdown>`}}function Q_(){return{codeJs:`import { 
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
};`}}const Z_={name:"PageDropdownReadonly",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=z_(),{codeJs:e}=Q_();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function _o(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_READONLY_HEADER_",description:"_A_DROPDOWN_GROUP_READONLY_DESCRIPTION_",props:"has-caret"},{default:l(()=>[o(t,{actions:_.dropdownActions,readonly:!0,"button-text":"_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_"},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,readonly:!1,"button-text":"_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const oo=d(Z_,[["render",_o]]);function to(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function eo(){return{codeJs:`import { 
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
};`}}const no={name:"PageDropdownTriggers",components:{ADropdown:P,AlohaExample:D},setup(){const{codeHtml:_}=to(),{codeJs:e}=eo();return{codeHtml:_,codeJs:e,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{}},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{}}]}}};function Oo(_,e,O,c,s,r){const t=n("a-dropdown"),a=n("aloha-example");return p(),i(a,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_DROPDOWN_GROUP_TRIGGERS_HEADER_",description:"_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_",props:"triggers"},{default:l(()=>[o(t,{actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_",triggers:["click"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_",triggers:["focus"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_HOVER_",triggers:["hover"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_",triggers:["click","focus"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_HOVER_",triggers:["click","hover"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_HOVER_",triggers:["focus","hover"]},null,8,["actions"]),o(t,{class:"a_ml_2",actions:_.dropdownActions,"button-text":"_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_HOVER_",triggers:["click","focus","hover"]},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const ao=d(no,[["render",Oo]]);function co(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function so(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function ro(){const _=N(()=>k({placeholder:"_A_DROPDOWN_COMPONENT_NAME_"}));return{pageTitle:N(()=>`ADropdown${_.value?` (${_.value})`:""}`)}}function po(){return{dataProps:[{name:"actions",description:"_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-class",description:"_A_DROPDOWN_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_secondary",required:!1},{name:"button-icon-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-icon-class",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-icon-left",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-right",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-tag",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_TAG_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-is-title-html",description:"_A_DROPDOWN_PROPS_BUTTON_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-loading",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-loading-align",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_ALIGN_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"button-loading-class",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_CLASS_DESCRIPTION_",type:"String / Object",default:"a_spinner_small",required:!1},{name:"button-prevent",description:"_A_DROPDOWN_PROPS_BUTTON_PREVENT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-stop",description:"_A_DROPDOWN_PROPS_BUTTON_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-tag",description:"_A_DROPDOWN_PROPS_BUTTON_TAG_DESCRIPTION_",type:"String",default:"button",required:!1},{name:"button-text",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-text-aria-hidden",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_ARIA_HIDDEN_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-text-class",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-text-screen-reader",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title-placement",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"caret-icon",description:"_A_DROPDOWN_PROPS_CARET_ICON_DESCRIPTION_",type:"String",default:"ChevronDown",required:!1},{name:"class",description:"_A_DROPDOWN_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"disabled",description:"_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-attributes",description:"_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"dropdown-class",description:"_A_DROPDOWN_PROPS_DROPDOWN_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"dropdown-render-default",description:"_A_DROPDOWN_PROPS_DROPDOWN_RENDER_DEFAULT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-tag",description:"_A_DROPDOWN_PROPS_DROPDOWN_TAG_DESCRIPTION_",type:"String",default:"ul",required:!1},{name:"elements-for-arrows",description:"_A_DROPDOWN_PROPS_ELEMENTS_FOR_ARROWS_DESCRIPTION_",type:"String",default:H,required:!1},{name:"extra",description:"_A_DROPDOWN_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"key-group",description:"_A_DROPDOWN_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_DROPDOWN_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"floating-flip",description:"_A_DROPDOWN_PROPS_FLOATING_FLIP_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"floating-shift",description:"_A_DROPDOWN_PROPS_FLOATING_SHIFT_DESCRIPTION_",type:"Object",default:"() => ({ use: true, crossAxis: true, padding: 20 })",required:!1},{name:"has-caret",description:"_A_DROPDOWN_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"id",description:"_A_DROPDOWN_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_dropdown_btn_")',required:!1},{name:"in-body",description:"_A_DROPDOWN_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-close-by-click-inside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_INSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click-outside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_OUTSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-button-invisible-in-viewport",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide-without-action-and-slot",description:"_A_DROPDOWN_PROPS_IS_HIDE_WITHOUT_ACTION_AND_SLOT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-list-width-same-with-button",description:"_A_DROPDOWN_PROPS_IS_LIST_WIDTH_SAME_WITH_BUTTON_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"lock-arrows-navigation",description:"_A_DROPDOWN_PROPS_LOCK_ARROWS_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"lock-tab-navigation",description:"_A_DROPDOWN_PROPS_LOCK_TAB_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"menu-width",description:"_A_DROPDOWN_PROPS_MENU_WIDTH_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"persist",description:"_A_DROPDOWN_PROPS_PERSIST_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"placement",description:"_A_DROPDOWN_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-start",required:!1},{name:"popper-container-id",description:"_A_DROPDOWN_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_tooltip_container",required:!1},{name:"readonly",description:"_A_DROPDOWN_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:"false",required:!1},{name:"sort-order-group",description:"_A_DROPDOWN_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"triggers",description:"_A_DROPDOWN_PROPS_TRIGGERS_DESCRIPTION_",type:"Array",default:'() => ["click"]',required:!1},{name:"use-escape",description:"_A_DROPDOWN_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"use-rem",description:"_A_DROPDOWN_PROPS_USE_REM_DESCRIPTION_",type:"Boolean",default:!0,required:!1}]}}function io(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const lo={name:"PageDropdown",components:{AlohaPage:L,AlohaTableProps:x,ATranslation:E,PageDropdownBasic:J,PageDropdownButtonClass:F,PageDropdownButtonIcons:__,PageDropdownButtonLoading:O_,PageDropdownButtonText:d_,PageDropdownCaretIcon:P_,PageDropdownCloseByButtonInvisibleInViewport:m_,PageDropdownGroup:U_,PageDropdownGroupHideEmpty:L_,PageDropdownGroupSort:$_,PageDropdownHasCaret:V_,PageDropdownInBody:K_,PageDropdownReadonly:oo,PageDropdownTriggers:ao},setup(){const{pageTitle:_}=ro(),{dataProps:e}=po(),{dataSlots:O}=io(),{dataEvents:c}=co(),{dataExposes:s}=so();return{dataEvents:c,dataExposes:s,dataProps:e,dataSlots:O,pageTitle:_,dropdownActions:[{text:"_A_DROPDOWN_ACTION_0_",type:"button",callback:()=>{},isHidden:!0},{text:"_A_DROPDOWN_ACTION_1_",type:"button",callback:()=>{},disabled:!0},{type:"divider"},{type:"divider"},{text:"_A_DROPDOWN_ACTION_2_",type:"button",callback:()=>{}},{type:"link",text:"_A_DROPDOWN_ACTION_LINK_1_",href:"#"},{type:"divider"}]}}};function Do(_,e,O,c,s,r){const t=n("a-translation"),a=n("page-dropdown-basic"),A=n("page-dropdown-button-text"),u=n("page-dropdown-button-class"),I=n("page-dropdown-button-icons"),b=n("page-dropdown-button-loading"),m=n("page-dropdown-group"),S=n("page-dropdown-group-hide-empty"),W=n("page-dropdown-group-sort"),C=n("page-dropdown-in-body"),w=n("page-dropdown-close-by-button-invisible-in-viewport"),U=n("page-dropdown-triggers"),g=n("page-dropdown-caret-icon"),f=n("page-dropdown-has-caret"),G=n("page-dropdown-readonly"),y=n("aloha-table-props"),B=n("aloha-page");return p(),i(B,{"page-title":_.pageTitle},{body:l(()=>[o(t,{tag:"p",html:"_A_DROPDOWN_COMPONENT_DESCRIPTION_"}),o(a),o(A),o(u),o(I),o(b),o(m),o(S),o(W),o(C),o(w),o(U),o(g),o(f),o(G),o(y,{data:_.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const fo=d(lo,[["render",Do]]);export{fo as default};
