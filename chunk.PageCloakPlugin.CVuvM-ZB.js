import{A as i}from"./chunk.AlohaHighlightjs.De6fh8wy.js";import{A as r,_}from"./bundle.index.CFbxDSwI.js";import{Y as m,Z as c,$ as o,_ as s,f as n}from"./chunk.vendor.BEEJbev-.js";import"./chunk.vendor-lodash.CwOx-Q_g.js";import{A as u}from"./chunk.APageTabTitle.CD5SY8yV.js";import"./chunk.translations-ar.BbG7LYEj.js";import"./chunk.translations-de.EatA1qxA.js";import"./chunk.translations-en.Biw9X527.js";import"./chunk.translations-es.D4hd8X4D.js";import"./chunk.translations-fr.dDiY09fC.js";import"./chunk.translations-hr.dmhq0i65.js";import"./chunk.translations-it.FS6Wj0nZ.js";import"./chunk.translations-ru.C-1t0C30.js";function A(){return{connectionCode:`import { createApp } from "vue";
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
