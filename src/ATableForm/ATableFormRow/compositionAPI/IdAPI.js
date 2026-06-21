import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");
  const isHeader = toRef(props, "isHeader");
  const isFooter = toRef(props, "isFooter");
  const rowIndex = toRef(props, "rowIndex");

  const idTr = computed(() => {
    return `${ id.value }_${ rowIndex.value }${ isHeader.value ? "_header" : "" }${ isFooter.value ? "_footer" : "" }`;
  });

  return {
    idTr,
  };
}
