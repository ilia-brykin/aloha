import{A as l}from"./chunk.AlohaHighlightjs.BcqcN4_H.js";import{A as r,_}from"./bundle.index.B5Ump3NV.js";import{W as m,Z as o,Y as s,e as n,V as c}from"./chunk.vendor.YBdBFhvS.js";import"./chunk.vendor-lodash.fC0_u3pc.js";import{A as d}from"./chunk.APageTabTitle.Ba7S19rj.js";import"./chunk.translations-ar.DUgPHK6b.js";import"./chunk.translations-de.BwNts-rr.js";import"./chunk.translations-en.CFe-oKBT.js";import"./chunk.translations-es.DMO-xBXo.js";import"./chunk.translations-fr.D3AzaZd0.js";import"./chunk.translations-hr.Bt2Zs4oz.js";import"./chunk.translations-it.BrZql0Fa.js";import"./chunk.translations-ru.CjiVmT3b.js";function g(){return{connectionCode:`import { createApp } from "vue";
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
