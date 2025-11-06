import {
  aOrderBy,
} from "aloha-vue";

const USERS = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
  { name: "delta" },
  { name: "alpha" },
];

const SCORED_USERS = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

const EMPLOYEES = [
  { profile: { lastName: "Davis" }, age: 40 },
  { profile: { lastName: "davis" }, age: 25 },
  { profile: { lastName: "Anders" }, age: 32 },
  { profile: { lastName: "anders" }, age: 29 },
];

const CODES = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

export default function JsAPI() {
  const basicOrder = aOrderBy(USERS, "name").map(user => user.name);
  const descendingOrder = aOrderBy(USERS, "name", "desc").map(user => user.name);
  const tieBreaker = aOrderBy(
    SCORED_USERS,
    ["name", user => user.score],
    ["asc", "asc"],
  ).map(user => `${ user.name }:${ user.score }`);
  const employeeOrder = aOrderBy(
    EMPLOYEES,
    ["profile.lastName", user => user.age],
    ["asc", "desc"],
  ).map(employee => `${ employee.profile.lastName }:${ employee.age }`);
  const caseInsensitiveCodes = aOrderBy(CODES, "code").map(item => item.code);
  const caseSensitiveCodes = aOrderBy(
    CODES,
    "code",
    "asc",
    { caseSensitive: true },
  ).map(item => item.code);

  const codeJs = `const users = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
  { name: "delta" },
  { name: "alpha" },
];

aOrderBy(users, "name").map(user => user.name);
// ${ JSON.stringify(basicOrder) }

aOrderBy(users, "name", "desc").map(user => user.name);
// ${ JSON.stringify(descendingOrder) }

const scoredUsers = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

aOrderBy(scoredUsers, ["name", user => user.score], ["asc", "asc"])
  .map(user => user.name + ":" + user.score);
// ${ JSON.stringify(tieBreaker) }

const employees = [
  { profile: { lastName: "Davis" }, age: 40 },
  { profile: { lastName: "davis" }, age: 25 },
  { profile: { lastName: "Anders" }, age: 32 },
  { profile: { lastName: "anders" }, age: 29 },
];

aOrderBy(employees, ["profile.lastName", user => user.age], ["asc", "desc"])
  .map(employee => employee.profile.lastName + ":" + employee.age);
// ${ JSON.stringify(employeeOrder) }

const codes = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

aOrderBy(codes, "code").map(item => item.code);
// ${ JSON.stringify(caseInsensitiveCodes) }

aOrderBy(codes, "code", "asc", { caseSensitive: true }).map(item => item.code);
// ${ JSON.stringify(caseSensitiveCodes) }`;

  return {
    codeJs,
  };
}
