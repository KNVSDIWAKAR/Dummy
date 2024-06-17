import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
  text: "Total: 9000+",
};

const options = {
  legend: {
    display: true,
    position: "right",
  },
};

const PieChart = () => {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
