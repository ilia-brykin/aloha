import{A as l}from"./chunk.AlohaHighlightjs.Cjego80K.js";import{A as r,_}from"./bundle.index.RoneU1c1.js";import{W as m,Z as e,Y as s,e as i,V as c}from"./chunk.vendor.w-kCrpQl.js";import"./chunk.vendor-lodash.GmlDDh1v.js";import{A as u}from"./chunk.APageTabTitle.BGiXiNez.js";import"./chunk.translations-ar.7kyFlj_7.js";import"./chunk.translations-de.BMzqk4tK.js";import"./chunk.translations-en.CYLIQ7pD.js";import"./chunk.translations-es.D962VZ2D.js";import"./chunk.translations-fr.CcjuPFMN.js";import"./chunk.translations-hr.D1P_Fjd9.js";import"./chunk.translations-it.BsI54FWd.js";import"./chunk.translations-ru.hctQRJz1.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
