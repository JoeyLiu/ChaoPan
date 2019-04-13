import { Component, OnInit, ViewChild } from '@angular/core';
import {ProductsService} from '../Services/products.service';
import {MatSnackBar} from '@angular/material';
import {DataService} from '../Services/data.service';
import {ChartService} from '../Services/chart.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
