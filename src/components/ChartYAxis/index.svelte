<script>
  import theme from "../utils/theme.js";

  export let chartInnerWidth;
  export let innerLeft;
  export let innerTop;
  export let yAxisFormat;
  export let yAxisTickCount;
  export let yScale;

  let ticks = yScale.ticks(yAxisTickCount);
</script>

<g transform="{`translate(${innerLeft},${innerTop})`}">
  <g class="ticks">
    {#each ticks.slice(1) as tick}
      <line
        x1="{-8}"
        y1="{yScale(tick)}"
        x2="{chartInnerWidth}"
        y2="{yScale(tick)}"
        stroke="{theme.color.line}"
        stroke-width="{theme.strokeWidth.s}"
        stroke-dasharray="2, 3"
      ></line>
    {/each}
  </g>
  <g class="labels">
    {#each ticks as tick}
      <text
        key="{tick}"
        x="{-15}"
        y="{yScale(tick)}"
        dy="0.3em"
        font-size="{theme.fontSize.normal}"
        font-family="{theme.font.sans}"
        text-anchor="end"
      >
        {yAxisFormat(tick)}
      </text>
    {/each}
  </g>
</g>
