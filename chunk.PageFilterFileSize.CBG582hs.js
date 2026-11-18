import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{t}from"./chunk.AlohaTableTranslate.BDkz3ESy.js";import{n,r,t as i}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as a}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Ft as o,Nt as s,Xt as c,en as l,in as u,zt as d}from"./chunk.vendor.Cx127fe1.js";import{bt as f,et as p}from"./bundle.index.Csp1_sOL.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as h}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";import{t as g}from"./chunk.filterBoolean.test.fVPfxC2H.js";function _(){return{codeJs:s(()=>`filterFileSize(1024, { digits: 0 });
// ${f(1024,{digits:0})}

filterFileSize(10241, { digits: 2 });
// ${f(10241,{digits:2})}`)}}var v={name:`PageFilterFileSizeDigits`,components:{AlohaExample:a},setup(){let{codeJs:e}=_();return{codeJs:e}}};function y(e,t,n,r,i,a){let s=l(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var b=m(v,[[`render`,y]]);function x(){return{codeJs:s(()=>`filterFileSize(2000);
// ${f(2e3)}

filterFileSize(1024);
// ${f(1024)}`)}}var S={name:`PageFilterFileSizeExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=x();return{codeJs:e}}};function C(e,t,n,r,i,a){let s=l(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var w=m(S,[[`render`,C]]);function T(){return{codeJs:s(()=>`filterFileSize(1024, { sourceUnits: "b" });
// ${f(1024,{sourceUnits:`b`})}

filterFileSize(2, { sourceUnits: "kb" });
// ${f(2,{sourceUnits:`kb`})}

filterFileSize(1, { sourceUnits: "mb" });
// ${f(1,{sourceUnits:`mb`})}

filterFileSize(0.1, { sourceUnits: "gb" });
// ${f(.1,{sourceUnits:`gb`})}

filterFileSize(0.0001, { sourceUnits: "tb" });
// ${f(1e-4,{sourceUnits:`tb`})}`)}}var E={name:`PageFilterFileSizeSourceUnits`,components:{AlohaExample:a},setup(){let{codeJs:e}=T();return{codeJs:e}}};function D(e,t,n,r,i,a){let s=l(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`sourceUnits`,"is-code-visible-default":!0},null,8,[`code-js`])}var O=m(E,[[`render`,D]]);function k(){return{codeJs:s(()=>`filterFileSize(1024, { units: "b" });
// ${f(1024,{units:`b`})}

filterFileSize(1024, { units: "kb" });
// ${f(1024,{units:`kb`})}

filterFileSize(1048576, { units: "mb" });
// ${f(1048576,{units:`mb`})}

filterFileSize(1073741824, { units: "gb" });
// ${f(1073741824,{units:`gb`})}

filterFileSize(1073741824 * 1024, { units: "tb" });
// ${f(1099511627776,{units:`tb`})}`)}}var A={name:`PageFilterFileSizeUnits`,components:{AlohaExample:a},setup(){let{codeJs:e}=k();return{codeJs:e}}};function j(e,t,n,r,i,a){let s=l(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`units`,"is-code-visible-default":!0},null,8,[`code-js`])}var M=m(A,[[`render`,j]]);function N(){return{codeJs:s(()=>`filterFileSize(1024, { units: "" });
// ${f(1024,{units:``})}

filterFileSize(1048576, { units: "" });
// ${f(1048576,{units:``})}

filterFileSize(1073741824, { units: "" });
// ${f(1073741824,{units:``})}

filterFileSize(1073741824 * 1024, { units: "" });
// ${f(1099511627776,{units:``})}`)}}var P={name:`PageFilterFileSizeUnitsEmpty`,components:{AlohaExample:a},setup(){let{codeJs:e}=N();return{codeJs:e}}};function F(e,t,n,r,i,a){let s=l(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`units=""`,"is-code-visible-default":!0},null,8,[`code-js`])}var I=m(P,[[`render`,F]]);function L(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_VALUE_`},{value:`[units="kb"]`,types:[`String`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_UNITS_`},{value:`[sourceUnits="b"]`,types:[`String`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_SOURCE_UNITS_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_DIGITS_`}]}}function R(){return{pageTitle:`filterFileSize`}}function z(){return{dataTranslate:[`_A_FILE_SIZE_B_`,`_A_FILE_SIZE_KB_`,`_A_FILE_SIZE_MB_`,`_A_FILE_SIZE_GB_`,`_A_FILE_SIZE_TB_`,`_A_FILE_SIZE_PB_`,`_A_FILE_SIZE_EB_`,`_A_FILE_SIZE_ZB_`,`_A_FILE_SIZE_YB_`]}}var B={name:`PageFilterFileSize`,components:{AlohaPage:e,AlohaTableTranslate:t,ATranslation:p,PageFilterArguments:r,PageFilterFileSizeDigits:b,PageFilterFileSizeExample:w,PageFilterFileSizeSourceUnits:O,PageFilterFileSizeUnits:M,PageFilterFileSizeUnitsEmpty:I,PageFilterImportCompositionApi:h,PageFilterImportFunction:n,PageFilterTest:i},setup(){let{pageTitle:e}=R(),{dataTranslate:t}=z(),{argumentsText:n}=L();return{argumentsText:n,dataTranslate:t,pageTitle:e,test:g}}};function V(e,t,n,r,i,a){let s=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-file-size-example`),g=l(`page-filter-file-size-units`),_=l(`page-filter-file-size-units-empty`),v=l(`page-filter-file-size-source-units`),y=l(`page-filter-file-size-digits`),b=l(`aloha-table-translate`),x=l(`page-filter-test`),S=l(`aloha-page`);return c(),o(S,{"page-title":e.pageTitle},{body:u(()=>[d(s,{tag:`p`,html:`_PAGE_FILTER_FILE_SIZE_DESCRIPTION_`}),d(f,{"function-name":`filterFileSize`,"type-import":`filters`}),d(p,{"function-name":`filterFileSize`}),d(m,{"arguments-text":e.argumentsText,"function-description":`filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] })`},null,8,[`arguments-text`]),d(h),d(g),d(_),d(v),d(y),d(b,{data:e.dataTranslate},null,8,[`data`]),d(x,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var H=m(B,[[`render`,V]]);export{H as default};