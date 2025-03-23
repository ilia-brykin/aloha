import AFieldset from "./AFieldset/AFieldset";
import AGroup from "./AGroup/AGroup";

import {
  AFormPluginOptions,
} from "../plugins/AFormPlugin";

export default {
  fieldset: AFieldset,
  group: AGroup,
  ...AFormPluginOptions.containerComponents,
};
