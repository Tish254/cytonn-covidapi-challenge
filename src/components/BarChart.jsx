import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import millify from 'millify';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({covidData}) => {

  const data = {
    labels: covidData.timeLabels,
    datasets: [
      {
        label: 'Cases',
        data: covidData.covidCases,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Deaths',
        data: covidData.covidDeaths,
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Tests',
        data: covidData.covidTests,
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Covid-19 Hourly History',
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        title:{ display: true, text: "Hours"},
        stacked: true,
        type: "time",
        time: {
          unit: "hour",
        },
      },
      y: {
        title: { display: true, text: "Covid-19 Cases, Deaths, Tests"},
        stacked: true,
        ticks: {
          callback: function (value) {
              return millify(value)
          },
      }
      },
    },
  };
  return (
    <Bar options={options} data={data} />
  );
}

export default BarChart