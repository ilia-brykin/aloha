import{A as i}from"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import{a3 as r,ah as _}from"./bundle.index.8diqlMmu.js";import{bc as m,aS as c,aV as a,aP as s,bi as n}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import{A as u}from"./chunk.APageTabTitle.-kMqBjfq.js";import"./chunk.translations-ar.2GEIsQx2.js";import"./chunk.translations-de.B3W8Bch8.js";import"./chunk.translations-en.D6ESzlsX.js";import"./chunk.translations-es.XiUlXUqv.js";import"./chunk.translations-fr.Vq0cpCce.js";import"./chunk.translations-hr.47g55_67.js";import"./chunk.translations-it.DbY58g7f.js";import"./chunk.translations-ru.B_xj7EMA.js";function A(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  ACloakPlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(ACloakPlugin, {
  propsDefault: {
    align: "left",
    size: 8,
    tag: "section",
    text: "Loading, please wait...",
    textAlign: "center",
  },
});

app.mount("#app");`,useCode:`<template>
  <div>
    <a-cloak></a-cloak>
  </div>
</template>

<script>
import { 
  ACloak,
} from "aloha-vue";

export default {
  name: "CloakExample",
  components: {
    ACloak,
  },
};
<\/script>`}}const d={name:"PageCloakPlugin",components:{AlohaHighlightjs:i,APageTabTitle:u,ATranslation:r},setup(){const{connectionCode:t,useCode:o}=A();return{connectionCode:t,useCode:o}}};function g(t,o,C,P,f,h){const p=n("a-page-tab-title"),e=n("a-translation"),l=n("aloha-highlightjs");return m(),c("div",null,[a(p,{title:"_PAGE_PLUGIN_CLOAK_PAGE_TITLE_"}),a(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_CLOAK_H1_"}),a(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_INTRODUCTION_"}),o[0]||(o[0]=s("hr",{class:"a_my_5"},null,-1)),a(e,{tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_CONNECTION_"}),a(l,{code:t.connectionCode,language:"javascript"},null,8,["code"]),a(e,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_CONNECTION_NOTES_"}),o[1]||(o[1]=s("hr",{class:"a_my_5"},null,-1)),a(e,{tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_EXAMPLES_"}),a(l,{code:t.useCode,language:"html"},null,8,["code"])])}const j=_(d,[["render",g]]);export{j as default};
