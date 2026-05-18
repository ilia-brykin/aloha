import{A as l}from"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import{a3 as r,ah as _}from"./bundle.index.D1OA29U_.js";import{bc as m,aS as c,aV as a,aP as s,bi as n}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import{A as d}from"./chunk.APageTabTitle.BjEZe9gt.js";import"./chunk.translations-ar.ChuYlDzT.js";import"./chunk.translations-de.6pPcJRrO.js";import"./chunk.translations-en.DT3q5fLP.js";import"./chunk.translations-es.B6sZfxDK.js";import"./chunk.translations-fr.ecArFLfS.js";import"./chunk.translations-hr.DhAqHXEL.js";import"./chunk.translations-it.DjP2RsZa.js";import"./chunk.translations-ru.L_V4Dr6V.js";function g(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const u={name:"PageLoadingPlugin",components:{AlohaHighlightjs:l,APageTabTitle:d,ATranslation:r},setup(){const{connectionCode:t,useCode:o}=g();return{connectionCode:t,useCode:o}}};function A(t,o,N,P,L,f){const p=n("a-page-tab-title"),e=n("a-translation"),i=n("aloha-highlightjs");return m(),c("div",null,[a(p,{title:"_PAGE_PLUGIN_LOADING_PAGE_TITLE_"}),a(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_LOADING_H1_"}),a(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_INTRODUCTION_"}),o[0]||(o[0]=s("hr",{class:"a_my_5"},null,-1)),a(e,{tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_CONNECTION_"}),a(i,{code:t.connectionCode,language:"javascript"},null,8,["code"]),a(e,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_CONNECTION_NOTES_"}),o[1]||(o[1]=s("hr",{class:"a_my_5"},null,-1)),a(e,{tag:"div","safe-html":"_PAGE_PLUGIN_LOADING_EXAMPLES_"}),a(i,{code:t.useCode,language:"html"},null,8,["code"])])}const $=_(u,[["render",A]]);export{$ as default};
