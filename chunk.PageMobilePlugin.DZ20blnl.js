import{t as e}from"./chunk.AlohaHighlightjs.DP2HoDgQ.js";import{h as t,mn as n,t as r}from"./bundle.index.DikcaTJ9.js";import{Vt as i,Wt as a,an as o,ln as s,qt as c}from"./chunk.vendor.SEynj6EJ.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  AMobilePlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(AMobilePlugin, {
  breakpoint: 1023,
});

app.mount("#app");`,useCode:`<template>
  <div>
    <p v-if="isMobileWidth">You are using a mobile device.</p>
    <p v-else>You are using a desktop device.</p>
  </div>
</template>

<script>
import {
  AMobileAPI,
} from "aloha-vue";

export default {
  setup() {
    const {
      isMobileWidth,
    } = AMobileAPI;
    
    return {
      isMobileWidth,
    };
  },
};
<\/script>`}}var u={name:`PageMobilePlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(e,t,n,r,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),a(`div`,null,[c(d,{title:`_PAGE_PLUGIN_MOBILE_PAGE_TITLE_`}),c(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_MOBILE_H1_`}),c(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_CONNECTION_`}),c(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),c(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_CONNECTION_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_EXAMPLES_`}),c(p,{code:e.useCode,language:`html`},null,8,[`code`])])}var f=r(u,[[`render`,d]]);export{f as default};