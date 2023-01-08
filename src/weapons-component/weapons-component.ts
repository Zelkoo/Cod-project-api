import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {DonutChartService} from "../pie-chart-service/donut-chart-service";
import {forkJoin, Subscription} from "rxjs";
import {OverviewDataType} from "../helpers/overview-enum";
import {PistolData} from "../helpers/data-interface";


@Component({
  selector: 'weapons-component',
  templateUrl: './weapons-component.html',
  styleUrls: ['./weapons-component.css'],
})

export class WeaponsComponent implements OnInit {
  private subscription: Subscription;
  pistol: PistolData
  rocket: string
  deaths: number;
  kills: number;
  wins: number;
  losses: number;
  dataWinLosses: any[]
  dataKillDeaths: any[]
  constructor(public donutChart: DonutChartService, public dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPistolData('renetti', 'kills').subscribe((data: PistolData) => {
      console.log(data)
        this.pistol = data
    }
    )
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
        { label: 'Losses', count: this.losses },
          { label: 'Wins', count: this.wins },
    ]
      this.dataKillDeaths = [
        { label: 'Deaths', count: this.deaths },
        { label: 'Kills', count: this.kills },
      ]
    });
      setTimeout(() => {
        this.donutChart.createChart( '.donut', this.dataWinLosses )
        this.donutChart.createChart('.donut2', this.dataKillDeaths)
      }, 100)





  }
}
