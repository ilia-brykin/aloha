
import AHttpAPI from "../../../../src/compositionAPI/AHttpAPI";

export default {
  name: "PageCloak",
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
        }
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
