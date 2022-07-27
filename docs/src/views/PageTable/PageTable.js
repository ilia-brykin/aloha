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
        },
        {
          label: "Aloha frei",
          id: "aloha1",
          path: "aloha",
          sortId: "aloha",
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
          hide: true,
        },
      ],
      data: [],
      isLoadingOptions: false,
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
