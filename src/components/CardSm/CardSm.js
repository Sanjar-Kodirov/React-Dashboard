import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PieChartCom from "../Charts/PieChart";
import AudienceAge from "../AudienceAge/AudienceAge";
const CardSm = ({children, cardTitle, img}) => {
  return (
    <div className="cardSm">
      <div className="cardLg">
        <div className="card-header">
          <div className="card-logo">
            <img src={img} alt="" />
            <h2>{cardTitle}</h2>
          </div>
          <a className="card-btn" href="#">
            See Detail <ArrowRightIcon />
          </a>
        </div>
        <div className="card-sm-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardSm;
