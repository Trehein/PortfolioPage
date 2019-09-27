import React from "react"
import Layout from "../components/layout"
import { useCsvFetch } from "../csvHook"
import LineChartController from "../components/LineChart/LineChartController"

function ScatterChartPage() {

    const rowFormatter = d => {
        d.timestamp = new Date(d.timestamp);
        d.temperature = +d.temperature;
        return d;
    }

    const [csvData] = useCsvFetch(
        'https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv', rowFormatter
    )

    const data = csvData;

    if (csvData.length !== 0) {
        return (
            <div>
                <Layout>
                    <LineChartController data={data} />
                </Layout>
            </div>
        )
    } else {
        return <div />
    }
}

export default ScatterChartPage;