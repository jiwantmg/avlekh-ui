<template>
  <div class="summary-graph-wrapper">
    <div class="graph-type-navigator">
      <button class="btn btn-primary" type="submit" @click="changeChart('lineChart')" >Line</button>
      <button class="btn btn-primary" type="submit" @click="changeChart('barChart')">Bar</button>
      <button class="btn btn-primary" type="submit" @click="changeChart('pieChart')">Pie Chart</button>      
    </div>
    <div class="task-summary-graph" v-if="datacollection">
      <component :is="chartType" :chart-data="datacollection"></component>      
    </div>
  </div>
</template>

<script>
import LineChart from "../reports/LineChart.js";
import BarChart from "../reports/BarChart.js";
import PieChart from "../reports/PieChart.js";
export default {
  components: {
    'lineChart':LineChart,
    'barChart':BarChart,
    'pieChart': PieChart
  },
  data() {
    return {
      datacollection: null,
      chartType: 'lineChart'
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    changeChart(reportType) {
      this.chartType = reportType;
    }
  },
};
</script>

<style>
.summary-graph-wrapper {
  background-color: lightgray;
  grid-column-start: 1;
  grid-column-end: 4;
}
</style>