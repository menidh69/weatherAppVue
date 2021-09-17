<template>
  <div v-if="data">
    <apexchart
      width="100%"
      type="line"
      :options="data.options"
      :series="data.series"
    ></apexchart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dateFormat from '@/utils/dateFormat';

const options = {
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  chart: {
    type: 'line',

    zoom: {
      enabled: false,
    },
  },
};

export default {
  name: 'WeatherGraph',

  methods: {
    ...mapGetters(['weatherData', 'currentUnit']),
  },
  computed: {
    data() {
      const data = this.weatherData();
      const current = this.currentUnit();
      if (data) {
        return {
          options: {
            ...options,
            labels: data.dates,
            title: {
              text: `Temperature Forecast ${this.$store.state.selectedCity.name}`,
              align: 'left',
            },
            subtitle: {
              text: this.dateRanges
                ? `${dateFormat(this.dateRanges.start)} -  
                ${dateFormat(this.dateRanges.end)}`
                : '',
              align: 'left',
            },
            xaxis: {
              categories: data.dates,
            },
            yaxis: {
              labels: {
                formatter(value) {
                  return `${value} ${current === 'M' ? 'C' : 'F'}`;
                },
              },
            },
          },
          series: [
            {
              name: 'Temperature',
              data: data.temps,
            },
          ],
        };
      }
      return null;
    },
    ...mapGetters(['dateRanges']),
  },
};
</script>

<style>
#app {
  color: #2ecc71;
}
</style>
