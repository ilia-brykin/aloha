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
          draggable: false,
        },
        {
          label: "Hola",
          id: "hola",
          path: "hola",
          sortId: "hola",
        },
        {
          label: "Obj",
          id: "obj",
          path: "obj.aloha",
          sortId: "obj.aloha",
        },
        {
          label: "Slot",
          id: "slot",
          slot: "slot1",
        },
      ],
      data: [],
      isLoadingDraggable: false,
    };
  },
  created() {
    this.setData();
  },
  methods: {
    changeColumnsOrdering() {
      this.isLoadingDraggable = true;
      setTimeout(() => {
        this.isLoadingDraggable = false;
      }, 1000);
    },

    setData() {
      const DATA = [];
      times(100, item => {
        DATA.push({
          aloha: `aloha${ item }`,
          hola: `hola ${ item }`,
          obj: {
            aloha: `ertet ${ 100 - item }`,
          },
        });
      });
      this.data = DATA;
    },
  },
};
