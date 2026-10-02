import{Dt as e,Ut as t,kt as n,wt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,p as o,t as s}from"./bundle.index.CLtYDDlb.js";import{t as c}from"./chunk.AlohaHighlightjs.JeygR1Fm.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  ASpinnerPlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(ASpinnerPlugin, {
  propsDefault: {
    class: "my_custom_spinner",
    safeHtml: "<strong>Loading...</strong>",
    size: "large",
    tag: "div",
  },
});

app.mount("#app");`,useCode:`<template>
  <div>
    <a-spinner></a-spinner>
  </div>
</template>

<script>
import { 
  ASpinner,
} from "aloha-vue";

export default {
  name: "SpinnerExample",
  components: {
    ASpinner,
  },
};
<\/script>`}}var u={name:`PageSpinnerPlugin`,components:{AlohaHighlightjs:c,APageTabTitle:o,ATranslation:a},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(a,o,s,c,l,u){let d=t(`a-page-tab-title`),f=t(`a-translation`),p=t(`aloha-highlightjs`);return i(),e(`div`,null,[n(d,{title:`_PAGE_PLUGIN_SPINNER_PAGE_TITLE_`}),n(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_SPINNER_H1_`}),n(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_SPINNER_INTRODUCTION_`}),o[0]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_SPINNER_CONNECTION_`}),n(p,{code:a.connectionCode,language:`javascript`},null,8,[`code`]),n(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_SPINNER_CONNECTION_NOTES_`}),o[1]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_SPINNER_EXAMPLES_`}),n(p,{code:a.useCode,language:`html`},null,8,[`code`])])}var f=s(u,[[`render`,d]]);export{f as default};