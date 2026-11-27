import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{t as n}from"./chunk.AlohaExample.CEueonn8.js";import{hn as r,mn as i,pn as a,sn as o,t as s}from"./bundle.index.Dor-y9Rj.js";import{Ht as c,Jt as l,Ut as u,Vt as d,mn as f,on as p,un as m,wn as h}from"./chunk.vendor.Bjd2408Z.js";function g(){return{codeHtml:`<a-accordion
  :data="data"
  :always-open="true"
  :with-gap="true"
/>`}}function _(){return{codeJs:`import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
    };
  },
};`}}var v={name:`PageAccordionAlwaysOpen`,components:{AAccordion:a,AlohaExample:n},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t}},data(){return{data:[{label:`_A_ACCORDION_EXAMPLE_SHIPPING_`,content:`_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_PAYMENT_`,content:`_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_RETURNS_`,content:`_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_`}]}}};function y(e,t,n,r,i,a){let o=m(`a-accordion`),s=m(`aloha-example`);return p(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ACCORDION_ALWAYS_OPEN_HEADER_`,description:`_A_ACCORDION_ALWAYS_OPEN_DESCRIPTION_`,props:[`always-open`,`with-gap`]},{default:f(()=>[l(o,{data:e.data,"always-open":!0,"with-gap":!0},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var b=s(v,[[`render`,y]]);function x(){return{codeHtml:`<a-accordion
  :data="data"
/>`}}function S(){return{codeJs:`import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
    };
  },
};`}}var C={name:`PageAccordionBasic`,components:{AAccordion:a,AlohaExample:n},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t}},data(){return{data:[{label:`_A_ACCORDION_EXAMPLE_SHIPPING_`,content:`_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_PAYMENT_`,content:`_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_RETURNS_`,content:`_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_`}]}}};function w(e,t,n,r,i,a){let o=m(`a-accordion`),s=m(`aloha-example`);return p(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_ACCORDION_BASIC_DESCRIPTION_`,props:[`data`,`header-tag`]},{default:f(()=>[l(o,{data:e.data},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var T=s(C,[[`render`,w]]);function E(){return{codeHtml:`<a-accordion
  :data="data"
  :indexes-for-open="indexesForOpen"
  key-id="id"
/>`}}function D(){return{codeJs:`import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          id: "shipping",
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
          children: [
            {
              id: "germany",
              label: "_A_ACCORDION_EXAMPLE_GERMANY_",
              content: "_A_ACCORDION_EXAMPLE_GERMANY_CONTENT_",
            },
            {
              id: "abroad",
              label: "_A_ACCORDION_EXAMPLE_ABROAD_",
              content: "_A_ACCORDION_EXAMPLE_ABROAD_CONTENT_",
            },
          ],
        },
        {
          id: "payment",
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
      ],
      indexesForOpen: ["0", "0.1"],
    };
  },
};`}}var O={name:`PageAccordionChildren`,components:{AAccordion:a,AlohaExample:n},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t}},data(){return{data:[{id:`shipping`,label:`_A_ACCORDION_EXAMPLE_SHIPPING_`,content:`_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_`,children:[{id:`germany`,label:`_A_ACCORDION_EXAMPLE_GERMANY_`,content:`_A_ACCORDION_EXAMPLE_GERMANY_CONTENT_`},{id:`abroad`,label:`_A_ACCORDION_EXAMPLE_ABROAD_`,content:`_A_ACCORDION_EXAMPLE_ABROAD_CONTENT_`}]},{id:`payment`,label:`_A_ACCORDION_EXAMPLE_PAYMENT_`,content:`_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_`}],indexesForOpen:[`0`,`0.1`]}}};function k(e,t,n,r,i,a){let o=m(`a-accordion`),s=m(`aloha-example`);return p(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ACCORDION_CHILDREN_HEADER_`,description:`_A_ACCORDION_CHILDREN_DESCRIPTION_`,props:[`key-children`,`key-id`,`indexes-for-open`]},{default:f(()=>[l(o,{data:e.data,"indexes-for-open":e.indexesForOpen,"key-id":`id`},null,8,[`data`,`indexes-for-open`])]),_:1},8,[`code-html`,`code-js`])}var A=s(O,[[`render`,k]]);function j(){return{codeHtml:`<a-accordion
  :data="data"
/>`}}function M(){return{codeJs:`import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
          disabled: true,
        },
      ],
    };
  },
};`}}var N={name:`PageAccordionDisabled`,components:{AAccordion:a,AlohaExample:n},setup(){let{codeHtml:e}=j(),{codeJs:t}=M();return{codeHtml:e,codeJs:t}},data(){return{data:[{label:`_A_ACCORDION_EXAMPLE_SHIPPING_`,content:`_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_PAYMENT_`,content:`_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_RETURNS_`,content:`_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_`,disabled:!0}]}}};function P(e,t,n,r,i,a){let o=m(`a-accordion`),s=m(`aloha-example`);return p(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ACCORDION_DISABLED_HEADER_`,description:`_A_ACCORDION_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:f(()=>[l(o,{data:e.data},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var F=s(N,[[`render`,P]]);function I(){return{codeHtml:`<a-accordion
  :data="data"
  :ids-for-open-default="idsForOpenDefault"
  :one-item-always-open="true"
/>`}}function L(){return{codeJs:`import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
      idsForOpenDefault: ["0"],
    };
  },
};`}}var R={name:`PageAccordionOneItemAlwaysOpen`,components:{AAccordion:a,AlohaExample:n},setup(){let{codeHtml:e}=I(),{codeJs:t}=L();return{codeHtml:e,codeJs:t}},data(){return{data:[{label:`_A_ACCORDION_EXAMPLE_SHIPPING_`,content:`_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_PAYMENT_`,content:`_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_RETURNS_`,content:`_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_`}],idsForOpenDefault:[`0`]}}};function ee(e,t,n,r,i,a){let o=m(`a-accordion`),s=m(`aloha-example`);return p(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ACCORDION_ONE_ITEM_ALWAYS_OPEN_HEADER_`,description:`_A_ACCORDION_ONE_ITEM_ALWAYS_OPEN_DESCRIPTION_`,props:[`one-item-always-open`,`ids-for-open-default`]},{default:f(()=>[l(o,{data:e.data,"ids-for-open-default":e.idsForOpenDefault,"one-item-always-open":!0},null,8,[`data`,`ids-for-open-default`])]),_:1},8,[`code-html`,`code-js`])}var z=s(R,[[`render`,ee]]);function B(){return{codeHtml:`<a-accordion
  :data="data"
>
  <template v-slot:returnsButton>
    <a-translation
      tag="span"
      text="_A_ACCORDION_EXAMPLE_RETURNS_"
    />
    <a-translation
      class="a_badge a_badge_success a_ml_2"
      tag="span"
      text="_A_ACCORDION_EXAMPLE_NEW_"
    />
  </template>
  <template v-slot:returnsContent>
    <a-translation
      tag="p"
      text="_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_"
    />
    <a-button
      class="a_btn a_btn_primary"
      text="_A_ACCORDION_EXAMPLE_RETURN_BTN_"
    />
  </template>
</a-accordion>`}}function V(){return{codeJs:`import {
  AAccordion,
  AButton,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
    AButton,
    ATranslation,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          slotButton: "returnsButton",
          slotContent: "returnsContent",
          isRenderBodyByFirstOpen: true,
        },
      ],
    };
  },
};`}}var H={name:`PageAccordionSlots`,components:{AAccordion:a,AButton:o,ATranslation:i,AlohaExample:n},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t}},data(){return{data:[{label:`_A_ACCORDION_EXAMPLE_SHIPPING_`,content:`_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_`},{slotButton:`returnsButton`,slotContent:`returnsContent`,isRenderBodyByFirstOpen:!0}]}}};function U(e,t,n,r,i,a){let o=m(`a-translation`),s=m(`a-button`),c=m(`a-accordion`),d=m(`aloha-example`);return p(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ACCORDION_SLOTS_HEADER_`,description:`_A_ACCORDION_SLOTS_DESCRIPTION_`,props:[`key-is-render-body-by-first-open`]},{default:f(()=>[l(c,{data:e.data},{returnsButton:f(()=>[l(o,{tag:`span`,text:`_A_ACCORDION_EXAMPLE_RETURNS_`}),l(o,{class:`a_badge a_badge_success a_ml_2`,tag:`span`,text:`_A_ACCORDION_EXAMPLE_NEW_`})]),returnsContent:f(()=>[l(o,{tag:`p`,text:`_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_`}),l(s,{class:`a_btn a_btn_primary`,text:`_A_ACCORDION_EXAMPLE_RETURN_BTN_`})]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var W=s(H,[[`render`,U]]);function G(){return{codeHtml:`<div class="a_mb_3">
  <a-button
    class="a_btn a_btn_secondary a_mr_2"
    text="_A_ACCORDION_EXAMPLE_OPEN_ALL_"
    @click="openAll"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_ACCORDION_EXAMPLE_CLOSE_ALL_"
    @click="closeAll"
  />
</div>
<a-accordion
  v-model="idsOpen"
  :data="data"
  :always-open="true"
/>
<p class="a_mt_3">v-model: {{ idsOpen }}</p>`}}function K(){return{codeJs:`import {
  AAccordion,
  AButton,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
    AButton,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
      idsOpen: ["1"],
    };
  },
  methods: {
    openAll() {
      this.idsOpen = ["0", "1", "2"];
    },

    closeAll() {
      this.idsOpen = [];
    },
  },
};`}}var q={name:`PageAccordionVModel`,components:{AAccordion:a,AButton:o,AlohaExample:n},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t}},data(){return{data:[{label:`_A_ACCORDION_EXAMPLE_SHIPPING_`,content:`_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_PAYMENT_`,content:`_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_`},{label:`_A_ACCORDION_EXAMPLE_RETURNS_`,content:`_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_`}],idsOpen:[`1`]}},methods:{openAll(){this.idsOpen=[`0`,`1`,`2`]},closeAll(){this.idsOpen=[]}}},J={class:`a_mb_3`},Y={class:`a_mt_3`};function X(e,t,n,r,i,a){let o=m(`a-button`),s=m(`a-accordion`),d=m(`aloha-example`);return p(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ACCORDION_V_MODEL_HEADER_`,description:`_A_ACCORDION_V_MODEL_DESCRIPTION_`,props:[`model-value`,`always-open`]},{default:f(()=>[c(`div`,J,[l(o,{class:`a_btn a_btn_secondary a_mr_2`,text:`_A_ACCORDION_EXAMPLE_OPEN_ALL_`,onClick:e.openAll},null,8,[`onClick`]),l(o,{class:`a_btn a_btn_secondary`,text:`_A_ACCORDION_EXAMPLE_CLOSE_ALL_`,onClick:e.closeAll},null,8,[`onClick`])]),l(s,{modelValue:e.idsOpen,"onUpdate:modelValue":t[0]||=t=>e.idsOpen=t,data:e.data,"always-open":!0},null,8,[`modelValue`,`data`]),c(`p`,Y,`v-model: `+h(e.idsOpen),1)]),_:1},8,[`code-html`,`code-js`])}var Z=s(q,[[`render`,X]]);function Q(){return{dataEvents:[{name:`toggle`,description:`_A_ACCORDION_EVENTS_TOGGLE_DESCRIPTION_`,type:`Function`},{name:`update:modelValue`,description:`_A_ACCORDION_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function $(){let e=d(()=>r({placeholder:`_A_ACCORDION_COMPONENT_NAME_`}));return{pageTitle:d(()=>`AAccordion${e.value?` (${e.value})`:``}`)}}function te(){return{dataProps:[{name:`always-open`,description:`_A_ACCORDION_PROPS_ALWAYS_OPEN_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`class-body`,description:`_A_ACCORDION_PROPS_CLASS_BODY_DESCRIPTION_`,type:`String / Object`,default:`""`,required:!1},{name:`class-button`,description:`_A_ACCORDION_PROPS_CLASS_BUTTON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-header`,description:`_A_ACCORDION_PROPS_CLASS_HEADER_DESCRIPTION_`,type:`String / Object`,default:`""`,required:!1},{name:`data`,description:`_A_ACCORDION_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!0},{name:`disabled`,description:`_A_ACCORDION_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`header-tag`,description:`_A_ACCORDION_PROPS_HEADER_TAG_DESCRIPTION_`,type:`String`,default:`"h3"`,required:!1},{name:`id`,description:`_A_ACCORDION_PROPS_ID_DESCRIPTION_`,type:`String`,default:`"accordion_…"`,required:!1},{name:`ids-for-open-default`,description:`_A_ACCORDION_PROPS_IDS_FOR_OPEN_DEFAULT_DESCRIPTION_`,type:`Array`,default:`[]`,required:!1},{name:`indexes-for-open`,description:`_A_ACCORDION_PROPS_INDEXES_FOR_OPEN_DESCRIPTION_`,type:`Array`,default:`[]`,required:!1},{name:`is-caret`,description:`_A_ACCORDION_PROPS_IS_CARET_DESCRIPTION_`,type:`Boolean`,default:`true`,required:!1},{name:`key-children`,description:`_A_ACCORDION_PROPS_KEY_CHILDREN_DESCRIPTION_`,type:`String`,default:`"children"`,required:!1},{name:`key-class-body`,description:`_A_ACCORDION_PROPS_KEY_CLASS_BODY_DESCRIPTION_`,type:`String`,default:`"classBody"`,required:!1},{name:`key-class-button`,description:`_A_ACCORDION_PROPS_KEY_CLASS_BUTTON_DESCRIPTION_`,type:`String`,default:`"classButton"`,required:!1},{name:`key-class-header`,description:`_A_ACCORDION_PROPS_KEY_CLASS_HEADER_DESCRIPTION_`,type:`String`,default:`"classHeader"`,required:!1},{name:`key-content`,description:`_A_ACCORDION_PROPS_KEY_CONTENT_DESCRIPTION_`,type:`String`,default:`"content"`,required:!1},{name:`key-id`,description:`_A_ACCORDION_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-is-render`,description:`_A_ACCORDION_PROPS_KEY_IS_RENDER_DESCRIPTION_`,type:`String`,default:`"isRender"`,required:!1},{name:`key-is-render-body-by-first-open`,description:`_A_ACCORDION_PROPS_KEY_IS_RENDER_BODY_BY_FIRST_OPEN_DESCRIPTION_`,type:`String`,default:`"isRenderBodyByFirstOpen"`,required:!1},{name:`key-label`,description:`_A_ACCORDION_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`"label"`,required:!1},{name:`model-value`,description:`_A_ACCORDION_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`one-item-always-open`,description:`_A_ACCORDION_PROPS_ONE_ITEM_ALWAYS_OPEN_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`prevent`,description:`_A_ACCORDION_PROPS_PREVENT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly`,description:`_A_ACCORDION_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`stop`,description:`_A_ACCORDION_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`with-gap`,description:`_A_ACCORDION_PROPS_WITH_GAP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1}]}}function ne(){return{dataSlots:[{name:`accordionButton`,description:`_A_ACCORDION_SLOTS_ACCORDION_BUTTON_DESCRIPTION_`},{name:`accordionContent`,description:`_A_ACCORDION_SLOTS_ACCORDION_CONTENT_DESCRIPTION_`},{name:`[item.slotButton]`,description:`_A_ACCORDION_SLOTS_SLOT_BUTTON_DESCRIPTION_`},{name:`[item.slotContent]`,description:`_A_ACCORDION_SLOTS_SLOT_CONTENT_DESCRIPTION_`}]}}var re={name:`PageAccordion`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:i,PageAccordionBasic:T,PageAccordionAlwaysOpen:b,PageAccordionOneItemAlwaysOpen:z,PageAccordionVModel:Z,PageAccordionChildren:A,PageAccordionSlots:W,PageAccordionDisabled:F},setup(){let{pageTitle:e}=$(),{dataProps:t}=te(),{dataSlots:n}=ne(),{dataEvents:r}=Q();return{dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function ie(e,t,n,r,i,a){let o=m(`a-translation`),s=m(`page-accordion-basic`),c=m(`page-accordion-always-open`),d=m(`page-accordion-one-item-always-open`),h=m(`page-accordion-v-model`),g=m(`page-accordion-children`),_=m(`page-accordion-slots`),v=m(`page-accordion-disabled`),y=m(`aloha-table-props`),b=m(`aloha-table-css-vars`),x=m(`aloha-page`);return p(),u(x,{"page-title":e.pageTitle},{body:f(()=>[l(o,{tag:`p`,html:`_A_ACCORDION_COMPONENT_DESCRIPTION_`}),l(s),l(c),l(d),l(h),l(g),l(_),l(v),l(y,{data:e.dataProps},null,8,[`data`]),l(y,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),l(y,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),l(b,{files:`utils/accordion`})]),_:1},8,[`page-title`])}var ae=s(re,[[`render`,ie]]);export{ae as default};