import{t as e}from"./chunk.AlohaPage.DvXMtBHm.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.Bm9HGemt.js";import{t as i}from"./chunk.AlohaExample.CuZ02843.js";import{in as a,qt as o}from"./bundle.index.DHKLH29U.js";import{$t as s,It as c,Vt as l,rn as u,sn as d}from"./chunk.vendor.BvryzG0o.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";var p=[{name:`beta`},{name:`Alpha`},{name:`gamma`},{name:`delta`},{name:`alpha`}],m=[{name:`alex`,score:5},{name:`Alex`,score:3},{name:`alex`,score:2},{name:`alex`,score:7}],h=[{profile:{lastName:`Davis`},age:40},{profile:{lastName:`davis`},age:25},{profile:{lastName:`Anders`},age:32},{profile:{lastName:`anders`},age:29}],g=[{code:`abC`},{code:`abc`},{code:`Abd`}];function _(){let e=a(p,`name`).map(e=>e.name),t=a(p,`name`,`desc`).map(e=>e.name),n=a(m,[`name`,e=>e.score],[`asc`,`asc`]).map(e=>`${e.name}:${e.score}`),r=a(h,[`profile.lastName`,e=>e.age],[`asc`,`desc`]).map(e=>`${e.profile.lastName}:${e.age}`),i=a(g,`code`).map(e=>e.code),o=a(g,`code`,`asc`,{caseSensitive:!0}).map(e=>e.code);return{codeJs:`const users = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
  { name: "delta" },
  { name: "alpha" },
];

aOrderBy(users, "name").map(user => user.name);
// ${JSON.stringify(e)}

aOrderBy(users, "name", "desc").map(user => user.name);
// ${JSON.stringify(t)}

const scoredUsers = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

aOrderBy(scoredUsers, ["name", user => user.score], ["asc", "asc"])
  .map(user => user.name + ":" + user.score);
// ${JSON.stringify(n)}

const employees = [
  { profile: { lastName: "Davis" }, age: 40 },
  { profile: { lastName: "davis" }, age: 25 },
  { profile: { lastName: "Anders" }, age: 32 },
  { profile: { lastName: "anders" }, age: 29 },
];

aOrderBy(employees, ["profile.lastName", user => user.age], ["asc", "desc"])
  .map(employee => employee.profile.lastName + ":" + employee.age);
// ${JSON.stringify(r)}

const codes = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

aOrderBy(codes, "code").map(item => item.code);
// ${JSON.stringify(i)}

aOrderBy(codes, "code", "asc", { caseSensitive: true }).map(item => item.code);
// ${JSON.stringify(o)}`}}var v={name:`PageUtilsAOrderByExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=_();return{codeJs:e}}};function y(e,t,n,r,i,a){let o=u(`aloha-example`);return s(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var b=f(v,[[`render`,y]]);function x(){return{argumentsText:[{value:`collection`,types:[`Array`,`Object`],text:`_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_COLLECTION_`},{value:`iteratees`,types:[`String`,`Function`,`Array`,`Object`,`Null`],text:`_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_ITERATEES_`},{value:`orders`,types:[`String`,`Array`,`Null`],text:`_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_ORDERS_`},{value:`options`,types:[`Object`],text:`_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_OPTIONS_`}]}}function S(){return{pageTitle:`aOrderBy`}}var C=`import {
  describe,
  expect,
  it,
} from "vitest";

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
`,w={name:`PageUtilsAOrderBy`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsAOrderByExample:b},setup(){let{pageTitle:e}=S(),{argumentsText:t}=x();return{argumentsText:t,pageTitle:e,test:C}}};function T(e,t,n,r,i,a){let o=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-arguments`),m=u(`page-utils-a-order-by-example`),h=u(`page-filter-test`),g=u(`aloha-page`);return s(),c(g,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_UTILS_A_ORDER_BY_DESCRIPTION_`}),l(f,{"function-name":`aOrderBy`,"type-import":`utils`}),l(p,{"arguments-text":e.argumentsText,"function-description":`aOrderBy(collection, iteratees?, orders?, options?)`},null,8,[`arguments-text`]),l(m),l(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var E=f(w,[[`render`,T]]);export{E as default};