"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7268],{78953:(e,s,t)=>{t.r(s),t.d(s,{default:()=>y});var r=t(65043),c=t(74975),i=t(77154),l=t(73216),a=t(74723),n=t(35475),d=t(78696),o=t(96213),h=t.n(o),x=t(38716),m=t(90221),j=t(9634),p=(t(81580),t(12151)),u=t.n(p),g=(t(44014),t(55692),t(33874),t(43647),t(58385)),w=t(81802),b=t(70579);const y=()=>{const[e,s]=(0,r.useState)(),[t,o]=(0,r.useState)({}),[p,y]=(0,r.useState)(""),[f,N]=(0,r.useState)(""),[v,k]=(0,r.useState)([]),[S,C]=(0,r.useState)(null),[_,T]=(0,r.useState)(!1),[P,L]=(0,r.useState)([]),[O,I]=(0,r.useState)([]),{id:E}=(0,l.g)(),[R,z]=(0,r.useState)([]),[B,A]=(0,r.useState)(null),V=(0,l.Zp)();(0,l.zy)(),(()=>{const[e,s]=(0,r.useState)({width:window.innerWidth,height:window.innerHeight});return(0,r.useEffect)((()=>{const e=()=>{s({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e})().width;(0,r.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("token"));y(e)}),[]);const{handleGoBack:H,handleNavigateNext:W}=(()=>{const e=(0,l.Zp)(),s=((0,l.zy)(),(0,r.useRef)(!1)),t=(0,r.useCallback)((()=>{window.scrollTo({top:0,behavior:"smooth"})}),[]);return(0,r.useEffect)((()=>("scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")})),[]),{handleGoBack:()=>{window.history.state&&window.history.state.idx>0?(e(-1),t()):(e("/shop"),t())},scrollToTop:t,handleNavigateNext:t=>{!s.current&&t&&(s.current=!0,e("/product/".concat(t)),setTimeout((()=>{s.current=!1}),500))}}})();(0,r.useEffect)((()=>{(async()=>{try{const e=await i.A.get("".concat(a.T,"/api/v1/product/").concat(E));o(e.data.product),L(e.data.product.images),N(e.data.product.category),k(e.data.product.computerProperty),T(!0);const s=await i.A.get("".concat(a.T,"/api/v1/product/").concat(E,"/next"));A(s.data.nextProduct._id),await G(),await M()}catch(S){T(!0),V("/shop")}})()}),[E]),(0,r.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("recentlyViewed")||"[]");if(e.includes(E))I(e);else{const s=[E,...e.slice(0,4)];localStorage.setItem("recentlyViewed",JSON.stringify(s)),I(s)}}),[E]);const M=async()=>{try{const e=(await i.A.get("".concat(a.T,"/api/v1/product/products/recently-viewed"))).data.recentlyViewedProducts.slice(0,6);I(e.filter((e=>e._id!==E)).slice(0,5))}catch(S){console.error("Error fetching recently viewed products:",S)}},G=async()=>{try{const e=await i.A.get("".concat(a.T,"/api/v1/product/").concat(E,"/related"));z(e.data.relatedProducts)}catch(S){console.error("Error fetching related products:",S)}},q=e=>{let{product:s}=e;return(0,b.jsx)("div",{className:"col-custom-5 mb-4",children:(0,b.jsxs)("div",{className:"card h-100 d-flex flex-column",children:[(0,b.jsx)(j.LazyLoadImage,{alt:s.name,src:s.images&&s.images.length>0?s.images[0].url:"placeholder-image-url.jpg",effect:"blur",className:"card-img-top",style:{height:"160px",objectFit:"cover"},placeholderSrc:"https://res.cloudinary.com/elonatech/image/upload/v1710241889/loaderImage/blurred_o4delz.avif"}),(0,b.jsxs)("div",{className:"card-body d-flex flex-column",children:[(0,b.jsx)("h6",{className:"card-title",children:s.name}),(0,b.jsxs)("p",{className:"card-text",children:["\u20a6 ",Number(s.price).toLocaleString(),".00"]}),(0,b.jsx)("div",{className:"mt-auto",children:(0,b.jsx)(n.N_,{to:"/product/".concat(s._id),className:"btn btn-dark btn-sm w-100",style:{backgroundColor:"black",borderColor:"black"},children:"View Product"})})]})]})})},D=e=>{let{title:s,products:t}=e;return(0,b.jsxs)("div",{className:"container mt-5",children:[(0,b.jsx)("h2",{className:"mb-4",children:s}),(0,b.jsx)("div",{className:"row product-grid",children:t.slice(0,5).map(((e,s)=>(0,b.jsx)(q,{product:e,index:s},e._id)))})]})},{addItem:F}=(0,x._$)(),J=u()(t.description,{allowedTags:["strong"]}),$=P.length>0?P[0].url.startsWith("https")?P[0].url:"https://elonatech-official-website.vercel.app".concat(P[0].url):"https://elonatech-official-website.vercel.app/default-product-image.jpg",K="https://elonatech-official-website.vercel.app/product/".concat(E),U={"@context":"https://schema.org/","@type":"Product",name:t.name,image:$,description:J,brand:{"@type":"Brand",name:t.brand},offers:{"@type":"Offer",url:K,priceCurrency:"NGN",price:t.price,availability:t.quantity>0?"https://schema.org/InStock":"https://schema.org/OutOfStock"}};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(w.mg,{children:[(0,b.jsx)("title",{children:"".concat(t.name," - Elonatech Nigeria Limited")}),(0,b.jsx)("meta",{name:"description",content:J}),(0,b.jsx)("link",{rel:"canonical",href:K}),(0,b.jsx)("link",{rel:"preload",href:$,as:"image"}),(0,b.jsx)("meta",{property:"og:title",content:"".concat(t.name," - Elonatech Nigeria Limited")}),(0,b.jsx)("meta",{property:"og:description",content:J}),(0,b.jsx)("meta",{property:"og:image",content:$}),(0,b.jsx)("meta",{property:"og:image:secure_url",content:$}),(0,b.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,b.jsx)("meta",{property:"og:image:height",content:"630"}),(0,b.jsx)("meta",{property:"og:image:alt",content:t.name}),(0,b.jsx)("meta",{property:"og:url",content:K}),(0,b.jsx)("meta",{property:"og:type",content:"product"}),(0,b.jsx)("meta",{property:"og:site_name",content:"Elonatech Nigeria Limited"}),(0,b.jsx)("meta",{property:"og:locale",content:"en_NG"}),(0,b.jsx)("meta",{property:"og:price:amount",content:t.price}),(0,b.jsx)("meta",{property:"og:price:currency",content:"NGN"}),(0,b.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,b.jsx)("meta",{name:"twitter:title",content:"".concat(t.name," - Elonatech Nigeria Limited")}),(0,b.jsx)("meta",{name:"twitter:description",content:J}),(0,b.jsx)("meta",{name:"twitter:image",content:$}),(0,b.jsx)("script",{type:"application/ld+json",children:JSON.stringify(U)})]}),(0,b.jsx)("div",{class:"container-fluid shop-section",children:(0,b.jsx)("div",{class:"py-5 mt-5"})}),(0,b.jsxs)("section",{class:"mt-0",id:"product",style:{backgroundColor:"#f1f1f2"},children:[_?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"container mt-4",children:(0,b.jsxs)("button",{onClick:H,className:"btn btn-outline-dark back-btn",children:[(0,b.jsx)(m.$jz,{className:"me-2"}),"Back"]})}),(0,b.jsxs)("div",{class:"container py-5 mb-",children:[(0,b.jsxs)("div",{class:"row border-0 ",children:[(0,b.jsx)("div",{class:"col-lg-8 ",children:(0,b.jsxs)("div",{className:"row g-0  ",children:[(0,b.jsx)("div",{className:"col-2",style:{backgroundColor:"white"},children:(0,b.jsx)("div",{className:"card border-0",children:(0,b.jsx)(c.RC,{direction:"vertical",onSwiper:s,spaceBetween:10,slidesPerView:10,freeMode:!0,watchSlidesProgress:!0,modules:[g.U1,g.Vx,g.WO,g.dK],className:"swiper-container gallery-thumbs pb-5",children:(0,b.jsx)("ul",{className:"list-unstyled text-start",style:{paddingLeft:"0"},children:P.map((e=>(0,b.jsx)("li",{className:"pb-3",style:{display:"flex",justifyContent:"flex-start"},children:(0,b.jsx)(c.qr,{className:"pb- mt-2",style:{paddingBottom:"60px",display:"flex",justifyContent:"flex-start"},children:(0,b.jsx)("img",{src:e.url,className:"img-fluid hto rounded border border-dark",style:{height:"60px",width:"60px",objectFit:"cover",cursor:"pointer"}})})},e.id)))})})})}),(0,b.jsx)("div",{className:"col-md-10",children:(0,b.jsx)("div",{className:"card border-0",children:(0,b.jsx)("div",{className:"gall",children:(0,b.jsx)(c.RC,{style:{"--swiper-navigation-color":"#080808","--swiper-pagination-color":"#080808"},spaceBetween:0,navigation:!0,loop:!0,pagination:{clickable:!0},thumbs:{swiper:e&&!e.destroyed?e:null},modules:[g.U1,g.Vx,g._R,g.WO,g.dK],className:"swiper-container gallery-top border-0",children:P.map((e=>(0,b.jsx)("div",{children:(0,b.jsx)(c.qr,{className:"border-0",children:(0,b.jsx)("div",{className:"text-center",children:(0,b.jsx)("img",{alt:"",class:"img-fluid",src:e.url})})})},e.id)))})})})})]})}),(0,b.jsx)("div",{class:"col-lg-4 mb-5",children:(0,b.jsxs)("div",{class:"",children:[(0,b.jsxs)("div",{className:"container",style:{display:"none"},children:[(0,b.jsx)("h1",{children:t.name}),(0,b.jsx)("img",{src:$,alt:t.name}),(0,b.jsxs)("p",{children:["Price: \u20a6",Number(t.price).toLocaleString(),".00"]}),(0,b.jsx)("div",{dangerouslySetInnerHTML:{__html:J}})]}),(0,b.jsx)("h4",{className:"fw-bold",children:t.name}),(0,b.jsx)("hr",{}),(0,b.jsx)("div",{class:" mt-0",children:(0,b.jsxs)("p",{className:"",children:[(0,b.jsx)("span",{className:"text-dark fw-bold pe-2",children:"Brand:"}),t.brand]})}),(0,b.jsxs)("div",{class:"d-flex",children:[(0,b.jsxs)("h4",{className:"mt-",children:["Total: \u20a6 ",Number(t.price).toLocaleString(),".00"]}),(0,b.jsxs)("p",{className:"ms-5 mt-1",children:[" ",(0,b.jsxs)("del",{className:"",children:["\u20a6 ",t.odd,".00"]})]})]}),(0,b.jsx)("p",{className:"text-danger",children:t.quantity<="0"?"Out of Stock":"In Stock"}),(0,b.jsx)("p",{children:"shipping from \u20a6 2,500 and Above "}),(0,b.jsxs)("ul",{class:"list-unstyled d-flex mt-3",children:[(0,b.jsx)("li",{children:(0,b.jsx)("i",{class:"fa fa-star",style:{color:"#f4be1d"}})}),(0,b.jsx)("li",{children:(0,b.jsx)("i",{class:"fa fa-star",style:{color:"#f4be1d"}})}),(0,b.jsx)("li",{children:(0,b.jsx)("i",{class:"fa fa-star",style:{color:"#f4be1d"}})}),(0,b.jsx)("li",{children:(0,b.jsx)("i",{class:"fa fa-star",style:{color:"#f4be1d"}})}),(0,b.jsx)("li",{children:(0,b.jsx)("i",{class:"fa fa-star",style:{color:"#f4be1d"}})})]}),(0,b.jsxs)("div",{className:"row justify-content-md-end mt-3",children:[(0,b.jsx)("div",{className:"col-6",children:(0,b.jsx)("div",{className:"",children:(0,b.jsx)("button",{className:"btn btn-dark mt-3",onClick:()=>F(t),children:(0,b.jsx)("b",{children:"Add To Cart"})})},t.id)}),(0,b.jsx)("div",{className:"col-6",children:p?(0,b.jsx)("div",{className:"text-end",children:(0,b.jsxs)("div",{className:"d-flex justify-content-md-end mt-3 ",children:[(0,b.jsx)(n.N_,{to:"/product/".concat(E,"/update"),children:(0,b.jsx)("i",{class:"bi bi-pencil-square text-warning fs-3 me-4",style:{cursor:"pointer"}})}),(0,b.jsx)("i",{class:"bi bi-trash3 text-danger fs-3",style:{cursor:"pointer"},onClick:async()=>{await i.A.delete("".concat(a.T,"/api/v1/product/").concat(E));V("/shop")}})]})}):(0,b.jsx)("div",{})}),(0,b.jsx)("h6",{className:"mt-3 fw-bold",children:"PROMOTIONS"}),(0,b.jsxs)("div",{className:"d-flex mt-2",children:[(0,b.jsx)("i",{class:"bi bi-telephone-fill fs-3"}),(0,b.jsxs)("p",{className:"text-dark mt-2 ms-4",children:["Call ",(0,b.jsx)("a",{className:"text-decoration-none text-red ",href:"tel:234 901 454 452",children:"+234 901 454 4520"})," To Order"]})]})]})]})})]}),"Computer"!==t.category?(0,b.jsx)("div",{className:"container mt-5  mb-5",children:(0,b.jsx)("div",{className:"row ",children:(0,b.jsxs)("div",{className:"col-lg-12",children:[(0,b.jsx)("h4",{className:"fw-bold mb-3 mt-3",children:"Product Detail"}),(0,b.jsx)("hr",{className:"text-danger"}),(0,b.jsx)("div",{className:"border-0",children:(0,b.jsx)("div",{class:"description mt-2 mb-5 p-",dangerouslySetInnerHTML:{__html:h().sanitize(t.description)}})})]})})}):(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"container mt-5",style:{backgroundColor:"#f1f1f2"},children:(0,b.jsx)("div",{className:"row ",children:(0,b.jsxs)("div",{className:"col-lg-12",children:[(0,b.jsx)("h4",{className:"fw-bold mb-3 mt-3",children:"Overview"}),(0,b.jsx)("hr",{className:"text-danger"}),(0,b.jsx)("div",{className:"card border-0",style:{backgroundColor:"#f1f1f2"},children:(0,b.jsx)("div",{class:"description mt-2 mb-5",dangerouslySetInnerHTML:{__html:h().sanitize(t.description)}})})]})})}),(0,b.jsx)("div",{children:v.map((e=>(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"fw-bold mb-3",children:"Description"}),(0,b.jsxs)("table",{class:"table table-bordered",style:{width:"100%"},children:[(0,b.jsx)("thead",{children:(0,b.jsx)("tr",{})}),(0,b.jsxs)("tbody",{children:[(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",style:{width:"30%"},children:"Brand"}),(0,b.jsxs)("td",{style:{width:"60%"},children:[t.brand," "]})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Series"}),(0,b.jsx)("td",{colspan:"2",children:e.series})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Item model number"}),(0,b.jsx)("td",{colspan:"2",children:e.model})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Item Weight"}),(0,b.jsx)("td",{children:e.weight})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Product Dimensions"}),(0,b.jsx)("td",{children:e.dimension})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Item Dimensions LxWxH"}),(0,b.jsx)("td",{children:e.item})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Color"}),(0,b.jsx)("td",{children:e.color})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Hardware Platform"}),(0,b.jsx)("td",{children:e.hardware})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Operating System"}),(0,b.jsx)("td",{children:e.os})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Processor Brand"}),(0,b.jsx)("td",{children:e.processor})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Number of Processors"}),(0,b.jsx)("td",{children:e.number})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Computer Memory Type"}),(0,b.jsx)("td",{children:e.memory})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"RAM"}),(0,b.jsx)("td",{children:e.ram})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Hard Drive"}),(0,b.jsx)("td",{children:e.drive})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Screen display size"}),(0,b.jsx)("td",{children:e.display})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Screen Resolution"}),(0,b.jsx)("td",{children:e.resolution})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Graphics Coprocessor"}),(0,b.jsx)("td",{children:e.graphics})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Voltage"}),(0,b.jsx)("td",{children:e.voltage})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Batteries"}),(0,b.jsx)("td",{children:e.battery})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"row",children:"Wireless Type"}),(0,b.jsx)("td",{children:e.wireless})]})]})]})]},e.id)))})]})]})]}):(0,b.jsx)("div",{className:"container",children:(0,b.jsx)("div",{className:"row",children:(0,b.jsx)("div",{className:"col-md-12",children:(0,b.jsx)("div",{className:"d-flex justify-content-center",children:(0,b.jsx)("div",{className:"my-5 py-5",children:(0,b.jsx)(d.A,{})})})})})}),(0,b.jsx)("div",{className:"container mt-4 mb-4",children:(0,b.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[(0,b.jsxs)("button",{onClick:H,className:"btn btn-outline-dark nav-button",children:[(0,b.jsx)(m.$jz,{className:"me-2"}),"Previous"]}),B&&(0,b.jsxs)("button",{onClick:()=>W(B),className:"btn btn-outline-dark nav-button",children:["Next",(0,b.jsx)(m.Fx8,{className:"ms-2"})]})]})}),R.length>0&&(0,b.jsx)(D,{title:(0,b.jsx)("h4",{className:"fw-bold mb-3 mt-3",children:"Related Products"}),products:R}),O.length>0&&(0,b.jsx)(D,{title:(0,b.jsx)("h4",{className:"fw-bold mb-3 mt-3",children:"Recently Viewed Products"}),products:O})]})]})}}}]);
//# sourceMappingURL=7268.43d77a7e.chunk.js.map