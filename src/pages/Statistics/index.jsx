import React from "react";
import styles from "./Statistics.module.scss";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  makeVisFlexible,
} from "react-vis";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const dataRadar = {
  labels: [
    "Правильность написания",
    "Восприятие на слух",
    "Произношение",
    "Thing 6",
  ],
  datasets: [
    {
      label: "Неизвестно что",
      data: [8, 7, 3, 5],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const FlexibleXYPlot = makeVisFlexible(XYPlot);

const Statisctics = () => {
  const data = [
    { x: "12.01", y: 7 },
    { x: "12.02", y: 15 },
    { x: "12.03", y: 9 },
    { x: "12.04", y: 4 },
    { x: "12.05", y: 5 },
    { x: "12.06", y: 11 },
    { x: "12.07", y: 6 },
    { x: "12.08", y: 8 },
    { x: "12.09", y: 12 },
    { x: "12.10", y: 1 },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.linerGistogram}>
        <XYPlot
          style={{ fill: "var(--text-color)" }}
          margin={{ bottom: 50 }}
          xType="ordinal"
          width={400}
          height={200}
        >
          <XAxis tickLabelAngle={0} />
          <YAxis />
          <VerticalBarSeries
            data={data}
            style={{
              stroke: "var(--secondary-bg)",
              fill: "var(--secondary-bg)",
              color: "var(--text-color)",
            }}
          />

        </XYPlot>
      </div>
      <div className={styles.radar}>
        <Radar data={dataRadar} />
      </div>
    </div>
  );
};

export default Statisctics;
