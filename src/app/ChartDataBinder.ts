  
  export class ChartDataBinder{
      public ChartData:Datachart;
      public ChartLabels:any;
      public ChartLegend:boolean;
      public ChartOptions:any;
      public ChartType:string;

    constructor(chartData:any[], chartLabels:any,chartLegend:boolean,chartOptions:any
        ,chartType:string)
        {
        // this.ChartData=chartData;
        // this.ChartLabels = chartLabels;
        // this.ChartLegend = chartLegend;
        // this.ChartOptions=chartOptions;
        // this.ChartType = chartType;
    }
  }

  export class Datachart{
    public scaleShowVerticalLines: boolean;
    public responsive: boolean;
  }