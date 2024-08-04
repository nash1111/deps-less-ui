import{r as B}from"./index-DJO9vBfz.js";var W={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=B,k=Symbol.for("react.element"),q=Symbol.for("react.fragment"),U=Object.prototype.hasOwnProperty,z=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function D(i,e,n){var t,r={},o=null,d=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(d=e.ref);for(t in e)U.call(e,t)&&!A.hasOwnProperty(t)&&(r[t]=e[t]);if(i&&i.defaultProps)for(t in e=i.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:k,type:i,key:o,ref:d,props:r,_owner:z.current}}h.Fragment=q;h.jsx=D;h.jsxs=D;W.exports=h;var s=W.exports;const a={card:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",margin:"16px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},cardImage:{width:"100%",height:"auto"},cardBody:{padding:"16px"},cardTitle:{fontSize:"1.5rem",marginBottom:"8px"},cardContent:{fontSize:"1rem",color:"#666"},tags:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"},tag:{backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"4px 8px",fontSize:"0.875rem",color:"#333"}},O=({title:i,description:e,publishedDate:n,imageUrl:t,tags:r})=>s.jsxs("div",{style:{...a.card,width:"320px",minHeight:"360px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t&&s.jsx("img",{src:t,alt:i,style:a.cardImage}),s.jsxs("div",{style:a.cardBody,children:[s.jsx("h2",{style:a.cardTitle,children:i}),s.jsx("p",{style:a.cardContent,children:e}),n&&s.jsxs("p",{style:{...a.cardContent,marginTop:"8px",fontSize:"0.875rem"},children:["Published: ",n]}),r&&r.length>0&&s.jsx("div",{style:a.tags,children:r.map((o,d)=>s.jsx("span",{style:a.tag,children:o},d))})]})]});O.__docgenInfo={description:"",methods:[],displayName:"BlogCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},publishedDate:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const L={title:"Example/BlogCard",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},c={args:{title:"Card Title",description:"This is the card content"}},p={args:{title:"Card Title",description:"This is the card content",imageUrl:"https://picsum.photos/id/237/200/300"}},l={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"]}},g={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/200/300"}},m={args:{title:"Card Title",description:"This is the card content",publishedDate:"2021-01-01"}};var u,x,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content'
  }
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var T,y,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(_=(y=p.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var C,b,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3']
  }
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var j,v,w;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(w=(v=g.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var E,I,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    publishedDate: '2021-01-01'
  }
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const F=["Default","WithImage","WithTags","WithTagsAndImage","WithPublishedDate"];export{c as Default,p as WithImage,m as WithPublishedDate,l as WithTags,g as WithTagsAndImage,F as __namedExportsOrder,L as default};
