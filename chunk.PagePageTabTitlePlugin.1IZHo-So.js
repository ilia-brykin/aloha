import{A as s}from"./chunk.AlohaHighlightjs.D8Y-nfDK.js";import{A as p,_ as m}from"./bundle.index.BecyEjsf.js";import{Y as r,Z as T,$ as e,_ as i,f as _}from"./chunk.vendor.Byi294Mq.js";import"./chunk.vendor-lodash.BZTvCWYY.js";import{A as c}from"./chunk.APageTabTitle.DeH86sFI.js";import"./chunk.translations-ar.CEE2zr9E.js";import"./chunk.translations-de.B5EkW3Bn.js";import"./chunk.translations-en.By5OazNK.js";import"./chunk.translations-es.BBwYsoM6.js";import"./chunk.translations-fr.sIUOe09m.js";import"./chunk.translations-hr.BW2q_4Qp.js";import"./chunk.translations-it.BpY7vfJm.js";import"./chunk.translations-ru.j7n72CSV.js";function A(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  APageTabTitlePlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(APageTabTitlePlugin, "Documentation aloha-vue");

app.mount("#app");`,useCode:`<template>
  <div>
    <a-page-tab-title title="Home Page"></a-page-tab-title>
    <h1>Welcome!</h1>
    <p>This is a demo page.</p>
  </div>
</template>

<script>
import { 
  APageTabTitle,
} from "aloha-vue";

export default {
  name: "HomePage",
  components: {
    APageTabTitle,
  },
};
<\/script>`}}const P={name:"PagePageTabTitlePlugin",components:{AlohaHighlightjs:s,APageTabTitle:c,ATranslation:p},setup(){const{connectionCode:o,useCode:t}=A();return{connectionCode:o,useCode:t}}};function g(o,t,u,E,d,h){const l=_("a-page-tab-title"),a=_("a-translation"),n=_("aloha-highlightjs");return r(),T("div",null,[e(l,{title:"_PAGE_PLUGIN_PAGE_TAB_TITLE_PAGE_TITLE_"}),e(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_H1_"}),e(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_INTRODUCTION_"}),t[0]||(t[0]=i("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_CONNECTION_"}),e(n,{code:o.connectionCode,language:"javascript"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_NOTES_"}),t[1]||(t[1]=i("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_"}),e(n,{code:o.useCode,language:"html"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_NOTES_"})])}const H=m(P,[["render",g]]);export{H as default};
