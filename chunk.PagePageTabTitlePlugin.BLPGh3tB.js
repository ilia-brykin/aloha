import{A as s,_ as p}from"./bundle.index.C7Ek6FkK.js";import{k as _,M as m,O as e,N as i,H as r}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import{A as T}from"./chunk.APageTabTitle.DQukzQ6F.js";import{A as c}from"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.VcyX-0OP.js";import"./chunk.translations-de.BB166Gvw.js";import"./chunk.translations-en.BxXR_6Tj.js";import"./chunk.translations-es.DQoASoVY.js";import"./chunk.translations-fr.BzcTnApt.js";import"./chunk.translations-hr.BQ7jDKmS.js";import"./chunk.translations-it.BirMsOP8.js";import"./chunk.translations-ru.WpWl9l5W.js";function A(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import { APageTabTitlePlugin } from "aloha-vue";

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
<\/script>`}}const P={name:"PagePageTabTitlePlugin",components:{AlohaHighlightjs:c,APageTabTitle:T,ATranslation:s},setup(){const{connectionCode:o,useCode:t}=A();return{connectionCode:o,useCode:t}}};function g(o,t,u,E,d,h){const l=_("a-page-tab-title"),a=_("a-translation"),n=_("aloha-highlightjs");return r(),m("div",null,[e(l,{title:"_PAGE_PLUGIN_PAGE_TAB_TITLE_PAGE_TITLE_"}),e(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_H1_"}),e(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_INTRODUCTION_"}),t[0]||(t[0]=i("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_CONNECTION_"}),e(n,{code:o.connectionCode,language:"javascript"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_NOTES_"}),t[1]||(t[1]=i("hr",{class:"a_my_5"},null,-1)),e(a,{tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_"}),e(n,{code:o.useCode,language:"html"},null,8,["code"]),e(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_NOTES_"})])}const S=p(P,[["render",g]]);export{S as default};
