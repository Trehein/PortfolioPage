import React from "react"
import { useFetch } from "../hooks"
import Layout from "../components/layout"

import WebController from "../components/Webs/WebController"

function CollapsibleWebPage() {
    const [jsonData, loading] = useFetch(
        "https://raw.githubusercontent.com/Trehein/datasets/master/dummyWebData.json"
    );

    const data = jsonData;
    const loadStatus = loading;

    console.log(loadStatus)

    if (jsonData.length !== 0) {
        return (
            <div>
                <Layout>
                    <WebController data={data} />
                </Layout>
            </div>
        )
    } else {
        return <div />
    }
}

export default CollapsibleWebPage;