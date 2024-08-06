"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[1909],{1912:(e,l,a)=>{a.d(l,{A:()=>D});var d=a(6365);const o={class:"aloha_example"},i={key:1},t=(0,d.Lk)("dt",{class:"a_fs_4"},"Props:",-1),n=(0,d.Lk)("dt",{class:"a_fs_4"},"Emits:",-1),u=(0,d.Lk)("dt",{class:"a_fs_4"},"Slots:",-1),s=(0,d.Lk)("dt",{class:"a_fs_4"},"Exposes:",-1),r={class:"aloha_example__body"},p={class:"aloha_example__actions"},c={class:"a_btn_group"},m={key:3,class:"aloha_example__code"},v=(0,d.Lk)("h3",{class:"aloha_example__h3"},"HTML",-1),_=(0,d.Lk)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var g=a(9791),h=a(8514),y=a(7791),b=a(4991),C=a(2543);const f={name:"AlohaExample",components:{AButton:g.A,AlohaHighlightjs:h.A,ATranslation:y.A},props:{code:{type:String,required:!1,default:void 0},codeHtml:{type:String,required:!1,default:void 0},codeJs:{type:String,required:!1,default:void 0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},isCodeVisibleDefault:{type:Boolean,required:!1,default:!1},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(e){const{btnToggleCodeTitle:l,isCodeVisible:a,toggleCode:o}=function(e){const l=(0,d.lW)(e,"isCodeVisibleDefault"),a=(0,d.KR)(l.value);return{btnToggleCodeTitle:(0,d.EW)((()=>a.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:a,toggleCode:()=>{a.value=!a.value}}}(e),{copyHtmlToClipboard:i,copyJsToClipboard:t}=function(e){const l=(0,d.lW)(e,"codeHtml"),a=(0,d.lW)(e,"codeJs"),{addNotification:o}=(0,b.Ay)();async function i(e){try{await navigator.clipboard.writeText(e),o({text:"_COPIED_TO_CLIPBOARD_"})}catch(e){o({text:e,type:"danger"})}}return{copyHtmlToClipboard:()=>{i(l.value)},copyJsToClipboard:()=>{i(a.value)}}}(e),{emitsLocal:n,exposesLocal:u,hasAtLeastOneProperty:s,hasEmits:r,hasExposes:p,hasProps:c,hasSlots:m,propsLocal:v,slotsLocal:_}=function(e){const l=(0,d.lW)(e,"props"),a=(0,d.lW)(e,"emits"),o=(0,d.lW)(e,"exposes"),i=(0,d.lW)(e,"slots"),t=e=>(0,C.isArray)(e)?e:(0,C.isString)(e)?[e]:[],n=(0,d.EW)((()=>t(a.value))),u=(0,d.EW)((()=>t(o.value))),s=(0,d.EW)((()=>t(l.value))),r=(0,d.EW)((()=>t(i.value))),p=(0,d.EW)((()=>s.value.length>0)),c=(0,d.EW)((()=>n.value.length>0)),m=(0,d.EW)((()=>r.value.length>0)),v=(0,d.EW)((()=>u.value.length>0)),_=(0,d.EW)((()=>p.value||c.value||v.value||m.value));return{emitsLocal:n,exposesLocal:u,hasAtLeastOneProperty:_,hasEmits:c,hasExposes:v,hasProps:p,hasSlots:m,propsLocal:s,slotsLocal:r}}(e);return{btnToggleCodeTitle:l,copyHtmlToClipboard:i,copyJsToClipboard:t,emitsLocal:n,exposesLocal:u,hasAtLeastOneProperty:s,hasEmits:r,hasExposes:p,hasProps:c,hasSlots:m,isCodeVisible:a,propsLocal:v,slotsLocal:_,toggleCode:o}}},D=(0,a(6262).A)(f,[["render",function(e,l){const a=(0,d.g2)("a-translation"),g=(0,d.g2)("a-button"),h=(0,d.g2)("aloha-highlightjs");return(0,d.uX)(),(0,d.CE)("div",o,[e.header?((0,d.uX)(),(0,d.Wv)(a,{key:0,class:"aloha_example__h2",tag:"h2",html:e.header},null,8,["html"])):(0,d.Q3)("v-if",!0),e.hasAtLeastOneProperty?((0,d.uX)(),(0,d.CE)("dl",i,[e.hasProps?((0,d.uX)(),(0,d.CE)(d.FK,{key:0},[t,((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(e.propsLocal,(e=>((0,d.uX)(),(0,d.CE)("dd",{key:e},[(0,d.Lk)("strong",null,(0,d.v_)(e),1)])))),128))],64)):(0,d.Q3)("v-if",!0),e.hasEmits?((0,d.uX)(),(0,d.CE)(d.FK,{key:1},[n,((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(e.emitsLocal,(e=>((0,d.uX)(),(0,d.CE)("dd",{key:e},[(0,d.Lk)("strong",null,(0,d.v_)(e),1)])))),128))],64)):(0,d.Q3)("v-if",!0),e.hasSlots?((0,d.uX)(),(0,d.CE)(d.FK,{key:2},[u,((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(e.slotsLocal,(e=>((0,d.uX)(),(0,d.CE)("dd",{key:e},[(0,d.Lk)("strong",null,(0,d.v_)(e),1)])))),128))],64)):(0,d.Q3)("v-if",!0),e.hasExposes?((0,d.uX)(),(0,d.CE)(d.FK,{key:3},[s,((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(e.exposesLocal,(e=>((0,d.uX)(),(0,d.CE)("dd",{key:e},[(0,d.Lk)("strong",null,(0,d.v_)(e),1)])))),128))],64)):(0,d.Q3)("v-if",!0)])):(0,d.Q3)("v-if",!0),e.description?((0,d.uX)(),(0,d.Wv)(a,{key:2,tag:"p",html:e.description},null,8,["html"])):(0,d.Q3)("v-if",!0),(0,d.Lk)("div",r,[(0,d.RG)(e.$slots,"default")]),(0,d.Lk)("div",p,[(0,d.Lk)("div",c,[e.codeJs?((0,d.uX)(),(0,d.Wv)(g,{key:0,class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:e.copyJsToClipboard},null,8,["onClick"])):(0,d.Q3)("v-if",!0),e.codeHtml?((0,d.uX)(),(0,d.Wv)(g,{key:1,class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:e.copyHtmlToClipboard},null,8,["onClick"])):(0,d.Q3)("v-if",!0),(0,d.bF)(g,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:e.btnToggleCodeTitle,onClick:e.toggleCode},null,8,["title","onClick"])])]),e.isCodeVisible?((0,d.uX)(),(0,d.CE)("div",m,[e.code?((0,d.uX)(),(0,d.Wv)(h,{key:0,code:e.code,language:"markdown"},null,8,["code"])):(0,d.Q3)("v-if",!0),e.codeHtml?((0,d.uX)(),(0,d.CE)(d.FK,{key:1},[v,(0,d.bF)(h,{code:e.codeHtml,language:"html"},null,8,["code"])],64)):(0,d.Q3)("v-if",!0),e.codeJs?((0,d.uX)(),(0,d.CE)(d.FK,{key:2},[_,(0,d.bF)(h,{code:e.codeJs,language:"javascript"},null,8,["code"])],64)):(0,d.Q3)("v-if",!0)])):(0,d.Q3)("v-if",!0)])}]])},6103:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var d=a(6365);const o={class:"a_columns a_columns_count_12"},i={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};var t=a(9791),n=a(1912),u=a(9129),s=a(9779),r=a(7216),p=a(7791),c=a(2543);const m={name:"PageInputCurrency",components:{AButton:t.A,AlohaExample:n.A,AInputCurrency:u.A,AInputNumber:s.A,ASelect:r.A,ATranslation:p.A},setup(){const{codeHtml:e}={codeHtml:'<span>Beispiel Model {{ mainModel }}</span>\n  <a-input-currency classs="a_mb_5"\n    :key="exampleInputKey"\n    id="input5"\n    v-model="mainModel"\n    label="Beispiel Input"\n    :required="true"\n    :thousand-divider="appliedModel.modelThousandDivider"\n    :decimal-divider="appliedModel.modelDecimalDivider"\n    :step="appliedModel.modelStep"\n    :validation-on-change="true"\n    :symbols-after-decimal-divider="appliedModel.modelSymbolsAfterDecimalDivider"\n  ></a-input-currency>'},{codeJs:l}={codeJs:""},{appliedModel:a,applyModel:o,decimalDividerCollection:i,changeDecimalDivider:t,changeThousandDivider:n,exampleInputKey:u,mainModel:s,thousandDividerCollection:r,unappliedModel:p}=function(){const e=(0,d.KR)(4200.04),l=(0,d.KR)({modelSymbolsAfterDecimalDivider:2,modelStep:.01,modelThousandDivider:"",modelDecimalDivider:","}),a=(0,d.KR)({modelSymbolsAfterDecimalDivider:2,modelStep:.01,modelThousandDivider:"",modelDecimalDivider:","}),o=(0,d.KR)(0),i=(0,d.EW)((()=>`example_input_key_${o.value}`));return{appliedModel:l,applyModel:()=>{l.value=(0,c.clone)(a.value),o.value++},decimalDividerCollection:[{value:".",label:"."},{value:",",label:","}],changeDecimalDivider:({model:e})=>{"."===e&&"."===a.value.modelDecimalDivider&&(a.value.modelThousandDivider=","),","===e&&","===a.value.modelDecimalDivider&&(a.value.modelThousandDivider=".")},changeThousandDivider:({model:e})=>{"."===e&&"."===a.value.modelThousandDivider&&(a.value.modelDecimalDivider=","),","===e&&","===a.value.modelThousandDivider&&(a.value.modelDecimalDivider=".")},exampleInputKey:i,mainModel:e,thousandDividerCollection:[{value:"",label:"No"},{value:" ",label:"Empty Space"},{value:".",label:"."},{value:",",label:","}],unappliedModel:a}}();return{appliedModel:a,applyModel:o,changeDecimalDivider:t,changeThousandDivider:n,codeHtml:e,codeJs:l,decimalDividerCollection:i,exampleInputKey:u,mainModel:s,thousandDividerCollection:r,unappliedModel:p}}},v=(0,a(6262).A)(m,[["render",function(e,l){const a=(0,d.g2)("a-input-number"),t=(0,d.g2)("a-select"),n=(0,d.g2)("a-button"),u=(0,d.g2)("a-translation"),s=(0,d.g2)("a-input-currency"),r=(0,d.g2)("aloha-example");return(0,d.uX)(),(0,d.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGE_INPUT_CURRENCY_HEADER_",description:"_A_PAGE_INPUT_CURRENCY_DESCRIPTION_",props:["thousand-divider","decimal-divider","step","symbols-after-decimal-divider"]},{default:(0,d.k6)((()=>[(0,d.Lk)("div",o,[(0,d.Lk)("div",i,[(0,d.bF)(a,{id:"input_currency_symbols_after_decimal_divider",modelValue:e.unappliedModel.modelSymbolsAfterDecimalDivider,"onUpdate:modelValue":l[0]||(l[0]=l=>e.unappliedModel.modelSymbolsAfterDecimalDivider=l),type:"integerNonNegative",label:"symbols-after-decimal-divider",step:1},null,8,["modelValue"]),(0,d.bF)(a,{id:"input_currency_step",modelValue:e.unappliedModel.modelStep,"onUpdate:modelValue":l[1]||(l[1]=l=>e.unappliedModel.modelStep=l),label:"step"},null,8,["modelValue"]),(0,d.bF)(t,{id:"input_thousand_divider",modelValue:e.unappliedModel.modelThousandDivider,"onUpdate:modelValue":l[2]||(l[2]=l=>e.unappliedModel.modelThousandDivider=l),label:"thousand-divider","key-id":"value","key-label":"label",data:e.thousandDividerCollection,"is-label-float":!1,type:"select",change:e.changeThousandDivider},null,8,["modelValue","data","change"]),(0,d.bF)(t,{id:"input_currency_decimal_divider",modelValue:e.unappliedModel.modelDecimalDivider,"onUpdate:modelValue":l[3]||(l[3]=l=>e.unappliedModel.modelDecimalDivider=l),label:"decimal-divider","key-id":"value","key-label":"label",data:e.decimalDividerCollection,"is-label-float":!1,type:"select",change:e.changeDecimalDivider},null,8,["modelValue","data","change"]),(0,d.bF)(n,{class:"a_btn a_btn_primary a_mt_2",id:"input_currency_apply_model",text:"Apply model",onClick:e.applyModel},null,8,["onClick"])])]),(0,d.bF)(u,{tag:"span",html:"_A_PAGE_INPUT_CURRENCY_EXAMPLE_MODEL_","text-after":": "+e.mainModel},null,8,["text-after"]),((0,d.uX)(),(0,d.Wv)(s,{class:"a_mb_5",id:"input_currency_example",key:e.exampleInputKey,modelValue:e.mainModel,"onUpdate:modelValue":l[4]||(l[4]=l=>e.mainModel=l),label:"_A_PAGE_INPUT_CURRENCY_EXAMPLE_INPUT_",required:!0,"thousand-divider":e.appliedModel.modelThousandDivider,"decimal-divider":e.appliedModel.modelDecimalDivider,step:e.appliedModel.modelStep,"symbols-after-decimal-divider":e.appliedModel.modelSymbolsAfterDecimalDivider,"validation-on-change":!0},null,8,["modelValue","thousand-divider","decimal-divider","step","symbols-after-decimal-divider"]))])),_:1},8,["code-html","code-js"])}]])},2642:(e,l,a)=>{a.r(l),a.d(l,{default:()=>c});var d=a(6365);const o=(0,d.Lk)("h1",null,"Input number",-1),i=(0,d.Lk)("h2",null,'type "number"',-1),t=(0,d.Lk)("h2",null,'type "integerNonNegative"',-1),n=(0,d.Lk)("h2",null,'type "integerPositive"',-1),u=(0,d.Lk)("h2",null,'type "integer"',-1),s=(0,d.Lk)("input",{type:"number"},null,-1),r=(0,d.Lk)("button",{class:"a_btn a_btn_primary"},"Temp",-1),p={name:"PageInputNumber",components:{AInputNumber:a(9779).A},data:()=>({model1:10,model2:123,model3:321,model4:432}),methods:{changeModel1(e){console.log("arg",e)}}},c=(0,a(6262).A)(p,[["render",function(e,l){const a=(0,d.g2)("a-input-number");return(0,d.uX)(),(0,d.CE)("div",null,[o,i,(0,d.bF)(a,{id:"input1",modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.model1=l),type:"number",label:"Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd",required:!0,step:2,errors:"not valid"},null,8,["modelValue"]),(0,d.Lk)("div",null,"model1: "+(0,d.v_)(e.model1),1),t,(0,d.bF)(a,{id:"input2",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.model2=l),type:"integerNonNegative",label:"Input 2",required:!0,step:2,disabled:!0},null,8,["modelValue"]),(0,d.Lk)("div",null,"model2: "+(0,d.v_)(e.model2),1),n,(0,d.bF)(a,{id:"input3",modelValue:e.model3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.model3=l),type:"integerPositive",label:"Input 3",required:!0,step:3,"controls-type":"none"},null,8,["modelValue"]),(0,d.Lk)("div",null,"model3: "+(0,d.v_)(e.model3),1),u,(0,d.bF)(a,{id:"input4",modelValue:e.model4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.model4=l),type:"integer",label:"Input 4",required:!0,step:4},null,8,["modelValue"]),(0,d.Lk)("div",null,"model4: "+(0,d.v_)(e.model4),1),s,r])}]])},8514:(e,l,a)=>{a.d(l,{A:()=>s});var d=a(6365),o=a(11),i=a(5603),t=a(9359),n=a(3265),u=a(2068);a(2348),o.A.registerLanguage("javascript",i.A),o.A.registerLanguage("html",t.A),o.A.registerLanguage("markdown",n.A),o.A.registerLanguage("scss",u.A);const s={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(e){const l=(0,d.KR)(e.language);(0,d.wB)((()=>e.language),(e=>{l.value=e}));const a=(0,d.EW)((()=>e.autodetect&&!l.value)),i=(0,d.EW)((()=>!a.value&&!o.A.getLanguage(l.value)));return{className:(0,d.EW)((()=>i.value?"":`hljs ${l.value}`)),highlightedCode:(0,d.EW)((()=>i.value?(console.warn(`The language "${l.value}" you specified could not be found.`),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):a.value?o.A.highlightAuto(e.code).value:o.A.highlight(e.code,{language:l.value,ignoreIllegals:e.ignoreIllegals}).value))}},render(){return(0,d.h)("pre",{},[(0,d.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}}}}]);
//# sourceMappingURL=chunk.1909.a3de3de3afffffb38320.js.map