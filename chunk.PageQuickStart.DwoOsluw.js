import{t as e}from"./chunk.AlohaHighlightjs.DsvtYqcF.js";import{f as t,rt as n}from"./bundle.index.DW19MCJk.js";import{Bt as r,Ft as i,Rt as a,Zt as o,tn as s}from"./chunk.vendor.H0cZuFAV.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{installCode:`# Using npm
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

app.mount("#app");`}}var u={name:`PageQuickStart`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{installCode:e,stylesCode:t,useInHtmlCode:n,useInMainCode:r}=l();return{installCode:e,stylesCode:t,useInHtmlCode:n,useInMainCode:r}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),a(`div`,null,[r(d,{title:`_PAGE_QUICK_START_H1_`}),r(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_QUICK_START_H1_`}),r(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_QUICK_START_INSTALL_`}),r(p,{code:e.installCode,language:`markdown`},null,8,[`code`]),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),r(f,{tag:`div`,"safe-html":`_PAGE_QUICK_START_STYLES_`}),r(p,{code:e.stylesCode,language:`javascript`},null,8,[`code`]),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),r(f,{tag:`div`,"safe-html":`_PAGE_QUICK_START_USE_`}),r(p,{code:e.useInMainCode,language:`javascript`},null,8,[`code`]),r(f,{class:`a_my_3`,tag:`p`,"safe-html":`_PAGE_QUICK_START_IN_TEMPLATE_`}),r(p,{code:e.useInHtmlCode,language:`html`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};