"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8579],{1479:(e,s,a)=>{a.d(s,{A:()=>i});a(65043);var t=a(69324),l=a(70579);const i=()=>(0,l.jsxs)("div",{className:"getintouch-container",children:[(0,l.jsx)("img",{src:"https://res.cloudinary.com/elonatech/image/upload/v1708529944/getIntouchBanner/talk_to_expert_about_your_project_rysbie.jpg",alt:"Talk to an Expert",className:"getintouch-background"}),(0,l.jsxs)("div",{className:"getintouch-content",children:[(0,l.jsx)("h5",{className:"getintouch-title",children:"Talk to an Expert about your project"}),(0,l.jsx)(t.A,{})]})]})},69324:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(65043),l=a(92823),i=a.n(l),n=(a(25884),a(77154)),o=a(47503),r=a(74723),c=a(73216),d=a(70579);const m=()=>{let e=(0,c.Zp)();const[s,a]=(0,t.useState)(""),[l,m]=(0,t.useState)(""),[h,x]=(0,t.useState)(""),[p,u]=(0,t.useState)(""),[j,b]=(0,t.useState)(""),[f,g]=(0,t.useState)(""),[v,y]=(0,t.useState)(""),[N,w]=(0,t.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"btn btn-danger cvb","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:(0,d.jsx)("h5",{children:"Request A Quote"})}),(0,d.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,d.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-scrollable",children:(0,d.jsxs)("div",{class:"modal-content",children:[(0,d.jsxs)("div",{class:"modal-header",children:[(0,d.jsx)("h1",{class:"modal-title fs-4 text-dark fw-bold",id:"exampleModalLabel",children:"Request A Quote"}),(0,d.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,d.jsxs)("div",{class:"modal-body text-dark",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{class:"col-md-12 mt-",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Full name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Full name",onChange:e=>a(e.target.value),"aria-label":"First name"})]})}),(0,d.jsx)("div",{class:"col-md-12",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Email",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)("input",{type:"email",class:"form-control",placeholder:"Email",onChange:e=>x(e.target.value),"aria-label":"Last name"})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Company name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Company name",onChange:e=>m(e.target.value),"aria-label":"Company name"})]}),(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start  fw-bold",children:["Phone Number",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{class:"form-control",placeholder:"080 xxxx xxxx",value:p,onChange:e=>{const s=e.target.value.replace(/\D/g,"");u(s)},"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Title Of Project",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Title Of Project",onChange:e=>b(e.target.value),"aria-label":"Last name"})]}),(0,d.jsxs)("div",{class:"col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Project Location",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Project Location",onChange:e=>g(e.target.value),"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"col-12 mt-3",style:{marginBottom:"4rem"},children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)("h6",{className:"text-start fw-bold",children:"Project Description"})}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)(i(),{theme:"snow",className:"",placeholder:"cover letter",style:{height:"100px"},onChange:e=>y(e)})})]})]}),(0,d.jsxs)("div",{class:"modal-footer border-0",children:[(0,d.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary onliyu",onClick:async a=>{a.preventDefault(),w(!0);try{const a={fullname:s,company:l,email:h,number:p,project:j,location:f,letter:v};await n.A.post(`${r.T}/api/v1/email/quote`,a,{headers:{"Content-Type":"application/json"}})&&(o.oR.success("Quote Sent!!!"),setTimeout((()=>{e(0)}),1e3))}catch(t){o.oR.error(t.response.data)}finally{w(!1)}},disabled:N,children:(0,d.jsx)("h6",{children:N?"Submitting...":"Submit"})})]})]})})})]})}},88579:(e,s,a)=>{a.r(s),a.d(s,{default:()=>n});var t=a(1479),l=a(49367),i=(a(89841),a(70579));const n=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.mg,{children:[(0,i.jsx)("title",{children:"IP Telephony & PBX Systems - Tech Solution, Digital Solution"}),(0,i.jsx)("meta",{name:"description",content:"IP Telephony & PBX Systems\r\nIP telephony is any phone system that runs on the internet instead of traditional landlines. In other words, it uses the internet \u2014 internet protocol (IP) \u2014 to send and receive voice transmissions. Voice over IP (VoIP) is another term for IP telephony.\r The traditional telephone system is dubbed the Public Switched Telephone Network (PSTN). The way that it moves calls from originator to destination resembles how VoIP moves information, but the underlying equipment differs from the devices moving traffic on the internet, which creates a number of ripple effects. "}),(0,i.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/ip-telephony"})]}),(0,i.jsx)("div",{class:"container-fluid ip-telephony-section",children:(0,i.jsxs)("div",{class:"text-content",children:[(0,i.jsx)("h2",{children:"IP Telephony & PBX Systems"}),(0,i.jsx)("h5",{children:"Lower Bills and Higher Call Quality with IP Telephony."}),(0,i.jsx)("p",{class:"lead",children:"VoIP feature that greets callers, directs them to the appropriate extensions or departments, and assists in managing incoming calls with efficiency and professionalism."})]})}),(0,i.jsx)("div",{className:"container",style:{marginTop:"100px"},children:(0,i.jsxs)("div",{class:"row justify-content-center align-items-center g-2",children:[(0,i.jsxs)("div",{class:"col-md-6",children:[(0,i.jsx)("h3",{className:"mb-4",children:"IP Telephony & PBX Systems"}),(0,i.jsxs)("p",{className:"fs-6 ",children:["IP telephony is any phone system that runs on the internet instead of traditional landlines. In other words, it uses the internet \u2014 internet protocol (IP) \u2014 to send and receive voice transmissions. Voice over IP (VoIP) is another term for IP telephony.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"The traditional telephone system is dubbed the Public Switched Telephone Network (PSTN). The way that it moves calls from originator to destination resembles how VoIP moves information, but the underlying equipment differs from the devices moving traffic on the internet, which creates a number of ripple effects.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"A PBX is an acronym for Private Branch Exchange, a private telephone network allowing users to talk to each other. Different hardware components work together to provide connectivity to the telephone network.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"PBX design was proprietary, so a customer had to purchase all of its network equipment and phones from one vendor. These systems required a great deal of manual input to set up and maintain. Tasks as simple as assigning a phone extension to a new employee were cumbersome to complete."]})]}),(0,i.jsx)("div",{class:"col-md-6",children:(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709648752/IPTelephonyPage/phone-network_xiocp0.jpg",alt:"",className:"img-fluid lazyload rounded"})})})]})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709648863/IPTelephonyPage/meetings_phone_chat_img_hfxyqd.jpg",alt:"",className:"img-fluid lazyload rounded"})})}),(0,i.jsx)("div",{className:"col-md-6 mt-5",children:(0,i.jsxs)("div",{className:"mt-5",children:[(0,i.jsx)("h2",{className:"mt-5 mb-5",children:"A Flexible Business VoIP Phone Service"}),(0,i.jsxs)("ul",{className:"list-unstyled mt-2",children:[(0,i.jsxs)("li",{className:"d-flex",children:[(0,i.jsx)("i",{class:"bi bi-check-circle-fill fs-3 text-danger me-3"}),(0,i.jsx)("p",{className:"mt-2 l",children:"Complete unified communication system with voice, video, text messages, mobile, and web connectivity."})]}),(0,i.jsxs)("li",{className:"d-flex",children:[(0,i.jsx)("i",{class:"bi bi-check-circle-fill fs-3 text-danger me-3"}),(0,i.jsx)("p",{className:"mt-2",children:"Instant conference calls (including real-time video conference calls)."})]}),(0,i.jsxs)("li",{className:"d-flex",children:[(0,i.jsx)("i",{class:"bi bi-check-circle-fill fs-3 text-danger me-3"}),(0,i.jsx)("p",{className:"mt-2",children:"Our service allows you to effortlessly schedule your staff appointment."})]}),(0,i.jsxs)("li",{className:"d-flex",children:[(0,i.jsx)("i",{class:"bi bi-check-circle-fill fs-3 text-danger me-3"}),(0,i.jsx)("p",{className:"mt-2",children:"Reliable and trustworthy service with HD voice call quality"})]})]})]})})]})}),(0,i.jsx)("div",{className:"container mb-5",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-4 mb-3",children:(0,i.jsx)("div",{className:"card border-2 bg-light",children:(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("i",{class:"bi bi-telephone-minus-fill text-danger  fs-2"}),(0,i.jsx)("p",{className:"fw-bold",children:"Inbound & Outbound"}),(0,i.jsx)("p",{className:"lead fs-6",children:"Delight customers and empower employees with AI-powered workflows for every interaction. Put your business on the map with local numbers and global connectivity from one easy app."})]})})}),(0,i.jsx)("div",{className:"col-md-4 mb-3",children:(0,i.jsx)("div",{className:"card border-2 bg-light",children:(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("i",{class:"bi bi-mic-fill text-danger fs-2"}),(0,i.jsx)("p",{className:"fw-bold",children:"Voice Services"}),(0,i.jsx)("p",{className:"lead fs-6",children:"PBX feature that provides comprehensive insights and analytics on call activity, enabling businesses to track performance, identify trends, and make data-driven decisions."})]})})}),(0,i.jsx)("div",{className:"col-md-4 mb-3",children:(0,i.jsx)("div",{className:"card border-2 bg-light",children:(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("i",{class:"bi bi-terminal-fill text-danger  fs-2"}),(0,i.jsx)("p",{className:"fw-bold",children:"Automatic Call Distribution (ACD)"}),(0,i.jsx)("p",{className:"lead fs-6",children:"VoIP feature that automatically responds to incoming text messages, ensuring prompt engagement and providing personalized messages to enhance customer satisfaction."})]})})})]})}),(0,i.jsx)(t.A,{})]})},25884:()=>{},89841:()=>{}}]);
//# sourceMappingURL=8579.629fdb5c.chunk.js.map