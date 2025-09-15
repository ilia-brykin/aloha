import{A as m}from"./chunk.AlohaHighlightjs.BZkAdeSp.js";import{A as _,_ as u}from"./bundle.index.BGtMhibu.js";import{Y as c,_ as t,Z as i,e as l,W as d}from"./chunk.vendor.BAPLGb06.js";import"./chunk.vendor-lodash.CStjNiQe.js";import{A}from"./chunk.APageTabTitle.bXGEw9mp.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.fV51pdAO.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function g(){return{installCode:`# Using npm
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
