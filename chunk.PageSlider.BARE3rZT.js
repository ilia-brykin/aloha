import{A as F,a as Me}from"./chunk.AlohaExample.BW2_Vff_.js";import{l as le,s as ae,a1 as Ce,a2 as Ue,a3 as Ne,f as ne,a4 as we,a5 as ke,a6 as Je,a7 as qe,a8 as Fe,a9 as je,_ as w,g as Ge,A as We}from"./bundle.index.Bw4CbrP7.js";import{t as S,d as n,r as m,f as Xe,K as Ke,h as E,x as Ye,o as ze,V as k,aT as J,e as f,W as q,_ as p,Z as y,aU as H}from"./chunk.vendor.D7UxhUfn.js";import{F as Ze,f as ee,S as Qe,_ as et,h as Z,N as oe,a6 as tt,a7 as lt,G as at,q as se,g as ot,a as re,m as nt,b as st,u as rt}from"./chunk.vendor-lodash.BXqI5TOP.js";import"./chunk.APageTabTitle.CGHssToA.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.translations-ar.COHWTLjj.js";import"./chunk.translations-de.CMsDi58c.js";import"./chunk.translations-en.Dg6d-iTX.js";import"./chunk.translations-es.BLJ15RYR.js";import"./chunk.translations-fr.tH5K_M0t.js";import"./chunk.translations-hr.DsOKZruz.js";import"./chunk.translations-it.B_6_ZtEA.js";import"./chunk.translations-ru.BTxZGSVv.js";function dt(e,{firstValue:t=n(()=>0),formatValueLocal:o=()=>{},htmlIdLocal:d=n(()=>""),maxValueDataLocal:r=n(()=>0),minValueDataLocal:i=n(()=>0),secondValue:a=n(()=>0)}){const s=S(e,"label"),l=S(e,"labelScreenReader"),h=S(e,"range"),I=S(e,"rangeFirstButtonAriaLabel"),B=S(e,"rangeSecondButtonAriaLabel"),A=S(e,"rangeAriaLabel"),_=S(e,"vertical"),v=n(()=>i.value),g=n(()=>h.value?a.value:r.value),R=n(()=>h.value&&I.value?le({attr:"aria-label",placeholder:I.value,extra:{min:o({value:i.value}),max:o({value:r.value})}}):{}),T=n(()=>t.value),P=n(()=>r.value),$=n(()=>h.value&&B.value?le({attr:"aria-label",placeholder:B.value,extra:{min:o({value:i.value}),max:o({value:r.value})}}):{}),x=n(()=>_.value?"vertical":"horizontal"),V=n(()=>{if(s.value||l.value)return`${d.value}_label`}),O=n(()=>h.value?"group":void 0),G=n(()=>h.value&&A.value?le({attr:"aria-label",placeholder:A.value,extra:{min:o({value:i.value}),max:o({value:r.value})}}):{});return{buttonAriaLabelledby:V,buttonAriaOrientation:x,firstButtonAriaLabelObj:R,firstButtonAriaValueMax:g,firstButtonAriaValueMin:v,secondButtonAriaLabelObj:$,secondButtonAriaValueMax:P,secondButtonAriaValueMin:T,sliderAriaLabelObj:G,sliderRole:O}}function it(e,{htmlIdLocal:t=n(()=>"")}){return{secondButtonHtmlId:n(()=>`${t.value}_second`)}}const M="_a_id";function ut(e){const t=S(e,"data"),o=S(e,"isDataSimpleArray"),d=S(e,"keyId"),r=S(e,"max"),i=S(e,"min"),a=S(e,"step"),s=n(()=>{var g;const A=Ze(i.value,r.value+a.value,a.value),_=((g=a.value.toString().split(".")[1])==null?void 0:g.length)||0,v=[];return ee(A,R=>{const T=Number(R.toFixed(_));v.push({[M]:T})}),v}),l=n(()=>{const A=[];o.value?ee(t.value,v=>{Z(v)||A.push({[M]:se(v)})}):ee(t.value,v=>{const g=ot(v,d.value);Z(g)||A.push({[M]:se(g)})});let _=Qe(A,M);if(_=et(_,M),!Z(i.value)){const v=oe(_,g=>g[M]>=i.value);v!==-1&&(_=_.slice(v))}if(!Z(r.value)){const v=tt(_,g=>g[M]<=r.value);v!==-1&&(_=_.slice(0,v+1))}return _}),h=n(()=>{var A;return(A=t.value)!=null&&A.length&&l.value.length?l.value:s.value}),I=n(()=>{var A;return(A=lt(h.value))==null?void 0:A[M]}),B=n(()=>{var A;return(A=at(h.value))==null?void 0:A[M]});return{dataLocal:h,maxValueDataLocal:B,minValueDataLocal:I}}function mt(e,{dragging:t=m(!1),firstValue:o=n(()=>0),getPosition:d=()=>{},htmlIdLocal:r=n(()=>""),resetSize:i=()=>{},secondButtonHtmlId:a=n(()=>""),secondValue:s=n(()=>0),setPosition:l=()=>{},sliderSize:h=m(1)}){const I=S(e,"disabled"),B=S(e,"vertical"),A=m(0),_=m(0),v=m(!1),g=m(!1),R=m(!1),T=m(!1),P=m(0),$=m(0),x=m(0),V=m(0),O=u=>{if(!t.value)return;i();let c;B.value?(_.value=u.clientY,c=(V.value-_.value)/h.value*100):(A.value=u.clientX,c=(A.value-x.value)/h.value*100),P.value=$.value+c,l({percent:P.value,isFirstButton:!0})},G=u=>{if(!t.value)return;i();let c;B.value?(_.value=u.clientY,c=(V.value-_.value)/h.value*100):(A.value=u.clientX,c=(A.value-x.value)/h.value*100),P.value=$.value+c,l({percent:P.value,isFirstButton:!1})},C=()=>{t.value&&(setTimeout(()=>{t.value=!1,v.value=!1,ae({selector:`#${r.value}`})},0),K())},W=()=>{t.value&&(setTimeout(()=>{t.value=!1,g.value=!1,ae({selector:`#${a.value}`})},0),Y())},U=()=>{document.addEventListener("mousemove",O),document.addEventListener("mouseup",C),document.addEventListener("contextmenu",C)},X=()=>{document.addEventListener("mousemove",G),document.addEventListener("mouseup",W),document.addEventListener("contextmenu",W)};function K(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",C),document.removeEventListener("contextmenu",C)}function Y(){document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",W),document.removeEventListener("contextmenu",W)}return{draggingFirst:v,draggingSecond:g,hoveringFirst:R,hoveringSecond:T,onButtonMouseDown:(u,c=!0)=>{I.value||(u.preventDefault(),t.value=!0,c?v.value=!0:g.value=!0,B.value?V.value=u.clientY:x.value=u.clientX,$.value=d(c?{value:o.value}:{value:s.value}),c?U():X())},onButtonMouseEnter:u=>{u?R.value=!0:T.value=!0},onButtonMouseLeave:u=>{u?R.value=!1:T.value=!1},removeEventListenersFirstButton:K,removeEventListenersSecondButton:Y}}function ct(){return{clickLabel:({id:t})=>{ae({selector:`#${t}`})}}}function _t(e){const t=S(e,"marks"),o=S(e,"max"),d=S(e,"min");return{markList:n(()=>t.value?Object.keys(t.value).map(parseFloat).sort((a,s)=>a-s).filter(a=>a<=o.value&&a>=d.value).map(a=>({point:a,position:(a-d.value)*100/(o.value-d.value),mark:t.value[a]})):[])}}function vt(e,{changeModel:t=()=>{},dataLocal:o=n(()=>[]),maxValueDataLocal:d=n(()=>0),minValueDataLocal:r=n(()=>0)}){const i=S(e,"disabled"),a=S(e,"height"),s=S(e,"modelValue"),l=S(e,"range"),h=S(e,"rangeAllowCross"),I=S(e,"vertical"),B=m(!1),A=m(null),_=m(null),v=m(null),g=m(1),R=n(()=>o.value.length-1),T=n(()=>R.value/100),P=({value:b})=>{if(!o.value.length)return 0;const L=oe(o.value,c=>c[M]===b);return L===-1?0:L/R.value*100},$=n(()=>l.value?re(s.value)?s.value:[]:s.value),x=n(()=>l.value?$.value[0]:$.value),V=n(()=>l.value?$.value[1]:0),O=n(()=>l.value?Math.min(x.value,V.value):r.value),G=n(()=>l.value?Math.max(x.value,V.value):x.value),C=()=>{v.value&&(g.value=v.value[`client${I.value?"Height":"Width"}`])},W=({index:b,isFirstButton:L=!0})=>{var c;if(Z(b)||b===-1)return;b<0?b=0:b>R.value&&(b=R.value);const u=(c=o.value)==null?void 0:c[b][M];if(l.value){const D=[...$.value];L?D[0]=u:D[1]=u,l.value&&!h.value&&(L&&u>D[1]?D[0]=D[1]:!L&&u<D[0]&&(D[1]=D[0])),t({model:D})}else t({model:u})},U=({percent:b,isFirstButton:L=!0})=>{if(b===null||isNaN(b))return;b<0?b=0:b>100&&(b=100);const u=(b*T.value).toFixed();W({index:u,isFirstButton:L})},X=b=>{if(i.value||B.value)return;C();let L;if(I.value)L=(v.value.getBoundingClientRect().bottom-b.clientY)/g.value*100;else{const c=v.value.getBoundingClientRect().left;L=(b.clientX-c)/g.value*100}if(l.value){const u=P({value:x.value}),c=P({value:V.value}),D=Math.abs(L-u),N=Math.abs(L-c);D<=N?U({percent:L,isFirstButton:!0}):U({percent:L,isFirstButton:!1})}else U({percent:L,isFirstButton:!0})},K=b=>{if(i.value||B.value)return;const L=b;if(l.value){const u=P({value:x.value}),c=P({value:V.value}),D=Math.abs(L-u),N=Math.abs(L-c);D<=N?U({percent:L,isFirstButton:!0}):U({percent:L,isFirstButton:!1})}else U({percent:L,isFirstButton:!0})},Y=(b,L=!0)=>{if(i.value)return;let u=!0,c;const D=L?x.value:V.value,N=oe(o.value,te=>te[M]===D);switch(b.key){case"ArrowLeft":case"ArrowDown":c=N-1;break;case"ArrowRight":case"ArrowUp":c=N+1;break;case"Home":c=0;break;case"End":c=R.value;break;case"PageDown":c=N-4;break;case"PageUp":c=N+4;break;default:u=!1;break}u&&(b.preventDefault(),c!==N&&W({index:c,isFirstButton:L}))},Q=()=>{C(),l.value&&(!re($.value)||$.value.length!==2)&&t({model:[r.value,d.value]})};return Xe(()=>[I.value,a.value],()=>{Ke(C)}),{dragging:B,firstButtonRef:A,firstValue:x,getPosition:P,initSlider:Q,maxValue:G,minValue:O,modelValueLocal:$,onButtonKeyDown:Y,onMarkerClick:K,onSliderClick:X,resetSize:C,secondButtonRef:_,secondValue:V,setPosition:U,sliderRef:v,sliderSize:g}}function ft(e,{dataLocal:t=n(()=>[])}){const o=S(e,"showStops"),d=S(e,"vertical"),r=n(()=>1/(t.value.length-1)*100),i=n(()=>{if(!o.value)return[];const s=[];return ee(t.value,(l,h)=>{if(h>0&&h<t.value.length-1){const I=h*r.value;s.push({stylesVertical:{bottom:`${I}%`},stylesHorizontal:{left:`${I}%`}})}}),s});return{getStopStyle:s=>d.value?{bottom:`${s}%`}:{left:`${s}%`},stops:i}}function pt(e,{firstValue:t=n(()=>0),getPosition:o=()=>{},secondValue:d=n(()=>0)}){const r=S(e,"height"),i=S(e,"range"),a=S(e,"vertical"),s=n(()=>o({value:t.value})),l=n(()=>o({value:d.value})),h=n(()=>a.value?{height:r.value||"100%"}:{}),I=n(()=>{const _=i.value?`${Math.abs(l.value-s.value)}%`:`${s.value}%`,v=i.value?`${s.value}%`:"0%";return a.value?{height:_,bottom:v}:{width:_,left:v}}),B=n(()=>{const _=`${s.value}%`;return a.value?{bottom:_}:{left:_}}),A=n(()=>{if(!i.value)return{};const _=`${l.value}%`;return a.value?{bottom:_}:{left:_}});return{barStyle:I,firstButtonStyle:B,runwayStyle:h,secondButtonStyle:A}}function At(e,{firstValue:t=n(()=>0),secondValue:o=n(()=>0)}){const d=S(e,"formatValue"),r=({value:s})=>nt(d.value)?`${d.value({value:s})}`:st(s)?`${s}`:"",i=n(()=>r({value:t.value})),a=n(()=>r({value:o.value}));return{firstButtonTitle:i,formatValueLocal:r,secondButtonTitle:a}}const j={name:"ASlider",inheritAttrs:!1,props:{alwaysTranslate:{type:Boolean,required:!1},change:{type:Function,required:!1,default:()=>{}},data:{type:Array,required:!1,default:void 0},dependencies:{type:[Array,Object],required:!1,default:void 0},disabled:{type:Boolean,required:!1},errors:{type:[String,Array],required:!1,default:void 0},excludeRenderAttributes:{type:Array,required:!1,default:()=>[]},extra:{type:Object,required:!1,default:void 0},formatValue:{type:Function,required:!1,default:void 0},height:{type:String,required:!1,default:void 0},helpText:{type:String,required:!1,default:void 0},htmlId:{type:String,required:!1,default:void 0},id:{type:[String,Number],required:!1,default:()=>rt("a_slider_")},idPrefix:{type:String,required:!1,default:void 0},isDataSimpleArray:{type:Boolean,required:!1},isHide:{type:Boolean,required:!1},isRender:{type:Boolean,required:!1,default:!0},isTitleHtml:{type:Boolean,required:!1,default:!0},keyId:{type:String,required:!1,default:void 0},keyLabel:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:void 0},labelClass:{type:[String,Object],required:!1,default:void 0},labelDescription:{type:String,required:!1,default:void 0},labelScreenReader:{type:[String,Number],required:!1,default:void 0},marks:{type:Object,required:!1,default:void 0},max:{type:Number,required:!1,default:100},min:{type:Number,required:!1,default:0},modelDependencies:{type:Object,required:!1,default:()=>({})},modelUndefined:{type:[Number,Array],required:!1,default:0},modelValue:{type:[String,Number,Array],required:!1,default:void 0},range:{type:Boolean,required:!1,default:!1},rangeAriaLabel:{type:String,required:!1,default:"_A_SLIDER_RANGE_ARIA_LABEL_{{min}}_{{max}}_"},rangeFirstButtonAriaLabel:{type:String,required:!1,default:"_A_SLIDER_RANGE_FIRST_BUTTON_ARIA_LABEL_"},rangeSecondButtonAriaLabel:{type:String,required:!1,default:"_A_SLIDER_RANGE_SECOND_BUTTON_ARIA_LABEL_"},rangeAllowCross:{type:Boolean,required:!1,default:!1},readonly:{type:Boolean,required:!1},readonlyDefault:{type:String,required:!1,default:""},required:{type:Boolean,required:!1,default:!1},showStops:{type:Boolean,required:!1},step:{type:Number,required:!1,default:1},vertical:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","input","change"],setup(e,t){const{disabledAttribut:o}=Je(e),{attributesToExcludeFromRender:d}=qe(e),{componentStyleHide:r}=Fe(e),{ariaDescribedbyLocal:i,changeModel:a,errorsId:s,helpTextId:l,htmlIdLocal:h,isErrors:I,isModel:B,labelDescriptionId:A,onBlur:_,onFocus:v}=je(e,t),{secondButtonHtmlId:g}=it(e,{htmlIdLocal:h}),{dataLocal:R,maxValueDataLocal:T,minValueDataLocal:P}=ut(e),{clickLabel:$}=ct(),{dragging:x,firstButtonRef:V,firstValue:O,getPosition:G,initSlider:C,maxValue:W,minValue:U,modelValueLocal:X,onButtonKeyDown:K,onMarkerClick:Y,onSliderClick:Q,resetSize:b,secondButtonRef:L,secondValue:u,setPosition:c,sliderRef:D,sliderSize:N}=vt(e,{changeModel:a,dataLocal:R,maxValueDataLocal:T,minValueDataLocal:P}),{firstButtonTitle:te,formatValueLocal:z,secondButtonTitle:de}=At(e,{firstValue:O,secondValue:u}),{draggingFirst:ie,draggingSecond:ue,hoveringFirst:me,hoveringSecond:ce,onButtonMouseDown:_e,onButtonMouseEnter:ve,onButtonMouseLeave:fe,removeEventListenersFirstButton:pe,removeEventListenersSecondButton:Ae}=mt(e,{dragging:x,firstValue:O,getPosition:G,htmlIdLocal:h,resetSize:b,secondButtonHtmlId:g,secondValue:u,setPosition:c,sliderSize:N}),{markList:Se}=_t(e),{barStyle:he,firstButtonStyle:be,runwayStyle:Le,secondButtonStyle:ge}=pt(e,{firstValue:O,getPosition:G,secondValue:u}),{buttonAriaLabelledby:Ee,buttonAriaOrientation:Ie,firstButtonAriaLabelObj:Be,firstButtonAriaValueMax:Re,firstButtonAriaValueMin:ye,secondButtonAriaLabelObj:De,secondButtonAriaValueMax:Pe,secondButtonAriaValueMin:$e,sliderAriaLabelObj:xe,sliderRole:Te}=dt(e,{firstValue:O,formatValueLocal:z,htmlIdLocal:h,maxValueDataLocal:T,minValueDataLocal:P,secondValue:u}),{getStopStyle:Ve,stops:He}=ft(e,{dataLocal:R}),Oe=()=>B.value?e.range&&Array.isArray(X.value)?`${z(X.value[0])} - ${z(X.value[1])}`:z(X.value):e.readonlyDefault;return Ye(()=>{C()}),ze(()=>{pe(),Ae()}),{buttonAriaLabelledby:Ee,buttonAriaOrientation:Ie,firstButtonAriaValueMax:Re,firstButtonAriaValueMin:ye,sliderAriaLabelObj:xe,draggingFirst:ie,draggingSecond:ue,sliderRole:Te,ariaDescribedbyLocal:i,clickLabel:$,attributesToExcludeFromRender:d,barStyle:he,componentStyleHide:r,dataLocal:R,disabledAttribut:o,firstButtonAriaLabelObj:Be,errorsId:s,firstButtonRef:V,firstButtonStyle:be,firstButtonTitle:te,secondButtonAriaLabelObj:De,firstValue:O,secondButtonAriaValueMax:Pe,secondButtonAriaValueMin:$e,formatValueLocal:z,secondButtonHtmlId:g,getStopStyle:Ve,helpTextId:l,hoveringFirst:me,hoveringSecond:ce,htmlIdLocal:h,isErrors:I,isModel:B,labelDescriptionId:A,markList:Se,maxValue:W,minValue:U,modelValueLocal:X,modelValueReadonly:Oe,onBlur:_,onButtonKeyDown:K,onButtonMouseDown:_e,onButtonMouseEnter:ve,onButtonMouseLeave:fe,onFocus:v,onMarkerClick:Y,onSliderClick:Q,resetSize:b,runwayStyle:Le,secondButtonRef:L,secondButtonStyle:ge,secondButtonTitle:de,secondValue:u,sliderRef:D,stops:He}},render(){return this.isRender?this.readonly?E(Ce,{...this.$attrs,id:this.htmlIdLocal,alwaysTranslate:this.alwaysTranslate,excludeRenderAttributes:this.excludeRenderAttributes,extra:this.extra,helpText:this.helpText,label:this.label,labelClass:this.labelClass,labelScreenReader:this.labelScreenReader,modelValue:this.modelValueReadonly(),readonlyDefault:this.readonlyDefault,required:this.required,style:this.componentStyleHide}):E("div",{...this.$attrs,style:this.componentStyleHide,...this.attributesToExcludeFromRender},[E("div",{class:["a_form_element__parent",{a_form_element__parent_not_empty:this.isModel}]},[this.label||this.labelScreenReader?E(Ue,{id:this.htmlIdLocal,alwaysTranslate:this.alwaysTranslate,clickLabel:this.clickLabel,extra:this.extra,hideFor:!0,isError:this.isErrors,label:this.label,labelClass:this.labelClass,labelScreenReader:this.labelScreenReader,required:this.required,tag:"div"}):"",E(Ne,{id:this.labelDescriptionId,alwaysTranslate:this.alwaysTranslate,html:this.labelDescription,extra:this.extra,isLabelFloat:!1}),E("div",{class:"a_form_element"},[E("div",{class:["a_slider",{a_slider_vertical:this.vertical,a_slider_disabled:this.disabled,a_slider_invalid:this.isErrors}],role:this.sliderRole,...this.sliderAriaLabelObj},[E("div",{ref:"sliderRef",class:"a_slider__runway",style:this.runwayStyle,onClick:this.onSliderClick},[E("div",{class:"a_slider__bar",style:this.barStyle}),E(ne,{ref:"firstButtonRef",id:this.htmlIdLocal,type:"button",tag:"div",ariaDisabled:this.disabled,classDefault:"",class:["a_slider__button",{a_slider__button_dragging:this.draggingFirst,a_slider__button_hover:this.hoveringFirst}],style:this.firstButtonStyle,tabindex:this.disabled?-1:0,title:this.firstButtonTitle,isTitleHtml:this.isTitleHtml,role:"slider","aria-valuemin":this.firstButtonAriaValueMin,"aria-valuemax":this.firstButtonAriaValueMax,"aria-valuenow":this.firstValue,"aria-valuetext":this.firstButtonTitle,"aria-orientation":this.buttonAriaOrientation,"aria-disabled":this.disabledAttribut,...this.firstButtonAriaLabelObj,onMousedown:e=>this.onButtonMouseDown(e,!0),onMouseenter:()=>this.onButtonMouseEnter(!0),onMouseleave:()=>this.onButtonMouseLeave(!0),onKeydown:e=>this.onButtonKeyDown(e,!0)},()=>[E("div",{class:"a_slider__button__child"})]),this.range&&E(ne,{ref:"secondButtonRef",id:this.secondButtonHtmlId,type:"button",tag:"div",ariaDisabled:this.disabled,classDefault:"",class:["a_slider__button",{a_slider__button_dragging:this.draggingSecond,a_slider__button_hover:this.hoveringSecond}],style:this.secondButtonStyle,tabindex:this.disabled?-1:0,title:this.secondButtonTitle,isTitleHtml:this.isTitleHtml,role:"slider","aria-valuemin":this.secondButtonAriaValueMin,"aria-valuemax":this.secondButtonAriaValueMax,"aria-valuenow":this.secondValue,"aria-valuetext":this.secondButtonTitle,"aria-orientation":this.buttonAriaOrientation,"aria-disabled":this.disabledAttribut,...this.secondButtonAriaLabelObj,onMousedown:e=>this.onButtonMouseDown(e,!1),onMouseenter:()=>this.onButtonMouseEnter(!1),onMouseleave:()=>this.onButtonMouseLeave(!1),onKeydown:e=>this.onButtonKeyDown(e,!1)},()=>[E("div",{class:"a_slider__button__child"})]),this.stops.length>0?E("div",{"aria-hidden":"true",class:"a_slider__stops"},this.stops.map(e=>E("div",{class:"a_slider__stop",style:this.vertical?e.stylesVertical:e.stylesHorizontal}))):"",this.markList.length>0&&[E("div",{class:"a_slider__stops"},this.markList.map(e=>E("div",{class:["a_slider__stop","a_slider__marks-stop"],style:this.getStopStyle(e.position)}))),E("div",{class:"a_slider__marks"},this.markList.map(e=>E("div",{class:"a_slider__marks-text",style:this.getStopStyle(e.position),onClick:()=>this.onMarkerClick(e.position)},e.mark)))]])])]),E(we,{id:this.helpTextId,alwaysTranslate:this.alwaysTranslate,html:this.helpText,extra:this.extra}),this.isErrors&&E(ke,{id:this.errorsId,alwaysTranslate:this.alwaysTranslate,errors:this.errors})])]):null}};function St(){return{codeHtml:`<a-slider
  v-model="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model: {{ model }}</div>
<a-slider
  v-model="model"
  :disabled="true"
  label="_A_SLIDER_DISABLED_LABEL_"
></a-slider>
`}}function ht(){return{codeJs:`import {
  ref,
} from "vue";
import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderBasic",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(50);
    
    return {
      model,
    };
  },
};`}}const bt={name:"PageSliderBasic",components:{ASlider:j,AlohaExample:F},setup(){const e=m(50),{codeHtml:t}=St(),{codeJs:o}=ht();return{codeHtml:t,codeJs:o,model:e}}},Lt={class:"a_mt_2"};function gt(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","disabled"]},{default:J(()=>[p(a,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model=l),label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"]),y("div",Lt,"model: "+H(e.model),1),p(a,{modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=l=>e.model=l),disabled:!0,label:"_A_SLIDER_DISABLED_LABEL_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Et=w(bt,[["render",gt]]);function It(){return{codeHtml:`<a-slider
  :change="changeModel"
  :model-value="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-input>
<div>model: {{ model }}</div>`}}function Bt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderChange",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(30);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}const Rt={name:"PageSliderChange",components:{ASlider:j,AlohaExample:F},setup(){const e=m(30),t=({model:r,id:i,props:a})=>{e.value=r,console.log(i,a)},{codeHtml:o}=It(),{codeJs:d}=Bt();return{changeModel:t,codeHtml:o,codeJs:d,model:e}}};function yt(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:J(()=>[p(a,{change:e.changeModel,"model-value":e.model,label:"_A_SLIDER_BASIC_LABEL_"},null,8,["change","model-value"]),y("div",null,"model: "+H(e.model),1)]),_:1},8,["code-html","code-js"])}const Dt=w(Rt,[["render",yt]]);function Pt(){return{codeHtml:`<a-slider
  v-model="model1"
  :data="data"
  key-id="id"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :data="data"
  :extra="{ max: 30, min: 10 }"
  :max="30"
  :min="10"
  key-id="id"
  label="_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :data="data"
  :extra="{ max: 30, min: 10 }"
  :max="30"
  :min="10"
  :range="true"
  key-id="id"
  label="_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_"LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model3: {{ model3 }}</div>`}}function $t(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderData",
  components: {
    ASlider,
  },
  setup() {
    const data = [
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 5 },
      { id: 7 },
      { id: 4 },
      { id: 6 },
      { id: 10 },
      { id: 11 },
      { id: 15 },
      { id: 19 },
      { id: 23 },
      { id: 30 },
      { id: 40 },
      { id: 35 },
      { id: 11 },
    ];
    const model1 = ref(undefined);
    const model2 = ref(11);
    const model3 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
      model3,
    };
  },
};`}}const xt={name:"PageSliderData",components:{ASlider:j,AlohaExample:F},setup(){const e=[{id:1},{id:1},{id:1},{id:0},{id:1},{id:2},{id:3},{id:5},{id:7},{id:4},{id:6},{id:10},{id:11},{id:15},{id:19},{id:23},{id:30},{id:40},{id:35},{id:11}],t=m(void 0),o=m(11),d=m(void 0),{codeHtml:r}=Pt(),{codeJs:i}=$t();return{codeHtml:r,codeJs:i,data:e,model1:t,model2:o,model3:d}}},Tt={class:"a_mt_2"},Vt={class:"a_mt_2"},Ht={class:"a_mt_2"};function Ot(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SLIDER_GROUP_DATA_HEADER_",description:"_A_SLIDER_GROUP_DATA_DESCRIPTION_",props:["data","key-id"]},{default:J(()=>[p(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model1=l),data:e.data,"key-id":"id",label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue","data"]),y("div",Tt,"model1: "+H(e.model1),1),p(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=l=>e.model2=l),data:e.data,extra:{max:30,min:10},max:30,min:10,"key-id":"id",label:"_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_"},null,8,["modelValue","data"]),y("div",Vt,"model2: "+H(e.model2),1),p(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=l=>e.model3=l),data:e.data,extra:{max:30,min:10},max:30,min:10,range:!0,"key-id":"id",label:"_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_"},null,8,["modelValue","data"]),y("div",Ht,"model3: "+H(e.model3),1)]),_:1},8,["code-html","code-js"])}const Mt=w(xt,[["render",Ot]]);function Ct(){return{codeHtml:`<a-slider
  v-model="model"
  errors="Aloha"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>`}}function Ut(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageInputErrors",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(20);
    
    return {
      model,
    };
  },
};`}}const Nt={name:"PageSliderErrors",components:{ASlider:j,AlohaExample:F},setup(){const e=m(10),{codeHtml:t}=Ct(),{codeJs:o}=Ut();return{codeHtml:t,codeJs:o,model:e}}};function wt(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:J(()=>[p(a,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model=l),errors:"Aloha",label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const kt=w(Nt,[["render",wt]]);function Jt(){return{codeHtml:`<a-slider
  v-model="model"
  help-text="Aloha"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>`}}function qt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderHelpText",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(20);
    
    return {
      model,
    };
  },
};`}}const Ft={name:"PageSliderHelpText",components:{ASlider:j,AlohaExample:F},setup(){const e=m(20),{codeHtml:t}=Jt(),{codeJs:o}=qt();return{codeHtml:t,codeJs:o,model:e}}};function jt(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:J(()=>[p(a,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model=l),"help-text":"Aloha",label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Gt=w(Ft,[["render",jt]]);function Wt(){return{codeHtml:`<a-slider
  v-model="model"
  label="_A_SLIDER_BASIC_LABEL_"
  label-description="Aloha"
></a-slider>`}}function Xt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderLabelDescription",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(60);
    
    return {
      model,
    };
  },
};`}}const Kt={name:"PageSliderLabelDescription",components:{ASlider:j,AlohaExample:F},setup(){const e=m(60),{codeHtml:t}=Wt(),{codeJs:o}=Xt();return{codeHtml:t,codeJs:o,model:e}}};function Yt(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:J(()=>[p(a,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model=l),label:"_A_SLIDER_BASIC_LABEL_","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const zt=w(Kt,[["render",Yt]]);function Zt(){return{codeHtml:`<a-slider
  v-model="model1"
  :extra="{ max: 40, min: 10, step: 2 }"
  :max="40"
  :min="10"
  :step="2"
  label="_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :extra="{ max: 50, min: -10, step: 10 }"
  :max="50"
  :min="-10"
  :step="10"
  label="_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :extra="{ max: 40, min: 20, step: 4 }"
  :max="40"
  :min="20"
  :range="true"
  :step="4"
  label="_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model3: {{ model3 }}</div>`}}function Qt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderMinMax",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref(30);
    const model2 = ref(-1);
    const model3 = ref([20, 40]);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const el={name:"PageSliderMinMax",components:{ASlider:j,AlohaExample:F},setup(){const e=m(30),t=m(-1),o=m([20,40]),{codeHtml:d}=Zt(),{codeJs:r}=Qt();return{codeHtml:d,codeJs:r,model1:e,model2:t,model3:o}}},tl={class:"a_mt_2"},ll={class:"a_mt_2"},al={class:"a_mt_2"};function ol(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SLIDER_GROUP_MIN_MAX_STEP_HEADER_",description:"_A_SLIDER_GROUP_MIN_MAX_STEP_DESCRIPTION_",props:["min","max","step"]},{default:J(()=>[p(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model1=l),extra:{max:100,min:0,step:.1},max:100,min:0,step:.1,label:"_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"},null,8,["modelValue"]),y("div",tl,"model1: "+H(e.model1),1),p(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=l=>e.model2=l),extra:{max:50,min:-10,step:10},max:50,min:-10,step:10,label:"_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"},null,8,["modelValue"]),y("div",ll,"model2: "+H(e.model2),1),p(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=l=>e.model3=l),extra:{max:40,min:20,step:4},max:40,min:20,range:!0,step:4,label:"_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_{{step}}_"},null,8,["modelValue"]),y("div",al,"model3: "+H(e.model3),1)]),_:1},8,["code-html","code-js"])}const nl=w(el,[["render",ol]]);function sl(){return{codeHtml:`<a-slider
  v-model="model1"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model3: {{ model3 }}</div>
<a-slider
  v-model="model4"
  :disabled="true"
  :range="true"
  label="_A_SLIDER_DISABLED_LABEL_"
></a-slider>`}}function rl(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderRange",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref([]);
    const model2 = ref([0]);
    const model3 = ref([0, 20]);
    const model4 = ref([4, 50]);
    
    return {
      model1,
      model2,
      model3,
      model4,
    };
  },
};`}}const dl={name:"PageSliderRange",components:{ASlider:j,AlohaExample:F},setup(){const e=m([]),t=m([0]),o=m([0,20]),d=m([4,50]),{codeHtml:r}=sl(),{codeJs:i}=rl();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:o,model4:d}}},il={class:"a_mt_2"},ul={class:"a_mt_2"},ml={class:"a_mt_2"};function cl(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SLIDER_GROUP_RANGE_HEADER_",description:"_A_SLIDER_GROUP_RANGE_DESCRIPTION_",props:["range"]},{default:J(()=>[p(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model1=l),range:!0,label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"]),y("div",il,"model1: "+H(e.model1),1),p(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=l=>e.model2=l),range:!0,label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"]),y("div",ul,"model2: "+H(e.model2),1),p(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=l=>e.model3=l),range:!0,label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"]),y("div",ml,"model3: "+H(e.model3),1),p(a,{modelValue:e.model4,"onUpdate:modelValue":t[3]||(t[3]=l=>e.model4=l),disabled:!0,range:!0,label:"_A_SLIDER_DISABLED_LABEL_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const _l=w(dl,[["render",cl]]);function vl(){return{codeHtml:`<a-slider
  v-model="model1"
  :max="20"
  :min="10"
  :show-stops="false"
  label="_A_SLIDER_LABEL_NOT_SHOW_STOPS_"
></a-slider>
<a-slider
  v-model="model2"
  :max="20"
  :min="10"
  :show-stops="true"
  label="_A_SLIDER_LABEL_SHOW_STOPS_"
></a-slider>`}}function fl(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderStops",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref(11);
    const model2 = ref(11);
    
    return {
      model1,
      model2
    };
  },
};`}}const pl={name:"PageSliderStops",components:{ASlider:j,AlohaExample:F},setup(){const e=m(11),t=m(11),{codeHtml:o}=vl(),{codeJs:d}=fl();return{codeHtml:o,codeJs:d,model1:e,model2:t}}};function Al(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SHOW_STOPS_HEADER_",description:"_A_UI_GROUP_SHOW_STOPS_DESCRIPTION_",props:["show-stops"]},{default:J(()=>[p(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model1=l),max:20,min:10,"show-stops":!1,label:"_A_SLIDER_LABEL_NOT_SHOW_STOPS_"},null,8,["modelValue"]),p(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=l=>e.model2=l),max:20,min:10,"show-stops":!0,label:"_A_SLIDER_LABEL_SHOW_STOPS_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Sl=w(pl,[["render",Al]]);function hl(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_3 a_column_6_tablet a_column_12_mobile">
    <a-slider
      v-model="model1"
      :max="20"
      :vertical="true"
      height="200px"
      label="_A_SLIDER_LABEL_NOT_SHOW_STOPS_"
    ></a-slider>
    <div>model1 {{ model1 }}</div>
  </div>
  <div class="a_column a_column_3 a_column_6_tablet a_column_12_mobile">
    <a-slider
      v-model="model2"
      :max="10"
      :show-stops="true"
      :vertical="true"
      height="200px"
      label="_A_SLIDER_LABEL_SHOW_STOPS_"
    ></a-slider>
    <div>model2 {{ model2 }}</div>
  </div>
  <div class="a_column a_column_3 a_column_6_tablet a_column_12_mobile">
    <a-slider
      v-model="model3"
      :extra="{ min: 10, max: 40 }"
      :max="40"
      :min="10"
      :range="true"
      :vertical="true"
      height="200px"
      label="_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_"
    ></a-slider>
    <div>model3 {{ model3 }}</div>
  </div>
</div>`}}function bl(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderVertical",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref(0);
    const model2 = ref(0);
    const model3 = ref(0);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const Ll={name:"PageSliderVertical",components:{ASlider:j,AlohaExample:F},setup(){const e=m(0),t=m(0),o=m(0),{codeHtml:d}=hl(),{codeJs:r}=bl();return{codeHtml:d,codeJs:r,model1:e,model2:t,model3:o}}},gl={class:"a_columns a_columns_count_12"},El={class:"a_column a_column_3 a_column_6_tablet a_column_12_mobile"},Il={class:"a_column a_column_3 a_column_6_tablet a_column_12_mobile"},Bl={class:"a_column a_column_3 a_column_6_tablet a_column_12_mobile"};function Rl(e,t,o,d,r,i){const a=f("a-slider"),s=f("aloha-example");return q(),k(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SHOW_STOPS_HEADER_",description:"_A_UI_GROUP_SHOW_STOPS_DESCRIPTION_",props:["vertical","height"]},{default:J(()=>[y("div",gl,[y("div",El,[p(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model1=l),max:20,vertical:!0,height:"200px",label:"_A_SLIDER_LABEL_NOT_SHOW_STOPS_"},null,8,["modelValue"]),y("div",null,"model1 "+H(e.model1),1)]),y("div",Il,[p(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=l=>e.model2=l),max:10,"show-stops":!0,vertical:!0,height:"200px",label:"_A_SLIDER_LABEL_SHOW_STOPS_"},null,8,["modelValue"]),y("div",null,"model2 "+H(e.model2),1)]),y("div",Bl,[p(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=l=>e.model3=l),extra:{min:10,max:40},max:40,min:10,range:!0,vertical:!0,height:"200px",label:"_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_"},null,8,["modelValue"]),y("div",null,"model3 "+H(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const yl=w(Ll,[["render",Rl]]);function Dl(){const e=n(()=>Ge({placeholder:"_A_SLIDER_COMPONENT_NAME_"}));return{pageTitle:n(()=>`ASlider${e.value?` (${e.value})`:""}`)}}const Pl={name:"PageSlider",components:{AlohaPage:Me,ATranslation:We,PageSliderBasic:Et,PageSliderChange:Dt,PageSliderData:Mt,PageSliderErrors:kt,PageSliderHelpText:Gt,PageSliderLabelDescription:zt,PageSliderMinMax:nl,PageSliderRange:_l,PageSliderStops:Sl,PageSliderVertical:yl},setup(){const{pageTitle:e}=Dl();return{pageTitle:e}}};function $l(e,t,o,d,r,i){const a=f("a-translation"),s=f("page-slider-basic"),l=f("page-slider-change"),h=f("page-slider-help-text"),I=f("page-slider-errors"),B=f("page-slider-label-description"),A=f("page-slider-range"),_=f("page-slider-min-max"),v=f("page-slider-data"),g=f("page-slider-stops"),R=f("page-slider-vertical"),T=f("aloha-page");return q(),k(T,{"page-title":e.pageTitle},{body:J(()=>[p(a,{tag:"p",html:"_A_SLIDER_COMPONENT_DESCRIPTION_"}),p(s),p(l),p(h),p(I),p(B),p(A),p(_),p(v),p(g),p(R)]),_:1},8,["page-title"])}const jl=w(Pl,[["render",$l]]);export{jl as default};
