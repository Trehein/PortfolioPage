import React, { useState, useEffect } from "react";
import VerticalBarChart from "./VerticalBarChart";
import "../styles.css";

const VerticalBarChartController = props => {
    const rawData = props.data;
    const [data, setData] = useState(rawData)

    useEffect(() => {
        setData(rawData);
    }, [!data]);

    return (
        <div>
            <div className="chartBox">
                <VerticalBarChart data={data} width={800} height={600} />
            </div>
        </div>
    )
}

export default VerticalBarChartController;