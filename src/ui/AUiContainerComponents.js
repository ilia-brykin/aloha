import AFieldset from "./AFieldset/AFieldset";
import AGroup from "./AGroup/AGroup";

import {
  formPluginOptions,
} from "../plugins/AFormPlugin";

export default {
  fieldset: AFieldset,
  group: AGroup,
  ...formPluginOptions.containerComponents,
};
