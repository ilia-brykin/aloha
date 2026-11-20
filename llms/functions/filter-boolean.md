# filterBoolean

The function **filterBoolean** is used to convert a **boolean value** into translated text. It allows customization of the texts for **True** and **False** values and the option to return an empty string for **undefined** or **null**.

## Import as Function

```js
import { filterBoolean } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterBoolean,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })
```

- **value** (Any): The value to be converted into translated text
- **[trueValue="_YES_"]** (String): The translated text to be returned in case the value is **True**
- **[falseValue="_NO_"]** (String): The translated text to be returned in case the value is **False**
- **[useNil=true]** (Boolean): Indicates whether an empty string should be returned for **undefined** or **null**

## Basic usage

```js
filterBoolean(true);
// Yes
filterBoolean(false);
// No

filterBoolean(1);
// Yes
filterBoolean(0);
// No

filterBoolean("aloha");
// Yes
filterBoolean("");
// No
```

## trueValue, falseValue

```js
filterBoolean(true, { trueValue: "1", falseValue: "0" });
// 1
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// 0

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// true
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// false
```

## useNil

```js
filterBoolean(null, { useNil: true });
// 
filterBoolean(null, { useNil: false });
// No

filterBoolean(undefined, { useNil: true });
// 
filterBoolean(undefined, { useNil: false });
// No

filterBoolean("null", { useNil: true });
// Yes
filterBoolean("null", { useNil: false });
// Yes

filterBoolean("undefined", { useNil: true });
// Yes
filterBoolean("undefined", { useNil: false });
// Yes
```
