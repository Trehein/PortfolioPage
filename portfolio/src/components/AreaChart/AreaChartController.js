/* eslint-disable */
import React, { useState, useEffect } from "react"
import AreaChart from "./AreaChart"
import "../styles.css"

const AreaChartController = props => {
    const rawData = props.data;
    const [data, setData] = useState(rawData);

    useEffect(() => {
        setData(rawData);
    }, [!data]);

    return (
        <div>
            <div className="chartBox">
                <AreaChart data={data} width={800} height={600} />
            </div>
        </div>
    )
}

export default AreaChartController;