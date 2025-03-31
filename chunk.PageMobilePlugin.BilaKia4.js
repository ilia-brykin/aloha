import{A as l}from"./chunk.AlohaHighlightjs.BbO2lEkw.js";import{A as r,_}from"./bundle.index.CBN060hU.js";import{W as m,Z as e,Y as s,e as i,V as c}from"./chunk.vendor.DOoIAE1K.js";import"./chunk.vendor-lodash.BAE3VvPy.js";import{A as u}from"./chunk.APageTabTitle.B7cA4VS4.js";import"./chunk.translations-ar.B3XbQD-F.js";import"./chunk.translations-de.BU3I7i25.js";import"./chunk.translations-en.Dz5VXJqd.js";import"./chunk.translations-es.BKlBZ5Wd.js";import"./chunk.translations-fr.CMF_fLGD.js";import"./chunk.translations-hr.C5ZK4YvJ.js";import"./chunk.translations-it.CAxOY8kK.js";import"./chunk.translations-ru.C-L7Lrhy.js";function d(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  AMobilePlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(AMobilePlugin, {
  breakpoint: 1023,
});

app.mount("#app");`,useCode:`<template>
  <div>
    <p v-if="isMobileWidth">You are using a mobile device.</p>
    <p v-else>You are using a desktop device.</p>
  </div>
</template>

<script>
import {
  AMobileAPI,
} from "aloha-vue";

export default {
  setup() {
    const {
      isMobileWidth,
    } = AMobileAPI;
    
    return {
      isMobileWidth,
    };
  },
};
<\/script>`}}const g={name:"PageMobilePlugin",components:{AlohaHighlightjs:l,APageTabTitle:u,ATranslation:r},setup(){const{connectionCode:t,useCode:o}=d();return{connectionCode:t,useCode:o}}};function A(t,o,P,h,f,E){const p=i("a-page-tab-title"),a=i("a-translation"),n=i("aloha-highlightjs");return c(),m("div",null,[e(p,{title:"_PAGE_PLUGIN_MOBILE_PAGE_TITLE_"}),e(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_MOBILE_H1_"}),e(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_INTRODUCTION_"}),o[0]||(o[0]=s("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_CONNECTION_"}),e(n,{code:t.connectionCode,language:"javascript"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_CONNECTION_NOTES_"}),o[1]||(o[1]=s("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_EXAMPLES_"}),e(n,{code:t.useCode,language:"html"},null,8,["code"])])}const k=_(g,[["render",A]]);export{k as default};
