import {
  computed,
  toRef,
} from "vue";

export default function DataFormAPI(props, {
  changeQueryModel = () => {},
  changeRouteModel = () => {},
  changeTargetModel = () => {},
  childrenForParam = computed(() => []),
  hasParam = computed(() => false),
  htmlIdLocal = computed(() => ""),
  routesLocal = computed(() => []),
}) {
  const helpTextParam = toRef(props, "helpTextParam");
  const helpTextQuery = toRef(props, "helpTextQuery");
  const helpTextRoute = toRef(props, "helpTextRoute");
  const helpTextTarget = toRef(props, "helpTextTarget");
  const keyIdRoute = toRef(props, "keyIdRoute");
  const keyLabelCallbackRoute = toRef(props, "keyLabelCallbackRoute");
  const keyLabelRoute = toRef(props, "keyLabelRoute");
  const labelParam = toRef(props, "labelParam");
  const labelQuery = toRef(props, "labelQuery");
  const labelRoute = toRef(props, "labelRoute");
  const labelTarget = toRef(props, "labelTarget");
  const modelValue = toRef(props, "modelValue");
  const readonlyDefaultParam = toRef(props, "readonlyDefaultParam");
  const readonlyDefaultQuery = toRef(props, "readonlyDefaultQuery");
  const readonlyDefaultRoute = toRef(props, "readonlyDefaultRoute");
  const readonlyDefaultTarget = toRef(props, "readonlyDefaultTarget");
  const required = toRef(props, "required");
  const sortOrderRoute = toRef(props, "sortOrderRoute");
  const targets = toRef(props, "targets");


  const dataFormChildren = computed(() => {
    return [
      {
        id: "route",
        change: changeRouteModel,
        data: routesLocal.value,
        deselectable: true,
        helpText: helpTextRoute.value,
        idPrefix: htmlIdLocal.value,
        isLabelFloat: false,
        keyId: keyIdRoute.value,
        keyLabel: keyLabelRoute.value,
        keyLabelCallback: keyLabelCallbackRoute.value,
        label: labelRoute.value,
        readonlyDefault: readonlyDefaultRoute.value,
        required: required.value,
        search: true,
        sortOrder: sortOrderRoute.value,
        type: "select",
      },
      {
        id: "param",
        children: childrenForParam.value,
        helpText: helpTextParam.value,
        idPrefix: htmlIdLocal.value,
        isRender: hasParam.value,
        label: labelParam.value,
        readonlyDefault: readonlyDefaultParam.value,
        required: required.value,
        type: "fieldset",
      },
      {
        isHide: !modelValue.value?.route,
        id: "query",
        change: changeQueryModel,
        heightCss: "100px",
        helpText: helpTextQuery.value,
        idPrefix: htmlIdLocal.value,
        label: labelQuery.value,
        readonlyDefault: readonlyDefaultQuery.value,
        type: "json",
      },
      {
        isHide: !modelValue.value?.route,
        id: "target",
        change: changeTargetModel,
        data: targets.value,
        deselectable: true,
        helpText: helpTextTarget.value,
        idPrefix: htmlIdLocal.value,
        isLabelFloat: false,
        keyId: "id",
        keyLabel: "label",
        label: labelTarget.value,
        readonlyDefault: readonlyDefaultTarget.value,
        translateData: true,
        type: "select",
      },
    ];
  });

  return {
    dataFormChildren,
  };
}
