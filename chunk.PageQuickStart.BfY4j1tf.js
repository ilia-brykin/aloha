import{A as m,_}from"./bundle.index.CDxzPDXT.js";import{k as l,M as u,O as t,N as i,H as c}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import{A as d}from"./chunk.APageTabTitle.BuENQV3G.js";import{A}from"./chunk.AlohaHighlightjs.B-JG9i3D.js";import"./chunk.translations-ar.D11AFw12.js";import"./chunk.translations-de.pyWcnzxU.js";import"./chunk.translations-en.BA0L_EKE.js";import"./chunk.translations-es.C8Ue-qtF.js";import"./chunk.translations-fr.B97VMxCC.js";import"./chunk.translations-hr.DPNXGA_z.js";import"./chunk.translations-it.DrIj1yZQ.js";import"./chunk.translations-ru.B1FeJYZT.js";function g(){return{installCode:`# Using npm
$ npm install aloha-vue

# Using yarn
$ yarn add aloha-vue

# Using pnpm
$ pnpm add aloha-vue`,stylesCode:`import { createApp } from 'vue';
import App from './App.vue';
import 'aloha-vue/dist/aloha-vue.css';

const app = createApp(App);
app.mount('#app');`,useInHtmlCode:`<template>
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
<\/script>`,useInMainCode:`import { createApp } from 'vue';
import App from './App.vue';
import { AButton } from 'aloha-vue';
import 'aloha-vue/dist/aloha-vue.css';

const app = createApp(App);

app.component('AButton', AButton);

app.mount('#app');`}}const h={name:"PageQuickStart",components:{AlohaHighlightjs:A,APageTabTitle:d,ATranslation:m},setup(){const{installCode:a,stylesCode:o,useInHtmlCode:s,useInMainCode:p}=g();return{installCode:a,stylesCode:o,useInHtmlCode:s,useInMainCode:p}}};function C(a,o,s,p,v,f){const r=l("a-page-tab-title"),e=l("a-translation"),n=l("aloha-highlightjs");return c(),u("div",null,[t(r,{title:"_PAGE_QUICK_START_H1_"}),t(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_QUICK_START_H1_"}),t(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_QUICK_START_INSTALL_"}),t(n,{code:a.installCode,language:"markdown"},null,8,["code"]),o[0]||(o[0]=i("hr",{class:"a_my_5"},null,-1)),t(e,{tag:"div","safe-html":"_PAGE_QUICK_START_STYLES_"}),t(n,{code:a.stylesCode,language:"javascript"},null,8,["code"]),o[1]||(o[1]=i("hr",{class:"a_my_5"},null,-1)),t(e,{tag:"div","safe-html":"_PAGE_QUICK_START_USE_"}),t(n,{code:a.useInMainCode,language:"javascript"},null,8,["code"]),t(e,{class:"a_my_3",tag:"p","safe-html":"_PAGE_QUICK_START_IN_TEMPLATE_"}),t(n,{code:a.useInHtmlCode,language:"html"},null,8,["code"])])}const G=_(h,[["render",C]]);export{G as default};
