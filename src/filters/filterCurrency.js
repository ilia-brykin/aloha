import filterFloat from "./filterFloat";

export default function(value, { suffix = "€", digits = 2, digitGrouping = true } = {}) {
  return filterFloat(value, { suffix, digits, digitGrouping });
}
