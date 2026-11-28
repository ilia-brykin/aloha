import{t as e}from"./chunk.AlohaExample.VTWuqY0j.js";import{t}from"./chunk.AlohaPage.BSfHVC43.js";import{mn as n,t as r}from"./bundle.index.D-5bYXwk.js";import{Gt as i,Ht as a,Jt as o,Lt as s,Ut as c,cn as l,mn as u,on as d,un as f,wn as p,zt as m}from"./chunk.vendor.DL09mhUf.js";function h(){return{codeBasic:`<div class="a_tile">
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
</div>`}}var g={name:`PageTile`,components:{AlohaExample:e,AlohaPage:t,ATranslation:n},setup(){let{codeBasic:e,codeClickable:t,codeColors:n,codeGrid:r,codeParts:i}=h();return{codeBasic:e,codeClickable:t,codeColors:n,codeGrid:r,codeParts:i}}},_={class:`a_tile a_bg_primary_subtle_hover a_max_width_400px`},v={class:`a_tile__body`},y={class:`a_fs_5`},b={class:`a_columns a_columns_count_3 a_columns_count_1_mobile`},x={class:`a_tile a_height_100`},S={class:`a_tile__header`},C={class:`a_tile__body`},w={key:0,class:`a_mb_0`},T={key:1,class:`a_mb_0`};function E(e,t,n,r,h,g){let E=f(`a-translation`),D=f(`aloha-example`),O=f(`aloha-table-css-vars`),k=f(`aloha-page`);return d(),c(k,{"page-title":`_A_TILE_PAGE_NAME_`,"page-title-h1":`_A_TILE_PAGE_NAME_`},{body:u(()=>[o(E,{tag:`p`,html:`_A_TILE_PAGE_DESCRIPTION_`}),o(D,{"code-html":e.codeBasic,header:`_A_TILE_BASIC_HEADER_`,description:`_A_TILE_BASIC_DESCRIPTION_`},{default:u(()=>[...t[1]||=[a(`div`,{class:`a_tile a_max_width_400px`},[a(`div`,{class:`a_tile__body`},`A tile groups related content on the surface.`)],-1)]]),_:1},8,[`code-html`]),o(D,{"code-html":e.codeParts,header:`_A_TILE_PARTS_HEADER_`,description:`_A_TILE_PARTS_DESCRIPTION_`},{default:u(()=>[...t[2]||=[a(`div`,{class:`a_tile a_max_width_400px`},[a(`div`,{class:`a_tile__header`},[a(`h3`,{class:`a_fs_5`},`Invoice 2026-114`)]),a(`div`,{class:`a_tile__body`},[a(`p`,null,`Amount: 1.234,50 €`),a(`p`,{class:`a_mb_0`},`Due on 01.12.2026`)]),a(`div`,{class:`a_tile__footer a_d_flex a_gap_2`},[a(`button`,{class:`a_btn a_btn_primary`,type:`button`},`Pay`),a(`button`,{class:`a_btn a_btn_secondary`,type:`button`},`Details`)])],-1)]]),_:1},8,[`code-html`]),o(D,{"code-html":e.codeClickable,header:`_A_TILE_CLICKABLE_HEADER_`,description:`_A_TILE_CLICKABLE_DESCRIPTION_`},{default:u(()=>[a(`div`,_,[a(`div`,v,[a(`h3`,y,[a(`a`,{class:`a_stretched_link`,href:`#`,onClick:t[0]||=s(()=>{},[`prevent`])},`Project Aloha`)]),t[3]||=a(`p`,{class:`a_mb_0`},`The whole tile is clickable.`,-1)])])]),_:1},8,[`code-html`]),o(D,{"code-html":e.codeColors,header:`_A_TILE_COLORS_HEADER_`,description:`_A_TILE_COLORS_DESCRIPTION_`},{default:u(()=>[...t[4]||=[a(`div`,{class:`a_d_flex a_gap_3 a_flex_wrap`},[a(`div`,{class:`a_tile a_border_primary_subtle`},[a(`div`,{class:`a_tile__body`},[a(`code`,null,`a_border_primary_subtle`)])]),a(`div`,{class:`a_tile a_border_danger`},[a(`div`,{class:`a_tile__body`},[a(`code`,null,`a_border_danger`)])]),a(`div`,{class:`a_tile a_shadow_md a_border_0`},[a(`div`,{class:`a_tile__body`},[a(`code`,null,`a_shadow_md a_border_0`)])]),a(`div`,{class:`a_tile a_border_style_dashed`},[a(`div`,{class:`a_tile__body`},[a(`code`,null,`a_border_style_dashed`)])])],-1)]]),_:1},8,[`code-html`]),o(D,{"code-html":e.codeGrid,header:`_A_TILE_GRID_HEADER_`,description:`_A_TILE_GRID_DESCRIPTION_`},{default:u(()=>[a(`div`,b,[(d(),i(m,null,l(3,e=>a(`div`,{class:`a_column a_column_1`,key:e},[a(`div`,x,[a(`div`,S,`Tile `+p(e),1),a(`div`,C,[e===2?(d(),i(`p`,w,`A longer text. All tiles in the row get the same height with a_height_100.`)):(d(),i(`p`,T,`Text`))])])])),64))])]),_:1},8,[`code-html`]),o(O,{files:`utils/tile`})]),_:1})}var D=r(g,[[`render`,E]]);export{D as default};