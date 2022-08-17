import PuxButton from "../../PuxButton/PuxButton.vue";
import PuxIcon from "../../PuxIcon/PuxIcon.vue";
import PuxTranslate from "../../PuxTranslate/PuxTranslate.vue";
import Spinner from "../../Spinner/Spinner.vue";
import UiSelectElement from "./UiSelectElement/UiSelectElement.vue";

import Loading from "../../../directives/loading";
import Teleport from "../../../directives/Teleport";
import translate from "../../../directives/translate";

import EventOutsideMixin from "../../../mixins/EventOutsideMixin";
import HttpMixin from "../../../mixins/HttpMixin";
import UIComponentMixin from "../UIComponentMixin";

import {
  createPopper,
} from "popperjs";

import {
  assign,
  cloneDeep,
  concat,
  get,
  isArray,
  isFunction,
  isMatch,
  isNil,
  isUndefined,
  forEach,
  find,
  filter,
  keys,
  pick,
  some,
  toString,
  uniqBy,
  sortBy,
  uniq,
  toLower,
  map,
  noop,
} from "lodash-es";

const ELEMENTS_FOR_ARROWS = ".ui_select__element_clickable:not([disabled])";
const KEYS_CODE = {
  tab: 9,
  space: 32,
  enter: 13,
  arrowUp: 38,
  arrowDown: 40,
  escape: 27,
};

// @vue/component
export default {
  name: "UiSelect",
  components: {
    Spinner,
    UiSelectElement,
    PuxButton,
    PuxIcon,
    PuxTranslate,
  },
  directives: {
    Loading,
    Teleport,
    translate,
  },
  mixins: [
    EventOutsideMixin,
    HttpMixin,
    UIComponentMixin,
  ],
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    model: {
      type: [String, Array, Number],
      default: undefined,
    },
    loadListCallback: {
      type: Function,
      default: undefined,
    },
    dependencyValue: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      list: undefined,
      statusListLoading: undefined,
      modelSearch: "",
      modelSearchGlobal: "",
      lastSearch: "",
      lastSearchGlobal: "",
      listSearchGlobal: [],
      listSearchGlobalInit: [],
      promisesAll: [],
      status: {
        loadingSearchGlobal: undefined,
      },
      statusEventPressArrows: undefined,
      focusLocal: undefined,
      popper: undefined,
      isOpen: false,
    };
  },
  computed: {
    getPlacement() {
      return this.options.placement || "bottom-end"; // bottom-start, top-start, top-end, left, right
    },

    ariaRequired() {
      return this.isRequired ? "true" : "false";
    },

    ariaExpanded() {
      return `${ this.isOpen }`;
    },

    getConteinerId() {
      return `${ this.options.id }_conteiner`;
    },

    modelObj() {
      const list = this.options.searchGlobal ? concat(this.getCurrentList, this.listSearchGlobal) : this.getCurrentList;
      return find(list, [this.keyIdLocal, this.model]) || find(list, [this.keyIdLocal, String(this.model)]) || {};
    },

    getCurrentList() {
      return this.getCurrentListWithSort;
    },

    getCurrentListWithSort() {
      if (this.options.sortList) {
        return sortBy(this.getListModelList, this.options.sortList);
      }
      return this.getListModelList;
    },

    getList() {
      return this.options.data || this.list || this.data;
    },

    getListModelList() {
      if (this.options.addNew) {
        const LIST = cloneDeep(this.getList);
        if (this.isMultiselect) {
          if (this.model.length) {
            return uniq(concat(this.model, LIST));
          }
        } else {
          if (!isNil(this.model)) {
            LIST.unshift(this.model);
            return uniq(LIST);
          }
        }
      }

      if (this.options.dependency && this.dependencyValue) {
        return filter(this.getList, el => {
          return toLower(el[this.options.dependency]) === toLower(this.dependencyValue);
        });
      }
      return this.getList;
    },

    getListComputed() {
      if (this.options.searchGlobal) {
        return this.getListWithSearchGlobal;
      }
      if (!this.options.search || this.options.searchOutside || this.modelSearch.length === 0) {
        return this.getCurrentList;
      }

      return this.getListWithSearch;
    },

    getListWithSearchGlobal() {
      return this.listSearchGlobal;
    },

    getListWithSearch() {
      const list = [];
      const search = this.modelSearch.toLowerCase();
      if (this.options.keyArray) {
        forEach(this.getCurrentList, item => {
          if (toString(item).toLowerCase().indexOf(search) !== -1) {
            list.push(item);
          }
        });
      } else {
        forEach(this.getCurrentList, item => {
          for (let i = 0; i < this.searchList.length; i++) {
            if (toString(item[this.searchList[i]]).toLowerCase().indexOf(search) !== -1) {
              list.push(item);
              break;
            }
          }
        });
      }
      // this.lastSearch = this.modelSearch; TODO: darf man nicht in computed benutzen
      return list;
    },

    getListWithGroup() {
      const data = {};
      if (this.options.keyGroupList && this.options.keyGroupList.length) {
        forEach(this.options.keyGroupList, item => {
          data[item] = [];
        });
        forEach(this.getListComputed, item => {
          if (!isNil(item[this.keyGroupLocal])) {
            const labelGroup = item[this.keyGroupLocal].toLocaleString();
            if (labelGroup) {
              data[labelGroup].push(item);
            }
          }
        });
        return data;
      }
      forEach(this.getListComputed, item => {
        if (!isNil(item[this.keyGroupLocal])) {
          const labelGroup = item[this.keyGroupLocal].toLocaleString();
          if (!data[labelGroup]) {
            data[labelGroup] = [];
          }
          data[labelGroup].push(item);
        }
      });
      return data;
    },

    listWithNotEmptyGroup() {
      const LIST_WITH_GROUP = cloneDeep(this.getListWithGroup);
      forEach(LIST_WITH_GROUP, (list, key) => {
        if (!list.length) {
          delete LIST_WITH_GROUP[key];
        }
      });
      return LIST_WITH_GROUP;
    },

    listWithNotEmptyGroupSortedKeys() {
      return keys(this.listWithNotEmptyGroup).sort((a, b) => a.localeCompare(b));
    },

    getListWithoutGroup() {
      if (!this.keyGroupLocal) {
        return this.getListComputed;
      }
      return filter(this.getListComputed, item => isNil(item[this.keyGroupLocal]));
    },

    getModelMulti() {
      const list = this.options.searchGlobal ? this.uniqueList(concat(this.getCurrentList, this.listSearchGlobal)) : this.getCurrentList;
      const LIST_NEW = filter(list, item => some(this.model, mod => {
        const id = this.options.keyArray ? item : item[this.keyIdLocal];
        return mod === id;
      })) || [];
      if (this.options.emptyValue && this.model.indexOf(this.options.emptyValue) !== -1) {
        LIST_NEW.unshift({
          [this.keyIdLocal]: this.options.emptyValue,
          [this.keyLabelLocal]: this.options.emptyLabel,
        });
      }
      if (this.options.extraValue && this.model.indexOf(this.options.extraValue) !== -1) {
        LIST_NEW.unshift({
          [this.keyIdLocal]: this.options.extraValue,
          [this.keyLabelLocal]: this.options.extraLabel,
        });
      }
      return LIST_NEW;
    },

    isSearchInList() {
      const SEARCH = (this.modelSearch || this.modelSearchGlobal).toLowerCase();
      const FUNC = this.options.keyArray ?
        item => {
          return item.toLowerCase() === SEARCH;
        }
        :
        item => {
          for (let i = 0; i < this.searchList.length; i++) {
            if (toString(item[this.searchList[i]]).toLowerCase() === SEARCH) {
              return true;
            }
          }
          return false;
        };
      return find(this.getListComputed, FUNC);
    },

    isAlreadySearched() {
      return (
        (this.modelSearch && this.modelSearch === this.lastSearch)
        ||
        (this.modelSearchGlobal && this.modelSearchGlobal === this.lastSearchGlobal)
      );
    },

    getItemClass() {
      return item => {
        const currentValue = this.options.keyArray ? item : item[this.keyIdLocal];
        return {
          ui_select__menu__link_selected: this.typeLocal !== "multiselect" ?
            this.model === currentValue :
            this.model.indexOf(currentValue) !== -1,
          [this.options.elementItemClass]: true
        };
      };
    },

    getItemEmptyClass() {
      return {
        ui_select__menu__link_selected: this.typeLocal !== "multiselect" ?
          this.model === this.options.emptyValue :
          this.model.indexOf(this.options.emptyValue) !== -1,
      };
    },

    getItemExtraClass() {
      return {
        ui_select__menu__link_selected: this.typeLocal !== "multiselect" ?
          this.model === this.options.extraValue :
          this.model.indexOf(this.options.extraValue) !== -1,
      };
    },

    isItemChecked() {
      return item => {
        const currentValue = this.options.keyArray ? item : item[this.keyIdLocal];
        return (this.typeLocal !== "multiselect" && this.model === currentValue) ||
        (this.isMultiselect && this.model.indexOf(currentValue) !== -1) ?
          "true" :
          "false";
      };
    },

    isItemEmptyChecked() {
      return (this.typeLocal !== "multiselect" && this.model === this.options.emptyValue) ||
      (this.isMultiselect && this.model.indexOf(this.options.emptyValue) !== -1) ?
        "true" :
        "false";
    },

    isItemExtraChecked() {
      return (this.typeLocal !== "multiselect" && this.model === this.options.extraValue) ||
      (this.isMultiselect && this.model.indexOf(this.options.extraValue) !== -1) ?
        "true" :
        "false";
    },

    isSearchGlobalDisabled() {
      return this.status.loadingSearchGlobal || !this.modelSearchGlobal.length;
    },

    getStylesButton() {
      if (this.options.paddingRight) {
        return ({
          "padding-right": this.options.paddingRight,
        });
      }
      return ({
        "padding-right": this.options.fixedPlaceholder ? "9px" : this.isButtonDeleteVisible ? "45px" : "35px",
      });
    },

    isDisabled() {
      return this.options.disabled || this.disabled || this.loading || this.options.loading;
    },

    emptyLabel() {
      return this.options.emptyLabel || "_LBL_UI_SELECT_ELEMENT_EMPTY_";
    },

    extraLabel() {
      return this.options.extraLabel || "_LBL_UI_SELECT_ELEMENT_EXTRA_NO_LBL_";
    },

    placeholder() {
      if (this.options.view === "v") {
        return;
      }
      return this.options.placeholder || "_LBL_UI_SELECT_ELEMENT_PLACEHOLDER_";
    },

    keyGroupLocal() {
      if (this.options.withoutGroup) {
        return;
      }
      return this.options.keyGroup || "group";
    },

    searchList() {
      return this.options.searchList || [];
    },

    closeClick() {
      if (!isUndefined(this.options.closeClick)) {
        return this.options.closeClick;
      }
      return this.typeLocal !== "multiselect";
    },

    nullInListComputed() {
      return find(this.getListComputed, [this.keyIdLocal, null]);
    },

    notModelSingleSelect() {
      return isNil(this.model);
    },

    textSearchLocal() {
      return this.options.textsSearch || "Suche";
    },

    isButtonDeleteVisible() {
      return isUndefined(this.options.buttonDelete) ? false : this.options.buttonDelete;
    },

    countMultiLocal() {
      return this.options.countMulti || 3;
    },

    isDeselectAllowed() {
      return isUndefined(this.options.deselect) ? false : this.options.deselect;
    },

    isButtonDeselectAllVisible() {
      return isUndefined(this.options.deselectAll) ? false : this.options.deselectAll;
    },

    maxHeightLocal() {
      return this.options.maxHeight || "300px";
    },

    keyLabelLocal() {
      return this.options.keyLabel || "label";
    },

    keyIdLocal() {
      return this.options.keyId || "id";
    },

    menuRightLocal() {
      return isUndefined(this.options.menuRight) ? false : this.options.menuRight;
    },

    menuStylesLocal() {
      return `max-height: ${ this.maxHeightLocal }; ${ this.options.menuStyles || "" }`;
    },

    isRequired() {
      return isUndefined(this.options.required) ? false : this.options.required;
    },

    isCaretVisible() {
      return isUndefined(this.options.showCaret) ? true : this.options.showCaret;
    },

    isButtonSelectAllVisible() {
      return isUndefined(this.options.selectAll) ? false : this.options.selectAll;
    },

    isMenuWidthAll() {
      return isUndefined(this.options.menuWidthAll) ? true : this.options.menuWidthAll;
    },

    buttonClassLocal() {
      return `${ this.options.buttonClass || "" } ${ this.options.fixedPlaceholder ? "" : "form-control" } ${ this.isDisabledLocal ? "disabled" : "" }`;
    },

    onOpen() {
      return this.options.open || noop;
    },

    elementItemClass() {
      return this.options.elementItemClass;
    },

    typeLocal() {
      if (!this.options.type || this.options.type === "single_choice") {
        return "select";
      } else if (this.options.type === "multi_select") {
        return "multiselect";
      }
      return this.options.type;
    },

    textSelectAll() {
      return this.options.textsSelectAll || "_LBL_UI_SELECT_ALL_CHOOSE_";
    },

    textDeselectAll() {
      return this.options.textsDeselectAll || "_LBL_UI_SELECT_ALL_DEMARCATE_";
    },

    idForButtonSearchGlobal() {
      return `${ this.getId }_search_global`;
    },

    translateOptionsForSearch() {
      return {
        placeholder: this.textSearchLocal,
        "aria-label": "_TXT_UI_SELECT_SEARCH_ARIA_LABEL_",
      };
    },

    isMultiselect() {
      return this.typeLocal === "multiselect";
    },

    tabindex() {
      return this.isDisabledLocal ? undefined : 0;
    },

    ariaLabelledby() {
      return `${ this.getId }_label`;
    },

    idForList() {
      return `${ this.getId }_list`;
    },

    notLoadListLocal() {
      return get(this.extraStatic, "notLoadList") || this.options.notLoadList;
    },

    isInitLabel() {
      return isFunction(get(this.extraStatic, "initLabel"));
    },

    ariaDisabled() {
      return this.isDisabledLocal ? "true" : "false";
    },

    isDisabledLocal() {
      return this.disabled || this.options.disabled;
    },
  },
  watch: {
    options: function(newVal, oldVal) {
      const OLD = pick(oldVal, ["apiSaveId", "url", "urlParams"]);
      const NEW = pick(newVal, ["apiSaveId", "url", "urlParams"]);
      if (!isNil(oldVal) && !isMatch(OLD, NEW)) {
        if (this.isMultiselect) {
          this.onDeselectAll();
        } else {
          this.changeEmptyInput();
        }
        this.loadDataForSearchGlobal();
        this.loadData();
      }
    },

    dependencyValue: function() {
      if (this.isMultiselect) {
        this.onDeselectAll();
      } else {
        this.changeEmptyInput();
      }
    },
  },
  created() {
    this.validateProps();
    this.loadDataForSearchGlobal();
    this.loadData();
  },
  beforeUnmount() {
    this.destroyEventPressArrows();
  },
  methods: {
    validateProps() {
      if (this.isMultiselect && !isArray(this.model)) {
        console.error("UiSelect: Das Model muss ein Array sein. this.options: ", this.options);
      }
    },

    loadDataForSearchGlobal() {
      if (!this.options.searchGlobal) {
        return;
      }
      this.status.loadingSearchGlobal = true;
      if (this.isMultiselect) {
        if (this.model && this.model.length) {
          forEach(this.model, model => {
            this.loadCurrentDataForSearchGlobal({ currentModel: model });
          });
        }
      } else if (!isNil(this.model)) {
        this.loadCurrentDataForSearchGlobal({ currentModel: this.model });
      }
      Promise.all(this.promisesAll).then(
        () => {
          this.status.loadingSearchGlobal = false;
        }
      );
    },

    loadCurrentDataForSearchGlobal({ currentModel }) {
      if (this.options.emptyValue && currentModel === this.options.emptyValue
        || this.options.extraValue && currentModel === this.options.extraValue) {
        return;
      }
      const URL_ARR = this.options.url.split("?");
      const CURRENT_PROMISE = this.getHttp({
        url: `${ URL_ARR[0] }${ currentModel }/${ URL_ARR[1] ? `?${ URL_ARR[1] }` : "" }`,
        urlParams: this.options.urlParams,
      });
      this.promisesAll.push(CURRENT_PROMISE);
      CURRENT_PROMISE.then(
        response => {
          const ITEM = this.options.keyArray ? response[this.keyIdLocal] : response;
          this.listSearchGlobal.push(ITEM);
          if (this.isInitLabel) {
            this.initLabelForTable({ response: ITEM, currentModel });
          }
        }
      );
    },

    initLabelForTable({ response, currentModel }) {
      const CHILD_LABEL = response[this.keyLabelLocal];
      const LABEL = {
        child: CHILD_LABEL,
        parent: this.options.label,
      };
      this.extraStatic.initLabel({ label: LABEL, currentModel, options: this.options });
    },

    loadData() {
      if (!this.notLoadListLocal &&
        this.options.url &&
        !this.options.searchGlobal) {
        this.statusListLoading = true;
        this.getListHttp({
          url: this.options.url,
          apiSaveId: this.options.apiSaveId,
          urlParams: this.options.urlParams,
        }).then(
          response => {
            this.list = response;
          }
        ).then(
          () => {
            if (isFunction(this.loadListCallback)) {
              this.loadListCallback({
                list: this.list,
                id: this.options.id,
                options: this.options,
              });
            }
            this.statusListLoading = false;
          }
        );
      }
    },

    uniqueList(list) {
      if (this.options.keyArray) {
        return uniq(list);
      }
      return uniqBy(list, this.keyIdLocal);
    },

    onBlurSearchGlobal({ $event }) {
      this.onBlur($event);
    },

    onBlur($event) {
      const STAY_IN_PARENT = (this.$refs.ui_select && this.$refs.ui_select.contains($event.relatedTarget)) ||
        (this.$refs.ui_select_menu && this.$refs.ui_select_menu.contains($event.relatedTarget));
      if (STAY_IN_PARENT) {
        return;
      }
      if ($event.currentTarget.id === this.idForButtonSearchGlobal) {
        return;
      }
      this.closePopover();
      this.blur({
        id: this.options.id,
        model: this.model,
        $event: $event,
        param: this.options.param,
      });
      this.focusLocal = false;
    },

    onFocus($event) {
      if (this.focusLocal) {
        return;
      }
      this.focusLocal = true;
      this.focus({
        id: this.options.id,
        model: this.model,
        $event: $event,
        param: this.options.param,
      });
    },

    deleteSingleModel() {
      this.changeInput(this.modelObj[this.keyLabelLocal]);
    },

    changeEmptyInput() {
      if (this.isDisabled) {
        return;
      }
      let item;
      if (this.options.keyArray) {
        item = this.options.emptyValue;
      } else {
        item = {
          [this.keyIdLocal]: this.options.emptyValue,
          [this.keyLabelLocal]: this.options.emptyLabel,
        };
      }
      this.changeInput(item);
    },

    changeExtraInput() {
      if (this.isDisabled) {
        return;
      }
      let item;
      if (this.options.keyArray) {
        item = this.options.extraValue;
      } else {
        item = {
          [this.keyIdLocal]: this.options.extraValue,
          [this.keyLabelLocal]: this.options.extraLabel,
        };
      }
      this.changeInput(item);
    },

    changeInput(item) {
      if (this.isDisabled) {
        return;
      }
      let model;
      const currentValue = this.options.keyArray ? item : item[this.keyIdLocal];
      if (this.isMultiselect) {
        model = cloneDeep(this.model) || [];
        const index = model.indexOf(currentValue);
        if (index !== -1) {
          model.splice(index, 1);
        } else {
          model.push(currentValue);
        }
        this.updatePopover();
      } else {
        if (this.model === currentValue) {
          if (!this.isDeselectAllowed) {
            return;
          }
          model = this.nullValue;
        } else {
          model = this.checkUndefinedValue({ value: currentValue });
        }
      }
      this.input({
        currentModel: currentValue,
        item: item,
        id: this.options.id,
        model: model,
        options: this.options,
        param: this.options.param,
      });

      this.change({
        currentModel: currentValue,
        item: item,
        id: this.options.id,
        model: model,
        options: this.options,
        param: this.options.param,
      });
      this.onCloseClick();
    },

    changeSearch() {
      if (this.options.searchOutside) {
        this.options.searchOutside(this.modelSearch);
      }
    },

    onDeselectAll() {
      if (this.isDisabled) {
        return;
      }
      // eslint-disable-next-line vue/no-mutating-props
      this.model.splice(0);

      this.change({
        id: this.options.id,
        item: this.getListComputed,
        model: this.model,
        param: this.options.param,
      });

      if (this.input) {
        this.input({
          item: this.getListComputed,
          id: this.options.id,
          model: this.model,
          param: this.options.param,
        });
      }

      this.onCloseClick();
    },

    onSelectAll() {
      if (this.isDisabled) {
        return;
      }
      // eslint-disable-next-line vue/no-mutating-props
      this.model.splice(0);
      forEach(this.getListComputed, item => {
        const currentValue = this.options.keyArray ? item : item[this.keyIdLocal];
        // eslint-disable-next-line vue/no-mutating-props
        this.model.push(currentValue);
      });

      this.change({
        currentModel: this.model,
        item: this.getListComputed,
        id: this.options.id,
        model: this.model,
        param: this.options.param,
      });

      if (this.input) {
        this.input({
          currentModel: this.model,
          item: this.getListComputed,
          id: this.options.id,
          model: this.model,
          param: this.options.param,
        });
      }

      this.onCloseClick();
    },

    onSearchGlobal() {
      this.lastSearchGlobal = this.modelSearchGlobal;
      if (this.options.searchOutside) {
        this.options.searchOutside(this.modelSearchGlobal);
        return;
      }

      this.status.loadingSearchGlobal = true;
      this.getChoicesHttp({
        url: this.options.url,
        params: assign({}, this.options.urlParams, { [this.options.searchParameter]: this.modelSearchGlobal })
      }).then(
        response => {
          if (this.options.keyArray) {
            response = map(response, o => o[this.keyIdLocal]);
          }
          this.changeListSearchGlobalWithModel({ response });
        },
      ).then(
        () => {
          this.status.loadingSearchGlobal = false;
          this.setFocusToButtonSearchGlobal();
        }
      );
    },

    setFocusToButtonSearchGlobal() {
      setTimeout(() => {
        if (this.$refs.searchGlobal && this.$refs.searchGlobal.$el) {
          this.$refs.searchGlobal.$el.focus();
        }
      });
    },

    changeListSearchGlobalWithModel({ response = [] } = {}) {
      const LIST_SEARCH_GLOBAL = cloneDeep(this.listSearchGlobal);
      const LIST_SEARCH_GLOBAL_CONCAT = this.uniqueList(concat(LIST_SEARCH_GLOBAL, response));
      const LIST_SEARCH_GLOBAL_WITH_MODEL = [];
      if (this.isMultiselect) {
        if (this.model && this.model.length) {
          forEach(this.model, mod => {
            const OBJ_FROM_LIST_SEARCH_GLOBAL = find(LIST_SEARCH_GLOBAL_CONCAT, (this.options.keyArray ? o => o === mod : [this.keyIdLocal, mod]));
            if (OBJ_FROM_LIST_SEARCH_GLOBAL) {
              LIST_SEARCH_GLOBAL_WITH_MODEL.push(OBJ_FROM_LIST_SEARCH_GLOBAL);
            }
          });
        }
      } else {
        if (!isNil(this.model)) {
          const OBJ_FROM_LIST_SEARCH_GLOBAL = find(LIST_SEARCH_GLOBAL_CONCAT, [this.keyIdLocal, this.model]);
          if (OBJ_FROM_LIST_SEARCH_GLOBAL) {
            LIST_SEARCH_GLOBAL_WITH_MODEL.push(OBJ_FROM_LIST_SEARCH_GLOBAL);
          }
        }
      }

      this.listSearchGlobal = this.uniqueList(concat(LIST_SEARCH_GLOBAL_WITH_MODEL, response));
    },

    addValueToList($event) {
      const MODEL_SEARCH = this.modelSearch || this.modelSearchGlobal;
      if (this.list) {
        this.list.unshift(MODEL_SEARCH);
      } else if (this.listSearchGlobal) {
        this.listSearchGlobal.unshift(MODEL_SEARCH);
      } else {
        // eslint-disable-next-line vue/no-mutating-props
        this.data.unshift(MODEL_SEARCH);
      }
      this.changeInput(MODEL_SEARCH, $event);
      this.modelSearch = "";
      this.modelSearchGlobal = "";
    },

    onCloseClick() {
      if (!this.closeClick) {
        return;
      }
      this.closePopover();
      this.setFocusToButton();
    },

    handleKeydown($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === KEYS_CODE.enter ||
        KEY_CODE === KEYS_CODE.space) {
        this.togglePopover();
        $event.preventDefault();
      } else if (!this.isOpen &&
        (KEY_CODE === KEYS_CODE.arrowUp ||
          KEY_CODE === KEYS_CODE.arrowDown)) {
        this.openPopover();
        $event.preventDefault();
      }
    },

    togglePopover() {
      if (this.isOpen) {
        this.closePopover();
        this.setFocusToButton();
      } else {
        this.openPopover();
      }
    },

    openPopover() {
      if (this.isDisabledLocal) {
        return;
      }
      this.isOpen = true;
      this.setEventClickOutside();
      this.openPopoverWithPopperjs();
    },

    openPopoverWithPopperjs() {
      if (!this.popper) {
        this.popper = createPopper(
          this.$refs.button,
          this.$refs.ui_select_menu,
          {
            placement: this.getPlacement,
            removeOnDestroy: true,
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 0],
                },
              },
            ],
          },
        );
        this.onShow();
      }
    },

    onShow() {
      this.onOpen();
      this.setMenuWidth();
      setTimeout(() => {
        this.setFocusForFirstElementInList();
        this.initEventPressArrows();
      });
    },

    setMenuWidth() {
      if (this.isMenuWidthAll) {
        const BUTTON_WIDTH = this.$refs.button.clientWidth;
        const BUTTON_WIDTH_STRING = `${ BUTTON_WIDTH }px`;
        $(this.$refs.ui_select_menu).css("min-width", BUTTON_WIDTH_STRING).css("max-width", BUTTON_WIDTH_STRING);
      }
    },

    initEventPressArrows() {
      if (this.statusEventPressArrows) { // Event ist schon installiert
        return;
      }
      this.statusEventPressArrows = true;
      document.addEventListener("keydown", this.pressButton);
    },

    destroyEventPressArrows() {
      if (!this.statusEventPressArrows) { // Event ist schon zestört
        return;
      }
      this.statusEventPressArrows = false;
      document.removeEventListener("keydown", this.pressButton);
    },

    pressButton($event) {
      const KEY_CODE = $event.keyCode;
      const IS_ARROW_DOWN = KEY_CODE === KEYS_CODE.arrowDown;
      if (IS_ARROW_DOWN ||
        KEY_CODE === KEYS_CODE.arrowUp) {
        this.pressArrows({ isArrowDown: IS_ARROW_DOWN });
        $event.preventDefault();
      } else if (KEY_CODE === KEYS_CODE.escape) {
        this.closePopover();
        this.setFocusToButton();
      } else if (KEY_CODE === KEYS_CODE.tab) {
        $event.preventDefault();
      }
    },

    pressArrows({ isArrowDown }) {
      const ELEMENTS = this.$refs.ui_select_menu.querySelectorAll(ELEMENTS_FOR_ARROWS);
      if (ELEMENTS.length === 0) {
        return;
      }
      let isFocusInstalled = false;
      forEach(ELEMENTS, (element, index) => {
        if (element === document.activeElement) {
          isFocusInstalled = true;
          if (isArrowDown) {
            if (index < ELEMENTS.length - 1) {
              ELEMENTS[index + 1].focus();
            }
          } else {
            if (index > 0) {
              ELEMENTS[index - 1].focus();
            }
          }
          return false;
        }
      });
      if (!isFocusInstalled) {
        ELEMENTS[0].focus();
      }
    },

    setFocusForFirstElementInList() {
      const ELEMENT = this.$refs.ui_select_menu.querySelector(ELEMENTS_FOR_ARROWS);
      if (ELEMENT) {
        ELEMENT.focus();
      }
    },

    closePopover() {
      this.isOpen = false;
      this.destroyPopover();
      this.destroyEventClickOutside();
      this.destroyEventPressArrows();
    },

    setFocusToButton() {
      this.$refs.button.focus();
    },

    destroyPopover() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = undefined;
      }
    },

    clickOnLabelFromParent() { // From <form-element>
      this.setFocusToButton();
    },

    clickOutsideEvent($event) {
      // here I check that click was outside the el and his children
      if (!(this.$el === $event.target ||
        this.$el.contains($event.target) ||
        this.$refs.ui_select_menu.contains($event.target))) {
        // and if it did, call method provided in attribute value
        this.clickOutsideCallback();
      }
    },

    clickOutsideCallback() {
      this.closePopover();
    },

    updatePopover() {
      setTimeout(() => {
        if (this.popper) {
          this.popper.forceUpdate();
        }
      });
    },
  },
};
