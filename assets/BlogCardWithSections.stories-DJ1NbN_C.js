import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const t={card:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",margin:"16px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",width:"320px",display:"flex",flexDirection:"column",height:"360px"},imageContainer:{height:"200px",overflow:"hidden",backgroundColor:"#e0e0e0"},cardImage:{width:"100%",height:"100%",objectFit:"cover",display:"block"},cardBody:{padding:"16px",display:"flex",flexDirection:"column",height:"200px"},cardTitle:{fontSize:"1.5rem",marginBottom:"8px"},cardContent:{fontSize:"1rem",color:"#666",overflow:"auto",flex:1},tags:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"},tag:{backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"4px 8px",fontSize:"0.875rem",color:"#333"}},P=({imageUrl:s,title:r})=>e.jsx("div",{style:t.imageContainer,children:s?e.jsx("img",{src:s,alt:r,style:t.cardImage}):e.jsx("div",{style:{width:"100%",height:"100%"}})}),R=({title:s,description:r,publishedDate:i,tags:a})=>e.jsxs("div",{style:t.cardBody,children:[e.jsx("h2",{style:t.cardTitle,children:s}),e.jsxs("div",{style:t.cardContent,children:[r&&e.jsx("p",{children:r}),i&&e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.875rem"},children:["Published: ",i]}),a&&a.length>0&&e.jsx("div",{style:t.tags,children:a.map((h,m)=>e.jsx("span",{style:t.tag,children:h},m))})]})]}),E=({title:s,description:r,publishedDate:i,imageUrl:a,tags:h,color:m})=>e.jsxs("div",{style:{...t.card,backgroundColor:m||"white"},children:[e.jsx(P,{imageUrl:a,title:s}),e.jsx(R,{title:s,description:r,publishedDate:i,tags:h})]});E.__docgenInfo={description:"",methods:[],displayName:"BlogCardWithSections",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},publishedDate:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Example/BlogCardWithSections",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},o={args:{title:"Card Title"}},n={args:{title:"Card Title",description:"This is the card content",imageUrl:"https://picsum.photos/id/237/200/300"}},d={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"]}},c={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/200/300"}},p={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/400/300"}},g={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/400/300",color:"#f0f0f0"}},l={args:{title:"Card Title",description:"This is the card content",publishedDate:"2021-01-01"}};var u,T,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Card Title'
  }
}`,...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var f,y,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var W,S,j;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3']
  }
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,I,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(v=(I=c.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var w,A,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300'
  }
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var U,q,B;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300',
    color: '#f0f0f0'
  }
}`,...(B=(q=g.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var k,z,_;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    publishedDate: '2021-01-01'
  }
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const G=["Default","WithImage","WithTags","WithTagsAndImage","WithTagsAndWideImage","WithTagsAndWideImageAndColor","WithPublishedDate"];export{o as Default,n as WithImage,l as WithPublishedDate,d as WithTags,c as WithTagsAndImage,p as WithTagsAndWideImage,g as WithTagsAndWideImageAndColor,G as __namedExportsOrder,O as default};
