import React, { useEffect } from "react";
import * as d3 from "d3";
export const Eventhandling = () => {
  useEffect(() => {
    d3.selectAll("div")

      .on("mouseover", function () {
        d3.select(this).style("background-color", "red");
      })

      .on("mouseout", function () {
        d3.select(this).style("background-color", "green");
      });
  }, []);
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "steelblue",

        margin: "auto",
      }}
    ></div>
  );
};
