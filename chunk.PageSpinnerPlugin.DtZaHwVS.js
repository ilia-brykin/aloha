import{A as i,_}from"./bundle.index.C7Ek6FkK.js";import{k as a,M as l,O as e,N as s,H as m}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import{A as c}from"./chunk.APageTabTitle.DQukzQ6F.js";import{A as u}from"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.VcyX-0OP.js";import"./chunk.translations-de.BB166Gvw.js";import"./chunk.translations-en.BxXR_6Tj.js";import"./chunk.translations-es.DQoASoVY.js";import"./chunk.translations-fr.BzcTnApt.js";import"./chunk.translations-hr.BQ7jDKmS.js";import"./chunk.translations-it.BirMsOP8.js";import"./chunk.translations-ru.WpWl9l5W.js";function N(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import ASpinnerPlugin from "aloha-vue";

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
<\/script>`}}const d={name:"PageSpinnerPlugin",components:{AlohaHighlightjs:u,APageTabTitle:c,ATranslation:i},setup(){const{connectionCode:o,useCode:t}=N();return{connectionCode:o,useCode:t}}};function g(o,t,P,A,f,E){const r=a("a-page-tab-title"),n=a("a-translation"),p=a("aloha-highlightjs");return m(),l("div",null,[e(r,{title:"_PAGE_PLUGIN_SPINNER_PAGE_TITLE_"}),e(n,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_SPINNER_H1_"}),e(n,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_INTRODUCTION_"}),t[0]||(t[0]=s("hr",{class:"a_my_5"},null,-1)),e(n,{tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_CONNECTION_"}),e(p,{code:o.connectionCode,language:"javascript"},null,8,["code"]),e(n,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_CONNECTION_NOTES_"}),t[1]||(t[1]=s("hr",{class:"a_my_5"},null,-1)),e(n,{tag:"div","safe-html":"_PAGE_PLUGIN_SPINNER_EXAMPLES_"}),e(p,{code:o.useCode,language:"html"},null,8,["code"])])}const H=_(d,[["render",g]]);export{H as default};
