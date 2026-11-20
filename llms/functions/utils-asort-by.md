# aSortBy

Extends lodash's sortBy with case-insensitive comparison by default while keeping support for every iteratee shorthand.

## Import as Function

```js
import { aSortBy } from "aloha-vue";
```

## Arguments

```js
aSortBy(collection, ...iteratees, options?)
```

- **collection** (Array | Object): Collection to iterate over (array or object).
- **...iteratees** (String | Function | Array | Object): Iteratees that describe the sort criteria; accepts property paths, functions, arrays, or shorthand objects.
- **options** (Object): Optional configuration object ({ caseSensitive?: boolean }) passed as the last argument.

## Basic usage

```js
const users = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
];

aSortBy(users, "name").map(user => user.name);
// ["Alpha","beta","gamma"]

const scoredUsers = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

aSortBy(scoredUsers, ["name", user => user.score]).map(user => user.name + ":" + user.score);
// ["alex:2","Alex:3","alex:5","alex:7"]

const mixedUsers = [
  { profile: { lastName: "Davis" }, status: "active" },
  { profile: { lastName: "anders" }, status: "inactive" },
  { profile: { lastName: "Anders" }, status: "active" },
];

aSortBy(mixedUsers, ["profile.lastName", { status: "active" }]).map(user => user.profile.lastName + ":" + user.status);
// ["anders:inactive","Anders:active","Davis:active"]

const codes = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

aSortBy(codes, "code").map(item => item.code);
// ["abC","abc","Abd"]

aSortBy(codes, "code", { caseSensitive: true }).map(item => item.code);
// ["Abd","abC","abc"]
```
