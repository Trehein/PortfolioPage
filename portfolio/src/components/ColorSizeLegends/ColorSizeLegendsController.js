import React from "react"
import ColorSizeLegends from "./ColorSizeLegends"
import "../styles.css"

const ColorSizeLegendsController = () => {
    return (
        <div>
            <div className="chartBox">
                <ColorSizeLegends width={800} height={600} />
            </div>
        </div>
    )
}

export default ColorSizeLegendsController;