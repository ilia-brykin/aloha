import{t as e}from"./chunk.AlohaHighlightjs.DP2HoDgQ.js";import{h as t,mn as n,t as r}from"./bundle.index.DikcaTJ9.js";import{Vt as i,Wt as a,an as o,ln as s,qt as c}from"./chunk.vendor.SEynj6EJ.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PageIconsPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,useAButtonCode:t,useAIconCode:n}=l();return{connectionCode:e,useAButtonCode:t,useAIconCode:n}}};function d(e,t,n,r,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),a(`div`,null,[c(d,{title:`_PAGE_PLUGIN_ICON_PAGE_TITLE_`}),c(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_ICON_H1_`}),c(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_CONNECTION_`}),c(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),c(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_CONNECTION_NOTES_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_EXAMPLES_`}),c(p,{code:e.useAButtonCode,language:`html`},null,8,[`code`]),t[2]||=i(`hr`,{class:`a_my_5`},null,-1),c(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_EXAMPLES_A_ICON_`}),c(p,{code:e.useAIconCode,language:`html`},null,8,[`code`])])}var f=r(u,[[`render`,d]]);export{f as default};