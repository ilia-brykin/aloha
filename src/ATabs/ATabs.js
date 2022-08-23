import {
  h,
  ref,
  toRef,
  watch,
} from "vue";

import ATabsContent from "./ATabsContent";
import ATabsTab from "./ATabsTab";

import {
  forEach,
  get,
  isNil,
  isUndefined,
  uniqueId,
} from "lodash-es";

export default {
  name: "ATabs",
  props: {
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_tabs_"),
    },
    data: {
      type: Array,
      required: true,
    },
    idForActiveTab: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: "id",
    },
    isChangeOutside: {
      type: Boolean,
      required: false,
    },
    isBoxed: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "change",
  ],
  setup(props, { emit }) {
    const idForActiveTabLocal = ref(undefined);

    const idForActiveTab = toRef(props, "idForActiveTab");
    const data = toRef(props, "data");
    const keyId = toRef(props, "keyId");
    const initTabActiveId = () => {
      if (!isNil(idForActiveTab.value)) {
        idForActiveTabLocal.value = idForActiveTab.value;
        return;
      }

      forEach(data.value, item => {
        if (item.active) {
          idForActiveTabLocal.value = item.id;
          return false;
        }
      });
      if (isUndefined(idForActiveTabLocal.value)) {
        idForActiveTabLocal.value = get(data.value[0], keyId.value);
      }
    };

    const isChangeOutside = toRef(props, "isChangeOutside");
    const onChangeTab = ({ $event, tab }) => {
      const TAB_ID = get(tab, keyId.value);
      if (idForActiveTabLocal.value === TAB_ID) {
        return;
      }
      if (!isChangeOutside.value) {
        idForActiveTabLocal.value = TAB_ID;
      }
      emit("change", { $event, tab });
    };

    watch(idForActiveTab, () => {
      if (idForActiveTab.value) {
        idForActiveTabLocal.value = idForActiveTab.value;
      }
    });

    initTabActiveId();

    return {
      idForActiveTabLocal,
      onChangeTab,
    };
  },
  render() {
    return h("div", {
      id: this.id,
      class: ["a_tabs", {
        a_tabs_boxed: this.isBoxed,
      }],
    }, [
      h("div", {
        class: "a_tabs__box",
      }, [
        h("ul", {
          class: "a_tabs__list",
          role: "tablist",
        }, [
          this.data.map((tab, tabIndex) => {
            return h(ATabsTab, {
              key: tabIndex,
              tab,
              index: tabIndex,
              parentId: this.id,
              idForActiveTab: this.idForActiveTabLocal,
              keyId: this.keyId,
              onChangeTab: this.onChangeTab,
            });
          }),
        ]),
      ]),
      h("div", {
        class: "a_tabs__contents",
      }, [
        this.data.map((tab, tabIndex) => {
          return h(ATabsContent, {
            key: tabIndex,
            tab,
            index: tabIndex,
            parentId: this.id,
            keyId: this.keyId,
            idForActiveTab: this.idForActiveTabLocal,
          }, this.$slots);
        }),
      ]),
    ]);
  },
};
