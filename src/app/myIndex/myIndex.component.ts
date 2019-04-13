import { Component, OnInit, ViewChild } from '@angular/core';
import {ProductsService} from '../../Services/products.service';
import {MatSnackBar} from '@angular/material';
import {DataService} from '../../Services/data.service';
import {ChartService} from '../../Services/chart.service';
declare var $: any;

@Component({
  selector: 'app-myindex',
  templateUrl: './myIndex.component.html',
  styleUrls: ['./myIndex.component.css']
})
export class MyIndexComponent implements OnInit {
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
  option: Object;
  // dataLoaded = false;
  // btn_disabled = false;
  // btn_text = '查看价格';
  currentChartIndex: any;

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
  clearLoadProgress() {
    this.currentChartIndex = null;
  }
  closeSideNav(brand) {
    this.selectedBrand = brand;
    this.sidenav.toggle();
    this.snackBar.open(this.selectedBrand, '', {duration: 1000});
  }
  constructor(private skuService: ProductsService,
              public snackBar: MatSnackBar,
              private dataService: DataService,
              private chartService: ChartService,
              ) {
    // init charts
    this.chartService.initCharts('spark');

   }


}
