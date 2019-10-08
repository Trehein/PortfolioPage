/* eslint-disable */
import React, { useState, useEffect } from "react"
import HierarchyTree from "./HierarchyTree"
import "../styles.css"

const HierarchyTreeController = props => {
    const rawData = props.data;
    const [data, setData] = useState(rawData);

    useEffect(() => {
        setData(rawData);
    }, [data]);

    return (
        <div>
            <div className="treeBox">
                <HierarchyTree data={data} width={800} height={1000} />
            </div>
        </div>
    )
}

export default HierarchyTreeController;