export default function HtmlAPI() {
  const codeHtml = `<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDate"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_"
      type="date"
    ></a-datepicker>
    <div>modelDate: {{ modelDate }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeHour"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_"
      time-precision="hour"
      type="time"
    ></a-datepicker>
    <div>modelTimeHour: {{ modelTimeHour }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeMinute"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_"
      time-precision="minute"
      type="time"
    ></a-datepicker>
    <div>modelTimeMinute: {{ modelTimeMinute }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeSecond"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_"
      time-precision="second"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeSecond: {{ modelDatetimeSecond }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelOverride"
      :placeholders-default="placeholdersCustom"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_"
      time-precision="minute"
      type="datetime"
    ></a-datepicker>
    <div>modelOverride: {{ modelOverride }}</div>
  </div>
</div>`;

  return {
    codeHtml,
  };
}
