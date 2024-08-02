import{r as v}from"./index-DJO9vBfz.js";var y={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=v,j=Symbol.for("react.element"),E=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,O=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,o){var r,a={},p=null,l=null;o!==void 0&&(p=""+o),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)S.call(e,r)&&!R.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:j,type:t,key:p,ref:l,props:a,_owner:O.current}}c.Fragment=E;c.jsx=_;c.jsxs=_;y.exports=c;var s=y.exports;const n={card:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",margin:"16px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},cardImage:{width:"100%",height:"auto"},cardBody:{padding:"16px"},cardTitle:{fontSize:"1.5rem",marginBottom:"8px"},cardContent:{fontSize:"1rem",color:"#666"}},T=({title:t,content:e,imageUrl:o})=>s.jsxs("div",{style:n.card,children:[o&&s.jsx("img",{src:o,alt:t,style:n.cardImage}),s.jsxs("div",{style:n.cardBody,children:[s.jsx("h2",{style:n.cardTitle,children:t}),s.jsx("p",{style:n.cardContent,children:e})]})]});T.__docgenInfo={description:"",methods:[],displayName:"BlogCard",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Example/BlogCard",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},i={args:{title:"Card Title",content:"This is the card content"}},d={args:{title:"Card Title",content:"This is the card content",imageUrl:"https://picsum.photos/id/237/200/300"}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    content: 'This is the card content'
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    content: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const w=["Default","WithImage"];export{i as Default,d as WithImage,w as __namedExportsOrder,I as default};
