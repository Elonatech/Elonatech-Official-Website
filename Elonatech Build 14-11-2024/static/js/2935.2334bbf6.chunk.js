"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2935],{50680:(e,s,a)=>{a.d(s,{A:()=>t});a(65043);var i=a(69324),l=(a(84053),a(70579));const t=()=>(0,l.jsx)("div",{className:"getintouch-wrapper",children:(0,l.jsxs)("div",{className:"getintouch-container",children:[(0,l.jsx)("img",{src:"https://res.cloudinary.com/elonatech/image/upload/v1708598256/getIntouchBanner/talk_to_expert_about_your_digital_needs_jthbar.jpg",alt:"Talk with An Expert",className:"getintouch-background"}),(0,l.jsxs)("div",{className:"getintouch-content",children:[(0,l.jsx)("h4",{className:"getintouch-title",children:"Talk with An Expert About Your Next Digital Needs."}),(0,l.jsx)(i.A,{})]})]})})},69324:(e,s,a)=>{a.d(s,{A:()=>h});var i=a(65043),l=a(92823),t=a.n(l),r=(a(25884),a(77154)),n=a(47503),c=a(74723),o=a(73216),d=a(70579);const h=()=>{let e=(0,o.Zp)();const[s,a]=(0,i.useState)(""),[l,h]=(0,i.useState)(""),[m,p]=(0,i.useState)(""),[g,x]=(0,i.useState)(""),[f,u]=(0,i.useState)(""),[j,b]=(0,i.useState)(""),[v,w]=(0,i.useState)(""),[y,N]=(0,i.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"btn btn-danger cvb","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:(0,d.jsx)("h5",{children:"Request A Quote"})}),(0,d.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,d.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-scrollable",children:(0,d.jsxs)("div",{class:"modal-content",children:[(0,d.jsxs)("div",{class:"modal-header",children:[(0,d.jsx)("h1",{class:"modal-title fs-4 text-dark fw-bold",id:"exampleModalLabel",children:"Request A Quote"}),(0,d.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,d.jsxs)("div",{class:"modal-body text-dark",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{class:"col-md-12 mt-",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Full name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Full name",onChange:e=>a(e.target.value),"aria-label":"First name"})]})}),(0,d.jsx)("div",{class:"col-md-12",children:(0,d.jsxs)("div",{class:" mt-2",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Email",(0,d.jsx)("span",{className:"text-danger",children:"*"})]}),(0,d.jsx)("input",{type:"email",class:"form-control",placeholder:"Email",onChange:e=>p(e.target.value),"aria-label":"Last name"})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Company name",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Company name",onChange:e=>h(e.target.value),"aria-label":"Company name"})]}),(0,d.jsxs)("div",{class:" col-md-12 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start  fw-bold",children:["Phone Number",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{class:"form-control",placeholder:"080 xxxx xxxx",value:g,onChange:e=>{const s=e.target.value.replace(/\D/g,"");x(s)},"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{class:" col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Title Of Project",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Title Of Project",onChange:e=>u(e.target.value),"aria-label":"Last name"})]}),(0,d.jsxs)("div",{class:"col-md-6 mt-3",children:[(0,d.jsxs)("label",{for:"validationCustom01",class:"form-label float-start fw-bold",children:["Project Location",(0,d.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,d.jsx)("input",{type:"text",class:"form-control",placeholder:"Project Location",onChange:e=>b(e.target.value),"aria-label":"Last name"})]})]}),(0,d.jsxs)("div",{className:"col-12 mt-3",style:{marginBottom:"4rem"},children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)("h6",{className:"text-start fw-bold",children:"Project Description"})}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)(t(),{theme:"snow",className:"",placeholder:"cover letter",style:{height:"100px"},onChange:e=>w(e)})})]})]}),(0,d.jsxs)("div",{class:"modal-footer border-0",children:[(0,d.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary onliyu",onClick:async a=>{a.preventDefault(),N(!0);try{const a={fullname:s,company:l,email:m,number:g,project:f,location:j,letter:v};await r.A.post(`${c.T}/api/v1/email/quote`,a,{headers:{"Content-Type":"application/json"}})&&(n.oR.success("Quote Sent!!!"),setTimeout((()=>{e(0)}),1e3))}catch(i){n.oR.error(i.response.data)}finally{N(!1)}},disabled:y,children:(0,d.jsx)("h6",{children:y?"Submitting...":"Submit"})})]})]})})})]})}},82935:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var i=a(50680),l=a(49367),t=a(70579);const r=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.mg,{children:[(0,t.jsx)("title",{children:"Pay Per Click - Tech Solution, Digital Solution"}),(0,t.jsx)("meta",{name:"description",content:"Make the Right Decisions for Your Brand With PPC Advertising\r\nToday, the digital landscape keeps growing and websites are proliferating at warp speed. From small companies and franchises to eCommerce businesses and entrepreneurs, almost everyone is on the internet, figuring out advertising avenues and maximizing all possible conversion paths. Increased marketing opportunities, however, come with greater challenges. "}),(0,t.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/ppc"})]}),(0,t.jsx)("div",{class:"container-fluid ppc-section",children:(0,t.jsxs)("div",{class:"text-content",children:[(0,t.jsx)("h2",{children:"Pay Per Click"}),(0,t.jsx)("h5",{children:"Experience the Next Level of Digital Advertising with a Click"}),(0,t.jsx)("p",{class:"lead",children:"Campaigns highly effective for driving targeted website traffic and achieving various marketing objectives"})]})}),(0,t.jsx)("div",{class:"section-top-border mt-5",children:(0,t.jsx)("div",{className:"container ",children:(0,t.jsxs)("div",{class:"row align-items-center",children:[(0,t.jsx)("div",{class:"col-md-6",children:(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1710316279/ppcPage/ppc_2_ruweku.jpg",alt:"",class:"img-fluid lazyload"})})}),(0,t.jsxs)("div",{class:"col-md-6",children:[(0,t.jsx)("h5",{className:"fw-bold mt-3 mb-3",children:"Make the Right Decisions for Your Brand With PPC Advertising"}),(0,t.jsxs)("p",{className:"",style:{textAlign:"justify"},children:["Today, the digital landscape keeps growing and websites are proliferating at warp speed. From small companies and franchises to eCommerce businesses and entrepreneurs, almost everyone is on the internet, figuring out advertising avenues and maximizing all possible conversion paths. Increased marketing opportunities, however, come with greater challenges.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Despite the availability of advertising tools and digital marketing channels, some businesses remain invisible to their target audience. As a result, market players are in an uphill battle, barely making progress with their internet marketing efforts.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"PPC stands for pay-per-click, a model of digital advertising where the advertiser pays a fee each time one of their ads is clicked."]})]})]})})}),(0,t.jsx)("div",{class:"section-top-border mt-5",children:(0,t.jsx)("div",{className:"container ",children:(0,t.jsxs)("div",{class:"row mt-5 mb-5 align-items-center",children:[(0,t.jsx)("div",{class:"col-md-6 mt-5",children:(0,t.jsxs)("p",{className:"",style:{textAlign:"justify"},children:["A Hanapin Marketing report shows that 79 percent of marketers find paid search marketing beneficial to their business. Consequently, approximately 62 percent of industry players said they would continue to increase their PPC ads budget in the coming years to draw new customers looking for their services.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"According to Social Media Today, more than 7 million advertisers spent a total of $10.01 billion for pay per click ads in 2017 alone. Evidently, pay per click has become one of the most widely used marketing frameworks for generating higher ROI. But what is pay per click and how can it ramp up your digital marketing efforts?"]})}),(0,t.jsx)("div",{class:"col-md-6",children:(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("img",{src:"https://res.cloudinary.com/elonatech/image/upload/v1710164778/loaderImage/Loading_icon_wrnmya.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709659228/ppcPage/ppc3_opin7l.png",alt:"",class:"img-fluid lazyload",style:{height:"26rem"}})})})]})})}),(0,t.jsx)("div",{class:"section-top-border",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{class:"row align-items-center",children:[(0,t.jsx)("div",{class:"col-md-6",children:(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709659226/ppcPage/ppc2_zwmohy.webp",alt:"",class:"img-fluid lazyload mb-4 mt-4"})})}),(0,t.jsxs)("div",{class:"col-md-6",children:[(0,t.jsx)("h5",{className:"fw-bold mt-3 mb-3",children:"Different Types Of PPC Campaigns And Their Benefits"}),(0,t.jsx)("p",{class:"",children:"PPC campaigns can be highly effective for driving targeted website traffic and achieving various marketing objectives. There are different types of PPC campaigns, each with its own set of benefits."}),(0,t.jsx)("ul",{className:"list-unstyled",children:(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("i",{class:"bi bi-check-circle-fill fs-4"}),(0,t.jsx)("h6",{className:"ms-3 mt-2 fw-bold",children:"Search Ads"})]}),(0,t.jsxs)("p",{className:"",children:[(0,t.jsx)("strong",{className:"fw-bold",children:"Benefit:"}),"  Search ads appear on search engine results pages (e.g., Google, Bing) when users enter relevant keywords. They allow advertisers to target users actively searching for specific products or services, increasing the likelihood of conversions.",(0,t.jsx)("br",{}),(0,t.jsx)("strong",{className:"fw-bold",children:"Best for:"}),"  Direct response marketing, lead generation, and driving relevant traffic to specific landing pages."]})]})})]})]})})}),(0,t.jsx)("div",{className:"container mt-5 mb-5",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("ul",{className:"list-unstyled",children:[(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("i",{class:"bi bi-check-circle-fill fs-4"}),(0,t.jsx)("h6",{className:"ms-3 mt-2 fw-bold",children:" Display Ads"})]}),(0,t.jsxs)("p",{className:"",children:[" ",(0,t.jsx)("strong",{className:"fw-bold",children:"Benefit:"})," Display ads include banner, image, or interactive ads that are shown on various websites within the ad network. They provide a broader reach, increasing brand awareness and visibility.",(0,t.jsx)("br",{}),(0,t.jsx)("strong",{className:"fw-bold",children:"Best for:"})," Building brand awareness, retargeting website visitors, and promoting visual content like infographics and videos."]})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("i",{class:"bi bi-check-circle-fill fs-4"}),(0,t.jsx)("h6",{className:"ms-3 mt-2 fw-bold",children:"Shopping Ads"})]}),(0,t.jsxs)("p",{className:"",children:[(0,t.jsx)("strong",{className:"fw-bold",children:"Benefit:"}),"  Shopping ads are product-based ads that show images, prices, and other relevant information directly on search engine results. They are particularly effective for e-commerce businesses, showcasing products and attracting users with high purchase intent.",(0,t.jsx)("br",{}),(0,t.jsx)("strong",{className:"fw-bold",children:"Best for:"})," E-commerce websites looking to promote specific products and drive sales."]})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("i",{class:"bi bi-check-circle-fill fs-4"}),(0,t.jsx)("h6",{className:"ms-3 mt-2 fw-bold",children:"Video Ads"})]}),(0,t.jsxs)("p",{className:"",children:[(0,t.jsx)("strong",{className:"fw-bold",children:"Benefit:"}),"  Video ads are shown on platforms like YouTube and can deliver engaging content to captivate the audience. They are highly effective for storytelling and brand messaging.",(0,t.jsx)("br",{}),(0,t.jsx)("strong",{className:"fw-bold",children:"Best for:"})," Brand awareness, storytelling, and showcasing products or services through visual media."]})]})]})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("ul",{className:"list-unstyled",children:[(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("i",{class:"bi bi-check-circle-fill fs-4"}),(0,t.jsx)("h6",{className:"ms-3 mt-2 fw-bold",children:" Remarketing/Retargeting Ads"})]}),(0,t.jsxs)("p",{className:"",children:[(0,t.jsx)("strong",{className:"fw-bold",children:"Benefit:"})," Remarketing ads target users who have previously visited your website but didn't convert. They remind potential customers of your brand, increasing the chances of conversion.",(0,t.jsx)("br",{}),(0,t.jsx)("strong",{className:"fw-bold",children:"Best for:"})," Converting bounced website visitors, reinforcing brand messaging, and driving previous visitors back to the site."]})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("i",{class:"bi bi-check-circle-fill fs-4"}),(0,t.jsx)("h6",{className:"ms-3 mt-2 fw-bold",children:"Social Media Ads"})]}),(0,t.jsxs)("p",{className:"",children:[(0,t.jsx)("strong",{className:"fw-bold",children:"Benefit:"}),"  Social media ads are displayed on social platforms (e.g., Facebook, Instagram, Twitter) and leverage detailed user data for precise targeting. They enable businesses to reach their target audience based on demographics, interests, and behaviors.",(0,t.jsx)("br",{}),(0,t.jsx)("strong",{className:"fw-bold",children:"Best for:"})," Building brand awareness, lead generation with specific user segments."]})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("i",{class:"bi bi-check-circle-fill fs-4"}),(0,t.jsx)("h6",{className:"ms-3 mt-2 fw-bold",children:"App Install Ads"})]}),(0,t.jsxs)("p",{className:"",children:[(0,t.jsx)("strong",{className:"fw-bold",children:"Benefit:"}),"  App install ads aim to drive installations of mobile applications. They often appear on mobile devices within other apps or as sponsored content in app stores.",(0,t.jsx)("br",{}),(0,t.jsx)("strong",{className:"fw-bold",children:"Best for:"})," Mobile app developers looking to increase app downloads and user acquisition. Each type of PPC campaign offers unique advantages, and the effectiveness of a campaign depends on the advertiser's specific goals, target audience, and budget. Combining different PPC strategies can create a well-rounded digital advertising approach to achieve various marketing objectives."]})]})]})})]})}),(0,t.jsx)("div",{className:"container mt-5 mb-5",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-md-8",children:(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("p",{className:"fw-bold fs-5",children:"What Are the Different Types of PPC Ads?"}),(0,t.jsxs)("p",{className:"",style:{textAlign:"justify"},children:["Now that you know what is paid search, the next step is to understand the different types of PPC marketing campaigns that can help you build your online presence and promote your services to the right audience. Our pay per click advertising agency works closely with your team to determine the appropriate PPC ads that you can use to fill your sales funnel.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"There are various types of pay per click ads available, depending on your goals."]})]})}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("img",{src:"https://i.stack.imgur.com/qq8AE.gif","data-src":"https://res.cloudinary.com/elonatech/image/upload/v1709659322/ppcPage/ppc-ads-image_neww_r0nkxi.webp",className:"img-fluid lazyload",alt:""})})})]})}),(0,t.jsx)(i.A,{})]})},25884:()=>{},84053:()=>{}}]);
//# sourceMappingURL=2935.2334bbf6.chunk.js.map