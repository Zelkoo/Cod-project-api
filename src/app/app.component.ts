import {Component, Input, OnDestroy, OnInit, Output, VERSION, ViewChild} from '@angular/core';
import { DataService } from 'src/data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  private data: any[];
  private PistolData: any[]
  constructor(public dataService: DataService) {
    this.data = [
      { name: 'ak47', value: 0 },
      { name: 'an94', value: 0 },
      { name: 'oden', value: 0 },
      { name: 'fal', value: 0 },
      { name: 'fr556', value: 0 },
      { name: 'cr56amax', value: 0 },
      { name: 'kilo141', value: 0 },
      { name: 'm13', value: 0 },
      { name: 'm4a1', value: 0 },
      { name: 'fnscar17', value: 0 },
      { name: 'grau556', value: 0 },
      { name: 'ram7', value: 0 },
      { name: 'asVal', value: 0 }
    ];
    this.PistolData = [
      { name: '_357', value: 54 },
      { name: 'renetti', value: 897 },
      { name: '_1911', value: 321 },
      { name: 'x16', value: 423 },
      { name: '_50gs', value: 2121 },
      { name: 'm19', value: 32 },
    ];
  }
  ngOnInit() {

    const rifleData: any = {}
    const rifleNames = ['ak47', 'an94', 'oden', 'fal', 'fr556', 'cr56amax', 'kilo141', 'm13' , 'm4a1','fnscar17' ,'grau556' ,'ram7' ,'asVal'];
    for (const rifleName of rifleNames) {
      this.dataService.getAssaultRifleData(rifleName, 'kills')
        .subscribe((data: any) => {
          rifleData[rifleName] = data;
          this.data[0].value = rifleData.ak47
          this.data[1].value = rifleData.an94
          this.data[2].value = rifleData.oden
          this.data[3].value = rifleData.fal
          this.data[4].value = rifleData.fr556
          this.data[5].value = rifleData.cr56amax
          this.data[6].value = rifleData.kilo141
          this.data[7].value = rifleData.m13
          this.data[8].value = rifleData.m4a1
          this.data[9].value = rifleData.fnscar17
          this.data[11].value = rifleData.grau556
          this.data[12].value = rifleData.ram7
          this.data[13].value = rifleData.asVal
        });
    }
    setTimeout(() => {
      this.data.sort((a, b) => {
        return b.value - a.value
      })
      this.createChart(this.data)
    }, 500)
  }
  private createChart(data: any[]) {
    const element = d3.select('.chart');
    const svg = element.append('svg')
      .attr('width', 800)
      .attr('height', 600);

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
      .attr('y', d => y(d.value))
      .attr('fill', d => d.value > 200 ? '#004d99' : '#003366')
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('title', d => d.value)
      .on('mouseover', function() {
      d3.select(this).style('cursor', 'pointer')
        d3.select(this).style('fill', '#ff0000');
    })
      .on('mouseout', function() {
        d3.select(this).style('fill', (d: any) => d.value > 200 ? '#004d99' : '#003366');
      });;
  }
}
