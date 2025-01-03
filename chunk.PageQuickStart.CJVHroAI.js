import{A as m,_}from"./bundle.index.By4-CZSJ.js";import{k as l,R as u,V as t,U as i,O as c}from"./chunk.vendor.C_nZR3i9.js";import"./chunk.vendor-lodash.BzDRedSD.js";import{A as d}from"./chunk.APageTabTitle.CJaSEw9R.js";import{A}from"./chunk.AlohaHighlightjs.zzXDUp_j.js";import"./chunk.translations-ar.CGL8aVo9.js";import"./chunk.translations-de.RdwLQ5AB.js";import"./chunk.translations-en.DDBINhYl.js";import"./chunk.translations-es.Db8DPcgi.js";import"./chunk.translations-fr.Bj0H1VLd.js";import"./chunk.translations-hr.D6Hyl4N8.js";import"./chunk.translations-it.BR5rbHtH.js";import"./chunk.translations-ru.BkDZ_0rg.js";function g(){return{installCode:`# Using npm
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

app.mount("#app");`}}const h={name:"PageQuickStart",components:{AlohaHighlightjs:A,APageTabTitle:d,ATranslation:m},setup(){const{installCode:a,stylesCode:o,useInHtmlCode:s,useInMainCode:p}=g();return{installCode:a,stylesCode:o,useInHtmlCode:s,useInMainCode:p}}};function C(a,o,s,p,v,f){const r=l("a-page-tab-title"),e=l("a-translation"),n=l("aloha-highlightjs");return c(),u("div",null,[t(r,{title:"_PAGE_QUICK_START_H1_"}),t(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_QUICK_START_H1_"}),t(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_QUICK_START_INSTALL_"}),t(n,{code:a.installCode,language:"markdown"},null,8,["code"]),o[0]||(o[0]=i("hr",{class:"a_my_5"},null,-1)),t(e,{tag:"div","safe-html":"_PAGE_QUICK_START_STYLES_"}),t(n,{code:a.stylesCode,language:"javascript"},null,8,["code"]),o[1]||(o[1]=i("hr",{class:"a_my_5"},null,-1)),t(e,{tag:"div","safe-html":"_PAGE_QUICK_START_USE_"}),t(n,{code:a.useInMainCode,language:"javascript"},null,8,["code"]),t(e,{class:"a_my_3",tag:"p","safe-html":"_PAGE_QUICK_START_IN_TEMPLATE_"}),t(n,{code:a.useInHtmlCode,language:"html"},null,8,["code"])])}const B=_(h,[["render",C]]);export{B as default};
