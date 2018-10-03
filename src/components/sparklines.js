import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

function average(data) {
  return _.round(_.sum(data) / data.length);
}

const chart = props => {
  return (
    <div>
      <Sparklines data={props.data} svgHeight={200} svgWidth={180}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.unit}
      </div>
    </div>
  );
};
export default chart;
