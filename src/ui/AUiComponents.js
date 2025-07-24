import ACheckbox from "./ACheckbox/ACheckbox";
import ADatepicker from "./ADatepicker/ADatepicker";
import ADatepickerRange from "./ADatepickerRange/ADatepickerRange";
import AInput from "./AInput/AInput";
import AInputCurrency from "./AInputCurrency/AInputCurrency";
import AInputFile from "./AInputFile/AInputFile";
import AInputNumber from "./AInputNumber/AInputNumber";
import AInputNumberRange from "./AInputNumberRange/AInputNumberRange";
import AJson from "./AJson/AJson";
import AMultiselectOrdered from "./AMultiselectOrdered/AMultiselectOrdered";
import AOneCheckbox from "./AOneCheckbox/AOneCheckbox";
import ARadio from "./ARadio/ARadio";
import ARouterLinkConfig from "./ARouterLinkConfig/ARouterLinkConfig";
import ASelect from "./ASelect/ASelect";
import ASelectIcon from "./ASelectIcon/ASelectIcon";
import ASelectStyle from "./ASelectStyle/ASelectStyle";
import ASwitch from "./ASwitch/ASwitch";
import ATemplate from "./ATemplate/ATemplate";
import ATextarea from "./ATextarea/ATextarea";
import AValidatedJson from "./AValidatedJson/AValidatedJson";

export default {
  checkbox: ACheckbox,
  color: AInput,
  currency: AInputCurrency,
  date: ADatepicker,
  dateRange: ADatepickerRange,
  datetime: ADatepicker,
  email: AInput,
  file: AInputFile,
  integer: AInputNumber,
  integerNonNegative: AInputNumber,
  integerNonNegativeRange: AInputNumberRange,
  integerPositive: AInputNumber,
  integerPositiveRange: AInputNumberRange,
  integerRange: AInputNumberRange,
  json: AJson,
  multiselect: ASelect,
  multiselectIcon: ASelectIcon,
  multiselectStyle: ASelectStyle,
  multiselectOrdered: AMultiselectOrdered,
  multiselectRoute: ARouterLinkConfig,
  natural: AInput,
  number: AInputNumber,
  numberRange: AInputNumberRange,
  oneCheckbox: AOneCheckbox,
  password: AInput,
  radio: ARadio,
  routerLinkConfig: ARouterLinkConfig,
  select: ASelect,
  selectIcon: ASelectIcon,
  selectStyle: ASelectStyle,
  selectRoute: ARouterLinkConfig,
  switch: ASwitch,
  template: ATemplate,
  text: AInput,
  textarea: ATextarea,
  validatedJson: AValidatedJson,
};
