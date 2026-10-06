import{Ct as e,Tt as t,Ut as n,kt as r,qt as i,zt as a}from"./chunk.vendor.CZPox1kV.js";import{Z as o,_t as s,t as c}from"./bundle.index.BmSiyQNH.js";import{n as l,t as u}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as d}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";import{n as f,r as p,t as m}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as h}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";import{t as g}from"./chunk.filterBoolean.test.fVPfxC2H.js";function _(){return{codeJs:e(()=>`filterFileSize(1024, { digits: 0 });
// ${s(1024,{digits:0})}

filterFileSize(10241, { digits: 2 });
// ${s(10241,{digits:2})}`)}}var v={name:`PageFilterFileSizeDigits`,components:{AlohaExample:u},setup(){let{codeJs:e}=_();return{codeJs:e}}};function y(e,r,i,o,s,c){let l=n(`aloha-example`);return a(),t(l,{"code-js":e.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var b=c(v,[[`render`,y]]);function x(){return{codeJs:e(()=>`filterFileSize(2000);
// ${s(2e3)}

filterFileSize(1024);
// ${s(1024)}`)}}var S={name:`PageFilterFileSizeExample`,components:{AlohaExample:u},setup(){let{codeJs:e}=x();return{codeJs:e}}};function C(e,r,i,o,s,c){let l=n(`aloha-example`);return a(),t(l,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var w=c(S,[[`render`,C]]);function T(){return{codeJs:e(()=>`filterFileSize(1024, { sourceUnits: "b" });
// ${s(1024,{sourceUnits:`b`})}

filterFileSize(2, { sourceUnits: "kb" });
// ${s(2,{sourceUnits:`kb`})}

filterFileSize(1, { sourceUnits: "mb" });
// ${s(1,{sourceUnits:`mb`})}

filterFileSize(0.1, { sourceUnits: "gb" });
// ${s(.1,{sourceUnits:`gb`})}

filterFileSize(0.0001, { sourceUnits: "tb" });
// ${s(1e-4,{sourceUnits:`tb`})}`)}}var E={name:`PageFilterFileSizeSourceUnits`,components:{AlohaExample:u},setup(){let{codeJs:e}=T();return{codeJs:e}}};function D(e,r,i,o,s,c){let l=n(`aloha-example`);return a(),t(l,{"code-js":e.codeJs,header:`sourceUnits`,"is-code-visible-default":!0},null,8,[`code-js`])}var O=c(E,[[`render`,D]]);function k(){return{codeJs:e(()=>`filterFileSize(1024, { units: "b" });
// ${s(1024,{units:`b`})}

filterFileSize(1024, { units: "kb" });
// ${s(1024,{units:`kb`})}

filterFileSize(1048576, { units: "mb" });
// ${s(1048576,{units:`mb`})}

filterFileSize(1073741824, { units: "gb" });
// ${s(1073741824,{units:`gb`})}

filterFileSize(1073741824 * 1024, { units: "tb" });
// ${s(1099511627776,{units:`tb`})}`)}}var A={name:`PageFilterFileSizeUnits`,components:{AlohaExample:u},setup(){let{codeJs:e}=k();return{codeJs:e}}};function j(e,r,i,o,s,c){let l=n(`aloha-example`);return a(),t(l,{"code-js":e.codeJs,header:`units`,"is-code-visible-default":!0},null,8,[`code-js`])}var M=c(A,[[`render`,j]]);function N(){return{codeJs:e(()=>`filterFileSize(1024, { units: "" });
// ${s(1024,{units:``})}

filterFileSize(1048576, { units: "" });
// ${s(1048576,{units:``})}

filterFileSize(1073741824, { units: "" });
// ${s(1073741824,{units:``})}

filterFileSize(1073741824 * 1024, { units: "" });
// ${s(1099511627776,{units:``})}`)}}var P={name:`PageFilterFileSizeUnitsEmpty`,components:{AlohaExample:u},setup(){let{codeJs:e}=N();return{codeJs:e}}};function F(e,r,i,o,s,c){let l=n(`aloha-example`);return a(),t(l,{"code-js":e.codeJs,header:`units=""`,"is-code-visible-default":!0},null,8,[`code-js`])}var I=c(P,[[`render`,F]]);function L(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_VALUE_`},{value:`[units="kb"]`,types:[`String`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_UNITS_`},{value:`[sourceUnits="b"]`,types:[`String`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_SOURCE_UNITS_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_DIGITS_`}]}}function R(){return{pageTitle:`filterFileSize`}}function z(){return{dataTranslate:[`_A_FILE_SIZE_B_`,`_A_FILE_SIZE_KB_`,`_A_FILE_SIZE_MB_`,`_A_FILE_SIZE_GB_`,`_A_FILE_SIZE_TB_`,`_A_FILE_SIZE_PB_`,`_A_FILE_SIZE_EB_`,`_A_FILE_SIZE_ZB_`,`_A_FILE_SIZE_YB_`]}}var B={name:`PageFilterFileSize`,components:{AlohaPage:l,AlohaTableTranslate:d,ATranslation:o,PageFilterArguments:p,PageFilterFileSizeDigits:b,PageFilterFileSizeExample:w,PageFilterFileSizeSourceUnits:O,PageFilterFileSizeUnits:M,PageFilterFileSizeUnitsEmpty:I,PageFilterImportCompositionApi:h,PageFilterImportFunction:f,PageFilterTest:m},setup(){let{pageTitle:e}=R(),{dataTranslate:t}=z(),{argumentsText:n}=L();return{argumentsText:n,dataTranslate:t,pageTitle:e,test:g}}};function V(e,o,s,c,l,u){let d=n(`a-translation`),f=n(`page-filter-import-function`),p=n(`page-filter-import-composition-api`),m=n(`page-filter-arguments`),h=n(`page-filter-file-size-example`),g=n(`page-filter-file-size-units`),_=n(`page-filter-file-size-units-empty`),v=n(`page-filter-file-size-source-units`),y=n(`page-filter-file-size-digits`),b=n(`aloha-table-translate`),x=n(`page-filter-test`),S=n(`aloha-page`);return a(),t(S,{"page-title":e.pageTitle},{body:i(()=>[r(d,{tag:`p`,html:`_PAGE_FILTER_FILE_SIZE_DESCRIPTION_`}),r(f,{"function-name":`filterFileSize`,"type-import":`filters`}),r(p,{"function-name":`filterFileSize`}),r(m,{"arguments-text":e.argumentsText,"function-description":`filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] })`},null,8,[`arguments-text`]),r(h),r(g),r(_),r(v),r(y),r(b,{data:e.dataTranslate},null,8,[`data`]),r(x,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var H=c(B,[[`render`,V]]);export{H as default};