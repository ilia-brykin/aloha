import{A as c,a as P}from"./chunk.AlohaExample.C3VeuK1Z.js";import{P as T,a as x,b as h}from"./chunk.PageFilterTest.CFLRe-Vw.js";import{aK as t,_ as s,A as F}from"./bundle.index.5dnSgEX1.js";import{d as m,Y as u,W as i,f as o,aU as I,$ as l}from"./chunk.vendor.CWr53wb5.js";import"./chunk.vendor-lodash.CWoM99Se.js";import{P as J}from"./chunk.PageFilterImportCompositionApi.Bg3k9bnp.js";import{f as L}from"./chunk.filterBoolean.test.9cX79x5q.js";import"./chunk.APageTabTitle.CjJIu-bA.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function O(){return{codeJs:m(()=>`filterBoolean(true);
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
// ${t("")}`)}}const S={name:"PageFilterBooleanExample",components:{AlohaExample:c},setup(){const{codeJs:e}=O();return{codeJs:e}}};function U(e,n,r,p,_,f){const a=o("aloha-example");return u(),i(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=s(S,[["render",U]]);function b(){return{codeJs:m(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${t(!0,{trueValue:"1",falseValue:"0"})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${t(!1,{trueValue:"1",falseValue:"0"})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${t(1,{trueValue:"true",falseValue:"false"})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${t(0,{trueValue:"true",falseValue:"false"})}`)}}const R={name:"PageFilterBooleanTrueFalseValues",components:{AlohaExample:c},setup(){const{codeJs:e}=b();return{codeJs:e}}};function G(e,n,r,p,_,f){const a=o("aloha-example");return u(),i(a,{"code-js":e.codeJs,header:"trueValue, falseValue","is-code-visible-default":!0},null,8,["code-js"])}const y=s(R,[["render",G]]);function j(){return{codeJs:m(()=>`filterBoolean(null, { useNil: true });
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
// ${t("undefined",{useNil:!1})}`)}}const C={name:"PageFilterBooleanUseNil",components:{AlohaExample:c},setup(){const{codeJs:e}=j();return{codeJs:e}}};function M(e,n,r,p,_,f){const a=o("aloha-example");return u(),i(a,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}const Y=s(C,[["render",M]]);function k(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]}}function w(){return{pageTitle:"filterBoolean"}}const D={name:"PageFilterBoolean",components:{AlohaPage:P,ATranslation:F,PageFilterArguments:h,PageFilterBooleanExample:v,PageFilterBooleanTrueFalseValues:y,PageFilterBooleanUseNil:Y,PageFilterImportCompositionApi:J,PageFilterImportFunction:x,PageFilterTest:T},setup(){const{pageTitle:e}=w(),{argumentsText:n}=k();return{argumentsText:n,pageTitle:e,test:L}}};function K(e,n,r,p,_,f){const a=o("a-translation"),d=o("page-filter-import-function"),g=o("page-filter-import-composition-api"),$=o("page-filter-arguments"),B=o("page-filter-boolean-example"),A=o("page-filter-boolean-true-false-values"),N=o("page-filter-boolean-use-nil"),E=o("page-filter-test"),V=o("aloha-page");return u(),i(V,{"page-title":e.pageTitle},{body:I(()=>[l(a,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),l(d,{"function-name":"filterBoolean","type-import":"filters"}),l(g,{"function-name":"filterBoolean"}),l($,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),l(B),l(A),l(N),l(E,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const pe=s(D,[["render",K]]);export{pe as default};
