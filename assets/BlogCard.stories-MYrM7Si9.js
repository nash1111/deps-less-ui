import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const t={card:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",margin:"16px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",width:"320px",display:"flex",flexDirection:"column",height:"360px"},imageContainer:{height:"200px",overflow:"hidden",backgroundColor:"#e0e0e0"},cardImage:{width:"100%",height:"100%",objectFit:"cover",display:"block"},cardBody:{padding:"16px",display:"flex",flexDirection:"column",height:"200px"},cardTitle:{fontSize:"1.5rem",marginBottom:"8px"},cardContent:{fontSize:"1rem",color:"#666",overflow:"auto",flex:1},tags:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"},tag:{backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"4px 8px",fontSize:"0.875rem",color:"#333"}},_=({title:p,description:l,publishedDate:g,imageUrl:m,tags:c,color:E})=>e.jsxs("div",{style:{...t.card,backgroundColor:E||"white"},children:[e.jsx("div",{style:t.imageContainer,children:m?e.jsx("img",{src:m,alt:p,style:t.cardImage}):e.jsx("div",{style:{width:"100%",height:"100%"}})}),e.jsxs("div",{style:t.cardBody,children:[e.jsx("h2",{style:t.cardTitle,children:p}),e.jsxs("div",{style:t.cardContent,children:[l&&e.jsx("p",{children:l}),g&&e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.875rem"},children:["Published: ",g]}),c&&c.length>0&&e.jsx("div",{style:t.tags,children:c.map((P,R)=>e.jsx("span",{style:t.tag,children:P},R))})]})]})]});_.__docgenInfo={description:"",methods:[],displayName:"BlogCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},publishedDate:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Example/BlogCard",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},r={args:{title:"Card Title"}},s={args:{title:"Card Title",description:"This is the card content",imageUrl:"https://picsum.photos/id/237/200/300"}},a={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"]}},i={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/200/300"}},o={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/400/300"}},n={args:{title:"Card Title",description:"This is the card content",tags:["tag1","tag2","tag3"],imageUrl:"https://picsum.photos/id/237/400/300",color:"#f0f0f0"}},d={args:{title:"Card Title",description:"This is the card content",publishedDate:"2021-01-01"}};var h,u,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Card Title'
  }
}`,...(T=(u=r.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var x,f,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,W,b;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3']
  }
}`,...(b=(W=a.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var j,S,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/200/300'
  }
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var v,w,A;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300'
  }
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var D,U,q;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300',
    color: '#f0f0f0'
  }
}`,...(q=(U=n.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var B,k,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    publishedDate: '2021-01-01'
  }
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const G=["Default","WithImage","WithTags","WithTagsAndImage","WithTagsAndWideImage","WithTagsAndWideImageAndColor","WithPublishedDate"];export{r as Default,s as WithImage,d as WithPublishedDate,a as WithTags,i as WithTagsAndImage,o as WithTagsAndWideImage,n as WithTagsAndWideImageAndColor,G as __namedExportsOrder,O as default};
