import React, { useState, useEffect } from "react"
import SkillMatrix from "./SkillMatrix"
import "../styles.css"
import skillData from "./skillData.json"

const SkillMatrixController = () => {
    const data = skillData;

    return (
        <div>
            <div className="webBox">
                <SkillMatrix data={data} width={800} height={1000} />
            </div>
        </div>
    )
}

export default SkillMatrixController;