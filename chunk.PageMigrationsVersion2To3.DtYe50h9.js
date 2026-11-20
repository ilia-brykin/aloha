import{t as e}from"./chunk.AlohaHighlightjs.CeVpXDdh.js";import{f as t,it as n}from"./bundle.index.DdSVYuNk.js";import{Ft as r,Qt as i,Rt as a,Vt as o,nn as s}from"./chunk.vendor.CTxSDDRk.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{codeBtnClose:`import {
  AButton,
  AIconClose,
} from "aloha-vue";

h(AButton, {
  class: "a_btn_close",
  iconLeft: AIconClose,
  textScreenReader: "_CLOSE_",
});`,codeLabelPosition:`<!-- 2.x -->
<a-input label="Name" :is-label-float="true"></a-input>
<a-input label="Name" :is-label-float="false"></a-input>

<!-- 3.x -->
<a-input label="Name" label-position="float"></a-input>
<a-input label="Name" label-position="top"></a-input>
<!-- new: the label stays inside the field, small above the value -->
<a-input label="Name" label-position="inset"></a-input>

// default for all form elements ("float" if not set)
app.use(AFormPlugin, {
  labelPosition: "inset",
});

// 2.x look of AInputNumber, AInputCurrency and ADatepicker (label above the field)
app.use(AInputNumberPlugin, {
  propsDefault: {
    labelPosition: "top",
  },
});`,codeConfigAfter:`/* 3.x: CSS custom properties, no rebuild needed */
:root {
  --a_primary_h: 201;
  --a_primary_s: 92%;
  --a_primary_l: 36%;
  --a_radius: .5rem;
}`,codeConfigBefore:`// 2.x: SCSS variables
@use "aloha-vue/scss/utils/color_utils" with (
  $a_primary: #0775b0,
  $a_border_radius: .5rem,
);`,codeRgb:`/* 2.x */
background-color: rgba(var(--a_color_primary_rgb), .5);

/* 3.x */
background-color: hsl(var(--a_primary_h) var(--a_primary_s) var(--a_primary_l) / .5);`}}var u={name:`PageMigrationsVersion2To3`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{codeBtnClose:e,codeLabelPosition:t,codeConfigAfter:n,codeConfigBefore:r,codeRgb:i}=l();return{codeBtnClose:e,codeLabelPosition:t,codeConfigAfter:n,codeConfigBefore:r,codeRgb:i}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return i(),a(`div`,null,[o(d,{title:`_PAGE_MIGRATION_2_TO_3_PAGE_TITLE_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_MIGRATION_2_TO_3_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_INTRO_`}),t[0]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_CONFIG_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_CONFIG_DESCRIPTION_`}),o(p,{code:e.codeConfigBefore,language:`scss`},null,8,[`code`]),o(p,{code:e.codeConfigAfter,language:`css`},null,8,[`code`]),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_LAYERS_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_LAYERS_DESCRIPTION_`}),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_NEW_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_NEW_DESCRIPTION_`}),t[1]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_HEADER_`}),o(f,{class:`a_mb_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_REMOVED_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_REMOVED_DESCRIPTION_`}),o(p,{code:e.codeRgb,language:`css`},null,8,[`code`]),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_RENAMED_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_RENAMED_DESCRIPTION_`}),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_CHANGED_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_CHANGED_DESCRIPTION_`}),t[2]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_CLASSES_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_CLASSES_DESCRIPTION_`}),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_FILES_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_FILES_DESCRIPTION_`}),t[3]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_BTN_CLOSE_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_BTN_CLOSE_DESCRIPTION_`}),o(p,{code:e.codeBtnClose,language:`javascript`},null,8,[`code`]),t[4]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VISUAL_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VISUAL_DESCRIPTION_`}),t[5]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_A11Y_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_A11Y_DESCRIPTION_`}),t[6]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_LABEL_POSITION_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_LABEL_POSITION_DESCRIPTION_`}),o(p,{code:e.codeLabelPosition,language:`html`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};