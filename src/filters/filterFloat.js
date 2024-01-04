import filterCurrency from "./filterCurrency";

export default function(value, { suffix = "", digits = 2, digitGrouping = true } = {}) {
  return filterCurrency(value, { suffix, digits, digitGrouping });
}
