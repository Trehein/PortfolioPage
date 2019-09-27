import React from "react"
import { useFetch } from "../hooks"
import Layout from "../components/layout"

import HierarchyTreeController from "../components/HierarchyTree/HierarchyTreeController"

function HierarchyTreePage() {
    const [jsonData, loading] = useFetch(
        "https://raw.githubusercontent.com/curran/data/gh-pages/un/placeHierarchy/countryHierarchy.json"
    );

    const data = jsonData;
    const loadStatus = loading;

    console.log(loadStatus)

    if (jsonData.length !== 0) {
        return (
            <div>
                <Layout>
                    <HierarchyTreeController data={data} />
                </Layout>
            </div>
        )
    } else {
        return <div />;
    }
}

export default HierarchyTreePage;