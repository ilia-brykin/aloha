export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref([]);
    // groups (key-group); "add all" under the list and Ctrl+Enter
    const skills = [
      { id: "vue", label: "Vue", area: "Frontend" },
      { id: "react", label: "React", area: "Frontend" },
      { id: "svelte", label: "Svelte", area: "Frontend" },
      { id: "node", label: "Node.js", area: "Backend" },
      { id: "python", label: "Python", area: "Backend" },
      { id: "go", label: "Go", area: "Backend" },
    ];

    return {
      model,
      skills,
    };
  },
};`;

  return {
    codeJs,
  };
}
