import React, { useEffect } from "react";
import * as d3 from "d3";
export const DynamicAttributes = () => {
  useEffect(() => {
    d3.select("span")
      .selectAll("p")
      .style("color", function (d, i) {
        var text = this.innerHTML;
        if (text.indexOf("Name") >= 0) {
          return "pink";
        } else if (text.indexOf("Age") >= 0) {
          return "yellow";
        } else if (text.indexOf("Address") >= 0) {
          return "blue";
        }
      });
  }, []);

  return (
    <span>
      <p>Name: Khawja</p>
      <p>Age: 30 Years Old</p>
      <p>Address: Nanded</p>
    </span>
  );
};
