"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2255],{106:(e,t,s)=>{s.r(t),s.d(t,{default:()=>N});var l=s(65043),a=s(73216),i=s(35475),c=s(77154),r=s(74723);const n=s.p+"static/media/delete.3e2e2699ba69e3de65ea.png",d=s.p+"static/media/editing.ec68d677e24152f7d010.png";s(78203);var o=s(78696),m=s(96213),x=s.n(m),h=s(49367),j=s(12151),p=s.n(j),u=s(99489),g=s(11439),b=s(70579);const N=()=>{const[e,t]=(0,l.useState)({}),[s,m]=(0,l.useState)([]),[j,N]=(0,l.useState)(""),[v,y]=(0,l.useState)(!1),{id:w}=(0,a.g)(),f=(0,a.Zp)(),[k,_]=(0,l.useState)(""),[I,A]=(0,l.useState)("Item 1"),[S,C]=(0,l.useState)(""),$=(0,l.useRef)(null),E=(0,l.useRef)(null);(0,l.useEffect)((()=>{const e=()=>{var e;const t=(null===(e=$.current)||void 0===e?void 0:e.offsetHeight)||0;E.current.style.maxHeight=`${t}px`,E.current.style.overflowY="auto"};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,l.useEffect)((()=>{C(window.location.href)}),[]);const T=e=>{A(e)};(0,l.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("token"));N(e)}),[]),(0,l.useEffect)((()=>{(async()=>{try{const e=await c.A.get(`${r.T}/api/v1/blog/${w}`);t(e.data.getBlogById),y(!0)}catch(e){console.log(e),y(!0)}})()}),[]),(0,l.useEffect)((()=>{(async()=>{try{const e=await c.A.get(`${r.T}/api/v1/blog/`);m(e.data.getAllBlogs.sort((()=>Math.random()-Math.random())).slice(0,4))}catch(e){console.error("Error fetching data:",e)}})()}),[]);const D=e.description;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{class:"container-fluid bg-dark py-5 blog-detail-heaad",children:(0,b.jsxs)("div",{class:"py-5 mt-5 yyyy",children:[(0,b.jsx)("h2",{class:"text-white text-center blogHead",children:"Blog Details"}),(0,b.jsx)("h5",{class:" mt-4 text-white text-center"}),(0,b.jsx)("p",{class:"lead text-white text-center"})]})}),(0,b.jsxs)("div",{className:"container mb-5",children:[(0,b.jsxs)("ol",{class:"breadcrumb mt-5 ms-4",children:[(0,b.jsxs)("li",{class:"breadcrumb-item",children:[" ",(0,b.jsx)(i.N_,{className:"text-dark",style:{textDecoration:"none"},to:"/",children:"Home"})]}),(0,b.jsxs)("li",{class:"breadcrumb-item",children:[" ",(0,b.jsx)(i.N_,{className:"text-dark",to:"/blog",style:{textDecoration:"none"},children:"Blog"})]})]}),(0,b.jsxs)("div",{className:"row mt-3",children:[(0,b.jsxs)("div",{className:"col-lg-9 col-md-7 leftt",ref:$,children:[(0,b.jsx)("div",{className:"container",children:(0,b.jsx)("div",{className:"row",children:(0,b.jsx)("div",{className:"col-md-12 mt-4",children:v?(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"fw-bold",children:e.title}),(0,b.jsx)("div",{className:"mt-4 ",children:(0,b.jsx)("div",{className:"row",children:(0,b.jsx)("div",{className:"col-md-12",children:(0,b.jsxs)("div",{className:"card border-0 rounded ",children:[(0,b.jsxs)(h.mg,{children:[(0,b.jsxs)("title",{children:[e.title," "]}),(0,b.jsx)("meta",{name:"description",content:p()(D,{allowedTags:["strong"]})}),(0,b.jsx)("link",{rel:"canonical",href:`https://elonatech.com.ng/product/${w}`}),(0,b.jsx)("meta",{property:"og:title",content:e.title}),(0,b.jsx)("meta",{property:"og:description",content:p()(D,{allowedTags:[]})}),(0,b.jsx)("meta",{property:"og:image",content:e.cloudinary_id}),(0,b.jsx)("meta",{property:"og:url",content:S}),(0,b.jsx)("meta",{property:"og:type",content:"article"}),(0,b.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,b.jsx)("meta",{name:"twitter:title",content:e.title}),(0,b.jsx)("meta",{name:"twitter:description",content:p()(D,{allowedTags:[]})}),(0,b.jsx)("meta",{name:"twitter:image",content:e.cloudinary_id})]}),(0,b.jsx)("img",{src:e.cloudinary_id,alt:"",className:"singlePostImg rounded"})]})})})}),(0,b.jsx)("div",{className:"container-flui mt-3 mb-4",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:"col-6 col-md-6",children:(0,b.jsxs)("h6",{children:["Author:"," ",(0,b.jsx)("span",{className:"fst-italic ms-2",children:e.author})]})}),(0,b.jsx)("div",{className:"col-6 col-md-6",children:j?(0,b.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,b.jsx)(i.N_,{className:"text-decoration-none me-3",style:{width:"20px",cursor:"pointer"},to:`/update/${w}`,state:e,children:(0,b.jsx)("img",{"data-src":d,className:"img-fluid me-3 lazyload",style:{width:"20px",cursor:"pointer"},alt:""})}),(0,b.jsx)("img",{"data-src":n,className:"img-fluid lazyload",style:{width:"20px",cursor:"pointer"},onClick:async()=>{const e=await c.A.delete(`${r.T}/api/v1/blog/${w}`);console.log(e),f("/blog")},alt:""})]}):(0,b.jsx)("div",{})}),(0,b.jsx)(u.A,{url:S,title:e.title,image:e.cloudinary_id})]})}),(0,b.jsx)("div",{class:"description",dangerouslySetInnerHTML:{__html:x().sanitize(e.description)}})]}):(0,b.jsx)("div",{className:"",style:{marginLeft:"25rem"},children:(0,b.jsx)(o.A,{})})})})}),(0,b.jsxs)("div",{className:"comments-container-mobile",ref:E,children:[" ",(0,b.jsx)(g.A,{blogId:w})]}),(0,b.jsxs)("div",{className:"container bg-light related-post",children:[(0,b.jsx)("h3",{className:"fw-bold mb-3 mt-5 pt-4",style:{color:"#0b159d"},children:"Related Posts"}),(0,b.jsx)("div",{className:"row",children:s.map((e=>(0,b.jsx)("div",{className:"col col-md-3",children:(0,b.jsxs)("div",{className:"",children:[(0,b.jsx)(i.N_,{className:"text-decoration-none text-dark",to:`/blog/related/${e._id}`,children:(0,b.jsx)("h6",{className:"related-post-title",children:e.title.slice(0,300)})}),(0,b.jsxs)("h6",{className:"text-danger related-post-date",children:[new Date(e.createdAt).toDateString()," "]})]})},e.id)))})]})]}),(0,b.jsx)("div",{className:"col-lg-3 col-md-5 rightt",children:(0,b.jsxs)("div",{className:"mt-4",children:[(0,b.jsx)("h5",{style:{color:"#34548c"},children:"Categories"}),(0,b.jsxs)("ul",{className:"list-unstyled mt-2",children:[(0,b.jsx)("li",{children:(0,b.jsx)("button",{className:"buttons btn btn-outline-primary rounded-pill px-5  item "+("Item 1"===I?"active":""),onClick:()=>T("Item 1"),children:"Blogs"})}),(0,b.jsx)("li",{children:(0,b.jsx)(i.N_,{to:"/news",children:(0,b.jsx)("button",{className:"buttons btn btn-outline-primary rounded-pill px-5 mt-1  item "+("Item 2"===I?"active":""),onClick:()=>T("Item 2"),children:"News"})})}),(0,b.jsx)("li",{children:(0,b.jsx)(i.N_,{to:"/trends",children:(0,b.jsx)("button",{className:"buttons btn btn-outline-primary rounded-pill px-5 mt-1  item "+("Item 3"===I?"active":""),onClick:()=>T("Item 3"),children:"Trends"})})})]}),(0,b.jsx)("h5",{className:"mt-2",style:{color:"#34548c"},children:"Be the first to know"}),(0,b.jsx)("p",{children:"Enter your email address below to subscribe to our newsletter"}),(0,b.jsxs)("form",{className:"",children:[(0,b.jsx)("div",{class:"mb-3",children:(0,b.jsx)("input",{type:"email",class:"form-control rounded-0 ",style:{width:"18rem"},id:"exampleInputEmail1",onChange:e=>_(e.target.value),placeholder:"Your email*","aria-describedby":"emailHelp",required:!0})}),(0,b.jsx)("div",{class:"d-grid gap-2",children:(0,b.jsx)("button",{onClick:async e=>{e.preventDefault();try{const e={email:k};await c.A.post(`${r.T}/api/v1/email/mailchimp`,e,{headers:{"Content-Type":"Application/json"}})&&setMailChimp("visible")}catch(t){console.log(t)}},class:"btn btn-danger mb-3 ",style:{width:"18rem"},children:"Subscribe"})}),(0,b.jsx)("div",{class:"form-check",children:(0,b.jsxs)("label",{class:"form-check-label",for:"exampleCheck1",children:[(0,b.jsx)("input",{type:"checkbox",class:"form-check-input",required:"required"}),"I accept the",(0,b.jsxs)(i.N_,{className:"ps-2 text-dark",to:"/policy",children:["Privacy Policy",(0,b.jsx)("span",{className:"text-danger",children:"*"})]})]})})]}),(0,b.jsxs)("div",{className:"comments-container",children:[" ",(0,b.jsx)(g.A,{blogId:w})]}),(0,b.jsxs)("div",{className:"container bg-light related-post2",children:[(0,b.jsx)("h3",{className:"fw-bold mb-3 mt-5 pt-4",style:{color:"#0b159d"},children:"Related Posts"}),(0,b.jsx)("div",{className:"rel",children:s.map((e=>(0,b.jsx)("div",{className:"relIn",children:(0,b.jsxs)("div",{className:"",children:[(0,b.jsx)(i.N_,{className:"text-decoration-none text-dark",to:`/blog/related/${e._id}`,children:(0,b.jsx)("h6",{className:"related-post-title",children:e.title.slice(0,300)})}),(0,b.jsxs)("h6",{className:"text-danger related-post-date",children:[new Date(e.createdAt).toDateString()," "]})]})},e.id)))})]})]})})]})]})]})}},78203:()=>{}}]);
//# sourceMappingURL=2255.133800fd.chunk.js.map