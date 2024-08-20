import {
  computed,
  ref,
} from "vue";

import {
  clone,
} from "lodash-es";

export default function ModelAPI() {
  const mainModel = ref(4200.04);
  const appliedModel = ref({
    modelSymbolsAfterDecimalDivider: 2,
    modelStep: 0.01,
    modelThousandDivider: "",
    modelDecimalDivider: ",",
  });
  const unappliedModel = ref({
    modelSymbolsAfterDecimalDivider: 2,
    modelStep: 0.01,
    modelThousandDivider: "",
    modelDecimalDivider: ",",
  });
  const exampleInputKeyStringPart = "example_input_key_";
  const exampleInputKeyNumberPart = ref(0);
  const thousandDividerCollection = [
    {
      value: "",
      label: "No",
    },
    {
      value: " ",
      label: "Empty Space",
    },
    {
      value: ".",
      label: ".",
    },
    {
      value: ",",
      label: ",",
    },
  ];
  const decimalDividerCollection = [
    {
      value: ".",
      label: ".",
    },
    {
      value: ",",
      label: ",",
    },
  ];

  const exampleInputKey = computed(() => {
    return `${ exampleInputKeyStringPart }${ exampleInputKeyNumberPart.value }`;
  });

  const applyModel = () => {
    appliedModel.value = clone(unappliedModel.value);
    exampleInputKeyNumberPart.value++;
  };

  const changeDecimalDivider = ({ model }) => {
    if (model === "." && unappliedModel.value.modelDecimalDivider === ".") {
      unappliedModel.value.modelThousandDivider = ",";
    }

    if (model === "," && unappliedModel.value.modelDecimalDivider === ",") {
      unappliedModel.value.modelThousandDivider = ".";
    }
  };

  const changeThousandDivider = ({ model }) => {
    if (model === "." && unappliedModel.value.modelThousandDivider === ".") {
      unappliedModel.value.modelDecimalDivider = ",";
    }

    if (model === "," && unappliedModel.value.modelThousandDivider === ",") {
      unappliedModel.value.modelDecimalDivider = ".";
    }
  };

  return {
    appliedModel,
    applyModel,
    decimalDividerCollection,
    changeDecimalDivider,
    changeThousandDivider,
    exampleInputKey,
    mainModel,
    thousandDividerCollection,
    unappliedModel,
  };
}
