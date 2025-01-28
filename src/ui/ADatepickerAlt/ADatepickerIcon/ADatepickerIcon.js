/* eslint vue/component-api-style: off */
import {
  h,
} from "vue";

// @vue/component
export default {
  name: "ADatepickerIcon",
  computed: {
    svgHtml() {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 200 200" class="a_datepicker__calendar_icon">
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
  render() {
    return h("span", {
      ariaHidden: true,
      innerHTML: this.svgHtml,
    });
  },
};
