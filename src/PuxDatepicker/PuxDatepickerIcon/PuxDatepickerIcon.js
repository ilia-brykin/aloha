// @vue/component
export default {
  name: "PuxDatepickerIcon",
  props: {
    type: {
      type: String,
      default: "date",
    },
  },
  computed: {
    svgHtml() {
      if (this.type === "time") {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" class="bi bi-clock pux_datepicker__calendar_icon" style="stroke-width: .1px;">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
      </svg>`;
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 200 200" class="pux_datepicker__calendar_icon">
        <rect x="13" y="29" rx="14" ry="14" width="174" height="158" fill="transparent"></rect>
        <line x1="46" x2="46" y1="8" y2="50"></line> <line x1="154" x2="154" y1="8" y2="50"></line>
        <line x1="13" x2="187" y1="70" y2="70"></line>
        <text x="50%" y="135" font-size="90" stroke-width="1" text-anchor="middle" dominant-baseline="middle">${ this.todayInDayFormat }</text>
      </svg>`;
    },

    todayInDayFormat() {
      return new Date().getDate();
    },
  },
};
