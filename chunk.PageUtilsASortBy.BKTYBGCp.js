import{A as B,a as h}from"./chunk.AlohaExample.GQPWYxOJ.js";import{P as b,a as A,b as v}from"./chunk.PageFilterTest.CLOt3cRP.js";import{I as t,_ as m,A as x}from"./bundle.index.CQ2HubBE.js";import{V as p,e as s,W as d,aT as E,_ as r}from"./chunk.vendor.tcMGz7j_.js";import"./chunk.vendor-lodash.rFt76tyK.js";import"./chunk.APageTabTitle.CgJ1qBaZ.js";import"./chunk.AlohaHighlightjs.BwPt1uu6.js";import"./chunk.translations-ar.lwHXa6M8.js";import"./chunk.translations-de.5rx9bmCn.js";import"./chunk.translations-en.DAz4i_Be.js";import"./chunk.translations-es.BVLNzz-z.js";import"./chunk.translations-fr.Wj-t-3lM.js";import"./chunk.translations-hr.BAIEX8fg.js";import"./chunk.translations-it.BomBJXhu.js";import"./chunk.translations-ru.D4MsBfSL.js";const N=[{name:"beta"},{name:"Alpha"},{name:"gamma"}],U=[{name:"alex",score:5},{name:"Alex",score:3},{name:"alex",score:2},{name:"alex",score:7}],q=[{profile:{lastName:"Davis"},status:"active"},{profile:{lastName:"anders"},status:"inactive"},{profile:{lastName:"Anders"},status:"active"}],l=[{code:"abC"},{code:"abc"},{code:"Abd"}];function T(){const n=t(N,"name").map(e=>e.name),a=t(U,["name",e=>e.score]).map(e=>`${e.name}:${e.score}`),o=t(q,["profile.lastName",{status:"active"}]).map(e=>`${e.profile.lastName}:${e.status}`),i=t(l,"code").map(e=>e.code),u=t(l,"code",{caseSensitive:!0}).map(e=>e.code);return{codeJs:`const users = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
];

aSortBy(users, "name").map(user => user.name);
// ${JSON.stringify(n)}

const scoredUsers = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

aSortBy(scoredUsers, ["name", user => user.score]).map(user => user.name + ":" + user.score);
// ${JSON.stringify(a)}

const mixedUsers = [
  { profile: { lastName: "Davis" }, status: "active" },
  { profile: { lastName: "anders" }, status: "inactive" },
  { profile: { lastName: "Anders" }, status: "active" },
];

aSortBy(mixedUsers, ["profile.lastName", { status: "active" }]).map(user => user.profile.lastName + ":" + user.status);
// ${JSON.stringify(o)}

const codes = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

aSortBy(codes, "code").map(item => item.code);
// ${JSON.stringify(i)}

aSortBy(codes, "code", { caseSensitive: true }).map(item => item.code);
// ${JSON.stringify(u)}`}}const I={name:"PageUtilsASortByExample",components:{AlohaExample:B},setup(){const{codeJs:n}=T();return{codeJs:n}}};function O(n,a,o,i,u,c){const e=s("aloha-example");return d(),p(e,{"code-js":n.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const P=m(I,[["render",O]]);function $(){return{argumentsText:[{value:"collection",types:["Array","Object"],text:"_PAGE_UTILS_A_SORT_BY_ARGUMENTS_COLLECTION_"},{value:"...iteratees",types:["String","Function","Array","Object"],text:"_PAGE_UTILS_A_SORT_BY_ARGUMENTS_ITERATEES_"},{value:"options",types:["Object"],text:"_PAGE_UTILS_A_SORT_BY_ARGUMENTS_OPTIONS_"}]}}function w(){return{pageTitle:"aSortBy"}}const C=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  aSortBy,
} from "../utils";

describe("aSortBy", () => {
  it("sorts by a string property ignoring case by default", () => {
    const users = [
      { name: "beta" },
      { name: "Alpha" },
      { name: "gamma" },
      { name: "delta" },
      { name: "alpha" },
    ];

    const result = aSortBy(users, "name");

    expect(result.map(user => user.name)).toEqual([
      "Alpha",
      "alpha",
      "beta",
      "delta",
      "gamma",
    ]);
  });

  it("respects caseSensitive true when no iteratees are provided", () => {
    const words = ["Banana", "apple", "Apricot"];

    const caseInsensitive = aSortBy(words);
    const caseSensitive = aSortBy(words, { caseSensitive: true });

    expect(caseInsensitive).toEqual(["apple", "Apricot", "Banana"]);
    expect(caseSensitive).toEqual(["Apricot", "Banana", "apple"]);
  });

  it("sorts by nested path strings ignoring case", () => {
    const users = [
      { profile: { lastName: "smith" } },
      { profile: { lastName: "Johnson" } },
      { profile: { lastName: "adams" } },
      { profile: { lastName: "brown" } },
    ];

    const result = aSortBy(users, "profile.lastName");

    expect(result.map(user => user.profile.lastName)).toEqual([
      "adams",
      "brown",
      "Johnson",
      "smith",
    ]);
  });

  it("supports iteratee functions returning strings", () => {
    const users = [
      { firstName: "carol" },
      { firstName: "Bob" },
      { firstName: "alice" },
    ];

    const result = aSortBy(users, user => user.firstName);

    expect(result.map(user => user.firstName)).toEqual([
      "alice",
      "Bob",
      "carol",
    ]);
  });

  it("uses subsequent iteratees to break ties", () => {
    const users = [
      { name: "alex", score: 5 },
      { name: "Alex", score: 3 },
      { name: "alex", score: 2 },
      { name: "alex", score: 7 },
    ];

    const result = aSortBy(users, "name", user => user.score);

    expect(result.map(user => user.score)).toEqual([2, 3, 5, 7]);
  });

  it("accepts iteratees passed as an array", () => {
    const users = [
      { profile: { lastName: "davis" }, id: 2 },
      { profile: { lastName: "Davis" }, id: 1 },
      { profile: { lastName: "anders" }, id: 5 },
    ];

    const result = aSortBy(users, ["profile.lastName", user => user.id]);

    expect(result.map(user => ({ lastName: user.profile.lastName, id: user.id }))).toEqual([
      { lastName: "anders", id: 5 },
      { lastName: "Davis", id: 1 },
      { lastName: "davis", id: 2 },
    ]);
  });

  it("handles object iteratees via matches shorthand", () => {
    const users = [
      { name: "Alice", role: "editor" },
      { name: "Bob", role: "admin" },
      { name: "carol", role: "viewer" },
      { name: "dave", role: "admin" },
    ];

    const result = aSortBy(users, { role: "admin" });

    expect(result.map(user => user.name)).toEqual([
      "Alice",
      "carol",
      "Bob",
      "dave",
    ]);
  });

  it("works with options while iteratees are provided as an array", () => {
    const users = [
      { code: "abC", rank: 3 },
      { code: "Abd", rank: 1 },
      { code: "abc", rank: 2 },
    ];

    const caseInsensitive = aSortBy(users, ["code", user => user.rank]);
    const caseSensitive = aSortBy(users, ["code", user => user.rank], { caseSensitive: true });

    expect(caseInsensitive.map(user => user.code)).toEqual(["abc", "abC", "Abd"]);
    expect(caseSensitive.map(user => user.code)).toEqual(["Abd", "abC", "abc"]);
  });

  it("keeps numeric iteratees untouched", () => {
    const users = [
      { name: "alpha", score: 10 },
      { name: "Bravo", score: 5 },
      { name: "charlie", score: 20 },
    ];

    const result = aSortBy(users, user => user.score);

    expect(result.map(user => user.score)).toEqual([5, 10, 20]);
  });

  it("supports plain objects as the collection input", () => {
    const users = {
      a: { name: "zoe" },
      b: { name: "Mike" },
      c: { name: "anna" },
    };

    const result = aSortBy(users, "name");

    expect(result.map(user => user.name)).toEqual(["anna", "Mike", "zoe"]);
  });

  it("does not mutate the original collection", () => {
    const users = [
      { name: "beta" },
      { name: "alpha" },
    ];
    const snapshot = [...users];

    const result = aSortBy(users, "name");

    expect(users).toEqual(snapshot);
    expect(result).not.toBe(users);
  });

  it("keeps original order for equal values when compared case-insensitively", () => {
    const users = [
      { name: "Alpha", id: 1 },
      { name: "alpha", id: 2 },
      { name: "ALPHA", id: 3 },
    ];

    const result = aSortBy(users, "name");

    expect(result.map(user => user.id)).toEqual([1, 2, 3]);
  });

  it("treats function iteratees as case-sensitive when requested", () => {
    const items = [
      { code: "Beta" },
      { code: "alpha" },
      { code: "Alpha" },
    ];

    const insensitive = aSortBy(items, item => item.code);
    const sensitive = aSortBy(items, item => item.code, { caseSensitive: true });

    expect(insensitive.map(item => item.code)).toEqual(["alpha", "Alpha", "Beta"]);
    expect(sensitive.map(item => item.code)).toEqual(["Alpha", "Beta", "alpha"]);
  });

  it("puts entries with missing properties first", () => {
    const users = [
      { name: "charlie" },
      { id: 2 },
      { name: "Alpha" },
    ];

    const result = aSortBy(users, "name");

    expect(result.map(user => user.name)).toEqual(["Alpha", "charlie", undefined]);
  });

  it("handles mixed iteratees combining paths and object shorthands", () => {
    const users = [
      { profile: { name: "Beta" }, status: "active" },
      { profile: { name: "alpha" }, status: "inactive" },
      { profile: { name: "Alpha" }, status: "active" },
    ];

    const result = aSortBy(users, ["profile.name", { status: "active" }]);

    expect(result.map(user => ({ name: user.profile.name, status: user.status }))).toEqual([
      { name: "alpha", status: "inactive" },
      { name: "Alpha", status: "active" },
      { name: "Beta", status: "active" },
    ]);
  });

  it("sorts array elements by index path when using numeric string iteratee", () => {
    const values = [
      ["Delta", 4],
      ["alpha", 1],
      ["Bravo", 2],
      ["charlie", 3],
    ];

    const result = aSortBy(values, "0");

    expect(result.map(item => item[0])).toEqual([
      "alpha",
      "Bravo",
      "charlie",
      "Delta",
    ]);
  });

  it("example lodash.com", () => {
    const users = [
      { user: "fred", age: 48 },
      { user: "barney", age: 36 },
      { user: "fred", age: 40 },
      { user: "barney", age: 34 },
    ];

    const resultUser = aSortBy(users, [function(o) {
      return o.user;
    }]);
    // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
    const resultUserAge = aSortBy(users, ["user", "age"]);
    // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

    expect(resultUser.map(user => ({ user: user.user, age: user.age }))).toEqual([
      { user: "barney", age: 36 },
      { user: "barney", age: 34 },
      { user: "fred", age: 48 },
      { user: "fred", age: 40 },
    ]);
    expect(resultUserAge.map(user => ({ user: user.user, age: user.age }))).toEqual([
      { user: "barney", age: 34 },
      { user: "barney", age: 36 },
      { user: "fred", age: 40 },
      { user: "fred", age: 48 },
    ]);
  });

  it("sorts mixed-case strings while remaining case insensitive", () => {
    const users = [
      { user: "Fred", age: 48 },
      { user: "fred", age: 40 },
      { user: "Barney", age: 36 },
      { user: "barney", age: 34 },
    ];

    const resultUser = aSortBy(users, [function(o) {
      return o.user;
    }]);
    const resultUserAge = aSortBy(users, ["user", "age"]);

    expect(resultUser.map(user => ({ user: user.user, age: user.age }))).toEqual([
      { user: "Barney", age: 36 },
      { user: "barney", age: 34 },
      { user: "Fred", age: 48 },
      { user: "fred", age: 40 },
    ]);

    expect(resultUserAge.map(user => ({ user: user.user, age: user.age }))).toEqual([
      { user: "barney", age: 34 },
      { user: "Barney", age: 36 },
      { user: "fred", age: 40 },
      { user: "Fred", age: 48 },
    ]);
  });

  it("sorts strings case-sensitively when option enabled", () => {
    const users = [
      { user: "fred", age: 40 },
      { user: "Fred", age: 48 },
      { user: "barney", age: 34 },
      { user: "Barney", age: 36 },
    ];

    const resultUser = aSortBy(users, [function(o) {
      return o.user;
    }], { caseSensitive: true });
    const resultUserAge = aSortBy(users, ["user", "age"], { caseSensitive: true });

    expect(resultUser.map(user => ({ user: user.user, age: user.age }))).toEqual([
      { user: "Barney", age: 36 },
      { user: "Fred", age: 48 },
      { user: "barney", age: 34 },
      { user: "fred", age: 40 },
    ]);


    expect(resultUserAge.map(user => ({ user: user.user, age: user.age }))).toEqual([
      { user: "Barney", age: 36 },
      { user: "Fred", age: 48 },
      { user: "barney", age: 34 },
      { user: "fred", age: 40 },
    ]);
  });
});
`,k={name:"PageUtilsASortBy",components:{AlohaPage:h,ATranslation:x,PageFilterArguments:v,PageFilterImportFunction:A,PageFilterTest:b,PageUtilsASortByExample:P},setup(){const{pageTitle:n}=w(),{argumentsText:a}=$();return{argumentsText:a,pageTitle:n,test:C}}};function R(n,a,o,i,u,c){const e=s("a-translation"),g=s("page-filter-import-function"),f=s("page-filter-arguments"),y=s("page-utils-a-sort-by-example"),S=s("page-filter-test"),_=s("aloha-page");return d(),p(_,{"page-title":n.pageTitle},{body:E(()=>[r(e,{tag:"p",html:"_PAGE_UTILS_A_SORT_BY_DESCRIPTION_"}),r(g,{"function-name":"aSortBy","type-import":"utils"}),r(f,{"arguments-text":n.argumentsText,"function-description":"aSortBy(collection, ...iteratees, options?)"},null,8,["arguments-text"]),r(y),r(S,{test:n.test},null,8,["test"])]),_:1},8,["page-title"])}const Z=m(k,[["render",R]]);export{Z as default};
