"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4559],{1479:(e,s,a)=>{a.d(s,{A:()=>c});a(65043);var l=a(69324),t=a(70579);const c=()=>(0,t.jsxs)("div",{className:"getintouch-container",children:[(0,t.jsx)("img",{src:"https://res.cloudinary.com/elonatech/image/upload/v1708529944/getIntouchBanner/talk_to_expert_about_your_project_rysbie.jpg",alt:"Talk to an Expert",className:"getintouch-background"}),(0,t.jsxs)("div",{className:"getintouch-content",children:[(0,t.jsx)("h5",{className:"getintouch-title",children:"Talk to an Expert about your project"}),(0,t.jsx)(l.A,{})]})]})},69324:(e,s,a)=>{a.d(s,{A:()=>h});var l=a(65043),t=a(92823),c=a.n(t),n=(a(25884),a(77154)),i=a(47503),o=a(74723),r=a(73216),d=a(70579);const h=()=>{let e=(0,r.Zp)();const[s,a]=(0,l.useState)(""),[t,h]=(0,l.useState)(""),[m,x]=(0,l.useState)(""),[p,j]=(0,l.useState)(""),[u,g]=(0,l.useState)(""),[b,f]=(0,l.useState)(""),[v,y]=(0,l.useState)(""),[N,w]=(0,l.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"btn btn-danger cvb","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:(0,d.jsx)("h5",{children:"Request A Quote"})}),(0,d.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,d.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-scrollable",children:(0,d.jsxs)("div",{class:"modal-content",children:[(0,d.jsxs)("div",{class:"modal-header",children:[(0,d.jsx)("h1",{class:"modal-title fs-4 text-dark fw-bold",id:"exampleModalLabel",children:"Request A Quote"}),(0,d.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,d.jsxs)("div",{class:"modal-body text-dark",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{class:"col-md-12 mt-",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Full name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Full name",onChange:e=>a(e.target.value),"aria-label":"First name"})]})}),(0,d.jsx)("div",{class:"col-md-12",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Email",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)("input",{type:"email",class:"form-control",placeholder:"Email",onChange:e=>x(e.target.value),"aria-label":"Last name"})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Company name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Company name",onChange:e=>h(e.target.value),"aria-label":"Company name"})]}),(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start  fw-bold",children:["Phone Number",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{class:"form-control",placeholder:"080 xxxx xxxx",value:p,onChange:e=>{const s=e.target.value.replace(/\D/g,"");j(s)},"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Title Of Project",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Title Of Project",onChange:e=>g(e.target.value),"aria-label":"Last name"})]}),(0,d.jsxs)("div",{class:"col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Project Location",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Project Location",onChange:e=>f(e.target.value),"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"col-12 mt-3",style:{marginBottom:"4rem"},children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)("h6",{className:"text-start fw-bold",children:"Project Description"})}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)(c(),{theme:"snow",className:"",placeholder:"cover letter",style:{height:"100px"},onChange:e=>y(e)})})]})]}),(0,d.jsxs)("div",{class:"modal-footer border-0",children:[(0,d.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary onliyu",onClick:async a=>{a.preventDefault(),w(!0);try{const a={fullname:s,company:t,email:m,number:p,project:u,location:b,letter:v};await n.A.post("".concat(o.T,"/api/v1/email/quote"),a,{headers:{"Content-Type":"application/json"}})&&(i.oR.success("Quote Sent!!!"),setTimeout((()=>{e(0)}),1e3))}catch(l){i.oR.error(l.response.data)}finally{w(!1)}},disabled:N,children:(0,d.jsx)("h6",{children:N?"Submitting...":"Submit"})})]})]})})})]})}},24559:(e,s,a)=>{a.r(s),a.d(s,{default:()=>n});var l=a(1479),t=a(49367),c=a(70579);const n=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.mg,{children:[(0,c.jsx)("title",{children:"Access Control  - Tech Solution, Digital Solution"}),(0,c.jsx)("meta",{name:"description",content:"\r\nAccess control is an essential element of security that determines who is allowed to access certain data, apps, and resources\u2014and in what circumstances. In the same way that keys and preapproved guest lists protect physical spaces, access control policies protect digital spaces. In other words, they let the right people in and keep the wrong people out.\r\nWhat are the benefits of Access Control Systems?\r\n"}),(0,c.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/access-control"})]}),(0,c.jsx)("div",{class:"container-fluid access-control-section",children:(0,c.jsxs)("div",{class:"text-content",children:[(0,c.jsx)("h2",{children:"Access Control"}),(0,c.jsx)("h5",{children:"Controls Access Physically and Virtually Except with Authentication Credentials"}),(0,c.jsx)("p",{class:"lead",children:"An essential element of security that determines who is allowed to access certain data, apps, and resources and in what circumstances."})]})}),(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{class:"row",children:[(0,c.jsx)("div",{class:"col-md-6 mb-5",children:(0,c.jsx)("div",{className:"text-center",children:(0,c.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709568120/accessControlPage/depositphotos_354792732-stock-photo-business-technology-internet-network-concept_neflcv.webp",className:"img-fluid rounded lazyload",alt:""})})}),(0,c.jsx)("div",{class:"col-md-6",children:(0,c.jsx)("div",{className:"",children:(0,c.jsxs)("p",{className:"",children:[(0,c.jsx)("span",{className:"fw-bold",children:"Access control"})," is an essential element of security that determines who is allowed to access certain data, apps, and resources\u2014and in what circumstances. In the same way that keys and preapproved guest lists protect physical spaces, access control policies protect digital spaces. In other words, they let the right people in and keep the wrong people out.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Access Control is a method of security that controls access both physically and virtually unless authentication credentials are provided.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"\u2018Physical\u2019 Access Control is a means of controlling who and when a person can enter an area, location or building using a secure authentication method such as an ID card or biometric identification, for example, as authorization."]})})})]})}),(0,c.jsxs)("div",{className:"container mt-4 mb-5",children:[(0,c.jsx)("h5",{className:"fw-bold",children:"What is an Access Control System?"}),(0,c.jsx)("div",{className:"underline-w mt-1",style:{width:"40px",height:"3px",background:"#f00"}}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-7 ",children:(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("p",{className:"",children:"When referring to a \u2018physical\u2019 Access Control system this typically includes locked gates, doors or barriers which can be opened using identity authentication methods such RFID access cards, pin codes, face recognition, finger prints or smartphones to allow entry to a building or certain area. This technology can also provide data to track how a building or site is being used, such as frequency and time-usage trends."})})}),(0,c.jsx)("div",{className:"col-md-5 ",children:(0,c.jsx)("div",{className:"mt-3 text-center",children:(0,c.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709568121/accessControlPage/Access-Control_rrrv2k.jpg",className:"img-fluid lazyload",alt:""})})})]})]}),(0,c.jsxs)("div",{className:"container mb-5",children:[(0,c.jsx)("h4",{children:"What are the benefits of Access Control Systems?"}),(0,c.jsx)("div",{className:"underline-w",style:{width:"50px",height:"3px",background:"#f00"}}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("p",{className:"pt-5",children:"Access Control can help protect employees and contents and control & monitor who accesses the premises. The main benefits of access control systems are"}),(0,c.jsx)("div",{className:"mt-",children:(0,c.jsxs)("ul",{className:"list-unstyled",children:[(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"Easier access for employees."})]}),(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"No need for traditional keys."})]}),(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"Saves money."})]}),(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"Keep track of who enters/exits the building."})]}),(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"Protection against unwanted visitors."})]}),(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"Employee freedom."})]}),(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"Protection against data breaches."})]}),(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"Safe environment."})]}),(0,c.jsxs)("li",{className:"d-flex",children:[(0,c.jsx)("i",{class:"bi bi-check-lg text-danger fs-4 me-3"}),(0,c.jsx)("p",{className:"",children:"Reduced risk of theft"})]})]})})]}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("div",{className:"text-center",children:(0,c.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709568140/accessControlPage/access-control-system-removebg-preview_lgzgk2.png",className:"img-fluid rounded lazyload",alt:""})})})]})]}),(0,c.jsx)(l.A,{})]})},25884:()=>{}}]);
//# sourceMappingURL=4559.cb38176a.chunk.js.map