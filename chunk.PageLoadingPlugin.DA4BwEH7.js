import{A as l,_ as r}from"./bundle.index.DCnxV7cB.js";import{R as _,V as o,U as s,b as n,Q as m}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as c}from"./chunk.APageTabTitle.C3nV7Rnf.js";import{A as d}from"./chunk.AlohaHighlightjs.rF1jvLhM.js";import"./chunk.translations-ar.CL71O9SG.js";import"./chunk.translations-de.DIN2Jpxb.js";import"./chunk.translations-en.CI9kEZeh.js";import"./chunk.translations-es.BBJvdG2l.js";import"./chunk.translations-fr.C2AjtHKq.js";import"./chunk.translations-hr.CkUFQqdC.js";import"./chunk.translations-it.CvHGMPAq.js";import"./chunk.translations-ru.B99zmNGE.js";function g(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const u={name:"PageLoadingPlugin",components:{AlohaHighlightjs:d,APageTabTitle:c,ATranslation:l},setup(){const{connectionCode:a,useCode:t}=g();return{connectionCode:a,useCode:t}}};function A(a,t,N,L,P,f){const p=n("a-page-tab-title"),e=n("a-translation"),i=n("aloha-highlightjs");return m(),_("div",null,[o(p,{title:"_PAGE_PLUGIN_LOADING_PAGE_TITLE_"}),o(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_LOADING_H1_"}),o(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_INTRODUCTION_"}),t[0]||(t[0]=s("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_CONNECTION_"}),o(i,{code:a.connectionCode,language:"javascript"},null,8,["code"]),o(e,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_CONNECTION_NOTES_"}),t[1]||(t[1]=s("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_EXAMPLES_"}),o(i,{code:a.useCode,language:"html"},null,8,["code"])])}const $=r(u,[["render",A]]);export{$ as default};
