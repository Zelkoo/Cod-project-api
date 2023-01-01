import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  constructor() { }

  public createBarChart(data: { name: string, value: number }[], el: string) {
    const element = d3.select(el);
    const svg = element.append('svg')
      .attr('width', 1000)
      .attr('height', 500);


    const margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;
    const colorsPalete = ['#f44336', '#e81e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800'];

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

      .attr("fill", "white")
      .attr('text-anchor', 'end')

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))
      .attr("fill", "white")
      .attr("opacity", 0.8)
      .style("fill", (d: any, i: number) => colorsPalete[i])
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('title', d => d.value)
      .on('mouseover', function() {
        d3.select(this).style('cursor', 'pointer')
      })

    const legend = g.append('g')
      .attr('transform', 'translate(' + (width - 100) + ',0)');

    legend.selectAll('rect')
      .data(data)
      .enter().append('rect')
      .attr('x', 0)
      .attr('y', (d: any, i: number) => i * 20)
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', (d: any, i: number) => colorsPalete[i]);

    legend.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('fill', '#494040')
      .attr('x', 15)
      .attr('y', (d: any, i: number) => i * 20 + 9)
      .attr('font-size', '20px')
      .text((d: any) => d.name);
  }
}
