import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Ft as a,Nt as o,Xt as s,en as c,in as l,zt as u}from"./chunk.vendor.Cx127fe1.js";import{Ot as d,et as f}from"./bundle.index.Csp1_sOL.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as m}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";import{t as h}from"./chunk.filterBoolean.test.fVPfxC2H.js";function g(){return{codeJs:o(()=>`filterBoolean(true);
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
// ${d(``)}`)}}var _={name:`PageFilterBooleanExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=g();return{codeJs:e}}};function v(e,t,n,r,i,o){let l=c(`aloha-example`);return s(),a(l,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var y=p(_,[[`render`,v]]);function b(){return{codeJs:o(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${d(!0,{trueValue:`1`,falseValue:`0`})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${d(!1,{trueValue:`1`,falseValue:`0`})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${d(1,{trueValue:`true`,falseValue:`false`})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${d(0,{trueValue:`true`,falseValue:`false`})}`)}}var x={name:`PageFilterBooleanTrueFalseValues`,components:{AlohaExample:i},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(e,t,n,r,i,o){let l=c(`aloha-example`);return s(),a(l,{"code-js":e.codeJs,header:`trueValue, falseValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=p(x,[[`render`,S]]);function w(){return{codeJs:o(()=>`filterBoolean(null, { useNil: true });
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
// ${d(`undefined`,{useNil:!1})}`)}}var T={name:`PageFilterBooleanUseNil`,components:{AlohaExample:i},setup(){let{codeJs:e}=w();return{codeJs:e}}};function E(e,t,n,r,i,o){let l=c(`aloha-example`);return s(),a(l,{"code-js":e.codeJs,header:`useNil`,"is-code-visible-default":!0},null,8,[`code-js`])}var D=p(T,[[`render`,E]]);function O(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_`},{value:`[trueValue="_YES_"]`,types:[`String`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_`},{value:`[falseValue="_NO_"]`,types:[`String`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_`},{value:`[useNil=true]`,types:[`Boolean`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_`}]}}function k(){return{pageTitle:`filterBoolean`}}var A={name:`PageFilterBoolean`,components:{AlohaPage:e,ATranslation:f,PageFilterArguments:n,PageFilterBooleanExample:y,PageFilterBooleanTrueFalseValues:C,PageFilterBooleanUseNil:D,PageFilterImportCompositionApi:m,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=k(),{argumentsText:t}=O();return{argumentsText:t,pageTitle:e,test:h}}};function j(e,t,n,r,i,o){let d=c(`a-translation`),f=c(`page-filter-import-function`),p=c(`page-filter-import-composition-api`),m=c(`page-filter-arguments`),h=c(`page-filter-boolean-example`),g=c(`page-filter-boolean-true-false-values`),_=c(`page-filter-boolean-use-nil`),v=c(`page-filter-test`),y=c(`aloha-page`);return s(),a(y,{"page-title":e.pageTitle},{body:l(()=>[u(d,{tag:`p`,html:`_PAGE_FILTER_BOOLEAN_DESCRIPTION_`}),u(f,{"function-name":`filterBoolean`,"type-import":`filters`}),u(p,{"function-name":`filterBoolean`}),u(m,{"function-description":`filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })`,"arguments-text":e.argumentsText},null,8,[`arguments-text`]),u(h),u(g),u(_),u(v,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var M=p(A,[[`render`,j]]);export{M as default};