import{A as m,a as T}from"./chunk.AlohaExample.BUpKYs6e.js";import{A as h}from"./chunk.AlohaTableTranslate.DCK8v7Pf.js";import{P as U,a as x,b as J}from"./chunk.PageFilterTest.B1a4Q48w.js";import{aV as t,_ as l,A as L}from"./bundle.index.BecyEjsf.js";import{d as f,Y as _,W as c,f as i,aU as Z,$ as s}from"./chunk.vendor.Byi294Mq.js";import"./chunk.vendor-lodash.BZTvCWYY.js";import{P as B}from"./chunk.PageFilterImportCompositionApi.BqlfpvFb.js";import{f as v}from"./chunk.filterBoolean.test.9cX79x5q.js";import"./chunk.APageTabTitle.DeH86sFI.js";import"./chunk.AlohaHighlightjs.D8Y-nfDK.js";import"./chunk.ATable.D0UXae0g.js";import"./chunk.translations-ar.CEE2zr9E.js";import"./chunk.translations-de.B5EkW3Bn.js";import"./chunk.translations-en.By5OazNK.js";import"./chunk.translations-es.BBwYsoM6.js";import"./chunk.translations-fr.sIUOe09m.js";import"./chunk.translations-hr.BW2q_4Qp.js";import"./chunk.translations-it.BpY7vfJm.js";import"./chunk.translations-ru.j7n72CSV.js";function G(){return{codeJs:f(()=>`filterFileSize(1024, { digits: 0 });
// ${t(1024,{digits:0})}

filterFileSize(10241, { digits: 2 });
// ${t(10241,{digits:2})}`)}}const R={name:"PageFilterFileSizeDigits",components:{AlohaExample:m},setup(){const{codeJs:e}=G();return{codeJs:e}}};function j(e,o,r,a,p,u){const n=i("aloha-example");return _(),c(n,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const y=l(R,[["render",j]]);function N(){return{codeJs:f(()=>`filterFileSize(2000);
// ${t(2e3)}

filterFileSize(1024);
// ${t(1024)}`)}}const k={name:"PageFilterFileSizeExample",components:{AlohaExample:m},setup(){const{codeJs:e}=N();return{codeJs:e}}};function C(e,o,r,a,p,u){const n=i("aloha-example");return _(),c(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const M=l(k,[["render",C]]);function D(){return{codeJs:f(()=>`filterFileSize(1024, { sourceUnits: "b" });
// ${t(1024,{sourceUnits:"b"})}

filterFileSize(2, { sourceUnits: "kb" });
// ${t(2,{sourceUnits:"kb"})}

filterFileSize(1, { sourceUnits: "mb" });
// ${t(1,{sourceUnits:"mb"})}

filterFileSize(0.1, { sourceUnits: "gb" });
// ${t(.1,{sourceUnits:"gb"})}

filterFileSize(0.0001, { sourceUnits: "tb" });
// ${t(1e-4,{sourceUnits:"tb"})}`)}}const V={name:"PageFilterFileSizeSourceUnits",components:{AlohaExample:m},setup(){const{codeJs:e}=D();return{codeJs:e}}};function O(e,o,r,a,p,u){const n=i("aloha-example");return _(),c(n,{"code-js":e.codeJs,header:"sourceUnits","is-code-visible-default":!0},null,8,["code-js"])}const Y=l(V,[["render",O]]);function w(){return{codeJs:f(()=>`filterFileSize(1024, { units: "b" });
// ${t(1024,{units:"b"})}

filterFileSize(1024, { units: "kb" });
// ${t(1024,{units:"kb"})}

filterFileSize(1048576, { units: "mb" });
// ${t(1048576,{units:"mb"})}

filterFileSize(1073741824, { units: "gb" });
// ${t(1073741824,{units:"gb"})}

filterFileSize(1073741824 * 1024, { units: "tb" });
// ${t(1099511627776,{units:"tb"})}`)}}const K={name:"PageFilterFileSizeUnits",components:{AlohaExample:m},setup(){const{codeJs:e}=w();return{codeJs:e}}};function W(e,o,r,a,p,u){const n=i("aloha-example");return _(),c(n,{"code-js":e.codeJs,header:"units","is-code-visible-default":!0},null,8,["code-js"])}const q=l(K,[["render",W]]);function H(){return{codeJs:f(()=>`filterFileSize(1024, { units: "" });
// ${t(1024,{units:""})}

filterFileSize(1048576, { units: "" });
// ${t(1048576,{units:""})}

filterFileSize(1073741824, { units: "" });
// ${t(1073741824,{units:""})}

filterFileSize(1073741824 * 1024, { units: "" });
// ${t(1099511627776,{units:""})}`)}}const Q={name:"PageFilterFileSizeUnitsEmpty",components:{AlohaExample:m},setup(){const{codeJs:e}=H();return{codeJs:e}}};function X(e,o,r,a,p,u){const n=i("aloha-example");return _(),c(n,{"code-js":e.codeJs,header:'units=""',"is-code-visible-default":!0},null,8,["code-js"])}const ee=l(Q,[["render",X]]);function te(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_VALUE_"},{value:'[units="kb"]',types:["String"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_UNITS_"},{value:'[sourceUnits="b"]',types:["String"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_SOURCE_UNITS_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_DIGITS_"}]}}function ie(){return{pageTitle:"filterFileSize"}}function ne(){return{dataTranslate:["_A_FILE_SIZE_B_","_A_FILE_SIZE_KB_","_A_FILE_SIZE_MB_","_A_FILE_SIZE_GB_","_A_FILE_SIZE_TB_","_A_FILE_SIZE_PB_","_A_FILE_SIZE_EB_","_A_FILE_SIZE_ZB_","_A_FILE_SIZE_YB_"]}}const se={name:"PageFilterFileSize",components:{AlohaPage:T,AlohaTableTranslate:h,ATranslation:L,PageFilterArguments:J,PageFilterFileSizeDigits:y,PageFilterFileSizeExample:M,PageFilterFileSizeSourceUnits:Y,PageFilterFileSizeUnits:q,PageFilterFileSizeUnitsEmpty:ee,PageFilterImportCompositionApi:B,PageFilterImportFunction:x,PageFilterTest:U},setup(){const{pageTitle:e}=ie(),{dataTranslate:o}=ne(),{argumentsText:r}=te();return{argumentsText:r,dataTranslate:o,pageTitle:e,test:v}}};function oe(e,o,r,a,p,u){const n=i("a-translation"),d=i("page-filter-import-function"),g=i("page-filter-import-composition-api"),F=i("page-filter-arguments"),S=i("page-filter-file-size-example"),$=i("page-filter-file-size-units"),E=i("page-filter-file-size-units-empty"),I=i("page-filter-file-size-source-units"),z=i("page-filter-file-size-digits"),A=i("aloha-table-translate"),b=i("page-filter-test"),P=i("aloha-page");return _(),c(P,{"page-title":e.pageTitle},{body:Z(()=>[s(n,{tag:"p",html:"_PAGE_FILTER_FILE_SIZE_DESCRIPTION_"}),s(d,{"function-name":"filterFileSize","type-import":"filters"}),s(g,{"function-name":"filterFileSize"}),s(F,{"arguments-text":e.argumentsText,"function-description":'filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] })'},null,8,["arguments-text"]),s(S),s($),s(E),s(I),s(z),s(A,{data:e.dataTranslate},null,8,["data"]),s(b,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Pe=l(se,[["render",oe]]);export{Pe as default};
