import{A as m}from"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import{a3 as u,ah as _}from"./bundle.index.8diqlMmu.js";import{bc as c,aS as d,aV as t,aP as i,bi as l}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import{A}from"./chunk.APageTabTitle.-kMqBjfq.js";import"./chunk.translations-ar.2GEIsQx2.js";import"./chunk.translations-de.B3W8Bch8.js";import"./chunk.translations-en.D6ESzlsX.js";import"./chunk.translations-es.XiUlXUqv.js";import"./chunk.translations-fr.Vq0cpCce.js";import"./chunk.translations-hr.47g55_67.js";import"./chunk.translations-it.DbY58g7f.js";import"./chunk.translations-ru.B_xj7EMA.js";function h(){return{installCode:`# Using npm
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

app.mount("#app");`}}const g={name:"PageQuickStart",components:{AlohaHighlightjs:m,APageTabTitle:A,ATranslation:u},setup(){const{installCode:a,stylesCode:o,useInHtmlCode:s,useInMainCode:p}=h();return{installCode:a,stylesCode:o,useInHtmlCode:s,useInMainCode:p}}};function C(a,o,s,p,v,f){const r=l("a-page-tab-title"),e=l("a-translation"),n=l("aloha-highlightjs");return c(),d("div",null,[t(r,{title:"_PAGE_QUICK_START_H1_"}),t(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_QUICK_START_H1_"}),t(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_QUICK_START_INSTALL_"}),t(n,{code:a.installCode,language:"markdown"},null,8,["code"]),o[0]||(o[0]=i("hr",{class:"a_my_5"},null,-1)),t(e,{tag:"div","safe-html":"_PAGE_QUICK_START_STYLES_"}),t(n,{code:a.stylesCode,language:"javascript"},null,8,["code"]),o[1]||(o[1]=i("hr",{class:"a_my_5"},null,-1)),t(e,{tag:"div","safe-html":"_PAGE_QUICK_START_USE_"}),t(n,{code:a.useInMainCode,language:"javascript"},null,8,["code"]),t(e,{class:"a_my_3",tag:"p","safe-html":"_PAGE_QUICK_START_IN_TEMPLATE_"}),t(n,{code:a.useInHtmlCode,language:"html"},null,8,["code"])])}const G=_(g,[["render",C]]);export{G as default};
