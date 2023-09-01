import {
  computed,
  h,
} from "vue";

import {
  tablePluginOptions,
} from "../../../plugins/ATablePlugin";

import {
  map,
} from "lodash-es";

export default function FiltersLayoutAPI({
  filterMainComponent,
  buttonSearchComponent,
  buttonToggleComponent,
  selectFiltersSavedComponent,
  buttonDeleteFiltersSavedComponent,
  buttonSaveTopComponent,
  addFilterSelectComponent,
}) {
  const availableElements = {
    filterMainComponent,
    buttonSearchComponent,
    buttonToggleComponent,
    selectFiltersSavedComponent,
    buttonDeleteFiltersSavedComponent,
    buttonSaveTopComponent,
    addFilterSelectComponent,
  };

  const filtersTopHeader = computed(() => {
    return h("div", {
      class: "a_table__filters_top__header",
    }, map(tablePluginOptions.value.config.headerTopGroups, group => {
      return h("div", {
        class: "a_table__filters_top__header__group",
        ...group.props,
      }, map(group.children, child => {
        return availableElements[`${ child.component }Component`]?.value;
      }));
    }));
  });
  const filtersTopFooter = computed(() => {
    return h("div", {
      class: "a_table__filters_top__footer",
    }, map(tablePluginOptions.value.config.headerBottomGroups, group => {
      return h("div", {
        class: "a_table__filters_top__footer__group",
        ...group.props,
      }, map(group.children, child => {
        return availableElements[`${ child.component }Component`]?.value;
      }));
    }));
  });

  return {
    filtersTopFooter,
    filtersTopHeader,
  };
}
