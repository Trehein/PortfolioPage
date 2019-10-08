/* eslint-disable */
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import { colorLegend } from '../ColorSizeLegends/ColorLegend'
import { sizeLegend } from '../ColorSizeLegends/SizeLegend'

const ChoroplethLegend = () => {
    const ref = useRef(null);

    useEffect(() => {
        const g = d3.select(ref.current)
        const colorScale = d3.scaleOrdinal()
            .domain(['apple', 'lemon', 'lime', 'orange'])
            .range(['#c11d1d', '#eae600', 'green', 'orange'])

        const sizeScale = d3.scaleSqrt()
            .domain([0, 10])
            .range([0, 50])

        const control = () => {

            g.append('g')
                .attr('transform', `translate(100, 200)`)
                .call(
                    colorLegend, { // splits out a module, colorLegend
                        colorScale,
                        circleRadius: 30,
                        spacing: 80,
                        textOffset: 45
                    })

            g.append('g')
                .attr('transform', `translate(500, 150)`)
                .call(
                    sizeLegend, { // splits out a module, colorLegend
                        sizeScale,
                        numTicks: 5,
                        spacing: 80,
                        textOffset: 10,
                        circleFill: 'rgba(0, 0, 0, 0.5)'
                    })
        }
        control();
    }, []);

    return (
        <g ref={ref} />
    )
}

export default ChoroplethLegend;