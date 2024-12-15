import{A,a as X}from"./chunk.AlohaExample.A9Ef-QbL.js";import{A as U}from"./chunk.AlohaTableProps.CpO8HcfR.js";import{a as S,A as V,_ as p}from"./bundle.index.Dn7qpWjQ.js";import{aT as w,h as I,aU as F,aV as G,r as x,a as y,m as o,K as f,aK as h,J as R,P as r,O as L}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.ATable.D_xPGUZc.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.AForm.YXJwVyl2.js";import"./chunk.ADatepicker.CCF6HQX3.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.AInputNumber.CRj1UTFu.js";import"./chunk.ATinymce.BwFOKtT3.js";import"./chunk.vendor-tinymce.cPIiul0H.js";const j={name:"ADecimalIcon",components:{AIcon:S},props:{value:{type:Number,default:50},color:{type:String,default:"yellow"},icon:{type:String,default:w},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)}},render(){const e={class:"a_decimal_rate_icon a_rate_icon_decimal",style:{position:"absolute",overflow:"hidden",width:`${this.value}%`,color:this.color}};return I("i",e,[I(S,{icon:this.icon,class:`a_decimal_rate_icon a_rate_icon_${this.size}`})])}},z={name:"ARateIcon",components:{AIcon:S,ADecimalIcon:j},props:{value:{type:Number,default:50},color:{type:String,default:"yellow"},icon:{type:String,default:F},iconFill:{type:String,default:w},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)},isHovered:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave","click","dblclick","mousemove"],setup(e,{emit:t}){return{handleMouseEnter(n){t("mouseenter",n)},handleMouseLeave(n){t("mouseleave",n)},handleClick(n){t("click",n)},handleDblClick(n){t("dblclick",n)},handleMouseMove(n){t("mousemove",n)}}},render(){return I("span",{class:`el-rate__item a_rate_icon_${this.size}`,style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},onClick:this.handleClick,onDblclick:this.handleDblClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onMousemove:this.handleMouseMove},[I("div",{class:"a_rate_icon_align"},[I(S,{icon:this.icon,class:"a_decimal_rate_icon a_rate_decimal",color:this.color}),I(j,{icon:this.iconFill,value:this.value,color:this.color,size:this.size})])])}},g={name:"ARate",components:{AIcon:S,ATranslation:V,ARateIcon:z},props:{text:{type:String,default:null},extra:{type:Object,required:!1},rating:{type:Number,default:5},icon:{type:String,default:F},iconFill:{type:String,default:w},readonly:{type:Boolean,default:!1},showScore:{type:Boolean,default:!1},modelValue:{type:Number,default:0},color:{type:String,default:"yellow"},hoveredColor:{type:String,default:"orange"},halfIcon:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)}},emits:["update:modelValue"],setup(e,{emit:t}){const{text:n,rating:s,modelValue:d,showScore:i,readonly:a,icon:c,extra:J,color:C,hoveredColor:O,halfIcon:H,size:N}=G(e),v=x(d.value),P=x(d.value),$=x(-1),D=y(()=>e.iconFill?e.iconFill:`${e.icon}Fill`),b=()=>{a.value||(v.value=0,t("update:modelValue",v.value))},T=(_,l)=>{if(a.value)return;$.value=l;let u=l+1;if(H.value){const m=_.target.getBoundingClientRect();u=_.clientX-m.left<m.width/2?l+.5:l+1}P.value=u},M=()=>{a.value||($.value=-1)},k=y(()=>Array(s.value).fill(null).map((_,l)=>l<=$.value?O.value:l<v.value?C.value:null)),q=(_,l)=>{if(a.value)return;let u=l+1;if(H.value){const m=_.target.getBoundingClientRect();u=_.clientX-m.left<m.width/2?l+.5:l+1}t("update:modelValue",u),v.value=u},B=y(()=>{const _=$.value>=0?P.value:v.value,l=Math.floor(_),u=_%1,m=Array(s.value).fill(0);for(let E=0;E<l;E++)m[E]=100;return u!==0&&l<s.value&&(m[l]=u*100),m});return{rating:s,showScore:i,readonly:a,icon:c,iconFill:D,text:n,extra:J,color:C,size:N,onMouseEnterIcon:T,onMouseLeaveIcon:M,onClickIcon:q,onDoubleClickIcon:b,onMouseMoveIcon:(_,l)=>{if(a.value)return;let u=l+1;if(H.value){const m=_.target.getBoundingClientRect();u=_.clientX-m.left<m.width/2?l+.5:l+1}P.value!==u&&(P.value=u,$.value=l)},modelValue:y(()=>v.value),iconValues:B,computedColor:k}},render(){return I("div",{class:"a_rate_container"},[...Array.from({length:this.rating},(e,t)=>I(z,{class:"a_rate_icon",icon:this.icon,iconFill:this.iconFill,value:this.iconValues[t],onClick:n=>this.onClickIcon(n,t),onDblclick:this.onDoubleClickIcon,onMouseenter:n=>this.onMouseEnterIcon(n,t),onMouseleave:this.onMouseLeaveIcon,onMousemove:n=>this.onMouseMoveIcon(n,t),color:this.computedColor[t],size:this.size,key:t})),this.showScore&&I("span",{class:"a_rate_score"},this.modelValue.toString()),I(V,{class:"a_rate_label",text:this.text,extra:this.extra})])}};function K(){return{codeHtml:`<a-rate
   text="ARate"
  :model-value="modelValue"
  @modelValue="handleModelValueChange">
</a-rate>`}}function W(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateModelValue",
  components: {
    ARate,
  },
};`}}const Y={name:"PageRateModelValue",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=K(),{codeJs:t}=W(),n=x(3);return{codeHtml:e,codeJs:t,handleModelValueChange:d=>{n.value=d},modelValue:n}}};function Z(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"ModelValue",description:"_A_RATE_DESCRIPTION_MODEL_VALUE_",props:"model-value"},{default:h(()=>[r(a,{text:"ARate","model-value":e.modelValue,onUpdate:e.handleModelValueChange},null,8,["model-value","onUpdate"])]),_:1},8,["code-html","code-js"])}const Q=p(Y,[["render",Z]]);function ee(){return{codeHtml:`<a-rate 
  :model-value="2.4"
  :readonly="true"
  text="2.4 readonly">
</a-rate>`}}function te(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateReadonly",
  components: {
    ARate,
  },
};`}}const oe={name:"PageRateReadonly",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=ee(),{codeJs:t}=te();return{codeHtml:e,codeJs:t}}};function ae(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Readonly",description:"_A_RATE_DESCRIPTION_READONLY_",props:"readonly"},{default:h(()=>[r(a,{"model-value":2.4,readonly:!0,text:"2.4 readonly"})]),_:1},8,["code-html","code-js"])}const ne=p(oe,[["render",ae]]);function re(){return{codeHtml:`<a-rate 
  :half-icon="true">
</a-rate>`}}function ce(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateHalfIcon",
  components: {
    ARate,
  },
};`}}const le={name:"PageRateHalfIcon",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=re(),{codeJs:t}=ce();return{codeHtml:e,codeJs:t}}};function se(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Select half Icon",description:"_A_RATE_DESCRIPTION_HALF_ICON_",props:"half-icon"},{default:h(()=>[r(a,{"half-icon":!0})]),_:1},8,["code-html","code-js"])}const de=p(le,[["render",se]]);function ie(){return{codeHtml:`<a-rate 
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
`}}function ue(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateSize",
  components: {
    ARate,
  },
};`}}const _e={name:"PageRateSize",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=ie(),{codeJs:t}=ue();return{codeHtml:e,codeJs:t}}},me=L("br",null,null,-1),pe=L("br",null,null,-1);function fe(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Sizes",description:"_A_RATE_DESCRIPTION_SIZE_",props:"size"},{default:h(()=>[r(a,{size:"small",text:"small"}),me,r(a,{size:"medium",text:"medium"}),pe,r(a,{size:"big",text:"big"})]),_:1},8,["code-html","code-js"])}const he=p(_e,[["render",fe]]);function Re(){return{codeHtml:`<a-rate 
  color="gray"
  text="gray">
</a-rate>`}}function Ae(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateColor",
  components: {
    ARate,
  },
};`}}const ge={name:"PageRateColor",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=Re(),{codeJs:t}=Ae();return{codeHtml:e,codeJs:t}}};function Ie(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Color",description:"_A_RATE_DESCRIPTION_COLOR_",props:"color"},{default:h(()=>[r(a,{color:"gray",text:"gray"})]),_:1},8,["code-html","code-js"])}const ve=p(ge,[["render",Ie]]);function $e(){return{codeHtml:`<a-rate 
  hovered-color="red"
  text="red">
</a-rate>`}}function Pe(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateHoveredColor",
  components: {
    ARate,
  },
};`}}const Ee={name:"PageRateHoveredColor",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=$e(),{codeJs:t}=Pe();return{codeHtml:e,codeJs:t}}};function He(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"HoveredColor",description:"_A_RATE_DESCRIPTION_HOVERED_COLOR_",props:"hovered-color"},{default:h(()=>[r(a,{"hovered-color":"red",text:"red"})]),_:1},8,["code-html","code-js"])}const Se=p(Ee,[["render",He]]);function Ce(){return{codeHtml:`<a-rate 
  :rating="7">
</a-rate>`}}function Te(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateRating",
  components: {
    ARate,
  },
};`}}const ye={name:"PageRateRating",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=Ce(),{codeJs:t}=Te();return{codeHtml:e,codeJs:t}}};function xe(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Rating",description:"_A_RATE_DESCRIPTION_RATING_",props:"rating"},{default:h(()=>[r(a,{rating:7})]),_:1},8,["code-html","code-js"])}const Je=p(ye,[["render",xe]]);function Oe(){return{codeHtml:`<a-rate
 icon="ChatSquareText">
</a-rate>
<br />
<a-rate
 icon="ArrowRightCircle">
</a-rate>`}}function Ne(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateIcon",
  components: {
    ARate,
  },
};`}}const De={name:"PageRateIcon",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=Oe(),{codeJs:t}=Ne();return{codeHtml:e,codeJs:t}}},be=L("br",null,null,-1);function Me(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Icon",description:"_A_RATE_DESCRIPTION_ICON_",props:"icon"},{default:h(()=>[r(a,{icon:"ChatSquareText"}),be,r(a,{icon:"ArrowRightCircle"})]),_:1},8,["code-html","code-js"])}const Ve=p(De,[["render",Me]]);function we(){return{codeHtml:`<a-rate
 icon-fill="Star">
</a-rate>`}}function Le(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateIconFill",
  components: {
    ARate,
  },
};`}}const je={name:"PageRateIconFill",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=we(),{codeJs:t}=Le();return{codeHtml:e,codeJs:t}}};function ze(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"IconFill",description:"_A_RATE_DESCRIPTION_ICON_FILL_",props:"icon-fill"},{default:h(()=>[r(a,{"icon-fill":"Star"})]),_:1},8,["code-html","code-js"])}const Fe=p(je,[["render",ze]]);function ke(){return{codeHtml:`<a-rate
 :show-score="true">
</a-rate>`}}function qe(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateShowScore",
  components: {
    ARate,
  },
};`}}const Be={name:"PageRateShowScore",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=ke(),{codeJs:t}=qe();return{codeHtml:e,codeJs:t}}};function Xe(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"ShowScore",description:"_A_RATE_DESCRIPTION_SHOW_SCORE_",props:"show-score"},{default:h(()=>[r(a,{"show-score":!0})]),_:1},8,["code-html","code-js"])}const Ue=p(Be,[["render",Xe]]);function Ge(){return{codeHtml:`<a-rate 
  text="text and extra">
</a-rate>`}}function Ke(){return{codeJs:`import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateTextExtra",
  components: {
    ARate,
  },
};`}}const We={name:"PageRateTextExtra",components:{ARate:g,AlohaExample:A},setup(){const{codeHtml:e}=Ge(),{codeJs:t}=Ke();return{codeHtml:e,codeJs:t}}};function Ye(e,t,n,s,d,i){const a=o("a-rate"),c=o("aloha-example");return R(),f(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Text - Extra",description:"_A_RATE_DESCRIPTION_TEXT_EXTRA_",props:["text","extra"]},{default:h(()=>[r(a,{text:"text and extra"})]),_:1},8,["code-html","code-js"])}const Ze=p(We,[["render",Ye]]);function Qe(){return{dataEvents:[{name:"update",description:"_A_RATE_EVENT_DESCRIPTION_",type:"Function"}]}}function et(){return{dataProps:[{name:"model-value",description:"_A_RATE_DESCRIPTION_MODEL_VALUE_",type:"Number",default:0,required:!1},{name:"size",description:"_A_RATE_DESCRIPTION_SIZE_",type:"String",default:"medium",required:!1},{name:"half-icon",description:"_A_RATE_DESCRIPTION_HALF_ICON_",type:"Boolean",default:!1,required:!1},{name:"readonly",description:"_A_RATE_DESCRIPTION_READONLY_",type:"Boolean",default:!1,required:!1},{name:"color",description:"_A_RATE_DESCRIPTION_COLOR_",type:"String",default:"yellow",required:!1},{name:"hovered-color",description:"_A_RATE_DESCRIPTION_HOVERED_COLOR_",type:"String",default:"orange",required:!1},{name:"rating",description:"_A_RATE_DESCRIPTION_RATING_",type:"Number",default:5,required:!1},{name:"icon",description:"_A_RATE_DESCRIPTION_ICON_",type:"String",default:"Star",required:!1},{name:"icon-fill",description:"_A_RATE_DESCRIPTION_ICON_FILL_",type:"String",default:void 0,required:!1},{name:"show-score",description:"_A_RATE_DESCRIPTION_SHOW_SCORE_",type:"Boolean",default:!1,required:!1},{name:"text",description:"_A_RATE_DESCRIPTION_TEXT_",type:"String",default:void 0,required:!1},{name:"extra",description:"_A_RATE_DESCRIPTION_EXTRA_",type:"String",default:void 0,required:!1}]}}const tt={name:"PageRate",components:{AlohaPage:X,AlohaTableProps:U,ATranslation:V,PageRateModelValue:Q,PageRateReadonly:ne,PageRateHalfIcon:de,PageRateSize:he,PageRateColor:ve,PageRateHoveredColor:Se,PageRateRating:Je,PageRateIcon:Ve,PageRateIconFill:Fe,PageRateShowScore:Ue,PageRateTextExtra:Ze},setup(){const{dataProps:e}=et(),{dataEvents:t}=Qe();return{dataEvents:t,dataProps:e}}};function ot(e,t,n,s,d,i){const a=o("a-translation"),c=o("page-rate-model-value"),J=o("page-rate-size"),C=o("page-rate-half-icon"),O=o("page-rate-readonly"),H=o("page-rate-color"),N=o("page-rate-hovered-color"),v=o("page-rate-rating"),P=o("page-rate-icon"),$=o("page-rate-icon-fill"),D=o("page-rate-show-score"),b=o("page-rate-text-extra"),T=o("aloha-table-props"),M=o("aloha-page");return R(),f(M,{"page-title":"Rate"},{body:h(()=>[r(a,{tag:"p",html:"_A_RATE_DESCRIPTION_"}),r(c),r(J),r(C),r(O),r(H),r(N),r(v),r(P),r($),r(D),r(b),r(T,{data:e.dataProps},null,8,["data"]),r(T,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1})}const Rt=p(tt,[["render",ot]]);export{Rt as default};
