import AccessContainer from "../AccessContainer";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import "./style.scss";

const Home = () => {
  return <AccessContainer header={<HomeHeader />} main={<HomeMain />} />;
};
export default Home;
