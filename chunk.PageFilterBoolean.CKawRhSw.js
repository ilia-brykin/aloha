import{al as t,_ as s,A as P}from"./bundle.index.B2aaR4xj.js";import{a as c,O as u,b as o,Q as i,aR as T,V as l}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as m,a as x}from"./chunk.AlohaExample.B8t5sXI5.js";import{P as h,a as F,b as I}from"./chunk.PageFilterTest.1RZ8t2aV.js";import{P as J}from"./chunk.PageFilterImportCompositionApi.Bp80koOX.js";import{f as L}from"./chunk.filterBoolean.test.9cX79x5q.js";import"./chunk.translations-ar.Bm_TIgmU.js";import"./chunk.translations-de.hQOurFbu.js";import"./chunk.translations-en.C27usO-8.js";import"./chunk.translations-es.CWd7slww.js";import"./chunk.translations-fr.DDfPHPkk.js";import"./chunk.translations-hr.CtnKD3az.js";import"./chunk.translations-it.Cf9ZYxei.js";import"./chunk.translations-ru.CZ8Ez0gt.js";import"./chunk.APageTabTitle.6ZuxfiZq.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";function O(){return{codeJs:c(()=>`filterBoolean(true);
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
// ${t("")}`)}}const S={name:"PageFilterBooleanExample",components:{AlohaExample:m},setup(){const{codeJs:e}=O();return{codeJs:e}}};function b(e,n,r,p,_,f){const a=o("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=s(S,[["render",b]]);function R(){return{codeJs:c(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${t(!0,{trueValue:"1",falseValue:"0"})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${t(!1,{trueValue:"1",falseValue:"0"})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${t(1,{trueValue:"true",falseValue:"false"})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${t(0,{trueValue:"true",falseValue:"false"})}`)}}const U={name:"PageFilterBooleanTrueFalseValues",components:{AlohaExample:m},setup(){const{codeJs:e}=R();return{codeJs:e}}};function G(e,n,r,p,_,f){const a=o("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"trueValue, falseValue","is-code-visible-default":!0},null,8,["code-js"])}const y=s(U,[["render",G]]);function j(){return{codeJs:c(()=>`filterBoolean(null, { useNil: true });
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
// ${t("undefined",{useNil:!1})}`)}}const C={name:"PageFilterBooleanUseNil",components:{AlohaExample:m},setup(){const{codeJs:e}=j();return{codeJs:e}}};function M(e,n,r,p,_,f){const a=o("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}const k=s(C,[["render",M]]);function Y(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]}}function w(){return{pageTitle:"filterBoolean"}}const D={name:"PageFilterBoolean",components:{AlohaPage:x,ATranslation:P,PageFilterArguments:I,PageFilterBooleanExample:v,PageFilterBooleanTrueFalseValues:y,PageFilterBooleanUseNil:k,PageFilterImportCompositionApi:J,PageFilterImportFunction:F,PageFilterTest:h},setup(){const{pageTitle:e}=w(),{argumentsText:n}=Y();return{argumentsText:n,pageTitle:e,test:L}}};function Q(e,n,r,p,_,f){const a=o("a-translation"),d=o("page-filter-import-function"),g=o("page-filter-import-composition-api"),$=o("page-filter-arguments"),B=o("page-filter-boolean-example"),A=o("page-filter-boolean-true-false-values"),N=o("page-filter-boolean-use-nil"),E=o("page-filter-test"),V=o("aloha-page");return i(),u(V,{"page-title":e.pageTitle},{body:T(()=>[l(a,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),l(d,{"function-name":"filterBoolean","type-import":"filters"}),l(g,{"function-name":"filterBoolean"}),l($,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),l(B),l(A),l(N),l(E,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const pe=s(D,[["render",Q]]);export{pe as default};
