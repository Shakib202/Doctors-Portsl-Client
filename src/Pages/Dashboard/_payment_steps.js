/*
* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* client side
* 1. install stripe react stripe js(google => React stripe js)(cmd => npm install --save @stripe/react-stripe-js @stripe/stripe-js)
* 2. open stripe account on stripe website (google => https://stripe.com/)
* 3. get publishable key pk_ (google => https://stripe.com/ => dashboard => developers => API keys)
* 4. Create Elements wrapper using publishable key (<Elements stripe={stripePromise}><CheckoutForm /></Elements>)
* 5. Create Checkout Form using Card element, useStripe, useElements
* 6. get card elements info(credit card info)
* 7. get credit card  info/error + display card error (if any)
* { (google => react stripe js (github-repo))( for example go to github repo (https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js))}
* -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* server side
* 8. for server side install (cmd => npm install --save stripe) (google => stripe test cards => Payments => {(left-side) Online payments = Quickstart}/(url => https://stripe.com/docs/payments/quickstart)
* 9. get client secret from backend via payment intent post api
* 10. store client secret on the client side
* -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/