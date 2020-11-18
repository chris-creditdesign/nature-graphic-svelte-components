<script>
  import ChartSVG from "../ChartSVG/index.svelte";
  import ChartYAxisBaseline from "./index.svelte";

  export let chartInnerWidth;
  export let innerLeft;
  export let innerTop;
  export let yAxisTickCount;
  export let yScale;
</script>

<ChartSVG chartHeight="300" chartWidth="600">
  <ChartYAxisBaseline
    chartInnerWidth="{chartInnerWidth}"
    innerLeft="{innerLeft}"
    innerTop="{innerTop}"
    yAxisTickCount="{yAxisTickCount}"
    yScale="{yScale}"
  />
</ChartSVG>
