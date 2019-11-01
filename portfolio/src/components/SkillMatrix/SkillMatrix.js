import React, { useEffect, useRef } from "react"
// import * as d3 from "d3";

const SkillMatrix = props => {
    const ref = useRef(null);

    useEffect(() => {
        const data = props.data;
        // const svg = d3.select(ref.current);
        // const margin = { top: 20, right: 20, bottom: 20, left: 20 }
        // const innerWidth = props.width - margin.left - margin.right;
        // const innerHeight = props.width - margin.top - margin.bottom;
        console.log(data);

        const render = data => {

        }
        render(data);
    }, [props.data, props.width]);

    return (
        <div>
            <svg width={props.width} height={props.height}>
                <g ref={ref} />
            </svg>
        </div>
    )
}

export default SkillMatrix;