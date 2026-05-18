import{A as p}from"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import{a3 as c,ah as m}from"./bundle.index.D1OA29U_.js";import{bc as _,aS as u,aV as o,aP as l,bi as i}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import{A}from"./chunk.APageTabTitle.BjEZe9gt.js";import"./chunk.translations-ar.ChuYlDzT.js";import"./chunk.translations-de.6pPcJRrO.js";import"./chunk.translations-en.DT3q5fLP.js";import"./chunk.translations-es.B6sZfxDK.js";import"./chunk.translations-fr.ecArFLfS.js";import"./chunk.translations-hr.DhAqHXEL.js";import"./chunk.translations-it.DjP2RsZa.js";import"./chunk.translations-ru.L_V4Dr6V.js";function d(){return{connectionCode:`import { createApp } from "vue";
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
<\/script>`}}const C={name:"PageIconsPlugin",components:{AlohaHighlightjs:p,APageTabTitle:A,ATranslation:c},setup(){const{connectionCode:a,useAButtonCode:t,useAIconCode:n}=d();return{connectionCode:a,useAButtonCode:t,useAIconCode:n}}};function I(a,t,n,g,h,N){const r=i("a-page-tab-title"),e=i("a-translation"),s=i("aloha-highlightjs");return _(),u("div",null,[o(r,{title:"_PAGE_PLUGIN_ICON_PAGE_TITLE_"}),o(e,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_ICON_H1_"}),o(e,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_ICON_INTRODUCTION_"}),t[0]||(t[0]=l("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_CONNECTION_"}),o(s,{code:a.connectionCode,language:"javascript"},null,8,["code"]),o(e,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_ICON_CONNECTION_NOTES_"}),t[1]||(t[1]=l("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_EXAMPLES_"}),o(s,{code:a.useAButtonCode,language:"html"},null,8,["code"]),t[2]||(t[2]=l("hr",{class:"a_my_5"},null,-1)),o(e,{tag:"div","safe-html":"_PAGE_PLUGIN_ICON_EXAMPLES_A_ICON_"}),o(s,{code:a.useAIconCode,language:"html"},null,8,["code"])])}const x=m(C,[["render",I]]);export{x as default};
