import{t as e}from"./chunk.AlohaPage.DvXMtBHm.js";import{t}from"./chunk.AlohaTableProps.C3P1ftdF.js";import{t as n}from"./chunk.AlohaTableTranslate.Df4zbt7o.js";import{$t as r,Ft as i,It as a,Pt as o,Vt as s,a as ee,hn as c,i as l,ln as u,mn as d,n as f,o as p,r as m,rn as h,sn as g,t as _}from"./chunk.vendor.BvryzG0o.js";import{t as v}from"./chunk.AlohaExample.CuZ02843.js";import{$t as y,V as b,qt as x,w as S}from"./bundle.index.DHKLH29U.js";import{t as C}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function w(){return{codeHtml:`<a-rate
  v-model="model"
  :allow-half="true"
  :show-score="true"
  label="Your rating"
></a-rate>
<div>model: {{ model }}</div>`}}function T(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateAllowHalf",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3.5);

    return {
      model,
    };
  },
};`}}var E={name:`PageRateAllowHalf`,components:{AlohaExample:v,ARate:b},setup(){let e=u(3.5),{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,model:e}}};function D(e,t,n,o,ee,l){let u=h(`a-rate`),d=h(`aloha-example`);return r(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_ALLOW_HALF_HEADER_`,description:`_A_RATE_GROUP_ALLOW_HALF_DESCRIPTION_`,props:[`allow-half`]},{default:g(()=>[s(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"allow-half":!0,"show-score":!0,label:`_A_RATE_EXAMPLE_LABEL_`},null,8,[`modelValue`]),i(`div`,null,`model: `+c(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=C(E,[[`render`,D]]);function te(){return{codeHtml:`<a-rate
  v-model="model"
  label="Your rating"
></a-rate>
<div>model: {{ model }}</div>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateBasic",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3);

    return {
      model,
    };
  },
};`}}var A={name:`PageRateBasic`,components:{AlohaExample:v,ARate:b},setup(){let e=u(3),{codeHtml:t}=te(),{codeJs:n}=k();return{codeHtml:t,codeJs:n,model:e}}};function j(e,t,n,o,ee,l){let u=h(`a-rate`),d=h(`aloha-example`);return r(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:g(()=>[s(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_RATE_EXAMPLE_LABEL_`},null,8,[`modelValue`]),i(`div`,null,`model: `+c(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var M=C(A,[[`render`,j]]);function N(){return{codeHtml:`<a-rate
  v-model="model"
  :clearable="true"
  :show-text="true"
  label="Your rating"
  help-text="Click the same icon again to remove the rating"
></a-rate>
<div>model: {{ model }}</div>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateClearable",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3);

    return {
      model,
    };
  },
};`}}var F={name:`PageRateClearable`,components:{AlohaExample:v,ARate:b},setup(){let e=u(3),{codeHtml:t}=N(),{codeJs:n}=P();return{codeHtml:t,codeJs:n,model:e}}};function I(e,t,n,o,ee,l){let u=h(`a-rate`),d=h(`aloha-example`);return r(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_CLEARABLE_HEADER_`,description:`_A_RATE_GROUP_CLEARABLE_DESCRIPTION_`,props:[`clearable`,`model-undefined`]},{default:g(()=>[s(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,clearable:!0,"show-text":!0,label:`_A_RATE_EXAMPLE_LABEL_`,"help-text":`_A_RATE_EXAMPLE_HELP_TEXT_`},null,8,[`modelValue`]),i(`div`,null,`model: `+c(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var L=C(F,[[`render`,I]]);function R(){return{codeHtml:`<a-rate
  v-model="modelArray"
  class="a_mb_3"
  :colors="colorsArray"
  :show-text="true"
  label="colors: Array"
></a-rate>
<a-rate
  v-model="modelObject"
  :colors="colorsObject"
  :max="10"
  :low-threshold="3"
  :high-threshold="8"
  :show-score="true"
  label="colors: Object"
></a-rate>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateColors",
  components: {
    ARate,
  },
  setup() {
    const modelArray = ref(2);
    const modelObject = ref(6);
    const colorsArray = ["var(--a_color_danger)", "var(--a_color_warning)", "var(--a_color_success)"];
    const colorsObject = {
      3: "var(--a_color_danger)",
      7: "var(--a_color_warning)",
      10: "var(--a_color_success)",
    };

    return {
      colorsArray,
      colorsObject,
      modelArray,
      modelObject,
    };
  },
};`}}var B={name:`PageRateColors`,components:{AlohaExample:v,ARate:b},setup(){let e=u(2),t=u(6),n=[`var(--a_color_danger)`,`var(--a_color_warning)`,`var(--a_color_success)`],r={3:`var(--a_color_danger)`,7:`var(--a_color_warning)`,10:`var(--a_color_success)`},{codeHtml:i}=R(),{codeJs:a}=z();return{codeHtml:i,codeJs:a,colorsArray:n,colorsObject:r,modelArray:e,modelObject:t}}};function V(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_COLORS_HEADER_`,description:`_A_RATE_GROUP_COLORS_DESCRIPTION_`,props:[`colors`,`low-threshold`,`high-threshold`]},{default:g(()=>[s(c,{class:`a_mb_3`,modelValue:e.modelArray,"onUpdate:modelValue":t[0]||=t=>e.modelArray=t,colors:e.colorsArray,"show-text":!0,label:`colors: Array`},null,8,[`modelValue`,`colors`]),s(c,{modelValue:e.modelObject,"onUpdate:modelValue":t[1]||=t=>e.modelObject=t,colors:e.colorsObject,max:10,"low-threshold":3,"high-threshold":8,"show-score":!0,label:`colors: Object`},null,8,[`modelValue`,`colors`])]),_:1},8,[`code-html`,`code-js`])}var H=C(B,[[`render`,V]]);function U(){return{codeHtml:`<a-rate
  v-model="model"
  :style="styleRate"
  :show-score="true"
  label="Your rating"
></a-rate>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateCss",
  components: {
    ARate,
  },
  setup() {
    const model = ref(4);
    const styleRate = {
      "--a_rate_fill_color": "var(--a_color_primary)",
      "--a_rate_icon_size": "2rem",
      "--a_rate_gap": ".5rem",
      "--a_rate_text_font_size": "1.25rem",
    };

    return {
      model,
      styleRate,
    };
  },
};`}}var G={name:`PageRateCss`,components:{AlohaExample:v,ARate:b},setup(){let e=u(4),t={"--a_rate_fill_color":`var(--a_color_primary)`,"--a_rate_icon_size":`2rem`,"--a_rate_gap":`.5rem`,"--a_rate_text_font_size":`1.25rem`},{codeHtml:n}=U(),{codeJs:r}=W();return{codeHtml:n,codeJs:r,model:e,styleRate:t}}};function K(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_CSS_HEADER_`,description:`_A_RATE_GROUP_CSS_DESCRIPTION_`,props:[`style`]},{default:g(()=>[s(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,style:d(e.styleRate),"show-score":!0,label:`_A_RATE_EXAMPLE_LABEL_`},null,8,[`modelValue`,`style`])]),_:1},8,[`code-html`,`code-js`])}var q=C(G,[[`render`,K]]);function J(){return{codeHtml:`<a-rate
  v-model="model"
  class="a_mb_3"
  :disabled="true"
  label="disabled"
></a-rate>
<a-rate
  v-model="modelDecimal"
  class="a_mb_3"
  :readonly="true"
  :show-score="true"
  label="readonly"
></a-rate>
<a-rate
  v-model="modelDecimal"
  :readonly="true"
  :show-text="true"
  size="small"
  label="readonly, size: small"
></a-rate>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateDisabled",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3);
    const modelDecimal = ref(3.7);

    return {
      model,
      modelDecimal,
    };
  },
};`}}var X={name:`PageRateDisabled`,components:{AlohaExample:v,ARate:b},setup(){let e=u(3),t=u(3.7),{codeHtml:n}=J(),{codeJs:r}=Y();return{codeHtml:n,codeJs:r,model:e,modelDecimal:t}}};function Z(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_DISABLED_HEADER_`,description:`_A_RATE_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`,`readonly`]},{default:g(()=>[s(c,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,disabled:!0,label:`disabled`},null,8,[`modelValue`]),s(c,{class:`a_mb_3`,modelValue:e.modelDecimal,"onUpdate:modelValue":t[1]||=t=>e.modelDecimal=t,readonly:!0,"show-score":!0,label:`readonly`},null,8,[`modelValue`]),s(c,{modelValue:e.modelDecimal,"onUpdate:modelValue":t[2]||=t=>e.modelDecimal=t,readonly:!0,"show-text":!0,size:`small`,label:`readonly, size: small`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Q=C(X,[[`render`,Z]]);function ne(){return{codeHtml:`<a-rate
  v-model="model"
  :required="true"
  :errors="model ? undefined : 'Please rate the service'"
  label="Service"
></a-rate>`}}function re(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateErrors",
  components: {
    ARate,
  },
  setup() {
    const model = ref(0);

    return {
      model,
    };
  },
};`}}var ie={name:`PageRateErrors`,components:{AlohaExample:v,ARate:b},setup(){let e=u(0),{codeHtml:t}=ne(),{codeJs:n}=re();return{codeHtml:t,codeJs:n,model:e}}};function ae(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_ERRORS_HEADER_`,description:`_A_RATE_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`,`required`]},{default:g(()=>[s(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,required:!0,errors:e.model?void 0:`_A_RATE_EXAMPLE_ERROR_`,label:`_A_RATE_EXAMPLE_LABEL_SERVICE_`},null,8,[`modelValue`,`errors`])]),_:1},8,[`code-html`,`code-js`])}var oe=C(ie,[[`render`,ae]]);function se(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
></a-form>
<div>model: {{ model }}</div>`}}function ce(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageRateForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      service: 4,
      food: 0,
    });
    const data = [
      {
        id: "service",
        type: "rate",
        label: "_A_RATE_EXAMPLE_LABEL_SERVICE_",
        showText: true,
        required: true,
      },
      {
        id: "food",
        type: "rate",
        label: "_A_RATE_EXAMPLE_LABEL_FOOD_",
        allowHalf: true,
        clearable: true,
        showScore: true,
      },
    ];

    return {
      data,
      model,
    };
  },
};`}}var le={name:`PageRateForm`,components:{AlohaExample:v,AForm:S},setup(){let e=u({service:4,food:0}),t=[{id:`service`,type:`rate`,label:`_A_RATE_EXAMPLE_LABEL_SERVICE_`,showText:!0,required:!0},{id:`food`,type:`rate`,label:`_A_RATE_EXAMPLE_LABEL_FOOD_`,allowHalf:!0,clearable:!0,showScore:!0}],{codeHtml:n}=se(),{codeJs:r}=ce();return{codeHtml:n,codeJs:r,data:t,model:e}}};function ue(e,t,n,o,ee,l){let u=h(`a-form`),d=h(`aloha-example`);return r(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_FORM_HEADER_`,description:`_A_RATE_GROUP_FORM_DESCRIPTION_`,props:[`type`]},{default:g(()=>[s(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+c(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var de=C(le,[[`render`,ue]]);function fe(){return{codeHtml:`<a-rate
  v-model="model"
  label="Service"
  label-description="How satisfied are you with our service?"
  help-text="Click the same icon again to remove the rating"
  :clearable="true"
></a-rate>`}}function pe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateHelpText",
  components: {
    ARate,
  },
  setup() {
    const model = ref(0);

    return {
      model,
    };
  },
};`}}var me={name:`PageRateHelpText`,components:{AlohaExample:v,ARate:b},setup(){let e=u(0),{codeHtml:t}=fe(),{codeJs:n}=pe();return{codeHtml:t,codeJs:n,model:e}}};function he(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_HELP_TEXT_HEADER_`,description:`_A_RATE_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`,`label-description`]},{default:g(()=>[s(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_RATE_EXAMPLE_LABEL_SERVICE_`,"label-description":`_A_RATE_EXAMPLE_LABEL_DESCRIPTION_`,"help-text":`_A_RATE_EXAMPLE_HELP_TEXT_`,clearable:!0},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ge=C(me,[[`render`,he]]);function _e(){return{codeHtml:`<a-rate
  v-model="modelHeart"
  class="a_mb_3"
  :icons="HeartFill"
  :void-icon="Heart"
  colors="var(--a_color_danger)"
  label="Food"
></a-rate>
<a-rate
  v-model="modelEmoji"
  :icons="iconsEmoji"
  :void-icon="EmojiNeutral"
  :colors="colorsEmoji"
  :show-text="true"
  label="Service"
></a-rate>`}}function ve(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

import EmojiFrownFill from "aloha-svg/dist/js/bootstrap/EmojiFrownFill";
import EmojiNeutral from "aloha-svg/dist/js/bootstrap/EmojiNeutral";
import EmojiNeutralFill from "aloha-svg/dist/js/bootstrap/EmojiNeutralFill";
import EmojiSmileFill from "aloha-svg/dist/js/bootstrap/EmojiSmileFill";
import Heart from "aloha-svg/dist/js/bootstrap/Heart";
import HeartFill from "aloha-svg/dist/js/bootstrap/HeartFill";

export default {
  name: "PageRateIcons",
  components: {
    ARate,
  },
  setup() {
    const modelHeart = ref(3);
    const modelEmoji = ref(4);
    const iconsEmoji = [EmojiFrownFill, EmojiNeutralFill, EmojiSmileFill];
    const colorsEmoji = ["var(--a_color_danger)", "var(--a_color_warning)", "var(--a_color_success)"];

    return {
      colorsEmoji,
      EmojiNeutral,
      Heart,
      HeartFill,
      iconsEmoji,
      modelEmoji,
      modelHeart,
    };
  },
};`}}var ye={name:`PageRateIcons`,components:{AlohaExample:v,ARate:b},setup(){let e=u(3),t=u(4),n=[p,l,m],r=[`var(--a_color_danger)`,`var(--a_color_warning)`,`var(--a_color_success)`],{codeHtml:i}=_e(),{codeJs:a}=ve();return{codeHtml:i,codeJs:a,colorsEmoji:r,EmojiNeutral:ee,Heart:f,HeartFill:_,iconsEmoji:n,modelEmoji:t,modelHeart:e}}};function be(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_ICONS_HEADER_`,description:`_A_RATE_GROUP_ICONS_DESCRIPTION_`,props:[`icons`,`void-icon`]},{default:g(()=>[s(c,{class:`a_mb_3`,modelValue:e.modelHeart,"onUpdate:modelValue":t[0]||=t=>e.modelHeart=t,icons:e.HeartFill,"void-icon":e.Heart,colors:`var(--a_color_danger)`,label:`_A_RATE_EXAMPLE_LABEL_FOOD_`},null,8,[`modelValue`,`icons`,`void-icon`]),s(c,{modelValue:e.modelEmoji,"onUpdate:modelValue":t[1]||=t=>e.modelEmoji=t,icons:e.iconsEmoji,"void-icon":e.EmojiNeutral,colors:e.colorsEmoji,"show-text":!0,label:`_A_RATE_EXAMPLE_LABEL_SERVICE_`},null,8,[`modelValue`,`icons`,`void-icon`,`colors`])]),_:1},8,[`code-html`,`code-js`])}var xe=C(ye,[[`render`,be]]);function Se(){return{codeHtml:`<a-rate
  v-model="model"
  :max="10"
  :show-score="true"
  score-template="{{value}} / {{max}}"
  label="Your rating"
></a-rate>`}}function Ce(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateMax",
  components: {
    ARate,
  },
  setup() {
    const model = ref(7);

    return {
      model,
    };
  },
};`}}var we={name:`PageRateMax`,components:{AlohaExample:v,ARate:b},setup(){let e=u(7),{codeHtml:t}=Se(),{codeJs:n}=Ce();return{codeHtml:t,codeJs:n,model:e}}};function Te(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_MAX_HEADER_`,description:`_A_RATE_GROUP_MAX_DESCRIPTION_`,props:[`max`]},{default:g(()=>[s(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,max:10,"show-score":!0,"score-template":`{{value}} / {{max}}`,label:`_A_RATE_EXAMPLE_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Ee=C(we,[[`render`,Te]]);function De(){return{codeHtml:`<a-rate
  v-model="model"
  class="a_mb_3"
  :show-score="true"
  label="show-score"
></a-rate>
<a-rate
  v-model="model"
  :show-score="true"
  score-template="{{value}} points"
  label="score-template"
></a-rate>`}}function Oe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateScore",
  components: {
    ARate,
  },
  setup() {
    const model = ref(4);

    return {
      model,
    };
  },
};`}}var ke={name:`PageRateScore`,components:{AlohaExample:v,ARate:b},setup(){let e=u(4),{codeHtml:t}=De(),{codeJs:n}=Oe();return{codeHtml:t,codeJs:n,model:e}}};function Ae(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_SCORE_HEADER_`,description:`_A_RATE_GROUP_SCORE_DESCRIPTION_`,props:[`show-score`,`score-template`]},{default:g(()=>[s(c,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"show-score":!0,label:`show-score`},null,8,[`modelValue`]),s(c,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"show-score":!0,"score-template":`_A_RATE_EXAMPLE_SCORE_{{value}}_`,label:`score-template`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var je=C(ke,[[`render`,Ae]]);function Me(){return{codeHtml:`<a-rate
  v-model="model"
  class="a_mb_3"
  size="small"
  label="size: small"
></a-rate>
<a-rate
  v-model="model"
  class="a_mb_3"
  label="size: default"
></a-rate>
<a-rate
  v-model="model"
  size="large"
  label="size: large"
></a-rate>`}}function Ne(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateSize",
  components: {
    ARate,
  },
  setup() {
    const model = ref(4);

    return {
      model,
    };
  },
};`}}var Pe={name:`PageRateSize`,components:{AlohaExample:v,ARate:b},setup(){let e=u(4),{codeHtml:t}=Me(),{codeJs:n}=Ne();return{codeHtml:t,codeJs:n,model:e}}};function $(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_SIZE_HEADER_`,description:`_A_RATE_GROUP_SIZE_DESCRIPTION_`,props:[`size`]},{default:g(()=>[s(c,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,size:`small`,label:`size: small`},null,8,[`modelValue`]),s(c,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,label:`size: default`},null,8,[`modelValue`]),s(c,{modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,size:`large`,label:`size: large`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Fe=C(Pe,[[`render`,$]]);function Ie(){return{codeHtml:`<a-rate
  v-model="modelDefault"
  class="a_mb_3"
  :show-text="true"
  label="Your rating"
></a-rate>
<a-rate
  v-model="modelCustom"
  :show-text="true"
  :texts="texts"
  label="Service"
></a-rate>`}}function Le(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateText",
  components: {
    ARate,
  },
  setup() {
    const modelDefault = ref(3);
    const modelCustom = ref(5);
    const texts = [
      "_A_RATE_EXAMPLE_TEXT_1_",
      "_A_RATE_EXAMPLE_TEXT_2_",
      "_A_RATE_EXAMPLE_TEXT_3_",
      "_A_RATE_EXAMPLE_TEXT_4_",
      "_A_RATE_EXAMPLE_TEXT_5_",
    ];

    return {
      modelCustom,
      modelDefault,
      texts,
    };
  },
};`}}var Re={name:`PageRateText`,components:{AlohaExample:v,ARate:b},setup(){let e=u(3),t=u(5),n=[`_A_RATE_EXAMPLE_TEXT_1_`,`_A_RATE_EXAMPLE_TEXT_2_`,`_A_RATE_EXAMPLE_TEXT_3_`,`_A_RATE_EXAMPLE_TEXT_4_`,`_A_RATE_EXAMPLE_TEXT_5_`],{codeHtml:r}=Ie(),{codeJs:i}=Le();return{codeHtml:r,codeJs:i,modelCustom:t,modelDefault:e,texts:n}}};function ze(e,t,n,i,o,ee){let c=h(`a-rate`),l=h(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_RATE_GROUP_TEXT_HEADER_`,description:`_A_RATE_GROUP_TEXT_DESCRIPTION_`,props:[`show-text`,`texts`]},{default:g(()=>[s(c,{class:`a_mb_3`,modelValue:e.modelDefault,"onUpdate:modelValue":t[0]||=t=>e.modelDefault=t,"show-text":!0,label:`_A_RATE_EXAMPLE_LABEL_`},null,8,[`modelValue`]),s(c,{modelValue:e.modelCustom,"onUpdate:modelValue":t[1]||=t=>e.modelCustom=t,"show-text":!0,texts:e.texts,label:`_A_RATE_EXAMPLE_LABEL_SERVICE_`},null,8,[`modelValue`,`texts`])]),_:1},8,[`code-html`,`code-js`])}var Be=C(Re,[[`render`,ze]]);function Ve(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function He(){let e=o(()=>y({placeholder:`_A_RATE_COMPONENT_NAME_`}));return{pageTitle:o(()=>`ARate${e.value?` (${e.value})`:``}`)}}function Ue(){return{dataProps:[{name:`allow-half`,description:`_A_RATE_PROPS_ALLOW_HALF_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clearable`,description:`_A_RATE_PROPS_CLEARABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`colors`,description:`_A_RATE_PROPS_COLORS_DESCRIPTION_`,type:`String / Array / Object`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`[]`,required:!1},{name:`extra`,description:`_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`high-threshold`,description:`_A_RATE_PROPS_HIGH_THRESHOLD_DESCRIPTION_`,type:`Number`,default:4,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icons`,description:`_A_RATE_PROPS_ICONS_DESCRIPTION_`,type:`String / Array / Object`,default:`StarFill`,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`uniqueId("a_rate_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`low-threshold`,description:`_A_RATE_PROPS_LOW_THRESHOLD_DESCRIPTION_`,type:`Number`,default:2,required:!1},{name:`max`,description:`_A_RATE_PROPS_MAX_DESCRIPTION_`,type:`Number`,default:5,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`score-template`,description:`_A_RATE_PROPS_SCORE_TEMPLATE_DESCRIPTION_`,type:`String`,default:`"_A_RATE_SCORE_{{value}}_{{max}}_"`,required:!1},{name:`show-score`,description:`_A_RATE_PROPS_SHOW_SCORE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-text`,description:`_A_RATE_PROPS_SHOW_TEXT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`size`,description:`_A_RATE_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`texts`,description:`_A_RATE_PROPS_TEXTS_DESCRIPTION_`,type:`Array`,default:`["_A_RATE_TEXT_1_", …, "_A_RATE_TEXT_5_"]`,required:!1},{name:`type`,description:`_A_RATE_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`"rate"`,required:!1},{name:`void-icon`,description:`_A_RATE_PROPS_VOID_ICON_DESCRIPTION_`,type:`String`,default:`Star`,required:!1},{name:`color`,description:`_A_RATE_PROPS_DEPRECATED_COLOR_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`half-icon`,description:`_A_RATE_PROPS_DEPRECATED_HALF_ICON_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`hovered-color`,description:`_A_RATE_PROPS_DEPRECATED_HOVERED_COLOR_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_RATE_PROPS_DEPRECATED_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-fill`,description:`_A_RATE_PROPS_DEPRECATED_ICON_FILL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`rating`,description:`_A_RATE_PROPS_DEPRECATED_RATING_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`text`,description:`_A_RATE_PROPS_DEPRECATED_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1}]}}function We(){return{dataTranslate:[`_A_RATE_ARIA_LABEL_`,`_A_RATE_NO_VALUE_`,`_A_RATE_SCORE_{{value}}_{{max}}_`,`_A_RATE_TEXT_1_`,`_A_RATE_TEXT_2_`,`_A_RATE_TEXT_3_`,`_A_RATE_TEXT_4_`,`_A_RATE_TEXT_5_`,`_A_RATE_VALUE_{{value}}_{{max}}_`]}}var Ge={name:`PageRate`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:x,PageRateBasic:M,PageRateMax:Ee,PageRateAllowHalf:O,PageRateSize:Fe,PageRateColors:H,PageRateIcons:xe,PageRateText:Be,PageRateScore:je,PageRateClearable:L,PageRateDisabled:Q,PageRateHelpText:ge,PageRateErrors:oe,PageRateForm:de,PageRateCss:q},setup(){let{pageTitle:e}=He(),{dataProps:t}=Ue(),{dataEvents:n}=Ve(),{dataTranslate:r}=We();return{dataEvents:n,dataProps:t,dataTranslate:r,pageTitle:e}}};function Ke(e,t,n,i,o,ee){let c=h(`a-translation`),l=h(`page-rate-basic`),u=h(`page-rate-max`),d=h(`page-rate-allow-half`),f=h(`page-rate-size`),p=h(`page-rate-colors`),m=h(`page-rate-icons`),_=h(`page-rate-text`),v=h(`page-rate-score`),y=h(`page-rate-clearable`),b=h(`page-rate-disabled`),x=h(`page-rate-help-text`),S=h(`page-rate-errors`),C=h(`page-rate-form`),w=h(`page-rate-css`),T=h(`aloha-table-props`),E=h(`aloha-table-translate`),D=h(`aloha-table-css-vars`),O=h(`aloha-page`);return r(),a(O,{"page-title":e.pageTitle},{body:g(()=>[s(c,{tag:`p`,html:`_A_RATE_COMPONENT_DESCRIPTION_`}),s(c,{class:`a_mb_4`,tag:`div`,html:`_A_RATE_ACCESSIBILITY_DESCRIPTION_`}),s(l),s(u),s(d),s(f),s(p),s(m),s(_),s(v),s(y),s(b),s(x),s(S),s(C),s(w),s(T,{data:e.dataProps},null,8,[`data`]),s(T,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),s(E,{data:e.dataTranslate},null,8,[`data`]),s(D,{files:`components/ui/ARate`})]),_:1},8,[`page-title`])}var qe=C(Ge,[[`render`,Ke]]);export{qe as default};