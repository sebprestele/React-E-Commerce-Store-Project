import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBullseye, FaSpinner } from "react-icons/fa";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";

import commerce from "assets/lib/commerce";
import { RootState } from "Redux/Reducers/rootReducer";
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token";
import { LineItem } from "@chec/commerce.js/types/line-item";
import { useState } from "react";

export default function PaymentForm() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { checkoutToken }: CheckoutToken = useSelector(
    (state: RootState) => state.checkoutReducer
  );

  const navigate = useNavigate();

  const {
    firstName,
    lastName,
    address,
    city,
    region,
    country,
    postCode,
    email,
  } = useSelector((state: RootState) => state.userDataReducer);

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLIC_KEY ?? "Public key not set"
  );

  const handleSubmit = async (
    event: React.SyntheticEvent,
    elements: any,
    stripe: Stripe
  ) => {
    setIsLoading(true);
    event.preventDefault();

    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
      };

      const customer = {
        firstname: firstName,
        lastname: lastName,
        email: email,
      };

      const billing_details = {
        email: email,
        address: {
          city: city,
          country: country,
          line1: address,
          line2: address,
          postal_code: postCode,
          state: region,
        },
      };
      const payment = {
        gateway: "stripe",
        stripe: {
          payment_method_id: paymentMethod.id,
        },
      };

      const order = await commerce.checkout.capture(checkoutToken.id, {
        orderData,
        checkoutToken,
        payment,
        customer,
        billing_details,
      });
      setIsLoading(false);
      console.log("success");
      console.log(order);
      navigate("/checkout/success");
      commerce.cart.delete().then((json) => console.log(json));
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {checkoutToken.line_items.map((product: LineItem) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {checkoutToken.live.total.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              onSubmit={(event: React.SyntheticEvent) =>
                handleSubmit(event, elements, stripe)
              }
            >
              <CardElement />
              <br />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                  {isLoading && <FaSpinner className="spinner" />}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
}
