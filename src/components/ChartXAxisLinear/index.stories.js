import { scaleLinear } from "d3-scale";
import ChartXAxisLinear from "./view.default.svelte";
import docs from "./docs.mdx";

const xAxisFormat = (str) => str;

const xScale = scaleLinear().domain([0, 500]).range([0, 560]);

export default {
  title: "ChartXAxisLinear",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ChartXAxisLinear,
  props: {
    chartInnerHeight: 220,
    innerLeft: 20,
    innerTop: 20,
    xAxisFormat,
    xAxisTickCount: 10,
    xScale,
  },
});
