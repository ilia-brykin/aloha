import{t as e}from"./chunk.AlohaExample.CDuUdjpI.js";import{t}from"./chunk.AlohaPage.IS3NRfGI.js";import{mn as n,t as r}from"./bundle.index.DikcaTJ9.js";import{Cn as i,Ht as a,It as o,Rt as s,Vt as c,Wt as l,an as u,ln as d,pn as f,qt as p,sn as m}from"./chunk.vendor.SEynj6EJ.js";function h(){return{codeBasic:`<div class="a_tile">
  <div class="a_tile__body">
    A tile groups related content on the surface.
  </div>
</div>`,codeClickable:`<div class="a_tile a_bg_primary_subtle_hover">
  <div class="a_tile__body">
    <h3 class="a_fs_5">
      <a class="a_stretched_link" href="/projects/1">Project Aloha</a>
    </h3>
    <p>The whole tile is clickable.</p>
  </div>
</div>`,codeColors:`<div class="a_tile a_border_primary_subtle">...</div>
<div class="a_tile a_border_danger">...</div>
<div class="a_tile a_shadow_md a_border_0">...</div>
<div class="a_tile a_border_style_dashed">...</div>`,codeGrid:`<div class="a_columns a_columns_count_3 a_columns_count_1_mobile">
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
</div>`,codeParts:`<div class="a_tile">
  <div class="a_tile__header">
    <h3 class="a_fs_5">Invoice 2026-114</h3>
  </div>
  <div class="a_tile__body">
    <p>Amount: 1.234,50 €</p>
    <p>Due on 01.12.2026</p>
  </div>
  <div class="a_tile__footer a_d_flex a_gap_2">
    <button class="a_btn a_btn_primary" type="button">Pay</button>
    <button class="a_btn a_btn_secondary" type="button">Details</button>
  </div>
</div>`}}var g={name:`PageTile`,components:{AlohaExample:e,AlohaPage:t,ATranslation:n},setup(){let{codeBasic:e,codeClickable:t,codeColors:n,codeGrid:r,codeParts:i}=h();return{codeBasic:e,codeClickable:t,codeColors:n,codeGrid:r,codeParts:i}}},_={class:`a_tile a_bg_primary_subtle_hover a_max_width_400px`},v={class:`a_tile__body`},y={class:`a_fs_5`},b={class:`a_columns a_columns_count_3 a_columns_count_1_mobile`},x={class:`a_tile a_height_100`},S={class:`a_tile__header`},C={class:`a_tile__body`},w={key:0,class:`a_mb_0`},T={key:1,class:`a_mb_0`};function E(e,t,n,r,h,g){let E=d(`a-translation`),D=d(`aloha-example`),O=d(`aloha-table-css-vars`),k=d(`aloha-page`);return u(),a(k,{"page-title":`_A_TILE_PAGE_NAME_`,"page-title-h1":`_A_TILE_PAGE_NAME_`},{body:f(()=>[p(E,{tag:`p`,html:`_A_TILE_PAGE_DESCRIPTION_`}),p(D,{"code-html":e.codeBasic,header:`_A_TILE_BASIC_HEADER_`,description:`_A_TILE_BASIC_DESCRIPTION_`},{default:f(()=>[...t[1]||=[c(`div`,{class:`a_tile a_max_width_400px`},[c(`div`,{class:`a_tile__body`},`A tile groups related content on the surface.`)],-1)]]),_:1},8,[`code-html`]),p(D,{"code-html":e.codeParts,header:`_A_TILE_PARTS_HEADER_`,description:`_A_TILE_PARTS_DESCRIPTION_`},{default:f(()=>[...t[2]||=[c(`div`,{class:`a_tile a_max_width_400px`},[c(`div`,{class:`a_tile__header`},[c(`h3`,{class:`a_fs_5`},`Invoice 2026-114`)]),c(`div`,{class:`a_tile__body`},[c(`p`,null,`Amount: 1.234,50 €`),c(`p`,{class:`a_mb_0`},`Due on 01.12.2026`)]),c(`div`,{class:`a_tile__footer a_d_flex a_gap_2`},[c(`button`,{class:`a_btn a_btn_primary`,type:`button`},`Pay`),c(`button`,{class:`a_btn a_btn_secondary`,type:`button`},`Details`)])],-1)]]),_:1},8,[`code-html`]),p(D,{"code-html":e.codeClickable,header:`_A_TILE_CLICKABLE_HEADER_`,description:`_A_TILE_CLICKABLE_DESCRIPTION_`},{default:f(()=>[c(`div`,_,[c(`div`,v,[c(`h3`,y,[c(`a`,{class:`a_stretched_link`,href:`#`,onClick:t[0]||=o(()=>{},[`prevent`])},`Project Aloha`)]),t[3]||=c(`p`,{class:`a_mb_0`},`The whole tile is clickable.`,-1)])])]),_:1},8,[`code-html`]),p(D,{"code-html":e.codeColors,header:`_A_TILE_COLORS_HEADER_`,description:`_A_TILE_COLORS_DESCRIPTION_`},{default:f(()=>[...t[4]||=[c(`div`,{class:`a_d_flex a_gap_3 a_flex_wrap`},[c(`div`,{class:`a_tile a_border_primary_subtle`},[c(`div`,{class:`a_tile__body`},[c(`code`,null,`a_border_primary_subtle`)])]),c(`div`,{class:`a_tile a_border_danger`},[c(`div`,{class:`a_tile__body`},[c(`code`,null,`a_border_danger`)])]),c(`div`,{class:`a_tile a_shadow_md a_border_0`},[c(`div`,{class:`a_tile__body`},[c(`code`,null,`a_shadow_md a_border_0`)])]),c(`div`,{class:`a_tile a_border_style_dashed`},[c(`div`,{class:`a_tile__body`},[c(`code`,null,`a_border_style_dashed`)])])],-1)]]),_:1},8,[`code-html`]),p(D,{"code-html":e.codeGrid,header:`_A_TILE_GRID_HEADER_`,description:`_A_TILE_GRID_DESCRIPTION_`},{default:f(()=>[c(`div`,b,[(u(),l(s,null,m(3,e=>c(`div`,{class:`a_column a_column_1`,key:e},[c(`div`,x,[c(`div`,S,`Tile `+i(e),1),c(`div`,C,[e===2?(u(),l(`p`,w,`A longer text. All tiles in the row get the same height with a_height_100.`)):(u(),l(`p`,T,`Text`))])])])),64))])]),_:1},8,[`code-html`]),p(O,{files:`utils/tile`})]),_:1})}var D=r(g,[[`render`,E]]);export{D as default};