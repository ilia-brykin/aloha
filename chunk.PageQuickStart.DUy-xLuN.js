import{t as e}from"./chunk.AlohaHighlightjs.DP2HoDgQ.js";import{h as t,mn as n,t as r}from"./bundle.index.DikcaTJ9.js";import{Vt as i,Wt as a,an as o,ln as s,qt as c}from"./chunk.vendor.SEynj6EJ.js";function l(){return{installCode:`# Using npm
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

app.mount("#app");`}}var u={name:`PageQuickStart`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{installCode:e,stylesCode:t,useInHtmlCode:n,useInMainCode:r}=l();return{installCode:e,stylesCode:t,useInHtmlCode:n,useInMainCode:r}}};function d(e,t,n,r,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),a(`div`,null,[c(d,{title:`_PAGE_QUICK_START_H1_`}),c(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_QUICK_START_H1_`}),c(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_QUICK_START_INSTALL_`}),c(p,{code:e.installCode,language:`markdown`},null,8,[`code`]),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_QUICK_START_STYLES_`}),c(p,{code:e.stylesCode,language:`javascript`},null,8,[`code`]),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_QUICK_START_USE_`}),c(p,{code:e.useInMainCode,language:`javascript`},null,8,[`code`]),c(f,{class:`a_my_3`,tag:`p`,"safe-html":`_PAGE_QUICK_START_IN_TEMPLATE_`}),c(p,{code:e.useInHtmlCode,language:`html`},null,8,[`code`])])}var f=r(u,[[`render`,d]]);export{f as default};