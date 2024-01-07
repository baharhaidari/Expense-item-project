import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointsValues = props.chartDataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            totalMax={totalMax}
          ></ChartBar>
        );
      })}
    </div>
  );
}
