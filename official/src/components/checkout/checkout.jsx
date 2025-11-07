import { useState } from "react";
import "./checkout.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Checkout = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // =======================================================
  const { items, cartTotal, emptyCart } = useCart();

  const mapItems = items.map((b) => {
    return `
	<table class="row row-9" align="center"  width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0; margin-top:0; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/121/groovepaper_1.png'); background-position: top center; background-repeat: repeat;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F5F5F5; color: #000000; width: 620px; margin: 0 auto;" width="620">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-right: 1px solid #DFDFDF; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#555555;font-family:Oxygen, Trebuchet MS, Helvetica, sans-serif;font-size:14px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
																	<p style="margin: 0; word-break: break-word;"><span style="color: #000000;">${b.name}</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-right: 1px solid #DFDFDF; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#555555;font-family:Oxygen, Trebuchet MS, Helvetica, sans-serif;font-size:14px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
																	<p style="margin: 0; word-break: break-word;"><strong>${b.quantity}</strong></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#555555;font-family:Oxygen, Trebuchet MS, Helvetica, sans-serif;font-size:14px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
																	<p style="margin: 0; word-break: break-word;"><strong>₦ ${b.price}</strong></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>

	`;
  }, ``);

  const itemsOrdered = mapItems.join("").toString();

  let dateNow = new Date().toLocaleDateString();

  // ======================
  let navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonDisabled(true);
      const newData = {
        firstname,
        lastname,
        company,
        email,
        number,
        address,
        state,
        postal,
        notes,
        itemsOrdered,
        cartTotal,
        dateNow
      };

      const response = await axios.post(
        `${BASEURL}/api/v1/email/checkout`,
        newData,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Order Successfully Sent!!!", { toastId: response.data });
      navigate("/thank-you");
      emptyCart();
    } catch (error) {
      toast.error(error.response.data, { toastId: error.response.data });
      setButtonDisabled(false);
    }
  };

  // ========================================================
  return (
    <>
      <Helmet>
        <title>Checkout - Tech Solution, Digital Solution</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex" />
      </Helmet>

      {/*================================================================================================================  */}
	  <div class="container-fluid checkout-section">
  <div class="text-content">
    <h2>Checkout</h2>
    <h5></h5>
    <p class="lead"></p>
  </div>
</div>
      {/*================================================================================================================  */}
      <div class="untree_co-section" style={{ background: "#eff2f1" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
              <h2 class="h3 mb-3 text-black fw-bold">Billing Details</h2>
              <div class="p-3 p-lg-5 border bg-white">
                {/* ======================================================    Billing Details   ======================================================================== */}

                <div class="form-group row mt-3">
                  <div class="col-md-6 mb-2">
                    <label for="c_fname" class="text-black">
                      First Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setFirstname(e.target.value)}
                      id="c_fname"
                      name="c_fname"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_lname" class="text-black">
                      Last Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setLastname(e.target.value)}
                      id="c_lname"
                      name="c_lname"
                    />
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <div class="col-md-12">
                    <label for="c_email_address" class="text-black">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_email_address"
                      onChange={(e) => setEmail(e.target.value)}
                      name="c_email_address"
                    />
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <div class="col-md-12">
                    <label for="c_address" class="text-black">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_address"
                      onChange={(e) => setAddress(e.target.value)}
                      name="c_address"
                      placeholder="Street address"
                    />
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <div class="col-md-6">
                    <label for="c_state_country" class="text-black">
                      State / Country <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_state_country"
                      onChange={(e) => setState(e.target.value)}
                      name="c_state_country"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_postal_zip" class="text-black">
                      Posta / Zip <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_postal_zip"
                      onChange={(e) => setPostal(e.target.value)}
                      name="c_postal_zip"
                    />
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <div class="col-md-6">
                    <label for="c_companyname" class="text-black">
                      Company Name{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setCompany(e.target.value)}
                      id="c_companyname"
                      name="c_companyname"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_phone" class="text-black">
                      Phone <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_phone"
                      name="c_phone"
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div class="form-group mt-3">
                  <label for="c_order_notes" class="text-black">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    onChange={(e) => setNotes(e.target.value)}
                    class="form-control"
                    placeholder="Write your notes here..."
                  ></textarea>
                </div>
              </div>
            </div>
            {/* ======================================================   coupon   ======================================================================== */}
            <div class="col-md-6">
              <div class="row mb-5">
                <div class="col-md-12">
                  <h2 class="h3 mb-3 text-black fw-bold">Coupon Code</h2>
                  <div class="p-3 p-lg-5 border bg-white">
                    <label for="c_code" class="text-black mb-3">
                      Enter your coupon code if you have one
                    </label>
                    <div class="input-group w-75 couponcode-wrap">
                      <input
                        type="text"
                        class="form-control me-2"
                        id="c_code"
                        placeholder="Coupon Code"
                        aria-label="Coupon Code"
                        aria-describedby="button-addon2"
                      />
                      <div class="input-group-append">
                        <Link
                          to={"/checkout"}
                          class="btn btn-dark cart-btn rmFocus   py- btn-block"
                        >
                          Apply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================================     Your Order        ======================================================================== */}
              <div class="row mb-5">
                <div class="col-md-12">
                  <h2 class="h3 mb-3 text-black fw-bold">Your Order</h2>
                  <div class="p-3 p-lg-5 border bg-white">
                    <table class="table  table-secondary  site-block-order-table mb-5">
                      <thead>
                        <th scope="col">Product</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        {items.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className=" border-dark">
                                {item.name.slice(0, 23)}...
                                <strong class="mx-2">x</strong>{" "}
                                <span className="text-danger">
                                  {item.quantity}
                                </span>
                              </td>
                              <td className="border-dark">
                                ₦{item.price * item.quantity}
                              </td>
                            </tr>
                          );
                        })}
                        <tr class="table-dark">
                          <td class="text-black font-weight-bold table-dark">
                            <strong className="text-white">Order Total</strong>
                          </td>
                          <td class="text-black font-weight-bold table-dark">
                            <strong className="text-white">₦{cartTotal}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="row">
                      <div class="col-md-12">
                        <button
                          class="btn btn-dark cart-btn rmFocus  btn-lg py-3 btn-block"
                          disabled={buttonDisabled}
                          onClick={handleSubmit}
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;