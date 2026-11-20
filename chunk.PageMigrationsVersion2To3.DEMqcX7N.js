import{t as e}from"./chunk.AlohaHighlightjs.CA2juRnR.js";import{f as t,qt as n}from"./bundle.index.DHKLH29U.js";import{$t as r,Ft as i,Rt as a,Vt as o,rn as s}from"./chunk.vendor.BvryzG0o.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{codeBtnClose:`import {
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
app.use(AComponentsPlugin, {
  AInputNumber: { props: { labelPosition: "top" } },
  AInputCurrency: { props: { labelPosition: "top" } },
  ADatepicker: { props: { labelPosition: "top" } },
});`,codePropsDefault:`// 2.x
app.use(AModalPlugin, {
  propsDefault: {
    closeButtonClass: "a_btn a_btn_link",
  },
});
app.use(ASelectPlugin, {
  propsDefault: {
    keyId: "id",
  },
});
app.use(ARouterLinkConfigPlugin, {
  propsDefault: {
    routes: router.getRoutes(),
  },
  excludedPathRoutes: ["/:catchAll(.*)"],
});
app.use(AAlertPlugin, {
  icons: {
    info: CheckLg,
  },
});
app.use(ATablePlugin, {
  propsDefault: {
    isStriped: true,
  },
});

// 3.x
app.use(AComponentsPlugin, {
  // also for AModalForm and AModalWizard
  AModal: {
    props: {
      closeButtonClass: "a_btn a_btn_link",
    },
  },
  // also for ASelectIcon and ASelectStyle
  ASelect: {
    props: {
      keyId: "id",
    },
  },
  ARouterLinkConfig: {
    routes: router.getRoutes(),
    excludedPathRoutes: ["/:catchAll(.*)"],
  },
  AAlert: {
    icons: {
      info: CheckLg,
    },
  },
  ATable: {
    props: {
      isStriped: true,
    },
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
background-color: hsl(var(--a_primary_h) var(--a_primary_s) var(--a_primary_l) / .5);`}}var u={name:`PageMigrationsVersion2To3`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{codeBtnClose:e,codeLabelPosition:t,codePropsDefault:n,codeConfigAfter:r,codeConfigBefore:i,codeRgb:a}=l();return{codeBtnClose:e,codeLabelPosition:t,codePropsDefault:n,codeConfigAfter:r,codeConfigBefore:i,codeRgb:a}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return r(),a(`div`,null,[o(d,{title:`_PAGE_MIGRATION_2_TO_3_PAGE_TITLE_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_MIGRATION_2_TO_3_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_INTRO_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_CONFIG_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_CONFIG_DESCRIPTION_`}),o(p,{code:e.codeConfigBefore,language:`scss`},null,8,[`code`]),o(p,{code:e.codeConfigAfter,language:`css`},null,8,[`code`]),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_LAYERS_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_LAYERS_DESCRIPTION_`}),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_NEW_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_NEW_DESCRIPTION_`}),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_HEADER_`}),o(f,{class:`a_mb_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_REMOVED_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_REMOVED_DESCRIPTION_`}),o(p,{code:e.codeRgb,language:`css`},null,8,[`code`]),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_RENAMED_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_RENAMED_DESCRIPTION_`}),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_CHANGED_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VARS_CHANGED_DESCRIPTION_`}),t[2]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_CLASSES_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_CLASSES_DESCRIPTION_`}),o(f,{class:`a_my_3`,tag:`h3`,"safe-html":`_PAGE_MIGRATION_2_TO_3_FILES_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_FILES_DESCRIPTION_`}),t[3]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_BTN_CLOSE_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_BTN_CLOSE_DESCRIPTION_`}),o(p,{code:e.codeBtnClose,language:`javascript`},null,8,[`code`]),t[4]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VISUAL_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_VISUAL_DESCRIPTION_`}),t[5]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_A11Y_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_A11Y_DESCRIPTION_`}),t[6]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_LABEL_POSITION_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_LABEL_POSITION_DESCRIPTION_`}),o(p,{code:e.codeLabelPosition,language:`html`},null,8,[`code`]),t[7]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mb_3`,tag:`h2`,"safe-html":`_PAGE_MIGRATION_2_TO_3_PROPS_DEFAULT_HEADER_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_MIGRATION_2_TO_3_PROPS_DEFAULT_DESCRIPTION_`}),o(p,{code:e.codePropsDefault,language:`javascript`},null,8,[`code`])])}var f=c(u,[[`render`,d]]);export{f as default};