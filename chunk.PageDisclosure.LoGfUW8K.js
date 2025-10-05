import{A as f,a as y}from"./chunk.AlohaExample.Co9nMC4m.js";import{A as J}from"./chunk.AlohaTableProps.DqXH2zs4.js";import{A as Q}from"./chunk.AlohaTableTranslate.wdxfRuuD.js";import{s as G,A,f as w,_ as p,c as V,g as k}from"./bundle.index.Dj2r79dL.js";import{t as d,r as x,d as S,K as C,h as q,V as _,aT as m,e as s,W as b,Z as i,_ as a,x as W,aU as M}from"./chunk.vendor.DmOTRqbf.js";import{u as X}from"./chunk.vendor-lodash.DsZvX3G1.js";import"./chunk.APageTabTitle.BRewUv2K.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.ATable.DtUphIpo.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function F(e,{isOpen:t=x(!1)}){const o=d(e,"btnIconLeftLess"),n=d(e,"btnIconLeftMore"),l=d(e,"btnIconRightLess"),c=d(e,"btnIconRightMore"),u=d(e,"btnTextLess"),r=d(e,"btnTextMore"),g=d(e,"btnTitleLess"),h=d(e,"btnTitleMore"),I=d(e,"showLess"),L=x(void 0),O=S(()=>t.value?u.value:r.value),E=S(()=>t.value?g.value:h.value),P=S(()=>t.value?o.value:n.value),D=S(()=>t.value?l.value:c.value),T=S(()=>t.value?I.value:!0);return{btnIconLeft:P,btnIconRight:D,btnText:O,btnTitle:E,buttonRef:L,isButtonVisible:T}}function K(e){const t=d(e,"isOpenDefault"),o=x(void 0);return{initIsOpen:()=>{o.value=t.value},isOpen:o}}function Y(e,{isOpen:t=x(!1)}){const o=d(e,"htmlLess"),n=d(e,"htmlMore"),l=d(e,"safeHtmlLess"),c=d(e,"safeHtmlMore"),u=d(e,"textLess"),r=d(e,"textMore"),g=S(()=>t.value?n.value:o.value),h=S(()=>t.value?c.value:l.value),I=S(()=>t.value?r.value:u.value),L=S(()=>!!(I.value||h.value||g.value));return{htmlLocal:g,isTextOrHtmlVisible:L,safeHtmlLocal:h,textLocal:I}}function Z(e,{emit:t},{isOpen:o=x(!1)}){const n=x(void 0);return{containerRef:n,toggleButton:()=>{o.value=!o.value,t("toggle",{isOpen:o.value}),o.value&&!window.isScrollDisabled&&C().then(()=>G({element:n.value}))}}}const v={name:"ADisclosure",inheritAttrs:!0,props:{alwaysTranslate:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},btnClass:{type:[String,Object],required:!1,default:"a_btn a_btn_link a_p_0"},btnIconLeftLess:{type:String,required:!1,default:void 0},btnIconLeftMore:{type:String,required:!1,default:void 0},btnIconRightLess:{type:String,required:!1,default:void 0},btnIconRightMore:{type:String,required:!1,default:void 0},btnId:{type:String,required:!1,default:void 0},btnParentClass:{type:String,required:!1,default:"a_text_center"},btnTextLess:{type:String,required:!1,default:"_A_DISCLOSURE_LESS_"},btnTextMore:{type:String,required:!1,default:"_A_DISCLOSURE_MORE_"},btnTitleLess:{type:String,required:!1,default:void 0},btnTitleMore:{type:String,required:!1,default:void 0},btnTitlePlacement:{type:String,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:!1},htmlLess:{type:String,required:!1,default:void 0},htmlMore:{type:String,required:!1,default:void 0},id:{type:String,required:!1,default:()=>X("a_disclosure_")},isBtnTitleHtml:{type:Boolean,required:!1},isOpenDefault:{type:Boolean,required:!1,default:!1},safeHtmlLess:{type:String,required:!1,default:void 0},safeHtmlMore:{type:String,required:!1,default:void 0},showLess:{type:Boolean,required:!1,default:!0},textLess:{type:String,required:!1,default:void 0},textMore:{type:String,required:!1,default:void 0}},emits:["toggle"],setup(e,t){const{expose:o}=t,{initIsOpen:n,isOpen:l}=K(e),{htmlLocal:c,isTextOrHtmlVisible:u,safeHtmlLocal:r,textLocal:g}=Y(e,{isOpen:l}),{containerRef:h,toggleButton:I}=Z(e,t,{isOpen:l}),{btnIconLeft:L,btnIconRight:O,btnText:E,btnTitle:P,buttonRef:D,isButtonVisible:T}=F(e,{isOpen:l});return n(),o({buttonRef:D,containerRef:h,isOpen:l,toggleButton:I}),{btnIconLeft:L,btnIconRight:O,btnText:E,btnTitle:P,buttonRef:D,containerRef:h,htmlLocal:c,isButtonVisible:T,isOpen:l,isTextOrHtmlVisible:u,safeHtmlLocal:r,textLocal:g,toggleButton:I}},render(){return q("div",{class:["a_show_more",{a_show_more_open:this.isOpen}]},[q("div",{class:"a_show_more__wrapper"},[q("div",{ref:"containerRef",id:this.id,ariaExpanded:this.isOpen,...this.$attrs},[this.isTextOrHtmlVisible&&q(A,{alwaysTranslate:this.alwaysTranslate,html:this.htmlLocal,safeHtml:this.safeHtmlLocal,tag:"div",text:this.textLocal}),this.isOpen?this.$slots.more&&this.$slots.more({isButtonVisible:this.isButtonVisible,isOpen:this.isOpen}):this.$slots.less&&this.$slots.less({isButtonVisible:this.isButtonVisible,isOpen:this.isOpen})])]),this.isButtonVisible&&q("div",{class:this.btnParentClass},[q(w,{ref:"buttonRef",id:this.btnId,alwaysTranslate:this.alwaysTranslate,"aria-controls":this.id,class:["a_show_more__button",this.btnClass],disabled:this.disabled,iconLeft:this.btnIconLeft,iconRight:this.btnIconRight,isTitleHtml:this.isBtnTitleHtml,text:this.btnText,title:this.btnTitle,titlePlacement:this.btnTitlePlacement,type:"button",...this.btnAttributes,onClick:this.toggleButton},()=>this.$slots.button&&this.$slots.button({isButtonVisible:this.isButtonVisible,isOpen:this.isOpen}))])])}};function z(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
></a-disclosure>`}}function ee(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBasic",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const te={name:"PageDisclosureBasic",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=z(),{codeJs:t}=ee();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},se={class:"a_columns a_columns_count_12"},ie={class:"a_column a_column_4 a_column_12_tablet"};function oe(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["text-less","text-more"]},{default:m(()=>[i("div",se,[i("div",ie,[a(u,{"text-less":e.textLess,"text-more":e.textMore},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const ne=p(te,[["render",oe]]);function ue(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-class="a_btn a_btn_primary"
  btn-parent-class="a_text_left"
></a-disclosure>`}}function ae(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnClass",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const le={name:"PageDisclosureBtnClass",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=ue(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},re={class:"a_columns a_columns_count_12"},ce={class:"a_column a_column_4 a_column_12_tablet"};function me(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_CLASS_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_CLASS_DESCRIPTION_",props:["btn-class","btn-parent-class"]},{default:m(()=>[i("div",re,[i("div",ce,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-class":"a_btn a_btn_primary","btn-parent-class":"a_text_left"},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const de=p(le,[["render",me]]);function pe(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-icon-left-less="ChevronUp"
  btn-icon-right-less="ChevronUp"
  btn-icon-left-more="ChevronDown"
  btn-icon-right-more="ChevronDown"
></a-disclosure>`}}function _e(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnIcons",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const be={name:"PageDisclosureBtnIcons",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=pe(),{codeJs:t}=_e();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},ge={class:"a_columns a_columns_count_12"},he={class:"a_column a_column_4 a_column_12_tablet"};function fe(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_ICONS_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_ICONS_DESCRIPTION_",props:["btn-icon-left-less","btn-icon-right-less","btn-icon-left-more","btn-icon-right-more"]},{default:m(()=>[i("div",ge,[i("div",he,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-icon-left-less":"ChevronUp","btn-icon-right-less":"ChevronUp","btn-icon-left-more":"ChevronDown","btn-icon-right-more":"ChevronDown"},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const ve=p(be,[["render",fe]]);function Se(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-text-less="Show less aloha"
  btn-text-more="Show more aloha"
></a-disclosure>`}}function Ie(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnTexts",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const Le={name:"PageDisclosureBtnTexts",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=Se(),{codeJs:t}=Ie();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},xe={class:"a_columns a_columns_count_12"},De={class:"a_column a_column_4 a_column_12_tablet"};function qe(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_TEXTS_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_TEXTS_DESCRIPTION_",props:["btn-text-less","btn-text-more"]},{default:m(()=>[i("div",xe,[i("div",De,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-text-less":"Show less aloha","btn-text-more":"Show more aloha"},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const Oe=p(Le,[["render",qe]]);function Ee(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="_A_DISCLOSURE_GROUP_TITLE_LESS_"
  btn-title-more="_A_DISCLOSURE_GROUP_TITLE_MORE_"
></a-disclosure>`}}function Pe(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnTitle",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const Te={name:"PageDisclosureBtnTitle",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=Ee(),{codeJs:t}=Pe();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},Re={class:"a_columns a_columns_count_12"},Me={class:"a_column a_column_4 a_column_12_tablet"};function Ae(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_TITLE_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_TITLE_DESCRIPTION_",props:["btn-title-less","btn-title-more"]},{default:m(()=>[i("div",Re,[i("div",Me,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-title-less":"_A_DISCLOSURE_GROUP_TITLE_LESS_","btn-title-more":"_A_DISCLOSURE_GROUP_TITLE_MORE_"},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const Ce=p(Te,[["render",Ae]]);function Ne(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="_A_DISCLOSURE_GROUP_TITLE_LESS_"
  btn-title-more="_A_DISCLOSURE_GROUP_TITLE_MORE_"
  :is-btn-title-html="true"
></a-disclosure>
<a-disclosure
  class="a_mt_2"
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="<strong>Aloha</strong>"
  btn-title-more="<strong>Aloha</strong>"
  :is-btn-title-html="true"
></a-disclosure>`}}function $e(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnTitleHtml",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const He={name:"PageDisclosureBtnTitle",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=Ne(),{codeJs:t}=$e();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},Ue={class:"a_columns a_columns_count_12"},Be={class:"a_column a_column_4 a_column_12_tablet"};function je(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_TITLE_HTML_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_TITLE_HTML_DESCRIPTION_",props:["btn-title-less","btn-title-more","is-btn-title-html"]},{default:m(()=>[i("div",Ue,[i("div",Be,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-title-less":"_A_DISCLOSURE_GROUP_TITLE_LESS_","btn-title-more":"_A_DISCLOSURE_GROUP_TITLE_MORE_","is-btn-title-html":!0},null,8,["text-less","text-more"]),a(u,{class:"a_mt_2","text-less":e.textLess,"text-more":e.textMore,"btn-title-less":"<strong>Aloha</strong>","btn-title-more":"<strong>Aloha</strong>","is-btn-title-html":!0},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const ye=p(He,[["render",je]]);function Je(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :disabled="true"
></a-disclosure>`}}function Qe(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureDisabled",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const Ge={name:"PageDisclosureDisabled",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=Je(),{codeJs:t}=Qe();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},we={class:"a_columns a_columns_count_12"},Ve={class:"a_column a_column_4 a_column_12_tablet"};function ke(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_DISABLED_HEADER_",description:"_A_DISCLOSURE_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:m(()=>[i("div",we,[i("div",Ve,[a(u,{"text-less":e.textLess,"text-more":e.textMore,disabled:!0},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const We=p(Ge,[["render",ke]]);function Xe(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  @toggle="onToggle"
></a-disclosure>`}}function Fe(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureEvents",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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

    const onToggle = ({ isOpen }) => {
      console.log("isOpen", isOpen);
    };

    return {
      onToggle,
      textLess,
      textMore,
    };
  },
};`}}const Ke={name:"PageDisclosureEvents",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=Xe(),{codeJs:t}=Fe();return{codeHtml:e,codeJs:t,onToggle:({isOpen:c})=>{console.log("isOpen",c)},textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},Ye={class:"a_columns a_columns_count_12"},Ze={class:"a_column a_column_4 a_column_12_tablet"};function ze(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_EVENTS_HEADER_",description:"_A_DISCLOSURE_GROUP_EVENTS_DESCRIPTION_",emits:"toggle"},{default:m(()=>[i("div",Ye,[i("div",Ze,[a(u,{"text-less":e.textLess,"text-more":e.textMore,onToggle:e.onToggle},null,8,["text-less","text-more","onToggle"])])])]),_:1},8,["code-html","code-js"])}const et=p(Ke,[["render",ze]]);function tt(){return{codeHtml:`<div
  class="a_btn_group"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_DISCLOSURE_TEXT_TOGGLE_WITH_IS_OPEN_"
    @click="toggleShowWithIsOpen"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_DISCLOSURE_TEXT_TOGGLE_WITH_TOGGLE_BUTTON_"
    @click="toggleShowWithToggleButton"
  ></a-button>
</div>
<a-disclosure
  ref="disclosureRef"
  :text-less="textLess"
  :text-more="textMore"
></a-disclosure>`}}function st(){return{codeJs:`import {
  nextTick,
  onMounted,
  ref,
} from "vue";

import {
  AButton,
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureExposes",
  components: {
    AButton,
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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

    const disclosureRef = ref(undefined);

    const toggleShowWithIsOpen = () => {
      disclosureRef.value.isOpen = !disclosureRef.value.isOpen;
    };

    const toggleShowWithToggleButton = () => {
      disclosureRef.value.toggleButton();
    };

    onMounted(() => {
      disclosureRef.value.containerRef.setAttribute("class", "a_bg_gray_200");
      nextTick().then(
        () => {
          disclosureRef.value.buttonRef.$el.setAttribute("class", "a_btn a_btn_primary");
        }
      );
    });

    return {
      disclosureRef,
      textLess,
      textMore,
      toggleShowWithIsOpen,
      toggleShowWithToggleButton,
    };
  },
};`}}const it={name:"PageDisclosureExposes",components:{AButton:V,ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=tt(),{codeJs:t}=st(),o="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",n=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`,l=x(void 0),c=()=>{l.value.isOpen=!l.value.isOpen},u=()=>{l.value.toggleButton()};return W(()=>{l.value.containerRef.setAttribute("class","a_bg_gray_200"),C().then(()=>{l.value.buttonRef.$el.setAttribute("class","a_btn a_btn_primary")})}),{codeHtml:e,codeJs:t,disclosureRef:l,textLess:o,textMore:n,toggleShowWithIsOpen:c,toggleShowWithToggleButton:u}}},ot={class:"a_columns a_columns_count_12"},nt={class:"a_column a_column_4 a_column_12_tablet"},ut={class:"a_btn_group"};function at(e,t,o,n,l,c){const u=s("a-button"),r=s("a-disclosure"),g=s("aloha-example");return b(),_(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_EXPOSES_HEADER_",exposes:["buttonRef","containerRef","isOpen","toggleButton"]},{default:m(()=>[i("div",ot,[i("div",nt,[i("div",ut,[a(u,{class:"a_btn a_btn_outline_primary",text:"_A_DISCLOSURE_TEXT_TOGGLE_WITH_IS_OPEN_",onClick:e.toggleShowWithIsOpen},null,8,["onClick"]),a(u,{class:"a_btn a_btn_outline_primary",text:"_A_DISCLOSURE_TEXT_TOGGLE_WITH_TOGGLE_BUTTON_",onClick:e.toggleShowWithToggleButton},null,8,["onClick"])]),a(r,{ref:"disclosureRef","text-less":e.textLess,"text-more":e.textMore},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const lt=p(it,[["render",at]]);function rt(){return{codeHtml:`<a-disclosure
  :html-less="htmlLess"
  :html-more="htmlMore"
></a-disclosure>`}}function ct(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureHtml",
  components: {
    ADisclosure,
  },
  setup() {
    const htmlLess = \`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna.</p>\`;
    const htmlMore = \`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      htmlLess,
      htmlMore,
    };
  },
};`}}const mt={name:"PageDisclosureHtml",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=rt(),{codeJs:t}=ct();return{codeHtml:e,codeJs:t,htmlLess:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna.</p>`,htmlMore:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},dt={class:"a_columns a_columns_count_12"},pt={class:"a_column a_column_4 a_column_12_tablet"};function _t(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_HTML_HEADER_",description:"_A_DISCLOSURE_GROUP_HTML_DESCRIPTION_",props:["html-less","html-more"]},{default:m(()=>[i("div",dt,[i("div",pt,[a(u,{"html-less":e.htmlLess,"html-more":e.htmlMore},null,8,["html-less","html-more"])])])]),_:1},8,["code-html","code-js"])}const bt=p(mt,[["render",_t]]);function gt(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :show-less="false"
></a-disclosure>`}}function ht(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureNotLess",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const ft={name:"PageDisclosureNotLess",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=gt(),{codeJs:t}=ht();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},vt={class:"a_columns a_columns_count_12"},St={class:"a_column a_column_4 a_column_12_tablet"};function It(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_NOT_LESS_HEADER_",description:"_A_DISCLOSURE_GROUP_NOT_LESS_DESCRIPTION_",props:"show-less"},{default:m(()=>[i("div",vt,[i("div",St,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"show-less":!1},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const Lt=p(ft,[["render",It]]);function xt(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :is-open-default="true"
></a-disclosure>`}}function Dt(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureOpenDefault",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};`}}const qt={name:"PageDisclosureOpenDefault",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=xt(),{codeJs:t}=Dt();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},Ot={class:"a_columns a_columns_count_12"},Et={class:"a_column a_column_4 a_column_12_tablet"};function Pt(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_OPEN_DEFAULT_HEADER_",description:"_A_DISCLOSURE_GROUP_OPEN_DEFAULT_DESCRIPTION_",props:"is-open-default"},{default:m(()=>[i("div",Ot,[i("div",Et,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"is-open-default":!0},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const Tt=p(qt,[["render",Pt]]);function Rt(){return{codeHtml:`<a-disclosure
  :safe-html-less="htmlLess"
  :safe-html-more="htmlMore"
></a-disclosure>`}}function Mt(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureSafeHtml",
  components: {
    ADisclosure,
  },
  setup() {
    const htmlLess = \`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna.</p>\`;
    const htmlMore = \`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      htmlLess,
      htmlMore,
    };
  },
};`}}const At={name:"PageDisclosureSafeHtml",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=Rt(),{codeJs:t}=Mt();return{codeHtml:e,codeJs:t,htmlLess:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna.</p>`,htmlMore:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},Ct={class:"a_columns a_columns_count_12"},Nt={class:"a_column a_column_4 a_column_12_tablet"};function $t(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_SAFE_HTML_HEADER_",description:"_A_DISCLOSURE_GROUP_SAFE_HTML_DESCRIPTION_",props:["safe-html-less","safe-html-more"]},{default:m(()=>[i("div",Ct,[i("div",Nt,[a(u,{"safe-html-less":e.htmlLess,"safe-html-more":e.htmlMore},null,8,["safe-html-less","safe-html-more"])])])]),_:1},8,["code-html","code-js"])}const Ht=p(At,[["render",$t]]);function Ut(){return{codeHtml:`<a-disclosure
  btn-text-less=""
  btn-text-more=""
>
  <template
    v-slot:button="{ isButtonVisible, isOpen }"
  >
    <span>{{ isOpen ? "Show less" : "Show more" }}</span>
  </template>
  
  <template
    v-slot:less="{ isButtonVisible, isOpen }"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.</p>
  </template>
  
  <template
    v-slot:more="{ isButtonVisible, isOpen }"
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
</a-disclosure>`}}function Bt(){return{codeJs:`import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureSlots",
  components: {
    ADisclosure,
  },
};`}}const jt={name:"PageDisclosureSlots",components:{ADisclosure:v,AlohaExample:f},setup(){const{codeHtml:e}=Ut(),{codeJs:t}=Bt();return{codeHtml:e,codeJs:t}}},yt={class:"a_columns a_columns_count_12"},Jt={class:"a_column a_column_4 a_column_12_tablet"};function Qt(e,t,o,n,l,c){const u=s("a-disclosure"),r=s("aloha-example");return b(),_(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_SLOTS_HEADER_",description:"_A_DISCLOSURE_GROUP_SLOTS_DESCRIPTION_",slots:["button","less","more"]},{default:m(()=>[i("div",yt,[i("div",Jt,[a(u,{"btn-text-less":"","btn-text-more":""},{button:m(({isButtonVisible:g,isOpen:h})=>[i("span",null,M(h?"Show less":"Show more"),1)]),less:m(({isButtonVisible:g,isOpen:h})=>t[0]||(t[0]=[i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",-1)])),more:m(({isButtonVisible:g,isOpen:h})=>[i("p",null,"isButtonVisible: "+M(g),1),i("p",null,"isOpen: "+M(h),1),t[1]||(t[1]=i("ul",null,[i("li",null,"1 aloha"),i("li",null,"2 aloha"),i("li",null,"3 aloha"),i("li",null,"4 aloha"),i("li",null,"5 aloha"),i("li",null,"6 aloha"),i("li",null,"7 aloha"),i("li",null,"8 aloha"),i("li",null,"9 aloha"),i("li",null,"10 aloha"),i("li",null,"11 aloha"),i("li",null,"12 aloha")],-1))]),_:1})])])]),_:1},8,["code-html","code-js"])}const Gt=p(jt,[["render",Qt]]);function wt(){return{dataEvents:[{name:"toggle",description:"_A_DISCLOSURE_TOGGLE_DESCRIPTION_",type:"Function"}]}}function Vt(){return{dataExposes:[{name:"buttonRef",description:"_A_DISCLOSURE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_DISCLOSURE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isOpen",description:"_A_DISCLOSURE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_DISCLOSURE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function kt(){const e=S(()=>k({placeholder:"_A_DISCLOSURE_COMPONENT_NAME_"}));return{pageTitle:S(()=>`ADisclosure${e.value?` (${e.value})`:""}`)}}function Wt(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"btn-attributes",description:"_A_DISCLOSURE_PROPS_PROPS_BTN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"btn-class",description:"_A_DISCLOSURE_PROPS_BTN_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_link a_p_0",required:!1},{name:"btn-icon-left-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-left-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-id",description:"_A_DISCLOSURE_PROPS_BTN_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-parent-class",description:"_A_DISCLOSURE_PROPS_BTN_PARENT_CLASS_DESCRIPTION_",type:"String",default:"a_text_center",required:!1},{name:"btn-text-less",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_LESS_DESCRIPTION_",type:"String",default:"_A_DISCLOSURE_LESS_",required:!1},{name:"btn-text-more",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_MORE_DESCRIPTION_",type:"String",default:"_A_DISCLOSURE_MORE_",required:!1},{name:"btn-title-less",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-more",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-placement",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"disabled",description:"_A_DISCLOSURE_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html-less",description:"_A_DISCLOSURE_PROPS_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-more",description:"_A_DISCLOSURE_PROPS_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_DISCLOSURE_PROPS_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-btn-title-html",description:"_A_DISCLOSURE_PROPS_IS_BTN_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-open-default",description:"_A_DISCLOSURE_PROPS_IS_OPEN_DEFAULT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html-less",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"safe-html-more",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-less",description:"_A_DISCLOSURE_PROPS_SHOW_LESS_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"text-less",description:"_A_DISCLOSURE_PROPS_TEXT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-more",description:"_A_DISCLOSURE_PROPS_TEXT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function Xt(){return{dataSlots:[{name:"button",description:"_A_DISCLOSURE_SLOT_BUTTON_DESCRIPTION_"},{name:"less",description:"_A_DISCLOSURE_SLOT_LESS_DESCRIPTION_"},{name:"more",description:"_A_DISCLOSURE_SLOT_MORE_DESCRIPTION_"}]}}function Ft(){return{dataTranslate:["_A_DISCLOSURE_MORE_","_A_DISCLOSURE_LESS_"]}}const Kt={name:"PageDisclosure",components:{AlohaPage:y,AlohaTableProps:J,AlohaTableTranslate:Q,ATranslation:A,PageDisclosureBasic:ne,PageDisclosureBtnClass:de,PageDisclosureBtnIcons:ve,PageDisclosureBtnTexts:Oe,PageDisclosureBtnTitle:Ce,PageDisclosureBtnTitleHtml:ye,PageDisclosureDisabled:We,PageDisclosureEvents:et,PageDisclosureExposes:lt,PageDisclosureHtml:bt,PageDisclosureNotLess:Lt,PageDisclosureOpenDefault:Tt,PageDisclosureSafeHtml:Ht,PageDisclosureSlots:Gt},setup(){const{pageTitle:e}=kt(),{dataProps:t}=Wt(),{dataSlots:o}=Xt(),{dataEvents:n}=wt(),{dataExposes:l}=Vt(),{dataTranslate:c}=Ft();return{dataEvents:n,dataExposes:l,dataProps:t,dataSlots:o,dataTranslate:c,pageTitle:e}}};function Yt(e,t,o,n,l,c){const u=s("a-translation"),r=s("page-disclosure-basic"),g=s("page-disclosure-disabled"),h=s("page-disclosure-html"),I=s("page-disclosure-safe-html"),L=s("page-disclosure-not-less"),O=s("page-disclosure-btn-class"),E=s("page-disclosure-btn-icons"),P=s("page-disclosure-btn-title"),D=s("page-disclosure-btn-title-html"),T=s("page-disclosure-btn-texts"),N=s("page-disclosure-open-default"),$=s("page-disclosure-slots"),H=s("page-disclosure-events"),U=s("page-disclosure-exposes"),R=s("aloha-table-props"),B=s("aloha-table-translate"),j=s("aloha-page");return b(),_(j,{"page-title":e.pageTitle},{body:m(()=>[a(u,{tag:"p",html:"_A_DISCLOSURE_COMPONENT_DESCRIPTION_"}),a(r),a(g),a(h),a(I),a(L),a(O),a(E),a(P),a(D),a(T),a(N),a($),a(H),a(U),a(R,{data:e.dataProps},null,8,["data"]),a(R,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),a(R,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),a(R,{"table-label":"Exposes",data:e.dataExposes,columns:["name","type","description"]},null,8,["data"]),a(B,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const bs=p(Kt,[["render",Yt]]);export{bs as default};
