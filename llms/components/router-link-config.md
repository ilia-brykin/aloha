# ARouterLinkConfig (Router link config)

The **ARouterLinkConfig** component provides an interface for configuring navigation links with route, query, params, and target values. It is useful when links need to be built dynamically from form data.

## Basic usage

*props: `model-value`, `label`*

```html
<a-router-link-config
  v-model="model"
  :required="true"
  label="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigReadonly",
  components: {
    ARouterLinkConfig,
  },
  setup() {
    const model = ref({
      route: "NotFoundTest",
      query: {
        key: "Aloha",
      },
    });
    
    return {
      model,
    };
  },
};
```

## Using **label-description**

This example shows how to use **label-description** to add additional description to the component label. This allows providing the user with more detailed information about the purpose of the field.

*props: `label-description`*

```html
<a-router-link-config
  v-model="model"
  label="Router"
  label-description="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigLabelDescription",
  components: {
    ARouterLinkConfig,
  },
  setup() {
    const model = ref({
      route: "NotFoundTest",
      query: {
        key: "Aloha",
      },
    });
    
    return {
      model,
    };
  },
};
```

## Type

This example shows how to use the **type** prop to switch between single-route and multi-route selection modes.

*props: `type`*

```html
<a-router-link-config
  v-model="model1"
  :required="true"
  label="Select"
  type="selectRoute"
></a-router-link-config>
<div>model1: {{ model1 }}</div>
<a-router-link-config
  v-model="model2"
  :required="true"
  class="a_mt_3"
  label="Select"
  type="multiselectRoute"
></a-router-link-config>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigType",
  components: {
    ARouterLinkConfig,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    
    return {
      model1,
      model2,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`, `readonly-default-route`, `readonly-default-param`, `readonly-default-query`, `readonly-default-target`*

```html
<a-router-link-config
  :model-value="model1"
  :readonly="true"
  label="Router 1"
  readonly-default-param="-"
></a-router-link-config>
<a-router-link-config
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Router 2"
  readonly-default-query="-"
  readonly-default-target="-"
></a-router-link-config>
<a-router-link-config
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Router 3"
></a-router-link-config>
<a-router-link-config
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Router 4"
  readonly-default="-"
></a-router-link-config>
<a-router-link-config
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Router 5"
  readonly-default-route="-"
></a-router-link-config>
```

```js
import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigReadonly",
  components: {
    ARouterLinkConfig,
  },
  setup() {
    const model1 = ref({
      route: "NotFoundTest",
      param: {
        id: 123,
      },
      query: {
        key: "Aloha",
      },
      target: "_self",
    });
    const model2 = ref({
      route: "PageQuickStart",
    });
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};
```

## Translations

| key | en |
| --- | --- |
| `_A_ROUTER_LINK_CONFIG_HELP_TEXT_PARAM_` | Dynamic parameters are used in routes to pass data within the path. They are denoted by a colon `:` before the parameter name, for example: `/user/:id`. When navigating, this parameter is replaced with a specific value, such as: `/user/123`. |
| `_A_ROUTER_LINK_CONFIG_HELP_TEXT_QUERY_` | URL parameters allow passing additional information in the request. They are added after the `?` symbol in the address bar and follow the format "key=value". For example: `?limit=10&sort=asc`. |
| `_A_ROUTER_LINK_CONFIG_HELP_TEXT_ROUTE_` | The address determines where the link will navigate. It can be static (e.g., `/home`) or contain dynamic parameters (e.g., `/user/:id`). Select the address for navigation. |
| `_A_ROUTER_LINK_CONFIG_HELP_TEXT_TARGET_` | Defines where the link will open. Available options: in the same window (`_self`), in a new window or tab (`_blank`), in the parent frame (`_parent`), or in the outermost frame (`_top`). |
| `_A_ROUTER_LINK_CONFIG_LABEL_PARAM_` | Dynamic parameters |
| `_A_ROUTER_LINK_CONFIG_LABEL_QUERY_` | URL parameters |
| `_A_ROUTER_LINK_CONFIG_LABEL_ROUTE_` | Select address |
| `_A_ROUTER_LINK_CONFIG_LABEL_TARGET_` | target attribute |
