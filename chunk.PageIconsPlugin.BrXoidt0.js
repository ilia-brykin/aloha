import{A as p,_ as c}from"./bundle.index.D4AK5eRg.js";import{k as l,M as m,O as o,N as i,H as _}from"./chunk.vendor.HBCvOOnN.js";import"./chunk.vendor-lodash.D68MLJHd.js";import{A as u}from"./chunk.APageTabTitle.CFBJ-Chz.js";import{A}from"./chunk.AlohaHighlightjs.BxXkXuRz.js";import"./chunk.translations-ar.C3eLbeil.js";import"./chunk.translations-de.C6N0sXCK.js";import"./chunk.translations-en.Dgf923YU.js";import"./chunk.translations-es.CPNf7mQ8.js";import"./chunk.translations-fr.BZulpadc.js";import"./chunk.translations-hr.BSaBoXG2.js";import"./chunk.translations-it.DW-WFwc3.js";import"./chunk.translations-ru.C7QF7UyA.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const C={name:"PageIconsPlugin",components:{AlohaHighlightjs:A,APageTabTitle:u,ATranslation:p},setup(){const{connectionCode:e,useAButtonCode:t,useAIconCode:n}=d();return{connectionCode:e,useAButtonCode:t,useAIconCode:n}}};function I(e,t,n,g,N,f){const r=l("a-page-tab-title"),a=l("a-translation"),s=l("aloha-highlightjs");return _(),m("div",null,[o(r,{title:"_PAGE_PLUGIN_ICON_PAGE_TITLE_"}),o(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_ICON_H1_"}),o(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_ICON_INTRODUCTION_"}),t[0]||(t[0]=i("hr",{class:"a_my_5"},null,-1)),o(a,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_CONNECTION_"}),o(s,{code:e.connectionCode,language:"javascript"},null,8,["code"]),o(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_ICON_CONNECTION_NOTES_"}),t[1]||(t[1]=i("hr",{class:"a_my_5"},null,-1)),o(a,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_EXAMPLES_"}),o(s,{code:e.useAButtonCode,language:"html"},null,8,["code"]),t[2]||(t[2]=i("hr",{class:"a_my_5"},null,-1)),o(a,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_EXAMPLES_A_ICON_"}),o(s,{code:e.useAIconCode,language:"html"},null,8,["code"])])}const x=c(C,[["render",I]]);export{x as default};
