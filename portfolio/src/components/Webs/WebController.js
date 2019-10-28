import React, { useState, useEffect } from "react"
import CollapsibleWeb from "./CollapsibleWeb"
import "../styles.css"

const WebController = props => {
    const rawData = props.data;
    const [data, setData] = useState(rawData);

    useEffect(() => {
        setData(rawData);
    }, [data, rawData]);

    return (
        <div>
            <div className="webBox">
                <CollapsibleWeb data={data} width={800} height={400} />
            </div>
        </div>
    )
}

export default WebController;