import {Component, OnDestroy, OnInit,} from '@angular/core';
import {DataService} from 'src/data.service';
import * as d3 from 'd3';
import {forkJoin} from "rxjs";
import {BarChartService} from "../bar-chart-service/bar-chart.service";
import * as assets from '@callofduty/assets'
import {Router} from "@angular/router";
import {AssaultRifle, MachineGun} from "../helpers/overview-enum";

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
    const rifleNames = [AssaultRifle.Ak47, AssaultRifle.An94, AssaultRifle.Oden, AssaultRifle.Fal, AssaultRifle.Fr556, AssaultRifle.Cr56Amax, AssaultRifle.Kilo141, AssaultRifle.M13 , AssaultRifle.M4a1,AssaultRifle.FnScar17 ,AssaultRifle.Grau556 ,AssaultRifle.Ram7 ,AssaultRifle.AsVal];

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

    // const observables = pistolsName.map(pistolsName => this.dataService.getPistolData(pistolsName, this.dataByOption[this.selectedOption]));

    // forkJoin(observables).subscribe((results: any[]) => {
    //   results.forEach((result, index) => {
    //     const rifleName = pistolsName[index];
    //     pistolData[rifleName] = result;
    //   });
    //
    //   this.assaultPistoleData = Object.entries(pistolData).map(([name, value]) => ({ name, value }));
    //   this.assaultPistoleData.sort((a, b) => b.value - a.value);
    //   this.barChartService.refreshBarChart(this.assaultPistoleData, '.bar-chart-data')
    // });
  }
  loadMachineGunData(): any {
    const machineGunData: any = {};
    const machineGunName = [MachineGun.Mp7, MachineGun.Aug, MachineGun.P90, MachineGun.Iso, MachineGun.Mp5, MachineGun.Striker45, MachineGun.Pp19Bizon, MachineGun.Fennec, MachineGun.Uzi ];

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
