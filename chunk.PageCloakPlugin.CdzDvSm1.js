import{A as i}from"./chunk.AlohaHighlightjs.De6fh8wy.js";import{A as r,_}from"./bundle.index.ChPaN5JE.js";import{Y as m,Z as c,$ as o,_ as s,f as n}from"./chunk.vendor.BEEJbev-.js";import"./chunk.vendor-lodash.CwOx-Q_g.js";import{A as u}from"./chunk.APageTabTitle.BhsgOfjJ.js";import"./chunk.translations-ar.OdYCJ4ep.js";import"./chunk.translations-de.vP7VpmLI.js";import"./chunk.translations-en.MDhZAuGP.js";import"./chunk.translations-es.CMyEvw0c.js";import"./chunk.translations-fr.mYQ0kUNL.js";import"./chunk.translations-hr.B6dmhszm.js";import"./chunk.translations-it.Cm5vohQy.js";import"./chunk.translations-ru.dnLTx1SB.js";function A(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const d={name:"PageCloakPlugin",components:{AlohaHighlightjs:i,APageTabTitle:u,ATranslation:r},setup(){const{connectionCode:a,useCode:t}=A();return{connectionCode:a,useCode:t}}};function g(a,t,C,f,P,h){const p=n("a-page-tab-title"),e=n("a-translation"),l=n("aloha-highlightjs");return m(),c("div",null,[o(p,{title:"_PAGE_PLUGIN_CLOAK_PAGE_TITLE_"}),o(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_CLOAK_H1_"}),o(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_INTRODUCTION_"}),t[0]||(t[0]=s("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_CONNECTION_"}),o(l,{code:a.connectionCode,language:"javascript"},null,8,["code"]),o(e,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_CONNECTION_NOTES_"}),t[1]||(t[1]=s("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_EXAMPLES_"}),o(l,{code:a.useCode,language:"html"},null,8,["code"])])}const $=_(d,[["render",g]]);export{$ as default};
