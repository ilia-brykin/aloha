import{A as i}from"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import{a3 as l,ah as _}from"./bundle.index.D1OA29U_.js";import{bc as m,aS as c,aV as e,aP as s,bi as n}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import{A as u}from"./chunk.APageTabTitle.BjEZe9gt.js";import"./chunk.translations-ar.ChuYlDzT.js";import"./chunk.translations-de.6pPcJRrO.js";import"./chunk.translations-en.DT3q5fLP.js";import"./chunk.translations-es.B6sZfxDK.js";import"./chunk.translations-fr.ecArFLfS.js";import"./chunk.translations-hr.DhAqHXEL.js";import"./chunk.translations-it.DjP2RsZa.js";import"./chunk.translations-ru.L_V4Dr6V.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const g={name:"PageSpinnerPlugin",components:{AlohaHighlightjs:i,APageTabTitle:u,ATranslation:l},setup(){const{connectionCode:o,useCode:t}=d();return{connectionCode:o,useCode:t}}};function N(o,t,P,A,f,E){const r=n("a-page-tab-title"),a=n("a-translation"),p=n("aloha-highlightjs");return m(),c("div",null,[e(r,{title:"_PAGE_PLUGIN_SPINNER_PAGE_TITLE_"}),e(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_SPINNER_H1_"}),e(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_INTRODUCTION_"}),t[0]||(t[0]=s("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_CONNECTION_"}),e(p,{code:o.connectionCode,language:"javascript"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_CONNECTION_NOTES_"}),t[1]||(t[1]=s("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_EXAMPLES_"}),e(p,{code:o.useCode,language:"html"},null,8,["code"])])}const $=_(g,[["render",N]]);export{$ as default};
