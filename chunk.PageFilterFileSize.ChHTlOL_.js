import{A as m,a as T}from"./chunk.AlohaExample._XO7Xp-I.js";import{A as h}from"./chunk.AlohaTableTranslate.1UY9PlL2.js";import{ax as t,_ as l,A as U}from"./bundle.index.B5hAPZ2P.js";import{P as x,a as J,b as L}from"./chunk.PageFilterTest.CWh-nor5.js";import{a as f,k as i,J as _,H as c,aO as Z,O as s}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import{P as B}from"./chunk.PageFilterImportCompositionApi.rwbmRCJV.js";import{f as v}from"./chunk.filterBoolean.test.DygJ_39J.js";import"./chunk.APageTabTitle.BJKzNP7I.js";import"./chunk.ATable.BwkyGeOL.js";import"./chunk.translations-ar.CVMjJp5b.js";import"./chunk.translations-de.BzQlZ0KE.js";import"./chunk.translations-en.BgQGjf0f.js";import"./chunk.translations-es.D96WHE2G.js";import"./chunk.translations-fr.C7FJhEVC.js";import"./chunk.translations-hr.BD4oC8kj.js";import"./chunk.translations-it.DUqHiLVz.js";import"./chunk.translations-ru.DEu_2RjU.js";function G(){return{codeJs:f(()=>`filterFileSize(1024, { digits: 0 });
// ${t(1024,{digits:0})}

filterFileSize(10241, { digits: 2 });
// ${t(10241,{digits:2})}`)}}const R={name:"PageFilterFileSizeDigits",components:{AlohaExample:m},setup(){const{codeJs:e}=G();return{codeJs:e}}};function j(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const y=l(R,[["render",j]]);function N(){return{codeJs:f(()=>`filterFileSize(2000);
// ${t(2e3)}

filterFileSize(1024);
// ${t(1024)}`)}}const k={name:"PageFilterFileSizeExample",components:{AlohaExample:m},setup(){const{codeJs:e}=N();return{codeJs:e}}};function C(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const M=l(k,[["render",C]]);function D(){return{codeJs:f(()=>`filterFileSize(1024, { sourceUnits: "b" });
// ${t(1024,{sourceUnits:"b"})}

filterFileSize(2, { sourceUnits: "kb" });
// ${t(2,{sourceUnits:"kb"})}

filterFileSize(1, { sourceUnits: "mb" });
// ${t(1,{sourceUnits:"mb"})}

filterFileSize(0.1, { sourceUnits: "gb" });
// ${t(.1,{sourceUnits:"gb"})}

filterFileSize(0.0001, { sourceUnits: "tb" });
// ${t(1e-4,{sourceUnits:"tb"})}`)}}const O={name:"PageFilterFileSizeSourceUnits",components:{AlohaExample:m},setup(){const{codeJs:e}=D();return{codeJs:e}}};function V(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:"sourceUnits","is-code-visible-default":!0},null,8,["code-js"])}const w=l(O,[["render",V]]);function H(){return{codeJs:f(()=>`filterFileSize(1024, { units: "b" });
// ${t(1024,{units:"b"})}

filterFileSize(1024, { units: "kb" });
// ${t(1024,{units:"kb"})}

filterFileSize(1048576, { units: "mb" });
// ${t(1048576,{units:"mb"})}

filterFileSize(1073741824, { units: "gb" });
// ${t(1073741824,{units:"gb"})}

filterFileSize(1073741824 * 1024, { units: "tb" });
// ${t(1099511627776,{units:"tb"})}`)}}const K={name:"PageFilterFileSizeUnits",components:{AlohaExample:m},setup(){const{codeJs:e}=H();return{codeJs:e}}};function Y(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:"units","is-code-visible-default":!0},null,8,["code-js"])}const q=l(K,[["render",Y]]);function Q(){return{codeJs:f(()=>`filterFileSize(1024, { units: "" });
// ${t(1024,{units:""})}

filterFileSize(1048576, { units: "" });
// ${t(1048576,{units:""})}

filterFileSize(1073741824, { units: "" });
// ${t(1073741824,{units:""})}

filterFileSize(1073741824 * 1024, { units: "" });
// ${t(1099511627776,{units:""})}`)}}const W={name:"PageFilterFileSizeUnitsEmpty",components:{AlohaExample:m},setup(){const{codeJs:e}=Q();return{codeJs:e}}};function X(e,o,r,a,p,u){const n=i("aloha-example");return c(),_(n,{"code-js":e.codeJs,header:'units=""',"is-code-visible-default":!0},null,8,["code-js"])}const ee=l(W,[["render",X]]);function te(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_VALUE_"},{value:'[units="kb"]',types:["String"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_UNITS_"},{value:'[sourceUnits="b"]',types:["String"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_SOURCE_UNITS_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_DIGITS_"}]}}function ie(){return{pageTitle:"filterFileSize"}}function ne(){return{dataTranslate:["_A_FILE_SIZE_B_","_A_FILE_SIZE_KB_","_A_FILE_SIZE_MB_","_A_FILE_SIZE_GB_","_A_FILE_SIZE_TB_","_A_FILE_SIZE_PB_","_A_FILE_SIZE_EB_","_A_FILE_SIZE_ZB_","_A_FILE_SIZE_YB_"]}}const se={name:"PageFilterFileSize",components:{AlohaPage:T,AlohaTableTranslate:h,ATranslation:U,PageFilterArguments:x,PageFilterFileSizeDigits:y,PageFilterFileSizeExample:M,PageFilterFileSizeSourceUnits:w,PageFilterFileSizeUnits:q,PageFilterFileSizeUnitsEmpty:ee,PageFilterImportCompositionApi:B,PageFilterImportFunction:J,PageFilterTest:L},setup(){const{pageTitle:e}=ie(),{dataTranslate:o}=ne(),{argumentsText:r}=te();return{argumentsText:r,dataTranslate:o,pageTitle:e,test:v}}};function oe(e,o,r,a,p,u){const n=i("a-translation"),d=i("page-filter-import-function"),g=i("page-filter-import-composition-api"),F=i("page-filter-arguments"),S=i("page-filter-file-size-example"),$=i("page-filter-file-size-units"),E=i("page-filter-file-size-units-empty"),I=i("page-filter-file-size-source-units"),z=i("page-filter-file-size-digits"),A=i("aloha-table-translate"),b=i("page-filter-test"),P=i("aloha-page");return c(),_(P,{"page-title":e.pageTitle},{body:Z(()=>[s(n,{tag:"p",html:"_PAGE_FILTER_FILE_SIZE_DESCRIPTION_"}),s(d,{"function-name":"filterFileSize","type-import":"filters"}),s(g,{"function-name":"filterFileSize"}),s(F,{"arguments-text":e.argumentsText,"function-description":'filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] })'},null,8,["arguments-text"]),s(S),s($),s(E),s(I),s(z),s(A,{data:e.dataTranslate},null,8,["data"]),s(b,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const be=l(se,[["render",oe]]);export{be as default};
