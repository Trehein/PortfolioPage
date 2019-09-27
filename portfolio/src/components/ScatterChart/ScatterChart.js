import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

const ScatterChart = props => {
    const ref = useRef(null);

    useEffect(() => {
        const data = props.data;
        const group = d3.select(ref.current);

        const render = data => {
            console.log(data)

            const title = 'Cars: Horsepower vs Weight';

            const xValue = d => d.horsepower;
            const xAxisLabel = 'Horsepower';
            
            const yValue = d => d.weight;
            const yAxisLabel = 'Weight';

            const circleRadius = 10;

            const margin = { top: 70, right: 40, bottom: 90, left: 120 }
            const innerWidth = props.width - margin.left - margin.right;
            const innerHeight = props.height - margin.top - margin.bottom;

            const xScale = d3.scaleLinear()
                .domain(d3.extent(data, xValue))
                .range([0, innerWidth])
                .nice();

            const yScale = d3.scaleLinear()
                .domain(d3.extent(data, yValue))
                .range([innerHeight, 0])
                .nice();

            const g = group.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`)

            const yAxis = d3.axisLeft(yScale)
                .tickSize(-innerWidth)
                .tickPadding(10)

            const yAxisG = g.append('g')
                .call(yAxis)

            yAxisG
                .selectAll('.domain')
                    .remove();

            yAxisG.append('text')
                .attr('class', 'axis-label')
                .attr('y', -60)
                .attr('x', -innerHeight / 2)
                .attr('fill', 'black')
                .attr('transform', `rotate(-90)`)
                .attr('text-anchor', 'middle')
                .text(yAxisLabel)

            const xAxis = d3.axisBottom(xScale)
                .tickSize(-innerHeight)
                .tickPadding(15)

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

            yAxisG.selectAll('line')
                .attr('stroke', '#C0C0BB')

            xAxisG.selectAll('line')
                .attr('stroke', '#C0C0BB')

            g.selectAll('circle')
                .data(data)
                .enter().append('circle')
                    .attr('cy', d => yScale(yValue(d)))
                    .attr('cx', d => xScale(xValue(d)))
                    .attr('r', circleRadius)
                    .attr('fill', 'steelblue')
                    .attr('opacity', .5)

            g.append('text')
                .attr('class', 'title')
                .attr('y', -20)
                .attr('transform', `translate(${80}, ${0})`)
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

export default ScatterChart;