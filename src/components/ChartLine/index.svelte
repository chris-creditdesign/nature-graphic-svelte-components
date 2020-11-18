<script>
  import { line } from "d3-shape";
  import theme from "../utils/theme.js";

  export let columnNames;
  export let data;
  export let index;
  export let xScale;
  export let yScale;

  let lineData = data[index].values.map((d, i) => {
    const x = columnNames[i];
    const y = d;
    return { x, y };
  });

  $: path = line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
</script>

<path
  d="{path(lineData)}"
  fill="none"
  stroke-width="{theme.strokeWidth.xl}"
  stroke="{theme.chartColor[index]}"
  stroke-linecap="round"
  stroke-linejoin="round"
></path>
