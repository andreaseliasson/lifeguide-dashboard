import React, { Component } from "react";
import * as d3 from "d3";
import * as d3Sankey from "d3-sankey"

export default class Sankey extends Component {
  renderSankey() {
    const units = "Widgets";

    const margin = {top: 10, right: 10, bottom: 10, left: 10};
    const width = 700 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const formatNumber = d3.format(",.0f"); // zero decimal places
    const format = function(d) { return formatNumber(d) + " " + units; };
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // append the svg canvas to the page
    const svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // const sankey = d3Sankey.sankey(); Make use of this syntax for d3-sankey methods
    return null
  }

  render() {
    console.log("sankey data");
    console.log(this.props.pageFlowData);
    return (
      <div style={styles.header} id="chart">
        <svg width={700} height={300}></svg>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "skyblue",
    padding: 15
  },
  title: {
    textAlign: "center",
    color: "white"
  }
};