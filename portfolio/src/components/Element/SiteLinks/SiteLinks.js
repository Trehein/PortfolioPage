import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from 'gatsby';

class SiteLinks extends React.Component {

    render() {
        const siteList = (
            <div>
                <List>
                    {[
                        { text: "Horizontal Bar Chart", link: '/horizontalBarChartPage'},
                        { text: "Vertical Bar Chart", link: '/verticalBarChartPage'},
                        { text: "Scatter Chart", link: '/scatterChartPage'},
                        { text: "Line Chart", link: '/lineChartPage'},
                        { text: "Area Chart", link: '/areaChartPage'},
                        { text: "Enter Exit Append Patter Demo", link: '/d3EnterExitAppendDemoPage'},
                        { text: "World Map", link: '/worldMapPage'},
                        { text: "Hierarchy Tree", link: '/hierarchyTreePage'},
                        { text: "Color and Size Legends", link: '/colorSizeLegendsPage'},
                        { text: "Choropleth Map", link: '/choroplethMapPage'},
                        { text: "Collapsible Web", link: '/collapsibleWebPage'}
                    ].map((site, index) => (
                        <ListItem button key={index} component={ Link } to={site.link}>
                            <ListItemText primary={site.text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div>
                {siteList}
            </div>
        )
    }
}

export default SiteLinks;