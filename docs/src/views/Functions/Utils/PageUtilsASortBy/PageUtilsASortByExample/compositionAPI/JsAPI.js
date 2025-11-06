import {
  aSortBy,
} from "aloha-vue";

const USERS = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
];

const SCORED_USERS = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

const MIXED_USERS = [
  { profile: { lastName: "Davis" }, status: "active" },
  { profile: { lastName: "anders" }, status: "inactive" },
  { profile: { lastName: "Anders" }, status: "active" },
];

const CODES = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

export default function JsAPI() {
  const caseInsensitiveNames = aSortBy(USERS, "name").map(user => user.name);
  const tieBreakerOrder = aSortBy(SCORED_USERS, ["name", user => user.score]).map(user => `${ user.name }:${ user.score }`);
  const mixedIterateesOrder = aSortBy(MIXED_USERS, ["profile.lastName", { status: "active" }]).map(user => `${ user.profile.lastName }:${ user.status }`);
  const caseInsensitiveCodes = aSortBy(CODES, "code").map(item => item.code);
  const caseSensitiveCodes = aSortBy(CODES, "code", { caseSensitive: true }).map(item => item.code);

  const codeJs = `const users = [
  { name: "beta" },
  { name: "Alpha" },
  { name: "gamma" },
];

aSortBy(users, "name").map(user => user.name);
// ${ JSON.stringify(caseInsensitiveNames) }

const scoredUsers = [
  { name: "alex", score: 5 },
  { name: "Alex", score: 3 },
  { name: "alex", score: 2 },
  { name: "alex", score: 7 },
];

aSortBy(scoredUsers, ["name", user => user.score]).map(user => user.name + ":" + user.score);
// ${ JSON.stringify(tieBreakerOrder) }

const mixedUsers = [
  { profile: { lastName: "Davis" }, status: "active" },
  { profile: { lastName: "anders" }, status: "inactive" },
  { profile: { lastName: "Anders" }, status: "active" },
];

aSortBy(mixedUsers, ["profile.lastName", { status: "active" }]).map(user => user.profile.lastName + ":" + user.status);
// ${ JSON.stringify(mixedIterateesOrder) }

const codes = [
  { code: "abC" },
  { code: "abc" },
  { code: "Abd" },
];

aSortBy(codes, "code").map(item => item.code);
// ${ JSON.stringify(caseInsensitiveCodes) }

aSortBy(codes, "code", { caseSensitive: true }).map(item => item.code);
// ${ JSON.stringify(caseSensitiveCodes) }`;

  return {
    codeJs,
  };
}
