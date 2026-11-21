# filterLink

The function **filterLink** creates an HTML link based on the provided URL. It allows customization of the protocol, target, CSS class, and displayed text for the link. The function checks the validity of the URL and ensures that it is safely inserted into the HTML link.

## Import as Function

```js
import { filterLink } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterLink,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterLink(url, { [linkText=""], [protocol="https://"], [target=""], [linkClass=""] })
```

- **url** (String): The URL to be inserted into the HTML link
- **[linkText=""]** (String): The text that will be displayed in the HTML link. If not specified, the URL is used
- **[protocol="https://"]** (String): The protocol to be added before the URL
- **[target=""]** (String): The **target** attribute for the HTML link, which controls the behavior when opening the link
- **[linkClass=""]** (String): A CSS class that will be added to the HTML link

## Basic usage

```js
filterLink("example.com");
// <a href="https://example.com">example.com</a>

filterLink("https://example.com");
// <a href="https://example.com">https://example.com</a>
```

## linkText

```js
filterLink("example.com", { linkText: "example" });
// <a href="https://example.com">example</a>

filterLink("https://example.com", { linkText: "Aloha" });
// <a href="https://example.com">Aloha</a>
```

## protocol

```js
filterLink("example.com", { protocol: "" });
// <a href="example.com">example.com</a>

filterLink("https://example.com", { protocol: "http://" });
// <a href="http://example.com">example.com</a>
```

## target

```js
filterLink("example.com", { target: "_blank" });
// <a href="https://example.com" target="_blank">example.com</a>

filterLink("https://example.com", { target: "_self" });
// <a href="https://example.com" target="_self">example.com</a>

filterLink("https://example.com", { target: "_parent" });
// <a href="https://example.com" target="_parent">example.com</a>

filterLink("https://example.com", { target: "_top" });
// <a href="https://example.com" target="_top">example.com</a>
```

## linkClass

```js
filterLink("example.com", { linkClass: "a_btn a_btn_link" });
// <a href="https://example.com" class="a_btn a_btn_link">example.com</a>
```
