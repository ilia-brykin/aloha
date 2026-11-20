import{t as e}from"./chunk.AlohaPage.yLRZ4vv4.js";import{Ft as t,It as n,Pt as r,Qt as i,Vt as a,cn as o,nn as s,on as c}from"./chunk.vendor.CTxSDDRk.js";import{t as l}from"./chunk.AlohaExample.BUm8D4me.js";import{G as u,Xt as d,a as f,pt as p}from"./bundle.index.DdSVYuNk.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function g(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormBasic",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        keyLabel: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
      },
      {
        id: "name",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_NAME_",
          type: "text",
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_TEAM_",
          options: {
            data: [
              { label: "_A_TABLE_FORM_TEAM_NORTH_", value: "north" },
              { label: "_A_TABLE_FORM_TEAM_WEST_", value: "west" },
              { label: "_A_TABLE_FORM_TEAM_SOUTH_", value: "south" },
              { label: "_A_TABLE_FORM_TEAM_EAST_", value: "east" },
            ],
            keyId: "value",
            keyLabel: "label",
          },
          type: "select",
        },
        keyLabel: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
      },
      {
        id: "score",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_SCORE_",
          options: {
            min: 0,
          },
          type: "integer",
        },
        keyLabel: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "ÐœÐ°Ñ€Ñ‚Ð° Ð˜Ð²Ð°Ð½Ð¾Ð²Ð°",
        position: 1,
        score: 18,
        team: "north",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    return {
      columns,
      rows,
      rowsFooter,
    };
  },
};`}}var _={name:`PageTableFormBasic`,components:{AlohaExample:l,ATableForm:f},setup(){let{codeHtml:e}=h(),{codeJs:t}=g();return{codeHtml:e,codeJs:t,columns:[{id:`position`,label:`_A_TABLE_FORM_COLUMN_POSITION_`,maxWidth:96,minWidth:96,width:96,formElement:{type:`number`}},{id:`name`,label:`_A_TABLE_FORM_COLUMN_NAME_`,maxWidth:`18rem`,minWidth:`12rem`,width:`16rem`,formElement:{type:`text`}},{id:`team`,formElement:{translateData:!0,data:[{label:`_A_TABLE_FORM_TEAM_NORTH_`,value:`north`},{label:`_A_TABLE_FORM_TEAM_WEST_`,value:`west`},{label:`_A_TABLE_FORM_TEAM_SOUTH_`,value:`south`},{label:`_A_TABLE_FORM_TEAM_EAST_`,value:`east`}],keyId:`value`,keyLabel:`label`,type:`select`},label:`_A_TABLE_FORM_COLUMN_TEAM_`,minWidth:`12rem`},{id:`score`,footerDefaultValue:`68`,footerKeyLabel:`score`,formElement:{type:`integer`},label:`_A_TABLE_FORM_COLUMN_SCORE_`,maxWidth:120,minWidth:120,width:120}],rows:o([{id:1,name:`Марта Иванова`,position:1,score:18,team:`north`},{id:2,name:`Олег Сидоров`,position:2,score:17,team:`west`},{id:3,name:`Анна Петрова`,position:3,score:16,team:`south`},{id:4,name:`Игорь Ковалёв`,position:4,score:17,team:`east`}]),rowsFooter:[{name:`_A_TABLE_FORM_FOOTER_TOTAL_`,score:68}]}}};function v(e,t,r,o,l,u){let d=s(`a-table-form`),f=s(`aloha-example`);return i(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_FORM_EXAMPLE_HEADER_`},{default:c(()=>[a(d,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":`id`,label:`_A_TABLE_FORM_EXAMPLE_LABEL_`},null,8,[`columns`,`rows-footer`,`rows`])]),_:1},8,[`code-html`,`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{codeHtml:`<a-table-form
  :actions-disabled-callback="actionsDisabledCallback"
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function x(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormDND",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        keyLabel: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
      },
      {
        id: "name",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_NAME_",
          type: "text",
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_TEAM_",
          options: {
            data: [
              { label: "Ð¡ÐµÐ²ÐµÑ€", value: "Ð¡ÐµÐ²ÐµÑ€" },
              { label: "Ð—Ð°Ð¿Ð°Ð´", value: "Ð—Ð°Ð¿Ð°Ð´" },
              { label: "Ð®Ð³", value: "Ð®Ð³" },
              { label: "Ð’Ð¾ÑÑ‚Ð¾Ðº", value: "Ð’Ð¾ÑÑ‚Ð¾Ðº" },
            ],
            keyId: "value",
            keyLabel: "label",
          },
          type: "select",
        },
        keyLabel: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
      },
      {
        id: "score",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_SCORE_",
          options: {
            min: 0,
          },
          type: "integer",
        },
        keyLabel: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
      },
    ];

    const rows = ref([
      {
        dndDisabled: true,
        id: 1,
        name: "Марта Иванова",
        position: 1,
        score: 18,
        team: "Север",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    const actionsDisabledCallback = {
      dnd: ({ row }) => row.dndDisabled,
    };

    const updateRows = ({ rows: _rows, trigger }) => {
      rows.value = _rows;
      console.log("trigger", trigger);
    };

    return {
      actionsDisabledCallback,
      columns,
      rows,
      rowsFooter,
      updateRows,
    };
  },
};`}}var S={name:`PageTableFormDND`,components:{AlohaExample:l,ATableForm:f},setup(){let{codeHtml:e}=b(),{codeJs:t}=x(),n=[{id:`position`,label:`_A_TABLE_FORM_COLUMN_POSITION_`,maxWidth:96,minWidth:96,width:96,formElement:{type:`text`}},{id:`name`,formElement:{type:`text`},label:`_A_TABLE_FORM_COLUMN_NAME_`,maxWidth:`18rem`,minWidth:`12rem`,width:`16rem`},{id:`team`,formElement:{translateData:!0,data:[{label:`_A_TABLE_FORM_TEAM_NORTH_`,value:`north`},{label:`_A_TABLE_FORM_TEAM_WEST_`,value:`west`},{label:`_A_TABLE_FORM_TEAM_SOUTH_`,value:`south`},{label:`_A_TABLE_FORM_TEAM_EAST_`,value:`east`}],keyId:`value`,keyLabel:`label`,type:`select`},label:`_A_TABLE_FORM_COLUMN_TEAM_`,minWidth:`12rem`},{id:`score`,footerDefaultValue:`68`,footerKeyLabel:`score`,formElement:{type:`integer`},label:`_A_TABLE_FORM_COLUMN_SCORE_`,maxWidth:120,minWidth:120,width:120}],r=o([{id:1,name:`Марта Иванова`,position:1,score:18,team:`north`},{dndDisabled:!0,id:2,name:`Олег Сидоров`,position:2,score:17,team:`west`},{id:3,name:`Анна Петрова`,position:3,score:16,team:`south`},{id:4,name:`Игорь Ковалёв`,position:4,score:17,team:`east`}]);return{codeHtml:e,codeJs:t,columns:n,actionsDisabledCallback:{dnd:({row:e})=>e.dndDisabled},rows:r,rowsFooter:[{name:`_A_TABLE_FORM_FOOTER_TOTAL_`,score:68}],updateRows:({rows:e,trigger:t})=>{r.value=e,console.log(`trigger`,t)}}}};function C(e,t,r,o,l,u){let d=s(`a-table-form`),f=s(`aloha-example`);return i(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_FORM_DND_HEADER_`,description:`_A_TABLE_FORM_DND_DESCRIPTION_`,props:[`actions-disabled-callback`,`is-drag-and-drop`]},{default:c(()=>[a(d,{"actions-disabled-callback":e.actionsDisabledCallback,columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":`id`,label:`_A_TABLE_FORM_EXAMPLE_LABEL_`,onUpdateRows:e.updateRows},null,8,[`actions-disabled-callback`,`columns`,`rows-footer`,`rows`,`onUpdateRows`])]),_:1},8,[`code-html`,`code-js`])}var w=m(S,[[`render`,C]]);function T(){return{codeHtml:`<a-checkbox>
  v-model="modelCheckbox"
  :data="dataCheckbox"
  :translate-data="true"
  class="a_mb_4"
  key-id="value"
  key-label="label"
</a-checkbox>
<a-simple-table
  :add-row="addRow"
  :columns="columns"
  :is-addable="modelCheckbox.includes('is-addable')"
  :is-deletable-confirm="modelCheckbox.includes('is-deletable-confirm')"
  :is-deletable="modelCheckbox.includes('is-deletable')"
  :is-edit-on-row-click="modelCheckbox.includes('is-edit-on-row-click')"
  :is-editable="modelCheckbox.includes('is-editable')"
  :rows-footer="rowsFooter"
  :rows="rows"
  :save-row="saveRow"
  :texts="texts"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @delete-row="deleteRow"
/>
`}}function E(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormEdit",
  components: {
    ATableForm,
  },
  setup() {
    const dataCheckbox = [
      {
        label: "is-deletable-confirm",
        value: "is-deletable-confirm",
      },
      {
        label: "is-deletable",
        value: "is-deletable",
      },
      {
        label: "is-editable",
        value: "is-editable",
      },
      {
        label: "is-edit-on-row-click",
        value: "is-edit-on-row-click",
      },
      {
        label: "is-addable",
        value: "is-addable",
      },
    ];
    const modelCheckbox = ref(["is-deletable-confirm", "is-deletable", "is-editable", "is-edit-on-row-click", "is-addable"]);

    const texts = {
      actionEditCancel: "abbrechen",
      actionEditSave: "speichern",
      editInfoText: "Nur diese Zeile ist gerade im Bearbeitungsmodus.",
    };

    const columns = [
      {
        id: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        maxWidth: 96,
        minWidth: 96,
        width: 96,
        formElement: {
          controlsType: "none",
          type: "integer",
        },
      },
      {
        id: "name",
        formElement: {
          type: "text",
          required: true,
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        maxWidth: "18rem",
        minWidth: "12rem",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          data: [
            {
              label: "_A_TABLE_FORM_TEAM_NORTH_",
              value: "north",
            },
            {
              label: "_A_TABLE_FORM_TEAM_WEST_",
              value: "west",
            },
            {
              label: "_A_TABLE_FORM_TEAM_SOUTH_",
              value: "south",
            },
            {
              label: "_A_TABLE_FORM_TEAM_EAST_",
              value: "east",
            },
          ],
          keyId: "value",
          keyLabel: "label",
          translateData: true,
          type: "select",
        },
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
        minWidth: "12rem",
      },
      {
        id: "score",
        footerDefaultValue: "68",
        footerKeyLabel: "score",
        formElement: {
          controlsType: "none",
          min: 0,
          type: "integer",
        },
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        maxWidth: 120,
        minWidth: 120,
        width: 120,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "Marta Ivanova",
        position: 1,
        score: 18,
        team: "north",
      },
      {
        id: 2,
        name: "Oleg Sidorov",
        position: 2,
        score: 17,
        team: "west",
      },
      {
        id: 3,
        name: "Anna Petrova",
        position: 3,
        score: 16,
        team: "south",
      },
      {
        id: 4,
        name: "Igor Kovalev",
        position: 4,
        score: 17,
        team: "east",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    const saveRow = async({ model, rowIndex }) => {
      await new Promise(resolve => {
        setTimeout(resolve, 300);
      });

      const errors = {};

      if (!model.name?.trim()) {
        errors.name = ["Name ist erforderlich."];
      }

      if (!model.team) {
        errors.team = ["Team ist erforderlich."];
      }

      if (model.score < 18) {
        errors.score = ["Score must be at least 18."];
      }

      if (Object.keys(errors).length) {
        return {
          errors,
        };
      }

      rows.value.splice(rowIndex, 1, model);
    };

    const deleteRow = ({ row, rowIndex }) => {
      rows.value.splice(rowIndex, 1);
      console.log("row", row);
      console.log("rowIndex", rowIndex);
    };

    const addRow = ({ model }) => {
      console.log("model ", model);
      const errors = {};

      if (!model.name?.trim()) {
        errors.name = ["Name ist erforderlich."];
      }

      if (!model.team) {
        errors.team = ["Team ist erforderlich."];
      }

      if (model.score < 18) {
        errors.score = ["Score must be at least 18."];
      }

      if (Object.keys(errors).length) {
        return {
          errors,
        };
      }
      rows.value.push({
        id: rows.value.length + 1,
        ...model,
      });
    };

    return {
      addRow,
      columns,
      dataCheckbox,
      deleteRow,
      modelCheckbox,
      rows,
      rowsFooter,
      saveRow,
      texts,
    };
  },
};`}}var D={name:`PageTableFormEdit`,components:{ACheckbox:p,AlohaExample:l,ATableForm:f},setup(){let{codeHtml:e}=T(),{codeJs:t}=E(),n=[{label:`is-deletable-confirm`,value:`is-deletable-confirm`},{label:`is-deletable`,value:`is-deletable`},{label:`is-editable`,value:`is-editable`},{label:`is-edit-on-row-click`,value:`is-edit-on-row-click`},{label:`is-addable`,value:`is-addable`}],r=o([`is-deletable-confirm`,`is-deletable`,`is-editable`,`is-edit-on-row-click`,`is-addable`]),i={actionEditCancel:`abbrechen`,actionEditSave:`speichern`,editInfoText:`Nur diese Zeile ist gerade im Bearbeitungsmodus.`},a=[{id:`position`,label:`_A_TABLE_FORM_COLUMN_POSITION_`,maxWidth:96,minWidth:96,width:96,formElement:{controlsType:`none`,type:`integer`}},{id:`name`,formElement:{type:`text`,required:!0},keyLabel:`name`,label:`_A_TABLE_FORM_COLUMN_NAME_`,maxWidth:`18rem`,minWidth:`12rem`,width:`16rem`},{id:`team`,formElement:{data:[{label:`_A_TABLE_FORM_TEAM_NORTH_`,value:`north`},{label:`_A_TABLE_FORM_TEAM_WEST_`,value:`west`},{label:`_A_TABLE_FORM_TEAM_SOUTH_`,value:`south`},{label:`_A_TABLE_FORM_TEAM_EAST_`,value:`east`}],keyId:`value`,keyLabel:`label`,translateData:!0,type:`select`},label:`_A_TABLE_FORM_COLUMN_TEAM_`,minWidth:`12rem`},{id:`score`,footerDefaultValue:`68`,footerKeyLabel:`score`,formElement:{controlsType:`none`,min:0,type:`integer`},label:`_A_TABLE_FORM_COLUMN_SCORE_`,maxWidth:120,minWidth:120,width:120}],s=o([{id:1,name:`Marta Ivanova`,position:1,score:18,team:`north`},{id:2,name:`Oleg Sidorov`,position:2,score:17,team:`west`},{id:3,name:`Anna Petrova`,position:3,score:16,team:`south`},{id:4,name:`Igor Kovalev`,position:4,score:17,team:`east`}]);return{addRow:({model:e})=>{console.log(`model `,e);let t={};if(e.name?.trim()||(t.name=[`Name ist erforderlich.`]),e.team||(t.team=[`Team ist erforderlich.`]),e.score<18&&(t.score=[`Score must be at least 18.`]),Object.keys(t).length)return{errors:t};s.value.push({id:s.value.length+1,...e})},codeHtml:e,codeJs:t,columns:a,dataCheckbox:n,deleteRow:({row:e,rowIndex:t})=>{s.value.splice(t,1),console.log(`row`,e),console.log(`rowIndex`,t)},modelCheckbox:r,rows:s,rowsFooter:[{name:`_A_TABLE_FORM_FOOTER_TOTAL_`,score:68}],saveRow:async({model:e,rowIndex:t})=>{await new Promise(e=>{setTimeout(e,300)});let n={};if(e.name?.trim()||(n.name=[`Name ist erforderlich.`]),e.team||(n.team=[`Team ist erforderlich.`]),e.score<18&&(n.score=[`Score must be at least 18.`]),Object.keys(n).length)return{errors:n};s.value.splice(t,1,e)},texts:i}}};function O(e,t,r,o,l,u){let d=s(`a-checkbox`),f=s(`a-table-form`),p=s(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_FORM_EDIT_HEADER_`,description:`_A_TABLE_FORM_EDIT_DESCRIPTION_`,props:[`is-addable`,`is-deletable`,`is-deletable-confirm`,`is-editable`,`save-row`,`texts`]},{default:c(()=>[a(d,{class:`a_mb_4`,modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||=t=>e.modelCheckbox=t,data:e.dataCheckbox,"translate-data":!0,"key-id":`value`,"key-label":`label`},null,8,[`modelValue`,`data`]),a(f,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes(`is-addable`),"is-deletable-confirm":e.modelCheckbox.includes(`is-deletable-confirm`),"is-deletable":e.modelCheckbox.includes(`is-deletable`),"is-edit-on-row-click":e.modelCheckbox.includes(`is-edit-on-row-click`),"is-editable":e.modelCheckbox.includes(`is-editable`),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":`id`,label:`_A_TABLE_FORM_EXAMPLE_LABEL_`,onDeleteRow:e.deleteRow},null,8,[`add-row`,`columns`,`is-addable`,`is-deletable-confirm`,`is-deletable`,`is-edit-on-row-click`,`is-editable`,`rows-footer`,`rows`,`save-row`,`texts`,`onDeleteRow`])]),_:1},8,[`code-html`,`code-js`])}var k=m(D,[[`render`,O]]);function A(){return{codeHtml:`<a-table-form
  :columns="columns"
  :is-editable="true"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "name",
        formElement: {
          type: "text",
        },
        label: "_A_TABLE_FORM_COLUMN_NAME_",
      },
      {
        id: "status",
        formElement: {
          data: [
            { label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_EDITABLE_", value: "editable" },
            { label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_LOCKED_", value: "locked" },
          ],
          keyId: "value",
          keyLabel: "label",
          translateData: true,
          type: "select",
        },
        label: "_A_TABLE_FORM_EDIT_PROPS_COLUMN_STATUS_",
      },
      {
        id: "score",
        formElement: {
          min: 0,
          type: "integer",
        },
        formElementEditPropsCallback: ({ rowData }) => ({
          disabled: rowData.status === "locked",
        }),
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
      },
    ];
    const rows = ref([
      { id: 1, name: "Marta Ivanova", score: 18, status: "editable" },
      { id: 2, name: "Oleg Sidorov", score: 17, status: "locked" },
    ]);
    const saveRow = ({ model, rowIndex }) => {
      rows.value.splice(rowIndex, 1, model);
    };

    return {
      columns,
      rows,
      saveRow,
    };
  },
};`}}var M={name:`PageTableFormEditProps`,components:{AlohaExample:l,ATableForm:f},setup(){let{codeHtml:e}=A(),{codeJs:t}=j(),n=[{id:`name`,formElement:{required:!0,type:`text`},label:`_A_TABLE_FORM_COLUMN_NAME_`},{id:`status`,formElement:{data:[{label:`_A_TABLE_FORM_EDIT_PROPS_STATUS_EDITABLE_`,value:`editable`},{label:`_A_TABLE_FORM_EDIT_PROPS_STATUS_LOCKED_`,value:`locked`}],keyId:`value`,keyLabel:`label`,translateData:!0,type:`select`},label:`_A_TABLE_FORM_EDIT_PROPS_COLUMN_STATUS_`},{id:`score`,formElement:{controlsType:`none`,min:0,type:`integer`},formElementEditPropsCallback:({rowData:e})=>({disabled:e.status===`locked`}),label:`_A_TABLE_FORM_COLUMN_SCORE_`,maxWidth:120,minWidth:120,width:120}],r=o([{id:1,name:`Marta Ivanova`,score:18,status:`editable`},{id:2,name:`Oleg Sidorov`,score:17,status:`locked`}]);return{codeHtml:e,codeJs:t,columns:n,rows:r,saveRow:({model:e,rowIndex:t})=>{r.value.splice(t,1,e)}}}};function N(e,t,r,o,l,u){let d=s(`a-table-form`),f=s(`aloha-example`);return i(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_FORM_EDIT_PROPS_HEADER_`,description:`_A_TABLE_FORM_EDIT_PROPS_DESCRIPTION_`,props:[`is-editable`,`save-row`]},{default:c(()=>[a(d,{columns:e.columns,"is-editable":!0,rows:e.rows,"save-row":e.saveRow,"key-id":`id`,label:`_A_TABLE_FORM_EXAMPLE_LABEL_`},null,8,[`columns`,`rows`,`save-row`])]),_:1},8,[`code-html`,`code-js`])}var P=m(M,[[`render`,N]]);function F(){return{codeHtml:`<a-checkbox
  v-model="modelCheckbox"
  :data="dataCheckbox"
  key-id="value"
  key-label="label"
/>

<div style="max-width: 40rem;">
  <a-table-form
    :columns="columns"
    :is-columns-grow="true"
    :is-deletable="modelCheckbox.includes('is-deletable')"
    :is-drag-and-drop="modelCheckbox.includes('is-drag-and-drop')"
    :is-editable="modelCheckbox.includes('is-editable')"
    :rows-footer="rowsFooter"
    :rows="rows"
    :save-row="saveRow"
    key-id="id"
    @delete-row="deleteRow"
  />
</div>

<a-table-form
  :columns="columns"
  :is-columns-grow="true"
  :is-deletable="modelCheckbox.includes('is-deletable')"
  :is-drag-and-drop="modelCheckbox.includes('is-drag-and-drop')"
  :is-editable="modelCheckbox.includes('is-editable')"
  :rows-footer="rowsFooter"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  @delete-row="deleteRow"
/>
`}}function I(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormGrow",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
        grow: 1,
      },
      {
        id: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
        grow: 2,
      },
      {
        id: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
        width: "12rem",
        grow: 1,
      },
      {
        id: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
        grow: 1,
      },
    ];

    const dataCheckbox = [
      { label: "is-deletable", value: "is-deletable" },
      { label: "is-editable", value: "is-editable" },
      { label: "is-drag-and-drop", value: "is-drag-and-drop" },
    ];
    const modelCheckbox = ref(["is-deletable", "is-editable"]);

    const rows = ref([
      {
        id: 1,
        name: "Marta Ivanova",
        position: 1,
        score: 18,
        team: "north",
      },
    ]);

    return {
      columns,
      dataCheckbox,
      modelCheckbox,
      rows,
    };
  },
};`}}var ee={name:`PageTableFormGrow`,components:{ACheckbox:p,AlohaExample:l,ATableForm:f},setup(){let{codeHtml:e}=F(),{codeJs:t}=I(),n=[{label:`is-deletable`,value:`is-deletable`},{label:`is-editable`,value:`is-editable`},{label:`is-drag-and-drop`,value:`is-drag-and-drop`}],r=o([`is-deletable`,`is-editable`]),i=[{id:`position`,label:`_A_TABLE_FORM_COLUMN_POSITION_`,minWidth:96,width:96,grow:1,formElement:{controlsType:`none`,type:`integer`}},{id:`name`,formElement:{type:`text`},label:`_A_TABLE_FORM_COLUMN_NAME_`,minWidth:`12rem`,width:`16rem`,grow:2},{id:`team`,formElement:{data:[{label:`_A_TABLE_FORM_TEAM_NORTH_`,value:`north`},{label:`_A_TABLE_FORM_TEAM_WEST_`,value:`west`},{label:`_A_TABLE_FORM_TEAM_SOUTH_`,value:`south`},{label:`_A_TABLE_FORM_TEAM_EAST_`,value:`east`}],keyId:`value`,keyLabel:`label`,translateData:!0,type:`select`},label:`_A_TABLE_FORM_COLUMN_TEAM_`,minWidth:`12rem`,width:`12rem`,grow:1},{id:`score`,footerDefaultValue:`68`,footerKeyLabel:`score`,formElement:{controlsType:`none`,min:0,type:`integer`},label:`_A_TABLE_FORM_COLUMN_SCORE_`,minWidth:120,width:120,grow:1}],a=[{id:`position`,label:`_A_TABLE_FORM_COLUMN_POSITION_`,minWidth:96,width:96,grow:1,formElement:{controlsType:`none`,type:`integer`}},{id:`name`,formElement:{type:`text`},label:`_A_TABLE_FORM_COLUMN_NAME_`,minWidth:`12rem`,width:`16rem`,grow:3}],s=o([{id:1,name:`Marta Ivanova`,position:1,score:18,team:`north`},{id:2,name:`Oleg Sidorov`,position:2,score:17,team:`west`},{id:3,name:`Anna Petrova`,position:3,score:16,team:`south`},{id:4,name:`Igor Kovalev`,position:4,score:17,team:`east`}]);return{codeHtml:e,codeJs:t,columns1:i,columns2:a,dataCheckbox:n,deleteRow:({rowIndex:e})=>{s.value.splice(e,1)},modelCheckbox:r,rows:s,rowsFooter:[{name:`_A_TABLE_FORM_FOOTER_TOTAL_`,score:68}],saveRow:({model:e,rowIndex:t})=>{s.value.splice(t,1,e)},texts:{editInfoText:`Only one row can be edited at a time.`}}}},L={class:`a_mb_4`};function R(e,r,o,l,u,d){let f=s(`a-checkbox`),p=s(`a-table-form`),m=s(`aloha-example`);return i(),n(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_FORM_GROW_HEADER_`,description:`_A_TABLE_FORM_GROW_DESCRIPTION_`,props:[`is-columns-grow`,`is-deletable`,`is-drag-and-drop`,`is-editable`]},{default:c(()=>[a(f,{class:`a_mb_4`,modelValue:e.modelCheckbox,"onUpdate:modelValue":r[0]||=t=>e.modelCheckbox=t,data:e.dataCheckbox,"key-id":`value`,"key-label":`label`},null,8,[`modelValue`,`data`]),t(`div`,L,[a(p,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes(`is-deletable`),"is-drag-and-drop":e.modelCheckbox.includes(`is-drag-and-drop`),"is-editable":e.modelCheckbox.includes(`is-editable`),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":`id`,label:`_A_TABLE_FORM_EXAMPLE_LABEL_`,onDeleteRow:e.deleteRow},null,8,[`columns`,`is-deletable`,`is-drag-and-drop`,`is-editable`,`rows-footer`,`rows`,`save-row`,`texts`,`onDeleteRow`])]),a(p,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes(`is-deletable`),"is-drag-and-drop":e.modelCheckbox.includes(`is-drag-and-drop`),"is-editable":e.modelCheckbox.includes(`is-editable`),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":`id`,label:`_A_TABLE_FORM_EXAMPLE_LABEL_`,onDeleteRow:e.deleteRow},null,8,[`columns`,`is-deletable`,`is-drag-and-drop`,`is-editable`,`rows-footer`,`rows`,`save-row`,`texts`,`onDeleteRow`])]),_:1},8,[`code-html`,`code-js`])}var z=m(ee,[[`render`,R]]);function B(){return{codeHtml:`<a-table-form
  :add-row="addRow"
  :columns="columns"
  :is-addable="true"
  :is-deletable-confirm="true"
  :is-drag-and-drop="true"
  :is-editable="true"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  label="_A_TABLE_FORM_LIST_LABEL_"
  row-view="list"
  @delete-row="deleteRow"
  @update-rows="updateRows"
/>
`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "fundingTypes",
        label: "_A_TABLE_FORM_LIST_FUNDING_TYPES_",
        formElement: {
          classColumn: "a_column a_column_12",
          data: [
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_", value: "fees" },
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_", value: "travel" },
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_", value: "investment" },
          ],
          keyId: "value",
          keyLabel: "label",
          required: true,
          translateData: true,
          type: "multiselect",
        },
      },
      {
        id: "percentDeviation",
        label: "_A_TABLE_FORM_LIST_PERCENT_DEVIATION_",
        formElement: {
          classColumn: "a_column a_column_4",
          classColumns: "a_columns a_columns_count_12 a_columns_gap_2",
          type: "fieldset",
          children: [
            {
              classColumn: "a_column a_column_6",
              controlsType: "none",
              id: "percentNegative",
              label: "_A_TABLE_FORM_LIST_NEGATIVE_",
              type: "integer",
            },
            {
              classColumn: "a_column a_column_6",
              controlsType: "none",
              id: "percentPositive",
              label: "_A_TABLE_FORM_LIST_POSITIVE_",
              type: "integer",
            },
          ],
        },
      },
      {
        id: "validationMessage",
        label: "_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_",
        formElement: {
          classColumn: "a_column a_column_12",
          required: true,
          type: "textarea",
        },
      },
    ];

    const rows = ref([
      {
        fundingTypes: ["fees", "travel"],
        id: 1,
        percentNegative: 20,
        percentPositive: 20,
        validationMessage: "The configured deviation threshold was exceeded.",
      },
    ]);

    const validate = model => {
      const errors = {};
      if (!model.fundingTypes?.length) {
        errors.fundingTypes = ["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"];
      }
      if (!model.validationMessage?.trim()) {
        errors.validationMessage = ["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"];
      }
      return errors;
    };

    const saveRow = ({ model, rowIndex }) => {
      const errors = validate(model);
      if (Object.keys(errors).length) {
        return { errors };
      }
      rows.value.splice(rowIndex, 1, model);
    };

    const addRow = ({ model }) => {
      const errors = validate(model);
      if (Object.keys(errors).length) {
        return { errors };
      }
      rows.value.push({
        ...model,
        id: Math.max(0, ...rows.value.map(row => row.id)) + 1,
      });
    };

    const deleteRow = ({ rowIndex }) => {
      rows.value.splice(rowIndex, 1);
    };

    const updateRows = ({ rows: rowsUpdated }) => {
      rows.value = rowsUpdated;
    };

    return {
      addRow,
      columns,
      deleteRow,
      rows,
      saveRow,
      updateRows,
    };
  },
};`}}var H=({id:e,label:t,negativeId:n,positiveId:r,type:i=`integer`})=>({id:e,label:t,formElement:{children:[{classColumn:`a_column a_column_6`,controlsType:`none`,id:n,label:`_A_TABLE_FORM_LIST_NEGATIVE_`,type:i},{classColumn:`a_column a_column_6`,controlsType:`none`,id:r,label:`_A_TABLE_FORM_LIST_POSITIVE_`,type:i}],classColumn:`a_column a_column_4`,classColumns:`a_columns a_columns_count_12 a_columns_gap_2`,type:`fieldset`}}),U={name:`PageTableFormList`,components:{AlohaExample:l,ATableForm:f},setup(){let{codeHtml:e}=B(),{codeJs:t}=V(),n=[{id:`fundingTypes`,label:`_A_TABLE_FORM_LIST_FUNDING_TYPES_`,formElement:{classColumn:`a_column a_column_12`,data:[{label:`_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_`,value:`fees`},{label:`_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_`,value:`travel`},{label:`_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_`,value:`investment`}],keyId:`value`,keyLabel:`label`,required:!0,translateData:!0,type:`multiselect`}},H({id:`percentDeviation`,label:`_A_TABLE_FORM_LIST_PERCENT_DEVIATION_`,negativeId:`percentNegative`,positiveId:`percentPositive`}),H({id:`amountDeviation`,label:`_A_TABLE_FORM_LIST_AMOUNT_DEVIATION_`,negativeId:`amountNegative`,positiveId:`amountPositive`,type:`currency`}),H({id:`shareDeviation`,label:`_A_TABLE_FORM_LIST_SHARE_DEVIATION_`,negativeId:`shareNegative`,positiveId:`sharePositive`}),{id:`exceedAsError`,label:`_A_TABLE_FORM_LIST_EXCEED_AS_ERROR_`,formElement:{classColumn:`a_column a_column_12`,type:`oneCheckbox`}},{id:`validationMessage`,label:`_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_`,formElement:{classColumn:`a_column a_column_12`,required:!0,rows:2,type:`textarea`}}],r=o([{amountNegative:5300,amountPositive:5300,exceedAsError:!0,fundingTypes:[`fees`,`travel`,`investment`],id:1,percentNegative:20,percentPositive:20,shareNegative:10,sharePositive:5,validationMessage:`The configured deviation threshold was exceeded.`},{amountNegative:2500,amountPositive:3e3,exceedAsError:!1,fundingTypes:[`travel`],id:2,percentNegative:10,percentPositive:15,shareNegative:4,sharePositive:6,validationMessage:`Please verify the entered values.`}]),i=e=>{let t={};return e.fundingTypes?.length||(t.fundingTypes=[`_A_TABLE_FORM_LIST_ERROR_REQUIRED_`]),e.validationMessage?.trim()||(t.validationMessage=[`_A_TABLE_FORM_LIST_ERROR_REQUIRED_`]),t};return{addRow:({model:e})=>{let t=i(e);if(Object.keys(t).length)return{errors:t};r.value.push({...e,id:Math.max(0,...r.value.map(e=>e.id))+1})},codeHtml:e,codeJs:t,columns:n,deleteRow:({rowIndex:e})=>{r.value.splice(e,1)},rows:r,saveRow:({model:e,rowIndex:t})=>{let n=i(e);if(Object.keys(n).length)return{errors:n};r.value.splice(t,1,e)},updateRows:({rows:e})=>{r.value=e}}}};function W(e,t,r,o,l,u){let d=s(`a-table-form`),f=s(`aloha-example`);return i(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_FORM_LIST_HEADER_`,description:`_A_TABLE_FORM_LIST_DESCRIPTION_`,props:[`row-view`]},{default:c(()=>[a(d,{"add-row":e.addRow,columns:e.columns,"is-addable":!0,"is-deletable-confirm":!0,"is-drag-and-drop":!0,"is-editable":!0,rows:e.rows,"save-row":e.saveRow,"key-id":`id`,label:`_A_TABLE_FORM_LIST_LABEL_`,"row-view":`list`,onDeleteRow:e.deleteRow,onUpdateRows:e.updateRows},null,8,[`add-row`,`columns`,`rows`,`save-row`,`onDeleteRow`,`onUpdateRows`])]),_:1},8,[`code-html`,`code-js`])}var G=m(U,[[`render`,W]]);function K(){return{codeHtml:`<a-one-checkbox
  v-model="isActionsSticky"
  label="isActionsSticky"
/>
<a-simple-table
  :columns="columns"
  :is-actions-sticky="isActionsSticky"
  :is-deletable-confirm="true"
  :is-editable="true"
  :rows="rows"
  key-id="id"
  label="20 columns"
/>
`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AOneCheckbox,
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormSticky",
  components: {
    AOneCheckbox,
    ATableForm,
  },
  setup() {
    const isActionsSticky = ref(true);

    const columns = Array.from({ length: 20 }, (_, index) => ({
      id: \`c\${index + 1}\`,
      label: \`\${index + 1}\`,
      width: 120,
      formElement: {
        controlsType: "none",
        type: "integer",
      },
    }));

    const rows = ref(Array.from({ length: 6 }, (_, rowIndex) => {
      const row = {
        id: rowIndex + 1,
      };

      columns.forEach((column, columnIndex) => {
        row[column.id] = (rowIndex + 1) * 100 + columnIndex + 1;
      });

      return row;
    }));

    return {
      columns,
      isActionsSticky,
      rows,
    };
  },
};`}}var J={name:`PageTableFormSticky`,components:{AlohaExample:l,AOneCheckbox:u,ATableForm:f},setup(){let{codeHtml:e}=K(),{codeJs:t}=q(),n=o(!0),r=Array.from({length:20},(e,t)=>{let n=t+1;return{id:`c${n}`,label:`${n}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:`none`,type:`integer`}}});return{codeHtml:e,codeJs:t,columns:r,isActionsSticky:n,rows:o(Array.from({length:6},(e,t)=>{let n={id:t+1};return r.forEach((e,r)=>{n[e.id]=(t+1)*100+r+1}),n}))}}};function Y(e,t,r,o,l,u){let d=s(`a-one-checkbox`),f=s(`a-table-form`),p=s(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_FORM_STICKY_HEADER_`,description:`_A_TABLE_FORM_STICKY_DESCRIPTION_`,props:[`is-actions-sticky`,`is-deletable-confirm`,`is-editable`]},{default:c(()=>[a(d,{class:`a_mb_4`,modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||=t=>e.isActionsSticky=t,label:`isActionsSticky`},null,8,[`modelValue`]),a(f,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":`id`,label:`20 columns`},null,8,[`columns`,`is-actions-sticky`,`rows`])]),_:1},8,[`code-html`,`code-js`])}var X=m(J,[[`render`,Y]]);function Z(){return{pageTitle:r(()=>d({placeholder:`_A_TABLE_FORM_PAGE_TITLE_`}))}}var Q={name:`PageTableForm`,components:{AlohaPage:e,PageTableFormBasic:y,PageTableFormDND:w,PageTableFormEdit:k,PageTableFormEditProps:P,PageTableFormGrow:z,PageTableFormList:G,PageTableFormSticky:X},setup(){let{pageTitle:e}=Z();return{pageTitle:e}}};function $(e,t,r,o,l,u){let d=s(`page-table-form-basic`),f=s(`page-table-form-d-n-d`),p=s(`page-table-form-edit`),m=s(`page-table-form-edit-props`),h=s(`page-table-form-list`),g=s(`page-table-form-sticky`),_=s(`page-table-form-grow`),v=s(`aloha-table-css-vars`),y=s(`aloha-page`);return i(),n(y,{"page-title":e.pageTitle},{body:c(()=>[a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v,{files:`components/ATableForm`})]),_:1},8,[`page-title`])}var te=m(Q,[[`render`,$]]);export{te as default};