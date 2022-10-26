import AIcon from "../../../../src/AIcon/AIcon";
import ATable from "../../../../src/ATable/ATable";

import {
  times,
} from "lodash-es";

export default {
  name: "PageTable",
  components: {
    AIcon,
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
          footerSlot: "footerAloha",
          class: "a_justify_content_end",
          isRender: true,
        },
        {
          label: "Alohafreidsfdsfdsfsdfdsfdsfdsfsd",
          id: "aloha1",
          path: "aloha",
          sortId: "aloha",
          grow: 0,
          footerPath: "aloha",
          class: "a_justify_content_end",
        },
        {
          label: "Hola",
          id: "hola",
          path: "hola",
          sortId: "hola",
          footerPath: "hola",
        },
        {
          label: "Default",
          id: "default",
          path: "default",
          defaultValue: "-",
          footerPath: "default",
          footerDefaultValue: "-",
        },
        {
          label: "Hola2",
          id: "hola2",
          path: "hola",
          sortId: "hola",
          hide: true,
          footerPath: "hola",
        },
        {
          label: "Slot",
          id: "slot",
          slot: "slot1",
          // hide: true,
        },
        {
          label: "Obj",
          id: "obj",
          path: "obj.aloha",
          sortId: "obj.aloha",
          slot: "get",
          filter: "boolean",
          footerPath: "obj.aloha",
          width: 220,
        },
        {
          label: "Test",
          id: "test",
          path: "test",
          sortId: "test",
          width: 200,
        },
        {
          label: "Obj2",
          id: "obj2",
          path: "obj.aloha",
          sortId: "obj.aloha",
          footerPath: "obj.aloha",
        },
        {
          label: "Obj3",
          id: "obj3",
          path: "obj.aloha",
          footerPath: "obj.aloha",
        },
        {
          label: "Obj4",
          id: "obj4",
          path: "obj.aloha",
          footerPath: "obj.aloha",
        },
        {
          label: "Geld",
          id: "geld",
          path: "geld",
          footerPath: "geld",
        },

        {
          label: "Slot2",
          id: "slot2",
          slot: "slot1",
          hide: true,
        },
      ],
      rowsFooter: [
        {
          index: 1,
        },
        {
          index: 2,
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
        {
          icon: "Export",
          type: "link",
          hrefCallback: ({ row }) => `dokumente/${ row.pk }/download/`,
          label: "Dokument herunterladen",
          target: "_blank",
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
          isDivider: true,
        },
        {
          isDivider: true,
          isHidden: true,
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
      modelFilters: {},
      filters: [
        {
          type: "text",
          id: "suche",
          label: "Suche",
          main: true,
        },
        {
          type: "text",
          id: "au_kbezbeobachter",
          label: "Beobachter",
        },
        {
          type: "switch",
          id: "au_termin_sichtbar",
          label: "Sichtbar",
          alwaysVisible: true,
        },
        {
          type: "oneCheckbox",
          id: "au_ende",
          label: "Bearbeitungsende",
          alwaysVisible: true,
        },
        {
          type: "multiselect",
          id: "terminberechnung",
          label: "Termin",
          data: [
            {
              id: "1",
              bez: "Aloha 1",
            },
            {
              id: "2",
              bez: "Aloha 2",
            },
            {
              id: "3",
              bez: "Aloha 3",
            },
          ],
          // url: "katalog/?fields=id&fields=bez&key=syterminberechnung",
          keyLabel: "bez",
          keyId: "id",
          search: true,
          alwaysVisible: true,
          slotName: "termin",
        },
      ],
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
          aloha: `aloha1111dfdsfdsfdsfaasasadadsadasdsadsa1111111${ item }`,
          hola: `hola ${ item }`,
          geld: `${ item } €`,
          obj: {
            aloha: `ertet ${ 100 - item }`,
          },
          test: "<div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div>",
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

    updateModelFiltersLocal(model) {
      console.log("modelFiltersLocal", model);
    },

    togglePreview({ row, rowIndex, typeToggle }) {
      console.log("row: ", row);
      console.log("rowIndex: ", rowIndex);
      console.log("typeToggle: ", typeToggle);
    },
  },
};
