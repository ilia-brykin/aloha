import ACheckbox from "./ACheckbox/ACheckbox";
import ADatepicker from "./ADatepicker/ADatepicker";
import ADatepickerRange from "./ADatepickerRange/ADatepickerRange";
import AInput from "./AInput/AInput";
import AInputFile from "./AInputFile/AInputFile";
import AInputNumber from "./AInputNumber/AInputNumber";
import AInputNumberRange from "./AInputNumberRange/AInputNumberRange";
import AOneCheckbox from "./AOneCheckbox/AOneCheckbox";
import ARadio from "./ARadio/ARadio";
import ASelect from "./ASelect/ASelect";
import ASwitch from "./ASwitch/ASwitch";
import ATemplate from "./ATemplate/ATemplate";
import ATextarea from "./ATextarea/ATextarea";
import ATinymce from "./ATinymce/ATinymce";

export default {
  checkbox: ACheckbox,
  color: AInput,
  date: ADatepicker,
  datetime: ADatepicker,
  dateRange: ADatepickerRange,
  email: AInput,
  file: AInputFile,
  integer: AInputNumber,
  integerNonNegative: AInputNumber,
  integerNonNegativeRange: AInputNumberRange,
  integerPositive: AInputNumber,
  integerPositiveRange: AInputNumberRange,
  integerRange: AInputNumberRange,
  multiselect: ASelect,
  natural: AInput,
  number: AInputNumber,
  numberRange: AInputNumberRange,
  oneCheckbox: AOneCheckbox,
  password: AInput,
  radio: ARadio,
  select: ASelect,
  switch: ASwitch,
  template: ATemplate,
  text: AInput,
  textarea: ATextarea,
  tinymce: ATinymce,
};
