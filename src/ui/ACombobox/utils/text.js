import {
  toLower,
  toString,
} from "lodash-es";

const DIACRITICS = /\p{Diacritic}/gu;

/**
 * The text for the search: lower case, optional without diacritics (München → munchen),
 * with the index of every char in the original text (for the highlight).
 */
export function foldText(text, { ignoreDiacritics = true } = {}) {
  const TEXT = toString(text);
  let folded = "";
  const map = [];
  for (let index = 0; index < TEXT.length; index++) {
    let char = toLower(TEXT[index]);
    if (ignoreDiacritics) {
      char = char.normalize("NFD").replace(DIACRITICS, "");
    }
    for (let i = 0; i < char.length; i++) {
      map.push(index);
    }
    folded += char;
  }
  return { folded, map };
}

/**
 * Does the label match the search: "contains" (default) or "startsWith".
 */
export function isMatch(label, search, { filterMode = "contains", ignoreDiacritics = true } = {}) {
  const SEARCH = foldText(search, { ignoreDiacritics }).folded;
  const LABEL = foldText(label, { ignoreDiacritics }).folded;
  return filterMode === "startsWith" ? LABEL.startsWith(SEARCH) : LABEL.includes(SEARCH);
}

/**
 * The parts of the label with the found text as <mark>: nodes, no HTML of the data (no XSS).
 * The search also finds "München" with "munchen" (ignoreDiacritics), "startsWith" marks only the start.
 */
export function getHighlightParts(label, search, { filterMode = "contains", ignoreDiacritics = true } = {}) {
  const TEXT = toString(label);
  const SEARCH = foldText(search, { ignoreDiacritics }).folded;
  if (!SEARCH) {
    return [{ text: TEXT, isMatch: false }];
  }
  const { folded, map } = foldText(TEXT, { ignoreDiacritics });
  const RANGES = [];
  let index = folded.indexOf(SEARCH);
  while (index !== -1) {
    if (filterMode === "startsWith" && index !== 0) {
      break;
    }
    // from the folded positions back to the chars of the original text
    RANGES.push([map[index], map[index + SEARCH.length - 1] + 1]);
    if (filterMode === "startsWith") {
      break;
    }
    index = folded.indexOf(SEARCH, index + SEARCH.length);
  }
  const PARTS = [];
  let start = 0;
  RANGES.forEach(([from, to]) => {
    if (from > start) {
      PARTS.push({ text: TEXT.slice(start, from), isMatch: false });
    }
    PARTS.push({ text: TEXT.slice(from, to), isMatch: true });
    start = to;
  });
  if (start < TEXT.length) {
    PARTS.push({ text: TEXT.slice(start), isMatch: false });
  }
  return PARTS;
}
