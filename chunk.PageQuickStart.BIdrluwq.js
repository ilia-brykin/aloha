import{A as m}from"./chunk.AlohaHighlightjs.CqftpDCI.js";import{A as _,_ as u}from"./bundle.index.Bh_ilqgC.js";import{W as c,Y as d,_ as t,Z as i,e as l}from"./chunk.vendor.7qYoMuVo.js";import"./chunk.vendor-lodash.CDw4fzB6.js";import{A}from"./chunk.APageTabTitle.BQsU4-Gc.js";import"./chunk.translations-ar.D2jq8d0Y.js";import"./chunk.translations-de.hnP5xpB5.js";import"./chunk.translations-en.BrVZaecZ.js";import"./chunk.translations-es.DtTl-e9g.js";import"./chunk.translations-fr.DuHMBvXM.js";import"./chunk.translations-hr.CHfI5uP-.js";import"./chunk.translations-it.B1ulf93E.js";import"./chunk.translations-ru.B3vSYu8F.js";function g(){return{installCode:`# Using npm
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

app.mount("#app");`}}const h={name:"PageQuickStart",components:{AlohaHighlightjs:m,APageTabTitle:A,ATranslation:_},setup(){const{installCode:a,stylesCode:e,useInHtmlCode:s,useInMainCode:p}=g();return{installCode:a,stylesCode:e,useInHtmlCode:s,useInMainCode:p}}};function C(a,e,s,p,v,f){const r=l("a-page-tab-title"),o=l("a-translation"),n=l("aloha-highlightjs");return c(),d("div",null,[t(r,{title:"_PAGE_QUICK_START_H1_"}),t(o,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_QUICK_START_H1_"}),t(o,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_QUICK_START_INSTALL_"}),t(n,{code:a.installCode,language:"markdown"},null,8,["code"]),e[0]||(e[0]=i("hr",{class:"a_my_5"},null,-1)),t(o,{tag:"div","safe-html":"_PAGE_QUICK_START_STYLES_"}),t(n,{code:a.stylesCode,language:"javascript"},null,8,["code"]),e[1]||(e[1]=i("hr",{class:"a_my_5"},null,-1)),t(o,{tag:"div","safe-html":"_PAGE_QUICK_START_USE_"}),t(n,{code:a.useInMainCode,language:"javascript"},null,8,["code"]),t(o,{class:"a_my_3",tag:"p","safe-html":"_PAGE_QUICK_START_IN_TEMPLATE_"}),t(n,{code:a.useInHtmlCode,language:"html"},null,8,["code"])])}const G=u(h,[["render",C]]);export{G as default};
