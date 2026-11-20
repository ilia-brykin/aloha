import{t as e}from"./chunk.AlohaPage.BqJxHLnf.js";import{t}from"./chunk.AlohaTableProps.CD1A8m99.js";import{t as n}from"./chunk.AlohaTableTranslate.DkpTtIt0.js";import{t as r}from"./chunk.AlohaExample.MiYgZhxO.js";import{$t as i,Xt as a,Zt as o,nn as s,qt as c}from"./bundle.index.nBnUcnwG.js";import{$t as l,Ft as u,It as d,Mt as f,Pt as p,Rt as m,Vt as h,hn as g,rn as _,sn as v,tn as y}from"./chunk.vendor.BvryzG0o.js";import{t as b}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function x(){return{codeHtml:`<a-avatar name="Anna Becker"></a-avatar>
<a-avatar name="Ben Ott"></a-avatar>
<a-avatar name="Clara Maria Lenz"></a-avatar>
<a-avatar name="Мария Иванова"></a-avatar>
<a-avatar></a-avatar>`}}function S(){return{codeJs:`import {
  AAvatar,
} from "aloha-vue";

export default {
  name: "PageAvatarBasic",
  components: {
    AAvatar,
  },
};`}}var C={name:`PageAvatarBasic`,components:{AAvatar:o,AlohaExample:r},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t}}},w={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ee(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_AVATAR_BASIC_DESCRIPTION_`,props:[`name`]},{default:v(()=>[u(`div`,w,[h(o,{name:`Anna Becker`}),h(o,{name:`Ben Ott`}),h(o,{name:`Clara Maria Lenz`}),h(o,{name:`Мария Иванова`}),h(o)])]),_:1},8,[`code-html`,`code-js`])}var T=b(C,[[`render`,ee]]);function E(){return{codeHtml:`<a-avatar name="Anna Becker"></a-avatar> <!-- color="auto" -->
<a-avatar name="gray" color="gray"></a-avatar>
<a-avatar name="primary" color="primary"></a-avatar>
<a-avatar name="secondary" color="secondary"></a-avatar>
<a-avatar name="tertiary" color="tertiary"></a-avatar>
<a-avatar name="success" color="success"></a-avatar>
<a-avatar name="info" color="info"></a-avatar>
<a-avatar name="warning" color="warning"></a-avatar>
<a-avatar name="danger" color="danger"></a-avatar>`}}function D(){return{codeJs:`import {
  AAvatar,
} from "aloha-vue";

export default {
  name: "PageAvatarColors",
  components: {
    AAvatar,
  },
};`}}var O={name:`PageAvatarColors`,components:{AAvatar:o,AlohaExample:r},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t}}},k={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function A(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_COLORS_HEADER_`,description:`_A_AVATAR_COLORS_DESCRIPTION_`,props:[`color`]},{default:v(()=>[u(`div`,k,[(l(),m(f,null,y([`gray`,`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`],e=>h(o,{key:e,name:e,color:e,"initials-limit":1},null,8,[`name`,`color`])),64))])]),_:1},8,[`code-html`,`code-js`])}var j=b(O,[[`render`,A]]);function M(){return{codeHtml:`<a-avatar
  name="Assistant"
  initials="AI"
  color="tertiary"
></a-avatar>
<a-avatar
  alt="Home"
  icon="House"
></a-avatar>
<a-avatar
  name="Favorites"
  color="warning"
>
  <a-icon icon="StarFill"></a-icon>
</a-avatar>`}}function N(){return{codeJs:`import {
  AAvatar,
  AIcon,
} from "aloha-vue";

export default {
  name: "PageAvatarContent",
  components: {
    AAvatar,
    AIcon,
  },
};`}}var P={name:`PageAvatarContent`,components:{AAvatar:o,AIcon:s,AlohaExample:r},setup(){let{codeHtml:e}=M(),{codeJs:t}=N();return{codeHtml:e,codeJs:t}}},F={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function I(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`a-icon`),c=_(`aloha-example`);return l(),d(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_CONTENT_HEADER_`,description:`_A_AVATAR_CONTENT_DESCRIPTION_`,props:[`initials`,`initialsLimit`,`icon`]},{default:v(()=>[u(`div`,F,[h(o,{name:`Assistant`,initials:`AI`,color:`tertiary`}),h(o,{alt:`Home`,icon:`House`}),h(o,{name:`Favorites`,color:`warning`},{default:v(()=>[h(s,{icon:`StarFill`})]),_:1})])]),_:1},8,[`code-html`,`code-js`])}var L=b(P,[[`render`,I]]);function R(){return{codeHtml:`<ul class="a_list_without_styles">
  <li class="a_d_flex a_gap_2 a_align_items_center">
    <a-avatar
      name="Anna Becker"
      :decorative="true"
      size="small"
    ></a-avatar>
    <span>Anna Becker</span>
  </li>
</ul>`}}function z(){return{codeJs:`import {
  AAvatar,
} from "aloha-vue";

export default {
  name: "PageAvatarDecorative",
  components: {
    AAvatar,
  },
};`}}var B={name:`PageAvatarDecorative`,components:{AAvatar:o,AlohaExample:r},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t}}},V={class:`a_list_without_styles a_d_flex a_flex_column a_gap_2 a_mb_0`};function H(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_DECORATIVE_HEADER_`,description:`_A_AVATAR_DECORATIVE_DESCRIPTION_`,props:[`decorative`]},{default:v(()=>[u(`ul`,V,[(l(),m(f,null,y([`Anna Becker`,`Ben Ott`],e=>u(`li`,{class:`a_d_flex a_gap_2 a_align_items_center`,key:e},[h(o,{name:e,decorative:!0,size:`small`},null,8,[`name`]),u(`span`,null,g(e),1)])),64))])]),_:1},8,[`code-html`,`code-js`])}var U=b(B,[[`render`,H]]);function W(){return{codeHtml:`<a-avatar-group
  label="Team"
  :max="4"
>
  <a-avatar
    v-for="name in names"
    :key="name"
    :name="name"
  ></a-avatar>
</a-avatar-group>

<a-avatar-group
  label="Team"
  size="small"
>
  <a-avatar name="Anna Becker"></a-avatar>
  <a-avatar name="Ben Ott"></a-avatar>
  <a-avatar name="Clara Lenz"></a-avatar>
  <a-avatar
    name="Tennis Club"
    src="./assets/Tennis_ball_purple_background.png"
  ></a-avatar>
</a-avatar-group>`}}function G(){return{codeJs:`import {
  AAvatar,
  AAvatarGroup,
} from "aloha-vue";

export default {
  name: "PageAvatarGroup",
  components: {
    AAvatar,
    AAvatarGroup,
  },
};`}}var K={name:`PageAvatarGroup`,components:{AAvatar:o,AAvatarGroup:a,AlohaExample:r},setup(){let{codeHtml:e}=W(),{codeJs:t}=G();return{codeHtml:e,codeJs:t}}},q={class:`a_d_flex a_flex_column a_gap_3`};function J(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`a-avatar-group`),c=_(`aloha-example`);return l(),d(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_GROUP_HEADER_`,description:`_A_AVATAR_GROUP_DESCRIPTION_`,props:[`max`,`label`,`size`,`shape`]},{default:v(()=>[u(`div`,q,[h(s,{label:`Team`,max:4},{default:v(()=>[(l(),m(f,null,y([`Anna Becker`,`Ben Ott`,`Clara Lenz`,`David Roth`,`Eva Klein`,`Felix Wolf`,`Greta Sommer`],e=>h(o,{key:e,name:e},null,8,[`name`])),64))]),_:1}),h(s,{label:`Team`,size:`small`},{default:v(()=>[(l(),m(f,null,y([`Anna Becker`,`Ben Ott`,`Clara Lenz`],e=>h(o,{key:e,name:e},null,8,[`name`])),64)),h(o,{name:`Tennis Club`,src:`./assets/Tennis_ball_purple_background.png`})]),_:1})])]),_:1},8,[`code-html`,`code-js`])}var Y=b(K,[[`render`,J]]);function X(){return{codeHtml:`<a-avatar
  name="Tennis Club"
  src="./assets/Tennis_ball_purple_background.png"
></a-avatar>
<!-- the image is not found: the initials are shown -->
<a-avatar
  name="Tennis Club"
  src="./assets/not-found.png"
></a-avatar>`}}function Z(){return{codeJs:`import {
  AAvatar,
} from "aloha-vue";

export default {
  name: "PageAvatarImage",
  components: {
    AAvatar,
  },
};`}}var Q={name:`PageAvatarImage`,components:{AAvatar:o,AlohaExample:r},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t}}},te={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ne(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_IMAGE_HEADER_`,description:`_A_AVATAR_IMAGE_DESCRIPTION_`,props:[`src`,`alt`]},{default:v(()=>[u(`div`,te,[h(o,{name:`Tennis Club`,src:`./assets/Tennis_ball_purple_background.png`}),h(o,{name:`Tennis Club`,src:`./assets/not-found.png`})])]),_:1},8,[`code-html`,`code-js`])}var re=b(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-avatar
  name="Aloha GmbH"
  shape="square"
></a-avatar>
<a-avatar
  name="Tennis Club"
  shape="square"
  size="large"
  src="./assets/Tennis_ball_purple_background.png"
></a-avatar>`}}function ae(){return{codeJs:`import {
  AAvatar,
} from "aloha-vue";

export default {
  name: "PageAvatarShape",
  components: {
    AAvatar,
  },
};`}}var oe={name:`PageAvatarShape`,components:{AAvatar:o,AlohaExample:r},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t}}},se={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ce(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_SHAPE_HEADER_`,description:`_A_AVATAR_SHAPE_DESCRIPTION_`,props:[`shape`]},{default:v(()=>[u(`div`,se,[h(o,{name:`Aloha GmbH`,shape:`square`}),h(o,{name:`Tennis Club`,shape:`square`,size:`large`,src:`./assets/Tennis_ball_purple_background.png`})])]),_:1},8,[`code-html`,`code-js`])}var le=b(oe,[[`render`,ce]]);function ue(){return{codeHtml:`<a-avatar name="Anna Becker" size="small"></a-avatar>
<a-avatar name="Anna Becker" size="medium"></a-avatar>
<a-avatar name="Anna Becker" size="large"></a-avatar>
<a-avatar name="Anna Becker" size="xlarge"></a-avatar>
<a-avatar name="Anna Becker" :size="96"></a-avatar>`}}function de(){return{codeJs:`import {
  AAvatar,
} from "aloha-vue";

export default {
  name: "PageAvatarSizes",
  components: {
    AAvatar,
  },
};`}}var fe={name:`PageAvatarSizes`,components:{AAvatar:o,AlohaExample:r},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de();return{codeHtml:e,codeJs:t}}},pe={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function me(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_SIZES_HEADER_`,description:`_A_AVATAR_SIZES_DESCRIPTION_`,props:[`size`]},{default:v(()=>[u(`div`,pe,[(l(),m(f,null,y([`small`,`medium`,`large`,`xlarge`,96],e=>h(o,{key:e,name:`Anna Becker`,size:e},null,8,[`size`])),64))])]),_:1},8,[`code-html`,`code-js`])}var he=b(fe,[[`render`,me]]);function ge(){return{codeHtml:`<a-avatar name="Anna Becker" status="online"></a-avatar>
<a-avatar name="Anna Becker" status="away"></a-avatar>
<a-avatar name="Anna Becker" status="busy"></a-avatar>
<a-avatar name="Anna Becker" status="offline"></a-avatar>`}}function _e(){return{codeJs:`import {
  AAvatar,
} from "aloha-vue";

export default {
  name: "PageAvatarStatus",
  components: {
    AAvatar,
  },
};`}}var ve={name:`PageAvatarStatus`,components:{AAvatar:o,AlohaExample:r},setup(){let{codeHtml:e}=ge(),{codeJs:t}=_e();return{codeHtml:e,codeJs:t}}},ye={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function be(e,t,n,r,i,a){let o=_(`a-avatar`),s=_(`aloha-example`);return l(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_STATUS_HEADER_`,description:`_A_AVATAR_STATUS_DESCRIPTION_`,props:[`status`,`statusText`]},{default:v(()=>[u(`div`,ye,[(l(),m(f,null,y([`online`,`away`,`busy`,`offline`],e=>h(o,{key:e,name:`Anna Becker`,status:e},null,8,[`status`])),64))])]),_:1},8,[`code-html`,`code-js`])}var $=b(ve,[[`render`,be]]);function xe(){return{dataEvents:[{name:`error`,description:`_A_AVATAR_EVENTS_ERROR_`}]}}function Se(){let e=p(()=>i({placeholder:`_A_AVATAR_COMPONENT_NAME_`}));return{pageTitle:p(()=>`AAvatar${e.value?` (${e.value})`:``}`)}}function Ce(){return{dataProps:[{name:`alt`,description:`_A_AVATAR_PROPS_ALT_`,type:`String`,default:`undefined`,required:!1},{name:`color`,description:`_A_AVATAR_PROPS_COLOR_`,type:`String`,default:`"auto"`,required:!1},{name:`decorative`,description:`_A_AVATAR_PROPS_DECORATIVE_`,type:`Boolean`,default:`false`,required:!1},{name:`icon`,description:`_A_AVATAR_PROPS_ICON_`,type:`String | Object`,default:`undefined`,required:!1},{name:`initials`,description:`_A_AVATAR_PROPS_INITIALS_`,type:`String`,default:`undefined`,required:!1},{name:`initialsLimit`,description:`_A_AVATAR_PROPS_INITIALS_LIMIT_`,type:`Number`,default:`2`,required:!1},{name:`name`,description:`_A_AVATAR_PROPS_NAME_`,type:`String`,default:`undefined`,required:!1},{name:`shape`,description:`_A_AVATAR_PROPS_SHAPE_`,type:`String`,default:`"circle"`,required:!1},{name:`size`,description:`_A_AVATAR_PROPS_SIZE_`,type:`String | Number`,default:`"medium"`,required:!1},{name:`src`,description:`_A_AVATAR_PROPS_SRC_`,type:`String`,default:`undefined`,required:!1},{name:`status`,description:`_A_AVATAR_PROPS_STATUS_`,type:`String`,default:`undefined`,required:!1},{name:`statusText`,description:`_A_AVATAR_PROPS_STATUS_TEXT_`,type:`String`,default:`undefined`,required:!1},{name:`tag`,description:`_A_AVATAR_PROPS_TAG_`,type:`String`,default:`"span"`,required:!1}],dataPropsGroup:[{name:`label`,description:`_A_AVATAR_GROUP_PROPS_LABEL_`,type:`String`,default:`undefined`,required:!1},{name:`max`,description:`_A_AVATAR_GROUP_PROPS_MAX_`,type:`Number`,default:`undefined`,required:!1},{name:`moreText`,description:`_A_AVATAR_GROUP_PROPS_MORE_TEXT_`,type:`String`,default:`"_A_AVATAR_GROUP_MORE_{{count}}_"`,required:!1},{name:`shape`,description:`_A_AVATAR_GROUP_PROPS_SHAPE_`,type:`String`,default:`undefined`,required:!1},{name:`size`,description:`_A_AVATAR_GROUP_PROPS_SIZE_`,type:`String | Number`,default:`undefined`,required:!1},{name:`tag`,description:`_A_AVATAR_GROUP_PROPS_TAG_`,type:`String`,default:`"div"`,required:!1}]}}function we(){return{dataSlots:[{name:`default`,description:`_A_AVATAR_SLOT_DEFAULT_`}]}}function Te(){return{dataTranslate:[`_A_AVATAR_ARIA_LABEL_`,`_A_AVATAR_STATUS_ONLINE_`,`_A_AVATAR_STATUS_AWAY_`,`_A_AVATAR_STATUS_BUSY_`,`_A_AVATAR_STATUS_OFFLINE_`,`_A_AVATAR_GROUP_MORE_{{count}}_`]}}var Ee={name:`PageAvatar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:c,PageAvatarBasic:T,PageAvatarColors:j,PageAvatarContent:L,PageAvatarDecorative:U,PageAvatarGroup:Y,PageAvatarImage:re,PageAvatarShape:le,PageAvatarSizes:he,PageAvatarStatus:$},setup(){let{pageTitle:e}=Se(),{dataProps:t,dataPropsGroup:n}=Ce(),{dataEvents:r}=xe(),{dataSlots:i}=we(),{dataTranslate:a}=Te();return{dataEvents:r,dataProps:t,dataPropsGroup:n,dataSlots:i,dataTranslate:a,pageTitle:e}}};function De(e,t,n,r,i,a){let o=_(`a-translation`),s=_(`page-avatar-basic`),c=_(`page-avatar-image`),u=_(`page-avatar-sizes`),f=_(`page-avatar-shape`),p=_(`page-avatar-colors`),m=_(`page-avatar-status`),g=_(`page-avatar-decorative`),y=_(`page-avatar-content`),b=_(`page-avatar-group`),x=_(`aloha-table-props`),S=_(`aloha-table-translate`),C=_(`aloha-table-css-vars`),w=_(`aloha-page`);return l(),d(w,{"page-title":e.pageTitle},{body:v(()=>[h(o,{tag:`p`,html:`_A_AVATAR_COMPONENT_DESCRIPTION_`}),h(s),h(c),h(u),h(f),h(p),h(m),h(g),h(y),h(b),h(x,{"table-label":`AAvatar`,data:e.dataProps},null,8,[`data`]),h(x,{"table-label":`AAvatarGroup`,data:e.dataPropsGroup},null,8,[`data`]),h(x,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),h(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),h(S,{data:e.dataTranslate},null,8,[`data`]),h(C,{files:`components/AAvatar`})]),_:1},8,[`page-title`])}var Oe=b(Ee,[[`render`,De]]);export{Oe as default};