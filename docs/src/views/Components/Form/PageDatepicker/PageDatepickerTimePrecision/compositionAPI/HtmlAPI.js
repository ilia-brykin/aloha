export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="modelDatetimeHour"
  label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_"
  time-precision="hour"
  type="datetime"
></a-datepicker>
<div>modelDatetimeHour: {{ modelDatetimeHour }}</div>
<a-datepicker
  v-model="modelDatetimeMinute"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_"
  time-precision="minute"
  type="datetime"
></a-datepicker>
<div>modelDatetimeMinute: {{ modelDatetimeMinute }}</div>
<a-datepicker
  v-model="modelDatetimeSecond"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_"
  time-precision="second"
  type="datetime"
></a-datepicker>
<div>modelDatetimeSecond: {{ modelDatetimeSecond }}</div>
<a-datepicker
  v-model="modelTimeHour"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_"
  time-precision="hour"
  type="time"
></a-datepicker>
<div>modelTimeHour: {{ modelTimeHour }}</div>
<a-datepicker
  v-model="modelTimeMinute"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_"
  time-precision="minute"
  type="time"
></a-datepicker>
<div>modelTimeMinute: {{ modelTimeMinute }}</div>
<a-datepicker
  v-model="modelTimeSecond"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_"
  time-precision="second"
  type="time"
></a-datepicker>
<div>modelTimeSecond: {{ modelTimeSecond }}</div>`;

  return {
    codeHtml,
  };
}
