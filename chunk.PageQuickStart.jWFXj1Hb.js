import{A as m,_}from"./bundle.index.B2aaR4xj.js";import{R as u,V as t,U as i,b as l,Q as c}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as d}from"./chunk.APageTabTitle.6ZuxfiZq.js";import{A}from"./chunk.AlohaHighlightjs.Bnb6Sejr.js";import"./chunk.translations-ar.Bm_TIgmU.js";import"./chunk.translations-de.hQOurFbu.js";import"./chunk.translations-en.C27usO-8.js";import"./chunk.translations-es.CWd7slww.js";import"./chunk.translations-fr.DDfPHPkk.js";import"./chunk.translations-hr.CtnKD3az.js";import"./chunk.translations-it.Cf9ZYxei.js";import"./chunk.translations-ru.CZ8Ez0gt.js";function g(){return{installCode:`# Using npm
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
