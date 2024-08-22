import{r as A}from"./index-DJO9vBfz.js";var U={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=A,N=Symbol.for("react.element"),F=Symbol.for("react.fragment"),L=Object.prototype.hasOwnProperty,$=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J={key:!0,ref:!0,__self:!0,__source:!0};function q(a,e,n){var t,i={},o=null,d=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(d=e.ref);for(t in e)L.call(e,t)&&!J.hasOwnProperty(t)&&(i[t]=e[t]);if(a&&a.defaultProps)for(t in e=a.defaultProps,e)i[t]===void 0&&(i[t]=e[t]);return{$$typeof:N,type:a,key:o,ref:d,props:i,_owner:$.current}}u.Fragment=F;u.jsx=q;u.jsxs=q;U.exports=u;var r=U.exports;const s={card:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",margin:"16px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",width:"320px",display:"flex",flexDirection:"column",height:"360px"},imageContainer:{height:"200px",overflow:"hidden",backgroundColor:"#e0e0e0"},cardImage:{width:"100%",height:"100%",objectFit:"cover",display:"block"},cardBody:{padding:"16px",display:"flex",flexDirection:"column",height:"200px"},cardTitle:{fontSize:"1.5rem",marginBottom:"8px"},cardContent:{fontSize:"1rem",color:"#666",overflow:"auto",flex:1},tags:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"},tag:{backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"4px 8px",fontSize:"0.875rem",color:"#333"}},B=({title:a,url:e,description:n,publishedDate:t,imageUrl:i,tags:o})=>r.jsxs("div",{style:s.card,children:[r.jsx("div",{style:s.imageContainer,children:i?r.jsx("img",{src:i,alt:a,style:s.cardImage}):r.jsx("div",{style:{width:"100%",height:"100%"}})}),r.jsxs("div",{style:s.cardBody,children:[r.jsx("h2",{style:s.cardTitle,children:r.jsx("a",{href:e,style:{textDecoration:"none",color:"inherit"},children:a})}),r.jsxs("div",{style:s.cardContent,children:[n&&r.jsx("p",{children:n}),t&&r.jsxs("p",{style:{marginTop:"8px",fontSize:"0.875rem"},children:["Published: ",t]}),o&&o.length>0&&r.jsx("div",{style:s.tags,children:o.map((d,P)=>r.jsx("span",{style:s.tag,children:d},P))})]})]})]});B.__docgenInfo={description:"",methods:[],displayName:"BlogCard",props:{title:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},publishedDate:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const G={title:"Example/BlogCard",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},p={args:{title:"Card Title",url:"https://example.com"}},c={args:{title:"Card Title",url:"https://example.com",description:"This is the card content",imageUrl:"https://picsum.photos/id/237/200/300"}},l={args:{title:"Card Title",url:"https://example.com",description:"This is the card content",tags:["tag1","tag2","tag3"]}},m={args:{title:"Card Title",url:"https://example.com",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/200/300"}},g={args:{title:"Card Title",url:"https://example.com",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/400/300"}},h={args:{title:"Card Title",url:"https://example.com",description:"This is the card content",publishedDate:"2021-01-01"}};var x,f,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    url: 'https://example.com'
  }
}`,...(T=(f=p.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var y,C,_;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    url: 'https://example.com',
    description: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var v,b,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    url: 'https://example.com',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3']
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,W,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    url: 'https://example.com',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(w=(W=m.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var I,D,E;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    url: 'https://example.com',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300'
  }
}`,...(E=(D=g.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var R,O,k;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    url: 'https://example.com',
    description: 'This is the card content',
    publishedDate: '2021-01-01'
  }
}`,...(k=(O=h.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const H=["Default","WithImage","WithTags","WithTagsAndImage","WithTagsAndWideImage","WithPublishedDate"];export{p as Default,c as WithImage,h as WithPublishedDate,l as WithTags,m as WithTagsAndImage,g as WithTagsAndWideImage,H as __namedExportsOrder,G as default};
