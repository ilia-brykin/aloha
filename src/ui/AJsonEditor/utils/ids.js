// a valid and stable id for a pointer: "/a b/0" → "_2fa_20b_2f0"
export function getPointerIdPart(pointer) {
  return `${ pointer }`.replace(/[^\w-]/g, char => `_${ char.charCodeAt(0).toString(16) }`) || "root";
}

export function getRowId(editorId, pointer) {
  return `${ editorId }_row${ getPointerIdPart(pointer) }`;
}
