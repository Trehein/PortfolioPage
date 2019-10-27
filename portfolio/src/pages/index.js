import React from "react"
import ChartController from "../ChartController";
// import WiMapController from "../WiMapController";
import { useFetch } from "../hooks";
import "../components/styles.css";
import Layout from '../components/layout'
import CustomButton from '../components/Element/Button/MUIButton'
import SiteLinks from '../components/Element/SiteLinks/SiteLinks';

function IndexPage() {
  const [jsonData, loading] = useFetch(
    "https://raw.githubusercontent.com/trevorhein-matc/portfolio/master/allMidPlayerStats.json"
  );

  // const [wiFoodAssistData, foodAssistDataloading] = useFetch(
  //   "https://raw.githubusercontent.com/trevorhein-matc/portfolio/master/wiFoodAssistData.json"
  // );

  // const [wiMapData, wiMapDataLoading] = useFetch(
  //   "https://raw.githubusercontent.com/trevorhein-matc/portfolio/master/cb_2017_55_tract_500k%20(2).json"
  // );

  const data = jsonData;
  const loadStatus = loading;

  console.log(loadStatus)
  // const foodAssistData = wiFoodAssistData;
  // const mapData = wiMapData; 

  // console.log(wiFoodAssistData);

  if (jsonData.length !== 0) {

    return (

      <div className="App">
        <Layout>
          <CustomButton>Custom Button!</CustomButton>
          <SiteLinks />

          {/* <Button>Test</Button> */}
          <ChartController data={data} /> 
          {/* <WiMapController mapData={mapData} foodAssistData={foodAssistData} /> */}
        </Layout>
      </div>
    );
  } else {
    return <div />;
  }
}

export default IndexPage