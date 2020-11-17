<script>
  import ChartSVG from "./index.svelte";

  export let chartHeight;
  export let chartWidth;
</script>

<ChartSVG chartHeight="{chartHeight}" chartWidth="{chartWidth}">
  <rect
    fill="none"
    strokeWidth="2px"
    stroke="red"
    x="1"
    y="1"
    height="298"
    width="598"
  ></rect>
  <circle
    cx="150"
    cy="150"
    r="80"
    fill="none"
    strokeWidth="2px"
    stroke="green"
  ></circle>
  <path
    d="M 300,125 L 400,50 L 500,100 L 400,250 Z"
    fill="none"
    strokeWidth="2px"
    stroke="blue"
  ></path>
  <text dy="2em" dx="2em">This is an SVG text element</text>
</ChartSVG>
