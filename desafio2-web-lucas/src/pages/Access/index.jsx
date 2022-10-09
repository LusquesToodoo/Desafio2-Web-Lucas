import AccessContainer from "./components/AccessContainer";
import HomeHeader from "./components/Home/HomeHeader";
import HomeMain from "./components/Home/HomeMain";
import "./style.scss";

const Home = () => {
  return <AccessContainer header={<HomeHeader />} main={<HomeMain />} />;
};
export default Home;
