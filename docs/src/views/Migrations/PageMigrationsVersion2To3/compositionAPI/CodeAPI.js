export default function CodeAPI() {
  const codeConfigBefore = `// 2.x: SCSS variables
@use "aloha-vue/scss/utils/color_utils" with (
  $a_primary: #0775b0,
  $a_border_radius: .5rem,
);`;

  const codeConfigAfter = `/* 3.x: CSS custom properties, no rebuild needed */
:root {
  --a_primary_h: 201;
  --a_primary_s: 92%;
  --a_primary_l: 36%;
  --a_radius: .5rem;
}`;

  const codeRgb = `/* 2.x */
background-color: rgba(var(--a_color_primary_rgb), .5);

/* 3.x */
background-color: hsl(var(--a_primary_h) var(--a_primary_s) var(--a_primary_l) / .5);`;

  const codeBtnClose = `import {
  AButton,
  AIconClose,
} from "aloha-vue";

h(AButton, {
  class: "a_btn_close",
  iconLeft: AIconClose,
  textScreenReader: "_CLOSE_",
});`;

  const codeLabelPosition = `<!-- 2.x -->
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
app.use(APropsDefaultPlugin, {
  AInputNumber: { labelPosition: "top" },
  AInputCurrency: { labelPosition: "top" },
  ADatepicker: { labelPosition: "top" },
});`;

  const codePropsDefault = `// 2.x
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

// 3.x
app.use(APropsDefaultPlugin, {
  AModal: {
    closeButtonClass: "a_btn a_btn_link",
  },
  AModalForm: {
    closeButtonClass: "a_btn a_btn_link",
  },
  ASelect: {
    keyId: "id",
  },
});
app.use(ARouterLinkConfigPlugin, {
  routes: router.getRoutes(),
  excludedPathRoutes: ["/:catchAll(.*)"],
});`;

  return {
    codeBtnClose,
    codeLabelPosition,
    codePropsDefault,
    codeConfigAfter,
    codeConfigBefore,
    codeRgb,
  };
}
