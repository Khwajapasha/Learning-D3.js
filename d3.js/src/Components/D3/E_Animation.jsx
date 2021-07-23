import React, { useEffect } from "react";
import * as d3 from "d3";
import { easeLinear } from "d3";
export const Animation = () => {
  useEffect(() => {
    d3.selectAll("div")
      .style("width", "100px")
      .style("height", "100px")
      .transition()
      .duration(2000)
      // Here you can also store trasition in a variable
      //example before de.selectAll()=> var t=.transition().duration(2000)
      //And you can simply call this variable like transition(t)
      .style("background-color", "red")
      .style("width", "100px")
      .style("height", "100px");
  });
  // Animation on bars
  useEffect(() => {
    var svg = d3
      .select("div")
      .append("svg")
      .style("background-color", "teal")
      .style("margin-top", "50px")
      .style("width", "500px")
      .style("height", "500px");
    var bar1 = svg
      .append("rect")
      .attr("fill", "blue")
      .attr("x", 0)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 20);
    var bar2 = svg
      .append("rect")
      .attr("fill", "blue")
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 20);
    var bar3 = svg
      .append("rect")
      .attr("fill", "blue")
      .attr("x", 40)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 20);
    var bar4 = svg
      .append("rect")
      .attr("fill", "blue")
      .attr("x", 60)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 20);
    var bar5 = svg
      .append("rect")
      .attr("fill", "blue")
      .attr("x", 80)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 20);

    function update() {
      bar1
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .attr("height", "200px");
      bar2
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .delay(2000)
        .attr("height", "200px");
      bar3
        .transition()
        .ease(easeLinear)
        .duration(2000)
        .delay(4000)
        .attr("height", "200px");
      bar4
        .transition()
        .ease(easeLinear)
        .duration(2000)
        .delay(6000)
        .attr("height", "200px");
      bar5
        .transition()
        .ease(easeLinear)
        .duration(2000)
        .delay(8000)
        .attr("height", "200px");
    }
    update();
  }, []);
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "black",
      }}
    ></div>
  );
};
