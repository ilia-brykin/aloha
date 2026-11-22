# filterNewlines

The function **filterNewlines** shows a multi-line text, e.g. from a `textarea`, as HTML: it escapes the HTML special characters and replaces the line breaks with `<br>`. The result is safe for `v-html` and the prop `html`. In a table column use `filter: "newlines"`.

## Import as Function

```js
import { filterNewlines } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterNewlines,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterNewlines(value)
```

- **value** (String): The text with line breaks

## Basic usage

```js
filterNewlines("Line 1\nLine 2");
// Line 1<br>Line 2

filterNewlines("<b>Tom</b> & Jerry\r\nLine 2");
// &lt;b&gt;Tom&lt;/b&gt; &amp; Jerry<br>Line 2

// in a template: the result is escaped, so v-html or the prop html is safe
// <div v-html="filterNewlines(notes)"></div>
// <a-translation tag="div" :html="filterNewlines(notes)" />

// in a table column
// { label: "Notes", keyLabel: "notes", filter: "newlines" }
```
