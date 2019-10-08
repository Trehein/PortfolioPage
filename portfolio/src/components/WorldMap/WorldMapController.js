/* eslint-disable */
import React, { useState, useEffect } from "react"
import WorldMap from "./WorldMap"
import "../styles.css"

const WorldMapController = props => {
    const rawData = props.data;
    const [data, setData] = useState(rawData);
    const tsvData = props.tsv;
    const [tsv, setTsv] = useState(tsvData);

    useEffect(() => {
        setData(rawData);
        setTsv(tsvData);
    }, [!data]);

    return (
        <div>
            <div className="chartBox">
                <WorldMap data={data} tsv={tsv} width={1000} height={600} />
            </div>
        </div>
    )
}

export default WorldMapController;