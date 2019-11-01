import React from "react"
import Layout from '../components/layout'
import "../components/styles.css";
import SkillMatrix from "../components/SkillMatrix/SkillMatrix"

function HeinessSkillMatrixPage() {
    return (
        <div className="App">
            <Layout>
                <SkillMatrix />
            </Layout>
        </div>
    )
}

export default HeinessSkillMatrixPage;