import{A,a as q}from"./chunk.AlohaExample.DQIiBf4s.js";import{A as B}from"./chunk.AlohaTableProps.BoufmCSr.js";import{a as H,A as V,_ as p}from"./bundle.index.DwwGfdde.js";import{h as I,V as X,r as x,a as T,m as o,C as f,L as h,B as R,G as r,F as L}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.iFPGH2zP.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.AForm.CM5NpqE4.js";import"./chunk.ADatepicker.CoH50_DU.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.Bngd0j6H.js";import"./chunk.ATinymce.DZ4aScR1.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";const w={name:"ADecimalIcon",components:{AIcon:H},props:{value:{type:Number,default:50},color:{type:String,default:"yellow"},icon:{type:String,default:"StarFill"},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)}},render(){const e={class:"a_decimal_rate_icon a_rate_icon_decimal",style:{position:"absolute",overflow:"hidden",width:`${this.value}%`,color:this.color}};return I("i",e,[I(H,{icon:this.icon,class:`a_decimal_rate_icon a_rate_icon_${this.size}`})])}},j={name:"ARateIcon",components:{AIcon:H,ADecimalIcon:w},props:{value:{type:Number,default:50},color:{type:String,default:"yellow"},icon:{type:String,default:"Star"},iconFill:{type:String,default:"StarFill"},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)},isHovered:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave","click","dblclick","mousemove"],setup(e,{emit:t}){return{handleMouseEnter(n){t("mouseenter",n)},handleMouseLeave(n){t("mouseleave",n)},handleClick(n){t("click",n)},handleDblClick(n){t("dblclick",n)},handleMouseMove(n){t("mousemove",n)}}},render(){return I("span",{class:`el-rate__item a_rate_icon_${this.size}`,style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},onClick:this.handleClick,onDblclick:this.handleDblClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onMousemove:this.handleMouseMove},[I("div",{class:"a_rate_icon_align"},[I(H,{icon:this.icon,class:"a_decimal_rate_icon a_rate_decimal",color:this.color}),I(w,{icon:this.iconFill,value:this.value,color:this.color,size:this.size})])])}},g={name:"ARate",components:{AIcon:H,ATranslation:V,ARateIcon:j},props:{text:{type:String,default:null},extra:{type:Object,required:!1},rating:{type:Number,default:5},icon:{type:String,default:"Star"},iconFill:{type:String,default:null},readonly:{type:Boolean,default:!1},showScore:{type:Boolean,default:!1},modelValue:{type:Number,default:0},color:{type:String,default:"yellow"},hoveredColor:{type:String,default:"orange"},halfIcon:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)}},emits:["update:modelValue"],setup(e,{emit:t}){const{text:n,rating:s,modelValue:d,showScore:i,readonly:a,icon:c,extra:J,color:C,hoveredColor:O,halfIcon:S,size:N}=X(e),v=x(d.value),P=x(d.value),$=x(-1),D=T(()=>e.iconFill?e.iconFill:`${e.icon}Fill`),b=()=>{a.value||(v.value=0,t("update:modelValue",v.value))},y=(_,l)=>{if(a.value)return;$.value=l;let u=l+1;if(S.value){const m=_.target.getBoundingClientRect();u=_.clientX-m.left<m.width/2?l+.5:l+1}P.value=u},M=()=>{a.value||($.value=-1)},z=T(()=>Array(s.value).fill(null).map((_,l)=>l<=$.value?O.value:l<v.value?C.value:null)),F=(_,l)=>{if(a.value)return;let u=l+1;if(S.value){const m=_.target.getBoundingClientRect();u=_.clientX-m.left<m.width/2?l+.5:l+1}t("update:modelValue",u),v.value=u},k=T(()=>{const _=$.value>=0?P.value:v.value,l=Math.floor(_),u=_%1,m=Array(s.value).fill(0);for(let E=0;E<l;E++)m[E]=100;return u!==0&&l<s.value&&(m[l]=u*100),m});return{rating:s,showScore:i,readonly:a,icon:c,iconFill:D,text:n,extra:J,color:C,size:N,onMouseEnterIcon:y,onMouseLeaveIcon:M,onClickIcon:F,onDoubleClickIcon:b,onMouseMoveIcon:(_,l)=>{if(a.value)return;let u=l+1;if(S.value){const m=_.target.getBoundingClientRect();u=_.clientX-m.left<m.width/2?l+.5:l+1}P.value!==u&&(P.value=u,$.value=l)},modelValue:T(()=>v.value),iconValues:k,computedColor:z}},render(){return I("div",{class:"a_rate_container"},[...Array.from({length:this.rating},(e,t)=>I(j,{class:"a_rate_icon",icon:this.icon,iconFill:this.iconFill,value:this.iconValues[t],onClick:n=>this.onClickIcon(n,t),onDblclick:this.onDoubleClickIcon,onMouseenter:n=>this.onMouseEnterIcon(n,t),onMouseleave:this.onMouseLeaveIcon,onMousemove:n=>this.onMouseMoveIcon(n,t),color:this.computedColor[t],size:this.size,key:t})),this.showScore&&I("span",{class:"a_rate_score"},this.modelValue.toString()),I(V,{class:"a_rate_label",text:this.text,extra:this.extra})])}};function U(){return{codeHtml:`<a-rate
   text="ARate"
  :model-value="modelValue"
  @modelValue="handleModelValueChange">
</a-rate>`}}function G(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateModelValue",
  components: {
    ARate,
  },
};`}}const W={name:"PageRateModelValue",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=U(),{codeJs:t}=G(),n=x(3);return{codeHtml:e,codeJs:t,handleModelValueChange:d=>{n.value=d},modelValue:n}}};function Y(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"ModelValue",description:"_A_RATE_DESCRIPTION_MODEL_VALUE_",props:"model-value"},{default:h(()=>[r(a,{text:"ARate","model-value":e.modelValue,onUpdate:e.handleModelValueChange},null,8,["model-value","onUpdate"])]),_:1},8,["code-html","code-js"])}const Z=p(W,[["render",Y]]);function K(){return{codeHtml:`<a-rate 
  :model-value="2.4"
  :readonly="true"
  text="2.4 readonly">
</a-rate>`}}function Q(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateReadonly",
  components: {
    ARate,
  },
};`}}const ee={name:"PageRateReadonly",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=K(),{codeJs:t}=Q();return{codeHtml:e,codeJs:t}}};function te(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Readonly",description:"_A_RATE_DESCRIPTION_READONLY_",props:"readonly"},{default:h(()=>[r(a,{"model-value":2.4,readonly:!0,text:"2.4 readonly"})]),_:1},8,["code-html","code-js"])}const oe=p(ee,[["render",te]]);function ae(){return{codeHtml:`<a-rate 
  :half-icon="true">
</a-rate>`}}function ne(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateHalfIcon",
  components: {
    ARate,
  },
};`}}const re={name:"PageRateHalfIcon",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=ae(),{codeJs:t}=ne();return{codeHtml:e,codeJs:t}}};function ce(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Select half Icon",description:"_A_RATE_DESCRIPTION_HALF_ICON_",props:"half-icon"},{default:h(()=>[r(a,{"half-icon":!0})]),_:1},8,["code-html","code-js"])}const le=p(re,[["render",ce]]);function se(){return{codeHtml:`<a-rate 
  size="small"
  text="small">
</a-rate>
<a-rate 
  size="medium"
  text="medium">
</a-rate>
<a-rate 
  size="big"
  text="big">
</a-rate>
`}}function de(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateSize",
  components: {
    ARate,
  },
};`}}const ie={name:"PageRateSize",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=se(),{codeJs:t}=de();return{codeHtml:e,codeJs:t}}},ue=L("br",null,null,-1),_e=L("br",null,null,-1);function me(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Sizes",description:"_A_RATE_DESCRIPTION_SIZE_",props:"size"},{default:h(()=>[r(a,{size:"small",text:"small"}),ue,r(a,{size:"medium",text:"medium"}),_e,r(a,{size:"big",text:"big"})]),_:1},8,["code-html","code-js"])}const pe=p(ie,[["render",me]]);function fe(){return{codeHtml:`<a-rate 
  color="gray"
  text="gray">
</a-rate>`}}function he(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateColor",
  components: {
    ARate,
  },
};`}}const Re={name:"PageRateColor",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=fe(),{codeJs:t}=he();return{codeHtml:e,codeJs:t}}};function Ae(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Color",description:"_A_RATE_DESCRIPTION_COLOR_",props:"color"},{default:h(()=>[r(a,{color:"gray",text:"gray"})]),_:1},8,["code-html","code-js"])}const ge=p(Re,[["render",Ae]]);function Ie(){return{codeHtml:`<a-rate 
  hovered-color="red"
  text="red">
</a-rate>`}}function ve(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateHoveredColor",
  components: {
    ARate,
  },
};`}}const $e={name:"PageRateHoveredColor",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=Ie(),{codeJs:t}=ve();return{codeHtml:e,codeJs:t}}};function Pe(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"HoveredColor",description:"_A_RATE_DESCRIPTION_HOVERED_COLOR_",props:"hovered-color"},{default:h(()=>[r(a,{"hovered-color":"red",text:"red"})]),_:1},8,["code-html","code-js"])}const Ee=p($e,[["render",Pe]]);function Se(){return{codeHtml:`<a-rate 
  :rating="7">
</a-rate>`}}function He(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateRating",
  components: {
    ARate,
  },
};`}}const Ce={name:"PageRateRating",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=Se(),{codeJs:t}=He();return{codeHtml:e,codeJs:t}}};function ye(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Rating",description:"_A_RATE_DESCRIPTION_RATING_",props:"rating"},{default:h(()=>[r(a,{rating:7})]),_:1},8,["code-html","code-js"])}const Te=p(Ce,[["render",ye]]);function xe(){return{codeHtml:`<a-rate
 icon="ChatSquareText">
</a-rate>
<br />
<a-rate
 icon="ArrowRightCircle">
</a-rate>`}}function Je(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateIcon",
  components: {
    ARate,
  },
};`}}const Oe={name:"PageRateIcon",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=xe(),{codeJs:t}=Je();return{codeHtml:e,codeJs:t}}},Ne=L("br",null,null,-1);function De(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Icon",description:"_A_RATE_DESCRIPTION_ICON_",props:"icon"},{default:h(()=>[r(a,{icon:"ChatSquareText"}),Ne,r(a,{icon:"ArrowRightCircle"})]),_:1},8,["code-html","code-js"])}const be=p(Oe,[["render",De]]);function Me(){return{codeHtml:`<a-rate
 icon-fill="Star">
</a-rate>`}}function Ve(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateIconFill",
  components: {
    ARate,
  },
};`}}const Le={name:"PageRateIconFill",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=Me(),{codeJs:t}=Ve();return{codeHtml:e,codeJs:t}}};function we(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"IconFill",description:"_A_RATE_DESCRIPTION_ICON_FILL_",props:"icon-fill"},{default:h(()=>[r(a,{"icon-fill":"Star"})]),_:1},8,["code-html","code-js"])}const je=p(Le,[["render",we]]);function ze(){return{codeHtml:`<a-rate
 :show-score="true">
</a-rate>`}}function Fe(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateShowScore",
  components: {
    ARate,
  },
};`}}const ke={name:"PageRateShowScore",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=ze(),{codeJs:t}=Fe();return{codeHtml:e,codeJs:t}}};function qe(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"ShowScore",description:"_A_RATE_DESCRIPTION_SHOW_SCORE_",props:"show-score"},{default:h(()=>[r(a,{"show-score":!0})]),_:1},8,["code-html","code-js"])}const Be=p(ke,[["render",qe]]);function Xe(){return{codeHtml:`<a-rate 
  text="text and extra">
</a-rate>`}}function Ue(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateTextExtra",
  components: {
    ARate,
  },
};`}}const Ge={name:"PageRateTextExtra",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=Xe(),{codeJs:t}=Ue();return{codeHtml:e,codeJs:t}}};function We(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Text - Extra",description:"_A_RATE_DESCRIPTION_TEXT_EXTRA_",props:["text","extra"]},{default:h(()=>[r(a,{text:"text and extra"})]),_:1},8,["code-html","code-js"])}const Ye=p(Ge,[["render",We]]);function Ze(){return{dataEvents:[{name:"update",description:"_A_RATE_EVENT_DESCRIPTION_",type:"Function"}]}}function Ke(){return{dataProps:[{name:"model-value",description:"_A_RATE_DESCRIPTION_MODEL_VALUE_",type:"Number",default:0,required:!1},{name:"size",description:"_A_RATE_DESCRIPTION_SIZE_",type:"String",default:"medium",required:!1},{name:"half-icon",description:"_A_RATE_DESCRIPTION_HALF_ICON_",type:"Boolean",default:!1,required:!1},{name:"readonly",description:"_A_RATE_DESCRIPTION_READONLY_",type:"Boolean",default:!1,required:!1},{name:"color",description:"_A_RATE_DESCRIPTION_COLOR_",type:"String",default:"yellow",required:!1},{name:"hovered-color",description:"_A_RATE_DESCRIPTION_HOVERED_COLOR_",type:"String",default:"orange",required:!1},{name:"rating",description:"_A_RATE_DESCRIPTION_RATING_",type:"Number",default:5,required:!1},{name:"icon",description:"_A_RATE_DESCRIPTION_ICON_",type:"String",default:"Star",required:!1},{name:"icon-fill",description:"_A_RATE_DESCRIPTION_ICON_FILL_",type:"String",default:void 0,required:!1},{name:"show-score",description:"_A_RATE_DESCRIPTION_SHOW_SCORE_",type:"Boolean",default:!1,required:!1},{name:"text",description:"_A_RATE_DESCRIPTION_TEXT_",type:"String",default:void 0,required:!1},{name:"extra",description:"_A_RATE_DESCRIPTION_EXTRA_",type:"String",default:void 0,required:!1}]}}const Qe={name:"PageRate",components:{AlohaPage:q,AlohaTableProps:B,ATranslation:V,PageRateModelValue:Z,PageRateReadonly:oe,PageRateHalfIcon:le,PageRateSize:pe,PageRateColor:ge,PageRateHoveredColor:Ee,PageRateRating:Te,PageRateIcon:be,PageRateIconFill:je,PageRateShowScore:Be,PageRateTextExtra:Ye},setup(){const{dataProps:e}=Ke(),{dataEvents:t}=Ze();return{dataEvents:t,dataProps:e}}};function et(e,t,n,s,d,i){const a=o("a-translation"),c=o("page-rate-model-value"),J=o("page-rate-size"),C=o("page-rate-half-icon"),O=o("page-rate-readonly"),S=o("page-rate-color"),N=o("page-rate-hovered-color"),v=o("page-rate-rating"),P=o("page-rate-icon"),$=o("page-rate-icon-fill"),D=o("page-rate-show-score"),b=o("page-rate-text-extra"),y=o("aloha-table-props"),M=o("aloha-page");return R(),f(M,{"page-title":"Rate"},{body:h(()=>[r(a,{tag:"p",html:"_A_RATE_DESCRIPTION_"}),r(c),r(J),r(C),r(O),r(S),r(N),r(v),r(P),r($),r(D),r(b),r(y,{data:e.dataProps},null,8,["data"]),r(y,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1})}const ft=p(Qe,[["render",et]]);export{ft as default};
