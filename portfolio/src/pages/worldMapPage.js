import React from "react"
import Layout from "../components/layout"
import { useFetch } from "../mapJsonHook"
import { useTsvFetch } from "../tsvHook"
import WorldMapController from "../components/WorldMap/WorldMapController"

function WorldMapPage() {

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
                    <WorldMapController data={data} tsv={dataTsv}/>
                </Layout>
            </div>
        )
    } else {
        return <div />
    }
}

export default WorldMapPage;