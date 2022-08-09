import AAlert from "../../../../src/AAlert/AAlert";

export default {
  name: "PageAlert",
  components: {
    AAlert,
  },
  data() {
    return {
      alerts: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
      ],
      isAlertsHidden: {},
    };
  },
  methods: {
    closeAlert(alert) {
      this.isAlertsHidden[alert] = true;
    },
  },
};
