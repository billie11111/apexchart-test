'use client'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function HorizontalBarChart() {
  const options = {
    noData: {
      text: "Loading...",
    },
    chart: {
      id: 'problemSolving',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ['문제해결중심'],
      labels: {
        show: true,
        style: {
          colors: ["#8E8E8E"],
          fontSize: '10px',
          // fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          // cssClass: 'apexcharts-yaxis-label',
        },
      }
    },
    yaxis: {
      min: 0,
      max: 5,
      labels: {
        show: true,
        align: 'right',
        style: {
          colors: ["#333333"],
          fontSize: '16px',
          fontWeight: 400,
        },
        offsetY: 4,
      }
    },
    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 10,
            color: "#FFE197",
            opacity: 1
          },
          {
            offset: 80,
            color: "#FFB93E",
            opacity: 1
          },
        ]
      },
    },

    dataLabels: {
      enabled: true,
      formatter: (value: any) => value.toFixed(1),
      style: {
        colors: ['#2a2927'],
        fontSize: '20px'
      },
      offsetX: 30,

    },

    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        }
      }
    }
  }

  //데이터
  const series = [
    {
      name: '문제해결중심',
      data: [
        {
          x: '문제해결중심',
          y: 3.6,
          goals: [
            {
              name: '전체 평균',
              value: 4,
              strokeWidth: 2,
              strokeColor: '#ff7e3e'
            }
          ]
        },
      ]
    }
  ]

  return (
    <section>
      <h1>Horizontal Bar chart</h1>

      <ApexChart
        type="bar"
        options={options}
        series={series}
        width={400}
        height={115}
      />

    </section>
  )
}