import React from "react"
import Layout from "../components/layout"
import { useFetch } from "../mapJsonHook"
import { useTsvFetch } from "../tsvHook"
import ChoroplethMapController from "../components/ChoroplethMap/ChoroplethMapController"

function ChoroplethMapPage() {

    const [tsvData] = useTsvFetch(
        "https://unpkg.com/world-atlas@1/world/50m.tsv"
    )

    const [jsonData, loading] = useFetch(
        "https://unpkg.com/world-atlas@1/world/50m.json"
      )

    const data = jsonData;
    const dataTsv = tsvData;

    console.log(`loading? ${loading}`)

    if (jsonData.length !== 0 && tsvData.length !== 0) {
        return (
            <div>
                <Layout>
                    <ChoroplethMapController data={data} tsv={dataTsv}/>
                </Layout>
            </div>
        )
    } else {
        return <div />
    }
}

export default ChoroplethMapPage;