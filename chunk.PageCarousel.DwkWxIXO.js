import{A as v,a as le}from"./chunk.AlohaExample.yOS28A9a.js";import{A as se}from"./chunk.AlohaTableProps.CW_qLXKC.js";import{A as re}from"./chunk.AlohaTableTranslate.lfT07dM9.js";import{f as Q,h as g,i as U,j as $,k as X,l as j,s as oe,m as ne,g as _,_ as N,A as k}from"./bundle.index.DSjSLIKP.js";import{t as u,d as n,h as m,e as L,r as H,A as ie,a$ as de,O as ce,f as ue,B as Ae,o as Le,U as I,aS as E,V as P,Y as o,Z as O,aT as x}from"./chunk.vendor.B8i9Zb03.js";import{Y as Oe,h as ee,N as F,Z as ae,f as G,c as te,g as pe,M as Z,_ as Te,v as Ee,u as me,a as Se,e as Ce}from"./chunk.vendor-lodash.BGdgYQ9t.js";import"./chunk.APageTabTitle.z816C-NB.js";import"./chunk.AlohaHighlightjs.DOgKZA3M.js";import"./chunk.ATable.BhtWItp2.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.CN5eAU-4.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function ge(e){const a=u(e,"type");return{btnClass:n(()=>`a_carousel__arrow_${a.value}`)}}function he(e){const a=u(e,"texts"),t=u(e,"type");return{btnTitle:n(()=>{if(t.value==="previous")return a.value.previousSlide;if(t.value==="next")return a.value.nextSlide})}}const z={name:"ACarouselBtn",props:{ariaDisabled:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},disabled:{type:Boolean,required:!1},icon:{type:String,required:!1,default:void 0},texts:{type:Object,required:!0},type:{type:String,required:!0,validator:e=>["previous","next"].includes(e)}},emits:["toSlide"],setup(e){const{btnClass:a}=ge(e),{btnTitle:t}=he(e);return{btnClass:a,btnTitle:t}},render(){return m(Q,{class:["a_carousel__arrow",this.btnClass],ariaDisabled:this.ariaDisabled,disabled:this.disabled,iconLeft:this.icon,title:this.btnTitle,textScreenReader:this.btnTitle,type:"button",onClick:()=>this.$emit("toSlide"),...this.btnAttributes})}};function be(e){const a=u(e,"activeId"),t=u(e,"data"),l=n(()=>t.value[g]===a.value),d=n(()=>{var c;return(c=t.value)!=null&&c[U].length?Oe(t.value[U],[g,a.value]):!1});return{isActive:l,isActiveInChildren:d}}function Re(e,{isActive:a=n(()=>!1)}){const t=u(e,"data"),l=u(e,"parentId"),d=n(()=>t.value[$]+1),c=n(()=>`${l.value}_tab_${d.value}`),s=n(()=>`${l.value}_item_${d.value}`),i=n(()=>a.value?"0":"-1");return{ariaControls:s,id:c,number:d,tabindex:i}}function Ne({emit:e}){return{changeActiveId:({item:l})=>{e("changeActiveId",{id:l[g]})},onPressBtn:l=>{l.keyCode===X.arrowLeft?(l.preventDefault(),e("toPreviousSlide",{withFocus:!0})):l.keyCode===X.arrowRight&&(l.preventDefault(),e("toNextSlide",{withFocus:!0}))}}}const Ie={icons:{dots:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="1rem" cy="0.9375rem" r="0.625rem"></circle>
  <circle class="tab-background" cx="1rem" cy="0.9375rem" r="0.5rem"></circle>
  <circle class="tab" cx="1rem" cy="0.9375rem" r="0.375rem"></circle>
</svg>`,squares:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect class="border" x="0.375rem" y="0.3125rem" width="1.25rem" height="1.25rem" rx="0.125rem" ry="0.125rem"></rect>
  <rect class="tab-background" x="0.5rem" y="0.4375rem" width="1rem" height="1rem" rx="0.125rem" ry="0.125rem"></rect>
  <rect class="tab" x="0.625rem" y="0.5625rem" width="0.75rem" height="0.75rem" rx="0.125rem" ry="0.125rem"></rect>
</svg>`}};function Pe(e){const a=u(e,"indicatorsType");return{indicatorIcon:n(()=>Ie.icons[a.value])}}const ve={name:"ACarouselControlsIndicator",props:{activeId:{type:[String,Number],required:!0},data:{type:Object,required:!0},disabled:{type:Boolean,required:!1},hide:{type:Boolean,required:!1},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(e,a){const{indicatorIcon:t}=Pe(e),{isActive:l,isActiveInChildren:d}=be(e),{changeActiveId:c,onPressBtn:s}=Ne(a),{ariaControls:i,id:r,number:A,tabindex:p}=Re(e,{isActive:l});return{ariaControls:i,changeActiveId:c,id:r,indicatorIcon:t,isActive:l,isActiveInChildren:d,number:A,onPressBtn:s,tabindex:p}},render(){var e,a;return m("div",{class:"a_carousel__tabs__btn__wrapper"},[m(Q,{id:this.id,"aria-selected":!1,"aria-controls":this.ariaControls,class:["a_carousel__tabs__btn",{a_carousel__tabs__btn_active:this.isActive,a_carousel__tabs__btn_hide:this.hide}],iconLeft:this.indicatorIcon,disabled:this.disabled,type:"button",tabindex:this.tabindex,role:"tab",title:this.texts.controlsSlide,textScreenReader:this.texts.controlsSlide,extra:{number:this.number},onClick:()=>this.changeActiveId({item:this.data}),onKeydown:this.onPressBtn}),(a=(e=this.data)==null?void 0:e[U])!=null&&a.length?m("div",{class:["a_carousel__tabs__btn__children",{a_carousel__tabs__btn__children_active:this.isActiveInChildren}]},[this.data[U].map(t=>m(L("ACarouselControlsIndicator"),{activeId:this.activeId,data:t,disabled:this.disabled,hide:!0,indicatorsType:this.indicatorsType,parentId:this.parentId,texts:this.texts,onChangeActiveId:l=>this.$emit("changeActiveId",l),onToNextSlide:l=>this.$emit("toNextSlide",l),onToPreviousSlide:l=>this.$emit("toPreviousSlide",l)}))]):""])}};function fe(){return{ariaLabelTabsAttributes:n(()=>j({attr:"aria-label",placeholder:"_A_CAROUSEL_CONTROLS_SLIDES_"}))}}const Be={name:"ACarouselControls",props:{activeId:{type:[String,Number],required:!0},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},parentId:{type:String,required:!0},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(){const{ariaLabelTabsAttributes:e}=fe();return{ariaLabelTabsAttributes:e}},render(){return this.data.length<=1?null:[m("div",{class:"a_carousel__tabs__wrapper"},[m("div",{class:["a_carousel__tabs",this.indicatorsType?`a_carousel__tabs_${this.indicatorsType}`:"a_carousel__tabs_custom"],role:"tablist",...this.ariaLabelTabsAttributes},[...this.data.map(e=>m(ve,{activeId:this.activeId,data:e,disabled:this.disabled,indicatorsType:this.indicatorsType,parentId:this.parentId,texts:this.texts,onChangeActiveId:a=>this.$emit("changeActiveId",a),onToNextSlide:a=>this.$emit("toNextSlide",a),onToPreviousSlide:a=>this.$emit("toPreviousSlide",a)}))])])]}};function ye(e){const a=u(e,"dataCount"),t=u(e,"itemIndex"),l=u(e,"parentId"),d=u(e,"texts"),c=n(()=>t.value+1),s=n(()=>`${l.value}_item_${c.value}`);return{ariaLabelAttributes:n(()=>j({attr:"aria-label",placeholder:d.value.itemAriaLabel,extra:{count:a.value,number:c.value}})),idLocal:s}}function Ue(e){const a=u(e,"activeId"),t=u(e,"item");return{isActive:n(()=>t.value[g]===a.value)}}const xe={name:"ACarouselItem",props:{activeId:{type:[String,Number],required:!0},dataCount:{type:Number,required:!0},item:{type:Object,required:!0},itemIndex:{type:Number,required:!0},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["change","play","stop","update:modelValue"],setup(e){const{ariaLabelAttributes:a,idLocal:t}=ye(e),{isActive:l}=Ue(e);return{ariaLabelAttributes:a,idLocal:t,isActive:l}},render(){return m("div",{id:this.idLocal,"aria-roledescription":"slide",class:["a_carousel__item",{a_carousel__item_active:this.isActive}],...this.ariaLabelAttributes},[this.$slots.item?this.$slots.item({activeId:this.activeId,dataCount:this.dataCount,item:this.item,itemIndex:this.itemIndex,isActive:this.isActive,parentId:this.parentId}):void 0])}};function ke(e,{dataLocal:a=n(()=>[])}){const t=u(e,"id"),l=u(e,"modelValue"),d=H(void 0),c=()=>{var p,T;ee(l.value)?d.value=(T=(p=a.value)==null?void 0:p[0])==null?void 0:T[g]:d.value=l.value},s=({id:p})=>{d.value=p},i=({nextSlideIndex:p})=>{setTimeout(()=>{const T=`${t.value}_tab_${p+1}`;oe({selector:`#${T}`})})};return{activeId:d,changeActiveId:s,initActiveId:c,toNextSlide:({withFocus:p}={})=>{var C,h;const T=F(a.value,[g,d.value]);let S;T===-1||T>=a.value.length-1?S=0:S=T+1,s({id:(h=(C=a.value)==null?void 0:C[S])==null?void 0:h[g]}),p&&i({nextSlideIndex:S})},toPreviousSlide:({withFocus:p}={})=>{var C,h;const T=F(a.value,[g,d.value]);let S;T===-1||T<=0?S=a.value.length-1:S=T-1,s({id:(h=(C=a.value)==null?void 0:C[S])==null?void 0:h[g]}),p&&i({nextSlideIndex:S})}}}function Me(e){const a=u(e,"ariaLabel"),t=u(e,"extra");return{ariaLabelAttributes:n(()=>j({attr:"aria-label",placeholder:a.value,extra:t.value}))}}function we(e){const a=u(e,"arrowsPlacement"),t=u(e,"arrowsTrigger"),l=u(e,"indicatorsPlacement"),d=n(()=>l.value?`a_carousel_tabs_${l.value}`:void 0),c=n(()=>a.value?`a_carousel_arrows_${a.value}`:void 0),s=n(()=>{const i=ae(t.value),r=[];return G(i,A=>{r.push(`a_carousel_trigger_${A}`)}),r.join(" ")});return{arrowsPlacementClass:c,arrowsTriggerClass:s,indicatorsPlacementClass:d}}function Ve(e){const a=u(e,"data"),t=u(e,"keyId");return{dataLocal:n(()=>{const d=te(a.value);return t.value?G(d,(c,s)=>{c[g]=pe(c,t.value)||s,c[$]=s}):G(d,(c,s)=>{c[g]=s,c[$]=s}),d})}}function De(e,{dataLocal:a=n(()=>[])}){const t=u(e,"indicatorsAutoLimit"),l=u(e,"indicatorsLimit"),d=u(e,"indicatorsMargin"),c=u(e,"indicatorsShow"),s=u(e,"indicatorWidth"),i=H(void 0),r=H(0);let A=null;const{remPx:p}=ne(),T=n(()=>s.value*p.value),S=n(()=>d.value*p.value),C=n(()=>c.value&&t.value),h=n(()=>{if(!C.value)return l.value;const b=Z.floor((r.value-S.value)/T.value);return l.value?Te([b,l.value]):b}),B=()=>{A||!C.value||(A=new ResizeObserver(b=>{for(const M of b)M.contentRect.width!==r.value&&(r.value=M.contentRect.width)}),i.value&&A.observe(i.value))},q=()=>{A&&i.value&&A.unobserve(i.value)},Y=n(()=>{const b=h.value;if(ee(b)||b>=a.value.length)return a.value;const M=0,J=a.value.length-1,W=b-2,_e=J/(W+1),w=new Set;w.add(M),w.add(J);for(let R=1;R<=W;R++){const y=Ee(R*_e);w.add(y)}const V=[];let K=-1,D=[];return Z.forEach(te(a.value),(R,y)=>{R[$]=y,w.has(y)?(K!==-1&&D.length>0&&(V[V.length-1][U]=D,D=[]),V.push(R),K=y):D.push(R)}),V});return{carouselRef:i,indicatorsData:Y,initObserver:B,removeObserver:q,useObserver:C}}function $e(e){const a=ie(e);return{textsLocal:n(()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",...a.value}))}}const f={name:"ACarousel",props:{ariaDisabled:{type:Boolean,required:!1},ariaLabel:{type:String,required:!0},arrowNextAttributes:{type:Object,required:!1,default:()=>({})},arrowNextIcon:{type:String,required:!1,default:ce},arrowPreviousAttributes:{type:Object,required:!1,default:()=>({})},arrowPreviousIcon:{type:String,required:!1,default:de},arrowsPlacement:{type:String,default:"sides-center",validator:e=>["sides-center"].includes(e)},arrowsShow:{type:Boolean,required:!1,default:!0},arrowsTrigger:{type:[String,Array],default:"always",validator:e=>{const a=ae(e);return Se(a)&&Ce(a,t=>["always","hover","focus"].includes(t))}},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,required:!1,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},id:{type:String,required:!1,default:()=>me("a_carousel_")},indicatorsAutoLimit:{type:Boolean,required:!1,default:!1},indicatorsLimit:{type:Number,required:!1,default:void 0},indicatorsMargin:{type:Number,required:!1,default:6,validator:e=>e>=0},indicatorsPlacement:{type:String,required:!1,default:"bottom",validator:e=>["top","top-start","top-end","bottom","bottom-start","bottom-end"].indexOf(e)!==-1},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},indicatorWidth:{type:Number,required:!1,default:2.125,validator:e=>e>=0},keyId:{type:String,required:!1,default:void 0},modelValue:{type:[Number,String],required:!1,default:void 0},texts:{type:Object,required:!1,default:()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"})}},emits:["change","play","stop","update:modelValue"],setup(e){const{textsLocal:a}=$e(e),{ariaLabelAttributes:t}=Me(e),{arrowsPlacementClass:l,arrowsTriggerClass:d,indicatorsPlacementClass:c}=we(e),{dataLocal:s}=Ve(e),{carouselRef:i,indicatorsData:r,initObserver:A,removeObserver:p,useObserver:T}=De(e,{dataLocal:s}),{activeId:S,changeActiveId:C,initActiveId:h,toNextSlide:B,toPreviousSlide:q}=ke(e,{dataLocal:s});return h(),ue(T,Y=>{Y?A():p()}),Ae(()=>{A()}),Le(()=>{p()}),{activeId:S,ariaLabelAttributes:t,arrowsPlacementClass:l,arrowsTriggerClass:d,carouselRef:i,changeActiveId:C,dataLocal:s,indicatorsData:r,indicatorsPlacementClass:c,textsLocal:a,toNextSlide:B,toPreviousSlide:q}},render(){return m("section",{id:this.id,"aria-roledescription":"carousel",class:["a_carousel",this.indicatorsPlacementClass,this.arrowsPlacementClass,this.arrowsTriggerClass],...this.ariaLabelAttributes},[m("div",{ref:"carouselRef",class:"a_carousel__inner"},[this.arrowsShow?m(z,{btnAttributes:this.arrowPreviousAttributes,disabled:this.disabled,icon:this.arrowPreviousIcon,texts:this.textsLocal,type:"previous",onToSlide:this.toPreviousSlide}):void 0,m(Be,{activeId:this.activeId,autoplayInterval:this.autoplayInterval,autoplayShow:this.autoplayShow,data:this.indicatorsData,disabled:this.disabled,extra:this.extra,parentId:this.id,indicatorsShow:this.indicatorsShow,indicatorsType:this.indicatorsType,texts:this.texts,onChangeActiveId:this.changeActiveId,onToNextSlide:this.toNextSlide,onToPreviousSlide:this.toPreviousSlide}),m("div",{"aria-live":"polite",class:"a_carousel__items"},[...this.dataLocal.map((e,a)=>m(xe,{key:e[g],activeId:this.activeId,dataCount:this.dataLocal.length,item:e,itemIndex:a,parentId:this.id,texts:this.textsLocal},this.$slots))]),this.arrowsShow?m(z,{btnAttributes:this.arrowNextAttributes,disabled:this.disabled,icon:this.arrowNextIcon,texts:this.textsLocal,type:"next",onToSlide:this.toNextSlide}):void 0])])}};function qe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ye(){return{codeJs:`import {
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
};`}}const He={name:"PageCarouselAriaDisabled",components:{ACarousel:f,AlohaExample:v},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=qe(),{codeJs:t}=Ye();return{codeHtml:a,codeJs:t,data:e}}},Ge={class:"a_columns a_columns_count_12"},je={class:"a_column a_column_12_touch a_column_4"},Je=["src","alt"];function We(e,a,t,l,d,c){const s=L("a-carousel"),i=L("aloha-example");return P(),I(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_",description:"_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_",props:"aria-disabled"},{default:E(()=>[o("div",Ge,[o("div",je,[O(s,{"aria-disabled":!0,data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:E(({item:r})=>[o("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,Je)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ke=N(He,[["render",We]]);function Xe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Fe(){return{codeJs:`import {
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
};`}}const Ze={name:"PageCarouselArrowsTrigger",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Xe(),{codeJs:t}=Fe();return{codeHtml:a,codeJs:t,data:e}}},ze={class:"a_columns a_columns_count_12"},Qe={class:"a_column a_column_12_touch a_column_4"},ea=["src","alt"],aa={class:"a_column a_column_12_touch a_column_4"},ta=["src","alt"],_a={class:"a_column a_column_12_touch a_column_4"},la=["src","alt"],sa={class:"a_column a_column_12_touch a_column_4"},ra=["src","alt"];function oa(e,a,t,l,d,c){const s=L("a-translation"),i=L("a-carousel"),r=L("aloha-example");return P(),I(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_",description:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_",props:"arrows-trigger"},{default:E(()=>[o("div",ze,[o("div",Qe,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"}),O(i,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:A})=>[o("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,ea)]),_:1},8,["data"])]),o("div",aa,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"}),O(i,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"focus","key-id":"id"},{item:E(({item:A})=>[o("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,ta)]),_:1},8,["data"])]),o("div",_a,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"}),O(i,{"arrows-trigger":["hover","focus"],data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:E(({item:A})=>[o("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,la)]),_:1},8,["data"])]),o("div",sa,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"}),O(i,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"always","key-id":"id"},{item:E(({item:A})=>[o("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,ra)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const na=N(Ze,[["render",oa]]);function ia(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function da(){return{codeJs:`import { 
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
};`}}const ca={name:"PageCarouselBasic",components:{ACarousel:f,AlohaExample:v},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=ia(),{codeJs:t}=da();return{codeHtml:a,codeJs:t,data:e}}},ua={class:"a_columns a_columns_count_12"},Aa={class:"a_column a_column_12_touch a_column_4"},La=["src","alt"];function Oa(e,a,t,l,d,c){const s=L("a-carousel"),i=L("aloha-example");return P(),I(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:E(()=>[o("div",ua,[o("div",Aa,[O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:E(({item:r})=>[o("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,La)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const pa=N(ca,[["render",Oa]]);function Ta(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ea(){return{codeJs:`import {
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
};`}}const ma={name:"PageCarouselIndicatorsAutoLimit",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:9,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:10,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:11,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:12,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:13,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:14,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:15,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:16,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:17,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:18,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:19,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:20,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:21,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:22,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:23,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:24,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:25,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:26,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Ta(),{codeJs:t}=Ea();return{codeHtml:a,codeJs:t,data:e}}},Sa={class:"a_columns a_columns_count_12"},Ca={class:"a_column a_column_12_touch a_column_4"},ga=["src","alt"];function ha(e,a,t,l,d,c){const s=L("a-carousel"),i=L("aloha-example");return P(),I(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_DESCRIPTION_",props:"indicators-auto-limit"},{default:E(()=>[o("div",Sa,[o("div",Ca,[O(s,{data:e.data,"indicators-auto-limit":!0,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:r})=>[o("div",null,x(r.id),1),o("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,ga)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const ba=N(ma,[["render",ha]]);function Ra(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Na(){return{codeJs:`import {
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
};`}}const Ia={name:"PageCarouselIndicatorsLimit",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Ra(),{codeJs:t}=Na();return{codeHtml:a,codeJs:t,data:e}}},Pa={class:"a_columns a_columns_count_12"},va={class:"a_column a_column_12_touch a_column_4"},fa=["src","alt"],Ba={class:"a_column a_column_12_touch a_column_4"},ya=["src","alt"];function Ua(e,a,t,l,d,c){const s=L("a-carousel"),i=L("aloha-example");return P(),I(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_DESCRIPTION_",props:"indicators-limit"},{default:E(()=>[o("div",Pa,[o("div",va,[a[0]||(a[0]=o("h3",null,[o("strong",{lang:"en"},'indicators-limit="6"')],-1)),O(s,{data:e.data,"indicators-limit":6,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:r})=>[o("div",null,x(r.id),1),o("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,fa)]),_:1},8,["data"])]),o("div",Ba,[a[1]||(a[1]=o("h3",null,[o("strong",{lang:"en"},'indicators-limit="3"')],-1)),O(s,{data:e.data,"indicators-limit":3,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:r})=>[o("div",null,x(r.id),1),o("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,ya)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const xa=N(Ia,[["render",Ua]]);function ka(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ma(){return{codeJs:`import {
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
};`}}const wa={name:"PageCarouselIndicatorsType",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=ka(),{codeJs:t}=Ma();return{codeHtml:a,codeJs:t,data:e}}},Va={class:"a_columns a_columns_count_12"},Da={class:"a_column a_column_12_touch a_column_4"},$a=["src","alt"],qa={class:"a_column a_column_12_touch a_column_4"},Ya=["src","alt"];function Ha(e,a,t,l,d,c){const s=L("a-carousel"),i=L("aloha-example");return P(),I(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_TYPE_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_TYPE_DESCRIPTION_",props:"indicators-type"},{default:E(()=>[o("div",Va,[o("div",Da,[a[0]||(a[0]=o("h3",null,[o("strong",{lang:"en"},"dots")],-1)),O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","indicators-type":"dots","key-id":"id"},{item:E(({item:r})=>[o("div",null,x(r.id),1),o("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,$a)]),_:1},8,["data"])]),o("div",qa,[a[1]||(a[1]=o("h3",null,[o("strong",{lang:"en"},"squares")],-1)),O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","indicators-type":"squares","key-id":"id"},{item:E(({item:r})=>[o("div",null,x(r.id),1),o("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,Ya)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ga=N(wa,[["render",Ha]]);function ja(){const e=n(()=>_({placeholder:"_A_CAROUSEL_COMPONENT_NAME_"}));return{pageTitle:n(()=>`ACarousel${e.value?` (${e.value})`:""}`)}}function Ja(){return{dataProps:[{name:"aria-label",description:"_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:void 0,required:!0},{name:"aria-disabled",description:"_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"arrow-previous-attributes",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-previous-icon",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_",type:"String",default:"ChevronLeft",required:!1},{name:"arrow-next-attributes",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-next-icon",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_",type:"String",default:"ChevronRight",required:!1},{name:"arrows-show",description:"_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"arrows-trigger",description:"_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_",type:"String / Array",default:"always",required:!1},{name:"arrows-placement",description:"_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_",type:"String",default:"sides-center",required:!1},{name:"autoplay-interval",description:"_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_",type:"Number",default:5e3,required:!1},{name:"autoplay-show",description:"_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"autoplay-start",description:"_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"data",description:"_A_CAROUSEL_PROPS_DATA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"disabled",description:"_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"id",description:"_A_CAROUSEL_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_carousel_")',required:!1},{name:"indicators-auto-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_AUTO_LIMIT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"indicators-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_LIMIT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"indicators-show",description:"_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"indicators-type",description:"_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_",type:"String",default:"dots",required:!1},{name:"indicator-width",description:"_A_CAROUSEL_PROPS_INDICATOR_WIDTH_DESCRIPTION_",type:"Number",default:2.125,required:!1},{name:"key-id",description:"_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"model-value",description:"_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Number / String",default:void 0,required:!1},{name:"texts",description:"_A_CAROUSEL_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function Wa(){return{dataTranslate:["_A_CAROUSEL_NEXT_SLIDE_","_A_CAROUSEL_PREVIOUS_SLIDE_","_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_","_A_CAROUSEL_CONTROLS_SLIDES_","_A_CAROUSEL_CONTROLS_START_","_A_CAROUSEL_CONTROLS_STOP_","_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"]}}const Ka={name:"PageCarousel",components:{AlohaPage:le,AlohaTableProps:se,AlohaTableTranslate:re,ATranslation:k,PageCarouselAriaDisabled:Ke,PageCarouselArrowsTrigger:na,PageCarouselBasic:pa,PageCarouselIndicatorsAutoLimit:ba,PageCarouselIndicatorsLimit:xa,PageCarouselIndicatorsType:Ga},setup(){const{pageTitle:e}=ja(),{dataProps:a}=Ja(),{dataTranslate:t}=Wa();return{dataProps:a,dataTranslate:t,pageTitle:e}}};function Xa(e,a,t,l,d,c){const s=L("a-translation"),i=L("page-carousel-basic"),r=L("page-carousel-aria-disabled"),A=L("page-carousel-arrows-trigger"),p=L("page-carousel-indicators-limit"),T=L("page-carousel-indicators-auto-limit"),S=L("page-carousel-indicators-type"),C=L("aloha-table-props"),h=L("aloha-table-translate"),B=L("aloha-page");return P(),I(B,{"page-title":e.pageTitle},{body:E(()=>[O(s,{tag:"p",html:"_A_CAROUSEL_COMPONENT_DESCRIPTION_"}),O(i),O(r),O(A),O(p),O(T),O(S),O(C,{data:e.dataProps},null,8,["data"]),O(h,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const At=N(Ka,[["render",Xa]]);export{At as default};
