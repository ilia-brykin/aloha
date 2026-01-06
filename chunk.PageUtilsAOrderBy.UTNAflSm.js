import{A as b,a as B}from"./chunk.AlohaExample.8rElMyDl.js";import{P as N,a as x,b as h}from"./chunk.PageFilterTest.BD5geQVk.js";import{V as s,_ as d,A as E}from"./bundle.index.DouUSTKr.js";import{V as g,e as a,W as _,aT as S,_ as t}from"./chunk.vendor.BNArDUz4.js";import"./chunk.vendor-lodash.qxhehls9.js";import"./chunk.APageTabTitle.uLd0LT3L.js";import"./chunk.AlohaHighlightjs.C24k7nGh.js";import"./chunk.translations-ar.e4PS1tyx.js";import"./chunk.translations-de.OrBYDcrv.js";import"./chunk.translations-en.DQcOH5RE.js";import"./chunk.translations-es.Q19nyFDG.js";import"./chunk.translations-fr.Bcg-ogV6.js";import"./chunk.translations-hr.DSa-1cCn.js";import"./chunk.translations-it.B3WUSlx4.js";import"./chunk.translations-ru.a1BEYSAD.js";const u=[{name:"beta"},{name:"Alpha"},{name:"gamma"},{name:"delta"},{name:"alpha"}],v=[{name:"alex",score:5},{name:"Alex",score:3},{name:"alex",score:2},{name:"alex",score:7}],T=[{profile:{lastName:"Davis"},age:40},{profile:{lastName:"davis"},age:25},{profile:{lastName:"Anders"},age:32},{profile:{lastName:"anders"},age:29}],p=[{code:"abC"},{code:"abc"},{code:"Abd"}];function P(){const n=s(u,"name").map(e=>e.name),r=s(u,"name","desc").map(e=>e.name),o=s(v,["name",e=>e.score],["asc","asc"]).map(e=>`${e.name}:${e.score}`),i=s(T,["profile.lastName",e=>e.age],["asc","desc"]).map(e=>`${e.profile.lastName}:${e.age}`),l=s(p,"code").map(e=>e.code),m=s(p,"code","asc",{caseSensitive:!0}).map(e=>e.code);return{codeJs:`const users = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
  { name: "delta" },
  { name: "alpha" },
];

aOrderBy(users, "name").map(user => user.name);
// ${JSON.stringify(n)}

aOrderBy(users, "name", "desc").map(user => user.name);
// ${JSON.stringify(r)}

const scoredUsers = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

aOrderBy(scoredUsers, ["name", user => user.score], ["asc", "asc"])
  .map(user => user.name + ":" + user.score);
// ${JSON.stringify(o)}

const employees = [
  { profile: { lastName: "Davis" }, age: 40 },
  { profile: { lastName: "davis" }, age: 25 },
  { profile: { lastName: "Anders" }, age: 32 },
  { profile: { lastName: "anders" }, age: 29 },
];

aOrderBy(employees, ["profile.lastName", user => user.age], ["asc", "desc"])
  .map(employee => employee.profile.lastName + ":" + employee.age);
// ${JSON.stringify(i)}

const codes = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

aOrderBy(codes, "code").map(item => item.code);
// ${JSON.stringify(l)}

aOrderBy(codes, "code", "asc", { caseSensitive: true }).map(item => item.code);
// ${JSON.stringify(m)}`}}const R={name:"PageUtilsAOrderByExample",components:{AlohaExample:b},setup(){const{codeJs:n}=P();return{codeJs:n}}};function I(n,r,o,i,l,m){const c=a("aloha-example");return _(),g(c,{"code-js":n.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const $=d(R,[["render",I]]);function U(){return{argumentsText:[{value:"collection",types:["Array","Object"],text:"_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_COLLECTION_"},{value:"iteratees",types:["String","Function","Array","Object","Null"],text:"_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_ITERATEES_"},{value:"orders",types:["String","Array","Null"],text:"_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_ORDERS_"},{value:"options",types:["Object"],text:"_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_OPTIONS_"}]}}function C(){return{pageTitle:"aOrderBy"}}const q=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  aOrderBy,
} from "../utils";

describe("aOrderBy", () => {
  it("sorts by a string property ignoring case by default", () => {
    const users = [
      { name: "beta" },
      { name: "Alpha" },
      { name: "gamma" },
      { name: "delta" },
      { name: "alpha" },
    ];

    const result = aOrderBy(users, "name");

    expect(result.map(user => user.name)).toEqual([
      "Alpha",
      "alpha",
      "beta",
      "delta",
      "gamma",
    ]);
  });

  it("orders results descending when order argument provided", () => {
    const users = [
      { name: "beta" },
      { name: "Alpha" },
      { name: "gamma" },
      { name: "delta" },
      { name: "alpha" },
    ];

    const result = aOrderBy(users, "name", "desc");

    expect(result.map(user => user.name)).toEqual([
      "gamma",
      "delta",
      "beta",
      "Alpha",
      "alpha",
    ]);
  });

  it("supports iteratee functions returning strings", () => {
    const users = [
      { firstName: "carol" },
      { firstName: "Bob" },
      { firstName: "alice" },
    ];

    const result = aOrderBy(users, user => user.firstName);

    expect(result.map(user => user.firstName)).toEqual([
      "alice",
      "Bob",
      "carol",
    ]);
  });

  it("uses secondary iteratees to break ties", () => {
    const users = [
      { name: "alex", score: 5 },
      { name: "Alex", score: 3 },
      { name: "alex", score: 2 },
      { name: "alex", score: 7 },
    ];

    const result = aOrderBy(users, ["name", user => user.score], ["asc", "asc"]);

    expect(result.map(user => ({ name: user.name, score: user.score }))).toEqual([
      { name: "alex", score: 2 },
      { name: "Alex", score: 3 },
      { name: "alex", score: 5 },
      { name: "alex", score: 7 },
    ]);
  });

  it("accepts iteratees and orders passed as arrays", () => {
    const users = [
      { profile: { lastName: "davis" }, age: 40 },
      { profile: { lastName: "Davis" }, age: 35 },
      { profile: { lastName: "anders" }, age: 50 },
      { profile: { lastName: "Anders" }, age: 20 },
    ];

    const result = aOrderBy(
      users,
      ["profile.lastName", user => user.age],
      ["asc", "desc"],
    );

    expect(result.map(user => ({
      lastName: user.profile.lastName,
      age: user.age,
    }))).toEqual([
      { lastName: "anders", age: 50 },
      { lastName: "Anders", age: 20 },
      { lastName: "davis", age: 40 },
      { lastName: "Davis", age: 35 },
    ]);
  });

  it("sorts by nested path with descending order ignoring case", () => {
    const users = [
      { profile: { lastName: "smith" } },
      { profile: { lastName: "Johnson" } },
      { profile: { lastName: "adams" } },
      { profile: { lastName: "brown" } },
    ];

    const result = aOrderBy(users, "profile.lastName", "desc");

    expect(result.map(user => user.profile.lastName)).toEqual([
      "smith",
      "Johnson",
      "brown",
      "adams",
    ]);
  });

  it("behaves like lodash orderBy when caseSensitive true", () => {
    const users = [
      { user: "fred", age: 48 },
      { user: "barney", age: 36 },
      { user: "Fred", age: 40 },
      { user: "Barney", age: 34 },
    ];

    const result = aOrderBy(
      users,
      ["user", "age"],
      ["asc", "desc"],
      { caseSensitive: true },
    );

    expect(result.map(user => ({ user: user.user, age: user.age }))).toEqual([
      { user: "Barney", age: 34 },
      { user: "Fred", age: 40 },
      { user: "barney", age: 36 },
      { user: "fred", age: 48 },
    ]);
  });

  it("defaults to identity iteratee when none provided", () => {
    const values = ["Banana", "apple", "Apricot"];

    const caseInsensitive = aOrderBy(values);
    const caseSensitive = aOrderBy(values, undefined, undefined, { caseSensitive: true });

    expect(caseInsensitive).toEqual(["apple", "Apricot", "Banana"]);
    expect(caseSensitive).toEqual(["Apricot", "Banana", "apple"]);
  });

  it("defaults missing orders to asc when array shorter than iteratees", () => {
    const users = [
      { name: "Alpha", score: 4 },
      { name: "alpha", score: 3 },
      { name: "beta", score: 1 },
      { name: "Beta", score: 2 },
    ];

    const result = aOrderBy(
      users,
      ["name", user => user.score],
      ["asc"],
    );

    expect(result.map(user => ({ name: user.name, score: user.score }))).toEqual([
      { name: "alpha", score: 3 },
      { name: "Alpha", score: 4 },
      { name: "beta", score: 1 },
      { name: "Beta", score: 2 },
    ]);
  });

  it("handles object iteratee shorthand combined with additional iteratees", () => {
    const users = [
      { name: "Alice", role: "editor" },
      { name: "Bob", role: "admin" },
      { name: "carol", role: "admin" },
      { name: "dave", role: "viewer" },
    ];

    const result = aOrderBy(
      users,
      [{ role: "admin" }, user => user.name],
      ["desc", "asc"],
    );

    expect(result.map(user => user.name)).toEqual([
      "Bob",
      "carol",
      "Alice",
      "dave",
    ]);
  });

  it("uses default iteratee when iteratee is null but order provided", () => {
    const numbers = [3, 1, 2];

    const result = aOrderBy(numbers, null, "desc");

    expect(result).toEqual([3, 2, 1]);
  });

  it("applies options together with iteratees and order arguments", () => {
    const codes = [
      { code: "abC", rank: 3 },
      { code: "Abd", rank: 1 },
      { code: "abc", rank: 2 },
    ];

    const caseInsensitive = aOrderBy(
      codes,
      "code",
      "asc",
      { caseSensitive: false },
    );
    const caseSensitive = aOrderBy(
      codes,
      "code",
      "asc",
      { caseSensitive: true },
    );

    expect(caseInsensitive.map(item => item.code)).toEqual(["abC", "abc", "Abd"]);
    expect(caseSensitive.map(item => item.code)).toEqual(["Abd", "abC", "abc"]);
  });
});
`,D={name:"PageUtilsAOrderBy",components:{AlohaPage:B,ATranslation:E,PageFilterArguments:h,PageFilterImportFunction:x,PageFilterTest:N,PageUtilsAOrderByExample:$},setup(){const{pageTitle:n}=C(),{argumentsText:r}=U();return{argumentsText:r,pageTitle:n,test:q}}};function J(n,r,o,i,l,m){const c=a("a-translation"),e=a("page-filter-import-function"),f=a("page-filter-arguments"),y=a("page-utils-a-order-by-example"),A=a("page-filter-test"),O=a("aloha-page");return _(),g(O,{"page-title":n.pageTitle},{body:S(()=>[t(c,{tag:"p",html:"_PAGE_UTILS_A_ORDER_BY_DESCRIPTION_"}),t(e,{"function-name":"aOrderBy","type-import":"utils"}),t(f,{"arguments-text":n.argumentsText,"function-description":"aOrderBy(collection, iteratees?, orders?, options?)"},null,8,["arguments-text"]),t(y),t(A,{test:n.test},null,8,["test"])]),_:1},8,["page-title"])}const Z=d(D,[["render",J]]);export{Z as default};
