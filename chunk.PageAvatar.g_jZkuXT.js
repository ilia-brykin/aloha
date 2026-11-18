import{t as e}from"./chunk.AlohaPage.D7DhFNcw.js";import{t}from"./chunk.AlohaTableProps.DV2Sn4dJ.js";import{t as n}from"./chunk.AlohaTableTranslate.C44ajV_2.js";import{t as r}from"./chunk.AlohaExample.B4lEPEM8.js";import{Ht as i,Vt as a,Wt as o,it as s,qt as c}from"./bundle.index.C3m7sagw.js";import{$t as l,Bt as u,Ft as d,It as f,Mt as p,Pt as m,Rt as h,Zt as g,an as _,pn as v,tn as y}from"./chunk.vendor.H0cZuFAV.js";import{t as b}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function x(){return{codeHtml:`<a-avatar name="Anna Becker"></a-avatar>
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
};`}}var C={name:`PageAvatarBasic`,components:{AAvatar:i,AlohaExample:r},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t}}},w={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ee(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_AVATAR_BASIC_DESCRIPTION_`,props:[`name`]},{default:_(()=>[d(`div`,w,[u(o,{name:`Anna Becker`}),u(o,{name:`Ben Ott`}),u(o,{name:`Clara Maria Lenz`}),u(o,{name:`Мария Иванова`}),u(o)])]),_:1},8,[`code-html`,`code-js`])}var T=b(C,[[`render`,ee]]);function E(){return{codeHtml:`<a-avatar name="Anna Becker"></a-avatar> <!-- color="auto" -->
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
};`}}var O={name:`PageAvatarColors`,components:{AAvatar:i,AlohaExample:r},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t}}},k={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function A(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_COLORS_HEADER_`,description:`_A_AVATAR_COLORS_DESCRIPTION_`,props:[`color`]},{default:_(()=>[d(`div`,k,[(g(),h(p,null,l([`gray`,`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`],e=>u(o,{key:e,name:e,color:e,"initials-limit":1},null,8,[`name`,`color`])),64))])]),_:1},8,[`code-html`,`code-js`])}var j=b(O,[[`render`,A]]);function M(){return{codeHtml:`<a-avatar
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
};`}}var P={name:`PageAvatarContent`,components:{AAvatar:i,AIcon:c,AlohaExample:r},setup(){let{codeHtml:e}=M(),{codeJs:t}=N();return{codeHtml:e,codeJs:t}}},F={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function I(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`a-icon`),c=y(`aloha-example`);return g(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_CONTENT_HEADER_`,description:`_A_AVATAR_CONTENT_DESCRIPTION_`,props:[`initials`,`initialsLimit`,`icon`]},{default:_(()=>[d(`div`,F,[u(o,{name:`Assistant`,initials:`AI`,color:`tertiary`}),u(o,{alt:`Home`,icon:`House`}),u(o,{name:`Favorites`,color:`warning`},{default:_(()=>[u(s,{icon:`StarFill`})]),_:1})])]),_:1},8,[`code-html`,`code-js`])}var L=b(P,[[`render`,I]]);function R(){return{codeHtml:`<ul class="a_list_without_styles">
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
};`}}var B={name:`PageAvatarDecorative`,components:{AAvatar:i,AlohaExample:r},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t}}},V={class:`a_list_without_styles a_d_flex a_flex_column a_gap_2 a_mb_0`};function H(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_DECORATIVE_HEADER_`,description:`_A_AVATAR_DECORATIVE_DESCRIPTION_`,props:[`decorative`]},{default:_(()=>[d(`ul`,V,[(g(),h(p,null,l([`Anna Becker`,`Ben Ott`],e=>d(`li`,{class:`a_d_flex a_gap_2 a_align_items_center`,key:e},[u(o,{name:e,decorative:!0,size:`small`},null,8,[`name`]),d(`span`,null,v(e),1)])),64))])]),_:1},8,[`code-html`,`code-js`])}var U=b(B,[[`render`,H]]);function W(){return{codeHtml:`<a-avatar-group
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
};`}}var K={name:`PageAvatarGroup`,components:{AAvatar:i,AAvatarGroup:a,AlohaExample:r},setup(){let{codeHtml:e}=W(),{codeJs:t}=G();return{codeHtml:e,codeJs:t}}},q={class:`a_d_flex a_flex_column a_gap_3`};function J(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`a-avatar-group`),c=y(`aloha-example`);return g(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_GROUP_HEADER_`,description:`_A_AVATAR_GROUP_DESCRIPTION_`,props:[`max`,`label`,`size`,`shape`]},{default:_(()=>[d(`div`,q,[u(s,{label:`Team`,max:4},{default:_(()=>[(g(),h(p,null,l([`Anna Becker`,`Ben Ott`,`Clara Lenz`,`David Roth`,`Eva Klein`,`Felix Wolf`,`Greta Sommer`],e=>u(o,{key:e,name:e},null,8,[`name`])),64))]),_:1}),u(s,{label:`Team`,size:`small`},{default:_(()=>[(g(),h(p,null,l([`Anna Becker`,`Ben Ott`,`Clara Lenz`],e=>u(o,{key:e,name:e},null,8,[`name`])),64)),u(o,{name:`Tennis Club`,src:`./assets/Tennis_ball_purple_background.png`})]),_:1})])]),_:1},8,[`code-html`,`code-js`])}var Y=b(K,[[`render`,J]]);function X(){return{codeHtml:`<a-avatar
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
};`}}var Q={name:`PageAvatarImage`,components:{AAvatar:i,AlohaExample:r},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t}}},te={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ne(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_IMAGE_HEADER_`,description:`_A_AVATAR_IMAGE_DESCRIPTION_`,props:[`src`,`alt`]},{default:_(()=>[d(`div`,te,[u(o,{name:`Tennis Club`,src:`./assets/Tennis_ball_purple_background.png`}),u(o,{name:`Tennis Club`,src:`./assets/not-found.png`})])]),_:1},8,[`code-html`,`code-js`])}var re=b(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-avatar
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
};`}}var oe={name:`PageAvatarShape`,components:{AAvatar:i,AlohaExample:r},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t}}},se={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ce(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_SHAPE_HEADER_`,description:`_A_AVATAR_SHAPE_DESCRIPTION_`,props:[`shape`]},{default:_(()=>[d(`div`,se,[u(o,{name:`Aloha GmbH`,shape:`square`}),u(o,{name:`Tennis Club`,shape:`square`,size:`large`,src:`./assets/Tennis_ball_purple_background.png`})])]),_:1},8,[`code-html`,`code-js`])}var le=b(oe,[[`render`,ce]]);function ue(){return{codeHtml:`<a-avatar name="Anna Becker" size="small"></a-avatar>
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
};`}}var fe={name:`PageAvatarSizes`,components:{AAvatar:i,AlohaExample:r},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de();return{codeHtml:e,codeJs:t}}},pe={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function me(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_SIZES_HEADER_`,description:`_A_AVATAR_SIZES_DESCRIPTION_`,props:[`size`]},{default:_(()=>[d(`div`,pe,[(g(),h(p,null,l([`small`,`medium`,`large`,`xlarge`,96],e=>u(o,{key:e,name:`Anna Becker`,size:e},null,8,[`size`])),64))])]),_:1},8,[`code-html`,`code-js`])}var he=b(fe,[[`render`,me]]);function ge(){return{codeHtml:`<a-avatar name="Anna Becker" status="online"></a-avatar>
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
};`}}var ve={name:`PageAvatarStatus`,components:{AAvatar:i,AlohaExample:r},setup(){let{codeHtml:e}=ge(),{codeJs:t}=_e();return{codeHtml:e,codeJs:t}}},ye={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function be(e,t,n,r,i,a){let o=y(`a-avatar`),s=y(`aloha-example`);return g(),f(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_STATUS_HEADER_`,description:`_A_AVATAR_STATUS_DESCRIPTION_`,props:[`status`,`statusText`]},{default:_(()=>[d(`div`,ye,[(g(),h(p,null,l([`online`,`away`,`busy`,`offline`],e=>u(o,{key:e,name:`Anna Becker`,status:e},null,8,[`status`])),64))])]),_:1},8,[`code-html`,`code-js`])}var $=b(ve,[[`render`,be]]);function xe(){return{dataEvents:[{name:`error`,description:`_A_AVATAR_EVENTS_ERROR_`}]}}function Se(){let e=m(()=>o({placeholder:`_A_AVATAR_COMPONENT_NAME_`}));return{pageTitle:m(()=>`AAvatar${e.value?` (${e.value})`:``}`)}}function Ce(){return{dataProps:[{name:`alt`,description:`_A_AVATAR_PROPS_ALT_`,type:`String`,default:`undefined`,required:!1},{name:`color`,description:`_A_AVATAR_PROPS_COLOR_`,type:`String`,default:`"auto"`,required:!1},{name:`decorative`,description:`_A_AVATAR_PROPS_DECORATIVE_`,type:`Boolean`,default:`false`,required:!1},{name:`icon`,description:`_A_AVATAR_PROPS_ICON_`,type:`String | Object`,default:`undefined`,required:!1},{name:`initials`,description:`_A_AVATAR_PROPS_INITIALS_`,type:`String`,default:`undefined`,required:!1},{name:`initialsLimit`,description:`_A_AVATAR_PROPS_INITIALS_LIMIT_`,type:`Number`,default:`2`,required:!1},{name:`name`,description:`_A_AVATAR_PROPS_NAME_`,type:`String`,default:`undefined`,required:!1},{name:`shape`,description:`_A_AVATAR_PROPS_SHAPE_`,type:`String`,default:`"circle"`,required:!1},{name:`size`,description:`_A_AVATAR_PROPS_SIZE_`,type:`String | Number`,default:`"medium"`,required:!1},{name:`src`,description:`_A_AVATAR_PROPS_SRC_`,type:`String`,default:`undefined`,required:!1},{name:`status`,description:`_A_AVATAR_PROPS_STATUS_`,type:`String`,default:`undefined`,required:!1},{name:`statusText`,description:`_A_AVATAR_PROPS_STATUS_TEXT_`,type:`String`,default:`undefined`,required:!1},{name:`tag`,description:`_A_AVATAR_PROPS_TAG_`,type:`String`,default:`"span"`,required:!1}],dataPropsGroup:[{name:`label`,description:`_A_AVATAR_GROUP_PROPS_LABEL_`,type:`String`,default:`undefined`,required:!1},{name:`max`,description:`_A_AVATAR_GROUP_PROPS_MAX_`,type:`Number`,default:`undefined`,required:!1},{name:`moreText`,description:`_A_AVATAR_GROUP_PROPS_MORE_TEXT_`,type:`String`,default:`"_A_AVATAR_GROUP_MORE_{{count}}_"`,required:!1},{name:`shape`,description:`_A_AVATAR_GROUP_PROPS_SHAPE_`,type:`String`,default:`undefined`,required:!1},{name:`size`,description:`_A_AVATAR_GROUP_PROPS_SIZE_`,type:`String | Number`,default:`undefined`,required:!1},{name:`tag`,description:`_A_AVATAR_GROUP_PROPS_TAG_`,type:`String`,default:`"div"`,required:!1}]}}function we(){return{dataSlots:[{name:`default`,description:`_A_AVATAR_SLOT_DEFAULT_`}]}}function Te(){return{dataTranslate:[`_A_AVATAR_ARIA_LABEL_`,`_A_AVATAR_STATUS_ONLINE_`,`_A_AVATAR_STATUS_AWAY_`,`_A_AVATAR_STATUS_BUSY_`,`_A_AVATAR_STATUS_OFFLINE_`,`_A_AVATAR_GROUP_MORE_{{count}}_`]}}var Ee={name:`PageAvatar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:s,PageAvatarBasic:T,PageAvatarColors:j,PageAvatarContent:L,PageAvatarDecorative:U,PageAvatarGroup:Y,PageAvatarImage:re,PageAvatarShape:le,PageAvatarSizes:he,PageAvatarStatus:$},setup(){let{pageTitle:e}=Se(),{dataProps:t,dataPropsGroup:n}=Ce(),{dataEvents:r}=xe(),{dataSlots:i}=we(),{dataTranslate:a}=Te();return{dataEvents:r,dataProps:t,dataPropsGroup:n,dataSlots:i,dataTranslate:a,pageTitle:e}}};function De(e,t,n,r,i,a){let o=y(`a-translation`),s=y(`page-avatar-basic`),c=y(`page-avatar-image`),l=y(`page-avatar-sizes`),d=y(`page-avatar-shape`),p=y(`page-avatar-colors`),m=y(`page-avatar-status`),h=y(`page-avatar-decorative`),v=y(`page-avatar-content`),b=y(`page-avatar-group`),x=y(`aloha-table-props`),S=y(`aloha-table-translate`),C=y(`aloha-table-css-vars`),w=y(`aloha-page`);return g(),f(w,{"page-title":e.pageTitle},{body:_(()=>[u(o,{tag:`p`,html:`_A_AVATAR_COMPONENT_DESCRIPTION_`}),u(s),u(c),u(l),u(d),u(p),u(m),u(h),u(v),u(b),u(x,{"table-label":`AAvatar`,data:e.dataProps},null,8,[`data`]),u(x,{"table-label":`AAvatarGroup`,data:e.dataPropsGroup},null,8,[`data`]),u(x,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),u(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),u(S,{data:e.dataTranslate},null,8,[`data`]),u(C,{files:`components/AAvatar`})]),_:1},8,[`page-title`])}var Oe=b(Ee,[[`render`,De]]);export{Oe as default};