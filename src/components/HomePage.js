import React from "react";
import Map from "./Map";
import "./HomePage.css";
import Calender from "./Calender";
import Graph from "./Graph";
import PieChart from "./PieChart";

const homepage = () => {
  return (
    <div className="HomePageContainer">
      <div className="Layer1">
        <div className="L1Part1">
          <div className="L1Part1-1">
            <p className="text1">Total Net worth</p>
            <p className="text2">$ 332 219</p>
          </div>
          <div className="L1Part1-2">
            <p className="text1">Daily Profits</p>
            <p className="text2">$ 102.33</p>
          </div>
          <div className="L1Part1-3">
            <p className="text1">Total Employees</p>
            <p className="text2">20</p>
          </div>
          <div className="L1Part1-4">
            <p className="text1">Total no. of faults</p>
            <p className="text2">286</p>
          </div>
        </div>
        <div className="L1Part2">
          <div className="L1Part2-1">
            <p className="text3">Global Progress</p>
          </div>
        </div>
        <div className="L1Part3">
          <div className="L1Part3-1">
            <p className="text3">Global Presence</p>
            <Map />
          </div>
          <div className="L1Part3-2">{""}</div>
        </div>
      </div>
      <div className="Layer2">
        <div className="L2Part1">
          <p className="text3">Profit (Project wise distribution)</p>
          {/* <PieChart /> */}
        </div>
        <div className="L2Part2">
          <p className="text3">vNS Funds</p>
        </div>
      </div>
      <div className="Layer3">
        <div className="L3Part1">
          <p className="text3">Total Projects</p>
        </div>
        <div className="L3Part2">
          <p className="text3">Today's Roster</p>
        </div>
        <div className="L3Part3">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default homepage;
