import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {forkJoin, Subscription} from "rxjs";
import {OverviewDataType} from "../helpers/overview-enum";
import {AppComponent} from "../app/app.component";

@Component({
  selector: 'overview-component',
  templateUrl: './overview-component.html',
  styleUrls: ['./overview-component.css'],
})

export class OverviewComponent implements OnInit, OnDestroy {
  @Input() assaultRifleData;
  kdRatio: number;
  kills: number;
  deaths: number;
  headshots: number;
  timePlayedTotal: number
  totalGamesPlayed: number
  winLossRatio: number
  private subscription: Subscription;

  constructor(private readonly dataService: DataService, public app: AppComponent) {
  }


  ngOnInit() {

    // this.app.loadAssaultRifleData()
    this.subscription = forkJoin([
      this.dataService.getOverviewData(OverviewDataType.KDRatio),
      this.dataService.getOverviewData(OverviewDataType.TimePlayed),
      this.dataService.getOverviewData(OverviewDataType.TotalGamePlayed),
      this.dataService.getOverviewData(OverviewDataType.WinLoseRatio)
    ]).subscribe(([kdRatio, timePlayedTotal, totalGamesPlayed, winLossRatio]
    ) => {
      this.kdRatio = kdRatio.toFixed(2);
      this.timePlayedTotal = Number((timePlayedTotal / 60 / 60).toFixed(0));
      this.totalGamesPlayed = totalGamesPlayed;
      this.winLossRatio = winLossRatio.toFixed(2);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
