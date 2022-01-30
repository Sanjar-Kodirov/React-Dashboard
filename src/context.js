import React, { useState,  createContext } from "react";
import { reachChartData } from "./chartDatas";
import { rows, TopChannels } from "./audienceData";
const Context = createContext();
const ContextProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
  // charts data
  const [reachChart, setReachChart] = useState(reachChartData)
  const [audienceChartData, setAudienceChartData] = useState(rows)
  const [ topChannelsdata, setTopChannelsdata] = useState(TopChannels)
  const name = "TEst one";
  return (
    <Context.Provider value={{ name, reachChart, setReachChart , audienceChartData, topChannelsdata, showSidebar, setShowSidebar }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
