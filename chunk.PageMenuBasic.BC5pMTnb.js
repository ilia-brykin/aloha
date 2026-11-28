import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{t as n}from"./chunk.AlohaExample.Bx3NX4bX.js";import{L as r,S as i,hn as ee,mn as a,t as o,x as s}from"./bundle.index.LlT2KVEy.js";import{Bt as c,Ht as l,Vt as u,an as d,gn as f,ln as p,pn as m,qt as h}from"./chunk.vendor.SEynj6EJ.js";import{$ as g}from"./chunk.vendor-lodash.BlbRpQpv.js";function _(){return{codeHtml:`<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_nested_toggle' }"
  menu-id="docs_menu_nested"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_nested"
    key-children="children"
  />
</div>`}}function v(){return{codeJs:`import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const menuItems = [
      {
        id: "components",
        label: "Components",
        icon: "MenuAppFill",
        children: [
          {
            id: "accordion",
            label: "Accordion",
            to: { name: "PageAccordion" },
          },
          {
            id: "forms",
            label: "Form controls",
            children: [
              {
                id: "input",
                label: "Input",
                to: { name: "PageInput" },
              },
              {
                id: "select",
                label: "Select",
                to: { name: "PageSelect" },
              },
            ],
          },
        ],
      },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "button", label: "Button", icon: "EjectFill", to: { name: "PageButton" } },
      { id: "collapse", label: "Collapse", icon: "ArrowsCollapse", to: { name: "PageCollapse" } },
      { id: "dropdown", label: "Dropdown", icon: "MenuDown", to: { name: "PageDropdown" } },
      { id: "link", label: "Link", icon: "BoxArrowUpRight", to: { name: "PageLink" } },
      { id: "list", label: "List", icon: "ListUl", to: { name: "PageList" } },
      { id: "modal", label: "Modal", icon: "Window", to: { name: "PageModal" } },
      { id: "tabs", label: "Tabs", icon: "SegmentedNav", to: { name: "PageTabs" } },
      { id: "translation", label: "Translation", icon: "Translate", to: { name: "PageTranslation" } },
    ];

    return {
      menuItems,
    };
  },
};`}}var y={name:`PageMenuBasicExample`,components:{AlohaExample:n,AMenu:s,AMenuButtonToggle:i},setup(){let{codeHtml:e}=_(),{codeJs:t}=v();return{codeHtml:e,codeJs:t,menuItems:[{id:`components`,label:`Components`,icon:`MenuAppFill`,children:[{id:`accordion`,label:`Accordion`,to:{name:`PageAccordion`}},{id:`forms`,label:`Form controls`,children:[{id:`input`,label:`Input`,to:{name:`PageInput`}},{id:`select`,label:`Select`,to:{name:`PageSelect`}}]}]},{id:`alert`,label:`Alert`,icon:`ExclamationTriangle`,to:{name:`PageAlert`}},{id:`button`,label:`Button`,icon:`EjectFill`,to:{name:`PageButton`}},{id:`collapse`,label:`Collapse`,icon:`ArrowsCollapse`,to:{name:`PageCollapse`}},{id:`dropdown`,label:`Dropdown`,icon:`MenuDown`,to:{name:`PageDropdown`}},{id:`link`,label:`Link`,icon:`BoxArrowUpRight`,to:{name:`PageLink`}},{id:`list`,label:`List`,icon:`ListUl`,to:{name:`PageList`}},{id:`modal`,label:`Modal`,icon:`Window`,to:{name:`PageModal`}},{id:`tabs`,label:`Tabs`,icon:`SegmentedNav`,to:{name:`PageTabs`}},{id:`translation`,label:`Translation`,icon:`Translate`,to:{name:`PageTranslation`}}]}}},b={style:{height:`24rem`,overflow:`hidden`}};function x(e,t,n,r,i,ee){let a=p(`a-menu-button-toggle`),o=p(`a-menu`),s=p(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_NESTED_HEADER_`,description:`_A_PAGE_MENU_NESTED_DESCRIPTION_`,props:`is-inline, data, key-children`},{default:m(()=>[h(a,{class:`a_btn a_btn_secondary a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_nested_toggle`},"menu-id":`docs_menu_nested`}),u(`div`,b,[h(o,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_nested`,"key-children":`children`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var S=o(y,[[`render`,x]]);function C(){return{codeHtml:`<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_breadcrumbs_toggle' }"
  menu-id="docs_menu_breadcrumbs"
/>
<a-switch
  v-model="showCountChildren"
  label="Show submenu item counts"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_breadcrumbs"
    key-children="children"
    :is-breadcrumbs-truncated="true"
    :show-count-children="showCountChildren"
  />
</div>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AMenu,
  AMenuButtonToggle,
  ASwitch,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
    ASwitch,
  },
  setup() {
    const showCountChildren = ref(true);

    const menuItems = [
      {
        id: "components",
        label: "Components and reusable interface patterns",
        icon: "MenuAppFill",
        children: [
          {
            id: "forms",
            label: "Form controls and data entry components",
            children: [
              {
                id: "text",
                label: "Text fields and numeric input controls",
                children: [
                  { id: "input", label: "Input", to: { name: "PageInput" } },
                  { id: "input-number", label: "Input number", to: { name: "PageInputNumber" } },
                ],
              },
              { id: "select", label: "Select", to: { name: "PageSelect" } },
            ],
          },
          { id: "button", label: "Button", to: { name: "PageButton" } },
        ],
      },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
    ];

    return {
      menuItems,
      showCountChildren,
    };
  },
};`}}var T={name:`PageMenuBreadcrumbs`,components:{AlohaExample:n,AMenu:s,AMenuButtonToggle:i,ASwitch:r},setup(){let e=f(!0),{codeHtml:t}=C(),{codeJs:n}=w();return{codeHtml:t,codeJs:n,menuItems:[{id:`components`,label:`Components and reusable interface patterns`,icon:`MenuAppFill`,children:[{id:`forms`,label:`Form controls and data entry components`,children:[{id:`text`,label:`Text fields and numeric input controls`,children:[{id:`input`,label:`Input`,to:{name:`PageInput`}},{id:`input-number`,label:`Input number`,to:{name:`PageInputNumber`}}]},{id:`select`,label:`Select`,to:{name:`PageSelect`}}]},{id:`button`,label:`Button`,to:{name:`PageButton`}}]},{id:`alert`,label:`Alert`,icon:`ExclamationTriangle`,to:{name:`PageAlert`}}],showCountChildren:e}}},E={style:{height:`24rem`,overflow:`hidden`}};function D(e,t,n,r,i,ee){let a=p(`a-menu-button-toggle`),o=p(`a-switch`),s=p(`a-menu`),c=p(`aloha-example`);return d(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_BREADCRUMBS_HEADER_`,description:`_A_PAGE_MENU_BREADCRUMBS_DESCRIPTION_`,props:`is-breadcrumbs-truncated, show-count-children`},{default:m(()=>[h(a,{class:`a_btn a_btn_secondary a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_breadcrumbs_toggle`},"menu-id":`docs_menu_breadcrumbs`}),h(o,{class:`a_mb_2`,modelValue:e.showCountChildren,"onUpdate:modelValue":t[0]||=t=>e.showCountChildren=t,label:`_A_PAGE_MENU_SHOW_COUNTS_`},null,8,[`modelValue`]),u(`div`,E,[h(s,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_breadcrumbs`,"key-children":`children`,"is-breadcrumbs-truncated":!0,"show-count-children":e.showCountChildren},null,8,[`data`,`show-count-children`])])]),_:1},8,[`code-html`,`code-js`])}var O=o(T,[[`render`,D]]);function k(){return{codeHtml:`<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_keys_toggle' }"
  menu-id="docs_menu_keys"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_keys"
    key-id="code"
    key-label="title"
    key-icon="symbol"
    key-group="section"
    key-children="items"
  />
</div>`}}function A(){return{codeJs:`import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const menuItems = [
      {
        code: "forms",
        title: "Form controls",
        symbol: "FileEarmarkText",
        section: "Components",
        items: [
          { code: "input", title: "Input", to: { name: "PageInput" } },
          { code: "select", title: "Select", to: { name: "PageSelect" } },
          { code: "checkbox", title: "Checkbox", to: { name: "PageCheckbox" } },
        ],
      },
      {
        code: "navigation",
        title: "Navigation",
        symbol: "MenuAppFill",
        section: "Components",
        items: [
          { code: "tabs", title: "Tabs", to: { name: "PageTabs" } },
          { code: "link", title: "Link", to: { name: "PageLink" } },
        ],
      },
      { code: "alert", title: "Alert", symbol: "ExclamationTriangle", section: "Feedback", to: { name: "PageAlert" } },
      { code: "modal", title: "Modal", symbol: "Window", section: "Feedback", to: { name: "PageModal" } },
    ];

    return {
      menuItems,
    };
  },
};`}}var j={name:`PageMenuCustomKeys`,components:{AlohaExample:n,AMenu:s,AMenuButtonToggle:i},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t,menuItems:[{code:`forms`,title:`Form controls`,symbol:`FileEarmarkText`,section:`Components`,items:[{code:`input`,title:`Input`,to:{name:`PageInput`}},{code:`select`,title:`Select`,to:{name:`PageSelect`}},{code:`checkbox`,title:`Checkbox`,to:{name:`PageCheckbox`}}]},{code:`navigation`,title:`Navigation`,symbol:`MenuAppFill`,section:`Components`,items:[{code:`tabs`,title:`Tabs`,to:{name:`PageTabs`}},{code:`link`,title:`Link`,to:{name:`PageLink`}}]},{code:`alert`,title:`Alert`,symbol:`ExclamationTriangle`,section:`Feedback`,to:{name:`PageAlert`}},{code:`modal`,title:`Modal`,symbol:`Window`,section:`Feedback`,to:{name:`PageModal`}}]}}},M={style:{height:`24rem`,overflow:`hidden`}};function N(e,t,n,r,i,ee){let a=p(`a-menu-button-toggle`),o=p(`a-menu`),s=p(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_CUSTOM_KEYS_HEADER_`,description:`_A_PAGE_MENU_CUSTOM_KEYS_DESCRIPTION_`,props:`key-id, key-label, key-icon, key-group, key-children`},{default:m(()=>[h(a,{class:`a_btn a_btn_secondary a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_keys_toggle`},"menu-id":`docs_menu_keys`}),u(`div`,M,[h(o,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_keys`,"key-id":`code`,"key-label":`title`,"key-icon":`symbol`,"key-group":`section`,"key-children":`items`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var P=o(j,[[`render`,N]]);function F(){return{codeHtml:`<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_groups_toggle' }"
  menu-id="docs_menu_groups"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_groups"
    :has-search="false"
  />
</div>`}}function I(){return{codeJs:`import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const menuItems = [
      { id: "input", group: "Forms", label: "Input", icon: "FileEarmarkText", to: { name: "PageInput" } },
      { id: "select", group: "Forms", label: "Select", icon: "ListUl", to: { name: "PageSelect" } },
      { id: "checkbox", group: "Forms", label: "Checkbox", icon: "CheckLg", to: { name: "PageCheckbox" } },
      { id: "radio", group: "Forms", label: "Radio", icon: "CheckLg", to: { name: "PageRadio" } },
      { id: "alert", group: "Feedback", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "loading", group: "Feedback", label: "Loading", icon: "HourglassSplit", to: { name: "PageLoading" } },
      {
        id: "notification",
        group: "Feedback",
        label: "Notification (disabled)",
        icon: "Bell",
        to: { name: "PageNotification" },
        disabled: true,
      },
      { id: "modal", group: "Overlays", label: "Modal", icon: "Window", to: { name: "PageModal" } },
      { id: "dropdown", group: "Overlays", label: "Dropdown", icon: "MenuDown", to: { name: "PageDropdown" } },
    ];

    return {
      menuItems,
    };
  },
};`}}var L={name:`PageMenuGroups`,components:{AlohaExample:n,AMenu:s,AMenuButtonToggle:i},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t,menuItems:[{id:`input`,group:`Forms`,label:`Input`,icon:`FileEarmarkText`,to:{name:`PageInput`}},{id:`select`,group:`Forms`,label:`Select`,icon:`ListUl`,to:{name:`PageSelect`}},{id:`checkbox`,group:`Forms`,label:`Checkbox`,icon:`CheckLg`,to:{name:`PageCheckbox`}},{id:`radio`,group:`Forms`,label:`Radio`,icon:`CheckLg`,to:{name:`PageRadio`}},{id:`alert`,group:`Feedback`,label:`Alert`,icon:`ExclamationTriangle`,to:{name:`PageAlert`}},{id:`loading`,group:`Feedback`,label:`Loading`,icon:`HourglassSplit`,to:{name:`PageLoading`}},{id:`notification`,group:`Feedback`,label:`Notification (disabled)`,icon:`Bell`,to:{name:`PageNotification`},disabled:!0},{id:`modal`,group:`Overlays`,label:`Modal`,icon:`Window`,to:{name:`PageModal`}},{id:`dropdown`,group:`Overlays`,label:`Dropdown`,icon:`MenuDown`,to:{name:`PageDropdown`}}]}}},R={style:{height:`24rem`,overflow:`hidden`}};function z(e,t,n,r,i,ee){let a=p(`a-menu-button-toggle`),o=p(`a-menu`),s=p(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_GROUPS_HEADER_`,description:`_A_PAGE_MENU_GROUPS_DESCRIPTION_`,props:`is-inline, data, key-group, has-search`},{default:m(()=>[h(a,{class:`a_btn a_btn_secondary a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_groups_toggle`},"menu-id":`docs_menu_groups`}),u(`div`,R,[h(o,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_groups`,"has-search":!1},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var B=o(L,[[`render`,z]]);function V(){return{codeHtml:`<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_only_mobile_toggle' }"
  :only-mobile="true"
  menu-id="docs_menu_only_mobile"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :has-search="false"
    :is-inline="true"
    :only-mobile="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_only_mobile"
  />
</div>`}}function H(){return{codeJs:`import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const menuItems = [
      { id: "input", label: "Input", icon: "FileEarmarkText", to: { name: "PageInput" } },
      { id: "select", label: "Select", icon: "ListUl", to: { name: "PageSelect" } },
      { id: "checkbox", label: "Checkbox", icon: "CheckLg", to: { name: "PageCheckbox" } },
      { id: "radio", label: "Radio", icon: "CheckLg", to: { name: "PageRadio" } },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "modal", label: "Modal", icon: "Window", to: { name: "PageModal" } },
    ];

    return {
      menuItems,
    };
  },
};`}}var U={name:`PageMenuOnlyMobile`,components:{AlohaExample:n,AMenu:s,AMenuButtonToggle:i},setup(){let{codeHtml:e}=V(),{codeJs:t}=H();return{codeHtml:e,codeJs:t,menuItems:[{id:`input`,label:`Input`,icon:`FileEarmarkText`,to:{name:`PageInput`}},{id:`select`,label:`Select`,icon:`ListUl`,to:{name:`PageSelect`}},{id:`checkbox`,label:`Checkbox`,icon:`CheckLg`,to:{name:`PageCheckbox`}},{id:`radio`,label:`Radio`,icon:`CheckLg`,to:{name:`PageRadio`}},{id:`alert`,label:`Alert`,icon:`ExclamationTriangle`,to:{name:`PageAlert`}},{id:`modal`,label:`Modal`,icon:`Window`,to:{name:`PageModal`}}]}}},te={style:{height:`24rem`,overflow:`hidden`}};function W(e,t,n,r,i,ee){let a=p(`a-menu-button-toggle`),o=p(`a-menu`),s=p(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_ONLY_MOBILE_HEADER_`,description:`_A_PAGE_MENU_ONLY_MOBILE_DESCRIPTION_`,props:`only-mobile`},{default:m(()=>[h(a,{class:`a_btn a_btn_secondary a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_only_mobile_toggle`},"only-mobile":!0,"menu-id":`docs_menu_only_mobile`}),u(`div`,te,[h(o,{"can-change-body-class":!1,data:e.menuItems,"has-search":!1,"is-inline":!0,"only-mobile":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_only_mobile`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var G=o(U,[[`render`,W]]);function K(){return{codeHtml:`<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_dom_toggle' }"
  menu-id="docs_menu_dom"
/>
<a-switch
  v-model="isTranslated"
  label="Translate DOM to German"
  @update:model-value="translateMenu"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :search-in-dom="true"
    :use-backdrop-mobile="false"
    key-children="children"
    menu-id="docs_menu_dom"
  />
</div>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AMenu,
  AMenuButtonToggle,
  ASwitch,
} from "aloha-vue";
import {
  forEach,
} from "lodash-es";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
    ASwitch,
  },
  setup() {
    const isTranslated = ref(false);

    const menuItems = [
      {
        id: "forms",
        label: "Forms",
        children: [
          { id: "input", label: "Input", to: { name: "PageInput" } },
          { id: "select", label: "Select", to: { name: "PageSelect" } },
          { id: "checkbox", label: "Checkbox", to: { name: "PageCheckbox" }, disabled: true },
        ],
      },
      { id: "button", label: "Button", to: { name: "PageButton" } },
      { id: "alert", label: "Alert", to: { name: "PageAlert" } },
    ];

    const translateMenu = value => {
      forEach({
        forms: ["Forms", "Formulare"],
        input: ["Input", "Eingabe"],
        select: ["Select", "Auswahl"],
        checkbox: ["Checkbox", "Kontrollkästchen"],
        button: ["Button", "Schaltfläche"],
        alert: ["Alert", "Hinweis"],
      }, (labels, id) => {
        const LINK = document.getElementById(\`docs_menu_dom_\${ id }_link\`);
        LINK.querySelector(".a_menu__link__text").textContent = labels[value ? 1 : 0];
      });
    };

    return {
      isTranslated,
      menuItems,
      translateMenu,
    };
  },
};`}}var J={name:`PageMenuSearchInDom`,components:{AlohaExample:n,AMenu:s,AMenuButtonToggle:i,ASwitch:r},setup(){let e=f(!1),{codeHtml:t}=K(),{codeJs:n}=q();return{codeHtml:t,codeJs:n,isTranslated:e,menuItems:[{id:`forms`,label:`Forms`,children:[{id:`input`,label:`Input`,to:{name:`PageInput`}},{id:`select`,label:`Select`,to:{name:`PageSelect`}},{id:`checkbox`,label:`Checkbox`,to:{name:`PageCheckbox`},disabled:!0}]},{id:`button`,label:`Button`,to:{name:`PageButton`}},{id:`alert`,label:`Alert`,to:{name:`PageAlert`}}],translateMenu:e=>{g({forms:[`Forms`,`Formulare`],input:[`Input`,`Eingabe`],select:[`Select`,`Auswahl`],checkbox:[`Checkbox`,`Kontrollkästchen`],button:[`Button`,`Schaltfläche`],alert:[`Alert`,`Hinweis`]},(t,n)=>{let r=document.getElementById(`docs_menu_dom_${n}_link`);r.querySelector(`.a_menu__link__text`).textContent=t[+!!e]})}}}},Y={class:`a_mb_2`},X={style:{height:`24rem`,overflow:`hidden`}};function Z(e,t,n,r,i,ee){let a=p(`a-menu-button-toggle`),o=p(`a-switch`),s=p(`a-menu`),c=p(`aloha-example`);return d(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_DOM_HEADER_`,description:`_A_PAGE_MENU_DOM_DESCRIPTION_`,props:`search-in-dom, is-inline, data, key-children`},{default:m(()=>[u(`div`,Y,[h(a,{class:`a_btn a_btn_secondary a_me_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_dom_toggle`},"menu-id":`docs_menu_dom`}),h(o,{modelValue:e.isTranslated,"onUpdate:modelValue":[t[0]||=t=>e.isTranslated=t,e.translateMenu],label:`_A_PAGE_MENU_DOM_TRANSLATE_`},null,8,[`modelValue`,`onUpdate:modelValue`])]),u(`div`,X,[h(s,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"search-in-dom":!0,"use-backdrop-mobile":!1,"key-children":`children`,"menu-id":`docs_menu_dom`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var Q=o(J,[[`render`,Z]]);function ne(){return{codeHtml:`<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_split_toggle' }"
  menu-id="docs_menu_split"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_split"
    key-children="children"
  />
</div>`}}function re(){return{codeJs:`import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    // to + children: the link opens the page, the toggle on the right the children
    const menuItems = [
      {
        id: "forms",
        label: "Forms",
        icon: "FileEarmarkText",
        to: { name: "PageForm" },
        children: [
          { id: "input", label: "Input", to: { name: "PageInput" } },
          { id: "select", label: "Select", to: { name: "PageSelect" } },
          {
            id: "choice",
            label: "Choice",
            to: { name: "PageCheckbox" },
            children: [
              { id: "checkbox", label: "Checkbox", to: { name: "PageCheckbox" } },
              { id: "radio", label: "Radio", to: { name: "PageRadio" } },
            ],
          },
        ],
      },
      {
        id: "overlays",
        label: "Overlays",
        icon: "Window",
        children: [
          { id: "modal", label: "Modal", to: { name: "PageModal" } },
          { id: "popover", label: "Popover", to: { name: "PagePopover" } },
        ],
      },
      { id: "button", label: "Button", icon: "CheckLg", to: { name: "PageButton" } },
    ];

    return {
      menuItems,
    };
  },
};`}}var ie={name:`PageMenuSplit`,components:{AlohaExample:n,AMenu:s,AMenuButtonToggle:i},setup(){let{codeHtml:e}=ne(),{codeJs:t}=re();return{codeHtml:e,codeJs:t,menuItems:[{id:`forms`,label:`Forms`,icon:`FileEarmarkText`,to:{name:`PageForm`},children:[{id:`input`,label:`Input`,to:{name:`PageInput`}},{id:`select`,label:`Select`,to:{name:`PageSelect`}},{id:`choice`,label:`Choice`,to:{name:`PageCheckbox`},children:[{id:`checkbox`,label:`Checkbox`,to:{name:`PageCheckbox`}},{id:`radio`,label:`Radio`,to:{name:`PageRadio`}}]}]},{id:`overlays`,label:`Overlays`,icon:`Window`,children:[{id:`modal`,label:`Modal`,to:{name:`PageModal`}},{id:`popover`,label:`Popover`,to:{name:`PagePopover`}}]},{id:`button`,label:`Button`,icon:`CheckLg`,to:{name:`PageButton`}}]}}},ae={style:{height:`24rem`,overflow:`hidden`}};function oe(e,t,n,r,i,ee){let a=p(`a-menu-button-toggle`),o=p(`a-menu`),s=p(`aloha-example`);return d(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_SPLIT_HEADER_`,description:`_A_PAGE_MENU_SPLIT_DESCRIPTION_`,props:`data, key-children`},{default:m(()=>[h(a,{class:`a_btn a_btn_secondary a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_split_toggle`},"menu-id":`docs_menu_split`}),u(`div`,ae,[h(o,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_split`,"key-children":`children`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var $=o(ie,[[`render`,oe]]);function se(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function ce(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function le(){let e=c(()=>ee({placeholder:`_A_PAGE_MENU_BASIC_HEADER_`}));return{pageTitle:c(()=>`${e.value?` (${e.value})`:``}`)}}function ue(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_SHOW_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_A_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function de(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var fe={name:`PageMenuBasic`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:a,PageMenuBasicExample:S,PageMenuBreadcrumbs:O,PageMenuCustomKeys:P,PageMenuGroups:B,PageMenuOnlyMobile:G,PageMenuSearchInDom:Q,PageMenuSplit:$},setup(){let{pageTitle:e}=le(),{dataProps:t}=ue(),{dataSlots:n}=de(),{dataEvents:r}=se(),{dataExposes:i}=ce();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e}}};function pe(e,t,n,r,i,ee){let a=p(`a-translation`),o=p(`page-menu-basic-example`),s=p(`page-menu-groups`),c=p(`page-menu-split`),u=p(`page-menu-only-mobile`),f=p(`page-menu-search-in-dom`),g=p(`page-menu-custom-keys`),_=p(`page-menu-breadcrumbs`),v=p(`aloha-table-css-vars`),y=p(`aloha-page`);return d(),l(y,{"page-title":e.pageTitle},{body:m(()=>[h(a,{tag:`p`,html:`_A_PAGE_MENU_BASIC_COMPONENT_DESCRIPTION_`}),h(o),h(s),h(c),h(u),h(f),h(g),h(_),h(v,{files:[`components/AMenu`,`components/AVerticalScroll`]})]),_:1},8,[`page-title`])}var me=o(fe,[[`render`,pe]]);export{me as default};