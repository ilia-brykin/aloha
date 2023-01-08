import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const type = toRef(props, "type");
  const isStepsJustified = toRef(props, "isStepsJustified");

  const classWizard = computed(() => {
    let classWizardLocal = `a_wizard a_wizard_${ type.value }`;
    if (isStepsJustified.value) {
      classWizardLocal += " a_wizard_justified";
    }
    return classWizardLocal;
  });

  return {
    classWizard,
  };
}
