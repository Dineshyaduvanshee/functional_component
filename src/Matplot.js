import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Matplot = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
      },
      {
        label: 'Dataset 3',
        data: [18, 33, 44, 12, 58, 47, 78],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white', // Legend text color
        },
      },
      title: {
        display: true,
        text: 'Multi-Line Chart in Dark Mode',
        color: 'white', // Title color
      },
      tooltip: {
        bodyColor: 'white',
        titleColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background color
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // X-axis text color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // X-axis grid line color
        },
      },
      y: {
        ticks: {
          color: 'white', // Y-axis text color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Y-axis grid line color
        },
      },
    },
  };

  const containerStyle = {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: 'white' }}>Matplot</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Matplot;
