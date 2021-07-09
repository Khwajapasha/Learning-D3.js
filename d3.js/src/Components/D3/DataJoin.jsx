import React, { useState, useEffect } from "react";
import * as d3 from "d3";
export const DataJoin = () => {
  const [data] = useState([100, 200, 300]);
  useEffect(() => {
    d3.select("span")
      .selectAll("p")
      .data(data)
      .text(function (d, i) {
        console.log("d: " + d);
        console.log("i: " + i);
        console.log("this: " + this);

        return d;
      });
  }, [data]);
  return (
    <div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};
