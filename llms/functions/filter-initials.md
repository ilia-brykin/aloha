# filterInitials

The function **filterInitials** returns the initials of a name, e.g. for an avatar. If a name has more words than the limit, the initials of the first words and of the last word are used.

## Import as Function

```js
import { filterInitials } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterInitials,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterInitials(value, { [limit=2], [isUppercase=true] })
```

- **value** (String): The name
- **[limit=2]** (Number): The maximum number of initials
- **[isUppercase=true]** (Boolean): Whether the initials are converted to uppercase

## Basic usage

```js
filterInitials("Ilia Brykin");
// IB

filterInitials("Anna Maria Schmidt");
// AS

filterInitials("Anna-Lena Müller");
// AM

filterInitials("Ölçer Ünal");
// ÖÜ

filterInitials("Max");
// M
```

## limit

```js
filterInitials("Anna Maria Schmidt", { limit: 3 });
// AMS

filterInitials("Anna Maria Schmidt", { limit: 1 });
// A
```

## isUppercase

```js
filterInitials("anna schmidt", { isUppercase: false });
// as
```

## Avatar

Together with the class `a_rounded_circle`. The initials are hidden from screen readers with `aria-hidden`, because the name is shown next to them.

```html
<div
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
</div>
```

```js
import {
  filterInitials,
} from "aloha-vue";

const users = [
  "Ilia Brykin",
  "Anna Maria Schmidt",
  "Ölçer Ünal",
].map(name => ({
  name,
  initials: filterInitials(name),
}));
```
