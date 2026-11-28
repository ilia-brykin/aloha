import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{t as n}from"./chunk.AlohaTableTranslate.ZCrkGUQc.js";import{t as r}from"./chunk.AlohaExample.Bx3NX4bX.js";import{hn as i,mn as a,nn as o,t as s}from"./bundle.index.LlT2KVEy.js";import{Bt as c,Ht as l,an as u,ln as d,pn as f,qt as p}from"./chunk.vendor.SEynj6EJ.js";function m(){return{codeHtml:`<a-breadcrumb
  :items="items"
  separator="/"
></a-breadcrumb>`}}function h(){return{codeJs:`import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  name: "PageBreadcrumbBasic",
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "Home", href: import.meta.env.BASE_URL },
      { label: "Components" },
      { label: "Breadcrumb" },
    ];

    return {
      items,
    };
  },
};`}}var g={name:`PageBreadcrumbBasic`,components:{ABreadcrumb:o,AlohaExample:r},setup(){let e=[{label:`Home`,href:`/aloha/`},{label:`Components`},{label:`Breadcrumb`}],{codeHtml:t}=m(),{codeJs:n}=h();return{codeHtml:t,codeJs:n,items:e}}};function _(e,t,n,r,i,a){let o=d(`a-breadcrumb`),s=d(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_BREADCRUMB_BASIC_DESCRIPTION_`},{default:f(()=>[p(o,{items:e.items,separator:`/`},null,8,[`items`])]),_:1},8,[`code-html`,`code-js`])}var v=s(g,[[`render`,_]]);function y(){return{codeHtml:`<!-- Home › … › Laptops › Aloha Book 14 -->
<a-breadcrumb
  :items="items"
  :max-items="3"
/>`}}function b(){return{codeJs:`import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "Home", href: "/", icon: "House" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Computers", href: "/products/electronics/computers" },
      { label: "Laptops", href: "/products/electronics/computers/laptops" },
      { label: "Aloha Book 14" },
    ];

    return {
      items,
    };
  },
};`}}var x={name:`PageBreadcrumbCollapse`,components:{ABreadcrumb:o,AlohaExample:r},setup(){let e=`/aloha/`,t=[{label:`Home`,href:e,icon:`House`},{label:`Products`,href:e},{label:`Electronics`,href:e},{label:`Computers`,href:e},{label:`Laptops`,href:e},{label:`Aloha Book 14`}],{codeHtml:n}=y(),{codeJs:r}=b();return{codeHtml:n,codeJs:r,items:t}}};function S(e,t,n,r,i,a){let o=d(`a-breadcrumb`),s=d(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BREADCRUMB_COLLAPSE_HEADER_`,description:`_A_BREADCRUMB_COLLAPSE_DESCRIPTION_`,props:[`max-items`]},{default:f(()=>[p(o,{items:e.items,"max-items":3},null,8,[`items`])]),_:1},8,[`code-html`,`code-js`])}var C=s(x,[[`render`,S]]);function w(){return{codeHtml:`<a-breadcrumb
  :items="items"
  :extra="{ number: 2026114 }"
/>`}}function T(){return{codeJs:`import {
  ABreadcrumb,
} from "aloha-vue";

// i18n: "_A_BREADCRUMB_EXAMPLE_ORDER_": "Order {{ number }}"

export default {
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "_A_BREADCRUMB_EXAMPLE_HOME_", href: "/", icon: "House" },
      { label: "_A_BREADCRUMB_EXAMPLE_ORDERS_", href: "/orders" },
      // the placeholder {{ number }} comes from the prop extra (or from item.extra)
      { label: "_A_BREADCRUMB_EXAMPLE_ORDER_" },
    ];

    return {
      items,
    };
  },
};`}}var E={name:`PageBreadcrumbIcons`,components:{ABreadcrumb:o,AlohaExample:r},setup(){let e=[{label:`_A_BREADCRUMB_EXAMPLE_HOME_`,href:`/aloha/`,icon:`House`},{label:`_A_BREADCRUMB_EXAMPLE_ORDERS_`,href:`/aloha/`},{label:`_A_BREADCRUMB_EXAMPLE_ORDER_`}],{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,items:e}}};function D(e,t,n,r,i,a){let o=d(`a-breadcrumb`),s=d(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BREADCRUMB_ICONS_HEADER_`,description:`_A_BREADCRUMB_ICONS_DESCRIPTION_`,props:[`extra`]},{default:f(()=>[p(o,{items:e.items,extra:{number:2026114}},null,8,[`items`])]),_:1},8,[`code-html`,`code-js`])}var O=s(E,[[`render`,D]]);function k(){return{codeHtml:`<a-breadcrumb
  :items="items"
></a-breadcrumb>`}}function A(){return{codeJs:`import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  name: "PageBreadcrumbRouter",
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { id: "home", label: "Home", to: { name: "PageStart" } },
      { id: "start", label: "Getting started", to: { name: "PageQuickStart" } },
      { id: "breadcrumb", label: "Breadcrumb" },
    ];

    return {
      items,
    };
  },
};`}}var j={name:`PageBreadcrumbRouter`,components:{ABreadcrumb:o,AlohaExample:r},setup(){let e=[{id:`home`,label:`Home`,to:{name:`PageStart`}},{id:`start`,label:`Getting started`,to:{name:`PageQuickStart`}},{id:`breadcrumb`,label:`Breadcrumb`}],{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,items:e}}};function M(e,t,n,r,i,a){let o=d(`a-breadcrumb`),s=d(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BREADCRUMB_ROUTER_HEADER_`,description:`_A_BREADCRUMB_ROUTER_DESCRIPTION_`},{default:f(()=>[p(o,{items:e.items},null,8,[`items`])]),_:1},8,[`code-html`,`code-js`])}var N=s(j,[[`render`,M]]);function P(){let e=c(()=>i({placeholder:`_A_BREADCRUMB_COMPONENT_NAME_`}));return{pageTitle:c(()=>`ABreadcrumb${e.value?` (${e.value})`:``}`)}}function F(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-label`,description:`_A_BREADCRUMB_PROPS_ARIA_LABEL_`,type:`String`,default:`"_A_BREADCRUMB_ARIA_LABEL_"`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`items`,description:`_A_BREADCRUMB_PROPS_ITEMS_`,type:`Array`,default:`[]`,required:!1},{name:`max-items`,description:`_A_BREADCRUMB_PROPS_MAX_ITEMS_`,type:`Number`,default:void 0,required:!1},{name:`separator`,description:`_A_BREADCRUMB_PROPS_SEPARATOR_`,type:`String`,default:`"›"`,required:!1}],dataPropsItem:[{name:`extra`,description:`_A_BREADCRUMB_PROPS_ITEM_EXTRA_`,type:`Object`,default:void 0,required:!1},{name:`href`,description:`_A_BREADCRUMB_PROPS_HREF_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_BREADCRUMB_PROPS_ICON_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_BREADCRUMB_PROPS_ID_`,type:`String / Number`,default:void 0,required:!1},{name:`label`,description:`_A_BREADCRUMB_PROPS_LABEL_`,type:`String / Number / Object / Array`,default:void 0,required:!0},{name:`to`,description:`_A_BREADCRUMB_PROPS_TO_`,type:`String / Object`,default:void 0,required:!1}]}}function I(){return{dataTranslate:[`_A_BREADCRUMB_ARIA_LABEL_`,`_A_BREADCRUMB_SHOW_HIDDEN_`]}}var L={name:`PageBreadcrumb`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:a,PageBreadcrumbBasic:v,PageBreadcrumbCollapse:C,PageBreadcrumbIcons:O,PageBreadcrumbRouter:N},setup(){let{pageTitle:e}=P(),{dataProps:t,dataPropsItem:n}=F(),{dataTranslate:r}=I();return{dataProps:t,dataPropsItem:n,dataTranslate:r,pageTitle:e}}};function R(e,t,n,r,i,a){let o=d(`a-translation`),s=d(`page-breadcrumb-basic`),c=d(`page-breadcrumb-router`),m=d(`page-breadcrumb-icons`),h=d(`page-breadcrumb-collapse`),g=d(`aloha-table-props`),_=d(`aloha-table-translate`),v=d(`aloha-table-css-vars`),y=d(`aloha-page`);return u(),l(y,{"page-title":e.pageTitle},{body:f(()=>[p(o,{tag:`p`,html:`_A_BREADCRUMB_COMPONENT_DESCRIPTION_`}),p(s),p(c),p(m),p(h),p(g,{"table-label":`ABreadcrumb`,data:e.dataProps},null,8,[`data`]),p(g,{"table-label":`items`,data:e.dataPropsItem},null,8,[`data`]),p(_,{data:e.dataTranslate},null,8,[`data`]),p(v,{files:`components/ABreadcrumb`})]),_:1},8,[`page-title`])}var z=s(L,[[`render`,R]]);export{z as default};