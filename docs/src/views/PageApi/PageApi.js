import {
  AHttpAPI,
} from "aloha-vue";

export default {
  name: "PageApi",
  setup() {
    const {
      abortHttp,
      getHttp,
    } = AHttpAPI();

    const loadData = () => {
      getHttp({
        urlBase: "",
        url: "/api/get_response",
      }).then(
        response => {
          console.log("response", response);
        },
        error => {
          console.log("error", error);
        },
      );
      setTimeout(() => {
        abortHttp({
          all: true,
        });
      }, 1000);
    };

    loadData();
  },
};
