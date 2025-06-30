import{A as p}from"./chunk.AlohaHighlightjs.DOgKZA3M.js";import{A as c,_ as m}from"./bundle.index.louQSfsL.js";import{W as _,Z as o,Y as l,e as i,V as u}from"./chunk.vendor.B8i9Zb03.js";import"./chunk.vendor-lodash.BGdgYQ9t.js";import{A}from"./chunk.APageTabTitle.BR2XmVMX.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.BUYjlGcE.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
