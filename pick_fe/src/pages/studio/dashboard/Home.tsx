// import { ReservationTab } from '../../../components'
import { WelcomeBlock } from "../../../components/blocks";

const Home = () => {
  document.title = "Studio Dashboard - Pickastudio";

  return (
    <div>
      <WelcomeBlock />
      {/* <ReservationTab/> */}
    </div>
  );
};

export default Home;
