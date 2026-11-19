---
name: aloha-vue
description: Use when building, debugging or migrating Vue applications that use aloha-vue, including UI component selection, public APIs, theming and keyboard accessibility.
---

# Aloha Vue

1. Read the nearest package manifest and lockfile or run `npm ls aloha-vue`. Use references for the installed release. Check the version at the top of a reference and the quick start for differences between published and source-built packages.
2. In a checkout of Aloha Vue, open `docs/public/llms.txt`, then the matching file under `docs/public/ai/v3/components/` and its Vue example. Outside that checkout, use [the published index](https://ilia-brykin.github.io/aloha/llms.txt).
3. Check the quick start for CSS and plugin setup. Use named imports from the package and check prop names, option shapes, emitted values and slot props in the component reference. For API details absent from the reference, follow its source link and use the source for the installed release.
4. Preserve label and error associations, keyboard interaction and focus behavior when composing or replacing controls. Check the theming guide before overriding component styles.
5. Run the consuming project's build and applicable tests. Exercise the affected flows by keyboard, including focus after popup or dialog closure when applicable.

For 2.x code, use documentation or source from the installed 2.x release. For an upgrade, use the 2.x to 3.x migration guide and verify the changes in the browser.
