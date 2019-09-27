import React from "react"
import Layout from "../components/layout"
import { useCsvFetch } from "../csvHook"
import AreaChartController from "../components/AreaChart/AreaChartController";

function AreaChartPage() {

  // used to format specific csv number data fields
  const rowFormatter = d => {
    d.population = +d.population;
    d.year = new Date(d.year);
    return d;
  }

  const [csvData] = useCsvFetch(
    'https://vizhub.com/curran/datasets/world-population-by-year-2015.csv', rowFormatter
  )

  const data = csvData;

  // console.log(data)

  if (csvData.length !== 0) {
    return (
      <div>
        <Layout>
          <AreaChartController data={data} />
        </Layout>
      </div>
    )
  } else {
    return <div />;
  }
}

export default AreaChartPage;