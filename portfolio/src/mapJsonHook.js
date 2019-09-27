import { useState, useEffect } from "react";
import { feature } from "topojson-client"

function useFetch(url) {
  const [jsonData, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json()
      .then(data => {
        const countries = feature(data, data.objects.countries);
        // console.log(countries);
        setData(countries);
      })
    console.log(json)
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [jsonData, loading]; 
}
export { useFetch };