import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // Above const gives an array containing the values of data points
    const MaxOfAll = Math.max(...dataPointValues);
    // we passed a list of arguments containing the data point values using spread operator


  return (
    <div className="chart">

      {/* Here we are rendering chartbars dynamically acc. to the no of datapoints */}
      
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={MaxOfAll}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
