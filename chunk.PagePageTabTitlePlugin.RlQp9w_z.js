import{A as s}from"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import{a3 as p,ah as m}from"./bundle.index.D1OA29U_.js";import{bc as r,aS as T,aV as a,aP as i,bi as _}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import{A as c}from"./chunk.APageTabTitle.BjEZe9gt.js";import"./chunk.translations-ar.ChuYlDzT.js";import"./chunk.translations-de.6pPcJRrO.js";import"./chunk.translations-en.DT3q5fLP.js";import"./chunk.translations-es.B6sZfxDK.js";import"./chunk.translations-fr.ecArFLfS.js";import"./chunk.translations-hr.DhAqHXEL.js";import"./chunk.translations-it.DjP2RsZa.js";import"./chunk.translations-ru.L_V4Dr6V.js";function P(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const A={name:"PagePageTabTitlePlugin",components:{AlohaHighlightjs:s,APageTabTitle:c,ATranslation:p},setup(){const{connectionCode:o,useCode:e}=P();return{connectionCode:o,useCode:e}}};function g(o,e,u,E,d,h){const l=_("a-page-tab-title"),t=_("a-translation"),n=_("aloha-highlightjs");return r(),T("div",null,[a(l,{title:"_PAGE_PLUGIN_PAGE_TAB_TITLE_PAGE_TITLE_"}),a(t,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_H1_"}),a(t,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_INTRODUCTION_"}),e[0]||(e[0]=i("hr",{class:"a_my_5"},null,-1)),a(t,{tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_CONNECTION_"}),a(n,{code:o.connectionCode,language:"javascript"},null,8,["code"]),a(t,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_NOTES_"}),e[1]||(e[1]=i("hr",{class:"a_my_5"},null,-1)),a(t,{tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_"}),a(n,{code:o.useCode,language:"html"},null,8,["code"]),a(t,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_PAGE_TAB_TITLE_EXAMPLES_NOTES_"})])}const H=m(A,[["render",g]]);export{H as default};
