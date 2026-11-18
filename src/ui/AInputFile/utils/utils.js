import {
  isNil,
  toLower,
  trim,
} from "lodash-es";

/**
 * Checks a file against the accept attribute of a file input:
 * file extensions (".pdf"), MIME types ("application/pdf") and MIME groups ("image/*").
 */
export function isFileAccepted({ file, accept }) {
  const TOKENS = (accept || "").split(",").map(token => toLower(trim(token))).filter(Boolean);
  if (!TOKENS.length) {
    return true;
  }
  const NAME = toLower(file.name || "");
  const TYPE = toLower(file.type || "");
  return TOKENS.some(token => {
    if (token.startsWith(".")) {
      return NAME.endsWith(token);
    }
    if (token.endsWith("/*")) {
      return !!TYPE && TYPE.startsWith(token.slice(0, -1));
    }
    return TYPE === token;
  });
}

export function isImageFile(file) {
  return !isNil(file) && /^image\//.test(file.type || "");
}

/**
 * The model of a file: the file itself and the data that is shown.
 */
export function getModelFromFile(file) {
  return {
    id: "",
    size: file.size,
    name: file.webkitRelativePath || file.relativePath || file.name,
    type: file.type,
    file,
  };
}
