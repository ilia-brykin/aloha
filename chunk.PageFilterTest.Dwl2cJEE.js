import{A as f}from"./chunk.AlohaExample.A9Ef-QbL.js";import{A as P,_ as p}from"./bundle.index.Dn7qpWjQ.js";import{E as S}from"./chunk.vendor-lodash.Cgq9oNCy.js";import{t as _,a as y,m as c,K as T,J as o,N as s,P as i,O as $,aP as d,aW as E,aR as v}from"./chunk.vendor.DQz1Isc4.js";function x(e){const t=_(e,"type"),n={object:"_JS_TYPE_OBJECT_",array:"_JS_TYPE_ARRAY_",any:"_JS_TYPE_ANY_",string:"_JS_TYPE_STRING_",number:"_JS_TYPE_NUMBER_",function:"_JS_TYPE_FUNCTION_",boolean:"_JS_TYPE_BOOLEAN_"};return{typeLocal:y(()=>{const a=S(t.value);return n[a]||a})}}const J={name:"TypeTranslate",components:{ATranslation:P},props:{tag:{type:String,required:!1,default:"strong"},type:{type:String,required:!0}},setup(e){const{typeLocal:t}=x(e);return{typeLocal:t}}};function I(e,t,n,l,a,m){const r=c("a-translation");return o(),T(r,{text:e.typeLocal,tag:e.tag},null,8,["text","tag"])}const F=p(J,[["render",I]]);function R(e){const t=_(e,"functionDescription");return{codeJs:y(()=>`${t.value};`)}}const O={name:"PageFilterArguments",components:{AlohaExample:f,ATranslation:P,TypeTranslate:F},props:{argumentsText:{type:Array,required:!0},functionDescription:{type:String,required:!0}},setup(e){const{codeJs:t}=R(e);return{codeJs:t}}},Y={class:"a_list_without_styles a_mt_3"},C=$("span",null,"(",-1),L={key:0},q=$("span",null,"):",-1);function B(e,t,n,l,a,m){const r=c("aloha-example"),g=c("a-translation"),A=c("type-translate");return o(),s("div",null,[i(r,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_ARGUMENTS_HEADER_","is-code-visible-default":!0},null,8,["code-js"]),$("ul",Y,[(o(!0),s(d,null,E(e.argumentsText,u=>(o(),s("li",{class:"a_mb_2",key:u.text},[i(g,{text:u.value,tag:"strong","text-after":" "},null,8,["text"]),C,(o(!0),s(d,null,E(u.types,(h,N)=>(o(),s(d,{key:h},[N!==0?(o(),s("strong",L," | ")):v("",!0),i(A,{type:h},null,8,["type"])],64))),128)),q,i(g,{"safe-html":u.text,tag:"span","text-before":" "},null,8,["safe-html"])]))),128))])])}const w=p(O,[["render",B]]);function U(e){const t=_(e,"functionName"),n=_(e,"typeImport");return{codeJs:y(()=>n.value==="filters"?`import ${t.value} from "aloha-vue/src/filters/${t.value}";`:n.value==="utils"?`import { ${t.value} } from "aloha-vue/src/utils/utils";`:n.value==="utilsMath"?`import { ${t.value} } from "aloha-vue/src/utils/utilsMath";`:"")}}const b={name:"PageFilterImportFunction",components:{AlohaExample:f},props:{functionName:{type:String,required:!0},typeImport:{type:String,required:!0,validator:e=>["filters","utils","utilsMath"].indexOf(e)!==-1}},setup(e){const{codeJs:t}=U(e);return{codeJs:t}}};function k(e,t,n,l,a,m){const r=c("aloha-example");return o(),T(r,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_FUNCTION_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const K=p(b,[["render",k]]),D={name:"PageFilterTest",components:{AlohaExample:f},props:{test:{type:String,required:!0}}};function M(e,t,n,l,a,m){const r=c("aloha-example");return o(),T(r,{"code-js":e.test,header:"_PAGE_FUNCTIONS_TESTS_HEADER_","is-code-visible-default":!1},null,8,["code-js"])}const W=p(D,[["render",M]]);export{w as P,K as a,W as b};