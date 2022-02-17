import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";

import Navigation from "Components/Navigation/Navigation";
import Footer from "Components/Footer/Footer";
import { Button } from "@mui/material";

const theme = createTheme();

function Confirmation() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Navigation />
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Success
          </Typography>

          <>
            <div>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                We have emailed your order confirmation, and will send you an
                update when your order has shipped.
              </Typography>
            </div>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, ml: 1 }}
            >
              Continue Shopping
            </Button>
          </>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Confirmation;
