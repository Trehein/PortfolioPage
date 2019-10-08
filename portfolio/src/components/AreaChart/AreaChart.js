/* eslint-disable */
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

const AreaChart = props => {
    const ref = useRef(null);

    useEffect(() => {
        const data = props.data;
        const svg = d3.select(ref.current);

        const render = data => {
            console.log(data);
            const title = 'World Population'

            const xValue = d => d.year;
            const xAxisLabel = 'Year';

            const yValue = d => d.population;
            const yAxisLabel = 'Population';

            const margin = { top: 50, right: 40, bottom: 90, left: 105 };
            const innerWidth = props.width - margin.left - margin.right;
            const innerHeight = props.height - margin.top - margin.bottom;

            const xScale = d3.scaleTime()
                .domain(d3.extent(data, xValue))
                .range([0, innerWidth])
                .nice();

            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, yValue)])
                .range([innerHeight, 0])
                .nice();

            const g = svg.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`)

            const yAxisTickFormat = number =>
                d3.format('.1s')(number)
                    .replace('G', 'B');

            const yAxis = d3.axisLeft(yScale)
                .tickSize(-innerWidth)
                .tickPadding(10)
                .tickFormat(yAxisTickFormat);

            const yAxisG = g.append('g')
                .call(yAxis)

            yAxisG
                .selectAll('.domain')
                    .remove();

            yAxisG.append('text')
                .attr('class', 'axis-label')
                .attr('y', -65)
                .attr('x', -innerHeight / 2)
                .attr('fill', 'black')
                .attr('transform', `rotate(-90)`)
                .attr('text-anchor', 'middle')
                .text(yAxisLabel)

            const xAxis = d3.axisBottom(xScale)
                .tickSize(-innerHeight)
                .tickPadding(15)
                .ticks(6)

            const xAxisG = g.append('g')
                .call(xAxis)
                .attr('transform', `translate(${0}, ${innerHeight})`)

            xAxisG
                .select('.domain')
                    .remove();

            xAxisG.append('text')
                .attr('class', 'axis-label')
                .attr('y', 75)
                .attr('x', innerWidth / 2)
                .attr('fill', 'black')
                .text(xAxisLabel)

            //option to append the area before the xis to use the lines on top of the area.
            const areaGenerator = d3.area()
                .x(d => xScale(xValue(d)))
                .y0(innerHeight)
                .y1(d => yScale(yValue(d)))
                .curve(d3.curveBasis);

            g.append('path')
                .attr('class', 'area')
                .attr('d', areaGenerator(data))

            svg.append('text')
                .attr('class', 'title')
                .attr('y', -10)
                .text(title)
                }

                render(data);
    }, [props.data]);

    return (
        <div>
            <svg width={props.width} height={props.height}>
                <g ref={ref} />
            </svg>
        </div>
    )
}

export default AreaChart;