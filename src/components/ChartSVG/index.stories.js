import ChartSVG from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "ChartSVG",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ChartSVG,
  props: { chartHeight: 300, chartWidth: 600 },
});
