import {
  computed,
  toRef,
} from "vue";

const SWITCH_CLASS = "a_btn a_btn_switch";

export default function SwitchAPI(props) {
  const isSwitch = toRef(props, "isSwitch");
  const modelSwitch = toRef(props, "modelSwitch");

  const isSwitchActive = computed(() => {
    if (isSwitch.value) {
      return !!modelSwitch.value;
    }
    return undefined;
  });

  const switchClass = computed(() => {
    if (isSwitch.value) {
      if (modelSwitch.value) {
        return `${ SWITCH_CLASS } a_btn_switch_active`;
      }
      return SWITCH_CLASS;
    }
    return undefined;
  });

  return {
    isSwitchActive,
    switchClass,
  };
}
