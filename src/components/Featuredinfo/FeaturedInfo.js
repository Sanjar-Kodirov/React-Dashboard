import React from "react";
import Tabs from "../Tabs/Tabs";
import HomePageChart from "../Charts/HomeChart/HomePageChart";
const FeaturedInfo = ({ data }) => {

  const totalReach = data.map(uv => {
    return uv.uv;
  }).reduce((prev, curr)=> {
    return prev + curr
  })
  const totalPaidReach = data.map(pv => {
    return pv.pv;
  }).reduce((prev, curr)=> {
    return prev + curr
  })
  const totalOrganicReach = data.map(dv => {
    return dv.dv;
  }).reduce((prev, curr)=> {
    return prev + curr
  })
  return (
    <div className="featured-main">
      <div className="featured">
        <div className="featured-cards">
          <div className="featured-card">
            <img src="assets/chartIcons/TotalReach.png" alt="fdfdf" />
            <div className="featured-card-item">
              <h4>Total Reach</h4>
              <h1>{Math.floor(totalReach / 100)}K</h1>
            </div>
          </div>
          <div className="featured-card">
            <img src="assets/chartIcons/TotalReach.png" alt="fdfdf" />
            <div className="featured-card-item">
              <h4>Total Paid Reach</h4>
              <h1>{Math.floor(totalPaidReach / 100)}K</h1>
            </div>
          </div>
          <div className="featured-card">
            <img src="assets/chartIcons/TotalReach.png" alt="fdfdf" />
            <div className="featured-card-item">
              <h4>Total Organic Reach</h4>
              <h1>{Math.floor(totalOrganicReach / 100)}K</h1>
            </div>
          </div>
        </div>
        <Tabs />
      </div>
      <HomePageChart data={data} />
    </div>
  );
};

export default FeaturedInfo;
