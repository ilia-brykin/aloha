import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{H as ee,Q as c,Z as l,kt as u,rt as d,t as f}from"./bundle.index.CLtYDDlb.js";import{n as p,t as m}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as h}from"./chunk.AlohaTableProps.CiFmD1UR.js";function g(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
></a-dropdown>`}}function _(){return{codeJs:`import { 
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
};`}}var v={name:`PageDropdownBasic`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function y(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`actions`},{default:a(()=>[i(u,{actions:e.dropdownActions},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var b=f(v,[[`render`,y]]);function x(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function S(){return{codeJs:`import { 
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
};`}}var C={name:`PageDropdownButtonClass`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function w(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_`,props:`button-text`},{default:a(()=>[i(u,{actions:e.dropdownActions,"button-class":`a_btn a_btn_primary`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-class":`a_btn a_btn_success`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-class":`a_btn a_btn_info`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var T=f(C,[[`render`,w]]);function E(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function te(){return{codeJs:`import { 
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
};`}}var D={name:`PageDropdownButtonIcons`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=E(),{codeJs:t}=te();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function O(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_`,props:[`button-icon-left`,`button-icon-right`]},{default:a(()=>[i(u,{actions:e.dropdownActions,"button-icon-left":`Gear`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-right":`Files`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-left":`Duplicate`,"button-icon-right":`Gear`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-right":{desktop:`Gear`,mobile:`Files`},"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var k=f(D,[[`render`,O]]);function A(){return{codeHtml:`<a-dropdown
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
};`}}var M={name:`PageDropdownButtonLoading`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=A(),{codeJs:t}=j();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function N(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_`,props:[`button-loading`,`button-loading-align`]},{default:a(()=>[i(u,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0,"button-loading-align":`left`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0,"button-loading-align":`right`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var P=f(M,[[`render`,N]]);function F(){return{codeHtml:`<a-dropdown
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
};`}}var L={name:`PageDropdownButtonText`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function R(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_`,props:`button-text`},{default:a(()=>[i(u,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_NUMBER_`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":{desktop:`_A_DROPDOWN_BUTTON_TEXT_DESKTOP_`,mobile:`_A_DROPDOWN_BUTTON_TEXT_MOBILE_`}},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var z=f(L,[[`render`,R]]);function B(){return{codeHtml:`<a-dropdown
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
};`}}var H={name:`PageDropdownCaretIcon`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function U(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_CARET_ICON_HEADER_`,description:`_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_`,props:`caret-icon`},{default:a(()=>[i(u,{actions:e.dropdownActions,"caret-icon":`EjectFill`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"caret-icon":`Gear`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var W=f(H,[[`render`,U]]);function G(){return{codeHtml:`<div
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
};`}}var q={name:`PageDropdownCloseByButtonInvisibleInViewport`,components:{ADropdown:c,AlohaExample:m,ATranslation:l},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_2_`,type:`button`,callback:()=>{}}]}}},J={style:{"max-height":`14rem`,overflow:`auto`,padding:`1rem`}},Y={style:{height:`26rem`}},X={style:{"margin-top":`6rem`}},Z={style:{"margin-top":`6rem`}};function Q(e,r,ee,c,l,u){let d=n(`a-translation`),f=n(`a-dropdown`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_HEADER_`,description:`_A_DROPDOWN_GROUP_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,props:`is-close-by-button-invisible-in-viewport`},{default:a(()=>[o(`div`,J,[o(`div`,Y,[o(`p`,null,[i(d,{tag:`span`,text:`_A_DROPDOWN_SCROLL_HELP_`})]),o(`div`,X,[i(f,{actions:e.dropdownActions,"is-close-by-button-invisible-in-viewport":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_TRUE_`},null,8,[`actions`])]),o(`div`,Z,[i(f,{actions:e.dropdownActions,"is-close-by-button-invisible-in-viewport":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_FALSE_`},null,8,[`actions`])])])])]),_:1},8,[`code-html`,`code-js`])}var ne=f(q,[[`render`,Q]]);function re(){return{codeHtml:`<a-dropdown
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
};`}}var ae={name:`PageDropdownGroup`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_OVERVIEW_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_RECENT_ACTIVITY_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_CREATE_INVOICE_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,subsection:`_A_DROPDOWN_GROUP_INVOICES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_EXPENSE_REPORT_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,subsection:`_A_DROPDOWN_GROUP_REPORTS_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_EMAIL_CAMPAIGN_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_MARKETING_`,subsection:`_A_DROPDOWN_GROUP_CAMPAIGNS_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_INBOX_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_EMAIL_`,subsection:`_A_DROPDOWN_GROUP_MESSAGES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_MEETING_NOTES_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_MEETINGS_`,subsection:`_A_DROPDOWN_GROUP_NOTES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_FRONTEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,subsection:`_A_DROPDOWN_GROUP_FRONTEND_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_BACKEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,subsection:`_A_DROPDOWN_GROUP_BACKEND_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_DEPLOYMENTS_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_RELEASE_`,subsection:`_A_DROPDOWN_GROUP_PRODUCTION_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_USERS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,subsection:`_A_DROPDOWN_GROUP_TEAM_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_API_TOKENS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,subsection:`_A_DROPDOWN_GROUP_SECURITY_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_APPEARANCE_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_WORKSPACE_`,subsection:`_A_DROPDOWN_GROUP_THEME_`,callback:()=>{}}]}}};function oe(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_DESCRIPTION_`,props:`actions, key-group`},{default:a(()=>[i(u,{actions:e.dropdownActions,"key-group":[`group`,`section`,`subsection`],"button-text":`_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var se=f(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-one-checkbox
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
};`}}var ue={name:`PageDropdownGroupHideEmpty`,components:{ADropdown:c,AOneCheckbox:ee,AlohaExample:m},setup(){let{codeHtml:t}=ce(),{codeJs:n}=le(),i=r(!0),a=r(!0);return{codeHtml:t,codeJs:n,dropdownActions:e(()=>[{text:`_A_DROPDOWN_ACTION_INVOICES_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_MESSAGES_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_INBOX_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_FRONTEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,callback:()=>{},isHidden:!i.value},{text:`_A_DROPDOWN_ACTION_DEPLOYMENTS_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_RELEASE_`,callback:()=>{},isHidden:!i.value},{text:`_A_DROPDOWN_ACTION_USERS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,callback:()=>{},isHidden:!a.value},{text:`_A_DROPDOWN_ACTION_SECURITY_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_WORKSPACE_`,callback:()=>{},isHidden:!a.value}]),isDevelopmentVisible:i,isSettingsVisible:a}}},de={class:`a_flex a_align_items_center a_gap_2 a_mb_3 a_flex_wrap`};function fe(e,r,ee,c,l,u){let d=n(`a-one-checkbox`),f=n(`a-dropdown`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_DESCRIPTION_`,props:`actions, key-group`},{default:a(()=>[o(`div`,de,[i(d,{modelValue:e.isDevelopmentVisible,"onUpdate:modelValue":r[0]||=t=>e.isDevelopmentVisible=t,"is-width-auto":!0,label:`_A_DROPDOWN_BUTTON_TEXT_TOGGLE_DEVELOPMENT_`},null,8,[`modelValue`]),i(d,{modelValue:e.isSettingsVisible,"onUpdate:modelValue":r[1]||=t=>e.isSettingsVisible=t,"is-width-auto":!0,label:`_A_DROPDOWN_BUTTON_TEXT_TOGGLE_SETTINGS_`},null,8,[`modelValue`])]),i(f,{actions:e.dropdownActions,"key-group":[`group`,`section`],"button-text":`_A_DROPDOWN_BUTTON_TEXT_HIDE_EMPTY_GROUPS_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var pe=f(ue,[[`render`,fe]]);function me(){return{codeHtml:`<a-dropdown
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
};`}}var ge={name:`PageDropdownGroupSort`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=me(),{codeJs:t}=he();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_DEPLOY_NOW_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_RESTART_WORKER_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_ARCHIVE_REPORT_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_LOW_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_SYNC_CONTACTS_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_NORMAL_`,callback:()=>{}}],groupLabelCallback:({group:e})=>({_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_CRITICAL_`,_A_DROPDOWN_GROUP_PRIORITY_LOW_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_LOW_`,_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_MEDIUM_`,_A_DROPDOWN_GROUP_PRIORITY_NORMAL_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_NORMAL_`})[e]||e}}};function _e(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_SORT_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_SORT_DESCRIPTION_`,props:`key-group, key-group-label-callback, sort-order-group`},{default:a(()=>[i(u,{actions:e.dropdownActions,"key-group-label-callback":e.groupLabelCallback,"button-text":`_A_DROPDOWN_BUTTON_TEXT_ASC_GROUPS_`,"key-group":`priority`,"sort-order-group":`asc`},null,8,[`actions`,`key-group-label-callback`]),i(u,{class:`a_ml_4`,actions:e.dropdownActions,"key-group-label-callback":e.groupLabelCallback,"button-text":`_A_DROPDOWN_BUTTON_TEXT_DESC_GROUPS_`,"key-group":`priority`,"sort-order-group":`desc`},null,8,[`actions`,`key-group-label-callback`])]),_:1},8,[`code-html`,`code-js`])}var ve=f(ge,[[`render`,_e]]);function ye(){return{codeHtml:`<a-dropdown
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
};`}}var xe={name:`PageDropdownHasCaret`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Se(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_HAS_CARET_HEADER_`,description:`_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_`,props:`has-caret`},{default:a(()=>[i(u,{actions:e.dropdownActions,"has-caret":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"has-caret":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Ce=f(xe,[[`render`,Se]]);function we(){return{codeHtml:`<a-dropdown
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
};`}}var Ee={name:`PageDropdownInBody`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=we(),{codeJs:t}=Te();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function De(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_IN_BODY_HEADER_`,description:`_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_`,props:`in-body`},{default:a(()=>[i(u,{actions:e.dropdownActions,"in-body":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"in-body":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Oe=f(Ee,[[`render`,De]]);function ke(){return{codeHtml:`<a-dropdown
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
};`}}var je={name:`PageDropdownReadonly`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=ke(),{codeJs:t}=Ae();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Me(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_READONLY_HEADER_`,description:`_A_DROPDOWN_GROUP_READONLY_DESCRIPTION_`,props:`has-caret`},{default:a(()=>[i(u,{actions:e.dropdownActions,readonly:!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_`},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,readonly:!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Ne=f(je,[[`render`,Me]]);function Pe(){return{codeHtml:`<a-dropdown
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
};`}}var Fe={name:`PageDropdownTriggers`,components:{ADropdown:c,AlohaExample:m},setup(){let{codeHtml:e}=Pe(),{codeJs:t}=$();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Ie(e,r,o,ee,c,l){let u=n(`a-dropdown`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_TRIGGERS_HEADER_`,description:`_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_`,props:`triggers`},{default:a(()=>[i(u,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_`,triggers:[`click`]},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_`,triggers:[`focus`]},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_HOVER_`,triggers:[`hover`]},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_`,triggers:[`click`,`focus`]},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_HOVER_`,triggers:[`click`,`hover`]},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_HOVER_`,triggers:[`focus`,`hover`]},null,8,[`actions`]),i(u,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_HOVER_`,triggers:[`click`,`focus`,`hover`]},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Le=f(Fe,[[`render`,Ie]]);function Re(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function ze(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function Be(){let t=e(()=>u({placeholder:`_A_DROPDOWN_COMPONENT_NAME_`}));return{pageTitle:e(()=>`ADropdown${t.value?` (${t.value})`:``}`)}}function Ve(){return{dataProps:[{name:`actions`,description:`_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-attributes`,description:`_A_DROPDOWN_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`button-class`,description:`_A_DROPDOWN_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`button-icon-attributes`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`button-icon-class`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-icon-left`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-icon-right`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-icon-tag`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-is-title-html`,description:`_A_DROPDOWN_PROPS_BUTTON_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-loading`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`button-loading-align`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_ALIGN_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`button-loading-class`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_spinner_small`,required:!1},{name:`button-prevent`,description:`_A_DROPDOWN_PROPS_BUTTON_PREVENT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-stop`,description:`_A_DROPDOWN_PROPS_BUTTON_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-tag`,description:`_A_DROPDOWN_PROPS_BUTTON_TAG_DESCRIPTION_`,type:`String`,default:`button`,required:!1},{name:`button-text`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-text-aria-hidden`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_ARIA_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`button-text-class`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-text-screen-reader`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-title`,description:`_A_DROPDOWN_PROPS_BUTTON_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-title-placement`,description:`_A_DROPDOWN_PROPS_BUTTON_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`caret-icon`,description:`_A_DROPDOWN_PROPS_CARET_ICON_DESCRIPTION_`,type:`String`,default:`ChevronDown`,required:!1},{name:`class`,description:`_A_DROPDOWN_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dropdown-attributes`,description:`_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`dropdown-class`,description:`_A_DROPDOWN_PROPS_DROPDOWN_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`dropdown-render-default`,description:`_A_DROPDOWN_PROPS_DROPDOWN_RENDER_DEFAULT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dropdown-tag`,description:`_A_DROPDOWN_PROPS_DROPDOWN_TAG_DESCRIPTION_`,type:`String`,default:`ul`,required:!1},{name:`elements-for-arrows`,description:`_A_DROPDOWN_PROPS_ELEMENTS_FOR_ARROWS_DESCRIPTION_`,type:`String`,default:d,required:!1},{name:`extra`,description:`_A_DROPDOWN_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`key-group`,description:`_A_DROPDOWN_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:void 0,required:!1},{name:`key-group-label-callback`,description:`_A_DROPDOWN_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`floating-flip`,description:`_A_DROPDOWN_PROPS_FLOATING_FLIP_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`floating-shift`,description:`_A_DROPDOWN_PROPS_FLOATING_SHIFT_DESCRIPTION_`,type:`Object`,default:`() => ({ use: true, crossAxis: true, padding: 20 })`,required:!1},{name:`has-caret`,description:`_A_DROPDOWN_PROPS_HAS_CARET_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`id`,description:`_A_DROPDOWN_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_dropdown_btn_")`,required:!1},{name:`in-body`,description:`_A_DROPDOWN_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-close-by-click-inside`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_INSIDE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-click-outside`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-button-invisible-in-viewport`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide-without-action-and-slot`,description:`_A_DROPDOWN_PROPS_IS_HIDE_WITHOUT_ACTION_AND_SLOT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-list-width-same-with-button`,description:`_A_DROPDOWN_PROPS_IS_LIST_WIDTH_SAME_WITH_BUTTON_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`lock-arrows-navigation`,description:`_A_DROPDOWN_PROPS_LOCK_ARROWS_NAVIGATION_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`lock-tab-navigation`,description:`_A_DROPDOWN_PROPS_LOCK_TAB_NAVIGATION_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`menu-width`,description:`_A_DROPDOWN_PROPS_MENU_WIDTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`persist`,description:`_A_DROPDOWN_PROPS_PERSIST_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`placement`,description:`_A_DROPDOWN_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom-start`,required:!1},{name:`popper-container-id`,description:`_A_DROPDOWN_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_container`,required:!1},{name:`readonly`,description:`_A_DROPDOWN_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`sort-order-group`,description:`_A_DROPDOWN_PROPS_SORT_ORDER_GROUP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`triggers`,description:`_A_DROPDOWN_PROPS_TRIGGERS_DESCRIPTION_`,type:`Array`,default:`() => ["click"]`,required:!1},{name:`use-escape`,description:`_A_DROPDOWN_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-rem`,description:`_A_DROPDOWN_PROPS_USE_REM_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1}]}}function He(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var Ue={name:`PageDropdown`,components:{AlohaPage:p,AlohaTableProps:h,ATranslation:l,PageDropdownBasic:b,PageDropdownButtonClass:T,PageDropdownButtonIcons:k,PageDropdownButtonLoading:P,PageDropdownButtonText:z,PageDropdownCaretIcon:W,PageDropdownCloseByButtonInvisibleInViewport:ne,PageDropdownGroup:se,PageDropdownGroupHideEmpty:pe,PageDropdownGroupSort:ve,PageDropdownHasCaret:Ce,PageDropdownInBody:Oe,PageDropdownReadonly:Ne,PageDropdownTriggers:Le},setup(){let{pageTitle:e}=Be(),{dataProps:t}=Ve(),{dataSlots:n}=He(),{dataEvents:r}=Re(),{dataExposes:i}=ze();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{},isHidden:!0},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{},disabled:!0},{type:`divider`},{type:`divider`},{text:`_A_DROPDOWN_ACTION_2_`,type:`button`,callback:()=>{}},{type:`link`,text:`_A_DROPDOWN_ACTION_LINK_1_`,href:`#`},{type:`divider`}]}}};function We(e,r,o,ee,c,l){let u=n(`a-translation`),d=n(`page-dropdown-basic`),f=n(`page-dropdown-button-text`),p=n(`page-dropdown-button-class`),m=n(`page-dropdown-button-icons`),h=n(`page-dropdown-button-loading`),g=n(`page-dropdown-group`),_=n(`page-dropdown-group-hide-empty`),v=n(`page-dropdown-group-sort`),y=n(`page-dropdown-in-body`),b=n(`page-dropdown-close-by-button-invisible-in-viewport`),x=n(`page-dropdown-triggers`),S=n(`page-dropdown-caret-icon`),C=n(`page-dropdown-has-caret`),w=n(`page-dropdown-readonly`),T=n(`aloha-table-props`),E=n(`aloha-page`);return s(),t(E,{"page-title":e.pageTitle},{body:a(()=>[i(u,{tag:`p`,html:`_A_DROPDOWN_COMPONENT_DESCRIPTION_`}),i(d),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b),i(x),i(S),i(C),i(w),i(T,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var Ge=f(Ue,[[`render`,We]]);export{Ge as default};