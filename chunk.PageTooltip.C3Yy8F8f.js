import{t as e}from"./chunk.AlohaPage.D8jsTY5m.js";import{t}from"./chunk.AlohaTableProps.CEJuqblo.js";import{t as n}from"./chunk.AlohaExample.B-5omd3W.js";import{G as ee,an as r,hn as te,mn as i,sn as a,t as o}from"./bundle.index.Cwpafk10.js";import{Gt as s,Ht as c,Jt as l,Ut as u,Vt as d,_n as f,cn as p,mn as m,on as h,un as g,wn as _,zt as v}from"./chunk.vendor.Bjd2408Z.js";function y(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :arrow-padding="35"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>`}}function b(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipArrowPadding",
  components: {
    ATooltip,
  },
};`}}var x={name:`PageTooltipArrowPadding`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=y(),{codeJs:t}=b();return{codeHtml:e,codeJs:t}}};function S(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ARROW_PADDING_HEADER_`,description:`_A_TOOLTIP_GROUP_ARROW_PADDING_DESCRIPTION_`,props:`arrow-padding`},{default:m(()=>[l(i,{class:`a_btn a_btn_primary`,tag:`button`,"arrow-padding":35},{title:m(()=>[...t[0]||=[c(`div`,null,`Aloha`,-1)]]),default:m(()=>[t[1]||=c(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var C=o(x,[[`render`,S]]);function w(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :arrow-padding="arrowPaddingCallback"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>`}}function T(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipArrowPaddingFunction",
  components: {
    ATooltip,
  },
  setup() {
    const arrowPaddingCallback = ({ popper, reference, placement }) => {
      console.log("placement", placement);
      console.log("popper", popper);
      console.log("reference", reference);
      return popper.width / reference.width + 400;
    };

    const title = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.\`;

    return {
      arrowPaddingCallback,
      title,
    };
  },
};`}}var E={name:`PageTooltipArrowPaddingFunction`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{arrowPaddingCallback:({popper:e,reference:t,placement:n})=>(console.log(`placement`,n),console.log(`popper`,e),console.log(`reference`,t),e.width/t.width+400),codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.`}}};function D(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_HEADER_`,description:`_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_DESCRIPTION_`,props:`arrow-padding`},{default:m(()=>[l(i,{class:`a_btn a_btn_primary`,tag:`button`,"arrow-padding":e.arrowPaddingCallback},{title:m(()=>[c(`div`,null,_(e.title),1)]),default:m(()=>[t[0]||=c(`span`,null,`Aloha`,-1)]),_:1},8,[`arrow-padding`])]),_:1},8,[`code-html`,`code-js`])}var O=o(E,[[`render`,D]]);function k(){return{codeHtml:`<a-tooltip>
  <a-button
    class="a_btn a_btn_primary"
    text="_A_TOOLTIP_EXAMPLE_SAVE_"
  />

  <template v-slot:title>
    <a-translation
      text="_A_TOOLTIP_EXAMPLE_SAVE_TITLE_"
    />
  </template>
</a-tooltip>`}}function A(){return{codeJs:`import {
  AButton,
  ATooltip,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATooltip,
    ATranslation,
  },
};`}}var j={name:`PageTooltipBasic`,components:{AlohaExample:n,AButton:a,ATooltip:r,ATranslation:i},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t}}};function M(e,t,n,ee,r,te){let i=g(`a-button`),a=g(`a-translation`),o=g(`a-tooltip`),s=g(`aloha-example`);return h(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_TOOLTIP_BASIC_DESCRIPTION_`,slots:[`default`,`title`]},{default:m(()=>[l(o,null,{title:m(()=>[l(a,{text:`_A_TOOLTIP_EXAMPLE_SAVE_TITLE_`})]),default:m(()=>[l(i,{class:`a_btn a_btn_primary`,text:`_A_TOOLTIP_EXAMPLE_SAVE_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var N=o(j,[[`render`,M]]);function P(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :show-arrow="false"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>`}}function F(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipHideArrow",
  components: {
    ATooltip,
  },
};`}}var I={name:`PageTooltipHideArrow`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=P(),{codeJs:t}=F();return{codeHtml:e,codeJs:t}}};function L(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_HIDE_ARROW_HEADER_`,description:`_A_TOOLTIP_GROUP_HIDE_ARROW_DESCRIPTION_`,props:`show-arrow`},{default:m(()=>[l(i,{class:`a_btn a_btn_primary`,tag:`button`,"show-arrow":!1},{title:m(()=>[...t[0]||=[c(`div`,null,`Aloha`,-1)]]),default:m(()=>[t[1]||=c(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var R=o(I,[[`render`,L]]);function z(){return{codeHtml:`<a-tooltip
  :without-aria-describedby="true"
>
  <a-button
    aria-label="_A_TOOLTIP_EXAMPLE_SETTINGS_"
    class="a_btn a_btn_secondary"
    icon-left="Gear"
  />

  <template v-slot:title>
    <a-translation
      text="_A_TOOLTIP_EXAMPLE_SETTINGS_"
    />
  </template>
</a-tooltip>`}}function B(){return{codeJs:`import {
  AButton,
  ATooltip,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATooltip,
    ATranslation,
  },
};`}}var V={name:`PageTooltipIconButton`,components:{AlohaExample:n,AButton:a,ATooltip:r,ATranslation:i},setup(){let{codeHtml:e}=z(),{codeJs:t}=B();return{codeHtml:e,codeJs:t}}};function H(e,t,n,ee,r,te){let i=g(`a-button`),a=g(`a-translation`),o=g(`a-tooltip`),s=g(`aloha-example`);return h(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ICON_BUTTON_HEADER_`,description:`_A_TOOLTIP_GROUP_ICON_BUTTON_DESCRIPTION_`,props:[`without-aria-describedby`]},{default:m(()=>[l(o,{"without-aria-describedby":!0},{title:m(()=>[l(a,{text:`_A_TOOLTIP_EXAMPLE_SETTINGS_`})]),default:m(()=>[l(i,{class:`a_btn a_btn_secondary`,"aria-label":`_A_TOOLTIP_EXAMPLE_SETTINGS_`,"icon-left":`Gear`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var U=o(V,[[`render`,H]]);function W(){return{codeHtml:`<a-one-checkbox
  v-model="isHide"
  class="a_mb_3"
  label="is-hide"
/>
<a-tooltip
  :is-hide="isHide"
>
  <a-button
    class="a_btn a_btn_primary"
    text="_A_TOOLTIP_EXAMPLE_SAVE_"
  />

  <template v-slot:title>
    <a-translation
      text="_A_TOOLTIP_EXAMPLE_SAVE_TITLE_"
    />
  </template>
</a-tooltip>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AOneCheckbox,
  ATooltip,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AOneCheckbox,
    ATooltip,
    ATranslation,
  },
  setup() {
    const isHide = ref(false);

    return {
      isHide,
    };
  },
};`}}var K={name:`PageTooltipIsHide`,components:{AlohaExample:n,AButton:a,AOneCheckbox:ee,ATooltip:r,ATranslation:i},setup(){let e=f(!1),{codeHtml:t}=W(),{codeJs:n}=G();return{codeHtml:t,codeJs:n,isHide:e}}};function q(e,t,n,ee,r,te){let i=g(`a-one-checkbox`),a=g(`a-button`),o=g(`a-translation`),s=g(`a-tooltip`),c=g(`aloha-example`);return h(),u(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_IS_HIDE_HEADER_`,description:`_A_TOOLTIP_GROUP_IS_HIDE_DESCRIPTION_`,props:[`is-hide`]},{default:m(()=>[l(i,{class:`a_mb_3`,modelValue:e.isHide,"onUpdate:modelValue":t[0]||=t=>e.isHide=t,label:`is-hide`},null,8,[`modelValue`]),l(s,{"is-hide":e.isHide},{title:m(()=>[l(o,{text:`_A_TOOLTIP_EXAMPLE_SAVE_TITLE_`})]),default:m(()=>[l(a,{class:`a_btn a_btn_primary`,text:`_A_TOOLTIP_EXAMPLE_SAVE_`})]),_:1},8,[`is-hide`])]),_:1},8,[`code-html`,`code-js`])}var J=o(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :max-width="300"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>`}}function X(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipMaxWidth",
  components: {
    ATooltip,
  },
  setup() {
    const title = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.\`;

    return {
      title,
    };
  },
};`}}var Z={name:`PageTooltipMaxWidth`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=Y(),{codeJs:t}=X();return{codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function Q(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_MAX_WIDTH_HEADER_`,description:`_A_TOOLTIP_GROUP_MAX_WIDTH_DESCRIPTION_`,props:`max-width`},{default:m(()=>[l(i,{class:`a_btn a_btn_primary`,tag:`button`,"max-width":300},{title:m(()=>[c(`div`,null,_(e.title),1)]),default:m(()=>[t[0]||=c(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ne=o(Z,[[`render`,Q]]);function re(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_secondary"
  tag="button"
  :offset-distance="30"
>
  <span>:offset-distance="30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="30"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="6"
>
  <span>:offset-distance="6"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="6"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="0"
>
  <span>:offset-distance="0"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="0"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="-10"
>
  <span>:offset-distance="-10"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="-10"</div>
  </template>
</a-tooltip>`}}function ie(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipOffsetDistance",
  components: {
    ATooltip,
  },
};`}}var ae={name:`PageTooltipOffsetDistance`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t}}};function oe(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_OFFSET_DISTANCE_HEADER_`,description:`_A_TOOLTIP_GROUP_OFFSET_DISTANCE_DESCRIPTION_`,props:`offset-distance`},{default:m(()=>[l(i,{class:`a_btn a_btn_secondary`,tag:`button`,"offset-distance":30},{title:m(()=>[...t[0]||=[c(`div`,null,`:offset-distance="30"`,-1)]]),default:m(()=>[t[1]||=c(`span`,null,`:offset-distance="30"`,-1)]),_:1}),l(i,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":6},{title:m(()=>[...t[2]||=[c(`div`,null,`:offset-distance="6"`,-1)]]),default:m(()=>[t[3]||=c(`span`,null,`:offset-distance="6"`,-1)]),_:1}),l(i,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":0},{title:m(()=>[...t[4]||=[c(`div`,null,`:offset-distance="0"`,-1)]]),default:m(()=>[t[5]||=c(`span`,null,`:offset-distance="0"`,-1)]),_:1}),l(i,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":-10},{title:m(()=>[...t[6]||=[c(`div`,null,`:offset-distance="-10"`,-1)]]),default:m(()=>[t[7]||=c(`span`,null,`:offset-distance="-10"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var se=o(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :offset-skidding="30"
>
  <span>:offset-skidding="30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-skidding="30"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :offset-skidding="-30"
>
  <span>:offset-skidding="-30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-skidding="-30"</div>
  </template>
</a-tooltip>`}}function le(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipOffsetSkidding",
  components: {
    ATooltip,
  },
};`}}var ue={name:`PageTooltipOffsetSkidding`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=ce(),{codeJs:t}=le();return{codeHtml:e,codeJs:t}}};function de(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_OFFSET_SKIDDING_HEADER_`,description:`_A_TOOLTIP_GROUP_OFFSET_SKIDDING_DESCRIPTION_`,props:`offset-skidding`},{default:m(()=>[l(i,{class:`a_btn a_btn_primary`,tag:`button`,"offset-skidding":30},{title:m(()=>[...t[0]||=[c(`div`,null,`:offset-skidding="30"`,-1)]]),default:m(()=>[t[1]||=c(`span`,null,`:offset-skidding="30"`,-1)]),_:1}),l(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"offset-skidding":-30},{title:m(()=>[...t[2]||=[c(`div`,null,`:offset-skidding="-30"`,-1)]]),default:m(()=>[t[3]||=c(`span`,null,`:offset-skidding="-30"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var fe=o(ue,[[`render`,de]]);function pe(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_3">
  <a-tooltip
    v-for="placement in placements"
    :key="placement"
    :placement="placement"
  >
    <a-button
      class="a_btn a_btn_secondary"
      :text="placement"
    />

    <template v-slot:title>
      <span>{{ placement }}</span>
    </template>
  </a-tooltip>
</div>`}}function me(){return{codeJs:`import {
  AButton,
  ATooltip,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATooltip,
  },
  setup() {
    const placements = ["top", "right", "bottom", "left", "top-start", "bottom-end"];

    return {
      placements,
    };
  },
};`}}var he={name:`PageTooltipPlacement`,components:{AlohaExample:n,AButton:a,ATooltip:r},setup(){let e=[`top`,`right`,`bottom`,`left`,`top-start`,`bottom-end`],{codeHtml:t}=pe(),{codeJs:n}=me();return{codeHtml:t,codeJs:n,placements:e}}},ge={class:`a_d_flex a_flex_wrap a_gap_3`};function _e(e,t,n,ee,r,te){let i=g(`a-button`),a=g(`a-tooltip`),o=g(`aloha-example`);return h(),u(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_PLACEMENT_HEADER_`,description:`_A_TOOLTIP_GROUP_PLACEMENT_DESCRIPTION_`,props:[`placement`]},{default:m(()=>[c(`div`,ge,[(h(!0),s(v,null,p(e.placements,e=>(h(),u(a,{key:e,placement:e},{title:m(()=>[c(`span`,null,_(e),1)]),default:m(()=>[l(i,{class:`a_btn a_btn_secondary`,text:e},null,8,[`text`])]),_:2},1032,[`placement`]))),128))])]),_:1},8,[`code-html`,`code-js`])}var ve=o(he,[[`render`,_e]]);function ye(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>`}}function be(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipTag",
  components: {
    ATooltip,
  },
  setup() {
    const title = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.\`;

    return {
      title,
    };
  },
};`}}var xe={name:`PageTooltipTag`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be();return{codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function Se(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TAG_HEADER_`,description:`_A_TOOLTIP_GROUP_TAG_DESCRIPTION_`,props:`tag`},{default:m(()=>[l(i,{class:`a_btn a_btn_primary`,tag:`button`},{title:m(()=>[c(`div`,null,_(e.title),1)]),default:m(()=>[t[0]||=c(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Ce=o(xe,[[`render`,Se]]);function we(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :time-close="0"
>
  <span>0</span>
  
  <template
    v-slot:title
  >
    <div>0</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :time-close="100"
>
  <span>100</span>
  
  <template
    v-slot:title
  >
    <div>100</div>
  </template>
</a-tooltip>
<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :time-close="1000"
>
  <span>1000</span>
  
  <template
    v-slot:title
  >
    <div>1000</div>
  </template>
</a-tooltip>`}}function Te(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipTimeClose",
  components: {
    ATooltip,
  },
};`}}var Ee={name:`PageTooltipTag`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=we(),{codeJs:t}=Te();return{codeHtml:e,codeJs:t}}};function De(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TIME_CLOSE_HEADER_`,description:`_A_TOOLTIP_GROUP_TIME_CLOSE_DESCRIPTION_`,props:`time-close`},{default:m(()=>[l(i,{class:`a_btn a_btn_primary`,tag:`button`,"time-close":0},{title:m(()=>[...t[0]||=[c(`div`,null,`0`,-1)]]),default:m(()=>[t[1]||=c(`span`,null,`0`,-1)]),_:1}),l(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"time-close":100},{title:m(()=>[...t[2]||=[c(`div`,null,`100`,-1)]]),default:m(()=>[t[3]||=c(`span`,null,`100`,-1)]),_:1}),l(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"time-close":1e3},{title:m(()=>[...t[4]||=[c(`div`,null,`1000`,-1)]]),default:m(()=>[t[5]||=c(`span`,null,`1000`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Oe=o(Ee,[[`render`,De]]);function ke(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_3">
  <a-tooltip
    v-for="time in times"
    :key="time"
    :time-open="time"
  >
    <a-button
      class="a_btn a_btn_secondary"
      :text="\`time-open: \${ time }\`"
    />

    <template v-slot:title>
      <span>{{ time }} ms</span>
    </template>
  </a-tooltip>
</div>`}}function Ae(){return{codeJs:`import {
  AButton,
  ATooltip,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATooltip,
  },
  setup() {
    const times = [0, 300, 800];

    return {
      times,
    };
  },
};`}}var je={name:`PageTooltipTimeOpen`,components:{AlohaExample:n,AButton:a,ATooltip:r},setup(){let e=[0,300,800],{codeHtml:t}=ke(),{codeJs:n}=Ae();return{codeHtml:t,codeJs:n,times:e}}},Me={class:`a_d_flex a_flex_wrap a_gap_3`};function Ne(e,t,n,ee,r,te){let i=g(`a-button`),a=g(`a-tooltip`),o=g(`aloha-example`);return h(),u(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TIME_OPEN_HEADER_`,description:`_A_TOOLTIP_GROUP_TIME_OPEN_DESCRIPTION_`,props:[`time-open`]},{default:m(()=>[c(`div`,Me,[(h(!0),s(v,null,p(e.times,e=>(h(),u(a,{key:e,"time-open":e},{title:m(()=>[c(`span`,null,_(e)+` ms`,1)]),default:m(()=>[l(i,{class:`a_btn a_btn_secondary`,text:`time-open: ${e}`},null,8,[`text`])]),_:2},1032,[`time-open`]))),128))])]),_:1},8,[`code-html`,`code-js`])}var Pe=o(je,[[`render`,Ne]]);function $(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :width="200"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :width="200"
>
  <span>a_text_center</span>
  
  <template
    v-slot:title
  >
    <div
      class="a_text_center"
    >Aloha</div>
  </template>
</a-tooltip>
<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  width="20rem"
>
  <span>width="20rem"</span>

  <template v-slot:title>
    <div>Aloha</div>
  </template>
</a-tooltip>`}}function Fe(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipWidth",
  components: {
    ATooltip,
  },
};`}}var Ie={name:`PageTooltipWidth`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=$(),{codeJs:t}=Fe();return{codeHtml:e,codeJs:t}}};function Le(e,t,n,ee,r,te){let i=g(`a-tooltip`),a=g(`aloha-example`);return h(),u(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_WIDTH_HEADER_`,description:`_A_TOOLTIP_GROUP_WIDTH_DESCRIPTION_`,props:`width`},{default:m(()=>[l(i,{class:`a_btn a_btn_primary`,tag:`button`,width:200},{title:m(()=>[...t[0]||=[c(`div`,null,`Aloha`,-1)]]),default:m(()=>[t[1]||=c(`span`,null,`Aloha`,-1)]),_:1}),l(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,width:200},{title:m(()=>[...t[2]||=[c(`div`,{class:`a_text_center`},`Aloha`,-1)]]),default:m(()=>[t[3]||=c(`span`,null,`a_text_center`,-1)]),_:1}),l(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,width:`20rem`},{title:m(()=>[...t[4]||=[c(`div`,null,`Aloha`,-1)]]),default:m(()=>[t[5]||=c(`span`,null,`width="20rem"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Re=o(Ie,[[`render`,Le]]);function ze(){let e=d(()=>te({placeholder:`_A_TOOLTIP_COMPONENT_NAME_`}));return{pageTitle:d(()=>`ATooltip${e.value?` (${e.value})`:``}`)}}function Be(){return{dataProps:[{name:`arrow-padding`,description:`_A_TOOLTIP_PROPS_ARROW_PADDING_DESCRIPTION_`,type:`Number / Function`,default:void 0,required:!1},{name:`id`,description:`_A_TOOLTIP_PROPS_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_{n}`,required:!1},{name:`is-hide`,description:`_A_TOOLTIP_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`max-width`,description:`_A_TOOLTIP_PROPS_MAX_WIDTH_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`min-width`,description:`_A_TOOLTIP_PROPS_MIN_WIDTH_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`offset-distance`,description:`_A_TOOLTIP_PROPS_OFFSET_DISTANCE_DESCRIPTION_`,type:`Number`,default:6,required:!1},{name:`offset-skidding`,description:`_A_TOOLTIP_PROPS_OFFSET_SKIDDING_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`placement`,description:`_A_TOOLTIP_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`popper-container-id`,description:`_A_TOOLTIP_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_container`,required:!1},{name:`render-description`,description:`_A_TOOLTIP_PROPS_RENDER_DESCRIPTION_DESCRIPTION_`,type:`String`,default:`always`,required:!1},{name:`show-arrow`,description:`_A_TOOLTIP_PROPS_SHOW_ARROW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`tag`,description:`_A_TOOLTIP_PROPS_TAG_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`time-open`,description:`_A_TOOLTIP_PROPS_TIME_OPEN_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`time-close`,description:`_A_TOOLTIP_PROPS_TIME_CLOSE_DESCRIPTION_`,type:`Number`,default:100,required:!1},{name:`width`,description:`_A_TOOLTIP_PROPS_WIDTH_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`without-aria-describedby`,description:`_A_TOOLTIP_PROPS_WITHOUT_ARIA_DESCRIBEDBY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1}]}}function Ve(){return{dataSlots:[{name:`default`,description:`_A_TOOLTIP_SLOT_DEFAULT_DESCRIPTION_`},{name:`title`,description:`_A_TOOLTIP_SLOT_TITLE_DESCRIPTION_`}]}}var He={name:`PageTooltip`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:i,PageTooltipBasic:N,PageTooltipTimeOpen:Pe,PageTooltipPlacement:ve,PageTooltipIsHide:J,PageTooltipIconButton:U,PageTooltipTag:Ce,PageTooltipMaxWidth:ne,PageTooltipWidth:Re,PageTooltipTimeClose:Oe,PageTooltipHideArrow:R,PageTooltipOffsetSkidding:fe,PageTooltipOffsetDistance:se,PageTooltipArrowPadding:C,PageTooltipArrowPaddingFunction:O},setup(){let{pageTitle:e}=ze(),{dataProps:t}=Be(),{dataSlots:n}=Ve();return{dataProps:t,dataSlots:n,pageTitle:e}}};function Ue(e,t,n,ee,r,te){let i=g(`a-translation`),a=g(`page-tooltip-basic`),o=g(`page-tooltip-icon-button`),s=g(`page-tooltip-placement`),c=g(`page-tooltip-time-open`),d=g(`page-tooltip-is-hide`),f=g(`page-tooltip-tag`),p=g(`page-tooltip-max-width`),_=g(`page-tooltip-width`),v=g(`page-tooltip-time-close`),y=g(`page-tooltip-hide-arrow`),b=g(`page-tooltip-offset-skidding`),x=g(`page-tooltip-offset-distance`),S=g(`page-tooltip-arrow-padding`),C=g(`page-tooltip-arrow-padding-function`),w=g(`aloha-table-props`),T=g(`aloha-table-css-vars`),E=g(`aloha-page`);return h(),u(E,{"page-title":e.pageTitle},{body:m(()=>[l(i,{tag:`p`,html:`_A_TOOLTIP_COMPONENT_DESCRIPTION_`}),l(i,{tag:`p`,html:`_A_TOOLTIP_A11Y_DESCRIPTION_`}),l(a),l(o),l(s),l(c),l(d),l(f),l(p),l(_),l(v),l(y),l(b),l(x),l(S),l(C),l(w,{data:e.dataProps},null,8,[`data`]),l(w,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),l(T,{files:`utils/tooltip`})]),_:1},8,[`page-title`])}var We=o(He,[[`render`,Ue]]);export{We as default};