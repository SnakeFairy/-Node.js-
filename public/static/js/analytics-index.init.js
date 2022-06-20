/**
 * Theme: Unikit - Responsive Bootstrap 5 Admin Dashboard
 * Author: Mannatthemes
 * Analytics Dashboard Js
 */

 var options = {
  series: [{
  type: 'column',
  data: [140, 305, 113, 201, 120, 257, 160, 140, 305, 113, 201, 120, 257]
}, 
{
  type: 'line',
  data: [230, 142, 135, 227, 103, 122, 216, 230, 142, 135, 227, 103, 122]
}],
  chart: {
  height: 260,
  type: 'line',
  toolbar: {
      show: false
  }
},
plotOptions: {
  bar: {
      horizontal: false,
      columnWidth: '30%',
  },
},
stroke: {
  width: [0, 2],
},

dataLabels: {
  enabled: true,
  enabledOnSeries: [1],
  style: {
    colors: ['rgba(255, 255, 255, .6)'],
  },
  background: {
    enabled: true,
    foreColor: '#b2bdcc',
    padding: 4,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#b2bdcc',
    opacity: 0.9,
  },
},
colors: ["#a4b1c3", "#6f7b8b"],
xaxis: {
  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'thu', 'Fri'],
},
grid: {
      row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.2,           
      },
      strokeDashArray: 2.5,
    },
};


var chartMain = new ApexCharts(document.querySelector("#ana_dash_1"), options);
chartMain.render();


var dash_spark_1 = {
    
  chart: {
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 1,
      gradient: {
        shade: '#2c77f4',
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 80, 100],
        colorStops: []
    },
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  colors: ['rgba(252, 122, 49, .1)'],
  tooltip: {
    show: false,
  }
}
new ApexCharts(document.querySelector("#dash_spark_1"), dash_spark_1).render();

var dash_spark_2 = {
    
  chart: {
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 1,
      gradient: {
        shade: '#2c77f4',
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 80, 100],
        colorStops: []
    },
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  colors: ['rgba(34, 183, 131, .1)'],
  tooltip: {
    show: false,
  }
}
new ApexCharts(document.querySelector("#dash_spark_2"), dash_spark_2).render();


var dash_spark_3 = {
    
  chart: {
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 1,
      gradient: {
        shade: '#2c77f4',
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 80, 100],
        colorStops: []
    },
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  colors: ['rgba(253, 60, 151, .1)'],
  tooltip: {
    show: false,
  }
}
new ApexCharts(document.querySelector("#dash_spark_3"), dash_spark_3).render();

var dash_spark_4 = {
    
  chart: {
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 1,
      gradient: {
        shade: '#2c77f4',
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 80, 100],
        colorStops: []
    },
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  colors: ['rgba(23, 97, 253, .1)'],
  tooltip: {
    show: false,
  }
}
new ApexCharts(document.querySelector("#dash_spark_4"), dash_spark_4).render();

// //Device-widget

 
var options = {
  chart: {
      height: 255,
      type: 'donut',
  }, 
  plotOptions: {
    pie: {
      donut: {
        size: '75%'
      }
    }
  },
  dataLabels: {
    enabled: false,
  },

  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
 
  series: [50, 25, 25,],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    verticalAlign: 'middle',
    floating: false,
    fontSize: '13px',
    offsetX: 0,
    offsetY: 0,
  },
  labels: [ "Mobile","Tablet", "Desktop" ],
  colors: ["#2a76f4","rgba(42, 118, 244, .5)","rgba(42, 118, 244, .18)"],
 
  responsive: [{
      breakpoint: 600,
      options: {
        plotOptions: {
            donut: {
              customScale: 0.2
            }
          },        
          chart: {
              height: 240
          },
          legend: {
              show: false
          },
      }
  }],
  tooltip: {
    y: {
        formatter: function (val) {
            return   val + " %"
        }
    }
  }
  
}

var chart = new ApexCharts(
  document.querySelector("#ana_device"),
  options
);
chart.render();