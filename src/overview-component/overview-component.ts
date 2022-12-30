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
  timePlayedTotal: any
  totalGamesPlayed: any
  winLossRatio: any
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
      this.dataService.getOverviewData(OverviewDataType.Losses),
      this.dataService.getOverviewData('timePlayedTotal'),
      this.dataService.getOverviewData('totalGamesPlayed'),
      this.dataService.getOverviewData('winLossRatio')
    ]).subscribe(([scorePerMinute, scorePerGame, totalShots, wins, kdRatio, kills, assists, headshots, deaths, bestKillStreak, losses, timePlayedTotal, totalGamesPlayed, winLossRatio]
    ) => {
      this.scorePerMinute = scorePerMinute.toFixed(2);
      this.scorePerGame = scorePerGame.toFixed(2);
      this.totalShots = totalShots;
      this.wins = wins;
      this.kdRatio = kdRatio.toFixed(2);
      this.kills = kills;
      this.assists = assists;
      this.headshots = headshots;
      this.deaths = deaths;
      this.bestKillStreak = bestKillStreak;
      this.losses = losses;
      this.timePlayedTotal = (timePlayedTotal / 60 / 60).toFixed(0)
      this.totalGamesPlayed = totalGamesPlayed
      this.winLossRatio = winLossRatio.toFixed(2)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
