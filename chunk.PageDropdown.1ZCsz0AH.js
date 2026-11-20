import{t as e}from"./chunk.AlohaPage.1DFen3a5.js";import{t}from"./chunk.AlohaTableProps.BqrQ-2bd.js";import{t as n}from"./chunk.AlohaExample.zAlCDWQM.js";import{G as r,Xt as i,at as a,dt as o,it as s}from"./bundle.index.BvA5sOPX.js";import{Ft as c,It as l,Pt as u,Qt as d,Vt as f,cn as p,nn as m,on as h}from"./chunk.vendor.CTxSDDRk.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
></a-dropdown>`}}function v(){return{codeJs:`import { 
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
};`}}var y={name:`PageDropdownBasic`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=_(),{codeJs:t}=v();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function b(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`actions`},{default:h(()=>[f(o,{actions:e.dropdownActions},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function C(){return{codeJs:`import { 
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
};`}}var w={name:`PageDropdownButtonClass`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=S(),{codeJs:t}=C();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function T(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_`,props:`button-text`},{default:h(()=>[f(o,{actions:e.dropdownActions,"button-class":`a_btn a_btn_primary`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-class":`a_btn a_btn_success`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-class":`a_btn a_btn_info`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var E=g(w,[[`render`,T]]);function D(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function O(){return{codeJs:`import { 
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
};`}}var ee={name:`PageDropdownButtonIcons`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=D(),{codeJs:t}=O();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function te(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_`,props:[`button-icon-left`,`button-icon-right`]},{default:h(()=>[f(o,{actions:e.dropdownActions,"button-icon-left":`Gear`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-right":`Files`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-left":`Duplicate`,"button-icon-right":`Gear`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-right":{desktop:`Gear`,mobile:`Files`},"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var k=g(ee,[[`render`,te]]);function A(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function j(){return{codeJs:`import { 
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
};`}}var M={name:`PageDropdownButtonLoading`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=A(),{codeJs:t}=j();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function N(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_`,props:[`button-loading`,`button-loading-align`]},{default:h(()=>[f(o,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0,"button-loading-align":`left`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0,"button-loading-align":`right`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var P=g(M,[[`render`,N]]);function F(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function I(){return{codeJs:`import { 
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
};`}}var L={name:`PageDropdownButtonText`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function R(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_`,props:`button-text`},{default:h(()=>[f(o,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_NUMBER_`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":{desktop:`_A_DROPDOWN_BUTTON_TEXT_DESKTOP_`,mobile:`_A_DROPDOWN_BUTTON_TEXT_MOBILE_`}},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var z=g(L,[[`render`,R]]);function B(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  caret-icon="EjectFill"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  caret-icon="Gear"
></a-dropdown>`}}function V(){return{codeJs:`import { 
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
};`}}var H={name:`PageDropdownCaretIcon`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function U(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_CARET_ICON_HEADER_`,description:`_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_`,props:`caret-icon`},{default:h(()=>[f(o,{actions:e.dropdownActions,"caret-icon":`EjectFill`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"caret-icon":`Gear`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var W=g(H,[[`render`,U]]);function G(){return{codeHtml:`<div
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
</div>`}}function K(){return{codeJs:`import {
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
};`}}var q={name:`PageDropdownCloseByButtonInvisibleInViewport`,components:{ADropdown:a,AlohaExample:n,ATranslation:s},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_2_`,type:`button`,callback:()=>{}}]}}},J={style:{"max-height":`14rem`,overflow:`auto`,padding:`1rem`}},Y={style:{height:`26rem`}},X={style:{"margin-top":`6rem`}},Z={style:{"margin-top":`6rem`}};function Q(e,t,n,r,i,a){let o=m(`a-translation`),s=m(`a-dropdown`),u=m(`aloha-example`);return d(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_HEADER_`,description:`_A_DROPDOWN_GROUP_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,props:`is-close-by-button-invisible-in-viewport`},{default:h(()=>[c(`div`,J,[c(`div`,Y,[c(`p`,null,[f(o,{tag:`span`,text:`_A_DROPDOWN_SCROLL_HELP_`})]),c(`div`,X,[f(s,{actions:e.dropdownActions,"is-close-by-button-invisible-in-viewport":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_TRUE_`},null,8,[`actions`])]),c(`div`,Z,[f(s,{actions:e.dropdownActions,"is-close-by-button-invisible-in-viewport":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_FALSE_`},null,8,[`actions`])])])])]),_:1},8,[`code-html`,`code-js`])}var ne=g(q,[[`render`,Q]]);function re(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section', 'subsection']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_"
></a-dropdown>`}}function ie(){return{codeJs:`import {
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
};`}}var ae={name:`PageDropdownGroup`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_OVERVIEW_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_RECENT_ACTIVITY_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_CREATE_INVOICE_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,subsection:`_A_DROPDOWN_GROUP_INVOICES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_EXPENSE_REPORT_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,subsection:`_A_DROPDOWN_GROUP_REPORTS_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_EMAIL_CAMPAIGN_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_MARKETING_`,subsection:`_A_DROPDOWN_GROUP_CAMPAIGNS_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_INBOX_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_EMAIL_`,subsection:`_A_DROPDOWN_GROUP_MESSAGES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_MEETING_NOTES_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_MEETINGS_`,subsection:`_A_DROPDOWN_GROUP_NOTES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_FRONTEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,subsection:`_A_DROPDOWN_GROUP_FRONTEND_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_BACKEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,subsection:`_A_DROPDOWN_GROUP_BACKEND_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_DEPLOYMENTS_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_RELEASE_`,subsection:`_A_DROPDOWN_GROUP_PRODUCTION_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_USERS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,subsection:`_A_DROPDOWN_GROUP_TEAM_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_API_TOKENS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,subsection:`_A_DROPDOWN_GROUP_SECURITY_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_APPEARANCE_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_WORKSPACE_`,subsection:`_A_DROPDOWN_GROUP_THEME_`,callback:()=>{}}]}}};function oe(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_DESCRIPTION_`,props:`actions, key-group`},{default:h(()=>[f(o,{actions:e.dropdownActions,"key-group":[`group`,`section`,`subsection`],"button-text":`_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var se=g(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-one-checkbox
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
></a-dropdown>`}}function le(){return{codeJs:`import {
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
};`}}var ue={name:`PageDropdownGroupHideEmpty`,components:{ADropdown:a,AOneCheckbox:r,AlohaExample:n},setup(){let{codeHtml:e}=ce(),{codeJs:t}=le(),n=p(!0),r=p(!0);return{codeHtml:e,codeJs:t,dropdownActions:u(()=>[{text:`_A_DROPDOWN_ACTION_INVOICES_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_MESSAGES_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_INBOX_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_FRONTEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,callback:()=>{},isHidden:!n.value},{text:`_A_DROPDOWN_ACTION_DEPLOYMENTS_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_RELEASE_`,callback:()=>{},isHidden:!n.value},{text:`_A_DROPDOWN_ACTION_USERS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,callback:()=>{},isHidden:!r.value},{text:`_A_DROPDOWN_ACTION_SECURITY_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_WORKSPACE_`,callback:()=>{},isHidden:!r.value}]),isDevelopmentVisible:n,isSettingsVisible:r}}},de={class:`a_flex a_align_items_center a_gap_2 a_mb_3 a_flex_wrap`};function fe(e,t,n,r,i,a){let o=m(`a-one-checkbox`),s=m(`a-dropdown`),u=m(`aloha-example`);return d(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_DESCRIPTION_`,props:`actions, key-group`},{default:h(()=>[c(`div`,de,[f(o,{modelValue:e.isDevelopmentVisible,"onUpdate:modelValue":t[0]||=t=>e.isDevelopmentVisible=t,"is-width-auto":!0,label:`_A_DROPDOWN_BUTTON_TEXT_TOGGLE_DEVELOPMENT_`},null,8,[`modelValue`]),f(o,{modelValue:e.isSettingsVisible,"onUpdate:modelValue":t[1]||=t=>e.isSettingsVisible=t,"is-width-auto":!0,label:`_A_DROPDOWN_BUTTON_TEXT_TOGGLE_SETTINGS_`},null,8,[`modelValue`])]),f(s,{actions:e.dropdownActions,"key-group":[`group`,`section`],"button-text":`_A_DROPDOWN_BUTTON_TEXT_HIDE_EMPTY_GROUPS_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var pe=g(ue,[[`render`,fe]]);function me(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function he(){return{codeJs:`import {
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
};`}}var ge={name:`PageDropdownGroupSort`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=me(),{codeJs:t}=he();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_DEPLOY_NOW_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_RESTART_WORKER_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_ARCHIVE_REPORT_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_LOW_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_SYNC_CONTACTS_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_NORMAL_`,callback:()=>{}}],groupLabelCallback:({group:e})=>({_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_CRITICAL_`,_A_DROPDOWN_GROUP_PRIORITY_LOW_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_LOW_`,_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_MEDIUM_`,_A_DROPDOWN_GROUP_PRIORITY_NORMAL_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_NORMAL_`})[e]||e}}};function _e(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_SORT_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_SORT_DESCRIPTION_`,props:`key-group, key-group-label-callback, sort-order-group`},{default:h(()=>[f(o,{actions:e.dropdownActions,"key-group-label-callback":e.groupLabelCallback,"button-text":`_A_DROPDOWN_BUTTON_TEXT_ASC_GROUPS_`,"key-group":`priority`,"sort-order-group":`asc`},null,8,[`actions`,`key-group-label-callback`]),f(o,{class:`a_ml_4`,actions:e.dropdownActions,"key-group-label-callback":e.groupLabelCallback,"button-text":`_A_DROPDOWN_BUTTON_TEXT_DESC_GROUPS_`,"key-group":`priority`,"sort-order-group":`desc`},null,8,[`actions`,`key-group-label-callback`])]),_:1},8,[`code-html`,`code-js`])}var ve=g(ge,[[`render`,_e]]);function ye(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>`}}function be(){return{codeJs:`import { 
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
};`}}var xe={name:`PageDropdownHasCaret`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Se(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_HAS_CARET_HEADER_`,description:`_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_`,props:`has-caret`},{default:h(()=>[f(o,{actions:e.dropdownActions,"has-caret":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"has-caret":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Ce=g(xe,[[`render`,Se]]);function we(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_"
></a-dropdown>`}}function Te(){return{codeJs:`import { 
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
};`}}var Ee={name:`PageDropdownInBody`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=we(),{codeJs:t}=Te();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function De(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_IN_BODY_HEADER_`,description:`_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_`,props:`in-body`},{default:h(()=>[f(o,{actions:e.dropdownActions,"in-body":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"in-body":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Oe=g(Ee,[[`render`,De]]);function ke(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :readonly="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :readonly="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_"
></a-dropdown>`}}function Ae(){return{codeJs:`import { 
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
};`}}var je={name:`PageDropdownReadonly`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=ke(),{codeJs:t}=Ae();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Me(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_READONLY_HEADER_`,description:`_A_DROPDOWN_GROUP_READONLY_DESCRIPTION_`,props:`has-caret`},{default:h(()=>[f(o,{actions:e.dropdownActions,readonly:!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_`},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,readonly:!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Ne=g(je,[[`render`,Me]]);function Pe(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function $(){return{codeJs:`import { 
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
};`}}var Fe={name:`PageDropdownTriggers`,components:{ADropdown:a,AlohaExample:n},setup(){let{codeHtml:e}=Pe(),{codeJs:t}=$();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Ie(e,t,n,r,i,a){let o=m(`a-dropdown`),s=m(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_TRIGGERS_HEADER_`,description:`_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_`,props:`triggers`},{default:h(()=>[f(o,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_`,triggers:[`click`]},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_`,triggers:[`focus`]},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_HOVER_`,triggers:[`hover`]},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_`,triggers:[`click`,`focus`]},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_HOVER_`,triggers:[`click`,`hover`]},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_HOVER_`,triggers:[`focus`,`hover`]},null,8,[`actions`]),f(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_HOVER_`,triggers:[`click`,`focus`,`hover`]},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Le=g(Fe,[[`render`,Ie]]);function Re(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function ze(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function Be(){let e=u(()=>i({placeholder:`_A_DROPDOWN_COMPONENT_NAME_`}));return{pageTitle:u(()=>`ADropdown${e.value?` (${e.value})`:``}`)}}function Ve(){return{dataProps:[{name:`actions`,description:`_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-attributes`,description:`_A_DROPDOWN_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`button-class`,description:`_A_DROPDOWN_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`button-icon-attributes`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`button-icon-class`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-icon-left`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-icon-right`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-icon-tag`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-is-title-html`,description:`_A_DROPDOWN_PROPS_BUTTON_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-loading`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`button-loading-align`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_ALIGN_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`button-loading-class`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_spinner_small`,required:!1},{name:`button-prevent`,description:`_A_DROPDOWN_PROPS_BUTTON_PREVENT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-stop`,description:`_A_DROPDOWN_PROPS_BUTTON_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-tag`,description:`_A_DROPDOWN_PROPS_BUTTON_TAG_DESCRIPTION_`,type:`String`,default:`button`,required:!1},{name:`button-text`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-text-aria-hidden`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_ARIA_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`button-text-class`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-text-screen-reader`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-title`,description:`_A_DROPDOWN_PROPS_BUTTON_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-title-placement`,description:`_A_DROPDOWN_PROPS_BUTTON_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`caret-icon`,description:`_A_DROPDOWN_PROPS_CARET_ICON_DESCRIPTION_`,type:`String`,default:`ChevronDown`,required:!1},{name:`class`,description:`_A_DROPDOWN_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dropdown-attributes`,description:`_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`dropdown-class`,description:`_A_DROPDOWN_PROPS_DROPDOWN_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`dropdown-render-default`,description:`_A_DROPDOWN_PROPS_DROPDOWN_RENDER_DEFAULT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dropdown-tag`,description:`_A_DROPDOWN_PROPS_DROPDOWN_TAG_DESCRIPTION_`,type:`String`,default:`ul`,required:!1},{name:`elements-for-arrows`,description:`_A_DROPDOWN_PROPS_ELEMENTS_FOR_ARROWS_DESCRIPTION_`,type:`String`,default:o,required:!1},{name:`extra`,description:`_A_DROPDOWN_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`key-group`,description:`_A_DROPDOWN_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:void 0,required:!1},{name:`key-group-label-callback`,description:`_A_DROPDOWN_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`floating-flip`,description:`_A_DROPDOWN_PROPS_FLOATING_FLIP_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`floating-shift`,description:`_A_DROPDOWN_PROPS_FLOATING_SHIFT_DESCRIPTION_`,type:`Object`,default:`() => ({ use: true, crossAxis: true, padding: 20 })`,required:!1},{name:`has-caret`,description:`_A_DROPDOWN_PROPS_HAS_CARET_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`id`,description:`_A_DROPDOWN_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_dropdown_btn_")`,required:!1},{name:`in-body`,description:`_A_DROPDOWN_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-close-by-click-inside`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_INSIDE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-click-outside`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-button-invisible-in-viewport`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide-without-action-and-slot`,description:`_A_DROPDOWN_PROPS_IS_HIDE_WITHOUT_ACTION_AND_SLOT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-list-width-same-with-button`,description:`_A_DROPDOWN_PROPS_IS_LIST_WIDTH_SAME_WITH_BUTTON_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`lock-arrows-navigation`,description:`_A_DROPDOWN_PROPS_LOCK_ARROWS_NAVIGATION_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`lock-tab-navigation`,description:`_A_DROPDOWN_PROPS_LOCK_TAB_NAVIGATION_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`menu-width`,description:`_A_DROPDOWN_PROPS_MENU_WIDTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`persist`,description:`_A_DROPDOWN_PROPS_PERSIST_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`placement`,description:`_A_DROPDOWN_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom-start`,required:!1},{name:`popper-container-id`,description:`_A_DROPDOWN_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_container`,required:!1},{name:`readonly`,description:`_A_DROPDOWN_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`sort-order-group`,description:`_A_DROPDOWN_PROPS_SORT_ORDER_GROUP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`triggers`,description:`_A_DROPDOWN_PROPS_TRIGGERS_DESCRIPTION_`,type:`Array`,default:`() => ["click"]`,required:!1},{name:`use-escape`,description:`_A_DROPDOWN_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-rem`,description:`_A_DROPDOWN_PROPS_USE_REM_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1}]}}function He(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var Ue={name:`PageDropdown`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:s,PageDropdownBasic:x,PageDropdownButtonClass:E,PageDropdownButtonIcons:k,PageDropdownButtonLoading:P,PageDropdownButtonText:z,PageDropdownCaretIcon:W,PageDropdownCloseByButtonInvisibleInViewport:ne,PageDropdownGroup:se,PageDropdownGroupHideEmpty:pe,PageDropdownGroupSort:ve,PageDropdownHasCaret:Ce,PageDropdownInBody:Oe,PageDropdownReadonly:Ne,PageDropdownTriggers:Le},setup(){let{pageTitle:e}=Be(),{dataProps:t}=Ve(),{dataSlots:n}=He(),{dataEvents:r}=Re(),{dataExposes:i}=ze();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{},isHidden:!0},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{},disabled:!0},{type:`divider`},{type:`divider`},{text:`_A_DROPDOWN_ACTION_2_`,type:`button`,callback:()=>{}},{type:`link`,text:`_A_DROPDOWN_ACTION_LINK_1_`,href:`#`},{type:`divider`}]}}};function We(e,t,n,r,i,a){let o=m(`a-translation`),s=m(`page-dropdown-basic`),c=m(`page-dropdown-button-text`),u=m(`page-dropdown-button-class`),p=m(`page-dropdown-button-icons`),g=m(`page-dropdown-button-loading`),_=m(`page-dropdown-group`),v=m(`page-dropdown-group-hide-empty`),y=m(`page-dropdown-group-sort`),b=m(`page-dropdown-in-body`),x=m(`page-dropdown-close-by-button-invisible-in-viewport`),S=m(`page-dropdown-triggers`),C=m(`page-dropdown-caret-icon`),w=m(`page-dropdown-has-caret`),T=m(`page-dropdown-readonly`),E=m(`aloha-table-props`),D=m(`aloha-table-css-vars`),O=m(`aloha-page`);return d(),l(O,{"page-title":e.pageTitle},{body:h(()=>[f(o,{tag:`p`,html:`_A_DROPDOWN_COMPONENT_DESCRIPTION_`}),f(s),f(c),f(u),f(p),f(g),f(_),f(v),f(y),f(b),f(x),f(S),f(C),f(w),f(T),f(E,{data:e.dataProps},null,8,[`data`]),f(D,{files:`utils/dropdown`})]),_:1},8,[`page-title`])}var Ge=g(Ue,[[`render`,We]]);export{Ge as default};