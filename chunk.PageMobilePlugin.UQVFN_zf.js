import{t as e}from"./chunk.AlohaHighlightjs.Bhe79was.js";import{h as t,mn as n,t as r}from"./bundle.index.D-5bYXwk.js";import{Gt as i,Ht as a,Jt as o,on as s,un as c}from"./chunk.vendor.DL09mhUf.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PageMobilePlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,useCode:t}=l();return{connectionCode:e,useCode:t}}};function d(e,t,n,r,l,u){let d=c(`a-page-tab-title`),f=c(`a-translation`),p=c(`aloha-highlightjs`);return s(),i(`div`,null,[o(d,{title:`_PAGE_PLUGIN_MOBILE_PAGE_TITLE_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_MOBILE_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_INTRODUCTION_`}),t[0]||=a(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_CONNECTION_`}),o(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),o(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_CONNECTION_NOTES_`}),t[1]||=a(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_MOBILE_EXAMPLES_`}),o(p,{code:e.useCode,language:`html`},null,8,[`code`])])}var f=r(u,[[`render`,d]]);export{f as default};