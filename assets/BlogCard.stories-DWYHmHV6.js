import{r as q}from"./index-DJO9vBfz.js";var U={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=q,z=Symbol.for("react.element"),N=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,L=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function B(i,e,o){var t,s={},n=null,d=null;o!==void 0&&(n=""+o),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(d=e.ref);for(t in e)F.call(e,t)&&!$.hasOwnProperty(t)&&(s[t]=e[t]);if(i&&i.defaultProps)for(t in e=i.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:z,type:i,key:n,ref:d,props:s,_owner:L.current}}u.Fragment=N;u.jsx=B;u.jsxs=B;U.exports=u;var r=U.exports;const a={card:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",margin:"16px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",width:"320px",display:"flex",flexDirection:"column",height:"360px"},imageContainer:{height:"200px",overflow:"hidden",backgroundColor:"#e0e0e0"},cardImage:{width:"100%",height:"100%",objectFit:"cover",display:"block"},cardBody:{padding:"16px",display:"flex",flexDirection:"column",height:"200px"},cardTitle:{fontSize:"1.5rem",marginBottom:"8px"},cardContent:{fontSize:"1rem",color:"#666",overflow:"auto",flex:1},tags:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"},tag:{backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"4px 8px",fontSize:"0.875rem",color:"#333"}},P=({title:i,description:e,publishedDate:o,imageUrl:t,tags:s})=>r.jsxs("div",{style:a.card,children:[r.jsx("div",{style:a.imageContainer,children:t?r.jsx("img",{src:t,alt:i,style:a.cardImage}):r.jsx("div",{style:{width:"100%",height:"100%"}})}),r.jsxs("div",{style:a.cardBody,children:[r.jsx("h2",{style:a.cardTitle,children:i}),r.jsxs("div",{style:a.cardContent,children:[e&&r.jsx("p",{children:e}),o&&r.jsxs("p",{style:{marginTop:"8px",fontSize:"0.875rem"},children:["Published: ",o]}),s&&s.length>0&&r.jsx("div",{style:a.tags,children:s.map((n,d)=>r.jsx("span",{style:a.tag,children:n},d))})]})]})]});P.__docgenInfo={description:"",methods:[],displayName:"BlogCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},publishedDate:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Y={title:"Example/BlogCard",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},c={args:{title:"Card Title"}},p={args:{title:"Card Title",description:"This is the card content",imageUrl:"https://picsum.photos/id/237/200/300"}},l={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"]}},g={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/200/300"}},m={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/400/300"}},h={args:{title:"Card Title",description:"This is the card content",publishedDate:"2021-01-01"}};var x,f,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Card Title'
  }
}`,...(T=(f=c.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var y,C,_;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var v,b,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3']
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,W,w;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(w=(W=g.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var I,D,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300'
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var R,O,k;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    publishedDate: '2021-01-01'
  }
}`,...(k=(O=h.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const G=["Default","WithImage","WithTags","WithTagsAndImage","WithTagsAndWideImage","WithPublishedDate"];export{c as Default,p as WithImage,h as WithPublishedDate,l as WithTags,g as WithTagsAndImage,m as WithTagsAndWideImage,G as __namedExportsOrder,Y as default};
