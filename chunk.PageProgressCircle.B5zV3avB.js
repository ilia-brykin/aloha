import{A as R,a as E}from"./chunk.AlohaExample.o4KwhrWv.js";import{A}from"./chunk.AlohaTableProps.DyIwCKDx.js";import{_ as m,g as v,A as I}from"./bundle.index.BKc4tVNY.js";import{t as p,d as n,h as u,Y as f,W as P,aU as g,f as c,$ as i}from"./chunk.vendor.BAXy2grE.js";import{d as T}from"./chunk.vendor-lodash.CCzoES9g.js";import{W as O,V as x}from"./chunk.WidthAPI.iBocIAH6.js";import"./chunk.APageTabTitle.CjI9Ghzt.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.ATable.DtTuYqF_.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function y(e,{widthPercent:t=n(()=>0)}){const s=p(e,"strokeWidth"),o=50,_=2*Math.PI*o,a=n(()=>t.value*_/100),r=n(()=>`${a.value}px ${_-a.value}px`),l=n(()=>`stroke-dasharray: ${r.value};`),d=n(()=>o+s.value/2);return{circleStyles:l,cxCy:d,radius:o}}function $(e){const t=p(e,"width");return{sizesLocal:n(()=>T(t.value)?`height: ${t.value}px; width: ${t.value}px;`:`height: ${t.value}; width: ${t.value};`)}}function N(e){const t=p(e,"rotate"),s=p(e,"strokeWidth"),o=n(()=>{const a=100+s.value;return`0 0 ${a} ${a}`});return{svgTransform:n(()=>`transform: rotate(${t.value-90}deg);`),svgViewBox:o}}const S={name:"AProgressCircle",props:{duration:{type:Number,required:!1,default:void 0},indeterminate:{type:Boolean,required:!1,default:!1},max:{type:Number,required:!1,default:100},min:{type:Number,required:!1,default:0},rotate:{type:Number,required:!1,default:0,validator:e=>e>=0&&e<=360},showValue:{type:Boolean,required:!1,default:!0},strokeWidth:{type:Number,required:!1,default:5,validator:e=>e>0},value:{type:Number,required:!1,default:0},valueTextClass:{type:[String,Object],required:!1,default:void 0},valueTextInteger:{type:Boolean,required:!1,default:!1},width:{type:[Number,String],required:!1,default:125}},setup(e){const{widthPercent:t}=O(e),{valuePercent:s}=x(e,{widthPercent:t}),{circleStyles:o,cxCy:_,radius:a}=y(e,{widthPercent:t}),{svgTransform:r,svgViewBox:l}=N(e),{sizesLocal:d}=$(e);return{circleStyles:o,cxCy:_,radius:a,sizesLocal:d,svgTransform:r,svgViewBox:l,valuePercent:s,widthPercent:t}},render(){let e;return this.$slots.progressText?e=u("span",{class:["a_progress_circle__text",this.valueTextClass]},[this.$slots.progressText&&this.$slots.progressText({valuePercent:this.valuePercent})]):this.showValue&&(e=u("span",{class:["a_progress_circle__text",this.valueTextClass]},this.valuePercent)),u("div",{class:"a_progress_circle",style:this.sizesLocal,role:"progressbar","aria-valuenow":this.value,"aria-valuemin":this.min,"aria-valuemax":this.max},[u("svg",{viewBox:this.svgViewBox,style:this.svgTransform},[u("circle",{class:"a_progress_circle__base",cx:this.cxCy,cy:this.cxCy,r:this.radius,"stroke-width":this.strokeWidth}),u("circle",{class:["a_progress_circle__scale",{a_progress_circle__scale_indeterminate:this.indeterminate}],cx:this.cxCy,cy:this.cxCy,r:this.radius,"stroke-width":this.strokeWidth,style:this.circleStyles})]),e])}};function b(){return{codeHtml:`<a-progress-circle
  :value="20"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="50"
></a-progress-circle>`}}function L(){return{codeJs:`import { 
  AProgressCircle,
} from "aloha-vue";";
    
export default {
  name: "PageProgressBasic",
  components: {
    AProgressCircle,
  },
};`}}const G={name:"PageProgressCircleBasic",components:{AlohaExample:R,AProgressCircle:S},setup(){const{codeHtml:e}=b(),{codeJs:t}=L();return{codeHtml:e,codeJs:t}}};function q(e,t,s,o,_,a){const r=c("a-progress-circle"),l=c("aloha-example");return f(),P(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:"value"},{default:g(()=>[i(r,{value:20}),i(r,{class:"a_mt_3",value:50})]),_:1},8,["code-html","code-js"])}const w=m(G,[["render",q]]);function B(){return{codeHtml:`<a-progress-circle
  :value="20"
  :indeterminate="true"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="50"
  :indeterminate="true"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="80"
  :indeterminate="true"
></a-progress-circle>`}}function H(){return{codeJs:`import { 
  AProgressCircle,
} from "aloha-vue";";
    
export default {
  name: "PageProgressCircleIndeterminate",
  components: {
    AProgressCircle,
  },
};`}}const W={name:"PageProgressCircleIndeterminate",components:{AlohaExample:R,AProgressCircle:S},setup(){const{codeHtml:e}=B(),{codeJs:t}=H();return{codeHtml:e,codeJs:t}}};function k(e,t,s,o,_,a){const r=c("a-progress-circle"),l=c("aloha-example");return f(),P(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PROGRESS_CIRCLE_GROUP_INDETERMINATE_HEADER_",description:"_A_PROGRESS_CIRCLE_GROUP_INDETERMINATE_DESCRIPTION_",props:"indeterminate"},{default:g(()=>[i(r,{value:20,indeterminate:!0}),i(r,{class:"a_mt_3",value:50,indeterminate:!0}),i(r,{class:"a_mt_3",value:80,indeterminate:!0})]),_:1},8,["code-html","code-js"])}const D=m(W,[["render",k]]);function V(){const e=n(()=>v({placeholder:"_A_PROGRESS_CIRCLE_COMPONENT_NAME_"}));return{pageTitle:n(()=>`AProgressCircle${e.value?` (${e.value})`:""}`)}}function J(){return{dataProps:[{name:"duration",description:"_A_PROGRESS_CIRCLE_PROPS_DURATION_",type:"Number",default:"undefined",required:!1},{name:"indeterminate",description:"_A_PROGRESS_CIRCLE_PROPS_INDETERMINATE_",type:"Boolean",default:"false",required:!1},{name:"max",description:"_A_PROGRESS_CIRCLE_PROPS_MAX_",type:"Number",default:100,required:!1},{name:"min",description:"_A_PROGRESS_CIRCLE_PROPS_MIN_",type:"Number",default:0,required:!1},{name:"rotate",description:"_A_PROGRESS_CIRCLE_PROPS_ROTATE_",type:"Number",default:0,required:!1},{name:"showValue",description:"_A_PROGRESS_CIRCLE_PROPS_SHOW_VALUE_",type:"Boolean",default:"true",required:!1},{name:"strokeWidth",description:"_A_PROGRESS_CIRCLE_PROPS_STROKE_WIDTH_",type:"Number",default:5,required:!1},{name:"value",description:"_A_PROGRESS_CIRCLE_PROPS_VALUE_",type:"Number",default:0,required:!1},{name:"valueTextClass",description:"_A_PROGRESS_CIRCLE_PROPS_VALUE_TEXT_CLASS_",type:"String / Object",default:"undefined",required:!1},{name:"valueTextInteger",description:"_A_PROGRESS_CIRCLE_PROPS_VALUE_TEXT_INTEGER_",type:"Boolean",default:"false",required:!1},{name:"width",description:"_A_PROGRESS_CIRCLE_PROPS_WIDTH_",type:"Number / String",default:125,required:!1}]}}function M(){return{dataSlots:[{name:"progressText",description:"_A_PROGRESS_CIRCLE_SLOT_PROGRESS_TEXT_"}]}}const U={name:"PageProgressCircle",components:{AlohaPage:E,AlohaTableProps:A,ATranslation:I,PageProgressCircleBasic:w,PageProgressCircleIndeterminate:D},setup(){const{pageTitle:e}=V(),{dataProps:t}=J(),{dataSlots:s}=M();return{dataProps:t,dataSlots:s,pageTitle:e}}};function j(e,t,s,o,_,a){const r=c("a-translation"),l=c("page-progress-circle-basic"),d=c("page-progress-circle-indeterminate"),h=c("aloha-table-props"),C=c("aloha-page");return f(),P(C,{"page-title":e.pageTitle},{body:g(()=>[i(r,{tag:"p",html:"_A_PROGRESS_CIRCLE_COMPONENT_DESCRIPTION_"}),i(l),i(d),i(h,{data:e.dataProps},null,8,["data"]),i(h,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const _e=m(U,[["render",j]]);export{_e as default};
