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
            const root = d3.hierarchy(data);
            console.log(root);
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