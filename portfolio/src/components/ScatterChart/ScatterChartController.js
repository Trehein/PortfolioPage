import React, { useState, useEffect } from "react"
import ScatterChart from "./ScatterChart"
import "../styles.css"

const ScatterChartController = props => {
    const rawData = props.data;
    const [data, setData] = useState(rawData);

    useEffect(() => {
        setData(rawData);
    }, [!data]);

    return (
        <div>
            <div className="chartBox">
                <ScatterChart data={data} width={800} height={600} />
            </div>
        </div>
    )
}

export default ScatterChartController;