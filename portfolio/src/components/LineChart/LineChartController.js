/* eslint-disable */
import React, { useState, useEffect } from "react"
import LineChart from "./LineChart"
import "../styles.css"

const LineChartController = props => {
    const rawData = props.data;
    const [data, setData] = useState(rawData);

    useEffect(() => {
        setData(rawData);
    }, [!data]);

    return (
        <div>
            <div className="chartBox">
                <LineChart data={data} width={800} height={600} />
            </div>
        </div>
    )
}

export default LineChartController;