import{A as c,a as P}from"./chunk.AlohaExample.BcPB8Qry.js";import{ak as t,_ as s,A as T}from"./bundle.index.q0oygsl8.js";import{P as x,a as h,b as F}from"./chunk.PageFilterTest.CP56JLwm.js";import{a as m,k as o,Q as u,O as i,aQ as I,V as l}from"./chunk.vendor.C_nZR3i9.js";import"./chunk.vendor-lodash.BzDRedSD.js";import{P as J}from"./chunk.PageFilterImportCompositionApi.bTbE2TYc.js";import{f as L}from"./chunk.filterBoolean.test.DygJ_39J.js";import"./chunk.APageTabTitle.YhYn5T6u.js";import"./chunk.AlohaHighlightjs.zzXDUp_j.js";import"./chunk.translations-ar.CGL8aVo9.js";import"./chunk.translations-de.RdwLQ5AB.js";import"./chunk.translations-en.DDBINhYl.js";import"./chunk.translations-es.Db8DPcgi.js";import"./chunk.translations-fr.Bj0H1VLd.js";import"./chunk.translations-hr.D6Hyl4N8.js";import"./chunk.translations-it.BR5rbHtH.js";import"./chunk.translations-ru.BkDZ_0rg.js";function O(){return{codeJs:m(()=>`filterBoolean(true);
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
// ${t("")}`)}}const S={name:"PageFilterBooleanExample",components:{AlohaExample:c},setup(){const{codeJs:e}=O();return{codeJs:e}}};function v(e,n,r,p,_,f){const a=o("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const U=s(S,[["render",v]]);function b(){return{codeJs:m(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
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
// ${t("undefined",{useNil:!1})}`)}}const C={name:"PageFilterBooleanUseNil",components:{AlohaExample:c},setup(){const{codeJs:e}=j();return{codeJs:e}}};function k(e,n,r,p,_,f){const a=o("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}const M=s(C,[["render",k]]);function Q(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]}}function Y(){return{pageTitle:"filterBoolean"}}const w={name:"PageFilterBoolean",components:{AlohaPage:P,ATranslation:T,PageFilterArguments:x,PageFilterBooleanExample:U,PageFilterBooleanTrueFalseValues:y,PageFilterBooleanUseNil:M,PageFilterImportCompositionApi:J,PageFilterImportFunction:h,PageFilterTest:F},setup(){const{pageTitle:e}=Y(),{argumentsText:n}=Q();return{argumentsText:n,pageTitle:e,test:L}}};function D(e,n,r,p,_,f){const a=o("a-translation"),d=o("page-filter-import-function"),g=o("page-filter-import-composition-api"),$=o("page-filter-arguments"),B=o("page-filter-boolean-example"),A=o("page-filter-boolean-true-false-values"),N=o("page-filter-boolean-use-nil"),E=o("page-filter-test"),V=o("aloha-page");return i(),u(V,{"page-title":e.pageTitle},{body:I(()=>[l(a,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),l(d,{"function-name":"filterBoolean","type-import":"filters"}),l(g,{"function-name":"filterBoolean"}),l($,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),l(B),l(A),l(N),l(E,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const pe=s(w,[["render",D]]);export{pe as default};
