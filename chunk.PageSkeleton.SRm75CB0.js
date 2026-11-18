import{t as e}from"./chunk.AlohaPage.DqkPByuO.js";import{t}from"./chunk.AlohaTableProps.BCBHdgTD.js";import{t as n}from"./chunk.AlohaTableTranslate.BWxFIn1s.js";import{t as r}from"./chunk.AlohaExample.CxBeInGL.js";import{Rt as i,Ut as ee,a,o,rt as s}from"./bundle.index.DW19MCJk.js";import{$t as c,Bt as l,Ft as u,It as d,Mt as f,Pt as p,Rt as m,Zt as h,an as g,pn as _,sn as v,tn as y}from"./chunk.vendor.H0cZuFAV.js";import{t as b}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function x(){return{codeHtml:`<a-skeleton
  :animated="false"
></a-skeleton>`}}function S(){return{codeJs:`import {
  ASkeleton,
} from "aloha-vue";

export default {
  name: "PageSkeletonAnimated",
  components: {
    ASkeleton,
  },
};`}}var C={name:`PageSkeletonAnimated`,components:{AlohaExample:r,ASkeleton:a},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t}}};function w(e,t,n,r,i,ee){let a=y(`a-skeleton`),o=y(`aloha-example`);return h(),d(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_ANIMATED_HEADER_`,description:`_A_SKELETON_ANIMATED_DESCRIPTION_`,props:[`animated`]},{default:g(()=>[l(a,{animated:!1})]),_:1},8,[`code-html`,`code-js`])}var T=b(C,[[`render`,w]]);function E(){return{codeHtml:`<a-skeleton></a-skeleton>`}}function D(){return{codeJs:`import {
  ASkeleton,
} from "aloha-vue";

export default {
  name: "PageSkeletonBasic",
  components: {
    ASkeleton,
  },
};`}}var O={name:`PageSkeletonBasic`,components:{AlohaExample:r,ASkeleton:a},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t}}};function k(e,t,n,r,i,ee){let a=y(`a-skeleton`),o=y(`aloha-example`);return h(),d(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_SKELETON_BASIC_DESCRIPTION_`},{default:g(()=>[l(a)]),_:1},8,[`code-html`,`code-js`])}var A=b(O,[[`render`,k]]);function j(){return{codeHtml:`<a-skeleton
  :count="4"
  style="--a_skeleton_group_gap: .75rem;"
>
  <template v-slot:template="{ index }">
    <div class="a_d_flex a_gap_3 a_align_items_center">
      <a-skeleton-item width="25%"></a-skeleton-item>
      <a-skeleton-item :width="\`\${ 50 - index * 8 }%\`"></a-skeleton-item>
      <a-skeleton-item width="15%"></a-skeleton-item>
      <a-skeleton-item
        class="a_ml_auto"
        variant="button"
        width="4rem"
      ></a-skeleton-item>
    </div>
  </template>
</a-skeleton>`}}function M(){return{codeJs:`import {
  ASkeleton,
  ASkeletonItem,
} from "aloha-vue";

export default {
  name: "PageSkeletonCount",
  components: {
    ASkeleton,
    ASkeletonItem,
  },
};`}}var N={name:`PageSkeletonCount`,components:{AlohaExample:r,ASkeleton:a,ASkeletonItem:o},setup(){let{codeHtml:e}=j(),{codeJs:t}=M();return{codeHtml:e,codeJs:t}}},P={class:`a_d_flex a_gap_3 a_align_items_center`};function F(e,t,n,r,i,ee){let a=y(`a-skeleton-item`),o=y(`a-skeleton`),s=y(`aloha-example`);return h(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_COUNT_HEADER_`,description:`_A_SKELETON_COUNT_DESCRIPTION_`,props:[`count`]},{default:g(()=>[l(o,{count:4,style:{"--a_skeleton_group_gap":`.75rem`}},{template:g(({index:e})=>[u(`div`,P,[l(a,{variant:`text`,width:`25%`}),l(a,{variant:`text`,width:`${50-e*8}%`},null,8,[`width`]),l(a,{variant:`text`,width:`15%`}),l(a,{class:`a_ml_auto`,variant:`button`,width:`4rem`})])]),_:1})]),_:1},8,[`code-html`,`code-js`])}var I=b(N,[[`render`,F]]);function L(){return{codeHtml:`<a-button
  class="a_btn a_btn_secondary a_mb_3"
  text="Reload"
  :disabled="loading"
  @click="load"
></a-button>
<a-skeleton
  :loading="loading"
  :avatar="true"
  :rows="2"
>
  <div class="a_d_flex a_gap_3 a_align_items_start">
    <span class="a_rounded_circle ...">AB</span>
    <div>
      <h3>Anna Becker</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</a-skeleton>`}}function R(){return{codeJs:`import {
  AButton,
  ASkeleton,
} from "aloha-vue";
import {
  ref,
} from "vue";

export default {
  name: "PageSkeletonLoading",
  components: {
    AButton,
    ASkeleton,
  },
  setup() {
    const loading = ref(true);

    const load = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    };

    load();

    return {
      load,
      loading,
    };
  },
};`}}var z={name:`PageSkeletonLoading`,components:{AButton:i,AlohaExample:r,ASkeleton:a},setup(){let e=v(!0),t=()=>{e.value=!0,setTimeout(()=>{e.value=!1},2e3)};t();let{codeHtml:n}=L(),{codeJs:r}=R();return{codeHtml:n,codeJs:r,load:t,loading:e}}};function B(e,t,n,r,i,ee){let a=y(`a-button`),o=y(`a-skeleton`),s=y(`aloha-example`);return h(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_LOADING_HEADER_`,description:`_A_SKELETON_LOADING_DESCRIPTION_`,props:[`loading`]},{default:g(()=>[l(a,{class:`a_btn a_btn_secondary a_mb_3`,text:`_A_SKELETON_RELOAD_`,disabled:e.loading,onClick:e.load},null,8,[`disabled`,`onClick`]),l(o,{loading:e.loading,avatar:!0,rows:2},{default:g(()=>[...t[0]||=[u(`div`,{class:`a_d_flex a_gap_3 a_align_items_start`},[u(`span`,{class:`a_rounded_circle a_bg_primary a_color_white a_d_inline_flex a_align_items_center a_justify_content_center a_flex_shrink_0`,style:{width:`3rem`,height:`3rem`},"aria-hidden":`true`},`AB`),u(`div`,null,[u(`h3`,{class:`a_mt_0 a_mb_2`},`Anna Becker`),u(`p`,{class:`a_mb_0`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`)])],-1)]]),_:1},8,[`loading`])]),_:1},8,[`code-html`,`code-js`])}var V=b(z,[[`render`,B]]);function H(){return{codeHtml:`<a-skeleton
  :avatar="true"
  :rows="2"
></a-skeleton>
<a-skeleton
  class="a_mt_5"
  :title="false"
  :rows="5"
></a-skeleton>`}}function U(){return{codeJs:`import {
  ASkeleton,
} from "aloha-vue";

export default {
  name: "PageSkeletonRows",
  components: {
    ASkeleton,
  },
};`}}var W={name:`PageSkeletonRows`,components:{AlohaExample:r,ASkeleton:a},setup(){let{codeHtml:e}=H(),{codeJs:t}=U();return{codeHtml:e,codeJs:t}}};function G(e,t,n,r,i,ee){let a=y(`a-skeleton`),o=y(`aloha-example`);return h(),d(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_ROWS_HEADER_`,description:`_A_SKELETON_ROWS_DESCRIPTION_`,props:[`avatar`,`rows`,`title`]},{default:g(()=>[l(a,{avatar:!0,rows:2}),l(a,{class:`a_mt_5`,title:!1,rows:5})]),_:1},8,[`code-html`,`code-js`])}var K=b(W,[[`render`,G]]);function te(){return{codeHtml:`<a-skeleton style="max-width: 20rem;">
  <template v-slot:template>
    <a-skeleton-item variant="image"></a-skeleton-item>
    <a-skeleton-item
      class="a_mt_3"
      variant="heading"
      width="70%"
    ></a-skeleton-item>
    <a-skeleton-item class="a_mt_2"></a-skeleton-item>
    <a-skeleton-item
      class="a_mt_2"
      width="80%"
    ></a-skeleton-item>
    <a-skeleton-item
      class="a_mt_3"
      variant="button"
    ></a-skeleton-item>
  </template>
</a-skeleton>`}}function q(){return{codeJs:`import {
  ASkeleton,
  ASkeletonItem,
} from "aloha-vue";

export default {
  name: "PageSkeletonTemplate",
  components: {
    ASkeleton,
    ASkeletonItem,
  },
};`}}var J={name:`PageSkeletonTemplate`,components:{AlohaExample:r,ASkeleton:a,ASkeletonItem:o},setup(){let{codeHtml:e}=te(),{codeJs:t}=q();return{codeHtml:e,codeJs:t}}};function Y(e,t,n,r,i,ee){let a=y(`a-skeleton-item`),o=y(`a-skeleton`),s=y(`aloha-example`);return h(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_TEMPLATE_HEADER_`,description:`_A_SKELETON_TEMPLATE_DESCRIPTION_`},{default:g(()=>[l(o,{style:{"max-width":`20rem`}},{template:g(()=>[l(a,{variant:`image`}),l(a,{class:`a_mt_3`,variant:`heading`,width:`70%`}),l(a,{class:`a_mt_2`}),l(a,{class:`a_mt_2`,width:`80%`}),l(a,{class:`a_mt_3`,variant:`button`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var X=b(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-button
  class="a_btn a_btn_secondary"
  text="200 ms"
  :disabled="loading"
  @click="load({ duration: 200 })"
></a-button>
<a-button
  class="a_btn a_btn_secondary"
  text="2 s"
  :disabled="loading"
  @click="load({ duration: 2000 })"
></a-button>
<a-skeleton
  :loading="loading"
  :throttle="500"
>
  <p>Lorem ipsum dolor sit amet...</p>
</a-skeleton>`}}function Q(){return{codeJs:`import {
  AButton,
  ASkeleton,
} from "aloha-vue";
import {
  ref,
} from "vue";

export default {
  name: "PageSkeletonThrottle",
  components: {
    AButton,
    ASkeleton,
  },
  setup() {
    const loading = ref(false);

    const load = ({ duration }) => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, duration);
    };

    return {
      load,
      loading,
    };
  },
};`}}var ne={name:`PageSkeletonThrottle`,components:{AButton:i,AlohaExample:r,ASkeleton:a},setup(){let e=v(!1),t=({duration:t})=>{e.value=!0,setTimeout(()=>{e.value=!1},t)},{codeHtml:n}=Z(),{codeJs:r}=Q();return{codeHtml:n,codeJs:r,load:t,loading:e}}},re={class:`a_d_flex a_gap_2 a_flex_wrap a_mb_3`};function ie(e,t,n,r,i,ee){let a=y(`a-button`),o=y(`a-skeleton`),s=y(`aloha-example`);return h(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_THROTTLE_HEADER_`,description:`_A_SKELETON_THROTTLE_DESCRIPTION_`,props:[`throttle`]},{default:g(()=>[u(`div`,re,[l(a,{class:`a_btn a_btn_secondary`,text:`_A_SKELETON_FAST_REQUEST_`,disabled:e.loading,onClick:t[0]||=t=>e.load({duration:200})},null,8,[`disabled`]),l(a,{class:`a_btn a_btn_secondary`,text:`_A_SKELETON_SLOW_REQUEST_`,disabled:e.loading,onClick:t[1]||=t=>e.load({duration:2e3})},null,8,[`disabled`])]),l(o,{loading:e.loading,throttle:500},{default:g(()=>[...t[2]||=[u(`p`,{class:`a_mb_0`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`,-1)]]),_:1},8,[`loading`])]),_:1},8,[`code-html`,`code-js`])}var ae=b(ne,[[`render`,ie]]);function oe(){return{codeHtml:`<a-skeleton-item variant="text"></a-skeleton-item>
<a-skeleton-item variant="heading"></a-skeleton-item>
<a-skeleton-item variant="circle"></a-skeleton-item>
<a-skeleton-item variant="rect"></a-skeleton-item>
<a-skeleton-item variant="button"></a-skeleton-item>
<a-skeleton-item variant="input"></a-skeleton-item>
<a-skeleton-item
  variant="image"
  width="12rem"
></a-skeleton-item>`}}function se(){return{codeJs:`import {
  ASkeleton,
  ASkeletonItem,
} from "aloha-vue";

export default {
  name: "PageSkeletonVariants",
  components: {
    ASkeleton,
    ASkeletonItem,
  },
};`}}var ce={name:`PageSkeletonVariants`,components:{AlohaExample:r,ASkeleton:a,ASkeletonItem:o},setup(){let{codeHtml:e}=oe(),{codeJs:t}=se();return{codeHtml:e,codeJs:t}}},le={class:`a_d_grid a_gap_3`,style:{"grid-template-columns":`max-content 1fr`,"align-items":`center`}};function ue(e,t,n,r,i,ee){let a=y(`a-skeleton-item`),o=y(`a-skeleton`),s=y(`aloha-example`);return h(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_VARIANTS_HEADER_`,description:`_A_SKELETON_VARIANTS_DESCRIPTION_`,props:[`variant`,`width`,`height`]},{default:g(()=>[l(o,null,{template:g(()=>[u(`div`,le,[(h(),m(f,null,c([`text`,`heading`,`circle`,`rect`,`button`,`input`,`image`],e=>(h(),m(f,{key:e},[u(`code`,null,_(e),1),l(a,{variant:e,width:e===`image`?`12rem`:void 0},null,8,[`variant`,`width`])],64))),64))])]),_:1})]),_:1},8,[`code-html`,`code-js`])}var de=b(ce,[[`render`,ue]]);function fe(){let e=p(()=>ee({placeholder:`_A_SKELETON_COMPONENT_NAME_`}));return{pageTitle:p(()=>`ASkeleton${e.value?` (${e.value})`:``}`)}}function pe(){return{dataProps:[{name:`animated`,description:`_A_SKELETON_PROPS_ANIMATED_`,type:`Boolean`,default:`true`,required:!1},{name:`avatar`,description:`_A_SKELETON_PROPS_AVATAR_`,type:`Boolean`,default:`false`,required:!1},{name:`count`,description:`_A_SKELETON_PROPS_COUNT_`,type:`Number`,default:`1`,required:!1},{name:`extra`,description:`_A_SKELETON_PROPS_EXTRA_`,type:`Object`,default:`undefined`,required:!1},{name:`loading`,description:`_A_SKELETON_PROPS_LOADING_`,type:`Boolean`,default:`true`,required:!1},{name:`rows`,description:`_A_SKELETON_PROPS_ROWS_`,type:`Number`,default:`3`,required:!1},{name:`tag`,description:`_A_SKELETON_PROPS_TAG_`,type:`String`,default:`"div"`,required:!1},{name:`text`,description:`_A_SKELETON_PROPS_TEXT_`,type:`String`,default:`"_A_SKELETON_LOADING_"`,required:!1},{name:`throttle`,description:`_A_SKELETON_PROPS_THROTTLE_`,type:`Number`,default:`0`,required:!1},{name:`title`,description:`_A_SKELETON_PROPS_TITLE_`,type:`Boolean`,default:`true`,required:!1}],dataPropsItem:[{name:`height`,description:`_A_SKELETON_ITEM_PROPS_HEIGHT_`,type:`String | Number`,default:`undefined`,required:!1},{name:`tag`,description:`_A_SKELETON_ITEM_PROPS_TAG_`,type:`String`,default:`"span"`,required:!1},{name:`variant`,description:`_A_SKELETON_ITEM_PROPS_VARIANT_`,type:`String`,default:`"text"`,required:!1},{name:`width`,description:`_A_SKELETON_ITEM_PROPS_WIDTH_`,type:`String | Number`,default:`undefined`,required:!1}]}}function $(){return{dataSlots:[{name:`default`,description:`_A_SKELETON_SLOT_DEFAULT_`},{name:`template`,description:`_A_SKELETON_SLOT_TEMPLATE_`}]}}function me(){return{dataTranslate:[`_A_SKELETON_LOADING_`]}}var he={name:`PageSkeleton`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:s,PageSkeletonAnimated:T,PageSkeletonBasic:A,PageSkeletonCount:I,PageSkeletonLoading:V,PageSkeletonRows:K,PageSkeletonTemplate:X,PageSkeletonThrottle:ae,PageSkeletonVariants:de},setup(){let{pageTitle:e}=fe(),{dataProps:t,dataPropsItem:n}=pe(),{dataSlots:r}=$(),{dataTranslate:i}=me();return{dataProps:t,dataPropsItem:n,dataSlots:r,dataTranslate:i,pageTitle:e}}};function ge(e,t,n,r,i,ee){let a=y(`a-translation`),o=y(`page-skeleton-basic`),s=y(`page-skeleton-rows`),c=y(`page-skeleton-animated`),u=y(`page-skeleton-loading`),f=y(`page-skeleton-template`),p=y(`page-skeleton-count`),m=y(`page-skeleton-variants`),_=y(`page-skeleton-throttle`),v=y(`aloha-table-props`),b=y(`aloha-table-translate`),x=y(`aloha-table-css-vars`),S=y(`aloha-page`);return h(),d(S,{"page-title":e.pageTitle},{body:g(()=>[l(a,{tag:`p`,html:`_A_SKELETON_COMPONENT_DESCRIPTION_`}),l(o),l(s),l(c),l(u),l(f),l(p),l(m),l(_),l(v,{"table-label":`ASkeleton`,data:e.dataProps},null,8,[`data`]),l(v,{"table-label":`ASkeletonItem`,data:e.dataPropsItem},null,8,[`data`]),l(v,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),l(b,{data:e.dataTranslate},null,8,[`data`]),l(x,{files:`components/ASkeleton`})]),_:1},8,[`page-title`])}var _e=b(he,[[`render`,ge]]);export{_e as default};