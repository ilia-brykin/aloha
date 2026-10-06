import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{Z as l,kt as u,nt as d,t as f}from"./bundle.index.BmSiyQNH.js";import{n as p,t as m}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as h}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as g}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";function _(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_6">
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      :aria-disabled="true"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>`}}function v(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselAriaDisabled",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};`}}var y={name:`PageCarouselAriaDisabled`,components:{ACarousel:d,AlohaExample:m},setup(){let e=t(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:n}=_(),{codeJs:r}=v();return{codeHtml:n,codeJs:r,data:e}}},b={class:`a_columns a_columns_count_12`},x={class:`a_column a_column_12_touch a_column_4`},S=[`src`,`alt`];function ee(e,t,i,l,u,d){let f=r(`a-carousel`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_`,description:`_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_`,props:`aria-disabled`},{default:o(()=>[s(`div`,b,[s(`div`,x,[a(f,{"aria-disabled":!0,data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,S)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var te=f(y,[[`render`,ee]]);function C(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      arrows-trigger="focus"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"
    ></a-translation>
    <a-carousel
      :arrows-trigger="['hover', 'focus']"
      :data="data"
      aria-label="Carousel with balls"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      arrows-trigger="always"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>`}}function w(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselArrowsTrigger",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};`}}var T={name:`PageCarouselArrowsTrigger`,components:{ACarousel:d,AlohaExample:m,ATranslation:l},setup(){let e=t(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:n}=C(),{codeJs:r}=w();return{codeHtml:n,codeJs:r,data:e}}},E={class:`a_columns a_columns_count_12`},D={class:`a_column a_column_12_touch a_column_4`},O=[`src`,`alt`],k={class:`a_column a_column_12_touch a_column_4`},A=[`src`,`alt`],j={class:`a_column a_column_12_touch a_column_4`},M=[`src`,`alt`],N={class:`a_column a_column_12_touch a_column_4`},P=[`src`,`alt`];function F(e,t,i,l,u,d){let f=r(`a-translation`),p=r(`a-carousel`),m=r(`aloha-example`);return c(),n(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_`,description:`_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_`,props:`arrows-trigger`},{default:o(()=>[s(`div`,E,[s(`div`,D,[a(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_`}),a(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,O)]),_:1},8,[`data`])]),s(`div`,k,[a(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_`}),a(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`focus`,"key-id":`id`},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,A)]),_:1},8,[`data`])]),s(`div`,j,[a(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_`}),a(p,{"arrows-trigger":[`hover`,`focus`],data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,M)]),_:1},8,[`data`])]),s(`div`,N,[a(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_`}),a(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`always`,"key-id":`id`},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,P)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var I=f(T,[[`render`,F]]);function L(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
    >
      <template
        v-slot:item="{ item }"
      >
        <img 
          :alt="item.alt"
          :src="item.src"
          class="a_height_auto a_width_100"
        >
      </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="dataOne"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
    >
      <template
        v-slot:item="{ item }"
      >
        <img 
          :alt="item.alt"
          :src="item.src"
          class="a_height_auto a_width_100"
        >
      </template>
    </a-carousel>
  </div>
</div>`}}function R(){return{codeJs:`import { 
  ACarousel,
  getTranslatedText,
} from "aloha-vue";
    
export default {
  name: "PageCarouselBasic",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });
    const dataOne = computed(() => {
      return [
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });
    
    return {
      data,
      dataOne,
    };
  },
};`}}var z={name:`PageCarouselBasic`,components:{ACarousel:d,AlohaExample:m},setup(){let e=t(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),n=t(()=>[{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:r}=L(),{codeJs:i}=R();return{codeHtml:r,codeJs:i,data:e,dataOne:n}}},B={class:`a_columns a_columns_count_12`},V={class:`a_column a_column_12_touch a_column_4`},H=[`src`,`alt`],U={class:`a_column a_column_12_touch a_column_4`},W=[`src`,`alt`];function G(e,t,i,l,u,d){let f=r(`a-carousel`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:o(()=>[s(`div`,B,[s(`div`,V,[a(f,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,H)]),_:1},8,[`data`])]),s(`div`,U,[a(f,{data:e.dataOne,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,W)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var K=f(z,[[`render`,G]]);function q(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_6">
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      :aria-disabled="true"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>`}}function J(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselDeleteActiveSlide",
  components: {
    ACarousel,
  },
  setup() {
     const showLastSlide = ref(true);

    const data = computed(() => {
      const DATA = [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
      ];
      if (showLastSlide.value) {
        DATA.push({
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        });
      }

      return DATA;
    });

    const deleteLastSlide = () => {
      setTimeout(() => {
        showLastSlide.value = false;
      }, 2000);
    };
    
    deleteLastSlide();

    return {
      data,
    };
  },
};`}}var Y={name:`PageCarouselDeleteActiveSlide`,components:{ACarousel:d,AlohaExample:m},setup(){let e=i(!0),n=t(()=>{let t=[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})}];return e.value&&t.push({id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}),t}),r=()=>{setTimeout(()=>{e.value=!1},2e3)},{codeHtml:a}=q(),{codeJs:o}=J();return r(),{codeHtml:a,codeJs:o,data:n}}},X={class:`a_columns a_columns_count_12`},Z={class:`a_column a_column_12_touch a_column_4`},Q=[`src`,`alt`];function ne(e,t,i,l,u,d){let f=r(`a-carousel`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_DELETE_ACTIVE_SLIDE_HEADER_`,description:`_A_CAROUSEL_GROUP_DELETE_ACTIVE_SLIDE_DESCRIPTION_`},{default:o(()=>[s(`div`,X,[s(`div`,Z,[a(f,{data:e.data,"model-value":4,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Q)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var re=f(Y,[[`render`,ne]]);function ie(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_6">
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      @change="change"
      @init="init"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>`}}function ae(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselEmits",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });
    
    const init = ({ id, item }) => {
      console.log("init", id, item);
    };

    const change = ({ id, item }) => {
      console.log("change", id, item);
    };

    return {
      change,
      data,
      init,
    };
  },
};`}}var oe={name:`PageCarouselEmits`,components:{ACarousel:d,AlohaExample:m},setup(){let e=t(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),n=({id:e,item:t})=>{console.log(`init`,e,t)},r=({id:e,item:t})=>{console.log(`change`,e,t)},{codeHtml:i}=ie(),{codeJs:a}=ae();return{change:r,codeHtml:i,codeJs:a,data:e,init:n}}},se={class:`a_columns a_columns_count_12`},ce={class:`a_column a_column_12_touch a_column_4`},le=[`src`,`alt`];function ue(e,t,i,l,u,d){let f=r(`a-carousel`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_EMITS_HEADER_`,description:`_A_CAROUSEL_GROUP_EMITS_DESCRIPTION_`,emits:[`change`,`init`]},{default:o(()=>[s(`div`,se,[s(`div`,ce,[a(f,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`,onChange:e.change,onInit:e.init},{item:o(({item:e})=>[s(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,le)]),_:1},8,[`data`,`onChange`,`onInit`])])])]),_:1},8,[`code-html`,`code-js`])}var de=f(oe,[[`render`,ue]]);function fe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="data"
      :indicators-auto-limit="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>`}}function pe(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselIndicatorsAutoLimit",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 5,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 6,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 7,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 8,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 9,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 10,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 11,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 12,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 13,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 14,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 15,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 16,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 17,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 18,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 19,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 20,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 21,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 22,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 23,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 24,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 25,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 26,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};`}}var me={name:`PageCarouselIndicatorsAutoLimit`,components:{ACarousel:d,AlohaExample:m,ATranslation:l},setup(){let e=t(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:5,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:6,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:7,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:8,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:9,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:10,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:11,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:12,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:13,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:14,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:15,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:16,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:17,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:18,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:19,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:20,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:21,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:22,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:23,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:24,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:25,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:26,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:n}=fe(),{codeJs:r}=pe();return{codeHtml:n,codeJs:r,data:e}}},he={class:`a_columns a_columns_count_12`},ge={class:`a_column a_column_12_touch a_column_4`},_e=[`src`,`alt`];function ve(t,i,l,u,d,f){let p=r(`a-carousel`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_DESCRIPTION_`,props:`indicators-auto-limit`},{default:o(()=>[s(`div`,he,[s(`div`,ge,[a(p,{data:t.data,"indicators-auto-limit":!0,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:o(({item:t})=>[s(`div`,null,e(t.id),1),s(`img`,{class:`a_height_auto a_width_100`,src:t.src,alt:t.alt},null,8,_e)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var ye=f(me,[[`render`,ve]]);function be(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <h3>
      <strong
        lang="en"
      >indicators-limit="6"</strong>
    </h3>
    <a-carousel
      :data="data"
      :indicators-limit="6"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <h3>
      <strong
        lang="en"
      >indicators-limit="3"</strong>
    </h3>
    <a-carousel
      :data="data"
      :indicators-limit="3"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>`}}function xe(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselIndicatorsLimit",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 5,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 6,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 7,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 8,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};`}}var Se={name:`PageCarouselIndicatorsLimit`,components:{ACarousel:d,AlohaExample:m,ATranslation:l},setup(){let e=t(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:5,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:6,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:7,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:8,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:n}=be(),{codeJs:r}=xe();return{codeHtml:n,codeJs:r,data:e}}},Ce={class:`a_columns a_columns_count_12`},we={class:`a_column a_column_12_touch a_column_4`},Te=[`src`,`alt`],Ee={class:`a_column a_column_12_touch a_column_4`},De=[`src`,`alt`];function Oe(t,i,l,u,d,f){let p=r(`a-carousel`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_LIMIT_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_LIMIT_DESCRIPTION_`,props:`indicators-limit`},{default:o(()=>[s(`div`,Ce,[s(`div`,we,[i[0]||=s(`h3`,null,[s(`strong`,{lang:`en`},`indicators-limit="6"`)],-1),a(p,{data:t.data,"indicators-limit":6,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:o(({item:t})=>[s(`div`,null,e(t.id),1),s(`img`,{class:`a_height_auto a_width_100`,src:t.src,alt:t.alt},null,8,Te)]),_:1},8,[`data`])]),s(`div`,Ee,[i[1]||=s(`h3`,null,[s(`strong`,{lang:`en`},`indicators-limit="3"`)],-1),a(p,{data:t.data,"indicators-limit":3,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:o(({item:t})=>[s(`div`,null,e(t.id),1),s(`img`,{class:`a_height_auto a_width_100`,src:t.src,alt:t.alt},null,8,De)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var ke=f(Se,[[`render`,Oe]]);function Ae(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <h3>
      <strong
        lang="en"
      >indicators-limit="6"</strong>
    </h3>
    <a-carousel
      :data="data"
      :indicators-limit="6"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <h3>
      <strong
        lang="en"
      >indicators-limit="3"</strong>
    </h3>
    <a-carousel
      :data="data"
      :indicators-limit="3"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>`}}function je(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselIndicatorsType",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};`}}var Me={name:`PageCarouselIndicatorsType`,components:{ACarousel:d,AlohaExample:m,ATranslation:l},setup(){let e=t(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:u({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:n}=Ae(),{codeJs:r}=je();return{codeHtml:n,codeJs:r,data:e}}},Ne={class:`a_columns a_columns_count_12`},Pe={class:`a_column a_column_12_touch a_column_4`},$=[`src`,`alt`],Fe={class:`a_column a_column_12_touch a_column_4`},Ie=[`src`,`alt`];function Le(t,i,l,u,d,f){let p=r(`a-carousel`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_TYPE_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_TYPE_DESCRIPTION_`,props:`indicators-type`},{default:o(()=>[s(`div`,Ne,[s(`div`,Pe,[i[0]||=s(`h3`,null,[s(`strong`,{lang:`en`},`dots`)],-1),a(p,{data:t.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"indicators-type":`dots`,"key-id":`id`},{item:o(({item:t})=>[s(`div`,null,e(t.id),1),s(`img`,{class:`a_height_auto a_width_100`,src:t.src,alt:t.alt},null,8,$)]),_:1},8,[`data`])]),s(`div`,Fe,[i[1]||=s(`h3`,null,[s(`strong`,{lang:`en`},`squares`)],-1),a(p,{data:t.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"indicators-type":`squares`,"key-id":`id`},{item:o(({item:t})=>[s(`div`,null,e(t.id),1),s(`img`,{class:`a_height_auto a_width_100`,src:t.src,alt:t.alt},null,8,Ie)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var Re=f(Me,[[`render`,Le]]);function ze(){let e=t(()=>u({placeholder:`_A_CAROUSEL_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ACarousel${e.value?` (${e.value})`:``}`)}}function Be(){return{dataProps:[{name:`aria-label`,description:`_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String`,default:void 0,required:!0},{name:`aria-disabled`,description:`_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`arrow-previous-attributes`,description:`_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`arrow-previous-icon`,description:`_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_`,type:`String`,default:`ChevronLeft`,required:!1},{name:`arrow-next-attributes`,description:`_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`arrow-next-icon`,description:`_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_`,type:`String`,default:`ChevronRight`,required:!1},{name:`arrows-show`,description:`_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`arrows-trigger`,description:`_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_`,type:`String / Array`,default:`always`,required:!1},{name:`arrows-placement`,description:`_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`sides-center`,required:!1},{name:`autoplay-interval`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_`,type:`Number`,default:5e3,required:!1},{name:`autoplay-show`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`autoplay-start`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`data`,description:`_A_CAROUSEL_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`disabled`,description:`_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`id`,description:`_A_CAROUSEL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_carousel_")`,required:!1},{name:`indicators-auto-limit`,description:`_A_CAROUSEL_PROPS_INDICATORS_AUTO_LIMIT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`indicators-limit`,description:`_A_CAROUSEL_PROPS_INDICATORS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`indicators-placement`,description:`_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom`,required:!1},{name:`indicators-show`,description:`_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`indicators-type`,description:`_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_`,type:`String`,default:`dots`,required:!1},{name:`indicator-width`,description:`_A_CAROUSEL_PROPS_INDICATOR_WIDTH_DESCRIPTION_`,type:`Number`,default:2.125,required:!1},{name:`key-id`,description:`_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`model-value`,description:`_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`texts`,description:`_A_CAROUSEL_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function Ve(){return{dataTranslate:[`_A_CAROUSEL_NEXT_SLIDE_`,`_A_CAROUSEL_PREVIOUS_SLIDE_`,`_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_`,`_A_CAROUSEL_CONTROLS_SLIDES_`,`_A_CAROUSEL_CONTROLS_START_`,`_A_CAROUSEL_CONTROLS_STOP_`,`_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_`]}}var He={name:`PageCarousel`,components:{AlohaPage:p,AlohaTableProps:h,AlohaTableTranslate:g,ATranslation:l,PageCarouselAriaDisabled:te,PageCarouselArrowsTrigger:I,PageCarouselBasic:K,PageCarouselDeleteActiveSlide:re,PageCarouselEmits:de,PageCarouselIndicatorsAutoLimit:ye,PageCarouselIndicatorsLimit:ke,PageCarouselIndicatorsType:Re},setup(){let{pageTitle:e}=ze(),{dataProps:t}=Be(),{dataTranslate:n}=Ve();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function Ue(e,t,i,s,l,u){let d=r(`a-translation`),f=r(`page-carousel-basic`),p=r(`page-carousel-aria-disabled`),m=r(`page-carousel-arrows-trigger`),h=r(`page-carousel-indicators-limit`),g=r(`page-carousel-indicators-auto-limit`),_=r(`page-carousel-indicators-type`),v=r(`page-carousel-emits`),y=r(`page-carousel-delete-active-slide`),b=r(`aloha-table-props`),x=r(`aloha-table-translate`),S=r(`aloha-page`);return c(),n(S,{"page-title":e.pageTitle},{body:o(()=>[a(d,{tag:`p`,html:`_A_CAROUSEL_COMPONENT_DESCRIPTION_`}),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b,{data:e.dataProps},null,8,[`data`]),a(x,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var We=f(He,[[`render`,Ue]]);export{We as default};