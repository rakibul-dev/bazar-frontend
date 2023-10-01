import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import AdBanner from "../../components/PageComponents/CustomerPages/HomePageComponents/Banner/AdBanner";
import BigDiscounts from "../../components/PageComponents/CustomerPages/HomePageComponents/BigDiscounts/BigDiscounts";
import FlashDeals from "../../components/PageComponents/CustomerPages/HomePageComponents/FlashDeals/FlashDeals";
const Home = () => {
  return (
    <div>
      <AdBanner />

      <Container maxWidth="lg">
        <Box
          display="flex"
          gap={5}
          flexDirection="column"
          sx={{
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <FlashDeals />
          <BigDiscounts />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
