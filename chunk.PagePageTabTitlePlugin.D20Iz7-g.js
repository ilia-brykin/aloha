import{t as e}from"./chunk.AlohaHighlightjs.DP2HoDgQ.js";import{h as t,mn as n,t as r}from"./bundle.index.LlT2KVEy.js";import{Vt as i,Wt as a,an as o,ln as s,qt as c}from"./chunk.vendor.SEynj6EJ.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PagePageTabTitlePlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(e,t,n,r,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),a(`div`,null,[c(d,{title:`_PAGE_PLUGIN_PAGE_TAB_TITLE_PAGE_TITLE_`}),c(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_H1_`}),c(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_CONNECTION_`}),c(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),c(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_`}),c(p,{code:e.useCode,language:`html`},null,8,[`code`]),c(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_NOTES_`})])}var f=r(u,[[`render`,d]]);export{f as default};