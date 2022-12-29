import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {forkJoin, Subscription} from "rxjs";
import {OverviewDataType} from "../helpers/overview-enum";

@Component({
  selector: 'overview-component',
  templateUrl: './overview-component.html',
  styleUrls: ['./overview-component.css'],
})

export class OverviewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  kdRatio: number;
  kills: number;
  wins: number;
  losses: number;
  bestKillStreak: number;
  deaths: number;
  headshots: number;
  assists: number;
  scorePerMinute: number;
  scorePerGame: number;
  totalShots: number;
  constructor(private readonly dataService: DataService) {
  }
  ngOnInit() {
    this.subscription = forkJoin([
      this.dataService.getOverviewData(OverviewDataType.ScorePerMinute),
      this.dataService.getOverviewData(OverviewDataType.ScorePerGame),
      this.dataService.getOverviewData(OverviewDataType.TotalShots),
      this.dataService.getOverviewData(OverviewDataType.Wins),
      this.dataService.getOverviewData(OverviewDataType.KDRatio),
      this.dataService.getOverviewData(OverviewDataType.Kills),
      this.dataService.getOverviewData(OverviewDataType.Assists),
      this.dataService.getOverviewData(OverviewDataType.Headshots),
      this.dataService.getOverviewData(OverviewDataType.Deaths),
      this.dataService.getOverviewData(OverviewDataType.BestKillStreak),
      this.dataService.getOverviewData(OverviewDataType.Losses)
    ]).subscribe(([scorePerMinute, scorePerGame, totalShots, wins, kdRatio, kills, assists, headshots, deaths, bestKillStreak, losses]
    ) => {
      this.scorePerMinute = scorePerMinute;
      this.scorePerGame = scorePerGame;
      this.totalShots = totalShots;
      this.wins = wins;
      this.kdRatio = kdRatio.toFixed(2);
      this.kills = kills;
      this.assists = assists;
      this.headshots = headshots;
      this.deaths = deaths;
      this.bestKillStreak = bestKillStreak;
      this.losses = losses;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
