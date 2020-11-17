<script>
  import theme from "../utils/theme.js";

  export let chartInnerWidth;
  export let innerLeft;
  export let innerTop;
  export let yAxisTickCount;
  export let yScale;

  let tick = yScale.ticks(yAxisTickCount).slice(0, 1);
</script>

<g transform="{`translate(${innerLeft},${innerTop})`}">
  <line
    x1="{-8}"
    y1="{yScale(tick)}"
    x2="{chartInnerWidth}"
    y2="{yScale(tick)}"
    stroke="{theme.color.line}"
    stroke-width="{theme.strokeWidth.xl}"
    stroke-dasharray="none"
  ></line>
</g>
