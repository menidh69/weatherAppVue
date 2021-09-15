import { createStore } from 'vuex';
import { getDefaultWeatherHistory } from '../services/weather';
import cities from '../services/cities.json';

export default createStore({
  state: {
    weatherData: null,
    currentUnit: 'M',
    selectedCity: cities[0],
    cities,
  },
  mutations: {
    setWeatherData(state, data) {
      state.weatherData = data;
    },
    setCurrentUnit(state, unit) {
      state.currentUnit = unit;
    },
    setSelectedCity(state, city) {
      state.selectedCity = city;
    },
  },
  actions: {
    async getWeatherDataFromApi({ commit, state }) {
      const data = await getDefaultWeatherHistory(
        state.selectedCity.lat,
        state.selectedCity.lon,
        state.currentUnit,
      );
      commit('setWeatherData', data);
    },
  },
  getters: {
    weatherData(state) {
      return state.weatherData;
    },
    currentUnit(state) {
      return state.currentUnit;
    },
    selectedCity(state) {
      return state.selectedCity;
    },
    cities(state) {
      return state.cities;
    },
  },
  modules: {},
});
