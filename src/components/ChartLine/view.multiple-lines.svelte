<script>
  import ChartSVG from "../ChartSVG/index.svelte";
  import ChartLine from "../ChartLine/index.svelte";

  export let columnNames;
  export let data;
  export let xScale;
  export let yScale;
</script>

<ChartSVG chartHeight="300" chartWidth="600">
  <ChartLine
    columnNames="{columnNames}"
    data="{data}"
    index="0"
    xScale="{xScale}"
    yScale="{yScale}"
  />
  <ChartLine
    columnNames="{columnNames}"
    data="{data}"
    index="1"
    xScale="{xScale}"
    yScale="{yScale}"
  />
  <ChartLine
    columnNames="{columnNames}"
    data="{data}"
    index="2"
    xScale="{xScale}"
    yScale="{yScale}"
  />
  <ChartLine
    columnNames="{columnNames}"
    data="{data}"
    index="3"
    xScale="{xScale}"
    yScale="{yScale}"
  />
  <ChartLine
    columnNames="{columnNames}"
    data="{data}"
    index="4"
    xScale="{xScale}"
    yScale="{yScale}"
  />
</ChartSVG>
