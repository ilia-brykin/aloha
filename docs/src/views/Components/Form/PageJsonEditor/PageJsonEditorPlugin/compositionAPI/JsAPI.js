export default function JsAPI() {
  const codeJs = `import {
  h,
  markRaw,
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      primary: "#0775b0",
      danger: "#c81e29",
      text: "#000000",
      radius: 4,
    });

    // the view of a color: a swatch and the text
    const ColorView = {
      props: ["value"],
      render() {
        return h("span", { class: "a_d_inline_flex a_align_items_center a_gap_1" }, [
          h("span", { "aria-hidden": "true", style: \`display:inline-block;width:1rem;height:1rem;border-radius:.25rem;background:\${ this.value }\` }),
          this.value,
        ]);
      },
    };
    // the editor of a color: v-model and a label
    const ColorEditor = {
      props: ["modelValue", "label"],
      emits: ["update:modelValue"],
      render() {
        return h("input", {
          type: "color",
          value: this.modelValue,
          "aria-label": this.label,
          onInput: $event => this.$emit("update:modelValue", $event.target.value),
        });
      },
    };

    // a plugin: an own type, an action and a button of the toolbar (also global with AJsonEditorPlugin)
    const colorPlugin = {
      name: "color",
      types: [{
        name: "color",
        label: "_A_JSON_EDITOR_EXAMPLE_TYPE_COLOR_",
        detect: value => typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value),
        view: markRaw(ColorView),
        editor: markRaw(ColorEditor),
        validate: value => (value === "#000000" ? { level: "warning", message: "_A_JSON_EDITOR_EXAMPLE_BLACK_" } : null),
      }],
      actions: [{
        id: "invert",
        label: "_A_JSON_EDITOR_EXAMPLE_INVERT_",
        when: ({ type }) => type === "color",
        run: ({ value }) => \`#\${ (0xffffff - parseInt(value.slice(1), 16)).toString(16).padStart(6, "0") }\`,
      }],
      toolbar: [{
        id: "sort",
        label: "_A_JSON_EDITOR_EXAMPLE_SORT_ALL_",
        run: ({ document, replaceDocument }) => replaceDocument(
          Object.fromEntries(Object.entries(document).sort(([a], [b]) => a.localeCompare(b))),
          { label: "_A_JSON_EDITOR_EXAMPLE_SORT_ALL_" },
        ),
      }],
    };

    return {
      colorPlugin,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
