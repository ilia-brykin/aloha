# Aloha Vue 3 quick start

This reference is based on the source build of `aloha-vue@3.0.0-alpha.1` at [commit `d40c001`](https://github.com/ilia-brykin/aloha/tree/d40c0018addf72c7fac33b40eb3146e11d493147). Check your lockfile or run `npm ls aloha-vue` to see what is installed.

The published npm tarball with the same version predates several exports present in that source build: `AAvatar`, `AAvatarGroup`, `AInputOtp`, `ASkeleton`, `ASkeletonItem`, and `ATree`. Other APIs also differ. To run this complete set of examples, use a package built from the source revision above.

In a checkout of that revision, build and pack with a supported Node.js version.

```sh
npm install
npm run build-lib
npm run build-styles
npm pack
```

In your Vue project, install the resulting tarball.

```sh
npm install /path/to/aloha/aloha-vue-3.0.0-alpha.1.tgz
```

Use a named import from `aloha-vue` in each Vue single-file component. Load the precompiled CSS once from the application entry point.

```js
import { createApp } from "vue";
import { AI18nPlugin, AMobilePlugin, ASafeHtml, i18nEN } from "aloha-vue";
import "aloha-vue/aloha-vue.css";

import App from "./App.vue";

const app = createApp(App);
app.use(AI18nPlugin, { en: i18nEN }, "en");
app.use(AMobilePlugin);
app.directive("SafeHtml", ASafeHtml);
app.mount("#app");
```

- Use the application's existing i18n setup if it already installs `AI18nPlugin`. Merge project messages with the corresponding locale export, or use `i18nAll` for the complete built-in dictionary.
- `AMobilePlugin` sets the breakpoint state consumed by responsive components such as `AWizard`. Pass the project's breakpoint configuration when needed.
- Install Vue Router if an example uses route records or router links. The menu routing example uses an `overview` route. Configure `ARouterLinkConfigPlugin` with `router.getRoutes()` when providing routes globally for `ARouterLinkConfig`.
- Install `APageTabTitlePlugin` if you want a shared base title for `APageTabTitle`. Supply the component's own title in every case.
- Register custom icon names with `AIconPlugin` if your components use them. The examples use local data. Components that fetch options or results may require the project's HTTP and data-retrieval configuration.

## Run a component example

Copy a linked `.vue` example into a Vue application using the setup above and mount it as `App.vue` or import it in a view. The examples import only the public Aloha Vue exports.

Use the versioned reference for the component's prop names and model bindings. When adapting a control, retain its accessible name and error relationships and test its keyboard interaction and focus in the final layout.

- [Component index](../../llms.txt)
- [Theming](./theming.md)
- [Migration from 2.x](./migration-2-to-3.md)
