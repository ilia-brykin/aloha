import{A as f,a as F}from"./chunk.AlohaExample.pgQAErQc.js";import{A as Z}from"./chunk.AlohaTableProps.CGuf9UeV.js";import{A as z}from"./chunk.AlohaTableTranslate.DlVQ64rU.js";import{f as W,h as q,i as m,j as Y,k as M,g as _,_ as b,A as k}from"./bundle.index.DjkwEffs.js";import{t as L,d,h as S,r as w,A as Q,a$ as ee,O as ae,f as te,B as _e,o as le,U as h,aS as p,e as O,V as R,Y as n,Z as A,aT as V}from"./chunk.vendor.COYgx38y.js";import{h as j,N as H,Y as J,f as D,c as se,g as y,M as re,Z as oe,v as ne,X as ie,V as de,u as ce,a as ue,e as Ae}from"./chunk.vendor-lodash.xyEKcfD7.js";import"./chunk.APageTabTitle.BoB0DJyZ.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.V_JQ4p8f.js";import"./chunk.translations-ar.MHrHmKBz.js";import"./chunk.translations-de.DQiYqlBF.js";import"./chunk.translations-en.BgiBVTBl.js";import"./chunk.translations-es.CBVMShne.js";import"./chunk.translations-fr.C25r9YaA.js";import"./chunk.translations-hr.BLsk1jQ2.js";import"./chunk.translations-it.vtE5iXku.js";import"./chunk.translations-ru.BEr6oupc.js";function Le(e){const a=L(e,"type");return{btnClass:d(()=>`a_carousel__arrow_${a.value}`)}}function Oe(e){const a=L(e,"texts"),t=L(e,"type");return{btnTitle:d(()=>{if(t.value==="previous")return a.value.previousSlide;if(t.value==="next")return a.value.nextSlide})}}const G={name:"ACarouselBtn",props:{ariaDisabled:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},disabled:{type:Boolean,required:!1},icon:{type:String,required:!1,default:void 0},texts:{type:Object,required:!0},type:{type:String,required:!0,validator:e=>["previous","next"].includes(e)}},emits:["toSlide"],setup(e){const{btnClass:a}=Le(e),{btnTitle:t}=Oe(e);return{btnClass:a,btnTitle:t}},render(){return S(W,{class:["a_carousel__arrow",this.btnClass],ariaDisabled:this.ariaDisabled,disabled:this.disabled,iconLeft:this.icon,title:this.btnTitle,textScreenReader:this.btnTitle,type:"button",onClick:()=>this.$emit("toSlide"),...this.btnAttributes})}};function pe(){return{ariaLabelTabsAttributes:d(()=>q({attr:"aria-label",placeholder:"_A_CAROUSEL_CONTROLS_SLIDES_"}))}}function Te({emit:e}){return{changeActiveId:({item:s})=>{e("changeActiveId",{id:s[m]})},onPressBtn:s=>{s.keyCode===Y.arrowLeft?(s.preventDefault(),e("toPreviousSlide")):s.keyCode===Y.arrowRight&&(s.preventDefault(),e("toNextSlide"))}}}const Ee={icons:{dots:`<svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="16" cy="15" r="10"></circle>
  <circle class="tab-background" cx="16" cy="15" r="8"></circle>
  <circle class="tab" cx="16" cy="15" r="6"></circle>
</svg>`}},Se={name:"ACarouselControls",props:{activeId:{type:[String,Number],required:!0},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},parentId:{type:String,required:!0},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots"].indexOf(e)!==-1},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(e,a){const{ariaLabelTabsAttributes:t}=pe(),{changeActiveId:s,onPressBtn:u}=Te(a);return{ariaLabelTabsAttributes:t,changeActiveId:s,onPressBtn:u}},render(){return this.data.length<=1?null:[S("div",{class:"a_carousel__tabs__wrapper"},[S("div",{class:["a_carousel__tabs",this.indicatorsType?`a_carousel__tabs_${this.indicatorsType}`:"a_carousel__tabs_custom"],role:"tablist",...this.ariaLabelTabsAttributes},[...this.data.map(e=>{const a=this.activeId===e[m],s=e[M]+1;return S(W,{id:`${this.parentId}_tab_${s}`,"aria-selected":!1,"aria-controls":`${this.parentId}_item_${s}`,class:["a_carousel__tabs__btn",{a_carousel__tabs__btn_active:a}],iconLeft:Ee.icons.dots,disabled:this.disabled,type:"button",tabindex:a?0:-1,role:"tab",title:this.texts.controlsSlide,textScreenReader:this.texts.controlsSlide,extra:{number:s},onClick:()=>this.changeActiveId({item:e}),onKeydown:this.onPressBtn})})])])]}};function Ce(e){const a=L(e,"dataCount"),t=L(e,"itemIndex"),s=L(e,"parentId"),u=L(e,"texts"),i=d(()=>t.value+1),r=d(()=>`${s.value}_item_${i.value}`);return{ariaLabelAttributes:d(()=>q({attr:"aria-label",placeholder:u.value.itemAriaLabel,extra:{count:a.value,number:i.value}})),idLocal:r}}function me(e){const a=L(e,"activeId"),t=L(e,"item");return{isActive:d(()=>t.value[m]===a.value)}}const ge={name:"ACarouselItem",props:{activeId:{type:[String,Number],required:!0},dataCount:{type:Number,required:!0},item:{type:Object,required:!0},itemIndex:{type:Number,required:!0},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["change","play","stop","update:modelValue"],setup(e){const{ariaLabelAttributes:a,idLocal:t}=Ce(e),{isActive:s}=me(e);return{ariaLabelAttributes:a,idLocal:t,isActive:s}},render(){return S("div",{id:this.idLocal,"aria-roledescription":"slide",class:["a_carousel__item",{a_carousel__item_active:this.isActive}],...this.ariaLabelAttributes},[this.$slots.item?this.$slots.item({activeId:this.activeId,dataCount:this.dataCount,item:this.item,itemIndex:this.itemIndex,isActive:this.isActive,parentId:this.parentId}):void 0])}};function be(e,{dataLocal:a=d(()=>[])}){const t=L(e,"modelValue"),s=w(void 0),u=()=>{var l,o;j(t.value)?s.value=(o=(l=a.value)==null?void 0:l[0])==null?void 0:o[m]:s.value=t.value},i=({id:l})=>{s.value=l};return{activeId:s,changeActiveId:i,initActiveId:u,toNextSlide:()=>{var T,C;const l=H(a.value,[m,s.value]);let o;l===-1||l>=a.value.length-1?o=0:o=l+1,i({id:(C=(T=a.value)==null?void 0:T[o])==null?void 0:C[m]})},toPreviousSlide:()=>{var T,C;const l=H(a.value,[m,s.value]);let o;l===-1||l<=0?o=a.value.length-1:o=l-1,i({id:(C=(T=a.value)==null?void 0:T[o])==null?void 0:C[m]})}}}function he(e){const a=L(e,"ariaLabel"),t=L(e,"extra");return{ariaLabelAttributes:d(()=>q({attr:"aria-label",placeholder:a.value,extra:t.value}))}}function Re(e){const a=L(e,"arrowsPlacement"),t=L(e,"arrowsTrigger"),s=L(e,"indicatorsPlacement"),u=d(()=>s.value?`a_carousel_tabs_${s.value}`:void 0),i=d(()=>a.value?`a_carousel_arrows_${a.value}`:void 0),r=d(()=>{const c=J(t.value),l=[];return D(c,o=>{l.push(`a_carousel_trigger_${o}`)}),l.join(" ")});return{arrowsPlacementClass:i,arrowsTriggerClass:r,indicatorsPlacementClass:u}}function Ne(e){const a=L(e,"data"),t=L(e,"keyId");return{dataLocal:d(()=>{const u=se(a.value);return t.value?D(u,(i,r)=>{i[m]=y(i,t.value)||r,i[M]=r}):D(u,(i,r)=>{i[m]=r,i[M]=r}),u})}}function Pe(e,{dataLocal:a=d(()=>[])}){const t=L(e,"indicatorsAutoLimit"),s=L(e,"indicatorsLimit"),u=L(e,"indicatorsShow"),i=L(e,"indicatorWidth"),r=w(void 0),c=w(0);let l=null;const o=d(()=>u.value&&t.value),T=d(()=>{if(!o.value)return s.value;const E=re.floor(c.value/i.value);return s.value?oe([E,s.value]):E}),C=()=>{l||!o.value||(l=new ResizeObserver(E=>{for(const g of E)c.value=g.contentRect.width}),r.value&&l.observe(r.value))},N=()=>{l&&r.value&&l.unobserve(r.value)},P=d(()=>{const E=T.value;if(j(E)||E>=a.value.length)return a.value;const g=0,I=a.value.length-1,B=E-2,K=I/(B+1),U=[];U.push({index:g,item:y(a.value,g)});for(let x=1;x<=B;x++){const $=ne(x*K);U.push({index:$,item:y(a.value,$)})}U.push({index:I,item:y(a.value,I)});const X=ie(U,"index");return de(X,"item")});return{carouselRef:r,indicatorsData:P,initObserver:C,removeObserver:N,useObserver:o}}function Ie(e){const a=Q(e);return{textsLocal:d(()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",...a.value}))}}const v={name:"ACarousel",props:{ariaDisabled:{type:Boolean,required:!1},ariaLabel:{type:String,required:!0},arrowNextAttributes:{type:Object,required:!1,default:()=>({})},arrowNextIcon:{type:String,required:!1,default:ae},arrowPreviousAttributes:{type:Object,required:!1,default:()=>({})},arrowPreviousIcon:{type:String,required:!1,default:ee},arrowsPlacement:{type:String,default:"sides-center",validator:e=>["sides-center"].includes(e)},arrowsShow:{type:Boolean,required:!1,default:!0},arrowsTrigger:{type:[String,Array],default:"always",validator:e=>{const a=J(e);return ue(a)&&Ae(a,t=>["always","hover","focus"].includes(t))}},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,required:!1,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},id:{type:String,required:!1,default:()=>ce("a_carousel_")},indicatorsAutoLimit:{type:Boolean,required:!1,default:!1},indicatorsLimit:{type:Number,required:!1,default:void 0},indicatorsPlacement:{type:String,required:!1,default:"bottom",validator:e=>["top","top-start","top-end","bottom","bottom-start","bottom-end"].indexOf(e)!==-1},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots"].indexOf(e)!==-1},indicatorWidth:{type:Number,required:!1,default:34},keyId:{type:String,required:!1,default:void 0},modelValue:{type:[Number,String],required:!1,default:void 0},texts:{type:Object,required:!1,default:()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"})}},emits:["change","play","stop","update:modelValue"],setup(e){const{textsLocal:a}=Ie(e),{ariaLabelAttributes:t}=he(e),{arrowsPlacementClass:s,arrowsTriggerClass:u,indicatorsPlacementClass:i}=Re(e),{dataLocal:r}=Ne(e),{carouselRef:c,indicatorsData:l,initObserver:o,removeObserver:T,useObserver:C}=Pe(e,{dataLocal:r}),{activeId:N,changeActiveId:P,initActiveId:E,toNextSlide:g,toPreviousSlide:I}=be(e,{dataLocal:r});return E(),te(C,B=>{B?o():T()}),_e(()=>{o()}),le(()=>{T()}),{activeId:N,ariaLabelAttributes:t,arrowsPlacementClass:s,arrowsTriggerClass:u,carouselRef:c,changeActiveId:P,dataLocal:r,indicatorsData:l,indicatorsPlacementClass:i,textsLocal:a,toNextSlide:g,toPreviousSlide:I}},render(){return S("section",{id:this.id,"aria-roledescription":"carousel",class:["a_carousel",this.indicatorsPlacementClass,this.arrowsPlacementClass,this.arrowsTriggerClass],...this.ariaLabelAttributes},[S("div",{ref:"carouselRef",class:"a_carousel__inner"},[this.arrowsShow?S(G,{btnAttributes:this.arrowPreviousAttributes,disabled:this.disabled,icon:this.arrowPreviousIcon,texts:this.textsLocal,type:"previous",onToSlide:this.toPreviousSlide}):void 0,S(Se,{activeId:this.activeId,autoplayInterval:this.autoplayInterval,autoplayShow:this.autoplayShow,data:this.indicatorsData,disabled:this.disabled,extra:this.extra,parentId:this.id,indicatorsShow:this.indicatorsShow,indicatorsType:this.indicatorsType,texts:this.texts,onChangeActiveId:this.changeActiveId,onToNextSlide:this.toNextSlide,onToPreviousSlide:this.toPreviousSlide}),S("div",{"aria-live":"polite",class:"a_carousel__items"},[...this.dataLocal.map((e,a)=>S(ge,{key:e[m],activeId:this.activeId,dataCount:this.dataLocal.length,item:e,itemIndex:a,parentId:this.id,texts:this.textsLocal},this.$slots))]),this.arrowsShow?S(G,{btnAttributes:this.arrowNextAttributes,disabled:this.disabled,icon:this.arrowNextIcon,texts:this.textsLocal,type:"next",onToSlide:this.toNextSlide}):void 0])])}};function fe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ve(){return{codeJs:`import {
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
};`}}const Be={name:"PageCarouselAriaDisabled",components:{ACarousel:v,AlohaExample:f},setup(){const e=d(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=fe(),{codeJs:t}=ve();return{codeHtml:a,codeJs:t,data:e}}},Ue={class:"a_columns a_columns_count_12"},ye={class:"a_column a_column_12_touch a_column_4"},ke=["src","alt"];function xe(e,a,t,s,u,i){const r=O("a-carousel"),c=O("aloha-example");return R(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_",description:"_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_",props:"aria-disabled"},{default:p(()=>[n("div",Ue,[n("div",ye,[A(r,{"aria-disabled":!0,data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:p(({item:l})=>[n("img",{class:"a_height_auto a_width_100",src:l.src,alt:l.alt},null,8,ke)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Me=b(Be,[["render",xe]]);function we(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ve(){return{codeJs:`import {
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
};`}}const De={name:"PageCarouselArrowsTrigger",components:{ACarousel:v,AlohaExample:f,ATranslation:k},setup(){const e=d(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=we(),{codeJs:t}=Ve();return{codeHtml:a,codeJs:t,data:e}}},qe={class:"a_columns a_columns_count_12"},$e={class:"a_column a_column_12_touch a_column_4"},Ye=["src","alt"],He={class:"a_column a_column_12_touch a_column_4"},Ge=["src","alt"],We={class:"a_column a_column_12_touch a_column_4"},je=["src","alt"],Je={class:"a_column a_column_12_touch a_column_4"},Ke=["src","alt"];function Xe(e,a,t,s,u,i){const r=O("a-translation"),c=O("a-carousel"),l=O("aloha-example");return R(),h(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_",description:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_",props:"arrows-trigger"},{default:p(()=>[n("div",qe,[n("div",$e,[A(r,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"}),A(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:p(({item:o})=>[n("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Ye)]),_:1},8,["data"])]),n("div",He,[A(r,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"}),A(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"focus","key-id":"id"},{item:p(({item:o})=>[n("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Ge)]),_:1},8,["data"])]),n("div",We,[A(r,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"}),A(c,{"arrows-trigger":["hover","focus"],data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:p(({item:o})=>[n("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,je)]),_:1},8,["data"])]),n("div",Je,[A(r,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"}),A(c,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"always","key-id":"id"},{item:p(({item:o})=>[n("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Ke)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Fe=b(De,[["render",Xe]]);function Ze(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ze(){return{codeJs:`import { 
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
};`}}const Qe={name:"PageCarouselBasic",components:{ACarousel:v,AlohaExample:f},setup(){const e=d(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Ze(),{codeJs:t}=ze();return{codeHtml:a,codeJs:t,data:e}}},ea={class:"a_columns a_columns_count_12"},aa={class:"a_column a_column_12_touch a_column_4"},ta=["src","alt"];function _a(e,a,t,s,u,i){const r=O("a-carousel"),c=O("aloha-example");return R(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:p(()=>[n("div",ea,[n("div",aa,[A(r,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:p(({item:l})=>[n("img",{class:"a_height_auto a_width_100",src:l.src,alt:l.alt},null,8,ta)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const la=b(Qe,[["render",_a]]);function sa(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ra(){return{codeJs:`import {
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
};`}}const oa={name:"PageCarouselIndicatorsAutoLimit",components:{ACarousel:v,AlohaExample:f,ATranslation:k},setup(){const e=d(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:9,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:10,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:11,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:12,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:13,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:14,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:15,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:16,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:17,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:18,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:19,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:20,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:21,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:22,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:23,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:24,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:25,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:26,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=sa(),{codeJs:t}=ra();return{codeHtml:a,codeJs:t,data:e}}},na={class:"a_columns a_columns_count_12"},ia={class:"a_column a_column_12_touch a_column_4"},da=["src","alt"];function ca(e,a,t,s,u,i){const r=O("a-carousel"),c=O("aloha-example");return R(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_DESCRIPTION_",props:"indicators-auto-limit"},{default:p(()=>[n("div",na,[n("div",ia,[A(r,{data:e.data,"indicators-auto-limit":!0,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:p(({item:l})=>[n("div",null,V(l.id),1),n("img",{class:"a_height_auto a_width_100",src:l.src,alt:l.alt},null,8,da)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const ua=b(oa,[["render",ca]]);function Aa(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function La(){return{codeJs:`import {
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
};`}}const Oa={name:"PageCarouselIndicatorsLimit",components:{ACarousel:v,AlohaExample:f,ATranslation:k},setup(){const e=d(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Aa(),{codeJs:t}=La();return{codeHtml:a,codeJs:t,data:e}}},pa={class:"a_columns a_columns_count_12"},Ta={class:"a_column a_column_12_touch a_column_4"},Ea=["src","alt"],Sa={class:"a_column a_column_12_touch a_column_4"},Ca=["src","alt"];function ma(e,a,t,s,u,i){const r=O("a-carousel"),c=O("aloha-example");return R(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_DESCRIPTION_",props:"indicators-limit"},{default:p(()=>[n("div",pa,[n("div",Ta,[a[0]||(a[0]=n("h3",null,[n("strong",{lang:"en"},'indicators-limit="6"')],-1)),A(r,{data:e.data,"indicators-limit":6,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:p(({item:l})=>[n("div",null,V(l.id),1),n("img",{class:"a_height_auto a_width_100",src:l.src,alt:l.alt},null,8,Ea)]),_:1},8,["data"])]),n("div",Sa,[a[1]||(a[1]=n("h3",null,[n("strong",{lang:"en"},'indicators-limit="3"')],-1)),A(r,{data:e.data,"indicators-limit":3,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:p(({item:l})=>[n("div",null,V(l.id),1),n("img",{class:"a_height_auto a_width_100",src:l.src,alt:l.alt},null,8,Ca)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const ga=b(Oa,[["render",ma]]);function ba(){const e=d(()=>_({placeholder:"_A_CAROUSEL_COMPONENT_NAME_"}));return{pageTitle:d(()=>`ACarousel${e.value?` (${e.value})`:""}`)}}function ha(){return{dataProps:[{name:"aria-label",description:"_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:void 0,required:!0},{name:"aria-disabled",description:"_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"arrow-previous-attributes",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-previous-icon",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_",type:"String",default:"ChevronLeft",required:!1},{name:"arrow-next-attributes",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-next-icon",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_",type:"String",default:"ChevronRight",required:!1},{name:"arrows-show",description:"_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"arrows-trigger",description:"_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_",type:"String / Array",default:"always",required:!1},{name:"arrows-placement",description:"_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_",type:"String",default:"sides-center",required:!1},{name:"autoplay-interval",description:"_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_",type:"Number",default:5e3,required:!1},{name:"autoplay-show",description:"_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"autoplay-start",description:"_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"data",description:"_A_CAROUSEL_PROPS_DATA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"disabled",description:"_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"id",description:"_A_CAROUSEL_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_carousel_")',required:!1},{name:"indicators-auto-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_AUTO_LIMIT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"indicators-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_LIMIT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"indicators-show",description:"_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"indicators-type",description:"_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_",type:"String",default:"dots",required:!1},{name:"indicator-width",description:"_A_CAROUSEL_PROPS_INDICATOR_WIDTH_DESCRIPTION_",type:"Number",default:34,required:!1},{name:"key-id",description:"_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"model-value",description:"_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Number / String",default:void 0,required:!1},{name:"texts",description:"_A_CAROUSEL_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function Ra(){return{dataTranslate:["_A_CAROUSEL_NEXT_SLIDE_","_A_CAROUSEL_PREVIOUS_SLIDE_","_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_","_A_CAROUSEL_CONTROLS_SLIDES_","_A_CAROUSEL_CONTROLS_START_","_A_CAROUSEL_CONTROLS_STOP_","_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"]}}const Na={name:"PageCarousel",components:{AlohaPage:F,AlohaTableProps:Z,AlohaTableTranslate:z,ATranslation:k,PageCarouselAriaDisabled:Me,PageCarouselArrowsTrigger:Fe,PageCarouselBasic:la,PageCarouselIndicatorsAutoLimit:ua,PageCarouselIndicatorsLimit:ga},setup(){const{pageTitle:e}=ba(),{dataProps:a}=ha(),{dataTranslate:t}=Ra();return{dataProps:a,dataTranslate:t,pageTitle:e}}};function Pa(e,a,t,s,u,i){const r=O("a-translation"),c=O("page-carousel-basic"),l=O("page-carousel-aria-disabled"),o=O("page-carousel-arrows-trigger"),T=O("page-carousel-indicators-limit"),C=O("page-carousel-indicators-auto-limit"),N=O("aloha-table-props"),P=O("aloha-table-translate"),E=O("aloha-page");return R(),h(E,{"page-title":e.pageTitle},{body:p(()=>[A(r,{tag:"p",html:"_A_CAROUSEL_COMPONENT_DESCRIPTION_"}),A(c),A(l),A(o),A(T),A(C),A(N,{data:e.dataProps},null,8,["data"]),A(P,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Wa=b(Na,[["render",Pa]]);export{Wa as default};
