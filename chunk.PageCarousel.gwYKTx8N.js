import{A as v,a as le}from"./chunk.AlohaExample.BxtiM1ms.js";import{A as se}from"./chunk.AlohaTableProps.0Ok0_GyR.js";import{A as re}from"./chunk.AlohaTableTranslate.DCyM7809.js";import{f as Z,h as g,i as U,j as D,k as X,l as j,s as oe,m as ne,g as _,_ as N,A as k}from"./bundle.index.7CLnsWkq.js";import{t as u,d as n,h as m,e as O,r as H,A as ie,b0 as de,Q as ce,f as ue,B as Ae,o as Le,V as I,aT as T,W as P,Z as o,_ as L,aU as x}from"./chunk.vendor.D2EiI1BL.js";import{R as Oe,h as ee,N as F,$ as ae,f as G,c as te,g as pe,M as z,a0 as Te,v as Ee,u as me,a as Se,e as Ce}from"./chunk.vendor-lodash.FjHQi8Go.js";import"./chunk.APageTabTitle.CJpqfc5k.js";import"./chunk.AlohaHighlightjs.B_1iuPG1.js";import"./chunk.ATable.BArKLby9.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.CN5eAU-4.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function ge(e){const a=u(e,"type");return{btnClass:n(()=>`a_carousel__arrow_${a.value}`)}}function he(e){const a=u(e,"texts"),t=u(e,"type");return{btnTitle:n(()=>{if(t.value==="previous")return a.value.previousSlide;if(t.value==="next")return a.value.nextSlide})}}const Q={name:"ACarouselBtn",props:{ariaDisabled:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},disabled:{type:Boolean,required:!1},icon:{type:String,required:!1,default:void 0},texts:{type:Object,required:!0},type:{type:String,required:!0,validator:e=>["previous","next"].includes(e)}},emits:["toSlide"],setup(e){const{btnClass:a}=ge(e),{btnTitle:t}=he(e);return{btnClass:a,btnTitle:t}},render(){return m(Z,{class:["a_carousel__arrow",this.btnClass],ariaDisabled:this.ariaDisabled,disabled:this.disabled,iconLeft:this.icon,title:this.btnTitle,textScreenReader:this.btnTitle,type:"button",onClick:()=>this.$emit("toSlide"),...this.btnAttributes})}};function be(e){const a=u(e,"activeId"),t=u(e,"data"),l=n(()=>t.value[g]===a.value),i=n(()=>{var c;return(c=t.value)!=null&&c[U].length?Oe(t.value[U],[g,a.value]):!1});return{isActive:l,isActiveInChildren:i}}function Re(e,{isActive:a=n(()=>!1)}){const t=u(e,"data"),l=u(e,"parentId"),i=n(()=>t.value[D]+1),c=n(()=>`${l.value}_tab_${i.value}`),r=n(()=>`${l.value}_item_${i.value}`),d=n(()=>a.value?"0":"-1");return{ariaControls:r,id:c,number:i,tabindex:d}}function Ne({emit:e}){return{changeActiveId:({item:l})=>{e("changeActiveId",{id:l[g]})},onPressBtn:l=>{l.keyCode===X.arrowLeft?(l.preventDefault(),e("toPreviousSlide",{withFocus:!0})):l.keyCode===X.arrowRight&&(l.preventDefault(),e("toNextSlide",{withFocus:!0}))}}}const Ie={icons:{dots:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="1rem" cy="0.9375rem" r="0.625rem"></circle>
  <circle class="tab-background" cx="1rem" cy="0.9375rem" r="0.5rem"></circle>
  <circle class="tab" cx="1rem" cy="0.9375rem" r="0.375rem"></circle>
</svg>`,squares:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect class="border" x="0.375rem" y="0.3125rem" width="1.25rem" height="1.25rem" rx="0.125rem" ry="0.125rem"></rect>
  <rect class="tab-background" x="0.5rem" y="0.4375rem" width="1rem" height="1rem" rx="0.125rem" ry="0.125rem"></rect>
  <rect class="tab" x="0.625rem" y="0.5625rem" width="0.75rem" height="0.75rem" rx="0.125rem" ry="0.125rem"></rect>
</svg>`}};function Pe(e){const a=u(e,"indicatorsType");return{indicatorIcon:n(()=>Ie.icons[a.value])}}const ve={name:"ACarouselControlsIndicator",props:{activeId:{type:[String,Number],required:!0},data:{type:Object,required:!0},disabled:{type:Boolean,required:!1},hide:{type:Boolean,required:!1},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(e,a){const{indicatorIcon:t}=Pe(e),{isActive:l,isActiveInChildren:i}=be(e),{changeActiveId:c,onPressBtn:r}=Ne(a),{ariaControls:d,id:s,number:A,tabindex:p}=Re(e,{isActive:l});return{ariaControls:d,changeActiveId:c,id:s,indicatorIcon:t,isActive:l,isActiveInChildren:i,number:A,onPressBtn:r,tabindex:p}},render(){var e,a;return m("div",{class:"a_carousel__tabs__btn__wrapper"},[m(Z,{id:this.id,"aria-selected":!1,"aria-controls":this.ariaControls,class:["a_carousel__tabs__btn",{a_carousel__tabs__btn_active:this.isActive,a_carousel__tabs__btn_hide:this.hide}],iconLeft:this.indicatorIcon,disabled:this.disabled,type:"button",tabindex:this.tabindex,role:"tab",title:this.texts.controlsSlide,textScreenReader:this.texts.controlsSlide,extra:{number:this.number},onClick:()=>this.changeActiveId({item:this.data}),onKeydown:this.onPressBtn}),(a=(e=this.data)==null?void 0:e[U])!=null&&a.length?m("div",{class:["a_carousel__tabs__btn__children",{a_carousel__tabs__btn__children_active:this.isActiveInChildren}]},[this.data[U].map(t=>m(O("ACarouselControlsIndicator"),{activeId:this.activeId,data:t,disabled:this.disabled,hide:!0,indicatorsType:this.indicatorsType,parentId:this.parentId,texts:this.texts,onChangeActiveId:l=>this.$emit("changeActiveId",l),onToNextSlide:l=>this.$emit("toNextSlide",l),onToPreviousSlide:l=>this.$emit("toPreviousSlide",l)}))]):""])}};function fe(){return{ariaLabelTabsAttributes:n(()=>j({attr:"aria-label",placeholder:"_A_CAROUSEL_CONTROLS_SLIDES_"}))}}const Be={name:"ACarouselControls",props:{activeId:{type:[String,Number],required:!0},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},parentId:{type:String,required:!0},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(){const{ariaLabelTabsAttributes:e}=fe();return{ariaLabelTabsAttributes:e}},render(){return this.data.length<=1?null:[m("div",{class:"a_carousel__tabs__wrapper"},[m("div",{class:["a_carousel__tabs",this.indicatorsType?`a_carousel__tabs_${this.indicatorsType}`:"a_carousel__tabs_custom"],role:"tablist",...this.ariaLabelTabsAttributes},[...this.data.map(e=>m(ve,{activeId:this.activeId,data:e,disabled:this.disabled,indicatorsType:this.indicatorsType,parentId:this.parentId,texts:this.texts,onChangeActiveId:a=>this.$emit("changeActiveId",a),onToNextSlide:a=>this.$emit("toNextSlide",a),onToPreviousSlide:a=>this.$emit("toPreviousSlide",a)}))])])]}};function ye(e){const a=u(e,"dataCount"),t=u(e,"itemIndex"),l=u(e,"parentId"),i=u(e,"texts"),c=n(()=>t.value+1),r=n(()=>`${l.value}_item_${c.value}`);return{ariaLabelAttributes:n(()=>j({attr:"aria-label",placeholder:i.value.itemAriaLabel,extra:{count:a.value,number:c.value}})),idLocal:r}}function Ue(e){const a=u(e,"activeId"),t=u(e,"item");return{isActive:n(()=>t.value[g]===a.value)}}const xe={name:"ACarouselItem",props:{activeId:{type:[String,Number],required:!0},dataCount:{type:Number,required:!0},item:{type:Object,required:!0},itemIndex:{type:Number,required:!0},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["change","play","stop","update:modelValue"],setup(e){const{ariaLabelAttributes:a,idLocal:t}=ye(e),{isActive:l}=Ue(e);return{ariaLabelAttributes:a,idLocal:t,isActive:l}},render(){return m("div",{id:this.idLocal,"aria-roledescription":"slide",class:["a_carousel__item",{a_carousel__item_active:this.isActive}],...this.ariaLabelAttributes},[this.$slots.item?this.$slots.item({activeId:this.activeId,dataCount:this.dataCount,item:this.item,itemIndex:this.itemIndex,isActive:this.isActive,parentId:this.parentId}):void 0])}};function ke(e,{dataLocal:a=n(()=>[])}){const t=u(e,"id"),l=u(e,"modelValue"),i=H(void 0),c=()=>{var p,E;ee(l.value)?i.value=(E=(p=a.value)==null?void 0:p[0])==null?void 0:E[g]:i.value=l.value},r=({id:p})=>{i.value=p},d=({nextSlideIndex:p})=>{setTimeout(()=>{const E=`${t.value}_tab_${p+1}`;oe({selector:`#${E}`})})};return{activeId:i,changeActiveId:r,initActiveId:c,toNextSlide:({withFocus:p}={})=>{var C,h;const E=F(a.value,[g,i.value]);let S;E===-1||E>=a.value.length-1?S=0:S=E+1,r({id:(h=(C=a.value)==null?void 0:C[S])==null?void 0:h[g]}),p&&d({nextSlideIndex:S})},toPreviousSlide:({withFocus:p}={})=>{var C,h;const E=F(a.value,[g,i.value]);let S;E===-1||E<=0?S=a.value.length-1:S=E-1,r({id:(h=(C=a.value)==null?void 0:C[S])==null?void 0:h[g]}),p&&d({nextSlideIndex:S})}}}function Me(e){const a=u(e,"ariaLabel"),t=u(e,"extra");return{ariaLabelAttributes:n(()=>j({attr:"aria-label",placeholder:a.value,extra:t.value}))}}function we(e){const a=u(e,"arrowsShow"),t=u(e,"data");return{arrowsShowLocal:n(()=>{var i;return a.value&&((i=t.value)==null?void 0:i.length)>1})}}function Ve(e){const a=u(e,"arrowsPlacement"),t=u(e,"arrowsTrigger"),l=u(e,"indicatorsPlacement"),i=n(()=>l.value?`a_carousel_tabs_${l.value}`:void 0),c=n(()=>a.value?`a_carousel_arrows_${a.value}`:void 0),r=n(()=>{const d=ae(t.value),s=[];return G(d,A=>{s.push(`a_carousel_trigger_${A}`)}),s.join(" ")});return{arrowsPlacementClass:c,arrowsTriggerClass:r,indicatorsPlacementClass:i}}function $e(e){const a=u(e,"data"),t=u(e,"keyId");return{dataLocal:n(()=>{const i=te(a.value);return t.value?G(i,(c,r)=>{c[g]=pe(c,t.value)||r,c[D]=r}):G(i,(c,r)=>{c[g]=r,c[D]=r}),i})}}function De(e,{dataLocal:a=n(()=>[])}){const t=u(e,"indicatorsAutoLimit"),l=u(e,"indicatorsLimit"),i=u(e,"indicatorsMargin"),c=u(e,"indicatorsShow"),r=u(e,"indicatorWidth"),d=H(void 0),s=H(0);let A=null;const{remPx:p}=ne(),E=n(()=>r.value*p.value),S=n(()=>i.value*p.value),C=n(()=>c.value&&t.value),h=n(()=>{if(!C.value)return l.value;const b=z.floor((s.value-S.value)/E.value);return l.value?Te([b,l.value]):b}),B=()=>{A||!C.value||(A=new ResizeObserver(b=>{for(const M of b)M.contentRect.width!==s.value&&(s.value=M.contentRect.width)}),d.value&&A.observe(d.value))},q=()=>{A&&d.value&&A.unobserve(d.value)},Y=n(()=>{const b=h.value;if(ee(b)||b>=a.value.length)return a.value;const M=0,J=a.value.length-1,W=b-2,_e=J/(W+1),w=new Set;w.add(M),w.add(J);for(let R=1;R<=W;R++){const y=Ee(R*_e);w.add(y)}const V=[];let K=-1,$=[];return z.forEach(te(a.value),(R,y)=>{R[D]=y,w.has(y)?(K!==-1&&$.length>0&&(V[V.length-1][U]=$,$=[]),V.push(R),K=y):$.push(R)}),V});return{carouselRef:d,indicatorsData:Y,initObserver:B,removeObserver:q,useObserver:C}}function qe(e){const a=ie(e);return{textsLocal:n(()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",...a.value}))}}const f={name:"ACarousel",props:{ariaDisabled:{type:Boolean,required:!1},ariaLabel:{type:String,required:!0},arrowNextAttributes:{type:Object,required:!1,default:()=>({})},arrowNextIcon:{type:String,required:!1,default:ce},arrowPreviousAttributes:{type:Object,required:!1,default:()=>({})},arrowPreviousIcon:{type:String,required:!1,default:de},arrowsPlacement:{type:String,default:"sides-center",validator:e=>["sides-center"].includes(e)},arrowsShow:{type:Boolean,required:!1,default:!0},arrowsTrigger:{type:[String,Array],default:"always",validator:e=>{const a=ae(e);return Se(a)&&Ce(a,t=>["always","hover","focus"].includes(t))}},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,required:!1,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},id:{type:String,required:!1,default:()=>me("a_carousel_")},indicatorsAutoLimit:{type:Boolean,required:!1,default:!1},indicatorsLimit:{type:Number,required:!1,default:void 0},indicatorsMargin:{type:Number,required:!1,default:6,validator:e=>e>=0},indicatorsPlacement:{type:String,required:!1,default:"bottom",validator:e=>["top","top-start","top-end","bottom","bottom-start","bottom-end"].indexOf(e)!==-1},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},indicatorWidth:{type:Number,required:!1,default:2.125,validator:e=>e>=0},keyId:{type:String,required:!1,default:void 0},modelValue:{type:[Number,String],required:!1,default:void 0},texts:{type:Object,required:!1,default:()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"})}},emits:["change","play","stop","update:modelValue"],setup(e){const{textsLocal:a}=qe(e),{ariaLabelAttributes:t}=Me(e),{arrowsPlacementClass:l,arrowsTriggerClass:i,indicatorsPlacementClass:c}=Ve(e),{dataLocal:r}=$e(e),{carouselRef:d,indicatorsData:s,initObserver:A,removeObserver:p,useObserver:E}=De(e,{dataLocal:r}),{arrowsShowLocal:S}=we(e),{activeId:C,changeActiveId:h,initActiveId:B,toNextSlide:q,toPreviousSlide:Y}=ke(e,{dataLocal:r});return B(),ue(E,b=>{b?A():p()}),Ae(()=>{A()}),Le(()=>{p()}),{activeId:C,ariaLabelAttributes:t,arrowsPlacementClass:l,arrowsShowLocal:S,arrowsTriggerClass:i,carouselRef:d,changeActiveId:h,dataLocal:r,indicatorsData:s,indicatorsPlacementClass:c,textsLocal:a,toNextSlide:q,toPreviousSlide:Y}},render(){return m("section",{id:this.id,"aria-roledescription":"carousel",class:["a_carousel",this.indicatorsPlacementClass,this.arrowsPlacementClass,this.arrowsTriggerClass],...this.ariaLabelAttributes},[m("div",{ref:"carouselRef",class:"a_carousel__inner"},[this.arrowsShowLocal?m(Q,{btnAttributes:this.arrowPreviousAttributes,disabled:this.disabled,icon:this.arrowPreviousIcon,texts:this.textsLocal,type:"previous",onToSlide:this.toPreviousSlide}):void 0,m(Be,{activeId:this.activeId,autoplayInterval:this.autoplayInterval,autoplayShow:this.autoplayShow,data:this.indicatorsData,disabled:this.disabled,extra:this.extra,parentId:this.id,indicatorsShow:this.indicatorsShow,indicatorsType:this.indicatorsType,texts:this.texts,onChangeActiveId:this.changeActiveId,onToNextSlide:this.toNextSlide,onToPreviousSlide:this.toPreviousSlide}),m("div",{"aria-live":"polite",class:"a_carousel__items"},[...this.dataLocal.map((e,a)=>m(xe,{key:e[g],activeId:this.activeId,dataCount:this.dataLocal.length,item:e,itemIndex:a,parentId:this.id,texts:this.textsLocal},this.$slots))]),this.arrowsShowLocal?m(Q,{btnAttributes:this.arrowNextAttributes,disabled:this.disabled,icon:this.arrowNextIcon,texts:this.textsLocal,type:"next",onToSlide:this.toNextSlide}):void 0])])}};function Ye(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function He(){return{codeJs:`import {
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
};`}}const Ge={name:"PageCarouselAriaDisabled",components:{ACarousel:f,AlohaExample:v},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Ye(),{codeJs:t}=He();return{codeHtml:a,codeJs:t,data:e}}},je={class:"a_columns a_columns_count_12"},Je={class:"a_column a_column_12_touch a_column_4"},We=["src","alt"];function Ke(e,a,t,l,i,c){const r=O("a-carousel"),d=O("aloha-example");return P(),I(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_",description:"_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_",props:"aria-disabled"},{default:T(()=>[o("div",je,[o("div",Je,[L(r,{"aria-disabled":!0,data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:T(({item:s})=>[o("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,We)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Xe=N(Ge,[["render",Ke]]);function Fe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ze(){return{codeJs:`import {
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
};`}}const Qe={name:"PageCarouselArrowsTrigger",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Fe(),{codeJs:t}=ze();return{codeHtml:a,codeJs:t,data:e}}},Ze={class:"a_columns a_columns_count_12"},ea={class:"a_column a_column_12_touch a_column_4"},aa=["src","alt"],ta={class:"a_column a_column_12_touch a_column_4"},_a=["src","alt"],la={class:"a_column a_column_12_touch a_column_4"},sa=["src","alt"],ra={class:"a_column a_column_12_touch a_column_4"},oa=["src","alt"];function na(e,a,t,l,i,c){const r=O("a-translation"),d=O("a-carousel"),s=O("aloha-example");return P(),I(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_",description:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_",props:"arrows-trigger"},{default:T(()=>[o("div",Ze,[o("div",ea,[L(r,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"}),L(d,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:T(({item:A})=>[o("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,aa)]),_:1},8,["data"])]),o("div",ta,[L(r,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"}),L(d,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"focus","key-id":"id"},{item:T(({item:A})=>[o("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,_a)]),_:1},8,["data"])]),o("div",la,[L(r,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"}),L(d,{"arrows-trigger":["hover","focus"],data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:T(({item:A})=>[o("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,sa)]),_:1},8,["data"])]),o("div",ra,[L(r,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"}),L(d,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"always","key-id":"id"},{item:T(({item:A})=>[o("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,oa)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const ia=N(Qe,[["render",na]]);function da(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ca(){return{codeJs:`import { 
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
};`}}const ua={name:"PageCarouselBasic",components:{ACarousel:f,AlohaExample:v},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),a=n(()=>[{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:t}=da(),{codeJs:l}=ca();return{codeHtml:t,codeJs:l,data:e,dataOne:a}}},Aa={class:"a_columns a_columns_count_12"},La={class:"a_column a_column_12_touch a_column_4"},Oa=["src","alt"],pa={class:"a_column a_column_12_touch a_column_4"},Ta=["src","alt"];function Ea(e,a,t,l,i,c){const r=O("a-carousel"),d=O("aloha-example");return P(),I(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:T(()=>[o("div",Aa,[o("div",La,[L(r,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:T(({item:s})=>[o("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,Oa)]),_:1},8,["data"])]),o("div",pa,[L(r,{data:e.dataOne,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:T(({item:s})=>[o("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,Ta)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const ma=N(ua,[["render",Ea]]);function Sa(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ca(){return{codeJs:`import {
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
};`}}const ga={name:"PageCarouselIndicatorsAutoLimit",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:9,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:10,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:11,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:12,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:13,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:14,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:15,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:16,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:17,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:18,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:19,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:20,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:21,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:22,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:23,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:24,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:25,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:26,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Sa(),{codeJs:t}=Ca();return{codeHtml:a,codeJs:t,data:e}}},ha={class:"a_columns a_columns_count_12"},ba={class:"a_column a_column_12_touch a_column_4"},Ra=["src","alt"];function Na(e,a,t,l,i,c){const r=O("a-carousel"),d=O("aloha-example");return P(),I(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_DESCRIPTION_",props:"indicators-auto-limit"},{default:T(()=>[o("div",ha,[o("div",ba,[L(r,{data:e.data,"indicators-auto-limit":!0,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:T(({item:s})=>[o("div",null,x(s.id),1),o("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,Ra)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ia=N(ga,[["render",Na]]);function Pa(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function va(){return{codeJs:`import {
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
};`}}const fa={name:"PageCarouselIndicatorsLimit",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Pa(),{codeJs:t}=va();return{codeHtml:a,codeJs:t,data:e}}},Ba={class:"a_columns a_columns_count_12"},ya={class:"a_column a_column_12_touch a_column_4"},Ua=["src","alt"],xa={class:"a_column a_column_12_touch a_column_4"},ka=["src","alt"];function Ma(e,a,t,l,i,c){const r=O("a-carousel"),d=O("aloha-example");return P(),I(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_DESCRIPTION_",props:"indicators-limit"},{default:T(()=>[o("div",Ba,[o("div",ya,[a[0]||(a[0]=o("h3",null,[o("strong",{lang:"en"},'indicators-limit="6"')],-1)),L(r,{data:e.data,"indicators-limit":6,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:T(({item:s})=>[o("div",null,x(s.id),1),o("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,Ua)]),_:1},8,["data"])]),o("div",xa,[a[1]||(a[1]=o("h3",null,[o("strong",{lang:"en"},'indicators-limit="3"')],-1)),L(r,{data:e.data,"indicators-limit":3,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:T(({item:s})=>[o("div",null,x(s.id),1),o("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,ka)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const wa=N(fa,[["render",Ma]]);function Va(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function $a(){return{codeJs:`import {
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
};`}}const Da={name:"PageCarouselIndicatorsType",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=n(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Va(),{codeJs:t}=$a();return{codeHtml:a,codeJs:t,data:e}}},qa={class:"a_columns a_columns_count_12"},Ya={class:"a_column a_column_12_touch a_column_4"},Ha=["src","alt"],Ga={class:"a_column a_column_12_touch a_column_4"},ja=["src","alt"];function Ja(e,a,t,l,i,c){const r=O("a-carousel"),d=O("aloha-example");return P(),I(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_TYPE_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_TYPE_DESCRIPTION_",props:"indicators-type"},{default:T(()=>[o("div",qa,[o("div",Ya,[a[0]||(a[0]=o("h3",null,[o("strong",{lang:"en"},"dots")],-1)),L(r,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","indicators-type":"dots","key-id":"id"},{item:T(({item:s})=>[o("div",null,x(s.id),1),o("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,Ha)]),_:1},8,["data"])]),o("div",Ga,[a[1]||(a[1]=o("h3",null,[o("strong",{lang:"en"},"squares")],-1)),L(r,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","indicators-type":"squares","key-id":"id"},{item:T(({item:s})=>[o("div",null,x(s.id),1),o("img",{class:"a_height_auto a_width_100",src:s.src,alt:s.alt},null,8,ja)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Wa=N(Da,[["render",Ja]]);function Ka(){const e=n(()=>_({placeholder:"_A_CAROUSEL_COMPONENT_NAME_"}));return{pageTitle:n(()=>`ACarousel${e.value?` (${e.value})`:""}`)}}function Xa(){return{dataProps:[{name:"aria-label",description:"_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:void 0,required:!0},{name:"aria-disabled",description:"_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"arrow-previous-attributes",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-previous-icon",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_",type:"String",default:"ChevronLeft",required:!1},{name:"arrow-next-attributes",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-next-icon",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_",type:"String",default:"ChevronRight",required:!1},{name:"arrows-show",description:"_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"arrows-trigger",description:"_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_",type:"String / Array",default:"always",required:!1},{name:"arrows-placement",description:"_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_",type:"String",default:"sides-center",required:!1},{name:"autoplay-interval",description:"_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_",type:"Number",default:5e3,required:!1},{name:"autoplay-show",description:"_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"autoplay-start",description:"_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"data",description:"_A_CAROUSEL_PROPS_DATA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"disabled",description:"_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"id",description:"_A_CAROUSEL_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_carousel_")',required:!1},{name:"indicators-auto-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_AUTO_LIMIT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"indicators-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_LIMIT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"indicators-show",description:"_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"indicators-type",description:"_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_",type:"String",default:"dots",required:!1},{name:"indicator-width",description:"_A_CAROUSEL_PROPS_INDICATOR_WIDTH_DESCRIPTION_",type:"Number",default:2.125,required:!1},{name:"key-id",description:"_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"model-value",description:"_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Number / String",default:void 0,required:!1},{name:"texts",description:"_A_CAROUSEL_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function Fa(){return{dataTranslate:["_A_CAROUSEL_NEXT_SLIDE_","_A_CAROUSEL_PREVIOUS_SLIDE_","_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_","_A_CAROUSEL_CONTROLS_SLIDES_","_A_CAROUSEL_CONTROLS_START_","_A_CAROUSEL_CONTROLS_STOP_","_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"]}}const za={name:"PageCarousel",components:{AlohaPage:le,AlohaTableProps:se,AlohaTableTranslate:re,ATranslation:k,PageCarouselAriaDisabled:Xe,PageCarouselArrowsTrigger:ia,PageCarouselBasic:ma,PageCarouselIndicatorsAutoLimit:Ia,PageCarouselIndicatorsLimit:wa,PageCarouselIndicatorsType:Wa},setup(){const{pageTitle:e}=Ka(),{dataProps:a}=Xa(),{dataTranslate:t}=Fa();return{dataProps:a,dataTranslate:t,pageTitle:e}}};function Qa(e,a,t,l,i,c){const r=O("a-translation"),d=O("page-carousel-basic"),s=O("page-carousel-aria-disabled"),A=O("page-carousel-arrows-trigger"),p=O("page-carousel-indicators-limit"),E=O("page-carousel-indicators-auto-limit"),S=O("page-carousel-indicators-type"),C=O("aloha-table-props"),h=O("aloha-table-translate"),B=O("aloha-page");return P(),I(B,{"page-title":e.pageTitle},{body:T(()=>[L(r,{tag:"p",html:"_A_CAROUSEL_COMPONENT_DESCRIPTION_"}),L(d),L(s),L(A),L(p),L(E),L(S),L(C,{data:e.dataProps},null,8,["data"]),L(h,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const pt=N(za,[["render",Qa]]);export{pt as default};
