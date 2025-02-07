import{ay as t,_ as l,A as T}from"./bundle.index.BBIMvqHY.js";import{a as m,O as _,b as i,Q as c,aR as h,V as s}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as f,a as U}from"./chunk.AlohaExample.DyGlJAKb.js";import{A as x}from"./chunk.AlohaTableTranslate.FWJN5X4x.js";import{P as J,a as L,b as Z}from"./chunk.PageFilterTest.C9G4Ca-I.js";import{P as B}from"./chunk.PageFilterImportCompositionApi.CeTbDPjM.js";import{f as v}from"./chunk.filterBoolean.test.9cX79x5q.js";import"./chunk.translations-ar.DWwaQC1L.js";import"./chunk.translations-de.Bm_NRjKi.js";import"./chunk.translations-en.CfLmKpaQ.js";import"./chunk.translations-es.C_tSILxJ.js";import"./chunk.translations-fr.acyQpqB8.js";import"./chunk.translations-hr.wGAqklkF.js";import"./chunk.translations-it.CSGg6_Uy.js";import"./chunk.translations-ru.VBYVnDIE.js";import"./chunk.APageTabTitle.B8oRDfz3.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";import"./chunk.ATable.CZ3i1xXH.js";function G(){return{codeJs:m(()=>`filterFileSize(1024, { digits: 0 });
// ${t(1024,{digits:0})}

filterFileSize(10241, { digits: 2 });
// ${t(10241,{digits:2})}`)}}const R={name:"PageFilterFileSizeDigits",components:{AlohaExample:f},setup(){const{codeJs:e}=G();return{codeJs:e}}};function y(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const j=l(R,[["render",y]]);function N(){return{codeJs:m(()=>`filterFileSize(2000);
// ${t(2e3)}

filterFileSize(1024);
// ${t(1024)}`)}}const k={name:"PageFilterFileSizeExample",components:{AlohaExample:f},setup(){const{codeJs:e}=N();return{codeJs:e}}};function C(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const M=l(k,[["render",C]]);function D(){return{codeJs:m(()=>`filterFileSize(1024, { sourceUnits: "b" });
// ${t(1024,{sourceUnits:"b"})}

filterFileSize(2, { sourceUnits: "kb" });
// ${t(2,{sourceUnits:"kb"})}

filterFileSize(1, { sourceUnits: "mb" });
// ${t(1,{sourceUnits:"mb"})}

filterFileSize(0.1, { sourceUnits: "gb" });
// ${t(.1,{sourceUnits:"gb"})}

filterFileSize(0.0001, { sourceUnits: "tb" });
// ${t(1e-4,{sourceUnits:"tb"})}`)}}const O={name:"PageFilterFileSizeSourceUnits",components:{AlohaExample:f},setup(){const{codeJs:e}=D();return{codeJs:e}}};function V(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:"sourceUnits","is-code-visible-default":!0},null,8,["code-js"])}const w=l(O,[["render",V]]);function K(){return{codeJs:m(()=>`filterFileSize(1024, { units: "b" });
// ${t(1024,{units:"b"})}

filterFileSize(1024, { units: "kb" });
// ${t(1024,{units:"kb"})}

filterFileSize(1048576, { units: "mb" });
// ${t(1048576,{units:"mb"})}

filterFileSize(1073741824, { units: "gb" });
// ${t(1073741824,{units:"gb"})}

filterFileSize(1073741824 * 1024, { units: "tb" });
// ${t(1099511627776,{units:"tb"})}`)}}const Q={name:"PageFilterFileSizeUnits",components:{AlohaExample:f},setup(){const{codeJs:e}=K();return{codeJs:e}}};function Y(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:"units","is-code-visible-default":!0},null,8,["code-js"])}const q=l(Q,[["render",Y]]);function H(){return{codeJs:m(()=>`filterFileSize(1024, { units: "" });
// ${t(1024,{units:""})}

filterFileSize(1048576, { units: "" });
// ${t(1048576,{units:""})}

filterFileSize(1073741824, { units: "" });
// ${t(1073741824,{units:""})}

filterFileSize(1073741824 * 1024, { units: "" });
// ${t(1099511627776,{units:""})}`)}}const W={name:"PageFilterFileSizeUnitsEmpty",components:{AlohaExample:f},setup(){const{codeJs:e}=H();return{codeJs:e}}};function X(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:'units=""',"is-code-visible-default":!0},null,8,["code-js"])}const ee=l(W,[["render",X]]);function te(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_VALUE_"},{value:'[units="kb"]',types:["String"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_UNITS_"},{value:'[sourceUnits="b"]',types:["String"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_SOURCE_UNITS_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_DIGITS_"}]}}function ie(){return{pageTitle:"filterFileSize"}}function ne(){return{dataTranslate:["_A_FILE_SIZE_B_","_A_FILE_SIZE_KB_","_A_FILE_SIZE_MB_","_A_FILE_SIZE_GB_","_A_FILE_SIZE_TB_","_A_FILE_SIZE_PB_","_A_FILE_SIZE_EB_","_A_FILE_SIZE_ZB_","_A_FILE_SIZE_YB_"]}}const se={name:"PageFilterFileSize",components:{AlohaPage:U,AlohaTableTranslate:x,ATranslation:T,PageFilterArguments:Z,PageFilterFileSizeDigits:j,PageFilterFileSizeExample:M,PageFilterFileSizeSourceUnits:w,PageFilterFileSizeUnits:q,PageFilterFileSizeUnitsEmpty:ee,PageFilterImportCompositionApi:B,PageFilterImportFunction:L,PageFilterTest:J},setup(){const{pageTitle:e}=ie(),{dataTranslate:o}=ne(),{argumentsText:r}=te();return{argumentsText:r,dataTranslate:o,pageTitle:e,test:v}}};function oe(e,o,r,a,p,u){const n=i("a-translation"),d=i("page-filter-import-function"),g=i("page-filter-import-composition-api"),F=i("page-filter-arguments"),S=i("page-filter-file-size-example"),$=i("page-filter-file-size-units"),E=i("page-filter-file-size-units-empty"),I=i("page-filter-file-size-source-units"),z=i("page-filter-file-size-digits"),A=i("aloha-table-translate"),b=i("page-filter-test"),P=i("aloha-page");return c(),_(P,{"page-title":e.pageTitle},{body:h(()=>[s(n,{tag:"p",html:"_PAGE_FILTER_FILE_SIZE_DESCRIPTION_"}),s(d,{"function-name":"filterFileSize","type-import":"filters"}),s(g,{"function-name":"filterFileSize"}),s(F,{"arguments-text":e.argumentsText,"function-description":'filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] })'},null,8,["arguments-text"]),s(S),s($),s(E),s(I),s(z),s(A,{data:e.dataTranslate},null,8,["data"]),s(b,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Pe=l(se,[["render",oe]]);export{Pe as default};
