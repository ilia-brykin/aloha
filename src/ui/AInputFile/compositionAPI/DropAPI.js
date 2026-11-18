import {
  ref,
  toRef,
} from "vue";

export default function DropAPI(props, {
  addFiles,
}) {
  const disabled = toRef(props, "disabled");

  const isDragOver = ref(false);
  // dragenter and dragleave fire for every child element, so they are counted
  let dragCounter = 0;

  const hasFiles = $event => {
    const TYPES = $event.dataTransfer?.types;
    return !TYPES || Array.from(TYPES).includes("Files");
  };

  const onDragenter = $event => {
    if (disabled.value || !hasFiles($event)) {
      return;
    }
    $event.preventDefault();
    dragCounter++;
    isDragOver.value = true;
  };

  const onDragover = $event => {
    if (!hasFiles($event)) {
      return;
    }
    // Without preventDefault the browser opens the dropped file
    $event.preventDefault();
    if ($event.dataTransfer) {
      $event.dataTransfer.dropEffect = disabled.value ? "none" : "copy";
    }
  };

  const onDragleave = () => {
    dragCounter = Math.max(0, dragCounter - 1);
    if (dragCounter === 0) {
      isDragOver.value = false;
    }
  };

  const onDrop = $event => {
    $event.preventDefault();
    dragCounter = 0;
    isDragOver.value = false;
    if (disabled.value) {
      return;
    }
    const FILES = $event.dataTransfer?.files;
    if (FILES?.length) {
      addFiles(Array.from(FILES));
    }
  };

  return {
    isDragOver,
    onDragenter,
    onDragleave,
    onDragover,
    onDrop,
  };
}
