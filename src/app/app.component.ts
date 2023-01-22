import {Component, OnDestroy, OnInit,} from '@angular/core';
import {DataService} from 'src/data.service';
import * as d3 from 'd3';
import {forkJoin} from "rxjs";
import {BarChartService} from "../bar-chart-service/bar-chart.service";
import * as assets from '@callofduty/assets'
import {Router} from "@angular/router";
import {AssaultRifle, Pistols, WeaponType} from "../helpers/overview-enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit, OnDestroy {
 selectedOption: any;
  options = ['kills', 'deaths', 'hits', 'kdRatio', 'headshots', 'accuracy', 'shots'];
  dataByOption:any = {
    kills: 'kills' ,
    deaths: 'deaths',
    hits: 'hits',
    kdRatio: 'kdRatio',
    headshots: 'headshots',
    accuracy: 'accuracy',
    shots: 'shots'
  };
  public assaultMchineData: any[]
public  assaultPistoleData: any[];
  public assaultRifleData: any[];
  public shotgunData: any[]
  public marksmanData: any[];
  public pkmData: any[]
  public sniperData: any[];
  public machineGunData: any[]
  public tacticalEqData: any[];
  public killStreakData: any[]
  public fieldUpgradeData: any[];
  public pistolData: any[]
  public rocketLuncherData: any[];
  public meleeData: any[]
  constructor(public dataService: DataService, public barChartService: BarChartService, public router: Router) {

  }
  ngOnInit() {
    console.log(assets.MW.Map('mp_hackney_am'))
  }
  onMenuToggle(isOpen: boolean) {
    console.log(isOpen);
  }
  ngOnDestroy() {
    const svg = d3.select('svg');
    svg.remove();
  }
  loadAssaultRifleData(): any {
    const rifleData: any = {};
    const rifleNames = [AssaultRifle.Ak47, AssaultRifle.An94, AssaultRifle.Oden, AssaultRifle.Fal, AssaultRifle.Fr556, AssaultRifle.Cr56Amax, AssaultRifle.Kilo141, AssaultRifle.M13 , AssaultRifle.M4a1,AssaultRifle.FnScar17 ,AssaultRifle.Grau556 ,AssaultRifle.Ram7 ,AssaultRifle.AsVal];
    const assaultRifleNames = Object.keys(AssaultRifle);

    const observables = rifleNames.map(rifleName => this.dataService.getWeaponData(WeaponType.assault ,rifleName, this.dataByOption[this.selectedOption]));

    forkJoin(observables).subscribe((results: any[]) => {
      results.forEach((result, index) => {
        const rifleName = rifleNames[index];
        rifleData[rifleName] = result;
      });
      this.assaultRifleData = Object.entries(rifleData).map(([name, value], index) => ({ name: assaultRifleNames[index], value }))
      this.barChartService.refreshBarChart(this.assaultRifleData, '.bar-chart-data')
    });
  }

  sortBarChart(): void {
    this.assaultRifleData.sort((a, b) => b.value - a.value);
    this.barChartService.refreshBarChart(this.assaultRifleData, '.bar-chart-data')
  }

  loadPistolData(): any {
    const pistolData: any = {};
    const pistolsNames = [Pistols.Renetti, Pistols.M19, Pistols.x16, Pistols._50gs, Pistols._1911 ];

    const observables = pistolsNames.map(pistolsName => this.dataService.getWeaponData(WeaponType.pistol,pistolsName,  this.dataByOption[this.selectedOption]));

    forkJoin(observables).subscribe((results: any[]) => {
      results.forEach((result, index) => {
        const rifleName = pistolsNames[index];
        pistolData[rifleName] = result;
      });

      this.assaultPistoleData = Object.entries(pistolData).map(([name, value]) => ({ name, value }));
      this.assaultPistoleData.sort((a, b) => b.value - a.value);
      this.barChartService.refreshBarChart(this.assaultPistoleData, '.bar-chart-data')
    });
  }
};
