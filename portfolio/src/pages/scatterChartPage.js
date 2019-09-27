import React from "react"
import Layout from "../components/layout"
import { useCsvFetch } from "../csvHook"
import ScatterChartController from "../components/ScatterChart/ScatterChartController"

function ScatterChartPage() {

    const rowFormatter = d => {
        d.mpg = +d.mpg;
        d.cylinders = +d.cylinders;
        d.displacement = +d.displacement;
        d.horsepower = +d.horsepower;
        d.weight = +d.weight;
        d.acceleration = +d.acceleration;
        d.year = +d.year;
        return d;
    }

    const [csvData] = useCsvFetch(
        "https://vizhub.com/curran/datasets/auto-mpg.csv", rowFormatter
    )

    const data = csvData;

    if (csvData.length !== 0) {
        return (
            <div>
                <Layout>
                    <ScatterChartController data={data} />
                </Layout>
            </div>
        )
    } else {
        return <div />
    }
}

export default ScatterChartPage;