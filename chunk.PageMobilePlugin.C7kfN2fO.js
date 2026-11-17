import{t as e}from"./chunk.AlohaHighlightjs.DqW7jzWs.js";import{$ as t,f as n}from"./bundle.index.Dik8P8_q.js";import{At as r,Dt as i,Mt as a,Ut as o,qt as s}from"./chunk.vendor.BLRpG40B.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PageMobilePlugin`,components:{AlohaHighlightjs:e,APageTabTitle:n,ATranslation:t},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),r(`div`,null,[a(d,{title:`_PAGE_PLUGIN_MOBILE_PAGE_TITLE_`}),a(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_MOBILE_H1_`}),a(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),a(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_CONNECTION_`}),a(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),a(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_CONNECTION_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),a(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_EXAMPLES_`}),a(p,{code:e.useCode,language:`html`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};