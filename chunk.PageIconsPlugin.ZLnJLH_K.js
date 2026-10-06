import{Dt as e,Ut as t,kt as n,wt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,p as o,t as s}from"./bundle.index.BmSiyQNH.js";import{t as c}from"./chunk.AlohaHighlightjs.JeygR1Fm.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}var u={name:`PageIconsPlugin`,components:{AlohaHighlightjs:c,APageTabTitle:o,ATranslation:a},setup(){let{connectionCode:e,useAButtonCode:t,useAIconCode:n}=l();return{connectionCode:e,useAButtonCode:t,useAIconCode:n}}};function d(a,o,s,c,l,u){let d=t(`a-page-tab-title`),f=t(`a-translation`),p=t(`aloha-highlightjs`);return i(),e(`div`,null,[n(d,{title:`_PAGE_PLUGIN_ICON_PAGE_TITLE_`}),n(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_ICON_H1_`}),n(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_INTRODUCTION_`}),o[0]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_CONNECTION_`}),n(p,{code:a.connectionCode,language:`javascript`},null,8,[`code`]),n(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_CONNECTION_NOTES_`}),o[1]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_EXAMPLES_`}),n(p,{code:a.useAButtonCode,language:`html`},null,8,[`code`]),o[2]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ICON_EXAMPLES_A_ICON_`}),n(p,{code:a.useAIconCode,language:`html`},null,8,[`code`])])}var f=s(u,[[`render`,d]]);export{f as default};