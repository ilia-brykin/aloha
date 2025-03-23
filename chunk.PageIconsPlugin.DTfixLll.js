import{A as p}from"./chunk.AlohaHighlightjs.DI9-5vSP.js";import{A as c,_ as m}from"./bundle.index.DU7QMLyo.js";import{V as _,Y as o,W as l,e as i,U as u}from"./chunk.vendor.CDkHfsNc.js";import"./chunk.vendor-lodash.BXW4-Hvb.js";import{A}from"./chunk.APageTabTitle.DVkFln1W.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const C={name:"PageIconsPlugin",components:{AlohaHighlightjs:p,APageTabTitle:A,ATranslation:c},setup(){const{connectionCode:e,useAButtonCode:t,useAIconCode:n}=d();return{connectionCode:e,useAButtonCode:t,useAIconCode:n}}};function I(e,t,n,g,N,f){const r=i("a-page-tab-title"),a=i("a-translation"),s=i("aloha-highlightjs");return u(),_("div",null,[o(r,{title:"_PAGE_PLUGIN_ICON_PAGE_TITLE_"}),o(a,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_ICON_H1_"}),o(a,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_ICON_INTRODUCTION_"}),t[0]||(t[0]=l("hr",{class:"a_my_5"},null,-1)),o(a,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_CONNECTION_"}),o(s,{code:e.connectionCode,language:"javascript"},null,8,["code"]),o(a,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_ICON_CONNECTION_NOTES_"}),t[1]||(t[1]=l("hr",{class:"a_my_5"},null,-1)),o(a,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_EXAMPLES_"}),o(s,{code:e.useAButtonCode,language:"html"},null,8,["code"]),t[2]||(t[2]=l("hr",{class:"a_my_5"},null,-1)),o(a,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_EXAMPLES_A_ICON_"}),o(s,{code:e.useAIconCode,language:"html"},null,8,["code"])])}const x=m(C,[["render",I]]);export{x as default};
