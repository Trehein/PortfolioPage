import React from "react"
import Layout from '../components/layout'
import "../components/styles.css";
import SkillMatrixController from "../components/SkillMatrix/SkillMatrixController"

function HeinessSkillMatrixPage() {
    return (
        <div className="App">
            <Layout>
                <SkillMatrixController />
            </Layout>
        </div>
    )
}

export default HeinessSkillMatrixPage;