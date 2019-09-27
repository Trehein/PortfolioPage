//tutorial starts at 7:37ish
//Data structure gets wonky at N.A. which is why the branches don't stretch all the way to the right could fix

import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

const HierarchyTree = props => {
    const ref = useRef(null);

    useEffect(() => {
        const data = props.data;
        const svg = d3.select(ref.current);
        const margin = { top: 0, right: 50, bottom: 0, left: 40 }
        const innerWidth = props.width - margin.left - margin.right;
        const innerHeight = props.width - margin.top - margin.bottom;

        const treeLayout = d3.tree() //can substitute cluster for slightly different effect
            .size([innerHeight, innerWidth])

        const render = data => {
            const root = d3.hierarchy(data); // hierarchy is for data already in acceptable json. use .stratify for csv data structures
            const links = treeLayout(root).links(); //sets the d.x and d.y and returns an array of values you can use for the links object
            //horizontal link path generator
            const linkPathGenerator = d3.linkHorizontal()
                .x(d => d.y)
                .y(d => d.x);

            //vertical link path generator
            // const linkPathGenerator = d3.linkVertical() //could also use d3.linkHorizontal for a slighty different effect on vertical tree
            //     .x(d => d.x)
            //     .y(d => d.y);

            const zoomG = svg.append('g')

            const g = zoomG.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);

            svg.call(d3.zoom().on('zoom', () => {
                zoomG.attr('transform', d3.event.transform)
            }))


            g.selectAll('path').data(links)
                .enter().append('path')
                    .attr('d', linkPathGenerator)
                    .attr('fill', 'none')
                    .attr('stroke', "steelblue")
                    // .attr('stroke-width')

            g.selectAll('text').data(root.descendants())
                .enter().append('text')
                    .attr('class', 'treeText')
                    .attr('pointer-events', 'none')
                    // .attr('font-size', d => 3.2 - d.depth + 'em') //alternative that scales down depending on depth attribute of data
                    .attr('font-size', d => {
                        if(d.depth === 0) {
                            return '1.2em';
                        } else if(d.depth === 1) {
                            return '.9em';
                        } else if(d.depth === 2) {
                            return '.5em';
                        } else {
                            return '.2em';
                        }
                    })
                    .attr('text-anchor', d => d.children ? 'middle' : 'start') //if, else operator for if there are children or not
                    .attr('x', d => d.y)
                    .attr('y', d => d.x)
                    .attr('dy', '0.32em') // drops text to position directly on the node
                    .text(d => d.data.data.id); //strange data structure due to root and .descendants

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

export default HierarchyTree;