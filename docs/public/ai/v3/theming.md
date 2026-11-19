# Theming Aloha Vue 3

Import `aloha-vue/aloha-vue.css` in the application entry point. Customize the library through CSS custom properties on `:root` or a scoped `.a_theme` region.

```css
:root {
  --a_color_primary_h: 215;
  --a_color_primary_s: 75%;
  --a_color_primary_l: 43%;
}
```

- Set `data-a-theme="light"`, `"dark"` or `"auto"` on the document or themed region. `auto` follows the operating system color preference.
- Set `data-a-density="compact"` or `"comfortable"` to change control heights and padding.
- Base tokens feed the derived palette and component tokens. Override a component token such as one of the `--a_btn_*` properties for component-specific changes.
- The library declares `aloha.reset`, `aloha.tokens`, `aloha.base`, `aloha.components` and `aloha.utilities` in that order. Normal declarations in unlayered application CSS take precedence over normal declarations in these layers.
- Check contrast and the `:focus-visible` ring in both themes when changing colors. For content teleported outside a scoped region, apply the required theme at its destination.

[Interactive theming guide and token browser](https://ilia-brykin.github.io/aloha/theming)
