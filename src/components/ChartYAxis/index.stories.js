import { format } from "d3-format";
import { scaleLinear } from "d3-scale";
import ChartYAxis from "./view.default.svelte";
import docs from "./docs.mdx";

const yAxisFormat = format(",");

const yScale = scaleLinear().domain([0, 600]).range([260, 0]);

export default {
  title: "ChartYAxis",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ChartYAxis,
  props: {
    chartInnerWidth: 500,
    innerLeft: 50,
    innerTop: 20,
    yAxisFormat,
    yAxisTickCount: 5,
    yScale,
  },
});
