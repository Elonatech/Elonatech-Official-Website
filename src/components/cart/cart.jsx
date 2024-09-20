import './cart.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { Helmet } from 'react-helmet-async';


const Cart = () => {
    const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, itemQuantity  ,removeItem, emptyCart } = useCart();

    if (isEmpty) {
        return <CartEmpty/>
    }


    const navigate = useNavigate();
    
    return (
    <>

<Helmet>
       <title>Cart - Tech Solution, Digital Solution</title>
       <meta name="description" content="cart" />
       <link rel="canonical" href="https://elonatech.com.ng/cart" />
</Helmet>

{/*======================================================== header =====================================*/}
<div class="container-fluid cart-section">
  <div class="text-content">
    <h2>Cart</h2>
    <h5></h5>
    <p class="lead"></p>
  </div>
</div>

{/* ==================================================================================================== */}
<div class="untree_co-section before-footer-section" style={{background:"#eff2f1"}}>
            <div class="container">
              <div class="row mb-5">
                <form class="col-md-12" method="post">
                  <div class="site-blocks-table">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th class="product-thumbnail">Product</th>
                          <th class="product-name">Name</th>
                          <th class="product-price">Price</th>
                          <th class="product-quantity">
                            Quantity
                            </th>
                          <th class="product-total">Total</th>
                          <th class="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) =>{
                            return (
                        <tr key={index}>
                          <td class="product-thumbnail">
                            <img src={item.images[0].url}  alt="Image" class="img-fluid"/>
                          </td>
                          <td class="product-name">
                            <h2 class="h5 text-black">{item.name.slice(0,12)}...</h2>
                          </td>
                          <td>₦{item.price}</td>
                          <td>
                            <div class="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth:"120px"}} >
                              <div class="input-group-prepend">
                                <button class="btn btn-outline-black decrease border-0 rmFocus  fw-bold"    onClick={() => updateItemQuantity(item.id, item.quantity - 1)} type="button">&minus;</button>
                              </div>
                              <input type="text" class="form-control text-center quantity-amount" value={item.quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                              <div class="input-group-append">
                                <button class="btn btn-outline-black increase border-0 rmFocus  fw-bold"   onClick={() => updateItemQuantity(item.id, item.quantity + 1)}  type="button">+</button>
                              </div>
                            </div>
                          </td>
                          <td>₦{item.price * item.quantity}</td>
                          <td>
                          <i class="bi bi-trash3-fill text-danger  fs-4"  style={{cursor:"pointer"}} onClick={() => removeItem(item.id)} ></i>
                          </td>
                        </tr>

                            )
                        })}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
 {/* ==================================================================================================== */}       
              <div class="row">
                <div class="col-md-6">
                  <div class="row mb-5">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <button class="btn btn-outline-dark rmFocus cart-btn btn-sm btn-block" onClick={() => navigate(-2)}>Continue Shopping</button>
                    </div>
                    <div class="col-md-6">
                      <button class="btn btn-danger rmFocus red-cart-btn btn-sm btn-block" onClick={() => emptyCart()}>Clear Cart</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label class="text-black h4" for="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div class="col-md-8 mb-3 mb-md-0">
                      <input type="text" class="form-control py-3" id="coupon" placeholder="Coupon Code"/>
                    </div>
                    <div class="col-md-4">
                      <button class="btn cart-btn rmFocus btn-dark mb-3">Apply Coupon</button>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pl-5">
                  <div class="row justify-content-end">
                    <div class="col-md-7">
                      <div class="row">
                        <div class="col-md-12 text-right border-bottom mb-5">
                          <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <span class="text-black">Subtotal</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black"> ₦{cartTotal}</strong>
                        </div>
                      </div>
                      <div class="row mb-5">
                        <div class="col-md-6">
                          <span class="text-black">Total</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black">₦{cartTotal}</strong>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <Link to={'/checkout'} class="btn btn-dark cart-btn rmFocus  btn-lg py-3 btn-block">Proceed To Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
{/* ======================================================================================================= */}
 </>
    );
}

export default Cart;


const CartEmpty = () =>{
    return(
     <>
{/* ====================================================================================================== */}
<div class="container-fluid  py-5 " style={{height:"500px" ,background:"#11253d" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1710840087/productHeaderPage/shopping_cart_page_q2r8rq.jpg)`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Cart</h2>
   <h5 class=" mt-4 text-white text-center"></h5>
   <p class="lead text-white text-center"></p>
 </div>
</div>
{/* ===================================================================== */}
   <div class="untree_co-section" style={{background:"#eff2f1"}}>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12 text-center pt-5">
          <span class="display-3 thankyou-icon text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
             <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
           </svg>
          </span>
          <h2 class="display-3 text-dark fw-bold">Cart is Empty!</h2>
          <h5 class=" mb-5">You Currently Have Zero Order</h5>
          <p><a href="/shop" class=" cart-btn  text-decoration-none text-white">Back to shop</a></p>
        </div>
      </div>
    </div>
  </div>

     </>
    )
 }