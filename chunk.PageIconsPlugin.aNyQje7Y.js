import{t as e}from"./chunk.AlohaHighlightjs.DqW7jzWs.js";import{$ as t,f as n}from"./bundle.index.Dik8P8_q.js";import{At as r,Dt as i,Mt as a,Ut as o,qt as s}from"./chunk.vendor.BLRpG40B.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import "aloha-vue/dist/aloha-vue.css";
import {
  AIconPlugin,
} from "aloha-vue";
import ArrowsCollapse from "aloha-svg/dist/js/bootstrap/ArrowsCollapse";
import Bell from "aloha-svg/dist/js/bootstrap/Bell";

const app = createApp(App);

app.use(AIconPlugin, {
  icons: {
    ArrowsCollapse,
    Bell,
  },
});

app.mount("#app");`,useAButtonCode:`<template>
  <div>
    <AButton icon-left="ArrowsCollapse">
      Collapse
    </AButton>
    <AButton icon-right="Bell">
      Notifications
    </AButton>
  </div>
</template>

<script>
import { 
  AButton,
} from "aloha-vue";

export default {
  name: "ButtonExample",
  components: {
    AButton,
  },
};
<\/script>`,useAIconCode:`<template>
  <div>
    <a-icon icon="ArrowsCollapse" class="icon-large"></a-icon>
    <a-icon icon="Bell" class="icon-small"></a-icon>
  </div>
</template>

<script>
import { 
  AIcon,
} from "aloha-vue";

export default {
  name: "IconExample",
  components: {
    AIcon,
  },
};
<\/script>`}}var u={name:`PageIconsPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:n,ATranslation:t},setup(){let{connectionCode:e,useAButtonCode:t,useAIconCode:n}=l();return{connectionCode:e,useAButtonCode:t,useAIconCode:n}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),r(`div`,null,[a(d,{title:`_PAGE_PLUGIN_ICON_PAGE_TITLE_`}),a(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_ICON_H1_`}),a(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),a(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_CONNECTION_`}),a(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),a(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_CONNECTION_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),a(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_EXAMPLES_`}),a(p,{code:e.useAButtonCode,language:`html`},null,8,[`code`]),t[2]||=i(`hr`,{class:`a_my_5`},null,-1),a(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_EXAMPLES_A_ICON_`}),a(p,{code:e.useAIconCode,language:`html`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};