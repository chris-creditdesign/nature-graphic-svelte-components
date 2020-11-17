import { configure, addParameters } from "@storybook/svelte";

addParameters({
  docs: {
    iframeHeight: 600,
  },
});

import "../static/css/fonts.css";
import "../static/css/index.css";
