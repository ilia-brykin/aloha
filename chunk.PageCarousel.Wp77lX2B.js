import{A as v,a as ae}from"./chunk.AlohaExample.BkpaIp2H.js";import{A as te}from"./chunk.AlohaTableProps.CQupy9sK.js";import{A as _e}from"./chunk.AlohaTableTranslate.Di_GvXbB.js";import{f as F,h as g,i as U,j as $,k as J,l as H,s as le,g as _,_ as N,A as k}from"./bundle.index.DtrGaTsN.js";import{t as u,d as i,h as S,e as L,r as q,A as se,a$ as re,O as oe,f as ne,B as ie,o as de,U as I,aS as E,V as P,Y as r,Z as O,aT as x}from"./chunk.vendor.B8i9Zb03.js";import{Y as ce,h as Z,N as W,Z as z,f as Y,c as Q,g as ue,M as K,_ as Ae,v as Le,u as Oe,a as pe,e as Te}from"./chunk.vendor-lodash.GQwVh4JN.js";import"./chunk.APageTabTitle.CkNbxjdZ.js";import"./chunk.AlohaHighlightjs.DOgKZA3M.js";import"./chunk.ATable.VLsKiUMP.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.F_OeclwJ.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function Ee(e){const a=u(e,"type");return{btnClass:i(()=>`a_carousel__arrow_${a.value}`)}}function Se(e){const a=u(e,"texts"),t=u(e,"type");return{btnTitle:i(()=>{if(t.value==="previous")return a.value.previousSlide;if(t.value==="next")return a.value.nextSlide})}}const X={name:"ACarouselBtn",props:{ariaDisabled:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},disabled:{type:Boolean,required:!1},icon:{type:String,required:!1,default:void 0},texts:{type:Object,required:!0},type:{type:String,required:!0,validator:e=>["previous","next"].includes(e)}},emits:["toSlide"],setup(e){const{btnClass:a}=Ee(e),{btnTitle:t}=Se(e);return{btnClass:a,btnTitle:t}},render(){return S(F,{class:["a_carousel__arrow",this.btnClass],ariaDisabled:this.ariaDisabled,disabled:this.disabled,iconLeft:this.icon,title:this.btnTitle,textScreenReader:this.btnTitle,type:"button",onClick:()=>this.$emit("toSlide"),...this.btnAttributes})}};function Ce(e){const a=u(e,"activeId"),t=u(e,"data"),l=i(()=>t.value[g]===a.value),d=i(()=>{var c;return(c=t.value)!=null&&c[U].length?ce(t.value[U],[g,a.value]):!1});return{isActive:l,isActiveInChildren:d}}function me(e,{isActive:a=i(()=>!1)}){const t=u(e,"data"),l=u(e,"parentId"),d=i(()=>t.value[$]+1),c=i(()=>`${l.value}_tab_${d.value}`),s=i(()=>`${l.value}_item_${d.value}`),n=i(()=>a.value?"0":"-1");return{ariaControls:s,id:c,number:d,tabindex:n}}function ge({emit:e}){return{changeActiveId:({item:l})=>{e("changeActiveId",{id:l[g]})},onPressBtn:l=>{l.keyCode===J.arrowLeft?(l.preventDefault(),e("toPreviousSlide",{withFocus:!0})):l.keyCode===J.arrowRight&&(l.preventDefault(),e("toNextSlide",{withFocus:!0}))}}}const he={icons:{dots:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="16" cy="15" r="10"></circle>
  <circle class="tab-background" cx="16" cy="15" r="8"></circle>
  <circle class="tab" cx="16" cy="15" r="6"></circle>
</svg>`,squares:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect class="border" x="6" y="5" width="20" height="20" rx="2" ry="2"></rect>
  <rect class="tab-background" x="8" y="7" width="16" height="16" rx="2" ry="2"></rect>
  <rect class="tab" x="10" y="9" width="12" height="12" rx="2" ry="2"></rect>
</svg>`}};function be(e){const a=u(e,"indicatorsType");return{indicatorIcon:i(()=>he.icons[a.value])}}const Re={name:"ACarouselControlsIndicator",props:{activeId:{type:[String,Number],required:!0},data:{type:Object,required:!0},disabled:{type:Boolean,required:!1},hide:{type:Boolean,required:!1},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(e,a){const{indicatorIcon:t}=be(e),{isActive:l,isActiveInChildren:d}=Ce(e),{changeActiveId:c,onPressBtn:s}=ge(a),{ariaControls:n,id:o,number:A,tabindex:p}=me(e,{isActive:l});return{ariaControls:n,changeActiveId:c,id:o,indicatorIcon:t,isActive:l,isActiveInChildren:d,number:A,onPressBtn:s,tabindex:p}},render(){var e,a;return S("div",{class:"a_carousel__tabs__btn__wrapper"},[S(F,{id:this.id,"aria-selected":!1,"aria-controls":this.ariaControls,class:["a_carousel__tabs__btn",{a_carousel__tabs__btn_active:this.isActive,a_carousel__tabs__btn_hide:this.hide}],iconLeft:this.indicatorIcon,disabled:this.disabled,type:"button",tabindex:this.tabindex,role:"tab",title:this.texts.controlsSlide,textScreenReader:this.texts.controlsSlide,extra:{number:this.number},onClick:()=>this.changeActiveId({item:this.data}),onKeydown:this.onPressBtn}),(a=(e=this.data)==null?void 0:e[U])!=null&&a.length?S("div",{class:["a_carousel__tabs__btn__children",{a_carousel__tabs__btn__children_active:this.isActiveInChildren}]},[this.data[U].map(t=>S(L("ACarouselControlsIndicator"),{activeId:this.activeId,data:t,disabled:this.disabled,hide:!0,indicatorsType:this.indicatorsType,parentId:this.parentId,texts:this.texts,onChangeActiveId:l=>this.$emit("changeActiveId",l),onToNextSlide:l=>this.$emit("toNextSlide",l),onToPreviousSlide:l=>this.$emit("toPreviousSlide",l)}))]):""])}};function Ne(){return{ariaLabelTabsAttributes:i(()=>H({attr:"aria-label",placeholder:"_A_CAROUSEL_CONTROLS_SLIDES_"}))}}const Ie={name:"ACarouselControls",props:{activeId:{type:[String,Number],required:!0},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},parentId:{type:String,required:!0},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(){const{ariaLabelTabsAttributes:e}=Ne();return{ariaLabelTabsAttributes:e}},render(){return this.data.length<=1?null:[S("div",{class:"a_carousel__tabs__wrapper"},[S("div",{class:["a_carousel__tabs",this.indicatorsType?`a_carousel__tabs_${this.indicatorsType}`:"a_carousel__tabs_custom"],role:"tablist",...this.ariaLabelTabsAttributes},[...this.data.map(e=>S(Re,{activeId:this.activeId,data:e,disabled:this.disabled,indicatorsType:this.indicatorsType,parentId:this.parentId,texts:this.texts,onChangeActiveId:a=>this.$emit("changeActiveId",a),onToNextSlide:a=>this.$emit("toNextSlide",a),onToPreviousSlide:a=>this.$emit("toPreviousSlide",a)}))])])]}};function Pe(e){const a=u(e,"dataCount"),t=u(e,"itemIndex"),l=u(e,"parentId"),d=u(e,"texts"),c=i(()=>t.value+1),s=i(()=>`${l.value}_item_${c.value}`);return{ariaLabelAttributes:i(()=>H({attr:"aria-label",placeholder:d.value.itemAriaLabel,extra:{count:a.value,number:c.value}})),idLocal:s}}function ve(e){const a=u(e,"activeId"),t=u(e,"item");return{isActive:i(()=>t.value[g]===a.value)}}const fe={name:"ACarouselItem",props:{activeId:{type:[String,Number],required:!0},dataCount:{type:Number,required:!0},item:{type:Object,required:!0},itemIndex:{type:Number,required:!0},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["change","play","stop","update:modelValue"],setup(e){const{ariaLabelAttributes:a,idLocal:t}=Pe(e),{isActive:l}=ve(e);return{ariaLabelAttributes:a,idLocal:t,isActive:l}},render(){return S("div",{id:this.idLocal,"aria-roledescription":"slide",class:["a_carousel__item",{a_carousel__item_active:this.isActive}],...this.ariaLabelAttributes},[this.$slots.item?this.$slots.item({activeId:this.activeId,dataCount:this.dataCount,item:this.item,itemIndex:this.itemIndex,isActive:this.isActive,parentId:this.parentId}):void 0])}};function Be(e,{dataLocal:a=i(()=>[])}){const t=u(e,"id"),l=u(e,"modelValue"),d=q(void 0),c=()=>{var p,T;Z(l.value)?d.value=(T=(p=a.value)==null?void 0:p[0])==null?void 0:T[g]:d.value=l.value},s=({id:p})=>{d.value=p},n=({nextSlideIndex:p})=>{setTimeout(()=>{const T=`${t.value}_tab_${p+1}`;le({selector:`#${T}`})})};return{activeId:d,changeActiveId:s,initActiveId:c,toNextSlide:({withFocus:p}={})=>{var h,b;const T=W(a.value,[g,d.value]);let C;T===-1||T>=a.value.length-1?C=0:C=T+1,s({id:(b=(h=a.value)==null?void 0:h[C])==null?void 0:b[g]}),p&&n({nextSlideIndex:C})},toPreviousSlide:({withFocus:p}={})=>{var h,b;const T=W(a.value,[g,d.value]);let C;T===-1||T<=0?C=a.value.length-1:C=T-1,s({id:(b=(h=a.value)==null?void 0:h[C])==null?void 0:b[g]}),p&&n({nextSlideIndex:C})}}}function ye(e){const a=u(e,"ariaLabel"),t=u(e,"extra");return{ariaLabelAttributes:i(()=>H({attr:"aria-label",placeholder:a.value,extra:t.value}))}}function Ue(e){const a=u(e,"arrowsPlacement"),t=u(e,"arrowsTrigger"),l=u(e,"indicatorsPlacement"),d=i(()=>l.value?`a_carousel_tabs_${l.value}`:void 0),c=i(()=>a.value?`a_carousel_arrows_${a.value}`:void 0),s=i(()=>{const n=z(t.value),o=[];return Y(n,A=>{o.push(`a_carousel_trigger_${A}`)}),o.join(" ")});return{arrowsPlacementClass:c,arrowsTriggerClass:s,indicatorsPlacementClass:d}}function xe(e){const a=u(e,"data"),t=u(e,"keyId");return{dataLocal:i(()=>{const d=Q(a.value);return t.value?Y(d,(c,s)=>{c[g]=ue(c,t.value)||s,c[$]=s}):Y(d,(c,s)=>{c[g]=s,c[$]=s}),d})}}function ke(e,{dataLocal:a=i(()=>[])}){const t=u(e,"indicatorsAutoLimit"),l=u(e,"indicatorsLimit"),d=u(e,"indicatorsMargin"),c=u(e,"indicatorsShow"),s=u(e,"indicatorWidth"),n=q(void 0),o=q(0);let A=null;const p=i(()=>c.value&&t.value),T=i(()=>{if(!p.value)return l.value;const m=K.floor((o.value-d.value)/s.value);return l.value?Ae([m,l.value]):m}),C=()=>{A||!p.value||(A=new ResizeObserver(m=>{for(const B of m)o.value=B.contentRect.width}),n.value&&A.observe(n.value))},h=()=>{A&&n.value&&A.unobserve(n.value)},b=i(()=>{const m=T.value;if(Z(m)||m>=a.value.length)return a.value;const B=0,M=a.value.length-1,G=m-2,ee=M/(G+1),w=new Set;w.add(B),w.add(M);for(let R=1;R<=G;R++){const y=Le(R*ee);w.add(y)}const V=[];let j=-1,D=[];return K.forEach(Q(a.value),(R,y)=>{R[$]=y,w.has(y)?(j!==-1&&D.length>0&&(V[V.length-1][U]=D,D=[]),V.push(R),j=y):D.push(R)}),V});return{carouselRef:n,indicatorsData:b,initObserver:C,removeObserver:h,useObserver:p}}function Me(e){const a=se(e);return{textsLocal:i(()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",...a.value}))}}const f={name:"ACarousel",props:{ariaDisabled:{type:Boolean,required:!1},ariaLabel:{type:String,required:!0},arrowNextAttributes:{type:Object,required:!1,default:()=>({})},arrowNextIcon:{type:String,required:!1,default:oe},arrowPreviousAttributes:{type:Object,required:!1,default:()=>({})},arrowPreviousIcon:{type:String,required:!1,default:re},arrowsPlacement:{type:String,default:"sides-center",validator:e=>["sides-center"].includes(e)},arrowsShow:{type:Boolean,required:!1,default:!0},arrowsTrigger:{type:[String,Array],default:"always",validator:e=>{const a=z(e);return pe(a)&&Te(a,t=>["always","hover","focus"].includes(t))}},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,required:!1,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},id:{type:String,required:!1,default:()=>Oe("a_carousel_")},indicatorsAutoLimit:{type:Boolean,required:!1,default:!1},indicatorsLimit:{type:Number,required:!1,default:void 0},indicatorsMargin:{type:Number,required:!1,default:100,validator:e=>e>=0},indicatorsPlacement:{type:String,required:!1,default:"bottom",validator:e=>["top","top-start","top-end","bottom","bottom-start","bottom-end"].indexOf(e)!==-1},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},indicatorWidth:{type:Number,required:!1,default:34},keyId:{type:String,required:!1,default:void 0},modelValue:{type:[Number,String],required:!1,default:void 0},texts:{type:Object,required:!1,default:()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"})}},emits:["change","play","stop","update:modelValue"],setup(e){const{textsLocal:a}=Me(e),{ariaLabelAttributes:t}=ye(e),{arrowsPlacementClass:l,arrowsTriggerClass:d,indicatorsPlacementClass:c}=Ue(e),{dataLocal:s}=xe(e),{carouselRef:n,indicatorsData:o,initObserver:A,removeObserver:p,useObserver:T}=ke(e,{dataLocal:s}),{activeId:C,changeActiveId:h,initActiveId:b,toNextSlide:m,toPreviousSlide:B}=Be(e,{dataLocal:s});return b(),ne(T,M=>{M?A():p()}),ie(()=>{A()}),de(()=>{p()}),{activeId:C,ariaLabelAttributes:t,arrowsPlacementClass:l,arrowsTriggerClass:d,carouselRef:n,changeActiveId:h,dataLocal:s,indicatorsData:o,indicatorsPlacementClass:c,textsLocal:a,toNextSlide:m,toPreviousSlide:B}},render(){return S("section",{id:this.id,"aria-roledescription":"carousel",class:["a_carousel",this.indicatorsPlacementClass,this.arrowsPlacementClass,this.arrowsTriggerClass],...this.ariaLabelAttributes},[S("div",{ref:"carouselRef",class:"a_carousel__inner"},[this.arrowsShow?S(X,{btnAttributes:this.arrowPreviousAttributes,disabled:this.disabled,icon:this.arrowPreviousIcon,texts:this.textsLocal,type:"previous",onToSlide:this.toPreviousSlide}):void 0,S(Ie,{activeId:this.activeId,autoplayInterval:this.autoplayInterval,autoplayShow:this.autoplayShow,data:this.indicatorsData,disabled:this.disabled,extra:this.extra,parentId:this.id,indicatorsShow:this.indicatorsShow,indicatorsType:this.indicatorsType,texts:this.texts,onChangeActiveId:this.changeActiveId,onToNextSlide:this.toNextSlide,onToPreviousSlide:this.toPreviousSlide}),S("div",{"aria-live":"polite",class:"a_carousel__items"},[...this.dataLocal.map((e,a)=>S(fe,{key:e[g],activeId:this.activeId,dataCount:this.dataLocal.length,item:e,itemIndex:a,parentId:this.id,texts:this.textsLocal},this.$slots))]),this.arrowsShow?S(X,{btnAttributes:this.arrowNextAttributes,disabled:this.disabled,icon:this.arrowNextIcon,texts:this.textsLocal,type:"next",onToSlide:this.toNextSlide}):void 0])])}};function we(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ve(){return{codeJs:`import {
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
};`}}const De={name:"PageCarouselAriaDisabled",components:{ACarousel:f,AlohaExample:v},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=we(),{codeJs:t}=Ve();return{codeHtml:a,codeJs:t,data:e}}},$e={class:"a_columns a_columns_count_12"},qe={class:"a_column a_column_12_touch a_column_4"},Ye=["src","alt"];function He(e,a,t,l,d,c){const s=L("a-carousel"),n=L("aloha-example");return P(),I(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_",description:"_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_",props:"aria-disabled"},{default:E(()=>[r("div",$e,[r("div",qe,[O(s,{"aria-disabled":!0,data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:E(({item:o})=>[r("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Ye)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ge=N(De,[["render",He]]);function je(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Je(){return{codeJs:`import {
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
};`}}const We={name:"PageCarouselArrowsTrigger",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=je(),{codeJs:t}=Je();return{codeHtml:a,codeJs:t,data:e}}},Ke={class:"a_columns a_columns_count_12"},Xe={class:"a_column a_column_12_touch a_column_4"},Fe=["src","alt"],Ze={class:"a_column a_column_12_touch a_column_4"},ze=["src","alt"],Qe={class:"a_column a_column_12_touch a_column_4"},ea=["src","alt"],aa={class:"a_column a_column_12_touch a_column_4"},ta=["src","alt"];function _a(e,a,t,l,d,c){const s=L("a-translation"),n=L("a-carousel"),o=L("aloha-example");return P(),I(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_",description:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_",props:"arrows-trigger"},{default:E(()=>[r("div",Ke,[r("div",Xe,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"}),O(n,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:A})=>[r("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,Fe)]),_:1},8,["data"])]),r("div",Ze,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"}),O(n,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"focus","key-id":"id"},{item:E(({item:A})=>[r("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,ze)]),_:1},8,["data"])]),r("div",Qe,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"}),O(n,{"arrows-trigger":["hover","focus"],data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:E(({item:A})=>[r("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,ea)]),_:1},8,["data"])]),r("div",aa,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"}),O(n,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"always","key-id":"id"},{item:E(({item:A})=>[r("img",{class:"a_height_auto a_width_100",src:A.src,alt:A.alt},null,8,ta)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const la=N(We,[["render",_a]]);function sa(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ra(){return{codeJs:`import { 
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
};`}}const oa={name:"PageCarouselBasic",components:{ACarousel:f,AlohaExample:v},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=sa(),{codeJs:t}=ra();return{codeHtml:a,codeJs:t,data:e}}},na={class:"a_columns a_columns_count_12"},ia={class:"a_column a_column_12_touch a_column_4"},da=["src","alt"];function ca(e,a,t,l,d,c){const s=L("a-carousel"),n=L("aloha-example");return P(),I(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:E(()=>[r("div",na,[r("div",ia,[O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:E(({item:o})=>[r("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,da)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const ua=N(oa,[["render",ca]]);function Aa(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function La(){return{codeJs:`import {
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
};`}}const Oa={name:"PageCarouselIndicatorsAutoLimit",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:9,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:10,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:11,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:12,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:13,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:14,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:15,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:16,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:17,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:18,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:19,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:20,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:21,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:22,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:23,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:24,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:25,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:26,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Aa(),{codeJs:t}=La();return{codeHtml:a,codeJs:t,data:e}}},pa={class:"a_columns a_columns_count_12"},Ta={class:"a_column a_column_12_touch a_column_4"},Ea=["src","alt"];function Sa(e,a,t,l,d,c){const s=L("a-carousel"),n=L("aloha-example");return P(),I(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_DESCRIPTION_",props:"indicators-auto-limit"},{default:E(()=>[r("div",pa,[r("div",Ta,[O(s,{data:e.data,"indicators-auto-limit":!0,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:o})=>[r("div",null,x(o.id),1),r("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Ea)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ca=N(Oa,[["render",Sa]]);function ma(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ga(){return{codeJs:`import {
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
};`}}const ha={name:"PageCarouselIndicatorsLimit",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=ma(),{codeJs:t}=ga();return{codeHtml:a,codeJs:t,data:e}}},ba={class:"a_columns a_columns_count_12"},Ra={class:"a_column a_column_12_touch a_column_4"},Na=["src","alt"],Ia={class:"a_column a_column_12_touch a_column_4"},Pa=["src","alt"];function va(e,a,t,l,d,c){const s=L("a-carousel"),n=L("aloha-example");return P(),I(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_DESCRIPTION_",props:"indicators-limit"},{default:E(()=>[r("div",ba,[r("div",Ra,[a[0]||(a[0]=r("h3",null,[r("strong",{lang:"en"},'indicators-limit="6"')],-1)),O(s,{data:e.data,"indicators-limit":6,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:o})=>[r("div",null,x(o.id),1),r("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Na)]),_:1},8,["data"])]),r("div",Ia,[a[1]||(a[1]=r("h3",null,[r("strong",{lang:"en"},'indicators-limit="3"')],-1)),O(s,{data:e.data,"indicators-limit":3,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:E(({item:o})=>[r("div",null,x(o.id),1),r("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Pa)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const fa=N(ha,[["render",va]]);function Ba(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ya(){return{codeJs:`import {
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
};`}}const Ua={name:"PageCarouselIndicatorsType",components:{ACarousel:f,AlohaExample:v,ATranslation:k},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Ba(),{codeJs:t}=ya();return{codeHtml:a,codeJs:t,data:e}}},xa={class:"a_columns a_columns_count_12"},ka={class:"a_column a_column_12_touch a_column_4"},Ma=["src","alt"],wa={class:"a_column a_column_12_touch a_column_4"},Va=["src","alt"];function Da(e,a,t,l,d,c){const s=L("a-carousel"),n=L("aloha-example");return P(),I(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_TYPE_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_TYPE_DESCRIPTION_",props:"indicators-type"},{default:E(()=>[r("div",xa,[r("div",ka,[a[0]||(a[0]=r("h3",null,[r("strong",{lang:"en"},"dots")],-1)),O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","indicators-type":"dots","key-id":"id"},{item:E(({item:o})=>[r("div",null,x(o.id),1),r("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Ma)]),_:1},8,["data"])]),r("div",wa,[a[1]||(a[1]=r("h3",null,[r("strong",{lang:"en"},"squares")],-1)),O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","indicators-type":"squares","key-id":"id"},{item:E(({item:o})=>[r("div",null,x(o.id),1),r("img",{class:"a_height_auto a_width_100",src:o.src,alt:o.alt},null,8,Va)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const $a=N(Ua,[["render",Da]]);function qa(){const e=i(()=>_({placeholder:"_A_CAROUSEL_COMPONENT_NAME_"}));return{pageTitle:i(()=>`ACarousel${e.value?` (${e.value})`:""}`)}}function Ya(){return{dataProps:[{name:"aria-label",description:"_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:void 0,required:!0},{name:"aria-disabled",description:"_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"arrow-previous-attributes",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-previous-icon",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_",type:"String",default:"ChevronLeft",required:!1},{name:"arrow-next-attributes",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-next-icon",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_",type:"String",default:"ChevronRight",required:!1},{name:"arrows-show",description:"_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"arrows-trigger",description:"_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_",type:"String / Array",default:"always",required:!1},{name:"arrows-placement",description:"_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_",type:"String",default:"sides-center",required:!1},{name:"autoplay-interval",description:"_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_",type:"Number",default:5e3,required:!1},{name:"autoplay-show",description:"_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"autoplay-start",description:"_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"data",description:"_A_CAROUSEL_PROPS_DATA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"disabled",description:"_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"id",description:"_A_CAROUSEL_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_carousel_")',required:!1},{name:"indicators-auto-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_AUTO_LIMIT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"indicators-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_LIMIT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"indicators-show",description:"_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"indicators-type",description:"_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_",type:"String",default:"dots",required:!1},{name:"indicator-width",description:"_A_CAROUSEL_PROPS_INDICATOR_WIDTH_DESCRIPTION_",type:"Number",default:34,required:!1},{name:"key-id",description:"_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"model-value",description:"_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Number / String",default:void 0,required:!1},{name:"texts",description:"_A_CAROUSEL_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function Ha(){return{dataTranslate:["_A_CAROUSEL_NEXT_SLIDE_","_A_CAROUSEL_PREVIOUS_SLIDE_","_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_","_A_CAROUSEL_CONTROLS_SLIDES_","_A_CAROUSEL_CONTROLS_START_","_A_CAROUSEL_CONTROLS_STOP_","_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"]}}const Ga={name:"PageCarousel",components:{AlohaPage:ae,AlohaTableProps:te,AlohaTableTranslate:_e,ATranslation:k,PageCarouselAriaDisabled:Ge,PageCarouselArrowsTrigger:la,PageCarouselBasic:ua,PageCarouselIndicatorsAutoLimit:Ca,PageCarouselIndicatorsLimit:fa,PageCarouselIndicatorsType:$a},setup(){const{pageTitle:e}=qa(),{dataProps:a}=Ya(),{dataTranslate:t}=Ha();return{dataProps:a,dataTranslate:t,pageTitle:e}}};function ja(e,a,t,l,d,c){const s=L("a-translation"),n=L("page-carousel-basic"),o=L("page-carousel-aria-disabled"),A=L("page-carousel-arrows-trigger"),p=L("page-carousel-indicators-limit"),T=L("page-carousel-indicators-auto-limit"),C=L("page-carousel-indicators-type"),h=L("aloha-table-props"),b=L("aloha-table-translate"),m=L("aloha-page");return P(),I(m,{"page-title":e.pageTitle},{body:E(()=>[O(s,{tag:"p",html:"_A_CAROUSEL_COMPONENT_DESCRIPTION_"}),O(n),O(o),O(A),O(p),O(T),O(C),O(h,{data:e.dataProps},null,8,["data"]),O(b,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const it=N(Ga,[["render",ja]]);export{it as default};
