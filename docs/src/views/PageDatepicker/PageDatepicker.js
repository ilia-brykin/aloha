import ADatepicker from "../../../../src/ui/ADatepicker/ADatepicker";

import moment from "moment";
moment.locale("de");

export default {
  name: "PageDatepicker",
  components: {
    ADatepicker,
  },
  data() {
    return {
      model1: "",
      model2: "",
      model3: "",
    };
  },
  setup() {
    const stillUtc = moment.utc("2023-03-05T23:00:00+01:00").toDate();
    const local = moment(stillUtc).local().format("YYYY-MM-DD HH:ss");
    console.log("local", local);
    console.log(moment.parseZone("2023-03-05T23:00:00+01:00").local().format("YYYY-MM-DD"));

    console.log(moment("2023-03-05T23:00:00+01:00"));

    console.log(moment.utc("2023-03-05T23:00:00-01:00").local("de").format("YYYY-MM-DD HH:ss"));
    console.log(moment("2023-03-05T23:00:00+01:00").local("de").format("YYYY-MM-DD HH:ss"));
  },
};
