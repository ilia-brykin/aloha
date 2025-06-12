import{A as c,a as P}from"./chunk.AlohaExample.CicgCsbJ.js";import{P as T,a as x,b as h}from"./chunk.PageFilterTest.B23ASMNY.js";import{aq as t,_ as s,A as F}from"./bundle.index.BlTXutOO.js";import{d as m,U as u,e as o,V as i,aS as I,Z as l}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.DdGPhwvj.js";import{P as J}from"./chunk.PageFilterImportCompositionApi.5CUhmQb1.js";import{f as L}from"./chunk.filterBoolean.test.9cX79x5q.js";import"./chunk.APageTabTitle.B2aZEah9.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.translations-ar._uz0yDwl.js";import"./chunk.translations-de.COE9j2lD.js";import"./chunk.translations-en.CkuqRVlP.js";import"./chunk.translations-es.Be1FWYUt.js";import"./chunk.translations-fr.DQ2na-o9.js";import"./chunk.translations-hr.PH2dXFBk.js";import"./chunk.translations-it.DG_WjIxj.js";import"./chunk.translations-ru.BJehrSwI.js";function S(){return{codeJs:m(()=>`filterBoolean(true);
// ${t(!0)}
filterBoolean(false);
// ${t(!1)}

filterBoolean(1);
// ${t(1)}
filterBoolean(0);
// ${t(0)}

filterBoolean("aloha");
// ${t("aloha")}
filterBoolean("");
// ${t("")}`)}}const O={name:"PageFilterBooleanExample",components:{AlohaExample:c},setup(){const{codeJs:e}=S();return{codeJs:e}}};function U(e,n,r,p,_,f){const a=o("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=s(O,[["render",U]]);function b(){return{codeJs:m(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${t(!0,{trueValue:"1",falseValue:"0"})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${t(!1,{trueValue:"1",falseValue:"0"})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${t(1,{trueValue:"true",falseValue:"false"})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${t(0,{trueValue:"true",falseValue:"false"})}`)}}const R={name:"PageFilterBooleanTrueFalseValues",components:{AlohaExample:c},setup(){const{codeJs:e}=b();return{codeJs:e}}};function G(e,n,r,p,_,f){const a=o("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"trueValue, falseValue","is-code-visible-default":!0},null,8,["code-js"])}const y=s(R,[["render",G]]);function j(){return{codeJs:m(()=>`filterBoolean(null, { useNil: true });
// ${t(null,{useNil:!0})}
filterBoolean(null, { useNil: false });
// ${t(null,{useNil:!1})}

filterBoolean(undefined, { useNil: true });
// ${t(void 0,{useNil:!0})}
filterBoolean(undefined, { useNil: false });
// ${t(void 0,{useNil:!1})}

filterBoolean("null", { useNil: true });
// ${t("null",{useNil:!0})}
filterBoolean("null", { useNil: false });
// ${t("null",{useNil:!1})}

filterBoolean("undefined", { useNil: true });
// ${t("undefined",{useNil:!0})}
filterBoolean("undefined", { useNil: false });
// ${t("undefined",{useNil:!1})}`)}}const C={name:"PageFilterBooleanUseNil",components:{AlohaExample:c},setup(){const{codeJs:e}=j();return{codeJs:e}}};function M(e,n,r,p,_,f){const a=o("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}const k=s(C,[["render",M]]);function Y(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]}}function q(){return{pageTitle:"filterBoolean"}}const w={name:"PageFilterBoolean",components:{AlohaPage:P,ATranslation:F,PageFilterArguments:h,PageFilterBooleanExample:v,PageFilterBooleanTrueFalseValues:y,PageFilterBooleanUseNil:k,PageFilterImportCompositionApi:J,PageFilterImportFunction:x,PageFilterTest:T},setup(){const{pageTitle:e}=q(),{argumentsText:n}=Y();return{argumentsText:n,pageTitle:e,test:L}}};function D(e,n,r,p,_,f){const a=o("a-translation"),d=o("page-filter-import-function"),g=o("page-filter-import-composition-api"),$=o("page-filter-arguments"),B=o("page-filter-boolean-example"),A=o("page-filter-boolean-true-false-values"),N=o("page-filter-boolean-use-nil"),E=o("page-filter-test"),V=o("aloha-page");return i(),u(V,{"page-title":e.pageTitle},{body:I(()=>[l(a,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),l(d,{"function-name":"filterBoolean","type-import":"filters"}),l(g,{"function-name":"filterBoolean"}),l($,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),l(B),l(A),l(N),l(E,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const pe=s(w,[["render",D]]);export{pe as default};
