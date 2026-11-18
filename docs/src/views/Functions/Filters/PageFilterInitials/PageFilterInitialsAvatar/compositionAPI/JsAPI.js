import {
  filterInitials,
} from "aloha-vue";

export default function JsAPI() {
  const users = [
    "Ilia Brykin",
    "Anna Maria Schmidt",
    "Ölçer Ünal",
  ].map(name => ({
    name,
    initials: filterInitials(name),
  }));

  const codeJs = `import {
  filterInitials,
} from "aloha-vue";

const users = [
  "Ilia Brykin",
  "Anna Maria Schmidt",
  "Ölçer Ünal",
].map(name => ({
  name,
  initials: filterInitials(name),
}));`;

  const codeHtml = `<div
  v-for="user in users"
  :key="user.name"
  class="a_d_flex a_align_items_center a_gap_2"
>
  <span
    class="a_rounded_circle a_bg_primary a_color_white a_d_inline_flex a_align_items_center a_justify_content_center"
    style="width: 2.5rem; height: 2.5rem;"
    aria-hidden="true"
  >{{ user.initials }}</span>
  <span>{{ user.name }}</span>
</div>`;

  return {
    codeHtml,
    codeJs,
    users,
  };
}
