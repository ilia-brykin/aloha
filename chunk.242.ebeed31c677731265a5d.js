"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[242],{9174:(r,e,a)=>{a.r(e),a.d(e,{default:()=>B});var o=a(2147);const t=[(0,o._)("h1",null,"PageApi",-1)];var s=a(8615),l=a(3059);const n=(0,o.iH)("/api/"),u=(0,o.iH)(s.Z.create()),p=(0,o.iH)({}),d=(0,o.iH)({}),i=(0,o.iH)({}),b={},c={},h=(0,o.iH)({setUrlForArray:function({array:r,url:e,id:a}){if(!r.length)return e;let o=e||"";return"fields"===a||"ordering"===a?(o&&(o+="&"),o+=`${a}=`,o+=r.join(",")):(0,l.forEach)(r,(r=>{o&&(o+="&"),o+=`${a}=${r}`})),o}});function f({all:r=!1,abortGroup:e,excludeAbortGroup:a}){const o=function({excludeAbortGroup:r}){const e={};return r&&((0,l.isString)(r)?e[r]=!0:(0,l.isArray)(r)&&(0,l.forEach)(r,(r=>{e[r]=!0}))),e}({excludeAbortGroup:a});if(r)(0,l.forEach)(b,((r,a)=>{o[a]||(r.abort(),delete b[a],c[e]&&delete c[e])}));else if(e){let r=[];(0,l.isString)(e)?r.push(e):(0,l.isArray)(e)&&(r=e),(0,l.forEach)(r,(r=>{o[r]||b[r]&&(b[r].abort(),delete b[r],c[e]&&delete c[e])}))}}function m(){return{abortHttp:f,deleteHttp:G,getHttp:y,getListHttp:E,getOptionsHttp:g,patchHttp:v,postHttp:H,putHttp:P}}function y({url:r,urlBase:e,data:a,urlParams:o={},headerParams:t,responseType:s,apiSaveId:l,keyId:n,fullResponse:u,showError:p,ignoreErrorHandler:d=!1,abortable:i=!0,abortGroup:b=""}){return w({methodHttp:"get",url:r,urlBase:e,urlParams:o,data:a,headerParams:t,responseType:s,apiSaveId:l,keyId:n,fullResponse:u,showError:p,ignoreErrorHandler:d,abortable:i,abortGroup:b})}function E({url:r,urlBase:e,data:a,urlParams:o={},headerParams:t,responseType:s,apiSaveId:l,keyId:n,fullResponse:u,showError:p,ignoreErrorHandler:d=!1,abortable:i=!0,abortGroup:b=""}){return w({methodHttp:"get",url:r,urlBase:e,urlParams:o,data:a,headerParams:t,responseType:s,apiSaveId:l,keyId:n,fullResponse:u,showError:p,ignoreErrorHandler:d,abortable:i,abortGroup:b,expectedList:!0})}function g({url:r,urlBase:e,data:a,urlParams:o={},headerParams:t,responseType:s,keyId:l,fullResponse:n,showError:u,ignoreErrorHandler:p=!1,abortable:d=!0,abortGroup:i=""}){return w({methodHttp:"options",url:r,urlBase:e,urlParams:o,data:a,headerParams:t,responseType:s,keyId:l,fullResponse:n,showError:u,abortable:d,abortGroup:i,ignoreErrorHandler:p})}function H({url:r,data:e,urlParams:a={},headerParams:o,responseType:t,fullResponse:s,showError:l,ignoreErrorHandler:n=!1,abortable:u=!0,abortGroup:p=""}){return w({methodHttp:"post",url:r,urlParams:a,data:e,headerParams:o,responseType:t,fullResponse:s,showError:l,abortable:u,abortGroup:p,ignoreErrorHandler:n})}function P({url:r,urlBase:e,data:a,urlParams:o={},headerParams:t,responseType:s,fullResponse:l,showError:n,ignoreErrorHandler:u=!1,abortable:p=!0,abortGroup:d=""}){return w({methodHttp:"put",url:r,urlBase:e,urlParams:o,data:a,headerParams:t,responseType:s,fullResponse:l,showError:n,abortable:p,abortGroup:d,ignoreErrorHandler:u})}function v({url:r,urlBase:e,data:a,urlParams:o={},headerParams:t,responseType:s,fullResponse:l,showError:n,ignoreErrorHandler:u=!1,abortable:p=!0,abortGroup:d=""}){return w({methodHttp:"patch",url:r,urlBase:e,urlParams:o,data:a,headerParams:t,responseType:s,fullResponse:l,showError:n,abortable:p,abortGroup:d,ignoreErrorHandler:u})}function G({url:r,urlBase:e,data:a,urlParams:o={},headerParams:t,responseType:s,fullResponse:l,showError:n,ignoreErrorHandler:u=!1,abortable:p=!0,abortGroup:d=""}){return w({methodHttp:"delete",url:r,urlBase:e,urlParams:o,data:a,headerParams:t,responseType:s,fullResponse:l,showError:n,abortable:p,abortGroup:d,ignoreErrorHandler:u})}function w({methodHttp:r,url:e,urlBase:a,urlParams:o,data:t,headerParams:s={},responseType:f="json",apiSaveId:m,keyId:y,fullResponse:E,showError:g=!1,ignoreErrorHandler:H=!1,abortable:P=!0,abortGroup:v="",expectedList:G}){let w;if(m&&(w=p.value[m],w&&w.loading))return w.promise;const T=new Promise(((T,B)=>{if(w&&!w.loading){if(y){if(w.keyData)return T(w.keyData);const r=k({data:w.data,keyId:y});return p.value[m].keyData=r,T(r)}return T(w.data)}const I=function({url:r,params:e}){const a=r||"";let o="";(0,l.forEach)(e,((r,e)=>{(0,l.isArray)(r)?o=h.value.setUrlForArray({id:e,array:r,url:o}):(0,l.isPlainObject)(r)?(0,l.forEach)(r,((r,e)=>{r&&(o&&(o+="&"),o+=`${e}=${r}`)})):(0,l.isNil)(r)||(o&&(o+="&"),o+=`${e}=${r}`)}));const t=o&&a?-1===a.indexOf("?")?"?":"&":"";return`${a}${t}${o}`}({url:e,params:o});let R=`${(0,l.isNil)(a)?n.value:a}${I}`;R=R.replace(/\/\//g,"/");const $={...i.value,...s},A=function({abortGroup:r="_global",abortable:e}={}){if(e)return b[r]=b[r]||new AbortController,b[r].signal}({abortGroup:v,abortable:P});!function({abortGroup:r,abortable:e}){e&&r&&(c[r]?c[r]++:c[r]=1)}({abortGroup:v,abortable:P}),u.value({method:r,url:R,data:t,headers:$,responseType:f,signal:A}).then((r=>{if(E)return T(r);const e=function({expectedList:r,response:e}){return r?(0,l.isArray)(e.data)?e.data:e.data.results?e.data.results:[]:e.data}({expectedList:G,response:r}),a=k({data:e,keyId:y});return m&&(p.value[m].data=e,p.value[m].keyData=a,p.value[m].loading=!1),T(y?a:e)}),(r=>{if(H||function({error:r,showError:e,client:a,resolve:o,reject:t}){if(!r)return!0;return(()=>{const s=d.value[r.status];(0,l.isFunction)(s)?s({error:r,showError:e,client:a,resolve:o,reject:t}):(0,l.isFunction)(d.value.all)&&d.value.all({error:r,showError:e,client:a,resolve:o,reject:t})})(),!0}({error:r.response,showError:g,client:u,reject:B,resolve:T}))return B(r.response)})).finally((()=>{!function({abortGroup:r,abortable:e}){e&&r&&(c[r]&&c[r]--,0===c[r]&&b[r]&&(delete c[r],delete b[r]))}({abortGroup:v,abortable:P})}))}));return w||(p.value[m]=p.value[m]||{},p.value[m].loading=!0,p.value[m].promise=T),T}function k({data:r,keyId:e}){if(e)return(0,l.keyBy)(r,e)}const T={name:"PageCloak",setup(){const{abortHttp:r,getHttp:e}=m();e({urlBase:"",url:"/api/get_response"}).then((r=>{console.log("response",r)}),(r=>{console.log("error",r)})),setTimeout((()=>{r({all:!0})}),1e3)}},B=(0,a(1419).Z)(T,[["render",function(r,e){return(0,o.wg)(),(0,o.iD)("div",null,t)}]])}}]);
//# sourceMappingURL=chunk.242.ebeed31c677731265a5d.js.map