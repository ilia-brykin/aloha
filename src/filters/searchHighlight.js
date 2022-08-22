export default function(value, { searchModel = "" }) {
  if (!value) {
    return "";
  }
  if (searchModel === "") {
    return value;
  }
  const RE = new RegExp(searchModel, "gi");
  return value.replace(RE, val => `<span class="a_search_highlight">${ val }</span>`);
}
