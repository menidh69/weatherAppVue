<template>
  <div>
    <h1>Main Dashboard</h1>
    <div id="mainDashboard">
      <div>
        <WeatherGraph />
      </div>
      <div>
        <CitySelector />
        <select
          name="temperatureScale"
          id="tempSelector"
          v-model="selectedTemp"
        >
          <option value="M">Celsius</option>
          <option value="I">Fahrenheit</option>
        </select>
        <Datepicker />
      </div>
    </div>
    <DateTable />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Datepicker from '@/components/Datepicker.vue';
import WeatherGraph from '@/components/WeatherGraph.vue';
import DateTable from '@/components/DateTable.vue';
import CitySelector from '@/components/CitySelector.vue';

export default {
  name: 'MainDashboard',
  components: {
    WeatherGraph,
    Datepicker,
    DateTable,
    CitySelector,
  },
  data() {
    return {
      selectedTemp: this.currentUnit(),
    };
  },
  created() {
    this.getWeatherDataFromApi(this.selectedCity);
  },
  watch: {
    selectedTemp() {
      this.setCurrentUnit(this.selectedTemp);
      this.getWeatherDataFromApi();
    },
  },
  methods: {
    ...mapActions(['getWeatherDataFromApi']),
    ...mapGetters(['currentUnit']),
    ...mapMutations(['setCurrentUnit']),
  },
};
</script>

<style lang="scss" scoped>
#mainDashboard {
  display: grid;
  grid-template-columns: 70% 25%;
  grid-template-rows: auto;
  grid-gap: 5%;
}
</style>
