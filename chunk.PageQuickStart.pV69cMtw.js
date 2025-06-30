import{A as m}from"./chunk.AlohaHighlightjs.DOgKZA3M.js";import{A as _,_ as u}from"./bundle.index.DtrGaTsN.js";import{W as c,Z as t,Y as i,e as l,V as d}from"./chunk.vendor.B8i9Zb03.js";import"./chunk.vendor-lodash.GQwVh4JN.js";import{A}from"./chunk.APageTabTitle.CkNbxjdZ.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.F_OeclwJ.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function g(){return{installCode:`# Using npm
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

app.mount("#app");`}}const h={name:"PageQuickStart",components:{AlohaHighlightjs:m,APageTabTitle:A,ATranslation:_},setup(){const{installCode:a,stylesCode:e,useInHtmlCode:s,useInMainCode:p}=g();return{installCode:a,stylesCode:e,useInHtmlCode:s,useInMainCode:p}}};function C(a,e,s,p,v,f){const r=l("a-page-tab-title"),o=l("a-translation"),n=l("aloha-highlightjs");return d(),c("div",null,[t(r,{title:"_PAGE_QUICK_START_H1_"}),t(o,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_QUICK_START_H1_"}),t(o,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_QUICK_START_INSTALL_"}),t(n,{code:a.installCode,language:"markdown"},null,8,["code"]),e[0]||(e[0]=i("hr",{class:"a_my_5"},null,-1)),t(o,{tag:"div","safe-html":"_PAGE_QUICK_START_STYLES_"}),t(n,{code:a.stylesCode,language:"javascript"},null,8,["code"]),e[1]||(e[1]=i("hr",{class:"a_my_5"},null,-1)),t(o,{tag:"div","safe-html":"_PAGE_QUICK_START_USE_"}),t(n,{code:a.useInMainCode,language:"javascript"},null,8,["code"]),t(o,{class:"a_my_3",tag:"p","safe-html":"_PAGE_QUICK_START_IN_TEMPLATE_"}),t(n,{code:a.useInHtmlCode,language:"html"},null,8,["code"])])}const G=u(h,[["render",C]]);export{G as default};
