import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
const GlobalProgressChart = () => {
    const data = {
        labels: ['Jun 20', 'Aug 20', 'Oct 20', 'Dec 20', 'Feb 21'],
        datasets: [
            {
                data: [0, 100, 200, 400, 600, 800, 1000],
                fill: true,
                backgroundColor: 'rgba(255, 165, 0, 0.2)', // Orange color with transparency
                borderColor: 'rgba(255, 165, 0, 1)', // Solid orange color
            },
        ],
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
        },
    };
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default GlobalProgressChart
