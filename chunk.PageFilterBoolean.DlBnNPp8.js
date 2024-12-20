import{A as p,a as P}from"./chunk.AlohaExample.BLz9gN2Z.js";import{aB as t,_ as r,A as T}from"./bundle.index.DdISXs5g.js";import{P as x,a as h,b as F}from"./chunk.PageFilterTest.BPGpw9zC.js";import{a as m,k as l,J as u,H as i,aJ as J,O as o}from"./chunk.vendor.Ca3-nzbX.js";import{P as I}from"./chunk.PageFilterImportCompositionApi.ILIcSKMH.js";import{f as L}from"./chunk.filterBoolean.test.DygJ_39J.js";import"./chunk.vendor-lodash.-viuv_rg.js";function O(){return{codeJs:m(()=>`filterBoolean(true);
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
// ${t("undefined",{useNil:!1})}`)}}const C={name:"PageFilterBooleanUseNil",components:{AlohaExample:p},setup(){const{codeJs:e}=j();return{codeJs:e}}};function M(e,n,s,_,f,c){const a=l("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}const k=r(C,[["render",M]]);function Y(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]}}function w(){return{pageTitle:"filterBoolean"}}const D={name:"PageFilterBoolean",components:{AlohaPage:P,ATranslation:T,PageFilterArguments:x,PageFilterBooleanExample:U,PageFilterBooleanTrueFalseValues:y,PageFilterBooleanUseNil:k,PageFilterImportCompositionApi:I,PageFilterImportFunction:h,PageFilterTest:F},setup(){const{pageTitle:e}=w(),{argumentsText:n}=Y();return{argumentsText:n,pageTitle:e,test:L}}};function H(e,n,s,_,f,c){const a=l("a-translation"),d=l("page-filter-import-function"),g=l("page-filter-import-composition-api"),B=l("page-filter-arguments"),$=l("page-filter-boolean-example"),A=l("page-filter-boolean-true-false-values"),N=l("page-filter-boolean-use-nil"),E=l("page-filter-test"),V=l("aloha-page");return i(),u(V,{"page-title":e.pageTitle},{body:J(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),o(d,{"function-name":"filterBoolean","type-import":"filters"}),o(g,{"function-name":"filterBoolean"}),o(B,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),o($),o(A),o(N),o(E,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const ee=r(D,[["render",H]]);export{ee as default};
