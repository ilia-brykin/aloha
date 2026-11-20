import{t as e}from"./chunk.AlohaHighlightjs.CA2juRnR.js";import{f as t,qt as n}from"./bundle.index.BaX-GPsX.js";import{$t as r,Ft as i,Rt as a,Vt as o,rn as s}from"./chunk.vendor.BvryzG0o.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  APropsDefaultPlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(APropsDefaultPlugin, {
  AModal: {
    closeButtonClass: "a_btn a_btn_link",
    useEscape: false,
  },
  ASelect: {
    keyId: "id",
    keyLabel: "name",
  },
  ASpinner: {
    tag: "div",
  },
  ATable: {
    isStriped: true,
  },
});

app.mount("#app");`,ownComponentCode:`import {
  getPropDefault,
} from "aloha-vue";

export default {
  name: "MyComponent",
  props: {
    size: {
      type: String,
      required: false,
      default: () => getPropDefault("MyComponent", "size", "medium"),
    },
  },
};

// app.use(APropsDefaultPlugin, { MyComponent: { size: "large" } });`}}var u={name:`PagePropsDefaultPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,ownComponentCode:t}=l();return{connectionCode:e,ownComponentCode:t}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return r(),a(`div`,null,[o(d,{title:`_PAGE_PLUGIN_PROPS_DEFAULT_PAGE_TITLE_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_PROPS_DEFAULT_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PROPS_DEFAULT_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PROPS_DEFAULT_CONNECTION_`}),o(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),o(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PROPS_DEFAULT_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PROPS_DEFAULT_OWN_COMPONENTS_`}),o(p,{code:e.ownComponentCode,language:`javascript`},null,8,[`code`]),t[2]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PROPS_DEFAULT_PLUGINS_`})])}var f=c(u,[[`render`,d]]);export{f as default};