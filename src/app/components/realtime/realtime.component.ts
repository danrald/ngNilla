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
    

 }
 
  ngOnDestroy(): void {
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
  ngAfterViewInit(): void {
    this.browserOnly(() => {
                /* Chart code */

                let root = am5.Root.new("chartdiv");


                // Set themes
                // https://www.amcharts.com/docs/v5/concepts/themes/
                root.setThemes([
                  am5themes_Animated.new(root)
                ]);
                
                
                // Generate random data
                let value = 100;
                
                function generateChartData() {
                  let chartData = [];
                  let firstDate = new Date();
                  firstDate.setDate(firstDate.getDate() - 1000);
                  firstDate.setHours(0, 0, 0, 0);
                
                  for (var i = 0; i < 16; i++) {
                    let newDate = new Date(firstDate);
                    newDate.setDate(newDate.getDate() + i);
                
                    value += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10;
                
                    chartData.push({
                      date: newDate.getTime(),
                      value: value
                    });
                  }
                  return chartData;
                }
                
                let data = generateChartData();
                
                
                // Create chart
                // https://www.amcharts.com/docs/v5/charts/xy-chart/
                let chart = root.container.children.push(am5xy.XYChart.new(root, {
                  focusable: true,
                  panX: true,
                  panY: true,
                  wheelX: "panX",
                  wheelY: "zoomX"
                }));
                
                let easing = am5.ease.linear;
                
                
                // Create axes
                // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
                let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                  maxDeviation: 0.5,
                  extraMin: -0.1,
                  extraMax: 0.1,
                  groupData: false,
                  baseInterval: {
                    timeUnit: "day",
                    count: 1
                  },
                  renderer: am5xy.AxisRendererX.new(root, {
                    minorGridEnabled: true,
                    minGridDistance: 60
                  }),
                  tooltip: am5.Tooltip.new(root, {})
                }));
                
                let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                  renderer: am5xy.AxisRendererY.new(root, {})
                }));
                
                
                // Add series
                // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
                let series = chart.series.push(am5xy.LineSeries.new(root, {
                  minBulletDistance: 10,
                  name: "Series 1",
                  xAxis: xAxis,
                  yAxis: yAxis,
                  valueYField: "value",
                  valueXField: "date",
                  tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{valueY}"
                  })
                }));
                series.data.setAll(data);
                
                series.bullets.push(function () {
                  return am5.Bullet.new(root, {
                    locationX: undefined,
                    sprite: am5.Circle.new(root, {
                      radius: 4,
                      fill: series.get("fill")
                    })
                  })
                });
                
                
                // Add cursor
                // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
                let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                  xAxis: xAxis
                }));
                cursor.lineY.set("visible", false);
                
                
                // Update data every second
                setInterval(function () {
                  addData();
                }, 1000)
                
                
                function addData() {
                  let lastDataItem = series.dataItems[series.dataItems.length - 1];
                  let lastValue = lastDataItem.get("valueY");
                  let newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 6);
                  //let testDate = lastDataItem.get("valueX").toString();
                 // let lastDate = new Date(testDate);
                 //let lastDate = new Date(lastDataItem.get("valueX")); //original
                  let lastDate = new Date(lastDataItem.get("valueX") ?? '');
                  let time = am5.time.add(new Date(lastDate), "day", 1).getTime();
                  series.data.removeIndex(0);
                  series.data.push({
                    date: time,
                    value: newValue
                  })
                
                  let newDataItem = series.dataItems[series.dataItems.length - 1];
                  newDataItem.animate({
                    key: "valueYWorking",
                    to: newValue,
                    from: lastValue,
                    duration: 600,
                    easing: easing
                  });
                
                  let animation = newDataItem.animate({
                    key: "locationX",
                    to: 0.5,
                    from: -0.5,
                    duration: 600
                  });
                  if (animation) {
                    let tooltip = xAxis.get("tooltip");
                    if (tooltip && !tooltip.isHidden()) {
                      animation.events.on("stopped", function () {
                        xAxis.updateTooltip();
                      })
                    }
                  }
                }
                
                
                // Make stuff animate on load
                // https://www.amcharts.com/docs/v5/concepts/animations/
                chart.appear(1000, 100);
    }); // browserOnly
  } // ngAfterViewInit





}
