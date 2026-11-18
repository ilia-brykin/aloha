import {
  computed,
  toRef,
} from "vue";

const INPUTMODES = {
  numeric: "numeric",
};

export default function AttributesAPI(props) {
  const autocomplete = toRef(props, "autocomplete");
  const charType = toRef(props, "charType");
  const inputmode = toRef(props, "inputmode");
  const mask = toRef(props, "mask");
  const size = toRef(props, "size");
  const variant = toRef(props, "variant");

  const inputmodeLocal = computed(() => {
    return inputmode.value || INPUTMODES[charType.value] || "text";
  });

  const typeLocal = computed(() => {
    return mask.value ? "password" : "text";
  });

  const getAutocomplete = ({ index }) => {
    // Only the first cell gets the code from the browser (one-time-code), it is spread over the cells.
    return index === 0 ? autocomplete.value : "off";
  };

  const classLocal = computed(() => {
    return [
      "a_input_otp",
      `a_input_otp_${ variant.value }`,
      {
        [`a_input_otp_${ size.value }`]: !!size.value,
      },
    ];
  });

  return {
    classLocal,
    getAutocomplete,
    inputmodeLocal,
    typeLocal,
  };
}
