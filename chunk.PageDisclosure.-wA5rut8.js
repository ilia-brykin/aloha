import{A as f,a as J}from"./chunk.AlohaExample.CyUlGLtF.js";import{A as Q}from"./chunk.AlohaTableProps.pdFwqyjt.js";import{A as G}from"./chunk.AlohaTableTranslate.DnfbcPPl.js";import{a7 as w,A as M,b as C,_,g as V}from"./bundle.index.nIhxAj4P.js";import{t as d,r as L,a as S,A as N,h as q,m as s,C as b,L as m,B as g,F as i,G as a,q as k,M as A}from"./chunk.vendor.D-Y3mz6a.js";import{u as W}from"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.CQRSk7Vg.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.AForm.DQGeW1Bh.js";import"./chunk.ADatepicker.CgTK6HZB.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.ehw7dUaS.js";import"./chunk.ATinymce.CED0CXMl.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function F(e,{isOpen:t=L(!1)}){const n=d(e,"btnIconLeftLess"),o=d(e,"btnIconLeftMore"),r=d(e,"btnIconRightLess"),c=d(e,"btnIconRightMore"),u=d(e,"btnTextLess"),l=d(e,"btnTextMore"),p=d(e,"btnTitleLess"),h=d(e,"btnTitleMore"),D=d(e,"showLess"),I=L(void 0),O=S(()=>t.value?u.value:l.value),E=S(()=>t.value?p.value:h.value),x=S(()=>t.value?n.value:o.value),P=S(()=>t.value?r.value:c.value),R=S(()=>t.value?D.value:!0);return{btnIconLeft:x,btnIconRight:P,btnText:O,btnTitle:E,buttonRef:I,isButtonVisible:R}}function X(e){const t=d(e,"isOpenDefault");return{isOpen:L(t.value)}}function Y(e,{isOpen:t=L(!1)}){const n=d(e,"htmlLess"),o=d(e,"htmlMore"),r=d(e,"safeHtmlLess"),c=d(e,"safeHtmlMore"),u=d(e,"textLess"),l=d(e,"textMore"),p=S(()=>t.value?o.value:n.value),h=S(()=>t.value?c.value:r.value),D=S(()=>t.value?l.value:u.value),I=S(()=>!!(D.value||h.value||p.value));return{htmlLocal:p,isTextOrHtmlVisible:I,safeHtmlLocal:h,textLocal:D}}function z(e,{emit:t},{isOpen:n=L(!1)}){const o=L(void 0);return{containerRef:o,toggleButton:()=>{n.value=!n.value,t("toggle",{isOpen:n.value}),n.value&&!window.isScrollDisabled&&N().then(()=>w({element:o.value}))}}}const v={name:"ADisclosure",inheritAttrs:!0,props:{alwaysTranslate:{type:Boolean,required:!1},btnAttributes:{type:Object,required:!1,default:()=>({})},btnClass:{type:[String,Object],required:!1,default:"a_btn a_btn_link a_p_0"},btnIconLeftLess:{type:String,required:!1,default:void 0},btnIconLeftMore:{type:String,required:!1,default:void 0},btnIconRightLess:{type:String,required:!1,default:void 0},btnIconRightMore:{type:String,required:!1,default:void 0},btnId:{type:String,required:!1,default:void 0},btnParentClass:{type:String,required:!1,default:"a_text_center"},btnTextLess:{type:String,required:!1,default:"_A_DISCLOSURE_LESS_"},btnTextMore:{type:String,required:!1,default:"_A_DISCLOSURE_MORE_"},btnTitleLess:{type:String,required:!1,default:void 0},btnTitleMore:{type:String,required:!1,default:void 0},btnTitlePlacement:{type:String,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:!1},htmlLess:{type:String,required:!1,default:void 0},htmlMore:{type:String,required:!1,default:void 0},id:{type:String,required:!1,default:()=>W("a_disclosure_")},isBtnTitleHtml:{type:Boolean,required:!1},isOpenDefault:{type:Boolean,required:!1,default:!1},safeHtmlLess:{type:String,required:!1,default:void 0},safeHtmlMore:{type:String,required:!1,default:void 0},showLess:{type:Boolean,required:!1,default:!0},textLess:{type:String,required:!1,default:void 0},textMore:{type:String,required:!1,default:void 0}},emits:["toggle"],setup(e,t){const{expose:n}=t,{isOpen:o}=X(e),{htmlLocal:r,isTextOrHtmlVisible:c,safeHtmlLocal:u,textLocal:l}=Y(e,{isOpen:o}),{containerRef:p,toggleButton:h}=z(e,t,{isOpen:o}),{btnIconLeft:D,btnIconRight:I,btnText:O,btnTitle:E,buttonRef:x,isButtonVisible:P}=F(e,{isOpen:o});return n({buttonRef:x,containerRef:p,isOpen:o,toggleButton:h}),{btnIconLeft:D,btnIconRight:I,btnText:O,btnTitle:E,buttonRef:x,containerRef:p,htmlLocal:r,isButtonVisible:P,isOpen:o,isTextOrHtmlVisible:c,safeHtmlLocal:u,textLocal:l,toggleButton:h}},render(){return q("div",{class:["a_show_more",{a_show_more_open:this.isOpen}]},[q("div",{class:"a_show_more__wrapper"},[q("div",{ref:"containerRef",id:this.id,ariaExpanded:this.isOpen,...this.$attrs},[this.isTextOrHtmlVisible&&q(M,{alwaysTranslate:this.alwaysTranslate,html:this.htmlLocal,safeHtml:this.safeHtmlLocal,tag:"div",text:this.textLocal}),this.isOpen?this.$slots.more&&this.$slots.more({isButtonVisible:this.isButtonVisible,isOpen:this.isOpen}):this.$slots.less&&this.$slots.less({isButtonVisible:this.isButtonVisible,isOpen:this.isOpen})])]),this.isButtonVisible&&q("div",{class:this.btnParentClass},[q(C,{ref:"buttonRef",id:this.btnId,alwaysTranslate:this.alwaysTranslate,"aria-controls":this.id,class:["a_show_more__button",this.btnClass],disabled:this.disabled,iconLeft:this.btnIconLeft,iconRight:this.btnIconRight,isTitleHtml:this.isBtnTitleHtml,text:this.btnText,title:this.btnTitle,titlePlacement:this.btnTitlePlacement,...this.btnAttributes,onClick:this.toggleButton},()=>this.$slots.button&&this.$slots.button({isButtonVisible:this.isButtonVisible,isOpen:this.isOpen}))])])}};function K(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
></a-disclosure>`}}function Z(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const ee={name:"PageDisclosureBasic",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=K(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},te={class:"a_columns a_columns_count_12"},se={class:"a_column a_column_4 a_column_12_tablet"};function ie(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["text-less","text-more"]},{default:m(()=>[i("div",te,[i("div",se,[a(u,{"text-less":e.textLess,"text-more":e.textMore},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const oe=_(ee,[["render",ie]]);function ne(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-class="a_btn a_btn_primary"
  btn-parent-class="a_text_left"
></a-disclosure>`}}function ue(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const ae={name:"PageDisclosureBtnClass",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=ne(),{codeJs:t}=ue();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},le={class:"a_columns a_columns_count_12"},re={class:"a_column a_column_4 a_column_12_tablet"};function ce(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_CLASS_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_CLASS_DESCRIPTION_",props:["btn-class","btn-parent-class"]},{default:m(()=>[i("div",le,[i("div",re,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-class":"a_btn a_btn_primary","btn-parent-class":"a_text_left"},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const me=_(ae,[["render",ce]]);function de(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-icon-left-less="ChevronUp"
  btn-icon-right-less="ChevronUp"
  btn-icon-left-more="ChevronDown"
  btn-icon-right-more="ChevronDown"
></a-disclosure>`}}function pe(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const _e={name:"PageDisclosureBtnIcons",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=de(),{codeJs:t}=pe();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},be={class:"a_columns a_columns_count_12"},ge={class:"a_column a_column_4 a_column_12_tablet"};function he(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_ICONS_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_ICONS_DESCRIPTION_",props:["btn-icon-left-less","btn-icon-right-less","btn-icon-left-more","btn-icon-right-more"]},{default:m(()=>[i("div",be,[i("div",ge,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-icon-left-less":"ChevronUp","btn-icon-right-less":"ChevronUp","btn-icon-left-more":"ChevronDown","btn-icon-right-more":"ChevronDown"},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const fe=_(_e,[["render",he]]);function ve(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-text-less="Show less aloha"
  btn-text-more="Show more aloha"
></a-disclosure>`}}function Se(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const De={name:"PageDisclosureBtnTexts",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=ve(),{codeJs:t}=Se();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},Ie={class:"a_columns a_columns_count_12"},Le={class:"a_column a_column_4 a_column_12_tablet"};function xe(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_TEXTS_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_TEXTS_DESCRIPTION_",props:["btn-text-less","btn-text-more"]},{default:m(()=>[i("div",Ie,[i("div",Le,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-text-less":"Show less aloha","btn-text-more":"Show more aloha"},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const qe=_(De,[["render",xe]]);function Oe(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="_A_DISCLOSURE_GROUP_TITLE_LESS_"
  btn-title-more="_A_DISCLOSURE_GROUP_TITLE_MORE_"
></a-disclosure>`}}function Ee(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const Pe={name:"PageDisclosureBtnTitle",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=Oe(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},Te={class:"a_columns a_columns_count_12"},Re={class:"a_column a_column_4 a_column_12_tablet"};function Ae(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_TITLE_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_TITLE_DESCRIPTION_",props:["btn-title-less","btn-title-more"]},{default:m(()=>[i("div",Te,[i("div",Re,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-title-less":"_A_DISCLOSURE_GROUP_TITLE_LESS_","btn-title-more":"_A_DISCLOSURE_GROUP_TITLE_MORE_"},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const Me=_(Pe,[["render",Ae]]);function Ce(){return{codeHtml:`<a-disclosure
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
></a-disclosure>`}}function Ne(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const $e={name:"PageDisclosureBtnTitle",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=Ce(),{codeJs:t}=Ne();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},He={class:"a_columns a_columns_count_12"},Ue={class:"a_column a_column_4 a_column_12_tablet"};function Be(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_BTN_TITLE_HTML_HEADER_",description:"_A_DISCLOSURE_GROUP_BTN_TITLE_HTML_DESCRIPTION_",props:["btn-title-less","btn-title-more","is-btn-title-html"]},{default:m(()=>[i("div",He,[i("div",Ue,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"btn-title-less":"_A_DISCLOSURE_GROUP_TITLE_LESS_","btn-title-more":"_A_DISCLOSURE_GROUP_TITLE_MORE_","is-btn-title-html":!0},null,8,["text-less","text-more"]),a(u,{class:"a_mt_2","text-less":e.textLess,"text-more":e.textMore,"btn-title-less":"<strong>Aloha</strong>","btn-title-more":"<strong>Aloha</strong>","is-btn-title-html":!0},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const je=_($e,[["render",Be]]);function ye(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :disabled="true"
></a-disclosure>`}}function Je(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const Qe={name:"PageDisclosureDisabled",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=ye(),{codeJs:t}=Je();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},Ge={class:"a_columns a_columns_count_12"},we={class:"a_column a_column_4 a_column_12_tablet"};function Ve(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_DISABLED_HEADER_",description:"_A_DISCLOSURE_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:m(()=>[i("div",Ge,[i("div",we,[a(u,{"text-less":e.textLess,"text-more":e.textMore,disabled:!0},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const ke=_(Qe,[["render",Ve]]);function We(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  @toggle="onToggle"
></a-disclosure>`}}function Fe(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const Xe={name:"PageDisclosureEvents",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=We(),{codeJs:t}=Fe();return{codeHtml:e,codeJs:t,onToggle:({isOpen:c})=>{console.log("isOpen",c)},textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},Ye={class:"a_columns a_columns_count_12"},ze={class:"a_column a_column_4 a_column_12_tablet"};function Ke(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_EVENTS_HEADER_",description:"_A_DISCLOSURE_GROUP_EVENTS_DESCRIPTION_",emits:"toggle"},{default:m(()=>[i("div",Ye,[i("div",ze,[a(u,{"text-less":e.textLess,"text-more":e.textMore,onToggle:e.onToggle},null,8,["text-less","text-more","onToggle"])])])]),_:1},8,["code-html","code-js"])}const Ze=_(Xe,[["render",Ke]]);function et(){return{codeHtml:`<div
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
></a-disclosure>`}}function tt(){return{codeJs:`import {
  nextTick,
  onMounted,
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const st={name:"PageDisclosureExposes",components:{AButton:C,AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=et(),{codeJs:t}=tt(),n="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",o=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`,r=L(void 0),c=()=>{r.value.isOpen=!r.value.isOpen},u=()=>{r.value.toggleButton()};return k(()=>{r.value.containerRef.setAttribute("class","a_bg_gray_200"),N().then(()=>{r.value.buttonRef.$el.setAttribute("class","a_btn a_btn_primary")})}),{codeHtml:e,codeJs:t,disclosureRef:r,textLess:n,textMore:o,toggleShowWithIsOpen:c,toggleShowWithToggleButton:u}}},it={class:"a_columns a_columns_count_12"},ot={class:"a_column a_column_4 a_column_12_tablet"},nt={class:"a_btn_group"};function ut(e,t,n,o,r,c){const u=s("a-button"),l=s("a-disclosure"),p=s("aloha-example");return g(),b(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_EXPOSES_HEADER_",exposes:["buttonRef","containerRef","isOpen","toggleButton"]},{default:m(()=>[i("div",it,[i("div",ot,[i("div",nt,[a(u,{class:"a_btn a_btn_outline_primary",text:"_A_DISCLOSURE_TEXT_TOGGLE_WITH_IS_OPEN_",onClick:e.toggleShowWithIsOpen},null,8,["onClick"]),a(u,{class:"a_btn a_btn_outline_primary",text:"_A_DISCLOSURE_TEXT_TOGGLE_WITH_TOGGLE_BUTTON_",onClick:e.toggleShowWithToggleButton},null,8,["onClick"])]),a(l,{ref:"disclosureRef","text-less":e.textLess,"text-more":e.textMore},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const at=_(st,[["render",ut]]);function lt(){return{codeHtml:`<a-disclosure
  :html-less="htmlLess"
  :html-more="htmlMore"
></a-disclosure>`}}function rt(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const ct={name:"PageDisclosureHtml",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=lt(),{codeJs:t}=rt();return{codeHtml:e,codeJs:t,htmlLess:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},mt={class:"a_columns a_columns_count_12"},dt={class:"a_column a_column_4 a_column_12_tablet"};function pt(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_HTML_HEADER_",description:"_A_DISCLOSURE_GROUP_HTML_DESCRIPTION_",props:["html-less","html-more"]},{default:m(()=>[i("div",mt,[i("div",dt,[a(u,{"html-less":e.htmlLess,"html-more":e.htmlMore},null,8,["html-less","html-more"])])])]),_:1},8,["code-html","code-js"])}const _t=_(ct,[["render",pt]]);function bt(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :show-less="false"
></a-disclosure>`}}function gt(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const ht={name:"PageDisclosureNotLess",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=bt(),{codeJs:t}=gt();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},ft={class:"a_columns a_columns_count_12"},vt={class:"a_column a_column_4 a_column_12_tablet"};function St(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_NOT_LESS_HEADER_",description:"_A_DISCLOSURE_GROUP_NOT_LESS_DESCRIPTION_",props:"show-less"},{default:m(()=>[i("div",ft,[i("div",vt,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"show-less":!1},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const Dt=_(ht,[["render",St]]);function It(){return{codeHtml:`<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :is-open-default="true"
></a-disclosure>`}}function Lt(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const xt={name:"PageDisclosureOpenDefault",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=It(),{codeJs:t}=Lt();return{codeHtml:e,codeJs:t,textLess:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",textMore:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},qt={class:"a_columns a_columns_count_12"},Ot={class:"a_column a_column_4 a_column_12_tablet"};function Et(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_OPEN_DEFAULT_HEADER_",description:"_A_DISCLOSURE_GROUP_OPEN_DEFAULT_DESCRIPTION_",props:"is-open-default"},{default:m(()=>[i("div",qt,[i("div",Ot,[a(u,{"text-less":e.textLess,"text-more":e.textMore,"is-open-default":!0},null,8,["text-less","text-more"])])])]),_:1},8,["code-html","code-js"])}const Pt=_(xt,[["render",Et]]);function Tt(){return{codeHtml:`<a-disclosure
  :safe-html-less="htmlLess"
  :safe-html-more="htmlMore"
></a-disclosure>`}}function Rt(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
};`}}const At={name:"PageDisclosureSafeHtml",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=Tt(),{codeJs:t}=Rt();return{codeHtml:e,codeJs:t,htmlLess:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}},Mt={class:"a_columns a_columns_count_12"},Ct={class:"a_column a_column_4 a_column_12_tablet"};function Nt(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_SAFE_HTML_HEADER_",description:"_A_DISCLOSURE_GROUP_SAFE_HTML_DESCRIPTION_",props:["safe-html-less","safe-html-more"]},{default:m(()=>[i("div",Mt,[i("div",Ct,[a(u,{"safe-html-less":e.htmlLess,"safe-html-more":e.htmlMore},null,8,["safe-html-less","safe-html-more"])])])]),_:1},8,["code-html","code-js"])}const $t=_(At,[["render",Nt]]);function Ht(){return{codeHtml:`<a-disclosure
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
</a-disclosure>`}}function Ut(){return{codeJs:`import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
export default {
  name: "PageDisclosureSlots",
  components: {
    ADisclosure,
  },
};`}}const Bt={name:"PageDisclosureSlots",components:{AlohaExample:f,ADisclosure:v},setup(){const{codeHtml:e}=Ht(),{codeJs:t}=Ut();return{codeHtml:e,codeJs:t}}},jt={class:"a_columns a_columns_count_12"},yt={class:"a_column a_column_4 a_column_12_tablet"},Jt=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",-1),Qt=i("ul",null,[i("li",null,"1 aloha"),i("li",null,"2 aloha"),i("li",null,"3 aloha"),i("li",null,"4 aloha"),i("li",null,"5 aloha"),i("li",null,"6 aloha"),i("li",null,"7 aloha"),i("li",null,"8 aloha"),i("li",null,"9 aloha"),i("li",null,"10 aloha"),i("li",null,"11 aloha"),i("li",null,"12 aloha")],-1);function Gt(e,t,n,o,r,c){const u=s("a-disclosure"),l=s("aloha-example");return g(),b(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_DISCLOSURE_GROUP_SLOTS_HEADER_",description:"_A_DISCLOSURE_GROUP_SLOTS_DESCRIPTION_",slots:["button","less","more"]},{default:m(()=>[i("div",jt,[i("div",yt,[a(u,{"btn-text-less":"","btn-text-more":""},{button:m(({isButtonVisible:p,isOpen:h})=>[i("span",null,A(h?"Show less":"Show more"),1)]),less:m(({isButtonVisible:p,isOpen:h})=>[Jt]),more:m(({isButtonVisible:p,isOpen:h})=>[i("p",null,"isButtonVisible: "+A(p),1),i("p",null,"isOpen: "+A(h),1),Qt]),_:1})])])]),_:1},8,["code-html","code-js"])}const wt=_(Bt,[["render",Gt]]);function Vt(){return{dataEvents:[{name:"toggle",description:"_A_DISCLOSURE_TOGGLE_DESCRIPTION_",type:"Function"}]}}function kt(){return{dataExposes:[{name:"buttonRef",description:"_A_DISCLOSURE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_DISCLOSURE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isOpen",description:"_A_DISCLOSURE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_DISCLOSURE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function Wt(){const e=S(()=>V({placeholder:"_A_DISCLOSURE_COMPONENT_NAME_"}));return{pageTitle:S(()=>`ADisclosure${e.value?` (${e.value})`:""}`)}}function Ft(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"btn-attributes",description:"_A_DISCLOSURE_PROPS_PROPS_BTN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"btn-class",description:"_A_DISCLOSURE_PROPS_BTN_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_link a_p_0",required:!1},{name:"btn-icon-left-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-left-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-id",description:"_A_DISCLOSURE_PROPS_BTN_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-parent-class",description:"_A_DISCLOSURE_PROPS_BTN_PARENT_CLASS_DESCRIPTION_",type:"String",default:"a_text_center",required:!1},{name:"btn-text-less",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_LESS_DESCRIPTION_",type:"String",default:"_A_DISCLOSURE_LESS_",required:!1},{name:"btn-text-more",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_MORE_DESCRIPTION_",type:"String",default:"_A_DISCLOSURE_MORE_",required:!1},{name:"btn-title-less",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-more",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-placement",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"disabled",description:"_A_DISCLOSURE_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html-less",description:"_A_DISCLOSURE_PROPS_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-more",description:"_A_DISCLOSURE_PROPS_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_DISCLOSURE_PROPS_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-btn-title-html",description:"_A_DISCLOSURE_PROPS_IS_BTN_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-open-default",description:"_A_DISCLOSURE_PROPS_IS_OPEN_DEFAULT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html-less",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"safe-html-more",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-less",description:"_A_DISCLOSURE_PROPS_SHOW_LESS_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"text-less",description:"_A_DISCLOSURE_PROPS_TEXT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-more",description:"_A_DISCLOSURE_PROPS_TEXT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function Xt(){return{dataSlots:[{name:"button",description:"_A_DISCLOSURE_SLOT_BUTTON_DESCRIPTION_"},{name:"less",description:"_A_DISCLOSURE_SLOT_LESS_DESCRIPTION_"},{name:"more",description:"_A_DISCLOSURE_SLOT_MORE_DESCRIPTION_"}]}}function Yt(){return{dataTranslate:["_A_DISCLOSURE_MORE_","_A_DISCLOSURE_LESS_"]}}const zt={name:"PageDisclosure",components:{AlohaPage:J,AlohaTableProps:Q,AlohaTableTranslate:G,ATranslation:M,PageDisclosureBasic:oe,PageDisclosureBtnClass:me,PageDisclosureBtnIcons:fe,PageDisclosureBtnTexts:qe,PageDisclosureBtnTitle:Me,PageDisclosureBtnTitleHtml:je,PageDisclosureDisabled:ke,PageDisclosureEvents:Ze,PageDisclosureExposes:at,PageDisclosureHtml:_t,PageDisclosureNotLess:Dt,PageDisclosureOpenDefault:Pt,PageDisclosureSafeHtml:$t,PageDisclosureSlots:wt},setup(){const{pageTitle:e}=Wt(),{dataProps:t}=Ft(),{dataSlots:n}=Xt(),{dataEvents:o}=Vt(),{dataExposes:r}=kt(),{dataTranslate:c}=Yt();return{dataEvents:o,dataExposes:r,dataProps:t,dataSlots:n,dataTranslate:c,pageTitle:e}}};function Kt(e,t,n,o,r,c){const u=s("a-translation"),l=s("page-disclosure-basic"),p=s("page-disclosure-disabled"),h=s("page-disclosure-html"),D=s("page-disclosure-safe-html"),I=s("page-disclosure-not-less"),O=s("page-disclosure-btn-class"),E=s("page-disclosure-btn-icons"),x=s("page-disclosure-btn-title"),P=s("page-disclosure-btn-title-html"),R=s("page-disclosure-btn-texts"),$=s("page-disclosure-open-default"),H=s("page-disclosure-slots"),U=s("page-disclosure-events"),B=s("page-disclosure-exposes"),T=s("aloha-table-props"),j=s("aloha-table-translate"),y=s("aloha-page");return g(),b(y,{"page-title":e.pageTitle},{body:m(()=>[a(u,{tag:"p",html:"_A_DISCLOSURE_COMPONENT_DESCRIPTION_"}),a(l),a(p),a(h),a(D),a(I),a(O),a(E),a(x),a(P),a(R),a($),a(H),a(U),a(B),a(T,{data:e.dataProps},null,8,["data"]),a(T,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),a(T,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),a(T,{"table-label":"Exposes",data:e.dataExposes,columns:["name","type","description"]},null,8,["data"]),a(j,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ps=_(zt,[["render",Kt]]);export{ps as default};
