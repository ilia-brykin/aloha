import{Dt as e,Ut as t,kt as n,wt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,p as o,t as s}from"./bundle.index.CLtYDDlb.js";import{t as c}from"./chunk.AlohaHighlightjs.JeygR1Fm.js";function l(){return{installCode:`# Using npm
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

app.mount("#app");`}}var u={name:`PageQuickStart`,components:{AlohaHighlightjs:c,APageTabTitle:o,ATranslation:a},setup(){let{installCode:e,stylesCode:t,useInHtmlCode:n,useInMainCode:r}=l();return{installCode:e,stylesCode:t,useInHtmlCode:n,useInMainCode:r}}};function d(a,o,s,c,l,u){let d=t(`a-page-tab-title`),f=t(`a-translation`),p=t(`aloha-highlightjs`);return i(),e(`div`,null,[n(d,{title:`_PAGE_QUICK_START_H1_`}),n(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_QUICK_START_H1_`}),n(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_QUICK_START_INSTALL_`}),n(p,{code:a.installCode,language:`markdown`},null,8,[`code`]),o[0]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_QUICK_START_STYLES_`}),n(p,{code:a.stylesCode,language:`javascript`},null,8,[`code`]),o[1]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_QUICK_START_USE_`}),n(p,{code:a.useInMainCode,language:`javascript`},null,8,[`code`]),n(f,{class:`a_my_3`,tag:`p`,"safe-html":`_PAGE_QUICK_START_IN_TEMPLATE_`}),n(p,{code:a.useInHtmlCode,language:`html`},null,8,[`code`])])}var f=s(u,[[`render`,d]]);export{f as default};