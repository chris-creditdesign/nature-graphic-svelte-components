<script>
  import ChartSVG from "../ChartSVG/index.svelte";
  import ChartLine from "../ChartLine/index.svelte";

  export let columnNames;
  export let data;
  export let index;
  export let xScale;
  export let yScale;
</script>

<ChartSVG chartHeight="300" chartWidth="600">
  <ChartLine
    columnNames="{columnNames}"
    data="{data}"
    index="{index}"
    xScale="{xScale}"
    yScale="{yScale}"
  />
</ChartSVG>
