import{A as i}from"./chunk.AlohaHighlightjs.BioRad36.js";import{A as _,_ as l}from"./bundle.index.BJbfSpRI.js";import{V as m,Y as e,W as s,e as a,U as c}from"./chunk.vendor.C8MJL5OZ.js";import"./chunk.vendor-lodash.D7ZMGyiW.js";import{A as u}from"./chunk.APageTabTitle.bIz8MbtW.js";import"./chunk.translations-ar.CSRM3YJ8.js";import"./chunk.translations-de.Cdlrfk3w.js";import"./chunk.translations-en.BVrNHVVQ.js";import"./chunk.translations-es.DXEdiuYo.js";import"./chunk.translations-fr.CVKEU5Mu.js";import"./chunk.translations-hr.DL1l5v8s.js";import"./chunk.translations-it.BKw_NW0S.js";import"./chunk.translations-ru.CQ8apMH7.js";function d(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  ASpinnerPlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(ASpinnerPlugin, {
  propsDefault: {
    class: "my_custom_spinner",
    safeHtml: "<strong>Loading...</strong>",
    size: "large",
    tag: "div",
  },
});

app.mount("#app");`,useCode:`<template>
  <div>
    <a-spinner></a-spinner>
  </div>
</template>

<script>
import { 
  ASpinner,
} from "aloha-vue";

export default {
  name: "SpinnerExample",
  components: {
    ASpinner,
  },
};
<\/script>`}}const g={name:"PageSpinnerPlugin",components:{AlohaHighlightjs:i,APageTabTitle:u,ATranslation:_},setup(){const{connectionCode:o,useCode:t}=d();return{connectionCode:o,useCode:t}}};function N(o,t,P,A,f,E){const r=a("a-page-tab-title"),n=a("a-translation"),p=a("aloha-highlightjs");return c(),m("div",null,[e(r,{title:"_PAGE_PLUGIN_SPINNER_PAGE_TITLE_"}),e(n,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_SPINNER_H1_"}),e(n,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_INTRODUCTION_"}),t[0]||(t[0]=s("hr",{class:"a_my_5"},null,-1)),e(n,{tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_CONNECTION_"}),e(p,{code:o.connectionCode,language:"javascript"},null,8,["code"]),e(n,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_CONNECTION_NOTES_"}),t[1]||(t[1]=s("hr",{class:"a_my_5"},null,-1)),e(n,{tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_EXAMPLES_"}),e(p,{code:o.useCode,language:"html"},null,8,["code"])])}const $=l(g,[["render",N]]);export{$ as default};
