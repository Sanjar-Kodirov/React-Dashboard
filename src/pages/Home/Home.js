import React, { useContext } from "react";
import { Context } from "../../context";
import FeaturedInfo from "../../components/Featuredinfo/FeaturedInfo";
import CardLg from "../../components/CardLg/CardLg";
import CardSm from "../../components/CardSm/CardSm";
import PieChartCom from '../../components/Charts/PieChart';
import AudienceAge from '../../components/AudienceAge/AudienceAge'
import TopChannels from "../../components/TopChannels/TopChannels";
const Home = () => {
  const { reachChart } = useContext(Context);
  return (
    <div className="home">
      <FeaturedInfo className="d" data={reachChart} />
      <CardLg img="assets/icons/Demographic.png" cardTitle="Demographic">
        <PieChartCom />
        <AudienceAge title="Audience Age" />
      </CardLg>
      <CardSm img="assets/icons/TopChannels.png" cardTitle="Top Channels">
        <TopChannels />
      </CardSm>
    </div>
  );
};

export default Home;
