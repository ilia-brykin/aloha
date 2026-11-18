import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{t}from"./chunk.AlohaTableProps.Cny8B0rP.js";import{t as n}from"./chunk.AlohaTableTranslate.BDkz3ESy.js";import{Ft as r,Nt as i,Pt as a,Xt as o,en as s,fn as c,in as l,on as u,zt as d}from"./chunk.vendor.Cx127fe1.js";import{t as f}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Mt as p,at as m,et as h}from"./bundle.index.Csp1_sOL.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var y={name:`PageCarouselAriaDisabled`,components:{ACarousel:m,AlohaExample:f},setup(){let e=i(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=_(),{codeJs:n}=v();return{codeHtml:t,codeJs:n,data:e}}},b={class:`a_columns a_columns_count_12`},x={class:`a_column a_column_12_touch a_column_4`},S=[`src`,`alt`];function C(e,t,n,i,c,u){let f=s(`a-carousel`),p=s(`aloha-example`);return o(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_`,description:`_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_`,props:`aria-disabled`},{default:l(()=>[a(`div`,b,[a(`div`,x,[d(f,{"aria-disabled":!0,data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,S)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var ee=g(y,[[`render`,C]]);function te(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var T={name:`PageCarouselArrowsTrigger`,components:{ACarousel:m,AlohaExample:f,ATranslation:h},setup(){let e=i(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=te(),{codeJs:n}=w();return{codeHtml:t,codeJs:n,data:e}}},E={class:`a_columns a_columns_count_12`},D={class:`a_column a_column_12_touch a_column_4`},O=[`src`,`alt`],k={class:`a_column a_column_12_touch a_column_4`},A=[`src`,`alt`],j={class:`a_column a_column_12_touch a_column_4`},M=[`src`,`alt`],N={class:`a_column a_column_12_touch a_column_4`},P=[`src`,`alt`];function F(e,t,n,i,c,u){let f=s(`a-translation`),p=s(`a-carousel`),m=s(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_`,description:`_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_`,props:`arrows-trigger`},{default:l(()=>[a(`div`,E,[a(`div`,D,[d(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_`}),d(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,O)]),_:1},8,[`data`])]),a(`div`,k,[d(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_`}),d(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`focus`,"key-id":`id`},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,A)]),_:1},8,[`data`])]),a(`div`,j,[d(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_`}),d(p,{"arrows-trigger":[`hover`,`focus`],data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,M)]),_:1},8,[`data`])]),a(`div`,N,[d(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_`}),d(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`always`,"key-id":`id`},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,P)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var I=g(T,[[`render`,F]]);function L(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var z={name:`PageCarouselBasic`,components:{ACarousel:m,AlohaExample:f},setup(){let e=i(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),t=i(()=>[{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:n}=L(),{codeJs:r}=R();return{codeHtml:n,codeJs:r,data:e,dataOne:t}}},B={class:`a_columns a_columns_count_12`},V={class:`a_column a_column_12_touch a_column_4`},H=[`src`,`alt`],U={class:`a_column a_column_12_touch a_column_4`},W=[`src`,`alt`];function G(e,t,n,i,c,u){let f=s(`a-carousel`),p=s(`aloha-example`);return o(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:l(()=>[a(`div`,B,[a(`div`,V,[d(f,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,H)]),_:1},8,[`data`])]),a(`div`,U,[d(f,{data:e.dataOne,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,W)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var K=g(z,[[`render`,G]]);function q(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var Y={name:`PageCarouselDeleteActiveSlide`,components:{ACarousel:m,AlohaExample:f},setup(){let e=u(!0),t=i(()=>{let t=[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})}];return e.value&&t.push({id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}),t}),n=()=>{setTimeout(()=>{e.value=!1},2e3)},{codeHtml:r}=q(),{codeJs:a}=J();return n(),{codeHtml:r,codeJs:a,data:t}}},X={class:`a_columns a_columns_count_12`},Z={class:`a_column a_column_12_touch a_column_4`},Q=[`src`,`alt`];function ne(e,t,n,i,c,u){let f=s(`a-carousel`),p=s(`aloha-example`);return o(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_DELETE_ACTIVE_SLIDE_HEADER_`,description:`_A_CAROUSEL_GROUP_DELETE_ACTIVE_SLIDE_DESCRIPTION_`},{default:l(()=>[a(`div`,X,[a(`div`,Z,[d(f,{data:e.data,"model-value":4,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Q)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var re=g(Y,[[`render`,ne]]);function ie(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var oe={name:`PageCarouselEmits`,components:{ACarousel:m,AlohaExample:f},setup(){let e=i(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),t=({id:e,item:t})=>{console.log(`init`,e,t)},n=({id:e,item:t})=>{console.log(`change`,e,t)},{codeHtml:r}=ie(),{codeJs:a}=ae();return{change:n,codeHtml:r,codeJs:a,data:e,init:t}}},se={class:`a_columns a_columns_count_12`},ce={class:`a_column a_column_12_touch a_column_4`},le=[`src`,`alt`];function ue(e,t,n,i,c,u){let f=s(`a-carousel`),p=s(`aloha-example`);return o(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_EMITS_HEADER_`,description:`_A_CAROUSEL_GROUP_EMITS_DESCRIPTION_`,emits:[`change`,`init`]},{default:l(()=>[a(`div`,se,[a(`div`,ce,[d(f,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`,onChange:e.change,onInit:e.init},{item:l(({item:e})=>[a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,le)]),_:1},8,[`data`,`onChange`,`onInit`])])])]),_:1},8,[`code-html`,`code-js`])}var de=g(oe,[[`render`,ue]]);function fe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var me={name:`PageCarouselIndicatorsAutoLimit`,components:{ACarousel:m,AlohaExample:f,ATranslation:h},setup(){let e=i(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:5,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:6,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:7,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:8,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:9,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:10,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:11,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:12,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:13,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:14,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:15,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:16,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:17,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:18,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:19,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:20,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:21,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:22,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:23,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:24,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:25,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:26,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=fe(),{codeJs:n}=pe();return{codeHtml:t,codeJs:n,data:e}}},he={class:`a_columns a_columns_count_12`},ge={class:`a_column a_column_12_touch a_column_4`},_e=[`src`,`alt`];function ve(e,t,n,i,u,f){let p=s(`a-carousel`),m=s(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_DESCRIPTION_`,props:`indicators-auto-limit`},{default:l(()=>[a(`div`,he,[a(`div`,ge,[d(p,{data:e.data,"indicators-auto-limit":!0,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:l(({item:e})=>[a(`div`,null,c(e.id),1),a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,_e)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var ye=g(me,[[`render`,ve]]);function be(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var Se={name:`PageCarouselIndicatorsLimit`,components:{ACarousel:m,AlohaExample:f,ATranslation:h},setup(){let e=i(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:5,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:6,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:7,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:8,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=be(),{codeJs:n}=xe();return{codeHtml:t,codeJs:n,data:e}}},Ce={class:`a_columns a_columns_count_12`},we={class:`a_column a_column_12_touch a_column_4`},Te=[`src`,`alt`],Ee={class:`a_column a_column_12_touch a_column_4`},De=[`src`,`alt`];function Oe(e,t,n,i,u,f){let p=s(`a-carousel`),m=s(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_LIMIT_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_LIMIT_DESCRIPTION_`,props:`indicators-limit`},{default:l(()=>[a(`div`,Ce,[a(`div`,we,[t[0]||=a(`h3`,null,[a(`strong`,{lang:`en`},`indicators-limit="6"`)],-1),d(p,{data:e.data,"indicators-limit":6,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:l(({item:e})=>[a(`div`,null,c(e.id),1),a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Te)]),_:1},8,[`data`])]),a(`div`,Ee,[t[1]||=a(`h3`,null,[a(`strong`,{lang:`en`},`indicators-limit="3"`)],-1),d(p,{data:e.data,"indicators-limit":3,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:l(({item:e})=>[a(`div`,null,c(e.id),1),a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,De)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var ke=g(Se,[[`render`,Oe]]);function Ae(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var Me={name:`PageCarouselIndicatorsType`,components:{ACarousel:m,AlohaExample:f,ATranslation:h},setup(){let e=i(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:p({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=Ae(),{codeJs:n}=je();return{codeHtml:t,codeJs:n,data:e}}},Ne={class:`a_columns a_columns_count_12`},Pe={class:`a_column a_column_12_touch a_column_4`},$=[`src`,`alt`],Fe={class:`a_column a_column_12_touch a_column_4`},Ie=[`src`,`alt`];function Le(e,t,n,i,u,f){let p=s(`a-carousel`),m=s(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_TYPE_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_TYPE_DESCRIPTION_`,props:`indicators-type`},{default:l(()=>[a(`div`,Ne,[a(`div`,Pe,[t[0]||=a(`h3`,null,[a(`strong`,{lang:`en`},`dots`)],-1),d(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"indicators-type":`dots`,"key-id":`id`},{item:l(({item:e})=>[a(`div`,null,c(e.id),1),a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,$)]),_:1},8,[`data`])]),a(`div`,Fe,[t[1]||=a(`h3`,null,[a(`strong`,{lang:`en`},`squares`)],-1),d(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"indicators-type":`squares`,"key-id":`id`},{item:l(({item:e})=>[a(`div`,null,c(e.id),1),a(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Ie)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var Re=g(Me,[[`render`,Le]]);function ze(){let e=i(()=>p({placeholder:`_A_CAROUSEL_COMPONENT_NAME_`}));return{pageTitle:i(()=>`ACarousel${e.value?` (${e.value})`:``}`)}}function Be(){return{dataProps:[{name:`aria-label`,description:`_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String`,default:void 0,required:!0},{name:`aria-disabled`,description:`_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`arrow-previous-attributes`,description:`_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`arrow-previous-icon`,description:`_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_`,type:`String`,default:`ChevronLeft`,required:!1},{name:`arrow-next-attributes`,description:`_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`arrow-next-icon`,description:`_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_`,type:`String`,default:`ChevronRight`,required:!1},{name:`arrows-show`,description:`_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`arrows-trigger`,description:`_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_`,type:`String / Array`,default:`always`,required:!1},{name:`arrows-placement`,description:`_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`sides-center`,required:!1},{name:`autoplay-interval`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_`,type:`Number`,default:5e3,required:!1},{name:`autoplay-show`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`autoplay-start`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`data`,description:`_A_CAROUSEL_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`disabled`,description:`_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`id`,description:`_A_CAROUSEL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_carousel_")`,required:!1},{name:`indicators-auto-limit`,description:`_A_CAROUSEL_PROPS_INDICATORS_AUTO_LIMIT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`indicators-limit`,description:`_A_CAROUSEL_PROPS_INDICATORS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`indicators-placement`,description:`_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom`,required:!1},{name:`indicators-show`,description:`_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`indicators-type`,description:`_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_`,type:`String`,default:`dots`,required:!1},{name:`indicator-width`,description:`_A_CAROUSEL_PROPS_INDICATOR_WIDTH_DESCRIPTION_`,type:`Number`,default:2.125,required:!1},{name:`key-id`,description:`_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`model-value`,description:`_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`texts`,description:`_A_CAROUSEL_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function Ve(){return{dataTranslate:[`_A_CAROUSEL_NEXT_SLIDE_`,`_A_CAROUSEL_PREVIOUS_SLIDE_`,`_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_`,`_A_CAROUSEL_CONTROLS_SLIDES_`,`_A_CAROUSEL_CONTROLS_START_`,`_A_CAROUSEL_CONTROLS_STOP_`,`_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_`]}}var He={name:`PageCarousel`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:h,PageCarouselAriaDisabled:ee,PageCarouselArrowsTrigger:I,PageCarouselBasic:K,PageCarouselDeleteActiveSlide:re,PageCarouselEmits:de,PageCarouselIndicatorsAutoLimit:ye,PageCarouselIndicatorsLimit:ke,PageCarouselIndicatorsType:Re},setup(){let{pageTitle:e}=ze(),{dataProps:t}=Be(),{dataTranslate:n}=Ve();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function Ue(e,t,n,i,a,c){let u=s(`a-translation`),f=s(`page-carousel-basic`),p=s(`page-carousel-aria-disabled`),m=s(`page-carousel-arrows-trigger`),h=s(`page-carousel-indicators-limit`),g=s(`page-carousel-indicators-auto-limit`),_=s(`page-carousel-indicators-type`),v=s(`page-carousel-emits`),y=s(`page-carousel-delete-active-slide`),b=s(`aloha-table-props`),x=s(`aloha-table-translate`),S=s(`aloha-table-css-vars`),C=s(`aloha-page`);return o(),r(C,{"page-title":e.pageTitle},{body:l(()=>[d(u,{tag:`p`,html:`_A_CAROUSEL_COMPONENT_DESCRIPTION_`}),d(f),d(p),d(m),d(h),d(g),d(_),d(v),d(y),d(b,{data:e.dataProps},null,8,[`data`]),d(x,{data:e.dataTranslate},null,8,[`data`]),d(S,{files:`components/ACarousel`})]),_:1},8,[`page-title`])}var We=g(He,[[`render`,Ue]]);export{We as default};