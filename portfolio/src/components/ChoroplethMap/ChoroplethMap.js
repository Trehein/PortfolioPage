import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import "../styles.css"

const ChoroplethMap = props => {
    const ref = useRef(null);

    useEffect(() => {
        const data = props.data;
        const tsv = props.tsv;
        const svg = d3.select(ref.current);

        //creates a new object, countryName and runs through the tsv data and binds the country name in the d (in this case the jsonData) 
        //to countryName where the id is = to the corresponding iso_n3

        // const countryName = {};
        // tsv.forEach(d => { //takes a row of the table
        //     countryName[d.iso_n3] = d.name; //uses d.iso_n3 as the key
        // })

        //using reduce yields the same result as the pattern above
        const countryName = tsv.reduce((accumulator, d) => {
            accumulator[d.iso_n3] = d.name; //accumulator at this key is this value
            return accumulator;
        }, {}); //the second argument, the empty {} is the initial value for the accumulator for each row, d


        const subRegion = {};
        tsv.forEach(d => {
            subRegion[d.iso_n3] = d.subregion;
        })

        //change the projection to change the entire map layout
        // const projection = d3.geoMercator();
        // const projection = d3.geoOrthographic();
        // const projection = d3.geoStereographic();
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

            const paths = g.selectAll('path')
                .data(data.features);

            paths.enter().append('path')
                .attr('class', 'country')
                .attr('d', pathGenerator)
                .attr('fill', '#088028')
                .attr('stroke', 'black')
                .attr('stroke-width', .05)
                .append('title')
                    // .text(d => subRegion[d.id]) //alternative test
                    .text(d => countryName[d.id]); //since the d.id matches the iso_n3, countryName will return the d.name
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

export default ChoroplethMap;