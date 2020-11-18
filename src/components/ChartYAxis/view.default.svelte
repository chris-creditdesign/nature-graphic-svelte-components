<script>
  import ChartSVG from "../ChartSVG/index.svelte";
  import ChartYAxis from "./index.svelte";

  export let chartInnerWidth;
  export let innerLeft;
  export let innerTop;
  export let yAxisFormat;
  export let yAxisTickCount;
  export let yScale;
</script>

<ChartSVG chartHeight="300" chartWidth="600">
  <ChartYAxis
    chartInnerWidth="{chartInnerWidth}"
    innerLeft="{innerLeft}"
    innerTop="{innerTop}"
    yAxisFormat="{yAxisFormat}"
    yAxisTickCount="{yAxisTickCount}"
    yScale="{yScale}"
  />
</ChartSVG>
