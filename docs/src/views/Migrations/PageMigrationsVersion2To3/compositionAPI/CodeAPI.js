export default function CodeAPI() {
  const codeConfigBefore = `// 2.x: SCSS variables
@use "aloha-vue/scss/utils/color_utils" with (
  $a_primary: #0775b0,
  $a_border_radius: .5rem,
);`;

  const codeConfigAfter = `/* 3.x: CSS custom properties, no rebuild needed */
:root {
  --a_primary_h: 201;
  --a_primary_s: 92%;
  --a_primary_l: 36%;
  --a_radius: .5rem;
}`;

  const codeRgb = `/* 2.x */
background-color: rgba(var(--a_color_primary_rgb), .5);

/* 3.x */
background-color: hsl(var(--a_primary_h) var(--a_primary_s) var(--a_primary_l) / .5);`;

  const codeBtnClose = `import {
  AButton,
  AIconClose,
} from "aloha-vue";

h(AButton, {
  class: "a_btn_close",
  iconLeft: AIconClose,
  textScreenReader: "_CLOSE_",
});`;

  return {
    codeBtnClose,
    codeConfigAfter,
    codeConfigBefore,
    codeRgb,
  };
}
