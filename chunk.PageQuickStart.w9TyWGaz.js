import{t as e}from"./chunk.AlohaHighlightjs.CeVpXDdh.js";import{f as t,it as n}from"./bundle.index.C6WaRsOC.js";import{Ft as r,Qt as i,Rt as a,Vt as o,nn as s}from"./chunk.vendor.CTxSDDRk.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{installCode:`# Using npm
$ npm install aloha-vue

# Using yarn
$ yarn add aloha-vue

# Using pnpm
$ pnpm add aloha-vue`,stylesCode:`import { createApp } from "vue";
import App from "./App.vue";
import "aloha-vue/dist/aloha-vue.css";

const app = createApp(App);
app.mount("#app");`,useInHtmlCode:`<template>
  <div>
    <a-button @click="onClick">Click me</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert("The button is pressed!");
    },
  },
};
<\/script>`,useInMainCode:`import { createApp } from "vue";
import App from "./App.vue";
import { AButton } from "aloha-vue";
import "aloha-vue/dist/aloha-vue.css";

const app = createApp(App);

app.component("AButton", AButton);

app.mount("#app");`}}var u={name:`PageQuickStart`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{installCode:e,stylesCode:t,useInHtmlCode:n,useInMainCode:r}=l();return{installCode:e,stylesCode:t,useInHtmlCode:n,useInMainCode:r}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return i(),a(`div`,null,[o(d,{title:`_PAGE_QUICK_START_H1_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_QUICK_START_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_QUICK_START_INSTALL_`}),o(p,{code:e.installCode,language:`markdown`},null,8,[`code`]),t[0]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_QUICK_START_STYLES_`}),o(p,{code:e.stylesCode,language:`javascript`},null,8,[`code`]),t[1]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_QUICK_START_USE_`}),o(p,{code:e.useInMainCode,language:`javascript`},null,8,[`code`]),o(f,{class:`a_my_3`,tag:`p`,"safe-html":`_PAGE_QUICK_START_IN_TEMPLATE_`}),o(p,{code:e.useInHtmlCode,language:`html`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};