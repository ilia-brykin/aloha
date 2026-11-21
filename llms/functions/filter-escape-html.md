# filterEscapeHtml

Escapes HTML special characters in a string to prevent XSS attacks.

This function takes a string input and converts special characters (such as , &, etc.) to their corresponding HTML entities (e.g., &lt;, &gt;, &amp;, etc.), making the string safe to render as HTML.

## Import as Function

```js
import { filterEscapeHtml } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterEscapeHtml,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterEscapeHtml(value)
```

- **value** (String): The string containing potentially unsafe HTML

## Basic usage

```js
filterEscapeHtml("<script>alert('XSS Attack')</script>");
// &lt;script&gt;alert("XSS Attack")&lt;/script&gt;

filterEscapeHtml("Hello, World!");
// Hello, World!
```
