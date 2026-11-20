import{t as e}from"./chunk.AlohaHighlightjs.CA2juRnR.js";import{i as t}from"./bundle.index.BaX-GPsX.js";import{$t as n,Bt as r,Ft as i,Lt as a,Pt as o,Rt as s,Vt as c,hn as l,rn as u,sn as d,un as f}from"./chunk.vendor.BvryzG0o.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";var m=/^:where\((.+)\)\s*\{\s*$/,h=/^\s*(--[\w-]+)\s*:\s*(.+?);\s*(?:\/\/\s*(.*))?$/,g=/^\s*(--[\w-]+)\s*:\s*(.*)$/,_=/^(.*?);\s*(?:\/\/\s*(.*))?$/,v=/^\s*\/\/\s*(.+)$/,y=e=>e.charAt(0).toUpperCase()+e.slice(1),b=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/([_(])/g,`$1<wbr>`),x=({name:e,value:t,description:n,group:r})=>{let i=t.replace(/\s+/g,` `).trim();return{name:e,nameHtml:b(e),default:i,defaultHtml:b(i),group:r,description:n?n.trim():``}};function S(e=``){let t=e.replace(/\r\n/g,`
`).split(`
`),n=t.filter(e=>m.test(e)).length,r=[],i=[],a=``,o=!1,s;return t.forEach(e=>{if(!o){let t=e.match(m);t&&(o=!0,i.push(t[1]),a=n>1?t[1]:``);return}if(s){let t=e.match(_);t?(r.push(x({...s,value:`${s.value} ${t[1]}`,description:t[2],group:a})),s=void 0):s.value+=` ${e}`;return}if(/^\}/.test(e)){o=!1;return}let t=e.match(h);if(t){r.push(x({name:t[1],value:t[2],description:t[3],group:a}));return}let c=e.match(g);if(c){s={name:c[1],value:c[2]};return}let l=e.match(v);l&&(a=y(l[1].replace(/\(.*\)/,``).trim()))}),{selectors:i,vars:r}}function C(e,{source:t=o(()=>``)}){let n=o(()=>{let e=Array.isArray(t.value)?t.value:[t.value],n={selectors:[],vars:[]};return e.forEach(e=>{let{selectors:t,vars:r}=S(e);n.selectors.push(...t),n.vars.push(...r)}),n}),r=o(()=>n.value.vars),i=o(()=>[...new Set(n.value.selectors.filter(e=>e!==`:root`))].join(`, `)),a=o(()=>r.value.some(e=>e.group)),s=o(()=>{let e=[{label:`Variable`,keyLabel:`name`,slot:`name`,width:260,grow:0}];return a.value&&e.push({label:`Group`,keyLabel:`group`,width:100,grow:0}),e.push({label:`Default`,keyLabel:`default`,slot:`defaultValue`,width:200,grow:0},{label:`Description`,keyLabel:`description`,grow:1}),e});return{codeExample:o(()=>{let e=r.value.find(e=>/_color/.test(e.name)&&!/\s/.test(e.default))||r.value[0],t=(n.value.selectors.find(e=>e!==`:root`)||`.a_component`).split(`,`)[0].trim();if(!e)return``;let i=/_color|_bg/.test(e.name)?`var(--a_color_success)`:e.default;return`/* the whole project */
:root {
  ${e.name}: ${i};
}

/* one place */
${t}.my_class {
  ${e.name}: ${i};
}`}),columns:s,cssVars:r,selector:i}}var w=Object.assign({"../../../../../../scss/components/AAvatar.scss":`.a_avatar {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: var(--a_avatar_size);
  height: var(--a_avatar_size);
  border-radius: var(--a_avatar_border_radius);
  background: var(--a_avatar_bg);
  color: var(--a_avatar_color);
  font-size: calc(var(--a_avatar_size) * var(--a_avatar_font_scale));
  font-weight: var(--a_avatar_font_weight);
  line-height: 1;
  vertical-align: middle;
  user-select: none;
}

.a_avatar_circle {
  --a_avatar_border_radius: 50%;
}
.a_avatar_square {
  --a_avatar_border_radius: var(--a_avatar_square_border_radius);
}

.a_avatar_small {
  --a_avatar_size: var(--a_avatar_size_small);
}
.a_avatar_large {
  --a_avatar_size: var(--a_avatar_size_large);
}
.a_avatar_xlarge {
  --a_avatar_size: var(--a_avatar_size_xlarge);
}

.a_avatar__image {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}
.a_avatar_with_image {
  background: var(--a_avatar_image_bg);
}

.a_avatar__initials {
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
}

.a_avatar__icon {
  display: inline-flex;
  width: calc(var(--a_avatar_size) * var(--a_avatar_icon_scale));
  height: calc(var(--a_avatar_size) * var(--a_avatar_icon_scale));
  svg {
    width: 100%;
    height: 100%;
  }
}

// Colors: a light background with a dark text of the same hue (contrast WCAG AA)
@each $name in (primary, secondary, tertiary, success, info, warning, danger) {
  .a_avatar_#{$name} {
    --a_avatar_bg: var(--a_color_#{$name}_bg_subtle);
    --a_avatar_color: var(--a_color_#{$name}_text_emphasis);
  }
}
.a_avatar_gray {
  --a_avatar_bg: var(--a_color_gray_200);
  --a_avatar_color: var(--a_color_gray_700);
}

// Status dot with a ring in the color of the surface
.a_avatar__status {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 0;
  width: var(--a_avatar_status_size);
  height: var(--a_avatar_status_size);
  border-radius: 50%;
  background: var(--a_avatar_status_color);
  box-shadow: 0 0 0 var(--a_avatar_status_ring_width) var(--a_avatar_ring_color);
}
.a_avatar_square .a_avatar__status {
  transform: translate(25%, 25%);
}
.a_avatar__status_online {
  --a_avatar_status_color: var(--a_avatar_status_online_color);
}
.a_avatar__status_away {
  --a_avatar_status_color: var(--a_avatar_status_away_color);
}
.a_avatar__status_busy {
  --a_avatar_status_color: var(--a_avatar_status_busy_color);
}
.a_avatar__status_offline {
  --a_avatar_status_color: var(--a_avatar_status_offline_color);
}

// Group: the avatars overlap and get a ring, so they stay separated
.a_avatar_group {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  .a_avatar {
    box-shadow: 0 0 0 var(--a_avatar_group_ring_width) var(--a_avatar_ring_color);
  }
  .a_avatar + .a_avatar {
    margin-inline-start: calc(var(--a_avatar_size) * var(--a_avatar_group_overlap) * -1);
  }
}
.a_avatar_group__more {
  font-size: calc(var(--a_avatar_size) * var(--a_avatar_group_more_font_scale));
}

@media (forced-colors: active) {
  .a_avatar {
    border: 1px solid CanvasText;
  }
  .a_avatar__status {
    background: CanvasText;
  }
}

:where(.a_avatar, .a_avatar_group) {
  // size
  --a_avatar_size: 2.5rem; // Size of an avatar (size "medium").
  --a_avatar_size_small: 2rem; // Size of an avatar for size "small".
  --a_avatar_size_large: 3.5rem; // Size of an avatar for size "large".
  --a_avatar_size_xlarge: 5rem; // Size of an avatar for size "xlarge".
  --a_avatar_square_border_radius: var(--a_border_radius); // Corner radius of an avatar with shape "square".
  // content
  --a_avatar_bg: var(--a_color_gray_200); // Background of an avatar (set by the prop color).
  --a_avatar_color: var(--a_color_gray_700); // Color of the initials and of the icon (set by the prop color).
  --a_avatar_image_bg: var(--a_color_gray_200); // Background behind an image (visible while it loads).
  --a_avatar_font_scale: .4; // Font size of the initials relative to the size of the avatar.
  --a_avatar_font_weight: var(--a_font_weight_semibold); // Font weight of the initials.
  --a_avatar_icon_scale: .55; // Size of the icon relative to the size of the avatar.
  // status
  --a_avatar_status_size: calc(var(--a_avatar_size) * .3); // Size of the status dot.
  --a_avatar_status_ring_width: 2px; // Width of the ring around the status dot.
  --a_avatar_status_online_color: var(--a_color_success); // Color of the status "online".
  --a_avatar_status_away_color: var(--a_color_warning); // Color of the status "away".
  --a_avatar_status_busy_color: var(--a_color_danger); // Color of the status "busy".
  --a_avatar_status_offline_color: var(--a_color_gray_500); // Color of the status "offline".
  --a_avatar_ring_color: var(--a_color_surface); // Color of the rings of the status dot and of the avatars in a group.
  // group
  --a_avatar_group_overlap: .15; // How far the avatars of a group overlap, relative to their size.
  --a_avatar_group_ring_width: 2px; // Width of the ring around the avatars of a group.
  --a_avatar_group_more_font_scale: .34; // Font size of the "+N" avatar relative to its size.
}
`,"../../../../../../scss/components/AButton.scss":`.a_button {
  position: relative;
  & > :not(.a_button__hidden) + :not(.a_button__ml_0) {
    margin-left: .5rem;
  }
}
`,"../../../../../../scss/components/ACalendar.scss":`@use "../utils/focus";

.a_calendar {
  // The layout changes with the width of the calendar, not of the window (@container below)
  container: a_calendar / inline-size;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--a_calendar_gap);
  color: var(--a_calendar_color);
}
// The loading overlay covers the days
.a_calendar__body {
  position: relative;
}

.a_calendar__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--a_calendar_gap);
}
.a_calendar__title {
  font-size: var(--a_calendar_title_font_size);
  font-weight: var(--a_calendar_title_font_weight);
}
.a_calendar__header_actions {
  display: flex;
  gap: .25rem;
}

.a_calendar__month {
  overflow: hidden;
  border: 1px solid var(--a_calendar_border_color);
  border-radius: var(--a_calendar_border_radius);
  background: var(--a_calendar_bg);
}

.a_calendar__weekdays,
.a_calendar__week {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.a_calendar__weekday {
  padding: .375rem .5rem;
  border-block-end: 1px solid var(--a_calendar_border_color);
  color: var(--a_calendar_weekday_color);
  font-size: var(--a_calendar_weekday_font_size);
  font-weight: var(--a_calendar_title_font_weight);
  text-align: start;
}

// A week is a grid: the first row is the day number, then a row for every lane of events, then the "+N" row.
// The days span all rows, the events lie on top of them.
.a_calendar__week {
  grid-template-rows:
    var(--a_calendar_day_number_height)
    repeat(var(--a_calendar_lanes), var(--a_calendar_event_height))
    minmax(var(--a_calendar_more_height), 1fr);
  row-gap: var(--a_calendar_event_gap);
  min-height: var(--a_calendar_week_min_height);
  & + & {
    border-block-start: 1px solid var(--a_calendar_border_color);
  }
}

.a_calendar__day {
  display: flex;
  grid-row: 1 / -1;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 0;
  margin: 0;
  padding: .25rem .5rem;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
  @include focus.focus-visible(true);
  & + & {
    border-inline-start: 1px solid var(--a_calendar_border_color);
  }
  &:hover {
    background: var(--a_calendar_day_hover_bg);
  }
}
.a_calendar__day_weekend {
  background-color: var(--a_calendar_weekend_bg);
}
.a_calendar__day_other_month {
  color: var(--a_calendar_other_month_color);
}
.a_calendar__day_selected,
.a_calendar__day_selected:hover {
  background-color: var(--a_calendar_selected_bg);
}
.a_calendar__day_number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--a_calendar_day_number_size);
  height: var(--a_calendar_day_number_size);
  border-radius: var(--a_border_radius_pill);
  font-size: var(--a_calendar_day_number_font_size);
}
.a_calendar__day_today .a_calendar__day_number {
  background: var(--a_calendar_today_bg);
  color: var(--a_calendar_today_color);
  font-weight: var(--a_calendar_title_font_weight);
}

// Event: a light background with a colored bar at the start, like in Outlook
.a_calendar__event {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: .25rem;
  overflow: hidden;
  min-width: 0;
  margin: 0 .25rem;
  padding: 0 .375rem;
  border: 0;
  border-inline-start: var(--a_calendar_event_accent_width) solid var(--a_calendar_event_accent);
  border-radius: var(--a_calendar_event_border_radius);
  background: var(--a_calendar_event_bg);
  color: var(--a_calendar_event_color);
  font: inherit;
  font-size: var(--a_calendar_event_font_size);
  line-height: 1.2;
  text-align: start;
  white-space: nowrap;
  cursor: pointer;
  @include focus.focus-visible;
  &:hover {
    filter: brightness(.95);
  }
}
// A bar that continues in the previous or the next week has no rounded corner and no margin on that side
.a_calendar__event_continues_before {
  margin-inline-start: 0;
  border-inline-start-width: 0;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}
.a_calendar__event_continues_after {
  margin-inline-end: 0;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}
.a_calendar__event_time {
  flex: 0 0 auto;
  font-weight: var(--a_calendar_title_font_weight);
}
// The sign of a recurring event
.a_calendar__event_recurring {
  display: inline-flex;
  flex: 0 0 auto;
  width: var(--a_calendar_recurring_icon_size);
  height: var(--a_calendar_recurring_icon_size);
  svg {
    width: 100%;
    height: 100%;
  }
}
.a_calendar__event_label {
  overflow: hidden;
  text-overflow: ellipsis;
}

@each $name in (primary, secondary, tertiary, success, info, warning, danger) {
  .a_calendar__event_#{$name} {
    --a_calendar_event_accent: var(--a_color_#{$name});
    --a_calendar_event_bg: var(--a_color_#{$name}_bg_subtle);
    --a_calendar_event_color: var(--a_color_#{$name}_text_emphasis);
  }
}
.a_calendar__event_gray {
  --a_calendar_event_accent: var(--a_color_gray_500);
  --a_calendar_event_bg: var(--a_color_gray_200);
  --a_calendar_event_color: var(--a_color_gray_700);
}
// Any CSS color: the text keeps the color of the text, so the contrast does not depend on the chosen color
.a_calendar__event_custom {
  --a_calendar_event_bg: color-mix(in srgb, var(--a_calendar_event_accent) 18%, var(--a_color_surface));
  --a_calendar_event_color: var(--a_color_text);
}

.a_calendar__more {
  z-index: 1;
  align-self: start;
  justify-self: start;
  margin: 0 .25rem;
  padding: 0 .375rem;
  border: 0;
  border-radius: var(--a_calendar_event_border_radius);
  background: transparent;
  color: var(--a_calendar_more_color);
  font: inherit;
  font-size: var(--a_calendar_event_font_size);
  font-weight: var(--a_calendar_title_font_weight);
  cursor: pointer;
  @include focus.focus-visible;
  &:hover {
    background: var(--a_calendar_day_hover_bg);
    text-decoration: underline;
  }
}

// View switch "Month / Week"
.a_calendar__views {
  display: flex;
  gap: .25rem;
  margin-inline-end: .5rem;
}

// Week view: a column for the hours and 7 columns for the days
.a_calendar__week_view {
  overflow: hidden;
  border: 1px solid var(--a_calendar_border_color);
  border-radius: var(--a_calendar_border_radius);
  background: var(--a_calendar_bg);
}
.a_calendar__week_head,
.a_calendar__all_day,
.a_calendar__time_grid {
  display: grid;
  // 7 columns in the week, 1 in the day (--a_calendar_days is set by the component)
  grid-template-columns: var(--a_calendar_gutter_width) repeat(var(--a_calendar_days, 7), minmax(0, 1fr));
}
.a_calendar__week_head,
.a_calendar__all_day {
  border-block-end: 1px solid var(--a_calendar_border_color);
}
// The time grid has a scrollbar: the rows above reserve the same space, so the columns stay aligned
.a_calendar__week_head,
.a_calendar__all_day,
.a_calendar__time_scroll {
  scrollbar-gutter: stable;
}
.a_calendar__week_head,
.a_calendar__all_day {
  overflow-y: hidden;
}
.a_calendar__week_day {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .125rem;
  margin: 0;
  padding: .375rem .25rem;
  border: 0;
  border-inline-start: 1px solid var(--a_calendar_border_color);
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  @include focus.focus-visible(true);
  &:hover {
    background-color: var(--a_calendar_day_hover_bg);
  }
}
.a_calendar__week_day_name {
  color: var(--a_calendar_weekday_color);
  font-size: var(--a_calendar_weekday_font_size);
}

// The all-day row: a small space above and below the bars (the bars start in the second row)
.a_calendar__all_day {
  // The row "auto" is for "+N"
  grid-template-rows: .125rem repeat(var(--a_calendar_lanes), var(--a_calendar_event_height)) auto .25rem;
  row-gap: var(--a_calendar_event_gap);
}
.a_calendar__all_day_label {
  grid-row: 1 / -1;
  align-self: center;
  padding-inline: .25rem .5rem;
  color: var(--a_calendar_weekday_color);
  font-size: var(--a_calendar_hour_font_size);
  line-height: 1.2;
  text-align: end;
  overflow-wrap: normal;
  hyphens: auto;
}
.a_calendar__all_day_cell {
  grid-row: 1 / -1;
  border-inline-start: 1px solid var(--a_calendar_border_color);
}

.a_calendar__time_scroll {
  overflow-y: auto;
  max-height: var(--a_calendar_week_max_height);
}
.a_calendar__time_grid {
  height: calc(var(--a_calendar_hours) * var(--a_calendar_hour_height));
}
.a_calendar__hours {
  display: grid;
  grid-template-rows: repeat(var(--a_calendar_hours), minmax(0, 1fr));
}
.a_calendar__hour {
  padding: .125rem .5rem 0;
  color: var(--a_calendar_weekday_color);
  font-size: var(--a_calendar_hour_font_size);
  line-height: 1;
  text-align: end;
}
// A line for every hour
.a_calendar__time_column {
  position: relative;
  border-inline-start: 1px solid var(--a_calendar_border_color);
  background-image: repeating-linear-gradient(to bottom, var(--a_calendar_border_color) 0 1px, transparent 1px var(--a_calendar_hour_height));
  cursor: pointer;
}

.a_calendar__event_timed {
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  margin: 0;
  padding: .125rem .375rem;
  // A line in the color of the background separates overlapping events
  box-shadow: 0 0 0 1px var(--a_calendar_bg);
  .a_calendar__event_time {
    font-size: var(--a_calendar_hour_font_size);
    font-weight: normal;
  }
  // Narrow events (several at the same time) cut the text instead of breaking it in the middle of the time
  .a_calendar__event_time,
  .a_calendar__event_label {
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
  }
}
// A short event has the time and the title in one line
.a_calendar__event_short {
  flex-direction: row;
  align-items: center;
  gap: .25rem;
  padding-block: 0;
}

// The current time
.a_calendar__now {
  position: absolute;
  z-index: 2;
  inset-inline: 0;
  height: 2px;
  background: var(--a_calendar_now_color);
  pointer-events: none;
  &::before {
    content: "";
    position: absolute;
    inset-block-start: -4px;
    inset-inline-start: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: inherit;
  }
}

// Drag and drop
// A long press with a finger starts the drag: no text selection and no menu of the browser
.a_calendar__event_draggable {
  cursor: grab;
  user-select: none;
  -webkit-touch-callout: none;
}
.a_calendar__event_dragging {
  opacity: .5;
}
// While an event is dragged or resized, the events and "+N" let the pointer through to the day or the time column below them
.a_calendar_dragging,
.a_calendar_resizing,
.a_calendar_selecting {
  .a_calendar__event,
  .a_calendar__more {
    pointer-events: none;
  }
}
// The edge that changes the end of an event
.a_calendar__resize_handle {
  position: absolute;
  z-index: 1;
  touch-action: none;
}
.a_calendar__resize_handle_time {
  inset-inline: 0;
  height: var(--a_calendar_resize_handle_size);
  cursor: ns-resize;
  &.a_calendar__resize_handle_start {
    inset-block-start: 0;
  }
  &.a_calendar__resize_handle_end {
    inset-block-end: 0;
  }
}
.a_calendar__resize_handle_day {
  inset-block: 0;
  width: var(--a_calendar_resize_handle_size);
  cursor: ew-resize;
  &.a_calendar__resize_handle_start {
    inset-inline-start: 0;
  }
  &.a_calendar__resize_handle_end {
    inset-inline-end: 0;
  }
}
.a_calendar_resizing,
.a_calendar_selecting {
  user-select: none;
}

.a_calendar__drop_target:not(.a_calendar__time_column) {
  background-color: var(--a_calendar_drop_bg);
  box-shadow: inset 0 0 0 2px var(--a_calendar_drop_color);
}
.a_calendar__drop_preview {
  position: absolute;
  z-index: 2;
  inset-inline: 2px;
  overflow: hidden;
  padding: .125rem .375rem;
  border: 2px dashed var(--a_calendar_drop_color);
  border-radius: var(--a_calendar_event_border_radius);
  background: var(--a_calendar_drop_bg);
  color: var(--a_calendar_color);
  font-size: var(--a_calendar_hour_font_size);
  line-height: 1.2;
  pointer-events: none;
}

// Popover with the details of an event
.a_calendar_popover {
  position: absolute;
  z-index: var(--a_calendar_popover_z_index);
  display: flex;
  flex-direction: column;
  gap: .5rem;
  // A fixed width: the column of the values (minmax(0, 1fr)) would be 0 with max-content
  width: min(var(--a_calendar_popover_max_width), calc(100% - 1rem));
  padding: .75rem;
  border: 1px solid var(--a_calendar_border_color);
  border-block-start: 4px solid var(--a_calendar_event_accent);
  border-radius: var(--a_calendar_border_radius);
  background: var(--a_calendar_popover_bg);
  box-shadow: var(--a_calendar_popover_shadow);
  color: var(--a_calendar_color);
  @include focus.focus-visible;
}
.a_calendar_popover__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: .5rem;
}
.a_calendar_popover__label {
  font-weight: var(--a_calendar_title_font_weight);
}
.a_calendar_popover__close {
  flex: 0 0 auto;
  margin: -.25rem -.25rem 0 0;
}
.a_calendar_popover__details {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: .25rem .75rem;
  margin: 0;
  font-size: var(--a_calendar_event_font_size);
}
.a_calendar_popover__term {
  color: var(--a_calendar_weekday_color);
}
.a_calendar_popover__value {
  margin: 0;
  white-space: pre-wrap;
}
.a_calendar_popover__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: .5rem;
}

// Week numbers: a first column in the month, the gutter of the hours in the week view
.a_calendar_week_numbers {
  .a_calendar__weekdays,
  .a_calendar__week {
    grid-template-columns: var(--a_calendar_week_number_width) repeat(7, minmax(0, 1fr));
  }
}
.a_calendar__week_number {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: .375rem .25rem;
  border-inline-end: 1px solid var(--a_calendar_border_color);
  color: var(--a_calendar_weekday_color);
  font-size: var(--a_calendar_hour_font_size);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.a_calendar__week_head .a_calendar__week_number {
  align-items: center;
  border-inline-end: 0;
}
.a_calendar__week_number_head {
  text-align: center;
}

// Days that cannot be chosen: hatched
.a_calendar__day_disabled {
  background-image: repeating-linear-gradient(135deg, var(--a_calendar_disabled_stripe) 0 1px, transparent 1px 8px);
  color: var(--a_calendar_disabled_color);
  cursor: not-allowed;
}
// The working hours are light, the other hours are shaded
.a_calendar__time_column_working_hours {
  background-image:
    repeating-linear-gradient(to bottom, var(--a_calendar_border_color) 0 1px, transparent 1px var(--a_calendar_hour_height)),
    linear-gradient(
      to bottom,
      var(--a_calendar_off_hours_bg) 0 var(--a_calendar_working_start, 0%),
      transparent var(--a_calendar_working_start, 0%) var(--a_calendar_working_end, 100%),
      var(--a_calendar_off_hours_bg) var(--a_calendar_working_end, 100%) 100%
    );
}
.a_calendar__time_column.a_calendar__day_disabled {
  background-image:
    repeating-linear-gradient(to bottom, var(--a_calendar_border_color) 0 1px, transparent 1px var(--a_calendar_hour_height)),
    repeating-linear-gradient(135deg, var(--a_calendar_disabled_stripe) 0 1px, transparent 1px 8px);
}

// Statuses like in Outlook: tentative is hatched, cancelled is crossed out
.a_calendar__event_tentative {
  background-image: repeating-linear-gradient(135deg, transparent 0 4px, var(--a_calendar_tentative_stripe) 4px 7px);
}
.a_calendar__event_cancelled {
  opacity: var(--a_calendar_cancelled_opacity);
  .a_calendar__event_label {
    text-decoration: line-through;
  }
}

// Agenda: the days with events as a list
.a_calendar__agenda {
  overflow: hidden;
  border: 1px solid var(--a_calendar_border_color);
  border-radius: var(--a_calendar_border_radius);
  background: var(--a_calendar_bg);
}
.a_calendar__agenda_list,
.a_calendar__agenda_events {
  margin: 0;
  padding: 0;
  list-style: none;
}
.a_calendar__agenda_day {
  display: grid;
  grid-template-columns: var(--a_calendar_agenda_date_width) minmax(0, 1fr);
  gap: .5rem 1rem;
  padding: .625rem .75rem;
  & + & {
    border-block-start: 1px solid var(--a_calendar_border_color);
  }
}
.a_calendar__agenda_date {
  padding-block: .375rem;
  font-weight: var(--a_calendar_title_font_weight);
}
.a_calendar__agenda_day_today .a_calendar__agenda_date {
  color: var(--a_calendar_today_bg);
}
.a_calendar__agenda_events {
  display: flex;
  flex-direction: column;
  gap: .25rem;
}
.a_calendar__agenda_event {
  display: flex;
  align-items: center;
  gap: .5rem;
  width: 100%;
  margin: 0;
  padding: .375rem .625rem;
  border: 0;
  border-inline-start: var(--a_calendar_event_accent_width) solid var(--a_calendar_event_accent);
  border-radius: var(--a_calendar_event_border_radius);
  background-color: var(--a_calendar_event_bg);
  color: var(--a_calendar_event_color);
  font: inherit;
  text-align: start;
  cursor: pointer;
  @include focus.focus-visible;
  .a_calendar__event_time {
    display: none;
  }
}
.a_calendar__agenda_time {
  flex: 0 0 auto;
  min-width: var(--a_calendar_agenda_time_width);
  font-size: var(--a_calendar_event_font_size);
  font-variant-numeric: tabular-nums;
}
.a_calendar__agenda_location {
  margin-inline-start: auto;
  color: var(--a_calendar_weekday_color);
  font-size: var(--a_calendar_event_font_size);
}
.a_calendar__agenda_empty {
  margin: 0;
  padding: 1rem;
  color: var(--a_calendar_weekday_color);
}

// A small calendar (e.g. on a phone): the month shows thin bars instead of texts, the time grid gets narrower
@container a_calendar (max-width: 40rem) {
  .a_calendar__title {
    font-size: var(--a_calendar_event_font_size);
  }
  .a_calendar__week {
    --a_calendar_event_height: var(--a_calendar_small_event_height);
    --a_calendar_week_min_height: var(--a_calendar_small_week_min_height);
    .a_calendar__event {
      margin-inline: 2px;
      padding: 0;
      font-size: 0;
      > :not(.a_calendar__resize_handle) {
        display: none;
      }
    }
  }
  .a_calendar__day {
    padding: .125rem .25rem;
  }
  .a_calendar__more {
    margin: 0;
    padding: 0 .125rem;
    font-size: .6875rem;
  }
  .a_calendar__week_view {
    --a_calendar_gutter_width: 2.75rem;
  }
  .a_calendar__agenda_day {
    grid-template-columns: minmax(0, 1fr);
  }
  .a_calendar__agenda_time {
    min-width: 0;
  }
}

// Print: no buttons, the whole day, the colors of the events
@media print {
  .a_calendar {
    print-color-adjust: exact;
  }
  .a_calendar__header_actions,
  .a_calendar__resize_handle,
  .a_calendar__now,
  .a_calendar .a_loading {
    display: none;
  }
  .a_calendar__time_scroll {
    overflow: visible;
    max-height: none;
  }
  .a_calendar__week,
  .a_calendar__agenda_day {
    break-inside: avoid;
  }
}

@media (forced-colors: active) {
  .a_calendar__drop_target:not(.a_calendar__time_column),
  .a_calendar__drop_preview {
    outline: 2px dashed Highlight;
    outline-offset: -2px;
  }
  .a_calendar__now {
    background: Highlight;
  }
  .a_calendar__event {
    border: 1px solid CanvasText;
  }
  .a_calendar__day_selected {
    outline: 2px solid Highlight;
    outline-offset: -2px;
  }
  .a_calendar__day_today .a_calendar__day_number {
    border: 1px solid CanvasText;
  }
}

:where(.a_calendar) {
  --a_calendar_gap: .75rem; // Space between the header and the month.
  --a_calendar_color: var(--a_color_text); // Text color.
  --a_calendar_bg: var(--a_color_surface); // Background of the month.
  --a_calendar_border_color: var(--a_border_color); // Color of the lines between the days.
  --a_calendar_border_radius: var(--a_border_radius); // Corner radius of the month.
  // header
  --a_calendar_title_font_size: var(--a_font_size_lg); // Font size of the month and the year.
  --a_calendar_title_font_weight: var(--a_font_weight_semibold); // Font weight of the title, the weekdays, today and the times.
  --a_calendar_weekday_color: var(--a_color_text_muted); // Color of the names of the weekdays.
  --a_calendar_weekday_font_size: var(--a_font_size_sm); // Font size of the names of the weekdays.
  // day
  --a_calendar_week_min_height: 6.5rem; // Minimal height of a week.
  --a_calendar_day_number_height: 1.875rem; // Height of the row with the day number.
  --a_calendar_day_number_size: 1.5rem; // Size of the circle around the day number of today.
  --a_calendar_day_number_font_size: var(--a_font_size_sm); // Font size of the day number.
  --a_calendar_day_hover_bg: var(--a_color_gray_100); // Background of a day on hover.
  --a_calendar_weekend_bg: var(--a_color_surface_subtle); // Background of Saturday and Sunday.
  --a_calendar_other_month_color: var(--a_color_text_muted); // Color of the days of the previous and the next month.
  --a_calendar_selected_bg: var(--a_color_primary_bg_subtle); // Background of the selected day.
  --a_calendar_today_bg: var(--a_color_primary); // Background of the day number of today.
  --a_calendar_today_color: var(--a_color_primary_contrast); // Color of the day number of today.
  // event
  --a_calendar_event_height: 1.375rem; // Height of an event.
  --a_calendar_event_gap: 2px; // Space between the events.
  --a_calendar_event_font_size: var(--a_font_size_sm); // Font size of an event.
  --a_calendar_event_border_radius: var(--a_border_radius_small); // Corner radius of an event.
  --a_calendar_event_accent_width: 3px; // Width of the colored bar at the start of an event.
  --a_calendar_event_accent: var(--a_color_primary); // Color of the bar (set by the color of the event).
  --a_calendar_event_bg: var(--a_color_primary_bg_subtle); // Background of an event (set by the color of the event).
  --a_calendar_event_color: var(--a_color_primary_text_emphasis); // Text color of an event (set by the color of the event).
  --a_calendar_more_height: 1.25rem; // Height of the "+N more" row.
  --a_calendar_more_color: var(--a_color_link); // Color of "+N more".
  // week
  --a_calendar_gutter_width: 4.5rem; // Width of the column with the hours.
  --a_calendar_hour_height: 3rem; // Height of an hour.
  --a_calendar_hour_font_size: .75rem; // Font size of the hours, the times of the events and "All day".
  --a_calendar_week_max_height: 36rem; // Maximal height of the time grid, it scrolls inside.
  --a_calendar_now_color: var(--a_color_danger); // Color of the line of the current time.
  // drag and drop
  --a_calendar_drop_color: var(--a_color_primary); // Border of the day and of the place where a dragged event lands.
  --a_calendar_drop_bg: var(--a_color_primary_bg_subtle); // Background of the day and of the place where a dragged event lands.
  --a_calendar_recurring_icon_size: .75rem; // Size of the sign of a recurring event.
  --a_calendar_resize_handle_size: 6px; // Size of the edges that change the start and the end of an event.
  // week numbers, disabled days, working hours, statuses
  --a_calendar_week_number_width: 2.75rem; // Width of the column with the week numbers in the month.
  --a_calendar_disabled_color: var(--a_color_text_muted); // Text color of a disabled day.
  --a_calendar_disabled_stripe: var(--a_border_color); // Color of the stripes of a disabled day.
  --a_calendar_off_hours_bg: var(--a_color_surface_subtle); // Background of the hours outside the working hours.
  --a_calendar_tentative_stripe: color-mix(in srgb, var(--a_calendar_event_accent) 25%, transparent); // Stripes of a tentative event.
  --a_calendar_cancelled_opacity: .6; // Opacity of a cancelled event.
  // popover
  --a_calendar_popover_bg: var(--a_color_surface_raised); // Background of the popover with the details of an event.
  --a_calendar_popover_shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .18); // Shadow of the popover.
  --a_calendar_popover_max_width: 22rem; // Width of the popover (smaller in a small calendar).
  --a_calendar_popover_z_index: 90; // Stacking order of the popover.
  // agenda
  --a_calendar_agenda_date_width: 8rem; // Width of the column with the days in the agenda.
  --a_calendar_agenda_time_width: 7.5rem; // Width of the times in the agenda.
  // small calendar (up to 40rem)
  --a_calendar_small_event_height: .375rem; // Height of the bars of the events in a small month.
  --a_calendar_small_week_min_height: 4rem; // Minimal height of a week in a small month.
}
`,"../../../../../../scss/components/ACarousel.scss":`// Controls are drawn on top of media (images), therefore they use fixed
// light-on-dark colors (--a_carousel_on_media_*) instead of the theme surface.
.a_carousel {
  background-color: var(--a_carousel_bg);
}
.a_carousel__inner {
  position: relative;
}
.a_carousel__items {
  padding: 0;
}
.a_carousel__item {
  display: none;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 6.25rem;
}
.a_carousel__item_active {
  display: block;
}
.a_carousel_tabs_top {
  .a_carousel__tabs__wrapper {
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
.a_carousel_tabs_top-start {
  .a_carousel__tabs__wrapper {
    top: 2rem;
    left: 1rem;
  }
}
.a_carousel_tabs_top-end {
  .a_carousel__tabs__wrapper {
    top: 2rem;
    right: 1rem;
  }
}
.a_carousel_tabs_bottom {
  .a_carousel__tabs__wrapper {
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
.a_carousel_tabs_bottom-start {
  .a_carousel__tabs__wrapper {
    bottom: 2rem;
    left: 1rem;
  }
}
.a_carousel_tabs_bottom-end {
  .a_carousel__tabs__wrapper {
    bottom: 2rem;
    right: 1rem;
  }
}
.a_carousel_arrows_sides-center {
  .a_carousel__arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: var(--a_carousel_arrow_bg);
    color: var(--a_carousel_on_media_color);
    border: none;
    cursor: pointer;
    transition: var(--a_transition_colors);
    &:hover {
      background-color: var(--a_carousel_arrow_hover_bg);
    }
    &:focus {
      outline: 0;
    }
    &:focus-visible {
      outline: 2px solid transparent;
      box-shadow: var(--a_carousel_focus_ring_inset);
      background-color: var(--a_carousel_arrow_hover_bg);
    }
    .a_icon {
      width: 2rem;
      height: auto;
    }
  }
  .a_carousel__arrow_previous {
    left: 0;
  }
  .a_carousel__arrow_next {
    right: 0;
  }
}
.a_carousel_arrows_sides-top {
  .a_carousel__arrow {
    position: absolute;
    top: 2rem;
    z-index: 1;
  }
  .a_carousel__arrow_previous {
    left: 1rem;
  }
  .a_carousel__arrow_next {
    right: 1rem;
  }
}
.a_carousel_arrows_sides-bottom {
  .a_carousel__arrow {
    position: absolute;
    bottom: 2rem;
    z-index: 1;
  }
  .a_carousel__arrow_previous {
    left: 1rem;
  }
  .a_carousel__arrow_next {
    right: 1rem;
  }
}
.a_carousel_arrows_top-left {
  .a_carousel__arrow {
    position: absolute;
    top: 2rem;
    z-index: 1;
  }
  .a_carousel__arrow__wrapper {
    left: 1rem;
  }
}
.a_carousel_arrows_top-right {
  .a_carousel__arrow {
    position: absolute;
    top: 2rem;
    z-index: 1;
  }
  .a_carousel__arrow__wrapper {
    right: 1rem;
  }
}
.a_carousel_arrows_bottom-left {
  .a_carousel__arrow {
    position: absolute;
    bottom: 2rem;
    z-index: 1;
  }
  .a_carousel__arrow__wrapper {
    left: 1rem;
  }
}
.a_carousel_arrows_bottom-right {
  .a_carousel__arrow {
    position: absolute;
    bottom: 2rem;
    z-index: 1;
  }
  .a_carousel__arrow__wrapper {
    right: 1rem;
  }
}
.a_carousel_trigger_hover {
  &:hover {
    .a_carousel__arrow {
      display: block;
    }
  }
  .a_carousel__arrow {
    display: none;
  }
}
.a_carousel_trigger_focus {
  &:focus-within {
    .a_carousel__arrow {
      display: block;
    }
  }
  .a_carousel__arrow {
    display: none;
  }
}
.a_carousel__tabs__wrapper {
  position: absolute;
  z-index: 2;
}
.a_carousel__tabs {
  box-sizing: border-box;
  border: 0 transparent solid;
  border-radius: var(--a_border_radius_pill);
  display: flex;
  padding-top: 0.125rem;
  height: var(--a_carousel_tabs_height);
  background-color: var(--a_carousel_tabs_bg);
  &:focus-within {
    border-width: 2px;
    border-color: var(--a_carousel_on_media_color);
    padding-top: 0;
    background-color: var(--a_carousel_tab_primary_color);
  }
}
.a_carousel__tabs__btn__children {
  display: none;
  position: relative;
  top: -0.125rem;
  align-items: center;
  height: 100%;
}
.a_carousel__tabs__btn__children_active {
  display: flex;
}
.a_carousel__tabs_dots,
.a_carousel__tabs_squares {
  &:focus-within {
    .tab-background {
      stroke: var(--a_carousel_tab_primary_color);
      fill: var(--a_carousel_tab_primary_color);
    }
  }
  .a_carousel__tabs__btn__wrapper {
    display: flex;
  }
  .a_carousel__tabs__btn {
    .a_icon {
      width: var(--a_carousel_tab_width);
      height: var(--a_carousel_tab_height);
    }
    position: relative;
    top: -0.125rem;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    outline: none;
    width: var(--a_carousel_tab_width);
    color: var(--a_carousel_on_media_color);
    cursor: pointer;
    &:focus-visible {
      .border {
        display: block;
        fill: var(--a_carousel_tab_primary_color);
        stroke: var(--a_carousel_on_media_color);
      }
      .tab-background {
        stroke: var(--a_carousel_tab_primary_color);
        fill: var(--a_carousel_tab_primary_color);
      }
    }
    &:hover {
      .tab-background {
        fill: var(--a_carousel_on_media_color);
        stroke: var(--a_carousel_on_media_color);
        opacity: 1;
      }
      .tab,
      .border {
        fill: var(--a_carousel_tab_primary_color);
        stroke: var(--a_carousel_tab_primary_color);
        opacity: 1;
      }
    }
  }
  .a_carousel__tabs__btn_active {
    &:hover {
      .tab {
        fill: var(--a_carousel_on_media_color);
      }
    }
    .tab {
      fill: var(--a_carousel_on_media_color);
    }
  }

  .a_carousel__tabs__btn_hide {
    --a_carousel_tab_width: 0.375rem;
    --a_carousel_tab_height: 0.5rem;
    top: 0;
    &.a_carousel__tabs__btn_active {
      &:hover {
        .border {
          stroke: var(--a_carousel_on_media_color);
        }
      }
      .tab {
        fill: var(--a_carousel_on_media_color);
      }
      .border {
        display: inline;
      }
    }
    &:hover {
      .tab {
        fill: var(--a_carousel_on_media_color);
      }
      .border {
        display: inline;
        stroke: var(--a_carousel_on_media_color);
      }
    }
    .tab {
      r: 0.125rem;
      fill: var(--a_carousel_on_media_color);
      stroke-width: 0;
      stroke: var(--a_carousel_on_media_color);
      cx: 0.1875rem;
      cy: 0.1875rem;
    }
    .border {
      r: 0.125rem;
      fill: var(--a_carousel_on_media_color);
      stroke-width: 0.125rem;
      stroke: var(--a_carousel_on_media_color);
      cx: 0.1875rem;
      cy: 0.1875rem;
    }
    .tab-background {
      display: none;
    }
  }
  .tab,
  .border {
    stroke: var(--a_carousel_on_media_color);
    fill: transparent;
    stroke-width: 0.125rem;
  }
  .border {
    display: none;
    z-index: 12;
  }
  .tab-background {
    stroke: var(--a_carousel_on_media_bg);
    fill: var(--a_carousel_on_media_bg);
    stroke-width: 0.125rem;
    opacity: 0.6;
    z-index: 14;
  }
  .tab {
    z-index: 16;
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_carousel) {
  // general
  --a_carousel_bg: var(--a_color_gray_200); // Background of the carousel behind the slides.
  // controls on the image
  --a_carousel_on_media_color: var(--a_color_white); // Color of the arrows, tabs and focus ring drawn on top of the image. Fixed light color, independent of the theme.
  --a_carousel_on_media_bg: hsl(var(--a_gray_h) 20% 8%); // Dark color behind the controls on the image (tab background, inner focus ring).
  --a_carousel_arrow_bg: hsl(var(--a_gray_h) 20% 8% / .5); // Background of the side arrows (arrows-position sides-center).
  --a_carousel_arrow_hover_bg: hsl(var(--a_gray_h) 20% 8% / .7); // Background of a hovered or focused side arrow.
  --a_carousel_tabs_bg: hsl(var(--a_gray_h) 20% 8% / .65); // Background of the tab bar.
  --a_carousel_tab_primary_color: hsl(var(--a_primary_h) var(--a_primary_s) 30%); // Color of the tab bar with focus and of a hovered or focused tab.
  // tabs
  --a_carousel_tab_width: 2.125rem; // Width of a tab (dot or square).
  --a_carousel_tab_height: 2.125rem; // Height of a tab.
  --a_carousel_tabs_height: 1.875rem; // Height of the tab bar.
  --a_carousel_focus_ring_inset:
    inset 0 0 0 var(--a_focus_width_outside) var(--a_carousel_on_media_color),
    inset 0 0 0 calc(var(--a_focus_width_outside) + var(--a_focus_width_inside)) var(--a_carousel_on_media_bg); // Focus ring of a side arrow (inside the arrow, light and dark, so it is visible on any image).
}
`,"../../../../../../scss/components/ACloak.scss":`.a_cloak__box {
  display: inline-flex;
  align-items: center;
}

.a_cloak__text_left {
  margin-right: 1rem;
}

.a_cloak__text_right {
  margin-left: 1rem;
}
`,"../../../../../../scss/components/ADivider.scss":`.a_divider {
  height: 0;
  margin: var(--a_divider_margin_y) 0;
  overflow: hidden;
  border-top: var(--a_border_width) solid var(--a_divider_bg);
  opacity: 1;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_divider) {
  --a_divider_margin_y: var(--a_space_sm); // Space above and below the line.
  --a_divider_bg: var(--a_border_color); // Color of the line.
}
`,"../../../../../../scss/components/AElement.scss":`.a_element {
  position: relative;
  & > :not(.a_element__hidden) + :not(.a_element__ml_0) {
    margin-left: .5rem;
  }
}
`,"../../../../../../scss/components/AFilters.scss":`@use "../utils/breakpoint";

.a_filters_top {
  padding: var(--a_filters_top_padding);

  .a_form_element_number_controls .a_form_element {
    width: 100%;
  }
  .a_datepicker {
    --a_datepicker_width: 100%;
  }
}
.a_filters_top__main_wrapper {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
}
.a_filters_top__main {
  width: 100%;
}

.a_filter_horizontal__wrapper {
  width: var(--a_filter_hor_width);
  max-width: var(--a_filter_hor_max_width);
  max-height: var(--a_filter_max_height);
  overflow-y: hidden;
  padding: 0;
}
.a_filter_horizontal__header__wrapper {
  padding: var(--a_filter_hor_padding_y) var(--a_filter_hor_padding_x) 0 var(--a_filter_hor_padding_x);
}
.a_filter_horizontal__header {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: var(--a_filter_hor_divider_border_width) solid var(--a_filter_hor_divider_border_color);
  padding-bottom: var(--a_filter_hor_padding_y);
}
.a_filter_horizontal__header__texts {
  font-size: var(--a_filter_hor_header_font_size);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: .5rem;
}
.a_filter_horizontal__header__texts__filter {
  padding-right: .5rem;
}
.a_filter_horizontal__hr {
  border: var(--a_filter_hor_hr_border_width) solid var(--a_filter_hor_hr_border_color);
  margin: var(--a_filter_hor_hr_margin_y) 0;
}
.a_filter_horizontal__body__wrapper {
  position: relative;
  overflow-y: auto;
  max-height: var(--a_filter_hor_body_max_height);
}
.a_filter_horizontal__body {
  padding: var(--a_filter_hor_padding_y) var(--a_filter_hor_padding_x) 0 var(--a_filter_hor_padding_x);

  .a_form_element__container {
    display: flex;
    flex-basis: 11.3125rem;
    flex-grow: 1;
    width: 100%;
  }
}
.a_filter_horizontal__body__form {
  padding: 0;
  .a_datepicker {
    --a_datepicker_width: 100%;
  }
  .a_form_element_number_controls .a_form_element {
    --a_input_number_width: 100% !important;
  }
  .a_fieldset {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
.a_filter_horizontal__add_filter {
  position: relative;
}
.a_filter_horizontal__add_filter__wrapper {
  margin: var(--a_filter_hor_padding_y) 0;
}
.a_filter_horizontal__save_actions {
  margin: var(--a_filter_hor_padding_y) 0;
  .a_btn + .a_btn {
    margin-left: .5rem;
  }
}
.a_filter_horizontal__footer {
  text-align: right;
  position: sticky;
  bottom: 0;
  background-color: var(--a_filter_hor_footer_bg);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: var(--a_filter_hor_padding_x);
    right: var(--a_filter_hor_padding_x);
    border-top: var(--a_filter_hor_divider_border_width) solid var(--a_filter_hor_divider_border_color);
  }
}
.a_filter_horizontal__footer__actions {
  display: inline-block;
  background-color: var(--a_filter_hor_footer_actions_bg);
  padding: var(--a_filter_hor_padding_y) var(--a_filter_hor_padding_x);
}
.a_filter_horizontal__footer__actions__btn_close {
  margin-left: .5rem;
}

.a_filters_top__form {
  max-width: var(--a_filters_top_form_max_width);
  padding: 0;
}
.a_filters_top__save_select {
  width: 15.625rem;
  margin-right: 0.5rem;
}
.a_filters_top__delete_filter_saved {
  margin-right: 0.5rem;
}
.a_filters_top__search {
  margin-left: 0.5rem;
}
.a_filters_top__always_visible {
  border: var(--a_border_width) solid var(--a_border_color);
  padding: var(--a_filters_top_always_visible_padding);
  border-radius: var(--a_border_radius);
  margin-top: 1rem;
}
.a_filters_top__filter_ui_label {
  width: var(--a_filters_top_label_width);
  padding-right: 0.5rem;
  font-weight: var(--a_font_weight_semibold);
  color: var(--a_color_label);
}
.a_filters_top__filter_ui_group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
}
.a_filters_top__filter_ui_subgroup {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: var(--a_filters_top_subgroup_width);
}
.a_filters_top__filter_ui {
  width: 100%;
}
.a_filters_top__filter_ui_delete {
  margin-left: 0.5rem;
}
.a_filters_top__toggle_filter {
  margin-right: 0.5rem;
  margin-top: .5rem;
}

.a_filters_top__footer {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: .5rem;
  column-gap: .5rem;
  &:first-child {
    margin-top: 0;
  }
  .a_filters_top__search {
    margin-left: 0;
  }
}
.a_filters_top__footer__select {
  display: inline-block;
}

.a_filters_center {
  margin-top: -0.5rem;
  margin-left: -0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: var(--a_table_filters_center_padding);
}
.a_filters_center__item {
  margin-top: .5rem;
  margin-left: .5rem;
  .a_button .a_filters_center__item__value {
    margin-left: 0;
  }
}
.a_filters_center__item__label {
  margin-right: .25rem;
}
.a_filters_center__item__label__suffix {
  margin-left: .25rem;
}

.a_filters_right__filter_ui {
  margin-bottom: .5rem;
}
.a_filters_top__filter_main {
  margin-top: 0;
  .a_filters_top__filter_ui_label {
    padding-left: 0;
    padding-right: 0;
  }
  .a_filters_top__filter_ui_subgroup {
    padding-left: 1rem;
  }
}
.a_filters_top__save {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: start;
}

@media screen and (max-width: 1407px) {
  .a_filters_top__save {
    margin-top: 1rem;
    width: 100%;
  }
  .a_filters_top__filter_main {
    margin-bottom: 0.5rem;
  }
}
@media screen and (max-width: 768px) {
  .a_filters_top {
    --a_filters_top_always_visible_padding: .5rem;
  }
  .a_filters_top__header {
    flex-direction: column;
  }
  .a_filters_top__header__group {
    flex-wrap: wrap;
  }
  .a_filters_top__toggle_filter {
    margin-bottom: 0.5rem;
  }
  .a_filters_top__save_select {
    margin-bottom: 0.5rem;
  }
  .a_filters_top__filter_ui_group {
    flex-direction: column;
    align-items: start;
  }
  .a_filters_top__filter_ui_label {
    width: 100%;
  }
  .a_filters_top__filter_ui_subgroup {
    width: 100%;
  }
  .a_filters_top__filter_main {
    .a_filters_top__filter_ui_subgroup {
      padding-left: 0;
    }
  }
}

@media screen and (max-width: #{breakpoint.$tablet})  {
  .a_form_element_label {
    padding-bottom: 0;
  }

  .a_filters__form_element {
    padding-top: 0;
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_filters_top) {
  // filters on top
  --a_filters_top_padding: var(--a_space_sm); // Padding of the filter panel above the table.
  --a_filters_top_form_max_width: 31.25rem; // Maximum width of the filter form.
  --a_filters_top_label_width: 34%; // Width of the label column of a filter row.
  --a_filters_top_subgroup_width: 66%; // Width of the field column of a filter row.
  --a_filters_top_always_visible_padding: var(--a_space_md) var(--a_space_md) var(--a_space_md) var(--a_space_xl); // Padding of the box with the always visible filters. Smaller below 769px.
}
:where(.a_filter_horizontal__wrapper) {
  // filter dropdown
  --a_filter_hor_divider_border_width: var(--a_border_width); // Width of the line under the header and above the footer of the filter dropdown.
  --a_filter_hor_divider_border_color: var(--a_border_color); // Color of the line under the header and above the footer of the filter dropdown.
  --a_filter_hor_hr_border_width: 0 0 var(--a_border_width); // Border widths of the separator line in the filter dropdown (top, right, bottom, left).
  --a_filter_hor_hr_border_color: var(--a_border_color); // Color of the separator line in the filter dropdown.
  --a_filter_hor_hr_margin_y: var(--a_space_md); // Space above and below the separator line.
  --a_filter_hor_header_font_size: 1.5rem; // Font size of the header of the filter dropdown.
  --a_filter_hor_width: 50rem; // Width of the filter dropdown.
  --a_filter_hor_max_width: calc(100vw - 3rem); // Maximum width of the filter dropdown.
  --a_filter_max_height: calc(100vh - 3rem); // Maximum height of the filter dropdown.
  --a_filter_hor_padding_x: var(--a_space_md); // Horizontal padding inside the filter dropdown.
  --a_filter_hor_padding_y: var(--a_space_md); // Vertical padding inside the filter dropdown.
  --a_filter_hor_body_max_height: calc(100vh - 1rem - 7.0625rem); // Maximum height of the scrollable body of the filter dropdown.
  --a_filter_hor_footer_bg: var(--a_color_surface_translucent); // Background of the sticky footer of the filter dropdown (translucent).
  --a_filter_hor_footer_actions_bg: var(--a_color_surface); // Background behind the footer buttons.
}
:where(.a_filters_center) {
  // selected filters
  --a_table_filters_center_padding: var(--a_space_md) var(--a_space_md) var(--a_space_md) var(--a_space_sm); // Padding of the list of selected filters between the filter panel and the table.
}
`,"../../../../../../scss/components/AForm.scss":`.a_form__not_elements {
  margin: .5rem;
}`,"../../../../../../scss/components/AFormElement/AInput.scss":``,"../../../../../../scss/components/AFormElement/ATextarea.scss":`.a_textarea_scalable {
  resize: none;
  overflow: hidden;
  max-height: none;
  min-height: auto;
}
.a_textarea_resize_v {
  resize: vertical;
}
.a_textarea_resize_h {
  resize: horizontal;
}
.a_textarea_resize_none {
  resize: none;
}
.a_form_element_textarea:not(.a_form_element_textarea_scalable) > .a_form_control__actions {
  right: 1.2rem;
}`,"../../../../../../scss/components/AFormElement/AValidatedJson.scss":`.a_validated_json_list__item__label {
  flex-grow: 1;
}
.a_validated_json_list__item__label_error {
  color: var(--a_form_element_error_color);
}
`,"../../../../../../scss/components/AGroupButtonDropdown.scss":`.a_group_btn_dropdown {
  & > * + * {
    margin-left: .5rem;
  }
}`,"../../../../../../scss/components/AIcon.scss":`.a_icon {
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
  display: inline;
  > svg {
    width: inherit;
    height: inherit;
    fill: currentColor;
    vertical-align: unset;
  }
}
`,"../../../../../../scss/components/ALoading.scss":`.a_loading {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--a_loading_bg);
  z-index: var(--a_loading_z_index);
  margin-left: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  &.a_text_left {
    justify-content: left;
  }
  &.a_text_right {
    justify-content: right;
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_loading) {
  --a_loading_bg: var(--a_color_surface_translucent); // Background of the overlay over the loading content (translucent).
  --a_loading_z_index: 80; // Stacking order of the overlay.
}
`,"../../../../../../scss/components/AMenu.scss":`@use "../utils/focus";

.a_menu {
  width: var(--a_menu_width);
  position: absolute;
  top: var(--a_menu_top);
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--a_menu_background);
  margin: 0;
  padding: 0;
  border-right: var(--a_border_width) solid var(--a_menu_border_color);
  z-index: 2;
  box-shadow: var(--a_menu_box_shadow_size) var(--a_menu_box_shadow_color);
}
.a_menu.a_menu_inline {
  position: relative;
  inset: auto;
  height: 100%;
  max-width: 100%;
}

.a_menu__page {
  background-color: var(--a_menu_page_bg);
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.a_menu__wrapper_open {
  .a_menu__page {
    width: calc(100% - var(--a_menu_width_expanded));
    margin-left: var(--a_menu_width_expanded);
  }
}

.a_menu__wrapper_close {
  .a_menu__page {
    width: calc(100% - var(--a_menu_width_collapsed));
    margin-left: var(--a_menu_width_collapsed);
  }
}

.a_menu__listview {
  list-style: none;
  padding: 0;
  margin: 0;
}
.a_menu__listitem {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: var(--a_menu_listitem_padding);
  margin: 0;
  border-color: var(--a_menu_border_color);
  &:not(:last-child):after {
    .a_menu__panel_main & {
      left: var(--a_menu_panel_iconpanel_size);
    }
    content: "";
    border-color: inherit;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    display: var(--a_menu_link_line_horizontal_display);
    position: absolute;
    inset-inline-start: 1.25rem;
    inset-inline-end: 0;
    bottom: -1px;
  }
}
.a_menu__list_header {
  padding-left: var(--a_menu_panel_iconpanel_size);
  background-color: var(--a_menu_list_header_bg);
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.a_menu__list_header_search {
  padding-left: var(--a_menu_link_padding_x);
  padding-right: var(--a_menu_link_padding_x);
}
.a_menu__link {
  flex-grow: 1;
  flex-basis: 10%;
  display: block;
  padding: var(--a_menu_link_padding_y) var(--a_menu_link_padding_x);
  cursor: pointer;
  color: var(--a_menu_link_color);
  border: var(--a_border_width) solid var(--a_menu_link_border_color);
  border-radius: var(--a_menu_link_border_radius);
  transition: var(--a_transition_colors);
  &,
  &:active,
  &:hover,
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--a_menu_link_color);
  }
  @include focus.focus-visible($inset: true);
  &:focus-visible {
    box-shadow: var(--a_menu_link_focus_box_shadow);
    color: var(--a_menu_link_color);
  }
  &:hover {
    color: var(--a_menu_link_hover_color);
    background-color: var(--a_menu_link_hover_bg);
  }
  &.a_menu__link_active {
    --a_menu_icon_color: var(--a_menu_submenu_open_color);
    --a_menu_link_border_color: var(--a_menu_submenu_open_color);

    background-color: var(--a_menu_submenu_open_bg);
    color: var(--a_menu_submenu_open_color);
  }

  &.a_menu__link_open {
    --a_menu_icon_color: var(--a_menu_submenu_open_color);
    --a_menu_link_border_color: var(--a_menu_submenu_open_bg);

    background-color: var(--a_menu_submenu_open_bg);
    color: var(--a_menu_submenu_open_color);
  }
}
.a_menu__link_panel_main {
  .a_menu__link__text {
    padding-left: var(--a_menu_panel_main_link_padding_left);
  }
}
.a_menu__link_disabled {
  opacity: .8;
  cursor: not-allowed;
}
.a_menu__link__text_truncated {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.a_menu__link__icon {
  width: 1.5625rem;
  height: 1.5625rem;
  text-align: center;
  color: var(--a_menu_icon_color);
}
.a_menu__link__counter {
  display: block;
  padding-inline-start: .5rem;
  float: right;
}
.a_menu__link__counter__icon {
  margin-left: .5rem;
}
.a_menu__link_btn {
  display: block;
  position: relative;
  width: auto;
}

.a_menu_clickable {
  cursor: pointer;
}

.a_menu__navbar_top {
  flex-shrink: 0;
  display: flex;
  padding: var(--a_menu_navbar_top_padding);
  height: var(--a_menu_navbar_top_height);
  margin-bottom: var(--a_menu_navbar_top_margin_bottom);
}
// search
.a_menu__panel_search {
  .a_menu__listitem {
    padding: 0;
  }
}
.a_menu__navbar_top__search {
  width: 100%;
  .a_input {
    height: var(--a_menu_search_height);
  }
  .a_form_element__parent {
    --a_form_element_label_float_top: 50%;
  }
}
.a_menu__navbar_top_sub {
  display: flex;
  align-items: center;
  padding-left: var(--a_menu_width_collapsed);
  height: var(--a_menu_breadcrumb_min_height);
}
.a_menu__navbar_top_sub__search {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  margin: 0 var(--a_menu_listitem_padding);
}

.a_menu__btn_toggle {
  min-height: var(--a_menu_btn_toggle_height);
  height: var(--a_menu_btn_toggle_height);
  min-width: var(--a_menu_btn_toggle_width);
  width: var(--a_menu_btn_toggle_width);
  position: relative;
}
.a_menu__btn_toggle_inside_menu {
  margin-right: 1rem;
}
.a_menu__btn_toggle_outside_menu:not(.a_menu__btn_toggle_only_mobile) {
  display: none;
}

.a_menu__btn_toggle__bar {
  display: block;
  background-color: var(--a_menu_btn_toggle_bar_bg);
  width: var(--a_menu_btn_toggle_bar_width);
  height: var(--a_menu_btn_toggle_bar_height);
  border-radius: calc(var(--a_menu_btn_toggle_bar_height) / 2);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: var(--a_menu_transition);
  &.a_menu__btn_toggle__bar_1 {
    top: var(--a_menu_btn_toggle_bar_1_top);
  }
  &.a_menu__btn_toggle__bar_2 {
    top: var(--a_menu_btn_toggle_bar_2_top);
  }
  &.a_menu__btn_toggle__bar_3 {
    top: var(--a_menu_btn_toggle_bar_3_top);
  }
}
.a_menu__btn_toggle_open {
  .a_menu__btn_toggle__bar {
    &.a_menu__btn_toggle__bar_1 {
      top: var(--a_menu_btn_toggle_bar_2_top);
      transform: translateX(-50%) rotate(45deg);
    }
    &.a_menu__btn_toggle__bar_2 {
      opacity: 0;
    }
    &.a_menu__btn_toggle__bar_3 {
      top: var(--a_menu_btn_toggle_bar_2_top);
      transform: translateX(-50%) rotate(-45deg);
    }
  }
}

.a_menu__backdrop {
  z-index: -1;
}
// mobile
.a_mobile {
  .a_menu_close {
    display: none;
  }
  .a_menu__page {
    width: 100%;
    margin-left: 0;
  }
  .a_menu_open {
    max-width: 100vw;
  }
  &.a_menu__wrapper_open {
    overflow: hidden;
    .a_menu__page {
      opacity: .5;
    }
  }
  .a_menu__btn_toggle_close.a_menu__btn_toggle_outside_menu {
    display: inline-block;
  }
}
.a_menu_only_mobile {
  &.a_menu_close {
    display: none;
  }
  &.a_menu_open {
    max-width: 100vw;
  }
  & + .a_menu__page {
    padding-left: 1rem;
  }
}

// panels
.a_menu__panels {
  position: absolute;
  top: 0;
  left: var(--a_menu_width_collapsed);
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: none;
}
.a_menu__panels__main {
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100% - var(--a_menu_navbar_top_height) - var(--a_menu_navbar_top_margin_bottom));
  .a_vertical_scroll {
    height: calc(100% - var(--a_menu_breadcrumb_min_height) + 1.25rem);
    margin-top: -1.25rem;
    &:not(.a_vertical_scroll_scrollable) {
      padding-bottom: 0;
      .a_vertical_scroll__btn__wrapper_up {
        border-bottom: 2px solid var(--a_menu_border_color);
      }
      .a_vertical_scroll__btn__wrapper_down {
        display: none;
      }
    }
    .a_menu__panel_main {
      position: relative;
      overflow: visible;
      transform: none;
    }
  }
}

.a_menu__panel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  color: var(--a_menu_panel_color);
  background: var(--a_menu_background);
  transform: translate3d(var(--a_menu_panel_child_offset),0,0);
  border-color: var(--a_menu_border_color);
  &:not(.a_menu__panel_main) {
    border-inline-start-width: 1px;
    border-inline-start-style: solid;
  }
}
.a_menu__panel_opened {
  z-index: 2;
  transform: translate3d(0,0,0);
}
.a_menu__panel_parent {
  overflow-y: hidden;
  transform: unset;
  z-index: 0;
  .a_menu__list_header {
    opacity: 0;
  }
}
.a_menu__panels__main {
  & ~ .a_menu__panel {
    inset-inline-start: var(--a_menu_panel_iconpanel_size);
  }
  &.a_menu__panel_parent {
    .a_menu__breadcrumb {
      opacity: 0;
    }
  }
}
.a_menu__panel_secondary {
  display: none;
  background-color: var(--a_menu_panel_secondary_bg);
  &.a_menu__panel_opened {
    display: block;
    border-left: var(--a_menu_submenu_border_width) solid var(--a_menu_submenu_open_bg);
    border-top: var(--a_menu_submenu_border_width) solid var(--a_menu_submenu_open_bg);
    border-top-left-radius: var(--a_menu_submenu_border_radius);
  }
  .a_menu__listitem {
    padding: var(--a_menu_listitem_panel_secondary_padding_y) var(--a_menu_listitem_panel_secondary_padding_x);
  }
}
.a_menu_sub_open {
  .a_menu__panels {
    display: block;
  }
}

.a_menu_sub_open,
.a_menu_close {
  .a_menu__navbar_top_sub__text {
    display: none;
  }
  .a_menu__panel_search .a_menu__navbar_top_sub__text {
    display: block;
  }
}
.a_menu_open {
  .a_menu__navbar_top_sub__search {
    display: none;
  }
}
.a_menu__panel_main {
  position: relative;
  .a_menu__link:hover {
    --a_menu_link_hover_color: var(--a_menu_panel_main_link_hover_color);
    --a_menu_link_hover_bg: var(--a_menu_panel_main_link_hover_bg);
  }
}

// menu closed
.a_menu_close {
  width: var(--a_menu_width_collapsed);
  .a_menu__navbar_top__search {
    display: none;
  }
  .a_menu__list_header {
    opacity: 0;
    width: var(--a_menu_width_expanded);
  }
  .a_menu__panel_main {
    .a_menu__link__text {
      display: none;
    }
    .a_menu__link__counter {
      display: none;
    }
  }
  .a_menu__listitem:after {
    display: none;
  }
  .a_menu__btn_toggle {
    margin: 0;
  }
  .a_menu__panel {
    overflow: hidden;
  }
  .a_menu__panels {
    position: relative;
    overflow: visible;
    .a_menu__breadcrumb_secondary {
      display: none;
    }
    .a_menu__panel {
      width: var(--a_menu_close_panel_width);
      bottom: auto;
      right: auto;
      left: auto;
      top: auto;
      border: none;
      border-radius: var(--a_menu_close_panel_border_radius);
      box-shadow: var(--a_menu_close_panel_box_shadow_size) var(--a_menu_close_panel_box_shadow_color);
      max-height: var(--a_menu_close_panel_max_height);
      overflow-y: auto;
      z-index: 2;
    }
    .a_menu__panel_parent {
      display: block;
      overflow-y: hidden;
    }
  }
  .a_menu__link {
    text-overflow: clip;
  }
  .a_menu__navbar_top_sub {
    padding-left: 0;
    align-items: baseline;
  }
}
.a_menu__vertical_scroll_hidden .a_scroll_content{
  overflow-y: hidden;
}
// breadcrumb
.a_menu__breadcrumb {
  min-height: var(--a_menu_breadcrumb_min_height);
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
.a_menu__breadcrumb_secondary {
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: var(--a_menu_breadcrumb_border_bottom_width);
    width: calc(100% - 2rem);
    background-color: var(--a_menu_submenu_open_bg);
    left: 1rem;
    bottom: 0;
  }
}
.a_menu__breadcrumb__ul {
  list-style: none;
  display: block;
  width: 100%;
  margin: 0.5rem;
  padding: 0;
}
.a_menu__breadcrumb__ul_truncated {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
}
.a_menu__breadcrumb__ul_search {
  display: flex;
  .a_menu__listitem {
    overflow-x: hidden;
    &:after {
      display: none;
    }
  }
  .a_menu__link {
    padding: 0.2rem 0.3rem;
  }
  .a_menu__breadcrumbs__item__divider {
    padding: 0.2rem;
  }
}
.a_menu__breadcrumbs__item {
  display: inline;
}
.a_menu__breadcrumbs__item__divider {
  padding-right: .2rem;
}
.a_menu__breadcrumbs__link {
  padding: .2rem;
  font-size: var(--a_font_size_sm);
}
.a_menu__breadcrumb__ul_truncated__btn {
  margin-right: .2rem;
}
.a_menu__breadcrumb__ul_truncated__dropdown {
  padding: .2rem;
  min-width: auto;
}

.a_menu__panel_header {
  color: var(--a_menu_close_panel_header_color);
  border-bottom: var(--a_menu_close_panel_header_border_bottom_width) solid var(--a_menu_close_panel_header_border_bottom_color);
  padding: var(--a_menu_listitem_panel_secondary_padding_y) var(--a_menu_listitem_panel_secondary_padding_x);
}
.a_menu__panel_header__text {
  display: inline-block;
  padding: var(--a_menu_link_padding_y) var(--a_menu_link_padding_x);
}
.a_menu__backdrop {
  opacity: 0.5;
  z-index: 1;
  left: var(--a_menu_width_expanded);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
// Global: also used by .a_menu__page, which is outside of .a_menu
:where(:root) {
  // layout
  --a_menu_width_expanded: 21.875rem; // Width of the open menu. The page next to it is shifted by this width.
  --a_menu_width_collapsed: 3.75rem; // Width of the closed menu (icons only). The page next to it is shifted by this width.
  --a_menu_transition: var(--a_duration_slow); // Duration of the animation of the toggle button bars.
  // page
  --a_menu_page_bg: var(--a_color_body_bg); // Background of the page area next to the menu (.a_menu__page).
}

:where(.a_menu) {
  // menu
  --a_menu_width: var(--a_menu_width_expanded); // Width of the menu element.
  --a_menu_top: 0; // Top offset of the menu, e.g. the height of a fixed header above it.
  --a_menu_navbar_top_height: 3.125rem; // Height of the top bar with the toggle button and the search.
  --a_menu_navbar_top_padding: .7rem .5rem .5rem .5rem; // Padding of the top bar.
  --a_menu_navbar_top_margin_bottom: .5rem; // Space below the top bar.
  --a_menu_background: var(--a_color_surface); // Background of the menu and its panels.
  --a_menu_border_color: var(--a_border_color); // Color of the right border of the menu and of the lines between panels and items.
  --a_menu_box_shadow_color: var(--a_shadow_color); // Color of the menu shadow.
  --a_menu_box_shadow_size: 2px 0 12px -4px; // Offsets, blur and spread of the menu shadow.
  // panels
  --a_menu_panel_child_offset: 100%; // Start position of a submenu panel before it slides in (translateX).
  --a_menu_panel_iconpanel_size: var(--a_menu_width_collapsed); // Width of the icon column: indent of the list header and left position of submenu panels.
  --a_menu_panel_color: var(--a_color_text_muted); // Text color of the panels.
  --a_menu_panel_secondary_bg: var(--a_color_surface); // Background of a submenu panel.
  --a_menu_panel_main_link_hover_color: var(--a_color_text); // Text color of a hovered link in the main panel.
  --a_menu_panel_main_link_hover_bg: var(--a_color_gray_100); // Background of a hovered link in the main panel.
  --a_menu_panel_main_link_padding_left: 1.5625rem; // Space between the icon and the text of a link in the main panel.
  // links
  --a_menu_link_color: var(--a_color_text); // Text color of a link.
  --a_menu_link_hover_color: var(--a_color_text); // Text color of a hovered link.
  --a_menu_link_hover_bg: var(--a_color_gray_100); // Background of a hovered link.
  --a_menu_listitem_padding: calc(.3rem * var(--a_density)); // Padding of a list item in the main panel.
  --a_menu_listitem_panel_secondary_padding_x: calc(.6rem * var(--a_density)); // Horizontal padding of a list item in a submenu panel and of the panel header.
  --a_menu_listitem_panel_secondary_padding_y: calc(.3rem * var(--a_density)); // Vertical padding of a list item in a submenu panel and of the panel header.
  --a_menu_link_padding_x: calc(.7rem * var(--a_density)); // Horizontal padding of a link.
  --a_menu_link_padding_y: calc(.5rem * var(--a_density)); // Vertical padding of a link.
  --a_menu_link_border_color: transparent; // Border color of a link.
  --a_menu_link_border_radius: var(--a_border_radius); // Corner radius of a link.
  --a_menu_link_focus_box_shadow: var(--a_focus_ring_inset); // Focus ring of a link.
  --a_menu_icon_color: var(--a_menu_link_color); // Color of a link icon.
  // header and breadcrumbs
  --a_menu_list_header_bg: var(--a_color_gray_100); // Background of the list header in a panel.
  --a_menu_breadcrumb_min_height: 4.0625rem; // Height of the breadcrumb bar above a submenu panel.
  --a_menu_breadcrumb_border_bottom_width: var(--a_border_width); // Thickness of the line under the breadcrumbs of a submenu panel.
  // submenu
  --a_menu_submenu_open_bg: var(--a_color_primary); // Background of the active link and of a link whose submenu is open. Also the color of the submenu panel border.
  --a_menu_submenu_open_color: var(--a_color_primary_contrast); // Text and icon color of the active link and of a link whose submenu is open.
  --a_menu_submenu_border_radius: var(--a_border_radius_xl); // Top left corner radius of an open submenu panel.
  --a_menu_submenu_border_width: 2px; // Width of the left and top border of an open submenu panel.
  // search
  --a_menu_search_height: 2.375rem; // Height of the search field in the top bar.
  // closed menu panel
  --a_menu_close_panel_width: 18.75rem; // Width of a submenu panel shown next to the closed menu.
  --a_menu_close_panel_max_height: 25rem; // Maximum height of a submenu panel next to the closed menu. Longer content scrolls.
  --a_menu_close_panel_border_radius: var(--a_border_radius_large); // Corner radius of a submenu panel next to the closed menu.
  --a_menu_close_panel_box_shadow_color: var(--a_shadow_color); // Shadow color of a submenu panel next to the closed menu.
  --a_menu_close_panel_box_shadow_size: 0 12px 32px -8px; // Offsets, blur and spread of the shadow of a submenu panel next to the closed menu.
  --a_menu_close_panel_header_color: var(--a_color_text); // Text color of the panel header.
  --a_menu_close_panel_header_border_bottom_color: var(--a_border_color); // Color of the line under the panel header.
  --a_menu_close_panel_header_border_bottom_width: var(--a_border_width); // Thickness of the line under the panel header.
  // separator
  --a_menu_link_line_horizontal_display: none; // Display of the separator line between list items. Set to block to show it.
}

:where(.a_menu__btn_toggle) {
  // toggle button
  --a_menu_btn_toggle_width: 2.625rem; // Width of the toggle button.
  --a_menu_btn_toggle_height: 2.375rem; // Height of the toggle button.
  --a_menu_btn_toggle_bar_width: 1.125rem; // Width of a bar of the toggle icon.
  --a_menu_btn_toggle_bar_height: 2px; // Thickness of a bar of the toggle icon.
  --a_menu_btn_toggle_bar_1_top: .75rem; // Top position of the first bar of the toggle icon.
  --a_menu_btn_toggle_bar_2_top: calc(var(--a_menu_btn_toggle_height) / 2 - var(--a_menu_btn_toggle_bar_height) / 2); // Top position of the middle bar of the toggle icon. The bars of the close icon (×) meet here.
  --a_menu_btn_toggle_bar_3_top: 1.5rem; // Top position of the last bar of the toggle icon.
  --a_menu_btn_toggle_bar_bg: currentColor; // Color of the bars of the toggle icon.
}
`,"../../../../../../scss/components/AModal.scss":`.a_modal_footer_sticky {
  position: sticky;
  bottom: 0;
  margin-left: calc(-1*var(--a_modal_padding));
  margin-right: calc(-1*var(--a_modal_padding));
  background-color: var(--a_modal_footer_sticky_bg);
  backdrop-filter: blur(var(--a_modal_footer_sticky_blur));
  z-index: 4;
  padding-right: calc(var(--a_modal_padding) - var(--a_modal_footer_gap));
  padding-top: calc(var(--a_modal_padding) - var(--a_modal_footer_gap));
  padding-bottom: calc(var(--a_modal_padding) - var(--a_modal_footer_gap));
  .a_modal_footer_actions {
    background-color: var(--a_modal_footer_sticky_actions_bg);
    margin: 0;
    border-bottom-left-radius: var(--a_border_radius);
    border-top-left-radius: var(--a_border_radius);
    > * {
      margin: calc(var(--a_modal_footer_sticky_gap));
    }
  }
  .a_loading {
    margin: 0;
  }
}
.a_modal_content_with_footer_sticky {
  .a_modal_body {
    padding-bottom: 0;
    scroll-padding-bottom: 6.25rem;
  }
  .a_modal_body__content {
    padding-bottom: var(--a_modal_padding);
  }
}
.a_modal_footer_actions {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.a_modal {
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_modal_footer_sticky) {
  --a_modal_footer_sticky_gap: calc(var(--a_modal_footer_gap) * .5); // Space around the buttons in the sticky footer.
  --a_modal_footer_sticky_bg: var(--a_color_surface_raised_translucent); // Background of the sticky footer. Translucent, so the content shows through.
  --a_modal_footer_sticky_blur: 3px; // Blur of the content behind the sticky footer.
  --a_modal_footer_sticky_actions_bg: var(--a_modal_bg); // Background of the button area in the sticky footer.
}
`,"../../../../../../scss/components/APagination.scss":`@use "../utils/focus";

.a_pagination__parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--a_pagination_bg);
  font-size: var(--a_pagination_font_size);
  padding: var(--a_pagination_padding);
  min-height: 2rem;
  border-radius: var(--a_pagination_border_radius);
  > * {
    margin-bottom: var(--a_space_sm);
  }
  .a_pagination {
    justify-content: center;
  }
}
.a_pagination {
  display: flex;
  width: 100%;
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
}
.a_pagination_group {
  width: auto;
  justify-content: normal;
  padding-left: var(--a_space_md);
}
.a_pagination__item {
  white-space: nowrap;
}
.a_pagination__item__text {
  position: relative;
  display: block;
  padding: var(--a_pagination_link_padding_y) var(--a_pagination_link_padding_x);
  font-size: var(--a_pagination_font_size);
  background-color: var(--a_pagination_link_bg);
  border: var(--a_pagination_link_border_width) solid var(--a_pagination_link_border_color);
  height: 100%;
}
.a_pagination__item__link {
  position: relative;
  display: block;
  padding: var(--a_pagination_link_padding_y) var(--a_pagination_link_padding_x);
  font-size: var(--a_pagination_font_size);
  color: var(--a_pagination_link_color);
  text-decoration: none;
  background-color: var(--a_pagination_link_bg);
  border: var(--a_pagination_link_border_width) solid var(--a_pagination_link_border_color);
  transition: var(--a_transition_colors);
  cursor: pointer;
  height: 100%;
  .a_pagination__item:first-child & {
    border-top-left-radius: var(--a_pagination_link_border_radius);
    border-bottom-left-radius: var(--a_pagination_link_border_radius);
  }
  .a_pagination__item:last-child & {
    border-top-right-radius: var(--a_pagination_link_border_radius);
    border-bottom-right-radius: var(--a_pagination_link_border_radius);
  }
  &:hover {
    z-index: 2;
    color: var(--a_pagination_link_hover_color);
    background-color: var(--a_pagination_link_hover_bg);
    border-color: var(--a_pagination_link_hover_border_color);
  }
  @include focus.focus-visible;
  &:focus-visible {
    z-index: 4;
    color: var(--a_pagination_link_focus_color);
    background-color: var(--a_pagination_link_focus_bg);
    box-shadow: var(--a_pagination_link_focus_box_shadow);
  }
  .disabled > &,
  &.disabled {
    color: var(--a_pagination_link_disabled_color);
    pointer-events: none;
    background-color: var(--a_pagination_link_disabled_bg);
    border-color: var(--a_pagination_link_disabled_border_color);
    cursor: default;
  }
  .active > &,
  &.active {
    z-index: 3;
    color: var(--a_pagination_link_active_color);
    background-color: var(--a_pagination_link_active_bg);
    border-color: var(--a_pagination_link_active_border_color);
  }
}

// Sizes. Link tokens are declared on .a_pagination_vars and .a_pagination, so the sizes target them too.
.a_pagination__parent_large,
.a_pagination__parent_large .a_pagination_vars,
.a_pagination__parent_large .a_pagination {
  --a_pagination_link_padding_x: calc(1.5rem * var(--a_density));
  --a_pagination_link_padding_y: calc(.75rem * var(--a_density));
  --a_pagination_font_size: var(--a_font_size_lg);
  --a_pagination_link_border_radius: var(--a_border_radius_large);
}
.a_pagination__parent_small,
.a_pagination__parent_small .a_pagination_vars,
.a_pagination__parent_small .a_pagination {
  --a_pagination_link_padding_x: calc(.5rem * var(--a_density));
  --a_pagination_link_padding_y: calc(.25rem * var(--a_density));
  --a_pagination_font_size: var(--a_font_size_sm);
  --a_pagination_link_border_radius: var(--a_border_radius_small);
}

.a_pagination__counts {
  display: flex;
  align-items: center;
  .a_select {
    --a_select_min_width: 3.125rem;
    --a_select_toggle_padding_right: 0.3125rem;
  }
  .a_select_toggle {
    width: 4.375rem;
  }
  .a_select__value__label {
    padding-right: .75rem;
  }
}
.a_pagination__count_from_to {
  margin-right: var(--a_space_md);
  white-space: nowrap;
}
.a_pagination__count__text {
  white-space: nowrap;
}
.a_pagination__count {
  display: flex;
  white-space: nowrap;
}
.a_pagination__count__item {
  border-right: var(--a_border_width) solid var(--a_border_color_strong);
  padding: 0 var(--a_space_xs);
  &:last-child {
    border-right: none;
  }
}
.a_pagination__count__button {
  padding: 0;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_pagination__parent) {
  // panel
  --a_pagination_bg: var(--a_color_surface_subtle); // Background of the panel around the pagination and the page size select.
  --a_pagination_font_size: var(--a_body_font_size); // Font size of the panel and the page links. Changed by the size classes.
  --a_pagination_padding: var(--a_space_sm) var(--a_space_sm) 0 var(--a_space_sm); // Padding of the panel.
  --a_pagination_border_radius: var(--a_border_radius); // Corner radius of the panel.
}
:where(.a_pagination_vars) {
  // page link
  --a_pagination_link_padding_x: var(--a_control_padding_x); // Horizontal padding of a page link. Changed by the size classes.
  --a_pagination_link_padding_y: var(--a_control_padding_y); // Vertical padding of a page link. Changed by the size classes.
  --a_pagination_link_color: var(--a_color_link); // Text color of a page link.
  --a_pagination_link_bg: var(--a_color_surface); // Background of a page link.
  --a_pagination_link_border_width: var(--a_border_width); // Border width of a page link.
  --a_pagination_link_border_color: var(--a_border_color); // Border color of a page link.
  --a_pagination_link_border_radius: var(--a_border_radius); // Corner radius of the first and the last page link. Changed by the size classes.
  // hover
  --a_pagination_link_hover_color: var(--a_color_link_hover); // Text color of a hovered page link.
  --a_pagination_link_hover_bg: var(--a_color_gray_100); // Background of a hovered page link.
  --a_pagination_link_hover_border_color: var(--a_border_color); // Border color of a hovered page link.
  // focus
  --a_pagination_link_focus_color: var(--a_color_link_hover); // Text color of a page link with keyboard focus.
  --a_pagination_link_focus_bg: var(--a_color_gray_100); // Background of a page link with keyboard focus.
  --a_pagination_link_focus_box_shadow: var(--a_focus_ring); // Focus ring of a page link.
  // active
  --a_pagination_link_active_color: var(--a_color_primary_contrast); // Text color of the current page.
  --a_pagination_link_active_bg: var(--a_color_primary); // Background of the current page.
  --a_pagination_link_active_border_color: var(--a_color_primary); // Border color of the current page.
  // disabled
  --a_pagination_link_disabled_color: var(--a_color_text_muted); // Text color of a disabled link (e.g. "previous" on the first page).
  --a_pagination_link_disabled_bg: var(--a_color_surface); // Background of a disabled link.
  --a_pagination_link_disabled_border_color: var(--a_border_color); // Border color of a disabled link.
}
`,"../../../../../../scss/components/AProgressCircle.scss":`.a_progress_circle {
  color: var(--a_progress_circle_color);
  position: relative;
}

.a_progress_circle__base {
  fill: none;
  stroke: var(--a_progress_circle_base_color);
}

.a_progress_circle__scale {
  stroke-dashoffset: 0;
  fill: none;
  stroke: currentColor;
  transition:
    stroke-dasharray var(--a_duration_slow) var(--a_easing),
    stroke var(--a_duration_slow) var(--a_easing),
    opacity var(--a_duration_slow) var(--a_easing);
}
.a_progress_circle__scale_indeterminate {
  animation: 3s linear infinite a_progress_circle_indeterminate;
}

.a_progress_circle__text {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  transform: translate(0, -50%);
  color: var(--a_progress_circle_text_color);
}

@keyframes a_progress_circle_indeterminate {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -300%;
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_progress_circle) {
  --a_progress_circle_color: var(--a_color_primary); // Color of the progress arc.
  --a_progress_circle_base_color: var(--a_color_gray_200); // Color of the full circle behind the arc.
  --a_progress_circle_text_color: var(--a_color_text); // Color of the text in the middle.
}
`,"../../../../../../scss/components/AResizer.scss":`.a_resizer {
  position: absolute;
  &:hover {
    .a_resizer__line {
      background-color: var(--a_resizer_hover_bg);
    }
  }
}
.a_resizer_x {
  top: 0;
  bottom: 0;
  cursor: w-resize;
  padding-right: .25rem;
  .a_resizer__line {
    height: 100%;
    width: var(--a_resizer_width);
  }
  .a_resizer__icon {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}
.a_resizer_y {
  left: 0;
  right: 0;
  cursor: s-resize;
  padding-top: .25rem;
  .a_resizer__line {
    width: 100%;
    height: var(--a_resizer_width);
  }
  .a_resizer__icon {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
}
.a_resizer__line {
  background-color: var(--a_resizer_bg);
  transition: background-color var(--a_duration_fast) var(--a_easing);
}
.a_resizer__icon {
  position: absolute;
}
.a_resizer_x_active__body {
  user-select: none;
  cursor: w-resize;
}
.a_resizer_y_active__body {
  user-select: none;
  cursor: s-resize;
}
.a_resizer_disabled {
  cursor: inherit;
  &:hover {
    .a_resizer__line {
      background-color: var(--a_resizer_bg);
    }
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_resizer) {
  --a_resizer_width: .125rem; // Thickness of the resizer line.
  --a_resizer_bg: var(--a_color_gray_200); // Color of the resizer line.
  --a_resizer_hover_bg: var(--a_color_primary); // Color of the resizer line on hover.
}
`,"../../../../../../scss/components/AShowMore.scss":`.a_show_more__wrapper {
  overflow: hidden;
}
.a_show_more__button {
  margin-top: var(--a_show_more_btn_margin_top);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_show_more) {
  --a_show_more_btn_margin_top: var(--a_space_sm); // Space between the content and the "show more" button.
}
`,"../../../../../../scss/components/ASkeleton.scss":`.a_skeleton {
  display: flex;
  flex-direction: column;
  gap: var(--a_skeleton_group_gap);
  width: 100%;
}

.a_skeleton__default {
  display: flex;
  align-items: flex-start;
  gap: var(--a_skeleton_gap);
}

.a_skeleton__paragraph {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: var(--a_skeleton_gap);
  min-width: 0;
}

.a_skeleton__avatar {
  flex: 0 0 auto;
  width: var(--a_skeleton_avatar_size);
  height: var(--a_skeleton_avatar_size);
}


.a_skeleton__item {
  display: block;
  width: 100%;
  height: var(--a_skeleton_text_height);
  border-radius: var(--a_skeleton_border_radius);
  background: var(--a_skeleton_bg);
}
.a_skeleton__item_heading {
  height: var(--a_skeleton_heading_height);
}
.a_skeleton__item_circle {
  width: var(--a_skeleton_avatar_size);
  height: var(--a_skeleton_avatar_size);
  border-radius: 50%;
}
.a_skeleton__item_rect {
  height: var(--a_skeleton_rect_height);
}
.a_skeleton__item_button {
  width: var(--a_skeleton_button_width);
  height: var(--a_skeleton_control_height);
  border-radius: var(--a_skeleton_control_border_radius);
}
.a_skeleton__item_input {
  height: var(--a_skeleton_control_height);
  border-radius: var(--a_skeleton_control_border_radius);
}
.a_skeleton__item_image {
  height: auto;
  aspect-ratio: var(--a_skeleton_image_aspect_ratio);
}

.a_skeleton__item.a_skeleton__title {
  width: var(--a_skeleton_title_width);
}
.a_skeleton__item.a_skeleton__row:last-child:not(:first-child) {
  width: var(--a_skeleton_last_row_width);
}

// Shimmer: a lighter band moves over the shapes
.a_skeleton_animated .a_skeleton__item,
.a_skeleton__item.a_skeleton_animated {
  background: linear-gradient(90deg, var(--a_skeleton_bg) 25%, var(--a_skeleton_highlight) 37%, var(--a_skeleton_bg) 63%);
  background-size: 400% 100%;
  animation: a_skeleton_shimmer var(--a_skeleton_duration) ease infinite;
}

@keyframes a_skeleton_shimmer {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .a_skeleton_animated .a_skeleton__item,
  .a_skeleton__item.a_skeleton_animated {
    animation: none;
    background: var(--a_skeleton_bg);
  }
}

// Backgrounds are removed in forced colors mode, so the shapes get a border
@media (forced-colors: active) {
  .a_skeleton__item {
    border: 1px solid CanvasText;
  }
}

:where(.a_skeleton, .a_skeleton__item) {
  // colors
  --a_skeleton_bg: var(--a_color_gray_200); // Color of the shapes.
  --a_skeleton_highlight: var(--a_color_gray_100); // Color of the moving band of the animation.
  --a_skeleton_duration: 1.4s; // Duration of one pass of the animation.
  // sizes
  --a_skeleton_border_radius: var(--a_border_radius_small); // Corner radius of the shapes.
  --a_skeleton_gap: .75rem; // Space between the rows.
  --a_skeleton_group_gap: 1.5rem; // Space between the repeated skeletons (prop count).
  --a_skeleton_text_height: 1rem; // Height of a text row (variant "text").
  --a_skeleton_heading_height: 1.5rem; // Height of a heading (variant "heading").
  --a_skeleton_title_width: 40%; // Width of the title of the default skeleton.
  --a_skeleton_last_row_width: 60%; // Width of the last row of the default skeleton.
  --a_skeleton_avatar_size: 3rem; // Size of the avatar (variant "circle").
  --a_skeleton_rect_height: 6rem; // Height of a block (variant "rect").
  --a_skeleton_control_height: var(--a_control_height); // Height of a button and of an input (variants "button" and "input").
  --a_skeleton_control_border_radius: var(--a_border_radius); // Corner radius of a button and of an input.
  --a_skeleton_button_width: 6rem; // Width of a button (variant "button").
  --a_skeleton_image_aspect_ratio: 16 / 9; // Aspect ratio of an image (variant "image").
}
`,"../../../../../../scss/components/ASpinner.scss":`.a_spinner_size_1 {
  --a_spinner_width: 3rem;
  --a_spinner_height: 3rem;
  --a_spinner_border_width: 0.35em;
}
.a_spinner_size_2 {
  --a_spinner_width: 2.6rem;
  --a_spinner_height: 2.6rem;
  --a_spinner_border_width: 0.3em;
}
.a_spinner_size_3 {
  --a_spinner_width: 2.3rem;
  --a_spinner_height: 2.3rem;
  --a_spinner_border_width: 0.3em;
}
.a_spinner_size_4 {
  --a_spinner_width: 2rem;
  --a_spinner_height: 2rem;
}
.a_spinner_size_5 {
  --a_spinner_width: 1.8rem;
  --a_spinner_height: 1.8rem;
}
.a_spinner_size_6 {
  --a_spinner_width: 1.6rem;
  --a_spinner_height: 1.6rem;
  --a_spinner_border_width: 0.2em;
}
.a_spinner_size_7 {
  --a_spinner_width: 1.4rem;
  --a_spinner_height: 1.4rem;
  --a_spinner_border_width: 0.2em;
}`,"../../../../../../scss/components/ATable.scss":`@use "../utils/focus";

.a_table__parent {
  width: 100%;
  overflow-x: hidden;
  position: relative;
}
.a_table__parent_scrollable {
  overflow-x: auto;
}
.a_table {
  display: block;
  width: 100%;
  caption-side: bottom;
  border-collapse: collapse;
  vertical-align: top;
  overflow-x: auto;
  border: var(--a_table_border_width) solid var(--a_table_border_color);
  border-radius: var(--a_table_border_radius);
}
.a_table_inner_bordered {
  --a_table_border_width: 0;
  --a_table_border_radius: 0;
}
.a_table:not(.a_table_inner_bordered) .a_table__body > .a_table__row:last-child {
  border-bottom-color: transparent;
}
.a_table__body,
.a_table__td,
.a_table__th,
.a_table__head,
.a_table__row {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
.a_table__loading {
  position: relative;
  min-height: 3rem;
}
.a_table__cell {
  padding: var(--a_table_cell_padding_y) var(--a_table_cell_padding_x);
  font-variant-numeric: var(--a_table_font_variant_numeric);
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

.a_table__cell__child {
  width: 100%;
}
.a_table__cell_checkbox {
  --a_table_cell_padding_x: 0;
}

.a_table__empty_text {
  padding: var(--a_table_empty_padding_y) var(--a_table_cell_padding_x);
  background-color: var(--a_table_bg);
  border-bottom-width: var(--a_border_width);
  color: var(--a_table_empty_color);
  text-align: center;
}
.a_table__cell_click {
  cursor: pointer;
}
.a_table__head {
  display: flex;
  flex-direction: column;
}
.a_table__head_dragstart .a_table__th > * {
  pointer-events: none;
}
.a_table__row {
  display: flex;
  min-width: min-content;
  border-bottom: var(--a_table_row_border_bottom_width) solid var(--a_table_row_border_bottom_color);
  background-color: var(--a_table_row_bg_state, var(--a_table_bg));
  transition: background-color var(--a_duration_fast) var(--a_easing);
  @include focus.focus-visible($inset: true);
  &:focus-visible {
    box-shadow: var(--a_table_row_focus_shadow);
    .a_table__cell_action_sticky {
      box-shadow: var(--a_table_row_focus_shadow), var(--a_table_action_sticky_shadow);
    }
  }
}
.a_table_striped :where(.a_table__body > .a_table__body__row:nth-child(even of .a_table__body__row)) {
  --a_table_row_bg_state: var(--a_table_row_striped_bg);
}
.a_table__row_hide {
  display: none;
}
.a_table__head__row {
  background-color: var(--a_table_th_bg);
  color: var(--a_table_th_color);
  font-size: var(--a_table_th_font_size);
  font-weight: var(--a_table_th_font_weight);
  border-bottom: var(--a_table_th_border_bottom_width) solid var(--a_table_th_border_bottom_color);
}

.a_table__th {
  display: flex;
  align-items: center;
  position: relative;
  background-color: inherit;
  padding: 0;
  .a_table__cell__child {
    padding: var(--a_table_cell_padding_y) var(--a_table_cell_padding_x);
  }
  &.a_table__cell_action {
    background-color: inherit;
    padding: var(--a_table_cell_padding_y) var(--a_table_cell_padding_x);
  }
  .a_table__cell__child {
    height: 100%;
  }
}
.a_table__th_group_container {
  display: flex;
  flex-direction: row;
}
.a_table__cell_group {
  height: 100%;
  padding: var(--a_table_cell_padding_y) var(--a_table_cell_padding_x);
}
.a_table__th_child_group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.a_table__th__btn {
  padding: 0;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: inherit;
  display: flex;
  align-items: center;
  &.a_text_right {
    justify-content: flex-end;
  }
  &.a_text_left {
    justify-content: flex-start;
  }
  &.a_text_center {
    justify-content: center;
  }
}
.a_table__th__btn.a_table__th__btn_sort {
  --a_btn_color: currentColor;
  --a_btn_hover_color: var(--a_table_th_hover_color);
  --a_btn_active_color: var(--a_table_th_hover_color);
  --a_btn_font_size: var(--a_table_th_font_size);
  --a_btn_font_weight: var(--a_table_th_font_weight);
  --a_btn_text_decoration: none;
  padding-right: 0.9375rem;
}
.a_table__th:not(.a_table__th_sorting) .a_table__th__sort__icons {
  opacity: var(--a_table_th_sort_icon_opacity);
  transition: opacity var(--a_duration_fast) var(--a_easing);
}
.a_table__th:not(.a_table__th_sorting):is(:hover, :focus-within) .a_table__th__sort__icons {
  opacity: 1;
}
.a_table__th__btn_sequence {
  padding-right: 2.8125rem;
}
.a_table__th_draggable {
  cursor: move;
}
.a_table__th_over {
  position: relative;
  &:before {
    content: "";
    display: block;
    width: var(--a_table_dnd_th_width);
    height: 100%;
    background-color: var(--a_table_dnd_th_bg);
  }
}
.a_table__th_over_right {
  &:after {
    content: "";
    display: block;
    width: var(--a_table_dnd_th_width);
    height: 100%;
    background-color: var(--a_table_dnd_th_bg);
  }
}
.a_table__th,
.a_table__th__dropdown__li {
  .a_sr_only,
  .a_sr_only_focusable:not(:focus):not(:focus-within) {
    position: absolute !important;
  }
}

.a_table__th__dropdown__li_invisible {
  .a_dropdown__item_text {
    color: var(--a_color_text_muted);
  }
  .a_table__th__dropdown_item__icon_btn {
    color: var(--a_color_text_muted);
  }
}

.a_table__th__dropdown__li_over {
  &:before {
    content: "";
    display: block;
    height: var(--a_table_draggable_li_height);
    background-color: var(--a_table_dnd_dropdown_li_bg);
  }
}
.a_table__th__dropdown__li_over_right {
  &:after {
    content: "";
    display: block;
    height: var(--a_table_draggable_li_height);
    background-color: var(--a_table_dnd_dropdown_li_bg);
  }
}

.a_table__th_sorting {
  background-color: var(--a_table_th_sorting_bg);
  color: var(--a_table_th_sorting_color);
}
// Order of the row backgrounds: striped < hover < selected < preview.
.a_table__grandparent:not(.a_table_mobile) :where(.a_table__row_hover:hover, .a_table__row_hover:focus-within) {
  --a_table_row_bg_state: var(--a_table_row_hover_bg);
}
.a_table__grandparent {
  .a_table__row.a_table__row_selected {
    --a_table_row_bg_state: var(--a_table_row_selected_bg);
  }
}
.a_table__grandparent:not(.a_table_mobile) {
  .a_table__row.a_table__row_preview_was_open {
    --a_table_row_bg_state: var(--a_table_row_preview_was_open_bg);
  }
  .a_table__row.a_table__row_preview_open {
    --a_table_row_bg_state: var(--a_table_row_preview_open_bg);
    box-shadow: inset var(--a_table_row_accent_width) 0 0 var(--a_table_row_accent_color);
    &:focus-visible {
      box-shadow: var(--a_table_row_focus_shadow), inset var(--a_table_row_accent_width) 0 0 var(--a_table_row_accent_color);
    }
  }
}
.a_table__td {
  display: flex;
  align-items: center;
  overflow-x: auto;
}


.a_table__body,
.a_table__footer {
  display: flex;
  flex-direction: column;
  min-width: min-content;
}

.a_table__footer {
  border-top: var(--a_table_footer_border_top);
}

.a_table__th__icon + .a_table__th__text {
  margin-left: var(--a_table_between_actions_margin);
}

.a_table__th__sort {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.a_table__th__sort__box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  display: flex;
  align-items: center;
}

.a_table__th__sort__sequence_num {
  margin-right: .2rem;
  border-radius: var(--a_border_radius_small);
  background-color: var(--a_table_sort_sequence_num_bg);
  color: var(--a_table_sort_sequence_num_color);
  text-underline: none;
  &:hover {
    text-underline: none;
  }
}

.a_table__th__sort__icons {
  display: flex;
  flex-direction: column;
}

.a_table__th__sort__icon {
  width: 0.8125rem;
  height: 0.8125rem;
  line-height: 0;
}

.a_table__cell_action {
  justify-content: flex-end;
  flex-grow: 1;
  min-width: 3.125rem;
  > .a_table__cell__child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.a_table__cell_action__group {
  margin-left: auto;
  > * + * {
    margin-left: 0.5rem;
  }
  .a_group_btn_dropdown .a_btn_group_table {
    width: 100%;
  }
}
.a_table__cell_action_sticky {
  position: sticky;
  right: 0;
  background-color: var(--a_table_row_bg_state, var(--a_table_bg));
  box-shadow: var(--a_table_action_sticky_shadow);
}
.a_table__head__row .a_table__cell_action_sticky {
  background-color: var(--a_table_th_bg);
}
.a_table__th__dropdown_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
}
.a_table__th__dropdown_item__child {
  position: relative;
  flex-grow: 1;
  padding-right: 1.5625rem;
  display: flex;
  align-items: center;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  white-space: normal;
}
.a_table__th__dropdown_item__btn_arrow {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.a_table__th__dropdown__ul {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}
.a_table__drag_element {
  opacity: 0.4;
}
.a_table__th__dropdown__ul_dragstart .a_table__th__dropdown__li > * {
  pointer-events: none;
}
.a_table__th__dropdown_item__icon {
  margin-right: var(--a_table_between_actions_margin);
}
.a_table__th__dropdown_item__icon_btn {
  padding: 0;
}

.a_table__th__dropdown_item__icon_dnd {
  margin-left: 1rem;
  cursor: move;
}

.a_table__th__dropdown__search {
  padding-top: .75rem;
}

.a_table__top_panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: var(--a_table_between_actions_margin) 0;
}

.a_table__top_panel__label {
  display: inline-block;
  font-size: 1.5rem;
}
.a_table__top_panel__label__count {
  padding-left: var(--a_table_between_actions_margin);
}
.a_table__top_panel__actions {
  margin-left: auto;
  .a_table__action {
    margin-left: var(--a_table_between_actions_margin);
  }
  .a_group_btn_dropdown {
    display: inline-block;
  }
}
.a_table__top_panel__actions__quick_search {
  display: inline-block;
  width: var(--a_table_quick_search_width);
  margin-left: var(--a_table_between_actions_margin);
}
.a_table__action {
  position: relative;
  margin-left: var(--a_table_between_actions_margin);
}
.a_table__action__icon + .a_table__action__text {
  margin-left: var(--a_table_between_actions_margin);
}

.a_table__row_action {
  position: relative;
}
.a_table__cell_action__additional_icon {
  margin-right: .25rem;
}
.a_table__cell_action__btn {
  --a_btn_padding_y: calc(.25rem * var(--a_density));
  --a_btn_padding_x: calc(.5rem * var(--a_density));
  --a_btn_font_size: var(--a_font_size_sm);
  --a_btn_border_radius: var(--a_border_radius_small);
}

.a_table__preview_right {
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--a_z_index_fixed);
  width: var(--a_table_preview_right_width);
  height: 100vh;
  overflow-y: auto;
  background-color: var(--a_table_preview_right_bg);
  border-width: var(--a_table_preview_right_border_width);
  border-style: solid;
  border-color: var(--a_table_preview_right_border_color);
  box-shadow: var(--a_table_preview_right_shadow_size) var(--a_table_preview_right_shadow_color);

  @include focus.focus-visible($inset: true);
  &:focus-visible {
    box-shadow: var(--a_focus_ring_inset), var(--a_table_preview_right_shadow_size) var(--a_table_preview_right_shadow_color);
  }
}
.a_table__preview_right__header {
  background-color: var(--a_table_preview_right_header_bg);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: var(--a_table_preview_right_padding);
  font-size: var(--a_table_preview_right_header_font_size);
}
.a_table__preview_right__header__text {
  margin-right: .5rem;
}
.a_table__preview_right__header__icons {
  display: inline-block;
}
.a_table__preview_right__body {
  padding: var(--a_table_preview_right_padding);
}
.a_table__preview_right__btn_close {
  padding: 0;
}
.a_table__preview_right__resizer {
  left: 0;
}



.a_table_mobile {
  .a_table__row {
    flex-direction: column;
    &:first-child {
      border-top: var(--a_table_row_border_bottom_width) solid var(--a_table_row_border_bottom_color);
    }
  }
  .a_table__td {
    border-bottom: none;
  }
  .a_table__cell_action {
    --a_table_th_border_vertical_width: 0;
  }
}

.a_table_mobile__dl__wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
}

.a_table_mobile__dl {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  dt, dd {
    border-bottom: var(--a_table_mobile_dt_dd_border_bottom);
    display: flex;
    align-items: center;
  }
  dt {
    width: calc(100% * var(--a_table_mobile_dt_width));
    padding-left: var(--a_table_mobile_dt_padding_left);
    font-weight: var(--a_font_weight_semibold);
    padding-right: 1rem;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
  }
  dd {
    width: calc(100% * var(--a_table_mobile_dd_width));
    padding-right: var(--a_table_mobile_dd_padding_right);
  }
  .a_table__td {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }
}
.a_table_mobile__actions_parent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: var(--a_table_mobile_dt_padding_left);
  padding-right: var(--a_table_mobile_dd_padding_right);
  .a_table__cell_action {
    flex-grow: unset;
    margin-left: auto;
  }
}
.a_table_mobile__columns_btn_toggle {
  padding: 0;
}

.a_table__multiple_panel {
  padding: var(--a_space_md);
  border-radius: var(--a_table_multiple_border_radius);
  border: var(--a_table_multiple_border);
  background-color: var(--a_table_multiple_bg);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--a_space_sm);
}
.a_table__multiple_panel__header {
  display: flex;
  flex-direction: column;
}
.a_table__multiple_panel__header__text {
  font-size: var(--a_table_multiple_header_text_font_size);
}
.a_table__multiple_panel__items {
  margin-top: .5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.a_table__multiple_panel__items__selected {
  display: inline-block;
  padding: .25rem .5rem;
  border: var(--a_table_multiple_items_selected_border);
  background-color: var(--a_table_multiple_items_selected_bg);
  border-radius: var(--a_table_multiple_border_radius);
}
.a_table__multiple_panel__btn_all_rows {
  margin-left: .5rem;
}
.a_table__preview_down {
  background-color: var(--a_table_preview_down_bg);
  border: var(--a_table_preview_down_border_width) solid var(--a_table_preview_down_border_color);
  padding: var(--a_table_preview_down_padding_y) var(--a_table_preview_down_padding_right) var(--a_table_preview_down_padding_y) var(--a_table_preview_down_padding_left);
  position: relative;
  min-height: 3.125rem;
  border-radius: var(--a_table_preview_down_border_radius);

  @include focus.focus-visible($inset: true);
  &:focus-visible {
    box-shadow: var(--a_table_row_focus_shadow);
  }
  .a_table__preview_down__btn_close {
    line-height: 1;
    padding: 0;
    position: absolute;
    right: .5rem;
    top: .5rem;
  }
}
.a_table_bordered,
.a_table_inner_bordered {
  .a_table__td {
    border-left: var(--a_table_td_border_vertical_width) solid var(--a_table_td_border_vertical_color);
  }
  .a_table__th {
    border-left: var(--a_table_th_border_vertical_width) solid var(--a_table_th_border_vertical_color);
  }
  .a_table__th_group {
    &:not(:first-child) {
      .a_table__cell_group,
      .a_table__cell__child_group {
        border-left: var(--a_table_th_border_vertical_width) solid var(--a_table_th_border_vertical_color);
      }
      + .a_table__th {
        border-left: var(--a_table_th_border_vertical_width) solid var(--a_table_th_border_vertical_color);
      }
    }
  }
  .a_table__cell_action {
    border-left: var(--a_table_th_border_vertical_width) solid var(--a_table_th_border_vertical_color);
  }
  .a_table__cell_group {
    border-bottom: var(--a_table_th_border_horizontal_width) solid var(--a_table_th_border_horizontal_color);
  }
  .a_table__row > :first-child {
    border-left: 0;
  }
}

.a_table__grandparent_without_scroll {
  .a_table__parent {
    overflow-x: unset;
  }
  .a_table {
    overflow-x: unset;
  }
}
.a_table__row_level {
  .a_table__cell:first-child .a_table__cell__child {
    position: relative;
  }
}
.a_table__row_level_1 {
  > .a_table__cell:first-child .a_table__cell__child,
  .a_table_mobile__dl__wrapper {
    padding-left: var(--a_table_tree_level_padding_left);
    .a_table__row_level__icon {
      left: 0;
    }
  }
  .a_table_mobile__dl {
    dt {
      width: calc((100% + var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dt_width) - var(--a_table_tree_level_padding_left));
    }
    dd {
      width: calc((100% + var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dd_width));
    }
  }
}
.a_table__row_level_2 {
  > .a_table__cell:first-child .a_table__cell__child,
  .a_table_mobile__dl__wrapper {
    padding-left: calc(2 * var(--a_table_tree_level_padding_left));
    .a_table__row_level__icon {
      left: var(--a_table_tree_level_padding_left);
    }
  }
  .a_table_mobile__dl {
    dt {
      width: calc((100% + 2 * var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dt_width) - 2 * var(--a_table_tree_level_padding_left));
    }
    dd {
      width: calc((100% + 2 * var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dd_width));
    }
  }
}
.a_table__row_level_3 {
  > .a_table__cell:first-child .a_table__cell__child,
  .a_table_mobile__dl__wrapper {
    padding-left: calc(3 * var(--a_table_tree_level_padding_left));
    .a_table__row_level__icon {
      left: calc(2 * var(--a_table_tree_level_padding_left));
    }
  }
  .a_table_mobile__dl {
    dt {
      width: calc((100% + 3 * var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dt_width) - 3 * var(--a_table_tree_level_padding_left));
    }
    dd {
      width: calc((100% + 3 * var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dd_width));
    }
  }
}
.a_table__row_level_4 {
  > .a_table__cell:first-child .a_table__cell__child,
  .a_table_mobile__dl__wrapper {
    padding-left: calc(4 * var(--a_table_tree_level_padding_left));
    .a_table__row_level__icon {
      left: calc(3 * var(--a_table_tree_level_padding_left));
    }
  }
  .a_table_mobile__dl {
    dt {
      width: calc((100% + 4 * var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dt_width) - 4 * var(--a_table_tree_level_padding_left));
    }
    dd {
      width: calc((100% + 4 * var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dd_width));
    }
  }
}
.a_table__row_level_5 {
  > .a_table__cell:first-child .a_table__cell__child,
  .a_table_mobile__dl__wrapper {
    padding-left: calc(5 * var(--a_table_tree_level_padding_left));
    .a_table__row_level__icon {
      left: calc(4 * var(--a_table_tree_level_padding_left));
    }
  }
  .a_table_mobile__dl {
    dt {
      width: calc((100% + 5 * var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dt_width) - 5 * var(--a_table_tree_level_padding_left));
    }
    dd {
      width: calc((100% + 5 * var(--a_table_tree_level_padding_left)) * var(--a_table_mobile_dd_width));
    }
  }
}
.a_table__row_level__icon {
  display: inline-block;
  position: absolute;
  left: 0;
}
.a_table_mobile__dl__wrapper {
  .a_table__row_level__icon {
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: var(--a_table_mobile_row_level_icon_bg);
  }
}
.a_table__row_level__icon {
  transition: transform var(--a_duration_normal) var(--a_easing);
}
.a_table__row_level_open {
  .a_table__row_level__icon {
    transform: rotate(90deg);
  }
  .a_table_mobile__dl__wrapper {
    .a_table__row_level__icon {
      transform: none;
      .a_icon {
        transform: rotate(90deg);
      }
    }
  }
}
.a_table__pagination_top {
  border-bottom: var(--a_table_row_border_bottom_width) solid var(--a_table_row_border_bottom_color);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_table__parent) {
  // general
  --a_table_bg: var(--a_color_surface); // Background of the table rows and cells.
  --a_table_border_width: var(--a_border_width); // Width of the frame around the table (0 for borderType "innerBordered").
  --a_table_border_color: var(--a_border_color); // Color of the frame around the table.
  --a_table_border_radius: var(--a_border_radius_large); // Corner radius of the frame around the table.
  --a_table_font_variant_numeric: tabular-nums; // Digits of the same width, so numbers line up in columns.
  // header
  --a_table_th_bg: var(--a_color_surface_subtle); // Background of the table header.
  --a_table_th_color: var(--a_color_text_muted); // Text color of the table header.
  --a_table_th_hover_color: var(--a_color_text); // Text color of a sortable header cell on hover.
  --a_table_th_font_size: var(--a_font_size_sm); // Font size of the table header.
  --a_table_th_font_weight: var(--a_font_weight_semibold); // Font weight of the table header.
  --a_table_th_border_vertical_width: var(--a_border_width); // Width of the vertical lines between header cells in bordered tables.
  --a_table_th_border_vertical_color: var(--a_border_color); // Color of the vertical lines between header cells in bordered tables.
  --a_table_th_border_horizontal_width: var(--a_border_width); // Width of the line under a column group header in bordered tables.
  --a_table_th_border_horizontal_color: var(--a_border_color); // Color of the line under a column group header in bordered tables.
  --a_table_th_border_bottom_width: var(--a_border_width); // Width of the line under the table header.
  --a_table_th_border_bottom_color: var(--a_border_color); // Color of the line under the table header.
  --a_table_th_sorting_bg: transparent; // Background of the header cell of the sorted column.
  --a_table_th_sorting_color: var(--a_color_primary_text); // Text and icon color of the header cell of the sorted column.
  --a_table_th_sort_icon_opacity: .45; // Opacity of the sort icons of a column that is not sorted (1 on hover and focus).
  // rows
  --a_table_row_border_bottom_width: var(--a_border_width); // Width of the line between rows.
  --a_table_row_border_bottom_color: var(--a_border_color); // Color of the line between rows.
  --a_table_row_hover_bg: var(--a_color_gray_200); // Background of a hovered row or a row with focus inside.
  --a_table_row_focus_shadow: var(--a_focus_ring_inset); // Focus ring of a focused row.
  --a_table_row_striped_bg: var(--a_color_surface_subtle); // Background of every second row in a striped table (isStriped).
  --a_table_row_selected_bg: var(--a_color_primary_bg_subtle); // Background of a row selected with the checkbox (multiple actions).
  --a_table_row_preview_open_bg: var(--a_color_primary_bg_subtle); // Background of the row whose preview is open.
  --a_table_row_accent_width: 3px; // Width of the bar on the left of the row whose preview is open.
  --a_table_row_accent_color: var(--a_color_primary); // Color of the bar on the left of the row whose preview is open.
  --a_table_row_preview_was_open_bg: var(--a_color_primary_bg_subtle); // Background of the row whose preview was open last.
  --a_table_row_preview_focus_bg: var(--a_color_primary_border_subtle); // Color used for the border of selected items in the multiple actions panel.
  // cells
  --a_table_td_border_vertical_width: var(--a_border_width); // Width of the vertical lines between body cells in bordered tables.
  --a_table_td_border_vertical_color: var(--a_border_color); // Color of the vertical lines between body cells in bordered tables.
  --a_table_cell_padding_x: calc(.75rem * var(--a_density)); // Horizontal padding of a cell.
  --a_table_cell_padding_y: calc(.625rem * var(--a_density)); // Vertical padding of a cell.
  --a_table_action_sticky_shadow: var(--a_shadow_edge_left); // Shadow on the left of the sticky actions column.
  // empty table
  --a_table_empty_padding_y: var(--a_space_xl); // Top and bottom padding of the text of an empty table.
  --a_table_empty_color: var(--a_color_text_muted); // Text color of an empty table.
  // top panel
  --a_table_quick_search_width: 15.625rem; // Width of the quick search field.
  --a_table_between_actions_margin: var(--a_space_sm); // Space between the icon and the text in a header cell and between action elements.
  // preview right
  --a_table_preview_right_padding: var(--a_space_xs) var(--a_space_md); // Padding of the header and the body of the right preview.
  --a_table_preview_right_width: 18.75rem; // Width of the right preview.
  --a_table_preview_right_bg: var(--a_color_surface_raised); // Background of the right preview.
  --a_table_preview_right_border_width: 0 0 0 var(--a_border_width); // Border width of the right preview (top, right, bottom, left).
  --a_table_preview_right_border_color: var(--a_border_color); // Border color of the right preview.
  --a_table_preview_right_header_bg: var(--a_color_surface_subtle); // Background of the header of the right preview.
  --a_table_preview_right_header_font_size: 1.5rem; // Font size of the header of the right preview.
  --a_table_preview_right_shadow_size: -8px 0 24px -8px; // Offsets, blur and spread of the shadow of the right preview.
  --a_table_preview_right_shadow_color: var(--a_shadow_color); // Shadow color of the right preview.
  // preview down
  --a_table_preview_down_bg: var(--a_color_surface); // Background of the preview below a row.
  --a_table_preview_down_border_width: var(--a_border_width); // Border width of the preview below a row.
  --a_table_preview_down_border_color: var(--a_border_color_strong); // Border color of the preview below a row.
  --a_table_preview_down_padding_y: var(--a_space_lg); // Top and bottom padding of the preview below a row.
  --a_table_preview_down_padding_left: var(--a_space_lg); // Left padding of the preview below a row.
  --a_table_preview_down_padding_right: var(--a_space_lg); // Right padding of the preview below a row.
  --a_table_preview_down_border_radius: var(--a_border_radius_large); // Corner radius of the preview below a row.
  // footer
  --a_table_footer_border_top: var(--a_border_width) solid var(--a_border_color_strong); // Border above the table footer (shorthand: width, style, color).
  // mobile
  --a_table_mobile_dt_dd_border_bottom: var(--a_border_width) solid var(--a_border_color); // Border under a label/value pair in the mobile view (shorthand).
  --a_table_mobile_dt_width: .4; // Share of the row width for the label in the mobile view (0–1).
  --a_table_mobile_dd_width: .6; // Share of the row width for the value in the mobile view (0–1).
  --a_table_mobile_dt_padding_left: var(--a_space_sm); // Left padding of a label in the mobile view.
  --a_table_mobile_dd_padding_right: var(--a_space_sm); // Right padding of a value in the mobile view.
  --a_table_mobile_row_level_icon_bg: var(--a_color_gray_200); // Background of the tree level icon of a row in the mobile view.
  // multiple actions
  --a_table_multiple_border_radius: var(--a_border_radius_large); // Corner radius of the multiple actions panel and of its selected items.
  --a_table_multiple_border: var(--a_border_width) solid var(--a_border_color); // Border of the multiple actions panel (shorthand).
  --a_table_multiple_bg: var(--a_color_surface_subtle); // Background of the multiple actions panel.
  --a_table_multiple_header_text_font_size: var(--a_body_font_size); // Font size of the header text of the multiple actions panel.
  --a_table_multiple_items_selected_border: var(--a_border_width) solid var(--a_table_row_preview_focus_bg); // Border of a selected item in the multiple actions panel (shorthand).
  --a_table_multiple_items_selected_bg: var(--a_table_row_preview_was_open_bg); // Background of a selected item in the multiple actions panel.
  // sorting
  --a_table_sort_sequence_num_bg: var(--a_color_primary); // Background of the sort order number in a header cell (multi-column sorting).
  --a_table_sort_sequence_num_color: var(--a_color_primary_contrast); // Text color of the sort order number in a header cell.
  // drag and drop
  --a_table_dnd_th_bg: var(--a_color_primary_border_subtle); // Color of the drop indicator when a column is dragged onto a header cell.
  --a_table_dnd_th_width: 3.125rem; // Width of the drop indicator when a column is dragged onto a header cell.
  // tree
  --a_table_tree_level_padding_left: 1.2rem; // Indent of a nested row per tree level.
}

:where(.a_table__th__dropdown__ul) {
  // column dropdown
  --a_table_dnd_dropdown_li_bg: var(--a_color_primary_bg_subtle); // Color of the drop indicator when a column is dragged in the column dropdown.
  --a_table_draggable_li_height: 1.875rem; // Height of the drop indicator in the column dropdown.
}
`,"../../../../../../scss/components/ATableForm.scss":`@use "../utils/focus";

.a_table_form {
  width: 100%;

  .a_alert {
    --a_alert_border_radius: 0;

    margin-bottom: 0;
  }
}

.a_table_form__wrapper {
  overflow-x: auto;

  &:has(> .a_table_form__table:focus-visible) {
    position: relative;
    z-index: 3;
    box-shadow: var(--a_table_form_focus_box_shadow);
  }
}

.a_table_form__drag_preview {
  opacity: var(--a_table_form_row_dragging_opacity);

  .a_table_form__row {
    outline: 0;
  }

  .a_table_form__cell {
    opacity: 1;
  }
}

.a_table_form__table {
  outline: 0;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: var(--a_table_form_bg);
}

.a_table_form__table_list {
  .a_table_form__cell_reorder,
  .a_table_form__cell_actions {
    vertical-align: middle;
  }
}

.a_table_form__cell_list {
  .a_form {
    min-width: 0;
  }
}

.a_table_form__cell {
  padding: var(--a_table_form_cell_padding_y) var(--a_table_form_cell_padding_x);
  border-top: var(--a_border_width) solid var(--a_table_form_border_color);
  border-bottom: var(--a_border_width) solid var(--a_table_form_border_color);
  border-left: 0;
  border-right: 0;
  vertical-align: top;
  text-align: left;
  word-break: break-word;
  .a_select_toggle {
    min-width: 100%;
  }
  .a_datepicker {
    min-width: 100%;
    width: 100%;
    max-width: 100%;
  }
}

.a_table_form__row > .a_table_form__cell:first-child {
  border-left: var(--a_border_width) solid var(--a_table_form_border_color);
}

.a_table_form__row > .a_table_form__cell:last-child:not(.a_table_form__cell_actions_sticky) {
  border-right: var(--a_border_width) solid var(--a_table_form_border_color);
}

.a_table_form__cell_info {
  padding: 0;
}

.a_table_form__cell_errors {
  padding: 0;
  .a_error__list__li {
    display: flex;
    flex-wrap: wrap;
    gap: var(--a_space_sm);
    align-items: center;
  }
}

.a_table_form__cell_th {
  background-color: var(--a_table_form_head_bg);
  color: var(--a_table_form_head_color);
  font-weight: var(--a_table_form_head_font_weight);
}

.a_table_form__table:not(.a_table_form_drag_active) .a_table_form__row:hover .a_table_form__cell_td,
.a_table_form__table:not(.a_table_form_drag_active) .a_table_form__row:focus-within .a_table_form__cell_td {
  background-color: var(--a_table_form_row_hover_bg);
}

.a_table_form__table:not(.a_table_form_drag_active) .a_table_form__row_errors:hover .a_table_form__cell_td,
.a_table_form__table:not(.a_table_form_drag_active) .a_table_form__row_errors:focus-within .a_table_form__cell_td {
  background-color: var(--a_color_danger_bg_subtle);
}

.a_table_form__row_dragging:hover .a_table_form__cell_td,
.a_table_form__row_dragging:focus-within .a_table_form__cell_td {
  background-color: var(--a_table_form_row_dragging_bg);
}

.a_table_form_drag_active {
  .a_table_form__row_drag_over .a_table_form__cell_td,
  .a_table_form__row_dragging .a_table_form__cell_td {
    background-color: var(--a_table_form_row_drag_bg);
  }

  .a_table_form__row_dragging .a_table_form__cell_td {
    background-color: var(--a_table_form_row_dragging_bg);
  }
}

.a_table_form__row {
  position: relative;

  &:focus {
    outline: 0;
  }

  &:focus-visible {
    z-index: 3;
    > .a_table_form__cell {
      box-shadow:
        inset 0 var(--a_table_form_focus_width) 0 var(--a_table_form_focus_color),
        inset 0 calc(var(--a_table_form_focus_width) * -1) 0 var(--a_table_form_focus_color);
      &:first-child {
        box-shadow:
          inset 0 var(--a_table_form_focus_width) 0 var(--a_table_form_focus_color),
          inset 0 calc(var(--a_table_form_focus_width) * -1) 0 var(--a_table_form_focus_color),
          inset var(--a_table_form_focus_width) 0 0 var(--a_table_form_focus_color);
      }
      &:last-child {
        box-shadow:
          inset 0 var(--a_table_form_focus_width) 0 var(--a_table_form_focus_color),
          inset 0 calc(var(--a_table_form_focus_width) * -1) 0 var(--a_table_form_focus_color),
          inset calc(var(--a_table_form_focus_width) * -1) 0 0 var(--a_table_form_focus_color);
        &.a_table_form__cell_actions_sticky {
          box-shadow:
            inset var(--a_border_width) 0 0 var(--a_table_form_border_color),
            inset 0 var(--a_table_form_focus_width) 0 var(--a_table_form_focus_color),
            inset 0 calc(var(--a_table_form_focus_width) * -1) 0 var(--a_table_form_focus_color),
            inset calc(var(--a_table_form_focus_width) * -1) 0 0 var(--a_table_form_focus_color);
        }
      }
    }
  }
}

.a_table_form__row_edit_on_click {
  cursor: pointer;

  input:disabled,
  input[readonly],
  select:disabled,
  textarea:disabled,
  textarea[readonly],
  [aria-disabled="true"],
  [aria-readonly="true"] {
    cursor: pointer;
    pointer-events: none;
  }

  [data-column-id] {
    cursor: pointer;
  }
}

.a_table_form__row_drag_over .a_table_form__cell_td,
.a_table_form__row_dragging .a_table_form__cell_td {
  background-color: var(--a_table_form_row_drag_bg);
}

.a_table_form__row_dragging {
  outline: var(--a_table_form_row_dragging_outline);
  outline-offset: -2px;

  .a_table_form__cell_td {
    background-color: var(--a_table_form_row_dragging_bg);
    opacity: var(--a_table_form_row_dragging_opacity);
  }

  .a_table_form__reorder_handle {
    color: var(--a_color_text);
  }
}

.a_table_form__row_drag_before .a_table_form__cell_td {
  border-top: var(--a_table_form_drop_indicator_width) solid var(--a_table_form_drop_indicator_color);
}

.a_table_form__row_drag_after .a_table_form__cell_td {
  border-bottom: var(--a_table_form_drop_indicator_width) solid var(--a_table_form_drop_indicator_color);
}

.a_table_form__row_footer .a_table_form__cell {
  background-color: var(--a_table_form_footer_bg);
  font-weight: var(--a_table_form_head_font_weight);
}

.a_table_form__row_errors .a_table_form__cell_td {
  background-color: var(--a_color_danger_bg_subtle);
}

.a_table_form__cell_reorder {
  width: 3.5rem;
  min-width: 3.5rem;
  max-width: 3.5rem;
  text-align: center;
}

.a_table_form__reorder_actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--a_space_xs);

  &:focus-within .a_table_form__reorder_handle {
    display: none;
  }
}

.a_table_form__reorder_handle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--a_color_text_muted);
  cursor: grab;
  user-select: none;
  -webkit-user-drag: element;
  padding-top: .3rem;

  &:active {
    cursor: grabbing;
  }
}

.a_table_form__reorder_handle_disabled {
  cursor: not-allowed;
  -webkit-user-drag: none;
}

.a_table_form__reorder_button {
  //min-width: auto;
  &.a_btn {
    --a_btn_padding_y: 0;
    --a_btn_padding_x: 0.35rem;
  }
}

.a_table_form__empty {
  text-align: left;
}

.a_table_form__cell_actions_sticky {
  position: sticky;
  right: 0;
  z-index: 2;
  background: var(--a_table_form_bg);
  box-shadow:
    var(--a_table_form_cell_actions_edge_box_shadow),
    inset var(--a_border_width) 0 0 var(--a_table_form_border_color),
    var(--a_table_form_cell_actions_sticky_shadow);
  padding-left: 0;
  padding-right: 0;
}

.a_table_form__cell_actions_sticky.a_table_form__cell_th {
  background: var(--a_table_form_head_bg);
  color: var(--a_table_form_head_color);
}

.a_table_form__row_footer .a_table_form__cell_actions_sticky {
  background: var(--a_table_form_footer_bg);
}

.a_table_form__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--a_space_sm);
  width: 100%;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_table_form) {
  // general
  --a_table_form_bg: var(--a_color_surface); // Background of the table and of the sticky actions column.
  --a_table_form_border_color: var(--a_border_color); // Color of the cell and table borders.
  // drag and drop
  --a_table_form_drop_indicator_color: var(--a_color_primary); // Color of the line that shows where a dragged row will be dropped.
  --a_table_form_drop_indicator_width: 3px; // Thickness of the drop indicator line.
  // header
  --a_table_form_head_bg: var(--a_color_surface_subtle); // Background of the header row.
  --a_table_form_head_color: inherit; // Text color of the header row.
  --a_table_form_head_font_weight: var(--a_font_weight_semibold); // Font weight of the header and footer rows.
  // drag and drop
  --a_table_form_row_dragging_bg: var(--a_color_gray_200); // Background of the row that is being dragged.
  --a_table_form_row_dragging_opacity: .65; // Opacity of the row that is being dragged and of the drag preview.
  --a_table_form_row_dragging_outline: 2px dashed var(--a_border_color_strong); // Outline of the row that is being dragged (shorthand).
  // focus
  --a_table_form_focus_color: var(--a_color_focus); // Color of the focus frame of a focused row.
  --a_table_form_focus_width: calc(var(--a_focus_width_inside) + var(--a_focus_width_outside)); // Thickness of the focus frame of a focused row.
  --a_table_form_focus_box_shadow: var(--a_focus_ring_inset); // Focus ring around the table when the table itself has focus.
  // rows
  --a_table_form_row_hover_bg: var(--a_color_gray_100); // Background of a hovered row.
  --a_table_form_row_drag_bg: var(--a_color_primary_bg_subtle); // Background of the row under the dragged row and of the dragged row while dragging.
  // footer
  --a_table_form_footer_bg: var(--a_color_surface_subtle); // Background of the footer row.
  // cells
  --a_table_form_cell_padding_y: calc(.75rem * var(--a_density)); // Vertical padding of a cell.
  --a_table_form_cell_padding_x: calc(.75rem * var(--a_density)); // Horizontal padding of a cell.
  --a_table_form_cell_actions_edge_box_shadow: inset calc(var(--a_border_width) * -1) 0 0 var(--a_table_form_border_color); // Line on the right edge of the sticky actions column.
  --a_table_form_cell_actions_sticky_shadow: var(--a_shadow_edge_left); // Shadow on the left of the sticky actions column that separates it from the scrolled cells.
}
`,"../../../../../../scss/components/ATabs.scss":`@use "../utils/focus";

.a_tabs {
  display: var(--a_tabs_display);
  padding: var(--a_tabs_padding);
}
.a_tabs_small {
  --a_tabs_font_size: var(--a_font_size_sm);
  --a_tabs_link_padding_x: calc(.75rem * var(--a_density));
  --a_tabs_link_padding_y: calc(.375rem * var(--a_density));
}
.a_tabs_medium {
  --a_tabs_font_size: var(--a_font_size_lg);
  --a_tabs_link_padding_x: calc(1.25rem * var(--a_density));
  --a_tabs_link_padding_y: calc(.625rem * var(--a_density));
}
.a_tabs_large {
  --a_tabs_font_size: 1.5rem;
  --a_tabs_link_padding_x: calc(1.5rem * var(--a_density));
  --a_tabs_link_padding_y: calc(.75rem * var(--a_density));
}
.a_tabs__box {
  align-items: stretch;
  display: flex;
  font-size: var(--a_tabs_font_size);
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}

.a_tabs__list {
  list-style: none;
  align-items: center;
  border-bottom-color: var(--a_tabs_border_color);
  border-bottom-style: solid;
  border-bottom-width: var(--a_tabs_border_width);
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
}
.a_tabs__list__item {
  display: block;
}
.a_tabs__list__link {
  align-items: center;
  border-width: var(--a_tabs_link_border_width);
  border-color: var(--a_tabs_link_border_color);
  border-style: solid;
  color: var(--a_tabs_link_color);
  font-weight: var(--a_tabs_link_font_weight);
  display: flex;
  justify-content: center;
  margin-bottom: calc(-1 * var(--a_tabs_border_width));
  padding: var(--a_tabs_link_padding_y) var(--a_tabs_link_padding_x);
  vertical-align: top;
  background-color: var(--a_tabs_link_bg);
  position: relative;
  cursor: var(--a_tabs_link_cursor);
  border-radius: var(--a_tabs_border_radius) var(--a_tabs_border_radius) 0 0;
  transition: var(--a_transition_colors);

  // active indicator
  &::after {
    content: "";
    position: absolute;
    right: var(--a_tabs_indicator_inset);
    bottom: calc(-1 * var(--a_tabs_link_border_width));
    left: var(--a_tabs_indicator_inset);
    height: var(--a_tabs_indicator_width);
    border-radius: var(--a_tabs_indicator_width) var(--a_tabs_indicator_width) 0 0;
    background-color: var(--a_tabs_indicator_color);
    transition: background-color var(--a_duration_fast) var(--a_easing);
    pointer-events: none;
  }

  &:hover {
    --a_tabs_link_color: var(--a_tabs_link_hover_color);
    --a_tabs_link_bg: var(--a_tabs_link_hover_bg);
    --a_tabs_indicator_color: var(--a_tabs_indicator_hover_color);
  }

  @include focus.focus-visible($inset: true);
}
.a_tabs__list__link_active {
  --a_tabs_link_color: var(--a_tabs_link_color_active);
  --a_tabs_link_font_weight: var(--a_tabs_link_active_font_weight);
  --a_tabs_indicator_color: var(--a_tabs_indicator_active_color);
  z-index: 1;
  &:hover {
    --a_tabs_link_color: var(--a_tabs_link_color_active);
    --a_tabs_indicator_color: var(--a_tabs_indicator_active_color);
  }
}

// Boxed: the active tab is a "card" connected to the content
.a_tabs_boxed {
  --a_tabs_indicator_active_color: transparent;
  --a_tabs_indicator_hover_color: transparent;
  .a_tabs__list__link:hover {
    --a_tabs_link_bg: var(--a_tabs_boxed_link_bg_hover);
  }
  .a_tabs__list__link_active {
    --a_tabs_link_border_color: var(--a_tabs_boxed_link_active_border_color);
    --a_tabs_link_bg: var(--a_tabs_boxed_link_active_bg);
    --a_tabs_link_color: var(--a_tabs_boxed_link_active_color);
    &:hover {
      --a_tabs_link_bg: var(--a_tabs_boxed_link_active_bg);
    }
  }
}

.a_tabs {
  & .a_tabs__list__link_disabled,
  &.a_tabs_boxed .a_tabs__list__link_disabled {
    --a_tabs_link_cursor: var(--a_tabs_link_disabled_cursor);
    --a_tabs_link_border_color: var(--a_tabs_link_disabled_border_color);
    --a_tabs_link_color: var(--a_tabs_link_disabled_color);
    --a_tabs_link_bg: var(--a_tabs_link_disabled_bg);
    --a_tabs_indicator_color: transparent;
    box-shadow: none;
  }
}
.a_tabs__contents {
  border: var(--a_tabs_border_width) solid var(--a_tabs_border_color);
  border-radius: var(--a_tabs_contents_border_radius);
  margin-top: calc(-1 * var(--a_tabs_border_width));
}
.a_tabs__content {
  padding: var(--a_tabs_content_padding);
  display: none;
}
.a_tabs__content_show {
  display: block;
}
.a_tabs_vertical {
  --a_tabs_display: flex;
  --a_tabs_link_border_color: transparent;
  --a_tabs_link_disabled_border_color: transparent;
  .a_tabs__list {
    border-bottom: 0;
    border-right: var(--a_tabs_border_width) solid var(--a_tabs_border_color);
  }
  .a_tabs__box {
    overflow: visible;
    white-space: normal;
    flex: 1;
  }
  .a_tabs__list {
    flex-direction: column;
    align-items: stretch;
  }
  .a_tabs__list__item {
    width: 100%;
  }
  .a_tabs__list__link {
    justify-content: flex-start;
    border-radius: var(--a_tabs_border_radius) 0 0 var(--a_tabs_border_radius);
    margin-bottom: 0;
    margin-right: calc(-1 * var(--a_tabs_border_width));
    &::after {
      top: var(--a_tabs_indicator_inset);
      right: calc(-1 * var(--a_tabs_link_border_width));
      bottom: var(--a_tabs_indicator_inset);
      left: auto;
      width: var(--a_tabs_indicator_width);
      height: auto;
      border-radius: var(--a_tabs_indicator_width) 0 0 var(--a_tabs_indicator_width);
    }
  }
  .a_tabs__contents {
    flex: 2;
    margin-top: 0;
    margin-left: calc(-1 * var(--a_tabs_border_width));
  }
  &.a_tabs_boxed {
    .a_tabs__list__link_active {
      --a_tabs_link_border_color: var(--a_tabs_border_color) var(--a_tabs_boxed_link_active_bg) var(--a_tabs_border_color) var(--a_tabs_border_color);
    }
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_tabs) {
  // general
  --a_tabs_display: block; // Display of the root element. Vertical tabs use flex.
  --a_tabs_padding: var(--a_space_sm); // Padding of the root element.
  --a_tabs_font_size: var(--a_body_font_size); // Font size of the tab list. Changed by the size classes (small, medium, large).
  --a_tabs_border_width: var(--a_border_width); // Width of the line under the tab list and of the content border.
  --a_tabs_border_color: var(--a_border_color); // Color of the line under the tab list and of the content border.
  --a_tabs_border_radius: var(--a_border_radius); // Top corner radius of a tab (left corners in vertical tabs).
  --a_tabs_contents_border_radius: 0; // Corner radius of the content box.
  --a_tabs_content_padding: var(--a_space_md); // Padding of the content of a tab.
  // tab
  --a_tabs_link_border_width: var(--a_border_width); // Border width of a tab.
  --a_tabs_link_border_color: transparent; // Border color of a tab.
  --a_tabs_link_color: var(--a_color_text_muted); // Text color of an inactive tab.
  --a_tabs_link_font_weight: var(--a_font_weight_medium); // Font weight of an inactive tab.
  --a_tabs_link_bg: transparent; // Background of an inactive tab.
  --a_tabs_link_padding_x: calc(1rem * var(--a_density)); // Horizontal padding of a tab. Changed by the size classes.
  --a_tabs_link_padding_y: calc(.5rem * var(--a_density)); // Vertical padding of a tab. Changed by the size classes.
  --a_tabs_link_cursor: pointer; // Cursor over a tab.
  --a_tabs_link_color_active: var(--a_color_primary_text_emphasis); // Text color of the active tab.
  --a_tabs_link_active_font_weight: var(--a_font_weight_semibold); // Font weight of the active tab.
  // indicator (underline of the active tab)
  --a_tabs_indicator_width: 3px; // Thickness of the indicator line.
  --a_tabs_indicator_inset: 0; // Distance of the indicator from the tab edges.
  --a_tabs_indicator_color: transparent; // Indicator color of an inactive tab.
  --a_tabs_indicator_hover_color: var(--a_border_color_strong); // Indicator color of a hovered tab.
  --a_tabs_indicator_active_color: var(--a_color_primary); // Indicator color of the active tab.
  // hover
  --a_tabs_link_hover_color: var(--a_color_text); // Text color of a hovered tab.
  --a_tabs_link_hover_bg: transparent; // Background of a hovered tab.
  // boxed
  --a_tabs_boxed_link_active_border_color: var(--a_tabs_border_color) var(--a_tabs_border_color) var(--a_tabs_boxed_link_active_bg) var(--a_tabs_border_color); // Border color of the active tab in boxed tabs (top, right, bottom, left). The bottom side has the tab background, so the tab joins the content.
  --a_tabs_boxed_link_active_bg: var(--a_color_surface); // Background of the active tab in boxed tabs.
  --a_tabs_boxed_link_active_color: var(--a_color_primary_text_emphasis); // Text color of the active tab in boxed tabs.
  --a_tabs_boxed_link_bg_hover: var(--a_color_surface_subtle); // Background of a hovered tab in boxed tabs.
  // disabled
  --a_tabs_link_disabled_cursor: not-allowed; // Cursor over a disabled tab.
  --a_tabs_link_disabled_border_color: transparent; // Border color of a disabled tab.
  --a_tabs_link_disabled_color: var(--a_color_text_muted); // Text color of a disabled tab.
  --a_tabs_link_disabled_bg: transparent; // Background of a disabled tab.
}
`,"../../../../../../scss/components/ATree.scss":`@use "../utils/focus";

.a_tree,
.a_tree__group {
  margin: 0;
  padding: 0;
  list-style: none;
}

.a_tree__item {
  outline: 0;
  // The row shows the focus of the item
  &:focus-visible > .a_tree__node {
    @include focus.focus-ring(true);
  }
}

.a_tree__node {
  display: flex;
  align-items: center;
  gap: var(--a_tree_gap);
  min-height: var(--a_tree_node_height);
  padding-block: var(--a_tree_node_padding_y);
  padding-inline: calc(var(--a_tree_indent) * var(--a_tree_level, 0) + var(--a_tree_node_padding_x)) var(--a_tree_node_padding_x);
  border-radius: var(--a_tree_node_border_radius);
  color: var(--a_tree_color);
  cursor: pointer;
  user-select: none;
  &:hover {
    background: var(--a_tree_hover_bg);
  }
}
.a_tree__item_selected > .a_tree__node {
  background: var(--a_tree_selected_bg);
  color: var(--a_tree_selected_color);
  font-weight: var(--a_tree_selected_font_weight);
}
.a_tree__item_disabled > .a_tree__node {
  color: var(--a_tree_disabled_color);
  cursor: not-allowed;
}

.a_tree__toggle {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: var(--a_tree_toggle_size);
  height: var(--a_tree_toggle_size);
  border-radius: var(--a_border_radius_small);
  color: var(--a_tree_toggle_color);
  &:not(.a_tree__toggle_empty):hover {
    background: var(--a_tree_toggle_hover_bg);
  }
}
.a_tree__toggle_icon {
  display: inline-flex;
  width: .75rem;
  height: .75rem;
  transition: transform var(--a_duration_fast) var(--a_easing);
  svg {
    width: 100%;
    height: 100%;
  }
}
.a_tree__toggle_expanded .a_tree__toggle_icon {
  transform: rotate(90deg);
}
[dir="rtl"] .a_tree__toggle:not(.a_tree__toggle_expanded) .a_tree__toggle_icon {
  transform: rotate(180deg);
}
.a_tree__spinner {
  width: .75rem;
  height: .75rem;
}

// Checkbox: the state comes from aria-checked of the item
.a_tree__checkbox {
  position: relative;
  flex: 0 0 auto;
  width: var(--a_tree_checkbox_size);
  height: var(--a_tree_checkbox_size);
  border: var(--a_border_width) solid var(--a_tree_checkbox_border_color);
  border-radius: var(--a_border_radius_small);
  background: var(--a_tree_checkbox_bg);
}
.a_tree__checkbox_true,
.a_tree__checkbox_mixed {
  border-color: var(--a_tree_checkbox_checked_bg);
  background: var(--a_tree_checkbox_checked_bg);
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-color: var(--a_tree_checkbox_checked_color);
    border-style: solid;
  }
}
.a_tree__checkbox_true::after {
  width: 35%;
  height: 65%;
  border-width: 0 2px 2px 0;
  transform: translateY(-10%) rotate(45deg);
}
.a_tree__checkbox_mixed::after {
  width: 60%;
  height: 0;
  border-width: 2px 0 0;
}
.a_tree__item_disabled > .a_tree__node .a_tree__checkbox {
  opacity: var(--a_tree_disabled_opacity);
}

.a_tree__label {
  overflow: hidden;
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.a_tree__mark {
  padding: 0;
  border-radius: 2px;
  background: var(--a_tree_mark_bg);
  color: inherit;
}

// JSON
.a_tree_json .a_tree__label {
  font-family: var(--a_font_monospace);
  font-size: var(--a_tree_json_font_size);
}
.a_tree__json_key {
  color: var(--a_tree_json_key_color);
}
.a_tree__json_colon {
  color: var(--a_tree_json_punctuation_color);
}
.a_tree__json_value_string {
  color: var(--a_tree_json_string_color);
}
.a_tree__json_value_number {
  color: var(--a_tree_json_number_color);
}
.a_tree__json_value_boolean,
.a_tree__json_value_null {
  color: var(--a_tree_json_boolean_color);
}
.a_tree__json_value_object,
.a_tree__json_value_array {
  color: var(--a_tree_json_punctuation_color);
}

.a_tree__empty {
  padding: var(--a_tree_node_padding_x);
  color: var(--a_color_text_muted);
}

@media (prefers-reduced-motion: reduce) {
  .a_tree__toggle_icon {
    transition: none;
  }
}

@media (forced-colors: active) {
  .a_tree__item_selected > .a_tree__node {
    outline: 2px solid Highlight;
    outline-offset: -2px;
  }
  .a_tree__checkbox_true,
  .a_tree__checkbox_mixed {
    background: Highlight;
  }
}

:where(.a_tree_wrapper) {
  // node
  --a_tree_indent: 1.25rem; // Indent of every level.
  --a_tree_gap: .25rem; // Space between the toggle, the checkbox and the label.
  --a_tree_node_height: calc(2rem * var(--a_density)); // Minimal height of a node.
  --a_tree_node_padding_x: .25rem; // Horizontal padding of a node.
  --a_tree_node_padding_y: .125rem; // Vertical padding of a node.
  --a_tree_node_border_radius: var(--a_border_radius_small); // Corner radius of a node.
  --a_tree_color: var(--a_color_text); // Text color of a node.
  --a_tree_hover_bg: var(--a_color_gray_100); // Background of a node on hover.
  --a_tree_selected_bg: var(--a_color_primary_bg_subtle); // Background of the selected node.
  --a_tree_selected_color: var(--a_color_primary_text_emphasis); // Text color of the selected node.
  --a_tree_selected_font_weight: var(--a_font_weight_semibold); // Font weight of the selected node.
  --a_tree_disabled_color: var(--a_color_text_muted); // Text color of a disabled node.
  --a_tree_disabled_opacity: .6; // Opacity of the checkbox of a disabled node.
  --a_tree_mark_bg: var(--a_color_warning_bg_subtle); // Background of the found text.
  // toggle
  --a_tree_toggle_size: 1.5rem; // Size of the toggle button.
  --a_tree_toggle_color: var(--a_color_text_muted); // Color of the arrow of the toggle.
  --a_tree_toggle_hover_bg: var(--a_color_gray_200); // Background of the toggle on hover.
  // checkbox
  --a_tree_checkbox_size: 1rem; // Size of the checkbox.
  --a_tree_checkbox_bg: var(--a_color_surface); // Background of an unchecked checkbox.
  --a_tree_checkbox_border_color: var(--a_border_color_strong); // Border color of an unchecked checkbox (contrast at least 3:1).
  --a_tree_checkbox_checked_bg: var(--a_color_primary); // Background of a checked checkbox.
  --a_tree_checkbox_checked_color: var(--a_color_primary_contrast); // Color of the check mark.
  // json
  --a_tree_json_font_size: var(--a_font_size_sm); // Font size in the json mode.
  --a_tree_json_key_color: var(--a_color_secondary_text); // Color of the keys in the json mode.
  --a_tree_json_string_color: var(--a_color_success_text); // Color of strings in the json mode.
  --a_tree_json_number_color: var(--a_color_info_text); // Color of numbers in the json mode.
  --a_tree_json_boolean_color: var(--a_color_tertiary_text); // Color of booleans and null in the json mode.
  --a_tree_json_punctuation_color: var(--a_color_text_muted); // Color of the colon and of the size of objects and arrays.
}
`,"../../../../../../scss/components/AVerticalScroll.scss":`@use "../utils/focus";

.a_vertical_scroll {
  position: relative;
  padding-top: var(--a_vertical_scroll_wrapper_height);
  padding-bottom: var(--a_vertical_scroll_wrapper_height);
}
.a_scroll_content {
  overflow-y: auto;
  height: 100%;
}

.a_vertical_scroll_scrollable {
  .a_scroll_content {
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .a_vertical_scroll__btn {
    display: inline-block;
  }
}
.a_vertical_scroll__btn__wrapper {
  position: absolute;
  left: 0;
  right: 0;
  background-color: var(--a_vertical_scroll_wrapper_bg);
  height: var(--a_vertical_scroll_wrapper_height);
  text-align: center;
  z-index: 2;
}

.a_vertical_scroll__btn__wrapper_up {
  top: 0;
}
.a_vertical_scroll__btn__wrapper_down {
  bottom: 0;
}
.a_vertical_scroll__btn {
  display: none;
  padding: 0;
  @include focus.focus-visible($inset: true);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_vertical_scroll) {
  --a_vertical_scroll_wrapper_bg: var(--a_color_surface); // Background of the areas with the scroll up and scroll down buttons.
  --a_vertical_scroll_wrapper_height: 1.25rem; // Height of the areas with the scroll buttons. The content gets the same padding at the top and bottom.
}
`,"../../../../../../scss/components/AWizard.scss":`@use "../utils/focus";

.a_wizard {
  border: var(--a_wizard_border_width) solid var(--a_wizard_border_color);
  position: relative;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  @include focus.focus-visible;
}

.a_wizard_basic {
  > .a_wizard__steps {
    box-shadow: var(--a_shadow_sm);
    .a_wizard__step__link {
      position: relative;
      height: 100%;
      min-height: 100%;
      margin-right: 0.3125rem;
      &::after {
        content: "";
        position: absolute;
        pointer-events: none;
        height: 0.125rem;
        left: 0;
        bottom: -0.0625rem;
        transition: all var(--a_duration_slow) var(--a_easing) var(--a_duration_fast);
        width: 100%;
      }
      &.default {
        color: var(--a_wizard_step_default_secondary_color);
        cursor: not-allowed;
        &::after {
          background-color: var(--a_wizard_step_default_secondary_color);
        }
      }
      &.done {
        color: var(--a_wizard_step_done_primary_color);
        cursor: pointer;
        &::after {
          background: var(--a_wizard_step_done_primary_color);
        }
      }
      &.active {
        color: var(--a_wizard_step_active_text_color);
        cursor: pointer;
        &::after {
          background: var(--a_wizard_step_active_primary_color);
        }
      }

      &.disabled {
        color: var(--a_wizard_step_disabled_primary_color) !important;

        &::after {
          background: var(--a_wizard_step_disabled_primary_color);
        }
      }

      &.error {
        color: var(--a_wizard_step_error_text_color) !important;

        &::after {
          background: var(--a_wizard_step_error_primary_color) !important;
        }
      }

      &.warning {
        color: var(--a_wizard_step_warning_text_color) !important;

        &::after {
          background: var(--a_wizard_step_warning_primary_color) !important;
        }
      }
    }
  }
}
.a_wizard_arrows {
  .a_wizard__step {
    margin-top: .5rem;
  }
  > .a_wizard__steps {
    margin-left: 3.75rem;
    .a_wizard__step {
      position: relative;
    }

    .a_wizard__step__divider {
      position: absolute;
      display: none;
      left: -4.25rem;
      top: -0.1875rem;
      width: calc(100% + 2.625rem);
      height: calc(100% + 0.375rem);
      clip-path: polygon(0 0, calc(100% - 2.0625rem) 0, 100% 50%, calc(100% - 2.0625rem) 100%, 0 100%, 2.0625rem 50%);
      z-index: 3;
      background-color: var(--a_wizard_step_focus_shadow);
    }
    .a_wizard__step__link {
      position: relative;
      height: 100%;
      padding: 0.625rem 3.125rem 0.625rem 1.875rem;
      margin-right: 1.875rem;
      margin-left: -3.75rem;
      clip-path: polygon(0 0, calc(100% - 1.875rem) 0, 100% 50%, calc(100% - 1.875rem) 100%, 0 100%, 1.875rem 50%);
      z-index: 2;
      &:focus-visible {
        box-shadow: none;
        z-index: 4;
        & + .a_wizard__step__divider {
          display: block;
        }
        &:after {
          width: 100%;
        }
      }

      &:after {
        content: "";
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        background-color: transparent;
        z-index: -1;
        width: calc(100% - 0.125rem);
        height: 100%;
        clip-path: polygon(0 0, calc(100% - 1.875rem) 0, 100% 50%, calc(100% - 1.875rem) 100%, 0 100%, 1.875rem 50%);
      }

      &.default {
        color: var(--a_wizard_step_default_secondary_color);
        background-color: var(--a_wizard_step_default_secondary_color);
        cursor: not-allowed;

        &:after {
          background-color: var(--a_wizard_step_default_primary_color);
        }
      }

      &.active {
        color: var(--a_wizard_step_active_secondary_color) !important;
        border-color: var(--a_wizard_step_active_primary_color);
        background-color: var(--a_wizard_step_active_secondary_color);
        cursor: pointer;

        &:after {
          background-color: var(--a_wizard_step_active_primary_color);
        }
      }

      &.done {
        color: var(--a_wizard_step_done_secondary_color);
        border-color: var(--a_wizard_step_done_primary_color);
        background-color: var(--a_wizard_step_done_secondary_color);
        cursor: pointer;

        &:after {
          background-color: var(--a_wizard_step_done_primary_color);
        }
      }

      &.disabled {
        color: var(--a_wizard_step_disabled_secondary_color);
        border-color: var(--a_wizard_step_disabled_primary_color);
        background-color: var(--a_wizard_step_disabled_secondary_color);

        &:after {
          background-color: var(--a_wizard_step_disabled_primary_color);
        }
      }

      &.error {
        color: var(--a_wizard_step_error_secondary_color);
        border-color: var(--a_wizard_step_error_primary_color);
        background-color: var(--a_wizard_step_error_secondary_color);

        &:after {
          background-color: var(--a_wizard_step_error_primary_color);
        }
      }

      &.warning {
        color: var(--a_wizard_step_warning_secondary_color);
        border-color: var(--a_wizard_step_warning_primary_color);
        background-color: var(--a_wizard_step_warning_secondary_color);

        &:after {
          background-color: var(--a_wizard_step_warning_primary_color);
        }
      }
    }
  }
}
.a_wizard_line {
  .a_wizard__steps {
    position: relative;
    margin-bottom: 0.625rem;
  }
  .a_wizard__step {
    text-align: center;
    &:before {
      content: " ";
      position: absolute;
      left: 0;
      width: 100%;
      border-radius: var(--a_border_radius_large);
      z-index: 0;
      border: 3px dashed var(--a_wizard_border_color);
      margin-top: 1.5625rem;
    }
  }
  .a_wizard__step__link {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    &:before {
      content: " ";
      display: none;
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 1;
      border: 3px solid var(--a_wizard_step_active_primary_color);
      margin-top: 1.0625rem;
    }

    & > .a_wizard__step__number {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: .5rem;
      transition: all var(--a_duration_slow) var(--a_easing);
      height: 2.5rem;
      min-width: 2.5rem;
      background: var(--a_wizard_border_color);
      border-radius: var(--a_wizard_border_radius);
      padding: 0 0.75rem;
      z-index: 1;
    }

    &.default {
      color: var(--a_wizard_line_step_default_text_color);
      cursor: not-allowed;

      & > .a_wizard__step__number {
        color: var(--a_wizard_line_step_default_number_color);
        background-color: var(--a_wizard_line_step_default_number_bg);
        border: var(--a_wizard_line_step_default_number_border_width) var(--a_wizard_line_step_default_number_border_style) var(--a_wizard_line_step_default_number_border_color);
      }
    }

    &.active {
      color: var(--a_wizard_line_step_active_text_color) !important;
      cursor: pointer;
      &:before {
        display: block;
      }

      & > .a_wizard__step__number {
        color: var(--a_wizard_line_step_active_number_color) !important;
        background-color: var(--a_wizard_line_step_active_number_bg) !important;
        border: var(--a_wizard_line_step_active_number_border_width) var(--a_wizard_line_step_active_number_border_style) var(--a_wizard_line_step_active_number_border_color) !important;
        box-shadow: var(--a_wizard_line_step_active_number_box_shadow);
      }
    }

    &.done {
      color: var(--a_wizard_line_step_done_text_color);
      cursor: pointer;

      & > .a_wizard__step__number {
        color: var(--a_wizard_line_step_done_number_color) !important;
        background-color: var(--a_wizard_line_step_done_number_bg) !important;
        border: var(--a_wizard_line_step_done_number_border_width) var(--a_wizard_line_step_done_number_border_style) var(--a_wizard_line_step_done_number_border_color) !important;
      }
    }

    &.disabled {
      color: var(--a_wizard_line_step_disabled_text_color);

      & > .a_wizard__step__number {
        color: var(--a_wizard_line_step_disabled_number_color);
        background-color: var(--a_wizard_line_step_disabled_number_bg);
        border: var(--a_wizard_line_step_disabled_number_border_width) var(--a_wizard_line_step_disabled_number_border_style) var(--a_wizard_line_step_disabled_number_border_color);
      }
    }

    &.error {
      color: var(--a_wizard_line_step_error_text_color) !important;

      & > .a_wizard__step__number {
        color: var(--a_wizard_line_step_error_number_color) !important;
        background-color: var(--a_wizard_line_step_error_number_bg) !important;
        border: var(--a_wizard_line_step_error_number_border_width) var(--a_wizard_line_step_error_number_border_style) var(--a_wizard_line_step_error_number_border_color) !important;
      }
    }

    &.warning {
      color: var(--a_wizard_line_step_warning_text_color) !important;

      & > .a_wizard__step__number {
        color: var(--a_wizard_line_step_warning_number_color) !important;
        background-color: var(--a_wizard_line_step_warning_number_bg) !important;
        border: var(--a_wizard_line_step_warning_number_border_width) var(--a_wizard_line_step_warning_number_border_style) var(--a_wizard_line_step_warning_number_border_color) !important;
      }
    }
    &.before_active {
      &:before {
        display: block;
      }
    }
  }
  .a_wizard__step__number {
    position: relative;
  }
}
.a_wizard_line_square,
.a_wizard_line_square_bordered {
  --a_wizard_border_radius: var(--a_border_radius_large);
}
.a_wizard_line_circle,
.a_wizard_line_circle_bordered {
  --a_wizard_border_radius: var(--a_border_radius_pill);
}
.a_wizard_line_square_bordered,
.a_wizard_line_circle_bordered{
  --a_wizard_line_step_active_number_additional_border_width: 2px;
  --a_wizard_line_step_active_number_additional_border_style: solid;
  --a_wizard_line_step_active_number_additional_border_color: var(--a_wizard_step_active_primary_color);
  --a_wizard_line_step_active_number_additional_border_space: 0.3125rem;
  --a_wizard_line_step_active_number_box_shadow: none;

  .a_wizard__step__link.active > .a_wizard__step__number{
    &:before {
      content: "";
      border-radius: var(--a_wizard_border_radius);
      border-width: var(--a_wizard_line_step_active_number_additional_border_width);
      border-style: var(--a_wizard_line_step_active_number_additional_border_style);
      border-color: var(--a_wizard_line_step_active_number_additional_border_color);
      pointer-events: none;
      position: absolute;
      top: calc(-1 * var(--a_wizard_line_step_active_number_additional_border_space));
      right: calc(-1 * var(--a_wizard_line_step_active_number_additional_border_space));
      bottom: calc(-1 * var(--a_wizard_line_step_active_number_additional_border_space));
      left: calc(-1 * var(--a_wizard_line_step_active_number_additional_border_space));
      z-index: 1;
    }
  }
}

.a_wizard_round {
  .a_wizard__step {
    margin-top: .5rem;
  }
  .a_wizard__step__link {
    position: relative;
    height: 100%;
    min-height: 100%;
    border-radius: var(--a_border_radius_pill);
    margin-right: 0.25rem;
    transition: all var(--a_duration_slow) var(--a_easing);

    &.default {
      background-color: var(--a_wizard_step_default_primary_color);
      color: var(--a_wizard_step_default_secondary_color);
      cursor: not-allowed;
    }

    &.active {
      background-color: var(--a_wizard_step_active_primary_color);
      color: var(--a_wizard_step_active_secondary_color) !important;
      box-shadow: var(--a_shadow_md);
      cursor: pointer;
    }

    &.done {
      background-color: var(--a_wizard_step_done_primary_color);
      color: var(--a_wizard_step_done_secondary_color);
      cursor: pointer;
    }

    &.disabled {
      background-color: var(--a_wizard_step_disabled_primary_color);
      color: var(--a_wizard_step_disabled_secondary_color) !important;
    }

    &.error {
      background-color: var(--a_wizard_step_error_primary_color);
      color: var(--a_wizard_step_error_secondary_color) !important;
    }

    &.warning {
      background-color: var(--a_wizard_step_warning_primary_color);
      color: var(--a_wizard_step_warning_secondary_color) !important;
    }

  }
}

.a_wizard__steps {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.a_wizard__step__link {
  display: block;
  padding: calc(.5rem * var(--a_density)) calc(1rem * var(--a_density));
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
  @include focus.focus-visible;
  &:focus-visible {
    box-shadow: var(--a_wizard_step_focus_box_shadow);
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.disabled,
  &.default {
    cursor: not-allowed;
    --a_wizard_step_focus_box_shadow: none;
  }
  &.hidden {
    display: none;
    visibility: hidden;
  }
  &.active {
    font-weight: var(--a_wizard_step_active_font_weight);
  }
}
.a_wizard__step__number {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  pointer-events: none;
  height: 100%;
  padding-left: .5rem;
  padding-right: .5rem;
  border-radius: var(--a_border_radius_pill);
  text-align: center;
  font-size: 2em;
  font-weight: 800;
  clear: both;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
}
.a_wizard__step__number__icon {
  width: 1.5rem;
  height: auto;
}
.a_wizard__step__text__icon {
  margin-left: .5rem;
}
.a_wizard__tab_content {
  position: relative;
  overflow: hidden;
}
.a_wizard__tab_pane {
  padding: calc(.8rem * var(--a_density));
}

.a_wizard__toolbar {
  padding: calc(.8rem * var(--a_density));
  text-align: right;
  > button {
    margin-left: .2rem;
    margin-right: .2rem;
  }
}
.a_wizard_justified {
  .a_wizard__step {
    flex: 1 1 auto;
  }
}

.a_wizard_mobile {
  .a_wizard__step__link {
    display: flex;
    align-items: center;
  }
  &.a_wizard_arrows > .a_wizard__steps {
    .a_wizard__step__divider {
      width: calc(100% + 4.5rem);
    }
    .a_wizard__step__link {
      overflow: hidden;
      margin-right: unset;
      text-align: left !important;
      &:after {
        width: 100%;
      }
      &.default {
        border-bottom: var(--a_border_width) solid var(--a_wizard_step_default_primary_color);
      }
      &.active {
        border-bottom: var(--a_border_width) solid var(--a_wizard_step_active_secondary_color);
      }
      &.done {
        border-bottom: var(--a_border_width) solid var(--a_wizard_step_done_secondary_color);
      }
      &.disabled {
        border-bottom: var(--a_border_width) solid var(--a_wizard_step_disabled_secondary_color);
      }
      &.error {
        border-bottom: var(--a_border_width) solid var(--a_wizard_step_error_secondary_color);
      }
      &.warning {
        border-bottom: var(--a_border_width) solid var(--a_wizard_step_warning_secondary_color);
      }
    }
  }
  &.a_wizard_line {
    .a_wizard__steps {
      &:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        border-radius: var(--a_border_radius_large);
        z-index: 0;
        border: 3px dashed var(--a_wizard_border_color);
        margin-left: 2.0625rem;
      }
    }
    .a_wizard__step {
      &:before {
        content: none;
      }
    }
    .a_wizard__step__link {
      flex-direction: row;
      align-items: center;
      &:before {
        margin-top: 0;
        top: 0;
        width: 0;
        height: 100%;
        margin-left: 2.0625rem;
      }
      & > .a_wizard__step__number {
        margin: 0 .5rem 0 0;
      }
    }
  }
  &.a_wizard_round {
    .a_wizard__step__link {
      margin-right: unset;
      text-align: left !important;
    }
  }
  .a_wizard__steps {
    flex-direction: column !important;
    flex: 1 auto;
  }
  &.a_wizard_show_only_active_step_mobile {
    .a_wizard__step:not(.a_wizard__step_active) {
      display: none;
    }
    &.a_wizard_line {
      .a_wizard__steps {
        &:before {
          display: none;
        }
      }
      .a_wizard__step__link:before {
        display: none;
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_wizard) {
  // general
  --a_wizard_border_color: var(--a_border_color); // Border color of the wizard. In the line variant also the color of the dashed line and of the step number background.
  --a_wizard_border_width: var(--a_border_width); // Border width of the wizard.
  --a_wizard_border_radius: 0; // Corner radius of the step number in the line variant. Changed by the square and circle variants.
  // step colors (basic, arrows, round)
  --a_wizard_step_default_primary_color: var(--a_color_gray_100); // Main color of an upcoming step: fill in the arrows and round variants.
  --a_wizard_step_default_secondary_color: var(--a_color_text_muted); // Second color of an upcoming step: text in the basic, arrows and round variants.
  --a_wizard_step_active_primary_color: var(--a_color_primary); // Main color of the active step: fill in the arrows and round variants, marker in the basic variant.
  --a_wizard_step_active_text_color: var(--a_color_primary_text); // Text color of the active step in the basic and line variants.
  --a_wizard_step_active_secondary_color: var(--a_color_primary_contrast); // Second color of the active step: text on the fill in the arrows and round variants.
  --a_wizard_step_active_font_weight: var(--a_font_weight_bold); // Font weight of the active step.
  --a_wizard_step_done_primary_color: var(--a_color_primary_text_emphasis); // Main color of a completed step: fill in the arrows and round variants, text and marker in the basic variant.
  --a_wizard_step_done_secondary_color: var(--a_color_primary_bg_subtle); // Second color of a completed step: text on the fill in the arrows and round variants.
  --a_wizard_step_disabled_primary_color: var(--a_color_gray_500); // Main color of a disabled step: fill in the arrows and round variants, text and marker in the basic variant.
  --a_wizard_step_disabled_secondary_color: var(--a_color_gray_100); // Second color of a disabled step: text on the fill in the arrows and round variants.
  --a_wizard_step_error_primary_color: var(--a_color_danger); // Main color of a step with an error: fill in the arrows and round variants, marker in the basic variant.
  --a_wizard_step_error_text_color: var(--a_color_danger_text); // Text color of a step with an error in the basic and line variants.
  --a_wizard_step_error_secondary_color: var(--a_color_danger_contrast); // Second color of a step with an error: text on the fill in the arrows and round variants.
  --a_wizard_step_warning_primary_color: var(--a_color_warning); // Main color of a step with a warning: fill in the arrows and round variants, marker in the basic variant.
  --a_wizard_step_warning_secondary_color: var(--a_color_warning_contrast); // Second color of a step with a warning: text on the fill in the arrows and round variants.
  --a_wizard_step_warning_text_color: var(--a_color_warning_text_emphasis); // Text color of a step with a warning in the basic and line variants.
  // focus
  --a_wizard_step_focus_shadow: var(--a_color_focus); // Color of the focus outline around a step in the arrows variant.
  --a_wizard_step_focus_box_shadow: var(--a_focus_ring); // Focus ring of a step.
}

:where(.a_wizard_line) {
  // default
  --a_wizard_line_step_default_text_color: var(--a_wizard_step_default_secondary_color); // Line variant: label color of an upcoming step.
  --a_wizard_line_step_default_number_color: var(--a_wizard_step_default_secondary_color); // Line variant: number color of an upcoming step.
  --a_wizard_line_step_default_number_bg: var(--a_wizard_step_default_primary_color); // Line variant: number background of an upcoming step.
  --a_wizard_line_step_default_number_border_width: 0; // Line variant: number border width of an upcoming step.
  --a_wizard_line_step_default_number_border_style: none; // Line variant: number border style of an upcoming step.
  --a_wizard_line_step_default_number_border_color: transparent; // Line variant: number border color of an upcoming step.
  // active
  --a_wizard_line_step_active_text_color: var(--a_wizard_step_active_text_color); // Line variant: label color of the active step.
  --a_wizard_line_step_active_number_color: var(--a_wizard_step_active_secondary_color); // Line variant: number color of the active step.
  --a_wizard_line_step_active_number_bg: var(--a_wizard_step_active_primary_color); // Line variant: number background of the active step.
  --a_wizard_line_step_active_number_border_width: 0; // Line variant: number border width of the active step.
  --a_wizard_line_step_active_number_border_style: none; // Line variant: number border style of the active step.
  --a_wizard_line_step_active_number_border_color: transparent; // Line variant: number border color of the active step.
  --a_wizard_line_step_active_number_box_shadow: var(--a_shadow_md); // Line variant: shadow of the number of the active step. None in the bordered variants.
  // done
  --a_wizard_line_step_done_text_color: var(--a_wizard_step_done_primary_color); // Line variant: label color of a completed step.
  --a_wizard_line_step_done_number_color: var(--a_wizard_step_done_secondary_color); // Line variant: number color of a completed step.
  --a_wizard_line_step_done_number_bg: var(--a_wizard_step_done_primary_color); // Line variant: number background of a completed step.
  --a_wizard_line_step_done_number_border_width: 0; // Line variant: number border width of a completed step.
  --a_wizard_line_step_done_number_border_style: none; // Line variant: number border style of a completed step.
  --a_wizard_line_step_done_number_border_color: transparent; // Line variant: number border color of a completed step.
  // disabled
  --a_wizard_line_step_disabled_text_color: var(--a_wizard_step_disabled_primary_color); // Line variant: label color of a disabled step.
  --a_wizard_line_step_disabled_number_color: var(--a_wizard_step_disabled_secondary_color); // Line variant: number color of a disabled step.
  --a_wizard_line_step_disabled_number_bg: var(--a_wizard_step_disabled_primary_color); // Line variant: number background of a disabled step.
  --a_wizard_line_step_disabled_number_border_width: 0; // Line variant: number border width of a disabled step.
  --a_wizard_line_step_disabled_number_border_style: none; // Line variant: number border style of a disabled step.
  --a_wizard_line_step_disabled_number_border_color: transparent; // Line variant: number border color of a disabled step.
  // error
  --a_wizard_line_step_error_text_color: var(--a_wizard_step_error_text_color); // Line variant: label color of a step with an error.
  --a_wizard_line_step_error_number_color: var(--a_wizard_step_error_secondary_color); // Line variant: number color of a step with an error.
  --a_wizard_line_step_error_number_bg: var(--a_wizard_step_error_primary_color); // Line variant: number background of a step with an error.
  --a_wizard_line_step_error_number_border_width: 0; // Line variant: number border width of a step with an error.
  --a_wizard_line_step_error_number_border_style: none; // Line variant: number border style of a step with an error.
  --a_wizard_line_step_error_number_border_color: transparent; // Line variant: number border color of a step with an error.
  // warning
  --a_wizard_line_step_warning_text_color: var(--a_wizard_step_warning_text_color); // Line variant: label color of a step with a warning.
  --a_wizard_line_step_warning_number_color: var(--a_wizard_step_warning_secondary_color); // Line variant: number color of a step with a warning.
  --a_wizard_line_step_warning_number_bg: var(--a_wizard_step_warning_primary_color); // Line variant: number background of a step with a warning.
  --a_wizard_line_step_warning_number_border_width: 0; // Line variant: number border width of a step with a warning.
  --a_wizard_line_step_warning_number_border_style: none; // Line variant: number border style of a step with a warning.
  --a_wizard_line_step_warning_number_border_color: transparent; // Line variant: number border color of a step with a warning.
}
`,"../../../../../../scss/components/ui/ACheckbox.scss":`.a_checkbox_inline {
  .a_checkbox__data_extra,
  .a_checkbox_data,
  .a_checkbox_radio_group__data {
    display: flex;
    flex-wrap: wrap;
  }
}
.a_checkbox_control {
  margin-top: 1rem;
  .a_checkbox_data {
    margin-top: 0.5rem;
  }
  .a_fieldset .a_fieldset {
    margin-top: 1.5rem;
    --a_fieldset_padding_top: 1.5rem;
  }
}
.a_checkbox__select_all {
  display: flex;
  flex-wrap: wrap;
  gap: var(--a_space_sm);
  margin-bottom: var(--a_space_md);
}
`,"../../../../../../scss/components/ui/AColorPicker.scss":`@use "../../utils/focus";

// Toggle: looks like an input that is filled with the color
// (double class: .a_form_control must not win)
.a_form_control.a_color_picker__toggle {
  min-height: var(--a_form_control_height, var(--a_control_height));
  text-align: start;
  cursor: pointer;
  &,
  &:hover,
  &:focus {
    color: var(--a_color_picker_text_color, var(--a_color_text));
    background:
      linear-gradient(var(--a_color_picker_color), var(--a_color_picker_color)),
      var(--a_color_picker_checker);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: .65;
  }
}
.a_form_control.a_color_picker__toggle_empty {
  &,
  &:hover,
  &:focus {
    color: var(--a_form_control_color, var(--a_color_text));
    background: var(--a_form_control_bg, var(--a_color_surface));
  }
}
// The clear button and the error icon on the colored field use the contrast color
.a_color_picker_has_color {
  .a_form_control__actions .a_btn.a_form_control__actions__btn {
    --a_btn_color: var(--a_color_picker_text_color);
    --a_btn_hover_color: var(--a_color_picker_text_color);
    --a_btn_active_color: var(--a_color_picker_text_color);
    color: var(--a_color_picker_text_color);
  }
}
// labelPosition "inset": the label lies on the color
.a_color_picker_has_color.a_form_element__parent_inset {
  .a_form_element_label,
  .a_form_element_label.a_form_element_label_float {
    color: var(--a_color_picker_text_color);
  }
}
.a_color_picker.a_form_element__parent_float_has_error_icon {
  .a_form_element_label_float {
    left: 1.5rem;
  }
}

.a_color_picker__toggle__value {
  font-variant-numeric: tabular-nums;
  overflow-wrap: anywhere;
}
.a_color_picker__toggle__empty {
  color: var(--a_color_text_muted);
}

.a_color_picker__swatch {
  display: inline-block;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  border: var(--a_border_width) solid var(--a_color_picker_swatch_border_color);
  border-radius: var(--a_border_radius_small);
  background:
    linear-gradient(var(--a_color_picker_color), var(--a_color_picker_color)),
    var(--a_color_picker_checker);
}
.a_color_picker__readonly {
  display: inline-flex;
  align-items: center;
  gap: var(--a_space_sm);
}

// Popup (teleported to the body)
.a_color_picker__popup {
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--a_color_picker_popup_z_index);
  display: flex;
  flex-direction: column;
  gap: var(--a_color_picker_popup_gap);
  width: var(--a_color_picker_popup_width);
  max-width: calc(100vw - 1rem);
  padding: var(--a_color_picker_popup_padding);
  color: var(--a_color_text);
  background-color: var(--a_color_picker_popup_bg);
  border: var(--a_border_width) solid var(--a_color_picker_popup_border_color);
  border-radius: var(--a_color_picker_popup_border_radius);
  box-shadow: var(--a_color_picker_popup_shadow);
}

// the float label of the text field lies on the popup background
.a_color_picker__popup .a_form_element__parent {
  --a_form_element_label_float_bg: var(--a_color_picker_popup_bg);
}

.a_color_picker__popup_positioning {
  visibility: hidden;
}

// Thumbs of the saturation area and the sliders
.a_color_picker_saturation__thumb,
.a_color_picker_slider__thumb {
  position: absolute;
  width: var(--a_color_picker_thumb_size);
  height: var(--a_color_picker_thumb_size);
  border: 2px solid var(--a_color_white);
  border-radius: 50%;
  background-color: var(--a_color_picker_thumb_color, transparent);
  box-shadow: 0 0 0 1px hsl(0 0% 0% / .6), inset 0 0 0 1px hsl(0 0% 0% / .3);
  transform: translate(-50%, -50%);
  cursor: grab;
  @include focus.focus-visible;
}

.a_color_picker_saturation {
  position: relative;
  height: var(--a_color_picker_saturation_height);
  border-radius: var(--a_border_radius);
  background:
    linear-gradient(to top, #000, transparent),
    linear-gradient(to right, #fff, transparent),
    var(--a_color_picker_hue);
  cursor: crosshair;
  touch-action: none;
  user-select: none;
}

.a_color_picker_slider {
  position: relative;
  height: var(--a_color_picker_slider_height);
  margin: 0 calc(var(--a_color_picker_thumb_size) / 2);
  border-radius: var(--a_border_radius_pill);
  background: var(--a_color_picker_slider_bg);
  cursor: pointer;
  touch-action: none;
  user-select: none;
  // the track is wider than the element, so the thumb reaches the ends
  &::before {
    content: "";
    position: absolute;
    inset: 0 calc(var(--a_color_picker_thumb_size) / -2);
    z-index: -1;
    border-radius: inherit;
    background: inherit;
  }
  .a_color_picker_slider__thumb {
    top: 50%;
  }
}
.a_color_picker_slider_alpha {
  isolation: isolate;
  background:
    var(--a_color_picker_slider_bg),
    var(--a_color_picker_checker);
}

.a_color_picker__controls {
  display: flex;
  align-items: center;
  gap: var(--a_color_picker_popup_gap);
}
.a_color_picker__sliders {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--a_color_picker_popup_gap);
}
.a_color_picker__preview {
  width: 2rem;
  height: 2rem;
  border-radius: var(--a_border_radius);
}

.a_color_picker__value {
  display: flex;
  align-items: flex-start;
  gap: var(--a_space_sm);
  > .a_color_picker__input {
    flex: 1;
    min-width: 0;
  }
}
.a_color_picker__format {
  flex-shrink: 0;
  min-width: 3.5rem;
  min-height: var(--a_form_control_height, var(--a_control_height));
  font-variant-numeric: tabular-nums;
}

.a_color_picker__predefine {
  display: flex;
  flex-wrap: wrap;
  gap: var(--a_space_sm);
}
.a_color_picker__predefine__item {
  width: var(--a_color_picker_predefine_size);
  height: var(--a_color_picker_predefine_size);
  padding: 0;
  border: var(--a_border_width) solid var(--a_color_picker_swatch_border_color);
  border-radius: var(--a_border_radius_small);
  background:
    linear-gradient(var(--a_color_picker_color), var(--a_color_picker_color)),
    var(--a_color_picker_checker);
  cursor: pointer;
  @include focus.focus-visible;
}
.a_color_picker__predefine__item_selected {
  box-shadow:
    0 0 0 2px var(--a_color_surface),
    0 0 0 4px var(--a_color_picker_predefine_selected_color);
}

.a_color_picker__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--a_space_sm);
}

// ---------------------------------------------------------------------------
// Component tokens (the popup is teleported to the body, so it gets them too)
// ---------------------------------------------------------------------------
:where(.a_color_picker, .a_color_picker__popup, .a_color_picker__readonly) {
  // swatch
  --a_color_picker_checker: repeating-conic-gradient(var(--a_color_gray_300) 0% 25%, var(--a_color_surface) 0% 50%) 50% / .75rem .75rem; // Checkerboard background shown behind transparent colors.
  --a_color_picker_swatch_border_color: var(--a_border_color_translucent); // Border color of the color swatches.
  // dialog
  --a_color_picker_popup_width: 17.5rem; // Width of the picker dialog.
  --a_color_picker_popup_padding: var(--a_space_md); // Padding of the picker dialog.
  --a_color_picker_popup_gap: calc(.75rem * var(--a_density)); // Space between the parts of the picker dialog.
  --a_color_picker_popup_bg: var(--a_color_surface_raised); // Background of the picker dialog. Also used behind float labels in the dialog.
  --a_color_picker_popup_border_color: var(--a_border_color); // Border color of the picker dialog.
  --a_color_picker_popup_border_radius: var(--a_border_radius_large); // Corner radius of the picker dialog.
  --a_color_picker_popup_shadow: var(--a_shadow_lg); // Shadow of the picker dialog.
  --a_color_picker_popup_z_index: calc(var(--a_z_index_popup) + 1); // Stack order of the picker dialog.
  // controls
  --a_color_picker_saturation_height: 10rem; // Height of the saturation and brightness area.
  --a_color_picker_slider_height: .75rem; // Height of the hue and alpha sliders.
  --a_color_picker_thumb_size: 1.125rem; // Size of the slider handles.
  --a_color_picker_predefine_size: 1.5rem; // Size of a predefined color.
  --a_color_picker_predefine_selected_color: var(--a_color_focus); // Ring color of the selected predefined color.
}
`,"../../../../../../scss/components/ui/ADatepicker.scss":`@use "../../utils/focus";

.a_datepicker {
  position: relative;
  display: inline-block;
  width: var(--a_datepicker_width);
  max-width: var(--a_datepicker_max_width);
  min-width: var(--a_datepicker_min_width);
  color: var(--a_datepicker_color);
  font-size: var(--a_body_font_size);
  * {
    box-sizing: border-box;
  }
}
.a_datepicker_range_mode {
  width: 20rem;
}

.a_datepicker__popup {
  color: var(--a_datepicker_color);
  border: var(--a_border_width) solid var(--a_datepicker_popup_border_color);
  border-radius: var(--a_datepicker_popup_border_radius);
  background-color: var(--a_datepicker_popup_bg);
  box-shadow: var(--a_datepicker_popup_box_shadow);
  z-index: calc(var(--a_z_index_popup) + 1);
}

.a_datepicker__input_wrapper {
  position: relative;
  &:hover {
    .a_datepicker__input_wrapper__clear_wrapper {
      display: block;
    }
    .a_datepicker__input_wrapper__clear_wrapper + .a_datepicker__input_wrapper__append {
      display: none;
    }
  }
  .a_datepicker__input {
    padding-right: 1.6875rem;
  }
}

.a_datepicker_has_error_icon {
  .a_datepicker__input {
    padding-left: 1.75rem;
  }
}

.a_datepicker__error_icon.a_input__icon_error {
  left: .625rem;
  z-index: 1;
}

.a_datepicker__input_wrapper__clear_wrapper {
  display: none;
}

.a_datepicker__input_wrapper__append {
  position: absolute;
  top: 0;
  right: 0;
  width: 1.875rem;
  height: 100%;
  padding: .375rem;
}

.a_datepicker__input__icon {
  display: inline-block;
  width: 100%;
  height: 100%;
  font-style: normal;
  color: var(--a_datepicker_icon_color);
  text-align: center;
  cursor: pointer;
}

.a_datepicker__calendar_icon {
  width: 100%;
  height: 100%;
  max-height: 1.5625rem;
  color: var(--a_datepicker_icon_color);
  stroke-width: .5rem;
  stroke: currentColor;
  fill: currentColor;
}

.a_datepicker__input__clear_icon {
  &::before {
    display: inline-block;
    content: "\\2716";
    vertical-align: middle;
  }
  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
}

.a_datepicker__range_wrapper {
  width: 31rem;
  overflow: hidden;
}

.a_datepicker__shortcuts_wrapper {
  text-align: left;
  padding: 0 .75rem;
  line-height: 2.125rem;
  border-bottom: var(--a_border_width) solid var(--a_datepicker_divider_color);
  .a_datepicker__shortcuts_wrapper__shortcuts {
    background: none;
    border: 0;
    color: var(--a_datepicker_color);
    margin: 0;
    padding: 0;
    white-space: nowrap;
    cursor: pointer;
    border-radius: var(--a_border_radius_small);
    &:hover {
      color: var(--a_datepicker_hover_color);
    }
    @include focus.focus-visible;
    &::after {
      content: "|";
      margin: 0 .625rem;
      color: var(--a_datepicker_divider_color);
    }
    &:last-child::after {
      display: none;
    }
  }
}

.a_datepicker__footer {
  padding: .25rem;
  clear: both;
  text-align: right;
  border-top: var(--a_border_width) solid var(--a_datepicker_divider_color);
}
.a_datepicker__footer__btn {
  font-size: .75rem;
  line-height: 1;
  padding: .4375rem .9375rem;
  margin: 0 .3125rem;
  cursor: pointer;
  color: var(--a_datepicker_color);
  background-color: transparent;
  border: none;
  border-radius: var(--a_border_radius_small);
  transition: var(--a_transition_colors);
  @include focus.focus-visible;
}
.a_datepicker__footer__btn_confirm {
  border: var(--a_border_width) solid var(--a_border_color_strong);
  &:hover {
    color: var(--a_datepicker_hover_color);
    border-color: var(--a_datepicker_hover_color);
  }
}

.a_datepicker__calendar {
  float: left;
  color: var(--a_datepicker_color);
  padding: .375rem .75rem;
  font-size: var(--a_font_size_sm);
  line-height: 1.5;
  * {
    box-sizing: border-box;
  }
}

.a_datepicker__calendar__header {
  padding: 0 .25rem;
  height: 2.125rem;
  line-height: 2.125rem;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  button {
    color: inherit;
    cursor: pointer;
    border: none;
    border-radius: var(--a_border_radius_small);
    background-color: transparent;
    &:hover {
      color: var(--a_datepicker_hover_color);
    }
    @include focus.focus-visible($inset: true);
  }
}

.a_datepicker__icon_last_month,
.a_datepicker__icon_next_month,
.a_datepicker__icon_last_year,
.a_datepicker__icon_next_year {
  padding: 0 .375rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  user-select: none;
}

.a_datepicker__calendar__content {
  width: 14rem;
  height: 14rem;
  .cell {
    vertical-align: middle;
    cursor: pointer;
    border-radius: var(--a_datepicker_cell_border_radius);
    &:hover {
      background-color: var(--a_datepicker_cell_hover_bg);
    }
    &.actived {
      color: var(--a_datepicker_cell_active_color);
      background-color: var(--a_datepicker_cell_active_bg);
    }
    &.inrange {
      color: var(--a_datepicker_cell_inrange_color);
      background-color: var(--a_datepicker_cell_inrange_bg);
    }
    &.disabled {
      cursor: not-allowed;
      color: var(--a_datepicker_cell_disabled_color);
      background-color: var(--a_datepicker_cell_disabled_bg);
    }
  }
}

// Keyboard focus inside the panel (focus is managed by JS, not by the browser)
.a_datepicker__panel_focus .a_datepicker__panel__cell_focus {
  box-shadow: var(--a_focus_ring_inset);
  outline: 2px solid transparent;
  outline-offset: -2px;
}

.a_datepicker__panel {
  width: 100%;
  height: 100%;
  text-align: center;
  &:focus {
    outline: 0;
  }
}

.a_datepicker__panel_date {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  td,
  th {
    font-size: .75rem;
    width: 2rem;
    height: 2rem;
    padding: 0;
    overflow: hidden;
    text-align: center;
  }
  td {
    &.today {
      color: var(--a_datepicker_today_color);
      font-weight: var(--a_font_weight_bold);
    }
    &.last-month,
    &.next-month {
      color: var(--a_datepicker_other_month_color);
    }
  }
}

.a_datepicker__panel_year {
  padding: .4375rem 0;
  .cell {
    display: inline-block;
    width: 40%;
    margin: .0625rem 5%;
    line-height: 2.5rem;
  }
}

.a_datepicker__panel_month {
  .cell {
    display: inline-block;
    width: 30%;
    line-height: 2.5rem;
    margin: .5rem 1.5%;
    white-space: nowrap;
  }
}
.a_datepicker__panel__list {
  padding-left: 0;
  list-style: none;
  margin: 0;
}

.a_datepicker__time_list {
  position: relative; // offsetParent
  float: left;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  height: 100%;
  border-top: var(--a_border_width) solid var(--a_datepicker_divider_color);
  border-left: var(--a_border_width) solid var(--a_datepicker_divider_color);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--a_color_gray_400) transparent;
  .a_datepicker__time_list__item {
    display: block;
    text-align: left;
    padding-left: .625rem;
  }
  &:first-child {
    border-left: 0;
  }
  .cell {
    width: 100%;
    font-size: .75rem;
    height: 1.875rem;
    line-height: 1.875rem;
  }
}

.a_datepicker__panel__button {
  border: none;
  background-color: transparent;
  color: inherit;
  padding: 0;
  width: 100%;
  height: 100%;
}

.a_datepicker__current_month,
.a_datepicker__current_year {
  padding: 0 .125rem;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_datepicker, .a_datepicker__popup) {
  // field
  --a_datepicker_width: 100%; // Width of the date field.
  --a_datepicker_max_width: 100%; // Maximum width of the date field.
  --a_datepicker_min_width: 7.5rem; // Minimum width of the date field.
  --a_datepicker_color: var(--a_color_text); // Text color of the field and of the calendar popup.
  --a_datepicker_icon_color: var(--a_color_text_muted); // Color of the calendar and clear icons.
  --a_datepicker_hover_color: var(--a_color_link_hover); // Color of icons and header buttons on hover.
  --a_datepicker_divider_color: var(--a_border_color); // Color of the lines between the parts of the popup (shortcuts, footer, time list).
  // popup
  --a_datepicker_popup_bg: var(--a_color_surface_raised); // Background of the calendar popup.
  --a_datepicker_popup_border_color: var(--a_border_color); // Border color of the calendar popup.
  --a_datepicker_popup_border_radius: var(--a_border_radius_large); // Corner radius of the calendar popup.
  --a_datepicker_popup_box_shadow: var(--a_shadow_md); // Shadow of the calendar popup.
  // cells
  --a_datepicker_cell_border_radius: var(--a_border_radius_small); // Corner radius of a day, month or year cell.
  --a_datepicker_cell_hover_bg: var(--a_color_gray_100); // Background of a cell on hover.
  --a_datepicker_cell_active_color: var(--a_color_primary_contrast); // Text color of the selected cell.
  --a_datepicker_cell_active_bg: var(--a_color_primary); // Background of the selected cell.
  --a_datepicker_cell_inrange_color: var(--a_color_primary_text_emphasis); // Text color of cells inside a selected range.
  --a_datepicker_cell_inrange_bg: var(--a_color_primary_bg_subtle); // Background of cells inside a selected range.
  --a_datepicker_cell_disabled_color: var(--a_color_text_muted); // Text color of a disabled cell.
  --a_datepicker_cell_disabled_bg: var(--a_color_gray_100); // Background of a disabled cell.
  --a_datepicker_today_color: var(--a_color_primary_text_emphasis); // Text color of today's cell.
  --a_datepicker_other_month_color: var(--a_color_text_muted); // Text color of days from the previous and the next month.
}
`,"../../../../../../scss/components/ui/ADatepickerRange.scss":`.a_datepicker_range {
  .a_form_element {
    width: var(--a_input_datepicker_range_width);
    max-width: var(--a_input_datepicker_range_max_width);
    min-width: var(--a_input_datepicker_range_min_width);
  }
}
.a_datepicker_range__content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: .5rem;
  column-gap: .5rem;
}
.a_datepicker_range__group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: var(--a_datepicker_range_group_flex_basis);
  flex-grow: 1;

  .a_form_element_label {
    display: flex;
  }
}
.a_datepicker_range__label {
  margin-right: var(--a_datepicker_range_label_padding_right);
  white-space: var(--a_datepicker_range_label_white_space);
}
.a_datepicker_range__label_max {
  margin-left: var(--a_datepicker_range_label_max_margin_left);
}

.a_datepicker_range__help_text {
  padding-left: 0.625rem;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_datepicker_range) {
  --a_input_datepicker_range_width: 100%; // Width of each date field.
  --a_input_datepicker_range_max_width: 100%; // Maximum width of each date field.
  --a_input_datepicker_range_min_width: 6.25rem; // Minimum width of each date field.
  --a_datepicker_range_label_padding_right: .5rem; // Space between a label (from, to) and its field.
  --a_datepicker_range_label_max_margin_left: 0.375rem; // Space before the label of the second field.
  --a_datepicker_range_label_white_space: nowrap; // Line wrapping of the labels.
  --a_datepicker_range_group_flex_basis: 14.375rem; // Base width of one label and field pair. Below it the pairs wrap.
}
`,"../../../../../../scss/components/ui/AErrors.scss":`.a_errors__label {
  word-break: break-word;
  word-wrap: break-word;
  font-size: 1rem;
}`,"../../../../../../scss/components/ui/AFieldset.scss":`.a_fieldset {
  margin-top: .5rem;
  padding: var(--a_fieldset_padding_top) var(--a_fieldset_padding_x) var(--a_fieldset_padding_bottom) var(--a_fieldset_padding_x);
  border-radius: var(--a_fieldset_border_radius);
  border: var(--a_fieldset_border_width) solid var(--a_fieldset_border_color);
  position: relative;
  min-width: 0;

  .a_fieldset {
    margin-top: 1rem;
  }
  .a_legend {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: var(--a_fieldset_legend_bg);
    max-width: 100%;
  }
  .a_fieldset__btn_collapse {
    position: absolute;
    right: var(--a_fieldset_padding_x);
    bottom: calc(100% - 0.3rem);
    padding: 0 .25rem;
    background-color: var(--a_fieldset_legend_bg);
    .a_icon {
      width: 1.8rem;
      height: auto;
    }
  }
}
.a_fieldset_with_legend {
  --a_fieldset_padding_top: 0;
}
.a_fieldset_collapsible {
  .a_legend {
    max-width: calc(100% - 2rem);
  }
}
.a_fieldset_no_border {
  --a_fieldset_border_color: transparent;
}
.a_fieldset_invalid {
  --a_fieldset_border_color: var(--a_fieldset_invalid_color);
}
.a_fieldset_collapsed {
  .a_fieldset__content {
    display: none;
  }
}
.a_fieldset__search {
  margin-bottom: 1rem;
}

.a_legend {
  padding: 0 var(--a_legend_padding_x);
  color: var(--a_legend_color);
  width: auto;
  font-weight: var(--a_legend_font_weight);
  font-size: var(--a_legend_font_size);
}
.a_legend_invalid {
  --a_legend_color: var(--a_legend_invalid_color);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_fieldset) {
  --a_fieldset_padding_x: var(--a_space_md); // Horizontal padding of the fieldset. Also the position of the collapse button.
  --a_fieldset_padding_top: var(--a_space_md); // Top padding of the fieldset.
  --a_fieldset_padding_bottom: var(--a_space_sm); // Bottom padding of the fieldset.
  --a_fieldset_border_radius: var(--a_border_radius_large); // Corner radius of the fieldset.
  --a_fieldset_border_color: var(--a_border_color_strong); // Border color of the fieldset.
  --a_fieldset_border_width: var(--a_border_width); // Border width of the fieldset.
  --a_fieldset_invalid_color: var(--a_color_danger_text); // Border color of the fieldset when it has errors.
  --a_fieldset_legend_bg: var(--a_color_surface); // Background behind the legend and the collapse button on the border.
}
:where(.a_legend) {
  // legend
  --a_legend_padding_x: .5rem; // Horizontal padding of the legend.
  --a_legend_color: var(--a_color_label); // Text color of the legend.
  --a_legend_font_size: inherit; // Font size of the legend.
  --a_legend_invalid_color: var(--a_color_danger_text); // Text color of the legend when the fieldset has errors.
  --a_legend_font_weight: var(--a_font_weight_semibold); // Font weight of the legend.
}
`,"../../../../../../scss/components/ui/AForm.scss":`.a_form {
  padding: 1rem;
  width: 100%;
}`,"../../../../../../scss/components/ui/AInputFile.scss":`@use "../../utils/focus";

.a_input_file__control {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--a_input_file_gap);
}

// The real input is visually hidden; the label around it is the visible button
.a_input_file__button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--a_space_xs);
  cursor: pointer;
  &:focus-within {
    @include focus.focus-ring;
  }
  &.disabled {
    cursor: not-allowed;
  }
}
.a_input_file__button_icon {
  display: inline-flex;
  width: 1em;
  height: 1em;
}
.a_input_file__button_link {
  border-radius: var(--a_border_radius_small);
  color: var(--a_input_file_link_color);
  font-weight: var(--a_font_weight_semibold);
  text-decoration: underline;
  text-underline-offset: .2em;
  &:hover:not(.disabled) {
    color: var(--a_input_file_link_hover_color);
  }
  &.disabled {
    color: var(--a_input_file_disabled_color);
  }
}

.a_input_file__input {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.a_input_file__hint {
  color: var(--a_input_file_hint_color);
  font-size: var(--a_font_size_sm);
}

// Dropzone
.a_input_file__dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--a_space_xs);
  padding: var(--a_input_file_dropzone_padding);
  border: var(--a_input_file_dropzone_border_width) dashed var(--a_input_file_dropzone_border_color);
  border-radius: var(--a_input_file_dropzone_border_radius);
  background: var(--a_input_file_dropzone_bg);
  text-align: center;
  transition: var(--a_transition_colors);
}
.a_input_file__dropzone_icon {
  display: inline-flex;
  width: var(--a_input_file_dropzone_icon_size);
  height: var(--a_input_file_dropzone_icon_size);
  color: var(--a_input_file_dropzone_icon_color);
  svg {
    width: 100%;
    height: 100%;
  }
}
.a_input_file__dropzone_active {
  border-style: solid;
  border-color: var(--a_input_file_dropzone_active_border_color);
  background: var(--a_input_file_dropzone_active_bg);
}
.a_input_file__dropzone_invalid {
  border-color: var(--a_form_element_error_color, var(--a_color_danger_text));
}
.a_input_file__dropzone_disabled {
  background: var(--a_input_file_disabled_bg);
  .a_input_file__dropzone_icon {
    color: var(--a_input_file_disabled_color);
  }
}

// File list
.a_input_file__list {
  display: flex;
  flex-direction: column;
  gap: var(--a_space_xs);
  margin: var(--a_input_file_gap) 0 0;
  padding: 0;
  list-style: none;
}
.a_input_file__item {
  display: flex;
  align-items: center;
  gap: var(--a_input_file_gap);
  padding: var(--a_input_file_item_padding);
  border: var(--a_border_width) solid var(--a_input_file_item_border_color);
  border-radius: var(--a_input_file_item_border_radius);
  background: var(--a_input_file_item_bg);
}
.a_input_file__item_error {
  border-color: var(--a_form_element_error_color, var(--a_color_danger_text));
}
.a_input_file__file_icon {
  display: inline-flex;
  flex: 0 0 auto;
  width: 1.25rem;
  height: 1.25rem;
  color: var(--a_input_file_hint_color);
  svg {
    width: 100%;
    height: 100%;
  }
}
.a_input_file__preview {
  flex: 0 0 auto;
  width: var(--a_input_file_preview_size);
  height: var(--a_input_file_preview_size);
  border-radius: var(--a_border_radius_small);
  object-fit: cover;
}
.a_input_file__info {
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  align-items: center;
  column-gap: var(--a_input_file_gap);
  row-gap: var(--a_space_xs);
  min-width: 0;
}
.a_input_file__name {
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.a_input_file__size {
  color: var(--a_input_file_hint_color);
  font-size: var(--a_font_size_sm);
  font-variant-numeric: tabular-nums;
}
.a_input_file__status {
  display: inline-flex;
  align-items: center;
  gap: var(--a_space_xs);
  font-size: var(--a_font_size_sm);
}
.a_input_file__status_icon {
  display: inline-flex;
  width: 1em;
  height: 1em;
}
.a_input_file__status_success {
  color: var(--a_color_success_text);
}
.a_input_file__status_error {
  color: var(--a_form_element_error_color, var(--a_color_danger_text));
}
.a_input_file__progress {
  flex: 1 0 100%;
  height: var(--a_input_file_progress_height);
}
.a_input_file__remove {
  flex: 0 0 auto;
  margin-inline-start: auto;
}

// Rejected files
.a_input_file__rejected {
  margin-top: var(--a_input_file_gap);
  padding: var(--a_input_file_item_padding);
  border: var(--a_border_width) solid var(--a_color_danger_border_subtle);
  border-radius: var(--a_input_file_item_border_radius);
  background: var(--a_color_danger_bg_subtle);
  color: var(--a_color_danger_text_emphasis);
}
.a_input_file__rejected_header {
  display: flex;
  align-items: center;
  gap: var(--a_space_xs);
}
.a_input_file__rejected_close {
  margin-inline-start: auto;
}
.a_input_file__rejected_list {
  margin: var(--a_space_xs) 0 0;
  padding-inline-start: 1.5rem;
  .a_input_file__name {
    font-weight: var(--a_font_weight_semibold);
  }
}

@media (forced-colors: active) {
  .a_input_file__dropzone_active {
    border-color: Highlight;
  }
}

// The list has the tokens too, because it is shown without .a_input_file when readonly
:where(.a_input_file, .a_input_file__list) {
  --a_input_file_gap: var(--a_space_sm); // Space between the elements.
  --a_input_file_hint_color: var(--a_color_text_muted); // Color of the hint, of the file size and of the file icon.
  --a_input_file_link_color: var(--a_color_primary_text); // Color of the "choose" link in the dropzone.
  --a_input_file_link_hover_color: var(--a_color_primary_hover); // Color of the "choose" link in the dropzone on hover.
  --a_input_file_disabled_color: var(--a_color_text_muted); // Text and icon color of a disabled component.
  --a_input_file_disabled_bg: var(--a_color_gray_100); // Background of a disabled dropzone.
  // dropzone
  --a_input_file_dropzone_padding: 1.5rem 1rem; // Padding of the dropzone.
  --a_input_file_dropzone_bg: var(--a_color_surface_subtle); // Background of the dropzone.
  --a_input_file_dropzone_border_width: 2px; // Width of the dashed border of the dropzone.
  --a_input_file_dropzone_border_color: var(--a_border_color_strong); // Color of the dashed border of the dropzone (contrast at least 3:1).
  --a_input_file_dropzone_border_radius: var(--a_border_radius_large); // Corner radius of the dropzone.
  --a_input_file_dropzone_icon_size: 2rem; // Size of the icon in the dropzone.
  --a_input_file_dropzone_icon_color: var(--a_color_text_muted); // Color of the icon in the dropzone.
  --a_input_file_dropzone_active_bg: var(--a_color_primary_bg_subtle); // Background of the dropzone while files are dragged over it.
  --a_input_file_dropzone_active_border_color: var(--a_color_primary); // Border color of the dropzone while files are dragged over it.
  // file list
  --a_input_file_item_padding: .5rem .75rem; // Padding of a file in the list.
  --a_input_file_item_bg: var(--a_color_surface); // Background of a file in the list.
  --a_input_file_item_border_color: var(--a_border_color); // Border color of a file in the list.
  --a_input_file_item_border_radius: var(--a_border_radius); // Corner radius of a file in the list.
  --a_input_file_preview_size: 2.5rem; // Size of the image preview.
  --a_input_file_progress_height: .375rem; // Height of the upload progress bar.
}
`,"../../../../../../scss/components/ui/AInputNumber.scss":`.a_form_element_number_controls {
  display: flex;
  align-items: stretch;
  .a_btn_group {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: var(--a_input_number_controls_bg);
    > .a_btn {
      --a_btn_border_color: var(--a_input_number_controls_border_color);
      &:first-child {
        margin-left: calc(-1 * var(--a_btn_border_width, var(--a_border_width)));
      }
      &:not(:last-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .a_input_number {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 100%;
    line-height: 1;
  }
}

.a_form_element_number {
  display: flex;
  align-items: stretch;
  .a_form_element {
    width: var(--a_input_number_width);
    max-width: var(--a_input_number_max_width);
    min-width: var(--a_input_number_min_width);
    z-index: 1;
  }

  .a_form_element_number__currency_symbol {
    display: flex;
    align-self: center;
    margin: 0 0.5rem;
  }
}

.a_form_element__parent_invalid {
  .a_form_element_number_controls .a_btn_group > .a_button {
    --a_btn_border_color: var(--a_form_element_error_color);
  }
}

.a_input_number {
  -webkit-appearance: none;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_form_element_number_controls) {
  --a_input_number_width: 100%; // Width of the number field.
  --a_input_number_max_width: 100%; // Maximum width of the number field.
  --a_input_number_min_width: 6.25rem; // Minimum width of the number field.
  --a_input_number_controls_bg: var(--a_color_surface); // Background of the increase and decrease buttons.
  --a_input_number_controls_border_color: var(--a_border_color_strong); // Border color of the increase and decrease buttons.
}
`,"../../../../../../scss/components/ui/AInputNumberRange.scss":`.a_input_number_range__content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: .5rem;
  column-gap: .5rem;
}
.a_input_number_range__group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: var(--a_input_number_range_group_flex_basis);
  flex-grow: 1;

  .a_form_element_label {
    display: flex;
  }
}
.a_input_number_range__label {
  margin-right: var(--a_input_number_range_label_padding_right);
  white-space: var(--a_input_number_range_label_white_space);
}
.a_input_number_range__label_max {
  margin-left: var(--a_input_number_range_label_max_margin_left);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_input_number_range) {
  --a_input_number_range_label_padding_right: .5rem; // Space between a label (from, to) and its field.
  --a_input_number_range_label_max_margin_left: 0.375rem; // Space before the label of the second field.
  --a_input_number_range_label_white_space: nowrap; // Line wrapping of the labels.
  --a_input_number_range_group_flex_basis: 14.375rem; // Base width of one label and field pair. Below it the pairs wrap.
}
`,"../../../../../../scss/components/ui/AInputOtp.scss":`.a_input_otp {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: var(--a_input_otp_gap);
  max-width: 100%;
}

// The cells are .a_form_control; their tokens are set here, because :where(.a_form_control) defines them on the cell itself.
.a_input_otp .a_input_otp__cell {
  --a_form_control_height: var(--a_input_otp_cell_height);
  --a_form_control_font_size: var(--a_input_otp_font_size);
  --a_form_control_padding_x: 0;
  --a_form_control_padding_y: 0;
  flex: 0 1 var(--a_input_otp_cell_width);
  width: var(--a_input_otp_cell_width);
  min-width: var(--a_input_otp_cell_min_width);
  height: var(--a_input_otp_cell_height);
  font-weight: var(--a_input_otp_font_weight);
  font-variant-numeric: tabular-nums;
  text-align: center;
  caret-color: var(--a_input_otp_caret_color);
  &::placeholder {
    color: var(--a_input_otp_placeholder_color);
  }
  &:disabled {
    cursor: not-allowed;
  }
}

.a_input_otp_small {
  --a_input_otp_cell_width: var(--a_input_otp_cell_width_small);
  --a_input_otp_cell_height: var(--a_input_otp_cell_height_small);
  --a_input_otp_font_size: var(--a_input_otp_font_size_small);
  --a_input_otp_gap: var(--a_input_otp_gap_small);
}
.a_input_otp_large {
  --a_input_otp_cell_width: var(--a_input_otp_cell_width_large);
  --a_input_otp_cell_height: var(--a_input_otp_cell_height_large);
  --a_input_otp_font_size: var(--a_input_otp_font_size_large);
  --a_input_otp_gap: var(--a_input_otp_gap_large);
}

.a_input_otp_filled .a_input_otp__cell {
  --a_form_control_bg: var(--a_input_otp_filled_bg);
  --a_form_control_border_color: var(--a_input_otp_filled_border_color);
  border-bottom-color: var(--a_input_otp_filled_border_bottom_color);
  &:focus {
    --a_form_control_bg: var(--a_color_surface);
  }
}
.a_input_otp_filled .a_input_otp__cell.a_form_control_invalid {
  --a_input_otp_filled_border_bottom_color: var(--a_form_element_error_color);
}

.a_input_otp_underlined .a_input_otp__cell {
  --a_form_control_bg: transparent;
  --a_form_control_border_radius: 0;
  border-width: 0 0 var(--a_input_otp_underline_width);
}

.a_input_otp__separator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: var(--a_input_otp_separator_color);
  font-size: var(--a_input_otp_separator_font_size);
  user-select: none;
}

:where(.a_input_otp) {
  // cell
  --a_input_otp_cell_width: calc(2.75rem * var(--a_density)); // Width of a cell.
  --a_input_otp_cell_min_width: 2rem; // Minimum width of a cell when the space is narrow.
  --a_input_otp_cell_height: var(--a_control_height); // Height of a cell.
  --a_input_otp_font_size: var(--a_font_size_lg); // Font size of the characters.
  --a_input_otp_font_weight: var(--a_font_weight_semibold); // Font weight of the characters.
  --a_input_otp_gap: var(--a_space_sm); // Space between the cells and the separators.
  --a_input_otp_caret_color: var(--a_color_primary); // Color of the text cursor in a cell.
  --a_input_otp_placeholder_color: var(--a_color_text_muted); // Color of the placeholder character of an empty cell.
  // small
  --a_input_otp_cell_width_small: calc(2.25rem * var(--a_density)); // Width of a cell for size "small".
  --a_input_otp_cell_height_small: var(--a_control_height_sm); // Height of a cell for size "small".
  --a_input_otp_font_size_small: var(--a_body_font_size); // Font size of the characters for size "small".
  --a_input_otp_gap_small: var(--a_space_xs); // Space between the cells for size "small".
  // large
  --a_input_otp_cell_width_large: calc(3.5rem * var(--a_density)); // Width of a cell for size "large".
  --a_input_otp_cell_height_large: calc(3.5rem * var(--a_density)); // Height of a cell for size "large".
  --a_input_otp_font_size_large: 1.75rem; // Font size of the characters for size "large".
  --a_input_otp_gap_large: var(--a_space_md); // Space between the cells for size "large".
  // filled
  --a_input_otp_filled_bg: var(--a_color_gray_100); // Background of a cell for variant "filled".
  --a_input_otp_filled_border_color: transparent; // Border color of a cell for variant "filled".
  --a_input_otp_filled_border_bottom_color: var(--a_border_color_strong); // Color of the line under a cell for variant "filled" (contrast at least 3:1).
  // underlined
  --a_input_otp_underline_width: 2px; // Width of the line under a cell for variant "underlined".
  // separator
  --a_input_otp_separator_color: var(--a_color_text_muted); // Color of the separator between the cells.
  --a_input_otp_separator_font_size: var(--a_font_size_lg); // Font size of the separator between the cells.
}
`,"../../../../../../scss/components/ui/AJson.scss":`.a_json__textarea {
  resize: vertical;
}

.a_json__code,
.a_json__textarea {
  white-space: pre;
  font-family: var(--a_font_monospace);
  overflow: auto;
}

`,"../../../../../../scss/components/ui/AMultiselectOrdered.scss":`.a_m_select_ordered__ul {
  margin-bottom: 1rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.a_m_select_ordered__empty {
  margin-right: .5rem;
}
.a_m_select_ordered__panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  text-align: right;
  .a_btn_group {
    margin-left: auto;
  }
}`,"../../../../../../scss/components/ui/ARadio.scss":`.a_radio_inline {
  .a_radio__data_extra,
  .a_radio_data,
  .a_checkbox_radio_group__data {
    display: flex;
    flex-wrap: wrap;
  }
}`,"../../../../../../scss/components/ui/ARate.scss":`@use "../../utils/focus";

.a_rate {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--a_rate_text_gap);
  max-width: 100%;
  border-radius: var(--a_border_radius_small);
  vertical-align: middle;
  @include focus.focus-visible;
}

.a_rate__items {
  display: inline-flex;
  align-items: center;
  gap: var(--a_rate_gap);
}

.a_rate__item {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: var(--a_rate_icon_size);
  height: var(--a_rate_icon_size);
  cursor: pointer;
  transition: transform var(--a_duration_fast) var(--a_easing);
}

.a_rate__icon {
  display: block;
  width: var(--a_rate_icon_size);
  height: var(--a_rate_icon_size);
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.a_rate__icon_void {
  color: var(--a_rate_void_color);
}

// The filled icon is cut to the value (half or decimal values)
.a_rate__item__fill {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  overflow: hidden;
  color: var(--a_rate_fill_color_current);
  .a_rate__icon {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
  }
}

// Color of the level of the shown value (lowThreshold / highThreshold)
.a_rate_level_low {
  --a_rate_fill_color_current: var(--a_rate_fill_color_low);
}
.a_rate_level_medium {
  --a_rate_fill_color_current: var(--a_rate_fill_color_medium);
}
.a_rate_level_high {
  --a_rate_fill_color_current: var(--a_rate_fill_color_high);
}
// colors prop and the deprecated hoveredColor are set inline, so they win
.a_rate_hovering .a_rate__item__fill {
  color: var(--a_rate_hover_fill_color, var(--a_rate_fill_color_current));
}

.a_rate:not(.a_rate_disabled):not(.a_rate_readonly) .a_rate__item:hover {
  transform: scale(var(--a_rate_hover_scale));
}

.a_rate__score,
.a_rate__text {
  color: var(--a_rate_text_color);
  font-size: var(--a_rate_text_font_size);
  font-variant-numeric: tabular-nums;
}

.a_rate_small {
  --a_rate_icon_size: var(--a_rate_icon_size_small);
  --a_rate_gap: var(--a_rate_gap_small);
  --a_rate_text_font_size: var(--a_font_size_sm);
}
.a_rate_large {
  --a_rate_icon_size: var(--a_rate_icon_size_large);
  --a_rate_gap: var(--a_rate_gap_large);
}

.a_rate_disabled {
  cursor: not-allowed;
  .a_rate__item {
    cursor: not-allowed;
  }
  .a_rate__icon_void {
    color: var(--a_rate_disabled_void_color);
  }
  .a_rate__item__fill {
    opacity: var(--a_rate_disabled_opacity);
  }
}
.a_rate_readonly .a_rate__item {
  cursor: default;
}

.a_rate_invalid .a_rate__icon_void {
  color: var(--a_form_element_error_color, var(--a_color_danger_text));
}

@media (prefers-reduced-motion: reduce) {
  .a_rate__item {
    transition: none;
  }
}

@media (forced-colors: active) {
  .a_rate__icon_void {
    color: CanvasText;
  }
  .a_rate__item__fill {
    color: Highlight;
  }
}

:where(.a_rate) {
  // icons
  --a_rate_icon_size: 1.5rem; // Size of an icon.
  --a_rate_icon_size_small: 1.125rem; // Size of an icon for size "small".
  --a_rate_icon_size_large: 2.25rem; // Size of an icon for size "large".
  --a_rate_gap: .25rem; // Space between the icons.
  --a_rate_gap_small: .125rem; // Space between the icons for size "small".
  --a_rate_gap_large: .375rem; // Space between the icons for size "large".
  --a_rate_hover_scale: 1.15; // Scale of the icon under the mouse pointer.
  // colors
  --a_rate_void_color: var(--a_border_color_strong); // Color of an empty icon (contrast at least 3:1).
  --a_rate_fill_color: var(--a_color_warning); // Color of a filled icon.
  --a_rate_fill_color_low: var(--a_rate_fill_color); // Color of the filled icons if the value is at most lowThreshold.
  --a_rate_fill_color_medium: var(--a_rate_fill_color); // Color of the filled icons between lowThreshold and highThreshold.
  --a_rate_fill_color_high: var(--a_rate_fill_color); // Color of the filled icons if the value is at least highThreshold.
  --a_rate_disabled_void_color: var(--a_border_color); // Color of an empty icon of a disabled component.
  --a_rate_disabled_opacity: .6; // Opacity of the filled icons of a disabled component.
  // text
  --a_rate_text_gap: var(--a_space_sm); // Space between the icons and the score or the text.
  --a_rate_text_color: var(--a_color_text); // Color of the score and of the text.
  --a_rate_text_font_size: var(--a_body_font_size); // Font size of the score and of the text.
}
`,"../../../../../../scss/components/ui/ASelect.scss":`@use "../../utils/focus";

.a_form_element__parent_float.a_select__parent_has_error_icon {
  > .a_form_element_label,
  > .a_form_element_label.a_form_element_label_float,
  > .a_form_element_label.a_form_element_label_error {
    left: 2rem;
    max-width: calc(100% - 2.625rem);
  }

  &:focus-within,
  &.a_form_element__parent_not_empty {
    > .a_form_element_label,
    > .a_form_element_label.a_form_element_label_float,
    > .a_form_element_label.a_form_element_label_error {
      left: 0.625rem;
      max-width: calc(100% - 1.25rem);
    }
  }
}

.a_select {
  position: relative;
}

.a_select_toggle {
  position: relative;
  min-width: var(--a_select_min_width);
  min-height: var(--a_form_control_height, var(--a_control_height));
  padding-right: var(--a_select_toggle_padding_right);
  text-align: left;
  &.a_select_toggle_has_error_icon.a_form_control {
    padding-left: 1.75rem;
  }
  &.a_select_toggle_closeable {
    padding: 0 1.875rem 0 0;
    &.a_select_toggle_has_error_icon.a_form_control {
      padding-left: 1.75rem;
    }
  }
}

.a_select__error_icon.a_input__icon_error {
  left: 0.625rem;
  z-index: 1;
}


.a_caret {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1.875rem;
}

.a_select__search {
  margin-bottom: 0.625rem;
}
.a_select__search__group {
  display: flex;
  width: 100%;
  & > div {
    width: 100%;
    .a_form_control {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  & > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    white-space: nowrap;
  }
}

.a_select_menu {
  display: block;
  min-width: 12.5rem;
  max-width: var(--a_select_menu_max_width);
  z-index: var(--a_z_index_popup);
  color: var(--a_select_menu_color);
  background-color: var(--a_select_menu_bg);
  border: var(--a_border_width) solid var(--a_select_menu_border_color);
  padding: var(--a_select_menu_padding);
  border-radius: var(--a_select_menu_border_radius);
  box-shadow: var(--a_select_menu_box_shadow);
  &[data-popper-reference-hidden] {
    visibility: hidden !important;
    pointer-events: none !important;
  }
  .a_fieldset {
    margin-top: 1rem;
  }
}
.a_select_menu_by_content {
  --a_select_menu_max_width: 100vw;
  .a_select__menu__link {
    white-space: nowrap;
  }
}
.a_select_menu_right {
  right: 0;
  left: auto;
}
.a_select_menu__child {
  max-height: var(--a_select_menu_max_height);
  overflow: auto;
}

.a_select_list {
  overflow: auto;
  width: 100%;
  min-height: 6.25rem;
}

.a_select__divider {
  height: 0;
  margin: var(--a_select_divider_margin_y) 0;
  overflow: hidden;
  border-top: var(--a_border_width) solid var(--a_select_divider_bg);
  opacity: 1;
}

.a_select__menu__link {
  position: relative;
  display: block;
  text-align: left;
  padding: 0.125rem 0.25rem 0.125rem 1.5625rem;
  border: none;
  border-radius: var(--a_select_menu_link_border_radius);
  cursor: pointer;
  background-color: transparent;
  color: var(--a_select_menu_link_color);
  transition: var(--a_transition_colors);
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  overflow-y: hidden;
  &:not(.a_select__menu__link_disabled) {
    &:hover {
      background-color: var(--a_select_menu_link_hover_bg);
      color: var(--a_select_menu_link_hover_color);
    }
    @include focus.focus-visible($inset: true);
  }
}

.a_select__menu__link_disabled {
  color: var(--a_select_menu_link_disabled_color);
  cursor: not-allowed;
}

.a_select__menu__link__icon_box {
  width: 1.2rem;
  height: 1.2rem;
  display: block;
  background-color: inherit;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  left: 0.3125rem;
  > .a_icon {
    vertical-align: inherit;
  }
}

.a_select_not_items {
  padding: 0.125rem 0.25rem 0.125rem 1.5625rem;
  width: 100%;
  display: inline-block;
  text-align: left;
}


.a_select__value__label {
  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1.5625rem;
}

.a_select_toggle_has_error_icon {
  .a_select__value__label {
    padding-left: 0.25rem;
  }
  .a_select__ul_closeable {
    padding-left: 0.25rem;
  }
}

.a_select__ul_closeable {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.a_select__ul_closeable__item {
  display: flex;
  margin: .25rem .375rem;
  background-color: var(--a_select_closeable_item_bg);
  padding-left: .5rem;
  padding-right: .5rem;
  border-radius: var(--a_select_border_radius);
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

.a_select__ul_closeable__item__btn {
  padding: 0 0 0 .25rem;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_select) {
  --a_select_border_radius: var(--a_border_radius); // Corner radius of the selected items with a remove button (closeable items).
  --a_select_min_width: 12.5rem; // Minimum width of the select field.
  --a_select_closeable_item_bg: var(--a_color_gray_200); // Background of a selected item with a remove button (closeable items).
  --a_select_toggle_padding_right: 1.875rem; // Right padding of the select field, room for the arrow and the clear button.
}
:where(.a_select_menu) {
  // divider
  --a_select_divider_margin_y: var(--a_space_sm); // Vertical space around a divider in the dropdown menu.
  --a_select_divider_bg: var(--a_border_color); // Color of a divider in the dropdown menu.
  --a_select_border_radius: var(--a_border_radius); // Corner radius of the selected items with a remove button (closeable items).
  // menu
  --a_select_menu_max_height: 15.625rem; // Maximum height of the option list. Longer lists scroll.
  --a_select_menu_max_width: 25rem; // Maximum width of the dropdown menu.
  --a_select_menu_color: var(--a_color_text); // Text color of the dropdown menu.
  --a_select_menu_bg: var(--a_color_surface_raised); // Background of the dropdown menu.
  --a_select_menu_border_color: var(--a_border_color); // Border color of the dropdown menu.
  --a_select_menu_border_radius: var(--a_border_radius_large); // Corner radius of the dropdown menu.
  --a_select_menu_box_shadow: var(--a_shadow_md); // Shadow of the dropdown menu.
  --a_select_menu_padding: calc(.625rem * var(--a_density)); // Padding of the dropdown menu.
  // option
  --a_select_menu_link_color: var(--a_color_text); // Text color of an option.
  --a_select_menu_link_hover_color: var(--a_color_text); // Text color of an option on hover.
  --a_select_menu_link_hover_bg: var(--a_color_gray_100); // Background of an option on hover.
  --a_select_menu_link_border_radius: var(--a_border_radius_small); // Corner radius of an option.
  --a_select_menu_link_disabled_color: var(--a_color_text_muted); // Text color of a disabled option.
}
`,"../../../../../../scss/components/ui/ASlider.scss":`.a_slider {
  width: 100%;
  height: var(--a_slider_btn_wrapper_size);
  display: flex;
  align-items: center;
  padding: 0 var(--a_slider_padding_x);
}
.a_slider_vertical {
  position: relative;
  display: inline-flex;
  width: auto;
  height: 100%;
  flex: 0;
  padding: var(--a_slider_padding_x) 0;

  .a_slider__runway {
    width: var(--a_slider_bar_height);
    height: 100%;
    margin: 0 1rem;
  }

  .a_slider__bar {
    width: var(--a_slider_bar_height);
    height: auto;
    border-radius: 0 0 var(--a_slider_bar_border_radius) var(--a_slider_bar_border_radius);
  }

  .a_slider__button {
    top: unset;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
  }

  .a_slider__stop {
    transform: translateY(50%);
  }

  .a_slider__marks-text {
    margin-top: 0;
    left: .9375rem;
    transform: translateY(50%);
  }
}

.a_slider__runway {
  flex: 1;
  height: var(--a_slider_bar_height);
  background-color: var(--a_slider_runway_bg);
  border-radius: var(--a_slider_bar_border_radius);
  position: relative;
  cursor: pointer;
}

.a_slider__bar {
  height: var(--a_slider_bar_height);
  background-color: var(--a_slider_bar_bg);
  border-top-left-radius: var(--a_slider_bar_border_radius);
  border-bottom-left-radius: var(--a_slider_bar_border_radius);
  position: absolute;
  z-index: 2;
}

.a_slider__button {
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: var(--a_slider_btn_wrapper_size);
  height: var(--a_slider_btn_wrapper_size);
  z-index: 3;
  background-color: transparent;
  text-align: center;
  user-select: none;
  line-height: normal;
  outline: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus-visible,
  &.a_slider__button_dragging {
    .a_slider__button__child {
      box-shadow:
        0 0 0 var(--a_slider_btn_focus_width_inside) var(--a_slider_btn_focus_color_inside),
        0 0 0 calc(var(--a_slider_btn_focus_width_inside) + var(--a_slider_btn_focus_width_outside)) var(--a_slider_btn_focus_color_outside);
    }
  }
}
.a_slider__button_hover {
  cursor: grab;
  .a_slider__button__child {
    transform: scale(1.2);
  }
}
.a_slider__button_dragging {
  cursor: grabbing;
  .a_slider__button__child {
    transform: scale(1.2);
  }
}
.a_slider__button__child {
  display: inline-block;
  width: var(--a_slider_btn_size);
  height: var(--a_slider_btn_size);
  vertical-align: middle;
  border: solid var(--a_slider_btn_border_width) var(--a_slider_btn_border_color);
  background-color: var(--a_slider_btn_bg);
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: var(--a_shadow_sm);
  transition: transform var(--a_duration_normal) var(--a_easing), box-shadow var(--a_duration_fast) var(--a_easing);
  user-select: none;
}
.a_slider__stop {
  position: absolute;
  height: var(--a_slider_bar_height);
  width: var(--a_slider_bar_height);
  border-radius: var(--a_slider_stop_border_radius);
  background-color: var(--a_slider_stop_bg);
  transform: translateX(-50%);
}
.a_slider__stops {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(0);
}
.a_slider__marks {
  top: 0;
  left: .75rem;
  width: 1.125rem;
  height: 100%;
  position: absolute;
}
.a_slider__marks-text {
  position: absolute;
  transform: translateX(-50%);
  font-size: var(--a_font_size_sm);
  color: var(--a_slider_marks_color);
  margin-top: .9375rem;
  white-space: pre;
  cursor: pointer;
}

.a_slider_disabled {
  --a_slider_bar_bg: var(--a_slider_disabled_bar_bg);
  --a_slider_runway_bg: var(--a_slider_disabled_runway_bg);
  --a_slider_btn_border_color: var(--a_slider_disabled_btn_border_color);

  .a_slider__runway {
    cursor: default;
  }
  .a_slider__button_hover,
  .a_slider__button_dragging {
    cursor: not-allowed;
    .a_slider__button__child {
      transform: scale(1);
      box-shadow: none;
    }
  }
}
.a_slider_invalid {
  --a_slider_bar_bg: var(--a_slider_error_bar_bg);
  --a_slider_btn_border_color: var(--a_slider_error_btn_border_color);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_slider) {
  // track
  --a_slider_padding_x: .625rem; // Space at both ends of the slider, so the handle does not stick out.
  --a_slider_bar_height: .375rem; // Thickness of the track (width in a vertical slider).
  --a_slider_bar_bg: var(--a_color_primary); // Color of the filled part of the track.
  --a_slider_bar_border_radius: var(--a_border_radius_pill); // Corner radius of the track.
  --a_slider_runway_bg: var(--a_color_gray_300); // Color of the empty part of the track.
  // handle
  --a_slider_btn_wrapper_size: 2.25rem; // Size of the clickable area around the handle. Also the height of the slider.
  --a_slider_btn_size: 1.25rem; // Size of the visible handle.
  --a_slider_btn_bg: var(--a_color_surface); // Background of the handle.
  --a_slider_btn_border_width: 2px; // Border width of the handle.
  --a_slider_btn_border_color: var(--a_color_primary); // Border color of the handle.
  // focus
  --a_slider_btn_focus_color_inside: var(--a_focus_color_inside); // Inner (gap) color of the focus ring of the handle.
  --a_slider_btn_focus_width_inside: var(--a_focus_width_inside); // Inner (gap) width of the focus ring of the handle.
  --a_slider_btn_focus_color_outside: var(--a_focus_color_outside); // Outer color of the focus ring of the handle.
  --a_slider_btn_focus_width_outside: var(--a_focus_width_outside); // Outer width of the focus ring of the handle.
  // steps and marks
  --a_slider_stop_bg: var(--a_color_surface); // Color of the step dots on the track.
  --a_slider_stop_border_radius: 50%; // Corner radius of the step dots.
  --a_slider_marks_color: var(--a_color_text_muted); // Text color of the marks below the track.
  // disabled
  --a_slider_disabled_bar_bg: var(--a_color_gray_500); // Color of the filled part of the track when disabled.
  --a_slider_disabled_runway_bg: var(--a_color_gray_300); // Color of the empty part of the track when disabled.
  --a_slider_disabled_btn_border_color: var(--a_color_gray_500); // Border color of the handle when disabled.
  // error
  --a_slider_error_bar_bg: var(--a_form_element_error_color, var(--a_color_danger)); // Color of the filled part of the track when the field has errors.
  --a_slider_error_btn_border_color: var(--a_form_element_error_color, var(--a_color_danger)); // Border color of the handle when the field has errors.
}
`,"../../../../../../scss/components/ui/ASwitch.scss":`@use "../../utils/focus";

.a_switch__wrapper {
  display: flex;
  align-items: center;
}

.a_switch__wrapper_has_error_icon {
  gap: 0.375rem;
}

.a_switch__error_icon.a_input__icon_error {
  position: static;
  top: auto;
  left: auto;
  transform: none;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  > svg {
    width: 1rem;
    height: 1rem;
    display: block;
  }
}

.a_switch {
  margin-left: -0.3125rem;
  position: relative;
}

.a_switch__input {
  position: absolute;
  z-index: -1;
  opacity: 0;
  &:checked {
    ~ .a_switch__label {
      &::before {
        --a_switch_button_bg: var(--a_switch_button_active_bg);
        --a_switch_button_border_color: var(--a_switch_button_active_bg);
      }
      &::after {
        left: calc(var(--a_switch_button_track_left) + var(--a_switch_button_track_width) - var(--a_switch_button_knob_size) - var(--a_switch_button_knob_gap));
      }
    }
  }
  &:focus-visible ~ .a_switch__label::before {
    @include focus.focus-ring;
  }
  &:not(:disabled) {
    ~ .a_switch__label {
      &:hover {
        background-color: var(--a_switch_hover_focus_bg);
      }
    }
  }
  &:disabled {
    ~ .a_switch__label {
      cursor: not-allowed;
      &::before {
        --a_switch_button_bg: var(--a_switch_button_disabled_bg);
        --a_switch_button_border_color: var(--a_switch_button_disabled_border_color);
      }
      &::after {
        --a_switch_button_inner_bg: var(--a_switch_button_disabled_inner_bg);
      }
    }
  }
}

.a_switch__label {
  padding: var(--a_space_sm) var(--a_space_sm) var(--a_space_sm) calc(var(--a_switch_button_track_left) + var(--a_switch_button_track_width) + var(--a_space_sm));
  margin-bottom: 0;
  display: inline-flex;
  align-items: center;
  border-radius: var(--a_switch_button_label_border_radius);
  cursor: pointer;
  transition: var(--a_transition_colors);
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: var(--a_switch_button_track_left);
    box-sizing: border-box;
    height: var(--a_switch_button_track_height);
    width: var(--a_switch_button_track_width);
    border-radius: var(--a_switch_button_border_radius);
    background-color: var(--a_switch_button_bg);
    border: var(--a_border_width) solid var(--a_switch_button_border_color);
    transition: var(--a_transition_colors);
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(var(--a_switch_button_track_left) + var(--a_switch_button_knob_gap));
    height: var(--a_switch_button_knob_size);
    width: var(--a_switch_button_knob_size);
    background-color: var(--a_switch_button_inner_bg);
    border-radius: var(--a_switch_button_border_radius);
    box-shadow: var(--a_shadow_sm);
    transition: left var(--a_duration_normal) var(--a_easing), background-color var(--a_duration_fast) var(--a_easing);
  }
}
.a_switch__label_full {
  display: flex;
  width: 100%;
}

.a_switch_invalid {
  .a_switch__label {
    &::before {
      --a_switch_button_border_color: var(--a_switch_button_invalid_color);
    }
    &::after {
      --a_switch_button_inner_bg: var(--a_switch_button_invalid_color);
    }
  }
  .a_switch__input:checked ~ .a_switch__label::before {
    --a_switch_button_border_color: var(--a_switch_button_invalid_color);
  }
  &.a_switch_undefined .a_switch__label::before {
    --a_switch_button_border_color: var(--a_switch_button_invalid_color);
  }
}

.a_switch_undefined {
  .a_switch__label {
    &::before {
      --a_switch_button_bg: var(--a_switch_button_inactive_bg);
      --a_switch_button_border_color: var(--a_switch_button_inactive_bg);
    }
    &::after {
      left: calc(var(--a_switch_button_track_left) + (var(--a_switch_button_track_width) - var(--a_switch_button_knob_size)) / 2);
    }
  }
}
.a_switch_auto {
  display: inline-block;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_switch) {
  // size
  --a_switch_button_border_radius: var(--a_border_radius_pill); // Corner radius of the track and the knob.
  --a_switch_button_label_border_radius: var(--a_border_radius); // Corner radius of the label area (visible on hover).
  --a_switch_button_track_left: .3125rem; // Distance of the track from the left edge of the label.
  --a_switch_button_track_width: 2.5rem; // Width of the track.
  --a_switch_button_track_height: 1.5rem; // Height of the track.
  --a_switch_button_knob_size: 1.125rem; // Size of the knob.
  --a_switch_button_knob_gap: .1875rem; // Space between the knob and the edge of the track.
  // colors
  --a_switch_button_bg: var(--a_color_gray_600); // Background of the track when off.
  --a_switch_button_inner_bg: var(--a_color_white); // Color of the knob.
  --a_switch_button_active_bg: var(--a_color_primary); // Background and border color of the track when on.
  --a_switch_button_inactive_bg: var(--a_color_gray_400); // Background and border color of the track when the value is neither on nor off (undefined).
  --a_switch_hover_focus_bg: var(--a_color_gray_100); // Background of the label area on hover.
  --a_switch_button_border_color: var(--a_switch_button_bg); // Border color of the track when off.
  // error
  --a_switch_button_invalid_color: var(--a_color_danger_text); // Border color of the track and color of the knob when the field has errors.
  // disabled
  --a_switch_button_disabled_bg: var(--a_color_gray_300); // Background of the track when disabled.
  --a_switch_button_disabled_inner_bg: var(--a_color_gray_100); // Color of the knob when disabled.
  --a_switch_button_disabled_border_color: var(--a_color_gray_300); // Border color of the track when disabled.
}
`,"../../../../../../scss/components/ui/ui.scss":`@forward "AFieldset";
@forward "AForm";
@forward "ASwitch";
@forward "ASelect";
@forward "AErrors";
@forward "AInputFile";
@forward "ADatepicker";
@forward "ACheckbox";
@forward "ARadio";
@forward "AJson";
@forward "AMultiselectOrdered";
@forward "ASlider";
@forward "AColorPicker";
@forward "AInputOtp";
@forward "ARate";

@use "../../utils/focus";

.a_form_element__parent {
  width: 100%;
}

.a_form_element__parent_float {
  position: relative;
  .a_form_element_label {
    position: absolute;
    left: 0.625rem;
    top: var(--a_form_element_label_float_top);
    transform: translateY(-50%);
    color: var(--a_form_element_label_float_color);
    font-size: var(--a_body_font_size);
    background: var(--a_form_element_label_float_bg);
    border-radius: var(--a_border_radius_small);
    padding: 0 0.2rem;
    z-index: 4;
    max-width: calc(100% - 1.25rem);
    width: auto !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &_error {
      color: var(--a_form_element_error_color);
    }
  }
  &:focus-within,
  &.a_form_element__parent_not_empty {
    .a_form_element_label {
      transition: top var(--a_duration_normal) var(--a_easing), font-size var(--a_duration_normal) var(--a_easing), color var(--a_duration_normal) var(--a_easing);
      top: 0;
      color: var(--a_form_element_label_float_active_color);
      font-size: var(--a_font_size_sm);

      &_error {
        color: var(--a_form_element_error_color);
      }
    }
  }
}
// labelPosition "inset": the label stays inside the field, small above the value
// (the parent has a_form_element__parent_float as well, so icons and placeholders work the same)
.a_form_element__parent_inset {
  .a_form_control {
    min-height: calc(var(--a_form_control_height) + var(--a_form_element_label_inset_space));
    padding-top: calc(var(--a_form_control_padding_y) + var(--a_form_element_label_inset_space) * .75);
    padding-bottom: calc(var(--a_form_control_padding_y) + var(--a_form_element_label_inset_space) * .25);
  }
  .a_form_element_label {
    // --a_form_control_height is set on the control itself, the label uses the global token
    top: calc((var(--a_control_height) + var(--a_form_element_label_inset_space)) / 2);
    background: transparent;
  }
  &:focus-within,
  &.a_form_element__parent_not_empty {
    .a_form_element_label {
      top: var(--a_form_element_label_inset_top);
      transform: none;
      font-size: var(--a_font_size_sm);
      line-height: 1.25;
    }
  }
}
.a_form_element__parent_float_has_icon_prepend {
  .a_form_element_label {
    left: 1.5rem;
  }
  .a_form_control {
    padding-left: 1.5rem;
  }
}
.a_form_element__parent_float_has_error_icon {
  .a_form_control {
    padding-left: 1.5rem;
  }
}
.a_form_element__parent_float_has_two_icons_prepend {
  .a_form_control {
    padding-left: 2.35rem;
  }
}

.a_form_element_label__spinner {
  margin-left: .5rem;
}

.a_form_element_label_error {
  color: var(--a_form_element_error_color);
}

.a_form_element {
  position: relative;
  .a_form_element_with_one_btn {
    padding-right: 1.875rem;
  }
  .a_form_element_with_two_btns {
    padding-right: 3.125rem;
  }
  .a_form_element_with_three_btns {
    padding-right: 4.375rem;
  }
  .a_form_element_with_four_btns {
    padding-right: 5.625rem;
  }
}


.a_form_control {
  display: block;
  width: 100%;
  min-height: var(--a_form_control_height);
  padding: var(--a_form_control_padding_y) var(--a_form_control_padding_x);
  font-size: var(--a_form_control_font_size);
  font-weight: var(--a_font_weight_normal);
  line-height: var(--a_body_line_height);
  color: var(--a_form_control_color);
  background-color: var(--a_form_control_bg);
  background-clip: padding-box;
  border: var(--a_form_control_border_width) solid var(--a_form_control_border_color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: var(--a_form_control_border_radius);
  transition: var(--a_transition_colors);
  &::placeholder {
    color: var(--a_form_control_placeholder_color);
    opacity: 1;
  }
  &:hover:not(:disabled):not(.disabled) {
    border-color: var(--a_form_control_hover_border_color);
  }
  &:focus {
    color: var(--a_form_control_color);
    background-color: var(--a_form_control_bg);
    border-color: var(--a_form_control_focus_border_color);
    @include focus.focus-ring;
  }
  &:disabled,
  &.disabled {
    color: var(--a_form_control_disabled_color);
    background-color: var(--a_form_control_disabled_bg);
    border-color: var(--a_form_control_disabled_border_color);
    opacity: 1;
    cursor: not-allowed;
  }
}
.a_form_control__actions {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: .2rem;
}
.a_form_control__actions__btn {
  --a_btn_padding_x: .2rem;
  --a_btn_padding_y: .1rem;
}

.a_form_control_invalid,
.a_group_invalid .a_form_control {
  --a_form_control_border_color: var(--a_form_element_error_color);
  --a_form_control_hover_border_color: var(--a_form_element_error_color);
  --a_form_control_focus_border_color: var(--a_form_element_error_color);
  --a_focus_color_outside: var(--a_form_element_error_color);
}
.a_form_control_large {
  --a_form_control_height: var(--a_control_height_lg);
  --a_form_control_padding_y: calc(.5rem * var(--a_density));
  --a_form_control_padding_x: calc(1rem * var(--a_density));
  --a_form_control_font_size: var(--a_font_size_lg);
  --a_form_control_border_radius: var(--a_border_radius_large);
}
.a_form_control_small {
  --a_form_control_height: var(--a_control_height_sm);
  --a_form_control_padding_y: calc(.25rem * var(--a_density));
  --a_form_control_padding_x: calc(.5rem * var(--a_density));
  --a_form_control_font_size: var(--a_font_size_sm);
  --a_form_control_border_radius: var(--a_border_radius_small);
}

.a_input__icon_prepend,
.a_input__icon_error {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.a_input__icon_error {
  left: .4rem;
  color: var(--a_form_element_error_color);
}
.a_input__icon_prepend {
  left: .4rem;
}
.a_form_element__parent_float_has_error_icon {
  .a_input__icon_prepend {
    left: 1.5rem;
  }
}


.a_form_element__help_text {
  width: 100%;
  margin-top: var(--a_space_xs);
  font-size: var(--a_font_size_sm);
  color: var(--a_form_element_help_text_color);
}
.a_form_element__invalid_text {
  width: 100%;
  font-size: var(--a_font_size_sm);
  color: var(--a_form_element_error_color);
  list-style: none;
  margin: 0;
  padding: 0;
}
.a_form_element_label_static {
  font-weight: var(--a_font_weight_semibold);
  color: var(--a_color_label);
}

.a_required {
  margin-bottom: 1rem;
}

.a_form_element_readonly_value_range {
  display: flex;
  flex-wrap: wrap;
  .a_form_element_readonly {
    display: flex;
    flex-wrap: wrap;
    + .a_form_element_readonly {
      margin-left: .5rem;
    }
  }
  .a_form_element_readonly_label + .a_form_element_readonly_value {
    margin-left: .5rem;
  }
}
.a_form_element_readonly_value_fieldset {
  margin-left: .5rem;
}

// Autofill: the animations are hooks for JS ("animationstart"),
// the long transition keeps the browser autofill background from showing.
input:-webkit-autofill {
  animation-name: onAutoFillStart;
  transition: background-color 50000s ease-in-out 0s;
}

input:not(:-webkit-autofill) {
  animation-name: onAutoFillCancel;
}

//password/
input[type="password"]::-ms-reveal {
  display: none;
}
input[type="text"]::-ms-clear {
  display: none;
}

@keyframes onAutoFillStart {
  from {/**/}
  to {/**/}
}

@keyframes onAutoFillCancel {
  from {/**/}
  to {/**/}
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_form_element__parent) {
  --a_form_element_error_color: var(--a_color_danger_text); // Color of error texts, error labels and the error icon of form elements.
  // label
  --a_form_element_label_float_top: 1.125rem; // Vertical position of a float label while the field is empty and not focused.
  --a_form_element_label_float_color: var(--a_color_text_muted); // Color of a float label while it is inside the empty field.
  --a_form_element_label_float_active_color: var(--a_color_label); // Color of a float label after it moved to the border (field focused or filled).
  --a_form_element_label_float_bg: var(--a_color_surface); // Background behind a float label on the border. Set it to the background of the surrounding area.
  --a_form_element_label_inset_space: calc(1rem * var(--a_density)); // Extra height of the field for an inset label (labelPosition "inset").
  --a_form_element_label_inset_top: calc(.375rem * var(--a_density)); // Top position of an inset label when the field is focused or filled.
  --a_form_element_help_text_color: var(--a_color_text_muted); // Color of the help text below the field.
}
:where(.a_fieldset__content) {
  --a_form_element_error_color: var(--a_color_danger_text); // Color of error texts, error labels and the error icon of form elements.
}
:where(.a_form_control) {
  // field
  --a_form_control_height: var(--a_control_height); // Minimum height of the field.
  --a_form_control_padding_x: var(--a_control_padding_x); // Horizontal padding of the field.
  --a_form_control_padding_y: var(--a_control_padding_y); // Vertical padding of the field.
  --a_form_control_font_size: var(--a_body_font_size); // Font size of the field.
  --a_form_control_color: var(--a_color_text); // Text color of the field.
  --a_form_control_bg: var(--a_color_surface); // Background of the field.
  --a_form_control_border_width: var(--a_border_width); // Border width of the field.
  --a_form_control_border_color: var(--a_border_color_strong); // Border color of the field.
  --a_form_control_border_radius: var(--a_border_radius); // Corner radius of the field.
  // states
  --a_form_control_hover_border_color: var(--a_color_gray_600); // Border color of the field on hover.
  --a_form_control_focus_border_color: var(--a_color_focus); // Border color of the focused field. The focus ring is drawn in addition.
  --a_form_control_placeholder_color: var(--a_color_text_muted); // Color of the placeholder text.
  --a_form_control_disabled_color: var(--a_color_text_muted); // Text color of a disabled field.
  --a_form_control_disabled_bg: var(--a_color_gray_100); // Background of a disabled field.
  --a_form_control_disabled_border_color: var(--a_border_color); // Border color of a disabled field.
}
`,"../../../../../../scss/utils/_focus.scss":`// Focus ring helpers. The ring itself is configured with tokens:
// --a_focus_width_inside, --a_focus_width_outside,
// --a_focus_color_inside, --a_focus_color_outside.

// Draws the focus ring. The transparent outline becomes visible in
// forced-colors mode (e.g. Windows high contrast), where box-shadow is removed.
// The shadow is written out from the width/color tokens (not var(--a_focus_ring)),
// so --a_focus_color_* / --a_focus_width_* can be overridden on any element.
@mixin focus-ring($inset: false) {
  outline: 2px solid transparent;
  outline-offset: 2px;
  @if $inset {
    box-shadow:
      inset 0 0 0 var(--a_focus_width_outside) var(--a_focus_color_outside),
      inset 0 0 0 calc(var(--a_focus_width_outside) + var(--a_focus_width_inside)) var(--a_focus_color_inside);
  } @else {
    box-shadow:
      0 0 0 var(--a_focus_width_inside) var(--a_focus_color_inside),
      0 0 0 calc(var(--a_focus_width_inside) + var(--a_focus_width_outside)) var(--a_focus_color_outside);
  }
}

// Focus ring for keyboard focus only.
@mixin focus-visible($inset: false) {
  &:focus {
    outline: 0;
  }
  &:focus-visible {
    @include focus-ring($inset);
  }
}
`,"../../../../../../scss/utils/_list_helpers.scss":`@use "sass:list";

@function prepend($list, $value) {
  $list-new: ($value,);
  @each $item in $list {
    $list-new: list.append($list-new, $item);
  }
  @return $list-new;
}
`,"../../../../../../scss/utils/accordion.scss":`@use "focus";

.a_accordion {
  font-size: var(--a_accordion_font_size);
}

.a_accordion__button {
  position: relative;
  display: flex;
  gap: .5rem;
  align-items: center;
  width: 100%;
  padding: var(--a_accordion_btn_padding_y) var(--a_accordion_btn_padding_x);
  color: var(--a_accordion_btn_color);
  text-align: left; // Reset button style
  background-color: var(--a_accordion_btn_bg);
  border: 0;
  overflow-anchor: none;
  font-size: inherit;
  cursor: pointer;
  &.readonly,
  &.disabled {
    cursor: inherit;
  }

  &:not(.a_accordion__button_close) {
    color: var(--a_accordion_active_color);
    background-color: var(--a_accordion_active_bg);
    box-shadow: inset 0 calc(var(--a_accordion_border_width) * -1) 0 var(--a_accordion_border_color); // stylelint-disable-line function-disallowed-list
  }

  .a_accordion__button__icon {
    flex-shrink: 0;
    width: var(--a_accordion_btn_icon_width);
    height: var(--a_accordion_btn_icon_width);
    margin-left: auto;
  }

  &:hover {
    z-index: 2;
    background-color: var(--a_accordion_btn_hover_bg);
  }

  @include focus.focus-visible;
  &:focus-visible {
    z-index: 3;
    box-shadow: var(--a_accordion_btn_focus_box_shadow);
  }
}

.a_accordion__header {
  margin-bottom: 0;
}

.a_accordion__item {
  color: var(--a_accordion_color);
  background-color: var(--a_accordion_bg);
  border: var(--a_accordion_border_width) solid var(--a_accordion_border_color);

  &:first-of-type {
    border-top-left-radius: var(--a_accordion_border_radius);
    border-top-right-radius: var(--a_accordion_border_radius);
    .a_accordion__button {
      border-top-left-radius: var(--a_accordion_border_radius);
      border-top-right-radius: var(--a_accordion_border_radius);
    }
  }

  &:not(:first-of-type) {
    border-top: 0;
  }

  // Only set a border-radius on the last item if the accordion is collapsed
  &:last-of-type {
    border-bottom-right-radius: var(--a_accordion_border_radius);
    border-bottom-left-radius: var(--a_accordion_border_radius);
    .a_accordion__button_close {
      border-bottom-right-radius: var(--a_accordion_border_radius);
      border-bottom-left-radius: var(--a_accordion_border_radius);
    }
  }
}

.a_accordion__body {
  padding: var(--a_accordion_body_padding_y) var(--a_accordion_body_padding_x);
  border-radius: inherit;
}

.a_accordion__collapse_box {
  display: none;
  border-radius: inherit;
}
.a_accordion__collapse_box_show {
  display: block;
}

// Gap
.a_accordion__item.a_accordion__item_with_gap {
  margin-bottom: var(--a_accordion_with_gap_margin_bottom);
  border: var(--a_accordion_border_width) solid var(--a_accordion_border_color);
  border-radius: var(--a_accordion_border_radius);
}
.a_accordion__button.a_accordion__button_with_gap {
  border-radius: var(--a_accordion_border_radius) var(--a_accordion_border_radius) 0 0;
  &.a_accordion__button_collapsed {
    border-radius: var(--a_accordion_border_radius);
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_accordion) {
  // item
  --a_accordion_color: var(--a_color_text); // Text color of an item.
  --a_accordion_bg: var(--a_color_surface); // Background of an item.
  --a_accordion_font_size: inherit; // Font size of the accordion.
  --a_accordion_border_color: var(--a_border_color); // Border color of the items.
  --a_accordion_border_width: var(--a_border_width); // Border width of the items.
  --a_accordion_border_radius: var(--a_border_radius); // Corner radius of the first and last item, or of every item with a gap.
  // header button
  --a_accordion_btn_padding_x: calc(1.25rem * var(--a_density)); // Horizontal padding of the header button.
  --a_accordion_btn_padding_y: var(--a_space_md); // Vertical padding of the header button.
  --a_accordion_btn_color: var(--a_color_text); // Text color of a closed header button.
  --a_accordion_btn_bg: var(--a_accordion_bg); // Background of a closed header button.
  --a_accordion_btn_icon_width: 1.25rem; // Size of the open/close icon.
  --a_accordion_btn_focus_box_shadow: var(--a_focus_ring); // Focus ring of the header button.
  --a_accordion_btn_hover_bg: var(--a_color_surface_subtle); // Background of a hovered header button.
  // content
  --a_accordion_body_padding_x: calc(1.25rem * var(--a_density)); // Horizontal padding of the content.
  --a_accordion_body_padding_y: var(--a_space_md); // Vertical padding of the content.
  // open item
  --a_accordion_active_color: var(--a_color_primary_text_emphasis); // Text color of an open header button.
  --a_accordion_active_bg: var(--a_color_primary_bg_subtle); // Background of an open header button.
  --a_accordion_with_gap_margin_bottom: var(--a_space_md); // Space between items when they are separated by a gap.
}
`,"../../../../../../scss/utils/alert.scss":`@use "../tokens/settings";

.a_alert {
  position: relative;
  padding: var(--a_alert_padding_y) var(--a_alert_padding_x);
  margin-bottom: var(--a_alert_margin_bottom);
  color: var(--a_alert_color);
  background-color: var(--a_alert_bg);
  border: var(--a_alert_border);
  border-radius: var(--a_alert_border_radius);
  display: flex;
  align-items: center;
  text-align: var(--a_alert_text_align);

  .a_alert__icon {
    width: var(--a_alert_icon_size);
    height: var(--a_alert_icon_size);
    margin-right: var(--a_alert_icon_margin_right);
  }
}

.a_alert__link {
  font-weight: 700;
  color: var(--a_alert_link_color);
}

.a_alert__parent_closable {
  position: relative;
  .a_alert {
    padding-right: calc(var(--a_alert_padding_x) * 3);
  }
  .a_btn_close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: calc(var(--a_alert_padding_y) * 1.25) var(--a_alert_padding_x);
  }
}

.a_alert__content {
  width: 100%;
}

@each $state in settings.$variant-colors {
  .a_alert_#{$state} {
    --a_alert_color: var(--a_color_#{$state}_text_emphasis);
    --a_alert_bg: var(--a_color_#{$state}_bg_subtle);
    --a_alert_border_color: var(--a_color_#{$state}_border_subtle);
    --a_alert_link_color: var(--a_color_#{$state}_text_emphasis);
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_alert) {
  --a_alert_bg: transparent; // Background. Set by the color classes (e.g. .a_alert_danger).
  --a_alert_padding_x: var(--a_space_md); // Horizontal padding. A closable alert has three times this padding on the right for the close button.
  --a_alert_padding_y: var(--a_space_md); // Vertical padding.
  --a_alert_margin_bottom: var(--a_space_md); // Space below the alert.
  --a_alert_color: inherit; // Text color. Set by the color classes.
  --a_alert_border_color: transparent; // Border color. Set by the color classes.
  --a_alert_border: var(--a_border_width) solid var(--a_alert_border_color); // Border shorthand (width, style, color).
  --a_alert_border_radius: var(--a_border_radius); // Corner radius.
  --a_alert_icon_size: 1.5rem; // Size of the icon.
  --a_alert_icon_margin_right: .5rem; // Space between the icon and the text.
  --a_alert_text_align: left; // Text alignment.
  --a_alert_link_color: inherit; // Color of a link inside the alert (.a_alert__link). Set by the color classes.
}
`,"../../../../../../scss/utils/backdrop.scss":`.a_backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--a_backdrop_z_index);
  width: 100vw;
  height: 100vh;
  background-color: var(--a_backdrop_bg);
}
.a_backdrop_confirm {
  --a_backdrop_z_index: var(--a_z_index_backdrop_confirm);
}
.a_backdrop_fade {
  transition: opacity var(--a_duration_normal) linear;
  opacity: 0;
}
.a_backdrop_show {
  opacity: var(--a_backdrop_opacity);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_backdrop) {
  --a_backdrop_z_index: var(--a_z_index_backdrop); // Stacking order of the backdrop. Confirm dialogs use a higher value.
  --a_backdrop_bg: hsl(var(--a_gray_h) 30% 8%); // Color of the backdrop.
  --a_backdrop_opacity: .55; // Opacity of the visible backdrop.
}
`,"../../../../../../scss/utils/badge.scss":`@use "../tokens/settings";

.a_badge {
  display: inline-block;
  padding: var(--a_badge_padding_y) var(--a_badge_padding_x);
  font-size: var(--a_badge_font_size);
  font-weight: var(--a_badge_font_weight);
  line-height: 1;
  color: var(--a_badge_color);
  background-color: var(--a_badge_bg);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--a_badge_border_radius);
}

.a_pill_rounded {
  border-radius: var(--a_border_radius_pill) !important;
}

@each $state in settings.$variant-colors {
  .a_badge_#{$state} {
    --a_badge_color: var(--a_color_#{$state}_text_emphasis);
    --a_badge_bg: var(--a_color_#{$state}_bg_subtle);
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_badge) {
  --a_badge_padding_x: .65em; // Horizontal padding. Relative to the font size.
  --a_badge_padding_y: .35em; // Vertical padding. Relative to the font size.
  --a_badge_font_size: .75em; // Font size, relative to the surrounding text.
  --a_badge_font_weight: var(--a_font_weight_bold); // Font weight.
  --a_badge_color: var(--a_color_white); // Text color. Set by the color classes (e.g. .a_badge_success).
  --a_badge_bg: var(--a_color_black); // Background. Set by the color classes.
  --a_badge_border_radius: var(--a_border_radius); // Corner radius. .a_pill_rounded makes it fully round.
}
`,"../../../../../../scss/utils/border.scss":`@use "../tokens/settings";

.a_border {
  border: var(--a_border_width) var(--a_border_style) var(--a_border_color) !important;
}
.a_border_top {
  border-top: var(--a_border_width) var(--a_border_style) var(--a_border_color) !important;
}
.a_border_right {
  border-right: var(--a_border_width) var(--a_border_style) var(--a_border_color) !important;
}
.a_border_bottom {
  border-bottom: var(--a_border_width) var(--a_border_style) var(--a_border_color) !important;
}
.a_border_left {
  border-left: var(--a_border_width) var(--a_border_style) var(--a_border_color) !important;
}

@each $state in settings.$variant-colors {
  .a_border_#{$state} {
    --a_border_opacity: 1;
    border-color: hsl(var(--a_#{$state}_h) var(--a_#{$state}_s) var(--a_#{$state}_l) / var(--a_border_opacity)) !important;
  }
}
.a_border_1 {
  border-width: 1px !important;
}
.a_border_2 {
  border-width: 2px !important;
}
.a_border_3 {
  border-width: 3px !important;
}
.a_border_4 {
  border-width: 4px !important;
}
.a_border_5 {
  border-width: 5px !important;
}

.a_border_0 {
  border: 0 !important;
}
.a_border_top_0 {
  border-top: 0 !important;
}
.a_border_right_0 {
  border-right: 0 !important;
}
.a_border_bottom_0 {
  border-bottom: 0 !important;
}
.a_border_left_0 {
  border-left: 0 !important;
}
`,"../../../../../../scss/utils/border_radius.scss":`.a_rounded_inherit {
  border-radius: inherit !important;
}
.a_rounded_top_inherit {
  border-top-left-radius: inherit !important;
  border-top-right-radius: inherit !important;
}
.a_rounded_right_inherit {
  border-top-right-radius: inherit !important;
  border-bottom-right-radius: inherit !important;
}
.a_rounded_bottom_inherit {
  border-bottom-left-radius: inherit !important;
  border-bottom-right-radius: inherit !important;
}
.a_rounded_left_inherit {
  border-top-left-radius: inherit !important;
  border-bottom-left-radius: inherit !important;
}
.a_rounded_top_left_inherit {
  border-top-left-radius: inherit !important;
}
.a_rounded_top_right_inherit {
  border-top-right-radius: inherit !important;
}
.a_rounded_bottom_right_inherit {
  border-bottom-right-radius: inherit !important;
}
.a_rounded_bottom_left_inherit {
  border-bottom-left-radius: inherit !important;
}
.a_rounded_0 {
  border-radius: 0 !important;
}
.a_rounded_top_0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.a_rounded_right_0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.a_rounded_bottom_0 {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.a_rounded_left_0 {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.a_rounded_top_left_0 {
  border-top-left-radius: 0 !important;
}
.a_rounded_top_right_0 {
  border-top-right-radius: 0 !important;
}
.a_rounded_bottom_right_0 {
  border-bottom-right-radius: 0 !important;
}
.a_rounded_bottom_left_0 {
  border-bottom-left-radius: 0 !important;
}

.a_rounded_circle {
  border-radius: 50% !important;
}
`,"../../../../../../scss/utils/breakpoint.scss":`$mobile: 768px;
$tablet: 1023px;
$desktop: 1215px;

$desktop_min: 1024px;

$all: (
    (
        class: "mobile",
        max: "768px",
    ),
    (
        class: "tablet",
        min: "769px",
        max: "1023px",
    ),
    (
        class: "touch",
        max: "1023px",
    ),
    (
        class: "desktop",
        min: "1024px",
        max: "1215px",
    ),
    (
        class: "widescreen",
        min: "1216px",
        max: "1407px",
    ),
    (
        class: "fullhd",
        min: "1408px",
        max: "1599px",
    ),
    (
        class: "large",
        min: "1600px",
    ),
);

@function getBreakpointWithPrefix($class) {
    @if $class {
        @return "_" + $class;
    } @else {
        @return "";
    }
}
`,"../../../../../../scss/utils/button.scss":`@use "focus";
@use "../tokens/settings";

.a_btn {
  display: inline-block;
  padding: var(--a_btn_padding_y) var(--a_btn_padding_x);
  font-family: var(--a_btn_font_family);
  font-size: var(--a_btn_font_size);
  font-weight: var(--a_btn_font_weight);
  line-height: var(--a_btn_line_height);
  color: var(--a_btn_color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--a_btn_border_width) solid var(--a_btn_border_color);
  border-radius: var(--a_btn_border_radius);
  background-color: var(--a_btn_bg);
  transition: var(--a_btn_transition);

  &.readonly {
    cursor: default;
    user-select: auto;
  }

  @include focus.focus-visible;

  .a_btn_check:focus-visible + & {
    @include focus.focus-ring;
  }

  &:not(.readonly) {
    &:hover {
      color: var(--a_btn_hover_color);
      background-color: var(--a_btn_hover_bg);
      border-color: var(--a_btn_hover_border_color);
    }
    .a_btn_check + &:hover {
      // override for the checkbox/radio buttons
      color: var(--a_btn_color);
      background-color: var(--a_btn_bg);
      border-color: var(--a_btn_border_color);
    }

    &:not(.a_btn_link):hover {
      text-decoration: none;
    }

    .a_btn_check:checked + &,
    :not(.a_btn_check) + &:active,
    &:first-child:active,
    &.active {
      color: var(--a_btn_active_color);
      background-color: var(--a_btn_active_bg);
      border-color: var(--a_btn_active_border_color);
    }

    &.disabled,
    &:disabled,
    fieldset:disabled & {
      color: var(--a_btn_disabled_color);
      background-color: var(--a_btn_disabled_bg);
      border-color: var(--a_btn_disabled_border_color);
      opacity: var(--a_btn_disabled_opacity);
      cursor: not-allowed;
    }
  }
}

.a_btn_group_large > .a_btn,
.a_btn_large {
  --a_btn_padding_y: calc(.5rem * var(--a_density));
  --a_btn_padding_x: calc(1rem * var(--a_density));
  --a_btn_font_size: var(--a_font_size_lg);
  --a_btn_border_radius: var(--a_border_radius_large);
}

.a_btn_group_small > .a_btn,
.a_btn_small {
  --a_btn_padding_y: calc(.25rem * var(--a_density));
  --a_btn_padding_x: calc(.5rem * var(--a_density));
  --a_btn_font_size: var(--a_font_size_sm);
  --a_btn_border_radius: var(--a_border_radius_small);
}

// Variants. All of them only map color tokens, so a change of
// --a_<color>_h / _s / _l at runtime changes every button.
@each $name in settings.$variant-colors {
  .a_btn_#{$name} {
    --a_btn_color: var(--a_color_#{$name}_contrast);
    --a_btn_bg: var(--a_color_#{$name});
    --a_btn_border_color: var(--a_color_#{$name});
    --a_btn_hover_color: var(--a_color_#{$name}_contrast);
    --a_btn_hover_bg: var(--a_color_#{$name}_hover);
    --a_btn_hover_border_color: var(--a_color_#{$name}_hover);
    --a_btn_active_color: var(--a_color_#{$name}_contrast);
    --a_btn_active_bg: var(--a_color_#{$name}_active);
    --a_btn_active_border_color: var(--a_color_#{$name}_active);
    --a_btn_disabled_color: var(--a_color_#{$name}_contrast);
    --a_btn_disabled_bg: var(--a_color_#{$name});
    --a_btn_disabled_border_color: var(--a_color_#{$name});
  }
}

@each $name in settings.$variant-colors {
  .a_btn_outline_#{$name} {
    --a_btn_color: var(--a_color_#{$name}_text_emphasis);
    --a_btn_bg: transparent;
    --a_btn_border_color: var(--a_color_#{$name});
    --a_btn_hover_color: var(--a_color_#{$name}_contrast);
    --a_btn_hover_bg: var(--a_color_#{$name});
    --a_btn_hover_border_color: var(--a_color_#{$name});
    --a_btn_active_color: var(--a_color_#{$name}_contrast);
    --a_btn_active_bg: var(--a_color_#{$name}_active);
    --a_btn_active_border_color: var(--a_color_#{$name}_active);
    --a_btn_disabled_color: var(--a_color_#{$name}_text_emphasis);
    --a_btn_disabled_bg: transparent;
    --a_btn_disabled_border_color: var(--a_color_#{$name});
  }
}

@each $name in settings.$variant-colors {
  .a_btn_transparent_#{$name} {
    --a_btn_color: var(--a_color_#{$name}_text_emphasis);
    --a_btn_bg: transparent;
    --a_btn_border_color: transparent;
    --a_btn_hover_color: var(--a_color_#{$name}_text_emphasis);
    --a_btn_hover_bg: var(--a_color_#{$name}_bg_subtle);
    --a_btn_hover_border_color: var(--a_color_#{$name}_bg_subtle);
    --a_btn_active_color: var(--a_color_#{$name}_text_emphasis);
    --a_btn_active_bg: var(--a_color_#{$name}_border_subtle);
    --a_btn_active_border_color: var(--a_color_#{$name}_border_subtle);
    --a_btn_disabled_color: var(--a_color_#{$name}_text_emphasis);
    --a_btn_disabled_bg: transparent;
    --a_btn_disabled_border_color: transparent;
  }
}

// Neutral toggle button (e.g. icon choice). Selected state: .a_btn_switch_active
.a_btn_switch {
  --a_btn_color: var(--a_color_text);
  --a_btn_bg: var(--a_color_surface);
  --a_btn_border_color: var(--a_border_color_strong);
  --a_btn_hover_color: var(--a_color_text);
  --a_btn_hover_bg: var(--a_color_surface_subtle);
  --a_btn_hover_border_color: var(--a_color_primary);
  --a_btn_active_color: var(--a_color_primary_text_emphasis);
  --a_btn_active_bg: var(--a_color_primary_bg_subtle);
  --a_btn_active_border_color: var(--a_color_primary);
  --a_btn_disabled_color: var(--a_color_text_muted);
  --a_btn_disabled_bg: var(--a_color_surface);
  --a_btn_disabled_border_color: var(--a_border_color);
}
.a_btn_switch_active {
  --a_btn_color: var(--a_color_primary_text_emphasis);
  --a_btn_bg: var(--a_color_primary_bg_subtle);
  --a_btn_border_color: var(--a_color_primary);
  --a_btn_hover_color: var(--a_color_primary_text_emphasis);
  --a_btn_hover_bg: var(--a_color_primary_bg_subtle);
  --a_btn_hover_border_color: var(--a_color_primary_hover);
  --a_btn_active_color: var(--a_color_primary_text_emphasis);
  --a_btn_active_bg: var(--a_color_primary_border_subtle);
  --a_btn_active_border_color: var(--a_color_primary_active);
  --a_btn_disabled_color: var(--a_color_primary_text_emphasis);
  --a_btn_disabled_bg: var(--a_color_primary_bg_subtle);
  --a_btn_disabled_border_color: var(--a_color_primary);
}

.a_btn_link {
  --a_btn_font_weight: var(--a_font_weight_normal);
  --a_btn_color: var(--a_color_link);
  --a_btn_bg: transparent;
  --a_btn_border_color: transparent;
  --a_btn_hover_color: var(--a_color_link_hover);
  --a_btn_hover_bg: transparent;
  --a_btn_hover_border_color: transparent;
  --a_btn_active_color: var(--a_color_link_hover);
  --a_btn_active_bg: transparent;
  --a_btn_active_border_color: transparent;
  --a_btn_disabled_color: var(--a_color_text_muted);
  --a_btn_disabled_bg: transparent;
  --a_btn_disabled_border_color: transparent;
  --a_btn_text_decoration: underline;

  text-decoration: var(--a_btn_text_decoration);
  user-select: auto;

  &:hover,
  &:focus-visible {
    --a_btn_text_decoration: underline;
  }
}

.a_btn_check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;

  &[disabled],
  &:disabled {
    + .a_btn {
      filter: none;
      opacity: var(--a_btn_disabled_opacity);
    }
  }
}

// ---------------------------------------------------------------------------
// Component tokens (specificity 0, every variant/modifier overrides them)
// ---------------------------------------------------------------------------
:where(.a_btn) {
  // general
  --a_btn_padding_x: var(--a_control_padding_x); // Horizontal padding. Changed by .a_btn_small and .a_btn_large.
  --a_btn_padding_y: var(--a_control_padding_y); // Vertical padding. Changed by .a_btn_small and .a_btn_large.
  --a_btn_font_family: inherit; // Font family.
  --a_btn_font_size: var(--a_body_font_size); // Font size. Changed by .a_btn_small and .a_btn_large.
  --a_btn_font_weight: var(--a_font_weight_medium); // Font weight. Link buttons use the normal weight.
  --a_btn_line_height: var(--a_body_line_height); // Line height.
  --a_btn_color: var(--a_color_text); // Text color. Set by the variant classes (e.g. .a_btn_primary, .a_btn_outline_primary).
  --a_btn_bg: transparent; // Background. Set by the variant classes.
  --a_btn_border_width: var(--a_border_width); // Border width.
  --a_btn_border_color: transparent; // Border color. Set by the variant classes.
  --a_btn_border_radius: var(--a_border_radius); // Corner radius. Changed by .a_btn_small and .a_btn_large.
  // hover
  --a_btn_hover_color: var(--a_btn_color); // Text color on hover.
  --a_btn_hover_bg: var(--a_btn_bg); // Background on hover.
  --a_btn_hover_border_color: var(--a_btn_border_color); // Border color on hover.
  // active
  --a_btn_active_color: var(--a_btn_color); // Text color while pressed, for .active and for a checked checkbox/radio button.
  --a_btn_active_bg: var(--a_btn_bg); // Background while pressed, for .active and for a checked checkbox/radio button.
  --a_btn_active_border_color: var(--a_btn_border_color); // Border color while pressed, for .active and for a checked checkbox/radio button.
  // disabled
  --a_btn_disabled_color: var(--a_btn_color); // Text color of a disabled button.
  --a_btn_disabled_bg: var(--a_btn_bg); // Background of a disabled button.
  --a_btn_disabled_border_color: var(--a_btn_border_color); // Border color of a disabled button.
  --a_btn_disabled_opacity: .65; // Opacity of a disabled button.
  // animation
  --a_btn_transition: var(--a_transition_colors); // Transition of the colors on hover and press.
}
`,"../../../../../../scss/utils/button_close.scss":`@use "focus";

// Close button: an AButton / AElement with the Close icon (src/AIcon/Icons/Close.js).
// The size follows the font size, e.g. class "a_fs_3" makes it bigger.
.a_btn_close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: var(--a_btn_close_size);
  height: var(--a_btn_close_size);
  padding: var(--a_btn_close_padding);
  color: var(--a_btn_close_color);
  background-color: var(--a_btn_close_bg);
  border: 0;
  border-radius: var(--a_btn_close_border_radius);
  line-height: 1;
  cursor: pointer;
  transition: var(--a_transition_colors);

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: var(--a_btn_close_hover_color);
    background-color: var(--a_btn_close_hover_bg);
  }

  &:disabled,
  &.disabled {
    opacity: var(--a_btn_close_disabled_opacity);
    cursor: not-allowed;
  }

  @include focus.focus-visible;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_btn_close) {
  --a_btn_close_size: 1em; // Size of the icon. Relative to the font size, so a font size class makes the button bigger.
  --a_btn_close_padding: .375em; // Padding around the icon.
  --a_btn_close_color: var(--a_color_text_muted); // Color of the icon.
  --a_btn_close_bg: transparent; // Background.
  --a_btn_close_hover_color: var(--a_color_text); // Color of the icon on hover.
  --a_btn_close_hover_bg: var(--a_color_gray_200); // Background on hover.
  --a_btn_close_border_radius: var(--a_border_radius); // Corner radius.
  --a_btn_close_disabled_opacity: .5; // Opacity of a disabled button.
}
`,"../../../../../../scss/utils/button_group.scss":`
.a_btn_group,
.a_btn_group_vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  > .a_btn {
    position: relative;
    flex: 1 1 auto;
  }
}
.a_btn_group {
  --a_btn_group_border_radius: var(--a_border_radius);

  border-radius: var(--a_btn_group_border_radius);
  & > &:not(:last-child) > .a_btn,
  & > .a_btn:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > &:not(:first-child) > .a_btn,
  & > .a_btn:nth-child(n+3),
  & > :not(.a_btn_check) + .a_btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > &:not(:first-child),
  & > :not(.a_btn_check:first-child) + .a_btn {
    margin-left: calc(-1 * var(--a_btn_border_width, var(--a_border_width)));
  }
}

.a_btn_group_vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > .a_btn,
  & > .a_btn_group {
    width: 100%;
  }
  & > .a_btn_group:not(:last-child) > .a_btn,
  & > .a_btn:not(:last-child) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > .a_btn_group:not(:first-child) > .a_btn,
  & > .a_btn ~ .a_btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  & > .a_btn_group:not(:first-child),
  & > .a_btn:not(:first-child) {
    margin-top: calc(-1 * var(--a_btn_border_width, var(--a_border_width)));
  }
}

.a_btn_group_vertical >.a_btn.active,
.a_btn_group_vertical >.a_btn:active,
.a_btn_group_vertical >.a_btn:focus-visible,
.a_btn_group_vertical >.a_btn:hover,
.a_btn_group >.a_btn.active,
.a_btn_group >.a_btn:active,
.a_btn_group >.a_btn:focus-visible,
.a_btn_group >.a_btn:hover {
  z-index: 1;
}`,"../../../../../../scss/utils/checkbox_radio.scss":`// Custom checkbox and radio.
// The native input is visually hidden; the label draws the box (::before)
// and the mark (::after, a mask in the current color).
@use "focus";

.a_custom_control {
  position: relative;
  z-index: 1;
  min-height: var(--a_custom_control_input_width);
  print-color-adjust: exact;
  padding-left: 0;
  display: flex;
  hyphens: auto;
  word-break: break-word;
}
.a_custom_control_invalid {
  --a_custom_control_input_border_color: var(--a_custom_control_error_color);
  --a_custom_control_input_hover_border_color: var(--a_custom_control_error_color);
  --a_custom_control_input_checked_bg: var(--a_custom_control_error_color);
  --a_custom_control_input_checked_border_color: var(--a_custom_control_error_color);
  --a_custom_control_label_color: var(--a_custom_control_error_color);
}
.a_custom_control_input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  position: absolute;
  left: 0;
  z-index: -1;
  width: var(--a_custom_control_input_width);
  height: var(--a_custom_control_input_width);
  opacity: 0;
  box-sizing: border-box;
  padding: 0;
  overflow: visible;
}
.a_custom_control_label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
  padding: var(--a_custom_control_label_padding);
  display: flex;
  align-items: center;
  width: var(--a_custom_control_label_width);
  border-radius: var(--a_custom_control_border_radius);
  color: var(--a_custom_control_label_color);
  cursor: pointer;
  transition: var(--a_transition_colors);

  &:hover {
    background-color: var(--a_custom_control_hover_bg);
  }

  // box
  &::before {
    display: block;
    flex-shrink: 0;
    pointer-events: none;
    content: "";
    width: var(--a_custom_control_input_width);
    height: var(--a_custom_control_input_width);
    background-color: var(--a_custom_control_input_bg);
    border: var(--a_custom_control_input_border_width) solid var(--a_custom_control_input_border_color);
    border-radius: var(--a_custom_control_input_border_radius);
    transition: var(--a_transition_colors);
  }
  &:hover::before {
    border-color: var(--a_custom_control_input_hover_border_color);
  }

  // mark
  &::after {
    position: absolute;
    top: 50%;
    left: var(--a_custom_control_label_padding);
    width: var(--a_custom_control_input_width);
    height: var(--a_custom_control_input_width);
    transform: translateY(-50%);
    pointer-events: none;
    content: "";
    background-color: var(--a_custom_control_input_checked_color);
    mask: var(--a_custom_control_mark) center / var(--a_custom_control_mark_size) no-repeat;
    opacity: 0;
  }

  .a_custom_control_input:focus-visible ~ &::before {
    @include focus.focus-ring;
  }

  .a_custom_control_input:checked ~ &::before,
  .a_custom_checkbox .a_custom_control_input:indeterminate ~ &::before {
    border-color: var(--a_custom_control_input_checked_border_color);
    background-color: var(--a_custom_control_input_checked_bg);
  }
  .a_custom_control_input:checked ~ &::after,
  .a_custom_checkbox .a_custom_control_input:indeterminate ~ &::after {
    opacity: 1;
  }
  .a_custom_checkbox .a_custom_control_input:indeterminate ~ & {
    --a_custom_control_mark: var(--a_custom_control_mark_indeterminate);
  }

  // disabled
  .a_custom_control_input:disabled ~ & {
    color: var(--a_custom_control_label_disabled_color);
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
    }
  }
  .a_custom_control_input:disabled ~ &::before {
    background-color: var(--a_custom_control_input_disabled_bg);
    border-color: var(--a_custom_control_input_disabled_border_color);
  }
  .a_custom_control_input:disabled:checked ~ &::before,
  .a_custom_checkbox .a_custom_control_input:disabled:indeterminate ~ &::before {
    background-color: var(--a_custom_control_input_checked_disabled_bg);
    border-color: var(--a_custom_control_input_checked_disabled_bg);
  }

  // radio
  .a_custom_radio & {
    --a_custom_control_input_border_radius: 50%;
    --a_custom_control_mark: var(--a_custom_control_mark_radio);
  }
}
.a_custom_control_label__text {
  margin-left: var(--a_custom_control_label_text_margin_left);
}
.a_custom_control_label_width_auto {
  --a_custom_control_label_width: auto;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_custom_control) {
  // label
  --a_custom_control_border_radius: var(--a_border_radius); // Corner radius of the label area (visible on hover).
  --a_custom_control_label_padding: var(--a_space_sm); // Padding of the label area around the box and the text.
  --a_custom_control_label_width: 100%; // Width of the label area. The class a_custom_control_label_width_auto sets it to auto.
  --a_custom_control_label_color: inherit; // Text color of the label.
  --a_custom_control_label_disabled_color: var(--a_color_text_muted); // Text color of the label of a disabled checkbox or radio.
  --a_custom_control_label_text_margin_left: var(--a_space_sm); // Space between the box and the label text.
  --a_custom_control_hover_bg: var(--a_color_gray_100); // Background of the label area on hover.
  // box
  --a_custom_control_input_width: 1.25rem; // Width and height of the box (checkbox) or circle (radio).
  --a_custom_control_input_bg: var(--a_color_surface); // Background of an unchecked box.
  --a_custom_control_input_border_color: var(--a_border_color_strong); // Border color of an unchecked box.
  --a_custom_control_input_hover_border_color: var(--a_color_primary); // Border color of the box on hover.
  --a_custom_control_input_border_width: calc(var(--a_border_width) * 1.5); // Border width of the box.
  --a_custom_control_input_border_radius: var(--a_border_radius_small); // Corner radius of the checkbox box. Radio buttons are always round.
  // checked
  --a_custom_control_input_checked_color: var(--a_color_primary_contrast); // Color of the check mark, the indeterminate dash and the radio dot.
  --a_custom_control_input_checked_border_color: var(--a_color_primary); // Border color of a checked or indeterminate box.
  --a_custom_control_input_checked_bg: var(--a_color_primary); // Background of a checked or indeterminate box.
  // disabled
  --a_custom_control_input_checked_disabled_bg: var(--a_color_primary_50); // Background and border color of a checked box when disabled.
  --a_custom_control_input_disabled_bg: var(--a_color_gray_200); // Background of an unchecked box when disabled.
  --a_custom_control_input_disabled_border_color: var(--a_border_color); // Border color of an unchecked box when disabled.
  // error
  --a_custom_control_error_color: var(--a_color_danger_text); // Color of the box border, the checked background and the label when the field has errors.
  // mark
  --a_custom_control_mark_size: 70%; // Size of the mark inside the box, relative to the box.
  --a_custom_control_mark_checkbox: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath d='M3.5 8.5l3 3 6-6.5' fill='none' stroke='%23000' stroke-width='2.25' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e"); // Mask image of the check mark.
  --a_custom_control_mark_indeterminate: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath d='M4 8h8' stroke='%23000' stroke-width='2.25' stroke-linecap='round'/%3e%3c/svg%3e"); // Mask image of the indeterminate dash.
  --a_custom_control_mark_radio: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3ccircle cx='8' cy='8' r='3.5'/%3e%3c/svg%3e"); // Mask image of the radio dot.
  --a_custom_control_mark: var(--a_custom_control_mark_checkbox); // Mask image used for the current control. Set from the three mark variables above.
}
`,"../../../../../../scss/utils/color.scss":`@use "../tokens/settings";

// Text and background color utilities.
$colors: (
  "primary", "secondary", "tertiary", "text", "text_muted", "info", "success", "warning", "danger", "light", "dark", "link", "white", "black", "surface", "surface_subtle", "gray_100", "gray_200", "gray_300", "gray_400", "gray_500", "gray_600", "gray_700", "gray_800", "gray_900",
);

@each $color in $colors {
  .a_color_#{$color} {
    color: var(--a_color_#{$color}) !important;
  }
  .a_bg_#{$color} {
    background-color: var(--a_color_#{$color}) !important;
  }
}

@each $name in settings.$variant-colors {
  .a_color_#{$name}_text_emphasis {
    color: var(--a_color_#{$name}_text_emphasis) !important;
  }
  .a_bg_#{$name}_subtle {
    background-color: var(--a_color_#{$name}_bg_subtle) !important;
  }
}

.a_color_transparent {
  color: transparent !important;
}
.a_color_inherit {
  color: inherit !important;
}
.a_bg_transparent {
  background-color: transparent !important;
}
.a_bg_inherit {
  background-color: inherit !important;
}
`,"../../../../../../scss/utils/display.scss":`@use "sass:map";

@use "breakpoint";
@use "mixins";
@use "list_helpers";

$displays: (
    (
        class: "d_inline",
        value: "inline !important",
    ),
    (
        class: "d_inline_block",
        value: "inline-block !important",
    ),
    (
        class: "d_block",
        value: "block !important",
    ),
    (
        class: "d_grid",
        value: "grid !important",
    ),
    (
        class: "d_table",
        value: "table !important",
    ),
    (
        class: "d_table_cell",
        value: "table-cell !important",
    ),
    (
        class: "d_table_row",
        value: "table-row !important",
    ),
    (
        class: "d_flex",
        value: "flex !important",
    ),
    (
        class: "d_inline_flex",
        value: "inline-flex !important",
    ),
    (
        class: "d_none",
        value: "none !important",
    ),
);

$breakpoints_display: list_helpers.prepend(breakpoint.$all, (class: null));

@each $breakpoint in $breakpoints_display {
    $breakpoint-class: map.get($breakpoint, "class");
    $breakpoint-min: map.get($breakpoint, "min");
    $breakpoint-max: map.get($breakpoint, "max");
    @each $display in $displays {
        $display-class: map.get($display, "class");
        $display-value: map.get($display, "value");

        @include mixins.media-width-all($breakpoint-min, $breakpoint-max) {
            .a_#{ $display-class }#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
                display: #{ $display-value };
            }
        }
    }
}

// Hidden, but the element keeps its place (unlike .a_d_none)
.a_visible {
  visibility: visible !important;
}
.a_invisible {
  visibility: hidden !important;
}
`,"../../../../../../scss/utils/dropdown.scss":`@use "focus";

.a_dropdown {
  display: inline-block;
  position: relative;
}
.a_dropdown__caret {
  margin-left: .5rem;
}

.a_dropdown__menu {
  z-index: var(--a_z_index_dropdown);
  min-width: var(--a_dropdown_min_width);
  max-height: var(--a_dropdown_max_height);
  padding: var(--a_dropdown_padding_y) var(--a_dropdown_padding_x);
  margin: 0;
  font-size: var(--a_dropdown_font_size);
  color: var(--a_dropdown_color);
  text-align: left;
  list-style: none;
  background-color: var(--a_dropdown_bg);
  background-clip: padding-box;
  border: var(--a_dropdown_border_width) solid var(--a_dropdown_border_color);
  border-radius: var(--a_dropdown_border_radius);
  box-shadow: var(--a_dropdown_box_shadow);
  overflow-x: auto;
  overflow-y: auto;
  display: none;
}
.a_dropdown__menu_show {
  display: block;
}
.a_dropdown__menu,
.a_dropdown__menu ul,
.a_dropdown__menu li {
  list-style: none;
}
.a_dropdown__menu ul {
  margin: 0;
  padding: 0;
}
.a_dropdown__item {
  display: block;
  width: 100%;
  padding: var(--a_dropdown_item_padding_y) var(--a_dropdown_item_padding_x);
  clear: both;
  font-weight: var(--a_font_weight_normal);
  color: var(--a_dropdown_link_color);
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  border-radius: var(--a_dropdown_item_border_radius);
  font-size: inherit;
  cursor: pointer;
  transition: var(--a_transition_colors);
  &:hover {
    color: var(--a_dropdown_link_hover_color);
    background-color: var(--a_dropdown_link_hover_bg);
    text-decoration: none;
  }
  @include focus.focus-visible($inset: true);
  &:focus-visible {
    text-decoration: none;
  }
  &.active,
  &:active {
    color: var(--a_dropdown_link_active_color);
    text-decoration: none;
    background-color: var(--a_dropdown_link_active_bg);
  }
  &.disabled,
  &:disabled {
    color: var(--a_dropdown_link_disabled_color);
    background-color: transparent;
  }
  &:disabled {
    pointer-events: none;
    cursor: default;
  }
}
.a_dropdown__item_text {
  padding: var(--a_dropdown_item_padding_y) var(--a_dropdown_item_padding_x);
  color: var(--a_dropdown_link_color);
}
.a_dropdown__divider {
  height: 0;
  margin: var(--a_dropdown_divider_margin_y) 0;
  overflow: hidden;
  border-top: var(--a_border_width) solid var(--a_dropdown_divider_color);
  opacity: 1;
}
.a_dropdown__item_header {
  display: block;
  padding: var(--a_dropdown_header_padding_y) var(--a_dropdown_header_padding_x);
  margin-bottom: 0;
  font-size: var(--a_font_size_sm);
  color: var(--a_dropdown_header_color);
  font-weight: var(--a_font_weight_semibold);
  white-space: nowrap;
}
.a_dropdown__group {
  margin: 0;
  padding: 0;
}
.a_dropdown__group + .a_dropdown__group {
  margin-top: 0;
}
.a_dropdown__group__label {
  position: relative;
}
.a_dropdown__group__list {
  margin-left: var(--a_dropdown_group_indent);
  padding-left: var(--a_dropdown_group_indent);
}
.a_dropdown__group_level_0 > .a_dropdown__group__list {
  margin-left: calc(var(--a_dropdown_group_indent) * 0.5);
  padding-left: calc(var(--a_dropdown_group_indent) * 0.75);
}
.a_dropdown__group_level_1 > .a_dropdown__group__list {
  margin-left: var(--a_dropdown_group_indent);
  padding-left: calc(var(--a_dropdown_group_indent) * 0.875);
}
.a_dropdown__group_level_2 > .a_dropdown__group__list {
  margin-left: calc(var(--a_dropdown_group_indent) * 0.875);
  padding-left: var(--a_dropdown_group_indent);
}
.a_dropdown__group_level_3 > .a_dropdown__group__list,
.a_dropdown__group_level_4 > .a_dropdown__group__list,
.a_dropdown__group_level_5 > .a_dropdown__group__list {
  margin-left: calc(var(--a_dropdown_group_indent) * 0.875);
  padding-left: var(--a_dropdown_group_indent);
}
.a_dropdown__group__list > li,
.a_dropdown__group__list > .a_dropdown__group {
  margin-top: 0;
}
.a_dropdown__group__list > li:first-child,
.a_dropdown__group__list > .a_dropdown__group:first-child {
  margin-top: 0;
}
.a_dropdown__group_level_0 > .a_dropdown__group__label {
  padding-top: 0.0625rem;
}
.a_dropdown__group_level_0:first-child > .a_dropdown__group__label {
  padding-top: var(--a_dropdown_header_padding_y);
}
.a_dropdown__group_level_1 > .a_dropdown__group__label {
  padding-left: calc(var(--a_dropdown_header_padding_x) + 0.0625rem);
}
.a_dropdown__group_level_2 > .a_dropdown__group__label {
  padding-left: calc(var(--a_dropdown_header_padding_x) + 0.125rem);
}
.a_dropdown__group_level_3 > .a_dropdown__group__label,
.a_dropdown__group_level_4 > .a_dropdown__group__label,
.a_dropdown__group_level_5 > .a_dropdown__group__label {
  padding-left: calc(var(--a_dropdown_header_padding_x) + 0.1875rem);
}
.a_dropdown__group__list .a_dropdown__item {
  padding-left: calc(var(--a_dropdown_item_padding_x) + 0.0625rem);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_dropdown__menu) {
  // menu
  --a_dropdown_min_width: 10rem; // Minimum width of the menu.
  --a_dropdown_max_height: 31.25rem; // Maximum height of the menu. Longer menus scroll.
  --a_dropdown_padding_x: var(--a_space_xs); // Horizontal padding inside the menu.
  --a_dropdown_padding_y: var(--a_space_xs); // Vertical padding inside the menu.
  --a_dropdown_group_indent: .375rem; // Indent of nested groups. Deeper levels use multiples of it.
  --a_dropdown_font_size: var(--a_body_font_size); // Font size of the menu.
  --a_dropdown_color: var(--a_color_text); // Text color of the menu.
  --a_dropdown_bg: var(--a_color_surface_raised); // Background of the menu.
  --a_dropdown_border_color: var(--a_border_color); // Border color of the menu.
  --a_dropdown_border_radius: var(--a_border_radius_large); // Corner radius of the menu.
  --a_dropdown_border_width: var(--a_border_width); // Border width of the menu.
  --a_dropdown_box_shadow: var(--a_shadow_md); // Shadow of the menu.
  // divider
  --a_dropdown_divider_color: var(--a_border_color); // Color of a divider between items.
  --a_dropdown_divider_margin_y: var(--a_space_xs); // Space above and below a divider.
  // item
  --a_dropdown_link_color: var(--a_color_text); // Text color of an item.
  --a_dropdown_link_hover_color: var(--a_color_text); // Text color of a hovered item.
  --a_dropdown_link_hover_bg: var(--a_color_gray_100); // Background of a hovered item.
  --a_dropdown_link_active_color: var(--a_color_primary_text_emphasis); // Text color of the active (selected or pressed) item.
  --a_dropdown_link_active_bg: var(--a_color_primary_bg_subtle); // Background of the active (selected or pressed) item.
  --a_dropdown_link_disabled_color: var(--a_color_text_muted); // Text color of a disabled item.
  --a_dropdown_item_padding_x: calc(.75rem * var(--a_density)); // Horizontal padding of an item.
  --a_dropdown_item_padding_y: calc(.375rem * var(--a_density)); // Vertical padding of an item.
  --a_dropdown_item_border_radius: var(--a_border_radius); // Corner radius of an item.
  // header
  --a_dropdown_header_color: var(--a_color_text_muted); // Text color of a header or group label.
  --a_dropdown_header_padding_x: calc(.75rem * var(--a_density)); // Horizontal padding of a header or group label.
  --a_dropdown_header_padding_y: .125rem; // Vertical padding of a header or group label.
}
`,"../../../../../../scss/utils/flex.scss":`
.a_flex_row {
  flex-direction: row !important;
}

.a_flex_column {
  flex-direction: column !important;
}

.a_flex_row_reverse {
  flex-direction: row-reverse !important;
}

.a_flex_column_reverse {
  flex-direction: column-reverse !important;
}

.a_flex_wrap {
  flex-wrap: wrap !important;
}

.a_flex_nowrap {
  flex-wrap: nowrap !important;
}

.a_flex_wrap_reverse {
  flex-wrap: wrap-reverse !important;
}

.a_justify_content_start {
  justify-content: flex-start !important;
}
.a_justify_content_end {
  justify-content: flex-end !important;
}
.a_justify_content_center {
  justify-content: center !important;
}
.a_justify_content_between {
  justify-content: space-between !important;
}
.a_justify_content_around {
  justify-content: space-around !important;
}
.a_justify_content_evenly {
  justify-content: space-evenly !important;
}
// align-items
.a_align_items_start {
  align-items: flex-start !important;
}
.a_align_items_end {
  align-items: flex-end !important;
}
.a_align_items_center {
  align-items: center !important;
}
.a_align_items_baseline {
  align-items: baseline !important;
}
.a_align_items_stretch {
  align-items: stretch !important;
}

.a_align_content_start {
  align-content: flex-start !important;
}

.a_align_content_end {
  align-content: flex-end !important;
}

.a_align_content_center {
  align-content: center !important;
}

.a_align_content_between {
  align-content: space-between !important;
}

.a_align_content_around {
  align-content: space-around !important;
}

.a_align_content_stretch {
  align-content: stretch !important;
}
// align-self
.a_align_self_auto {
  align-self: auto !important;
}
.a_align_self_start {
  align-self: flex-start !important;
}
.a_align_self_end {
  align-self: flex-end  !important;
}
.a_align_self_center {
  align-self: center !important;
}
.a_align_self_baseline {
  align-self: baseline !important;
}
.a_align_self_stretch {
  align-self: stretch !important;
}

.a_justify_self_auto {
  justify-self: auto !important;
}
.a_justify_self_start {
  justify-self: flex-start !important;
}
.a_justify_self_end {
  justify-self: flex-end  !important;
}
.a_justify_self_center {
  justify-self: center !important;
}
.a_justify_self_baseline {
  justify-self: baseline !important;
}
.a_justify_self_stretch {
  justify-self: stretch !important;
}

.a_flex_fill {
  flex: 1 1 auto !important;
}
.a_flex_grow_0 {
  flex-grow: 0 !important;
}
.a_flex_grow_1 {
  flex-grow: 1 !important;
}
.a_flex_shrink_0 {
  flex-shrink: 0 !important;
}
.a_flex_shrink_1 {
  flex-shrink: 1 !important;
}`,"../../../../../../scss/utils/float.scss":`
.a_float_left {
  float: left !important;
}
.a_float_right {
  float: right !important;
}
.a_float_none {
  float: none !important;
}`,"../../../../../../scss/utils/focus_ring.scss":`@use "focus";

// Two-colored focus ring of the components for own focusable elements
// (e.g. a card with tabindex). Shown for keyboard focus only.
.a_focus_ring {
  @include focus.focus-visible;
}
.a_focus_ring_inset {
  @include focus.focus-visible(true);
}
`,"../../../../../../scss/utils/global.scss":`@use "focus";

body {
  margin: 0;
  font-family: var(--a_body_font_family);
  font-size: var(--a_body_font_size);
  font-weight: var(--a_body_font_weight);
  line-height: var(--a_body_line_height);
  color: var(--a_color_text);
  background-color: var(--a_color_body_bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

// Accessible default focus for every focusable element (specificity 0, easy to override).
:where(a, button, input, select, textarea, summary, [tabindex]):focus-visible {
  @include focus.focus-ring;
}
`,"../../../../../../scss/utils/grid.scss":`@use "sass:map";

@use "breakpoint";
@use "mixins";
@use "list_helpers";

$column_gaps: (
  0: 0rem,
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
  5: 1.25rem,
  6: 1.5rem,
  7: 1.75rem,
  8: 2rem,
);

$column_count: 12;

.a_columns {
  --a_column_gap_x: 0.75rem;
  --a_column_gap_y: 0.75rem;
  display: flex;
  margin-left: calc(-1 * var(--a_column_gap_x));
  margin-right: calc(-1 * var(--a_column_gap_x));
  > .a_column {
    padding-left: var(--a_column_gap_x);
    padding-right: var(--a_column_gap_x);
  }
}
.a_column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: var(--a_column_gap_y) var(--a_column_gap_x);
}


$breakpoints_grid: list_helpers.prepend(breakpoint.$all, (class: null));

@each $breakpoint in $breakpoints_grid {
  $breakpoint-class: map.get($breakpoint, "class");
  $breakpoint-min: map.get($breakpoint, "min");
  $breakpoint-max: map.get($breakpoint, "max");

  @for $i from 1 through $column_count {
    @include mixins.media-width-all($breakpoint-min, $breakpoint-max) {
      .a_columns_count_#{$i}#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
        --a_column_count: #{$i};
        flex-wrap: wrap;
      }
    }
  }

  @each $gap-key, $gap-value in $column_gaps {
    @include mixins.media-width-all($breakpoint-min, $breakpoint-max) {
      .a_columns_gap_x_#{$gap-key}#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
        --a_column_gap_x: #{$gap-value};
      }
      .a_columns_gap_y_#{$gap-key}#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
        --a_column_gap_y: #{$gap-value};
      }
    }
  }

  @for $i from 1 through $column_count {
    @include mixins.media-width-all($breakpoint-min, $breakpoint-max) {
      .a_column_#{$i}#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
        flex: none;
        width: calc(100% / var(--a_column_count) * #{$i});
      }
    }
  }
  @for $i from 0 through $column_count - 1 {
    @include mixins.media-width-all($breakpoint-min, $breakpoint-max) {
      .a_column_offset_#{$i}#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
        @if $i == 0 {
          margin-left: 0;
        } @else {
          margin-left: calc(100% / var(--a_column_count) * #{$i});
        }
      }
      .a_column_offset_right_#{$i}#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
        @if $i == 0 {
          margin-right: 0;
        } @else {
          margin-right: calc(100% / var(--a_column_count) * #{$i});
        }
      }
    }
  }
}
`,"../../../../../../scss/utils/interaction.scss":`.a_cursor_pointer {
  cursor: pointer !important;
}
.a_cursor_default {
  cursor: default !important;
}
.a_cursor_not_allowed {
  cursor: not-allowed !important;
}
.a_cursor_move {
  cursor: move !important;
}

.a_pointer_events_none {
  pointer-events: none !important;
}
.a_pointer_events_auto {
  pointer-events: auto !important;
}

// One click selects the whole text, e.g. an ID or a token
.a_text_select_all {
  user-select: all !important;
}
.a_text_select_none {
  user-select: none !important;
}
`,"../../../../../../scss/utils/list.scss":`
.a_list_without_styles {
  padding-left: 0;
  list-style: none;
}

.a_list_inline {
  padding-left: 0;
  list-style: none;
}

.a_list_inline_item {
  display: inline-block;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
}

.a_list_inline_item_comma {
  display: inline-block;
  &:not(:last-child) {
    margin-right: 0.5rem;
    &:after {
      content: ",";
    }
  }
}

.a_list_dl {
  display: flex;
  flex-wrap: wrap;
  width: calc(var(--a_list_dl_first_column_width) + var(--a_list_dl_last_column_width));
  background-color: var(--a_list_dl_bg);
  margin-bottom: 0;
  & > dt,
  & > dd {
    word-wrap: break-word !important;
    word-break: break-word !important;
    hyphens: auto !important;
  }
  & > dt {
    width: var(--a_list_dl_first_column_width);
    padding: var(--a_list_dl_item_padding_y) var(--a_list_dl_item_padding_x);
    background-color: var(--a_list_dl_first_column_bg);
    text-align: var(--a_list_dl_dt_text_align);
    &:not(:nth-last-child(2)) {
      border-bottom: var(--a_list_dl_first_column_border_width) solid var(--a_list_dl_first_column_border_color);
    }
  }
  & > dd {
    width: var(--a_list_dl_last_column_width);
    padding: var(--a_list_dl_item_padding_y) var(--a_list_dl_item_padding_x);
    background-color: var(--a_list_dl_last_column_bg);
    &:not(:nth-last-child(1)) {
      border-bottom: var(--a_list_dl_last_column_border_width) solid var(--a_list_dl_last_column_border_color);
    }
  }
}

.a_list_dl_dt_right {
  --a_list_dl_dt_text_align: right;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_list_dl) {
  // columns
  --a_list_dl_first_column_width: 18.75rem; // Width of the term column (dt). The list is as wide as both columns together.
  --a_list_dl_last_column_width: 18.75rem; // Width of the value column (dd).
  --a_list_dl_dt_text_align: left; // Text alignment of the terms. right with .a_list_dl_dt_right.
  --a_list_dl_item_padding_x: var(--a_space_sm); // Horizontal padding of a term and of a value.
  --a_list_dl_item_padding_y: var(--a_space_xs); // Vertical padding of a term and of a value.
  // colors and borders
  --a_list_dl_bg: var(--a_color_surface); // Background of the list.
  --a_list_dl_first_column_bg: var(--a_color_gray_100); // Background of the terms.
  --a_list_dl_last_column_bg: transparent; // Background of the values.
  --a_list_dl_first_column_border_width: 2px; // Width of the line between the terms.
  --a_list_dl_last_column_border_width: 2px; // Width of the line between the values.
  --a_list_dl_first_column_border_color: var(--a_color_surface); // Color of the line between the terms.
  --a_list_dl_last_column_border_color: transparent; // Color of the line between the values.
}
`,"../../../../../../scss/utils/list_columns.scss":`@use "sass:map";

@use "breakpoint";
@use "mixins";
@use "list_helpers";

$breakpoints_list: list_helpers.prepend(breakpoint.$all, (class: null));

.a_list_columns > * {
  page-break-inside: avoid;
  break-inside: avoid-column;
  -webkit-column-break-inside: avoid;
  overflow: hidden; /* fix for firefox */
  display: inline-grid; /* fix for firefox */
  width: 100%;
  @supports (break-inside: avoid-column) {
    overflow: visible;
  }
}

@each $breakpoint in $breakpoints_list {
  $breakpoint-class: map.get($breakpoint, "class");
  $breakpoint-min: map.get($breakpoint, "min");
  $breakpoint-max: map.get($breakpoint, "max");

    @include mixins.media-width-all($breakpoint-min, $breakpoint-max) {
      .a_list_columns_2#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
        column-count: 2;
      }
  }
}
`,"../../../../../../scss/utils/list_group.scss":`@use "focus";
@use "../tokens/settings";

.a_list_group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--a_list_group_border_radius);
}

.a_list_group_gap {
  --a_list_group_item_not_first_margin_top: 1rem;
  --a_list_group_item_not_first_border_top_width: 1px;
  --a_list_group_item_border_radius: var(--a_list_group_border_radius);
}

.a_list_group__item_action {
  width: 100%;
  color: var(--a_list_group_action_color);
  text-align: inherit;

  cursor: pointer;
  transition: var(--a_transition_colors);

  &:hover {
    z-index: 1;
    color: var(--a_list_group_action_hover_color);
    text-decoration: none;
    background-color: var(--a_list_group_action_hover_bg);
  }

  @include focus.focus-visible($inset: true);
  &:focus-visible {
    z-index: 1;
  }

  &:active {
    color: var(--a_list_group_action_active_color);
    background-color: var(--a_list_group_action_active_bg);
  }
}

.a_list_group__item {
  position: relative;
  display: block;
  padding: var(--a_list_group_item_padding_y) var(--a_list_group_item_padding_x);
  color: var(--a_list_group_color);
  text-decoration: none;
  background-color: var(--a_list_group_bg);
  border: var(--a_list_group_border_width) solid var(--a_list_group_border_color);
  border-radius: var(--a_list_group_item_border_radius);
  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  &.disabled,
  &:disabled {
    color: var(--a_list_group_disabled_color);
    background-color: var(--a_list_group_disabled_bg);
    cursor: not-allowed;
  }

  &.active {
    z-index: 2;
    color: var(--a_list_group_active_color);
    background-color: var(--a_list_group_active_bg);
    border-color: var(--a_list_group_active_border_color);
  }

  & + & {
    border-top-width: var(--a_list_group_item_not_first_border_top_width);
    margin-top: var(--a_list_group_item_not_first_margin_top);
    &.active {
      margin-top: calc(var(--a_list_group_border_width) * -1);
      border-top-width: var(--a_list_group_border_width);
    }
  }
}

.a_list_group_edge {
  --a_list_group_border_radius: 0;
  > .a_list_group__item {
    border-width: 0 0 var(--a_list_group_border_width);
    &:last-child {
      border-bottom-width: 0;
    }
  }
}

@each $state in settings.$variant-colors {
  .a_list_group__item_#{$state} {
    --a_list_group_color: var(--a_color_#{$state}_text_emphasis);
    --a_list_group_bg: var(--a_color_#{$state}_bg_subtle);
    --a_list_group_border_color: var(--a_color_#{$state}_border_subtle);
    --a_list_group_action_hover_color: var(--a_color_emphasis_color);
    --a_list_group_action_hover_bg: var(--a_color_#{$state}_border_subtle);
    --a_list_group_action_active_color: var(--a_color_emphasis_color);
    --a_list_group_action_active_bg: var(--a_color_#{$state}_border_subtle);
    --a_list_group_active_color: var(--a_color_#{$state}_bg_subtle);
    --a_list_group_active_bg: var(--a_color_#{$state}_text_emphasis);
    --a_list_group_active_border_color: var(--a_color_#{$state}_text_emphasis);
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_list_group) {
  // general
  --a_list_group_color: var(--a_color_text); // Text color of an item. Set by the color classes (e.g. .a_list_group__item_success).
  --a_list_group_bg: var(--a_color_surface); // Background of an item. Set by the color classes.
  --a_list_group_border_color: var(--a_border_color); // Border color of an item. Set by the color classes.
  --a_list_group_border_width: var(--a_border_width); // Border width of an item.
  --a_list_group_border_radius: var(--a_border_radius_large); // Corner radius of the list. 0 with .a_list_group_edge.
  // item
  --a_list_group_item_padding_x: var(--a_space_md); // Horizontal padding of an item.
  --a_list_group_item_padding_y: var(--a_space_sm); // Vertical padding of an item.
  --a_list_group_item_not_first_margin_top: 0; // Space above every item except the first. 1rem with .a_list_group_gap.
  --a_list_group_item_not_first_border_top_width: 0; // Top border width of every item except the first, so borders do not double. 1px with .a_list_group_gap.
  --a_list_group_item_border_radius: 0; // Corner radius of an item. With .a_list_group_gap every item is rounded like the list.
  // clickable item
  --a_list_group_action_color: var(--a_color_text); // Text color of a clickable item (.a_list_group__item_action).
  --a_list_group_action_hover_color: var(--a_color_text); // Text color of a hovered clickable item.
  --a_list_group_action_hover_bg: var(--a_color_gray_100); // Background of a hovered clickable item.
  --a_list_group_action_active_color: var(--a_color_text); // Text color of a pressed clickable item.
  --a_list_group_action_active_bg: var(--a_color_gray_200); // Background of a pressed clickable item.
  // disabled
  --a_list_group_disabled_color: var(--a_color_text_muted); // Text color of a disabled item.
  --a_list_group_disabled_bg: var(--a_color_surface); // Background of a disabled item.
  // active
  --a_list_group_active_color: var(--a_color_primary_contrast); // Text color of the active item (.active).
  --a_list_group_active_bg: var(--a_color_primary); // Background of the active item.
  --a_list_group_active_border_color: var(--a_color_primary); // Border color of the active item.
}
`,"../../../../../../scss/utils/mixins.scss":`@mixin from($width) {
    @media screen and (min-width: $width) {
        @content;
    }
}

@mixin until($width) {
    @media screen and (max-width: $width) {
        @content;
    }
}

@mixin between($widthMin, $widthMax) {
    @media screen and (min-width: $widthMin) and (max-width: $widthMax) {
        @content;
    }
}

@mixin media-width-all($widthMin, $widthMax) {
    @if $widthMin and $widthMax {
        @media screen and (min-width: $widthMin) and (max-width: $widthMax) {
            @content;
        }
    } @else if $widthMin {
        @media screen and (min-width: $widthMin) {
            @content;
        }
    } @else if $widthMax {
        @media screen and (max-width: $widthMax) {
            @content;
        }
    } @else {
        @content;
    }
}
`,"../../../../../../scss/utils/modal.scss":`@use "breakpoint";
@use "backdrop";

.a_modal_open {
  overflow: hidden;
  padding-right: 0.9375rem;
}

.a_modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--a_modal_z_index);
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.a_modal_confirm {
  --a_modal_z_index: var(--a_z_index_confirm);
}
.a_modal_show {
  display: block;
}
.a_modal_dialog {
  position: relative;
  width: auto;
  margin: var(--a_modal_margin);
  pointer-events: none;
}

.a_modal_content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--a_modal_color);
  pointer-events: auto;
  background-color: var(--a_modal_bg);
  background-clip: padding-box;
  border: var(--a_modal_border_width) solid var(--a_modal_border_color);
  border-radius: var(--a_modal_border_radius);
  box-shadow: var(--a_modal_box_shadow);
  outline: 0;
  .a_modal_dialog_scrollable & {
    max-height: 100%;
    overflow: hidden;
  }
}
.a_modal_dialog_scrollable {
  height: calc(100% - var(--a_modal_margin) * 2);
}
.a_modal_header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: var(--a_modal_header_padding);
  border-bottom: var(--a_modal_header_border_width) solid var(--a_modal_header_border_color);
  border-top-left-radius: var(--a_modal_inner_border_radius);
  border-top-right-radius: var(--a_modal_inner_border_radius);
  .a_btn_close {
    padding: calc(var(--a_modal_header_padding_y) * .5) calc(var(--a_modal_header_padding_x) * .5);
    margin: calc(var(--a_modal_header_padding_y) * -.5) calc(var(--a_modal_header_padding_x) * -.5) calc(var(--a_modal_header_padding_y) * -.5) auto;
  }
}
.a_modal_title {
  margin: 0;
  line-height: var(--a_modal_title_line_height);
}
.a_modal_body {
  position: relative;
  flex: 1 1 auto;
  padding: var(--a_modal_padding);
  .a_modal_dialog_scrollable & {
    overflow-y: auto;
  }
}
.a_modal_footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: calc(var(--a_modal_padding) - var(--a_modal_footer_gap) * .5);
  background-color: var(--a_modal_footer_bg);
  border-top: var(--a_modal_footer_border_width) solid var(--a_modal_footer_border_color);
  border-bottom-right-radius: var(--a_modal_inner_border_radius);
  border-bottom-left-radius: var(--a_modal_inner_border_radius);
  & > * {
    margin: calc(var(--a_modal_footer_gap) * 0.5);
  }
}
@media (min-width: #{breakpoint.$mobile}) {
  .a_modal_large {
    --a_modal_width: min(800px, 90vw);
  }
  .a_modal_xl,
  .a_modal_xxl {
    --a_modal_width: 90vw;
  }
  .a_modal {
    --a_modal_margin: 1.75rem;
  }
  .a_modal_dialog {
    max-width: var(--a_modal_width);
    margin-right: auto;
    margin-left: auto;
  }
  .a_modal_small {
    --a_modal_width: 300px;
  }
}
@media (min-width: #{breakpoint.$tablet}) {
  .a_modal_large {
    --a_modal_width: 800px;
  }
  .a_modal_xl,
  .a_modal_xxl {
    --a_modal_width: 90vw;
  }
}
@media (min-width: #{breakpoint.$desktop}) {
  .a_modal_xl {
    --a_modal_width: 1140px;
  }
  .a_modal_xxl {
    --a_modal_width: 90vw;
  }
}
.a_modal_fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
  .a_modal_content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .a_modal_header,
  .a_modal_footer {
    border-radius: 0;
  }
  .a_modal_body {
    overflow-y: auto;
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_modal) {
  // dialog
  --a_modal_z_index: var(--a_z_index_modal); // Stacking order of the modal. Confirm dialogs use a higher value.
  --a_modal_width: 31.25rem; // Width of the dialog. Changed by the size classes (small, large, xl, xxl).
  --a_modal_padding: var(--a_space_md); // Padding of the body and the footer.
  --a_modal_margin: .5rem; // Space between the dialog and the window edge. 1.75rem from the mobile breakpoint.
  --a_modal_color: var(--a_color_text); // Text color of the dialog.
  --a_modal_bg: var(--a_color_surface_raised); // Background of the dialog.
  --a_modal_border_color: var(--a_border_color_translucent); // Border color of the dialog.
  --a_modal_border_width: var(--a_border_width); // Border width of the dialog.
  --a_modal_border_radius: var(--a_border_radius_xl); // Corner radius of the dialog.
  --a_modal_box_shadow: var(--a_shadow_lg); // Shadow of the dialog.
  --a_modal_inner_border_radius: calc(var(--a_modal_border_radius) - var(--a_modal_border_width)); // Corner radius of the header and the footer, so they fit inside the border.
  // header
  --a_modal_header_padding_x: var(--a_space_md); // Horizontal padding of the header.
  --a_modal_header_padding_y: var(--a_space_md); // Vertical padding of the header.
  --a_modal_header_padding: var(--a_modal_header_padding_y) var(--a_modal_header_padding_x); // Padding of the header. Built from the two values above.
  --a_modal_header_border_color: var(--a_border_color); // Color of the line under the header.
  --a_modal_header_border_width: var(--a_border_width); // Width of the line under the header.
  --a_modal_title_line_height: 1.5; // Line height of the title.
  // footer
  --a_modal_footer_gap: var(--a_space_sm); // Space between the buttons in the footer.
  --a_modal_footer_bg: inherit; // Background of the footer.
  --a_modal_footer_border_color: var(--a_border_color); // Color of the line above the footer.
  --a_modal_footer_border_width: var(--a_border_width); // Width of the line above the footer.
}
`,"../../../../../../scss/utils/notification.scss":`@use "breakpoint";

.a_notification_parent {
  position: fixed;
  width: var(--a_notification_width);
  left: var(--a_notification_left);
  top: var(--a_notification_top);
  z-index: var(--a_notification_z_index);
  text-align: var(--a_notification_text_align);
  max-height: 100vh;
  overflow-y: auto;
}
@media (min-width: #{breakpoint.$tablet}) {
  .a_notification_parent {
    --a_notification_width: 60%;
    --a_notification_left: 15%;
  }
}
@media (min-width: #{breakpoint.$desktop}) {
  .a_notification_parent {
    --a_notification_width: 40%;
    --a_notification_left: 30%;
  }
}

.a_notification {
  box-shadow: var(--a_notification_shadow);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_notification_parent) {
  --a_notification_shadow: var(--a_shadow_lg); // Shadow of a notification.
  --a_notification_width: calc(100% - 2rem); // Width of the notification area. 60% from the tablet breakpoint, 40% from the desktop breakpoint.
  --a_notification_left: 1rem; // Distance of the notification area from the left window edge. Changes with the breakpoints.
  --a_notification_top: 1rem; // Distance of the notification area from the top window edge.
  --a_notification_z_index: var(--a_z_index_notification); // Stacking order of the notification area.
  --a_notification_text_align: center; // Text alignment in the notification area.
}
`,"../../../../../../scss/utils/opacity.scss":`@use "sass:math";

@each $value in (0, 25, 50, 75, 100) {
  .a_opacity_#{$value} {
    opacity: math.div($value, 100) !important;
  }
}
`,"../../../../../../scss/utils/order.scss":`@use "sass:map";

@use "breakpoint";
@use "mixins";
@use "list_helpers";

$orders: (
  (class: "first", value: -1),
  (class: "0", value: 0),
  (class: "1", value: 1),
  (class: "2", value: 2),
  (class: "3", value: 3),
  (class: "4", value: 4),
  (class: "5", value: 5),
  (class: "last", value: 6),
);

$breakpoints_order: list_helpers.prepend(breakpoint.$all, (class: null));

@each $breakpoint in $breakpoints_order {
  $breakpoint-class: map.get($breakpoint, "class");
  @include mixins.media-width-all(map.get($breakpoint, "min"), map.get($breakpoint, "max")) {
    @each $order in $orders {
      .a_order_#{ map.get($order, "class") }#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
        order: map.get($order, "value") !important;
      }
    }
  }
}
`,"../../../../../../scss/utils/overflow.scss":`
.a_overflow_auto {
  overflow: auto !important;
}
.a_overflow_hidden {
  overflow: hidden !important;
}
.a_overflow_visible {
  overflow: visible !important;
}
.a_overflow_scroll {
  overflow: scroll !important;
}

.a_overflow_x_auto {
  overflow-x: auto !important;
}
.a_overflow_x_hidden {
  overflow-x: hidden !important;
}
.a_overflow_x_visible {
  overflow-x: visible !important;
}
.a_overflow_x_scroll {
  overflow-x: scroll !important;
}

.a_overflow_y_auto {
  overflow-y: auto !important;
}
.a_overflow_y_hidden {
  overflow-y: hidden !important;
}
.a_overflow_y_visible {
  overflow-y: visible !important;
}
.a_overflow_y_scroll {
  overflow-y: scroll !important;
}
`,"../../../../../../scss/utils/pagination.scss":`@use "focus";

.a_pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 0;
  list-style: none;
}
.a_pagination__item {
  white-space: nowrap;
}

.a_pagination__item__link {
  position: relative;
  display: block;
  padding: var(--a_pagination_padding_y) var(--a_pagination_padding_x);
  font-size: var(--a_pagination_font_size);
  color: var(--a_pagination_color);
  text-decoration: none;
  background-color: var(--a_pagination_bg);
  border: var(--a_pagination_border_width) solid var(--a_pagination_border_color);
  transition: var(--a_transition_colors);
  cursor: pointer;
  .a_pagination__item:first-child & {
    border-top-left-radius: var(--a_pagination_border_radius);
    border-bottom-left-radius: var(--a_pagination_border_radius);
  }
  .a_pagination__item:last-child & {
    border-top-right-radius: var(--a_pagination_border_radius);
    border-bottom-right-radius: var(--a_pagination_border_radius);
  }
  &:hover {
    z-index: 2;
    color: var(--a_pagination_hover_color);
    background-color: var(--a_pagination_hover_bg);
    border-color: var(--a_pagination_hover_border_color);
  }
  @include focus.focus-visible;
  &:focus-visible {
    z-index: 3;
    color: var(--a_pagination_focus_color);
    background-color: var(--a_pagination_focus_bg);
    box-shadow: var(--a_pagination_focus_box_shadow);
  }
  .disabled > &,
  &.disabled {
    color: var(--a_pagination_disabled_color);
    pointer-events: none;
    background-color: var(--a_pagination_disabled_bg);
    border-color: var(--a_pagination_disabled_border_color);
    cursor: default;
  }
  .active > &,
  &.active {
    z-index: 3;
    color: var(--a_pagination_active_color);
    background-color: var(--a_pagination_active_bg);
    border-color: var(--a_pagination_active_border_color);
  }
}

.pagination_lg {
  --a_pagination_padding_x: calc(1.5rem * var(--a_density));
  --a_pagination_padding_y: calc(.75rem * var(--a_density));
  --a_pagination_font_size: var(--a_font_size_lg);
  --a_pagination_border_radius: var(--a_border_radius_large);
}
.pagination_sm {
  --a_pagination_padding_x: calc(.5rem * var(--a_density));
  --a_pagination_padding_y: calc(.25rem * var(--a_density));
  --a_pagination_font_size: var(--a_font_size_sm);
  --a_pagination_border_radius: var(--a_border_radius_small);
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_pagination) {
  // link
  --a_pagination_padding_x: var(--a_control_padding_x); // Horizontal padding of a page link. Changed by .pagination_sm and .pagination_lg.
  --a_pagination_padding_y: var(--a_control_padding_y); // Vertical padding of a page link. Changed by .pagination_sm and .pagination_lg.
  --a_pagination_font_size: var(--a_body_font_size); // Font size of a page link.
  --a_pagination_color: var(--a_color_link); // Text color of a page link.
  --a_pagination_bg: var(--a_color_surface); // Background of a page link.
  --a_pagination_border_width: var(--a_border_width); // Border width of a page link.
  --a_pagination_border_color: var(--a_border_color); // Border color of a page link.
  --a_pagination_border_radius: var(--a_border_radius); // Corner radius of the first and the last page link.
  // hover
  --a_pagination_hover_color: var(--a_color_link_hover); // Text color of a hovered page link.
  --a_pagination_hover_bg: var(--a_color_gray_100); // Background of a hovered page link.
  --a_pagination_hover_border_color: var(--a_border_color); // Border color of a hovered page link.
  // focus
  --a_pagination_focus_color: var(--a_color_link_hover); // Text color of a page link with keyboard focus.
  --a_pagination_focus_bg: var(--a_color_gray_100); // Background of a page link with keyboard focus.
  --a_pagination_focus_box_shadow: var(--a_focus_ring); // Focus ring of a page link.
  // active
  --a_pagination_active_color: var(--a_color_primary_contrast); // Text color of the current page.
  --a_pagination_active_bg: var(--a_color_primary); // Background of the current page.
  --a_pagination_active_border_color: var(--a_color_primary); // Border color of the current page.
  // disabled
  --a_pagination_disabled_color: var(--a_color_text_muted); // Text color of a disabled link.
  --a_pagination_disabled_bg: var(--a_color_surface); // Background of a disabled link.
  --a_pagination_disabled_border_color: var(--a_border_color); // Border color of a disabled link.
}
`,"../../../../../../scss/utils/position.scss":`
.a_position_static {
  position: static !important;
}

.a_position_relative {
  position: relative !important;
}

.a_position_absolute {
  position: absolute !important;
}

.a_position_fixed {
  position: fixed !important;
}

.a_position_sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.a_position_absolute_all {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
}

.a_top_0 {
  top: 0 !important;
}

.a_top_50 {
  top: 50% !important;
}

.a_top_100 {
  top: 100% !important;
}

.a_bottom_0 {
  bottom: 0 !important;
}

.a_bottom_50 {
  bottom: 50% !important;
}

.a_bottom_100 {
  bottom: 100% !important;
}

.a_start_0 {
  left: 0 !important;
}

.a_start_50 {
  left: 50% !important;
}

.a_start_100 {
  left: 100% !important;
}

.a_end_0 {
  right: 0 !important;
}

.a_end_50 {
  right: 50% !important;
}

.a_end_100 {
  right: 100% !important;
}

.a_translate_middle {
  transform: translate(-50%, -50%) !important;
}

.a_translate_middle_x {
  transform: translateX(-50%) !important;
}

.a_translate_middle_y {
  transform: translateY(-50%) !important;
}
`,"../../../../../../scss/utils/print.scss":`@media print {
  .a_print_none {
    display: none !important;
  }
  .a_print_block {
    display: block !important;
  }
}
`,"../../../../../../scss/utils/progress.scss":`@use "../tokens/settings";

.a_progress {
  display: flex;
  height: var(--a_progress_height);
  overflow: hidden;
  font-size: var(--a_progress_font_size);
  background-color: var(--a_progress_bg);
  border-radius: var(--a_progress_border_radius);
}
.a_progress_reverse {
  flex-direction: row-reverse;
}
.a_progress_small {
  --a_progress_height: .75rem;
  --a_progress_font_size: .625rem;
}
.a_progress_medium {
  --a_progress_height: 1.25rem;
  --a_progress_font_size: 1rem;
}
.a_progress_large {
  --a_progress_height: 1.5rem;
  --a_progress_font_size: 1.25rem;
}
.a_progress__bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--a_progress_bar_color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--a_progress_bar_bg);
  transition: var(--a_progress_bar_transition);
}
.a_progress__bar_indeterminate {
  position: relative;
  animation: 4s a_progress_bar_indeterminate infinite;
}

.a_progress__bar_striped {
  background-image: linear-gradient(-45deg, var(--a_progress_stripe_color) 25%, transparent 0 50%, var(--a_progress_stripe_color) 0 75%, transparent 0);
  background-size: var(--a_progress_height) var(--a_progress_height);
  &.a_progress__bar_striped_flow {
    animation: 1s linear infinite a_progress_bar_flow;
  }
}

@media (prefers-reduced-motion: reduce) {
  .a_progress__bar_striped.a_progress__bar_striped_flow {
    animation: none;
  }
}

@keyframes a_progress_bar_flow {
  from {
    background-position-x: var(--a_progress_height);
  }
}

// The text on the bar follows the background utility class
@each $name in settings.$variant-colors {
  .a_progress__bar.a_bg_#{$name} {
    --a_progress_bar_color: var(--a_color_#{$name}_contrast);
  }
}
@each $step, $l in settings.$gray-steps {
  $text-step: 50;
  @if $step <= 500 {
    $text-step: 900;
  }
  .a_progress__bar.a_bg_gray_#{$step} {
    --a_progress_bar_color: var(--a_color_gray_#{$text-step});
  }
}

@keyframes a_progress_bar_indeterminate {
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_progress) {
  // track
  --a_progress_height: 1rem; // Height of the progress bar. Changed by the size classes (small, medium, large). Also the size of the stripes.
  --a_progress_font_size: .75rem; // Font size of the text on the bar. Changed by the size classes.
  --a_progress_bg: var(--a_color_gray_200); // Background of the track.
  --a_progress_border_radius: var(--a_border_radius_pill); // Corner radius of the track.
  // bar
  --a_progress_bar_color: var(--a_color_primary_contrast); // Text color on the bar. Follows a background class (e.g. .a_bg_success) on the bar.
  --a_progress_bar_bg: var(--a_color_primary); // Color of the bar.
  --a_progress_bar_transition: width var(--a_duration_slow) var(--a_easing); // Transition when the value changes.
  --a_progress_stripe_color: hsl(0 0% 100% / .2); // Color of the stripes of a striped bar.
}
`,"../../../../../../scss/utils/reset.scss":`html,
body,
p,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
  line-height: 1.2;
}

button,
input,
select {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

dl, ol, ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol, ul {
  padding-left: 2rem;
}
`,"../../../../../../scss/utils/screenreader.scss":`// Visually hidden, but readable by screen readers.
.a_sr_only,
.a_sr_only_focusable:not(:focus):not(:focus-within) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  z-index: -1 !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  border: 0 !important;
  clip-path: inset(50%) !important;
}
`,"../../../../../../scss/utils/shadow.scss":`.a_shadow_none {
  box-shadow: none !important;
}
.a_shadow_sm {
  box-shadow: var(--a_shadow_sm) !important;
}
.a_shadow_md {
  box-shadow: var(--a_shadow_md) !important;
}
.a_shadow_lg {
  box-shadow: var(--a_shadow_lg) !important;
}
`,"../../../../../../scss/utils/sizing.scss":`@use "sass:map";

@use "breakpoint";
@use "list_helpers";
@use "mixins";

$is_sizing_important: true;
$sizing_width: (
    property: width,
    class: width,
    values: (
        50px:   50px,
        100px:  100px,
        150px:  150px,
        200px:  200px,
        250px:  250px,
        300px:  300px,
        350px:  350px,
        400px:  400px,
        1:      .25rem,
        2:      .5rem,
        3:      .75rem,
        4:      1rem,
        5:      1.5rem,
        6:      3rem,
        25:     25%,
        50:     50%,
        75:     75%,
        100:    100%,
        1rem:   1rem,
        2rem:   2rem,
        3rem:   3rem,
        auto:   auto,
    ),
);
$sizing_max_width: (
    property: max-width,
    class: max_width,
    values: (
        100: 100%,
    ),
);
$sizing_viewport_width: (
    property: width,
    class: viewport_width,
    values: (
        100: 100vw,
    ),
);
$sizing_min_viewport_width: (
    property: min-width,
    class: min_viewport_width,
    values: (
        100: 100vw,
    ),
);
$sizing_height: (
    property: height,
    class: height,
    values: (
        1:  .25rem,
        2:  .5rem,
        3:  .75rem,
        4:  1rem,
        5:  1.5rem,
        6:  3rem,
        25: 25%,
        50: 50%,
        75: 75%,
        100: 100%,
        1rem:   1rem,
        2rem:   2rem,
        3rem:   3rem,
        auto: auto,
    ),
);
$sizing_max_height: (
    property: max-height,
    class: max_height,
    values: (
        100: 100%,
    ),
);
$sizing_viewport_height: (
    property: height,
    class: viewport_height,
    values: (
        100: 100vh,
    ),
);
$sizing_min_viewport_height: (
    property: min-height,
    class: min_viewport_height,
    values: (
        100: 100vh,
    ),
);

$sizing: (
        "width": $sizing_width,
        "max-width": $sizing_max_width,
        "viewport-width": $sizing_viewport_width,
        "min-viewport-width": $sizing_min_viewport_width,
        "height": $sizing_height,
        "max-height": $sizing_max_height,
        "viewport-height": $sizing_viewport_height,
        "min-viewport-height": $sizing_min_viewport_height,
);

$sizing_important_suffix: "";
@if $is_sizing_important {
  $sizing_important_suffix: " !important";
}

$breakpoints_display: list_helpers.prepend(breakpoint.$all, (class: null));

@each $breakpoint in $breakpoints_display {
  $breakpoint-class: map.get($breakpoint, "class");
  $breakpoint-min: map.get($breakpoint, "min");
  $breakpoint-max: map.get($breakpoint, "max");

  @each $name, $sizing-value in $sizing {
    $property: map.get($sizing-value, "property");
    $class: map.get($sizing-value, "class");
    $values: map.get($sizing-value, "values");

    @each $value-key, $value in $values {
      @include mixins.media-width-all($breakpoint-min, $breakpoint-max) {
        .a_#{$class}_#{$value-key}#{ breakpoint.getBreakpointWithPrefix($breakpoint-class) } {
          #{$property}: #{ $value }#{$sizing_important_suffix};
        }
      }
    }
  }
}

`,"../../../../../../scss/utils/spacing.scss":`@use "sass:string";


$spacing_shortcuts: ("margin": "m", "padding": "p");
$spacing_directions: ("top": "t", "right": "r", "bottom": "b", "left": "l");
$spacing_horizontal: "x";
$spacing_vertical: "y";
$spacing_values: (
    "1": "0.25rem !important",
    "2": "0.5rem !important",
    "3": "0.75rem !important",
    "4": "1rem !important",
    "5": "1.5rem !important",
    "6": "3rem !important",
    "auto": "auto !important",
    "0": "0 !important",
);

@each $property, $shortcut in $spacing_shortcuts {
    @each $name, $value in $spacing_values {
        @if $property != "padding" or string.index($value, "auto") == null {
            // All directions
            .a_#{$shortcut}_#{$name} {
                #{$property}: #{$value};
            }
            // Cardinal directions
            @each $direction, $suffix in $spacing_directions {
                .a_#{$shortcut}#{$suffix}_#{$name} {
                    #{$property}-#{$direction}: #{$value};
                }
            }
            // Horizontal axis
            @if $spacing_horizontal != null {
                .a_#{$shortcut}#{$spacing_horizontal}_#{$name} {
                    #{$property}-left: #{$value};
                    #{$property}-right: #{$value};
                }
            }
            // Vertical axis
            @if $spacing_vertical != null {
                .a_#{$shortcut}#{$spacing_vertical}_#{$name} {
                    #{$property}-top: #{$value};
                    #{$property}-bottom: #{$value};
                }
            }
        }
    }
}

@each $name, $value in $spacing_values {
  @if $name != "auto" {
    .a_gap_#{$name} {
      gap: #{$value};
    }
    .a_gap_x_#{$name} {
      row-gap: #{$value};
    }
    .a_gap_y_#{$name} {
      column-gap: #{$value};
    }
  }
}
`,"../../../../../../scss/utils/spinner.scss":`
.a_spinner {
  border: var(--a_spinner_border_width) solid currentcolor;
  border-right-color: transparent;
  display: inline-block;
  width: var(--a_spinner_width);
  height: var(--a_spinner_height);
  vertical-align: var(--a_spinner_vertical_align);
  border-radius: 50%;
  animation: var(--a_spinner_animation_speed) linear infinite var(--a_spinner_animation_name);
}

.a_spinner_small {
  --a_spinner_width: 1rem;
  --a_spinner_height: 1rem;
  --a_spinner_border_width: 0.2em;
}

.a_spinner_large {
  --a_spinner_width: 3rem;
  --a_spinner_height: 3rem;
  --a_spinner_border_width: 0.3em;
}

@keyframes a_spinner {
  to {
    transform: rotate(360deg);
  }
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_spinner) {
  --a_spinner_width: 2rem; // Width. Changed by .a_spinner_small and .a_spinner_large.
  --a_spinner_height: 2rem; // Height. Changed by .a_spinner_small and .a_spinner_large.
  --a_spinner_vertical_align: -.125em; // Vertical alignment next to text.
  --a_spinner_border_width: .25em; // Thickness of the ring. Changed by .a_spinner_small and .a_spinner_large.
  --a_spinner_animation_speed: 1s; // Duration of one turn.
  --a_spinner_animation_name: a_spinner; // Name of the keyframes of the animation.
}
`,"../../../../../../scss/utils/tooltip.scss":`
.a_tooltip__container {
  z-index: var(--a_z_index_tooltip);
  background-color: var(--a_tooltip_bg);
  color: var(--a_tooltip_color);
  border-radius: var(--a_tooltip_border_radius);
  font-size: var(--a_tooltip_font_size);
  display: inline-block;
  box-shadow: var(--a_tooltip_box_shadow);

  &[data-popper-placement^='top'] > .a_tooltip__arrow {
    bottom: var(--a_tooltip_arrow_shift);
  }
  &[data-popper-placement^='bottom'] > .a_tooltip__arrow {
    top: var(--a_tooltip_arrow_shift);
  }
  &[data-popper-placement^='left'] > .a_tooltip__arrow {
    right: var(--a_tooltip_arrow_shift);
  }
  &[data-popper-placement^='right'] > .a_tooltip__arrow {
    left: var(--a_tooltip_arrow_shift);
  }
}

.a_tooltip__arrow,
.a_tooltip__arrow:before {
  position: absolute;
  width: var(--a_tooltip_arrow_width);
  height: var(--a_tooltip_arrow_height);
  background: inherit;
  box-shadow: var(--a_tooltip_arrow_box_shadow);
}

.a_tooltip__arrow {
  visibility: hidden;
  &:before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }
}

.a_tooltip__wrapper {
  max-height: var(--a_tooltip_max_height);
  overflow-y: auto;
  padding: var(--a_tooltip_padding_y) var(--a_tooltip_padding_x);
  background-color: inherit;
  border-radius: inherit;
  position: relative;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------
:where(.a_tooltip__container) {
  // tooltip
  --a_tooltip_bg: var(--a_color_gray_900); // Background of the tooltip and its arrow.
  --a_tooltip_color: var(--a_color_surface); // Text color of the tooltip.
  --a_tooltip_border_radius: var(--a_border_radius); // Corner radius of the tooltip.
  --a_tooltip_padding_x: .625rem; // Horizontal padding of the tooltip.
  --a_tooltip_padding_y: .375rem; // Vertical padding of the tooltip.
  --a_tooltip_font_size: var(--a_font_size_sm); // Font size of the tooltip.
  // arrow
  --a_tooltip_arrow_width: .5rem; // Width of the arrow.
  --a_tooltip_arrow_height: .5rem; // Height of the arrow.
  --a_tooltip_arrow_shift: -.25rem; // Offset of the arrow from the tooltip edge.
  --a_tooltip_max_height: 25rem; // Maximum height of the tooltip. Longer content scrolls.
  --a_tooltip_box_shadow: var(--a_shadow_md); // Shadow of the tooltip.
  --a_tooltip_arrow_box_shadow: none; // Shadow of the arrow.
}
`,"../../../../../../scss/utils/vertical_align.scss":`.a_align_baseline {
  vertical-align: baseline !important;
}
.a_align_top {
  vertical-align: top !important;
}
.a_align_middle {
  vertical-align: middle !important;
}
.a_align_bottom {
  vertical-align: bottom !important;
}
.a_align_text_top {
  vertical-align: text-top !important;
}
.a_align_text_bottom {
  vertical-align: text-bottom !important;
}
`,"../../../../../../scss/utils/z_index.scss":`// Global layers (values come from the --a_z_index_* tokens)
$layers: ("fixed", "backdrop", "menu_mobile", "modal", "backdrop_confirm", "confirm", "dropdown", "notification", "tooltip", "popup");

@each $layer in $layers {
  .a_z_index_#{$layer} {
    z-index: var(--a_z_index_#{$layer}) !important;
  }
}

// Local stacking inside a component
@each $value in (0, 1, 2, 3) {
  .a_z_index_#{$value} {
    z-index: $value !important;
  }
}
.a_z_index_auto {
  z-index: auto !important;
}
`}),T=e=>`../../../../../../scss/${e}.scss`;function E(e){let t=f(e,`files`),n=f(e,`source`),r=o(()=>t.value?Array.isArray(t.value)?t.value:[t.value]:[]),i=o(()=>r.value.map(e=>{let t=w[T(e)];return t===void 0?(console.warn(`AlohaTableCssVars: scss/${e}.scss not found`),``):t}));return{sourceLocal:o(()=>n.value?n.value:i.value)}}var D={name:`AlohaTableCssVars`,components:{AlohaHighlightjs:e,ATable:t},props:{files:{type:[String,Array],required:!1,default:void 0},source:{type:[String,Array],required:!1,default:void 0},tableLabel:{type:String,required:!1,default:`CSS variables`}},setup(e){let{sourceLocal:t}=E(e),{codeExample:n,columns:r,cssVars:i,selector:a}=C(e,{source:t});return{codeExample:n,columns:r,cssVars:i,selector:a}}},O={key:0,class:`a_p_2`},k={class:`a_mb_2`,lang:`en`},A=[`innerHTML`],j=[`innerHTML`];function M(e,t,o,f,p,m){let h=u(`aloha-highlightjs`),g=u(`a-table`);return e.cssVars.length?(n(),s(`div`,O,[i(`p`,k,[t[0]||=r(`The variables are set on `,-1),i(`code`,null,l(e.selector),1),t[1]||=r(` with zero specificity, so a value set on the component, on a parent or on `,-1),t[2]||=i(`code`,null,`:root`,-1),t[3]||=r(` always wins.`,-1)]),c(h,{class:`a_mb_3`,code:e.codeExample,language:`css`},null,8,[`code`]),c(g,{label:e.tableLabel,columns:e.columns,data:e.cssVars,"is-action-column-visible":!1,"is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1,"key-id":`name`,lang:`en`},{name:d(({row:e})=>[i(`code`,{class:`aloha_table_css_vars__code`,style:{hyphens:`none`},innerHTML:e.nameHtml},null,8,A)]),defaultValue:d(({row:e})=>[i(`code`,{class:`aloha_table_css_vars__code`,style:{hyphens:`none`},innerHTML:e.defaultHtml},null,8,j)]),_:1},8,[`label`,`columns`,`data`])])):a(``,!0)}var N=p(D,[[`render`,M]]);export{N as default};