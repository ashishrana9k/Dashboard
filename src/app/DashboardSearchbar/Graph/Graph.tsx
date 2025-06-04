'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// ✅ Dynamically import the chart with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = baseval;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000; // one day
    i++;
  }
  return series;
}

const Graph = () => {
  const [state] = React.useState({
    series: [
      {
        name: 'South',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 50,
          max: 100
        })
      },
      {
        name: 'North',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 20
        })
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        responsive: false,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min));
          }
        },
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'monotoneCubic'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        labels: {
          colors: '#ffffff'
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#ffffff'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#ffffff'
          }
        }
      },
      title: {
        style: {
          color: '#ffffff',
        }
      },
      tooltip: {
        theme: 'dark',
        style: {
          fontSize: '14px',
          fontFamily: undefined,
          color: ''
        }
      }
    }
  });

  return (
    <div className='gradient rounded-xl p-3'>
      <div id="chart">
        <div>
          <h6>Sales Overview</h6>
          <p className='text-[10px]'><span className='text-green-700'>+5% more</span> in 2021</p>
        </div>
        <ReactApexChart options={state.options} series={state.series} type="area" height={285} />
      </div>
    </div>
  );
};

export default Graph;
