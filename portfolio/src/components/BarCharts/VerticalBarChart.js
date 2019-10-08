/* eslint-disable */
import React, { useEffect, useRef } from 'react'
import * as d3 from "d3";

const VerticalBarChart = props => {
    const ref = useRef(null);

    useEffect(() => {
        const data = props.data;
        const group = d3.select(ref.current);

        const render = data => {
            //change the d prop type to correspond with the data
            const xValue = d => d.country;
            const yValue = d => d.population;
            const margin = { top: 20, right: 20, bottom: 40, left: 100 };
            const innerWidth = props.width - margin.left - margin.right;
            const innerHeight = props.height - margin.top - margin.bottom;

            //scaleBand maps the x value and spaces them evenly
            const xScale = d3.scaleBand()
                .domain(data.map(xValue))
                .range([0, innerWidth])
                .padding(0.2)

            //assigns a max value for setting domains
            const yMax = d3.max(data, d => d.population)

            //calculates the scale for the bars
            const yScale = d3.scaleLinear()
                .domain([0, yMax])
                .range([0, innerHeight])
            
            //almost exactly like yScale but the range is flipped because svg orientation starts at the top and this means that the labels would be in reverse order with 0 at the top of the chart and the max at the bottom.
            const yAxisScale = d3.scaleLinear()
                .domain([0, yMax])
                .range([innerHeight, 0]);


            //appends a g for the graph component that is translated to allow for room for the axis
            const g = group.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`)

            //appends axis
            const yAxisTickFormat = number => d3.format('.3s')(number).replace('G', 'B');
            
            const yAxis = d3.axisLeft(yAxisScale)
                .tickFormat(yAxisTickFormat)
                .tickSize(-innerWidth)

            const yAxisG = g.append('g')
                .call(yAxis)

            yAxisG.selectAll('line')
                .attr('stroke','#C0C0BB')

            yAxisG.selectAll('text')
                .attr('font-size', '2em')

            yAxisG.select('.domain')
                .remove();

            g.append('g').call(d3.axisBottom(xScale))
                .attr('transform', `translate(${0}, ${innerHeight})`);

            //appends bars using the x and y scales
            g.selectAll('rect')
                .data(data)
                .enter().append('rect')
                    .attr('x', d => xScale(xValue(d)))
                    .attr('y', d => (innerHeight - yScale(yValue(d))))
                    .attr('width', xScale.bandwidth())
                    .attr('height', d => (yScale(yValue(d))))
                    .attr('fill', 'steelBlue')
        }
        console.log(data)
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

export default VerticalBarChart;