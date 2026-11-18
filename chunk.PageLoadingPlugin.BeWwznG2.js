import{t as e}from"./chunk.AlohaHighlightjs.K88URRtS.js";import{d as t,et as n}from"./bundle.index.Csp1_sOL.js";import{Lt as r,Pt as i,Xt as a,en as o,zt as s}from"./chunk.vendor.Cx127fe1.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PageLoadingPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(e,t,n,c,l,u){let d=o(`a-page-tab-title`),f=o(`a-translation`),p=o(`aloha-highlightjs`);return a(),r(`div`,null,[s(d,{title:`_PAGE_PLUGIN_LOADING_PAGE_TITLE_`}),s(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_LOADING_H1_`}),s(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_LOADING_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),s(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_LOADING_CONNECTION_`}),s(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),s(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_LOADING_CONNECTION_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),s(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_LOADING_EXAMPLES_`}),s(p,{code:e.useCode,language:`html`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};