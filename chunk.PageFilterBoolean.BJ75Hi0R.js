import{Ct as e,Tt as t,Ut as n,kt as r,qt as i,zt as a}from"./chunk.vendor.CZPox1kV.js";import{Tt as o,Z as s,t as c}from"./bundle.index.CLtYDDlb.js";import{n as l,t as u}from"./chunk.AlohaExample.BFgfeYtr.js";import{n as d,r as f,t as p}from"./chunk.PageFilterTest.DEb_j_8g.js";import{t as m}from"./chunk.PageFilterImportCompositionApi.D-8n-B7g.js";import{t as h}from"./chunk.filterBoolean.test.fVPfxC2H.js";function g(){return{codeJs:e(()=>`filterBoolean(true);
// ${o(!0)}
filterBoolean(false);
// ${o(!1)}

filterBoolean(1);
// ${o(1)}
filterBoolean(0);
// ${o(0)}

filterBoolean("aloha");
// ${o(`aloha`)}
filterBoolean("");
// ${o(``)}`)}}var _={name:`PageFilterBooleanExample`,components:{AlohaExample:u},setup(){let{codeJs:e}=g();return{codeJs:e}}};function v(e,r,i,o,s,c){let l=n(`aloha-example`);return a(),t(l,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var y=c(_,[[`render`,v]]);function b(){return{codeJs:e(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${o(!0,{trueValue:`1`,falseValue:`0`})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${o(!1,{trueValue:`1`,falseValue:`0`})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${o(1,{trueValue:`true`,falseValue:`false`})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${o(0,{trueValue:`true`,falseValue:`false`})}`)}}var x={name:`PageFilterBooleanTrueFalseValues`,components:{AlohaExample:u},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(e,r,i,o,s,c){let l=n(`aloha-example`);return a(),t(l,{"code-js":e.codeJs,header:`trueValue, falseValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=c(x,[[`render`,S]]);function w(){return{codeJs:e(()=>`filterBoolean(null, { useNil: true });
// ${o(null,{useNil:!0})}
filterBoolean(null, { useNil: false });
// ${o(null,{useNil:!1})}

filterBoolean(undefined, { useNil: true });
// ${o(void 0,{useNil:!0})}
filterBoolean(undefined, { useNil: false });
// ${o(void 0,{useNil:!1})}

filterBoolean("null", { useNil: true });
// ${o(`null`,{useNil:!0})}
filterBoolean("null", { useNil: false });
// ${o(`null`,{useNil:!1})}

filterBoolean("undefined", { useNil: true });
// ${o(`undefined`,{useNil:!0})}
filterBoolean("undefined", { useNil: false });
// ${o(`undefined`,{useNil:!1})}`)}}var T={name:`PageFilterBooleanUseNil`,components:{AlohaExample:u},setup(){let{codeJs:e}=w();return{codeJs:e}}};function E(e,r,i,o,s,c){let l=n(`aloha-example`);return a(),t(l,{"code-js":e.codeJs,header:`useNil`,"is-code-visible-default":!0},null,8,[`code-js`])}var D=c(T,[[`render`,E]]);function O(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_`},{value:`[trueValue="_YES_"]`,types:[`String`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_`},{value:`[falseValue="_NO_"]`,types:[`String`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_`},{value:`[useNil=true]`,types:[`Boolean`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_`}]}}function k(){return{pageTitle:`filterBoolean`}}var A={name:`PageFilterBoolean`,components:{AlohaPage:l,ATranslation:s,PageFilterArguments:f,PageFilterBooleanExample:y,PageFilterBooleanTrueFalseValues:C,PageFilterBooleanUseNil:D,PageFilterImportCompositionApi:m,PageFilterImportFunction:d,PageFilterTest:p},setup(){let{pageTitle:e}=k(),{argumentsText:t}=O();return{argumentsText:t,pageTitle:e,test:h}}};function j(e,o,s,c,l,u){let d=n(`a-translation`),f=n(`page-filter-import-function`),p=n(`page-filter-import-composition-api`),m=n(`page-filter-arguments`),h=n(`page-filter-boolean-example`),g=n(`page-filter-boolean-true-false-values`),_=n(`page-filter-boolean-use-nil`),v=n(`page-filter-test`),y=n(`aloha-page`);return a(),t(y,{"page-title":e.pageTitle},{body:i(()=>[r(d,{tag:`p`,html:`_PAGE_FILTER_BOOLEAN_DESCRIPTION_`}),r(f,{"function-name":`filterBoolean`,"type-import":`filters`}),r(p,{"function-name":`filterBoolean`}),r(m,{"function-description":`filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })`,"arguments-text":e.argumentsText},null,8,[`arguments-text`]),r(h),r(g),r(_),r(v,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var M=c(A,[[`render`,j]]);export{M as default};