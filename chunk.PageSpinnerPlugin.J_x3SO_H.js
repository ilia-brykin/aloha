import{A as i}from"./chunk.AlohaHighlightjs.B3F2oL8_.js";import{A as _,_ as l}from"./bundle.index.BX3dRE-D.js";import{Y as m,_ as e,Z as s,e as a,W as c}from"./chunk.vendor.BxCHGHAU.js";import"./chunk.vendor-lodash.BMPrua2s.js";import{A as u}from"./chunk.APageTabTitle.B7k8xrql.js";import"./chunk.translations-ar.D8MQqUIX.js";import"./chunk.translations-de.DF2fp9fz.js";import"./chunk.translations-en.Cabsq1fv.js";import"./chunk.translations-es.CTtyunpM.js";import"./chunk.translations-fr.tpgV9obb.js";import"./chunk.translations-hr.v7YKJpdX.js";import"./chunk.translations-it.Dqw3KhB-.js";import"./chunk.translations-ru.Cz76XEJm.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
