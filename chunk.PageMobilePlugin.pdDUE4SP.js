import{A as l,_ as r}from"./bundle.index.BzB4Th4f.js";import{k as i,R as _,V as e,U as s,O as m}from"./chunk.vendor.CQXHzgd8.js";import"./chunk.vendor-lodash.Cdu0tpky.js";import{A as c}from"./chunk.APageTabTitle.xPM3SGX8.js";import{A as u}from"./chunk.AlohaHighlightjs.dTNt8W7q.js";import"./chunk.translations-ar.Bl94ryzA.js";import"./chunk.translations-de.B7d9jdMO.js";import"./chunk.translations-en.BtgGWXka.js";import"./chunk.translations-es.BSOZWCCF.js";import"./chunk.translations-fr.CcWHH1cx.js";import"./chunk.translations-hr.CJ7NF5Fz.js";import"./chunk.translations-it.DU_NwUPS.js";import"./chunk.translations-ru.FgtNK4nl.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const g={name:"PageMobilePlugin",components:{AlohaHighlightjs:u,APageTabTitle:c,ATranslation:l},setup(){const{connectionCode:t,useCode:o}=d();return{connectionCode:t,useCode:o}}};function A(t,o,P,h,f,E){const p=i("a-page-tab-title"),a=i("a-translation"),n=i("aloha-highlightjs");return m(),_("div",null,[e(p,{title:"_PAGE_PLUGIN_MOBILE_PAGE_TITLE_"}),e(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_MOBILE_H1_"}),e(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_INTRODUCTION_"}),o[0]||(o[0]=s("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_CONNECTION_"}),e(n,{code:t.connectionCode,language:"javascript"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_CONNECTION_NOTES_"}),o[1]||(o[1]=s("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_EXAMPLES_"}),e(n,{code:t.useCode,language:"html"},null,8,["code"])])}const j=r(g,[["render",A]]);export{j as default};
