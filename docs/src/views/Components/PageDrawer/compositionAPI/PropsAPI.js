import ModalPropsAPI from "../../PageModal/compositionAPI/PropsAPI";

// ADrawer has all props of AModal (the same descriptions) and the prop placement
export default function PropsAPI() {
  const {
    dataProps: modalProps,
  } = ModalPropsAPI();

  const dataProps = [
    ...modalProps,
    {
      name: "placement",
      description: "_A_DRAWER_PROPS_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "\"right\"",
      required: false,
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  return {
    dataProps,
  };
}
