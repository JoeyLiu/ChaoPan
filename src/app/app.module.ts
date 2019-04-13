import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-highcharts';
import {MatFormFieldModule, MatNativeDateModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatSidenavModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatButtonModule} from '@angular/material';
import { MatDividerModule} from '@angular/material';
import { MatProgressBarModule} from '@angular/material';
import { MatSnackBarModule} from '@angular/material';
import { MatRadioModule} from '@angular/material';
import { MatButtonToggleModule} from '@angular/material';
import { MatMenuModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import { MatToolbarModule} from '@angular/material';
import { MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import {MyListComponent} from './myList/myList.component';
import {MyIndexComponent} from './myIndex/myIndex.component';

declare let require: any;


@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    MyIndexComponent,
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')),
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
