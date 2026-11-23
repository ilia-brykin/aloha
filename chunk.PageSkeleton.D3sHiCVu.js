import{t as e}from"./chunk.AlohaPage.CqjE0MZc.js";import{t}from"./chunk.AlohaTableProps.CDbIRnOn.js";import{t as n}from"./chunk.AlohaTableTranslate.D9LpV_Mo.js";import{t as r}from"./chunk.AlohaExample.BkAbsrja.js";import{$t as i,Jt as a,o,qt as s,s as c}from"./bundle.index.DrnKDfVL.js";import{$t as l,Ft as u,It as d,Mt as f,Pt as p,Rt as m,Vt as h,hn as g,ln as _,rn as v,sn as y,tn as b}from"./chunk.vendor.BvryzG0o.js";import{t as x}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function S(){return{codeHtml:`<a-skeleton
  :animated="false"
></a-skeleton>`}}function C(){return{codeJs:`import {
  ASkeleton,
} from "aloha-vue";

export default {
  name: "PageSkeletonAnimated",
  components: {
    ASkeleton,
  },
};`}}var ee={name:`PageSkeletonAnimated`,components:{AlohaExample:r,ASkeleton:o},setup(){let{codeHtml:e}=S(),{codeJs:t}=C();return{codeHtml:e,codeJs:t}}};function w(e,t,n,r,i,a){let o=v(`a-skeleton`),s=v(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_ANIMATED_HEADER_`,description:`_A_SKELETON_ANIMATED_DESCRIPTION_`,props:[`animated`]},{default:y(()=>[h(o,{animated:!1})]),_:1},8,[`code-html`,`code-js`])}var T=x(ee,[[`render`,w]]);function E(){return{codeHtml:`<a-skeleton></a-skeleton>`}}function D(){return{codeJs:`import {
  ASkeleton,
} from "aloha-vue";

export default {
  name: "PageSkeletonBasic",
  components: {
    ASkeleton,
  },
};`}}var O={name:`PageSkeletonBasic`,components:{AlohaExample:r,ASkeleton:o},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t}}};function k(e,t,n,r,i,a){let o=v(`a-skeleton`),s=v(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_SKELETON_BASIC_DESCRIPTION_`},{default:y(()=>[h(o)]),_:1},8,[`code-html`,`code-js`])}var A=x(O,[[`render`,k]]);function j(){return{codeHtml:`<a-skeleton
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
};`}}var N={name:`PageSkeletonCount`,components:{AlohaExample:r,ASkeleton:o,ASkeletonItem:c},setup(){let{codeHtml:e}=j(),{codeJs:t}=M();return{codeHtml:e,codeJs:t}}},P={class:`a_d_flex a_gap_3 a_align_items_center`};function F(e,t,n,r,i,a){let o=v(`a-skeleton-item`),s=v(`a-skeleton`),c=v(`aloha-example`);return l(),d(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_COUNT_HEADER_`,description:`_A_SKELETON_COUNT_DESCRIPTION_`,props:[`count`]},{default:y(()=>[h(s,{count:4,style:{"--a_skeleton_group_gap":`.75rem`}},{template:y(({index:e})=>[u(`div`,P,[h(o,{variant:`text`,width:`25%`}),h(o,{variant:`text`,width:`${50-e*8}%`},null,8,[`width`]),h(o,{variant:`text`,width:`15%`}),h(o,{class:`a_ml_auto`,variant:`button`,width:`4rem`})])]),_:1})]),_:1},8,[`code-html`,`code-js`])}var I=x(N,[[`render`,F]]);function L(){return{codeHtml:`<a-button
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
};`}}var z={name:`PageSkeletonLoading`,components:{AButton:a,AlohaExample:r,ASkeleton:o},setup(){let e=_(!0),t=()=>{e.value=!0,setTimeout(()=>{e.value=!1},2e3)};t();let{codeHtml:n}=L(),{codeJs:r}=R();return{codeHtml:n,codeJs:r,load:t,loading:e}}};function B(e,t,n,r,i,a){let o=v(`a-button`),s=v(`a-skeleton`),c=v(`aloha-example`);return l(),d(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_LOADING_HEADER_`,description:`_A_SKELETON_LOADING_DESCRIPTION_`,props:[`loading`]},{default:y(()=>[h(o,{class:`a_btn a_btn_secondary a_mb_3`,text:`_A_SKELETON_RELOAD_`,disabled:e.loading,onClick:e.load},null,8,[`disabled`,`onClick`]),h(s,{loading:e.loading,avatar:!0,rows:2},{default:y(()=>[...t[0]||=[u(`div`,{class:`a_d_flex a_gap_3 a_align_items_start`},[u(`span`,{class:`a_rounded_circle a_bg_primary a_color_white a_d_inline_flex a_align_items_center a_justify_content_center a_flex_shrink_0`,style:{width:`3rem`,height:`3rem`},"aria-hidden":`true`},`AB`),u(`div`,null,[u(`h3`,{class:`a_mt_0 a_mb_2`},`Anna Becker`),u(`p`,{class:`a_mb_0`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`)])],-1)]]),_:1},8,[`loading`])]),_:1},8,[`code-html`,`code-js`])}var V=x(z,[[`render`,B]]);function H(){return{codeHtml:`<a-skeleton
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
};`}}var te={name:`PageSkeletonRows`,components:{AlohaExample:r,ASkeleton:o},setup(){let{codeHtml:e}=H(),{codeJs:t}=U();return{codeHtml:e,codeJs:t}}};function W(e,t,n,r,i,a){let o=v(`a-skeleton`),s=v(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_ROWS_HEADER_`,description:`_A_SKELETON_ROWS_DESCRIPTION_`,props:[`avatar`,`rows`,`title`]},{default:y(()=>[h(o,{avatar:!0,rows:2}),h(o,{class:`a_mt_5`,title:!1,rows:5})]),_:1},8,[`code-html`,`code-js`])}var G=x(te,[[`render`,W]]);function K(){return{codeHtml:`<a-skeleton style="max-width: 20rem;">
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
};`}}var J={name:`PageSkeletonTemplate`,components:{AlohaExample:r,ASkeleton:o,ASkeletonItem:c},setup(){let{codeHtml:e}=K(),{codeJs:t}=q();return{codeHtml:e,codeJs:t}}};function Y(e,t,n,r,i,a){let o=v(`a-skeleton-item`),s=v(`a-skeleton`),c=v(`aloha-example`);return l(),d(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_TEMPLATE_HEADER_`,description:`_A_SKELETON_TEMPLATE_DESCRIPTION_`},{default:y(()=>[h(s,{style:{"max-width":`20rem`}},{template:y(()=>[h(o,{variant:`image`}),h(o,{class:`a_mt_3`,variant:`heading`,width:`70%`}),h(o,{class:`a_mt_2`}),h(o,{class:`a_mt_2`,width:`80%`}),h(o,{class:`a_mt_3`,variant:`button`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var X=x(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-button
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
};`}}var ne={name:`PageSkeletonThrottle`,components:{AButton:a,AlohaExample:r,ASkeleton:o},setup(){let e=_(!1),t=({duration:t})=>{e.value=!0,setTimeout(()=>{e.value=!1},t)},{codeHtml:n}=Z(),{codeJs:r}=Q();return{codeHtml:n,codeJs:r,load:t,loading:e}}},re={class:`a_d_flex a_gap_2 a_flex_wrap a_mb_3`};function ie(e,t,n,r,i,a){let o=v(`a-button`),s=v(`a-skeleton`),c=v(`aloha-example`);return l(),d(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_THROTTLE_HEADER_`,description:`_A_SKELETON_THROTTLE_DESCRIPTION_`,props:[`throttle`]},{default:y(()=>[u(`div`,re,[h(o,{class:`a_btn a_btn_secondary`,text:`_A_SKELETON_FAST_REQUEST_`,disabled:e.loading,onClick:t[0]||=t=>e.load({duration:200})},null,8,[`disabled`]),h(o,{class:`a_btn a_btn_secondary`,text:`_A_SKELETON_SLOW_REQUEST_`,disabled:e.loading,onClick:t[1]||=t=>e.load({duration:2e3})},null,8,[`disabled`])]),h(s,{loading:e.loading,throttle:500},{default:y(()=>[...t[2]||=[u(`p`,{class:`a_mb_0`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`,-1)]]),_:1},8,[`loading`])]),_:1},8,[`code-html`,`code-js`])}var ae=x(ne,[[`render`,ie]]);function oe(){return{codeHtml:`<a-skeleton-item variant="text"></a-skeleton-item>
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
};`}}var ce={name:`PageSkeletonVariants`,components:{AlohaExample:r,ASkeleton:o,ASkeletonItem:c},setup(){let{codeHtml:e}=oe(),{codeJs:t}=se();return{codeHtml:e,codeJs:t}}},le={class:`a_d_grid a_gap_3`,style:{"grid-template-columns":`max-content 1fr`,"align-items":`center`}};function ue(e,t,n,r,i,a){let o=v(`a-skeleton-item`),s=v(`a-skeleton`),c=v(`aloha-example`);return l(),d(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SKELETON_VARIANTS_HEADER_`,description:`_A_SKELETON_VARIANTS_DESCRIPTION_`,props:[`variant`,`width`,`height`]},{default:y(()=>[h(s,null,{template:y(()=>[u(`div`,le,[(l(),m(f,null,b([`text`,`heading`,`circle`,`rect`,`button`,`input`,`image`],e=>(l(),m(f,{key:e},[u(`code`,null,g(e),1),h(o,{variant:e,width:e===`image`?`12rem`:void 0},null,8,[`variant`,`width`])],64))),64))])]),_:1})]),_:1},8,[`code-html`,`code-js`])}var de=x(ce,[[`render`,ue]]);function fe(){let e=p(()=>i({placeholder:`_A_SKELETON_COMPONENT_NAME_`}));return{pageTitle:p(()=>`ASkeleton${e.value?` (${e.value})`:``}`)}}function pe(){return{dataProps:[{name:`animated`,description:`_A_SKELETON_PROPS_ANIMATED_`,type:`Boolean`,default:`true`,required:!1},{name:`avatar`,description:`_A_SKELETON_PROPS_AVATAR_`,type:`Boolean`,default:`false`,required:!1},{name:`count`,description:`_A_SKELETON_PROPS_COUNT_`,type:`Number`,default:`1`,required:!1},{name:`extra`,description:`_A_SKELETON_PROPS_EXTRA_`,type:`Object`,default:`undefined`,required:!1},{name:`loading`,description:`_A_SKELETON_PROPS_LOADING_`,type:`Boolean`,default:`true`,required:!1},{name:`rows`,description:`_A_SKELETON_PROPS_ROWS_`,type:`Number`,default:`3`,required:!1},{name:`tag`,description:`_A_SKELETON_PROPS_TAG_`,type:`String`,default:`"div"`,required:!1},{name:`text`,description:`_A_SKELETON_PROPS_TEXT_`,type:`String`,default:`"_A_SKELETON_LOADING_"`,required:!1},{name:`throttle`,description:`_A_SKELETON_PROPS_THROTTLE_`,type:`Number`,default:`0`,required:!1},{name:`title`,description:`_A_SKELETON_PROPS_TITLE_`,type:`Boolean`,default:`true`,required:!1}],dataPropsItem:[{name:`height`,description:`_A_SKELETON_ITEM_PROPS_HEIGHT_`,type:`String | Number`,default:`undefined`,required:!1},{name:`tag`,description:`_A_SKELETON_ITEM_PROPS_TAG_`,type:`String`,default:`"span"`,required:!1},{name:`variant`,description:`_A_SKELETON_ITEM_PROPS_VARIANT_`,type:`String`,default:`"text"`,required:!1},{name:`width`,description:`_A_SKELETON_ITEM_PROPS_WIDTH_`,type:`String | Number`,default:`undefined`,required:!1}]}}function $(){return{dataSlots:[{name:`default`,description:`_A_SKELETON_SLOT_DEFAULT_`},{name:`template`,description:`_A_SKELETON_SLOT_TEMPLATE_`}]}}function me(){return{dataTranslate:[`_A_SKELETON_LOADING_`]}}var he={name:`PageSkeleton`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:s,PageSkeletonAnimated:T,PageSkeletonBasic:A,PageSkeletonCount:I,PageSkeletonLoading:V,PageSkeletonRows:G,PageSkeletonTemplate:X,PageSkeletonThrottle:ae,PageSkeletonVariants:de},setup(){let{pageTitle:e}=fe(),{dataProps:t,dataPropsItem:n}=pe(),{dataSlots:r}=$(),{dataTranslate:i}=me();return{dataProps:t,dataPropsItem:n,dataSlots:r,dataTranslate:i,pageTitle:e}}};function ge(e,t,n,r,i,a){let o=v(`a-translation`),s=v(`page-skeleton-basic`),c=v(`page-skeleton-rows`),u=v(`page-skeleton-animated`),f=v(`page-skeleton-loading`),p=v(`page-skeleton-template`),m=v(`page-skeleton-count`),g=v(`page-skeleton-variants`),_=v(`page-skeleton-throttle`),b=v(`aloha-table-props`),x=v(`aloha-table-translate`),S=v(`aloha-table-css-vars`),C=v(`aloha-page`);return l(),d(C,{"page-title":e.pageTitle},{body:y(()=>[h(o,{tag:`p`,html:`_A_SKELETON_COMPONENT_DESCRIPTION_`}),h(s),h(c),h(u),h(f),h(p),h(m),h(g),h(_),h(b,{"table-label":`ASkeleton`,data:e.dataProps},null,8,[`data`]),h(b,{"table-label":`ASkeletonItem`,data:e.dataPropsItem},null,8,[`data`]),h(b,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),h(x,{data:e.dataTranslate},null,8,[`data`]),h(S,{files:`components/ASkeleton`})]),_:1},8,[`page-title`])}var _e=x(he,[[`render`,ge]]);export{_e as default};