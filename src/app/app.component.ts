import {Component, Input, OnDestroy, OnInit,} from '@angular/core';
import {DataService} from 'src/data.service';
import * as d3 from 'd3';
import {forkJoin} from "rxjs";
import {BarChartService} from "../bar-chart-service/bar-chart.service";
import * as assets from '@callofduty/assets'
import {Router} from "@angular/router";
import {AssaultRifle, WeaponType} from "../helpers/overview-enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit, OnDestroy {
  @Input() selectedOption: any;
  options = ['kills', 'deaths', 'hits', 'kdRatio', 'headshots', 'accuracy', 'shots'];
  dataByOption: any = {
    kills: 'kills',
    deaths: 'deaths',
    hits: 'hits',
    kdRatio: 'kdRatio',
    headshots: 'headshots',
    accuracy: 'accuracy',
    shots: 'shots'
  };
  public assaultPistoleData: any[];
  public assaultRifleData: any[];
  weaponImage = ['iw8_pi_cpapa', 'iw8_pi_decho', 'iw8_pi_mike1911', 'iw8_pi_papa320', 'iw8_pi_mike9', 'iw8_pi_golf21', 'iw8_sh_charlie725', 'iw8_sh_romeo870', 'iw8_sh_oscar12', 'iw8_sh_dpapa12', 'iw8_sh_mike26', 'iw8_sm_augolf', 'iw8_sm_victor', 'iw8_sm_mpapa5', 'iw8_sm_mpapa7', 'iw8_sm_papa90', 'iw8_sm_beta', 'iw8_sm_smgolf45', 'iw8_sm_uzulu', 'iw8_ar_akilo47', 'iw8_ar_galima', 'iw8_ar_falima', 'iw8_ar_scharlie', 'iw8_ar_falpha', 'iw8_ar_sierra552', 'iw8_ar_kilo433', 'iw8_ar_mcharlie', 'iw8_ar_mike4', 'iw8_ar_asierra12', 'iw8_ar_tango21', 'iw8_lm_mkilo3', 'iw8_lm_mgolf36', 'iw8_lm_kilo121', 'iw8_lm_mgolf34', 'iw8_lm_pkilo', 'iw8_lm_lima86', 'iw8_sn_alpha50', 'iw8_sn_crossbow', 'iw8_sn_delta', 'iw8_sn_mike14', 'iw8_sn_hdromeo', 'iw8_sn_kilo98', 'iw8_sn_sbeta', 'iw8_sn_xmike109', 'iw8_sn_sksierra', 'iw8_la_juliet', 'iw8_la_gromeo', 'iw8_la_rpapa7', 'iw8_la_kgolf', 'iw8_me_soscar', 'iw8_me_akimboblades', 'iw8_me_akimboblunt', 'iw8_me_riotshield'];

  constructor(public dataService: DataService, public barChartService: BarChartService, public router: Router) {
  }

  ngOnInit() {
    this.weaponImage.forEach((s: any, name: any) => {
      const data = assets.MW.Weapon(s)
      console.log(data.name, data.image)
    })
    console.log(assets.MW.Map('mp_hackney_am'))
    console.log(assets.MW.Weapon)
  }

  ngOnDestroy() {
    const svg = d3.select('svg');
    svg.remove();
  }

  onSelectedOptionChange(option: any) {
    this.selectedOption = option;

  }

  loadAssaultRifleData(): any {
    const rifleData: any = {};
    const rifleNames = [AssaultRifle.Ak47, AssaultRifle.An94, AssaultRifle.Oden, AssaultRifle.Fal, AssaultRifle.Fr556, AssaultRifle.Cr56Amax, AssaultRifle.Kilo141, AssaultRifle.M13, AssaultRifle.M4a1, AssaultRifle.FnScar17, AssaultRifle.Grau556, AssaultRifle.Ram7, AssaultRifle.AsVal];
    const assaultRifleNames = Object.keys(AssaultRifle);

    const observables = rifleNames.map(rifleName => this.dataService.getWeaponData(WeaponType.assault, rifleName, this.dataByOption[this.selectedOption]));

    forkJoin(observables).subscribe((results: any[]) => {
      results.forEach((result, index) => {
        const rifleName = rifleNames[index];
        rifleData[rifleName] = result;
      });
      this.assaultRifleData = Object.entries(rifleData).map(([name, value], index) => ({
        name: assaultRifleNames[index],
        value
      }))
      this.barChartService.refreshBarChart(this.assaultRifleData, '.bar-chart-data')
      this.sortBarChart()
    });
  }

  sortBarChart(): void {
    this.assaultRifleData.sort((a, b) => b.value - a.value);
    this.barChartService.refreshBarChart(this.assaultRifleData, '.bar-chart-data')
  }

};
