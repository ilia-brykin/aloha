export default function JsAPI() {
  const codeJs = `import {
  AAvatar,
  AIcon,
} from "aloha-vue";

export default {
  name: "PageAvatarContent",
  components: {
    AAvatar,
    AIcon,
  },
};`;

  return {
    codeJs,
  };
}
