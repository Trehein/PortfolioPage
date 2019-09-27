import React from "react"
import Layout from "../components/layout"
import { useCsvFetch } from "../csvHook"
import HorizontalBarChartController from "../components/BarCharts/HorizontalBarChartController";

function HorizontalBarChartPage() {

  // used to format specific csv number data fields
  const rowFormatter = d => {
    d.population = +d.population;
    return d;
  }

  const [csvData] = useCsvFetch(
    "https://raw.githubusercontent.com/Trehein/datasets/master/unTotalPop2019_top10.csv", rowFormatter
  )

  const data = csvData;

  // console.log(data)

  if (csvData.length !== 0) {
    return (
      <div>
        <Layout>
          <HorizontalBarChartController data={data} />
        </Layout>
      </div>
    )
  } else {
    return <div />;
  }
}

export default HorizontalBarChartPage;