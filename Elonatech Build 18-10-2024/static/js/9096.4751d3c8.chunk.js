"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9096],{99096:(s,t,e)=>{e.r(t),e.d(t,{default:()=>a});var c=e(73216),l=e(35475),n=e(38716),r=e(81802),i=e(70579);const a=()=>{const{isEmpty:s,totalUniqueItems:t,items:e,totalItems:a,cartTotal:o,updateItemQuantity:h,itemQuantity:x,removeItem:j,emptyCart:u}=(0,n._$)();if(s)return(0,i.jsx)(d,{});const b=(0,c.Zp)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.mg,{children:[(0,i.jsx)("title",{children:"Cart - Tech Solution, Digital Solution"}),(0,i.jsx)("meta",{name:"description",content:"cart"}),(0,i.jsx)("link",{rel:"canonical",href:"https://elonatech.com.ng/cart"})]}),(0,i.jsx)("div",{class:"container-fluid cart-section",children:(0,i.jsxs)("div",{class:"text-content",children:[(0,i.jsx)("h2",{children:"Cart"}),(0,i.jsx)("h5",{}),(0,i.jsx)("p",{class:"lead"})]})}),(0,i.jsx)("div",{class:"untree_co-section before-footer-section",style:{background:"#eff2f1"},children:(0,i.jsxs)("div",{class:"container",children:[(0,i.jsx)("div",{class:"row mb-5",children:(0,i.jsx)("form",{class:"col-md-12",method:"post",children:(0,i.jsx)("div",{class:"site-blocks-table",children:(0,i.jsxs)("table",{class:"table table-hover",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{class:"product-thumbnail",children:"Product"}),(0,i.jsx)("th",{class:"product-name",children:"Name"}),(0,i.jsx)("th",{class:"product-price",children:"Price"}),(0,i.jsx)("th",{class:"product-quantity",children:"Quantity"}),(0,i.jsx)("th",{class:"product-total",children:"Total"}),(0,i.jsx)("th",{class:"product-remove",children:"Remove"})]})}),(0,i.jsx)("tbody",{children:e.map(((s,t)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{class:"product-thumbnail",children:(0,i.jsx)("img",{src:s.images[0].url,alt:"Image",class:"img-fluid"})}),(0,i.jsx)("td",{class:"product-name",children:(0,i.jsxs)("h2",{class:"h5 text-black",children:[s.name.slice(0,12),"..."]})}),(0,i.jsxs)("td",{children:["\u20a6",s.price]}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{class:"input-group mb-3 d-flex align-items-center quantity-container",style:{maxWidth:"120px"},children:[(0,i.jsx)("div",{class:"input-group-prepend",children:(0,i.jsx)("button",{class:"btn btn-outline-black decrease border-0 rmFocus  fw-bold",onClick:()=>h(s.id,s.quantity-1),type:"button",children:"\u2212"})}),(0,i.jsx)("input",{type:"text",class:"form-control text-center quantity-amount",value:s.quantity,placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1"}),(0,i.jsx)("div",{class:"input-group-append",children:(0,i.jsx)("button",{class:"btn btn-outline-black increase border-0 rmFocus  fw-bold",onClick:()=>h(s.id,s.quantity+1),type:"button",children:"+"})})]})}),(0,i.jsxs)("td",{children:["\u20a6",s.price*s.quantity]}),(0,i.jsx)("td",{children:(0,i.jsx)("i",{class:"bi bi-trash3-fill text-danger  fs-4",style:{cursor:"pointer"},onClick:()=>j(s.id)})})]},t)))})]})})})}),(0,i.jsxs)("div",{class:"row",children:[(0,i.jsxs)("div",{class:"col-md-6",children:[(0,i.jsxs)("div",{class:"row mb-5",children:[(0,i.jsx)("div",{class:"col-md-6 mb-3 mb-md-0",children:(0,i.jsx)("button",{class:"btn btn-outline-dark rmFocus cart-btn btn-sm btn-block",onClick:()=>b(-2),children:"Continue Shopping"})}),(0,i.jsx)("div",{class:"col-md-6",children:(0,i.jsx)("button",{class:"btn btn-danger rmFocus red-cart-btn btn-sm btn-block",onClick:()=>u(),children:"Clear Cart"})})]}),(0,i.jsxs)("div",{class:"row",children:[(0,i.jsxs)("div",{class:"col-md-12",children:[(0,i.jsx)("label",{class:"text-black h4",for:"coupon",children:"Coupon"}),(0,i.jsx)("p",{children:"Enter your coupon code if you have one."})]}),(0,i.jsx)("div",{class:"col-md-8 mb-3 mb-md-0",children:(0,i.jsx)("input",{type:"text",class:"form-control py-3",id:"coupon",placeholder:"Coupon Code"})}),(0,i.jsx)("div",{class:"col-md-4",children:(0,i.jsx)("button",{class:"btn cart-btn rmFocus btn-dark mb-3",children:"Apply Coupon"})})]})]}),(0,i.jsx)("div",{class:"col-md-6 pl-5",children:(0,i.jsx)("div",{class:"row justify-content-end",children:(0,i.jsxs)("div",{class:"col-md-7",children:[(0,i.jsx)("div",{class:"row",children:(0,i.jsx)("div",{class:"col-md-12 text-right border-bottom mb-5",children:(0,i.jsx)("h3",{class:"text-black h4 text-uppercase",children:"Cart Totals"})})}),(0,i.jsxs)("div",{class:"row mb-3",children:[(0,i.jsx)("div",{class:"col-md-6",children:(0,i.jsx)("span",{class:"text-black",children:"Subtotal"})}),(0,i.jsx)("div",{class:"col-md-6 text-right",children:(0,i.jsxs)("strong",{class:"text-black",children:[" \u20a6",o]})})]}),(0,i.jsxs)("div",{class:"row mb-5",children:[(0,i.jsx)("div",{class:"col-md-6",children:(0,i.jsx)("span",{class:"text-black",children:"Total"})}),(0,i.jsx)("div",{class:"col-md-6 text-right",children:(0,i.jsxs)("strong",{class:"text-black",children:["\u20a6",o]})})]}),(0,i.jsx)("div",{class:"row",children:(0,i.jsx)("div",{class:"col-md-12",children:(0,i.jsx)(l.N_,{to:"/checkout",class:"btn btn-dark cart-btn rmFocus  btn-lg py-3 btn-block",children:"Proceed To Checkout"})})})]})})})]})]})})]})},d=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{class:"container-fluid  py-5 ",style:{height:"500px",background:"#11253d",backgroundImage:"linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1710840087/productHeaderPage/shopping_cart_page_q2r8rq.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"},children:(0,i.jsxs)("div",{class:"py-5 mt-5 ",children:[(0,i.jsx)("h2",{class:" mt-5 text-white text-center",children:"Cart"}),(0,i.jsx)("h5",{class:" mt-4 text-white text-center"}),(0,i.jsx)("p",{class:"lead text-white text-center"})]})}),(0,i.jsx)("div",{class:"untree_co-section",style:{background:"#eff2f1"},children:(0,i.jsx)("div",{class:"container py-5",children:(0,i.jsx)("div",{class:"row",children:(0,i.jsxs)("div",{class:"col-md-12 text-center pt-5",children:[(0,i.jsx)("span",{class:"display-3 thankyou-icon text-dark",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",class:"bi bi-cart-x",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"}),(0,i.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]})}),(0,i.jsx)("h2",{class:"display-3 text-dark fw-bold",children:"Cart is Empty!"}),(0,i.jsx)("h5",{class:" mb-5",children:"You Currently Have Zero Order"}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"/shop",class:" cart-btn  text-decoration-none text-white",children:"Back to shop"})})]})})})})]})}}]);
//# sourceMappingURL=9096.4751d3c8.chunk.js.map