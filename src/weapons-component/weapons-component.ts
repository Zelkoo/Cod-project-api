import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {DonutChartService} from "../pie-chart-service/donut-chart-service";
import {forkJoin, Subscription} from "rxjs";
import {OverviewDataType} from "../helpers/overview-enum";

@Component({
  selector: 'weapons-component',
  templateUrl: './weapons-component.html',
  styleUrls: ['./weapons-component.css'],
})

export class WeaponsComponent implements OnInit {
  mouseOver = false;
  deaths: number;
  kills: number;
  wins: number;
  losses: number;
  dataWinLosses: any[]
  dataKillDeaths: any[]
  private subscription: Subscription;

  constructor(public donutChart: DonutChartService, public dataService: DataService) {
  }

  ngOnInit() {
    const body = document.querySelector('body')
    body.style.backgroundImage = ''
    this.subscription = forkJoin([
      this.dataService.getOverviewData(OverviewDataType.Wins),
      this.dataService.getOverviewData(OverviewDataType.Kills),
      this.dataService.getOverviewData(OverviewDataType.Deaths),
      this.dataService.getOverviewData(OverviewDataType.Losses),
    ]).subscribe(([wins, kills, deaths, losses]
    ) => {

      this.wins = wins
      this.deaths = deaths
      this.kills = kills
      this.losses = losses
      this.dataWinLosses = [
        {label: 'Losses', count: this.losses},
        {label: 'Wins', count: this.wins},
      ]
      this.dataKillDeaths = [
        {label: 'Deaths', count: this.deaths},
        {label: 'Kills', count: this.kills},
      ]
    });
    setTimeout(() => {
      this.donutChart.createChart('.chart-win-lose', this.dataWinLosses)
      this.donutChart.createChart('.chart-kd-ratio', this.dataKillDeaths)
    }, 100)
  }


  onMouseOver() {
    this.mouseOver = true;
  }

  onMouseOut() {
    this.mouseOver = false;
  }
}
