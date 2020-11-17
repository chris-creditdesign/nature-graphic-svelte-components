import { scaleLinear } from "d3-scale";
import ChartYAxisBaseline from "./view.default.svelte";
import docs from "./docs.mdx";

const yScale = scaleLinear().domain([0, 600]).range([260, 0]);

export default {
  title: "ChartYAxisBaseline",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ChartYAxisBaseline,
  props: {
    chartInnerWidth: 500,
    innerLeft: 50,
    innerTop: 20,
    yAxisTickCount: 5,
    yScale,
  },
});
