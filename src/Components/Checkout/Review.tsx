//@ts-nocheck
import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { RootState } from "Redux/Reducers/rootReducer";

export default function Review() {
  const { checkoutToken } = useSelector(
    (state: RootState) => state.checkoutReducer
  );
  const { firstName, lastName, address, city, country, postCode, email } =
    useSelector((state: RootState) => state.userDataReducer);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {checkoutToken.line_items.map((product) => (
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
          <Typography gutterBottom>
            <p>{email}</p>
            <p>{address}</p>
            <p>
              {postCode} {city}
            </p>
            <p>{country}</p>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
