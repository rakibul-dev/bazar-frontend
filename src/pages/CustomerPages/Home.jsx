import AdBanner from "../../components/PageComponents/CustomerPages/HomePageComponents/Banner/AdBanner";
import BigDiscounts from "../../components/PageComponents/CustomerPages/HomePageComponents/BigDiscounts/BigDiscounts";
import FlashDeals from "../../components/PageComponents/CustomerPages/HomePageComponents/FlashDeals/FlashDeals";
const Home = () => {
  return (
    <div>
      <AdBanner />
      <FlashDeals />
      <BigDiscounts />
    </div>
  );
};

export default Home;
