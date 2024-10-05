import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const h=({children:o,columns:j=12,spacing:y=2})=>{const S={display:"grid",gridTemplateColumns:`repeat(${j}, 1fr)`,gap:`${y}px`};return e.jsx("div",{style:S,children:o})};h.__docgenInfo={description:"",methods:[],displayName:"EqualSpacingGrid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}}}};const q={title:"Layout/EqualSpacingGrid",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{columns:{control:"number"},spacing:{control:"number"}}},r=({children:o})=>e.jsx("div",{style:{padding:"20px",backgroundColor:"#e0e0e0",textAlign:"center"},children:o}),s={args:{spacing:2,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"}),e.jsx(r,{children:"Item 4"}),e.jsx(r,{children:"Item 5"}),e.jsx(r,{children:"Item 6"}),e.jsx(r,{children:"Item 7"})]}},t={args:{...s.args,columns:4}},a={args:{...s.args}},n={args:{...s.args,columns:2}};var c,m,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    spacing: 2,
    children: [<GridItem>Item 1</GridItem>, <GridItem>Item 2</GridItem>, <GridItem>Item 3</GridItem>, <GridItem>Item 4</GridItem>, <GridItem>Item 5</GridItem>, <GridItem>Item 6</GridItem>, <GridItem>Item 7</GridItem>]
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: 4
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,g,I;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args
  }
}`,...(I=(g=a.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,G,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: 2
  }
}`,...(x=(G=n.parameters)==null?void 0:G.docs)==null?void 0:x.source}}};const C=["Default","FourColumns","WithDifferentSpacing","TwoColumns"];export{s as Default,t as FourColumns,n as TwoColumns,a as WithDifferentSpacing,C as __namedExportsOrder,q as default};
