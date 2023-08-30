import AUiComponents from "../../../../ui/AUiComponents";
import AUiContainerComponents from "../../../../ui/AUiContainerComponents";

export default function ComponentTypesAPI() {
  const componentTypesMapping = {
    ...AUiComponents,
    ...AUiContainerComponents,
  };

  return {
    componentTypesMapping,
  };
}
