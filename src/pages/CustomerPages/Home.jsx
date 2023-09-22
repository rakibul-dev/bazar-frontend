import CustomerAppBar from "../../components/CommonComponents/AppBar/AppBar";
import AdBanner from "../../components/PageComponents/CustomerPages/HomePageComponents/Banner/AdBanner";
import FlashDeals from "../../components/PageComponents/CustomerPages/HomePageComponents/FlashDeals/FlashDeals";
const Home = () => {
  return (
    <div>
      <CustomerAppBar />
      <AdBanner />
      <FlashDeals />
    </div>
  );
};

export default Home;
