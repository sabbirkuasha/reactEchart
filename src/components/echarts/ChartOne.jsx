import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const ChartOne = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Ref to hold the chart instance

  useEffect(() => {
    console.log(chartRef);

    // Initialize a new chart instance
    chartInstanceRef.current = echarts.init(chartRef.current);

    // Define the chart options
    const options = {
      tooltip: {},
      title: {
        text: "Echarts Example",
      },
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {},
      series: [
        {
          name: "Sales",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // Apply the options to the chart
    chartInstanceRef.current.setOption(options);

    // Cleanup function to dispose of the chart instance
    return () => {
      chartInstanceRef.current.dispose();
    };
  }, [chartRef]);

  return <div ref={chartRef} style={{ width: "600px", height: "400px" }}></div>;
};

export default ChartOne;
