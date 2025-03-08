import{b as S,A as M,_ as p}from"./bundle.index.Df3v2TOg.js";import{a_ as w,h as I,a$ as F,b0 as G,r as x,a as T,O as f,aR as h,b as o,Q as R,V as r,U as L}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as g,a as W}from"./chunk.AlohaExample.DeTL3OXT.js";import{A as Y}from"./chunk.AlohaTableProps.sV5sBN5-.js";import"./chunk.translations-ar.r8R_9-3y.js";import"./chunk.translations-de.CZJei0la.js";import"./chunk.translations-en.Dg0gWvNs.js";import"./chunk.translations-es.CUN1v5ud.js";import"./chunk.translations-fr.9SIObey9.js";import"./chunk.translations-hr.ycQ9IFNE.js";import"./chunk.translations-it.C3EQWHGi.js";import"./chunk.translations-ru.BPJsanBh.js";import"./chunk.APageTabTitle.DIMo_hMW.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";import"./chunk.ATable.DsNy-pVt.js";const j={name:"ADecimalIcon",components:{AIcon:S},props:{value:{type:Number,default:50},color:{type:String,default:"yellow"},icon:{type:String,default:w},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)}},render(){const e={class:"a_decimal_rate_icon a_rate_icon_decimal",style:{position:"absolute",overflow:"hidden",width:`${this.value}%`,color:this.color}};return I("i",e,[I(S,{icon:this.icon,class:`a_decimal_rate_icon a_rate_icon_${this.size}`})])}},z={name:"ARateIcon",components:{AIcon:S,ADecimalIcon:j},props:{value:{type:Number,default:50},color:{type:String,default:"yellow"},icon:{type:String,default:F},iconFill:{type:String,default:w},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)},isHovered:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave","click","dblclick","mousemove"],setup(e,{emit:t}){return{handleMouseEnter(n){t("mouseenter",n)},handleMouseLeave(n){t("mouseleave",n)},handleClick(n){t("click",n)},handleDblClick(n){t("dblclick",n)},handleMouseMove(n){t("mousemove",n)}}},render(){return I("span",{class:`el-rate__item a_rate_icon_${this.size}`,style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},onClick:this.handleClick,onDblclick:this.handleDblClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onMousemove:this.handleMouseMove},[I("div",{class:"a_rate_icon_align"},[I(S,{icon:this.icon,class:"a_decimal_rate_icon a_rate_decimal",color:this.color}),I(j,{icon:this.iconFill,value:this.value,color:this.color,size:this.size})])])}},A={name:"ARate",components:{AIcon:S,ATranslation:M,ARateIcon:z},props:{text:{type:String,default:null},extra:{type:Object,required:!1},rating:{type:Number,default:5},icon:{type:String,default:F},iconFill:{type:String,default:w},readonly:{type:Boolean,default:!1},showScore:{type:Boolean,default:!1},modelValue:{type:Number,default:0},color:{type:String,default:"yellow"},hoveredColor:{type:String,default:"orange"},halfIcon:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)}},emits:["update:modelValue"],setup(e,{emit:t}){const{text:n,rating:s,modelValue:d,showScore:i,readonly:a,icon:l,extra:J,color:C,hoveredColor:O,halfIcon:H,size:N}=G(e),v=x(void 0),$=x(void 0),P=x(-1),b=()=>{v.value=d.value,$.value=d.value},D=T(()=>e.iconFill?e.iconFill:`${e.icon}Fill`),y=()=>{a.value||(v.value=0,t("update:modelValue",v.value))},V=(m,c)=>{if(a.value)return;P.value=c;let u=c+1;if(H.value){const _=m.target.getBoundingClientRect();u=m.clientX-_.left<_.width/2?c+.5:c+1}$.value=u},k=()=>{a.value||(P.value=-1)},q=T(()=>Array(s.value).fill(null).map((m,c)=>c<=P.value?O.value:c<v.value?C.value:null)),B=(m,c)=>{if(a.value)return;let u=c+1;if(H.value){const _=m.target.getBoundingClientRect();u=m.clientX-_.left<_.width/2?c+.5:c+1}t("update:modelValue",u),v.value=u},X=T(()=>{const m=P.value>=0?$.value:v.value,c=Math.floor(m),u=m%1,_=Array(s.value).fill(0);for(let E=0;E<c;E++)_[E]=100;return u!==0&&c<s.value&&(_[c]=u*100),_}),U=(m,c)=>{if(a.value)return;let u=c+1;if(H.value){const _=m.target.getBoundingClientRect();u=m.clientX-_.left<_.width/2?c+.5:c+1}$.value!==u&&($.value=u,P.value=c)};return b(),{rating:s,showScore:i,readonly:a,icon:l,iconFill:D,text:n,extra:J,color:C,size:N,onMouseEnterIcon:V,onMouseLeaveIcon:k,onClickIcon:B,onDoubleClickIcon:y,onMouseMoveIcon:U,modelValue:T(()=>v.value),iconValues:X,computedColor:q}},render(){return I("div",{class:"a_rate_container"},[...Array.from({length:this.rating},(e,t)=>I(z,{class:"a_rate_icon",icon:this.icon,iconFill:this.iconFill,value:this.iconValues[t],onClick:n=>this.onClickIcon(n,t),onDblclick:this.onDoubleClickIcon,onMouseenter:n=>this.onMouseEnterIcon(n,t),onMouseleave:this.onMouseLeaveIcon,onMousemove:n=>this.onMouseMoveIcon(n,t),color:this.computedColor[t],size:this.size,key:t})),this.showScore&&I("span",{class:"a_rate_score"},this.modelValue.toString()),I(M,{class:"a_rate_label",text:this.text,extra:this.extra})])}};function Z(){return{codeHtml:`<a-rate
   text="ARate"
  :model-value="modelValue"
  @modelValue="handleModelValueChange">
</a-rate>`}}function Q(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateModelValue",
  components: {
    ARate,
  },
};`}}const K={name:"PageRateModelValue",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Z(),{codeJs:t}=Q(),n=x(3);return{codeHtml:e,codeJs:t,handleModelValueChange:d=>{n.value=d},modelValue:n}}};function ee(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"ModelValue",description:"_A_RATE_DESCRIPTION_MODEL_VALUE_",props:"model-value"},{default:h(()=>[r(a,{text:"ARate","model-value":e.modelValue,onUpdate:e.handleModelValueChange},null,8,["model-value","onUpdate"])]),_:1},8,["code-html","code-js"])}const te=p(K,[["render",ee]]);function oe(){return{codeHtml:`<a-rate 
  :model-value="2.4"
  :readonly="true"
  text="2.4 readonly">
</a-rate>`}}function ae(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateReadonly",
  components: {
    ARate,
  },
};`}}const ne={name:"PageRateReadonly",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=oe(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t}}};function re(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Readonly",description:"_A_RATE_DESCRIPTION_READONLY_",props:"readonly"},{default:h(()=>[r(a,{"model-value":2.4,readonly:!0,text:"2.4 readonly"})]),_:1},8,["code-html","code-js"])}const le=p(ne,[["render",re]]);function ce(){return{codeHtml:`<a-rate 
  :half-icon="true">
</a-rate>`}}function se(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateHalfIcon",
  components: {
    ARate,
  },
};`}}const de={name:"PageRateHalfIcon",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=ce(),{codeJs:t}=se();return{codeHtml:e,codeJs:t}}};function ie(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Select half Icon",description:"_A_RATE_DESCRIPTION_HALF_ICON_",props:"half-icon"},{default:h(()=>[r(a,{"half-icon":!0})]),_:1},8,["code-html","code-js"])}const ue=p(de,[["render",ie]]);function me(){return{codeHtml:`<a-rate 
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
`}}function _e(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateSize",
  components: {
    ARate,
  },
};`}}const pe={name:"PageRateSize",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=me(),{codeJs:t}=_e();return{codeHtml:e,codeJs:t}}};function fe(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Sizes",description:"_A_RATE_DESCRIPTION_SIZE_",props:"size"},{default:h(()=>[r(a,{size:"small",text:"small"}),t[0]||(t[0]=L("br",null,null,-1)),r(a,{size:"medium",text:"medium"}),t[1]||(t[1]=L("br",null,null,-1)),r(a,{size:"big",text:"big"})]),_:1},8,["code-html","code-js"])}const he=p(pe,[["render",fe]]);function Re(){return{codeHtml:`<a-rate 
  color="gray"
  text="gray">
</a-rate>`}}function ge(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateColor",
  components: {
    ARate,
  },
};`}}const Ae={name:"PageRateColor",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Re(),{codeJs:t}=ge();return{codeHtml:e,codeJs:t}}};function Ie(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Color",description:"_A_RATE_DESCRIPTION_COLOR_",props:"color"},{default:h(()=>[r(a,{color:"gray",text:"gray"})]),_:1},8,["code-html","code-js"])}const ve=p(Ae,[["render",Ie]]);function $e(){return{codeHtml:`<a-rate 
  hovered-color="red"
  text="red">
</a-rate>`}}function Pe(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateHoveredColor",
  components: {
    ARate,
  },
};`}}const Ee={name:"PageRateHoveredColor",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=$e(),{codeJs:t}=Pe();return{codeHtml:e,codeJs:t}}};function He(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"HoveredColor",description:"_A_RATE_DESCRIPTION_HOVERED_COLOR_",props:"hovered-color"},{default:h(()=>[r(a,{"hovered-color":"red",text:"red"})]),_:1},8,["code-html","code-js"])}const Se=p(Ee,[["render",He]]);function Ce(){return{codeHtml:`<a-rate 
  :rating="7">
</a-rate>`}}function ye(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateRating",
  components: {
    ARate,
  },
};`}}const Te={name:"PageRateRating",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Ce(),{codeJs:t}=ye();return{codeHtml:e,codeJs:t}}};function xe(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Rating",description:"_A_RATE_DESCRIPTION_RATING_",props:"rating"},{default:h(()=>[r(a,{rating:7})]),_:1},8,["code-html","code-js"])}const Je=p(Te,[["render",xe]]);function Oe(){return{codeHtml:`<a-rate
 icon="ChatSquareText">
</a-rate>
<br />
<a-rate
 icon="ArrowRightCircle">
</a-rate>`}}function Ne(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateIcon",
  components: {
    ARate,
  },
};`}}const be={name:"PageRateIcon",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Oe(),{codeJs:t}=Ne();return{codeHtml:e,codeJs:t}}};function De(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Icon",description:"_A_RATE_DESCRIPTION_ICON_",props:"icon"},{default:h(()=>[r(a,{icon:"ChatSquareText"}),t[0]||(t[0]=L("br",null,null,-1)),r(a,{icon:"ArrowRightCircle"})]),_:1},8,["code-html","code-js"])}const Ve=p(be,[["render",De]]);function Me(){return{codeHtml:`<a-rate
 icon-fill="Star">
</a-rate>`}}function Le(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateIconFill",
  components: {
    ARate,
  },
};`}}const we={name:"PageRateIconFill",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Me(),{codeJs:t}=Le();return{codeHtml:e,codeJs:t}}};function je(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"IconFill",description:"_A_RATE_DESCRIPTION_ICON_FILL_",props:"icon-fill"},{default:h(()=>[r(a,{"icon-fill":"Star"})]),_:1},8,["code-html","code-js"])}const ze=p(we,[["render",je]]);function Fe(){return{codeHtml:`<a-rate
 :show-score="true">
</a-rate>`}}function ke(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateShowScore",
  components: {
    ARate,
  },
};`}}const qe={name:"PageRateShowScore",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Fe(),{codeJs:t}=ke();return{codeHtml:e,codeJs:t}}};function Be(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"ShowScore",description:"_A_RATE_DESCRIPTION_SHOW_SCORE_",props:"show-score"},{default:h(()=>[r(a,{"show-score":!0})]),_:1},8,["code-html","code-js"])}const Xe=p(qe,[["render",Be]]);function Ue(){return{codeHtml:`<a-rate 
  text="text and extra">
</a-rate>`}}function Ge(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateTextExtra",
  components: {
    ARate,
  },
};`}}const We={name:"PageRateTextExtra",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Ue(),{codeJs:t}=Ge();return{codeHtml:e,codeJs:t}}};function Ye(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Text - Extra",description:"_A_RATE_DESCRIPTION_TEXT_EXTRA_",props:["text","extra"]},{default:h(()=>[r(a,{text:"text and extra"})]),_:1},8,["code-html","code-js"])}const Ze=p(We,[["render",Ye]]);function Qe(){return{dataEvents:[{name:"update",description:"_A_RATE_EVENT_DESCRIPTION_",type:"Function"}]}}function Ke(){return{dataProps:[{name:"model-value",description:"_A_RATE_DESCRIPTION_MODEL_VALUE_",type:"Number",default:0,required:!1},{name:"size",description:"_A_RATE_DESCRIPTION_SIZE_",type:"String",default:"medium",required:!1},{name:"half-icon",description:"_A_RATE_DESCRIPTION_HALF_ICON_",type:"Boolean",default:!1,required:!1},{name:"readonly",description:"_A_RATE_DESCRIPTION_READONLY_",type:"Boolean",default:!1,required:!1},{name:"color",description:"_A_RATE_DESCRIPTION_COLOR_",type:"String",default:"yellow",required:!1},{name:"hovered-color",description:"_A_RATE_DESCRIPTION_HOVERED_COLOR_",type:"String",default:"orange",required:!1},{name:"rating",description:"_A_RATE_DESCRIPTION_RATING_",type:"Number",default:5,required:!1},{name:"icon",description:"_A_RATE_DESCRIPTION_ICON_",type:"String",default:"Star",required:!1},{name:"icon-fill",description:"_A_RATE_DESCRIPTION_ICON_FILL_",type:"String",default:void 0,required:!1},{name:"show-score",description:"_A_RATE_DESCRIPTION_SHOW_SCORE_",type:"Boolean",default:!1,required:!1},{name:"text",description:"_A_RATE_DESCRIPTION_TEXT_",type:"String",default:void 0,required:!1},{name:"extra",description:"_A_RATE_DESCRIPTION_EXTRA_",type:"String",default:void 0,required:!1}]}}const et={name:"PageRate",components:{AlohaPage:W,AlohaTableProps:Y,ATranslation:M,PageRateModelValue:te,PageRateReadonly:le,PageRateHalfIcon:ue,PageRateSize:he,PageRateColor:ve,PageRateHoveredColor:Se,PageRateRating:Je,PageRateIcon:Ve,PageRateIconFill:ze,PageRateShowScore:Xe,PageRateTextExtra:Ze},setup(){const{dataProps:e}=Ke(),{dataEvents:t}=Qe();return{dataEvents:t,dataProps:e}}};function tt(e,t,n,s,d,i){const a=o("a-translation"),l=o("page-rate-model-value"),J=o("page-rate-size"),C=o("page-rate-half-icon"),O=o("page-rate-readonly"),H=o("page-rate-color"),N=o("page-rate-hovered-color"),v=o("page-rate-rating"),$=o("page-rate-icon"),P=o("page-rate-icon-fill"),b=o("page-rate-show-score"),D=o("page-rate-text-extra"),y=o("aloha-table-props"),V=o("aloha-page");return R(),f(V,{"page-title":"Rate"},{body:h(()=>[r(a,{tag:"p",html:"_A_RATE_DESCRIPTION_"}),r(l),r(J),r(C),r(O),r(H),r(N),r(v),r($),r(P),r(b),r(D),r(y,{data:e.dataProps},null,8,["data"]),r(y,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1})}const gt=p(et,[["render",tt]]);export{gt as default};
