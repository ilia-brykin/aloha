import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{t}from"./chunk.AlohaTableProps.-68XY4u1.js";import{t as n}from"./chunk.AlohaExample.CDuUdjpI.js";import{G as ee,an as r,hn as te,mn as i,sn as a,t as o}from"./bundle.index.DikcaTJ9.js";import{Bt as s,Cn as c,Ht as l,Rt as u,Vt as d,Wt as f,an as p,gn as m,ln as h,pn as g,qt as _,sn as v}from"./chunk.vendor.SEynj6EJ.js";function y(){return{codeHtml:`<a-tooltip
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
};`}}var x={name:`PageTooltipArrowPadding`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=y(),{codeJs:t}=b();return{codeHtml:e,codeJs:t}}};function S(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ARROW_PADDING_HEADER_`,description:`_A_TOOLTIP_GROUP_ARROW_PADDING_DESCRIPTION_`,props:`arrow-padding`},{default:g(()=>[_(i,{class:`a_btn a_btn_primary`,tag:`button`,"arrow-padding":35},{title:g(()=>[...t[0]||=[d(`div`,null,`Aloha`,-1)]]),default:g(()=>[t[1]||=d(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var C=o(x,[[`render`,S]]);function w(){return{codeHtml:`<a-tooltip
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
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.`}}};function D(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_HEADER_`,description:`_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_DESCRIPTION_`,props:`arrow-padding`},{default:g(()=>[_(i,{class:`a_btn a_btn_primary`,tag:`button`,"arrow-padding":e.arrowPaddingCallback},{title:g(()=>[d(`div`,null,c(e.title),1)]),default:g(()=>[t[0]||=d(`span`,null,`Aloha`,-1)]),_:1},8,[`arrow-padding`])]),_:1},8,[`code-html`,`code-js`])}var O=o(E,[[`render`,D]]);function k(){return{codeHtml:`<a-tooltip>
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
};`}}var j={name:`PageTooltipBasic`,components:{AlohaExample:n,AButton:a,ATooltip:r,ATranslation:i},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t}}};function M(e,t,n,ee,r,te){let i=h(`a-button`),a=h(`a-translation`),o=h(`a-tooltip`),s=h(`aloha-example`);return p(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_TOOLTIP_BASIC_DESCRIPTION_`,slots:[`default`,`title`]},{default:g(()=>[_(o,null,{title:g(()=>[_(a,{text:`_A_TOOLTIP_EXAMPLE_SAVE_TITLE_`})]),default:g(()=>[_(i,{class:`a_btn a_btn_primary`,text:`_A_TOOLTIP_EXAMPLE_SAVE_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var N=o(j,[[`render`,M]]);function P(){return{codeHtml:`<a-tooltip
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
};`}}var I={name:`PageTooltipHideArrow`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=P(),{codeJs:t}=F();return{codeHtml:e,codeJs:t}}};function L(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_HIDE_ARROW_HEADER_`,description:`_A_TOOLTIP_GROUP_HIDE_ARROW_DESCRIPTION_`,props:`show-arrow`},{default:g(()=>[_(i,{class:`a_btn a_btn_primary`,tag:`button`,"show-arrow":!1},{title:g(()=>[...t[0]||=[d(`div`,null,`Aloha`,-1)]]),default:g(()=>[t[1]||=d(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var R=o(I,[[`render`,L]]);function z(){return{codeHtml:`<a-tooltip
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
};`}}var V={name:`PageTooltipIconButton`,components:{AlohaExample:n,AButton:a,ATooltip:r,ATranslation:i},setup(){let{codeHtml:e}=z(),{codeJs:t}=B();return{codeHtml:e,codeJs:t}}};function H(e,t,n,ee,r,te){let i=h(`a-button`),a=h(`a-translation`),o=h(`a-tooltip`),s=h(`aloha-example`);return p(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ICON_BUTTON_HEADER_`,description:`_A_TOOLTIP_GROUP_ICON_BUTTON_DESCRIPTION_`,props:[`without-aria-describedby`]},{default:g(()=>[_(o,{"without-aria-describedby":!0},{title:g(()=>[_(a,{text:`_A_TOOLTIP_EXAMPLE_SETTINGS_`})]),default:g(()=>[_(i,{class:`a_btn a_btn_secondary`,"aria-label":`_A_TOOLTIP_EXAMPLE_SETTINGS_`,"icon-left":`Gear`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var U=o(V,[[`render`,H]]);function W(){return{codeHtml:`<a-one-checkbox
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
};`}}var K={name:`PageTooltipIsHide`,components:{AlohaExample:n,AButton:a,AOneCheckbox:ee,ATooltip:r,ATranslation:i},setup(){let e=m(!1),{codeHtml:t}=W(),{codeJs:n}=G();return{codeHtml:t,codeJs:n,isHide:e}}};function q(e,t,n,ee,r,te){let i=h(`a-one-checkbox`),a=h(`a-button`),o=h(`a-translation`),s=h(`a-tooltip`),c=h(`aloha-example`);return p(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_IS_HIDE_HEADER_`,description:`_A_TOOLTIP_GROUP_IS_HIDE_DESCRIPTION_`,props:[`is-hide`]},{default:g(()=>[_(i,{class:`a_mb_3`,modelValue:e.isHide,"onUpdate:modelValue":t[0]||=t=>e.isHide=t,label:`is-hide`},null,8,[`modelValue`]),_(s,{"is-hide":e.isHide},{title:g(()=>[_(o,{text:`_A_TOOLTIP_EXAMPLE_SAVE_TITLE_`})]),default:g(()=>[_(a,{class:`a_btn a_btn_primary`,text:`_A_TOOLTIP_EXAMPLE_SAVE_`})]),_:1},8,[`is-hide`])]),_:1},8,[`code-html`,`code-js`])}var J=o(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-tooltip
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
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function Q(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_MAX_WIDTH_HEADER_`,description:`_A_TOOLTIP_GROUP_MAX_WIDTH_DESCRIPTION_`,props:`max-width`},{default:g(()=>[_(i,{class:`a_btn a_btn_primary`,tag:`button`,"max-width":300},{title:g(()=>[d(`div`,null,c(e.title),1)]),default:g(()=>[t[0]||=d(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ne=o(Z,[[`render`,Q]]);function re(){return{codeHtml:`<a-tooltip
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
};`}}var ae={name:`PageTooltipOffsetDistance`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t}}};function oe(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_OFFSET_DISTANCE_HEADER_`,description:`_A_TOOLTIP_GROUP_OFFSET_DISTANCE_DESCRIPTION_`,props:`offset-distance`},{default:g(()=>[_(i,{class:`a_btn a_btn_secondary`,tag:`button`,"offset-distance":30},{title:g(()=>[...t[0]||=[d(`div`,null,`:offset-distance="30"`,-1)]]),default:g(()=>[t[1]||=d(`span`,null,`:offset-distance="30"`,-1)]),_:1}),_(i,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":6},{title:g(()=>[...t[2]||=[d(`div`,null,`:offset-distance="6"`,-1)]]),default:g(()=>[t[3]||=d(`span`,null,`:offset-distance="6"`,-1)]),_:1}),_(i,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":0},{title:g(()=>[...t[4]||=[d(`div`,null,`:offset-distance="0"`,-1)]]),default:g(()=>[t[5]||=d(`span`,null,`:offset-distance="0"`,-1)]),_:1}),_(i,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":-10},{title:g(()=>[...t[6]||=[d(`div`,null,`:offset-distance="-10"`,-1)]]),default:g(()=>[t[7]||=d(`span`,null,`:offset-distance="-10"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var se=o(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-tooltip
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
};`}}var ue={name:`PageTooltipOffsetSkidding`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=ce(),{codeJs:t}=le();return{codeHtml:e,codeJs:t}}};function de(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_OFFSET_SKIDDING_HEADER_`,description:`_A_TOOLTIP_GROUP_OFFSET_SKIDDING_DESCRIPTION_`,props:`offset-skidding`},{default:g(()=>[_(i,{class:`a_btn a_btn_primary`,tag:`button`,"offset-skidding":30},{title:g(()=>[...t[0]||=[d(`div`,null,`:offset-skidding="30"`,-1)]]),default:g(()=>[t[1]||=d(`span`,null,`:offset-skidding="30"`,-1)]),_:1}),_(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"offset-skidding":-30},{title:g(()=>[...t[2]||=[d(`div`,null,`:offset-skidding="-30"`,-1)]]),default:g(()=>[t[3]||=d(`span`,null,`:offset-skidding="-30"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var fe=o(ue,[[`render`,de]]);function pe(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_3">
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
};`}}var he={name:`PageTooltipPlacement`,components:{AlohaExample:n,AButton:a,ATooltip:r},setup(){let e=[`top`,`right`,`bottom`,`left`,`top-start`,`bottom-end`],{codeHtml:t}=pe(),{codeJs:n}=me();return{codeHtml:t,codeJs:n,placements:e}}},ge={class:`a_d_flex a_flex_wrap a_gap_3`};function _e(e,t,n,ee,r,te){let i=h(`a-button`),a=h(`a-tooltip`),o=h(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_PLACEMENT_HEADER_`,description:`_A_TOOLTIP_GROUP_PLACEMENT_DESCRIPTION_`,props:[`placement`]},{default:g(()=>[d(`div`,ge,[(p(!0),f(u,null,v(e.placements,e=>(p(),l(a,{key:e,placement:e},{title:g(()=>[d(`span`,null,c(e),1)]),default:g(()=>[_(i,{class:`a_btn a_btn_secondary`,text:e},null,8,[`text`])]),_:2},1032,[`placement`]))),128))])]),_:1},8,[`code-html`,`code-js`])}var ve=o(he,[[`render`,_e]]);function ye(){return{codeHtml:`<a-tooltip
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
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function Se(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TAG_HEADER_`,description:`_A_TOOLTIP_GROUP_TAG_DESCRIPTION_`,props:`tag`},{default:g(()=>[_(i,{class:`a_btn a_btn_primary`,tag:`button`},{title:g(()=>[d(`div`,null,c(e.title),1)]),default:g(()=>[t[0]||=d(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Ce=o(xe,[[`render`,Se]]);function we(){return{codeHtml:`<a-tooltip
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
};`}}var Ee={name:`PageTooltipTag`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=we(),{codeJs:t}=Te();return{codeHtml:e,codeJs:t}}};function De(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TIME_CLOSE_HEADER_`,description:`_A_TOOLTIP_GROUP_TIME_CLOSE_DESCRIPTION_`,props:`time-close`},{default:g(()=>[_(i,{class:`a_btn a_btn_primary`,tag:`button`,"time-close":0},{title:g(()=>[...t[0]||=[d(`div`,null,`0`,-1)]]),default:g(()=>[t[1]||=d(`span`,null,`0`,-1)]),_:1}),_(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"time-close":100},{title:g(()=>[...t[2]||=[d(`div`,null,`100`,-1)]]),default:g(()=>[t[3]||=d(`span`,null,`100`,-1)]),_:1}),_(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"time-close":1e3},{title:g(()=>[...t[4]||=[d(`div`,null,`1000`,-1)]]),default:g(()=>[t[5]||=d(`span`,null,`1000`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Oe=o(Ee,[[`render`,De]]);function ke(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_3">
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
};`}}var je={name:`PageTooltipTimeOpen`,components:{AlohaExample:n,AButton:a,ATooltip:r},setup(){let e=[0,300,800],{codeHtml:t}=ke(),{codeJs:n}=Ae();return{codeHtml:t,codeJs:n,times:e}}},Me={class:`a_d_flex a_flex_wrap a_gap_3`};function Ne(e,t,n,ee,r,te){let i=h(`a-button`),a=h(`a-tooltip`),o=h(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TIME_OPEN_HEADER_`,description:`_A_TOOLTIP_GROUP_TIME_OPEN_DESCRIPTION_`,props:[`time-open`]},{default:g(()=>[d(`div`,Me,[(p(!0),f(u,null,v(e.times,e=>(p(),l(a,{key:e,"time-open":e},{title:g(()=>[d(`span`,null,c(e)+` ms`,1)]),default:g(()=>[_(i,{class:`a_btn a_btn_secondary`,text:`time-open: ${e}`},null,8,[`text`])]),_:2},1032,[`time-open`]))),128))])]),_:1},8,[`code-html`,`code-js`])}var Pe=o(je,[[`render`,Ne]]);function $(){return{codeHtml:`<a-tooltip
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
};`}}var Ie={name:`PageTooltipWidth`,components:{AlohaExample:n,ATooltip:r},setup(){let{codeHtml:e}=$(),{codeJs:t}=Fe();return{codeHtml:e,codeJs:t}}};function Le(e,t,n,ee,r,te){let i=h(`a-tooltip`),a=h(`aloha-example`);return p(),l(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_WIDTH_HEADER_`,description:`_A_TOOLTIP_GROUP_WIDTH_DESCRIPTION_`,props:`width`},{default:g(()=>[_(i,{class:`a_btn a_btn_primary`,tag:`button`,width:200},{title:g(()=>[...t[0]||=[d(`div`,null,`Aloha`,-1)]]),default:g(()=>[t[1]||=d(`span`,null,`Aloha`,-1)]),_:1}),_(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,width:200},{title:g(()=>[...t[2]||=[d(`div`,{class:`a_text_center`},`Aloha`,-1)]]),default:g(()=>[t[3]||=d(`span`,null,`a_text_center`,-1)]),_:1}),_(i,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,width:`20rem`},{title:g(()=>[...t[4]||=[d(`div`,null,`Aloha`,-1)]]),default:g(()=>[t[5]||=d(`span`,null,`width="20rem"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Re=o(Ie,[[`render`,Le]]);function ze(){let e=s(()=>te({placeholder:`_A_TOOLTIP_COMPONENT_NAME_`}));return{pageTitle:s(()=>`ATooltip${e.value?` (${e.value})`:``}`)}}function Be(){return{dataProps:[{name:`arrow-padding`,description:`_A_TOOLTIP_PROPS_ARROW_PADDING_DESCRIPTION_`,type:`Number / Function`,default:void 0,required:!1},{name:`id`,description:`_A_TOOLTIP_PROPS_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_{n}`,required:!1},{name:`is-hide`,description:`_A_TOOLTIP_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`max-width`,description:`_A_TOOLTIP_PROPS_MAX_WIDTH_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`min-width`,description:`_A_TOOLTIP_PROPS_MIN_WIDTH_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`offset-distance`,description:`_A_TOOLTIP_PROPS_OFFSET_DISTANCE_DESCRIPTION_`,type:`Number`,default:6,required:!1},{name:`offset-skidding`,description:`_A_TOOLTIP_PROPS_OFFSET_SKIDDING_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`placement`,description:`_A_TOOLTIP_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`popper-container-id`,description:`_A_TOOLTIP_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_container`,required:!1},{name:`render-description`,description:`_A_TOOLTIP_PROPS_RENDER_DESCRIPTION_DESCRIPTION_`,type:`String`,default:`always`,required:!1},{name:`show-arrow`,description:`_A_TOOLTIP_PROPS_SHOW_ARROW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`tag`,description:`_A_TOOLTIP_PROPS_TAG_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`time-open`,description:`_A_TOOLTIP_PROPS_TIME_OPEN_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`time-close`,description:`_A_TOOLTIP_PROPS_TIME_CLOSE_DESCRIPTION_`,type:`Number`,default:100,required:!1},{name:`width`,description:`_A_TOOLTIP_PROPS_WIDTH_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`without-aria-describedby`,description:`_A_TOOLTIP_PROPS_WITHOUT_ARIA_DESCRIBEDBY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1}]}}function Ve(){return{dataSlots:[{name:`default`,description:`_A_TOOLTIP_SLOT_DEFAULT_DESCRIPTION_`},{name:`title`,description:`_A_TOOLTIP_SLOT_TITLE_DESCRIPTION_`}]}}var He={name:`PageTooltip`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:i,PageTooltipBasic:N,PageTooltipTimeOpen:Pe,PageTooltipPlacement:ve,PageTooltipIsHide:J,PageTooltipIconButton:U,PageTooltipTag:Ce,PageTooltipMaxWidth:ne,PageTooltipWidth:Re,PageTooltipTimeClose:Oe,PageTooltipHideArrow:R,PageTooltipOffsetSkidding:fe,PageTooltipOffsetDistance:se,PageTooltipArrowPadding:C,PageTooltipArrowPaddingFunction:O},setup(){let{pageTitle:e}=ze(),{dataProps:t}=Be(),{dataSlots:n}=Ve();return{dataProps:t,dataSlots:n,pageTitle:e}}};function Ue(e,t,n,ee,r,te){let i=h(`a-translation`),a=h(`page-tooltip-basic`),o=h(`page-tooltip-icon-button`),s=h(`page-tooltip-placement`),c=h(`page-tooltip-time-open`),u=h(`page-tooltip-is-hide`),d=h(`page-tooltip-tag`),f=h(`page-tooltip-max-width`),m=h(`page-tooltip-width`),v=h(`page-tooltip-time-close`),y=h(`page-tooltip-hide-arrow`),b=h(`page-tooltip-offset-skidding`),x=h(`page-tooltip-offset-distance`),S=h(`page-tooltip-arrow-padding`),C=h(`page-tooltip-arrow-padding-function`),w=h(`aloha-table-props`),T=h(`aloha-table-css-vars`),E=h(`aloha-page`);return p(),l(E,{"page-title":e.pageTitle},{body:g(()=>[_(i,{tag:`p`,html:`_A_TOOLTIP_COMPONENT_DESCRIPTION_`}),_(i,{tag:`p`,html:`_A_TOOLTIP_A11Y_DESCRIPTION_`}),_(a),_(o),_(s),_(c),_(u),_(d),_(f),_(m),_(v),_(y),_(b),_(x),_(S),_(C),_(w,{data:e.dataProps},null,8,[`data`]),_(w,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),_(T,{files:`utils/tooltip`})]),_:1},8,[`page-title`])}var We=o(He,[[`render`,Ue]]);export{We as default};