import{A as p,a as V}from"./chunk.AlohaExample.A9Ef-QbL.js";import{aF as t,_ as r,A as T}from"./bundle.index.Dn7qpWjQ.js";import{P as x,a as F,b as h}from"./chunk.PageFilterTest.Dwl2cJEE.js";import{a as m,m as l,K as u,J as i,aK as I,P as o}from"./chunk.vendor.DQz1Isc4.js";import{P as J}from"./chunk.PageFilterImportCompositionApi.dDZ0bVyw.js";import{f as L}from"./chunk.filterBoolean.test.DygJ_39J.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function O(){return{codeJs:m(()=>`filterBoolean(true);
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
// ${t("")}`)}}const S={name:"PageFilterBooleanExample",components:{AlohaExample:p},setup(){const{codeJs:e}=O();return{codeJs:e}}};function v(e,n,s,_,f,c){const a=l("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const U=r(S,[["render",v]]);function b(){return{codeJs:m(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${t(!0,{trueValue:"1",falseValue:"0"})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${t(!1,{trueValue:"1",falseValue:"0"})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${t(1,{trueValue:"true",falseValue:"false"})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${t(0,{trueValue:"true",falseValue:"false"})}`)}}const R={name:"PageFilterBooleanTrueFalseValues",components:{AlohaExample:p},setup(){const{codeJs:e}=b();return{codeJs:e}}};function G(e,n,s,_,f,c){const a=l("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"trueValue, falseValue","is-code-visible-default":!0},null,8,["code-js"])}const y=r(R,[["render",G]]);function j(){return{codeJs:m(()=>`filterBoolean(null, { useNil: true });
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
// ${t("undefined",{useNil:!1})}`)}}const C={name:"PageFilterBooleanUseNil",components:{AlohaExample:p},setup(){const{codeJs:e}=j();return{codeJs:e}}};function M(e,n,s,_,f,c){const a=l("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}const k=r(C,[["render",M]]);function K(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]}}function Y(){return{pageTitle:"filterBoolean"}}const w={name:"PageFilterBoolean",components:{AlohaPage:V,ATranslation:T,PageFilterArguments:x,PageFilterBooleanExample:U,PageFilterBooleanTrueFalseValues:y,PageFilterBooleanUseNil:k,PageFilterImportCompositionApi:J,PageFilterImportFunction:F,PageFilterTest:h},setup(){const{pageTitle:e}=Y(),{argumentsText:n}=K();return{argumentsText:n,pageTitle:e,test:L}}};function D(e,n,s,_,f,c){const a=l("a-translation"),d=l("page-filter-import-function"),g=l("page-filter-import-composition-api"),$=l("page-filter-arguments"),B=l("page-filter-boolean-example"),A=l("page-filter-boolean-true-false-values"),N=l("page-filter-boolean-use-nil"),E=l("page-filter-test"),P=l("aloha-page");return i(),u(P,{"page-title":e.pageTitle},{body:I(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),o(d,{"function-name":"filterBoolean","type-import":"filters"}),o(g,{"function-name":"filterBoolean"}),o($,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),o(B),o(A),o(N),o(E,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const te=r(w,[["render",D]]);export{te as default};
