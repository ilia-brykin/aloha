import{t as e}from"./chunk.AlohaHighlightjs.K88URRtS.js";import{d as t,et as n}from"./bundle.index.Csp1_sOL.js";import{Lt as r,Pt as i,Xt as a,en as o,zt as s}from"./chunk.vendor.Cx127fe1.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PageIconsPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,useAButtonCode:t,useAIconCode:n}=l();return{connectionCode:e,useAButtonCode:t,useAIconCode:n}}};function d(e,t,n,c,l,u){let d=o(`a-page-tab-title`),f=o(`a-translation`),p=o(`aloha-highlightjs`);return a(),r(`div`,null,[s(d,{title:`_PAGE_PLUGIN_ICON_PAGE_TITLE_`}),s(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_ICON_H1_`}),s(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),s(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_CONNECTION_`}),s(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),s(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_CONNECTION_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),s(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_EXAMPLES_`}),s(p,{code:e.useAButtonCode,language:`html`},null,8,[`code`]),t[2]||=i(`hr`,{class:`a_my_5`},null,-1),s(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_EXAMPLES_A_ICON_`}),s(p,{code:e.useAIconCode,language:`html`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};