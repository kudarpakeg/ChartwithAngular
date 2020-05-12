import { Component, OnInit, ViewChildren,ElementRef, QueryList} from '@angular/core';
import { ChartDataBinder, Datachart } from '../ChartDataBinder';

import  {Chart} from 'node_modules/chart.js';

const baseConfig: Chart.ChartConfiguration = {
  type: 'line',
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [{ display: false }],
      yAxes: [{ display: false }],
    }
  }
};
@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.css']
})
export class MixedChartComponent implements OnInit {

  constructor() { }
  ngOnInit() {}

  @ViewChildren('pr_chart', { read: ElementRef }) chartElementRefs: QueryList<ElementRef>;

  chartData: Chart.ChartData[] = [
    {
      labels: ['1500', '1600', '1700', '1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      datasets: [{
        data: [86, 378, 106, 306, 507, 111, 133, 221, 783, 5000],
        borderColor: 'red',
        fill: false
      }]
    },
    {
      labels: ['1500', '1600', '1700', '1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      datasets: [{
        data: [86, 378, 106, 306, 507, 111, 133, 221, 783, 5000].reverse(),
        borderColor: 'blue',
        fill: false
      }]
    },
    {
      labels: ['500', '1600', '700', '750', '100', '1850', '1900', '950', '999', '2050'],
      datasets: [{
        data: [86, 378, 106, 306, 507, 111, 133, 221, 783, 5000].reverse(),
        borderColor: 'blue',
        fill: false
      }]
    },
    // {  //Not working for Bar chart.
    //   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    //   datasets: [{
    //     data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    //     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}],
    //     borderColor: 'blue',
    //     fill: false
    //   }],
    //   type:'bar',
    // },
    {
      labels : ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'],
    datasets: [{
       data:[120, 150, 180, 90].reverse()
      }],
    type: 'pie',
    }
  ];

  charts: Chart[] = [];

  ngAfterViewInit() {
    this.charts = this.chartElementRefs.map((chartElementRef, index) => {
      const config = Object.assign({}, baseConfig, { data: this.chartData[index] });
      
      return new Chart(chartElementRef.nativeElement, config);
    });
  }

}
