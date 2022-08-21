import ACheckbox from "./ACheckbox/ACheckbox";
import AInput from "./AInput/AInput";
import AOneCheckbox from "./AOneCheckbox/AOneCheckbox";
import ARadio from "./ARadio/ARadio";
import ASelect from "./ASelect/ASelect";
import ASwitch from "./ASwitch/ASwitch";
import ATemplate from "./ATemplate/ATemplate";
import ATextarea from "./ATextarea/ATextarea";

export default {
  text: AInput,
  integer: AInput,
  number: AInput,
  natural: AInput,
  password: AInput,
  email: AInput,
  textarea: ATextarea,
  select: ASelect,
  multiselect: ASelect,
  oneCheckbox: AOneCheckbox,
  checkbox: ACheckbox,
  radio: ARadio,
  switch: ASwitch,
  template: ATemplate,
};
