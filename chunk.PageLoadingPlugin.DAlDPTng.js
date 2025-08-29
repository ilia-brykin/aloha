import{A as l}from"./chunk.AlohaHighlightjs.BZkAdeSp.js";import{A as r,_}from"./bundle.index.DK_vOYsr.js";import{Y as m,_ as o,Z as s,e as n,W as c}from"./chunk.vendor.BAPLGb06.js";import"./chunk.vendor-lodash.CvJTxLoq.js";import{A as d}from"./chunk.APageTabTitle.ZOt-dPUn.js";import"./chunk.translations-ar.BaEw1H53.js";import"./chunk.translations-de.CFoNw1Py.js";import"./chunk.translations-en.67MmhVHy.js";import"./chunk.translations-es.5ubCwQVx.js";import"./chunk.translations-fr.6Ca2IQZG.js";import"./chunk.translations-hr.DTkuJYOG.js";import"./chunk.translations-it.BXmGjZtD.js";import"./chunk.translations-ru.q5VuwMVw.js";function g(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const u={name:"PageLoadingPlugin",components:{AlohaHighlightjs:l,APageTabTitle:d,ATranslation:r},setup(){const{connectionCode:a,useCode:t}=g();return{connectionCode:a,useCode:t}}};function A(a,t,N,L,P,f){const p=n("a-page-tab-title"),e=n("a-translation"),i=n("aloha-highlightjs");return c(),m("div",null,[o(p,{title:"_PAGE_PLUGIN_LOADING_PAGE_TITLE_"}),o(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_LOADING_H1_"}),o(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_INTRODUCTION_"}),t[0]||(t[0]=s("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_CONNECTION_"}),o(i,{code:a.connectionCode,language:"javascript"},null,8,["code"]),o(e,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_CONNECTION_NOTES_"}),t[1]||(t[1]=s("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_EXAMPLES_"}),o(i,{code:a.useCode,language:"html"},null,8,["code"])])}const $=_(u,[["render",A]]);export{$ as default};
