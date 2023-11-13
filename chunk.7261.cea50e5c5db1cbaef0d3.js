"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[7261],{7461:(e,a,t)=>{t.r(a),t.d(a,{default:()=>H});var n=t(798),i=t(6049),l=t(8975),r=t(9731);const s={class:"a_position_relative",style:{"min-height":"600px"}};var o=t(6660),u=t(8453),d=t(9556),c=t(6486);const p=(0,n.iH)({});function h(e){const a=(0,n.Vh)(e,"menuId"),t=(0,n.Vh)(e,"canChangeBodyClass"),i=()=>{t.value&&(document.body.classList.add("a_menu_2__wrapper_open"),document.body.classList.remove("a_menu_2__wrapper_close")),p.value[a.value]=!0},l=()=>{t.value&&(document.body.classList.add("a_menu_2__wrapper_close"),document.body.classList.remove("a_menu_2__wrapper_open")),p.value[a.value]=!1};return{btnToggleTitle:(0,n.Fl)((()=>p.value[a.value]?"_A_MENU_2_BTN_CLOSE_":"_A_MENU_2_BTN_OPEN_")),isMenuOpen:(0,n.Fl)((()=>p.value[a.value])),removeBodyClasses:()=>{t.value&&(document.body.classList.remove("a_menu_2__wrapper_close"),document.body.classList.remove("a_menu_2__wrapper_open"))},toggleMenu:({isOpen:e}={})=>{(0,c.isUndefined)(e)?p.value[a.value]?l():i():e?i():l()}}}const _={name:"AMenuButtonToggle",props:{buttonToggleProps:{type:Object,required:!1,default:()=>({})},class:{type:[String,Object],required:!1,default:"a_btn a_btn_secondary"},menuId:{type:String,required:!0}},setup(e){const{btnToggleTitle:a,isMenuOpen:t,toggleMenu:n}=h(e);return{btnToggleTitle:a,isMenuOpen:t,toggleMenu:n}},render(){return(0,n.h)(d.Z,{class:["a_menu_2__btn_toggle",this.class,{a_menu_2__btn_toggle_open:this.isMenuOpen}],type:"button",title:this.btnToggleTitle,textAreaHidden:this.btnToggleTitle,onClick:this.toggleMenu,...this.buttonToggleProps},(()=>[(0,n.h)("span",{areaHidden:!0,class:"a_menu_2__btn_toggle__bar a_menu_2__btn_toggle__bar_1 aloha_btn__ml_0"}),(0,n.h)("span",{areaHidden:!0,class:"a_menu_2__btn_toggle__bar a_menu_2__btn_toggle__bar_2 aloha_btn__ml_0"}),(0,n.h)("span",{areaHidden:!0,class:"a_menu_2__btn_toggle__bar a_menu_2__btn_toggle__bar_3 aloha_btn__ml_0"})]))}};var m=t(3332),b=t(107);const P={name:"AMenuBreadcrumbsItem",props:{label:{type:[String,Number],required:!0},panelParentId:{type:[String,Number],required:!0}},setup(e){const a=(0,n.Vh)(e,"panelParentId"),t=(0,n.f3)("togglePanel"),i=()=>{t({parentId:a.value})};return{onClick:i,onKeydown:e=>{e.keyCode!==b.Z.enter&&e.keyCode!==b.Z.space||(i(),e.stopPropagation(),e.preventDefault())}}},render(){return(0,n.h)("a",{class:"a_menu_2__breadcrumbs__item a_menu_2__link",role:"button",tabindex:0,ariaLabel:"Untermenü schließen",onClick:this.onClick,onKeydown:this.onKeydown},[(0,n.h)(m.Z,{icon:"ChevronLeft",class:"a_mr_2"}),(0,n.h)("span",{},[(0,n.h)("span",{ariaHidden:!0},this.label),(0,n.h)("span",{class:"a_position_absolute_all",ariaHidden:!0,title:this.label})])])}};var g=t(5663);const y={name:"AMenuBreadcrumbs",props:{isBreadcrumbsTruncated:{type:Boolean,required:!0},isSearchActive:{type:Boolean,required:!0},isPanelMain:{type:Boolean,required:!1},dataKeyById:{type:Object,required:!0},panelParentsOpen:{type:Array,required:!0}},setup(e){const a=(0,n.Vh)(e,"dataKeyById"),t=(0,n.Vh)(e,"panelParentsOpen"),i=(0,n.Vh)(e,"isBreadcrumbsTruncated"),l=e=>({label:(0,c.get)(a.value,`${e}.${g.Z}`),panelParentId:e});return{breadcrumbsItems:(0,n.Fl)((()=>{if(!t.value.length)return[];const e=[];return i.value?(0,c.forEach)(t.value,(a=>{e.push(l(a))})):e.push(l(t.value[t.value.length-1])),e}))}},render(){return this.isSearchActive?"":this.isPanelMain?(0,n.h)("div",{class:"a_menu_2__breadcrumb a_menu_2__breadcrumb_main"},[(0,n.h)(r.Z,{tag:"strong",text:"_A_MENU_2_MAIN_MENU_"})]):(0,n.h)("div",{class:"a_menu_2__breadcrumb a_menu_2__breadcrumb_secondary"},[this.breadcrumbsItems.map((e=>(0,n.h)(P,{label:e.label,panelParentId:e.panelParentId})))])}};var v=t(2226),S=t(1215),k=t(3023),I=t(4192),O=t(8960);const C={name:"AMenuPanelLink",props:{dataProParentChildren:{type:Object,required:!0},isPanelOpen:{type:Boolean,required:!1},item:{type:Object,required:!0},keyIcon:{type:String,required:!1,default:void 0},isLinkInSearchPanel:{type:Boolean,required:!1},modelSearch:{type:String,required:!1,default:void 0},idsSearchVisible:{type:Object,required:!1,default:void 0}},setup(e){const a=(0,n.Vh)(e,"keyIcon"),t=(0,n.Vh)(e,"isLinkInSearchPanel"),i=(0,n.Vh)(e,"modelSearch"),l=(0,n.Vh)(e,"item"),r=(0,n.Vh)(e,"idsSearchVisible"),s=(0,n.Vh)(e,"dataProParentChildren"),o=(0,n.f3)("togglePanel"),u=(0,n.f3)("isLinkTruncated"),d=(0,n.f3)("keySlot"),p=(0,n.Fl)((()=>{if(d.value)return(0,c.get)(l.value,d.value)})),h=(0,n.Fl)((()=>!!l.value.disabled)),_=(0,n.Fl)((()=>!t.value||!!r.value.rest[l.value[I.Z]])),{filterSearchHighlight:m}=(0,k.Z)(),{tabindex:P}=function(e){const a=(0,n.Vh)(e,"isPanelOpen"),t=(0,n.Vh)(e,"isLinkInSearchPanel"),i=(0,n.f3)("isMenuOpen");return{tabindex:(0,n.Fl)((()=>t.value||a.value&&i.value?0:-1))}}(e),y=(0,n.Fl)((()=>l.value[g.Z])),v=(0,n.Fl)((()=>{const e=y.value;return t.value&&_.value?m(e,{searchModel:i.value}):e})),S=(0,n.Fl)((()=>l.value[I.Z])),C=(0,n.Fl)((()=>{if(!t.value)return(0,c.get)(l.value,a.value)})),A=(0,n.Fl)((()=>l.value.to?0:s.value[S.value]&&s.value[S.value].length)),T=(0,n.Fl)((()=>h.value?"#":l.value.to)),f=()=>{o({parentId:S.value,isLinkInSearchPanel:t.value}),function(e=""){const a=`#a_menu_2_panel_${e} a`;setTimeout((()=>{const e=document.querySelector(a);e&&e.focus()}))}(S.value)},L=(0,n.f3)("clickMenuLink"),{isTitleHtml:B,title:E}=function(e,{labelWithoutFilter:a=(0,n.Fl)((()=>""))}){const t=(0,n.Vh)(e,"item"),i=(0,n.Fl)((()=>!!t.value.titleHtml)),l=(0,n.Fl)((()=>{if(!i.value)return t.value.title||a.value}));return{isTitleHtml:i,title:l}}(e,{labelWithoutFilter:y});return{clickLink:()=>{t.value&&o({parentId:l.value[O.Z],isLinkInSearchPanel:t.value}),L()},countChildren:A,currentSlot:p,icon:C,isLinkDisabled:h,isLinkTruncated:u,isLinkVisible:_,isTitleHtml:B,label:v,labelWithoutFilter:y,onKeydown:e=>{e.keyCode!==b.Z.enter&&e.keyCode!==b.Z.space||(f(),e.stopPropagation(),e.preventDefault())},openSubMenu:f,tabindex:P,title:E,toLocal:T}},render(){if(!this.isLinkVisible)return"";const e=[this.icon&&(0,n.h)(m.Z,{class:["a_menu_2__link__icon",this.item.iconClass],icon:this.icon}),(0,n.h)("span",{class:"a_menu_2__link__text"},[this.title&&(0,n.h)("span",{class:"a_position_absolute_all",title:this.title,ariaHidden:!0}),(0,n.wy)((0,n.h)("span"),[[S.Z,this.label]])])];return(0,n.h)("li",{class:"a_menu_2__listitem"},[this.currentSlot&&this.$slots[this.currentSlot]?this.$slots[this.currentSlot]({item:this.item,isPanelOpen:this.isPanelOpen,clickLink:this.clickLink,openSubMenu:this.openSubMenu,onKeydown:this.onKeydown,countChildren:this.countChildren,label:this.label,labelWithoutFilter:this.labelWithoutFilter,tabindex:this.tabindex}):this.item.to?(0,n.h)(v.Z,{tag:"RouterLink",placement:"right",minWidth:this.item.titleHtmlMinWidth,width:this.item.titleHtmlWidth,maxWidth:this.item.titleHtmlMaxWidth,isHide:!this.isTitleHtml,class:["a_menu_2__link a_menu_2__link__text_truncated",{a_menu_2__link_disabled:this.isLinkDisabled}],to:this.toLocal,tabindex:this.tabindex,onClick:this.clickLink},{default:()=>e,title:()=>(0,n.wy)((0,n.h)("div"),[[S.Z,this.item.titleHtml]])}):(0,n.h)(r.Z,{tag:"a",class:"a_menu_2__link a_menu_2__link_btn a_menu_2__link__text_truncated",ariaLabel:"_OPEN_SUBMENU_",role:"button",tabindex:this.tabindex,onClick:this.openSubMenu,onKeydown:this.onKeydown},(()=>[(0,n.h)("span",{class:"a_menu_2__link__counter"},[(0,n.h)("span",{ariaHidden:!0},this.countChildren),(0,n.h)(m.Z,{class:"a_menu_2__link__counter__icon",icon:"ChevronRight"})]),...e]))])}},A={name:"AMenuPanelGroup",props:{dataProParentChildren:{type:Object,required:!0},groupIndex:{type:[Number,String],required:!0},groupItems:{type:Array,required:!0},groupLabel:{type:[String,Number],required:!1,default:void 0},isPanelOpen:{type:Boolean,required:!1},keyIcon:{type:String,required:!0},menuId:{type:String,required:!0},paneIndex:{type:[Number,String],required:!0}},setup(e){const{hasItems:a}=function(e){const a=(0,n.Vh)(e,"groupItems");return{hasItems:(0,n.Fl)((()=>a.value.length>0))}}(e),{ariaLabelledbyObj:t,labelId:i}=function(e){const a=(0,n.Vh)(e,"groupIndex"),t=(0,n.Vh)(e,"groupLabel"),i=(0,n.Vh)(e,"menuId"),l=(0,n.Vh)(e,"paneIndex"),r=(0,n.Fl)((()=>`${i.value}_${l.value}_${a.value}_label`));return{ariaLabelledbyObj:(0,n.Fl)((()=>t.value?{"aria-labelledby":r.value}:{})),labelId:r}}(e);return{ariaLabelledbyObj:t,hasItems:a,labelId:i}},render(){return this.hasItems?this.groupLabel?(0,n.h)("li",{...this.ariaLabelledbyObj},[(0,n.h)("div",{id:this.labelId,class:"a_menu_2__list_header"},this.groupLabel),(0,n.h)("ul",{class:"a_menu_2__listview"},[this.groupItems.map(((e,a)=>(0,n.h)(C,{key:a,item:e,dataProParentChildren:this.dataProParentChildren,isPanelOpen:this.isPanelOpen,keyIcon:this.keyIcon},this.$slots)))])]):this.groupItems.map(((e,a)=>(0,n.h)(C,{key:a,item:e,dataProParentChildren:this.dataProParentChildren,isPanelOpen:this.isPanelOpen,keyIcon:this.keyIcon},this.$slots))):""}},T={name:"AMenuPanel",props:{attributesBlockerClick:{type:Object,required:!0},dataKeyById:{type:Object,required:!0},dataProParentChildren:{type:Object,required:!0},isBreadcrumbsTruncated:{type:Boolean,required:!1},isPanelMain:{type:Boolean,required:!1},isSearchActive:{type:Boolean,required:!0},keyGroup:{type:String,required:!0},keyIcon:{type:String,required:!0},menuId:{type:String,required:!0},paneIndex:{type:[Number,String],required:!0},panelItems:{type:Array,required:!0},panelParentsOpen:{type:Array,required:!0},parentId:{type:String,required:!1,default:void 0}},setup(e){const{panelId:a}=function(e){const a=(0,n.Vh)(e,"parentId");return{panelId:(0,n.Fl)((()=>`a_menu_2_panel_${a.value||""}`))}}(e),{isItemsWithoutGroup:t,itemsGroup:i}=function(e){const a=(0,n.Vh)(e,"panelItems"),t=(0,n.Vh)(e,"keyGroup"),i=(0,n.Fl)((()=>{const e=[],n={};return(0,c.forEach)(a.value,(a=>{const i=(0,c.get)(a,t.value);(0,c.isNil)(i)?e.push(a):(n[i]=n[i]||[],n[i].push(a))})),{withoutGroup:e,withGroup:n}}));return{isItemsWithoutGroup:(0,n.Fl)((()=>i.value.withoutGroup.length>0)),itemsGroup:i}}(e),{isChildPanelOpen:l,isPanelOpen:r}=function(e){const a=(0,n.Vh)(e,"isPanelMain"),t=(0,n.Vh)(e,"isSearchActive"),i=(0,n.Vh)(e,"panelParentsOpen"),l=(0,n.Vh)(e,"parentId"),r=(0,n.Fl)((()=>!t.value&&(a.value?0===i.value.length:!!i.value.length&&i.value.indexOf(l.value)===i.value.length-1)));return{isChildPanelOpen:(0,n.Fl)((()=>{if(a.value)return i.value.length>0;const e=i.value.indexOf(l.value);return-1!==e&&e!==i.value.length-1})),isPanelOpen:r}}(e);return{isChildPanelOpen:l,isItemsWithoutGroup:t,isPanelOpen:r,itemsGroup:i,panelId:a}},render(){return(0,n.h)("div",{id:this.panelId,class:["a_menu_2__panel",{a_menu_2__panel_main:!this.isSearchActive&&this.isPanelMain,a_menu_2__panel_secondary:!this.isPanelMain,a_menu_2__panel_opened:!this.isSearchActive&&this.isPanelOpen,a_menu_2__panel_parent:!this.isSearchActive&&this.isChildPanelOpen}]},[(0,n.h)(y,{dataKeyById:this.dataKeyById,isBreadcrumbsTruncated:this.isBreadcrumbsTruncated,isPanelMain:this.isPanelMain,isSearchActive:this.isSearchActive,panelParentsOpen:this.panelParentsOpen}),(0,n.h)("ul",{class:"a_menu_2__listview"},[this.isItemsWithoutGroup&&(0,n.h)(A,{dataProParentChildren:this.dataProParentChildren,groupItems:this.itemsGroup.withoutGroup,isPanelOpen:this.isPanelOpen,keyIcon:this.keyIcon,menuId:this.menuId,paneIndex:this.paneIndex,groupIndex:"00"},this.$slots),Object.keys(this.itemsGroup.withGroup).map(((e,a)=>(0,n.h)(A,{key:e,dataProParentChildren:this.dataProParentChildren,groupIndex:a,groupItems:this.itemsGroup.withGroup[e],groupLabel:e,isPanelOpen:this.isPanelOpen,keyIcon:this.keyIcon,menuId:this.menuId,paneIndex:this.paneIndex},this.$slots)))])])}},f={name:"AMenuSearchGroup",props:{dataKeyById:{type:Object,required:!0},dataProParentChildren:{type:Object,required:!0},groupIndex:{type:Number,required:!0},idsSearchVisible:{type:Object,required:!0},items:{type:Array,required:!0},isSearchBreadcrumbsAll:{type:Boolean,required:!1,default:!1},modelSearch:{type:String,required:!1,default:void 0}},setup(e){const a=(0,n.Vh)(e,"groupIndex"),t=(0,n.Vh)(e,"idsSearchVisible"),i=(0,n.Vh)(e,"items"),l=(0,n.Vh)(e,"dataKeyById"),r=(0,n.Vh)(e,"isSearchBreadcrumbsAll"),s=(0,n.Fl)((()=>!!t.value.main[a.value])),o=({labels:e=[],item:a})=>{if(a[O.Z]){const t=l.value[a[O.Z]],n=(0,c.get)(t,g.Z);return(0,c.isNil)(n)||e.push(n),o({labels:e,item:t})}return e},u=(0,n.Fl)((()=>{let e=[];const a=i.value[0]||{};if(r.value)e=o({labels:e,item:a});else{const t=(0,c.get)(l.value,`${a[O.Z]}.${g.Z}`);(0,c.isNil)(t)||e.push(t)}return e}));return{hasLabelsGroup:(0,n.Fl)((()=>u.value.length>0)),isGroupVisible:s,labelsGroup:u}},render(){return this.isGroupVisible?[this.hasLabelsGroup?this.labelsGroup.map((e=>(0,n.h)("dt",null,[(0,n.wy)((0,n.h)("div",{class:"a_menu_2__list_header a_menu_2__list_header_search"}),[[S.Z,e]])]))):(0,n.h)("dt"),this.items.map((e=>(0,n.h)(C,{item:e,dataProParentChildren:this.dataProParentChildren,isLinkInSearchPanel:!0,modelSearch:this.modelSearch,idsSearchVisible:this.idsSearchVisible},this.$slots)))]:""}},L={name:"AMenuSearchPanel",props:{dataKeyById:{type:Object,required:!0},dataProParentChildren:{type:Object,required:!0},dataProParentList:{type:Array,required:!0},idsSearchVisible:{type:Object,required:!0},isSearchActive:{type:Boolean,required:!0},isSearchBreadcrumbsAll:{type:Boolean,required:!1,default:!1},modelSearch:{type:String,required:!1,default:void 0}},setup(e){const a=(0,n.Vh)(e,"idsSearchVisible"),t=(0,n.Vh)(e,"isSearchActive");return{isNoneFound:(0,n.Fl)((()=>!!t.value&&(0,c.isEmpty)(a.value.rest)))}},render(){return this.isSearchActive?(0,n.h)("div",{class:"a_menu_2__panel a_menu_2__panel_opened a_menu_2__panel_search"},[this.isNoneFound?(0,n.h)("div",{class:"a_panel__none_found"},"Keine Ergebnisse gefunden."):(0,n.h)("dl",null,[this.dataProParentList.map(((e,a)=>(0,n.h)(f,{items:e,key:a,groupIndex:a,dataKeyById:this.dataKeyById,dataProParentChildren:this.dataProParentChildren,idsSearchVisible:this.idsSearchVisible,isSearchBreadcrumbsAll:this.isSearchBreadcrumbsAll,modelSearch:this.modelSearch},this.$slots)))])]):""}},B="_a_breadcrumbs";var E=t(5772),M=t(9873);var q=t(8925),R=t(9385);const F={name:"AMenu2",provide(){return{keySlot:(0,n.Fl)((()=>this.keySlot))}},props:{buttonToggleClass:{type:[String,Object],required:!1,default:"a_btn a_btn_secondary"},buttonToggleProps:{type:Object,required:!1,default:()=>({})},canChangeBodyClass:{type:Boolean,required:!1,default:!1},data:{type:Array,required:!1,default:()=>[]},hasSearch:{type:Boolean,required:!1,default:!0},isBackdrop:{type:Boolean,required:!1,default:!0},isBlockerClickable:{type:Boolean,required:!1},isBodyFocusAfterClick:{type:Boolean,required:!1,default:!0},isBreadcrumbsTruncated:{type:Boolean,required:!1,default:!0},isLinkTruncated:{type:Boolean,required:!1,default:!0},isMenuOpenInitial:{type:Boolean,required:!1,default:!0},isSearchBreadcrumbsAll:{type:Boolean,required:!1,default:!1},isTranslated:{type:Boolean,required:!1},keyChildren:{type:String,required:!1,default:void 0},keyGroup:{type:String,required:!1,default:"group"},keyIcon:{type:String,required:!1,default:"icon"},keyId:{type:String,required:!1,default:"id"},keyLabel:{type:String,required:!1,default:"label"},keyLabelCallback:{type:Function,required:!1,default:void 0},keyParent:{type:String,required:!1,default:"parent"},keySlot:{type:String,required:!1,default:void 0},menuId:{type:String,required:!1,default:()=>(0,c.uniqueId)("a_menu_2_")}},setup(e){const a=(0,n.Vh)(e,"isLinkTruncated"),{dataKeyById:t,dataProParent:i}=function(e){const a=(0,n.Vh)(e,"data"),t=(0,n.Vh)(e,"isTranslated"),i=(0,n.Vh)(e,"keyChildren"),l=(0,n.Vh)(e,"keyId"),r=(0,n.Vh)(e,"keyLabel"),s=(0,n.Vh)(e,"keyLabelCallback"),o=({dataClone:e,dataFlat:a=[],parentId:n,parentLabel:u,breadcrumbs:d=[]})=>((0,c.forEach)(e,(e=>{let p;if(e[I.Z]=(0,c.get)(e,l.value),e[O.Z]=n,e[B]=(({breadcrumbs:e=[],parentId:a,parentLabel:t})=>{const n=(0,c.clone)(e);return a&&n.push({parentId:a,parentLabel:t}),n})({breadcrumbs:d,parentId:n,parentLabel:u}),p=s.value?s.value({item:e}):(0,c.get)(e,r.value),t.value&&(0,M.P5)(p)&&(p=(0,M.Gd)({placeholder:p})),e[g.Z]=p,i.value){const t=(0,c.get)(e,i.value);t&&t.length&&(o({dataClone:t,parentId:e[I.Z],parentLabel:e[g.Z],dataFlat:a,breadcrumbs:e[B]}),e[E.Z]=t)}a.push(e)})),a),u=(0,n.Fl)((()=>{const e=(0,c.cloneDeep)(a.value);let t=[];return t=o({dataClone:e,dataFlat:t}),t})),d=(0,n.Fl)((()=>{const e=[],a={};return(0,c.forEach)(u.value,(t=>{const n=t[O.Z];(0,c.isNil)(n)?e.push(t):(a[n]=a[n]||[],a[n].push(t))})),{main:e,children:a}}));return{dataKeyById:(0,n.Fl)((()=>(0,c.keyBy)(u.value,I.Z))),dataProParent:d}}(e),{idsSearchVisible:l,isSearchActive:r,dataProParentList:s,modelSearch:o,resetSearch:u,updateModelSearch:d}=function(e,{dataProParent:a=(0,n.Fl)((()=>({main:[],children:{}})))}){const t=(0,n.iH)(""),i=(0,n.Fl)((()=>!!t.value)),l=(0,n.Fl)((()=>{const e=[];return a.value.main.length&&e.push(a.value.main),(0,c.forEach)(a.value.children,(a=>{e.push(a)})),e}));return{idsSearchVisible:(0,n.Fl)((()=>{const e={main:{},rest:{}};if(i.value){const a=new RegExp(t.value,"gi");(0,c.forEach)(l.value,((t,n)=>{let i=!1;(0,c.forEach)(t,(t=>{if(-1!==`${t[g.Z]}`.search(a)){const a=t[I.Z];e.rest[a]=!0,i=!0}})),i&&(e.main[n]=!0)}))}return e})),isSearchActive:i,dataProParentList:l,modelSearch:t,resetSearch:()=>{i.value&&(t.value="")},updateModelSearch:e=>{t.value=e}}}(0,{dataProParent:i}),{closeAllPanels:p,isSubMenuOpen:_,panelParentsOpen:m,setDefaultMenu:b,togglePanel:P}=function(e,{dataKeyById:a=(0,n.Fl)((()=>({}))),resetSearch:t=(()=>{})}){const i=(0,n.iH)([]),l=(0,n.Fl)((()=>i.value.length>0)),r=({parentId:e,panelParentsOpenLocal:t})=>{if(e){t.unshift(e);const n=a.value[e][O.Z];return r({parentId:n,panelParentsOpenLocal:t})}return t};return{closeAllPanels:()=>{i.value=[],t()},isSubMenuOpen:l,panelParentsOpen:i,setDefaultMenu:()=>{t(),i.value=[]},togglePanel:({parentIds:e,parentId:a,isLinkInSearchPanel:n})=>{if(e)i.value=e;else if(n){const e=[];i.value=r({parentId:a,panelParentsOpenLocal:e})}else{const e=i.value.indexOf(a);-1===e?i.value.push(a):i.value.splice(e,i.value.length)}t()}}}(0,{dataKeyById:t,resetSearch:u}),{isMenuOpen:y,removeBodyClasses:v,toggleMenu:S}=h(e),{attributesMenuClick:k}=function(e,{isMenuOpen:a=(0,n.iH)(!1),toggleMenu:t=(()=>{})}){const i=(0,n.Vh)(e,"isBlockerClickable");return{attributesMenuClick:(0,n.Fl)((()=>{const e={};return i.value&&!a.value&&(e.onClick=()=>t({isOpen:!0}),e.class="a_menu_2 a_menu_2_clickable"),e}))}}(e,{isMenuOpen:y,toggleMenu:S}),{destroyEventBusUpdateViewOnResize:C,initEventBusUpdateViewOnResize:A,initMenuOpenOrClose:T,isMobileWidth:f}=function(e,{toggleMenu:a}){const t=(0,n.Vh)(e,"isMenuOpenInitial"),{isMobileWidth:i}=(0,q.ZP)(),l=e=>{a(e?{isOpen:!1}:{isOpen:t.value})};return{destroyEventBusUpdateViewOnResize:()=>{R.Z.$on("updateViewOnResize",l)},initEventBusUpdateViewOnResize:()=>{R.Z.$on("updateViewOnResize",l)},initMenuOpenOrClose:()=>{i.value?a({isOpen:!1}):a({isOpen:t.value})},isMobileWidth:i}}(e,{toggleMenu:S}),{clickMenuLink:L,isMenuLinkClicked:F}=function(e,{isMobileWidth:a=(0,n.iH)(!1),resetSearch:t=(()=>{}),toggleMenu:i=(()=>{})}){const l=(0,n.Vh)(e,"isBodyFocusAfterClick"),r=(0,n.iH)(!1);return{clickMenuLink:()=>{r.value=!0,t(),l.value&&(document.body.hasAttribute("tabindex")?document.body.focus():(document.body.setAttribute("tabindex","-1"),document.body.focus(),document.body.removeAttribute("tabindex"))),a.value&&i({isOpen:!1})},isMenuLinkClicked:r}}(e,{isMobileWidth:f,resetSearch:u,toggleMenu:S}),{attributesBlockerClick:V}=function(e,{closeAllPanels:a=(()=>{})}){const t=(0,n.Vh)(e,"isBlockerClickable"),i=()=>{a()};return{attributesBlockerClick:(0,n.Fl)((()=>{const e={};return t.value&&(e.onClick=i,e.class="a_menu_2__blocker a_menu_2_clickable"),e}))}}(e,{closeAllPanels:p}),{checkAllRoutes:x,currentRoute:N}=function({dataKeyById:e=(0,n.Fl)((()=>({}))),dataProParent:a=(0,n.Fl)((()=>({main:[],children:{}}))),isMenuLinkClicked:t=(0,n.iH)(!1),panelParentsOpen:i=(0,n.iH)([])}){const l=(0,n.FN)().appContext.config.globalProperties.$router,r=(0,n.Fl)((()=>l.currentRoute)),s=({route:a={},panelParentsOpenLocal:t=[]})=>{const n=a[O.Z];return n&&(t.unshift(n),s({route:e.value[n],panelParentsOpenLocal:t})),t},o=({routes:e=[],currentFullPath:a="/"})=>{let t=!1;return(0,c.forEach)(e,(e=>{if(e.to){const{fullPath:n}=l.resolve(e.to);if(n===a){const a=[];return i.value=s({route:e,panelParentsOpenLocal:a}),t=!0,!1}}})),t};return{checkAllRoutes:()=>{if(t.value)return void(t.value=!1);const e=l.currentRoute.value.fullPath;let n=!1;n=o({routes:a.value.main,currentFullPath:e}),n||(0,c.forEach)(a.value.children,(a=>{if(n=o({routes:a,currentFullPath:e}),n)return!1}))},currentRoute:r}}({dataKeyById:t,dataProParent:i,isMenuLinkClicked:F,panelParentsOpen:m});return(0,n.YP)(N,(()=>{x()}),{immediate:!0}),(0,n.YP)(y,(()=>{u(),p()})),(0,n.JJ)("isLinkTruncated",(0,n.Fl)((()=>a.value))),(0,n.JJ)("isMenuOpen",(0,n.Fl)((()=>y.value))),(0,n.JJ)("clickMenuLink",L),(0,n.JJ)("togglePanel",P),T(),A(),(0,n.Jd)((()=>{v(),C()})),{attributesBlockerClick:V,attributesMenuClick:k,dataKeyById:t,dataProParent:i,dataProParentList:s,idsSearchVisible:l,isMobileWidth:f,isMenuOpen:y,isSearchActive:r,isSubMenuOpen:_,modelSearch:o,panelParentsOpen:m,removeBodyClasses:v,setDefaultMenu:b,toggleMenu:S,togglePanel:P,updateModelSearch:d}},render(){return[(0,n.h)("nav",{id:this.menuId,class:["a_menu_2",{a_menu_2_sub_open:this.isSubMenuOpen,a_menu_2_open:this.isMenuOpen,a_menu_2_close:!this.isMenuOpen,a_menu_2_mobile:this.isMobileWidth}],...this.attributesMenuClick},[(0,n.h)("div",{class:"a_menu_2__navbar_top"},[(0,n.h)(_,{menuId:this.menuId,class:this.buttonToggleClass,buttonToggleProps:this.buttonToggleProps}),this.$slots.menuSearch&&this.$slots.menuSearch(),this.hasSearch&&(0,n.h)(u.Z,{id:"a_menu_2_search",class:"a_menu_2__navbar_top__search",modelValue:this.modelSearch,label:"_SEARCH_MENU_","onUpdate:modelValue":this.updateModelSearch})]),(0,n.h)("div",{class:"a_menu_2__panels"},[(0,n.h)(T,{attributesBlockerClick:this.attributesBlockerClick,dataKeyById:this.dataKeyById,dataProParentChildren:this.dataProParent.children,isBreadcrumbsTruncated:this.isBreadcrumbsTruncated,isPanelMain:!0,isSearchActive:this.isSearchActive,keyGroup:this.keyGroup,keyIcon:this.keyIcon,menuId:this.menuId,paneIndex:"00",panelItems:this.dataProParent.main,panelParentsOpen:this.panelParentsOpen},this.$slots),Object.keys(this.dataProParent.children).map(((e,a)=>(0,n.h)(T,{key:e,attributesBlockerClick:{},dataKeyById:this.dataKeyById,dataProParentChildren:this.dataProParent.children,isBreadcrumbsTruncated:this.isBreadcrumbsTruncated,isSearchActive:this.isSearchActive,keyGroup:this.keyGroup,keyIcon:this.keyIcon,menuId:this.menuId,paneIndex:a,panelItems:this.dataProParent.children[e],panelParentsOpen:this.panelParentsOpen,parentId:e},this.$slots))),(0,n.h)(L,{dataKeyById:this.dataKeyById,dataProParentChildren:this.dataProParent.children,dataProParentList:this.dataProParentList,idsSearchVisible:this.idsSearchVisible,isSearchActive:this.isSearchActive,isSearchBreadcrumbsAll:this.isSearchBreadcrumbsAll,modelSearch:this.modelSearch},this.$slots)]),this.isBackdrop&&(0,n.h)(n.lR,{to:"body"},[(0,n.h)("div",{class:"a_menu_2__backdrop a_backdrop a_backdrop_fade"})])])]}},V={name:"PageMenuBasicExample",components:{AlohaExample:o.Z,AMenu2:F},setup(){const{codeHtml:e}={codeHtml:'<a-alert>\n  html="AAlert"\n  :is-visible="true"\n</a-alert>'},{codeJs:a}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertTypes",\n  components: {\n    AAlert,\n  },\n};'};return{codeHtml:e,codeJs:a,menuItems:[{id:"accordion",label:"Accordion",to:{name:"PageAccordion"},icon:"ListNested"},{id:"accordion2",label:"Accordion seeeeeehr lange name",icon:"ListNested",children:[{id:"accordion3",label:"Accordion seeeeeehr lange name",to:{name:"PageAccordion"}}]},{id:"alert",label:"Alert",to:{name:"PageAlert"},icon:"ExclamationTriangle"},{id:"Button",label:"Button",to:{name:"PageButton"},icon:"EjectFill"},{id:"css",label:"CSS",icon:"FiletypeCss",children:[{id:"columns",label:"Columns",to:{name:"PageColumns"}}]},{group:"Hola",id:"cloak",label:"Cloak",to:{name:"PageCloak"},icon:"HourglassSplit"},{group:"Hola",id:"cloak2",label:"Cloak disabled",to:{name:"PageCloak"},icon:"HourglassSplit",disabled:!0},{group:"Hola",id:"collapse",label:"Collapse",to:{name:"PageCollapse"},icon:"ArrowsCollapse"},{id:"confirm",label:"Confirm",to:{name:"PageConfirm"},icon:"CheckLg"},{id:"directives",label:"Directives",icon:"CodeSquare",children:[{id:"OnHooks",label:"OnHooks",to:{name:"PageOnHooks"}}]},{id:"disclosure",label:"Disclosure",to:{name:"PageDisclosure"},icon:"ChevronBarExpand"},{id:"filters",label:"filters",to:{name:"PageFilters"},icon:"FilterCircleFill"},{id:"filtersRight",label:"filtersRight",to:{name:"PageFiltersRight"},icon:"FilterCircleFill"},{id:"dropdown",label:"Dropdown",to:{name:"PageDropdown"},icon:"MenuDown"},{id:"form",label:"Form",icon:"FileEarmarkText",children:[{id:"checkbox",label:"Checkbox",to:{name:"PageCheckbox"}},{id:"fieldset",label:"Fieldset",to:{name:"PageFieldset"}},{id:"ui-child",label:"Child",children:[{id:"input",to:{name:"PageInput"},label:"Input"}]},{id:"datepicker",label:"Datepicker",to:{name:"PageDatepicker"}},{id:"datepicker-range",label:"DatepickerRange",to:{name:"PageDatepickerRange"}},{id:"form",label:"Form",to:{name:"PageForm"}},{id:"input",to:{name:"PageInput"},label:"Input"},{id:"input-number",to:{name:"PageInputNumber"},label:"Input number"},{id:"input-number-range",to:{name:"PageInputNumberRange"},label:"Input number range"},{id:"json",label:"JSON",to:{name:"PageAJson"}},{id:"radio",label:"Radio",to:{name:"PageRadio"}},{id:"rate",label:"Rate",to:{name:"PageRate"}},{id:"select",label:"Select",to:{name:"PageSelect"}},{id:"tinyMce",label:"TinyMce",to:{name:"PageTinyMce"}}]},{id:"GroupButtonDropdown",label:"GroupButtonDropdown",to:{name:"PageGroupButtonDropdown"},icon:"MenuDown"},{id:"Link",label:"Link",to:{name:"PageLink"},icon:"BoxArrowUpRight"},{id:"LinkCopy",label:"Link copy",to:{name:"PageLinkCopy"},icon:"Files"},{id:"list",label:"List",to:{name:"PageList"},icon:"ListUl"},{group:"Hola",id:"loading",label:"Loading",to:{name:"PageLoading"},icon:"HourglassSplit"},{id:"menu",label:"Menu",icon:"MenuAppFill",children:[{id:"PageMenuBasic",label:"Menu basic",to:{name:"PageMenuBasic"}}]},{id:"modal",label:"Modal",to:{name:"PageModal"},icon:"Window"},{id:"notification",label:"Notification",to:{name:"PageNotification"},icon:"Bell"},{id:"progress",label:"Progress",icon:"Reception2",children:[{id:"progressBar",label:"Progress bar",to:{name:"PageProgress"}},{id:"progressCircle",label:"Progress circle",to:{name:"PageProgressCircle"}}]},{id:"scale",label:"Scale",to:{name:"PageScale"},icon:"Dnd"},{id:"ShowMore",label:"Show more",to:{name:"PageShowMore"},icon:"ChevronBarExpand"},{group:"Aloha",id:"spinner",label:"Spinner",to:{name:"PageSpinner"},icon:"HourglassSplit"},{id:"svg",label:"Svg",to:{name:"PageSvg"},icon:"FiletypeSvg"},{id:"Table",label:"Tables",icon:"Table",children:[{id:"PageTableComplex",label:"Table complex",to:{name:"PageTableComplex"}},{id:"PageTablePagination",label:"Table pagination",to:{name:"PageTablePagination"}},{id:"PageTableSimple",label:"Table simple",to:{name:"PageTableSimple"}},{id:"PageTableSort",label:"Table sort",to:{name:"PageTableSort"}},{id:"PageTablePreview",label:"Table preview",to:{name:"PageTablePreview"}},{id:"PageTablePreviewDown",label:"Table preview down",to:{name:"PageTablePreviewDown"}}]},{id:"tabs",label:"Tabs",to:{name:"PageTabs"},icon:"SegmentedNav"},{id:"tooltip",label:"Tooltip",to:{name:"PageTitle"},icon:"ChatSquareTextFill",titleHtml:"PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle"},{id:"Translation",label:"Translation",to:{name:"PageTranslation"},icon:"Translate"},{id:"wizard",label:"Wizard",icon:"ArrowRightCircleFill",children:[{id:"PageWizard",label:"Normal",to:{name:"PageWizard"}},{id:"PageModalWizard",label:"Modal Wizard",to:{name:"PageModalWizard"}}]}]}}};var x=t(3744);const N=(0,x.Z)(V,[["render",function(e,a){const t=(0,n.up)("a-menu2"),i=(0,n.up)("aloha-example");return(0,n.wg)(),(0,n.j4)(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:"is-visible"},{default:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n.Wm)(t,{data:e.menuItems,"key-children":"children","key-slot":"slot"},null,8,["data"])])])),_:1},8,["code-html","code-js"])}]]),w={name:"PageMenuBasic",components:{AlohaPage:i.Z,AlohaTableProps:l.Z,ATranslation:r.Z,PageMenuBasicExample:N},setup(){const{pageTitle:e}=function(){const e=(0,n.Fl)((()=>(0,M.Gd)({placeholder:"_A_PAGE_MENU_BASIC_HEADER_"})));return{pageTitle:(0,n.Fl)((()=>e.value?` (${e.value})`:""))}}(),{dataProps:a}={dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]},{dataSlots:t}={dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]},{dataEvents:i}={dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]},{dataExposes:l}={dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]};return{dataEvents:i,dataExposes:l,dataProps:a,dataSlots:t,pageTitle:e}}},H=(0,x.Z)(w,[["render",function(e,a){const t=(0,n.up)("a-translation"),i=(0,n.up)("page-menu-basic-example"),l=(0,n.up)("aloha-page");return(0,n.wg)(),(0,n.j4)(l,{"page-title":e.pageTitle},{body:(0,n.w5)((()=>[(0,n.Wm)(t,{tag:"p",html:"_A_PAGE_MENU_BASIC_COMPONENT_DESCRIPTION_"}),(0,n.Wm)(i),(0,n.kq)("aloha-table-props("),(0,n.kq)('  :data="dataProps"'),(0,n.kq)(")"),(0,n.kq)(""),(0,n.kq)("aloha-table-props("),(0,n.kq)('  table-label="Slots"'),(0,n.kq)('  :data="dataSlots"'),(0,n.kq)("  :columns=\"['name', 'description']\""),(0,n.kq)(")"),(0,n.kq)(""),(0,n.kq)("aloha-table-props("),(0,n.kq)('  table-label="Events"'),(0,n.kq)('  :data="dataEvents"'),(0,n.kq)("  :columns=\"['name', 'type', 'description']\""),(0,n.kq)(")"),(0,n.kq)(""),(0,n.kq)("aloha-table-props("),(0,n.kq)('  table-label="Exposes"'),(0,n.kq)('  :data="dataExposes"'),(0,n.kq)("  :columns=\"['name', 'type', 'description']\""),(0,n.kq)(")")])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.7261.cea50e5c5db1cbaef0d3.js.map