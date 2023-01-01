import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {DonutChartService} from "../pie-chart-service/donut-chart-service";


@Component({
  selector: 'weapons-component',
  templateUrl: './weapons-component.html',
  styleUrls: ['./weapons-component.css'],
})

export class WeaponsComponent implements OnInit {

  constructor(public donutChart: DonutChartService) {
  }

  ngOnInit() {
    const data = [
      { label: 'Śmierci', count: 25014 },
      { label: 'Zabójstwa', count: 3584 },
    ];
    const data2 = [
      { label: 'Wygrane', count: 599 },
      { label: 'Przegrane', count: 400 },
    ];
    this.donutChart.createChart( '.donut', data )
    this.donutChart.createChart('.donut2', data2)
  }
}
