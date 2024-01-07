import {
  computed,
  h,
} from "vue";

import {
  filtersPluginOptions,
} from "../../../plugins/AFiltersPlugin";

import {
  map,
} from "lodash-es";

export default function FiltersLayoutAPI({
  addFilterSelectComponent,
  buttonDeleteFiltersSavedComponent,
  buttonSaveTopComponent,
  buttonSearchComponent,
  buttonToggleComponent,
  filterMainComponent,
  selectFiltersSavedComponent,
}) {
  const availableElements = {
    addFilterSelectComponent,
    buttonDeleteFiltersSavedComponent,
    buttonSaveTopComponent,
    buttonSearchComponent,
    buttonToggleComponent,
    filterMainComponent,
    selectFiltersSavedComponent,
  };

  const filtersTopHeader = computed(() => {
    return h("div", {
      class: "a_table__filters_top__header",
    }, map(filtersPluginOptions.value.config.headerTopGroups, group => {
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
    }, map(filtersPluginOptions.value.config.headerBottomGroups, group => {
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