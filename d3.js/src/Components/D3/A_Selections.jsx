import React, { useEffect } from "react";
import * as d3 from "d3";
export const Selections = () => {
  useEffect(() => {
    // Select using tag
    d3.selectAll("ul")
      .append("h3")
      .text("This is div")
      // .attr("style", "color:red")
      .style("color", "green");
  }, []);

  return <ul></ul>;
};
