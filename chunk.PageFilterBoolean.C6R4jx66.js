import{t as e}from"./chunk.AlohaPage.CLNR4rDt.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.C3sgLedZ.js";import{t as i}from"./chunk.AlohaExample.hU-VY3yF.js";import{Bt as a,It as o,Pt as s,Zt as c,an as l,tn as u}from"./chunk.vendor.H0cZuFAV.js";import{Ot as d,et as f}from"./bundle.index.BGB9gPhL.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as m}from"./chunk.PageFilterImportCompositionApi.BK4FWSXR.js";import{t as h}from"./chunk.filterBoolean.test.fVPfxC2H.js";function g(){return{codeJs:s(()=>`filterBoolean(true);
// ${d(!0)}
filterBoolean(false);
// ${d(!1)}

filterBoolean(1);
// ${d(1)}
filterBoolean(0);
// ${d(0)}

filterBoolean("aloha");
// ${d(`aloha`)}
filterBoolean("");
// ${d(``)}`)}}var _={name:`PageFilterBooleanExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=g();return{codeJs:e}}};function v(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var y=p(_,[[`render`,v]]);function b(){return{codeJs:s(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${d(!0,{trueValue:`1`,falseValue:`0`})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${d(!1,{trueValue:`1`,falseValue:`0`})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${d(1,{trueValue:`true`,falseValue:`false`})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${d(0,{trueValue:`true`,falseValue:`false`})}`)}}var x={name:`PageFilterBooleanTrueFalseValues`,components:{AlohaExample:i},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`trueValue, falseValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=p(x,[[`render`,S]]);function w(){return{codeJs:s(()=>`filterBoolean(null, { useNil: true });
// ${d(null,{useNil:!0})}
filterBoolean(null, { useNil: false });
// ${d(null,{useNil:!1})}

filterBoolean(undefined, { useNil: true });
// ${d(void 0,{useNil:!0})}
filterBoolean(undefined, { useNil: false });
// ${d(void 0,{useNil:!1})}

filterBoolean("null", { useNil: true });
// ${d(`null`,{useNil:!0})}
filterBoolean("null", { useNil: false });
// ${d(`null`,{useNil:!1})}

filterBoolean("undefined", { useNil: true });
// ${d(`undefined`,{useNil:!0})}
filterBoolean("undefined", { useNil: false });
// ${d(`undefined`,{useNil:!1})}`)}}var T={name:`PageFilterBooleanUseNil`,components:{AlohaExample:i},setup(){let{codeJs:e}=w();return{codeJs:e}}};function E(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`useNil`,"is-code-visible-default":!0},null,8,[`code-js`])}var D=p(T,[[`render`,E]]);function O(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_`},{value:`[trueValue="_YES_"]`,types:[`String`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_`},{value:`[falseValue="_NO_"]`,types:[`String`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_`},{value:`[useNil=true]`,types:[`Boolean`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_`}]}}function k(){return{pageTitle:`filterBoolean`}}var A={name:`PageFilterBoolean`,components:{AlohaPage:e,ATranslation:f,PageFilterArguments:n,PageFilterBooleanExample:y,PageFilterBooleanTrueFalseValues:C,PageFilterBooleanUseNil:D,PageFilterImportCompositionApi:m,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=k(),{argumentsText:t}=O();return{argumentsText:t,pageTitle:e,test:h}}};function j(e,t,n,r,i,s){let d=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-boolean-example`),g=u(`page-filter-boolean-true-false-values`),_=u(`page-filter-boolean-use-nil`),v=u(`page-filter-test`),y=u(`aloha-page`);return c(),o(y,{"page-title":e.pageTitle},{body:l(()=>[a(d,{tag:`p`,html:`_PAGE_FILTER_BOOLEAN_DESCRIPTION_`}),a(f,{"function-name":`filterBoolean`,"type-import":`filters`}),a(p,{"function-name":`filterBoolean`}),a(m,{"function-description":`filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })`,"arguments-text":e.argumentsText},null,8,[`arguments-text`]),a(h),a(g),a(_),a(v,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var M=p(A,[[`render`,j]]);export{M as default};