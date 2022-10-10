import AccessContainer from "../components/AccessContainer";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import "./style.scss";

const Home = () => {
  return (
    <AccessContainer
      header={<HomeHeader />}
      main={<HomeMain />}
      page="page-home"
    />
  );
};
export default Home;
