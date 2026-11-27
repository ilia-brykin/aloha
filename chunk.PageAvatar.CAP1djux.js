import{t as e}from"./chunk.AlohaPage.CNwNARGV.js";import{t}from"./chunk.AlohaTableProps.DPFM_Zhq.js";import{t as n}from"./chunk.AlohaTableTranslate.CY9139kL.js";import{t as r}from"./chunk.AlohaExample.NZuewB4M.js";import{gn as i,hn as a,ln as o,mn as s,t as c,un as l}from"./bundle.index.DHnbMku0.js";import{Gt as u,Ht as d,Jt as f,Ut as p,Vt as m,cn as h,mn as g,on as _,un as v,wn as y,zt as b}from"./chunk.vendor.Bjd2408Z.js";function x(){return{codeHtml:`<a-avatar name="Anna Becker"></a-avatar>
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
};`}}var C={name:`PageAvatarBasic`,components:{AAvatar:l,AlohaExample:r},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t}}},w={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ee(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_AVATAR_BASIC_DESCRIPTION_`,props:[`name`]},{default:g(()=>[d(`div`,w,[f(o,{name:`Anna Becker`}),f(o,{name:`Ben Ott`}),f(o,{name:`Clara Maria Lenz`}),f(o,{name:`Мария Иванова`}),f(o)])]),_:1},8,[`code-html`,`code-js`])}var T=c(C,[[`render`,ee]]);function E(){return{codeHtml:`<a-avatar name="Anna Becker"></a-avatar> <!-- color="auto" -->
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
};`}}var O={name:`PageAvatarColors`,components:{AAvatar:l,AlohaExample:r},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t}}},k={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function A(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_COLORS_HEADER_`,description:`_A_AVATAR_COLORS_DESCRIPTION_`,props:[`color`]},{default:g(()=>[d(`div`,k,[(_(),u(b,null,h([`gray`,`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`],e=>f(o,{key:e,name:e,color:e,"initials-limit":1},null,8,[`name`,`color`])),64))])]),_:1},8,[`code-html`,`code-js`])}var j=c(O,[[`render`,A]]);function M(){return{codeHtml:`<a-avatar
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
};`}}var P={name:`PageAvatarContent`,components:{AAvatar:l,AIcon:i,AlohaExample:r},setup(){let{codeHtml:e}=M(),{codeJs:t}=N();return{codeHtml:e,codeJs:t}}},F={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function I(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`a-icon`),c=v(`aloha-example`);return _(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_CONTENT_HEADER_`,description:`_A_AVATAR_CONTENT_DESCRIPTION_`,props:[`initials`,`initialsLimit`,`icon`]},{default:g(()=>[d(`div`,F,[f(o,{name:`Assistant`,initials:`AI`,color:`tertiary`}),f(o,{alt:`Home`,icon:`House`}),f(o,{name:`Favorites`,color:`warning`},{default:g(()=>[f(s,{icon:`StarFill`})]),_:1})])]),_:1},8,[`code-html`,`code-js`])}var L=c(P,[[`render`,I]]);function R(){return{codeHtml:`<ul class="a_list_without_styles">
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
};`}}var B={name:`PageAvatarDecorative`,components:{AAvatar:l,AlohaExample:r},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t}}},V={class:`a_list_without_styles a_d_flex a_flex_column a_gap_2 a_mb_0`};function H(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_DECORATIVE_HEADER_`,description:`_A_AVATAR_DECORATIVE_DESCRIPTION_`,props:[`decorative`]},{default:g(()=>[d(`ul`,V,[(_(),u(b,null,h([`Anna Becker`,`Ben Ott`],e=>d(`li`,{class:`a_d_flex a_gap_2 a_align_items_center`,key:e},[f(o,{name:e,decorative:!0,size:`small`},null,8,[`name`]),d(`span`,null,y(e),1)])),64))])]),_:1},8,[`code-html`,`code-js`])}var U=c(B,[[`render`,H]]);function W(){return{codeHtml:`<a-avatar-group
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
};`}}var K={name:`PageAvatarGroup`,components:{AAvatar:l,AAvatarGroup:o,AlohaExample:r},setup(){let{codeHtml:e}=W(),{codeJs:t}=G();return{codeHtml:e,codeJs:t}}},q={class:`a_d_flex a_flex_column a_gap_3`};function J(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`a-avatar-group`),c=v(`aloha-example`);return _(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_GROUP_HEADER_`,description:`_A_AVATAR_GROUP_DESCRIPTION_`,props:[`max`,`label`,`size`,`shape`]},{default:g(()=>[d(`div`,q,[f(s,{label:`Team`,max:4},{default:g(()=>[(_(),u(b,null,h([`Anna Becker`,`Ben Ott`,`Clara Lenz`,`David Roth`,`Eva Klein`,`Felix Wolf`,`Greta Sommer`],e=>f(o,{key:e,name:e},null,8,[`name`])),64))]),_:1}),f(s,{label:`Team`,size:`small`},{default:g(()=>[(_(),u(b,null,h([`Anna Becker`,`Ben Ott`,`Clara Lenz`],e=>f(o,{key:e,name:e},null,8,[`name`])),64)),f(o,{name:`Tennis Club`,src:`./assets/Tennis_ball_purple_background.png`})]),_:1})])]),_:1},8,[`code-html`,`code-js`])}var Y=c(K,[[`render`,J]]);function X(){return{codeHtml:`<a-avatar
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
};`}}var Q={name:`PageAvatarImage`,components:{AAvatar:l,AlohaExample:r},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t}}},te={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ne(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_IMAGE_HEADER_`,description:`_A_AVATAR_IMAGE_DESCRIPTION_`,props:[`src`,`alt`]},{default:g(()=>[d(`div`,te,[f(o,{name:`Tennis Club`,src:`./assets/Tennis_ball_purple_background.png`}),f(o,{name:`Tennis Club`,src:`./assets/not-found.png`})])]),_:1},8,[`code-html`,`code-js`])}var re=c(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-avatar
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
};`}}var oe={name:`PageAvatarShape`,components:{AAvatar:l,AlohaExample:r},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t}}},se={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function ce(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_SHAPE_HEADER_`,description:`_A_AVATAR_SHAPE_DESCRIPTION_`,props:[`shape`]},{default:g(()=>[d(`div`,se,[f(o,{name:`Aloha GmbH`,shape:`square`}),f(o,{name:`Tennis Club`,shape:`square`,size:`large`,src:`./assets/Tennis_ball_purple_background.png`})])]),_:1},8,[`code-html`,`code-js`])}var le=c(oe,[[`render`,ce]]);function ue(){return{codeHtml:`<a-avatar name="Anna Becker" size="small"></a-avatar>
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
};`}}var fe={name:`PageAvatarSizes`,components:{AAvatar:l,AlohaExample:r},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de();return{codeHtml:e,codeJs:t}}},pe={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function me(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_SIZES_HEADER_`,description:`_A_AVATAR_SIZES_DESCRIPTION_`,props:[`size`]},{default:g(()=>[d(`div`,pe,[(_(),u(b,null,h([`small`,`medium`,`large`,`xlarge`,96],e=>f(o,{key:e,name:`Anna Becker`,size:e},null,8,[`size`])),64))])]),_:1},8,[`code-html`,`code-js`])}var he=c(fe,[[`render`,me]]);function ge(){return{codeHtml:`<a-avatar name="Anna Becker" status="online"></a-avatar>
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
};`}}var ve={name:`PageAvatarStatus`,components:{AAvatar:l,AlohaExample:r},setup(){let{codeHtml:e}=ge(),{codeJs:t}=_e();return{codeHtml:e,codeJs:t}}},ye={class:`a_d_flex a_gap_3 a_flex_wrap a_align_items_center`};function be(e,t,n,r,i,a){let o=v(`a-avatar`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_AVATAR_STATUS_HEADER_`,description:`_A_AVATAR_STATUS_DESCRIPTION_`,props:[`status`,`statusText`]},{default:g(()=>[d(`div`,ye,[(_(),u(b,null,h([`online`,`away`,`busy`,`offline`],e=>f(o,{key:e,name:`Anna Becker`,status:e},null,8,[`status`])),64))])]),_:1},8,[`code-html`,`code-js`])}var $=c(ve,[[`render`,be]]);function xe(){return{dataEvents:[{name:`error`,description:`_A_AVATAR_EVENTS_ERROR_`}]}}function Se(){let e=m(()=>a({placeholder:`_A_AVATAR_COMPONENT_NAME_`}));return{pageTitle:m(()=>`AAvatar${e.value?` (${e.value})`:``}`)}}function Ce(){return{dataProps:[{name:`alt`,description:`_A_AVATAR_PROPS_ALT_`,type:`String`,default:`undefined`,required:!1},{name:`color`,description:`_A_AVATAR_PROPS_COLOR_`,type:`String`,default:`"auto"`,required:!1},{name:`decorative`,description:`_A_AVATAR_PROPS_DECORATIVE_`,type:`Boolean`,default:`false`,required:!1},{name:`icon`,description:`_A_AVATAR_PROPS_ICON_`,type:`String | Object`,default:`undefined`,required:!1},{name:`initials`,description:`_A_AVATAR_PROPS_INITIALS_`,type:`String`,default:`undefined`,required:!1},{name:`initialsLimit`,description:`_A_AVATAR_PROPS_INITIALS_LIMIT_`,type:`Number`,default:`2`,required:!1},{name:`name`,description:`_A_AVATAR_PROPS_NAME_`,type:`String`,default:`undefined`,required:!1},{name:`shape`,description:`_A_AVATAR_PROPS_SHAPE_`,type:`String`,default:`"circle"`,required:!1},{name:`size`,description:`_A_AVATAR_PROPS_SIZE_`,type:`String | Number`,default:`"medium"`,required:!1},{name:`src`,description:`_A_AVATAR_PROPS_SRC_`,type:`String`,default:`undefined`,required:!1},{name:`status`,description:`_A_AVATAR_PROPS_STATUS_`,type:`String`,default:`undefined`,required:!1},{name:`statusText`,description:`_A_AVATAR_PROPS_STATUS_TEXT_`,type:`String`,default:`undefined`,required:!1},{name:`tag`,description:`_A_AVATAR_PROPS_TAG_`,type:`String`,default:`"span"`,required:!1}],dataPropsGroup:[{name:`label`,description:`_A_AVATAR_GROUP_PROPS_LABEL_`,type:`String`,default:`undefined`,required:!1},{name:`max`,description:`_A_AVATAR_GROUP_PROPS_MAX_`,type:`Number`,default:`undefined`,required:!1},{name:`moreText`,description:`_A_AVATAR_GROUP_PROPS_MORE_TEXT_`,type:`String`,default:`"_A_AVATAR_GROUP_MORE_{{count}}_"`,required:!1},{name:`shape`,description:`_A_AVATAR_GROUP_PROPS_SHAPE_`,type:`String`,default:`undefined`,required:!1},{name:`size`,description:`_A_AVATAR_GROUP_PROPS_SIZE_`,type:`String | Number`,default:`undefined`,required:!1},{name:`tag`,description:`_A_AVATAR_GROUP_PROPS_TAG_`,type:`String`,default:`"div"`,required:!1}]}}function we(){return{dataSlots:[{name:`default`,description:`_A_AVATAR_SLOT_DEFAULT_`}]}}function Te(){return{dataTranslate:[`_A_AVATAR_ARIA_LABEL_`,`_A_AVATAR_STATUS_ONLINE_`,`_A_AVATAR_STATUS_AWAY_`,`_A_AVATAR_STATUS_BUSY_`,`_A_AVATAR_STATUS_OFFLINE_`,`_A_AVATAR_GROUP_MORE_{{count}}_`]}}var Ee={name:`PageAvatar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:s,PageAvatarBasic:T,PageAvatarColors:j,PageAvatarContent:L,PageAvatarDecorative:U,PageAvatarGroup:Y,PageAvatarImage:re,PageAvatarShape:le,PageAvatarSizes:he,PageAvatarStatus:$},setup(){let{pageTitle:e}=Se(),{dataProps:t,dataPropsGroup:n}=Ce(),{dataEvents:r}=xe(),{dataSlots:i}=we(),{dataTranslate:a}=Te();return{dataEvents:r,dataProps:t,dataPropsGroup:n,dataSlots:i,dataTranslate:a,pageTitle:e}}};function De(e,t,n,r,i,a){let o=v(`a-translation`),s=v(`page-avatar-basic`),c=v(`page-avatar-image`),l=v(`page-avatar-sizes`),u=v(`page-avatar-shape`),d=v(`page-avatar-colors`),m=v(`page-avatar-status`),h=v(`page-avatar-decorative`),y=v(`page-avatar-content`),b=v(`page-avatar-group`),x=v(`aloha-table-props`),S=v(`aloha-table-translate`),C=v(`aloha-table-css-vars`),w=v(`aloha-page`);return _(),p(w,{"page-title":e.pageTitle},{body:g(()=>[f(o,{tag:`p`,html:`_A_AVATAR_COMPONENT_DESCRIPTION_`}),f(s),f(c),f(l),f(u),f(d),f(m),f(h),f(y),f(b),f(x,{"table-label":`AAvatar`,data:e.dataProps},null,8,[`data`]),f(x,{"table-label":`AAvatarGroup`,data:e.dataPropsGroup},null,8,[`data`]),f(x,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),f(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),f(S,{data:e.dataTranslate},null,8,[`data`]),f(C,{files:`components/AAvatar`})]),_:1},8,[`page-title`])}var Oe=c(Ee,[[`render`,De]]);export{Oe as default};