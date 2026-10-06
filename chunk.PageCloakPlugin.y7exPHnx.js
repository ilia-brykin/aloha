import{Dt as e,Ut as t,kt as n,wt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,p as o,t as s}from"./bundle.index.BmSiyQNH.js";import{t as c}from"./chunk.AlohaHighlightjs.JeygR1Fm.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  ACloakPlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(ACloakPlugin, {
  propsDefault: {
    align: "left",
    size: 8,
    tag: "section",
    text: "Loading, please wait...",
    textAlign: "center",
  },
});

app.mount("#app");`,useCode:`<template>
  <div>
    <a-cloak></a-cloak>
  </div>
</template>

<script>
import { 
  ACloak,
} from "aloha-vue";

export default {
  name: "CloakExample",
  components: {
    ACloak,
  },
};
<\/script>`}}var u={name:`PageCloakPlugin`,components:{AlohaHighlightjs:c,APageTabTitle:o,ATranslation:a},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(a,o,s,c,l,u){let d=t(`a-page-tab-title`),f=t(`a-translation`),p=t(`aloha-highlightjs`);return i(),e(`div`,null,[n(d,{title:`_PAGE_PLUGIN_CLOAK_PAGE_TITLE_`}),n(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_CLOAK_H1_`}),n(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_CLOAK_INTRODUCTION_`}),o[0]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_CLOAK_CONNECTION_`}),n(p,{code:a.connectionCode,language:`javascript`},null,8,[`code`]),n(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_CLOAK_CONNECTION_NOTES_`}),o[1]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_CLOAK_EXAMPLES_`}),n(p,{code:a.useCode,language:`html`},null,8,[`code`])])}var f=s(u,[[`render`,d]]);export{f as default};