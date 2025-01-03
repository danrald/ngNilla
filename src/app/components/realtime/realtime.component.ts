//import { Component } from '@angular/core';
import { Component, NgZone, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy'; 
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-realtime',
  imports: [],
  templateUrl: './realtime.component.html',
  styleUrl: './realtime.component.css'
})
export class RealtimeComponent implements AfterViewInit, OnDestroy {
  private root!: am5.Root;
  
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {
    // this.root = am5.Root.new("chartdiv");

    // const myTheme = am5.Theme.new(this.root);
    
    // // Move minor label a bit down
    // myTheme.rule("AxisLabel", ["minor"]).setAll({
    //   dy: 1
    // });
    
    // // Tweak minor grid opacity
    // myTheme.rule("Grid", ["minor"]).setAll({
    //   strokeOpacity: 0.08
    // });
    
    // // Set themes
    // // https://www.amcharts.com/docs/v5/concepts/themes/
    // this.root.setThemes([
    //   am5themes_Animated.new(this.root),
    //   myTheme
    // ]);
    
    
    // // Create chart
    // // https://www.amcharts.com/docs/v5/charts/xy-chart/
    // let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
    //   panX: false,
    //   panY: false,
    //   wheelX: "panX",
    //   wheelY: "zoomX",
    //   paddingLeft: 0
    // }));
    
    
    // // Add cursor
    // // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    // let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    //   behavior: "zoomX"
    // }));
    // cursor.lineY.set("visible", false);
    
    // let date = new Date();
    // date.setHours(0, 0, 0, 0);
    // let value = 100;

    
    // // Create axes
    // // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    // let xAxis = chart.xAxes.push(am5xy.DateAxis.new(this.root, {
    //   maxDeviation: 0,
    //   baseInterval: {
    //     timeUnit: "day",
    //     count: 1
    //   },
    //   renderer: am5xy.AxisRendererX.new(this.root, {
    //     minorGridEnabled: true,
    //     minGridDistance: 200,    
    //     minorLabelsEnabled: true
    //   }),
    //   tooltip: am5.Tooltip.new(this.root, {})
    // }));
    
    // xAxis.set("minorDateFormats", {
    //   day: "dd",
    //   month: "MM"
    // });
    
    // let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
    //   renderer: am5xy.AxisRendererY.new(this.root, {})
    // }));
    
    
    // // Add series
    // // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    // let series = chart.series.push(am5xy.LineSeries.new(this.root, {
    //   name: "Series",
    //   xAxis: xAxis,
    //   yAxis: yAxis,
    //   valueYField: "value",
    //   valueXField: "date",
    //   tooltip: am5.Tooltip.new(this.root, {
    //     labelText: "{valueY}"
    //   })
    // }));
    
    // // Actual bullet
    // series.bullets.push(function () {
    //   let bulletCircle = am5.Circle.new(this.root, {
    //     radius: 5,
    //     fill: series.get("fill")
    //   });
    //   return am5.Bullet.new(this.root, {
    //     sprite: bulletCircle
    //   })
    // })
    
    // // Add scrollbar
    // // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    // chart.set("scrollbarX", am5.Scrollbar.new(this.root, {
    //   orientation: "horizontal"
    // }));
    
    // let data = generateDatas(30);
    // series.data.setAll(data);
    
    
    // // Make stuff animate on load
    // // https://www.amcharts.com/docs/v5/concepts/animations/
    // series.appear(1000);
    // chart.appear(1000, 100);
 }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      );

      // Define data
      let data = [
        {
          category: "Research",
          value1: 1000,
          value2: 588
        },
        {
          category: "Marketing",
          value1: 1200,
          value2: 1800
        },
        {
          category: "Sales",
          value1: 850,
          value2: 1230
        }
      ];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "category"
        })
      );
      xAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category"
        })
      );
      series1.data.setAll(data);

      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value2",
          categoryXField: "category"
        })
      );
      series2.data.setAll(data);

      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {}));

      this.root = root;
    });
  }



//  private generateData() {
//   value = Math.round((Math.random() * 10 - 5) + value);
//   am5.time.add(date, "day", 1);
//   return {
//     date: date.getTime(),
//     value: value
//   }; 
// }

// private generateDatas(count) {
//   let data = [];
//   for (var i = 0; i < count; ++i) {
//     data.push(generateData());
//   }
//   return data;
// }

}
