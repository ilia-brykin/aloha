import {
  computed,
  reactive,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";

import LabelAPI from "../../AMenuPanelLink/compositionAPI/LabelAPI";
import SearchAPI from "../SearchAPI";

import AKeyBreadcrumbs from "../../const/AKeyBreadcrumbs";
import {
  AKeyId,
  AKeyLabel,
} from "../../../const/AKeys";

describe("AMenu search", () => {
  const ITEMS = {
    forms: { [AKeyId]: "forms", [AKeyLabel]: "Forms" },
    input: {
      [AKeyId]: "input",
      [AKeyLabel]: "Input",
      [AKeyBreadcrumbs]: [{ parentId: "forms", label: "Forms" }],
      to: { name: "input" },
      disabled: true,
    },
    missing: { [AKeyId]: "missing", [AKeyLabel]: "Eingabe missing" },
  };

  beforeEach(() => {
    document.body.innerHTML = `
      <nav id="test_menu">
        <div class="a_menu__panels__main">
          <a id="test_menu_forms_link"><span class="a_menu__link__text">Formulare</span></a>
          <div style="display: none">
            <a id="test_menu_input_link">
              <span class="a_menu__link__text"><span>Eingabe</span> [DE]</span>
              <span class="a_menu__link__counter">99</span>
            </a>
          </div>
        </div>
        <div class="a_menu__panels__main a_menu__panel_search">
          <a id="test_menu_input_link"><span class="a_menu__link__text">Stale result</span></a>
          <a id="test_menu_missing_link"><span class="a_menu__link__text">Eingabe missing</span></a>
        </div>
      </nav>`;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("searches data by default even when DOM text differs", () => {
    const search = SearchAPI(reactive({ menuId: "test_menu" }), {
      dataKeyById: computed(() => ITEMS),
    });
    search.updateModelSearch("INPUT");
    expect(search.itemsWithSearch.value).toEqual([ITEMS.input]);
    expect(search.itemsWithSearch.value[0]).toBe(ITEMS.input);
    search.updateModelSearch("Formulare");
    expect(search.itemsWithSearch.value).toEqual([]);
  });

  it("searches translated text in source panels and preserves link behavior and breadcrumbs", () => {
    const search = SearchAPI(reactive({ menuId: "test_menu", searchInDom: true }), {
      dataKeyById: computed(() => ITEMS),
    });
    search.updateModelSearch("eINGABE");
    expect(search.itemsWithSearch.value).toEqual([{
      ...ITEMS.input,
      [AKeyLabel]: "Eingabe [DE]",
      [AKeyBreadcrumbs]: [{ parentId: "forms", label: "Formulare" }],
    }]);
    const {
      label,
    } = LabelAPI(reactive({
      item: search.itemsWithSearch.value[0],
      isLinkInSearchPanel: true,
      modelSearch: "eINGABE",
    }));
    expect(label.value).toBe("<mark class=\"a_search_highlight\">Eingabe</mark> [DE]");
    expect(ITEMS.input[AKeyLabel]).toBe("Input");
    expect(ITEMS.input[AKeyBreadcrumbs][0].label).toBe("Forms");
    search.updateModelSearch("Input");
    expect(search.itemsWithSearch.value).toEqual([]);
    search.updateModelSearch("99");
    expect(search.itemsWithSearch.value).toEqual([]);
  });

  it("treats regular expression characters literally and rereads DOM for the next query", () => {
    const search = SearchAPI(reactive({ menuId: "test_menu", searchInDom: true }), {
      dataKeyById: computed(() => ITEMS),
    });
    search.updateModelSearch("[DE]");
    expect(search.itemsWithSearch.value).toHaveLength(1);
    document.querySelector("#test_menu_input_link .a_menu__link__text").textContent = "Saisie (FR)";
    search.updateModelSearch("(FR)");
    expect(search.itemsWithSearch.value[0][AKeyLabel]).toBe("Saisie (FR)");
    search.resetSearch();
    expect(search.isSearchActive.value).toBe(false);
    expect(search.itemsWithSearch.value).toEqual([]);
  });
});
