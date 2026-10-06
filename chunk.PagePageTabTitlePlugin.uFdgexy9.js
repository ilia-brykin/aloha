import{Dt as e,Ut as t,kt as n,wt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,p as o,t as s}from"./bundle.index.BmSiyQNH.js";import{t as c}from"./chunk.AlohaHighlightjs.JeygR1Fm.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PagePageTabTitlePlugin`,components:{AlohaHighlightjs:c,APageTabTitle:o,ATranslation:a},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(a,o,s,c,l,u){let d=t(`a-page-tab-title`),f=t(`a-translation`),p=t(`aloha-highlightjs`);return i(),e(`div`,null,[n(d,{title:`_PAGE_PLUGIN_PAGE_TAB_TITLE_PAGE_TITLE_`}),n(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_H1_`}),n(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_INTRODUCTION_`}),o[0]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_CONNECTION_`}),n(p,{code:a.connectionCode,language:`javascript`},null,8,[`code`]),n(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_NOTES_`}),o[1]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_`}),n(p,{code:a.useCode,language:`html`},null,8,[`code`]),n(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_NOTES_`})])}var f=s(u,[[`render`,d]]);export{f as default};