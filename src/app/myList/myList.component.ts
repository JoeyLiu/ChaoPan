import { Component, OnInit, ViewChild } from '@angular/core';
import {ProductsService} from '../../Services/products.service';
import {MatSnackBar} from '@angular/material';
import {DataService} from '../../Services/data.service';
import {ChartService} from '../../Services/chart.service';
declare var $: any;

@Component({
  selector: 'app-mylist',
  templateUrl: './myList.component.html',
  styleUrls: ['./myList.component.css']
})
export class MyListComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  selectedBrand = '全部';
  opened: boolean;
  title = 'app';
  chartWidth = 1200;
  chartHeight = 1200;
  category = [];
  baseURL = 'http://47.95.116.38:9998/api/product?';
  // baseURL = 'http://0.0.0.0:9998/api/product?';
  productList = [];
  favored = true;
  // grades = Array(10);
  grades = [
    0, 0, 0, 0, 1
  ];
  options = this.chartService.options;
  // dataLoaded = false;
  // btn_disabled = false;
  // btn_text = '查看价格';
  currentChartIndex: any;
  dates = [
    {
      index: 0,
      text: '全部'
    },
    {
      index: 7,
      text: '一周'
    },
    {
      index: 14,
      text: '二周'
    },
    {
      index: 21,
      text: '三周'
    },
    {
      index: 30,
      text: '一月'
    },
    {
      index: 60,
      text: '二月'
    },
    {
      index: 90,
      text: '三月'
    },
    {
      index: 180,
      text: '半年'
    },
    {
      index: 360,
      text: '一年'
    }
  ];

  ngOnInit() {
  }
  blank(product, groupValue) {
    this.snackBar.open('clicked', '', {duration: 1000});
  }
  favor (product) {
    product.favored = !product.favored;
  }
  saveInstance(chartInstance, product) {
    product.nativeChart = chartInstance;
  }
  redraw(product, i, dateRange) {
    // console.log(dateRange);
    this.currentChartIndex = i;
    const startDate = this.chartService.getNewStartDate(product, dateRange);
    const sku = product.skus[product.selectedSize].sku;
    const size = product.skus[product.selectedSize].description;
    // console.log('选择的尺码index是： ' + product.selectedSize);
    // console.log('开始日期: ' + product.startDate);
    console.log('重新加载产品 ' + product.productName + ' 的数据');
    console.log('起始日期: ' + startDate );
    console.log('截止日期: ' + product.endDate );
    console.log('SKU: ' + sku);
    console.log('尺码: ' + size);
    $.ajax({
      url: this.baseURL +
      'productID=' + sku +
      '&startDate=' + startDate +
      '&endDate=' + product.endDate +
      '&productName=' + product.productName,
      dataType: 'json',
      productName: product.productName + ' - ' + size,
      size: size,
      startDate: startDate,
      product: product,
      index: this.currentChartIndex,
      instance: this,
      // jsonp: 'callback',
      method: 'GET',
      success: function (data) {
        const fixedData = this.instance.dataService.fixingData(data.data);
        const order1 = this.instance.dataService.polynomialData(fixedData, 1);
        const order2 = this.instance.dataService.polynomialData(fixedData, 2);
        // const order4 = this.instance.dataService.polynomialData(fixedData, 4);
        // const order6 = this.instance.dataService.polynomialData(fixedData, 6);
        const order8 = this.instance.dataService.polynomialData(fixedData, 8);

        product.nativeChart.series[0].setData(fixedData);
        product.nativeChart.series[1].setData(order1.points);
        product.nativeChart.series[2].setData(order2.points);
        // product.nativeChart.series[3].setData(order4.points);
        // product.nativeChart.series[4].setData(order6.points);
        product.nativeChart.series[3].setData(order8.points);
        product.nativeChart.subtitle.update(
          {
            text: 'Size - ' + size +
            ' | 最低: <b>$' + this.instance.chartService.getMinPrice(fixedData) +
            '</b> | 最高: <b>$' + this.instance.chartService.getMaxPrice(fixedData) +
            '</b> <br/> ' + startDate + ' 至 ' + product.endDate,
          }
        );
        product.nativeChart.yAxis[0].update(
          {
            min: this.instance.chartService.getMinPrice(fixedData),
            max: this.instance.chartService.getMaxPrice(fixedData),
          }
        );
        console.log('加载完成');
        this.instance.clearLoadProgress();
      },
      error: function(xhr) {
        console.log('错误:' + this.product.productName);
        // this.instance.dataLoaded = !this.instance.dataLoaded;
        // this.instance.btn_disabled = false;
        this.instance.snackBar.open('网络错误，请重试！', '', {
          duration: 3500,
        });
        // this.instance.btn_text = '查看';
        this.instance.clearLoadProgress();
      }
    });
    // this.currentChartIndex = i;
    // this.chartService.setCurrentChartIndex(i);
    // this.chartService.redrawChart(product, dateRange, i);
  }
  clearLoadProgress() {
    this.currentChartIndex = null;
  }
  closeSideNav(brand) {
    // sidenav.toggle();
    this.selectedBrand = brand;
    this.sidenav.toggle();
    this.snackBar.open(this.selectedBrand, '', {duration: 1000});
  }
  constructor(private skuService: ProductsService,
              public snackBar: MatSnackBar,
              private dataService: DataService,
              private chartService: ChartService) {
    // init charts
    this.category.push('全部');
    this.category.push('Air Jordan 1');
    this.category.push('Yeezy 350');
    this.category.push('Yeezy 500');
    this.category.push('Yeezy 700');
    this.category.push('喷泡');
    this.category.push('Kyrie 5');
    this.category.push('Off-White The Ten');
    this.category.push('其他');

    this.chartService.initCharts('chart');
   }


}
