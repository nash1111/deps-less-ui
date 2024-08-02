import{r as b}from"./index-DJO9vBfz.js";var j={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=b,E=Symbol.for("react.element"),R=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,I=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function v(t,r,o){var e,i={},n=null,m=null;o!==void 0&&(n=""+o),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(m=r.ref);for(e in r)O.call(r,e)&&!B.hasOwnProperty(e)&&(i[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)i[e]===void 0&&(i[e]=r[e]);return{$$typeof:E,type:t,key:n,ref:m,props:i,_owner:I.current}}l.Fragment=R;l.jsx=v;l.jsxs=v;j.exports=l;var s=j.exports;const a={card:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",margin:"16px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},cardImage:{width:"100%",height:"auto"},cardBody:{padding:"16px"},cardTitle:{fontSize:"1.5rem",marginBottom:"8px"},cardContent:{fontSize:"1rem",color:"#666"},tags:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"},tag:{backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"4px 8px",fontSize:"0.875rem",color:"#333"}},S=({title:t,description:r,imageUrl:o,tags:e})=>s.jsxs("div",{style:{...a.card,width:"320px",minHeight:"360px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[o&&s.jsx("img",{src:o,alt:t,style:a.cardImage}),s.jsxs("div",{style:a.cardBody,children:[s.jsx("h2",{style:a.cardTitle,children:t}),s.jsx("p",{style:a.cardContent,children:r}),e&&e.length>0&&s.jsx("div",{style:a.tags,children:e.map((i,n)=>s.jsx("span",{style:a.tag,children:i},n))})]})]});S.__docgenInfo={description:"",methods:[],displayName:"BlogCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const W={title:"Example/BlogCard",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},d={args:{title:"Card Title",description:"This is the card content"}},p={args:{title:"Card Title",description:"This is the card content",imageUrl:"https://picsum.photos/id/237/200/300"}},c={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"]}};var g,u,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content'
  }
}`,...(h=(u=d.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,y;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var T,_,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3']
  }
}`,...(C=(_=c.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const q=["Default","WithImage","WithTags"];export{d as Default,p as WithImage,c as WithTags,q as __namedExportsOrder,W as default};
