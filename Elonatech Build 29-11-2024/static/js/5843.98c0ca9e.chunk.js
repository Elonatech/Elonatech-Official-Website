"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5843],{74723:(e,t,s)=>{s.d(t,{T:()=>r});const r="https://elonatechapi-g419.onrender.com"},78696:(e,t,s)=>{s.d(t,{A:()=>a});var r=s(70579);const a=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{class:"loader"})})},42385:(e,t,s)=>{s.d(t,{A:()=>n});var r=s(35475),a=s(70579);const n=e=>{let{totalPosts:t,itemsPerPage:s,maxPageNumberLimit:n,minPageNumberLimit:c,currentPage:i,paginate:l,handleNextbtn:o,handlePrevbtn:d}=e;const[p,h]=(0,r.ok)(),m=[];for(let r=1;r<=Math.ceil(t/s);r++)m.push(r);const x=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},u=m.map((e=>e<n+1&&e>c?(0,a.jsx)("li",{className:"page-item "+(i===e?"active":""),children:(0,a.jsx)("a",{onClick:()=>(e=>{l(e),h({page:e.toString()}),x()})(e),className:"page-link v-cursor",children:e})},e):null));let g=null;m.length>n&&(g=(0,a.jsx)("li",{className:"page-link v-cursor",onClick:o,children:" \u2026 "}));let j=null;c>=1&&(j=(0,a.jsx)("li",{className:"page-link v-cursor",onClick:d,children:" \u2026 "}));return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{className:"pagination justify-content-center mb-5",children:[(0,a.jsx)("li",{className:"page-item "+(1===i?"disabled":""),children:(0,a.jsx)("a",{className:"page-link",onClick:()=>{i>1&&(d(),h({page:(i-1).toString()}),x())},children:"Prev"})}),j,u,g,(0,a.jsx)("li",{className:"page-item "+(i===m.length?"disabled":""),children:(0,a.jsx)("a",{className:"page-link",onClick:()=>{i<m.length&&(o(),h({page:(i+1).toString()}),x())},children:"Next"})})]})})}},45843:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var r=s(65043),a=s(35475),n=s(42385),c=s(74723),i=s(78696),l=s(77154),o=s(9634),d=s(38716),p=s(47503),h=(s(92342),s(49367)),m=s(44969),x=(s(15874),s(70579));const u=e=>{let{setFilteredProducts:t}=e;const[s,a]=(0,r.useState)({type:"",brand:"",portSpeed:"",price:[0,1e6]}),[n,i]=(0,r.useState)([]),[l,o]=(0,r.useState)(""),[d,p]=(0,r.useState)([0,1e6]),[h,u]=(0,r.useState)([0,1e6]);(0,r.useEffect)((()=>{fetch(`${c.T}/api/v1/product/filter?category=Network`).then((e=>e.json())).then((e=>{if(void 0!==e.minPrice&&void 0!==e.maxPrice){const t=e.minPrice,s=e.maxPrice;u([t,s]),p([t,s]),a((e=>({...e,price:[t,s]})))}t(e.data);const s=Array.from(new Set(e.data.map((e=>e.brand.toUpperCase().trim())))).sort(((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})));i(s)})).catch((e=>console.error("Error fetching initial data:",e)))}),[t]);const g=e=>{const{name:t,value:s,checked:r}=e.target;a((e=>{const a={...e,[t]:r?s:""};return j(a),a}))},j=e=>{let s=[];e.type&&s.push(`type=${e.type}`),e.brand&&s.push(`brand=${encodeURIComponent(e.brand)}`),e.portSpeed&&s.push(`portSpeed=${e.portSpeed.replace(/\D/g,"")}`),0===e.price[0]&&1e6===e.price[1]||(s.push(`minPrice=${e.price[0]}`),s.push(`maxPrice=${e.price[1]}`));const r=s.length>0?s.join("&"):"";fetch(`${c.T}/api/v1/product/filter?category=Network&${r}`).then((e=>e.json())).then((e=>{t(e.data)})).catch((e=>console.error("Error:",e)))},N=e=>e.toLocaleString(),v=(e,t)=>{const r=e.target.value.replace(/[^0-9]/g,""),n=[...s.price];n[t]=parseFloat(r)||0,a((e=>({...e,price:n})))};return(0,x.jsxs)("div",{children:[l&&(0,x.jsxs)("div",{className:"no-results-message",children:[(0,x.jsx)("p",{children:l}),(0,x.jsxs)("p",{children:["Go back to the ",(0,x.jsx)("a",{href:"/network-devices",children:"Network Devices page"})," ","to explore more amazing products."]})]}),(0,x.jsxs)("form",{children:[(0,x.jsxs)("div",{style:{boxShadow:"0px 1px 0px rgba(0, 0, 0, 0.1)"},className:"mb-3",children:[(0,x.jsx)("label",{className:"form-label",children:"Brand:"}),(0,x.jsx)("div",{style:{maxHeight:"120px",overflowY:"scroll"},children:n.length>0?n.map((e=>(0,x.jsxs)("div",{className:"form-check",children:[(0,x.jsx)("input",{type:"checkbox",name:"brand",value:e,onChange:g,checked:s.brand===e,className:"form-check-input"}),(0,x.jsx)("label",{className:"form-check-label",children:e})]},e))):(0,x.jsx)("p",{children:"No brands available"})})]}),(0,x.jsxs)("div",{className:"price-filter price-mobile",children:[(0,x.jsx)("label",{className:"form-label",children:"Filter by Price(\u20a6)"}),(0,x.jsx)(m.Ay,{className:"custom-slider",value:s.price,onChange:(e,t)=>{a((e=>({...e,price:t})))},min:d[0],max:d[1],step:5}),(0,x.jsxs)("div",{className:"price-range-values",children:[(0,x.jsx)("input",{style:{width:"50%",borderRadius:"5px"},type:"text",value:N(s.price[0]),onChange:e=>v(e,0),className:"price-input"}),(0,x.jsx)("span",{className:"separator",children:"-"}),(0,x.jsx)("input",{style:{width:"50%",borderRadius:"5px"},type:"text",value:N(s.price[1]),onChange:e=>v(e,1),className:"price-input"})]}),(0,x.jsxs)("div",{className:"expand",children:[(0,x.jsx)("button",{type:"button",onClick:()=>{j(s)},className:"apply-btn",style:{width:"100%"},children:"Apply Price Range"}),(0,x.jsx)("button",{type:"button",onClick:()=>{p(h);const e={...s,price:h};a(e),j(e)},className:"reset-btn",style:{width:"100%"},children:"Reset Price Range"})]})]})]}),(0,x.jsx)("style",{jsx:!0,children:"\n        .expand {\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin: 5px 0 0 -8px;\n        }\n        .shop-filter {\n          margin-bottom: 1rem;\n        }\n        .price-filter {\n          margin-top: 1rem;\n        }\n        .slider {\n          margin: 10px 0;\n        }\n        .price-range-values {\n          display: flex;\n          justify-content: space-between;\n        }\n        .apply-btn,\n        .reset-btn {\n          margin: 5px;\n          padding: 5px 10px;\n          cursor: pointer;\n          border: none;\n          border-radius: 5px;\n        }\n        .apply-btn {\n          background-color: rgb(52, 84, 140);\n          color: white;\n        }\n        .reset-btn {\n          background-color: rgb(220, 53, 69);\n          color: white;\n        }\n        .no-products-message {\n          color: red;\n          font-size: 18px;\n          margin-top: 20px;\n        }\n\n        @media (max-width: 767px) {\n          .price-mobile {\n            display: none;\n          }\n        }\n      "})]})},g=()=>{const[e,t]=(0,r.useState)({type:"",brand:"",portSpeed:"",price:[0,1e6]}),[s,g]=(0,r.useState)([]),[j,N]=(0,r.useState)([]),[v,b]=(0,r.useState)([0,1e6]),[y,f]=(0,r.useState)([0,1e6]);(0,r.useEffect)((()=>{fetch(`${c.T}/api/v1/product/filter?category=Network`).then((e=>e.json())).then((e=>{void 0!==e.minPrice&&void 0!==e.maxPrice&&(f([e.minPrice,e.maxPrice]),b([e.minPrice,e.maxPrice]),t((t=>({...t,price:[e.minPrice,e.maxPrice]}))));const s=[...e.data].reverse();g(s);const r=Array.from(new Set(e.data.map((e=>e.brand.toUpperCase().trim())))).sort(((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})));N(r)})).catch((e=>console.error("Error fetching initial data:",e)))}),[]);const w=e=>{let t=[];e.type&&t.push(`type=${e.type}`),e.brand&&t.push(`brand=${encodeURIComponent(e.brand)}`),e.portSpeed&&t.push(`portSpeed=${e.portSpeed.replace(/\D/g,"")}`),0===e.price[0]&&1e6===e.price[1]||(t.push(`minPrice=${e.price[0]}`),t.push(`maxPrice=${e.price[1]}`));const s=t.length>0?t.join("&"):"";fetch(`${c.T}/api/v1/product/filter?category=Network&${s}`).then((e=>e.json())).then((e=>{g(e.data)})).catch((e=>console.error("Error:",e)))},k=e=>e.toLocaleString(),S=(s,r)=>{const a=s.target.value.replace(/[^0-9]/g,""),n=[...e.price];n[r]=parseFloat(a)||0,t((e=>({...e,price:n})))},[P,C]=(0,r.useState)([]),[D,T]=(0,r.useState)([]),[E,$]=(0,r.useState)(!0),[R,A]=(0,a.ok)(),[L,I]=(0,r.useState)(1),[F]=(0,r.useState)(12),[M]=(0,r.useState)(4),[_,z]=(0,r.useState)(4),[O,U]=(0,r.useState)(0),[B,q]=(0,r.useState)("Item 6"),[G,H]=(0,r.useState)(!1);(0,r.useEffect)((()=>{(async()=>{try{const e=(await l.A.get(`${c.T}/api/v1/product/`)).data.getAllProducts.filter((e=>"Network"===e.category));C(e.reverse()),T(e),$(!1)}catch(e){console.error("Error fetching data:",e),$(!1)}})()}),[]),(0,r.useEffect)((()=>{const e=parseInt(R.get("page")||"1",10);I(e)}),[R]),(0,r.useEffect)((()=>{s.length>0?(T(s),H(!1)):0!==s.length||E||(T(P),H(!1))}),[s,E,P]);const W=L*F,K=W-F,Y=D.slice(K,W),J=Y.length>0?Y:D.slice(0,F),{addItem:Q}=(0,d._$)(),[V,X]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{localStorage.getItem("NetworkPopUp")||p.oR.warn("Please Note That Prices Are Subject to Change Without Prior Notice Due to The Fluctuation in Exchange Rate, Kindly Confirm Every Price at Readiness for Purchase",{position:"top-center",autoClose:2e4,className:"pop-up-message"},(localStorage.setItem("NetworkPopUp",!0),void X(!1)))}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(h.mg,{children:[(0,x.jsx)("title",{children:"Network Devices - Tech Solution, Digital Solution"}),(0,x.jsx)("meta",{name:"description",content:"Network Devices"}),(0,x.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/network-devices"})]}),(0,x.jsx)("div",{className:"container-fluid network-devices-section",children:(0,x.jsxs)("div",{className:"text-content",children:[(0,x.jsx)("h2",{children:"Network Devices"}),(0,x.jsx)("h5",{children:"Rely on Scalable and Reliable IT Infrastructure for Fast and Efficient Running of a Company\u2019s Business"}),(0,x.jsx)("p",{className:"lead",children:"Organization that uses more than one computer or software platform needs network hardware such as servers, routers, switches, etc. to connect & configure all the different systems together"})]})}),(0,x.jsx)("main",{className:"container-fluid custom-container",children:(0,x.jsxs)("div",{className:"row g-0",children:[(0,x.jsx)("div",{className:"col-md-9",children:(0,x.jsx)("section",{className:"ftco-section",id:"skills-section",children:(0,x.jsxs)("div",{className:"container custom-container",children:[(0,x.jsxs)("div",{className:"row justify-content-center pt-3 pb-4",children:[(0,x.jsx)("div",{className:"col-md-8 pt-4",children:(0,x.jsxs)("h6",{children:["SHOWING ",(0,x.jsx)("span",{className:"text-danger",children:L})," ","\u2013"," ",(0,x.jsx)("span",{className:"text-danger",children:L*F})," ","OF ",(0,x.jsx)("span",{className:"text-danger",children:D.length})," ","RESULTS"]})}),(0,x.jsx)("div",{className:"col-md-4 pt-3",children:(0,x.jsx)("input",{className:"form-control",type:"search",onChange:e=>{const t=e.target.value.toLowerCase();if(I(1),A({page:"1"}),""===t)g([]),H(!1);else{const e=P.filter((e=>e.name.toLowerCase().includes(t)));g(e),H(0===e.length)}},placeholder:"Search","aria-label":"Search"})})]}),(0,x.jsx)("div",{className:"row g-1 progress-circle",children:E?(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)("div",{className:"my-5 py-5",children:(0,x.jsx)(i.A,{})})})})})}):G?(0,x.jsx)("h4",{children:"No products match your search criteria."}):J.map((e=>{var t;return(0,x.jsx)("div",{className:"col-lg-3 mb-4",children:(0,x.jsxs)("div",{className:"mx-1 shadow-lg p-3 bg-body rounded showbutton",children:[(0,x.jsxs)(a.N_,{className:"text-decoration-none text-dark",to:`/product/${e.slug}/${e._id}?fromPage=${L}`,children:[(0,x.jsx)("div",{className:"text-center take",children:(0,x.jsx)(o.LazyLoadImage,{src:null===(t=e.images[0])||void 0===t?void 0:t.url,placeholderSrc:"https://res.cloudinary.com/elonatech/image/upload/v1710241889/loaderImage/blurred_o4delz.avif",className:"lazyload",width:"130",height:"130",alt:""})}),(0,x.jsxs)("h5",{className:"fw-normal pt-3 product-name",children:[e.name.slice(0,23),"..."]}),(0,x.jsx)("p",{className:"lead fs-6",children:"Network"===e.category?"Network Device":"Pos"===e.category?"POS":e.category}),(0,x.jsx)("div",{className:"stars",style:{color:"black",marginBottom:"10px"},children:[...Array(5)].map(((e,t)=>(0,x.jsx)("i",{className:t<Math.floor(5)?"bi bi-star-fill":"bi bi-star",style:{color:"#f4be1d"}},t)))}),(0,x.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,x.jsx)("p",{className:"mt-2 px-1 text-danger",children:(0,x.jsxs)("strong",{children:["\u20a6 ",Number(e.price).toLocaleString(),".00"]})}),(0,x.jsx)("i",{className:"bi bi-cart p-1",style:{fontSize:"20px",cursor:"pointer"}})]})]}),(0,x.jsx)("div",{className:"d-grid gap-2",children:(0,x.jsx)("div",{className:"btn btn-outline add-to-cart",onClick:()=>Q(e),children:(0,x.jsx)("h6",{className:"text-danger",children:"ADD TO CART"})})})]})},e.id)}))}),(0,x.jsx)("div",{className:"mt-5",children:(0,x.jsx)(n.A,{totalPosts:D.length,itemsPerPage:F,maxPageNumberLimit:_,minPageNumberLimit:O,currentPage:L,handleNextbtn:()=>{const e=L+1;I(e),A({page:e.toString()}),e>_&&(z(_+M),U(O+M))},handlePrevbtn:()=>{const e=L-1;I(e),A({page:e.toString()}),(e-1)%M===0&&(z(_-M),U(O-M))},paginate:e=>{I(e),A({page:e.toString()})}})})]})})}),(0,x.jsxs)("div",{className:"col-md-3 pad ",children:[(0,x.jsxs)("div",{className:"thix",children:[(0,x.jsxs)("div",{className:"browse",children:[(0,x.jsx)("form",{class:"d-flex"}),(0,x.jsx)("h4",{className:"fw-bold tyu",children:"Browse Categories"}),(0,x.jsxs)("ul",{className:"list-unstyled",children:[(0,x.jsx)("li",{children:(0,x.jsx)(a.N_,{to:"/shop",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"All Products"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.N_,{to:"/computers",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"Computers"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.N_,{to:"/office-equipment",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"Office Equipment"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.N_,{to:"/pos-system",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"POS System"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.N_,{to:"/printers",className:"text-dark",style:{textDecoration:"none"},onMouseEnter:e=>e.currentTarget.style.textDecoration="underline",onMouseLeave:e=>e.currentTarget.style.textDecoration="none",children:"Printers"})}),(0,x.jsx)("li",{children:(0,x.jsx)(a.N_,{to:"/network-devices",className:"item "+("Item 6"===B?"active-category":""),onClick:()=>{q("Item 6")},children:"Network Devices"})})]})]}),(0,x.jsxs)("div",{className:"price-filter price-mobile1",style:{marginTop:"0"},children:[(0,x.jsx)("h4",{style:{fontSize:"16px"},className:"fw-bold",children:"Filter by Price(\u20a6)"}),(0,x.jsx)(m.Ay,{className:"custom-slider slider",value:e.price,onChange:(e,s)=>{t((e=>({...e,price:s})))},min:v[0],max:v[1],step:5}),(0,x.jsxs)("div",{className:"price-range-values",children:[(0,x.jsx)("div",{children:(0,x.jsx)("input",{style:{width:"100%",borderRadius:"5px"},type:"text",value:k(e.price[0]),onChange:e=>S(e,0),className:"price-input"})}),(0,x.jsx)("span",{className:"separator",children:"-"}),(0,x.jsx)("div",{children:(0,x.jsx)("input",{style:{width:"100%",borderRadius:"5px"},type:"text",value:k(e.price[1]),onChange:e=>S(e,1),className:"price-input"})})]}),(0,x.jsxs)("div",{className:"expand btnd",children:[(0,x.jsx)("button",{type:"button",onClick:()=>{w(e)},className:"apply-btn",style:{width:"100%"},children:"Apply Price Range"}),(0,x.jsx)("button",{type:"button",onClick:()=>{b(y),t((e=>({...e,price:y}))),w(y)},className:"reset-btn",style:{width:"100%"},children:"Reset Price Range"})]})]})]}),(0,x.jsxs)("div",{style:{width:"60%",display:!0===E?"none":"block"},className:"filter-section pt-2 rounded shadow-sm",children:[(0,x.jsx)("h4",{style:{marginTop:"-8px"},className:"fw-bold shopyy",children:"Sort Products by"}),(0,x.jsx)(u,{setFilteredProducts:g})]})]})]})})]})}},15874:()=>{}}]);
//# sourceMappingURL=5843.98c0ca9e.chunk.js.map