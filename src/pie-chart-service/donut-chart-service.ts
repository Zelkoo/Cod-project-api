import {Injectable} from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class DonutChartService {
  public width = 250;
  public height = 250;
  public margin = 40;
  public radius = Math.min(this.width, this.height) / 2 - this.margin;
  public radius2 = Math.min(this.width, this.height) / 5 - this.margin

  constructor() {
  }

  public createChart(element: string, data: any[]) {
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
      )

    const color = d3.scaleOrdinal(['#970202', '#55e00d']);

    const pie = d3
      .pie()
      .value((d: any) => d.count)
      .sort(null)


    const path = d3
      .arc()
      .outerRadius(this.radius)
      .innerRadius(this.radius / 2);

    const arc = svg
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .on("mouseover", function (d) {
        d3.select(this)
          .select("path")
          .style("opacity", 0.7)
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .select("path")
          .style("opacity", 1);
      })

    arc.append('path')//@ts-ignore
      .attr('d', path)
      .attr('fill', (d: any) => color(d.data.label));

    arc.append('text')
      .transition()
      .duration(750)
      .attr('transform', (d: any) => 'translate(' + path.centroid(d) + ')')
      .attr('dy', '0.35em')
      .attr('fill', 'black')
      .text((d: any) => d.data.label)
      .attr('title', (d: any) => d.data.name)
  }
}
