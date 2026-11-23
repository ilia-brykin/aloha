import FormPropsAPI from "../../Form/PageForm/compositionAPI/PropsAPI";
import ModalPropsAPI from "../../PageModal/compositionAPI/PropsAPI";

/*
 * AModalForm passes most props to AModal and AForm, so it uses their descriptions (one translation per prop).
 * Props of AModal that AModalForm does not have:
 */
const MODAL_PROPS_EXCLUDED = [
  "close-button-attributes",
  "save-button-attributes",
  "show-close-button-header",
];
// Props of AForm with the same name in AModalForm
const FORM_PROPS = [
  "class-column-default",
  "class-columns",
  "errors",
  "id-prefix",
  "is-required",
  "model-value",
  "text-error-header",
  "text-required",
  "use-flat-errors",
  "use-flat-model",
  "use-html-id-as-key",
];
// Props of AForm with another name in AModalForm
const FORM_PROPS_RENAMED = {
  data: "data-form",
  "is-hide": "is-data-form-hide",
  "is-render": "is-data-form-render",
};

export default function PropsAPI() {
  const {
    dataProps: modalProps,
  } = ModalPropsAPI();
  const {
    dataProps: formProps,
  } = FormPropsAPI();

  const dataProps = [
    ...modalProps.filter(item => !MODAL_PROPS_EXCLUDED.includes(item.name)),
    ...formProps.filter(item => FORM_PROPS.includes(item.name)),
    ...formProps
      .filter(item => FORM_PROPS_RENAMED[item.name])
      .map(item => ({ ...item, name: FORM_PROPS_RENAMED[item.name] })),
  ].sort((a, b) => a.name.localeCompare(b.name));

  return {
    dataProps,
  };
}
