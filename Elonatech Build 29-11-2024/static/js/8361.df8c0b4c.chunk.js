"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8361],{74723:(e,s,l)=>{l.d(s,{T:()=>t});const t="https://elonatechapi-g419.onrender.com"},78696:(e,s,l)=>{l.d(s,{A:()=>a});var t=l(70579);const a=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{class:"loader"})})},78361:(e,s,l)=>{l.r(s),l.d(s,{default:()=>u});var t=l(65043),a=l(77154),i=l(35475),n=l(74723),c=l(78696),r=l(96213),d=l.n(r),o=l(49367),m=l(73216),h=l(70579);const x=e=>{let{totalPosts:s,itemsPerPage:l,maxPageNumberLimit:t,minPageNumberLimit:a,currentPage:n,paginate:c,handleNextbtn:r,handlePrevbtn:d,disabled:o}=e;const{pagenumber:x}=(0,m.g)(),u=[];for(let i=1;i<=Math.ceil(s/l);i++)u.push(i);const j=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},p=u.map((e=>e<t+1&&e>a?(0,h.jsx)("li",{onClick:()=>c(e),className:`page-item ${n==e||n===x?"active":null}`,children:(0,h.jsx)(i.N_,{onClick:j,to:`/news/page/${e}`,class:"page-link v-cursor",children:e})},e):null));let g=null;u.length>t&&(g=(0,h.jsxs)("li",{class:"page-link v-cursor",onClick:r,children:[" ","\u2026"," "]}));let N=null;return a>=1&&(N=(0,h.jsxs)("li",{class:"page-link v-cursor",onClick:d,children:[" ","\u2026"," "]})),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("ul",{className:"pagination justify-content-center mb-5",children:[(0,h.jsx)("li",{className:"page-item",onClick:j,children:(0,h.jsx)(i.N_,{to:"/news/page/"+(n-1),className:"page-link "+(n==u[0]?"disabled":"active"),onClick:d,children:"Prev"})}),N,p,g,(0,h.jsx)("li",{className:"page-item",onClick:j,children:(0,h.jsx)(i.N_,{to:`/news/page/${n+1}`,className:"page-link "+(n==u[u.length-1]?"disabled":"active"),onClick:r,children:"Next"})})]})})},u=()=>{const[e,s]=(0,t.useState)([]),[l,r]=(0,t.useState)(!1),[m,u]=(0,t.useState)(1),[j]=(0,t.useState)(6),[p,g]=(0,t.useState)(4),[N,b]=(0,t.useState)(4),[v,y]=(0,t.useState)(0),[k,w]=(0,t.useState)(""),[f,C]=(0,t.useState)("Item 2"),P=e=>{C(e)};(0,t.useEffect)((()=>{(async()=>{try{const e=await a.A.get(`${n.T}/api/v1/blog/news`);s(e.data.getAllNews),r(!0)}catch(e){console.error("Error fetching data:",e),r(!0)}})()}),[]);const S=m*j,_=S-j,I=e.slice(_,S);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(o.mg,{children:[(0,h.jsx)("title",{children:"Blog - Tech Solution, Digital Solution"}),(0,h.jsx)("meta",{name:"description",content:"We'd love to share our knowledge, experiences and the latest news, trends and info with you"}),(0,h.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/blog"})]}),(0,h.jsx)("div",{class:"container-fluid blog-section",children:(0,h.jsxs)("div",{class:"text-content",children:[(0,h.jsx)("h2",{children:"News"}),(0,h.jsx)("h5",{children:"Offering regularly updated and trendy contents"}),(0,h.jsx)("p",{class:"lead",children:"We'd love to share our knowledge, experiences and the latest news, trends and info with you."})]})}),(0,h.jsx)("div",{className:"container mb-5",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-9 col-md-8",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("div",{className:"row",children:l?null===I||void 0===I?void 0:I.map((e=>(0,h.jsx)("div",{className:"col-md-12",children:(0,h.jsx)(i.N_,{className:"text-decoration-none text-dark",to:`${e.slug}/${e._id}`,children:(0,h.jsx)("div",{className:"mt-4",children:(0,h.jsxs)("div",{className:"row g-0 shim ",children:[(0,h.jsx)("div",{className:"col-lg-7 col-md-5",children:(0,h.jsx)("div",{className:"card border-0 myTab",children:(0,h.jsx)("img",{src:e.cloudinary_id,className:"img-fluid blogsImg ",alt:""})})}),(0,h.jsx)("div",{className:"col-lg-5 col-md-7",children:(0,h.jsxs)("div",{className:"ms-3",children:[(0,h.jsx)("h6",{className:"fs-6 pb-3 pt-4",children:e.category+e.category.slice(1)}),(0,h.jsxs)("h5",{className:"pb-3",style:{color:"#34548c"},children:[" ",(0,h.jsx)(i.N_,{className:"text-decoration-none blogTitle-",to:`${e._id}`,children:e.title})]}),(0,h.jsx)("p",{className:"fs-6 pb-4",dangerouslySetInnerHTML:{__html:d().sanitize(e.description.slice(0,150).concat("..."))}}),(0,h.jsxs)("p",{className:"fs-6",children:[" ",e.author," /"," ",new Date(e.createdAt).toDateString()," "]})]})})]})})})},e.id))):(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-md-12",children:(0,h.jsx)("div",{className:"d-flex justify-content-center",children:(0,h.jsx)("div",{className:"my-5 py-5",children:(0,h.jsx)(c.A,{})})})})})})}),(0,h.jsx)("div",{className:"mt-5",children:(0,h.jsx)(x,{totalPosts:e.length,itemsPerPage:j,maxPageNumberLimit:N,minPageNumberLimit:v,currentPage:m,handleNextbtn:()=>{u(m+1),m+1>N&&(b(N+p),y(v+p))},handlePrevbtn:()=>{u(m-1),(m-1)%p==0&&(b(N-p),y(v-p))},paginate:e=>u(e)})})]})}),(0,h.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,h.jsxs)("div",{className:"mt-4",children:[(0,h.jsx)("h5",{style:{color:"#34548c"},children:"Categories"}),(0,h.jsxs)("ul",{className:"list-unstyled mt-2",children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.N_,{to:"/blog",children:(0,h.jsx)("button",{className:"buttons btn btn-outline-primary rounded-pill px-5 mt-1 item "+("Item 1"===f?"active":""),onClick:()=>P("Item 1"),children:"Blogs"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:" buttons btn btn-outline-primary rounded-pill px-5 mt-1 item "+("Item 2"===f?"active":""),onClick:()=>P("Item 2"),children:"News"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.N_,{to:"/trends",children:(0,h.jsx)("button",{className:" buttons btn btn-outline-primary rounded-pill px-5 mt-1 item "+("Item 3"===f?"active":""),onClick:()=>P("Item 3"),children:"Trends"})})})]}),(0,h.jsx)("h5",{className:"mt-2",style:{color:"#34548c"},children:"Be the first to know"}),(0,h.jsx)("p",{children:"Enter your email address below to subscribe to our newsletter"}),(0,h.jsxs)("form",{className:"",children:[(0,h.jsx)("div",{class:"mb-3",children:(0,h.jsx)("input",{type:"email",class:"form-control rounded-0 ",style:{width:"15rem"},id:"exampleInputEmail1",onChange:e=>w(e.target.value),placeholder:"Your email*","aria-describedby":"emailHelp",required:!0})}),(0,h.jsx)("div",{class:"d-grid gap-2",children:(0,h.jsx)("button",{onClick:async e=>{e.preventDefault();try{const e={email:k};await a.A.post(`${n.T}/api/v1/email/mailchimp`,e,{headers:{"Content-Type":"Application/json"}})&&setMailChimp("visible")}catch(s){console.log(s)}},class:"btn btn-danger mb-3 ",style:{width:"15rem"},children:"Subscribe"})}),(0,h.jsx)("div",{class:"form-check",children:(0,h.jsxs)("label",{class:"form-check-label",for:"exampleCheck1",children:[(0,h.jsx)("input",{type:"checkbox",class:"form-check-input",required:"required"}),"I accept the",(0,h.jsxs)(i.N_,{className:"ps-2 text-dark",to:"/policy",children:["Privacy Policy",(0,h.jsx)("span",{className:"text-danger",children:"*"})]})]})})]})]})})]})})]})}}}]);
//# sourceMappingURL=8361.df8c0b4c.chunk.js.map