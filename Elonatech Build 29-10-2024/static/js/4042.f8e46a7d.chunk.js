"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4042],{42385:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(35475),n=s(70579);const r=e=>{let{totalPosts:t,itemsPerPage:s,maxPageNumberLimit:r,minPageNumberLimit:c,currentPage:i,paginate:o,handleNextbtn:l,handlePrevbtn:d}=e;const[p,m]=(0,a.ok)(),h=[];for(let a=1;a<=Math.ceil(t/s);a++)h.push(a);const x=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},u=h.map((e=>e<r+1&&e>c?(0,n.jsx)("li",{className:"page-item ".concat(i===e?"active":""),children:(0,n.jsx)("a",{onClick:()=>(e=>{o(e),m({page:e.toString()}),x()})(e),className:"page-link v-cursor",children:e})},e):null));let g=null;h.length>r&&(g=(0,n.jsx)("li",{className:"page-link v-cursor",onClick:l,children:" \u2026 "}));let j=null;c>=1&&(j=(0,n.jsx)("li",{className:"page-link v-cursor",onClick:d,children:" \u2026 "}));return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("ul",{className:"pagination justify-content-center mb-5",children:[(0,n.jsx)("li",{className:"page-item ".concat(1===i?"disabled":""),children:(0,n.jsx)("a",{className:"page-link",onClick:()=>{i>1&&(d(),m({page:(i-1).toString()}),x())},children:"Prev"})}),j,u,g,(0,n.jsx)("li",{className:"page-item ".concat(i===h.length?"disabled":""),children:(0,n.jsx)("a",{className:"page-link",onClick:()=>{i<h.length&&(l(),m({page:(i+1).toString()}),x())},children:"Next"})})]})})}},4042:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(65043),n=s(35475),r=s(70579);var c=s(42385),i=s(74723),o=s(78696),l=s(77154),d=s(9634),p=s(38716),m=s(47503),h=(s(92342),s(49367)),x=(s(81207),s(44969));const u=e=>{let{setFilteredProducts:t}=e;const[s,n]=(0,a.useState)({brand:[],price:[0,1e9]}),[c,o]=(0,a.useState)([]),[d,p]=(0,a.useState)([0,1e9]),[m,h]=(0,a.useState)([0,1e9]);(0,a.useEffect)((()=>{l.A.get("".concat(i.T,"/api/v1/product/brand")).then((e=>{if(e.data.success){const{brands:t,minPrice:s,maxPrice:a}=e.data,n=t.map((e=>e.trim().toUpperCase())),r=[...new Set(n)];o(r),p([s,a]),h([s,a])}})).catch((e=>{console.error("Error fetching brands:",e)}))}),[]);const u=(e,t)=>{const s=e.target.value.replace(/,/g,"");if(""===s){const e=[...m];return e[t]="",void h(e)}const a=Number(s);if(!isNaN(a)){const e=[...m];e[t]=a,h(e)}},g=async(e,s)=>{try{const a={brand:e.map((e=>e.trim().toUpperCase())).join(",")||void 0};s[0]===d[0]&&s[1]===d[1]||(a.minPrice=s[0],a.maxPrice=s[1]);const n=await l.A.get("".concat(i.T,"/api/v1/product/filter/all"),{params:a});n.data.success&&t(n.data.data)}catch(a){console.error("Error filtering products:",a)}};return(0,r.jsxs)("div",{style:{boxShadow:"0px 1px 0px rgba(0, 0, 0, 0.1)"},className:"mb-3",children:[(0,r.jsx)("label",{className:"form-label",children:"Brand:"}),(0,r.jsx)("div",{style:{maxHeight:"200px",overflowY:"scroll"},children:c.sort(((e,t)=>e.localeCompare(t))).map((e=>(0,r.jsxs)("div",{className:"text-dark",children:[(0,r.jsx)("input",{type:"checkbox",id:e,name:"brand",value:e,checked:s.brand.includes(e),onChange:()=>(async e=>{const t=s.brand.includes(e)?s.brand.filter((t=>t!==e)):[...s.brand,e];n((e=>({...e,brand:t}))),await g(t,s.price)})(e)}),(0,r.jsx)("label",{htmlFor:e,children:e})]},e)))}),(0,r.jsxs)("div",{className:"price-filter",children:[(0,r.jsx)("h4",{children:"Filter by Price(\u20a6)"}),(0,r.jsx)(x.Ay,{className:"slider",value:m,min:d[0],max:d[1],step:50,onChange:(e,t)=>{h(t)},pearling:!0,minDistance:10}),(0,r.jsxs)("div",{className:"price-range-values",children:[(0,r.jsx)("div",{style:{width:"100%"},children:(0,r.jsx)("input",{style:{width:"100%",borderRadius:"5px"},type:"text",value:void 0!==m[0]?m[0].toLocaleString():"",onChange:e=>u(e,0),className:"price-input"})}),(0,r.jsx)("span",{className:"separator",children:"-"}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{style:{width:"100%",borderRadius:"5px"},type:"text",value:void 0!==m[1]?m[1].toLocaleString():"",onChange:e=>u(e,1),className:"price-input"})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{style:{width:"100%"},onClick:async()=>{n((e=>({...e,price:m}))),await g(s.brand,m)},className:"apply-btn",children:"Apply Price Range"}),(0,r.jsx)("button",{style:{width:"100%"},onClick:()=>{h(d),n((e=>({...e,price:d}))),t([])},className:"reset-btn",children:"Reset Price Range"})]}),(0,r.jsx)("style",{jsx:!0,children:"\n        .shop-filter {\n          margin-bottom: 1rem;\n        }\n        .price-filter {\n          margin-top: 1rem;\n        }\n        .slider {\n          margin: 10px 0;\n        }\n        .price-range-values {\n          display: flex;\n          justify-content: space-between;\n        }\n        .apply-btn,\n        .reset-btn {\n          margin: 5px;\n          padding: 5px 10px;\n          cursor: pointer;\n          border: none;\n          border-radius: 5px;\n        }\n        .apply-btn {\n          background-color: rgb(52, 84, 140);\n          color: white;\n        }\n        .reset-btn {\n          background-color: rgb(220, 53, 69);\n          color: white;\n        }\n        .no-products-message {\n          color: red;\n          font-size: 18px;\n          margin-top: 20px;\n        }\n      "})]})},g=(0,d.trackWindowScroll)((()=>{const[e,t]=(0,a.useState)([]),[s,x]=(0,a.useState)([]),[g,j]=(0,a.useState)(!1),[N,b]=(0,a.useState)(1),[v]=(0,a.useState)(12),[y,f]=(0,a.useState)(4),[w,S]=(0,a.useState)(4),[k,P]=(0,a.useState)(0),[C,T]=(0,a.useState)([]),[D,E]=(0,a.useState)("Item 1"),[L,A]=(0,a.useState)(!1),[M,I]=(0,a.useState)(!1),[R,_]=(0,n.ok)();(0,a.useEffect)((()=>{(async()=>{j(!0);try{const e=(await l.A.get("".concat(i.T,"/api/v1/product/filter/all"))).data.data.reverse();console.log(e),t(e),x(e),j(!1)}catch(e){console.error("Error fetching data:",e),j(!1)}})()}),[]),(0,a.useEffect)((()=>{const e=parseInt(R.get("page")||"1",10);b(e)}),[R]),(0,a.useEffect)((()=>{C.length>0?(x(C),A(!1),console.log(C)):0===C.length&&M?(x([]),A(!0)):(x(e),A(!1))}),[C,M,e]);const F=N*v,B=F-v,q=s.slice(B,F),z=q.length>0?q:s.slice(0,v),{addItem:O}=(0,p._$)(),[U,W]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{let e=localStorage.getItem("ToastPop");setInterval(void(e||m.oR.warn("Please Note That Prices Are Subject to Change Without Prior Notice Due to The Fluctuation in Exchange Rate, Kindly Confirm Every Price at Readiness for Purchase",{position:"top-center",autoClose:2e4,className:"pop-up-message"},(localStorage.setItem("ToastPop",!0),void W(!1)))),6048e5)}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.mg,{children:[(0,r.jsx)("title",{children:"Shop - Tech Solutions, Digital"}),(0,r.jsx)("meta",{name:"robots",content:"index,follow"}),(0,r.jsx)("meta",{name:"description",content:"Shop through a wide selection of laptops, printers, office equipment, pos system, network devices products at Elonatech."}),(0,r.jsx)("link",{rel:"canonical",href:"/shop"}),(0,r.jsx)("meta",{name:"keywords",content:"printers, network devices, laptops, office equipment, pos system, Elonatech"})]}),(0,r.jsx)("div",{className:"container-fluid shop-products-section",children:(0,r.jsxs)("div",{className:"text-content",children:[(0,r.jsx)("h2",{children:"Shop Products"}),(0,r.jsx)("h5",{children:"Get what you need to run your business"}),(0,r.jsx)("p",{className:"lead",children:"Smart business people need quality and reliable hardware, software, service, and support for the day to day running of their businesses"})]})}),(0,r.jsx)("main",{className:"container-fluid custom-container",children:(0,r.jsxs)("div",{className:"row g-0",children:[(0,r.jsx)("div",{className:"col-md-9",children:(0,r.jsx)("section",{className:"ftco-section",id:"skills-section",children:(0,r.jsxs)("div",{className:"container custom-container",children:[(0,r.jsxs)("div",{className:"row justify-content-center pt-3 pb-4",children:[(0,r.jsx)("div",{className:"col-md-8 pt-4",children:(0,r.jsxs)("h6",{children:["SHOWING ",(0,r.jsx)("span",{className:"text-danger",children:N})," ","\u2013"," ",(0,r.jsx)("span",{className:"text-danger",children:N*v})," ","OF ",(0,r.jsx)("span",{className:"text-danger",children:e.length})," ","RESULTS"]})}),(0,r.jsx)("div",{className:"col-md-4 pt-3",children:(0,r.jsx)("input",{className:"form-control",type:"search",onChange:t=>{const s=t.target.value.toLowerCase();if(""===s)T([]),I(!1),A(!1);else{const t=e.filter((e=>e.name.toLowerCase().includes(s)));T(t),I(!0),0===t.length?A(!0):A(!1)}},placeholder:"Search","aria-label":"Search"})})]}),(0,r.jsx)("div",{className:"row g-1 progress-circle",children:g?(0,r.jsx)(o.A,{}):z.length>0?z.map((e=>{var t;return(0,r.jsx)("div",{className:"col-lg-3 mb-4",children:(0,r.jsxs)("div",{className:"mx-1 shadow-lg p-3 bg-body rounded showbutton",children:[(0,r.jsxs)(n.N_,{className:"text-decoration-none text-dark",to:"/product/".concat(e._id,"?fromPage=").concat(N),children:[(0,r.jsx)("div",{className:"text-center take",children:(0,r.jsx)(d.LazyLoadImage,{src:null===(t=e.images[0])||void 0===t?void 0:t.url,placeholderSrc:"https://res.cloudinary.com/elonatech/image/upload/v1710241889/loaderImage/blurred_o4delz.avif",className:"lazyload",width:"130",height:"130",alt:""})}),(0,r.jsxs)("h5",{className:"fw-normal pt-3 product-name",children:[e.name.slice(0,23),"..."]}),(0,r.jsx)("p",{className:"lead fs-6",children:e.category}),(0,r.jsx)("div",{className:"stars",style:{color:"black",marginBottom:"10px"},children:[...Array(5)].map(((e,t)=>(0,r.jsx)("i",{className:t<Math.floor(5)?"bi bi-star-fill":"bi bi-star",style:{color:"#f4be1d"}},t)))}),(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsx)("p",{className:"mt-2 px-1 text-danger",children:(0,r.jsxs)("strong",{children:["\u20a6 ",Number(e.price).toLocaleString(),".00"]})}),(0,r.jsx)("i",{className:"bi bi-cart p-1",style:{fontSize:"20px",cursor:"pointer"}})]})]}),(0,r.jsx)("div",{className:"d-grid gap-2",children:(0,r.jsx)("div",{className:"btn btn-outline add-to-cart",onClick:()=>O(e),children:(0,r.jsx)("h6",{className:"text-danger",children:"ADD TO CART"})})},e.id)]})},e.id)})):(0,r.jsx)("h4",{children:"No products match your search criteria."})}),(0,r.jsx)("div",{className:"mt-5",children:(0,r.jsx)(c.A,{totalPosts:s.length,itemsPerPage:v,maxPageNumberLimit:w,minPageNumberLimit:k,currentPage:N,id:!0,handleNextbtn:()=>{const e=N+1;b(e),_({page:e.toString()}),e>w&&(S(w+y),P(k+y))},handlePrevbtn:()=>{const e=N-1;b(e),_({page:e.toString()}),(e-1)%y==0&&(S(w-y),P(k-y))},paginate:e=>{b(e),_({page:e.toString()})}})})]})})}),(0,r.jsxs)("div",{class:"col-md-3 ",children:[(0,r.jsxs)("div",{style:{marginTop:"50px",paddingTop:"30px",paddingBottom:"30px",marginLeft:"15px"},children:[(0,r.jsx)("form",{style:{paddingTop:"20px",paddingBottom:"20px"},class:"d-flex "}),(0,r.jsx)("h4",{style:{marginTop:"-8px",marginBottom:"16px"},class:"fw-bold ",children:"Browse Categories"}),(0,r.jsxs)("ul",{className:"list-unstyled",children:[(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/shop",className:"item ".concat("Item 1"===D?"active-category":""),onClick:()=>{E("Item 1")},children:"All Products"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/computers",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"Computers"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/office-equipment",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"Office Equipment"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/pos-system",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"POS System"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/printers",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"Printers"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/network-devices",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"Network Devices"})})]})]}),(0,r.jsxs)("div",{style:{margin:"15px",width:"60%"},className:"filter-section p-2 rounded shadow-sm",children:[(0,r.jsx)("h4",{style:{marginTop:"-8px",marginBottom:"16px"},class:"fw-bold ",children:"Sort Products by"}),(0,r.jsx)(u,{setFilteredProducts:T})]})]})]})})]})}))},81207:()=>{}}]);
//# sourceMappingURL=4042.f8e46a7d.chunk.js.map