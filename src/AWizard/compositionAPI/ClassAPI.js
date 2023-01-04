import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const type = toRef(props, "type");

  const classWizard = computed(() => {
    return `a_wizard a_wizard_${ type.value }`;
  });

  return {
    classWizard,
  };
}
