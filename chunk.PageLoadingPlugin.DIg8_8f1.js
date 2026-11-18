import{t as e}from"./chunk.AlohaHighlightjs.DsvtYqcF.js";import{nt as t,p as n}from"./bundle.index.WAa1Niso.js";import{Bt as r,Ft as i,Rt as a,Zt as o,tn as s}from"./chunk.vendor.H0cZuFAV.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  ALoadingPlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(ALoadingPlugin, {
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
    <a-loading :is-loading="true">
      <div>Aloha</div>
    </a-loading>
  </div>
</template>

<script>
import { 
  ALoading,
} from "aloha-vue";

export default {
  name: "LoadingExample",
  components: {
    ALoading,
  },
};
<\/script>`}}var u={name:`PageLoadingPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:n,ATranslation:t},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),a(`div`,null,[r(d,{title:`_PAGE_PLUGIN_LOADING_PAGE_TITLE_`}),r(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_LOADING_H1_`}),r(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_LOADING_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),r(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_LOADING_CONNECTION_`}),r(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),r(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_LOADING_CONNECTION_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),r(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_LOADING_EXAMPLES_`}),r(p,{code:e.useCode,language:`html`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};