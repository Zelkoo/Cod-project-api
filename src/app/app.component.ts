import {Component, Input, OnDestroy, OnInit, Output, SimpleChange, VERSION, ViewChild} from '@angular/core';
import { DataService } from 'src/data.service';
import * as d3 from 'd3';
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  inputValue: string;
  private assaultRifleData: any[];
  private shotgunData: any[]
  private marksmanData: any[];
  private pkmData: any[]
  private sniperData: any[];
  private machineGunData: any[]
  private tacticalEqData: any[];
  private killStreakData: any[]
  private fieldUpgradeData: any[];
  private pistolData: any[]
  private rocketLuncherData: any[];
  private meleeData: any[]
  constructor(public dataService: DataService) {
    this.assaultRifleData = [
      { name: null, value: null }
    ];
    this.shotgunData = [
      { name: null, value: null },
    ];
    this.marksmanData = [
      { name: null, value: null },
    ];
    this.pkmData = [
      { name: null, value: null },
    ];
    this.sniperData = [
      { name: null, value: null },
    ];
    this.machineGunData = [
      { name: null, value: null },
    ];
    this.tacticalEqData = [
      { name: null, value: null },
    ];
    this.killStreakData = [
      { name: null, value: null },
    ];
    this.fieldUpgradeData = [
      { name: null, value: null },
    ];
    this.pistolData = [
      { name: null, value: null },
    ];
    this.rocketLuncherData = [
      { name: null, value: null },
    ];
    this.meleeData = [
      { name: null, value: null },
    ]
  }
  ngOnInit() {
    const meleeData: any = {}


    const marksmanData: any = {}
    const pkmData: any = {}
    const sniperData: any = {}
    const machineGunData: any = {}
    const pistolData: any = {}
    const rocketLuncherData: any = {}
    const fieldUpgradeData: any = {}
    const killStreakData: any = {}
    const tacticalEqData: any = {}
    const shotgunData: any = {}
    const shotgunNames = ['model1680', 'r90', 'origin12', 'vlkRouge', 'jak12'];
    const meleeNames = ['knife', 'akimboBlades', 'akimboBlunt', 'shield'];
    const marksmanNames = ['ebr14', 'mk2Carbine', 'kark98k', 'crossBow', 'sks', 'srpr208'];
    const pkmNames = ['pkm', 'sa87', 'm91', 'mg34', 'holger26', 'burenMk9', 'rkmFinn', 'kmRaal'];
    const sniperNames = ['ax50', 'rytecAmr', 'hdr', 'dragunow'];
    const machineGunNames = ['mp7', 'aug', 'p90', 'iso', 'mp5', 'striker45', 'pp19Bizon', 'fennec', 'uzi'];
    const pistolNames = ['_357', 'renetti', '_1911', 'x16', '_50gs', 'm19'];
    const rocketLuncherNames = ['pila', 'rpg7', 'joker', 'sterlap'];
    const fieldUpgradeNames = ['droneIem', 'trophy', 'supplyDrop', 'drop', 'armorBox', 'recon', 'deadSilence', 'tacticShield', 'powerAmmo', 'balon'];
    const killStreakNames = ['airStrike', 'cruiseMissile', 'manualTurret', 'whitePhosphorus', 'jetVtol','chopperGunner', 'gunShip', 'autoTurret', 'clusterFire', 'colos', 'chopperSupport', 'wheelson', 'airDrop', 'chopperRadar', 'counterUav', 'uav', 'superUav'];
    const tacticalEqNames = ['gasGranate', 'wykrywajacy', 'decoy', 'smoke', 'ogluszajacy', 'sensorPulse', 'flesh', 'adrealine', 'granate', 'thermit', 'claymore', 'c4', 'mine', 'throwingKnife', 'molotov'];


    for (let i = 0; i < shotgunNames.length; i++) {
      const shotguneName = shotgunNames[i];
      this.dataService.getShotgunRifleData(shotguneName, 'kills')
        .subscribe((data: any) => {
          shotgunData[shotguneName] = data;
          this.shotgunData[i] = {
            name: shotguneName,
            value: shotgunData[shotguneName]
          };
        });
    }
    for (let i = 0; i < marksmanNames.length; i++) {
      const marksmaneName = marksmanNames[i];
      this.dataService.getMarksmanRifleData(marksmaneName, 'kills')
        .subscribe((data: any) => {
          marksmanData[marksmaneName] = data;
          this.marksmanData[i] = {
            name: marksmaneName,
            value: marksmanData[marksmaneName]
          };
        });
    }
    for (let i = 0; i < pkmNames.length; i++) {
      const pkmName = pkmNames[i];
      this.dataService.getLargeMachineGunqData(pkmName, 'kills')
        .subscribe((data: any) => {
          pkmData[pkmName] = data;
          this.pkmData[i] = {
            name: pkmName,
            value: pkmData[pkmName]
          };
        });
    }
    for (let i = 0; i < sniperNames.length; i++) {
      const sniperName = sniperNames[i];
      this.dataService.getSniperRifleData(sniperName, 'kills')
        .subscribe((data: any) => {
          sniperData[sniperName] = data;
          this.sniperData[i] = {
            name: sniperName,
            value: sniperData[sniperName]
          };
        });
    }
    for (let i = 0; i < machineGunNames.length; i++) {
      const machineGunName = machineGunNames[i];
      this.dataService.getMachineGunData(machineGunName, 'kills')
        .subscribe((data: any) => {
          machineGunData[machineGunName] = data;
          this.machineGunData[i] = {
            name: machineGunName,
            value: machineGunData[machineGunName]
          };
        });
    }
    for (let i = 0; i < tacticalEqNames.length; i++) {
      const tacticalEqName = tacticalEqNames[i];
      this.dataService.getTacticalEqData(tacticalEqName, 'uses')
        .subscribe((data: any) => {
          tacticalEqData[tacticalEqName] = data;
          this.tacticalEqData[i] = {
            name: tacticalEqName,
            value: tacticalEqData[tacticalEqName]
          };
        });
    }
    for (let i = 0; i < killStreakNames.length; i++) {
      const killStreakName = killStreakNames[i];
      this.dataService.getKillsStreakData(killStreakName, 'uses')
        .subscribe((data: any) => {
          killStreakData[killStreakName] = data;
          this.killStreakData[i] = {
            name: killStreakName,
            value: killStreakData[killStreakName]
          };
        });
    }
    for (let i = 0; i < fieldUpgradeNames.length; i++) {
      const fieldUpgradeName = fieldUpgradeNames[i];
      this.dataService.getFieldUpgradesData(fieldUpgradeName, 'uses')
        .subscribe((data: any) => {
          fieldUpgradeData[fieldUpgradeName] = data;
          this.fieldUpgradeData[i] = {
            name: fieldUpgradeName,
            value: fieldUpgradeData[fieldUpgradeName]
          };
        });
    }
    for (let i = 0; i < pistolNames.length; i++) {
      const pistolName = pistolNames[i];
      this.dataService.getPistolData(pistolName, 'kills')
        .subscribe((data: any) => {
          pistolData[pistolName] = data;
          this.pistolData[i] = {
            name: pistolName,
            value: pistolData[pistolName]
          };
        });
    }
    for (let i = 0; i < rocketLuncherNames.length; i++) {
      const rocketLuncherName = rocketLuncherNames[i];
      this.dataService.getShotgunRifleData(rocketLuncherName, 'kills')
        .subscribe((data: any) => {
          rocketLuncherData[rocketLuncherName] = data;
          this.rocketLuncherData[i] = {
            name: rocketLuncherName,
            value: rocketLuncherData[rocketLuncherName]
          };
        });
    }
    for (let i = 0; i < meleeNames.length; i++) {
      const meleeeName = meleeNames[i];
      this.dataService.getShotgunRifleData(meleeeName, 'kills')
        .subscribe((data: any) => {
          meleeData[meleeeName] = data;
          this.meleeData[i] = {
            name: meleeeName,
            value: meleeData[meleeeName]
          };
        });
    }
  }

  onClick(): any {
    const rifleData: any = {};
    const rifleNames = ['ak47', 'an94', 'oden', 'fal', 'fr556', 'cr56amax', 'kilo141', 'm13' , 'm4a1','fnscar17' ,'grau556' ,'ram7' ,'asVal'];

    const observables = rifleNames.map(rifleName => this.dataService.getAssaultRifleData(rifleName, this.inputValue));

    forkJoin(observables).subscribe((results: any[]) => {
      results.forEach((result, index) => {
        const rifleName = rifleNames[index];
        rifleData[rifleName] = result;
      });

      this.assaultRifleData = Object.entries(rifleData).map(([name, value]) => ({ name, value }));
      this.assaultRifleData.sort((a, b) => b.value - a.value);
      this.createChart(this.assaultRifleData);
      this.createLegend(rifleNames)
    });
  }
  private createLegend(data: any[]) {
    const Svg = d3.select("#my_dataviz2")

    const color = d3.scaleOrdinal()
      .domain(data)
      .range(d3.schemeSet2);

    Svg.selectAll("mydots")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", 100)
      .attr("cy", function(d,i){ return 100 + i*25})
      //@ts-ignore
      .attr("r", 7)
      //@ts-ignore
      .style("fill", function(d){ return color(d)})

    Svg.selectAll("mylabels")
      .data(data)
      .enter()
      .append("text")
      .attr("x", 120)
      .attr("y", function(d,i){ return 100 + i*25}) //
      //@ts-ignore
      .style("fill", function(d){ return color(d)})
      .text(function(d){ return d})
      .attr("text-anchor", "left")
      .style("alignment-baseline", "middle")
  }

  private createChart(data: any[]) {
    const element = d3.select('.chart');
    const svg = element.append('svg')
      .attr('width', 800)
      .attr('height', 600);

    const color = d3.scaleOrdinal()
      .domain(data)
      .range(d3.schemeSet2);

    const margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.2)
    const y = d3.scaleLinear()
      .rangeRound([height, 0]);

    x.domain(data.map(d => d.name));
    y.domain([0, d3.max(data, d => d.value)]);

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))


    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 5)
      .attr('dy', '1.71em')
      .attr('text-anchor', 'end')
      .text('Value')

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))//@ts-ignore
      .attr("fill", "black")
      .attr("opacity", 0.5)//@ts-ignore
      .style("fill", function(d){ return color(d)})
      .attr('width', x.bandwidth())
      .text('lolololol')
      .attr('height', d => height - y(d.value))
      .attr('title', d => d.value)
      .on('mouseover', function() {
      d3.select(this).style('cursor', 'pointer')
    })
  }
};
