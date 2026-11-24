export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="modelAppointment"
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_APPOINTMENT_"
  :minute-step="15"
  min-time="08:00"
  max-time="18:00"
/>
<pre>{{ modelAppointment }}</pre>
<a-date-input
  v-model="modelMeasurement"
  mode="time"
  with-seconds
  label="_A_DATE_INPUT_EXAMPLE_MEASUREMENT_"
/>
<pre>{{ modelMeasurement }}</pre>`;

  return {
    codeHtml,
  };
}
