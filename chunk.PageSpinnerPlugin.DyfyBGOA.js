import{A as i}from"./chunk.AlohaHighlightjs.BZkAdeSp.js";import{A as _,_ as l}from"./bundle.index.DK_vOYsr.js";import{Y as m,_ as e,Z as s,e as a,W as c}from"./chunk.vendor.BAPLGb06.js";import"./chunk.vendor-lodash.CvJTxLoq.js";import{A as u}from"./chunk.APageTabTitle.ZOt-dPUn.js";import"./chunk.translations-ar.BaEw1H53.js";import"./chunk.translations-de.CFoNw1Py.js";import"./chunk.translations-en.67MmhVHy.js";import"./chunk.translations-es.5ubCwQVx.js";import"./chunk.translations-fr.6Ca2IQZG.js";import"./chunk.translations-hr.DTkuJYOG.js";import"./chunk.translations-it.BXmGjZtD.js";import"./chunk.translations-ru.q5VuwMVw.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
