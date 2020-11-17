<script>
  export let chartHeight;
  export let chartWidth;
</script>

<svg
  height="{`${chartHeight}px`}"
  viewBox="{`0 0 ${chartWidth} ${chartHeight}`}"
  width="{`${chartWidth}px`}"
  focusable="false"
  aria-hidden
>
  <slot />
</svg>
