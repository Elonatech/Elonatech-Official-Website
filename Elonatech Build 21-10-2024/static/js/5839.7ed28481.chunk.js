"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5839],{86890:(e,s,a)=>{a.d(s,{A:()=>l});a(65043);var t=a(69324),n=a(70579);const l=()=>(0,n.jsx)("div",{className:"getintouch-wrapper",children:(0,n.jsxs)("div",{className:"getintouch-container",children:[(0,n.jsx)("img",{src:"https://res.cloudinary.com/elonatech/image/upload/v1708598256/getIntouchBanner/talk_to_expert_about_your_digital_needs_jthbar.jpg",alt:"Talk with An Expert",className:"getintouch-background"}),(0,n.jsxs)("div",{className:"getintouch-content",children:[(0,n.jsx)("h4",{className:"getintouch-title",children:"Talk with An Expert About Your Next Digital Needs."}),(0,n.jsx)(t.A,{})]})]})})},69324:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(65043),n=a(92823),l=a.n(n),o=(a(25884),a(77154)),i=a(47503),c=a(74723),r=a(73216),d=a(70579);const m=()=>{let e=(0,r.Zp)();const[s,a]=(0,t.useState)(""),[n,m]=(0,t.useState)(""),[h,u]=(0,t.useState)(""),[x,g]=(0,t.useState)(""),[p,f]=(0,t.useState)(""),[j,v]=(0,t.useState)(""),[b,y]=(0,t.useState)(""),[w,N]=(0,t.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"btn btn-danger cvb","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:(0,d.jsx)("h5",{children:"Request A Quote"})}),(0,d.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,d.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-scrollable",children:(0,d.jsxs)("div",{class:"modal-content",children:[(0,d.jsxs)("div",{class:"modal-header",children:[(0,d.jsx)("h1",{class:"modal-title fs-4 text-dark fw-bold",id:"exampleModalLabel",children:"Request A Quote"}),(0,d.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,d.jsxs)("div",{class:"modal-body text-dark",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{class:"col-md-12 mt-",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Full name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Full name",onChange:e=>a(e.target.value),"aria-label":"First name"})]})}),(0,d.jsx)("div",{class:"col-md-12",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Email",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)("input",{type:"email",class:"form-control",placeholder:"Email",onChange:e=>u(e.target.value),"aria-label":"Last name"})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Company name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Company name",onChange:e=>m(e.target.value),"aria-label":"Company name"})]}),(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start  fw-bold",children:["Phone Number",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{class:"form-control",placeholder:"080 xxxx xxxx",value:x,onChange:e=>{const s=e.target.value.replace(/\D/g,"");g(s)},"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Title Of Project",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Title Of Project",onChange:e=>f(e.target.value),"aria-label":"Last name"})]}),(0,d.jsxs)("div",{class:"col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Project Location",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Project Location",onChange:e=>v(e.target.value),"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"col-12 mt-3",style:{marginBottom:"4rem"},children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)("h6",{className:"text-start fw-bold",children:"Project Description"})}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)(l(),{theme:"snow",className:"",placeholder:"cover letter",style:{height:"100px"},onChange:e=>y(e)})})]})]}),(0,d.jsxs)("div",{class:"modal-footer border-0",children:[(0,d.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary onliyu",onClick:async a=>{a.preventDefault(),N(!0);try{const a={fullname:s,company:n,email:h,number:x,project:p,location:j,letter:b};await o.A.post("".concat(c.T,"/api/v1/email/quote"),a,{headers:{"Content-Type":"application/json"}})&&(i.oR.success("Quote Sent!!!"),setTimeout((()=>{e(0)}),1e3))}catch(t){i.oR.error(t.response.data)}finally{N(!1)}},disabled:w,children:(0,d.jsx)("h6",{children:w?"Submitting...":"Submit"})})]})]})})})]})}},55839:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(86890),n=a(81802),l=a(70579);const o=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.mg,{children:[(0,l.jsx)("title",{children:"Videoconferencing - Tech Solution, Digital Solution"}),(0,l.jsx)("meta",{name:"description",content:"\r\nVideoconferencing\r\nVideoconferencing is an online technology that allows users in different locations to hold face-to-face meetings without having to move to a single location together. \r\nThis technology is particularly convenient for business users in different cities or even different countries because it saves time, expenses, and hassles associated with business travel. "}),(0,l.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/videoconferencing"})]}),(0,l.jsx)("div",{class:"container-fluid videoconferencing-section",children:(0,l.jsxs)("div",{class:"text-content",children:[(0,l.jsx)("h2",{children:"Videoconferencing"}),(0,l.jsx)("h5",{children:"Helping People Connect, Regardless of Where They\u2019re Located."}),(0,l.jsx)("p",{class:"lead",children:"This is an online technology that allows users in different locations to hold face-to-face meetings without having to move to a single location together"})]})}),(0,l.jsx)("div",{className:"container position-relative pt-4",children:(0,l.jsxs)("div",{class:"row justify-content-center mt-4 mb-4 align-items-center",children:[(0,l.jsx)("div",{class:"col-md-6",children:(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709724222/videoConferencingPage/meeting-room_quurwd.jpg",alt:"",className:"img-fluid lazyload rounded"})})}),(0,l.jsx)("div",{class:"col-md-6 pt-3 ",children:(0,l.jsxs)("div",{className:"float-center",children:[(0,l.jsx)("h4",{className:" fw-bold",style:{color:"#34548c"},children:"Videoconferencing"}),(0,l.jsxs)("p",{className:"",children:["Videoconferencing is an online technology that allows users in different locations to hold face-to-face meetings without having to move to a single location together. This technology is particularly convenient for business users in different cities or even different countries because it saves time, expenses, and hassles associated with business travel. ",(0,l.jsx)("br",{})," "]}),(0,l.jsxs)("p",{className:"",children:["Videoconferencing uses includes holding routine meetings, organizing seminars/conferences, negotiating business deals, and interviewing job candidates. ",(0,l.jsx)("br",{})]}),(0,l.jsx)("p",{className:"",children:"The main purpose of video conferencing is to help people connect, regardless of where they\u2019re located."})]})})]})}),(0,l.jsx)("div",{className:"",style:{backgroundColor:"#34548c",marginTop:"5rem"},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{class:"row justify-content-center py-5 align-items-center",children:[(0,l.jsxs)("div",{class:"col-md-6",children:[(0,l.jsx)("h2",{className:"text-black fw-bold",children:"What Kind of Videoconferencing Equipment is Needed?"}),(0,l.jsxs)("ul",{className:"text-black ",children:[(0,l.jsx)("li",{children:"Displays: laptop, desktop monitor, television screen"}),(0,l.jsx)("li",{children:"Microphones and cameras: built-in microphones and webcams, USB microphones and webcams"}),(0,l.jsx)("li",{children:"Speakers: built-in computer speaker, external speaker, VoIP (voice over IP) conferencing phone"}),(0,l.jsx)("li",{children:"Internet Connection: WiFi, Ethernet"}),(0,l.jsx)("li",{children:"Video Conferencing Software: video conferencing tools and apps"})]})]}),(0,l.jsx)("div",{class:"col-md-6","data-aos":"fade-up",children:(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709724223/videoConferencingPage/recordvideo_krq3kg.jpg",alt:"",className:"img-fluid lazyload pt-2 pt-md-0"})})})]})})}),(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{class:"row align-items-center my-5 align-items-center",children:[(0,l.jsxs)("div",{class:"col-md-4",children:[(0,l.jsx)("h5",{className:"fw-bold",style:{color:"#34548c"},children:"Videoconferencing solutions"}),(0,l.jsx)("p",{className:"",children:"Live visual connection between two or more remote parties over the internet that simulates a face-to-face meeting. Video conferencing is important because it joins people who would not normally be able to form a face-to-face connection. Our cutting-edge videoconference solutions provide unparalleled clarity for your conference room video setup."})]}),(0,l.jsx)("div",{class:"col-md-4","data-aos":"fade-up",children:(0,l.jsx)("div",{className:"text-center mb-3",children:(0,l.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709724295/videoConferencingPage/webcam_xobc6j.jpg",alt:"",className:"img-fluid lazyload"})})}),(0,l.jsx)("div",{class:"col-md-4",children:(0,l.jsx)("p",{className:"",children:" Experience a unique 180\xb0 field of view, astounding sound, and real-time whiteboarding. Discover the future of smarter video collaboration for small to medium meeting rooms. Transform your workplace with our comprehensive conference room camera and microphone options. Video your way with our recommended wireless conference room solutions today. "})})]})}),(0,l.jsx)(t.A,{})]})},25884:()=>{}}]);
//# sourceMappingURL=5839.7ed28481.chunk.js.map