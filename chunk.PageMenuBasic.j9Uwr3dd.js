import{t as e}from"./chunk.AlohaPage.DD83_mc4.js";import{t}from"./chunk.AlohaTableProps.B4p6jfYg.js";import{t as n}from"./chunk.AlohaExample.wt5BqruS.js";import{L as r,Xt as i,_ as a,it as o,v as s}from"./bundle.index.D6GIGImH.js";import{Ft as c,It as l,Pt as u,Qt as d,Vt as f,cn as p,nn as m,on as h}from"./chunk.vendor.CTxSDDRk.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{Y as _}from"./chunk.vendor-lodash.BfU-HRrF.js";function v(){return{codeHtml:`<a-menu-button-toggle
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
</div>`}}function y(){return{codeJs:`import {
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
};`}}var b={name:`PageMenuBasicExample`,components:{AlohaExample:n,AMenu:a,AMenuButtonToggle:s},setup(){let{codeHtml:e}=v(),{codeJs:t}=y();return{codeHtml:e,codeJs:t,menuItems:[{id:`components`,label:`Components`,icon:`MenuAppFill`,children:[{id:`accordion`,label:`Accordion`,to:{name:`PageAccordion`}},{id:`forms`,label:`Form controls`,children:[{id:`input`,label:`Input`,to:{name:`PageInput`}},{id:`select`,label:`Select`,to:{name:`PageSelect`}}]}]},{id:`alert`,label:`Alert`,icon:`ExclamationTriangle`,to:{name:`PageAlert`}},{id:`button`,label:`Button`,icon:`EjectFill`,to:{name:`PageButton`}},{id:`collapse`,label:`Collapse`,icon:`ArrowsCollapse`,to:{name:`PageCollapse`}},{id:`dropdown`,label:`Dropdown`,icon:`MenuDown`,to:{name:`PageDropdown`}},{id:`link`,label:`Link`,icon:`BoxArrowUpRight`,to:{name:`PageLink`}},{id:`list`,label:`List`,icon:`ListUl`,to:{name:`PageList`}},{id:`modal`,label:`Modal`,icon:`Window`,to:{name:`PageModal`}},{id:`tabs`,label:`Tabs`,icon:`SegmentedNav`,to:{name:`PageTabs`}},{id:`translation`,label:`Translation`,icon:`Translate`,to:{name:`PageTranslation`}}]}}},x={style:{height:`24rem`,overflow:`hidden`}};function S(e,t,n,r,i,a){let o=m(`a-menu-button-toggle`),s=m(`a-menu`),u=m(`aloha-example`);return d(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_NESTED_HEADER_`,description:`_A_PAGE_MENU_NESTED_DESCRIPTION_`,props:`is-inline, data, key-children`},{default:h(()=>[f(o,{class:`a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_nested_toggle`},"menu-id":`docs_menu_nested`}),c(`div`,x,[f(s,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_nested`,"key-children":`children`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var C=g(b,[[`render`,S]]);function w(){return{codeHtml:`<a-menu-button-toggle
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
</div>`}}function T(){return{codeJs:`import {
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
};`}}var E={name:`PageMenuBreadcrumbs`,components:{AlohaExample:n,AMenu:a,AMenuButtonToggle:s,ASwitch:r},setup(){let e=p(!0),{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,menuItems:[{id:`components`,label:`Components and reusable interface patterns`,icon:`MenuAppFill`,children:[{id:`forms`,label:`Form controls and data entry components`,children:[{id:`text`,label:`Text fields and numeric input controls`,children:[{id:`input`,label:`Input`,to:{name:`PageInput`}},{id:`input-number`,label:`Input number`,to:{name:`PageInputNumber`}}]},{id:`select`,label:`Select`,to:{name:`PageSelect`}}]},{id:`button`,label:`Button`,to:{name:`PageButton`}}]},{id:`alert`,label:`Alert`,icon:`ExclamationTriangle`,to:{name:`PageAlert`}}],showCountChildren:e}}},D={style:{height:`24rem`,overflow:`hidden`}};function O(e,t,n,r,i,a){let o=m(`a-menu-button-toggle`),s=m(`a-switch`),u=m(`a-menu`),p=m(`aloha-example`);return d(),l(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_BREADCRUMBS_HEADER_`,description:`_A_PAGE_MENU_BREADCRUMBS_DESCRIPTION_`,props:`is-breadcrumbs-truncated, show-count-children`},{default:h(()=>[f(o,{class:`a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_breadcrumbs_toggle`},"menu-id":`docs_menu_breadcrumbs`}),f(s,{class:`a_mb_2`,modelValue:e.showCountChildren,"onUpdate:modelValue":t[0]||=t=>e.showCountChildren=t,label:`_A_PAGE_MENU_SHOW_COUNTS_`},null,8,[`modelValue`]),c(`div`,D,[f(u,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_breadcrumbs`,"key-children":`children`,"is-breadcrumbs-truncated":!0,"show-count-children":e.showCountChildren},null,8,[`data`,`show-count-children`])])]),_:1},8,[`code-html`,`code-js`])}var k=g(E,[[`render`,O]]);function A(){return{codeHtml:`<a-menu-button-toggle
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
</div>`}}function j(){return{codeJs:`import {
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
};`}}var M={name:`PageMenuCustomKeys`,components:{AlohaExample:n,AMenu:a,AMenuButtonToggle:s},setup(){let{codeHtml:e}=A(),{codeJs:t}=j();return{codeHtml:e,codeJs:t,menuItems:[{code:`forms`,title:`Form controls`,symbol:`FileEarmarkText`,section:`Components`,items:[{code:`input`,title:`Input`,to:{name:`PageInput`}},{code:`select`,title:`Select`,to:{name:`PageSelect`}},{code:`checkbox`,title:`Checkbox`,to:{name:`PageCheckbox`}}]},{code:`navigation`,title:`Navigation`,symbol:`MenuAppFill`,section:`Components`,items:[{code:`tabs`,title:`Tabs`,to:{name:`PageTabs`}},{code:`link`,title:`Link`,to:{name:`PageLink`}}]},{code:`alert`,title:`Alert`,symbol:`ExclamationTriangle`,section:`Feedback`,to:{name:`PageAlert`}},{code:`modal`,title:`Modal`,symbol:`Window`,section:`Feedback`,to:{name:`PageModal`}}]}}},N={style:{height:`24rem`,overflow:`hidden`}};function P(e,t,n,r,i,a){let o=m(`a-menu-button-toggle`),s=m(`a-menu`),u=m(`aloha-example`);return d(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_CUSTOM_KEYS_HEADER_`,description:`_A_PAGE_MENU_CUSTOM_KEYS_DESCRIPTION_`,props:`key-id, key-label, key-icon, key-group, key-children`},{default:h(()=>[f(o,{class:`a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_keys_toggle`},"menu-id":`docs_menu_keys`}),c(`div`,N,[f(s,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_keys`,"key-id":`code`,"key-label":`title`,"key-icon":`symbol`,"key-group":`section`,"key-children":`items`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var F=g(M,[[`render`,P]]);function I(){return{codeHtml:`<a-menu-button-toggle
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
</div>`}}function L(){return{codeJs:`import {
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
};`}}var R={name:`PageMenuGroups`,components:{AlohaExample:n,AMenu:a,AMenuButtonToggle:s},setup(){let{codeHtml:e}=I(),{codeJs:t}=L();return{codeHtml:e,codeJs:t,menuItems:[{id:`input`,group:`Forms`,label:`Input`,icon:`FileEarmarkText`,to:{name:`PageInput`}},{id:`select`,group:`Forms`,label:`Select`,icon:`ListUl`,to:{name:`PageSelect`}},{id:`checkbox`,group:`Forms`,label:`Checkbox`,icon:`CheckLg`,to:{name:`PageCheckbox`}},{id:`radio`,group:`Forms`,label:`Radio`,icon:`CheckLg`,to:{name:`PageRadio`}},{id:`alert`,group:`Feedback`,label:`Alert`,icon:`ExclamationTriangle`,to:{name:`PageAlert`}},{id:`loading`,group:`Feedback`,label:`Loading`,icon:`HourglassSplit`,to:{name:`PageLoading`}},{id:`notification`,group:`Feedback`,label:`Notification (disabled)`,icon:`Bell`,to:{name:`PageNotification`},disabled:!0},{id:`modal`,group:`Overlays`,label:`Modal`,icon:`Window`,to:{name:`PageModal`}},{id:`dropdown`,group:`Overlays`,label:`Dropdown`,icon:`MenuDown`,to:{name:`PageDropdown`}}]}}},z={style:{height:`24rem`,overflow:`hidden`}};function B(e,t,n,r,i,a){let o=m(`a-menu-button-toggle`),s=m(`a-menu`),u=m(`aloha-example`);return d(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_GROUPS_HEADER_`,description:`_A_PAGE_MENU_GROUPS_DESCRIPTION_`,props:`is-inline, data, key-group, has-search`},{default:h(()=>[f(o,{class:`a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_groups_toggle`},"menu-id":`docs_menu_groups`}),c(`div`,z,[f(s,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_groups`,"has-search":!1},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var ee=g(R,[[`render`,B]]);function V(){return{codeHtml:`<a-menu-button-toggle
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
};`}}var U={name:`PageMenuOnlyMobile`,components:{AlohaExample:n,AMenu:a,AMenuButtonToggle:s},setup(){let{codeHtml:e}=V(),{codeJs:t}=H();return{codeHtml:e,codeJs:t,menuItems:[{id:`input`,label:`Input`,icon:`FileEarmarkText`,to:{name:`PageInput`}},{id:`select`,label:`Select`,icon:`ListUl`,to:{name:`PageSelect`}},{id:`checkbox`,label:`Checkbox`,icon:`CheckLg`,to:{name:`PageCheckbox`}},{id:`radio`,label:`Radio`,icon:`CheckLg`,to:{name:`PageRadio`}},{id:`alert`,label:`Alert`,icon:`ExclamationTriangle`,to:{name:`PageAlert`}},{id:`modal`,label:`Modal`,icon:`Window`,to:{name:`PageModal`}}]}}},W={style:{height:`24rem`,overflow:`hidden`}};function G(e,t,n,r,i,a){let o=m(`a-menu-button-toggle`),s=m(`a-menu`),u=m(`aloha-example`);return d(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_ONLY_MOBILE_HEADER_`,description:`_A_PAGE_MENU_ONLY_MOBILE_DESCRIPTION_`,props:`only-mobile`},{default:h(()=>[f(o,{class:`a_mb_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_only_mobile_toggle`},"only-mobile":!0,"menu-id":`docs_menu_only_mobile`}),c(`div`,W,[f(s,{"can-change-body-class":!1,data:e.menuItems,"has-search":!1,"is-inline":!0,"only-mobile":!0,"use-backdrop-mobile":!1,"menu-id":`docs_menu_only_mobile`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var K=g(U,[[`render`,G]]);function q(){return{codeHtml:`<a-menu-button-toggle
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
</div>`}}function J(){return{codeJs:`import {
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
};`}}var Y={name:`PageMenuSearchInDom`,components:{AlohaExample:n,AMenu:a,AMenuButtonToggle:s,ASwitch:r},setup(){let e=p(!1),{codeHtml:t}=q(),{codeJs:n}=J();return{codeHtml:t,codeJs:n,isTranslated:e,menuItems:[{id:`forms`,label:`Forms`,children:[{id:`input`,label:`Input`,to:{name:`PageInput`}},{id:`select`,label:`Select`,to:{name:`PageSelect`}},{id:`checkbox`,label:`Checkbox`,to:{name:`PageCheckbox`},disabled:!0}]},{id:`button`,label:`Button`,to:{name:`PageButton`}},{id:`alert`,label:`Alert`,to:{name:`PageAlert`}}],translateMenu:e=>{_({forms:[`Forms`,`Formulare`],input:[`Input`,`Eingabe`],select:[`Select`,`Auswahl`],checkbox:[`Checkbox`,`Kontrollkästchen`],button:[`Button`,`Schaltfläche`],alert:[`Alert`,`Hinweis`]},(t,n)=>{let r=document.getElementById(`docs_menu_dom_${n}_link`);r.querySelector(`.a_menu__link__text`).textContent=t[+!!e]})}}}},X={class:`a_mb_2`},Z={style:{height:`24rem`,overflow:`hidden`}};function Q(e,t,n,r,i,a){let o=m(`a-menu-button-toggle`),s=m(`a-switch`),u=m(`a-menu`),p=m(`aloha-example`);return d(),l(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGE_MENU_DOM_HEADER_`,description:`_A_PAGE_MENU_DOM_DESCRIPTION_`,props:`search-in-dom, is-inline, data, key-children`},{default:h(()=>[c(`div`,X,[f(o,{class:`a_me_2`,"can-change-body-class":!1,"button-toggle-props":{id:`docs_menu_dom_toggle`},"menu-id":`docs_menu_dom`}),f(s,{modelValue:e.isTranslated,"onUpdate:modelValue":[t[0]||=t=>e.isTranslated=t,e.translateMenu],label:`_A_PAGE_MENU_DOM_TRANSLATE_`},null,8,[`modelValue`,`onUpdate:modelValue`])]),c(`div`,Z,[f(u,{"can-change-body-class":!1,data:e.menuItems,"is-inline":!0,"search-in-dom":!0,"use-backdrop-mobile":!1,"key-children":`children`,"menu-id":`docs_menu_dom`},null,8,[`data`])])]),_:1},8,[`code-html`,`code-js`])}var $=g(Y,[[`render`,Q]]);function te(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function ne(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function re(){let e=u(()=>i({placeholder:`_A_PAGE_MENU_BASIC_HEADER_`}));return{pageTitle:u(()=>`${e.value?` (${e.value})`:``}`)}}function ie(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function ae(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var oe={name:`PageMenuBasic`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:o,PageMenuBasicExample:C,PageMenuBreadcrumbs:k,PageMenuCustomKeys:F,PageMenuGroups:ee,PageMenuOnlyMobile:K,PageMenuSearchInDom:$},setup(){let{pageTitle:e}=re(),{dataProps:t}=ie(),{dataSlots:n}=ae(),{dataEvents:r}=te(),{dataExposes:i}=ne();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e}}};function se(e,t,n,r,i,a){let o=m(`a-translation`),s=m(`page-menu-basic-example`),c=m(`page-menu-groups`),u=m(`page-menu-only-mobile`),p=m(`page-menu-search-in-dom`),g=m(`page-menu-custom-keys`),_=m(`page-menu-breadcrumbs`),v=m(`aloha-table-css-vars`),y=m(`aloha-page`);return d(),l(y,{"page-title":e.pageTitle},{body:h(()=>[f(o,{tag:`p`,html:`_A_PAGE_MENU_BASIC_COMPONENT_DESCRIPTION_`}),f(s),f(c),f(u),f(p),f(g),f(_),f(v,{files:[`components/AMenu`,`components/AVerticalScroll`]})]),_:1},8,[`page-title`])}var ce=g(oe,[[`render`,se]]);export{ce as default};