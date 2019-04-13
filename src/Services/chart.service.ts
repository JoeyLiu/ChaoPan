import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {ProductsService} from './products.service';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  options = [];
  baseURL = 'http://47.95.116.38:9998/api/product?';
  // baseURL = 'http://0.0.0.0:9998/api/product?';
  chartWidth = 1200;
  chartHeight = 600;
  productList = [];
  startDate;
  endDate;
  // dataLoaded = false;
  // btn_disabled = false;
  // btn_text = '查看价格';
  // currentChartIndex: any;

  constructor(private dataService: DataService, private skuService: ProductsService) { }

  initCharts(option) {
  if ( window.innerWidth < 450 ) {

        this.chartWidth = 1200;
        this.chartHeight = 1800;
        console.log(navigator.userAgent);
        console.log(window.innerWidth);
        // console.log(document.body.clientWidth);
        console.log('Use Phone');
      }
    if ( window.innerWidth > 1201 ) {

      // this.chartWidth = window.innerWidth;
      this.chartWidth = window.innerWidth * 0.9;
      // this.chartHeight = 1800;
      console.log(navigator.userAgent);
      console.log(window.innerWidth);
      // console.log(document.body.clientWidth);
      console.log('Use Phone');
    }
    this.productList = this.skuService.getSkuList();
    // console.log(this.productList.length);
    const productCount = this.productList.length;
    console.log('商品总数：' + productCount);
    let loadSucceed = 0;
    let loadFail = 0;
    for (let i = 0; i < this.productList.length; i++) {
      // console.log(this.productList[i].index + '-' + this.productList[i].productName);
      const sku = this.productList[i].skus[0].sku;
      const size = this.productList[i].skus[0].description;
      if (option === 'chart') {
        this.startDate = this.productList[i].startDate;
        this.endDate = this.productList[i].endDate;
        // console.log(this.startDate);
      }
      if ( option === 'spark' ) {
        this.startDate = this.getNewStartDate(this.productList[i], 1);
        // this.endDate = this.getNewStartDate(this.productList[i], 2);
        this.endDate = this.productList[i].endDate;
        // console.log(this.startDate);
      }
      $.ajax({
        url: this.baseURL +
        'productID=' + sku +
        '&startDate=' + this.startDate +
        '&endDate=' + this.endDate,
        dataType: 'json',
        productName: this.productList[i].productName + ' - ' + size,
        product: this.productList[i],
        instance: this,
        method: 'GET',
        success: function(data) {
          // console.log(data);
          if (option === 'chart') {
            this.instance.drawChart(this.product, data.data);
            loadSucceed++;
          }
          if ( option === 'spark' ) {
            this.instance.drawSpark(this.product, data.data);
            loadSucceed++;
          }
          if (productCount === (loadSucceed + loadFail)) {
            console.log('加载完成：' + loadSucceed + '/' + loadFail);
          } else {
            console.log('加载进度：' + loadSucceed + '/' + loadFail);
          }
        },
        error: function(xhr) {
          console.log('错误:' + this.product.productName);
          loadFail++;
          if (productCount === (loadSucceed + loadFail)) {
            console.log('加载完成：' + loadSucceed + '/' + loadFail);
          } else {
            console.log('加载进度：' + loadSucceed + '/' + loadFail);
          }
        }
      });
    }
  }
  drawChart(product, data) {
    const fixedData = this.dataService.fixingData(data);
    const order1 = this.dataService.polynomialData(fixedData, 1);
    const order2 = this.dataService.polynomialData(fixedData, 2);
    // const order4 = this.dataService.polynomialData(fixedData, 4);
    // const order6 = this.dataService.polynomialData(fixedData, 6);
    const order8 = this.dataService.polynomialData(fixedData, 8);

    const option = {
      colors: ['#2b908f59', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      chart: {
        width: this.chartWidth,
        height: this.chartHeight,
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
          ]
        },
        style: {
          fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
      },
      title: {
        text: '',
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase',
          fontSize: '20px'
        }
      },
      subtitle: {
        text: 'Size - All | 最低: <b>$' + this.getMinPrice(data) +
        '</b> | 最高: <b>$' + this.getMaxPrice(data) +
        '</b> <br/> ' + product.startDate + ' 至 ' + product.endDate,
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase'
        }
      },
      xAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
          style: {
            color: '#A0A0A3'

          }
        }
      },
      yAxis: [
        // {
        //   title: {
        //     text: '走势',
        //     style: {
        //       color: '#A0A0A3'
        //     }
        //   },
        //   // max: 300,
        //   opposite: true,
        //   gridLineColor: '#707073',
        //   labels: {
        //     style: {
        //       color: '#E0E0E3'
        //     }
        //   },
        //   lineColor: '#707073',
        //   minorGridLineColor: '#505053',
        //   tickColor: '#707073',
        //   tickWidth: 1,
        // },
        {
          title: {
            text: '价格',
            style: {
              color: '#A0A0A3'
            }
          },
          min: this.getMinPrice(data),
          max: this.getMaxPrice(data),
          gridLineColor: '#707073',
          labels: {
            style: {
              color: '#E0E0E3'
            }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          tickWidth: 1,
        },
      ],
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
          color: '#F0F0F0'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          marker: {
            enabled: false,
            lineColor: '#333'
          },
          pointStart: 300,
          dataLabels: {
            color: '#B0B0B3'
          },
        },
        boxplot: {
          fillColor: '#505053'
        },
        candlestick: {
          lineColor: 'white'
        },
        errorbar: {
          color: 'white'
        }
      },
      series: [{
        name: '价格 $',
        type: 'area',
        // yAxis: 1,
        data: fixedData,
      }, {
        name: 'Degree 1 ',
        type: 'spline',
        data: order1.points,
      }, {
        name: 'Degree 2 ',
        type: 'spline',
        data: order2.points,
      }, {
        name: 'Degree  8 ',
        type: 'spline',
        data: order8.points,
      }],
      legend: {
        itemStyle: {
          color: '#E0E0E3'
        },
        itemHoverStyle: {
          color: '#FFF'
        },
        itemHiddenStyle: {
          color: '#606063'
        }
      },
      credits: {
        style: {
          color: '#666'
        }
      },
      labels: {
        style: {
          color: '#707073'
        }
      },

      drilldown: {
        activeAxisLabelStyle: {
          color: '#F0F0F3'
        },
        activeDataLabelStyle: {
          color: '#F0F0F3'
        }
      },

      navigation: {
        buttonOptions: {
          symbolStroke: '#DDDDDD',
          theme: {
            fill: '#505053'
          }
        }
      },

      // scroll charts
      rangeSelector: {
        buttonTheme: {
          fill: '#505053',
          stroke: '#000000',
          style: {
            color: '#CCC'
          },
          states: {
            hover: {
              fill: '#707073',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            },
            select: {
              fill: '#000003',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            }
          }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
        },
        labelStyle: {
          color: 'silver'
        }
      },

      navigator: {
        handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
        },
        xAxis: {
          gridLineColor: '#505053'
        }
      },

      scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
      },

      // special colors for some of the
      legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
      background2: '#505053',
      dataLabelsColor: '#B0B0B3',
      textColor: '#C0C0C0',
      contrastTextColor: '#F0F0F3',
      maskColor: 'rgba(255,255,255,0.3)'
    };
    product.option = option;
    // console.log(product);
    this.options.push(product);

  }
  drawSpark(product, data) {
    console.log(data);
    let change = 0;
    const fixedData = this.dataService.fixingData(data);
    const order1 = this.dataService.polynomialData(fixedData, 1);
    console.log(fixedData);
    const startPolyPrice = Math.round(order1.points[0][1]);
    const endPolyPrice = Math.round(order1.points[order1.points.length - 1][1]);
    const startRealPrice = Math.round(fixedData[0][1]);
    const endRealPrice = Math.round(fixedData[fixedData.length - 1][1]);
    const polyChange = endPolyPrice - startPolyPrice;
    const realChange = endRealPrice - startRealPrice;
    console.log('poly change: ' + polyChange + ' vs. real change: ' + realChange);
    if ( Math.abs(polyChange) > Math.abs(realChange) ) {
      change = realChange;
    } else {
      change = polyChange;
    }
    console.log('价格指数: ' + endRealPrice + ' - ' + startRealPrice + ' = ' + realChange);
    // console.log('价格指数: ' + startPrice + ' - ' + endPrice + ' = ' + change);
    product.endPrice = endRealPrice;
    product.change = change;
    // const order2 = this.dataService.polynomialData(fixedData, 2);
    // const order4 = this.dataService.polynomialData(fixedData, 4);
    // const order6 = this.dataService.polynomialData(fixedData, 6);
    // const order8 = this.dataService.polynomialData(fixedData, 8);
    const option = {
      colors: ['#f44336', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      chart: {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#000000'],
            [1, '#000000']
          ]
        },
        borderWidth: 0,
        type: 'area',
        margin: [2, 0, 2, 0],
        width: 120,
        height: 50,
        style: {
          overflow: 'visible'
        },

        // small optimalization, saves 1-2 ms each sparkline
        skipClone: true
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        lineColor: '#000000',
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: []
      },
      yAxis: {
        endOnTick: false,
        startOnTick: false,
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        tickPositions: [],
        min: this.getMinPrice(data),
        max: this.getMaxPrice(data),
      },
      legend: {
        enabled: false
      },
      tooltip: {
        hideDelay: 0,
        outside: true,
        shared: true
      },
      plotOptions: {
        series: {
          animation: false,
          lineWidth: 2,
          shadow: false,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          marker: {
            radius: 1,
            states: {
              hover: {
                radius: 2
              }
            }
          },
          fillOpacity: 0.25
        },
        column: {
          negativeColor: '#910000',
          borderColor: 'black'
        }
      },
      series: [{
        data: fixedData,
      }]
    };
    product.option = option;
    // console.log(product);
    this.options.push(product);

  }
  getMinPrice(data) {
    let min = data[0][1];
    for (let i = 1; i < data.length; i++) {
      if (min > data[i][1]) {
        min = data[i][1];
      }
    }
    // console.log('min is: ' + min);
    return min;
  }
  getMaxPrice(data) {
    let max = data[0][1];
    for (let i = 1; i < data.length; i++) {
      if (max < data[i][1]) {
        max = data[i][1];
      }
    }
    // console.log('max is: ' + max);
    return max;
  }
  getNewStartDate(product, dateRange) {
    // console.log(dateRange);
    // 原发售日期
    let origStartYear = parseInt(product.startDate.substr(0, 4), 0);
    let origStartMonth = parseInt(product.startDate.substr(5, 2), 0) - 1;
    let origStartDay = parseInt(product.startDate.substr(8, 2), 0);
    const origDate = new Date();
    origDate.setFullYear(origStartYear);
    origDate.setMonth(origStartMonth, 1);
    origDate.setDate(origStartDay);
    // 计算新的开始日期
    let newStartDate = new Date();
    newStartDate.setDate(newStartDate.getDate() - dateRange);
    // const dateGap = newStartDate - origDate;
    // 计算新开始日期-原发售日期
    const range = Math.floor(( +newStartDate - +origDate ) / 86400000);
    // console.log(range);
    // console.log('新开始日期-原发售日期: ' + range);
    if (range <= 1 || dateRange === 0 || dateRange === undefined) {
      newStartDate = origDate;
    }
    const month = newStartDate.getMonth() + 1;
    const startDate = newStartDate.getFullYear() + '-' + month + '-' + newStartDate.getDate();
    return startDate;
  }
}
