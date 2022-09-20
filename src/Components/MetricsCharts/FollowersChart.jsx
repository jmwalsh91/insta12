import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function FollowersChart({ snapshots }) {
  console.log('from chart', snapshots);

  // map to array of follwers from snapshots
  const followers = snapshots.map((snapshot) => snapshot.followers);
  const following = snapshots.map((snapshot) => snapshot.following);

  const [followerData, setFollowerData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  const getDaysThisMonth = () => {
    const days = [];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(`${month + 1}/${i}`);
    }
    return days;
  };

  // arr of thirty random numbers between 1000 and 20000
  const getRandomFollowers = () => {
    const followers = [];
    for (let i = 0; i < 30; i++) {
      followers.push(Math.floor(Math.random() * 19000) + 1000);
    }
    return followers;
  };

  useEffect(() => {
    setFollowerData({
      labels: getDaysThisMonth(),
      datasets: [
        {
          label: 'Following',
          data: following,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          tension: 0.3,
        },
        {
          label: 'Followers',
          data: followers,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: 'origin',
          tension: 0.3,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '$font',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '$font',
          },
        },
        y: {
          ticks: {
            color: '$font',
          },
        },
      },
    });
  }, []);

  return <Line options={chartOptions} data={followerData} />;
}

export default FollowersChart;