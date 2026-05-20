import{A as c,a as P}from"./chunk.AlohaExample.DJGJP9Er.js";import{b as T,a as h,P as x}from"./chunk.PageFilterTest.DxCqTXIN.js";import{ao as t,ah as s,a3 as F}from"./bundle.index.8diqlMmu.js";import{aN as m,bc as u,aQ as i,bi as o,br as I,aV as a}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import{P as J}from"./chunk.PageFilterImportCompositionApi.6ZX2BXy9.js";import{f as L}from"./chunk.filterBoolean.test.9cX79x5q.js";import"./chunk.APageTabTitle.-kMqBjfq.js";import"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import"./chunk.translations-ar.2GEIsQx2.js";import"./chunk.translations-de.B3W8Bch8.js";import"./chunk.translations-en.D6ESzlsX.js";import"./chunk.translations-es.XiUlXUqv.js";import"./chunk.translations-fr.Vq0cpCce.js";import"./chunk.translations-hr.47g55_67.js";import"./chunk.translations-it.DbY58g7f.js";import"./chunk.translations-ru.B_xj7EMA.js";function b(){return{codeJs:m(()=>`filterBoolean(true);
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
// ${t("")}`)}}const O={name:"PageFilterBooleanExample",components:{AlohaExample:c},setup(){const{codeJs:e}=b();return{codeJs:e}}};function S(e,n,r,p,_,f){const l=o("aloha-example");return u(),i(l,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=s(O,[["render",S]]);function U(){return{codeJs:m(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${t(!0,{trueValue:"1",falseValue:"0"})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${t(!1,{trueValue:"1",falseValue:"0"})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${t(1,{trueValue:"true",falseValue:"false"})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${t(0,{trueValue:"true",falseValue:"false"})}`)}}const R={name:"PageFilterBooleanTrueFalseValues",components:{AlohaExample:c},setup(){const{codeJs:e}=U();return{codeJs:e}}};function G(e,n,r,p,_,f){const l=o("aloha-example");return u(),i(l,{"code-js":e.codeJs,header:"trueValue, falseValue","is-code-visible-default":!0},null,8,["code-js"])}const y=s(R,[["render",G]]);function j(){return{codeJs:m(()=>`filterBoolean(null, { useNil: true });
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
// ${t("undefined",{useNil:!1})}`)}}const C={name:"PageFilterBooleanUseNil",components:{AlohaExample:c},setup(){const{codeJs:e}=j();return{codeJs:e}}};function M(e,n,r,p,_,f){const l=o("aloha-example");return u(),i(l,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}const k=s(C,[["render",M]]);function Y(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]}}function w(){return{pageTitle:"filterBoolean"}}const D={name:"PageFilterBoolean",components:{AlohaPage:P,ATranslation:F,PageFilterArguments:x,PageFilterBooleanExample:v,PageFilterBooleanTrueFalseValues:y,PageFilterBooleanUseNil:k,PageFilterImportCompositionApi:J,PageFilterImportFunction:h,PageFilterTest:T},setup(){const{pageTitle:e}=w(),{argumentsText:n}=Y();return{argumentsText:n,pageTitle:e,test:L}}};function Q(e,n,r,p,_,f){const l=o("a-translation"),d=o("page-filter-import-function"),g=o("page-filter-import-composition-api"),$=o("page-filter-arguments"),B=o("page-filter-boolean-example"),N=o("page-filter-boolean-true-false-values"),A=o("page-filter-boolean-use-nil"),E=o("page-filter-test"),V=o("aloha-page");return u(),i(V,{"page-title":e.pageTitle},{body:I(()=>[a(l,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),a(d,{"function-name":"filterBoolean","type-import":"filters"}),a(g,{"function-name":"filterBoolean"}),a($,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),a(B),a(N),a(A),a(E,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const pe=s(D,[["render",Q]]);export{pe as default};
