import{A as s}from"./chunk.AlohaHighlightjs.CqftpDCI.js";import{A as p,_ as m}from"./bundle.index.bVBPaIx9.js";import{W as r,Y as T,_ as e,Z as i,e as _}from"./chunk.vendor.7qYoMuVo.js";import"./chunk.vendor-lodash.CDw4fzB6.js";import{A as c}from"./chunk.APageTabTitle.CeAqm7ve.js";import"./chunk.translations-ar.DStCCijA.js";import"./chunk.translations-de.BVoiITyD.js";import"./chunk.translations-en.DLCxJau6.js";import"./chunk.translations-es.BYz5u4IQ.js";import"./chunk.translations-fr.B9Nr_iLj.js";import"./chunk.translations-hr.DhPJ8JEd.js";import"./chunk.translations-it.D6f5eU5y.js";import"./chunk.translations-ru.BWP_gszP.js";function A(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const P={name:"PagePageTabTitlePlugin",components:{AlohaHighlightjs:s,APageTabTitle:c,ATranslation:p},setup(){const{connectionCode:o,useCode:t}=A();return{connectionCode:o,useCode:t}}};function g(o,t,u,E,d,h){const l=_("a-page-tab-title"),a=_("a-translation"),n=_("aloha-highlightjs");return r(),T("div",null,[e(l,{title:"_PAGE_PLUGIN_PAGE_TAB_TITLE_PAGE_TITLE_"}),e(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_H1_"}),e(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_INTRODUCTION_"}),t[0]||(t[0]=i("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_CONNECTION_"}),e(n,{code:o.connectionCode,language:"javascript"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_NOTES_"}),t[1]||(t[1]=i("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_"}),e(n,{code:o.useCode,language:"html"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_NOTES_"})])}const S=m(P,[["render",g]]);export{S as default};
