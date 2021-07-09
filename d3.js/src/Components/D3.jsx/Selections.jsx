import React from "react";
import * as d3 from "d3";
export const Selections = () => {
  // Select using tag
  //   d3.selectAll("div").text("This is div");

  // Select using id
  //   d3.select("#h2").text("This is id");

  // Select using className
  d3.select(".h3").text("This is className");
  return (
    <div>
      <h1></h1>
      <h2 id="h2"></h2>
      <h3 className="h3"></h3>
    </div>
  );
};
