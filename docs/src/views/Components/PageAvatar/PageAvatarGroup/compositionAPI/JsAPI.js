export default function JsAPI() {
  const codeJs = `import {
  AAvatar,
  AAvatarGroup,
} from "aloha-vue";

export default {
  name: "PageAvatarGroup",
  components: {
    AAvatar,
    AAvatarGroup,
  },
};`;

  return {
    codeJs,
  };
}
