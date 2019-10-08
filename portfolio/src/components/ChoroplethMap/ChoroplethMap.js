/* eslint-disable */
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import "../styles.css"
import ColorSizeLegends from "../ColorSizeLegends/ColorSizeLegends";
import ChoroplethLegend from "./ChoroplethLegend";

const ChoroplethMap = props => {
    const ref = useRef(null);

    useEffect(() => {
        const data = props.data;
        const tsv = props.tsv;
        const svg = d3.select(ref.current);

        //creates a new object, rowById and runs through the tsv data and binds the all the data in the d (in this case the jsonData) 
        //to rowById where the id is = to the corresponding iso_n3

        const rowById = tsv.reduce((accumulator, d) => {
            accumulator[d.iso_n3] = d; //accumulator at this key is this value
            return accumulator;
        }, {}); //the second argument, the empty {} is the initial value for the accumulator for each row, d

        const projection = d3.geoNaturalEarth1();

        const pathGenerator = d3.geoPath().projection(projection);

        const render = data => {
            const g = svg.append('g');

            //draws the outline and background
            g.append('path')
                .attr('d', pathGenerator({ type: 'Sphere' }))
                .attr('stroke', 'black')
                .attr('stroke-opacity', 0.5)
                .attr('stroke-width', 3)
                .attr('fill', 'lightBlue')

            svg.call(d3.zoom()
                .on('zoom', () => {
                    g.attr('transform', d3.event.transform);
                }))
            
            //binds json data to all tsv data by id
            const countries = data;
            countries.features.forEach(d => {
                Object.assign(d.properties, rowById[d.id])
            })

            const colorScale = d3.scaleOrdinal();
            const colorValue = d => d.properties.economy;

            colorScale
                .domain(countries.features.map(colorValue)) //maps out the colorScale to the colorValue
                .domain(colorScale.domain().sort().reverse()) // puts the mapped domain values from colorValue in order
                .range(d3.schemeSpectral[colorScale.domain().length]);

            g.selectAll('path')
                .data(data.features)
                .enter().append('path')
                .attr('class', 'country')
                .attr('d', pathGenerator)
                .attr('fill', d => colorScale(colorValue(d)))
                .attr('stroke', 'black')
                .attr('stroke-width', .05)
                .append('title')
                    .text(d => d.properties.name + ': ' + colorValue(d)); //since the d.id matches the iso_n3, countryName will return the d.name
        }

        render(data);
    }, [props.data]);

    return (
        <div>
            <svg width={props.width} height={props.height}>
                <g ref={ref} />
                <ChoroplethLegend />
            </svg>
        </div>
    )
}

export default ChoroplethMap;