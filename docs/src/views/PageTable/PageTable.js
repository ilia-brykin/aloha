import {
  ATable,
} from "../../../../dist";

import {
  times,
} from "lodash-es";

export default {
  name: "PageTable",
  components: {
    ATable,
  },
  data() {
    return {
      columns: [
        {
          label: "Aloha",
          id: "aloha",
          path: "aloha",
          sortId: "aloha",
          locked: true,
          grow: 2,
        },
        {
          label: "Aloha frei",
          id: "aloha1",
          path: "aloha",
          sortId: "aloha",
          grow: 0,
        },
        {
          label: "Hola",
          id: "hola",
          path: "hola",
          sortId: "hola",
        },
        {
          label: "Hola2",
          id: "hola2",
          path: "hola",
          sortId: "hola",
          hide: true,
        },
        {
          label: "Obj",
          id: "obj",
          path: "obj.aloha",
          sortId: "obj.aloha",
          slot: "get",
          filter: "boolean",
        },
        {
          label: "Obj2",
          id: "obj2",
          path: "obj.aloha",
          sortId: "obj.aloha",
        },
        {
          label: "Obj3",
          id: "obj3",
          path: "obj.aloha",
        },
        {
          label: "Obj4",
          id: "obj4",
          path: "obj.aloha",
        },
        {
          label: "Geld",
          id: "geld",
          path: "geld",
        },
        {
          label: "Slot",
          id: "slot",
          slot: "slot1",
          // hide: true,
        },
        {
          label: "Slot2",
          id: "slot2",
          slot: "slot1",
          hide: true,
        },
      ],
      data: [],
      isLoadingOptions: false,
      rowActions: [
        {
          label: "Click me",
          title: "Click me title",
          isHidden: false,
          callback: this.clickMe,
          class: "aloha",
          disabled: false,
        },
        {
          isDivider: true,
        },
        {
          labelCallback: ({ row, rowIndex }) => `${ rowIndex } Click ${ row.aloha }`,
          titleCallback: ({ row, rowIndex }) => `${ rowIndex } Click ${ row.aloha } title`,
          isHiddenCallback: ({ row, rowIndex }) => !!(rowIndex > 2 && row.aloha),
          disabledCallback: ({ row, rowIndex }) => !(rowIndex > 2 && row.aloha),
          callback: this.clickMe,
        },
      ],
      multipleActions: [
        {
          label: "Aloha1",
          title: "Aloha1 Title",
          isHidden: false,
          callback: this.clickMe,
          disabled: true,
          icon: "Plus",
          isConfirm: true,
        },
        {
          label: "Aloha1 modal",
          title: "Aloha1 Title",
          isHidden: false,
          callback: this.clickMeModal,
          disabled: true,
          icon: "Plus",
        },
      ],
      tableActions: [
        {
          label: "Aloha1",
          title: "Aloha1 Title",
          isHidden: false,
          callback: this.clickMe,
          disabled: true,
          type: "button",
          class: "a_btn a_btn_primary",
          icon: "Plus",
        },
        {
          label: "Aloha2",
          title: "Aloha2 Title",
          callback: this.clickMe,
          disabled: false,
          class: "a_btn a_btn_secondary",
        },
        {
          label: "Aloha link",
          title: "Aloha link Title",
          disabled: false,
          class: "a_btn a_btn_secondary",
          type: "link",
          to: "/spinner",
        },
        {
          label: "Aloha3",
          title: "Aloha3 Title",
          disabled: false,
          type: "dropdown",
          class: "a_btn a_btn_secondary",
          children: [
            {
              label: "Aloha4",
              title: "Aloha4 Title",
              callback: this.clickMe,
              disabled: false,
            },
          ],
        },
      ],
      modelQuickSearch: "",
    };
  },
  created() {
    this.setData();
  },
  methods: {
    changeColumnsOrdering() {
      this.isLoadingOptions = true;
      setTimeout(() => {
        this.isLoadingOptions = false;
      }, 1000);
    },

    setData() {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          aloha: `aloha${ item }`,
          hola: `hola ${ item }`,
          geld: `${ item } €`,
          obj: {
            aloha: `ertet ${ 100 - item }`,
          },
        });
      });
      this.data = DATA;
    },

    clickMe({ row, rowIndex } = {}) {
      console.log("row, rowIndex", row, rowIndex);
    },

    clickMeModal({ rows, close }) {
      console.log("rows", rows,);
      setTimeout(() => {
        close();
      }, 5000);
    },
  },
};
