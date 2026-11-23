import{t as e}from"./chunk.AlohaPage.CqjE0MZc.js";import{t}from"./chunk.AlohaTableProps.CDbIRnOn.js";import{t as n}from"./chunk.AlohaTableTranslate.D9LpV_Mo.js";import{$t as r,Ft as i,It as a,Lt as o,Mt as s,Pt as c,Rt as l,Vt as u,hn as d,ln as f,rn as p,sn as m,tn as h}from"./chunk.vendor.BvryzG0o.js";import{t as g}from"./chunk.AlohaExample.BkAbsrja.js";import{$t as _,K as v,en as y,qt as b,w as x}from"./bundle.index.DrnKDfVL.js";import{t as S}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function C(){return{codeHtml:`<a-input-otp
  v-model="model"
  label="Verification code"
></a-input-otp>
<div>model: {{ model }}</div>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpBasic",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123");

    return {
      model,
    };
  },
};`}}var T={name:`PageInputOtpBasic`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(`123`),{codeHtml:t}=C(),{codeJs:n}=w();return{codeHtml:t,codeJs:n,model:e}}};function E(e,t,n,o,s,c){let l=p(`a-input-otp`),f=p(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:m(()=>[u(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_INPUT_OTP_EXAMPLE_LABEL_`},null,8,[`modelValue`]),i(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var D=S(T,[[`render`,E]]);function O(){return{codeHtml:`<a-input-otp
  v-model="modelNumeric"
  class="a_mb_3"
  label="char-type: numeric"
></a-input-otp>
<a-input-otp
  v-model="modelAlphanumeric"
  class="a_mb_3"
  char-type="alphanumeric"
  :is-uppercase="true"
  label="Voucher code"
></a-input-otp>
<a-input-otp
  v-model="modelAny"
  char-type="any"
  :length="4"
  label="char-type: any"
></a-input-otp>
<div>modelNumeric: {{ modelNumeric }}</div>
<div>modelAlphanumeric: {{ modelAlphanumeric }}</div>
<div>modelAny: {{ modelAny }}</div>`}}function ee(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpCharType",
  components: {
    AInputOtp,
  },
  setup() {
    const modelNumeric = ref("");
    const modelAlphanumeric = ref("");
    const modelAny = ref("");

    return {
      modelAlphanumeric,
      modelAny,
      modelNumeric,
    };
  },
};`}}var te={name:`PageInputOtpCharType`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(``),t=f(``),n=f(``),{codeHtml:r}=O(),{codeJs:i}=ee();return{codeHtml:r,codeJs:i,modelAlphanumeric:t,modelAny:n,modelNumeric:e}}};function k(e,t,n,o,s,c){let l=p(`a-input-otp`),f=p(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_CHAR_TYPE_HEADER_`,description:`_A_INPUT_OTP_GROUP_CHAR_TYPE_DESCRIPTION_`,props:[`char-type`,`is-uppercase`]},{default:m(()=>[u(l,{class:`a_mb_3`,modelValue:e.modelNumeric,"onUpdate:modelValue":t[0]||=t=>e.modelNumeric=t,label:`char-type: numeric`},null,8,[`modelValue`]),u(l,{class:`a_mb_3`,modelValue:e.modelAlphanumeric,"onUpdate:modelValue":t[1]||=t=>e.modelAlphanumeric=t,"char-type":`alphanumeric`,"is-uppercase":!0,label:`_A_INPUT_OTP_EXAMPLE_LABEL_VOUCHER_`},null,8,[`modelValue`]),u(l,{modelValue:e.modelAny,"onUpdate:modelValue":t[2]||=t=>e.modelAny=t,"char-type":`any`,length:4,label:`char-type: any`},null,8,[`modelValue`]),i(`div`,null,`modelNumeric: `+d(e.modelNumeric),1),i(`div`,null,`modelAlphanumeric: `+d(e.modelAlphanumeric),1),i(`div`,null,`modelAny: `+d(e.modelAny),1)]),_:1},8,[`code-html`,`code-js`])}var A=S(te,[[`render`,k]]);function j(){return{codeHtml:`<a-input-otp
  v-for="variant in variants"
  :key="variant"
  v-model="model"
  class="a_mb_3"
  :disabled="true"
  :variant="variant"
  :label="\`disabled, variant: \${ variant }\`"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  :readonly="true"
  label="readonly"
></a-input-otp>
<a-input-otp
  v-model="model"
  :readonly="true"
  :mask="true"
  label="readonly, mask"
></a-input-otp>`}}function M(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpDisabled",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123456");
    const variants = ["outlined", "filled", "underlined"];

    return {
      model,
      variants,
    };
  },
};`}}var N={name:`PageInputOtpDisabled`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(`123456`),t=[`outlined`,`filled`,`underlined`],{codeHtml:n}=j(),{codeJs:r}=M();return{codeHtml:n,codeJs:r,model:e,variants:t}}};function P(e,t,n,i,o,c){let d=p(`a-input-otp`),f=p(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_DISABLED_HEADER_`,description:`_A_INPUT_OTP_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`,`readonly`,`readonly-mask-symbol`]},{default:m(()=>[(r(!0),l(s,null,h(e.variants,n=>(r(),a(d,{class:`a_mb_3`,key:n,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,disabled:!0,variant:n,label:`disabled, variant: ${n}`},null,8,[`modelValue`,`variant`,`label`]))),128)),u(d,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,readonly:!0,label:`readonly`},null,8,[`modelValue`]),u(d,{modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,readonly:!0,mask:!0,label:`readonly, mask`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var F=S(N,[[`render`,P]]);function I(){return{codeHtml:`<a-input-otp
  v-model="model"
  class="a_mb_3"
  :required="true"
  errors="The code is wrong"
  label="Verification code"
></a-input-otp>
<a-input-otp
  v-model="model"
  :required="true"
  variant="filled"
  errors="The code is wrong"
  label="Verification code"
></a-input-otp>`}}function L(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpErrors",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123456");

    return {
      model,
    };
  },
};`}}var R={name:`PageInputOtpErrors`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(`123456`),{codeHtml:t}=I(),{codeJs:n}=L();return{codeHtml:t,codeJs:n,model:e}}};function z(e,t,n,i,o,s){let c=p(`a-input-otp`),l=p(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_ERRORS_HEADER_`,description:`_A_INPUT_OTP_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`,`required`]},{default:m(()=>[u(c,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,required:!0,errors:`_A_INPUT_OTP_EXAMPLE_ERROR_`,label:`_A_INPUT_OTP_EXAMPLE_LABEL_`},null,8,[`modelValue`]),u(c,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,required:!0,variant:`filled`,errors:`_A_INPUT_OTP_EXAMPLE_ERROR_`,label:`_A_INPUT_OTP_EXAMPLE_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var B=S(R,[[`render`,z]]);function V(){return{codeHtml:`<a-input-otp
  ref="otpRef"
  v-model="model"
  :errors="errors"
  label="Verification code"
  @finish="onFinish"
  @update:model-value="onUpdateModel"
></a-input-otp>
<a-alert
  class="a_mt_3"
  :is-visible="isSuccess"
  type="success"
  text="The code is correct"
></a-alert>`}}function H(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AAlert,
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpFinish",
  components: {
    AAlert,
    AInputOtp,
  },
  setup() {
    const model = ref("");
    const errors = ref(undefined);
    const isSuccess = ref(false);
    const otpRef = ref(undefined);

    const onUpdateModel = () => {
      errors.value = undefined;
      isSuccess.value = false;
    };

    const onFinish = ({ model: code }) => {
      if (code === "246810") {
        errors.value = undefined;
        isSuccess.value = true;
        return;
      }
      errors.value = "_A_INPUT_OTP_EXAMPLE_ERROR_";
      model.value = "";
      otpRef.value.focus({ index: 0 });
    };

    return {
      errors,
      isSuccess,
      model,
      onFinish,
      onUpdateModel,
      otpRef,
    };
  },
};`}}var U={name:`PageInputOtpFinish`,components:{AlohaExample:g,AAlert:y,AInputOtp:v},setup(){let e=f(``),t=f(void 0),n=f(!1),r=f(void 0),i=()=>{t.value=void 0,n.value=!1},a=({model:i})=>{i===`246810`?(t.value=void 0,n.value=!0):(t.value=`_A_INPUT_OTP_EXAMPLE_ERROR_`,e.value=``,r.value.focus({index:0}))},{codeHtml:o}=V(),{codeJs:s}=H();return{codeHtml:o,codeJs:s,errors:t,isSuccess:n,model:e,onFinish:a,onUpdateModel:i,otpRef:r}}};function W(e,t,n,i,o,s){let c=p(`a-input-otp`),l=p(`a-alert`),d=p(`aloha-example`);return r(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_FINISH_HEADER_`,description:`_A_INPUT_OTP_GROUP_FINISH_DESCRIPTION_`,props:[`finish`,`errors`]},{default:m(()=>[u(c,{ref:`otpRef`,modelValue:e.model,"onUpdate:modelValue":[t[0]||=t=>e.model=t,e.onUpdateModel],errors:e.errors,label:`_A_INPUT_OTP_EXAMPLE_LABEL_`,onFinish:e.onFinish},null,8,[`modelValue`,`errors`,`onFinish`,`onUpdate:modelValue`]),u(l,{class:`a_mt_3`,"is-visible":e.isSuccess,type:`success`,text:`_A_INPUT_OTP_EXAMPLE_SUCCESS_`},null,8,[`is-visible`])]),_:1},8,[`code-html`,`code-js`])}var G=S(U,[[`render`,W]]);function K(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
></a-form>
<div>model: {{ model }}</div>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageInputOtpForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      code: "",
      voucher: "",
    });
    const data = [
      {
        id: "code",
        type: "otp",
        label: "_A_INPUT_OTP_EXAMPLE_LABEL_",
        required: true,
      },
      {
        id: "voucher",
        type: "otp",
        label: "_A_INPUT_OTP_EXAMPLE_LABEL_VOUCHER_",
        charType: "alphanumeric",
        isUppercase: true,
        length: 8,
        separator: ({ index }) => (index === 3 ? "-" : ""),
      },
    ];

    return {
      data,
      model,
    };
  },
};`}}var J={name:`PageInputOtpForm`,components:{AlohaExample:g,AForm:x},setup(){let e=f({code:``,voucher:``}),t=[{id:`code`,type:`otp`,label:`_A_INPUT_OTP_EXAMPLE_LABEL_`,required:!0},{id:`voucher`,type:`otp`,label:`_A_INPUT_OTP_EXAMPLE_LABEL_VOUCHER_`,charType:`alphanumeric`,isUppercase:!0,length:8,separator:({index:e})=>e===3?`-`:``}],{codeHtml:n}=K(),{codeJs:r}=q();return{codeHtml:n,codeJs:r,data:t,model:e}}};function Y(e,t,n,o,s,c){let l=p(`a-form`),f=p(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_FORM_HEADER_`,description:`_A_INPUT_OTP_GROUP_FORM_DESCRIPTION_`,props:[`type`]},{default:m(()=>[u(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var X=S(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-input-otp
  v-model="model"
  label="Verification code"
  label-description="We sent the code to your phone"
  help-text="The code is valid for 10 minutes"
></a-input-otp>`}}function Q(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpHelpText",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("");

    return {
      model,
    };
  },
};`}}var ne={name:`PageInputOtpHelpText`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(``),{codeHtml:t}=Z(),{codeJs:n}=Q();return{codeHtml:t,codeJs:n,model:e}}};function re(e,t,n,i,o,s){let c=p(`a-input-otp`),l=p(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_HELP_TEXT_HEADER_`,description:`_A_INPUT_OTP_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`,`label-description`]},{default:m(()=>[u(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_INPUT_OTP_EXAMPLE_LABEL_`,"label-description":`_A_INPUT_OTP_EXAMPLE_LABEL_DESCRIPTION_`,"help-text":`_A_INPUT_OTP_EXAMPLE_HELP_TEXT_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ie=S(ne,[[`render`,re]]);function ae(){return{codeHtml:`<a-input-otp
  v-model="modelPin"
  class="a_mb_3"
  :length="4"
  label="PIN"
></a-input-otp>
<a-input-otp
  v-model="modelLong"
  :length="8"
  label="Verification code"
></a-input-otp>
<div>modelPin: {{ modelPin }}</div>
<div>modelLong: {{ modelLong }}</div>`}}function oe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpLength",
  components: {
    AInputOtp,
  },
  setup() {
    const modelPin = ref("");
    const modelLong = ref("");

    return {
      modelLong,
      modelPin,
    };
  },
};`}}var se={name:`PageInputOtpLength`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(``),t=f(``),{codeHtml:n}=ae(),{codeJs:r}=oe();return{codeHtml:n,codeJs:r,modelLong:t,modelPin:e}}};function ce(e,t,n,o,s,c){let l=p(`a-input-otp`),f=p(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_LENGTH_HEADER_`,description:`_A_INPUT_OTP_GROUP_LENGTH_DESCRIPTION_`,props:[`length`]},{default:m(()=>[u(l,{class:`a_mb_3`,modelValue:e.modelPin,"onUpdate:modelValue":t[0]||=t=>e.modelPin=t,length:4,label:`_A_INPUT_OTP_EXAMPLE_LABEL_PIN_`},null,8,[`modelValue`]),u(l,{modelValue:e.modelLong,"onUpdate:modelValue":t[1]||=t=>e.modelLong=t,length:8,label:`_A_INPUT_OTP_EXAMPLE_LABEL_`},null,8,[`modelValue`]),i(`div`,null,`modelPin: `+d(e.modelPin),1),i(`div`,null,`modelLong: `+d(e.modelLong),1)]),_:1},8,[`code-html`,`code-js`])}var le=S(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-input-otp
  v-model="modelMask"
  class="a_mb_3"
  :mask="true"
  :length="4"
  label="PIN"
></a-input-otp>
<a-input-otp
  v-model="modelPlaceholder"
  placeholder="○"
  label="Verification code"
></a-input-otp>
<div>modelMask: {{ modelMask }}</div>
<div>modelPlaceholder: {{ modelPlaceholder }}</div>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpMask",
  components: {
    AInputOtp,
  },
  setup() {
    const modelMask = ref("12");
    const modelPlaceholder = ref("");

    return {
      modelMask,
      modelPlaceholder,
    };
  },
};`}}var fe={name:`PageInputOtpMask`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(`12`),t=f(``),{codeHtml:n}=ue(),{codeJs:r}=de();return{codeHtml:n,codeJs:r,modelMask:e,modelPlaceholder:t}}};function pe(e,t,n,o,s,c){let l=p(`a-input-otp`),f=p(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_MASK_HEADER_`,description:`_A_INPUT_OTP_GROUP_MASK_DESCRIPTION_`,props:[`mask`,`placeholder`]},{default:m(()=>[u(l,{class:`a_mb_3`,modelValue:e.modelMask,"onUpdate:modelValue":t[0]||=t=>e.modelMask=t,mask:!0,length:4,label:`_A_INPUT_OTP_EXAMPLE_LABEL_PIN_`},null,8,[`modelValue`]),u(l,{modelValue:e.modelPlaceholder,"onUpdate:modelValue":t[1]||=t=>e.modelPlaceholder=t,placeholder:`○`,label:`_A_INPUT_OTP_EXAMPLE_LABEL_`},null,8,[`modelValue`]),i(`div`,null,`modelMask: `+d(e.modelMask),1),i(`div`,null,`modelPlaceholder: `+d(e.modelPlaceholder),1)]),_:1},8,[`code-html`,`code-js`])}var me=S(fe,[[`render`,pe]]);function he(){return{codeHtml:`<a-input-otp
  v-model="model"
  class="a_mb_3"
  :length="4"
  separator="/"
  label="separator: /"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  :separator="separatorMiddle"
  label="separator: function"
></a-input-otp>
<a-input-otp
  v-model="model"
  label="slot separator"
>
  <template v-slot:separator="{ index }">
    <span v-if="index % 2 === 1">•</span>
  </template>
</a-input-otp>`}}function ge(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpSeparator",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("");
    const separatorMiddle = ({ index }) => (index === 2 ? "–" : "");

    return {
      model,
      separatorMiddle,
    };
  },
};`}}var _e={name:`PageInputOtpSeparator`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(``),t=({index:e})=>e===2?`–`:``,{codeHtml:n}=he(),{codeJs:r}=ge();return{codeHtml:n,codeJs:r,model:e,separatorMiddle:t}}},ve={key:0};function ye(e,t,n,i,s,c){let d=p(`a-input-otp`),f=p(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_SEPARATOR_HEADER_`,description:`_A_INPUT_OTP_GROUP_SEPARATOR_DESCRIPTION_`,props:[`separator`]},{default:m(()=>[u(d,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,length:4,separator:`/`,label:`separator: /`},null,8,[`modelValue`]),u(d,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,separator:e.separatorMiddle,label:`separator: function`},null,8,[`modelValue`,`separator`]),u(d,{modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,label:`slot separator`},{separator:m(({index:e})=>[e%2==1?(r(),l(`span`,ve,`•`)):o(``,!0)]),_:1},8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var be=S(_e,[[`render`,ye]]);function xe(){return{codeHtml:`<a-input-otp
  v-model="model"
  class="a_mb_3"
  size="small"
  label="size: small"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  label="size: default"
></a-input-otp>
<a-input-otp
  v-model="model"
  size="large"
  label="size: large"
></a-input-otp>`}}function Se(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpSize",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123");

    return {
      model,
    };
  },
};`}}var Ce={name:`PageInputOtpSize`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(`123`),{codeHtml:t}=xe(),{codeJs:n}=Se();return{codeHtml:t,codeJs:n,model:e}}};function we(e,t,n,i,o,s){let c=p(`a-input-otp`),l=p(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_SIZE_HEADER_`,description:`_A_INPUT_OTP_GROUP_SIZE_DESCRIPTION_`,props:[`size`]},{default:m(()=>[u(c,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,size:`small`,label:`size: small`},null,8,[`modelValue`]),u(c,{class:`a_mb_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,label:`size: default`},null,8,[`modelValue`]),u(c,{modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,size:`large`,label:`size: large`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Te=S(Ce,[[`render`,we]]);function Ee(){return{codeHtml:`<a-input-otp
  v-model="modelHex"
  class="a_mb_3"
  :validator="validatorHex"
  :is-uppercase="true"
  inputmode="text"
  label="Color (hex)"
></a-input-otp>
<a-input-otp
  v-model="modelLetters"
  :validator="validatorLetters"
  :length="4"
  inputmode="text"
  label="Letters only"
></a-input-otp>
<div>modelHex: {{ modelHex }}</div>
<div>modelLetters: {{ modelLetters }}</div>`}}function De(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpValidator",
  components: {
    AInputOtp,
  },
  setup() {
    const modelHex = ref("");
    const modelLetters = ref("");
    const validatorHex = ({ char }) => /^[\\da-f]$/i.test(char);
    const validatorLetters = ({ char }) => /^\\p{L}$/u.test(char);

    return {
      modelHex,
      modelLetters,
      validatorHex,
      validatorLetters,
    };
  },
};`}}var Oe={name:`PageInputOtpValidator`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(``),t=f(``),n=({char:e})=>/^[\da-f]$/i.test(e),r=({char:e})=>/^\p{L}$/u.test(e),{codeHtml:i}=Ee(),{codeJs:a}=De();return{codeHtml:i,codeJs:a,modelHex:e,modelLetters:t,validatorHex:n,validatorLetters:r}}};function ke(e,t,n,o,s,c){let l=p(`a-input-otp`),f=p(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_VALIDATOR_HEADER_`,description:`_A_INPUT_OTP_GROUP_VALIDATOR_DESCRIPTION_`,props:[`validator`,`inputmode`]},{default:m(()=>[u(l,{class:`a_mb_3`,modelValue:e.modelHex,"onUpdate:modelValue":t[0]||=t=>e.modelHex=t,validator:e.validatorHex,"is-uppercase":!0,inputmode:`text`,label:`_A_INPUT_OTP_EXAMPLE_LABEL_HEX_`},null,8,[`modelValue`,`validator`]),u(l,{modelValue:e.modelLetters,"onUpdate:modelValue":t[1]||=t=>e.modelLetters=t,validator:e.validatorLetters,length:4,inputmode:`text`,label:`_A_INPUT_OTP_EXAMPLE_LABEL_LETTERS_`},null,8,[`modelValue`,`validator`]),i(`div`,null,`modelHex: `+d(e.modelHex),1),i(`div`,null,`modelLetters: `+d(e.modelLetters),1)]),_:1},8,[`code-html`,`code-js`])}var Ae=S(Oe,[[`render`,ke]]);function je(){return{codeHtml:`<a-input-otp
  v-for="variant in variants"
  :key="variant"
  v-model="model"
  class="a_mb_3"
  :variant="variant"
  :label="\`variant: \${ variant }\`"
></a-input-otp>`}}function Me(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpVariant",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123");
    const variants = ["outlined", "filled", "underlined"];

    return {
      model,
      variants,
    };
  },
};`}}var Ne={name:`PageInputOtpVariant`,components:{AlohaExample:g,AInputOtp:v},setup(){let e=f(`123`),t=[`outlined`,`filled`,`underlined`],{codeHtml:n}=je(),{codeJs:r}=Me();return{codeHtml:n,codeJs:r,model:e,variants:t}}};function Pe(e,t,n,i,o,c){let u=p(`a-input-otp`),d=p(`aloha-example`);return r(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_OTP_GROUP_VARIANT_HEADER_`,description:`_A_INPUT_OTP_GROUP_VARIANT_DESCRIPTION_`,props:[`variant`]},{default:m(()=>[(r(!0),l(s,null,h(e.variants,n=>(r(),a(u,{class:`a_mb_3`,key:n,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,variant:n,label:`variant: ${n}`},null,8,[`modelValue`,`variant`,`label`]))),128))]),_:1},8,[`code-html`,`code-js`])}var $=S(Ne,[[`render`,Pe]]);function Fe(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`finish`,description:`_A_INPUT_OTP_EVENTS_FINISH_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_INPUT_OTP_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_INPUT_OTP_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function Ie(){return{dataMethods:[{name:`focus`,description:`_A_INPUT_OTP_METHODS_FOCUS_DESCRIPTION_`},{name:`blur`,description:`_A_INPUT_OTP_METHODS_BLUR_DESCRIPTION_`}]}}function Le(){let e=c(()=>_({placeholder:`_A_INPUT_OTP_COMPONENT_NAME_`}));return{pageTitle:c(()=>`AInputOtp${e.value?` (${e.value})`:``}`)}}function Re(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`autocomplete`,description:`_A_INPUT_OTP_PROPS_AUTOCOMPLETE_DESCRIPTION_`,type:`String`,default:`"one-time-code"`,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`char-type`,description:`_A_INPUT_OTP_PROPS_CHAR_TYPE_DESCRIPTION_`,type:`String`,default:`"numeric"`,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`[]`,required:!1},{name:`extra`,description:`_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`uniqueId("a_input_otp_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`inputmode`,description:`_A_INPUT_OTP_PROPS_INPUTMODE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-uppercase`,description:`_A_INPUT_OTP_PROPS_IS_UPPERCASE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`length`,description:`_A_INPUT_OTP_PROPS_LENGTH_DESCRIPTION_`,type:`Number`,default:6,required:!1},{name:`mask`,description:`_A_INPUT_OTP_PROPS_MASK_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:`""`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`placeholder`,description:`_A_INPUT_OTP_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`readonly-mask-symbol`,description:`_A_INPUT_OTP_PROPS_READONLY_MASK_SYMBOL_DESCRIPTION_`,type:`String`,default:`"*"`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`separator`,description:`_A_INPUT_OTP_PROPS_SEPARATOR_DESCRIPTION_`,type:`String / Function`,default:void 0,required:!1},{name:`size`,description:`_A_INPUT_OTP_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`type`,description:`_A_INPUT_OTP_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`"otp"`,required:!1},{name:`validator`,description:`_A_INPUT_OTP_PROPS_VALIDATOR_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`variant`,description:`_A_INPUT_OTP_PROPS_VARIANT_DESCRIPTION_`,type:`String`,default:`"outlined"`,required:!1}]}}function ze(){return{dataSlots:[{name:`separator`,description:`_A_INPUT_OTP_SLOTS_SEPARATOR_DESCRIPTION_`}]}}function Be(){return{dataTranslate:[`_A_INPUT_OTP_CHAR_{{index}}_{{length}}_`]}}var Ve={name:`PageInputOtp`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:b,PageInputOtpBasic:D,PageInputOtpLength:le,PageInputOtpCharType:A,PageInputOtpValidator:Ae,PageInputOtpVariant:$,PageInputOtpSize:Te,PageInputOtpMask:me,PageInputOtpSeparator:be,PageInputOtpFinish:G,PageInputOtpHelpText:ie,PageInputOtpErrors:B,PageInputOtpDisabled:F,PageInputOtpForm:X},setup(){let{pageTitle:e}=Le(),{dataProps:t}=Re(),{dataEvents:n}=Fe(),{dataSlots:r}=ze(),{dataMethods:i}=Ie(),{dataTranslate:a}=Be();return{dataEvents:n,dataMethods:i,dataProps:t,dataSlots:r,dataTranslate:a,pageTitle:e}}};function He(e,t,n,i,o,s){let c=p(`a-translation`),l=p(`page-input-otp-basic`),d=p(`page-input-otp-length`),f=p(`page-input-otp-char-type`),h=p(`page-input-otp-validator`),g=p(`page-input-otp-variant`),_=p(`page-input-otp-size`),v=p(`page-input-otp-mask`),y=p(`page-input-otp-separator`),b=p(`page-input-otp-finish`),x=p(`page-input-otp-help-text`),S=p(`page-input-otp-errors`),C=p(`page-input-otp-disabled`),w=p(`page-input-otp-form`),T=p(`aloha-table-props`),E=p(`aloha-table-translate`),D=p(`aloha-table-css-vars`),O=p(`aloha-page`);return r(),a(O,{"page-title":e.pageTitle},{body:m(()=>[u(c,{tag:`p`,html:`_A_INPUT_OTP_COMPONENT_DESCRIPTION_`}),u(c,{class:`a_mb_4`,tag:`div`,html:`_A_INPUT_OTP_ACCESSIBILITY_DESCRIPTION_`}),u(l),u(d),u(f),u(h),u(g),u(_),u(v),u(y),u(b),u(x),u(S),u(C),u(w),u(T,{data:e.dataProps},null,8,[`data`]),u(T,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),u(T,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),u(T,{"table-label":`Methods`,data:e.dataMethods,columns:[`name`,`description`]},null,8,[`data`]),u(E,{data:e.dataTranslate},null,8,[`data`]),u(D,{files:`components/ui/AInputOtp`})]),_:1},8,[`page-title`])}var Ue=S(Ve,[[`render`,He]]);export{Ue as default};