import {
  ATable,
} from "../../../dist";

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
      ],
      data: [
        {
          aloha: "aloha1",
          hola: "hola1",
          obj: {
            aloha: "saddsa",
          },
        },
        {
          aloha: "aloha2",
          hola: "hola2",
          obj: {
            aloha: "dfdfs",
          },
        },
        {
          aloha: "aloha3",
          hola: "hola3",
          obj: {
            aloha: "dfsfds",
          },
        },
        {
          aloha: "aloha4",
          hola: "hola4",
          obj: {
            aloha: "dfgfd",
          },
        },
      ],
    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  methods: {

  },
};
