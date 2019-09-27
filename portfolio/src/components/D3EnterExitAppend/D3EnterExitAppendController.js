import React from "react"
import D3EnterExitAppendDemo from "./D3EnterExitAppend"
import "../styles.css"

const D3EnterExitAppendController = () => {
    return (
        <div>
            <div className="chartBox">
                <D3EnterExitAppendDemo width={800} height={600} />
            </div>
        </div>
    )
}

export default D3EnterExitAppendController;