# aOrderBy

Extends lodash's orderBy with case-insensitive comparison by default while preserving all iteratee and order combinations.

## Import as Function

```js
import { aOrderBy } from "aloha-vue";
```

## Arguments

```js
aOrderBy(collection, iteratees?, orders?, options?)
```

- **collection** (Array | Object): Collection to iterate over (array or object).
- **iteratees** (String | Function | Array | Object | Null): Iteratees that define the sort criteria; accepts property paths, functions, arrays, shorthand objects, or null.
- **orders** (String | Array | Null): Sort directions that correspond to iteratees (e.g., "asc", "desc"); accepts string, array, or null.
- **options** (Object): Optional configuration object ({ caseSensitive?: boolean }) passed as the last argument.

## Basic usage

```js
const users = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
  { name: "delta" },
  { name: "alpha" },
];

aOrderBy(users, "name").map(user => user.name);
// ["Alpha","alpha","beta","delta","gamma"]

aOrderBy(users, "name", "desc").map(user => user.name);
// ["gamma","delta","beta","Alpha","alpha"]

const scoredUsers = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

aOrderBy(scoredUsers, ["name", user => user.score], ["asc", "asc"])
  .map(user => user.name + ":" + user.score);
// ["alex:2","Alex:3","alex:5","alex:7"]

const employees = [
  { profile: { lastName: "Davis" }, age: 40 },
  { profile: { lastName: "davis" }, age: 25 },
  { profile: { lastName: "Anders" }, age: 32 },
  { profile: { lastName: "anders" }, age: 29 },
];

aOrderBy(employees, ["profile.lastName", user => user.age], ["asc", "desc"])
  .map(employee => employee.profile.lastName + ":" + employee.age);
// ["Anders:32","anders:29","Davis:40","davis:25"]

const codes = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

aOrderBy(codes, "code").map(item => item.code);
// ["abC","abc","Abd"]

aOrderBy(codes, "code", "asc", { caseSensitive: true }).map(item => item.code);
// ["Abd","abC","abc"]
```
