import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const HorizontalBarChart = props => {
    const ref = useRef(null);
    // const cache = useRef(props.data);
    // const axisCache = useRef(false);

    useEffect(() => {
        const data = props.data;
        // const prevData = cache.current;
        const group = d3.select(ref.current);

        const render = data => {
            const xValue = d => d.population;
            const yValue = d => d.country;
            const margin = { top: 50, right: 40, bottom: 75, left: 200 }
            const innerWidth = props.width - margin.left - margin.right;
            const innerHeight = props.height - margin.top - margin.bottom;

            const xScale = d3.scaleLinear()
                .domain([0, d3.max(data, xValue)])
                .range([0, innerWidth])
                .nice();

            const yScale = d3.scaleBand()
                .domain(data.map(yValue))
                .range([0, innerHeight])
                .padding(0.1);

            const g = group.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);

            g.append('g')
                .call(d3.axisLeft(yScale))
                .selectAll('.domain, .tick line')
                    .remove();

            const xAxisTickFormat = number => d3.format('.3s')(number).replace('G', 'B')
            
            const xAxis = d3.axisBottom(xScale)
                .tickFormat(xAxisTickFormat)
                .tickSize(-innerHeight)

            const xAxisG = g.append('g')
                .call(xAxis)
                .attr('transform', `translate(${0}, ${innerHeight})`);

            xAxisG.selectAll('line')
                .attr('stroke', '#C0C0BB')

            xAxisG.selectAll('text')
                .attr('font-size', '2em')
            
            xAxisG.select('.domain')
                .remove();

            g.selectAll('rect')
                .data(data)
                .enter().append('rect')
                    .attr('y', d => yScale(yValue(d)))
                    .attr('width', d => xScale(xValue(d)))
                    .attr('height', yScale.bandwidth())
                    .attr('fill', 'steelBlue')
                    // for gradient bar fill experiment
                    // .attr('fill', "url('#myGradient')")
        }
        // console.log(data);
        render(data);
        // cache.current = props.data;
        // axisCache.current = true;
    }, [props.data]);
    
    return (
        <div>
            <svg width={props.width} height={props.height}>
                {/* experiment with gradient fill */}
                {/* <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(90)">
                    <stop offset="5%"  stopColor="gold" />
                    <stop offset="95%" stopColor="red" />
                    </linearGradient>
                </defs> */}
                <g ref={ref} />
            </svg>
        </div>
    )
}

export default HorizontalBarChart;
