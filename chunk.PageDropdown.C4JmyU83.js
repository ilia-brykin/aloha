import{t as e}from"./chunk.AlohaPage.D8jsTY5m.js";import{t}from"./chunk.AlohaTableProps.CEJuqblo.js";import{t as n}from"./chunk.AlohaExample.B-5omd3W.js";import{G as r,hn as i,mn as a,sn as o,t as s,ut as c,yt as l}from"./bundle.index.Cwpafk10.js";import{Ht as u,Jt as d,Ut as f,Vt as p,_n as m,mn as h,on as g,un as _}from"./chunk.vendor.Bjd2408Z.js";function v(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
></a-dropdown>`}}function y(){return{codeJs:`import { 
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
};`}}var b={name:`PageDropdownBasic`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=v(),{codeJs:t}=y();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function x(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`actions`},{default:h(()=>[d(o,{actions:e.dropdownActions},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var S=s(b,[[`render`,x]]);function C(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function w(){return{codeJs:`import { 
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
};`}}var T={name:`PageDropdownButtonClass`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=C(),{codeJs:t}=w();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function E(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_`,props:`button-text`},{default:h(()=>[d(o,{actions:e.dropdownActions,"button-class":`a_btn a_btn_primary`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-class":`a_btn a_btn_success`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-class":`a_btn a_btn_info`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var D=s(T,[[`render`,E]]);function O(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function k(){return{codeJs:`import { 
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
};`}}var A={name:`PageDropdownButtonIcons`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function j(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_`,props:[`button-icon-left`,`button-icon-right`]},{default:h(()=>[d(o,{actions:e.dropdownActions,"button-icon-left":`Gear`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-right":`Files`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-left":`Duplicate`,"button-icon-right":`Gear`,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-icon-right":{desktop:`Gear`,mobile:`Files`},"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var ee=s(A,[[`render`,j]]);function te(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function M(){return{codeJs:`import { 
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
};`}}var N={name:`PageDropdownButtonLoading`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=te(),{codeJs:t}=M();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function P(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_`,props:[`button-loading`,`button-loading-align`]},{default:h(()=>[d(o,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0,"button-loading-align":`left`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`,"button-loading":!0,"button-loading-align":`right`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var F=s(N,[[`render`,P]]);function I(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function L(){return{codeJs:`import { 
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
};`}}var R={name:`PageDropdownButtonText`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=I(),{codeJs:t}=L();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function z(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_`,description:`_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_`,props:`button-text`},{default:h(()=>[d(o,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_NUMBER_`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":{desktop:`_A_DROPDOWN_BUTTON_TEXT_DESKTOP_`,mobile:`_A_DROPDOWN_BUTTON_TEXT_MOBILE_`}},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var B=s(R,[[`render`,z]]);function V(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  caret-icon="EjectFill"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  caret-icon="Gear"
></a-dropdown>`}}function H(){return{codeJs:`import { 
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
};`}}var U={name:`PageDropdownCaretIcon`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=V(),{codeJs:t}=H();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function W(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_CARET_ICON_HEADER_`,description:`_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_`,props:`caret-icon`},{default:h(()=>[d(o,{actions:e.dropdownActions,"caret-icon":`EjectFill`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"caret-icon":`Gear`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var G=s(U,[[`render`,W]]);function K(){return{codeHtml:`<div
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
</div>`}}function q(){return{codeJs:`import {
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
};`}}var J={name:`PageDropdownCloseByButtonInvisibleInViewport`,components:{ADropdown:c,AlohaExample:n,ATranslation:a},setup(){let{codeHtml:e}=K(),{codeJs:t}=q();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_2_`,type:`button`,callback:()=>{}}]}}},Y={style:{"max-height":`14rem`,overflow:`auto`,padding:`1rem`}},X={style:{height:`26rem`}},Z={style:{"margin-top":`6rem`}},Q={style:{"margin-top":`6rem`}};function ne(e,t,n,r,i,a){let o=_(`a-translation`),s=_(`a-dropdown`),c=_(`aloha-example`);return g(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_HEADER_`,description:`_A_DROPDOWN_GROUP_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,props:`is-close-by-button-invisible-in-viewport`},{default:h(()=>[u(`div`,Y,[u(`div`,X,[u(`p`,null,[d(o,{tag:`span`,text:`_A_DROPDOWN_SCROLL_HELP_`})]),u(`div`,Z,[d(s,{actions:e.dropdownActions,"is-close-by-button-invisible-in-viewport":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_TRUE_`},null,8,[`actions`])]),u(`div`,Q,[d(s,{actions:e.dropdownActions,"is-close-by-button-invisible-in-viewport":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_FALSE_`},null,8,[`actions`])])])])]),_:1},8,[`code-html`,`code-js`])}var re=s(J,[[`render`,ne]]);function ie(){return{codeHtml:`<a-dropdown
  :actions="actions"
  button-text="_A_DROPDOWN_EXAMPLE_ACTIONS_"
/>`}}function ae(){return{codeJs:`import {
  ADropdown,
} from "aloha-vue";

export default {
  components: {
    ADropdown,
  },
  setup() {
    const actions = [
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_EDIT_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_DUPLICATE_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_ARCHIVE_",
        disabled: true,
        callback: () => {},
      },
      {
        type: "divider",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_DELETE_",
        class: "a_dropdown__item a_text_danger",
        callback: () => {},
      },
    ];

    return {
      actions,
    };
  },
};`}}var oe={name:`PageDropdownDisabledItems`,components:{AlohaExample:n,ADropdown:c},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t,actions:[{type:`button`,text:`_A_DROPDOWN_EXAMPLE_EDIT_`,callback:()=>{}},{type:`button`,text:`_A_DROPDOWN_EXAMPLE_DUPLICATE_`,callback:()=>{}},{type:`button`,text:`_A_DROPDOWN_EXAMPLE_ARCHIVE_`,disabled:!0,callback:()=>{}},{type:`divider`},{type:`button`,text:`_A_DROPDOWN_EXAMPLE_DELETE_`,class:`a_dropdown__item a_text_danger`,callback:()=>{}}]}}};function se(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_DISABLED_ITEMS_HEADER_`,description:`_A_DROPDOWN_GROUP_DISABLED_ITEMS_DESCRIPTION_`,props:[`actions`]},{default:h(()=>[d(o,{actions:e.actions,"button-text":`_A_DROPDOWN_EXAMPLE_ACTIONS_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var ce=s(oe,[[`render`,se]]);function le(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section', 'subsection']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_"
></a-dropdown>`}}function ue(){return{codeJs:`import {
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
};`}}var de={name:`PageDropdownGroup`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=le(),{codeJs:t}=ue();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_OVERVIEW_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_RECENT_ACTIVITY_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_CREATE_INVOICE_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,subsection:`_A_DROPDOWN_GROUP_INVOICES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_EXPENSE_REPORT_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,subsection:`_A_DROPDOWN_GROUP_REPORTS_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_EMAIL_CAMPAIGN_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_MARKETING_`,subsection:`_A_DROPDOWN_GROUP_CAMPAIGNS_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_INBOX_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_EMAIL_`,subsection:`_A_DROPDOWN_GROUP_MESSAGES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_MEETING_NOTES_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_MEETINGS_`,subsection:`_A_DROPDOWN_GROUP_NOTES_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_FRONTEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,subsection:`_A_DROPDOWN_GROUP_FRONTEND_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_BACKEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,subsection:`_A_DROPDOWN_GROUP_BACKEND_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_DEPLOYMENTS_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_RELEASE_`,subsection:`_A_DROPDOWN_GROUP_PRODUCTION_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_USERS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,subsection:`_A_DROPDOWN_GROUP_TEAM_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_API_TOKENS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,subsection:`_A_DROPDOWN_GROUP_SECURITY_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_APPEARANCE_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_WORKSPACE_`,subsection:`_A_DROPDOWN_GROUP_THEME_`,callback:()=>{}}]}}};function fe(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_DESCRIPTION_`,props:`actions, key-group`},{default:h(()=>[d(o,{actions:e.dropdownActions,"key-group":[`group`,`section`,`subsection`],"button-text":`_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var pe=s(de,[[`render`,fe]]);function me(){return{codeHtml:`<a-one-checkbox
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
></a-dropdown>`}}function he(){return{codeJs:`import {
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
};`}}var ge={name:`PageDropdownGroupHideEmpty`,components:{ADropdown:c,AOneCheckbox:r,AlohaExample:n},setup(){let{codeHtml:e}=me(),{codeJs:t}=he(),n=m(!0),r=m(!0);return{codeHtml:e,codeJs:t,dropdownActions:p(()=>[{text:`_A_DROPDOWN_ACTION_INVOICES_`,type:`button`,group:`_A_DROPDOWN_GROUP_BUSINESS_`,section:`_A_DROPDOWN_GROUP_FINANCE_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_MESSAGES_`,type:`button`,group:`_A_DROPDOWN_GROUP_COMMUNICATION_`,section:`_A_DROPDOWN_GROUP_INBOX_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_FRONTEND_BOARD_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_PROJECTS_`,callback:()=>{},isHidden:!n.value},{text:`_A_DROPDOWN_ACTION_DEPLOYMENTS_`,type:`button`,group:`_A_DROPDOWN_GROUP_DEVELOPMENT_`,section:`_A_DROPDOWN_GROUP_RELEASE_`,callback:()=>{},isHidden:!n.value},{text:`_A_DROPDOWN_ACTION_USERS_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_ACCESS_`,callback:()=>{},isHidden:!r.value},{text:`_A_DROPDOWN_ACTION_SECURITY_`,type:`button`,group:`_A_DROPDOWN_GROUP_SETTINGS_`,section:`_A_DROPDOWN_GROUP_WORKSPACE_`,callback:()=>{},isHidden:!r.value}]),isDevelopmentVisible:n,isSettingsVisible:r}}},_e={class:`a_flex a_align_items_center a_gap_2 a_mb_3 a_flex_wrap`};function ve(e,t,n,r,i,a){let o=_(`a-one-checkbox`),s=_(`a-dropdown`),c=_(`aloha-example`);return g(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_HIDE_EMPTY_DESCRIPTION_`,props:`actions, key-group`},{default:h(()=>[u(`div`,_e,[d(o,{modelValue:e.isDevelopmentVisible,"onUpdate:modelValue":t[0]||=t=>e.isDevelopmentVisible=t,"is-width-auto":!0,label:`_A_DROPDOWN_BUTTON_TEXT_TOGGLE_DEVELOPMENT_`},null,8,[`modelValue`]),d(o,{modelValue:e.isSettingsVisible,"onUpdate:modelValue":t[1]||=t=>e.isSettingsVisible=t,"is-width-auto":!0,label:`_A_DROPDOWN_BUTTON_TEXT_TOGGLE_SETTINGS_`},null,8,[`modelValue`])]),d(s,{actions:e.dropdownActions,"key-group":[`group`,`section`],"button-text":`_A_DROPDOWN_BUTTON_TEXT_HIDE_EMPTY_GROUPS_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var ye=s(ge,[[`render`,ve]]);function be(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function xe(){return{codeJs:`import {
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
};`}}var Se={name:`PageDropdownGroupSort`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=be(),{codeJs:t}=xe();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_DEPLOY_NOW_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_RESTART_WORKER_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_ARCHIVE_REPORT_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_LOW_`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_SYNC_CONTACTS_`,type:`button`,priority:`_A_DROPDOWN_GROUP_PRIORITY_NORMAL_`,callback:()=>{}}],groupLabelCallback:({group:e})=>({_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_CRITICAL_`,_A_DROPDOWN_GROUP_PRIORITY_LOW_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_LOW_`,_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_MEDIUM_`,_A_DROPDOWN_GROUP_PRIORITY_NORMAL_:`_A_DROPDOWN_GROUP_LABEL_PRIORITY_NORMAL_`})[e]||e}}};function Ce(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_GROUPS_SORT_HEADER_`,description:`_A_DROPDOWN_GROUP_GROUPS_SORT_DESCRIPTION_`,props:`key-group, key-group-label-callback, sort-order-group`},{default:h(()=>[d(o,{actions:e.dropdownActions,"key-group-label-callback":e.groupLabelCallback,"button-text":`_A_DROPDOWN_BUTTON_TEXT_ASC_GROUPS_`,"key-group":`priority`,"sort-order-group":`asc`},null,8,[`actions`,`key-group-label-callback`]),d(o,{class:`a_ml_4`,actions:e.dropdownActions,"key-group-label-callback":e.groupLabelCallback,"button-text":`_A_DROPDOWN_BUTTON_TEXT_DESC_GROUPS_`,"key-group":`priority`,"sort-order-group":`desc`},null,8,[`actions`,`key-group-label-callback`])]),_:1},8,[`code-html`,`code-js`])}var we=s(Se,[[`render`,Ce]]);function Te(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>`}}function Ee(){return{codeJs:`import { 
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
};`}}var De={name:`PageDropdownHasCaret`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Oe(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_HAS_CARET_HEADER_`,description:`_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_`,props:`has-caret`},{default:h(()=>[d(o,{actions:e.dropdownActions,"has-caret":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"has-caret":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var ke=s(De,[[`render`,Oe]]);function Ae(){return{codeHtml:`<a-dropdown
  :actions="actions"
  button-text="_A_DROPDOWN_EXAMPLE_EXPORT_SHARE_"
/>`}}function je(){return{codeJs:`import {
  ADropdown,
} from "aloha-vue";

export default {
  components: {
    ADropdown,
  },
  setup() {
    const actions = [
      {
        type: "header",
        text: "_A_DROPDOWN_EXAMPLE_EXPORT_",
      },
      {
        type: "button",
        text: "PDF",
        callback: () => {},
      },
      {
        type: "button",
        text: "CSV",
        callback: () => {},
      },
      {
        type: "header",
        text: "_A_DROPDOWN_EXAMPLE_SHARE_",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_EMAIL_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_COPY_LINK_",
        callback: () => {},
      },
      {
        type: "divider",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_SETTINGS_",
        callback: () => {},
      },
    ];

    return {
      actions,
    };
  },
};`}}var Me={name:`PageDropdownHeader`,components:{AlohaExample:n,ADropdown:c},setup(){let{codeHtml:e}=Ae(),{codeJs:t}=je();return{codeHtml:e,codeJs:t,actions:[{type:`header`,text:`_A_DROPDOWN_EXAMPLE_EXPORT_`},{type:`button`,text:`PDF`,callback:()=>{}},{type:`button`,text:`CSV`,callback:()=>{}},{type:`header`,text:`_A_DROPDOWN_EXAMPLE_SHARE_`},{type:`button`,text:`_A_DROPDOWN_EXAMPLE_EMAIL_`,callback:()=>{}},{type:`button`,text:`_A_DROPDOWN_EXAMPLE_COPY_LINK_`,callback:()=>{}},{type:`divider`},{type:`button`,text:`_A_DROPDOWN_EXAMPLE_SETTINGS_`,callback:()=>{}}]}}};function Ne(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_HEADER_HEADER_`,description:`_A_DROPDOWN_GROUP_HEADER_DESCRIPTION_`,props:[`actions`]},{default:h(()=>[d(o,{actions:e.actions,"button-text":`_A_DROPDOWN_EXAMPLE_EXPORT_SHARE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Pe=s(Me,[[`render`,Ne]]);function Fe(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_"
></a-dropdown>`}}function Ie(){return{codeJs:`import { 
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
};`}}var Le={name:`PageDropdownInBody`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=Fe(),{codeJs:t}=Ie();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Re(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_IN_BODY_HEADER_`,description:`_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_`,props:`in-body`},{default:h(()=>[d(o,{actions:e.dropdownActions,"in-body":!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"in-body":!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var ze=s(Le,[[`render`,Re]]);function Be(){return{codeHtml:`<a-dropdown
  button-text="_A_DROPDOWN_EXAMPLE_FILTER_"
  :is-close-by-click-inside="false"
>
  <template v-slot:dropdown>
    <li class="a_p_3">
      <label
        class="a_d_block a_mb_2"
        for="dropdown_own_search"
      >
        <a-translation text="_A_DROPDOWN_EXAMPLE_SEARCH_" />
      </label>
      <input
        id="dropdown_own_search"
        class="a_form_control a_mb_2"
        type="search"
      >
      <a-button
        class="a_btn a_btn_primary a_btn_small"
        text="_A_DROPDOWN_EXAMPLE_APPLY_"
      />
    </li>
  </template>
</a-dropdown>`}}function Ve(){return{codeJs:`import {
  AButton,
  ADropdown,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADropdown,
    ATranslation,
  },
};`}}var He={name:`PageDropdownOwnContent`,components:{AlohaExample:n,AButton:o,ADropdown:c,ATranslation:a},setup(){let{codeHtml:e}=Be(),{codeJs:t}=Ve();return{codeHtml:e,codeJs:t}}},Ue={class:`a_p_3`},We={class:`a_d_block a_mb_2`,for:`dropdown_own_search`};function Ge(e,t,n,r,i,a){let o=_(`a-translation`),s=_(`a-button`),c=_(`a-dropdown`),l=_(`aloha-example`);return g(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_OWN_CONTENT_HEADER_`,description:`_A_DROPDOWN_GROUP_OWN_CONTENT_DESCRIPTION_`,props:[`elements-for-arrows`]},{default:h(()=>[d(c,{"button-text":`_A_DROPDOWN_EXAMPLE_FILTER_`,"is-close-by-click-inside":!1},{dropdown:h(()=>[u(`li`,Ue,[u(`label`,We,[d(o,{text:`_A_DROPDOWN_EXAMPLE_SEARCH_`})]),t[0]||=u(`input`,{class:`a_form_control a_mb_2`,id:`dropdown_own_search`,type:`search`},null,-1),d(s,{class:`a_btn a_btn_primary a_btn_small`,text:`_A_DROPDOWN_EXAMPLE_APPLY_`})])]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Ke=s(He,[[`render`,Ge]]);function qe(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :readonly="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :readonly="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_"
></a-dropdown>`}}function Je(){return{codeJs:`import { 
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
};`}}var $={name:`PageDropdownReadonly`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=qe(),{codeJs:t}=Je();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function Ye(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_READONLY_HEADER_`,description:`_A_DROPDOWN_GROUP_READONLY_DESCRIPTION_`,props:`has-caret`},{default:h(()=>[d(o,{actions:e.dropdownActions,readonly:!0,"button-text":`_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_`},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,readonly:!1,"button-text":`_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_`},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Xe=s($,[[`render`,Ye]]);function Ze(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function Qe(){return{codeJs:`import { 
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
};`}}var $e={name:`PageDropdownTriggers`,components:{ADropdown:c,AlohaExample:n},setup(){let{codeHtml:e}=Ze(),{codeJs:t}=Qe();return{codeHtml:e,codeJs:t,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{}},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{}}]}}};function et(e,t,n,r,i,a){let o=_(`a-dropdown`),s=_(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DROPDOWN_GROUP_TRIGGERS_HEADER_`,description:`_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_`,props:`triggers`},{default:h(()=>[d(o,{actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_`,triggers:[`click`]},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_`,triggers:[`focus`]},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_HOVER_`,triggers:[`hover`]},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_`,triggers:[`click`,`focus`]},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_HOVER_`,triggers:[`click`,`hover`]},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_HOVER_`,triggers:[`focus`,`hover`]},null,8,[`actions`]),d(o,{class:`a_ml_2`,actions:e.dropdownActions,"button-text":`_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_HOVER_`,triggers:[`click`,`focus`,`hover`]},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var tt=s($e,[[`render`,et]]);function nt(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function rt(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function it(){let e=p(()=>i({placeholder:`_A_DROPDOWN_COMPONENT_NAME_`}));return{pageTitle:p(()=>`ADropdown${e.value?` (${e.value})`:``}`)}}function at(){return{dataProps:[{name:`actions`,description:`_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-attributes`,description:`_A_DROPDOWN_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`button-class`,description:`_A_DROPDOWN_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`button-icon-attributes`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`button-icon-class`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-icon-left`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-icon-right`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-icon-tag`,description:`_A_DROPDOWN_PROPS_BUTTON_ICON_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-is-title-html`,description:`_A_DROPDOWN_PROPS_BUTTON_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-loading`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`button-loading-align`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_ALIGN_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`button-loading-class`,description:`_A_DROPDOWN_PROPS_BUTTON_LOADING_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_spinner_small`,required:!1},{name:`button-prevent`,description:`_A_DROPDOWN_PROPS_BUTTON_PREVENT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-stop`,description:`_A_DROPDOWN_PROPS_BUTTON_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-tag`,description:`_A_DROPDOWN_PROPS_BUTTON_TAG_DESCRIPTION_`,type:`String`,default:`button`,required:!1},{name:`button-text`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-text-aria-hidden`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_ARIA_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`button-text-class`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-text-screen-reader`,description:`_A_DROPDOWN_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-title`,description:`_A_DROPDOWN_PROPS_BUTTON_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`button-title-placement`,description:`_A_DROPDOWN_PROPS_BUTTON_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`caret-icon`,description:`_A_DROPDOWN_PROPS_CARET_ICON_DESCRIPTION_`,type:`String`,default:`ChevronDown`,required:!1},{name:`class`,description:`_A_DROPDOWN_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dropdown-attributes`,description:`_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`dropdown-class`,description:`_A_DROPDOWN_PROPS_DROPDOWN_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`dropdown-render-default`,description:`_A_DROPDOWN_PROPS_DROPDOWN_RENDER_DEFAULT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dropdown-tag`,description:`_A_DROPDOWN_PROPS_DROPDOWN_TAG_DESCRIPTION_`,type:`String`,default:`ul`,required:!1},{name:`elements-for-arrows`,description:`_A_DROPDOWN_PROPS_ELEMENTS_FOR_ARROWS_DESCRIPTION_`,type:`String`,default:l,required:!1},{name:`extra`,description:`_A_DROPDOWN_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`key-group`,description:`_A_DROPDOWN_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:void 0,required:!1},{name:`key-group-label-callback`,description:`_A_DROPDOWN_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`floating-flip`,description:`_A_DROPDOWN_PROPS_FLOATING_FLIP_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`floating-shift`,description:`_A_DROPDOWN_PROPS_FLOATING_SHIFT_DESCRIPTION_`,type:`Object`,default:`() => ({ use: true, crossAxis: true, padding: 20 })`,required:!1},{name:`has-caret`,description:`_A_DROPDOWN_PROPS_HAS_CARET_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`id`,description:`_A_DROPDOWN_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_dropdown_btn_")`,required:!1},{name:`in-body`,description:`_A_DROPDOWN_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-close-by-click-inside`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_INSIDE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-click-outside`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-button-invisible-in-viewport`,description:`_A_DROPDOWN_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide-without-action-and-slot`,description:`_A_DROPDOWN_PROPS_IS_HIDE_WITHOUT_ACTION_AND_SLOT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-list-width-same-with-button`,description:`_A_DROPDOWN_PROPS_IS_LIST_WIDTH_SAME_WITH_BUTTON_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`lock-arrows-navigation`,description:`_A_DROPDOWN_PROPS_LOCK_ARROWS_NAVIGATION_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`lock-tab-navigation`,description:`_A_DROPDOWN_PROPS_LOCK_TAB_NAVIGATION_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`menu-width`,description:`_A_DROPDOWN_PROPS_MENU_WIDTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`persist`,description:`_A_DROPDOWN_PROPS_PERSIST_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`placement`,description:`_A_DROPDOWN_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom-start`,required:!1},{name:`popper-container-id`,description:`_A_DROPDOWN_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_container`,required:!1},{name:`readonly`,description:`_A_DROPDOWN_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`sort-order-group`,description:`_A_DROPDOWN_PROPS_SORT_ORDER_GROUP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`triggers`,description:`_A_DROPDOWN_PROPS_TRIGGERS_DESCRIPTION_`,type:`Array`,default:`() => ["click"]`,required:!1},{name:`use-escape`,description:`_A_DROPDOWN_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-rem`,description:`_A_DROPDOWN_PROPS_USE_REM_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1}]}}function ot(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var st={name:`PageDropdown`,components:{PageDropdownOwnContent:Ke,PageDropdownHeader:Pe,PageDropdownDisabledItems:ce,AlohaPage:e,AlohaTableProps:t,ATranslation:a,PageDropdownBasic:S,PageDropdownButtonClass:D,PageDropdownButtonIcons:ee,PageDropdownButtonLoading:F,PageDropdownButtonText:B,PageDropdownCaretIcon:G,PageDropdownCloseByButtonInvisibleInViewport:re,PageDropdownGroup:pe,PageDropdownGroupHideEmpty:ye,PageDropdownGroupSort:we,PageDropdownHasCaret:ke,PageDropdownInBody:ze,PageDropdownReadonly:Xe,PageDropdownTriggers:tt},setup(){let{pageTitle:e}=it(),{dataProps:t}=at(),{dataSlots:n}=ot(),{dataEvents:r}=nt(),{dataExposes:i}=rt();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e,dropdownActions:[{text:`_A_DROPDOWN_ACTION_0_`,type:`button`,callback:()=>{},isHidden:!0},{text:`_A_DROPDOWN_ACTION_1_`,type:`button`,callback:()=>{},disabled:!0},{type:`divider`},{type:`divider`},{text:`_A_DROPDOWN_ACTION_2_`,type:`button`,callback:()=>{}},{type:`link`,text:`_A_DROPDOWN_ACTION_LINK_1_`,href:`#`},{type:`divider`}]}}};function ct(e,t,n,r,i,a){let o=_(`a-translation`),s=_(`page-dropdown-basic`),c=_(`page-dropdown-button-text`),l=_(`page-dropdown-button-class`),u=_(`page-dropdown-button-icons`),p=_(`page-dropdown-button-loading`),m=_(`page-dropdown-header`),v=_(`page-dropdown-disabled-items`),y=_(`page-dropdown-group`),b=_(`page-dropdown-group-hide-empty`),x=_(`page-dropdown-group-sort`),S=_(`page-dropdown-own-content`),C=_(`page-dropdown-in-body`),w=_(`page-dropdown-close-by-button-invisible-in-viewport`),T=_(`page-dropdown-triggers`),E=_(`page-dropdown-caret-icon`),D=_(`page-dropdown-has-caret`),O=_(`page-dropdown-readonly`),k=_(`aloha-table-props`),A=_(`aloha-table-css-vars`),j=_(`aloha-page`);return g(),f(j,{"page-title":e.pageTitle},{body:h(()=>[d(o,{tag:`p`,html:`_A_DROPDOWN_COMPONENT_DESCRIPTION_`}),d(o,{tag:`p`,html:`_A_DROPDOWN_A11Y_DESCRIPTION_`}),d(s),d(c),d(l),d(u),d(p),d(m),d(v),d(y),d(b),d(x),d(S),d(C),d(w),d(T),d(E),d(D),d(O),d(k,{data:e.dataProps},null,8,[`data`]),d(A,{files:`utils/dropdown`})]),_:1},8,[`page-title`])}var lt=s(st,[[`render`,ct]]);export{lt as default};