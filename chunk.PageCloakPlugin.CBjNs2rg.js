import{A as i,_ as r}from"./bundle.index.C7Ek6FkK.js";import{k as n,M as _,O as o,N as s,H as m}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import{A as c}from"./chunk.APageTabTitle.DQukzQ6F.js";import{A as u}from"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.VcyX-0OP.js";import"./chunk.translations-de.BB166Gvw.js";import"./chunk.translations-en.BxXR_6Tj.js";import"./chunk.translations-es.DQoASoVY.js";import"./chunk.translations-fr.BzcTnApt.js";import"./chunk.translations-hr.BQ7jDKmS.js";import"./chunk.translations-it.BirMsOP8.js";import"./chunk.translations-ru.WpWl9l5W.js";function A(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import ACloakPlugin from "aloha-vue";

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
<\/script>`}}const d={name:"PageCloakPlugin",components:{AlohaHighlightjs:u,APageTabTitle:c,ATranslation:i},setup(){const{connectionCode:a,useCode:t}=A();return{connectionCode:a,useCode:t}}};function g(a,t,C,P,f,h){const p=n("a-page-tab-title"),e=n("a-translation"),l=n("aloha-highlightjs");return m(),_("div",null,[o(p,{title:"_PAGE_PLUGIN_CLOAK_PAGE_TITLE_"}),o(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_CLOAK_H1_"}),o(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_INTRODUCTION_"}),t[0]||(t[0]=s("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_CONNECTION_"}),o(l,{code:a.connectionCode,language:"javascript"},null,8,["code"]),o(e,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_CONNECTION_NOTES_"}),t[1]||(t[1]=s("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_CLOAK_EXAMPLES_"}),o(l,{code:a.useCode,language:"html"},null,8,["code"])])}const j=r(d,[["render",g]]);export{j as default};
