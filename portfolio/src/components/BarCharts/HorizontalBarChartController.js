import React, { useState, useEffect } from "react";
import HorizontalBarChart from "./HorizontalBarChart";
import "../styles.css";

const HorizontalBarChartController = props => {
    const rawData = props.data;
    const [data, setData] = useState(rawData)

    useEffect(() => {
        setData(rawData);
    }, [!data]);

    // console.log(data)

    return (
        <div>
            <div className="chartBox">
                <HorizontalBarChart data={data} width={800} height={600} />
            </div>
        </div>
    )
}

export default HorizontalBarChartController;