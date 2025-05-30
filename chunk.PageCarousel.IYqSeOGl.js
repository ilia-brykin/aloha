import{A as N,a as w}from"./chunk.AlohaExample.Dw_9QTIQ.js";import{A as B}from"./chunk.AlohaTableProps.DO67SBBX.js";import{A as q}from"./chunk.AlohaTableTranslate.DXfbuA10.js";import{f as v,h as T,i as p,j as f,A as y,g as R,_ as h}from"./bundle.index.CE12Gl4M.js";import{t as n,d as i,h as S,r as D,A as k,O as M,a$ as $,U as b,aS as E,e as O,V as I,Y as A,Z as u}from"./chunk.vendor.bx9jdKRu.js";import{h as V,N as g,Y as U,f as C,c as G,g as W,u as j,a as H,e as Y}from"./chunk.vendor-lodash.DXsmYJeZ.js";import"./chunk.APageTabTitle.D2tthd-2.js";import"./chunk.AlohaHighlightjs.ZYRFUDZw.js";import"./chunk.ATable.BsXExFGF.js";import"./chunk.translations-ar.B6npCTuu.js";import"./chunk.translations-de.Bld6OuMN.js";import"./chunk.translations-en.06Wts6uv.js";import"./chunk.translations-es.C9Oq5Be-.js";import"./chunk.translations-fr.BN43yRJE.js";import"./chunk.translations-hr.ttlHkPRA.js";import"./chunk.translations-it.EwWHRwIB.js";import"./chunk.translations-ru.B62azy5f.js";function J(e){const t=n(e,"type");return{btnClass:i(()=>`a_carousel__arrow_${t.value}`)}}function X(e){const t=n(e,"texts"),a=n(e,"type");return{btnTitle:i(()=>{if(a.value==="previous")return t.value.previousSlide;if(a.value==="next")return t.value.nextSlide})}}const P={name:"ACarouselBtn",props:{ariaDisabled:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},disabled:{type:Boolean,required:!1},icon:{type:String,required:!1,default:void 0},texts:{type:Object,required:!0},type:{type:String,required:!0,validator:e=>["previous","next"].includes(e)}},emits:["toSlide"],setup(e){const{btnClass:t}=J(e),{btnTitle:a}=X(e);return{btnClass:t,btnTitle:a}},render(){return S(v,{class:["a_carousel__arrow",this.btnClass],ariaDisabled:this.ariaDisabled,disabled:this.disabled,iconLeft:this.icon,title:this.btnTitle,textScreenReader:this.btnTitle,type:"button",onClick:()=>this.$emit("toSlide"),...this.btnAttributes})}};function K(){return{ariaLabelTabsAttributes:i(()=>T({attr:"aria-label",placeholder:"_A_CAROUSEL_CONTROLS_SLIDES_"}))}}function F({emit:e}){return{changeActiveId:({item:r})=>{e("changeActiveId",{id:r[p]})},onPressBtn:r=>{r.keyCode===f.arrowLeft?(r.preventDefault(),e("toPreviousSlide")):r.keyCode===f.arrowRight&&(r.preventDefault(),e("toNextSlide"))}}}const Z={icons:{dots:`<svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="16" cy="15" r="10"></circle>
  <circle class="tab-background" cx="16" cy="15" r="8"></circle>
  <circle class="tab" cx="16" cy="15" r="6"></circle>
</svg>`}},z={name:"ACarouselControls",props:{activeId:{type:[String,Number],required:!0},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},parentId:{type:String,required:!0},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots"].indexOf(e)!==-1},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(e,t){const{ariaLabelTabsAttributes:a}=K(),{changeActiveId:r,onPressBtn:d}=F(t);return{ariaLabelTabsAttributes:a,changeActiveId:r,onPressBtn:d}},render(){return[S("div",{class:"a_carousel__tabs__wrapper"},[S("div",{class:["a_carousel__tabs",this.indicatorsType?`a_carousel__tabs_${this.indicatorsType}`:"a_carousel__tabs_custom"],role:"tablist",...this.ariaLabelTabsAttributes},[...this.data.map((e,t)=>{const a=t+1,r=this.activeId===e[p];return S(v,{id:`${this.parentId}_tab_${a}`,"aria-selected":!1,"aria-controls":`${this.parentId}_item_${a}`,class:["a_carousel__tabs__btn",{a_carousel__tabs__btn_active:r}],iconLeft:Z.icons.dots,disabled:this.disabled,type:"button",tabindex:r?0:-1,role:"tab",title:this.texts.controlsSlide,textScreenReader:this.texts.controlsSlide,extra:{number:a},onClick:()=>this.changeActiveId({item:e}),onKeydown:this.onPressBtn})})])])]}};function Q(e){const t=n(e,"dataCount"),a=n(e,"itemIndex"),r=n(e,"parentId"),d=n(e,"texts"),o=i(()=>a.value+1),l=i(()=>`${r.value}_item_${o.value}`);return{ariaLabelAttributes:i(()=>T({attr:"aria-label",placeholder:d.value.itemAriaLabel,extra:{count:t.value,number:o.value}})),idLocal:l}}function ee(e){const t=n(e,"activeId"),a=n(e,"item");return{isActive:i(()=>a.value[p]===t.value)}}const te={name:"ACarouselItem",props:{activeId:{type:[String,Number],required:!0},dataCount:{type:Number,required:!0},item:{type:Object,required:!0},itemIndex:{type:Number,required:!0},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["change","play","stop","update:modelValue"],setup(e){const{ariaLabelAttributes:t,idLocal:a}=Q(e),{isActive:r}=ee(e);return{ariaLabelAttributes:t,idLocal:a,isActive:r}},render(){return S("div",{id:this.idLocal,"aria-roledescription":"slide",class:["a_carousel__item",{a_carousel__item_active:this.isActive}],...this.ariaLabelAttributes},[this.$slots.item?this.$slots.item({activeId:this.activeId,dataCount:this.dataCount,item:this.item,itemIndex:this.itemIndex,isActive:this.isActive,parentId:this.parentId}):void 0])}};function ae(e,{dataLocal:t=i(()=>[])}){const a=n(e,"modelValue"),r=D(void 0),d=()=>{var _,s;V(a.value)?r.value=(s=(_=t.value)==null?void 0:_[0])==null?void 0:s[p]:r.value=a.value},o=({id:_})=>{r.value=_};return{activeId:r,changeActiveId:o,initActiveId:d,toNextSlide:()=>{var L,m;const _=g(t.value,[p,r.value]);let s;_===-1||_>=t.value.length-1?s=0:s=_+1,o({id:(m=(L=t.value)==null?void 0:L[s])==null?void 0:m[p]})},toPreviousSlide:()=>{var L,m;const _=g(t.value,[p,r.value]);let s;_===-1||_<=0?s=t.value.length-1:s=_-1,o({id:(m=(L=t.value)==null?void 0:L[s])==null?void 0:m[p]})}}}function re(e){const t=n(e,"ariaLabel"),a=n(e,"extra");return{ariaLabelAttributes:i(()=>T({attr:"aria-label",placeholder:t.value,extra:a.value}))}}function se(e){const t=n(e,"arrowsPlacement"),a=n(e,"arrowsTrigger"),r=n(e,"indicatorsPlacement"),d=i(()=>r.value?`a_carousel_tabs_${r.value}`:void 0),o=i(()=>t.value?`a_carousel_arrows_${t.value}`:void 0),l=i(()=>{const c=U(a.value),_=[];return C(c,s=>{_.push(`a_carousel_trigger_${s}`)}),_.join(" ")});return{arrowsPlacementClass:o,arrowsTriggerClass:l,indicatorsPlacementClass:d}}function _e(e){const t=n(e,"data"),a=n(e,"keyId");return{dataLocal:i(()=>{const d=G(t.value);return a.value?C(d,(o,l)=>{o[p]=W(o,a.value)||l}):C(d,(o,l)=>{o[p]=l}),d})}}function le(e){const t=k(e);return{textsLocal:i(()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",...t.value}))}}const x={name:"ACarousel",props:{ariaLabel:{type:String,required:!0},ariaDisabled:{type:Boolean,required:!1},arrowPreviousAttributes:{type:Object,required:!1,default:()=>({})},arrowPreviousIcon:{type:String,required:!1,default:$},arrowNextAttributes:{type:Object,required:!1,default:()=>({})},arrowNextIcon:{type:String,required:!1,default:M},arrowsShow:{type:Boolean,required:!1,default:!0},arrowsTrigger:{type:[String,Array],default:"always",validator:e=>{const t=U(e);return H(t)&&Y(t,a=>["always","hover","focus"].includes(a))}},arrowsPlacement:{type:String,default:"sides-center",validator:e=>["sides-center"].includes(e)},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,required:!1,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},id:{type:String,required:!1,default:()=>j("a_carousel_")},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots"].indexOf(e)!==-1},indicatorsPlacement:{type:String,required:!1,default:"bottom",validator:e=>["top","top-start","top-end","bottom","bottom-start","bottom-end"].indexOf(e)!==-1},keyId:{type:String,required:!1,default:void 0},modelValue:{type:[Number,String],required:!1,default:void 0},texts:{type:Object,required:!1,default:()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"})}},emits:["change","play","stop","update:modelValue"],setup(e){const{textsLocal:t}=le(e),{ariaLabelAttributes:a}=re(e),{arrowsPlacementClass:r,arrowsTriggerClass:d,indicatorsPlacementClass:o}=se(e),{dataLocal:l}=_e(e),{activeId:c,changeActiveId:_,initActiveId:s,toNextSlide:L,toPreviousSlide:m}=ae(e,{dataLocal:l});return s(),{activeId:c,ariaLabelAttributes:a,arrowsPlacementClass:r,arrowsTriggerClass:d,changeActiveId:_,dataLocal:l,indicatorsPlacementClass:o,textsLocal:t,toNextSlide:L,toPreviousSlide:m}},render(){return S("section",{id:this.id,"aria-roledescription":"carousel",class:["a_carousel",this.indicatorsPlacementClass,this.arrowsPlacementClass,this.arrowsTriggerClass],...this.ariaLabelAttributes},[S("div",{class:"a_carousel__inner"},[this.arrowsShow?S(P,{btnAttributes:this.arrowPreviousAttributes,disabled:this.disabled,icon:this.arrowPreviousIcon,texts:this.textsLocal,type:"previous",onToSlide:this.toPreviousSlide}):void 0,S(z,{activeId:this.activeId,autoplayInterval:this.autoplayInterval,autoplayShow:this.autoplayShow,data:this.dataLocal,disabled:this.disabled,extra:this.extra,parentId:this.id,indicatorsShow:this.indicatorsShow,indicatorsType:this.indicatorsType,texts:this.texts,onChangeActiveId:this.changeActiveId,onToNextSlide:this.toNextSlide,onToPreviousSlide:this.toPreviousSlide}),S("div",{"aria-live":"polite",class:"a_carousel__items"},[...this.dataLocal.map((e,t)=>S(te,{key:e[p],activeId:this.activeId,dataCount:this.dataLocal.length,item:e,itemIndex:t,parentId:this.id,texts:this.textsLocal},this.$slots))]),this.arrowsShow?S(P,{btnAttributes:this.arrowNextAttributes,disabled:this.disabled,icon:this.arrowNextIcon,texts:this.textsLocal,type:"next",onToSlide:this.toNextSlide}):void 0])])}};function oe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      text="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"
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
      text="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"
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
      text="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"
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
      text="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"
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
</div>`}}function ie(){return{codeJs:`import {
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
};`}}const ne={name:"PageCarouselArrowsTrigger",components:{ACarousel:x,AlohaExample:N,ATranslation:y},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:R({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:R({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:R({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:R({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:t}=oe(),{codeJs:a}=ie();return{codeHtml:t,codeJs:a,data:e}}},de={class:"a_columns a_columns_count_12"},ce={class:"a_column a_column_12_touch a_column_4"},ue=["src","alt"],Ae={class:"a_column a_column_12_touch a_column_4"},Se=["src","alt"],Oe={class:"a_column a_column_12_touch a_column_4"},pe=["src","alt"],Le={class:"a_column a_column_12_touch a_column_4"},me=["src","alt"];function Re(e,t,a,r,d,o){const l=O("a-translation"),c=O("a-carousel"),_=O("aloha-example");return I(),b(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_",description:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_",props:"arrows-trigger"},{default:E(()=>[A("div",de,[A("div",ce,[u(l,{tag:"h3",text:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"}),u(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:s})=>[A("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,ue)]),_:1},8,["data"])]),A("div",Ae,[u(l,{tag:"h3",text:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"}),u(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"focus","key-id":"id"},{item:E(({item:s})=>[A("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,Se)]),_:1},8,["data"])]),A("div",Oe,[u(l,{tag:"h3",text:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"}),u(c,{"arrows-trigger":["hover","focus"],data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:E(({item:s})=>[A("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,pe)]),_:1},8,["data"])]),A("div",Le,[u(l,{tag:"h3",text:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"}),u(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"always","key-id":"id"},{item:E(({item:s})=>[A("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,me)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ee=h(ne,[["render",Re]]);function Ce(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Te(){return{codeJs:`import { 
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
};`}}const he={name:"PageCarouselBasic",components:{ACarousel:x,AlohaExample:N},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:R({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:R({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:R({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:R({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:t}=Ce(),{codeJs:a}=Te();return{codeHtml:t,codeJs:a,data:e}}},be={class:"a_columns a_columns_count_12"},Ie={class:"a_column a_column_12_touch a_column_4"},fe=["src","alt"];function ge(e,t,a,r,d,o){const l=O("a-carousel"),c=O("aloha-example");return I(),b(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:E(()=>[A("div",be,[A("div",Ie,[u(l,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:E(({item:_})=>[A("img",{class:"a_height_auto a_width_100",src:_.src,alt:_.alt},null,8,fe)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Pe=h(he,[["render",ge]]);function Ne(){const e=i(()=>R({placeholder:"_A_CAROUSEL_COMPONENT_NAME_"}));return{pageTitle:i(()=>`ACarousel${e.value?` (${e.value})`:""}`)}}function ve(){return{dataProps:[{name:"aria-label",description:"_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:void 0,required:!0},{name:"aria-disabled",description:"_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"arrow-previous-attributes",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-previous-icon",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_",type:"String",default:"ChevronLeft",required:!1},{name:"arrow-next-attributes",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-next-icon",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_",type:"String",default:"ChevronRight",required:!1},{name:"arrows-show",description:"_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"arrows-trigger",description:"_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_",type:"String / Array",default:"always",required:!1},{name:"arrows-placement",description:"_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_",type:"String",default:"sides-center",required:!1},{name:"autoplay-interval",description:"_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_",type:"Number",default:5e3,required:!1},{name:"autoplay-show",description:"_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"autoplay-start",description:"_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"data",description:"_A_CAROUSEL_PROPS_DATA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"disabled",description:"_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"id",description:"_A_CAROUSEL_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_carousel_")',required:!1},{name:"indicators-show",description:"_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"indicators-type",description:"_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_",type:"String",default:"dots",required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"key-id",description:"_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"model-value",description:"_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Number / String",default:void 0,required:!1},{name:"texts",description:"_A_CAROUSEL_PROPS_texts_DESCRIPTION_",type:"Object",default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function ye(){return{dataTranslate:["_A_CAROUSEL_NEXT_SLIDE_","_A_CAROUSEL_PREVIOUS_SLIDE_","_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_","_A_CAROUSEL_CONTROLS_SLIDES_","_A_CAROUSEL_CONTROLS_START_","_A_CAROUSEL_CONTROLS_STOP_","_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"]}}const Ue={name:"PageCarousel",components:{AlohaPage:w,AlohaTableProps:B,AlohaTableTranslate:q,ATranslation:y,PageCarouselArrowsTrigger:Ee,PageCarouselBasic:Pe},setup(){const{pageTitle:e}=Ne(),{dataProps:t}=ve(),{dataTranslate:a}=ye();return{dataProps:t,dataTranslate:a,pageTitle:e}}};function xe(e,t,a,r,d,o){const l=O("a-translation"),c=O("page-carousel-basic"),_=O("page-carousel-arrows-trigger"),s=O("aloha-table-props"),L=O("aloha-table-translate"),m=O("aloha-page");return I(),b(m,{"page-title":e.pageTitle},{body:E(()=>[u(l,{tag:"p",html:"_A_CAROUSEL_COMPONENT_DESCRIPTION_"}),u(c),u(_),u(s,{data:e.dataProps},null,8,["data"]),u(L,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ze=h(Ue,[["render",xe]]);export{Ze as default};
