"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[21],{3696:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_t});var o=n(2147),a=n(3588),i=n(9699),l=n(780);const s=(0,o._)("span",null,"Aloha",-1),p=(0,o._)("div",null,"Aloha",-1);var _=n(3403),r=n(3089);const d={name:"PageDisclosureBasic",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:"<a-tooltip>\n  <span>Aloha</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>Aloha</div>\n  </template>\n</a-tooltip>"},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipBasic",\n  components: {\n    ATooltip,\n  },\n};'};return{codeHtml:t,codeJs:e}}};var u=n(1419);const c=(0,u.Z)(d,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",slots:["default","title"]},{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{title:(0,o.w5)((()=>[p])),default:(0,o.w5)((()=>[s])),_:1})])),_:1},8,["code-html","code-js"])}]]),m=(0,o._)("span",null,"Aloha",-1),T={name:"PageTooltipTag",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_primary"\n  tag="button"\n>\n  <span>Aloha</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>{{ title }}</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipTag",\n  components: {\n    ATooltip,\n  },\n  setup() {\n    const title = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \npulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \nDonec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \nin pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\nper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \nvestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\nInteger eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \nfaucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \nPhasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \nCras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \nnon dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`;\n\n    return {\n      title,\n    };\n  },\n};'};return{codeHtml:t,codeJs:e,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \npulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \nDonec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \nin pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\nper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \nvestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\nInteger eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \nfaucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \nPhasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \nCras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \nnon dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus."}}},O=(0,u.Z)(T,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_TAG_HEADER_",description:"_A_TOOLTIP_GROUP_TAG_DESCRIPTION_",props:"tag"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_primary",tag:"button"},{title:(0,o.w5)((()=>[(0,o._)("div",null,(0,o.zw)(t.title),1)])),default:(0,o.w5)((()=>[m])),_:1})])),_:1},8,["code-html","code-js"])}]]),b=(0,o._)("span",null,"Aloha",-1),S={name:"PageTooltipMaxWidth",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_primary"\n  tag="button"\n  :max-width="300"\n>\n  <span>Aloha</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>{{ title }}</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipMaxWidth",\n  components: {\n    ATooltip,\n  },\n  setup() {\n    const title = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \npulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \nDonec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \nin pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\nper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \nvestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\nInteger eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \nfaucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \nPhasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \nCras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \nnon dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`;\n\n    return {\n      title,\n    };\n  },\n};'};return{codeHtml:t,codeJs:e,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \npulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \nDonec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \nin pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\nper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \nvestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\nInteger eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \nfaucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \nPhasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \nCras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \nnon dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus."}}},f=(0,u.Z)(S,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_MAX_WIDTH_HEADER_",description:"_A_TOOLTIP_GROUP_MAX_WIDTH_DESCRIPTION_",props:"max-width"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_primary",tag:"button","max-width":300},{title:(0,o.w5)((()=>[(0,o._)("div",null,(0,o.zw)(t.title),1)])),default:(0,o.w5)((()=>[b])),_:1})])),_:1},8,["code-html","code-js"])}]]),g=(0,o._)("span",null,"Aloha",-1),P=(0,o._)("div",null,"Aloha",-1),A=(0,o._)("span",null,"a_text_center",-1),I=(0,o._)("div",{class:"a_text_center"},"Aloha",-1),E={name:"PageTooltipWidth",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_primary"\n  tag="button"\n  :width="200"\n>\n  <span>Aloha</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>Aloha</div>\n  </template>\n</a-tooltip>\n\n<a-tooltip\n  class="a_btn a_btn_primary a_ml_3"\n  tag="button"\n  :width="200"\n>\n  <span>a_text_center</span>\n  \n  <template\n    v-slot:title\n  >\n    <div\n      class="a_text_center"\n    >Aloha</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipWidth",\n  components: {\n    ATooltip,\n  },\n};'};return{codeHtml:t,codeJs:e}}},R=(0,u.Z)(E,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_WIDTH_HEADER_",description:"_A_TOOLTIP_GROUP_WIDTH_DESCRIPTION_",props:"width"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_primary",tag:"button",width:200},{title:(0,o.w5)((()=>[P])),default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(n,{class:"a_btn a_btn_primary a_ml_3",tag:"button",width:200},{title:(0,o.w5)((()=>[I])),default:(0,o.w5)((()=>[A])),_:1})])),_:1},8,["code-html","code-js"])}]]),v=(0,o._)("span",null,"0",-1),h=(0,o._)("div",null,"0",-1),D=(0,o._)("span",null,"100",-1),w=(0,o._)("div",null,"100",-1),C=(0,o._)("span",null,"1000",-1),N=(0,o._)("div",null,"1000",-1),L={name:"PageTooltipTag",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_primary"\n  tag="button"\n  :time-close="0"\n>\n  <span>0</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>0</div>\n  </template>\n</a-tooltip>\n\n<a-tooltip\n  class="a_btn a_btn_primary a_ml_3"\n  tag="button"\n  :time-close="100"\n>\n  <span>100</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>100</div>\n  </template>\n</a-tooltip>\n<a-tooltip\n  class="a_btn a_btn_primary a_ml_3"\n  tag="button"\n  :time-close="1000"\n>\n  <span>1000</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>1000</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipTimeClose",\n  components: {\n    ATooltip,\n  },\n};'};return{codeHtml:t,codeJs:e}}},H=(0,u.Z)(L,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_TIME_CLOSE_HEADER_",description:"_A_TOOLTIP_GROUP_TIME_CLOSE_DESCRIPTION_",props:"time-close"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_primary",tag:"button","time-close":0},{title:(0,o.w5)((()=>[h])),default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(n,{class:"a_btn a_btn_primary a_ml_3",tag:"button","time-close":100},{title:(0,o.w5)((()=>[w])),default:(0,o.w5)((()=>[D])),_:1}),(0,o.Wm)(n,{class:"a_btn a_btn_primary a_ml_3",tag:"button","time-close":1e3},{title:(0,o.w5)((()=>[N])),default:(0,o.w5)((()=>[C])),_:1})])),_:1},8,["code-html","code-js"])}]]),y=(0,o._)("span",null,"Aloha",-1),x=(0,o._)("div",null,"Aloha",-1),U={name:"PageTooltipHideArrow",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_primary"\n  tag="button"\n  :show-arrow="false"\n>\n  <span>Aloha</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>Aloha</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipHideArrow",\n  components: {\n    ATooltip,\n  },\n};'};return{codeHtml:t,codeJs:e}}},q=(0,u.Z)(U,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_HIDE_ARROW_HEADER_",description:"_A_TOOLTIP_GROUP_HIDE_ARROW_DESCRIPTION_",props:"show-arrow"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_primary",tag:"button","show-arrow":!1},{title:(0,o.w5)((()=>[x])),default:(0,o.w5)((()=>[y])),_:1})])),_:1},8,["code-html","code-js"])}]]),W=(0,o._)("span",null,':offset-skidding="30"',-1),j=(0,o._)("div",null,':offset-skidding="30"',-1),J=(0,o._)("span",null,':offset-skidding="-30"',-1),M=(0,o._)("div",null,':offset-skidding="-30"',-1),Z={name:"PageTooltipOffsetSkidding",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_primary"\n  tag="button"\n  :offset-skidding="30"\n>\n  <span>:offset-skidding="30"</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>:offset-skidding="30"</div>\n  </template>\n</a-tooltip>\n\n<a-tooltip\n  class="a_btn a_btn_primary a_ml_3"\n  tag="button"\n  :offset-skidding="-30"\n>\n  <span>:offset-skidding="-30"</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>:offset-skidding="-30"</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipOffsetSkidding",\n  components: {\n    ATooltip,\n  },\n};'};return{codeHtml:t,codeJs:e}}},G=(0,u.Z)(Z,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_OFFSET_SKIDDING_HEADER_",description:"_A_TOOLTIP_GROUP_OFFSET_SKIDDING_DESCRIPTION_",props:"offset-skidding"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_primary",tag:"button","offset-skidding":30},{title:(0,o.w5)((()=>[j])),default:(0,o.w5)((()=>[W])),_:1}),(0,o.Wm)(n,{class:"a_btn a_btn_primary a_ml_3",tag:"button","offset-skidding":-30},{title:(0,o.w5)((()=>[M])),default:(0,o.w5)((()=>[J])),_:1})])),_:1},8,["code-html","code-js"])}]]),B=(0,o._)("span",null,':offset-distance="30"',-1),k=(0,o._)("div",null,':offset-distance="30"',-1),F=(0,o._)("span",null,':offset-distance="6"',-1),X=(0,o._)("div",null,':offset-distance="6"',-1),Q=(0,o._)("span",null,':offset-distance="0"',-1),z=(0,o._)("div",null,':offset-distance="0"',-1),K=(0,o._)("span",null,':offset-distance="-10"',-1),$=(0,o._)("div",null,':offset-distance="-10"',-1),V={name:"PageTooltipOffsetDistance",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_secondary"\n  tag="button"\n  :offset-distance="30"\n>\n  <span>:offset-distance="30"</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>:offset-distance="30"</div>\n  </template>\n</a-tooltip>\n\n<a-tooltip\n  class="a_btn a_btn_secondary a_ml_3"\n  tag="button"\n  :offset-distance="6"\n>\n  <span>:offset-distance="6"</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>:offset-distance="6"</div>\n  </template>\n</a-tooltip>\n\n<a-tooltip\n  class="a_btn a_btn_secondary a_ml_3"\n  tag="button"\n  :offset-distance="0"\n>\n  <span>:offset-distance="0"</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>:offset-distance="0"</div>\n  </template>\n</a-tooltip>\n\n<a-tooltip\n  class="a_btn a_btn_secondary a_ml_3"\n  tag="button"\n  :offset-distance="-10"\n>\n  <span>:offset-distance="-10"</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>:offset-distance="-10"</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipOffsetDistance",\n  components: {\n    ATooltip,\n  },\n};'};return{codeHtml:t,codeJs:e}}},Y=(0,u.Z)(V,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_OFFSET_DISTANCE_HEADER_",description:"_A_TOOLTIP_GROUP_OFFSET_DISTANCE_DESCRIPTION_",props:"offset-distance"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_secondary",tag:"button","offset-distance":30},{title:(0,o.w5)((()=>[k])),default:(0,o.w5)((()=>[B])),_:1}),(0,o.Wm)(n,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":6},{title:(0,o.w5)((()=>[X])),default:(0,o.w5)((()=>[F])),_:1}),(0,o.Wm)(n,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":0},{title:(0,o.w5)((()=>[z])),default:(0,o.w5)((()=>[Q])),_:1}),(0,o.Wm)(n,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":-10},{title:(0,o.w5)((()=>[$])),default:(0,o.w5)((()=>[K])),_:1})])),_:1},8,["code-html","code-js"])}]]),tt=(0,o._)("span",null,"Aloha",-1),et=(0,o._)("div",null,"Aloha",-1),nt={name:"PageTooltipArrowPadding",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_primary"\n  tag="button"\n  :arrow-padding="35"\n>\n  <span>Aloha</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>Aloha</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipArrowPadding",\n  components: {\n    ATooltip,\n  },\n};'};return{codeHtml:t,codeJs:e}}},ot=(0,u.Z)(nt,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_ARROW_PADDING_HEADER_",description:"_A_TOOLTIP_GROUP_ARROW_PADDING_DESCRIPTION_",props:"arrow-padding"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_primary",tag:"button","arrow-padding":35},{title:(0,o.w5)((()=>[et])),default:(0,o.w5)((()=>[tt])),_:1})])),_:1},8,["code-html","code-js"])}]]),at=(0,o._)("span",null,"Aloha",-1),it={name:"PageTooltipArrowPaddingFunction",components:{AlohaExample:_.Z,ATooltip:r.Z},setup(){const{codeHtml:t}={codeHtml:'<a-tooltip\n  class="a_btn a_btn_primary"\n  tag="button"\n  :arrow-padding="arrowPaddingCallback"\n>\n  <span>Aloha</span>\n  \n  <template\n    v-slot:title\n  >\n    <div>{{ title }}</div>\n  </template>\n</a-tooltip>'},{codeJs:e}={codeJs:'import ATooltip from "aloha-vue/src/ATooltip/ATooltip";\n    \nexport default {\n  name: "PageTooltipArrowPaddingFunction",\n  components: {\n    ATooltip,\n  },\n  setup() {\n    const arrowPaddingCallback = ({ popper, reference, placement }) => {\n      console.log("placement", placement);\n      console.log("popper", popper);\n      console.log("reference", reference);\n      return popper.width / reference.width + 400;\n    };\n\n    const title = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \npulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.`;\n\n    return {\n      arrowPaddingCallback,\n      title,\n    };\n  },\n};'};return{arrowPaddingCallback:({popper:t,reference:e,placement:n})=>(console.log("placement",n),console.log("popper",t),console.log("reference",e),t.width/e.width+400),codeHtml:t,codeJs:e,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \npulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus."}}},lt=(0,u.Z)(it,[["render",function(t,e){const n=(0,o.up)("a-tooltip"),a=(0,o.up)("aloha-example");return(0,o.wg)(),(0,o.j4)(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_HEADER_",description:"_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_DESCRIPTION_",props:"arrow-padding"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"a_btn a_btn_primary",tag:"button","arrow-padding":t.arrowPaddingCallback},{title:(0,o.w5)((()=>[(0,o._)("div",null,(0,o.zw)(t.title),1)])),default:(0,o.w5)((()=>[at])),_:1},8,["arrow-padding"])])),_:1},8,["code-html","code-js"])}]]);var st=n(8405);const pt={name:"PageTooltip",components:{AlohaPage:a.Z,AlohaTableProps:i.Z,ATranslation:l.Z,PageTooltipBasic:c,PageTooltipTag:O,PageTooltipMaxWidth:f,PageTooltipWidth:R,PageTooltipTimeClose:H,PageTooltipHideArrow:q,PageTooltipOffsetSkidding:G,PageTooltipOffsetDistance:Y,PageTooltipArrowPadding:ot,PageTooltipArrowPaddingFunction:lt},setup(){const{pageTitle:t}=function(){const t=(0,o.Fl)((()=>(0,st.Gd)({placeholder:"_A_TOOLTIP_COMPONENT_NAME_"})));return{pageTitle:(0,o.Fl)((()=>"ATooltip"+(t.value?` (${t.value})`:"")))}}(),{dataProps:e}={dataProps:[{name:"btn-attributes",description:"_A_DISCLOSURE_PROPS_PROPS_BTN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"btn-class",description:"_A_DISCLOSURE_PROPS_BTN_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_link a_p_0",required:!1},{name:"btn-icon-left-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-left-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-id",description:"_A_DISCLOSURE_PROPS_BTN_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-parent-class",description:"_A_DISCLOSURE_PROPS_BTN_PARENT_CLASS_DESCRIPTION_",type:"String",default:"a_text_center",required:!1},{name:"btn-text-less",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_LESS_DESCRIPTION_",type:"String",default:"_SHOW_LESS_",required:!1},{name:"btn-text-more",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_MORE_DESCRIPTION_",type:"String",default:"_SHOW_MORE_",required:!1},{name:"btn-title-less",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-more",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-placement",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"disabled",description:"_A_DISCLOSURE_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html-less",description:"_A_DISCLOSURE_PROPS_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-more",description:"_A_DISCLOSURE_PROPS_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_DISCLOSURE_PROPS_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-btn-title-html",description:"_A_DISCLOSURE_PROPS_IS_BTN_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-open-default",description:"_A_DISCLOSURE_PROPS_IS_OPEN_DEFAULT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html-less",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"safe-html-more",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-less",description:"_A_DISCLOSURE_PROPS_SHOW_LESS_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"text-less",description:"_A_DISCLOSURE_PROPS_TEXT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-more",description:"_A_DISCLOSURE_PROPS_TEXT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1}]},{dataSlots:n}={dataSlots:[{name:"button",description:"_A_DISCLOSURE_SLOT_BUTTON_DESCRIPTION_"},{name:"less",description:"_A_DISCLOSURE_SLOT_LESS_DESCRIPTION_"},{name:"more",description:"_A_DISCLOSURE_SLOT_MORE_DESCRIPTION_"}]},{dataExposes:a}={dataExposes:[{name:"buttonRef",description:"_A_DISCLOSURE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_DISCLOSURE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isOpen",description:"_A_DISCLOSURE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_DISCLOSURE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]};return{dataExposes:a,dataProps:e,dataSlots:n,pageTitle:t}}},_t=(0,u.Z)(pt,[["render",function(t,e){const n=(0,o.up)("a-translation"),a=(0,o.up)("page-tooltip-basic"),i=(0,o.up)("page-tooltip-tag"),l=(0,o.up)("page-tooltip-max-width"),s=(0,o.up)("page-tooltip-width"),p=(0,o.up)("page-tooltip-time-close"),_=(0,o.up)("page-tooltip-hide-arrow"),r=(0,o.up)("page-tooltip-offset-skidding"),d=(0,o.up)("page-tooltip-offset-distance"),u=(0,o.up)("page-tooltip-arrow-padding"),c=(0,o.up)("page-tooltip-arrow-padding-function"),m=(0,o.up)("aloha-table-props"),T=(0,o.up)("aloha-page");return(0,o.wg)(),(0,o.j4)(T,{"page-title":t.pageTitle},{body:(0,o.w5)((()=>[(0,o.Wm)(n,{tag:"p",html:"_A_TOOLTIP_COMPONENT_DESCRIPTION_"}),(0,o.Wm)(a),(0,o.Wm)(i),(0,o.Wm)(l),(0,o.Wm)(s),(0,o.Wm)(p),(0,o.Wm)(_),(0,o.Wm)(r),(0,o.Wm)(d),(0,o.Wm)(u),(0,o.Wm)(c),(0,o.Wm)(m,{data:t.dataProps},null,8,["data"]),(0,o.Wm)(m,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"]),(0,o.Wm)(m,{"table-label":"Exposes",data:t.dataExposes,columns:["name","type","description"]},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.21.0ae5a0f292a35f9c4a15.js.map