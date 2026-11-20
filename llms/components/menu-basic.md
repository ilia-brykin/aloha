# (Menu)

AMenu provides navigation with nested panels, search, groups and disabled links.

## Nested menu with search

Open Components → Form controls to explore nested panels, or search for Input. Scroll the menu inside the container, which has a fixed height of 24rem. Use the button above to toggle the menu, including on mobile. The examples do not change body classes or show a mobile backdrop. Set `is-inline` to true to place the menu in the normal document flow and fill the height of its container. Give the container an explicit height.

*props: `is-inline, data, key-children`*

```html
<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_nested_toggle' }"
  menu-id="docs_menu_nested"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_nested"
    key-children="children"
  />
</div>
```

```js
import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const menuItems = [
      {
        id: "components",
        label: "Components",
        icon: "MenuAppFill",
        children: [
          {
            id: "accordion",
            label: "Accordion",
            to: { name: "PageAccordion" },
          },
          {
            id: "forms",
            label: "Form controls",
            children: [
              {
                id: "input",
                label: "Input",
                to: { name: "PageInput" },
              },
              {
                id: "select",
                label: "Select",
                to: { name: "PageSelect" },
              },
            ],
          },
        ],
      },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "button", label: "Button", icon: "EjectFill", to: { name: "PageButton" } },
      { id: "collapse", label: "Collapse", icon: "ArrowsCollapse", to: { name: "PageCollapse" } },
      { id: "dropdown", label: "Dropdown", icon: "MenuDown", to: { name: "PageDropdown" } },
      { id: "link", label: "Link", icon: "BoxArrowUpRight", to: { name: "PageLink" } },
      { id: "list", label: "List", icon: "ListUl", to: { name: "PageList" } },
      { id: "modal", label: "Modal", icon: "Window", to: { name: "PageModal" } },
      { id: "tabs", label: "Tabs", icon: "SegmentedNav", to: { name: "PageTabs" } },
      { id: "translation", label: "Translation", icon: "Translate", to: { name: "PageTranslation" } },
    ];

    return {
      menuItems,
    };
  },
};
```

## Groups and disabled links

The group field groups links under headings. The Notification link is disabled, and has-search is false. Scroll the menu inside the 24rem container and use the button above to open or close it.

*props: `is-inline, data, key-group, has-search`*

```html
<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_groups_toggle' }"
  menu-id="docs_menu_groups"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_groups"
    :has-search="false"
  />
</div>
```

```js
import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const menuItems = [
      { id: "input", group: "Forms", label: "Input", icon: "FileEarmarkText", to: { name: "PageInput" } },
      { id: "select", group: "Forms", label: "Select", icon: "ListUl", to: { name: "PageSelect" } },
      { id: "checkbox", group: "Forms", label: "Checkbox", icon: "CheckLg", to: { name: "PageCheckbox" } },
      { id: "radio", group: "Forms", label: "Radio", icon: "CheckLg", to: { name: "PageRadio" } },
      { id: "alert", group: "Feedback", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "loading", group: "Feedback", label: "Loading", icon: "HourglassSplit", to: { name: "PageLoading" } },
      {
        id: "notification",
        group: "Feedback",
        label: "Notification (disabled)",
        icon: "Bell",
        to: { name: "PageNotification" },
        disabled: true,
      },
      { id: "modal", group: "Overlays", label: "Modal", icon: "Window", to: { name: "PageModal" } },
      { id: "dropdown", group: "Overlays", label: "Dropdown", icon: "MenuDown", to: { name: "PageDropdown" } },
    ];

    return {
      menuItems,
    };
  },
};
```

## Menu behind a button (only-mobile)

With `only-mobile` the menu works like the mobile menu at every screen width: it is closed and only the button is visible. The button opens the menu; a click on a link, Esc or the backdrop (`use-backdrop-mobile`) closes it. The window width does not matter. Give the toggle button `:only-mobile="true"` as well, otherwise it is hidden on the desktop, and connect both with the same `menu-id`.

*props: `only-mobile`*

```html
<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_only_mobile_toggle' }"
  :only-mobile="true"
  menu-id="docs_menu_only_mobile"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :has-search="false"
    :is-inline="true"
    :only-mobile="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_only_mobile"
  />
</div>
```

```js
import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const menuItems = [
      { id: "input", label: "Input", icon: "FileEarmarkText", to: { name: "PageInput" } },
      { id: "select", label: "Select", icon: "ListUl", to: { name: "PageSelect" } },
      { id: "checkbox", label: "Checkbox", icon: "CheckLg", to: { name: "PageCheckbox" } },
      { id: "radio", label: "Radio", icon: "CheckLg", to: { name: "PageRadio" } },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "modal", label: "Modal", icon: "Window", to: { name: "PageModal" } },
    ];

    return {
      menuItems,
    };
  },
};
```

## Search translated DOM text

The `search-in-dom` prop defaults to false. When true, search reads the rendered labels in the source menu panels instead of labels in data. Turn on the translation switch, then search for **Eingabe** or **Auswahl**: the data still contains Input and Select. Results, highlighting and parent labels use the DOM text. Text is reread when the search query changes, including in closed submenus. Custom slots should preserve the supplied link id and wrap the label in `.a_menu__link__text`. Turn the switch off to restore the original English labels.

*props: `search-in-dom, is-inline, data, key-children`*

```html
<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_dom_toggle' }"
  menu-id="docs_menu_dom"
/>
<a-switch
  v-model="isTranslated"
  label="Translate DOM to German"
  @update:model-value="translateMenu"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :search-in-dom="true"
    :use-backdrop-mobile="false"
    key-children="children"
    menu-id="docs_menu_dom"
  />
</div>
```

```js
import {
  ref,
} from "vue";

import {
  AMenu,
  AMenuButtonToggle,
  ASwitch,
} from "aloha-vue";
import {
  forEach,
} from "lodash-es";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
    ASwitch,
  },
  setup() {
    const isTranslated = ref(false);

    const menuItems = [
      {
        id: "forms",
        label: "Forms",
        children: [
          { id: "input", label: "Input", to: { name: "PageInput" } },
          { id: "select", label: "Select", to: { name: "PageSelect" } },
          { id: "checkbox", label: "Checkbox", to: { name: "PageCheckbox" }, disabled: true },
        ],
      },
      { id: "button", label: "Button", to: { name: "PageButton" } },
      { id: "alert", label: "Alert", to: { name: "PageAlert" } },
    ];

    const translateMenu = value => {
      forEach({
        forms: ["Forms", "Formulare"],
        input: ["Input", "Eingabe"],
        select: ["Select", "Auswahl"],
        checkbox: ["Checkbox", "Kontrollkästchen"],
        button: ["Button", "Schaltfläche"],
        alert: ["Alert", "Hinweis"],
      }, (labels, id) => {
        const LINK = document.getElementById(`docs_menu_dom_${ id }_link`);
        LINK.querySelector(".a_menu__link__text").textContent = labels[value ? 1 : 0];
      });
    };

    return {
      isTranslated,
      menuItems,
      translateMenu,
    };
  },
};
```

## Custom data keys

Map existing data fields with `key-id`, `key-label`, `key-icon`, `key-group` and `key-children`. This example uses code, title, symbol, section and items without renaming the source fields. Routes still use `to`. Open Form controls or search for Input.

*props: `key-id, key-label, key-icon, key-group, key-children`*

```html
<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_keys_toggle' }"
  menu-id="docs_menu_keys"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_keys"
    key-id="code"
    key-label="title"
    key-icon="symbol"
    key-group="section"
    key-children="items"
  />
</div>
```

```js
import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const menuItems = [
      {
        code: "forms",
        title: "Form controls",
        symbol: "FileEarmarkText",
        section: "Components",
        items: [
          { code: "input", title: "Input", to: { name: "PageInput" } },
          { code: "select", title: "Select", to: { name: "PageSelect" } },
          { code: "checkbox", title: "Checkbox", to: { name: "PageCheckbox" } },
        ],
      },
      {
        code: "navigation",
        title: "Navigation",
        symbol: "MenuAppFill",
        section: "Components",
        items: [
          { code: "tabs", title: "Tabs", to: { name: "PageTabs" } },
          { code: "link", title: "Link", to: { name: "PageLink" } },
        ],
      },
      { code: "alert", title: "Alert", symbol: "ExclamationTriangle", section: "Feedback", to: { name: "PageAlert" } },
      { code: "modal", title: "Modal", symbol: "Window", section: "Feedback", to: { name: "PageModal" } },
    ];

    return {
      menuItems,
    };
  },
};
```

## Long breadcrumbs and submenu counts

Open Components → Form controls → Text fields. With `is-breadcrumbs-truncated`, parent links that do not fit move into the breadcrumb dropdown. The switch controls `show-count-children` so you can show or hide submenu item counts.

*props: `is-breadcrumbs-truncated, show-count-children`*

```html
<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_breadcrumbs_toggle' }"
  menu-id="docs_menu_breadcrumbs"
/>
<a-switch
  v-model="showCountChildren"
  label="Show submenu item counts"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_breadcrumbs"
    key-children="children"
    :is-breadcrumbs-truncated="true"
    :show-count-children="showCountChildren"
  />
</div>
```

```js
import {
  ref,
} from "vue";

import {
  AMenu,
  AMenuButtonToggle,
  ASwitch,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
    ASwitch,
  },
  setup() {
    const showCountChildren = ref(true);

    const menuItems = [
      {
        id: "components",
        label: "Components and reusable interface patterns",
        icon: "MenuAppFill",
        children: [
          {
            id: "forms",
            label: "Form controls and data entry components",
            children: [
              {
                id: "text",
                label: "Text fields and numeric input controls",
                children: [
                  { id: "input", label: "Input", to: { name: "PageInput" } },
                  { id: "input-number", label: "Input number", to: { name: "PageInputNumber" } },
                ],
              },
              { id: "select", label: "Select", to: { name: "PageSelect" } },
            ],
          },
          { id: "button", label: "Button", to: { name: "PageButton" } },
        ],
      },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
    ];

    return {
      menuItems,
      showCountChildren,
    };
  },
};
```

## CSS variables (`scss/components/AMenu.scss`, `scss/components/AVerticalScroll.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_menu_width_expanded` |  | Width of the open menu. The page next to it is shifted by this width. |
| `--a_menu_width_collapsed` |  | Width of the closed menu (icons only). The page next to it is shifted by this width. |
| `--a_menu_transition` |  | Duration of the animation of the toggle button bars. |
| `--a_menu_page_bg` |  | Background of the page area next to the menu (.a_menu__page). |
| `--a_menu_width` |  | Width of the menu element. |
| `--a_menu_top` |  | Top offset of the menu, e.g. the height of a fixed header above it. |
| `--a_menu_navbar_top_height` |  | Height of the top bar with the toggle button and the search. |
| `--a_menu_navbar_top_padding` |  | Padding of the top bar. |
| `--a_menu_navbar_top_margin_bottom` |  | Space below the top bar. |
| `--a_menu_background` |  | Background of the menu and its panels. |
| `--a_menu_border_color` |  | Color of the right border of the menu and of the lines between panels and items. |
| `--a_menu_box_shadow_color` |  | Color of the menu shadow. |
| `--a_menu_box_shadow_size` |  | Offsets, blur and spread of the menu shadow. |
| `--a_menu_panel_child_offset` |  | Start position of a submenu panel before it slides in (translateX). |
| `--a_menu_panel_iconpanel_size` |  | Width of the icon column: indent of the list header and left position of submenu panels. |
| `--a_menu_panel_color` |  | Text color of the panels. |
| `--a_menu_panel_secondary_bg` |  | Background of a submenu panel. |
| `--a_menu_panel_main_link_hover_color` |  | Text color of a hovered link in the main panel. |
| `--a_menu_panel_main_link_hover_bg` |  | Background of a hovered link in the main panel. |
| `--a_menu_panel_main_link_padding_left` |  | Space between the icon and the text of a link in the main panel. |
| `--a_menu_link_color` |  | Text color of a link. |
| `--a_menu_link_hover_color` |  | Text color of a hovered link. |
| `--a_menu_link_hover_bg` |  | Background of a hovered link. |
| `--a_menu_listitem_padding` |  | Padding of a list item in the main panel. |
| `--a_menu_listitem_panel_secondary_padding_x` |  | Horizontal padding of a list item in a submenu panel and of the panel header. |
| `--a_menu_listitem_panel_secondary_padding_y` |  | Vertical padding of a list item in a submenu panel and of the panel header. |
| `--a_menu_link_padding_x` |  | Horizontal padding of a link. |
| `--a_menu_link_padding_y` |  | Vertical padding of a link. |
| `--a_menu_link_border_color` |  | Border color of a link. |
| `--a_menu_link_border_radius` |  | Corner radius of a link. |
| `--a_menu_link_focus_box_shadow` |  | Focus ring of a link. |
| `--a_menu_icon_color` |  | Color of a link icon. |
| `--a_menu_list_header_bg` |  | Background of the list header in a panel. |
| `--a_menu_breadcrumb_min_height` |  | Height of the breadcrumb bar above a submenu panel. |
| `--a_menu_breadcrumb_border_bottom_width` |  | Thickness of the line under the breadcrumbs of a submenu panel. |
| `--a_menu_submenu_open_bg` |  | Background of the active link and of a link whose submenu is open. Also the color of the submenu panel border. |
| `--a_menu_submenu_open_color` |  | Text and icon color of the active link and of a link whose submenu is open. |
| `--a_menu_submenu_border_radius` |  | Top left corner radius of an open submenu panel. |
| `--a_menu_submenu_border_width` |  | Width of the left and top border of an open submenu panel. |
| `--a_menu_search_height` |  | Height of the search field in the top bar. |
| `--a_menu_close_panel_width` |  | Width of a submenu panel shown next to the closed menu. |
| `--a_menu_close_panel_max_height` |  | Maximum height of a submenu panel next to the closed menu. Longer content scrolls. |
| `--a_menu_close_panel_border_radius` |  | Corner radius of a submenu panel next to the closed menu. |
| `--a_menu_close_panel_box_shadow_color` |  | Shadow color of a submenu panel next to the closed menu. |
| `--a_menu_close_panel_box_shadow_size` |  | Offsets, blur and spread of the shadow of a submenu panel next to the closed menu. |
| `--a_menu_close_panel_header_color` |  | Text color of the panel header. |
| `--a_menu_close_panel_header_border_bottom_color` |  | Color of the line under the panel header. |
| `--a_menu_close_panel_header_border_bottom_width` |  | Thickness of the line under the panel header. |
| `--a_menu_link_line_horizontal_display` |  | Display of the separator line between list items. Set to block to show it. |
| `--a_menu_btn_toggle_width` |  | Width of the toggle button. |
| `--a_menu_btn_toggle_height` |  | Height of the toggle button. |
| `--a_menu_btn_toggle_bar_width` |  | Width of a bar of the toggle icon. |
| `--a_menu_btn_toggle_bar_height` |  | Thickness of a bar of the toggle icon. |
| `--a_menu_btn_toggle_bar_1_top` |  | Top position of the first bar of the toggle icon. |
| `--a_menu_btn_toggle_bar_2_top` |  | Top position of the middle bar of the toggle icon. The bars of the close icon (×) meet here. |
| `--a_menu_btn_toggle_bar_3_top` |  | Top position of the last bar of the toggle icon. |
| `--a_menu_btn_toggle_bar_bg` |  | Color of the bars of the toggle icon. |
| `--a_vertical_scroll_wrapper_bg` |  | Background of the areas with the scroll up and scroll down buttons. |
| `--a_vertical_scroll_wrapper_height` |  | Height of the areas with the scroll buttons. The content gets the same padding at the top and bottom. |
