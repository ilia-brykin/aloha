import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{t}from"./chunk.AlohaTableCssVars.C8BUEJvV.js";import{t as n}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{t as r}from"./chunk.AlohaTableTranslate.CZ7cJb8v.js";import{Gt as i,Ht as a,Jt as o,Ut as s,Vt as c,Wt as l,_n as u,mn as d,on as f,un as p,wn as m}from"./chunk.vendor.DL09mhUf.js";import{t as h}from"./chunk.AlohaExample.VTWuqY0j.js";import{W as g,b as _,hn as v,mn as y,sn as b,t as x}from"./bundle.index.D-5bYXwk.js";function S(){return{codeHtml:`<a-navbar
  :data="data"
  @navigate="onNavigate"
>
  <template v-slot:start>
    <strong>Aloha</strong>
  </template>
  <template v-slot:end>
    <a-button
      class="a_btn a_btn_primary"
      text="Login"
    />
  </template>
</a-navbar>
<div class="a_mt_3">navigate: {{ lastLabel }}</div>`}}function C(){return{codeJs:`import {
  computed,
  ref,
} from "vue";

import {
  AButton,
  ANavbar,
} from "aloha-vue";

const DATA = [
  { id: "home", label: "Home", href: "#navbar_home" },
  {
    id: "products",
    label: "Products",
    children: [
      { id: "laptops", label: "Laptops", href: "#navbar_laptops" },
      {
        id: "accessories",
        label: "Accessories",
        children: [
          { id: "bags", label: "Bags", href: "#navbar_bags" },
          {
            id: "cables",
            label: "Cables",
            children: [
              { id: "usb", label: "USB", href: "#navbar_usb" },
              { id: "hdmi", label: "HDMI", href: "#navbar_hdmi" },
            ],
          },
        ],
      },
      { id: "phones", label: "Phones", href: "#navbar_phones", disabled: true },
    ],
  },
  {
    id: "docs",
    label: "Docs",
    href: "#navbar_docs",
    children: [
      { id: "start", label: "Quick start", href: "#navbar_start" },
      { id: "api", label: "API", href: "#navbar_api" },
    ],
  },
  { id: "contact", label: "Contact", href: "#navbar_contact" },
];

export default {
  name: "PageNavbarBasic",
  components: {
    AButton,
    ANavbar,
  },
  setup() {
    const activeId = ref("home");
    const lastLabel = ref("");

    // isActive: aria-current="page" and the way to it
    const setActive = items => items.map(item => ({
      ...item,
      isActive: item.id === activeId.value,
      children: item.children && setActive(item.children),
    }));

    const data = computed(() => setActive(DATA));

    const onNavigate = ({ item }) => {
      activeId.value = item.id;
      lastLabel.value = item.label;
    };

    return {
      data,
      lastLabel,
      onNavigate,
    };
  },
};`}}var w=[{id:`home`,label:`Home`,href:`#navbar_home`},{id:`products`,label:`Products`,children:[{id:`laptops`,label:`Laptops`,href:`#navbar_laptops`},{id:`accessories`,label:`Accessories`,children:[{id:`bags`,label:`Bags`,href:`#navbar_bags`},{id:`cables`,label:`Cables`,children:[{id:`usb`,label:`USB`,href:`#navbar_usb`},{id:`hdmi`,label:`HDMI`,href:`#navbar_hdmi`}]}]},{id:`phones`,label:`Phones`,href:`#navbar_phones`,disabled:!0}]},{id:`docs`,label:`Docs`,href:`#navbar_docs`,children:[{id:`start`,label:`Quick start`,href:`#navbar_start`},{id:`api`,label:`API`,href:`#navbar_api`}]},{id:`contact`,label:`Contact`,href:`#navbar_contact`}],T={name:`PageNavbarBasic`,components:{AlohaExample:h,AButton:b,ANavbar:_},setup(){let{codeHtml:e}=S(),{codeJs:t}=C(),n=u(`home`),r=u(``),i=e=>e.map(e=>({...e,isActive:e.id===n.value,children:e.children&&i(e.children)}));return{codeHtml:e,codeJs:t,data:c(()=>i(w)),lastLabel:r,onNavigate:({item:e})=>{n.value=e.id,r.value=e.label}}}},E={class:`a_mt_3`};function D(e,t,n,r,i,c){let l=p(`a-button`),u=p(`a-navbar`),h=p(`aloha-example`);return f(),s(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_NAVBAR_GROUP_BASIC_DESCRIPTION_`},{default:d(()=>[o(u,{data:e.data,onNavigate:e.onNavigate},{start:d(()=>[...t[0]||=[a(`strong`,null,`Aloha`,-1)]]),end:d(()=>[o(l,{class:`a_btn a_btn_primary`,text:`Login`})]),_:1},8,[`data`,`onNavigate`]),a(`div`,E,`navigate: `+m(e.lastLabel),1)]),_:1},8,[`code-html`,`code-js`])}var O=x(T,[[`render`,D]]);function k(){return{codeHtml:`<a-navbar
  :data="data"
  :open-delay="100"
  :close-delay="300"
  trigger="hover"
/>`}}function A(){return{codeJs:`import {
  ANavbar,
} from "aloha-vue";

export default {
  name: "PageNavbarHover",
  components: {
    ANavbar,
  },
  setup() {
    const data = [
      { id: "home", label: "Home", href: "#navbar_home" },
      {
        id: "products",
        label: "Products",
        children: [
          { id: "laptops", label: "Laptops", href: "#navbar_laptops" },
          {
            id: "accessories",
            label: "Accessories",
            children: [
              { id: "bags", label: "Bags", href: "#navbar_bags" },
              {
                id: "cables",
                label: "Cables",
                children: [
                  { id: "usb", label: "USB", href: "#navbar_usb" },
                  { id: "hdmi", label: "HDMI", href: "#navbar_hdmi" },
                ],
              },
            ],
          },
          { id: "phones", label: "Phones", href: "#navbar_phones", disabled: true },
        ],
      },
      {
        id: "docs",
        label: "Docs",
        href: "#navbar_docs",
        children: [
          { id: "start", label: "Quick start", href: "#navbar_start" },
          { id: "api", label: "API", href: "#navbar_api" },
        ],
      },
      { id: "contact", label: "Contact", href: "#navbar_contact" },
    ];

    return {
      data,
    };
  },
};`}}var j={name:`PageNavbarHover`,components:{AlohaExample:h,ANavbar:_},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t,data:[{id:`home`,label:`Home`,href:`#navbar_home`},{id:`products`,label:`Products`,children:[{id:`laptops`,label:`Laptops`,href:`#navbar_laptops`},{id:`accessories`,label:`Accessories`,children:[{id:`bags`,label:`Bags`,href:`#navbar_bags`},{id:`cables`,label:`Cables`,children:[{id:`usb`,label:`USB`,href:`#navbar_usb`},{id:`hdmi`,label:`HDMI`,href:`#navbar_hdmi`}]}]},{id:`phones`,label:`Phones`,href:`#navbar_phones`,disabled:!0}]},{id:`docs`,label:`Docs`,href:`#navbar_docs`,children:[{id:`start`,label:`Quick start`,href:`#navbar_start`},{id:`api`,label:`API`,href:`#navbar_api`}]},{id:`contact`,label:`Contact`,href:`#navbar_contact`}]}}};function M(e,t,n,r,i,a){let c=p(`a-navbar`),l=p(`aloha-example`);return f(),s(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NAVBAR_GROUP_HOVER_HEADER_`,description:`_A_NAVBAR_GROUP_HOVER_DESCRIPTION_`},{default:d(()=>[o(c,{data:e.data,"open-delay":100,"close-delay":300,trigger:`hover`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var N=x(j,[[`render`,M]]);function P(){return{codeHtml:`<a-radio
  v-model="overflow"
  :data="dataOverflow"
  :is-inline="true"
  label="overflow"
/>
<div
  class="a_mt_3"
  style="max-width: 30rem;"
>
  <a-navbar
    :data="data"
    :overflow="overflow"
  />
</div>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ANavbar,
  ARadio,
} from "aloha-vue";

export default {
  name: "PageNavbarOverflow",
  components: {
    ANavbar,
    ARadio,
  },
  setup() {
    const overflow = ref("more");
    const dataOverflow = [
      { label: "more", value: "more" },
      { label: "wrap", value: "wrap" },
      { label: "scroll", value: "scroll" },
    ];
    const data = [
      { id: "home", label: "Home", href: "#navbar_home" },
      { id: "news", label: "News", href: "#navbar_news" },
      { id: "products", label: "Products", children: [
        { id: "laptops", label: "Laptops", href: "#navbar_laptops" },
        { id: "phones", label: "Phones", href: "#navbar_phones" },
      ] },
      { id: "services", label: "Services", href: "#navbar_services" },
      { id: "support", label: "Support", href: "#navbar_support" },
      { id: "blog", label: "Blog", href: "#navbar_blog" },
      { id: "careers", label: "Careers", href: "#navbar_careers" },
      { id: "contact", label: "Contact", href: "#navbar_contact" },
    ];

    return {
      data,
      dataOverflow,
      overflow,
    };
  },
};`}}var I={name:`PageNavbarOverflow`,components:{AlohaExample:h,ANavbar:_,ARadio:g},setup(){let{codeHtml:e}=P(),{codeJs:t}=F();return{codeHtml:e,codeJs:t,data:[{id:`home`,label:`Home`,href:`#navbar_home`},{id:`news`,label:`News`,href:`#navbar_news`},{id:`products`,label:`Products`,children:[{id:`laptops`,label:`Laptops`,href:`#navbar_laptops`},{id:`phones`,label:`Phones`,href:`#navbar_phones`}]},{id:`services`,label:`Services`,href:`#navbar_services`},{id:`support`,label:`Support`,href:`#navbar_support`},{id:`blog`,label:`Blog`,href:`#navbar_blog`},{id:`careers`,label:`Careers`,href:`#navbar_careers`},{id:`contact`,label:`Contact`,href:`#navbar_contact`}],dataOverflow:[{label:`more`,value:`more`},{label:`wrap`,value:`wrap`},{label:`scroll`,value:`scroll`}],overflow:u(`more`)}}},L={class:`a_mt_3`,style:{"max-width":`30rem`}};function R(e,t,n,r,i,c){let l=p(`a-radio`),u=p(`a-navbar`),m=p(`aloha-example`);return f(),s(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NAVBAR_GROUP_OVERFLOW_HEADER_`,description:`_A_NAVBAR_GROUP_OVERFLOW_DESCRIPTION_`},{default:d(()=>[o(l,{modelValue:e.overflow,"onUpdate:modelValue":t[0]||=t=>e.overflow=t,data:e.dataOverflow,"is-inline":!0,label:`overflow`},null,8,[`modelValue`,`data`]),a(`div`,L,[o(u,{data:e.data,overflow:e.overflow},null,8,[`data`,`overflow`])])]),_:1},8,[`code-html`,`code-js`])}var z=x(I,[[`render`,R]]);function B(){return{codeHtml:`<a-navbar
  :data="data"
>
  <template v-slot:item="{ item }">
    <span>{{ item.label }}</span>
    <span
      v-if="item.count"
      class="a_badge a_badge_danger a_ms_2"
    >{{ item.count }}</span>
  </template>
</a-navbar>`}}function V(){return{codeJs:`import {
  ANavbar,
} from "aloha-vue";

export default {
  name: "PageNavbarSlotItem",
  components: {
    ANavbar,
  },
  setup() {
    const data = [
      { id: "inbox", label: "Inbox", href: "#navbar_inbox", count: 12 },
      { id: "tasks", label: "Tasks", children: [
        { id: "open", label: "Open", href: "#navbar_open", count: 3 },
        { id: "done", label: "Done", href: "#navbar_done" },
      ] },
      { id: "settings", label: "Settings", href: "#navbar_settings" },
    ];

    return {
      data,
    };
  },
};`}}var H={name:`PageNavbarSlotItem`,components:{AlohaExample:h,ANavbar:_},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t,data:[{id:`inbox`,label:`Inbox`,href:`#navbar_inbox`,count:12},{id:`tasks`,label:`Tasks`,children:[{id:`open`,label:`Open`,href:`#navbar_open`,count:3},{id:`done`,label:`Done`,href:`#navbar_done`}]},{id:`settings`,label:`Settings`,href:`#navbar_settings`}]}}},U={key:0,class:`a_badge a_badge_danger a_ms_2`};function W(e,t,n,r,c,u){let h=p(`a-navbar`),g=p(`aloha-example`);return f(),s(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NAVBAR_GROUP_SLOT_ITEM_HEADER_`,description:`_A_NAVBAR_GROUP_SLOT_ITEM_DESCRIPTION_`},{default:d(()=>[o(h,{data:e.data},{item:d(({item:e})=>[a(`span`,null,m(e.label),1),e.count?(f(),i(`span`,U,m(e.count),1)):l(``,!0)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var G=x(H,[[`render`,W]]);function K(){let e=c(()=>v({placeholder:`_A_NAVBAR_COMPONENT_NAME_`}));return{pageTitle:c(()=>`ANavbar${e.value?` (${e.value})`:``}`)}}function q(){return{dataEvents:[{name:`navigate`,type:`Function`,description:`_A_NAVBAR_EVENTS_NAVIGATE_DESCRIPTION_`}],dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`close-delay`,description:`_A_NAVBAR_PROPS_CLOSE_DELAY_DESCRIPTION_`,type:`Number`,default:`200`,required:!1},{name:`data`,description:`_A_NAVBAR_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`drawer-placement`,description:`_A_NAVBAR_PROPS_DRAWER_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"left"`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`id`,description:`_A_NAVBAR_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_navbar_")`,required:!1},{name:`is-end-in-drawer`,description:`_A_NAVBAR_PROPS_IS_END_IN_DRAWER_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`is-mobile-menu`,description:`_A_NAVBAR_PROPS_IS_MOBILE_MENU_DESCRIPTION_`,type:`Boolean`,default:`true`,required:!1},{name:`is-sticky`,description:`_A_NAVBAR_PROPS_IS_STICKY_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`key-children`,description:`_A_NAVBAR_PROPS_KEY_CHILDREN_DESCRIPTION_`,type:`String`,default:`"children"`,required:!1},{name:`key-id`,description:`_A_NAVBAR_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:`"id"`,required:!1},{name:`key-label`,description:`_A_NAVBAR_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`"label"`,required:!1},{name:`label`,description:`_A_NAVBAR_PROPS_LABEL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`open-delay`,description:`_A_NAVBAR_PROPS_OPEN_DELAY_DESCRIPTION_`,type:`Number`,default:`100`,required:!1},{name:`overflow`,description:`_A_NAVBAR_PROPS_OVERFLOW_DESCRIPTION_`,type:`String`,default:`"more"`,required:!1},{name:`texts`,description:`_A_NAVBAR_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`trigger`,description:`_A_NAVBAR_PROPS_TRIGGER_DESCRIPTION_`,type:`String`,default:`"click"`,required:!1}],dataSlots:[{name:`end`,description:`_A_NAVBAR_SLOTS_END_DESCRIPTION_`},{name:`item`,description:`_A_NAVBAR_SLOTS_ITEM_DESCRIPTION_`},{name:`start`,description:`_A_NAVBAR_SLOTS_START_DESCRIPTION_`}],dataTranslate:[`_A_NAVBAR_DRAWER_`,`_A_NAVBAR_MORE_`,`_A_NAVBAR_NAVIGATION_`,`_A_NAVBAR_SUBMENU_`,`_A_NAVBAR_TOGGLE_`]}}var J={name:`PageNavbar`,components:{AlohaPage:e,AlohaTableCssVars:t,AlohaTableProps:n,AlohaTableTranslate:r,ATranslation:y,PageNavbarBasic:O,PageNavbarOverflow:z,PageNavbarHover:N,PageNavbarSlotItem:G},setup(){let{pageTitle:e}=K(),{dataEvents:t,dataProps:n,dataSlots:r,dataTranslate:i}=q();return{dataEvents:t,dataProps:n,dataSlots:r,dataTranslate:i,pageTitle:e}}};function Y(e,t,n,r,i,a){let c=p(`a-translation`),l=p(`page-navbar-basic`),u=p(`page-navbar-overflow`),m=p(`page-navbar-hover`),h=p(`page-navbar-slot-item`),g=p(`aloha-table-props`),_=p(`aloha-table-translate`),v=p(`aloha-table-css-vars`),y=p(`aloha-page`);return f(),s(y,{"page-title":e.pageTitle},{body:d(()=>[o(c,{tag:`p`,html:`_A_NAVBAR_COMPONENT_DESCRIPTION_`}),o(c,{tag:`p`,html:`_A_NAVBAR_ACCESSIBILITY_`}),o(c,{tag:`p`,html:`_A_NAVBAR_MOBILE_`}),o(l),o(u),o(m),o(h),o(g,{data:e.dataProps},null,8,[`data`]),o(g,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),o(g,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),o(_,{data:e.dataTranslate},null,8,[`data`]),o(v,{files:`components/ANavbar`})]),_:1},8,[`page-title`])}var X=x(J,[[`render`,Y]]);export{X as default};