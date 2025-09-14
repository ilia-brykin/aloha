import{A as v,a as se}from"./chunk.AlohaExample.BCCG0H9g.js";import{A as re}from"./chunk.AlohaTableProps.qz3wP-OK.js";import{A as oe}from"./chunk.AlohaTableTranslate.Bz3F4Gvp.js";import{f as ee,h as C,i as w,j as J,k as F,l as K,s as ne,m as ie,g as _,_ as R,A as V}from"./bundle.index.CGNfdx9Q.js";import{t as A,d as i,h as S,e as u,r as G,B as de,b0 as ce,Q as ue,f as X,D as Ae,o as Le,V as N,aT as p,W as P,Z as n,_ as O,aU as $}from"./chunk.vendor.BAPLGb06.js";import{R as Oe,X as pe,h as ae,N as z,$ as te,f as j,c as _e,g as Te,M as Q,a0 as me,v as Ee,u as Se,a as ge,e as Ce}from"./chunk.vendor-lodash.CStjNiQe.js";import"./chunk.APageTabTitle.BqNhWTka.js";import"./chunk.AlohaHighlightjs.BZkAdeSp.js";import"./chunk.ATable.De_i9wPk.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.CRLsg1il.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function he(e){const a=A(e,"type");return{btnClass:i(()=>`a_carousel__arrow_${a.value}`)}}function be(e){const a=A(e,"texts"),t=A(e,"type");return{btnTitle:i(()=>{if(t.value==="previous")return a.value.previousSlide;if(t.value==="next")return a.value.nextSlide})}}const Z={name:"ACarouselBtn",props:{ariaDisabled:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},disabled:{type:Boolean,required:!1},icon:{type:String,required:!1,default:void 0},texts:{type:Object,required:!0},type:{type:String,required:!0,validator:e=>["previous","next"].includes(e)}},emits:["toSlide"],setup(e){const{btnClass:a}=he(e),{btnTitle:t}=be(e);return{btnClass:a,btnTitle:t}},render(){return S(ee,{class:["a_carousel__arrow",this.btnClass],ariaDisabled:this.ariaDisabled,disabled:this.disabled,iconLeft:this.icon,title:this.btnTitle,textScreenReader:this.btnTitle,type:"button",onClick:()=>this.$emit("toSlide"),...this.btnAttributes})}};function Re(e){const a=A(e,"activeId"),t=A(e,"data"),l=i(()=>t.value[C]===a.value),c=i(()=>{var o;return(o=t.value)!=null&&o[w].length?Oe(t.value[w],[C,a.value]):!1});return{isActive:l,isActiveInChildren:c}}function Ne(e,{isActive:a=i(()=>!1)}){const t=A(e,"data"),l=A(e,"parentId"),c=i(()=>t.value[J]+1),o=i(()=>`${l.value}_tab_${c.value}`),s=i(()=>`${l.value}_item_${c.value}`),d=i(()=>a.value?"0":"-1");return{ariaControls:s,id:o,number:c,tabindex:d}}function Pe({emit:e}){return{changeActiveId:({item:l})=>{e("changeActiveId",{id:l[C]})},onPressBtn:l=>{l.keyCode===F.arrowLeft?(l.preventDefault(),e("toPreviousSlide",{withFocus:!0})):l.keyCode===F.arrowRight&&(l.preventDefault(),e("toNextSlide",{withFocus:!0}))}}}const Ie={icons:{dots:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="1rem" cy="0.9375rem" r="0.625rem"></circle>
  <circle class="tab-background" cx="1rem" cy="0.9375rem" r="0.5rem"></circle>
  <circle class="tab" cx="1rem" cy="0.9375rem" r="0.375rem"></circle>
</svg>`,squares:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect class="border" x="0.375rem" y="0.3125rem" width="1.25rem" height="1.25rem" rx="0.125rem" ry="0.125rem"></rect>
  <rect class="tab-background" x="0.5rem" y="0.4375rem" width="1rem" height="1rem" rx="0.125rem" ry="0.125rem"></rect>
  <rect class="tab" x="0.625rem" y="0.5625rem" width="0.75rem" height="0.75rem" rx="0.125rem" ry="0.125rem"></rect>
</svg>`}};function ve(e){const a=A(e,"indicatorsType");return{indicatorIcon:i(()=>Ie.icons[a.value])}}const fe={name:"ACarouselControlsIndicator",props:{activeId:{type:[String,Number],required:!0},data:{type:Object,required:!0},disabled:{type:Boolean,required:!1},hide:{type:Boolean,required:!1},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(e,a){const{indicatorIcon:t}=ve(e),{isActive:l,isActiveInChildren:c}=Re(e),{changeActiveId:o,onPressBtn:s}=Pe(a),{ariaControls:d,id:r,number:L,tabindex:h}=Ne(e,{isActive:l});return{ariaControls:d,changeActiveId:o,id:r,indicatorIcon:t,isActive:l,isActiveInChildren:c,number:L,onPressBtn:s,tabindex:h}},render(){var e,a;return S("div",{class:"a_carousel__tabs__btn__wrapper"},[S(ee,{id:this.id,"aria-selected":!1,"aria-controls":this.ariaControls,class:["a_carousel__tabs__btn",{a_carousel__tabs__btn_active:this.isActive,a_carousel__tabs__btn_hide:this.hide}],iconLeft:this.indicatorIcon,disabled:this.disabled,type:"button",tabindex:this.tabindex,role:"tab",title:this.texts.controlsSlide,textScreenReader:this.texts.controlsSlide,extra:{number:this.number},onClick:()=>this.changeActiveId({item:this.data}),onKeydown:this.onPressBtn}),(a=(e=this.data)==null?void 0:e[w])!=null&&a.length?S("div",{class:["a_carousel__tabs__btn__children",{a_carousel__tabs__btn__children_active:this.isActiveInChildren}]},[this.data[w].map(t=>S(u("ACarouselControlsIndicator"),{activeId:this.activeId,data:t,disabled:this.disabled,hide:!0,indicatorsType:this.indicatorsType,parentId:this.parentId,texts:this.texts,onChangeActiveId:l=>this.$emit("changeActiveId",l),onToNextSlide:l=>this.$emit("toNextSlide",l),onToPreviousSlide:l=>this.$emit("toPreviousSlide",l)}))]):""])}};function Be(){return{ariaLabelTabsAttributes:i(()=>K({attr:"aria-label",placeholder:"_A_CAROUSEL_CONTROLS_SLIDES_"}))}}const Ue={name:"ACarouselControls",props:{activeId:{type:[String,Number],required:!0},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},parentId:{type:String,required:!0},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},texts:{type:Object,required:!0}},emits:["changeActiveId","toNextSlide","toPreviousSlide"],setup(){const{ariaLabelTabsAttributes:e}=Be();return{ariaLabelTabsAttributes:e}},render(){return this.data.length<=1?null:[S("div",{class:"a_carousel__tabs__wrapper"},[S("div",{class:["a_carousel__tabs",this.indicatorsType?`a_carousel__tabs_${this.indicatorsType}`:"a_carousel__tabs_custom"],role:"tablist",...this.ariaLabelTabsAttributes},[...this.data.map(e=>S(fe,{activeId:this.activeId,data:e,disabled:this.disabled,indicatorsType:this.indicatorsType,parentId:this.parentId,texts:this.texts,onChangeActiveId:a=>this.$emit("changeActiveId",a),onToNextSlide:a=>this.$emit("toNextSlide",a),onToPreviousSlide:a=>this.$emit("toPreviousSlide",a)}))])])]}};function ye(e){const a=A(e,"dataCount"),t=A(e,"itemIndex"),l=A(e,"parentId"),c=A(e,"texts"),o=i(()=>t.value+1),s=i(()=>`${l.value}_item_${o.value}`);return{ariaLabelAttributes:i(()=>K({attr:"aria-label",placeholder:c.value.itemAriaLabel,extra:{count:a.value,number:o.value}})),idLocal:s}}function ke(e){const a=A(e,"activeId"),t=A(e,"item");return{isActive:i(()=>t.value[C]===a.value)}}const Me={name:"ACarouselItem",props:{activeId:{type:[String,Number],required:!0},dataCount:{type:Number,required:!0},item:{type:Object,required:!0},itemIndex:{type:Number,required:!0},parentId:{type:String,required:!0},texts:{type:Object,required:!0}},emits:["change","play","stop","update:modelValue"],setup(e){const{ariaLabelAttributes:a,idLocal:t}=ye(e),{isActive:l}=ke(e);return{ariaLabelAttributes:a,idLocal:t,isActive:l}},render(){return S("div",{id:this.idLocal,"aria-roledescription":"slide",class:["a_carousel__item",{a_carousel__item_active:this.isActive}],...this.ariaLabelAttributes},[this.$slots.item?this.$slots.item({activeId:this.activeId,dataCount:this.dataCount,item:this.item,itemIndex:this.itemIndex,isActive:this.isActive,parentId:this.parentId}):void 0])}};function xe(e,{emit:a},{dataLocal:t=i(()=>[])}){const l=A(e,"id"),c=A(e,"modelValue"),o=G(void 0),s=i(()=>pe(t.value,[C,o.value])),d=i(()=>!!s.value),r=()=>{var m,T;ae(c.value)?o.value=(T=(m=t.value)==null?void 0:m[0])==null?void 0:T[C]:o.value=c.value,a("init",{id:o.value,item:s.value})},L=({id:m})=>{o.value=m,a("change",{id:o.value,item:s.value})},h=({nextSlideIndex:m})=>{setTimeout(()=>{const T=`${l.value}_tab_${m+1}`;ne({selector:`#${T}`})})};return{activeId:o,activeItem:s,changeActiveId:L,hasActiveItem:d,initActiveId:r,toFirstSlide:()=>{var m,T;o.value=(T=(m=t.value)==null?void 0:m[0])==null?void 0:T[C],a("change",{id:o.value,item:s.value})},toNextSlide:({withFocus:m}={})=>{var b,E;const T=z(t.value,[C,o.value]);let g;T===-1||T>=t.value.length-1?g=0:g=T+1,L({id:(E=(b=t.value)==null?void 0:b[g])==null?void 0:E[C]}),m&&h({nextSlideIndex:g})},toPreviousSlide:({withFocus:m}={})=>{var b,E;const T=z(t.value,[C,o.value]);let g;T===-1||T<=0?g=t.value.length-1:g=T-1,L({id:(E=(b=t.value)==null?void 0:b[g])==null?void 0:E[C]}),m&&h({nextSlideIndex:g})}}}function we(e){const a=A(e,"ariaLabel"),t=A(e,"extra");return{ariaLabelAttributes:i(()=>K({attr:"aria-label",placeholder:a.value,extra:t.value}))}}function $e(e){const a=A(e,"arrowsShow"),t=A(e,"data");return{arrowsShowLocal:i(()=>{var c;return a.value&&((c=t.value)==null?void 0:c.length)>1})}}function Ve(e){const a=A(e,"arrowsPlacement"),t=A(e,"arrowsTrigger"),l=A(e,"indicatorsPlacement"),c=i(()=>l.value?`a_carousel_tabs_${l.value}`:void 0),o=i(()=>a.value?`a_carousel_arrows_${a.value}`:void 0),s=i(()=>{const d=te(t.value),r=[];return j(d,L=>{r.push(`a_carousel_trigger_${L}`)}),r.join(" ")});return{arrowsPlacementClass:o,arrowsTriggerClass:s,indicatorsPlacementClass:c}}function De(e){const a=A(e,"data"),t=A(e,"keyId");return{dataLocal:i(()=>{const c=_e(a.value);return t.value?j(c,(o,s)=>{o[C]=Te(o,t.value)||s,o[J]=s}):j(c,(o,s)=>{o[C]=s,o[J]=s}),c})}}function qe(e,{dataLocal:a=i(()=>[])}){const t=A(e,"indicatorsAutoLimit"),l=A(e,"indicatorsLimit"),c=A(e,"indicatorsMargin"),o=A(e,"indicatorsShow"),s=A(e,"indicatorWidth"),d=G(void 0),r=G(0);let L=null;const{remPx:h}=ie(),B=i(()=>s.value*h.value),y=i(()=>c.value*h.value),I=i(()=>o.value&&t.value),m=i(()=>{if(!I.value)return l.value;const E=Q.floor((r.value-y.value)/B.value);return l.value?me([E,l.value]):E}),T=()=>{L||!I.value||(L=new ResizeObserver(E=>{for(const k of E)k.contentRect.width!==r.value&&(r.value=k.contentRect.width)}),d.value&&L.observe(d.value))},g=()=>{L&&d.value&&L.unobserve(d.value)},b=i(()=>{const E=m.value;if(ae(E)||E>=a.value.length)return a.value;const k=0,D=a.value.length-1,M=E-2,le=D/(M+1),q=new Set;q.add(k),q.add(D);for(let U=1;U<=M;U++){const x=Ee(U*le);q.add(x)}const H=[];let W=-1,Y=[];return Q.forEach(_e(a.value),(U,x)=>{U[J]=x,q.has(x)?(W!==-1&&Y.length>0&&(H[H.length-1][w]=Y,Y=[]),H.push(U),W=x):Y.push(U)}),H});return{carouselRef:d,indicatorsData:b,initObserver:T,removeObserver:g,useObserver:I}}function He(e){const a=de(e);return{textsLocal:i(()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",...a.value}))}}const f={name:"ACarousel",props:{ariaDisabled:{type:Boolean,required:!1},ariaLabel:{type:String,required:!0},arrowNextAttributes:{type:Object,required:!1,default:()=>({})},arrowNextIcon:{type:String,required:!1,default:ue},arrowPreviousAttributes:{type:Object,required:!1,default:()=>({})},arrowPreviousIcon:{type:String,required:!1,default:ce},arrowsPlacement:{type:String,default:"sides-center",validator:e=>["sides-center"].includes(e)},arrowsShow:{type:Boolean,required:!1,default:!0},arrowsTrigger:{type:[String,Array],default:"always",validator:e=>{const a=te(e);return ge(a)&&Ce(a,t=>["always","hover","focus"].includes(t))}},autoplayInterval:{type:Number,required:!1,default:5e3},autoplayShow:{type:Boolean,required:!1,default:!1},autoplayStart:{type:Boolean,required:!1,default:!1},data:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1},extra:{type:Object,required:!1,default:void 0},id:{type:String,required:!1,default:()=>Se("a_carousel_")},indicatorsAutoLimit:{type:Boolean,required:!1,default:!1},indicatorsLimit:{type:Number,required:!1,default:void 0},indicatorsMargin:{type:Number,required:!1,default:6,validator:e=>e>=0},indicatorsPlacement:{type:String,required:!1,default:"bottom",validator:e=>["top","top-start","top-end","bottom","bottom-start","bottom-end"].indexOf(e)!==-1},indicatorsShow:{type:Boolean,required:!1,default:!0},indicatorsType:{type:String,required:!1,default:"dots",validator:e=>["dots","squares"].indexOf(e)!==-1},indicatorWidth:{type:Number,required:!1,default:2.125,validator:e=>e>=0},keyId:{type:String,required:!1,default:void 0},modelValue:{type:[Number,String],required:!1,default:void 0},texts:{type:Object,required:!1,default:()=>({nextSlide:"_A_CAROUSEL_NEXT_SLIDE_",previousSlide:"_A_CAROUSEL_PREVIOUS_SLIDE_",controlsSlide:"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",controlsSlides:"_A_CAROUSEL_CONTROLS_SLIDES_",controlsStart:"_A_CAROUSEL_CONTROLS_START_",controlsStop:"_A_CAROUSEL_CONTROLS_STOP_",itemAriaLabel:"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"})}},emits:["change","init","play","stop","update:modelValue"],setup(e,a){const{textsLocal:t}=He(e),{ariaLabelAttributes:l}=we(e),{arrowsPlacementClass:c,arrowsTriggerClass:o,indicatorsPlacementClass:s}=Ve(e),{dataLocal:d}=De(e),{carouselRef:r,indicatorsData:L,initObserver:h,removeObserver:B,useObserver:y}=qe(e,{dataLocal:d}),{arrowsShowLocal:I}=$e(e),{activeId:m,changeActiveId:T,hasActiveItem:g,initActiveId:b,toFirstSlide:E,toNextSlide:k,toPreviousSlide:D}=xe(e,a,{dataLocal:d});return b(),X(y,M=>{M?h():B()}),X(g,M=>{M||E()}),Ae(()=>{h()}),Le(()=>{B()}),{activeId:m,ariaLabelAttributes:l,arrowsPlacementClass:c,arrowsShowLocal:I,arrowsTriggerClass:o,carouselRef:r,changeActiveId:T,dataLocal:d,indicatorsData:L,indicatorsPlacementClass:s,textsLocal:t,toNextSlide:k,toPreviousSlide:D}},render(){return S("section",{id:this.id,"aria-roledescription":"carousel",class:["a_carousel",this.indicatorsPlacementClass,this.arrowsPlacementClass,this.arrowsTriggerClass],...this.ariaLabelAttributes},[S("div",{ref:"carouselRef",class:"a_carousel__inner"},[this.arrowsShowLocal?S(Z,{btnAttributes:this.arrowPreviousAttributes,disabled:this.disabled,icon:this.arrowPreviousIcon,texts:this.textsLocal,type:"previous",onToSlide:this.toPreviousSlide}):void 0,S(Ue,{activeId:this.activeId,autoplayInterval:this.autoplayInterval,autoplayShow:this.autoplayShow,data:this.indicatorsData,disabled:this.disabled,extra:this.extra,parentId:this.id,indicatorsShow:this.indicatorsShow,indicatorsType:this.indicatorsType,texts:this.texts,onChangeActiveId:this.changeActiveId,onToNextSlide:this.toNextSlide,onToPreviousSlide:this.toPreviousSlide}),S("div",{"aria-live":"polite",class:"a_carousel__items"},[...this.dataLocal.map((e,a)=>S(Me,{key:e[C],activeId:this.activeId,dataCount:this.dataLocal.length,item:e,itemIndex:a,parentId:this.id,texts:this.textsLocal},this.$slots))]),this.arrowsShowLocal?S(Z,{btnAttributes:this.arrowNextAttributes,disabled:this.disabled,icon:this.arrowNextIcon,texts:this.textsLocal,type:"next",onToSlide:this.toNextSlide}):void 0])])}};function Ye(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Je(){return{codeJs:`import {
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
};`}}const Ge={name:"PageCarouselAriaDisabled",components:{ACarousel:f,AlohaExample:v},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Ye(),{codeJs:t}=Je();return{codeHtml:a,codeJs:t,data:e}}},je={class:"a_columns a_columns_count_12"},Ke={class:"a_column a_column_12_touch a_column_4"},We=["src","alt"];function Fe(e,a,t,l,c,o){const s=u("a-carousel"),d=u("aloha-example");return P(),N(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARIA_DISABLED_HEADER_",description:"_A_CAROUSEL_GROUP_ARIA_DISABLED_DESCRIPTION_",props:"aria-disabled"},{default:p(()=>[n("div",je,[n("div",Ke,[O(s,{"aria-disabled":!0,data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:p(({item:r})=>[n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,We)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Xe=R(Ge,[["render",Fe]]);function ze(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Qe(){return{codeJs:`import {
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
};`}}const Ze={name:"PageCarouselArrowsTrigger",components:{ACarousel:f,AlohaExample:v,ATranslation:V},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=ze(),{codeJs:t}=Qe();return{codeHtml:a,codeJs:t,data:e}}},ea={class:"a_columns a_columns_count_12"},aa={class:"a_column a_column_12_touch a_column_4"},ta=["src","alt"],_a={class:"a_column a_column_12_touch a_column_4"},la=["src","alt"],sa={class:"a_column a_column_12_touch a_column_4"},ra=["src","alt"],oa={class:"a_column a_column_12_touch a_column_4"},na=["src","alt"];function ia(e,a,t,l,c,o){const s=u("a-translation"),d=u("a-carousel"),r=u("aloha-example");return P(),N(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_HEADER_",description:"_A_CAROUSEL_GROUP_ARROWS_TRIGGER_DESCRIPTION_",props:"arrows-trigger"},{default:p(()=>[n("div",ea,[n("div",aa,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"}),O(d,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:p(({item:L})=>[n("img",{class:"a_height_auto a_width_100",src:L.src,alt:L.alt},null,8,ta)]),_:1},8,["data"])]),n("div",_a,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"}),O(d,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"focus","key-id":"id"},{item:p(({item:L})=>[n("img",{class:"a_height_auto a_width_100",src:L.src,alt:L.alt},null,8,la)]),_:1},8,["data"])]),n("div",sa,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"}),O(d,{"arrows-trigger":["hover","focus"],data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:p(({item:L})=>[n("img",{class:"a_height_auto a_width_100",src:L.src,alt:L.alt},null,8,ra)]),_:1},8,["data"])]),n("div",oa,[O(s,{tag:"h3",html:"_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"}),O(d,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"always","key-id":"id"},{item:p(({item:L})=>[n("img",{class:"a_height_auto a_width_100",src:L.src,alt:L.alt},null,8,na)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const da=R(Ze,[["render",ia]]);function ca(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ua(){return{codeJs:`import { 
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
};`}}const Aa={name:"PageCarouselBasic",components:{ACarousel:f,AlohaExample:v},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),a=i(()=>[{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:t}=ca(),{codeJs:l}=ua();return{codeHtml:t,codeJs:l,data:e,dataOne:a}}},La={class:"a_columns a_columns_count_12"},Oa={class:"a_column a_column_12_touch a_column_4"},pa=["src","alt"],Ta={class:"a_column a_column_12_touch a_column_4"},ma=["src","alt"];function Ea(e,a,t,l,c,o){const s=u("a-carousel"),d=u("aloha-example");return P(),N(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:p(()=>[n("div",La,[n("div",Oa,[O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:p(({item:r})=>[n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,pa)]),_:1},8,["data"])]),n("div",Ta,[O(s,{data:e.dataOne,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:p(({item:r})=>[n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,ma)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Sa=R(Aa,[["render",Ea]]);function ga(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ca(){return{codeJs:`import {
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
};`}}const ha={name:"PageCarouselDeleteActiveSlide",components:{ACarousel:f,AlohaExample:v},setup(){const e=G(!0),a=i(()=>{const o=[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})}];return e.value&&o.push({id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}),o}),t=()=>{setTimeout(()=>{e.value=!1},2e3)},{codeHtml:l}=ga(),{codeJs:c}=Ca();return t(),{codeHtml:l,codeJs:c,data:a}}},ba={class:"a_columns a_columns_count_12"},Ra={class:"a_column a_column_12_touch a_column_4"},Na=["src","alt"];function Pa(e,a,t,l,c,o){const s=u("a-carousel"),d=u("aloha-example");return P(),N(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_DELETE_ACTIVE_SLIDE_HEADER_",description:"_A_CAROUSEL_GROUP_DELETE_ACTIVE_SLIDE_DESCRIPTION_"},{default:p(()=>[n("div",ba,[n("div",Ra,[O(s,{data:e.data,"model-value":4,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id"},{item:p(({item:r})=>[n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,Na)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ia=R(ha,[["render",Pa]]);function va(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function fa(){return{codeJs:`import {
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
};`}}const Ba={name:"PageCarouselEmits",components:{ACarousel:f,AlohaExample:v},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),a=({id:o,item:s})=>{console.log("init",o,s)},t=({id:o,item:s})=>{console.log("change",o,s)},{codeHtml:l}=va(),{codeJs:c}=fa();return{change:t,codeHtml:l,codeJs:c,data:e,init:a}}},Ua={class:"a_columns a_columns_count_12"},ya={class:"a_column a_column_12_touch a_column_4"},ka=["src","alt"];function Ma(e,a,t,l,c,o){const s=u("a-carousel"),d=u("aloha-example");return P(),N(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_EMITS_HEADER_",description:"_A_CAROUSEL_GROUP_EMITS_DESCRIPTION_",emits:["change","init"]},{default:p(()=>[n("div",Ua,[n("div",ya,[O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","key-id":"id",onChange:e.change,onInit:e.init},{item:p(({item:r})=>[n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,ka)]),_:1},8,["data","onChange","onInit"])])])]),_:1},8,["code-html","code-js"])}const xa=R(Ba,[["render",Ma]]);function wa(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function $a(){return{codeJs:`import {
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
};`}}const Va={name:"PageCarouselIndicatorsAutoLimit",components:{ACarousel:f,AlohaExample:v,ATranslation:V},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:9,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:10,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:11,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:12,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:13,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:14,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:15,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:16,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:17,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:18,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:19,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:20,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:21,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:22,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:23,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:24,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:25,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:26,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=wa(),{codeJs:t}=$a();return{codeHtml:a,codeJs:t,data:e}}},Da={class:"a_columns a_columns_count_12"},qa={class:"a_column a_column_12_touch a_column_4"},Ha=["src","alt"];function Ya(e,a,t,l,c,o){const s=u("a-carousel"),d=u("aloha-example");return P(),N(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_AUTO_LIMIT_DESCRIPTION_",props:"indicators-auto-limit"},{default:p(()=>[n("div",Da,[n("div",qa,[O(s,{data:e.data,"indicators-auto-limit":!0,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:p(({item:r})=>[n("div",null,$(r.id),1),n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,Ha)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ja=R(Va,[["render",Ya]]);function Ga(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ja(){return{codeJs:`import {
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
};`}}const Ka={name:"PageCarouselIndicatorsLimit",components:{ACarousel:f,AlohaExample:v,ATranslation:V},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})},{id:5,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:6,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:7,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:8,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=Ga(),{codeJs:t}=ja();return{codeHtml:a,codeJs:t,data:e}}},Wa={class:"a_columns a_columns_count_12"},Fa={class:"a_column a_column_12_touch a_column_4"},Xa=["src","alt"],za={class:"a_column a_column_12_touch a_column_4"},Qa=["src","alt"];function Za(e,a,t,l,c,o){const s=u("a-carousel"),d=u("aloha-example");return P(),N(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_LIMIT_DESCRIPTION_",props:"indicators-limit"},{default:p(()=>[n("div",Wa,[n("div",Fa,[a[0]||(a[0]=n("h3",null,[n("strong",{lang:"en"},'indicators-limit="6"')],-1)),O(s,{data:e.data,"indicators-limit":6,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:p(({item:r})=>[n("div",null,$(r.id),1),n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,Xa)]),_:1},8,["data"])]),n("div",za,[a[1]||(a[1]=n("h3",null,[n("strong",{lang:"en"},'indicators-limit="3"')],-1)),O(s,{data:e.data,"indicators-limit":3,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","key-id":"id"},{item:p(({item:r})=>[n("div",null,$(r.id),1),n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,Qa)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const et=R(Ka,[["render",Za]]);function at(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function tt(){return{codeJs:`import {
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
};`}}const _t={name:"PageCarouselIndicatorsType",components:{ACarousel:f,AlohaExample:v,ATranslation:V},setup(){const e=i(()=>[{id:1,src:"./assets/Basketball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_"})},{id:2,src:"./assets/Soccer_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_"})},{id:3,src:"./assets/Tennis_ball_purple_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_"})},{id:4,src:"./assets/Volleyball_ball_red_background.png",alt:_({placeholder:"_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_"})}]),{codeHtml:a}=at(),{codeJs:t}=tt();return{codeHtml:a,codeJs:t,data:e}}},lt={class:"a_columns a_columns_count_12"},st={class:"a_column a_column_12_touch a_column_4"},rt=["src","alt"],ot={class:"a_column a_column_12_touch a_column_4"},nt=["src","alt"];function it(e,a,t,l,c,o){const s=u("a-carousel"),d=u("aloha-example");return P(),N(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_CAROUSEL_GROUP_INDICATORS_TYPE_HEADER_",description:"_A_CAROUSEL_GROUP_INDICATORS_TYPE_DESCRIPTION_",props:"indicators-type"},{default:p(()=>[n("div",lt,[n("div",st,[a[0]||(a[0]=n("h3",null,[n("strong",{lang:"en"},"dots")],-1)),O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","indicators-type":"dots","key-id":"id"},{item:p(({item:r})=>[n("div",null,$(r.id),1),n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,rt)]),_:1},8,["data"])]),n("div",ot,[a[1]||(a[1]=n("h3",null,[n("strong",{lang:"en"},"squares")],-1)),O(s,{data:e.data,"aria-label":"_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_","arrows-trigger":"hover","indicators-type":"squares","key-id":"id"},{item:p(({item:r})=>[n("div",null,$(r.id),1),n("img",{class:"a_height_auto a_width_100",src:r.src,alt:r.alt},null,8,nt)]),_:1},8,["data"])])])]),_:1},8,["code-html","code-js"])}const dt=R(_t,[["render",it]]);function ct(){const e=i(()=>_({placeholder:"_A_CAROUSEL_COMPONENT_NAME_"}));return{pageTitle:i(()=>`ACarousel${e.value?` (${e.value})`:""}`)}}function ut(){return{dataProps:[{name:"aria-label",description:"_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:void 0,required:!0},{name:"aria-disabled",description:"_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"arrow-previous-attributes",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-previous-icon",description:"_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_",type:"String",default:"ChevronLeft",required:!1},{name:"arrow-next-attributes",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"arrow-next-icon",description:"_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_",type:"String",default:"ChevronRight",required:!1},{name:"arrows-show",description:"_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"arrows-trigger",description:"_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_",type:"String / Array",default:"always",required:!1},{name:"arrows-placement",description:"_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_",type:"String",default:"sides-center",required:!1},{name:"autoplay-interval",description:"_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_",type:"Number",default:5e3,required:!1},{name:"autoplay-show",description:"_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"autoplay-start",description:"_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"data",description:"_A_CAROUSEL_PROPS_DATA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"disabled",description:"_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"id",description:"_A_CAROUSEL_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_carousel_")',required:!1},{name:"indicators-auto-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_AUTO_LIMIT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"indicators-limit",description:"_A_CAROUSEL_PROPS_INDICATORS_LIMIT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"indicators-placement",description:"_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom",required:!1},{name:"indicators-show",description:"_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"indicators-type",description:"_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_",type:"String",default:"dots",required:!1},{name:"indicator-width",description:"_A_CAROUSEL_PROPS_INDICATOR_WIDTH_DESCRIPTION_",type:"Number",default:2.125,required:!1},{name:"key-id",description:"_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"model-value",description:"_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Number / String",default:void 0,required:!1},{name:"texts",description:"_A_CAROUSEL_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`{
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }`,required:!1}]}}function At(){return{dataTranslate:["_A_CAROUSEL_NEXT_SLIDE_","_A_CAROUSEL_PREVIOUS_SLIDE_","_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_","_A_CAROUSEL_CONTROLS_SLIDES_","_A_CAROUSEL_CONTROLS_START_","_A_CAROUSEL_CONTROLS_STOP_","_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_"]}}const Lt={name:"PageCarousel",components:{AlohaPage:se,AlohaTableProps:re,AlohaTableTranslate:oe,ATranslation:V,PageCarouselAriaDisabled:Xe,PageCarouselArrowsTrigger:da,PageCarouselBasic:Sa,PageCarouselDeleteActiveSlide:Ia,PageCarouselEmits:xa,PageCarouselIndicatorsAutoLimit:Ja,PageCarouselIndicatorsLimit:et,PageCarouselIndicatorsType:dt},setup(){const{pageTitle:e}=ct(),{dataProps:a}=ut(),{dataTranslate:t}=At();return{dataProps:a,dataTranslate:t,pageTitle:e}}};function Ot(e,a,t,l,c,o){const s=u("a-translation"),d=u("page-carousel-basic"),r=u("page-carousel-aria-disabled"),L=u("page-carousel-arrows-trigger"),h=u("page-carousel-indicators-limit"),B=u("page-carousel-indicators-auto-limit"),y=u("page-carousel-indicators-type"),I=u("page-carousel-emits"),m=u("page-carousel-delete-active-slide"),T=u("aloha-table-props"),g=u("aloha-table-translate"),b=u("aloha-page");return P(),N(b,{"page-title":e.pageTitle},{body:p(()=>[O(s,{tag:"p",html:"_A_CAROUSEL_COMPONENT_DESCRIPTION_"}),O(d),O(r),O(L),O(h),O(B),O(y),O(I),O(m),O(T,{data:e.dataProps},null,8,["data"]),O(g,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const yt=R(Lt,[["render",Ot]]);export{yt as default};
