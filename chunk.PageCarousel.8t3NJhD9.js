import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{t as n}from"./chunk.AlohaTableTranslate.Dl6r_SFb.js";import{Ht as r,Jt as i,Ut as a,Vt as o,_n as s,mn as c,on as l,un as u,wn as d}from"./chunk.vendor.Bjd2408Z.js";import{t as f}from"./chunk.AlohaExample.CEueonn8.js";import{_t as p,hn as m,mn as h,sn as g,t as _}from"./bundle.index.Dor-y9Rj.js";function v(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function y(){return{codeJs:`import {
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
};`}}var b={name:`PageCarouselAriaDisabled`,components:{ACarousel:p,AlohaExample:f},setup(){let e=o(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=v(),{codeJs:n}=y();return{codeHtml:t,codeJs:n,data:e}}},x={class:`a_columns a_columns_count_12`},S={class:`a_column a_column_12_touch a_column_4`},C=[`src`,`alt`];function w(e,t,n,o,s,d){let f=u(`a-carousel`),p=u(`aloha-example`);return l(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_`,description:`_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_`,props:`aria-disabled`},{default:c(()=>[r(`div`,x,[r(`div`,S,[i(f,{"aria-disabled":!0,data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,C)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var T=_(b,[[`render`,w]]);function E(){return{dataBalls:o(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`}),label:`_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_`},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`}),label:`_A_CAROUSEL_COMPONENT_LABEL_SOCCER_`},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`}),label:`_A_CAROUSEL_COMPONENT_LABEL_TENNIS_`},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`}),label:`_A_CAROUSEL_COMPONENT_LABEL_VOLLEYBALL_`}])}}function D(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_PLACEMENT_SIDES_TOP_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-placement="sides-top"
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
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_PLACEMENT_SIDES_BOTTOM_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-placement="sides-bottom"
      indicators-placement="top"
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
</div>`}}function O(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselArrowsPlacement",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};`}}var k={name:`PageCarouselArrowsPlacement`,components:{ACarousel:p,ATranslation:h,AlohaExample:f},setup(){let{dataBalls:e}=E(),{codeHtml:t}=D(),{codeJs:n}=O();return{codeHtml:t,codeJs:n,data:e}}},A={class:`a_columns a_columns_count_12`},j={class:`a_column a_column_12_touch a_column_4`},ee=[`src`,`alt`],te={class:`a_column a_column_12_touch a_column_4`},M=[`src`,`alt`];function N(e,t,n,o,s,d){let f=u(`a-translation`),p=u(`a-carousel`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_ARROWS_PLACEMENT_HEADER_`,description:`_A_CAROUSEL_GROUP_ARROWS_PLACEMENT_DESCRIPTION_`,props:`arrows-placement`},{default:c(()=>[r(`div`,A,[r(`div`,j,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_PLACEMENT_SIDES_TOP_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-placement":`sides-top`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,ee)]),_:1},8,[`data`])]),r(`div`,te,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_PLACEMENT_SIDES_BOTTOM_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-placement":`sides-bottom`,"indicators-placement":`top`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,M)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var P=_(k,[[`render`,N]]);function F(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function I(){return{codeJs:`import {
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
};`}}var L={name:`PageCarouselArrowsTrigger`,components:{ACarousel:p,AlohaExample:f,ATranslation:h},setup(){let e=o(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=F(),{codeJs:n}=I();return{codeHtml:t,codeJs:n,data:e}}},R={class:`a_columns a_columns_count_12`},z={class:`a_column a_column_12_touch a_column_4`},B=[`src`,`alt`],V={class:`a_column a_column_12_touch a_column_4`},H=[`src`,`alt`],U={class:`a_column a_column_12_touch a_column_4`},W=[`src`,`alt`],G={class:`a_column a_column_12_touch a_column_4`},K=[`src`,`alt`];function q(e,t,n,o,s,d){let f=u(`a-translation`),p=u(`a-carousel`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_`,description:`_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_`,props:`arrows-trigger`},{default:c(()=>[r(`div`,R,[r(`div`,z,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,B)]),_:1},8,[`data`])]),r(`div`,V,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`focus`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,H)]),_:1},8,[`data`])]),r(`div`,U,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_`}),i(p,{"arrows-trigger":[`hover`,`focus`],data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,W)]),_:1},8,[`data`])]),r(`div`,G,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`always`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,K)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var J=_(L,[[`render`,q]]);function Y(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_AUTOPLAY_START_"
    ></a-translation>
    <a-carousel
      :data="data"
      :autoplay-interval="3000"
      :autoplay-start="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      @play="onPlay"
      @stop="onStop"
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
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_AUTOPLAY_SHOW_"
    ></a-translation>
    <a-carousel
      :data="data"
      :autoplay-show="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      indicators-placement="bottom-start"
      key-id="id"
      @play="onPlay"
      @stop="onStop"
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
</div>`}}function X(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselAutoplay",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    const onPlay = () => {
      console.log("play");
    };

    const onStop = () => {
      console.log("stop");
    };

    return {
      data,
      onPlay,
      onStop,
    };
  },
};`}}var Z={name:`PageCarouselAutoplay`,components:{ACarousel:p,ATranslation:h,AlohaExample:f},setup(){let{dataBalls:e}=E(),t=()=>{console.log(`play`)},n=()=>{console.log(`stop`)},{codeHtml:r}=Y(),{codeJs:i}=X();return{codeHtml:r,codeJs:i,data:e,onPlay:t,onStop:n}}},Q={class:`a_columns a_columns_count_12`},ne={class:`a_column a_column_12_touch a_column_4`},re=[`src`,`alt`],ie={class:`a_column a_column_12_touch a_column_4`},ae=[`src`,`alt`];function oe(e,t,n,o,s,d){let f=u(`a-translation`),p=u(`a-carousel`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_AUTOPLAY_HEADER_`,description:`_A_CAROUSEL_GROUP_AUTOPLAY_DESCRIPTION_`,props:[`autoplay-start`,`autoplay-show`,`autoplay-interval`,`autoplay-pause-on-hover`],emits:[`play`,`stop`]},{default:c(()=>[r(`div`,Q,[r(`div`,ne,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_AUTOPLAY_START_`}),i(p,{data:e.data,"autoplay-interval":3e3,"autoplay-start":!0,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`,onPlay:e.onPlay,onStop:e.onStop},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,re)]),_:1},8,[`data`,`onPlay`,`onStop`])]),r(`div`,ie,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_AUTOPLAY_SHOW_`}),i(p,{data:e.data,"autoplay-show":!0,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"indicators-placement":`bottom-start`,"key-id":`id`,onPlay:e.onPlay,onStop:e.onStop},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,ae)]),_:1},8,[`data`,`onPlay`,`onStop`])])])]),_:1},8,[`code-html`,`code-js`])}var se=_(Z,[[`render`,oe]]);function ce(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function le(){return{codeJs:`import { 
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
};`}}var ue={name:`PageCarouselBasic`,components:{ACarousel:p,AlohaExample:f},setup(){let e=o(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),t=o(()=>[{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:n}=ce(),{codeJs:r}=le();return{codeHtml:n,codeJs:r,data:e,dataOne:t}}},de={class:`a_columns a_columns_count_12`},fe={class:`a_column a_column_12_touch a_column_4`},pe=[`src`,`alt`],me={class:`a_column a_column_12_touch a_column_4`},he=[`src`,`alt`];function ge(e,t,n,o,s,d){let f=u(`a-carousel`),p=u(`aloha-example`);return l(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:c(()=>[r(`div`,de,[r(`div`,fe,[i(f,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,pe)]),_:1},8,[`data`])]),r(`div`,me,[i(f,{data:e.dataOne,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,he)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var _e=_(ue,[[`render`,ge]]);function ve(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_8">
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      type="card"
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
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_CARD_VERTICAL_"
    ></a-translation>
    <a-carousel
      :data="data"
      :card-scale="0.7"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      direction="vertical"
      height="24rem"
      key-id="id"
      type="card"
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
</div>`}}function ye(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselCard",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};`}}var be={name:`PageCarouselCard`,components:{ACarousel:p,ATranslation:h,AlohaExample:f},setup(){let{dataBalls:e}=E(),{codeHtml:t}=ve(),{codeJs:n}=ye();return{codeHtml:t,codeJs:n,data:e}}},xe={class:`a_columns a_columns_count_12`},Se={class:`a_column a_column_12_touch a_column_8`},Ce=[`src`,`alt`],we={class:`a_column a_column_12_touch a_column_4`},Te=[`src`,`alt`];function Ee(e,t,n,o,s,d){let f=u(`a-carousel`),p=u(`a-translation`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_CARD_HEADER_`,description:`_A_CAROUSEL_GROUP_CARD_DESCRIPTION_`,props:[`type`,`card-scale`]},{default:c(()=>[r(`div`,xe,[r(`div`,Se,[i(f,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`,type:`card`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Ce)]),_:1},8,[`data`])]),r(`div`,we,[i(p,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_CARD_VERTICAL_`}),i(f,{data:e.data,"card-scale":.7,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,direction:`vertical`,height:`24rem`,"key-id":`id`,type:`card`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Te)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var De=_(be,[[`render`,Ee]]);function Oe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ke(){return{codeJs:`import {
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
};`}}var Ae={name:`PageCarouselDeleteActiveSlide`,components:{ACarousel:p,AlohaExample:f},setup(){let e=s(!0),t=o(()=>{let t=[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})}];return e.value&&t.push({id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}),t}),n=()=>{setTimeout(()=>{e.value=!1},2e3)},{codeHtml:r}=Oe(),{codeJs:i}=ke();return n(),{codeHtml:r,codeJs:i,data:t}}},je={class:`a_columns a_columns_count_12`},Me={class:`a_column a_column_12_touch a_column_4`},Ne=[`src`,`alt`];function Pe(e,t,n,o,s,d){let f=u(`a-carousel`),p=u(`aloha-example`);return l(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_DELETE_ACTIVE_SLIDE_HEADER_`,description:`_A_CAROUSEL_GROUP_DELETE_ACTIVE_SLIDE_DESCRIPTION_`},{default:c(()=>[r(`div`,je,[r(`div`,Me,[i(f,{data:e.data,"model-value":4,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Ne)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var Fe=_(Ae,[[`render`,Pe]]);function Ie(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Le(){return{codeJs:`import {
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

    const change = ({ id, item, previousId, previousItem }) => {
      console.log("change", id, item, previousId, previousItem);
    };

    return {
      change,
      data,
      init,
    };
  },
};`}}var Re={name:`PageCarouselEmits`,components:{ACarousel:p,AlohaExample:f},setup(){let e=o(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),t=({id:e,item:t})=>{console.log(`init`,e,t)},n=({id:e,item:t,previousId:n,previousItem:r})=>{console.log(`change`,e,t,n,r)},{codeHtml:r}=Ie(),{codeJs:i}=Le();return{change:n,codeHtml:r,codeJs:i,data:e,init:t}}},ze={class:`a_columns a_columns_count_12`},Be={class:`a_column a_column_12_touch a_column_4`},Ve=[`src`,`alt`];function He(e,t,n,o,s,d){let f=u(`a-carousel`),p=u(`aloha-example`);return l(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_EMITS_HEADER_`,description:`_A_CAROUSEL_GROUP_EMITS_DESCRIPTION_`,emits:[`change`,`init`]},{default:c(()=>[r(`div`,ze,[r(`div`,Be,[i(f,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`,onChange:e.change,onInit:e.init},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Ve)]),_:1},8,[`data`,`onChange`,`onInit`])])])]),_:1},8,[`code-html`,`code-js`])}var Ue=_(Re,[[`render`,He]]);function We(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ge(){return{codeJs:`import {
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
};`}}var Ke={name:`PageCarouselIndicatorsAutoLimit`,components:{ACarousel:p,AlohaExample:f,ATranslation:h},setup(){let e=o(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:5,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:6,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:7,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:8,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:9,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:10,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:11,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:12,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:13,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:14,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:15,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:16,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:17,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:18,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:19,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:20,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:21,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:22,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:23,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:24,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:25,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:26,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=We(),{codeJs:n}=Ge();return{codeHtml:t,codeJs:n,data:e}}},qe={class:`a_columns a_columns_count_12`},Je={class:`a_column a_column_12_touch a_column_4`},Ye=[`src`,`alt`];function Xe(e,t,n,o,s,f){let p=u(`a-carousel`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_DESCRIPTION_`,props:`indicators-auto-limit`},{default:c(()=>[r(`div`,qe,[r(`div`,Je,[i(p,{data:e.data,"indicators-auto-limit":!0,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:c(({item:e})=>[r(`div`,null,d(e.id),1),r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Ye)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var Ze=_(Ke,[[`render`,Xe]]);function Qe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function $e(){return{codeJs:`import {
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
};`}}var et={name:`PageCarouselIndicatorsLimit`,components:{ACarousel:p,AlohaExample:f,ATranslation:h},setup(){let e=o(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})},{id:5,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:6,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:7,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:8,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=Qe(),{codeJs:n}=$e();return{codeHtml:t,codeJs:n,data:e}}},tt={class:`a_columns a_columns_count_12`},nt={class:`a_column a_column_12_touch a_column_4`},rt=[`src`,`alt`],it={class:`a_column a_column_12_touch a_column_4`},at=[`src`,`alt`];function ot(e,t,n,o,s,f){let p=u(`a-carousel`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_LIMIT_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_LIMIT_DESCRIPTION_`,props:`indicators-limit`},{default:c(()=>[r(`div`,tt,[r(`div`,nt,[t[0]||=r(`h3`,null,[r(`strong`,{lang:`en`},`indicators-limit="6"`)],-1),i(p,{data:e.data,"indicators-limit":6,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:c(({item:e})=>[r(`div`,null,d(e.id),1),r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,rt)]),_:1},8,[`data`])]),r(`div`,it,[t[1]||=r(`h3`,null,[r(`strong`,{lang:`en`},`indicators-limit="3"`)],-1),i(p,{data:e.data,"indicators-limit":3,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"key-id":`id`},{item:c(({item:e})=>[r(`div`,null,d(e.id),1),r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,at)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var st=_(et,[[`render`,ot]]);function ct(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function lt(){return{codeJs:`import {
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
};`}}var ut={name:`PageCarouselIndicatorsType`,components:{ACarousel:p,AlohaExample:f,ATranslation:h},setup(){let e=o(()=>[{id:1,src:`./assets/Basketball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_`})},{id:2,src:`./assets/Soccer_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_`})},{id:3,src:`./assets/Tennis_ball_purple_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_`})},{id:4,src:`./assets/Volleyball_ball_red_background.png`,alt:m({placeholder:`_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_`})}]),{codeHtml:t}=ct(),{codeJs:n}=lt();return{codeHtml:t,codeJs:n,data:e}}},dt={class:`a_columns a_columns_count_12`},ft={class:`a_column a_column_12_touch a_column_4`},pt=[`src`,`alt`],mt={class:`a_column a_column_12_touch a_column_4`},ht=[`src`,`alt`];function gt(e,t,n,o,s,f){let p=u(`a-carousel`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_INDICATORS_TYPE_HEADER_`,description:`_A_CAROUSEL_GROUP_INDICATORS_TYPE_DESCRIPTION_`,props:`indicators-type`},{default:c(()=>[r(`div`,dt,[r(`div`,ft,[t[0]||=r(`h3`,null,[r(`strong`,{lang:`en`},`dots`)],-1),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"indicators-type":`dots`,"key-id":`id`},{item:c(({item:e})=>[r(`div`,null,d(e.id),1),r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,pt)]),_:1},8,[`data`])]),r(`div`,mt,[t[1]||=r(`h3`,null,[r(`strong`,{lang:`en`},`squares`)],-1),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"arrows-trigger":`hover`,"indicators-type":`squares`,"key-id":`id`},{item:c(({item:e})=>[r(`div`,null,d(e.id),1),r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,ht)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var _t=_(ut,[[`render`,gt]]);function vt(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_LABELS_OUTSIDE_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      indicators-placement="outside"
      indicators-type="labels"
      key-id="id"
      key-label="label"
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
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_LABELS_DOTS_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      key-label="label"
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
</div>`}}function yt(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselLabels",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};`}}var bt={name:`PageCarouselLabels`,components:{ACarousel:p,ATranslation:h,AlohaExample:f},setup(){let{dataBalls:e}=E(),{codeHtml:t}=vt(),{codeJs:n}=yt();return{codeHtml:t,codeJs:n,data:e}}},xt={class:`a_columns a_columns_count_12`},St={class:`a_column a_column_12_touch a_column_4`},Ct=[`src`,`alt`],wt={class:`a_column a_column_12_touch a_column_4`},Tt=[`src`,`alt`];function Et(e,t,n,o,s,d){let f=u(`a-translation`),p=u(`a-carousel`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_LABELS_HEADER_`,description:`_A_CAROUSEL_GROUP_LABELS_DESCRIPTION_`,props:[`key-label`,`indicators-type`,`indicators-placement`]},{default:c(()=>[r(`div`,xt,[r(`div`,St,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_LABELS_OUTSIDE_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"indicators-placement":`outside`,"indicators-type":`labels`,"key-id":`id`,"key-label":`label`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Ct)]),_:1},8,[`data`])]),r(`div`,wt,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_LABELS_DOTS_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`,"key-label":`label`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Tt)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var Dt=_(bt,[[`render`,Et]]);function Ot(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="data"
      :loop="false"
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
</div>`}}function kt(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselLoop",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};`}}var At={name:`PageCarouselLoop`,components:{ACarousel:p,ATranslation:h,AlohaExample:f},setup(){let{dataBalls:e}=E(),{codeHtml:t}=Ot(),{codeJs:n}=kt();return{codeHtml:t,codeJs:n,data:e}}},jt={class:`a_columns a_columns_count_12`},Mt={class:`a_column a_column_12_touch a_column_4`},Nt=[`src`,`alt`];function Pt(e,t,n,o,s,d){let f=u(`a-carousel`),p=u(`aloha-example`);return l(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_LOOP_HEADER_`,description:`_A_CAROUSEL_GROUP_LOOP_DESCRIPTION_`,props:`loop`},{default:c(()=>[r(`div`,jt,[r(`div`,Mt,[i(f,{data:e.data,loop:!1,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Nt)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var Ft=_(At,[[`render`,Pt]]);function It(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <div class="a_d_flex a_gap_2 a_mb_3 a_flex_wrap">
      <a-button
        class="a_btn a_btn_secondary"
        text="_A_CAROUSEL_COMPONENT_MODEL_PREVIOUS_"
        @click="toPrevious"
      ></a-button>
      <a-button
        class="a_btn a_btn_secondary"
        text="_A_CAROUSEL_COMPONENT_MODEL_NEXT_"
        @click="toNext"
      ></a-button>
      <a-button
        class="a_btn a_btn_secondary"
        text="_A_CAROUSEL_COMPONENT_MODEL_LAST_"
        @click="toLast"
      ></a-button>
    </div>
    <p>model: {{ model }}</p>
    <a-carousel
      ref="carouselRef"
      v-model="model"
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
</div>`}}function Lt(){return{codeJs:`import {
  computed,
  ref,
} from "vue";

import {
  AButton,
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselModel",
  components: {
    AButton,
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    const model = ref(2);
    const carouselRef = ref(undefined);

    const toPrevious = () => {
      carouselRef.value.previous();
    };

    const toNext = () => {
      carouselRef.value.next();
    };

    const toLast = () => {
      carouselRef.value.setActiveItem(4);
    };

    return {
      carouselRef,
      data,
      model,
      toLast,
      toNext,
      toPrevious,
    };
  },
};`}}var Rt={name:`PageCarouselModel`,components:{AButton:g,ACarousel:p,ATranslation:h,AlohaExample:f},setup(){let{dataBalls:e}=E(),t=s(2),n=s(void 0),r=()=>{n.value.previous()},i=()=>{n.value.next()},a=()=>{n.value.setActiveItem(4)},{codeHtml:o}=It(),{codeJs:c}=Lt();return{carouselRef:n,codeHtml:o,codeJs:c,data:e,model:t,toLast:a,toNext:i,toPrevious:r}}},zt={class:`a_columns a_columns_count_12`},Bt={class:`a_column a_column_12_touch a_column_4`},Vt={class:`a_d_flex a_gap_2 a_mb_3 a_flex_wrap`},Ht=[`src`,`alt`];function Ut(e,t,n,o,s,f){let p=u(`a-button`),m=u(`a-carousel`),h=u(`aloha-example`);return l(),a(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_MODEL_HEADER_`,description:`_A_CAROUSEL_GROUP_MODEL_DESCRIPTION_`,props:`model-value`,emits:`update:modelValue`,exposes:[`next`,`previous`,`setActiveItem`]},{default:c(()=>[r(`div`,zt,[r(`div`,Bt,[r(`div`,Vt,[i(p,{class:`a_btn a_btn_secondary`,text:`_A_CAROUSEL_COMPONENT_MODEL_PREVIOUS_`,onClick:e.toPrevious},null,8,[`onClick`]),i(p,{class:`a_btn a_btn_secondary`,text:`_A_CAROUSEL_COMPONENT_MODEL_NEXT_`,onClick:e.toNext},null,8,[`onClick`]),i(p,{class:`a_btn a_btn_secondary`,text:`_A_CAROUSEL_COMPONENT_MODEL_LAST_`,onClick:e.toLast},null,8,[`onClick`])]),r(`p`,null,`model: `+d(e.model),1),i(m,{ref:`carouselRef`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Ht)]),_:1},8,[`modelValue`,`data`])])])]),_:1},8,[`code-html`,`code-js`])}var Wt=_(Rt,[[`render`,Ut]]);function Gt(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_TRANSITION_FADE_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      transition="fade"
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
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_TRANSITION_MOTION_BLUR_"
    ></a-translation>
    <a-carousel
      :data="data"
      :motion-blur="true"
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
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_TRANSITION_NONE_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      transition="none"
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
</div>`}}function Kt(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselTransition",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};`}}var qt={name:`PageCarouselTransition`,components:{ACarousel:p,ATranslation:h,AlohaExample:f},setup(){let{dataBalls:e}=E(),{codeHtml:t}=Gt(),{codeJs:n}=Kt();return{codeHtml:t,codeJs:n,data:e}}},Jt={class:`a_columns a_columns_count_12`},Yt={class:`a_column a_column_12_touch a_column_4`},Xt=[`src`,`alt`],Zt={class:`a_column a_column_12_touch a_column_4`},Qt=[`src`,`alt`],$t={class:`a_column a_column_12_touch a_column_4`},en=[`src`,`alt`];function $(e,t,n,o,s,d){let f=u(`a-translation`),p=u(`a-carousel`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_TRANSITION_HEADER_`,description:`_A_CAROUSEL_GROUP_TRANSITION_DESCRIPTION_`,props:[`transition`,`motion-blur`]},{default:c(()=>[r(`div`,Jt,[r(`div`,Yt,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_TRANSITION_FADE_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`,transition:`fade`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Xt)]),_:1},8,[`data`])]),r(`div`,Zt,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_TRANSITION_MOTION_BLUR_`}),i(p,{data:e.data,"motion-blur":!0,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,Qt)]),_:1},8,[`data`])]),r(`div`,$t,[i(f,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_TRANSITION_NONE_`}),i(p,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,"key-id":`id`,transition:`none`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,en)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var tn=_(qt,[[`render`,$]]);function nn(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      direction="vertical"
      height="20rem"
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
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_VERTICAL_MOTION_BLUR_"
    ></a-translation>
    <a-carousel
      :data="data"
      :motion-blur="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      direction="vertical"
      height="20rem"
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
</div>`}}function rn(){return{codeJs:`import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselVertical",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};`}}var an={name:`PageCarouselVertical`,components:{ACarousel:p,ATranslation:h,AlohaExample:f},setup(){let{dataBalls:e}=E(),{codeHtml:t}=nn(),{codeJs:n}=rn();return{codeHtml:t,codeJs:n,data:e}}},on={class:`a_columns a_columns_count_12`},sn={class:`a_column a_column_12_touch a_column_4`},cn=[`src`,`alt`],ln={class:`a_column a_column_12_touch a_column_4`},un=[`src`,`alt`];function dn(e,t,n,o,s,d){let f=u(`a-carousel`),p=u(`a-translation`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CAROUSEL_GROUP_VERTICAL_HEADER_`,description:`_A_CAROUSEL_GROUP_VERTICAL_DESCRIPTION_`,props:[`direction`,`height`]},{default:c(()=>[r(`div`,on,[r(`div`,sn,[i(f,{data:e.data,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,direction:`vertical`,height:`20rem`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,cn)]),_:1},8,[`data`])]),r(`div`,ln,[i(p,{tag:`h3`,html:`_A_CAROUSEL_COMPONENT_VERTICAL_MOTION_BLUR_`}),i(f,{data:e.data,"motion-blur":!0,"aria-label":`_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_`,direction:`vertical`,height:`20rem`,"key-id":`id`},{item:c(({item:e})=>[r(`img`,{class:`a_height_auto a_width_100`,src:e.src,alt:e.alt},null,8,un)]),_:1},8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var fn=_(an,[[`render`,dn]]);function pn(){return{dataEvents:[{name:`change`,description:`_A_CAROUSEL_EVENTS_CHANGE_DESCRIPTION_`,type:`Function`},{name:`init`,description:`_A_CAROUSEL_EVENTS_INIT_DESCRIPTION_`,type:`Function`},{name:`play`,description:`_A_CAROUSEL_EVENTS_PLAY_DESCRIPTION_`,type:`Function`},{name:`stop`,description:`_A_CAROUSEL_EVENTS_STOP_DESCRIPTION_`,type:`Function`},{name:`update:modelValue`,description:`_A_CAROUSEL_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function mn(){return{dataExposes:[{name:`activeId`,description:`_A_CAROUSEL_EXPOSES_ACTIVE_ID_DESCRIPTION_`,type:`Number / String`},{name:`activeIndex`,description:`_A_CAROUSEL_EXPOSES_ACTIVE_INDEX_DESCRIPTION_`,type:`Number`},{name:`isPlaying`,description:`_A_CAROUSEL_EXPOSES_IS_PLAYING_DESCRIPTION_`,type:`Boolean`},{name:`next`,description:`_A_CAROUSEL_EXPOSES_NEXT_DESCRIPTION_`,type:`Function`},{name:`play`,description:`_A_CAROUSEL_EXPOSES_PLAY_DESCRIPTION_`,type:`Function`},{name:`previous`,description:`_A_CAROUSEL_EXPOSES_PREVIOUS_DESCRIPTION_`,type:`Function`},{name:`setActiveItem`,description:`_A_CAROUSEL_EXPOSES_SET_ACTIVE_ITEM_DESCRIPTION_`,type:`Function`},{name:`stop`,description:`_A_CAROUSEL_EXPOSES_STOP_DESCRIPTION_`,type:`Function`}]}}function hn(){let e=o(()=>m({placeholder:`_A_CAROUSEL_COMPONENT_NAME_`}));return{pageTitle:o(()=>`ACarousel${e.value?` (${e.value})`:``}`)}}function gn(){return{dataProps:[{name:`aria-label`,description:`_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String`,default:void 0,required:!0},{name:`aria-disabled`,description:`_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`arrow-previous-attributes`,description:`_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`arrow-previous-icon`,description:`_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`arrow-next-attributes`,description:`_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`arrow-next-icon`,description:`_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`arrows-show`,description:`_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`arrows-trigger`,description:`_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_`,type:`String / Array`,default:`always`,required:!1},{name:`arrows-placement`,description:`_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`sides-center`,required:!1},{name:`autoplay-interval`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_`,type:`Number`,default:5e3,required:!1},{name:`autoplay-pause-on-hover`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_PAUSE_ON_HOVER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`autoplay-show`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`autoplay-start`,description:`_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`card-scale`,description:`_A_CAROUSEL_PROPS_CARD_SCALE_DESCRIPTION_`,type:`Number`,default:.83,required:!1},{name:`data`,description:`_A_CAROUSEL_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`direction`,description:`_A_CAROUSEL_PROPS_DIRECTION_DESCRIPTION_`,type:`String`,default:`horizontal`,required:!1},{name:`disabled`,description:`_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`height`,description:`_A_CAROUSEL_PROPS_HEIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_CAROUSEL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_carousel_")`,required:!1},{name:`indicators-auto-limit`,description:`_A_CAROUSEL_PROPS_INDICATORS_AUTO_LIMIT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`indicators-limit`,description:`_A_CAROUSEL_PROPS_INDICATORS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`indicators-placement`,description:`_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom`,required:!1},{name:`indicators-show`,description:`_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`indicators-type`,description:`_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_`,type:`String`,default:`dots`,required:!1},{name:`indicator-width`,description:`_A_CAROUSEL_PROPS_INDICATOR_WIDTH_DESCRIPTION_`,type:`Number`,default:2.125,required:!1},{name:`key-id`,description:`_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-label`,description:`_A_CAROUSEL_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`loop`,description:`_A_CAROUSEL_PROPS_LOOP_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`model-value`,description:`_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`motion-blur`,description:`_A_CAROUSEL_PROPS_MOTION_BLUR_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`texts`,description:`_A_CAROUSEL_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1},{name:`transition`,description:`_A_CAROUSEL_PROPS_TRANSITION_DESCRIPTION_`,type:`String`,default:`slide`,required:!1},{name:`type`,description:`_A_CAROUSEL_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`default`,required:!1}]}}function _n(){return{dataSlots:[{name:`item`,description:`_A_CAROUSEL_SLOTS_ITEM_DESCRIPTION_`}]}}function vn(){return{dataTranslate:[`_A_CAROUSEL_NEXT_SLIDE_`,`_A_CAROUSEL_PREVIOUS_SLIDE_`,`_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_`,`_A_CAROUSEL_CONTROLS_SLIDES_`,`_A_CAROUSEL_CONTROLS_START_`,`_A_CAROUSEL_CONTROLS_STOP_`,`_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_`]}}var yn={name:`PageCarousel`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:h,PageCarouselAriaDisabled:T,PageCarouselArrowsPlacement:P,PageCarouselArrowsTrigger:J,PageCarouselAutoplay:se,PageCarouselBasic:_e,PageCarouselCard:De,PageCarouselDeleteActiveSlide:Fe,PageCarouselEmits:Ue,PageCarouselIndicatorsAutoLimit:Ze,PageCarouselIndicatorsLimit:st,PageCarouselIndicatorsType:_t,PageCarouselLabels:Dt,PageCarouselLoop:Ft,PageCarouselModel:Wt,PageCarouselTransition:tn,PageCarouselVertical:fn},setup(){let{pageTitle:e}=hn(),{dataProps:t}=gn(),{dataSlots:n}=_n(),{dataEvents:r}=pn(),{dataExposes:i}=mn(),{dataTranslate:a}=vn();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,dataTranslate:a,pageTitle:e}}};function bn(e,t,n,r,o,s){let d=u(`a-translation`),f=u(`page-carousel-basic`),p=u(`page-carousel-model`),m=u(`page-carousel-autoplay`),h=u(`page-carousel-loop`),g=u(`page-carousel-transition`),_=u(`page-carousel-card`),v=u(`page-carousel-vertical`),y=u(`page-carousel-labels`),b=u(`page-carousel-aria-disabled`),x=u(`page-carousel-arrows-trigger`),S=u(`page-carousel-arrows-placement`),C=u(`page-carousel-indicators-limit`),w=u(`page-carousel-indicators-auto-limit`),T=u(`page-carousel-indicators-type`),E=u(`page-carousel-emits`),D=u(`page-carousel-delete-active-slide`),O=u(`aloha-table-props`),k=u(`aloha-table-translate`),A=u(`aloha-table-css-vars`),j=u(`aloha-page`);return l(),a(j,{"page-title":e.pageTitle},{body:c(()=>[i(d,{tag:`p`,html:`_A_CAROUSEL_COMPONENT_DESCRIPTION_`}),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b),i(x),i(S),i(C),i(w),i(T),i(E),i(D),i(O,{data:e.dataProps},null,8,[`data`]),i(O,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),i(O,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),i(O,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),i(k,{data:e.dataTranslate},null,8,[`data`]),i(A,{files:`components/ACarousel`})]),_:1},8,[`page-title`])}var xn=_(yn,[[`render`,bn]]);export{xn as default};