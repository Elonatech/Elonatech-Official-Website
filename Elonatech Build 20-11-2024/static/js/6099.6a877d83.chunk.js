"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6099],{50680:(e,s,a)=>{a.d(s,{A:()=>i});a(65043);var l=a(69324),t=(a(84053),a(70579));const i=()=>(0,t.jsx)("div",{className:"getintouch-wrapper",children:(0,t.jsxs)("div",{className:"getintouch-container",children:[(0,t.jsx)("img",{src:"https://res.cloudinary.com/elonatech/image/upload/v1708598256/getIntouchBanner/talk_to_expert_about_your_digital_needs_jthbar.jpg",alt:"Talk with An Expert",className:"getintouch-background"}),(0,t.jsxs)("div",{className:"getintouch-content",children:[(0,t.jsx)("h4",{className:"getintouch-title",children:"Talk with An Expert About Your Next Digital Needs."}),(0,t.jsx)(l.A,{})]})]})})},69324:(e,s,a)=>{a.d(s,{A:()=>h});var l=a(65043),t=a(92823),i=a.n(t),c=(a(25884),a(77154)),n=a(47503),r=a(74723),o=a(73216),d=a(70579);const h=()=>{let e=(0,o.Zp)();const[s,a]=(0,l.useState)(""),[t,h]=(0,l.useState)(""),[m,p]=(0,l.useState)(""),[g,x]=(0,l.useState)(""),[u,j]=(0,l.useState)(""),[v,b]=(0,l.useState)(""),[y,f]=(0,l.useState)(""),[w,N]=(0,l.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"btn btn-danger cvb","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:(0,d.jsx)("h5",{children:"Request A Quote"})}),(0,d.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,d.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-scrollable",children:(0,d.jsxs)("div",{class:"modal-content",children:[(0,d.jsxs)("div",{class:"modal-header",children:[(0,d.jsx)("h1",{class:"modal-title fs-4 text-dark fw-bold",id:"exampleModalLabel",children:"Request A Quote"}),(0,d.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,d.jsxs)("div",{class:"modal-body text-dark",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{class:"col-md-12 mt-",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Full name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Full name",onChange:e=>a(e.target.value),"aria-label":"First name"})]})}),(0,d.jsx)("div",{class:"col-md-12",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Email",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)("input",{type:"email",class:"form-control",placeholder:"Email",onChange:e=>p(e.target.value),"aria-label":"Last name"})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Company name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Company name",onChange:e=>h(e.target.value),"aria-label":"Company name"})]}),(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start  fw-bold",children:["Phone Number",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{class:"form-control",placeholder:"080 xxxx xxxx",value:g,onChange:e=>{const s=e.target.value.replace(/\D/g,"");x(s)},"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Title Of Project",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Title Of Project",onChange:e=>j(e.target.value),"aria-label":"Last name"})]}),(0,d.jsxs)("div",{class:"col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Project Location",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Project Location",onChange:e=>b(e.target.value),"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"col-12 mt-3",style:{marginBottom:"4rem"},children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)("h6",{className:"text-start fw-bold",children:"Project Description"})}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)(i(),{theme:"snow",className:"",placeholder:"cover letter",style:{height:"100px"},onChange:e=>f(e)})})]})]}),(0,d.jsxs)("div",{class:"modal-footer border-0",children:[(0,d.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary onliyu",onClick:async a=>{a.preventDefault(),N(!0);try{const a={fullname:s,company:t,email:m,number:g,project:u,location:v,letter:y};await c.A.post(`${r.T}/api/v1/email/quote`,a,{headers:{"Content-Type":"application/json"}})&&(n.oR.success("Quote Sent!!!"),setTimeout((()=>{e(0)}),1e3))}catch(l){n.oR.error(l.response.data)}finally{N(!1)}},disabled:w,children:(0,d.jsx)("h6",{children:w?"Submitting...":"Submit"})})]})]})})})]})}},86099:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var l=a(50680),t=a(49367),i=a(70579);const c=()=>(0,i.jsxs)("section",{children:[(0,i.jsxs)(t.mg,{children:[(0,i.jsx)("title",{children:"Graphic Design  - Tech Solution, Digital Solution"}),(0,i.jsx)("meta",{name:"description",content:"Our Offering\r\nGraphic Design is the key to capturing attention, conveying messages, and leaving lasting impressions. At Elonatech, we're committed to harnessing the limitless potential of creative design to help you stand out, connect with your audience, and achieve goals.\r "}),(0,i.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/graphics-design"})]}),(0,i.jsx)("div",{class:"container-fluid graphic-design-section",children:(0,i.jsxs)("div",{class:"text-content",children:[(0,i.jsx)("h2",{children:"Graphic Design"}),(0,i.jsx)("h5",{children:"Offering Industry-Standard Premium Design Service"}),(0,i.jsx)("p",{class:"lead",children:"A form of digital marketing that leverages the power of popular social media networks to achieve your marketing and branding goals."})]})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{class:" offering row  flex-lg-row",children:[(0,i.jsxs)("div",{class:"col-md-5 container",children:[(0,i.jsx)("h2",{className:" text-start fw-bold",children:"Our Offering"}),(0,i.jsx)("p",{className:" fs-6 fw-normal text-justify text-p",children:"Graphic Design is the key to capturing attention, conveying messages, and leaving lasting impressions. At Elonatech, we're committed to harnessing the limitless potential of creative design to help you stand out, connect with your audience, and achieve goals."}),(0,i.jsx)("div",{className:" mb-5",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710603/graphicPage/screenshot_2023-10-11_110556_480_qtormb.png",className:"img-fluid lazyload"})})]}),(0,i.jsx)("div",{class:"col-md-7",children:(0,i.jsxs)("div",{class:"row",children:[(0,i.jsxs)("div",{class:"col-md-6 col-sm-3",children:[(0,i.jsx)("div",{class:"services__item__icon ",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710908/graphicPage/icon1_sefhf5.png",style:{width:"50px"},alt:"",className:"icon lazyload logo-icon1 "})}),(0,i.jsx)("h3",{children:" Corporate design"}),(0,i.jsx)("p",{children:"Logo design, Business cards, Stationery, Business newsletters"})]}),(0,i.jsxs)("div",{class:"col-md-6 col-sm-3",children:[(0,i.jsx)("div",{class:"services__item__icon",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710908/graphicPage/icon2_zsea4y.png",style:{width:"40px"},alt:"",className:"logo-icon2 lazyload"})}),(0,i.jsx)("h3",{children:"Advertising design"}),(0,i.jsx)("p",{children:"Brochures, newspapers and magazines, social media, email marketing, & Infographics designs and digital advertisements"})]}),(0,i.jsxs)("div",{class:"col-md-6 col-sm-3",children:[(0,i.jsx)("div",{class:"services__item__icon",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710908/graphicPage/icon3_zolu34.png",style:{width:"40px"},alt:"",className:"logo-icon3 lazyload"})}),(0,i.jsx)("h3",{children:" Publication design"}),(0,i.jsx)("p",{children:"Books, Magazines, Newsletters, Catalogs, Newspapers, eBooks"})]}),(0,i.jsxs)("div",{class:"col-md-6 col-sm-3",children:[(0,i.jsx)("div",{class:"services__item__icon",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710909/graphicPage/packageicon_yxaeo6.png",style:{width:"40px"},alt:"",className:"icon lazyload"})}),(0,i.jsx)("h3",{children:"Packaging design"}),(0,i.jsx)("p",{children:"Cereal boxes, Makeup package, containers, Other food and item boxes, packages, etc."})]})]})})]})}),(0,i.jsxs)("div",{className:"",style:{background:"#F9F6EE"},children:[(0,i.jsxs)("div",{className:"pt-4",children:[" ",(0,i.jsx)("h1",{className:"text-center",children:"PRINT DESIGN"})]}),(0,i.jsx)("div",{className:"container-card ",children:(0,i.jsxs)("div",{className:"content-section p-md-5",children:[(0,i.jsxs)("div",{class:"card-body",style:{width:"22rem"},children:[(0,i.jsx)("div",{class:"p-3 mb-2  text-white",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710543/graphicPage/business-card3_jzveva.png",style:{width:"100px"},className:"lazyload",alt:""})}),(0,i.jsx)("h5",{class:"card-title",children:"Business cards"}),(0,i.jsx)("p",{class:"card-text text-justify",children:"This shows off all your branding essentials: The name of your business, your logo, and your tagline. It encourages people to contact you, visit your business (online or in real life) and learn more about you."})]}),(0,i.jsxs)("div",{class:"card-body ",style:{width:"22rem"},children:[(0,i.jsx)("div",{class:"p-3 mb-2  text-white",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710543/graphicPage/flyer2_syiydy.png",style:{width:"100px"},className:"lazyload",alt:""})}),(0,i.jsx)("h5",{class:"card-title",children:"Flyer/Brochures"}),(0,i.jsx)("p",{class:"card-text text-justify",children:"usually used for large volume hand-outs, brochures are designed to be read and to help readers absorb important information. These are advertisement that is presented by a business for promoting their products or services"})]}),(0,i.jsxs)("div",{class:"card-body ",style:{width:"22rem"},children:[(0,i.jsx)("div",{class:"p-3 mb-2  text-white",children:(0,i.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710542/graphicPage/stationery1_rn75xo.png",style:{width:"100px"},className:"lazyload",alt:""})}),(0,i.jsx)("h5",{class:"card-title",children:"Stationery"}),(0,i.jsx)("p",{class:"card-text text-justify ",children:"This refers to commercially manufactured writing materials, including cut paper, envelopes, writing implements, continuous form paper, and other office supplies."})]})]})})]}),(0,i.jsx)("div",{className:"container mb-5 mt-5",children:(0,i.jsxs)("div",{className:"row g-0",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"card border-0",children:(0,i.jsx)("img",{"data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709710576/graphicPage/elonatech-graphics3_dmuaiu.jpg",className:"lazyload",style:{height:"24.68rem"}})})}),(0,i.jsxs)("div",{className:"col-md-6 card pb-2 border-2 rounded-0",style:{borderColor:"#016193"},children:[(0,i.jsx)("h2",{class:"font-weight-bold heading ps-2 pt-3  pl-2",children:"Why Choose Us?"}),(0,i.jsx)("p",{class:"text-black  ",style:{textAlign:"justify"},children:(0,i.jsxs)("ul",{className:"p-3 list-unstyled",children:[(0,i.jsxs)("li",{className:"pb-1",children:[" ",(0,i.jsx)("span",{className:"fw-bold",children:"Creative Excellence:"}),"  Our team of talented and experienced graphic designers is passionate about creativity and driven by excellence."]}),(0,i.jsxs)("li",{className:"pb-1",children:[" ",(0,i.jsx)("span",{className:"fw-bold",children:"Custom Solutions:"}),"  We don't believe in one-size-fits-all. Every design project is unique, and we tailor our solutions to your specific needs and objectives."]}),(0,i.jsxs)("li",{className:"pb-1",children:[" ",(0,i.jsx)("span",{className:"fw-bold",children:"Timely Delivery:"}),"  We understand the importance of deadlines and work diligently to ensure your projects are delivered on time."]}),(0,i.jsxs)("li",{className:"pb-1",children:[" ",(0,i.jsx)("span",{className:"fw-bold",children:"Collaboration:"}),"  Your input matters. We work closely with you throughout the design process, ensuring your vision is at the heart of every project."]}),(0,i.jsxs)("li",{className:"pb-0",children:[" ",(0,i.jsx)("span",{className:"fw-bold",children:"Affordability:"}),"  High-quality graphic design doesn't have to break the bank. We offer competitive pricing to make outstanding design accessible."]})]})})]})]})}),(0,i.jsx)(l.A,{})]})},25884:()=>{},84053:()=>{}}]);
//# sourceMappingURL=6099.6a877d83.chunk.js.map