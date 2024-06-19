import React from "react";
import Map from "./Map";
import "./HomePage.css";
import Calender from "./Calender";
import Graph from "./Graph";
import PieChart from "./PieChart";
import GlobalProgressChart from "./GlobalProgressChart";
import Dashboard from "./Dashboard";

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
            <GlobalProgressChart />
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
          <div className="main_part">
            <div className="part_1">
              <p className="text3">Profit (Project wise distribution)</p>
            </div>
            <div className="part_2">
              <div className="buttons_pie_chart">
                <button className="All_time">All time</button>
                <button className="Month">Month</button>
                <button className="Year">Year</button>
              </div>
            </div>
          </div>
          <PieChart />
        </div>
        <div className="L2Part2">
          <p className="text3">vNS Funds</p>
          <Dashboard />
        </div>
      </div>
      <div className="Layer3">
        <div className="L3Part1">
          <p className="text3">Total Projects</p>
        </div>
        <div className="L3Part2">
          <p className="text3">Today's Roster</p>
          <div className="L3Part21">
            <div className="L3Part22">
              <div className="L3Part23">
                <div className="L3Part25">
                  Fault : 221344ku4 (Chennai South) - Due Today
                </div>
                <div className="L3Part26">
                  Faults completion issued. Approval Pending.
                </div>
              </div>
              <div className="L3Part24">Go to action</div>
            </div>

            <div className="L3Part21">
              <div className="L3Part22">
                <div className="L3Part23">
                  <div className="L3Part25">
                    Project North East starts today!{" "}
                  </div>
                  <div className="L3Part26">
                    Project approval from the CEO pending.
                  </div>
                </div>
                <div className="L3Part24">Go to action</div>
              </div>
            </div>

            <div className="L3Part21">
              <div className="L3Part22">
                <div className="L3Part23">
                  <div className="L3Part25">
                    Fault : 221344ku4 (Chennai South) - Due Today
                  </div>
                  <div className="L3Part26">
                    Faults completion issued. Approval Pending.
                  </div>
                </div>
                <div className="L3Part24">Go to action</div>
              </div>
            </div>
          </div>
        </div>
        <div className="L3Part3">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default homepage;
