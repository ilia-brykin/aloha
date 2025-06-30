import{A as g,a as U}from"./chunk.AlohaExample.BkpaIp2H.js";import{A as V}from"./chunk.AlohaTableProps.CQupy9sK.js";import{A as k}from"./chunk.AlohaTableTranslate.Di_GvXbB.js";import{s as X,A as B,c as j,_ as d,g as F}from"./bundle.index.DtrGaTsN.js";import{t as h,r as f,d as m,J,h as R,B as y,o as Y,U as b,aS as p,e as a,V as _,Y as i,Z as r,aT as W}from"./chunk.vendor.B8i9Zb03.js";import{g as z,R as Z,u as K}from"./chunk.vendor-lodash.GQwVh4JN.js";import"./chunk.APageTabTitle.CkNbxjdZ.js";import"./chunk.AlohaHighlightjs.DOgKZA3M.js";import"./chunk.ATable.VLsKiUMP.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.F_OeclwJ.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function ee(e,{hasTextAndLength:t=f(!1),isMoreButtonObservingVisible:u=f(!1),isOpen:s=f(!1),isTextShorterThanTextLength:n=f(!1)}){const c=h(e,"btnIconLeftLess"),o=h(e,"btnIconLeftMore"),l=h(e,"btnIconRightLess"),M=h(e,"btnIconRightMore"),q=h(e,"btnTextLess"),S=h(e,"btnTextMore"),I=h(e,"btnTitleLess"),O=h(e,"btnTitleMore"),E=h(e,"showLess"),T=f(void 0),x=m(()=>s.value?q.value:S.value),D=m(()=>s.value?I.value:O.value),w=m(()=>s.value?c.value:o.value),A=m(()=>s.value?l.value:M.value),P=m(()=>t.value?n.value?!1:E.value?!0:!s.value:u.value?E.value?!0:!s.value:!1);return{btnIconLeft:w,btnIconRight:A,btnText:x,btnTitle:D,buttonRef:T,isButtonVisible:P}}function te({hasTextAndLength:e=m(()=>!1),isOpen:t=f(!1)}){return{ariaExpanded:m(()=>{if(e.value)return t.value})}}function ie(e,{hasTextAndLength:t=m(()=>!1),isOpen:u=f(!1)}){const s=h(e,"height");return{maxHeightStyle:m(()=>{if(!(t.value||u.value))return s.value===0?"max-height: none;":`max-height: ${s.value}px`})}}function se(e){const t=h(e,"isOpenDefault"),u=f(void 0);return{initIsOpen:()=>{u.value=t.value},isOpen:u}}function ue(e,{isBtnHiddenDependentOnTextLength:t=m(()=>!1)}){const u=h(e,"height"),s=f(void 0),n=f(void 0),c=f(void 0),o=()=>{if(t.value)return;(z(s.value,"offsetHeight")||0)>u.value?c.value=!0:c.value=!1};return{checkHeight:o,containerRef:s,isMoreButtonObservingVisible:c,startObservingMutation:()=>{t.value||(n.value=new ResizeObserver(Z(()=>{o()},300)),n.value.observe(s.value))},stopObservingMutation:()=>{t.value||n.value&&n.value.unobserve(s.value)}}}function ae({hasTextAndLength:e=m(()=>!1),isOpen:t=f(!1)}){return{textScreenReaderLocal:m(()=>{if(!e.value)return t.value?"_A_SHOW_MORE_LESS_SCREEN_READER_":"_A_SHOW_MORE_MORE_SCREEN_READER_"})}}function ne(e,{isOpen:t=f(!1)}){const u=h(e,"text"),s=h(e,"textLength"),n=m(()=>!!(u.value&&s.value)),c=m(()=>s.value>u.value.length),o=m(()=>n.value&&c.value),l=m(()=>{const q=u.value.slice(0,s.value).trimEnd();let S="...",I=!0;for(let O=q.length-1;O>q.length-4&&q[O]===".";O--){if(I)S=S.slice(0,-1);else break;I=!0}return`${q}${S}`}),M=m(()=>{if(n.value){if(c.value)return u.value;if(!t.value)return l.value}return u.value});return{hasTextAndLength:n,isBtnHiddenDependentOnTextLength:o,isTextShorterThanTextLength:c,textLocal:M}}function oe(e,{textLocal:t=m(()=>{})}){const u=h(e,"safeHtml"),s=h(e,"html");return{isTextOrHtmlVisible:m(()=>!!(t.value||u.value||s.value))}}function le(e,{emit:t},{containerRef:u=f(void 0),hasTextAndLength:s=m(()=>!1),isOpen:n=f(!1),stopObservingMutation:c=()=>{}}){const o=h(e,"showLess");return{isOpen:n,toggleButton:()=>{n.value=!n.value,n.value&&!o.value&&c(),t("toggle",{isOpen:n.value}),s.value&&n.value&&!window.isScrollDisabled&&J().then(()=>X({element:u.value}))}}}const v={name:"AShowMore",inheritAttrs:!0,props:{alwaysTranslate:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},btnClass:{type:[String,Object],required:!1,default:"a_btn a_btn_link a_p_0"},btnIconLeftLess:{type:String,required:!1,default:void 0},btnIconLeftMore:{type:String,required:!1,default:void 0},btnIconRightLess:{type:String,required:!1,default:void 0},btnIconRightMore:{type:String,required:!1,default:void 0},btnId:{type:String,required:!1,default:void 0},btnParentClass:{type:String,required:!1,default:"a_text_center"},btnTextLess:{type:String,required:!1,default:"_A_SHOW_MORE_LESS_"},btnTextMore:{type:String,required:!1,default:"_A_SHOW_MORE_MORE_"},btnTitleLess:{type:String,required:!1,default:void 0},btnTitleMore:{type:String,required:!1,default:void 0},btnTitlePlacement:{type:String,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:!1},height:{type:Number,required:!1,default:200,validator:e=>e>=0},html:{type:String,required:!1,default:void 0},id:{type:String,required:!1,default:()=>K("a_show_more_")},isBtnTitleHtml:{type:Boolean,required:!1},isOpenDefault:{type:Boolean,required:!1,default:!1},safeHtml:{type:String,required:!1,default:void 0},showLess:{type:Boolean,required:!1,default:!0},text:{type:String,required:!1,default:void 0},textLength:{type:Number,required:!1,default:void 0,validator:e=>e>0}},emits:["toggle"],setup(e,t){const{expose:u}=t,{isOpen:s}=se(e),{hasTextAndLength:n,isBtnHiddenDependentOnTextLength:c,isTextShorterThanTextLength:o,textLocal:l}=ne(e,{isOpen:s}),{isTextOrHtmlVisible:M}=oe(e,{textLocal:l}),{checkHeight:q,containerRef:S,isMoreButtonObservingVisible:I,startObservingMutation:O,stopObservingMutation:E}=ue(e,{isBtnHiddenDependentOnTextLength:c}),{toggleButton:T}=le(e,t,{containerRef:S,hasTextAndLength:n,isOpen:s,stopObservingMutation:E}),{btnIconLeft:x,btnIconRight:D,btnText:w,btnTitle:A,buttonRef:P,isButtonVisible:N}=ee(e,{hasTextAndLength:n,isMoreButtonObservingVisible:I,isOpen:s,isTextShorterThanTextLength:o}),{maxHeightStyle:C}=ie(e,{hasTextAndLength:n,isOpen:s}),{textScreenReaderLocal:L}=ae({hasTextAndLength:n,isOpen:s}),{ariaExpanded:$}=te({hasTextAndLength:n,isOpen:s});return u({buttonRef:P,containerRef:S,isOpen:s,toggleButton:T}),y(()=>{q(),O()}),Y(()=>{E()}),{ariaExpanded:$,btnIconLeft:x,btnIconRight:D,btnText:w,btnTitle:A,buttonRef:P,containerRef:S,hasTextAndLength:n,isButtonVisible:N,isOpen:s,isTextOrHtmlVisible:M,maxHeightStyle:C,textLocal:l,textScreenReaderLocal:L,toggleButton:T}},render(){return R("div",{class:["a_show_more",{a_show_more_open:this.isOpen}]},[R("div",{class:"a_show_more__wrapper",style:this.maxHeightStyle},[R("div",{ref:"containerRef",id:this.id,ariaExpanded:this.ariaExpanded,...this.$attrs},[this.isTextOrHtmlVisible&&R(B,{alwaysTranslate:this.alwaysTranslate,tag:"div",text:this.textLocal,html:this.html,safeHtml:this.safeHtml}),this.$slots.default&&this.$slots.default({isButtonVisible:this.isButtonVisible,isOpen:this.isOpen})])]),this.isButtonVisible&&R("div",{class:this.btnParentClass},[R(j,{ref:"buttonRef",id:this.btnId,alwaysTranslate:this.alwaysTranslate,"aria-controls":this.id,class:["a_show_more__button",this.btnClass],disabled:this.disabled,iconLeft:this.btnIconLeft,iconRight:this.btnIconRight,isTitleHtml:this.isBtnTitleHtml,text:this.btnText,textAriaHidden:!this.hasTextAndLength,textScreenReader:this.textScreenReaderLocal,title:this.btnTitle,titlePlacement:this.btnTitlePlacement,...this.btnAttributes,onClick:this.toggleButton},()=>this.$slots.button&&this.$slots.button({isButtonVisible:this.isButtonVisible,isOpen:this.isOpen}))])])}};function re(){return{codeHtml:`<a-show-more>
  <ul>
    <li>1 aloha</li>
    <li>2 aloha</li>
    <li>3 aloha</li>
    <li>4 aloha</li>
    <li>5 aloha</li>
    <li>6 aloha</li>
    <li>7 aloha</li>
    <li>8 aloha</li>
    <li>9 aloha</li>
    <li>10 aloha</li>
    <li>11 aloha</li>
    <li>12 aloha</li>
  </ul>
</a-show-more>`}}function ce(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBasic",
  components: {
    AShowMore,
  },
};`}}const me={name:"PageShowMoreBasic",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=re(),{codeJs:t}=ce();return{codeHtml:e,codeJs:t}}},pe={class:"a_columns a_columns_count_12"},de={class:"a_column a_column_4 a_column_12_tablet"};function be(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",slots:"default"},{default:p(()=>[i("div",pe,[i("div",de,[r(o,null,{default:p(()=>t[0]||(t[0]=[i("ul",null,[i("li",null,"1 aloha"),i("li",null,"2 aloha"),i("li",null,"3 aloha"),i("li",null,"4 aloha"),i("li",null,"5 aloha"),i("li",null,"6 aloha"),i("li",null,"7 aloha"),i("li",null,"8 aloha"),i("li",null,"9 aloha"),i("li",null,"10 aloha"),i("li",null,"11 aloha"),i("li",null,"12 aloha")],-1)])),_:1})])])]),_:1},8,["code-html","code-js"])}const _e=d(me,[["render",be]]);function he(){return{codeHtml:`<a-show-more 
  :html="html"
  btn-class="a_btn a_btn_primary"
  btn-parent-class="a_text_left"
></a-show-more>`}}function ge(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBtnClass",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const ve={name:"PageShowMoreBtnConfig",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=he(),{codeJs:t}=ge();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},fe={class:"a_columns a_columns_count_12"},qe={class:"a_column a_column_4 a_column_12_tablet"};function Me(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_BTN_CLASS_HEADER_",description:"_A_SHOW_MORE_GROUP_BTN_CLASS_DESCRIPTION_",props:["btn-class","btn-parent-class"]},{default:p(()=>[i("div",fe,[i("div",qe,[r(o,{html:e.html,"btn-class":"a_btn a_btn_primary","btn-parent-class":"a_text_left"},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const Se=d(ve,[["render",Me]]);function Oe(){return{codeHtml:`<a-show-more 
  :html="html"
  btn-icon-left-less="ChevronUp"
  btn-icon-right-less="ChevronUp"
  btn-icon-left-more="ChevronDown"
  btn-icon-right-more="ChevronDown"
></a-show-more>`}}function Ie(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBtnIcons",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const Ee={name:"PageShowMoreBtnIcons",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=Oe(),{codeJs:t}=Ie();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},Te={class:"a_columns a_columns_count_12"},Pe={class:"a_column a_column_4 a_column_12_tablet"};function Re(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_BTN_ICONS_HEADER_",description:"_A_SHOW_MORE_GROUP_BTN_ICONS_DESCRIPTION_",props:["btn-icon-left-less","btn-icon-right-less","btn-icon-left-more","btn-icon-right-more"]},{default:p(()=>[i("div",Te,[i("div",Pe,[r(o,{html:e.html,"btn-icon-left-less":"ChevronUp","btn-icon-right-less":"ChevronUp","btn-icon-left-more":"ChevronDown","btn-icon-right-more":"ChevronDown"},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const xe=d(Ee,[["render",Re]]);function De(){return{codeHtml:`<a-show-more 
  :html="html"
  btn-title-less="_A_SHOW_MORE_GROUP_TITLE_LESS_"
  btn-title-more="_A_SHOW_MORE_GROUP_TITLE_MORE_"
></a-show-more>`}}function we(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBtnTitle",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const Ae={name:"PageShowMoreBtnTitle",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=De(),{codeJs:t}=we();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},He={class:"a_columns a_columns_count_12"},Ne={class:"a_column a_column_4 a_column_12_tablet"};function Ce(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_BTN_TITLE_HEADER_",description:"_A_SHOW_MORE_GROUP_BTN_TITLE_DESCRIPTION_",props:["btn-title-less","btn-title-more"]},{default:p(()=>[i("div",He,[i("div",Ne,[r(o,{html:e.html,"btn-title-less":"_A_SHOW_MORE_GROUP_TITLE_LESS_","btn-title-more":"_A_SHOW_MORE_GROUP_TITLE_MORE_"},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const Le=d(Ae,[["render",Ce]]);function $e(){return{codeHtml:`<a-show-more 
  :html="html"
  btn-title-less="_A_SHOW_MORE_GROUP_TITLE_LESS_"
  btn-title-more="_A_SHOW_MORE_GROUP_TITLE_MORE_"
  :is-btn-title-html="true"
></a-show-more>
<a-show-more 
  class="a_mt_2"
  :html="html"
  btn-title-less="<strong>Aloha</strong>"
  btn-title-more="<strong>Aloha</strong>"
  :is-btn-title-html="true"
></a-show-more>`}}function We(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBtnTitleHtml",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const Be={name:"PageShowMoreBtnTitleHtml",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=$e(),{codeJs:t}=We();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},je={class:"a_columns a_columns_count_12"},Je={class:"a_column a_column_4 a_column_12_tablet"};function ye(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_BTN_TITLE_HTML_HEADER_",description:"_A_SHOW_MORE_GROUP_BTN_TITLE_HTML_DESCRIPTION_",props:["btn-title-less","btn-title-more","is-btn-title-html"]},{default:p(()=>[i("div",je,[i("div",Je,[r(o,{html:e.html,"btn-title-less":"_A_SHOW_MORE_GROUP_TITLE_LESS_","btn-title-more":"_A_SHOW_MORE_GROUP_TITLE_MORE_","is-btn-title-html":!0},null,8,["html"]),r(o,{class:"a_mt_2",html:e.html,"btn-title-less":"<strong>Aloha</strong>","btn-title-more":"<strong>Aloha</strong>","is-btn-title-html":!0},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const Ge=d(Be,[["render",ye]]);function Qe(){return{codeHtml:`<a-show-more 
  :disabled="true"
>
  <ul>
    <li>1 aloha</li>
    <li>2 aloha</li>
    <li>3 aloha</li>
    <li>4 aloha</li>
    <li>5 aloha</li>
    <li>6 aloha</li>
    <li>7 aloha</li>
    <li>8 aloha</li>
    <li>9 aloha</li>
    <li>10 aloha</li>
    <li>11 aloha</li>
    <li>12 aloha</li>
  </ul>
</a-show-more>`}}function Ue(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreDisabled",
  components: {
    AShowMore,
  },
};`}}const Ve={name:"PageShowMoreDisabled",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=Qe(),{codeJs:t}=Ue();return{codeHtml:e,codeJs:t}}},ke={class:"a_columns a_columns_count_12"},Xe={class:"a_column a_column_4 a_column_12_tablet"};function Fe(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_DISABLED_HEADER_",description:"_A_SHOW_MORE_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:p(()=>[i("div",ke,[i("div",Xe,[r(o,{disabled:!0},{default:p(()=>t[0]||(t[0]=[i("ul",null,[i("li",null,"1 aloha"),i("li",null,"2 aloha"),i("li",null,"3 aloha"),i("li",null,"4 aloha"),i("li",null,"5 aloha"),i("li",null,"6 aloha"),i("li",null,"7 aloha"),i("li",null,"8 aloha"),i("li",null,"9 aloha"),i("li",null,"10 aloha"),i("li",null,"11 aloha"),i("li",null,"12 aloha")],-1)])),_:1})])])]),_:1},8,["code-html","code-js"])}const Ye=d(Ve,[["render",Fe]]);function ze(){return{codeHtml:`<a-show-more 
  :html="html"
  @toggle="onToggle"
></a-show-more>`}}function Ze(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreEvents",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;
      
    const onToggle = ({ isOpen }) => {
      console.log("isOpen", isOpen);
    };  

    return {
      html,
      onToggle,
    };
  },
};`}}const Ke={name:"PageShowMoreEvents",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=ze(),{codeJs:t}=Ze();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`,onToggle:({isOpen:n})=>{console.log("isOpen",n)}}}},et={class:"a_columns a_columns_count_12"},tt={class:"a_column a_column_4 a_column_12_tablet"};function it(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_EVENTS_HEADER_",description:"_A_SHOW_MORE_GROUP_EVENTS_DESCRIPTION_",emits:"toggle"},{default:p(()=>[i("div",et,[i("div",tt,[r(o,{html:e.html,onToggle:e.onToggle},null,8,["html","onToggle"])])])]),_:1},8,["code-html","code-js"])}const st=d(Ke,[["render",it]]);function ut(){return{codeHtml:`<div
  class="a_btn_group"
  role="group"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_SHOW_MORE_TEXT_TOGGLE_WITH_IS_OPEN_"
    @click="toggleShowWithIsOpen"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_SHOW_MORE_TEXT_TOGGLE_WITH_TOGGLE_BUTTON_"
    @click="toggleShowWithToggleButton"
  ></a-button>
</div>
<a-show-more 
  ref="showMoreRef"
  :html="html"
></a-show-more>`}}function at(){return{codeJs:`import {
  nextTick,
  onMounted,
  ref,
} from "vue";

import {
  AButton,
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreExposes",
  components: {
    AButton,
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;
      
    const showMoreRef = ref(undefined);

    const toggleShowWithIsOpen = () => {
      showMoreRef.value.isOpen = !showMoreRef.value.isOpen;
    };

    const toggleShowWithToggleButton = () => {
      showMoreRef.value.toggleButton();
    };

    onMounted(() => {
      showMoreRef.value.containerRef.setAttribute("class", "a_bg_gray_200");
      nextTick().then(
        () => {
          showMoreRef.value.buttonRef.$el.setAttribute("class", "a_btn a_btn_primary");
        }
      );
    });

    return {
      html,
      showMoreRef,
      toggleShowWithIsOpen,
      toggleShowWithToggleButton,
    };
  },
};`}}const nt={name:"PageShowMoreExposes",components:{AButton:j,AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=ut(),{codeJs:t}=at(),u=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`,s=f(void 0),n=()=>{s.value.isOpen=!s.value.isOpen},c=()=>{s.value.toggleButton()};return y(()=>{s.value.containerRef.setAttribute("class","a_bg_gray_200"),J().then(()=>{s.value.buttonRef.$el.setAttribute("class","a_btn a_btn_primary")})}),{codeHtml:e,codeJs:t,html:u,showMoreRef:s,toggleShowWithIsOpen:n,toggleShowWithToggleButton:c}}},ot={class:"a_columns a_columns_count_12"},lt={class:"a_column a_column_4 a_column_12_tablet"},rt={class:"a_btn_group",role:"group"};function ct(e,t,u,s,n,c){const o=a("a-button"),l=a("a-show-more"),M=a("aloha-example");return _(),b(M,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_EXPOSES_HEADER_",description:"_A_SHOW_MORE_GROUP_EXPOSES_DESCRIPTION_",exposes:["buttonRef","containerRef","isOpen","toggleButton"]},{default:p(()=>[i("div",ot,[i("div",lt,[i("div",rt,[r(o,{class:"a_btn a_btn_outline_primary",text:"_A_SHOW_MORE_TEXT_TOGGLE_WITH_IS_OPEN_",onClick:e.toggleShowWithIsOpen},null,8,["onClick"]),r(o,{class:"a_btn a_btn_outline_primary",text:"_A_SHOW_MORE_TEXT_TOGGLE_WITH_TOGGLE_BUTTON_",onClick:e.toggleShowWithToggleButton},null,8,["onClick"])]),r(l,{ref:"showMoreRef",html:e.html},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const mt=d(nt,[["render",ct]]);function pt(){return{codeHtml:`<a-show-more 
  :html="html"
  :height="500"
></a-show-more>`}}function dt(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreHeight",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const bt={name:"PageShowMoreHeight",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=pt(),{codeJs:t}=dt();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},_t={class:"a_columns a_columns_count_12"},ht={class:"a_column a_column_4 a_column_12_tablet"};function gt(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_HEIGHT_HEADER_",description:"_A_SHOW_MORE_GROUP_HEIGHT_DESCRIPTION_",props:"height"},{default:p(()=>[i("div",_t,[i("div",ht,[r(o,{html:e.html,height:500},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const vt=d(bt,[["render",gt]]);function ft(){return{codeHtml:`<a-show-more 
  :html="html"
></a-show-more>`}}function qt(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreHtml",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const Mt={name:"PageShowMoreHtml",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=ft(),{codeJs:t}=qt();return{codeHtml:e,codeJs:t,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},St={class:"a_columns a_columns_count_12"},Ot={class:"a_column a_column_4 a_column_12_tablet"};function It(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_HTML_HEADER_",description:"_A_SHOW_MORE_GROUP_HTML_DESCRIPTION_",props:"html"},{default:p(()=>[i("div",St,[i("div",Ot,[r(o,{html:e.html},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const Et=d(Mt,[["render",It]]);function Tt(){return{codeHtml:`<a-show-more 
  :html="html"
  :show-less="false"
></a-show-more>`}}function Pt(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreNotLess",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const Rt={name:"PageShowMoreNotLess",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=Tt(),{codeJs:t}=Pt();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},xt={class:"a_columns a_columns_count_12"},Dt={class:"a_column a_column_4 a_column_12_tablet"};function wt(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_NOT_LESS_HEADER_",description:"_A_SHOW_MORE_GROUP_NOT_LESS_DESCRIPTION_",props:"show-less"},{default:p(()=>[i("div",xt,[i("div",Dt,[r(o,{html:e.html,"show-less":!1},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const At=d(Rt,[["render",wt]]);function Ht(){return{codeHtml:`<a-show-more 
  :html="html"
  :is-open-default="true"
></a-show-more>`}}function Nt(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreOpenDefault",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const Ct={name:"PageShowMoreOpenDefault",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=Ht(),{codeJs:t}=Nt();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},Lt={class:"a_columns a_columns_count_12"},$t={class:"a_column a_column_4 a_column_12_tablet"};function Wt(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_OPEN_DEFAULT_HEADER_",description:"_A_SHOW_MORE_GROUP_OPEN_DEFAULT_DESCRIPTION_",props:"is-open-default"},{default:p(()=>[i("div",Lt,[i("div",$t,[r(o,{html:e.html,"is-open-default":!0},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const Bt=d(Ct,[["render",Wt]]);function jt(){return{codeHtml:`<a-show-more 
  :safe-html="html"
></a-show-more>`}}function Jt(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreSafeHtml",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const yt={name:"PageShowMoreSafeHtml",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=jt(),{codeJs:t}=Jt();return{codeHtml:e,codeJs:t,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},Gt={class:"a_columns a_columns_count_12"},Qt={class:"a_column a_column_4 a_column_12_tablet"};function Ut(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_SAFE_HTML_HEADER_",description:"_A_SHOW_MORE_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:p(()=>[i("div",Gt,[i("div",Qt,[r(o,{"safe-html":e.html},null,8,["safe-html"])])])]),_:1},8,["code-html","code-js"])}const Vt=d(yt,[["render",Ut]]);function kt(){return{codeHtml:`<a-show-more 
  btn-text-less=""
  btn-text-more=""
>
  <template
    v-slot:button="{ isButtonVisible, isOpen }"
  >
    <span>{{ isOpen ? "Show less" : "Show more" }}</span>
  </template>
  
  <template
    v-slot:default="{ isButtonVisible, isOpen }"
  >
    <p>isButtonVisible: {{ isButtonVisible }}</p>
    <p>isOpen: {{ isOpen }}</p>
    <ul>
      <li>1 aloha</li>
      <li>2 aloha</li>
      <li>3 aloha</li>
      <li>4 aloha</li>
      <li>5 aloha</li>
      <li>6 aloha</li>
      <li>7 aloha</li>
      <li>8 aloha</li>
      <li>9 aloha</li>
      <li>10 aloha</li>
      <li>11 aloha</li>
      <li>12 aloha</li>
    </ul>
  </template>
  
</a-show-more>`}}function Xt(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreSlots",
  components: {
    AShowMore,
  },
};`}}const Ft={name:"PageShowMoreSlots",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=kt(),{codeJs:t}=Xt();return{codeHtml:e,codeJs:t}}},Yt={class:"a_columns a_columns_count_12"},zt={class:"a_column a_column_4 a_column_12_tablet"};function Zt(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_SLOTS_HEADER_",description:"_A_SHOW_MORE_GROUP_SLOTS_DESCRIPTION_",slots:["button","default"]},{default:p(()=>[i("div",Yt,[i("div",zt,[r(o,{"btn-text-less":"","btn-text-more":""},{button:p(({isButtonVisible:M,isOpen:q})=>[i("span",null,W(q?"Show less":"Show more"),1)]),default:p(({isButtonVisible:M,isOpen:q})=>[i("p",null,"isButtonVisible: "+W(M),1),i("p",null,"isOpen: "+W(q),1),t[0]||(t[0]=i("ul",null,[i("li",null,"1 aloha"),i("li",null,"2 aloha"),i("li",null,"3 aloha"),i("li",null,"4 aloha"),i("li",null,"5 aloha"),i("li",null,"6 aloha"),i("li",null,"7 aloha"),i("li",null,"8 aloha"),i("li",null,"9 aloha"),i("li",null,"10 aloha"),i("li",null,"11 aloha"),i("li",null,"12 aloha")],-1))]),_:1})])])]),_:1},8,["code-html","code-js"])}const Kt=d(Ft,[["render",Zt]]);function ei(){return{codeHtml:`<a-show-more 
  :text="text"
></a-show-more>`}}function ti(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreText",
  components: {
    AShowMore,
  },
  setup() {
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.\`;

    return {
      text,
    };
  },
};`}}const ii={name:"PageShowMoreText",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=ei(),{codeJs:t}=ti();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},si={class:"a_columns a_columns_count_12"},ui={class:"a_column a_column_4 a_column_12_tablet"};function ai(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_TEXT_HEADER_",description:"_A_SHOW_MORE_GROUP_TEXT_DESCRIPTION_",props:"text"},{default:p(()=>[i("div",si,[i("div",ui,[r(o,{text:e.text},null,8,["text"])])])]),_:1},8,["code-html","code-js"])}const ni=d(ii,[["render",ai]]);function oi(){return{codeHtml:`<a-show-more 
  :text="text"
  :text-length="200"
></a-show-more>
<a-show-more 
  class="a_mt_2"
  :text="text2"
  :text-length="200"
></a-show-more>`}}function li(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreTextLength",
  components: {
    AShowMore,
  },
  setup() {
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.\`;

    const text2 = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu v..enatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo.\`;

    return {
      text,
      text2,
    };
  },
};`}}const ri={name:"PageShowMoreTextLength",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=oi(),{codeJs:t}=li();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`,text2:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu v..enatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo.`}}},ci={class:"a_columns a_columns_count_12"},mi={class:"a_column a_column_4 a_column_12_tablet"};function pi(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_TEXT_LENGTH_HEADER_",description:"_A_SHOW_MORE_GROUP_TEXT_LENGTH_DESCRIPTION_",props:["text","text-length"]},{default:p(()=>[i("div",ci,[i("div",mi,[r(o,{text:e.text,"text-length":200},null,8,["text"]),r(o,{class:"a_mt_2",text:e.text2,"text-length":200},null,8,["text"])])])]),_:1},8,["code-html","code-js"])}const di=d(ri,[["render",pi]]);function bi(){return{codeHtml:`<a-show-more 
  :html="html"
  btn-text-more="Show more aloha"
  btn-text-less="Show less aloha"
></a-show-more>`}}function _i(){return{codeJs:`import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreTexts",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;

    return {
      html,
    };
  },
};`}}const hi={name:"PageShowMoreTexts",components:{AlohaExample:g,AShowMore:v},setup(){const{codeHtml:e}=bi(),{codeJs:t}=_i();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},gi={class:"a_columns a_columns_count_12"},vi={class:"a_column a_column_4 a_column_12_tablet"};function fi(e,t,u,s,n,c){const o=a("a-show-more"),l=a("aloha-example");return _(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SHOW_MORE_GROUP_BTN_TEXTS_HEADER_",description:"_A_SHOW_MORE_GROUP_BTN_TEXT_DESCRIPTION_",props:["btn-text-more","btn-text-less"]},{default:p(()=>[i("div",gi,[i("div",vi,[r(o,{html:e.html,"btn-text-more":"Show more aloha","btn-text-less":"Show less aloha"},null,8,["html"])])])]),_:1},8,["code-html","code-js"])}const qi=d(hi,[["render",fi]]);function Mi(){return{dataEvents:[{name:"toggle",description:"_A_SHOW_MORE_TOGGLE_DESCRIPTION_",type:"Function"}]}}function Si(){return{dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function Oi(){const e=m(()=>F({placeholder:"_A_SHOW_MORE_COMPONENT_NAME_"}));return{pageTitle:m(()=>`AShowMore${e.value?` (${e.value})`:""}`)}}function Ii(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"btn-attributes",description:"_A_SHOW_MORE_PROPS_BTN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"btn-class",description:"_A_SHOW_MORE_BTN_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_link a_p_0",required:!1},{name:"btn-icon-left-less",description:"_A_SHOW_MORE_BTN_ICON_LEFT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-left-more",description:"_A_SHOW_MORE_BTN_ICON_LEFT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-less",description:"_A_SHOW_MORE_BTN_ICON_RIGHT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-more",description:"_A_SHOW_MORE_BTN_ICON_RIGHT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-id",description:"_A_SHOW_MORE_BTN_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-parent-class",description:"_A_SHOW_MORE_BTN_PARENT_CLASS_DESCRIPTION_",type:"String",default:"a_text_center",required:!1},{name:"btn-text-less",description:"_A_SHOW_MORE_BTN_TEXT_LESS_DESCRIPTION_",type:"String",default:"_SHOW_LESS_",required:!1},{name:"btn-text-more",description:"_A_SHOW_MORE_BTN_TEXT_MORE_DESCRIPTION_",type:"String",default:"_SHOW_MORE_",required:!1},{name:"btn-title-less",description:"_A_SHOW_MORE_BTN_TITLE_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-more",description:"_A_SHOW_MORE_BTN_TITLE_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-placement",description:"_A_SHOW_MORE_BTN_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"disabled",description:"_A_SHOW_MORE_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"height",description:"_A_SHOW_MORE_HEIGHT_DESCRIPTION_",type:"Number",default:200,required:!1},{name:"html",description:"_A_SHOW_MORE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_SHOW_MORE_PROPS_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-btn-title-html",description:"_A_SHOW_MORE_IS_BTN_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-open-default",description:"_A_SHOW_MORE_IS_OPEN_DEFAULT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_SHOW_MORE_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-less",description:"_A_SHOW_MORE_SHOW_LESS_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"text",description:"_A_SHOW_MORE_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-length",description:"_A_SHOW_MORE_PROPS_TEXT_LENGTH_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function Ei(){return{dataSlots:[{name:"default",description:"_A_SHOW_MORE_SLOT_DEFAULT_DESCRIPTION_"},{name:"button",description:"_A_SHOW_MORE_SLOT_BUTTON_DESCRIPTION_"}]}}function Ti(){return{dataTranslate:["_A_SHOW_MORE_MORE_","_A_SHOW_MORE_LESS_","_A_SHOW_MORE_LESS_SCREEN_READER_","_A_SHOW_MORE_MORE_SCREEN_READER_"]}}const Pi={name:"PageShowMore",components:{AlohaPage:U,AlohaTableProps:V,AlohaTableTranslate:k,ATranslation:B,PageShowMoreBasic:_e,PageShowMoreBtnClass:Se,PageShowMoreBtnIcons:xe,PageShowMoreBtnTitle:Le,PageShowMoreBtnTitleHtml:Ge,PageShowMoreDisabled:Ye,PageShowMoreEvents:st,PageShowMoreExposes:mt,PageShowMoreHeight:vt,PageShowMoreHtml:Et,PageShowMoreNotLess:At,PageShowMoreOpenDefault:Bt,PageShowMoreSafeHtml:Vt,PageShowMoreSlots:Kt,PageShowMoreText:ni,PageShowMoreTextLength:di,PageShowMoreTexts:qi},setup(){const{pageTitle:e}=Oi(),{dataProps:t}=Ii(),{dataSlots:u}=Ei(),{dataEvents:s}=Mi(),{dataExposes:n}=Si(),{dataTranslate:c}=Ti();return{dataEvents:s,dataExposes:n,dataProps:t,dataSlots:u,dataTranslate:c,pageTitle:e}}};function Ri(e,t,u,s,n,c){const o=a("a-translation"),l=a("page-show-more-basic"),M=a("page-show-more-disabled"),q=a("page-show-more-html"),S=a("page-show-more-safe-html"),I=a("page-show-more-text"),O=a("page-show-more-text-length"),E=a("page-show-more-height"),T=a("page-show-more-not-less"),x=a("page-show-more-btn-class"),D=a("page-show-more-btn-icons"),w=a("page-show-more-btn-title"),A=a("page-show-more-btn-title-html"),P=a("page-show-more-texts"),N=a("page-show-more-open-default"),C=a("page-show-more-slots"),L=a("page-show-more-events"),$=a("page-show-more-exposes"),H=a("aloha-table-props"),G=a("aloha-table-translate"),Q=a("aloha-page");return _(),b(Q,{"page-title":e.pageTitle},{body:p(()=>[r(o,{tag:"p",html:"_A_SHOW_MORE_COMPONENT_DESCRIPTION_"}),r(l),r(M),r(q),r(S),r(I),r(O),r(E),r(T),r(x),r(D),r(w),r(A),r(P),r(N),r(C),r(L),r($),r(H,{data:e.dataProps},null,8,["data"]),r(H,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),r(H,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),r(H,{"table-label":"Exposes",data:e.dataExposes,columns:["name","type","description"]},null,8,["data"]),r(G,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Vi=d(Pi,[["render",Ri]]);export{Vi as default};
