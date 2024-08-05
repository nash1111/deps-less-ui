import{r as q}from"./index-DJO9vBfz.js";var k={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=q,z=Symbol.for("react.element"),L=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,F=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function B(i,e,o){var t,a={},n=null,d=null;o!==void 0&&(n=""+o),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(d=e.ref);for(t in e)N.call(e,t)&&!$.hasOwnProperty(t)&&(a[t]=e[t]);if(i&&i.defaultProps)for(t in e=i.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:z,type:i,key:n,ref:d,props:a,_owner:F.current}}u.Fragment=L;u.jsx=B;u.jsxs=B;k.exports=u;var r=k.exports;const s={card:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",margin:"16px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},imageContainer:{height:"200px",overflow:"hidden",backgroundColor:"#e0e0e0"},cardImage:{width:"100%",height:"100%",objectFit:"cover",display:"block"},cardBody:{padding:"16px"},cardTitle:{fontSize:"1.5rem",marginBottom:"8px"},cardContent:{fontSize:"1rem",color:"#666"},tags:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"},tag:{backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"4px 8px",fontSize:"0.875rem",color:"#333"}},P=({title:i,description:e,publishedDate:o,imageUrl:t,tags:a})=>r.jsxs("div",{style:{...s.card,width:"320px",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:s.imageContainer,children:t?r.jsx("img",{src:t,alt:i,style:s.cardImage}):r.jsx("div",{style:{width:"100%",height:"100%"}})}),r.jsxs("div",{style:{...s.cardBody,flex:1},children:[r.jsx("h2",{style:s.cardTitle,children:i}),r.jsx("p",{style:s.cardContent,children:e}),o&&r.jsxs("p",{style:{...s.cardContent,marginTop:"8px",fontSize:"0.875rem"},children:["Published: ",o]}),a&&a.length>0&&r.jsx("div",{style:s.tags,children:a.map((n,d)=>r.jsx("span",{style:s.tag,children:n},d))})]})]});P.__docgenInfo={description:"",methods:[],displayName:"BlogCard",props:{title:{required:!0,tsType:{name:"string"},description:"The title of the blog post."},description:{required:!1,tsType:{name:"string"},description:"The content of the blog post."},publishedDate:{required:!1,tsType:{name:"string"},description:"The date the blog post was published."},imageUrl:{required:!1,tsType:{name:"string"},description:"The URL of the image to display in the blog post."},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The tags associated with the blog post."}}};const Y={title:"Example/BlogCard",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},c={args:{title:"Card Title"}},p={args:{title:"Card Title",description:"This is the card content",imageUrl:"https://picsum.photos/id/237/200/300"}},l={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"]}},g={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/200/300"}},h={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/400/300"}},m={args:{title:"Card Title",description:"This is the card content",publishedDate:"2021-01-01"}};var T,x,f;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Card Title'
  }
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,b,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var _,v,j;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3']
  }
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var S,w,W;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(W=(w=g.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var I,R,E;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300'
  }
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var D,O,U;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    publishedDate: '2021-01-01'
  }
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const G=["Default","WithImage","WithTags","WithTagsAndImage","WithTagsAndWideImage","WithPublishedDate"];export{c as Default,p as WithImage,m as WithPublishedDate,l as WithTags,g as WithTagsAndImage,h as WithTagsAndWideImage,G as __namedExportsOrder,Y as default};
