export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="modelDate"
  label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_"
  type="date"
></a-datepicker>
<div>modelDate: {{ modelDate }}</div>
<a-datepicker
  v-model="modelTimeHour"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_"
  time-precision="hour"
  type="time"
></a-datepicker>
<div>modelTimeHour: {{ modelTimeHour }}</div>
<a-datepicker
  v-model="modelTimeMinute"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_"
  time-precision="minute"
  type="time"
></a-datepicker>
<div>modelTimeMinute: {{ modelTimeMinute }}</div>
<a-datepicker
  v-model="modelDatetimeSecond"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_"
  time-precision="second"
  type="datetime"
></a-datepicker>
<div>modelDatetimeSecond: {{ modelDatetimeSecond }}</div>
<a-datepicker
  v-model="modelOverride"
  :placeholders-default="placeholdersCustom"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_"
  time-precision="minute"
  type="datetime"
></a-datepicker>
<div>modelOverride: {{ modelOverride }}</div>`;

  return {
    codeHtml,
  };
}
