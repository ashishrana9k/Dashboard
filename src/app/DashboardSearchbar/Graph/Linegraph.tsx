"use client";
import ReactApexChart from 'react-apexcharts';
import React from 'react';

const Linegraph = () => {
  const [state, setState] = React.useState({
    series: [
      {
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 190,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 5,
          borderRadiusApplication: 'end'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 4,
        colors: ['#ffffff']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        labels: {
          style: {
            colors: '#ffffff'
          }
        },
        axisBorder: {
          show: true,
          color: '#ffffff'
        },
        axisTicks: {
          show: true,
          color: '#ffffff'
        }
      },
      yaxis: {
        title: {
          style: {
            color: '#ffffff'
          }
        },
        labels: {
          style: {
            colors: '#ffffff'
          }
        }
      },
      legend: {
        show: false
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: 'dark',
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        }
      },
      grid: {
        // borderColor: '#727272',   
        // strokeDashArray: 4    
        show:false    
      }
    }
  });

  return (
    <div>
      <div id="chart" className="m-0 p-0">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={190} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Linegraph;
