import { scaleLinear } from "d3-scale";
import ChartLine from "./view.default.svelte";
import MultipleLines from "./view.multiple-lines.svelte";
import docs from "./docs.mdx";

import data from "../../../static/data/test-data.js";

// 1. Covert each of the values to numbers
const dataAsNumbers = data.data.map((obj) => {
  const { key, values } = obj;
  const numberValues = values.map((str) => parseFloat(str));
  return {
    key,
    values: numberValues,
  };
});

const xScale = scaleLinear().domain([2008, 2019]).range([0, 540]);

const yScale = scaleLinear().domain([0, 4500]).range([240, 0]);

export default {
  title: "ChartLine",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ChartLine,
  props: {
    columnNames: data.data.column_names.values,
    data: dataAsNumbers,
    index: 0,
    xScale,
    yScale,
  },
});

export const WithMultipleLines = () => ({
  Component: MultipleLines,
  props: {
    columnNames: data.data.column_names.values,
    data: dataAsNumbers,
    index: 0,
    xScale,
    yScale,
  },
});
