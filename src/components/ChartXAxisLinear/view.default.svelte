<script>
  import ChartSVG from "../ChartSVG/index.svelte";
  import ChartXAxisLinear from "./index.svelte";

  export let chartInnerHeight;
  export let innerLeft;
  export let innerTop;
  export let xAxisFormat;
  export let xAxisTickCount;
  export let xScale;
</script>

<ChartSVG chartHeight="300" chartWidth="600">
  <ChartXAxisLinear
    chartInnerHeight="{chartInnerHeight}"
    innerLeft="{innerLeft}"
    innerTop="{innerTop}"
    xAxisFormat="{xAxisFormat}"
    xAxisTickCount="{xAxisTickCount}"
    xScale="{xScale}"
  />
</ChartSVG>
