import{A as l,_ as r}from"./bundle.index.VWeDPPTP.js";import{R as _,V as e,U as s,b as i,Q as m}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as c}from"./chunk.APageTabTitle.DvqMiiyW.js";import{A as u}from"./chunk.AlohaHighlightjs.Bnb6Sejr.js";import"./chunk.translations-ar.C-NNZ74u.js";import"./chunk.translations-de.DwcQ1j-I.js";import"./chunk.translations-en.CpaURLZT.js";import"./chunk.translations-es.BlLUKL-T.js";import"./chunk.translations-fr.CBV_DS4p.js";import"./chunk.translations-hr.CNqGGqH_.js";import"./chunk.translations-it.Csqv_psg.js";import"./chunk.translations-ru.D8ZNuRSu.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const g={name:"PageMobilePlugin",components:{AlohaHighlightjs:u,APageTabTitle:c,ATranslation:l},setup(){const{connectionCode:t,useCode:o}=d();return{connectionCode:t,useCode:o}}};function A(t,o,P,h,f,E){const p=i("a-page-tab-title"),a=i("a-translation"),n=i("aloha-highlightjs");return m(),_("div",null,[e(p,{title:"_PAGE_PLUGIN_MOBILE_PAGE_TITLE_"}),e(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_MOBILE_H1_"}),e(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_INTRODUCTION_"}),o[0]||(o[0]=s("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_CONNECTION_"}),e(n,{code:t.connectionCode,language:"javascript"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_CONNECTION_NOTES_"}),o[1]||(o[1]=s("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_MOBILE_EXAMPLES_"}),e(n,{code:t.useCode,language:"html"},null,8,["code"])])}const k=r(g,[["render",A]]);export{k as default};
