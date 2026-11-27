import {
  computed,
  ref,
} from "vue";

export default function JumperAPI({
  goToPage = () => {},
  maxItems = computed(() => 1),
}) {
  const jumperValue = ref("");
  const isJumperError = ref(false);

  const onJumperInput = $event => {
    jumperValue.value = $event.target.value;
    isJumperError.value = false;
  };

  // only whole numbers from 1 to the last page, else an error and the focus stays in the field
  const onJumperSubmit = $event => {
    $event.preventDefault();
    const VALUE = `${ jumperValue.value }`.trim();
    const PAGE = /^\d+$/.test(VALUE) ? Number(VALUE) : NaN;
    if (!(PAGE >= 1 && PAGE <= maxItems.value)) {
      isJumperError.value = true;
      return;
    }
    jumperValue.value = "";
    goToPage(PAGE);
  };

  return {
    isJumperError,
    jumperValue,
    onJumperInput,
    onJumperSubmit,
  };
}
