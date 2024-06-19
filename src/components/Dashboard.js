import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import Calender from './Calender';
import './Dashboard.css';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const Dashboard = () => {
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Funds Allocation',
            data: [12, 19, 3, 5, 2, 3, 9],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)'
        }]
    };

    const lineOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const renderMiniChart = (data) => {
        return (
            <div className="mini-chart">
                <Line data={data} options={lineOptions} />
            </div>
        );
    };

    return (
        <div className="dashboard">
            <div className="funds-info">
                <h2>vNS Funds</h2>
                <p>Total funds allocated: <strong>$32,500.50</strong> | Funds remaining: <strong>$10,960</strong></p>
                <Line data={lineData} options={lineOptions} />
            </div>
            <div className="locations">
                <div className="location">
                    <div className="circle">63</div>
                    {/* {renderMiniChart(lineData)} */}
                    <div className="label">Chennai South</div>
                </div>
                <div className="location">
                    <div className="circle">12</div>
                    {/* {renderMiniChart(lineData)} */}
                    <div className="label">Chennai Central</div>
                </div>
                <div className="location">
                    <div className="circle">90</div>
                    {/* {renderMiniChart(lineData)} */}
                    <div className="label">Delhi Central</div>
                </div>
                <div className="location">
                    <div className="circle">50</div>
                    {/* {renderMiniChart(lineData)} */}
                    <div className="label">North Berlin</div>
                </div>
            </div>
            {/* <Calender /> */}
        </div>
    );
};

export default Dashboard;
