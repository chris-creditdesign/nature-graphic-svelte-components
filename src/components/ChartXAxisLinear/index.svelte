<script>
  import theme from "../utils/theme.js";

  export let chartInnerHeight;
  export let innerLeft;
  export let innerTop;
  export let xAxisFormat;
  export let xAxisTickCount;
  export let xScale;

  let ticks = xScale.ticks(xAxisTickCount);
</script>

<g transform="{`translate(${innerLeft},${innerTop + chartInnerHeight})`}">
  <g class="ticks">
    {#each ticks as tick}
      <line
        key="{tick}"
        x1="{xScale(tick)}"
        y1="{0}"
        x2="{xScale(tick)}"
        y2="0.5em"
        stroke="{theme.color.line}"
        strokeWidth="{theme.strokeWidth.s}"
        shapeRendering="crispEdges"
        strokeDasharray="none"
      ></line>
    {/each}
  </g>

  <g class="labels">
    {#each ticks as tick}
      <text
        x="{xScale(tick)}"
        y="{0}"
        dy="1.5em"
        font-size="{theme.fontSize.normal}"
        text-anchor="middle"
        font-family="{theme.font.sans}"
      >
        {xAxisFormat(tick)}
      </text>
    {/each}
  </g>
</g>
