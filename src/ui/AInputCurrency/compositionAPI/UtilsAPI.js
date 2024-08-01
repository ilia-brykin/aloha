export default function UtilsAPI() {
  const getCleanIntValue = ({ value, thousandDivider }) => {
    return value
      .replaceAll(thousandDivider, "")
      .replaceAll("-", "")
      .split("").reverse().join("")
      .match(/.{1,3}/g).join(thousandDivider)
      .split("").reverse().join("");
  };

  return {
    getCleanIntValue,
  };
}
