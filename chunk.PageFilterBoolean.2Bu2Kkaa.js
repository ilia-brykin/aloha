import{A as p,a as P}from"./chunk.AlohaExample.CMUUEVcN.js";import{aD as t,_ as r,A as T}from"./bundle.index.DOWaPX07.js";import{P as x,a as h,b as F}from"./chunk.PageFilterTest.CqA3wSrh.js";import{a as m,B as u,C as i,m as l,L as I,G as o}from"./chunk.vendor.9_E-x6sT.js";import{P as L}from"./chunk.PageFilterImportCompositionApi.DTdLG250.js";import{f as J}from"./chunk.filterBoolean.test.DygJ_39J.js";import"./chunk.vendor-lodash.Cqnw6GrA.js";import"./chunk.vendor-tinymce.5PTU7oiI.js";function O(){return{codeJs:m(()=>`filterBoolean(true);
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
// ${t("")}`)}}const S={name:"PageFilterBooleanExample",components:{AlohaExample:p},setup(){const{codeJs:e}=O();return{codeJs:e}}};function v(e,n,s,_,f,c){const a=l("aloha-example");return u(),i(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const U=r(S,[["render",v]]);function b(){return{codeJs:m(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${t(!0,{trueValue:"1",falseValue:"0"})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${t(!1,{trueValue:"1",falseValue:"0"})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${t(1,{trueValue:"true",falseValue:"false"})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${t(0,{trueValue:"true",falseValue:"false"})}`)}}const G={name:"PageFilterBooleanTrueFalseValues",components:{AlohaExample:p},setup(){const{codeJs:e}=b();return{codeJs:e}}};function R(e,n,s,_,f,c){const a=l("aloha-example");return u(),i(a,{"code-js":e.codeJs,header:"trueValue, falseValue","is-code-visible-default":!0},null,8,["code-js"])}const y=r(G,[["render",R]]);function j(){return{codeJs:m(()=>`filterBoolean(null, { useNil: true });
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
// ${t("undefined",{useNil:!1})}`)}}const C={name:"PageFilterBooleanUseNil",components:{AlohaExample:p},setup(){const{codeJs:e}=j();return{codeJs:e}}};function M(e,n,s,_,f,c){const a=l("aloha-example");return u(),i(a,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}const k=r(C,[["render",M]]);function D(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]}}function Y(){return{pageTitle:"filterBoolean"}}const w={name:"PageFilterBoolean",components:{AlohaPage:P,ATranslation:T,PageFilterArguments:F,PageFilterBooleanExample:U,PageFilterBooleanTrueFalseValues:y,PageFilterBooleanUseNil:k,PageFilterImportCompositionApi:L,PageFilterImportFunction:h,PageFilterTest:x},setup(){const{pageTitle:e}=Y(),{argumentsText:n}=D();return{argumentsText:n,pageTitle:e,test:J}}};function q(e,n,s,_,f,c){const a=l("a-translation"),d=l("page-filter-import-function"),g=l("page-filter-import-composition-api"),B=l("page-filter-arguments"),$=l("page-filter-boolean-example"),A=l("page-filter-boolean-true-false-values"),N=l("page-filter-boolean-use-nil"),E=l("page-filter-test"),V=l("aloha-page");return u(),i(V,{"page-title":e.pageTitle},{body:I(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),o(d,{"function-name":"filterBoolean","type-import":"filters"}),o(g,{"function-name":"filterBoolean"}),o(B,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),o($),o(A),o(N),o(E,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const te=r(w,[["render",q]]);export{te as default};
