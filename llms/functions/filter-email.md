# filterEmail

The function **filterEmail** creates an HTML link for an email address. It checks if the email address exists and is not empty. If the conditions are met, an HTML link in the format **<a href="mailto:email" class="linkClass">email</a>** is returned.

## Import as Function

```js
import { filterEmail } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterEmail,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterEmail(email, { [linkClass] })
```

- **email** (String): The email address for which the HTML link is to be created
- **[linkClass]** (String): A CSS class that will be added to the created HTML link

## Basic usage

```js
filterEmail("example@example.com");
// <a href="mailto:example@example.com">example@example.com</a>

filterEmail(undefined);
//
```

## linkClass

```js
filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// <a href="mailto:example@example.com" class="a_btn a_btn_link">example@example.com</a>
```
