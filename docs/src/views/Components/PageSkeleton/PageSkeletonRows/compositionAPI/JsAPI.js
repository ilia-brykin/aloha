export default function JsAPI() {
  const codeJs = `import {
  ASkeleton,
} from "aloha-vue";

export default {
  name: "PageSkeletonRows",
  components: {
    ASkeleton,
  },
};`;

  return {
    codeJs,
  };
}
