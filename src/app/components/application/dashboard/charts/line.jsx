import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart(props) {
  const data = {
    labels: props.time,
    datasets: [
      {
        label: props.label,
        data: props.data,
        fill: false,
        backgroundColor: props.reverse ? "rgb(226, 130, 79)" : 'rgb(45, 147, 108)',
        borderColor: props.reverse ? "rgb(45, 147, 108, 0.2)" : 'rgb(226, 130, 79, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}
