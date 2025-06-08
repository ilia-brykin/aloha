import{A as g,a as w}from"./chunk.AlohaExample.BApGRsmb.js";import{A as D}from"./chunk.AlohaTableProps.CgfYzt5r.js";import{A as q}from"./chunk.AlohaTableTranslate.4aC0d_c1.js";import{f as y,h as I,i as L,j as P,g as p,_ as R,A as U}from"./bundle.index.uEx0mqGP.js";import{t as d,d as i,h as O,r as k,A as M,O as $,a$ as V,U as h,aS as m,e as S,V as T,Y as A,Z as u}from"./chunk.vendor.COYgx38y.js";import{h as G,N,Y as B,f as b,c as H,g as j,u as W,a as J,e as Y}from"./chunk.vendor-lodash.DdGPhwvj.js";import"./chunk.APageTabTitle.CVrJcO3m.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.DZyKqP_E.js";import"./chunk.translations-ar.b162dXrG.js";import"./chunk.translations-de.Bmf_p3W1.js";import"./chunk.translations-en.7H3HHq0Y.js";import"./chunk.translations-es.BNEf9Gj8.js";import"./chunk.translations-fr.CB5Ou-2i.js";import"./chunk.translations-hr.722iD7RH.js";import"./chunk.translations-it.DEMf9FEV.js";import"./chunk.translations-ru.DaYIq0kx.js";function K(e){const t=d(e,"type");return{btnClass:i(()=>`a_carousel__arrow_${t.value}`)}}function X(e){const t=d(e,"texts"),a=d(e,"type");return{btnTitle:i(()=>{if(a.value==="previous")return t.value.previousSlide;if(a.value==="next")return t.value.nextSlide})}}const v={name:"ACarouselBtn",props:{ariaDisabled:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},disabled:{type:Boolean,required:!1},icon:{type:String,required:!1,default:void 0},texts:{type:Object,required:!0},type:{type:String,required:!0,validator:e=>["previous","next"].includes(e)}},emits:["toSlide"],setup(e){const{btnClass:t}=K(e),{btnTitle:a}=X(e);return{btnClass:t,btnTitle:a}},render(){return O(y,{class:["a_carousel__arrow",this.btnClass],ariaDisabled:this.ariaDisabled,disabled:this.disabled,iconLeft:this.icon,title:this.btnTitle,textScreenReader:this.btnTitle,type:"button",onClick:()=>this.$emit("toSlide"),...this.btnAttributes})}};function F(){return{ariaLabelTabsAttributes:i(()=>I({attr:"aria-label",placeholder:"_A_CAROUSEL_CONTROLS_SLIDES_"}))}}function Z({emit:e}){return{changeActiveId:({item:r})=>{e("changeActiveId",{id:r[L]})},onPressBtn:r=>{r.keyCode===P.arrowLeft?(r.preventDefault(),e("toPreviousSlide")):r.keyCode===P.arrowRight&&(r.preventDefault(),e("toNextSlide"))}}}const z={icons:{dots:`<svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="16" cy="15" r="10"></circle>
  <circle class="tab-background" cx="16" cy="15" r="8"></circle>
  <circle class="tab" cx="16" cy="15" r="6"></circle>
</svg>`}},Q={name:"ACarouselControls",props:{activeId:{type:[String,Number],required:!0},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},parentId:{type:String,required:!0},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots"].indexOf(e)!==-1},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(e,t){const{ariaLabelTabsAttributes:a}=F(),{changeActiveId:r,onPressBtn:n}=Z(t);return{ariaLabelTabsAttributes:a,changeActiveId:r,onPressBtn:n}},render(){return[O("div",{class:"a_carousel__tabs__wrapper"},[O("div",{class:["a_carousel__tabs",this.indicatorsType?`a_carousel__tabs_${this.indicatorsType}`:"a_carousel__tabs_custom"],role:"tablist",...this.ariaLabelTabsAttributes},[...this.data.map((e,t)=>{const a=t+1,r=this.activeId===e[L];return O(y,{id:`${this.parentId}_tab_${a}`,"aria-selected":!1,"aria-controls":`${this.parentId}_item_${a}`,class:["a_carousel__tabs__btn",{a_carousel__tabs__btn_active:r}],iconLeft:z.icons.dots,disabled:this.disabled,type:"button",tabindex:r?0:-1,role:"tab",title:this.texts.controlsSlide,textScreenReader:this.texts.controlsSlide,extra:{number:a},onClick:()=>this.changeActiveId({item:e}),onKeydown:this.onPressBtn})})])])]}};function ee(e){const t=d(e,"dataCount"),a=d(e,"itemIndex"),r=d(e,"parentId"),n=d(e,"texts"),o=i(()=>a.value+1),l=i(()=>`${r.value}_item_${o.value}`);return{ariaLabelAttributes:i(()=>I({attr:"aria-label",placeholder:n.value.itemAriaLabel,extra:{count:t.value,number:o.value}})),idLocal:l}}function te(e){const t=d(e,"activeId"),a=d(e,"item");return{isActive:i(()=>a.value[L]===t.value)}}const ae={name:"ACarouselItem",props:{activeId:{type:[String,Number],required:!0},dataCount:{type:Number,required:!0},item:{type:Object,required:!0},itemIndex:{type:Number,required:!0},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["change","play","stop","update:modelValue"],setup(e){const{ariaLabelAttributes:t,idLocal:a}=ee(e),{isActive:r}=te(e);return{ariaLabelAttributes:t,idLocal:a,isActive:r}},render(){return O("div",{id:this.idLocal,"aria-roledescription":"slide",class:["a_carousel__item",{a_carousel__item_active:this.isActive}],...this.ariaLabelAttributes},[this.$slots.item?this.$slots.item({activeId:this.activeId,dataCount:this.dataCount,item:this.item,itemIndex:this.itemIndex,isActive:this.isActive,parentId:this.parentId}):void 0])}};function re(e,{dataLocal:t=i(()=>[])}){const a=d(e,"modelValue"),r=k(void 0),n=()=>{var _,s;G(a.value)?r.value=(s=(_=t.value)==null?void 0:_[0])==null?void 0:s[L]:r.value=a.value},o=({id:_})=>{r.value=_};return{activeId:r,changeActiveId:o,initActiveId:n,toNextSlide:()=>{var E,C;const _=N(t.value,[L,r.value]);let s;_===-1||_>=t.value.length-1?s=0:s=_+1,o({id:(C=(E=t.value)==null?void 0:E[s])==null?void 0:C[L]})},toPreviousSlide:()=>{var E,C;const _=N(t.value,[L,r.value]);let s;_===-1||_<=0?s=t.value.length-1:s=_-1,o({id:(C=(E=t.value)==null?void 0:E[s])==null?void 0:C[L]})}}}function se(e){const t=d(e,"ariaLabel"),a=d(e,"extra");return{ariaLabelAttributes:i(()=>I({attr:"aria-label",placeholder:t.value,extra:a.value}))}}function _e(e){const t=d(e,"arrowsPlacement"),a=d(e,"arrowsTrigger"),r=d(e,"indicatorsPlacement"),n=i(()=>r.value?`a_carousel_tabs_${r.value}`:void 0),o=i(()=>t.value?`a_carousel_arrows_${t.value}`:void 0),l=i(()=>{const c=B(a.value),_=[];return b(c,s=>{_.push(`a_carousel_trigger_${s}`)}),_.join(" ")});return{arrowsPlacementClass:o,arrowsTriggerClass:l,indicatorsPlacementClass:n}}function le(e){const t=d(e,"data"),a=d(e,"keyId");return{dataLocal:i(()=>{const n=H(t.value);return a.value?b(n,(o,l)=>{o[L]=j(o,a.value)||l}):b(n,(o,l)=>{o[L]=l}),n})}}function oe(e){const t=M(e);return{textsLocal:i(()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",...t.value}))}}const f={name:"ACarousel",props:{ariaLabel:{type:String,required:!0},ariaDisabled:{type:Boolean,required:!1},arrowPreviousAttributes:{type:Object,required:!1,default:()=>({})},arrowPreviousIcon:{type:String,required:!1,default:V},arrowNextAttributes:{type:Object,required:!1,default:()=>({})},arrowNextIcon:{type:String,required:!1,default:$},arrowsShow:{type:Boolean,required:!1,default:!0},arrowsTrigger:{type:[String,Array],default:"always",validator:e=>{const t=B(e);return J(t)&&Y(t,a=>["always","hover","focus"].includes(a))}},arrowsPlacement:{type:String,default:"sides-center",validator:e=>["sides-center"].includes(e)},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,required:!1,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},id:{type:String,required:!1,default:()=>W("a_carousel_")},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots"].indexOf(e)!==-1},indicatorsPlacement:{type:String,required:!1,default:"bottom",validator:e=>["top","top-start","top-end","bottom","bottom-start","bottom-end"].indexOf(e)!==-1},keyId:{type:String,required:!1,default:void 0},modelValue:{type:[Number,String],required:!1,default:void 0},texts:{type:Object,required:!1,default:()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"})}},emits:["change","play","stop","update:modelValue"],setup(e){const{textsLocal:t}=oe(e),{ariaLabelAttributes:a}=se(e),{arrowsPlacementClass:r,arrowsTriggerClass:n,indicatorsPlacementClass:o}=_e(e),{dataLocal:l}=le(e),{activeId:c,changeActiveId:_,initActiveId:s,toNextSlide:E,toPreviousSlide:C}=re(e,{dataLocal:l});return s(),{activeId:c,ariaLabelAttributes:a,arrowsPlacementClass:r,arrowsTriggerClass:n,changeActiveId:_,dataLocal:l,indicatorsPlacementClass:o,textsLocal:t,toNextSlide:E,toPreviousSlide:C}},render(){return O("section",{id:this.id,"aria-roledescription":"carousel",class:["a_carousel",this.indicatorsPlacementClass,this.arrowsPlacementClass,this.arrowsTriggerClass],...this.ariaLabelAttributes},[O("div",{class:"a_carousel__inner"},[this.arrowsShow?O(v,{btnAttributes:this.arrowPreviousAttributes,disabled:this.disabled,icon:this.arrowPreviousIcon,texts:this.textsLocal,type:"previous",onToSlide:this.toPreviousSlide}):void 0,O(Q,{activeId:this.activeId,autoplayInterval:this.autoplayInterval,autoplayShow:this.autoplayShow,data:this.dataLocal,disabled:this.disabled,extra:this.extra,parentId:this.id,indicatorsShow:this.indicatorsShow,indicatorsType:this.indicatorsType,texts:this.texts,onChangeActiveId:this.changeActiveId,onToNextSlide:this.toNextSlide,onToPreviousSlide:this.toPreviousSlide}),O("div",{"aria-live":"polite",class:"a_carousel__items"},[...this.dataLocal.map((e,t)=>O(ae,{key:e[L],activeId:this.activeId,dataCount:this.dataLocal.length,item:e,itemIndex:t,parentId:this.id,texts:this.textsLocal},this.$slots))]),this.arrowsShow?O(v,{btnAttributes:this.arrowNextAttributes,disabled:this.disabled,icon:this.arrowNextIcon,texts:this.textsLocal,type:"next",onToSlide:this.toNextSlide}):void 0])])}};function ie(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ne(){return{codeJs:`import {
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
};`}}const de={name:"PageCarouselAriaDisabled",components:{ACarousel:f,AlohaExample:g},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:t}=ie(),{codeJs:a}=ne();return{codeHtml:t,codeJs:a,data:e}}},ce={class:"a_columns a_columns_count_12"},ue={class:"a_column a_column_12_touch a_column_4"},Ae=["src","alt"];function Se(e,t,a,r,n,o){const l=S("a-carousel"),c=S("aloha-example");return T(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_",description:"_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_",props:"aria-disabled"},{default:m(()=>[A("div",ce,[A("div",ue,[u(l,{"aria-disabled":!0,data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:m(({item:_})=>[A("img",{class:"a_height_auto a_width_100",src:_.src,alt:_.alt},null,8,Ae)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const pe=R(de,[["render",Se]]);function Oe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Le(){return{codeJs:`import {
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
};`}}const me={name:"PageCarouselArrowsTrigger",components:{ACarousel:f,AlohaExample:g,ATranslation:U},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:t}=Oe(),{codeJs:a}=Le();return{codeHtml:t,codeJs:a,data:e}}},Ee={class:"a_columns a_columns_count_12"},Ce={class:"a_column a_column_12_touch a_column_4"},Re=["src","alt"],he={class:"a_column a_column_12_touch a_column_4"},Te=["src","alt"],be={class:"a_column a_column_12_touch a_column_4"},ge=["src","alt"],Ie={class:"a_column a_column_12_touch a_column_4"},fe=["src","alt"];function Pe(e,t,a,r,n,o){const l=S("a-translation"),c=S("a-carousel"),_=S("aloha-example");return T(),h(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_",description:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_",props:"arrows-trigger"},{default:m(()=>[A("div",Ee,[A("div",Ce,[u(l,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"}),u(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:m(({item:s})=>[A("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,Re)]),_:1},8,["data"])]),A("div",he,[u(l,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"}),u(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"focus","key-id":"id"},{item:m(({item:s})=>[A("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,Te)]),_:1},8,["data"])]),A("div",be,[u(l,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"}),u(c,{"arrows-trigger":["hover","focus"],data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:m(({item:s})=>[A("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,ge)]),_:1},8,["data"])]),A("div",Ie,[u(l,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"}),u(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"always","key-id":"id"},{item:m(({item:s})=>[A("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,fe)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ne=R(me,[["render",Pe]]);function ve(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ye(){return{codeJs:`import { 
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
    
    return {
      data,
    };
  },
};`}}const Ue={name:"PageCarouselBasic",components:{ACarousel:f,AlohaExample:g},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:p({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:t}=ve(),{codeJs:a}=ye();return{codeHtml:t,codeJs:a,data:e}}},Be={class:"a_columns a_columns_count_12"},xe={class:"a_column a_column_12_touch a_column_4"},we=["src","alt"];function De(e,t,a,r,n,o){const l=S("a-carousel"),c=S("aloha-example");return T(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:m(()=>[A("div",Be,[A("div",xe,[u(l,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:m(({item:_})=>[A("img",{class:"a_height_auto a_width_100",src:_.src,alt:_.alt},null,8,we)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const qe=R(Ue,[["render",De]]);function ke(){const e=i(()=>p({placeholder:"_A_CAROUSEL_COMPONENT_NAME_"}));return{pageTitle:i(()=>`ACarousel${e.value?` (${e.value})`:""}`)}}function Me(){return{dataProps:[{name:"aria-label",description:"_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:void 0,required:!0},{name:"aria-disabled",description:"_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"arrow-previous-attributes",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-previous-icon",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_",type:"String",default:"ChevronLeft",required:!1},{name:"arrow-next-attributes",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-next-icon",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_",type:"String",default:"ChevronRight",required:!1},{name:"arrows-show",description:"_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"arrows-trigger",description:"_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_",type:"String / Array",default:"always",required:!1},{name:"arrows-placement",description:"_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_",type:"String",default:"sides-center",required:!1},{name:"autoplay-interval",description:"_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_",type:"Number",default:5e3,required:!1},{name:"autoplay-show",description:"_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"autoplay-start",description:"_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"data",description:"_A_CAROUSEL_PROPS_DATA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"disabled",description:"_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"id",description:"_A_CAROUSEL_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_carousel_")',required:!1},{name:"indicators-show",description:"_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"indicators-type",description:"_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_",type:"String",default:"dots",required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"key-id",description:"_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"model-value",description:"_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Number / String",default:void 0,required:!1},{name:"texts",description:"_A_CAROUSEL_PROPS_texts_DESCRIPTION_",type:"Object",default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function $e(){return{dataTranslate:["_A_CAROUSEL_NEXT_SLIDE_","_A_CAROUSEL_PREVIOUS_SLIDE_","_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_","_A_CAROUSEL_CONTROLS_SLIDES_","_A_CAROUSEL_CONTROLS_START_","_A_CAROUSEL_CONTROLS_STOP_","_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"]}}const Ve={name:"PageCarousel",components:{AlohaPage:w,AlohaTableProps:D,AlohaTableTranslate:q,ATranslation:U,PageCarouselAriaDisabled:pe,PageCarouselArrowsTrigger:Ne,PageCarouselBasic:qe},setup(){const{pageTitle:e}=ke(),{dataProps:t}=Me(),{dataTranslate:a}=$e();return{dataProps:t,dataTranslate:a,pageTitle:e}}};function Ge(e,t,a,r,n,o){const l=S("a-translation"),c=S("page-carousel-basic"),_=S("page-carousel-aria-disabled"),s=S("page-carousel-arrows-trigger"),E=S("aloha-table-props"),C=S("aloha-table-translate"),x=S("aloha-page");return T(),h(x,{"page-title":e.pageTitle},{body:m(()=>[u(l,{tag:"p",html:"_A_CAROUSEL_COMPONENT_DESCRIPTION_"}),u(c),u(_),u(s),u(E,{data:e.dataProps},null,8,["data"]),u(C,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const lt=R(Ve,[["render",Ge]]);export{lt as default};
