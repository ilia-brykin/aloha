import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{t}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{t as n}from"./chunk.AlohaExample.VTWuqY0j.js";import{W as r,g as i,hn as a,k as o,mn as s,sn as c,t as l}from"./bundle.index.D-5bYXwk.js";import{Gt as u,Ht as d,Jt as f,Qt as p,Sn as m,Ut as h,Vt as g,_n as _,cn as v,mn as y,on as b,un as x,zt as S}from"./chunk.vendor.DL09mhUf.js";function ee(){return{codeHtml:`<a-button
  class="a_btn a_btn_danger"
  text="_A_NOTIFICATION_EXAMPLE_DELETE_BTN_"
  @click="deleteDocument"
/>`}}function C(){return{codeJs:`import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const deleteDocument = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_DELETED_",
        timeout: 8000,
        actions: [
          {
            text: "_A_NOTIFICATION_EXAMPLE_UNDO_",
            onClick: () => {
              addNotification({
                text: "_A_NOTIFICATION_EXAMPLE_RESTORED_",
                type: "info",
              });
            },
          },
        ],
      });
    };

    return {
      deleteDocument,
    };
  },
};`}}var w={name:`PageNotificationActions`,components:{AlohaExample:n,AButton:c},setup(){let{codeHtml:e}=ee(),{codeJs:t}=C(),{addNotification:n}=o();return{codeHtml:e,codeJs:t,deleteDocument:()=>{n({text:`_A_NOTIFICATION_EXAMPLE_DELETED_`,timeout:8e3,actions:[{text:`_A_NOTIFICATION_EXAMPLE_UNDO_`,onClick:()=>{n({text:`_A_NOTIFICATION_EXAMPLE_RESTORED_`,type:`info`})}}]})}}}};function T(e,t,n,r,i,a){let o=x(`a-button`),s=x(`aloha-example`);return b(),h(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NOTIFICATION_ACTIONS_HEADER_`,description:`_A_NOTIFICATION_ACTIONS_DESCRIPTION_`},{default:y(()=>[f(o,{class:`a_btn a_btn_danger`,text:`_A_NOTIFICATION_EXAMPLE_DELETE_BTN_`,onClick:e.deleteDocument},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var E=l(w,[[`render`,T]]);function D(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    v-for="type in types"
    :key="type"
    :class="\`a_btn a_btn_\${ type }\`"
    :text="\`_A_NOTIFICATION_EXAMPLE_BTN_\${ type.toUpperCase() }_\`"
    @click="add(type)"
  />
</div>

<!-- once in App.vue -->
<a-notification />`}}function O(){return{codeJs:`import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const types = ["success", "info", "warning", "danger"];

    const add = type => {
      addNotification({
        text: \`_A_NOTIFICATION_EXAMPLE_TEXT_\${ type.toUpperCase() }_\`,
        type,
      });
    };

    return {
      add,
      types,
    };
  },
};`}}var k={name:`PageNotificationBasic`,components:{AlohaExample:n,AButton:c},setup(){let{codeHtml:e}=D(),{codeJs:t}=O(),{addNotification:n}=o();return{codeHtml:e,codeJs:t,add:e=>{n({text:`_A_NOTIFICATION_EXAMPLE_TEXT_${e.toUpperCase()}_`,type:e})},types:[`success`,`info`,`warning`,`danger`]}}},A={class:`a_d_flex a_flex_wrap a_gap_2`};function j(e,t,n,r,i,a){let o=x(`a-button`),s=x(`aloha-example`);return b(),h(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_NOTIFICATION_BASIC_DESCRIPTION_`},{default:y(()=>[d(`div`,A,[(b(!0),u(S,null,v(e.types,t=>(b(),h(o,{key:t,class:m(`a_btn a_btn_${t}`),text:`_A_NOTIFICATION_EXAMPLE_BTN_${t.toUpperCase()}_`,onClick:n=>e.add(t)},null,8,[`class`,`text`,`onClick`]))),128))])]),_:1},8,[`code-html`,`code-js`])}var M=l(k,[[`render`,j]]);function N(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    class="a_btn a_btn_danger"
    text="_A_NOTIFICATION_EXAMPLE_ERROR_BTN_"
    @click="addError"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_NOTIFICATION_EXAMPLE_ERROR_ALL_BTN_"
    @click="addErrorWithoutDeduplicate"
  />
</div>`}}function P(){return{codeJs:`import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const addError = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_CONNECTION_",
        type: "danger",
      });
    };

    const addErrorWithoutDeduplicate = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_CONNECTION_",
        type: "danger",
        deduplicate: false,
      });
    };

    return {
      addError,
      addErrorWithoutDeduplicate,
    };
  },
};`}}var F={name:`PageNotificationDeduplicate`,components:{AlohaExample:n,AButton:c},setup(){let{codeHtml:e}=N(),{codeJs:t}=P(),{addNotification:n}=o();return{codeHtml:e,codeJs:t,addError:()=>{n({text:`_A_NOTIFICATION_EXAMPLE_CONNECTION_`,type:`danger`})},addErrorWithoutDeduplicate:()=>{n({text:`_A_NOTIFICATION_EXAMPLE_CONNECTION_`,type:`danger`,deduplicate:!1})}}}},I={class:`a_d_flex a_flex_wrap a_gap_2`};function L(e,t,n,r,i,a){let o=x(`a-button`),s=x(`aloha-example`);return b(),h(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NOTIFICATION_DEDUPLICATE_HEADER_`,description:`_A_NOTIFICATION_DEDUPLICATE_DESCRIPTION_`},{default:y(()=>[d(`div`,I,[f(o,{class:`a_btn a_btn_danger`,text:`_A_NOTIFICATION_EXAMPLE_ERROR_BTN_`,onClick:e.addError},null,8,[`onClick`]),f(o,{class:`a_btn a_btn_secondary`,text:`_A_NOTIFICATION_EXAMPLE_ERROR_ALL_BTN_`,onClick:e.addErrorWithoutDeduplicate},null,8,[`onClick`])])]),_:1},8,[`code-html`,`code-js`])}var R=l(F,[[`render`,L]]);function z(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_UPLOAD_BTN_"
  @click="add"
/>`}}function B(){return{codeJs:`import {
  h,
} from "vue";

import {
  AButton,
  ANotificationAPI,
  ATranslation,
} from "aloha-vue";

// own content: gets its props, the notification and close()
const UploadDone = {
  props: {
    close: {
      type: Function,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    notification: {
      type: Object,
      required: true,
    },
  },
  render() {
    return h("div", [
      h(ATranslation, {
        tag: "p",
        class: "a_mb_2",
        text: "_A_NOTIFICATION_EXAMPLE_UPLOAD_TEXT_",
        extra: { file: this.file },
      }),
      h(AButton, {
        class: "a_btn a_btn_primary a_btn_small",
        text: "_A_NOTIFICATION_EXAMPLE_UPLOAD_OPEN_",
        onClick: this.close,
      }),
    ]);
  },
};

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const add = () => {
      addNotification({
        component: UploadDone,
        props: { file: "report.pdf" },
        timeout: 0,
      });
    };

    return {
      add,
    };
  },
};`}}var V={props:{close:{type:Function,required:!0},file:{type:String,required:!0},notification:{type:Object,required:!0}},render(){return p(`div`,[p(s,{tag:`p`,class:`a_mb_2`,text:`_A_NOTIFICATION_EXAMPLE_UPLOAD_TEXT_`,extra:{file:this.file}}),p(c,{class:`a_btn a_btn_primary a_btn_small`,text:`_A_NOTIFICATION_EXAMPLE_UPLOAD_OPEN_`,onClick:this.close})])}},H={name:`PageNotificationOwnComponent`,components:{AlohaExample:n,AButton:c},setup(){let{codeHtml:e}=z(),{codeJs:t}=B(),{addNotification:n}=o();return{codeHtml:e,codeJs:t,add:()=>{n({component:V,props:{file:`report.pdf`},timeout:0})}}}};function U(e,t,n,r,i,a){let o=x(`a-button`),s=x(`aloha-example`);return b(),h(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NOTIFICATION_COMPONENT_HEADER_`,description:`_A_NOTIFICATION_OWN_COMPONENT_DESCRIPTION_`},{default:y(()=>[f(o,{class:`a_btn a_btn_primary`,text:`_A_NOTIFICATION_EXAMPLE_UPLOAD_BTN_`,onClick:e.add},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var W=l(H,[[`render`,U]]);function G(){return{codeHtml:`<a-radio
  v-model="placement"
  :data="placements"
  label="placement"
/>
<a-radio
  v-model="size"
  :data="sizes"
  label="size"
/>
<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_SHOW_BTN_"
  @click="add"
/>
<a-notification
  name="example_placement"
  :max="3"
  :placement="placement"
  :size="size === 'default' ? undefined : size"
/>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  ANotification,
  ANotificationAPI,
  ARadio,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ANotification,
    ARadio,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const placement = ref("top-end");
    const size = ref("small");
    const placements = ["top-start", "top-center", "top-end", "bottom-start", "bottom-center", "bottom-end"]
      .map(value => ({ value, label: value }));
    const sizes = ["default", "small", "large", "xl"]
      .map(value => ({ value, label: value }));

    let count = 0;
    const add = () => {
      count++;
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_PLACEMENT_TEXT_",
        extra: { count, placement: placement.value },
        container: "example_placement",
        type: "info",
      });
    };

    return {
      add,
      placement,
      placements,
      size,
      sizes,
    };
  },
};`}}var te={name:`PageNotificationPlacement`,components:{AlohaExample:n,AButton:c,ANotification:i,ARadio:r},setup(){let{codeHtml:e}=G(),{codeJs:t}=K(),{addNotification:n}=o(),r=_(`top-end`),i=_(`small`),a=[`top-start`,`top-center`,`top-end`,`bottom-start`,`bottom-center`,`bottom-end`].map(e=>({value:e,label:e})),s=[`default`,`small`,`large`,`xl`].map(e=>({value:e,label:e})),c=0;return{codeHtml:e,codeJs:t,add:()=>{c++,n({text:`_A_NOTIFICATION_EXAMPLE_PLACEMENT_TEXT_`,extra:{count:c,placement:r.value},container:`example_placement`,type:`info`})},placement:r,placements:a,size:i,sizes:s}}},q={class:`a_d_flex a_flex_wrap a_gap_4 a_mb_3`};function J(e,t,n,r,i,a){let o=x(`a-radio`),s=x(`a-button`),c=x(`a-notification`),l=x(`aloha-example`);return b(),h(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NOTIFICATION_PLACEMENT_HEADER_`,description:`_A_NOTIFICATION_PLACEMENT_DESCRIPTION_`,props:[`name`,`placement`,`size`,`width`,`max`]},{default:y(()=>[d(`div`,q,[f(o,{modelValue:e.placement,"onUpdate:modelValue":t[0]||=t=>e.placement=t,data:e.placements,label:`placement`},null,8,[`modelValue`,`data`]),f(o,{modelValue:e.size,"onUpdate:modelValue":t[1]||=t=>e.size=t,data:e.sizes,label:`size`},null,8,[`modelValue`,`data`])]),f(s,{class:`a_btn a_btn_primary`,text:`_A_NOTIFICATION_EXAMPLE_SHOW_BTN_`,onClick:e.add},null,8,[`onClick`]),f(c,{name:`example_placement`,max:3,placement:e.placement,size:e.size==="default"?void 0:e.size},null,8,[`placement`,`size`])]),_:1},8,[`code-html`,`code-js`])}var Y=l(te,[[`render`,J]]);function X(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_SHOW_BTN_"
  @click="add"
/>
<a-notification
  name="example_progress"
  :has-progress="true"
  placement="bottom-end"
  :width="360"
/>`}}function Z(){return{codeJs:`import {
  AButton,
  ANotification,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ANotification,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const add = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_PROGRESS_TEXT_",
        container: "example_progress",
        timeout: 8000,
        deduplicate: false,
      });
    };

    return {
      add,
    };
  },
};`}}var Q={name:`PageNotificationProgress`,components:{AlohaExample:n,AButton:c,ANotification:i},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z(),{addNotification:n}=o();return{codeHtml:e,codeJs:t,add:()=>{n({text:`_A_NOTIFICATION_EXAMPLE_PROGRESS_TEXT_`,container:`example_progress`,timeout:8e3,deduplicate:!1})}}}};function ne(e,t,n,r,i,a){let o=x(`a-button`),s=x(`a-notification`),c=x(`aloha-example`);return b(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NOTIFICATION_PROGRESS_HEADER_`,description:`_A_NOTIFICATION_PROGRESS_DESCRIPTION_`,props:[`has-progress`]},{default:y(()=>[f(o,{class:`a_btn a_btn_primary`,text:`_A_NOTIFICATION_EXAMPLE_SHOW_BTN_`,onClick:e.add},null,8,[`onClick`]),f(s,{name:`example_progress`,"has-progress":!0,placement:`bottom-end`,width:360})]),_:1},8,[`code-html`,`code-js`])}var re=l(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_NOTIFICATION_EXAMPLE_SAVE_BTN_"
    @click="save"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_NOTIFICATION_EXAMPLE_CLEAR_BTN_"
    @click="clearNotifications"
  />
</div>`}}function ae(){return{codeJs:`import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
      clearNotifications,
      removeNotification,
    } = ANotificationAPI();

    const save = () => {
      const id = addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_SAVING_",
        type: "info",
        timeout: 0,
      });
      // e.g. after the answer of the server
      setTimeout(() => {
        removeNotification(id);
        addNotification({
          text: "_A_NOTIFICATION_EXAMPLE_SAVED_",
        });
      }, 2000);
    };

    return {
      clearNotifications,
      save,
    };
  },
};`}}var oe={name:`PageNotificationRemove`,components:{AlohaExample:n,AButton:c},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae(),{addNotification:n,clearNotifications:r,removeNotification:i}=o();return{codeHtml:e,codeJs:t,clearNotifications:r,save:()=>{let e=n({text:`_A_NOTIFICATION_EXAMPLE_SAVING_`,type:`info`,timeout:0});setTimeout(()=>{i(e),n({text:`_A_NOTIFICATION_EXAMPLE_SAVED_`})},2e3)}}}},se={class:`a_d_flex a_flex_wrap a_gap_2`};function ce(e,t,n,r,i,a){let o=x(`a-button`),s=x(`aloha-example`);return b(),h(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NOTIFICATION_REMOVE_HEADER_`,description:`_A_NOTIFICATION_REMOVE_DESCRIPTION_`},{default:y(()=>[d(`div`,se,[f(o,{class:`a_btn a_btn_primary`,text:`_A_NOTIFICATION_EXAMPLE_SAVE_BTN_`,onClick:e.save},null,8,[`onClick`]),f(o,{class:`a_btn a_btn_secondary`,text:`_A_NOTIFICATION_EXAMPLE_CLEAR_BTN_`,onClick:e.clearNotifications},null,8,[`onClick`])])]),_:1},8,[`code-html`,`code-js`])}var le=l(oe,[[`render`,ce]]);function ue(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_TITLE_BTN_"
  @click="add"
/>`}}function de(){return{codeJs:`import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const add = () => {
      addNotification({
        title: "_A_NOTIFICATION_EXAMPLE_TITLE_",
        text: "_A_NOTIFICATION_EXAMPLE_TITLE_TEXT_",
        extra: { name: "Anna" },
        icon: "Envelope",
        type: "info",
        announce: "status",
      });
    };

    return {
      add,
    };
  },
};`}}var fe={name:`PageNotificationTitle`,components:{AlohaExample:n,AButton:c},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de(),{addNotification:n}=o();return{codeHtml:e,codeJs:t,add:()=>{n({title:`_A_NOTIFICATION_EXAMPLE_TITLE_`,text:`_A_NOTIFICATION_EXAMPLE_TITLE_TEXT_`,extra:{name:`Anna`},icon:`Envelope`,type:`info`,announce:`status`})}}}};function pe(e,t,n,r,i,a){let o=x(`a-button`),s=x(`aloha-example`);return b(),h(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_NOTIFICATION_TITLE_HEADER_`,description:`_A_NOTIFICATION_TITLE_DESCRIPTION_`},{default:y(()=>[f(o,{class:`a_btn a_btn_primary`,text:`_A_NOTIFICATION_EXAMPLE_TITLE_BTN_`,onClick:e.add},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var $=l(fe,[[`render`,pe]]);function me(){return{dataFunctions:[{name:`addNotification(options)`,description:`_A_NOTIFICATION_FUNCTIONS_ADD_DESCRIPTION_`},{name:`removeNotification(id)`,description:`_A_NOTIFICATION_FUNCTIONS_REMOVE_DESCRIPTION_`},{name:`clearNotifications({ container })`,description:`_A_NOTIFICATION_FUNCTIONS_CLEAR_DESCRIPTION_`},{name:`setNotificationTimeout(timeout)`,description:`_A_NOTIFICATION_FUNCTIONS_SET_TIMEOUT_DESCRIPTION_`},{name:`pauseNotifications(container) / resumeNotifications(container)`,description:`_A_NOTIFICATION_FUNCTIONS_PAUSE_DESCRIPTION_`}],dataOptions:[{name:`text`,description:`_A_NOTIFICATION_OPTIONS_TEXT_DESCRIPTION_`,type:`String / Object`,default:void 0},{name:`title`,description:`_A_NOTIFICATION_OPTIONS_TITLE_DESCRIPTION_`,type:`String`,default:void 0},{name:`type`,description:`_A_NOTIFICATION_OPTIONS_TYPE_DESCRIPTION_`,type:`String`,default:`"success"`},{name:`timeout`,description:`_A_NOTIFICATION_OPTIONS_TIMEOUT_DESCRIPTION_`,type:`Number`,default:`5000`},{name:`extra`,description:`_A_NOTIFICATION_OPTIONS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0},{name:`alwaysTranslate`,description:`_A_NOTIFICATION_OPTIONS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0},{name:`icon`,description:`_A_NOTIFICATION_OPTIONS_ICON_DESCRIPTION_`,type:`String`,default:void 0},{name:`announce`,description:`_A_NOTIFICATION_OPTIONS_ANNOUNCE_DESCRIPTION_`,type:`String`,default:`"alert"`},{name:`actions`,description:`_A_NOTIFICATION_OPTIONS_ACTIONS_DESCRIPTION_`,type:`Array`,default:void 0},{name:`component`,description:`_A_NOTIFICATION_OPTIONS_COMPONENT_DESCRIPTION_`,type:`Object`,default:void 0},{name:`props`,description:`_A_NOTIFICATION_OPTIONS_PROPS_DESCRIPTION_`,type:`Object`,default:void 0},{name:`container`,description:`_A_NOTIFICATION_OPTIONS_CONTAINER_DESCRIPTION_`,type:`String`,default:void 0},{name:`deduplicate`,description:`_A_NOTIFICATION_OPTIONS_DEDUPLICATE_DESCRIPTION_`,type:`Boolean`,default:`true`},{name:`useValuesFromObject`,description:`_A_NOTIFICATION_OPTIONS_USE_VALUES_FROM_OBJECT_DESCRIPTION_`,type:`Boolean`,default:`true`}]}}function he(){let e=g(()=>a({placeholder:`_A_NOTIFICATION_COMPONENT_NAME_`}));return{pageTitle:g(()=>`ANotification${e.value?` (${e.value})`:``}`)}}function ge(){return{dataProps:[{name:`has-progress`,description:`_A_NOTIFICATION_PROPS_HAS_PROGRESS_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`max`,description:`_A_NOTIFICATION_PROPS_MAX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`name`,description:`_A_NOTIFICATION_PROPS_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`placement`,description:`_A_NOTIFICATION_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"top-center"`,required:!1},{name:`size`,description:`_A_NOTIFICATION_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`width`,description:`_A_NOTIFICATION_PROPS_WIDTH_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1}]}}var _e={name:`PageNotification`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:s,PageNotificationBasic:M,PageNotificationTitle:$,PageNotificationActions:E,PageNotificationPlacement:Y,PageNotificationProgress:re,PageNotificationDeduplicate:R,PageNotificationRemove:le,PageNotificationOwnComponent:W},setup(){let{pageTitle:e}=he(),{dataProps:t}=ge(),{dataFunctions:n,dataOptions:r}=me();return{dataFunctions:n,dataOptions:r,dataProps:t,pageTitle:e}}};function ve(e,t,n,r,i,a){let o=x(`a-translation`),s=x(`page-notification-basic`),c=x(`page-notification-title`),l=x(`page-notification-actions`),u=x(`page-notification-placement`),d=x(`page-notification-progress`),p=x(`page-notification-deduplicate`),m=x(`page-notification-remove`),g=x(`page-notification-own-component`),_=x(`aloha-table-props`),v=x(`aloha-table-css-vars`),S=x(`aloha-page`);return b(),h(S,{"page-title":e.pageTitle},{body:y(()=>[f(o,{tag:`p`,html:`_A_NOTIFICATION_COMPONENT_DESCRIPTION_`}),f(s),f(c),f(l),f(u),f(d),f(p),f(m),f(g),f(_,{data:e.dataProps},null,8,[`data`]),f(_,{"table-label":`_A_NOTIFICATION_FUNCTIONS_HEADER_`,data:e.dataFunctions,columns:[`name`,`description`]},null,8,[`data`]),f(_,{"table-label":`_A_NOTIFICATION_OPTIONS_HEADER_`,data:e.dataOptions,columns:[`name`,`type`,`default`,`description`]},null,8,[`data`]),f(v,{files:`utils/notification`})]),_:1},8,[`page-title`])}var ye=l(_e,[[`render`,ve]]);export{ye as default};