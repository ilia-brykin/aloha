import {
  computed,
  toRef,
} from "vue";

/*
 * SCSS files with component tokens as text. The component is registered as an async component,
 * so this chunk is loaded only on pages that show a table.
 */
const SCSS_FILES = import.meta.glob([
  "../../../../../../scss/components/**/*.scss",
  "../../../../../../scss/utils/*.scss",
], {
  query: "?raw",
  import: "default",
  eager: true,
});

const getFilePath = file => `../../../../../../scss/${ file }.scss`;

export default function SourceAPI(props) {
  const files = toRef(props, "files");
  const source = toRef(props, "source");

  const filesArray = computed(() => {
    if (!files.value) {
      return [];
    }
    return Array.isArray(files.value) ? files.value : [files.value];
  });

  const sourcesFromFiles = computed(() => {
    return filesArray.value.map(file => {
      const SOURCE = SCSS_FILES[getFilePath(file)];
      if (SOURCE === undefined) {
        console.warn(`AlohaTableCssVars: scss/${ file }.scss not found`);
        return "";
      }
      return SOURCE;
    });
  });

  const sourceLocal = computed(() => {
    if (source.value) {
      return source.value;
    }
    return sourcesFromFiles.value;
  });

  return {
    sourceLocal,
  };
}
