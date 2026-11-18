import{t as e}from"./chunk.AlohaHighlightjs.K88URRtS.js";import{d as t,et as n}from"./bundle.index.Csp1_sOL.js";import{Lt as r,Pt as i,Xt as a,en as o,zt as s}from"./chunk.vendor.Cx127fe1.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PagePageTabTitlePlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(e,t,n,c,l,u){let d=o(`a-page-tab-title`),f=o(`a-translation`),p=o(`aloha-highlightjs`);return a(),r(`div`,null,[s(d,{title:`_PAGE_PLUGIN_PAGE_TAB_TITLE_PAGE_TITLE_`}),s(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_H1_`}),s(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),s(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_CONNECTION_`}),s(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),s(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),s(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_`}),s(p,{code:e.useCode,language:`html`},null,8,[`code`]),s(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_NOTES_`})])}var f=c(u,[[`render`,d]]);export{f as default};