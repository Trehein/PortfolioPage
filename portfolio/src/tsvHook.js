/* eslint-disable */
import { useState, useEffect } from "react";
import { tsv } from "d3";

function useTsvFetch(url, row) {
    const [tsvData, setTsvData] = useState([]);

    async function fetchUrl() {
        const response = await fetch(url);
        await tsv(response.url).then(setTsvData);
    }
    useEffect(() => {
        fetchUrl()
    }, []);
    return [tsvData];
}
export { useTsvFetch }