import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const options: any = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem: { value: string }) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value: string) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

type Props = {
  data: any;
  casesType: string;
};
const LineGraph = ({ casesType, data }: Props) => {
  const [builData, setBuildData] = useState<
    {
      x: string;
      y: number;
    }[]
  >([]);

  const buildChartData = (
    data: { [x: string]: { [x: string]: any }; cases: any },
    caseType: string
  ) => {
    const chartData = [];
    let lastPoint;
    for (let date in data?.cases) {
      if (lastPoint) {
        const newPoint = {
          x: date,
          y: data?.[caseType][date] - lastPoint,
        };
        chartData.push(newPoint);
      }
      lastPoint = data?.[caseType][date];
    }

    return chartData;
  };

  useEffect(() => {
    const getData = buildChartData(data, casesType);
    setBuildData(getData);
  }, [casesType, data]);

  return (
    <>
      {builData?.length > 0 && (
        <Line
          className="h-2/5"
          options={options}
          data={{
            datasets: [
              {
                label: casesType,
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: builData,
              },
            ],
          }}
        />
      )}
    </>
  );
};

export default LineGraph;
