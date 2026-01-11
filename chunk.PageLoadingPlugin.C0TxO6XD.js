import{A as l}from"./chunk.AlohaHighlightjs.BwPt1uu6.js";import{A as r,_}from"./bundle.index.CQ2HubBE.js";import{Y as m,_ as o,Z as s,e as n,W as c}from"./chunk.vendor.tcMGz7j_.js";import"./chunk.vendor-lodash.rFt76tyK.js";import{A as d}from"./chunk.APageTabTitle.CgJ1qBaZ.js";import"./chunk.translations-ar.lwHXa6M8.js";import"./chunk.translations-de.5rx9bmCn.js";import"./chunk.translations-en.DAz4i_Be.js";import"./chunk.translations-es.BVLNzz-z.js";import"./chunk.translations-fr.Wj-t-3lM.js";import"./chunk.translations-hr.BAIEX8fg.js";import"./chunk.translations-it.BomBJXhu.js";import"./chunk.translations-ru.D4MsBfSL.js";function g(){return{connectionCode:`import { createApp } from "vue";
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
