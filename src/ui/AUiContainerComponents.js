import AFieldset from "./AFieldset/AFieldset";
import AGroup from "./AGroup/AGroup";
import AValidatedJson from "./AValidatedJson/AValidatedJson";

import {
  AFormPluginOptions,
} from "../plugins/AFormPlugin";

export default {
  fieldset: AFieldset,
  group: AGroup,
  validatedJson: AValidatedJson,
  ...AFormPluginOptions.containerComponents,
};
