# filterJson

The function **filterJson** converts a JavaScript object or value into a formatted JSON string. It allows customization of the **replacer** (function to alter the behavior of the conversion) and indentation (number of spaces or other characters for indentation).

## Import as Function

```js
import { filterJson } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterJson,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterJson(value, { [replacer], [space=2], [isHtml=false], [jsonClass="a_code_content"], [tag="pre"] })
```

- **value** (Any): The value or JavaScript object to be converted into a JSON string
- **[replacer]** (Function | Array): A function that affects the behavior of the conversion process, or an array of strings and numbers that specifies properties of value to be included in the output. If **replacer** is an array, all elements in this array that are not strings or numbers (neither primitive values nor wrapper objects), including symbol values, are completely ignored. If **replacer** is anything other than a function or an array (e.g., null or not specified), all string-based properties of the object are included in the resulting JSON string
- **[space=2]** (Number | String): A string or number used for inserting white space (including indentation, newline characters, etc.) into the output JSON string for readability purposes. If this is a number, it indicates the number of spaces or other characters to be used as indentation, limited to a maximum of 10 (i.e., any number greater than 10 is treated as though it were 10). Values less than 1 indicate that no white space should be used. If this is a string, the string (or the first 10 characters of the string if it's longer than that) is inserted before each nested object or array. If **space** is anything other than a string or number (can be either a primitive or a wrapper object) — e.g., null or not specified — no white space is used
- **[isHtml=false]** (Boolean): Determines if the output should be formatted as HTML. When set to false, the output is returned as a plain text string.
- **[jsonClass=a_code_content]** (String): The CSS class to be applied when `isHtml` is true.
- **[tag=pre]** (String): The HTML tag to wrap the formatted JSON string when `isHtml` is true.

## Basic usage

```js
filterJson({ x: 5, y: 6 });
// {
  "x": 5,
  "y": 6
}

filterJson({ x: "aloha", y: 6 });
// {
  "x": "aloha",
  "y": 6
}

filterJson(true);
// true

filterJson("aloha");
// "aloha"

filterJson([1, "false", false]);
// [
  1,
  "false",
  false
]

filterJson([NaN, null, Infinity, undefined]);
// [
  null,
  null,
  null,
  null
]
```

## space

```js
filterJson({ x: 5, y: 6 }, { space: 0 });
// {"x":5,"y":6}

filterJson({ x: 5, y: 6 }, { space: 1 });
// {
 "x": 5,
 "y": 6
}

filterJson({ x: 5, y: 6 }, { space: "\t" });
// {
	"x": 5,
	"y": 6
}
```

## replacer

```js
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const aloha = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

filterJson(aloha, { replacer });
// {
  "week": 45,
  "month": 7
}

filterJson(aloha, { replacer: ["week", "month", "model"] });
// {
  "week": 45,
  "month": 7,
  "model": "box"
}
```

## isHtml

```js
filterJson({ x: 5, y: 6 }, { isHtml: true });
// <pre class="a_code_content">{
  "x": 5,
  "y": 6
}</pre>

filterJson({ x: 5, y: 6 }, { isHtml: false });
// {
  "x": 5,
  "y": 6
}
```

## jsonClass

```js
filterJson({ x: 5, y: 6 }, { isHtml: true, class: "aloha" });
// <pre class="a_code_content">{
  "x": 5,
  "y": 6
}</pre>
```

## tag

```js
filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "pre" });
// <pre class="a_code_content">{
  "x": 5,
  "y": 6
}</pre>

filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "div" });
// <div class="a_code_content">{
  "x": 5,
  "y": 6
}</div>
```
