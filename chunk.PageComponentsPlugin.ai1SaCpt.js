import{t as e}from"./chunk.AlohaHighlightjs.DKkTW1E7.js";import{h as t,mn as n,t as r}from"./bundle.index.Cwpafk10.js";import{Gt as i,Ht as a,Jt as o,on as s,un as c}from"./chunk.vendor.Bjd2408Z.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  AComponentsPlugin,
} from "aloha-vue";
import CheckLg from "aloha-svg/dist/js/bootstrap/CheckLg";

const app = createApp(App);

app.use(AComponentsPlugin, {
  // AModalForm and AModalWizard take these props too
  AModal: {
    props: {
      closeButtonClass: "a_btn a_btn_link",
      useEscape: false,
    },
  },
  AModalWizard: {
    props: {
      useEscape: true,
    },
  },
  AAlert: {
    props: {
      closable: true,
    },
    icons: {
      info: CheckLg,
    },
  },
  ASelect: {
    props: {
      keyId: "id",
      keyLabel: "name",
    },
  },
  ASelectStyle: {
    cssClasses: [
      { label: "My style", value: "my_style", group: "my", groupName: "My styles" },
    ],
  },
  ATable: {
    props: {
      isStriped: true,
    },
    config: {
      isHtmlTitleSort: true,
    },
  },
  ARouterLinkConfig: {
    routes: router.getRoutes(),
    excludedPathRoutes: ["/:catchAll(.*)"],
  },
});

app.mount("#app");`,ownComponentCode:`import {
  getComponentOption,
  getPropDefault,
} from "aloha-vue";

export default {
  name: "MyDialog",
  props: {
    size: {
      type: String,
      required: false,
      default: () => getPropDefault("MyDialog", "size", "medium"),
    },
  },
  computed: {
    icons() {
      return getComponentOption("MyDialog", "icons", {});
    },
  },
};

// app.use(AComponentsPlugin, {
//   MyDialog: {
//     extends: "AModal", // the props of AModal are the defaults of MyDialog
//     props: { size: "large" },
//     icons: { close: "<svg>…</svg>" },
//   },
// });`}}var u={name:`PageComponentsPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,ownComponentCode:t}=l();return{connectionCode:e,ownComponentCode:t}}};function d(e,t,n,r,l,u){let d=c(`a-page-tab-title`),f=c(`a-translation`),p=c(`aloha-highlightjs`);return s(),i(`div`,null,[o(d,{title:`_PAGE_PLUGIN_COMPONENTS_PAGE_TITLE_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_COMPONENTS_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_COMPONENTS_INTRODUCTION_`}),t[0]||=a(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_COMPONENTS_CONNECTION_`}),o(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),o(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_COMPONENTS_NOTES_`}),t[1]||=a(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_COMPONENTS_OPTIONS_`}),t[2]||=a(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_COMPONENTS_INHERITANCE_`}),t[3]||=a(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_COMPONENTS_OWN_COMPONENTS_`}),o(p,{code:e.ownComponentCode,language:`javascript`},null,8,[`code`])])}var f=r(u,[[`render`,d]]);export{f as default};