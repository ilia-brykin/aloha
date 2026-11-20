import{t as e}from"./chunk.AlohaHighlightjs.CA2juRnR.js";import{f as t,qt as n}from"./bundle.index.as44OnM9.js";import{$t as r,Ft as i,Rt as a,Vt as o,rn as s}from"./chunk.vendor.BvryzG0o.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  APageTabTitlePlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(APageTabTitlePlugin, "Documentation aloha-vue");

app.mount("#app");`,useCode:`<template>
  <div>
    <a-page-tab-title title="Home Page"></a-page-tab-title>
    <h1>Welcome!</h1>
    <p>This is a demo page.</p>
  </div>
</template>

<script>
import { 
  APageTabTitle,
} from "aloha-vue";

export default {
  name: "HomePage",
  components: {
    APageTabTitle,
  },
};
<\/script>`}}var u={name:`PagePageTabTitlePlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return r(),a(`div`,null,[o(d,{title:`_PAGE_PLUGIN_PAGE_TAB_TITLE_PAGE_TITLE_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_CONNECTION_`}),o(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),o(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_`}),o(p,{code:e.useCode,language:`html`},null,8,[`code`]),o(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_NOTES_`})])}var f=c(u,[[`render`,d]]);export{f as default};