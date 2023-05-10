import AIcon from "../../../../src/AIcon/AIcon";
import ATable from "../../../../src/ATable/ATable";

import {
  cloneDeep,
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
      modelView: undefined,
      modelColumnsVisible: {
        aloha: true,
      },
      modelColumnsOrdering: ["sdf", "ddsadsa", "aloha"],
      columns: [
        {
          label: "Aloha",
          id: "aloha",
          keyLabel: "aloha",
          sortId: "aloha",
          locked: true,
          grow: 2,
          footerSlot: "footerAloha",
          class: "a_text_right",
          icon: "Close",
          isRender: true,
          title: "Aloha",
        },
        {
          label: "Slot",
          id: "slot",
          slot: "slot1",
          title: "bbbbbbbbbb",
          // hide: true,
        },
        {
          label: "Alohafreidsfdsfdsfsdfdsfdsfdsfsd",
          id: "number",
          keyLabel: "number",
          sortId: "number",
          grow: 0,
          footerKeyLabel: "number",
          class: "a_justify_content_end",
        },
        {
          label: "Hola",
          id: "hola",
          keyLabel: "hola",
          sortId: "hola",
          footerKeyLabel: "hola",
        },
        {
          label: "Default",
          id: "default",
          keyLabel: "default",
          defaultValue: "-",
          footerKeyLabel: "default",
          footerDefaultValue: "-",
        },
        {
          label: "Hola2",
          id: "hola2",
          keyLabel: "hola",
          sortId: "hola",
          hide: true,
          footerKeyLabel: "hola",
        },
        {
          label: "Obj",
          id: "obj",
          keyLabel: "obj.aloha",
          sortId: "obj.aloha",
          slot: "get",
          filter: "boolean",
          footerKeyLabel: "obj.aloha",
          width: 220,
        },
        {
          label: "Test",
          id: "test",
          keyLabelSafeHtml: "test",
          sortId: "test",
          width: 200,
        },
        {
          label: "Obj2",
          id: "obj2",
          keyLabel: "obj.aloha",
          sortId: "obj.aloha",
          footerKeyLabel: "obj.aloha",
        },
        {
          label: "Obj3",
          id: "obj3",
          keyLabel: "obj.aloha",
          footerKeyLabel: "obj.aloha",
        },
        {
          label: "Obj4",
          id: "obj4",
          keyLabel: "obj.aloha",
          footerKeyLabel: "obj.aloha",
        },
        {
          label: "Geld",
          id: "geld",
          keyLabel: "geld",
          footerKeyLabel: "geld",
        },

        {
          label: "Slot2",
          id: "slot2",
          slot: "slot1",
          hide: true,
        },
        {
          label: "safeHtml",
          id: "safeHtml",
          keyLabelSafeHtml: "test",
          sortId: "test",
          width: 200,
        },
        {
          label: "html",
          id: "html",
          keyLabelHtml: "test",
          sortId: "test",
          width: 200,
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
          type: "divider",
        },
        {
          type: "divider",
        },
        {
          type: "button",
          text: "Click me",
          title: "Click me title",
          isHidden: false,
          callback: this.clickMe,
          class: "aloha a_dropdown__item",
          disabled: false,
        },
        {
          type: "divider",
        },
        {
          type: "divider",
        },
        {
          type: "divider",
        },
        {
          type: "divider",
        },
        {
          type: "button",
          textCallback: ({ row, rowIndex }) => `${ rowIndex } Click ${ row.aloha }`,
          titleCallback: ({ row, rowIndex }) => `${ rowIndex } Click ${ row.aloha } title`,
          isHiddenCallback: ({ row, rowIndex }) => !!(rowIndex > 2 && row.aloha),
          disabledCallback: ({ row, rowIndex }) => !(rowIndex > 2 && row.aloha),
          callback: this.clickMe,
        },
        {
          iconLeft: "Export",
          type: "link",
          hrefCallback: ({ row }) => `dokumente/${ row.number }/download/`,
          text: "Dokument herunterladen",
          target: "_blank",
        },
        {
          type: "divider",
        },
        {
          type: "divider",
        },
      ],
      multipleActions: [
        {
          type: "divider",
        },
        {
          type: "divider",
        },
        {
          type: "button",
          text: "Aloha1",
          title: "Aloha1 Title",
          isHidden: false,
          callback: this.clickMe,
          disabled: false,
          icon: "Plus",
          isConfirm: true,
          isAllRowsSelected: true,
        },
        {
          type: "divider",
        },
        {
          type: "divider",
        },
        {
          type: "divider",
        },
        {
          type: "divider",
        },
        {
          type: "button",
          text: "Aloha1 modal",
          title: "Aloha1 Title",
          callback: this.clickMeModal,
          disabled: false,
          icon: "Plus",
          isHidden: false,
          isHiddenCallback: this.isHiddenMultiple,
        },
        {
          type: "divider",
        },
        {
          type: "divider",
        },
      ],
      tableActions: [
        {
          text: "Aloha1",
          title: "Aloha1 Title",
          isHidden: false,
          callback: this.clickMe,
          type: "button",
          class: "a_btn a_btn_primary",
          iconLeft: "Plus",
          id: "aloha_1"
        },
        {
          type: "divider",
        },
        {
          text: "Aloha2",
          title: "Aloha2 Title",
          callback: this.clickMe,
          disabled: false,
          class: "a_btn a_btn_secondary",
          id: "aloha_2",
          type: "button",
        },
        {
          type: "divider",
        },
        {
          text: "Aloha link to",
          title: "Aloha link Title",
          disabled: false,
          class: "a_btn a_btn_secondary",
          type: "link",
          iconRight: "Plus",
          to: "/spinner",
        },
        {
          text: "Aloha link href",
          title: "Aloha link Title",
          disabled: false,
          class: "a_btn a_btn_secondary",
          type: "link",
          href: "/spinner",
          iconLeft: "Plus",
        },
        {
          type: "divider",
        },
        {
          text: "Aloha link Title",
          disabled: false,
          class: "a_btn a_btn_secondary",
          type: "link",
          href: "/spinner",
          iconLeft: "Plus",
        },
      ],
      modelQuickSearch: "",
      modelFilters: {
        group_switch: true,
      },
      views: [
        {
          id: "aloha1",
          type: "table",
          label: "Tabelle",
          icon: "Table",
        },
        {
          id: "aloha2",
          type: "map",
          label: "Karte",
          icon: "GlobeEuropeAfrica",
        },
      ],
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
          type: "date",
          id: "datum",
          label: "Datum",
          alwaysVisible: true,
        },
        {
          type: "oneCheckbox",
          id: "au_ende",
          label: "Bearbeitungsende",
          alwaysVisible: true,
        },
        {
          type: "group",
          id: "group1",
          label: "Group",
          alwaysVisible: true,
          classColumns: "a_d_flex a_flex_wrap",
          children: [
            {
              type: "multiselect",
              id: "dsdsfs",
              classColumn: "a_flex_fill",
              label: "Group",
              labelClass: "a_sr_only",
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
              keyLabel: "bez",
              keyId: "id",
              search: true,
              alwaysVisible: true,
              slotName: "termin",
            },
            {
              type: "switch",
              label: "Group switch",
              id: "group_switch",
              classColumn: "a_ml_2",
              labelClass: "a_sr_only",
              hideFilterCenter: true,
              trueLabel: "Eins",
              falseLabel: "Alle",
              title: "Alohadsfdsfdsf sdfsdfdsffds"
            },
          ],
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
          hasNotClose: true,
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
    setTimeout(() => {
      this.$refs.aloha.updateRow({ row: {
        id: 1,
        number: 1,
        aloha: `test`,
        hola: `hola test`,
        geld: undefined,
        obj: {
          aloha: "dffdg",
        },
        test: "<div>aloha123</div>",
      }, rowIndex: 1 });
    }, 1000);
  },
  methods: {
    changeColumnsOrdering({ modelColumnsOrdering }) {
      this.modelColumnsOrdering = modelColumnsOrdering;
      this.isLoadingOptions = true;
      setTimeout(() => {
        this.isLoadingOptions = false;
      }, 1000);
    },

    setData() {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          number: +item,
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

    clickMe(arg) {
      console.log("arg", arg);
    },

    clickMeModal({ rows, close }) {
      console.log("rows", rows,);
      setTimeout(() => {
        close();
      }, 5000);
    },

    updateModelFiltersLocal({ model }) {
      console.log("modelFiltersLocal", model);
      return model;
    },

    togglePreview({ row, rowIndex, typeToggle }) {
      console.log("row: ", row);
      console.log("rowIndex: ", rowIndex);
      console.log("typeToggle: ", typeToggle);
    },

    isHiddenMultiple({ row }) {
      return row.number % 2 === 0;
    },

    updateModelFilters({ _modelFilters } = {}) {
      this.modelFilters = cloneDeep(_modelFilters);
    },

    updateView({ _modelView, view }) {
      this.modelView = _modelView;
      console.log("view", view);
    },

    changeModelColumnsVisible(model) {
      this.modelColumnsVisible = model;
    },

    initTable({ columnsOrdering = {}, columnsVisible = {} } = {}) {
      this.modelColumnsOrdering = columnsOrdering.model;
      this.modelColumnsVisible = columnsVisible.model;
    },
  },
};
