# filterStripHtml

The function **filterStripHtml** removes HTML tags from a string and returns its text, e.g. for previews or the `title` attribute. The contents of `<script>` and `<style>` are removed too. Use **filterEscapeHtml** to show HTML as text.

## Import as Function

```js
import { filterStripHtml } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterStripHtml,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterStripHtml(value)
```

- **value** (String): The string with HTML

## Basic usage

```js
filterStripHtml("<p>Hello <strong>World</strong></p>");
// Hello World

filterStripHtml("Tom &amp; Jerry");
// Tom & Jerry

filterStripHtml("<script>alert(1)</script>Text");
// Text
```
