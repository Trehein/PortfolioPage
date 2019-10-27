/* eslint-disable */
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

const CollapsibleWeb = props => {
    const ref = useRef(null);

    useEffect(() => {
        const data = props.data;
        const svg = d3.select(ref.current);
        const margin = { top: 20, right: 20, bottom: 20, left: 20 }
        const innerWidth = props.width - margin.left - margin.right;
        const innerHeight = props.width - margin.top - margin.bottom;

        const render = data => {
            let i = 0;
            const root = d3.hierarchy(data);
            const transform = d3.zoomIdentity;
            let node, link;

            svg.call(d3.zoom().scaleExtent([1/2, 8]).on('zoom', zoomed))
                .append('g')
                .attr('transform', 'translate(40,0)');

            const simulation = d3.forceSimulation()
                .force('link', d3.forceLink().id(d => d.id))
                .force('charge', d3.forceManyBody().strength(-15).distanceMax(300))
                .force('center', d3.forceCenter( innerWidth/2, innerHeight/4 ))
                .on('tick', ticked)

            function update() {
                const nodes = flatten(root)
                const links = root.links()

                link = svg
                    .selectAll('.link')
                    .data(links, d => d.target.id)

                link.exit().remove()

                const linkEnter = link
                    .enter()
                    .append('line')
                    .attr('class', 'link')
                    .style('stroke', '#000' )
                    .style('opacity', '0.2')
                    .style('stroke-width', 2)

                link = linkEnter.merge(link)

                node = svg
                    .selectAll('.node')
                    .data(nodes, d => d.id)

                node.exit().remove()

                const nodeEnter = node
                    .enter()
                    .append('g')
                    .attr('class', 'node')
                    .attr('stroke', '#666')
                    .attr('stroke-width', 2)
                    .style('fill', color)
                    .style('opacity', 1)
                    // .on('click', clicked)
                    // .call(d3.drag()
                    // .on('start', dragstarted)
                    // .on('drag', dragged)
                    // .on('end', dragended))

                nodeEnter.append('circle')
                    .attr("r", d => Math.sqrt(d.data.size) / 10 || 4.5)
                    .style('text-anchor', d => d.children ? 'end' : 'start')
                    .text(d => d.data.name)
                
                node = nodeEnter.merge(node)
                simulation.nodes(nodes)
                simulation.force('link').links(links)
            }


            //app functionality

            // sizeContain = (num) => {
            //     num = num > 1000 ? num/1000 : num/100
            //     if(num < 4) num = 4
            //     return num
            // }

            function color(d) {
                return d._children ? "#51A1DC" // collapsed package
                    : d.children ? "#51A1DC" // expanded package
                    : "#F94B4C"; // leaf node
            }

            function radius(d) {
                return d._children ? 10
                    : d.children ? 10
                    : 5
            }


            function ticked() {
                link
                .attr('x1', d => d.source.x )
                .attr('y1', d => d.source.y )
                .attr('x2', d => d.target.x )
                .attr('y2', d => d.target.y )
              
              node
                .attr('transform', d => `translate(${d.x}, ${d.y})`)
            }

            function flatten(root) {
                const nodes = []
                function recurse(node) {
                    if (node.children) node.children.forEach(recurse)
                    if (!node.id) node.id = ++i;
                    else ++i;
                    nodes.push(node)
                }
                recurse(root)
                return nodes
            }
                    
            function zoomed() {
                svg.attr('transform', d3.event.transform)
            }

            //events
            // function clicked(d) {
            //     if(!d3.event.defaultPrevented) {
            //         if (d.children) {
            //             d._children = d.children;
            //             d.children = null;
            //           } else {
            //             d.children = d._children;
            //             d._children = null;
            //           }
            //           update()
            //         }
            //     }
            // }

            // dragStarted = d => {
            //     if (!d3.event.active) simulation.alphaTarget(0.3).restart()
            //     d.fx = d.x
            //     d.fy = d.y
            // }

            // dragged = d => {
            //     d.fx = d3.event.x
            //     d.fy = d3.event.y
            // }

            // dragended = d => {
            //     if (!d3.event.active) simulation.alphaTarget(0)
            //     d.fx = null
            //     d.fy = null
            // }
            update()
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

export default CollapsibleWeb;