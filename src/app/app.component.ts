import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DataService } from 'src/data.service';
import * as d3 from 'd3';
import {forkJoin} from "rxjs";
import {BarChartService} from "../bar-chart-service/bar-chart.service";
import * as assets from '@callofduty/assets'
import {Router} from "@angular/router";
import {WeaponPropertiesData} from "../helpers/data-interface";
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
    headShots: 'headshots',
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

    // console.log(assets.MW.Weapon('iw8_sh_romeo870'))
    console.log(assets.MW.Map('mp_hackney_am'))
    this.barChartService.createBarChart(this.assaultRifleData, '.bar-chart-data')
  }
  ngOnDestroy() {
    const svg = d3.select('svg');
    svg.remove();
  }
  loadAssaultRifleData(): any {
    const rifleData: any = {};
    const rifleNames = ['ak47', 'an94', 'oden', 'fal', 'fr556', 'cr56amax', 'kilo141', 'm13' , 'm4a1','fnscar17' ,'grau556' ,'ram7' ,'asVal'];

    const observables = rifleNames.map(rifleName => this.dataService.getAssaultRifleData(rifleName, this.dataByOption[this.selectedOption]));

    forkJoin(observables).subscribe((results: any[]) => {
      results.forEach((result, index) => {
        const rifleName = rifleNames[index];
        rifleData[rifleName] = result;
      });

      this.assaultRifleData = Object.entries(rifleData).map(([name, value]) => ({ name, value }));
      this.assaultRifleData.sort((a, b) => b.value - a.value);
      this.barChartService.refreshBarChart(this.assaultRifleData, '.bar-chart-data')
    });
  }
  loadPistolData(): any {
    const pistolData: any = {};
    const pistolsName = ['_357', 'renetti', '_1911', 'x16', '_50gs', 'm19'];

    const observables = pistolsName.map(pistolsName => this.dataService.getPistolData(pistolsName, this.dataByOption[this.selectedOption]));

    forkJoin(observables).subscribe((results: any[]) => {
      results.forEach((result, index) => {
        const rifleName = pistolsName[index];
        pistolData[rifleName] = result;
      });

      this.assaultPistoleData = Object.entries(pistolData).map(([name, value]) => ({ name, value }));
      this.assaultPistoleData.sort((a, b) => b.value - a.value);
      this.barChartService.refreshBarChart(this.assaultPistoleData, '.bar-chart-data')
    });
  }
  loadMachineGunData(): any {
    const machineGunData: any = {};
    const machineGunName = ['mp7', 'aug', 'p90', 'iso', 'mp5', 'striker45', 'pp19Bizon', 'fennec' , 'uzi'];

    const observables = machineGunName.map(machineGunName => this.dataService.getMachineGunData(machineGunName, this.dataByOption[this.selectedOption]));

    forkJoin(observables).subscribe((results: any[]) => {
      results.forEach((result, index) => {
        const rifleName = machineGunName[index];
        machineGunData[rifleName] = result;
      });

      this.assaultMchineData = Object.entries(machineGunData).map(([name, value]) => ({ name, value }));
      this.assaultMchineData.sort((a, b) => b.value - a.value);
      this.barChartService.refreshBarChart(this.assaultMchineData, '.bar-chart-data')
    });
  }
};
