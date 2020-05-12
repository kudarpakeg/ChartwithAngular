import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';


const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'doughnut-chart', component: DoughnutChartComponent},
  {path: 'radar-chart', component: RadarChartComponent},
  {path: 'pie-chart', component: PieChartComponent},
  {path: 'mixed-chart', component: MixedChartComponent},
  {path: '**', component: BarChartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ChartsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
