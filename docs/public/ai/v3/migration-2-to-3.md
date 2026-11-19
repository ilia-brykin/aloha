# Migrate Aloha Vue 2.x to 3.x

Check the installed release, then consult the [2.x to 3.x migration guide](https://ilia-brykin.github.io/aloha/migration-2.x-3.0.x) and [changelog](https://github.com/ilia-brykin/aloha/blob/master/CHANGELOG.md).

1. Load the 3.x stylesheet through `aloha-vue/aloha-vue.css`. Move theme overrides for colors, spacing, radius and focus to [3.x CSS tokens](./theming.md).
2. Review class selectors and icon overrides against the migration guide. Several defaults changed even when the JavaScript prop remained available.
3. Update legacy rating configurations. For example, pass `max` instead of `rating` and `allowHalf` instead of `halfIcon`. Use `clearable` for removing a rating.
4. Check file selection, removal and upload state when migrating `AInputFile`. The new chooser supports rejected files, append mode, dropzones and preview.
5. Recheck keyboard focus, accessible names, focus rings and visible error messages in forms, popups and navigation. Test both light and dark themes if the application supports them.
