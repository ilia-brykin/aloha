import AUiComponents from "../../../../ui/AUiComponents";
import AUiContainerComponents from "../../../../ui/AUiContainerComponents";
import {
  formPluginOptions,
} from "../../../../plugins/AFormPlugin";

export default function ComponentTypesAPI() {
  const componentTypesMapping = () => ({
    ...AUiComponents,
    ...AUiContainerComponents,
    ...formPluginOptions.components,
    ...formPluginOptions.containerComponents,
  });

  return {
    componentTypesMapping,
  };
}
