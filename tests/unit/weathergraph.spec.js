import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import dateFormat from '@/utils/dateFormat';
import WeatherGraph from '@/components/WeatherGraph.vue';

describe('Weather Graph component', () => {
  let mockDate;
  let expected;
  let expectedEnd;
  let store;

  const cities = [{ name: 'Hermosillo', lat: '5', lon: '5' }];
  const weatherData = {
    dates: [
      '2021-09-17',
      '2021-09-18',
      '2021-09-19',
      '2021-09-20',
      '2021-09-21',
      '2021-09-22',
      '2021-09-23',
      '2021-09-24',
      '2021-09-25',
      '2021-09-26',
      '2021-09-27',
      '2021-09-28',
      '2021-09-29',
      '2021-09-30',
      '2021-10-01',
      '2021-10-02',
    ],
    temps: [
      31.1,
      31.6,
      31.5,
      29.6,
      29.4,
      31.8,
      30.6,
      28.5,
      28.3,
      28.2,
      30.1,
      30.5,
      30.9,
      30.4,
      32.3,
      35,
    ],
  };

  beforeEach(() => {
    mockDate = new Date();
    expected = dateFormat(mockDate);
    expectedEnd = dateFormat(new Date().setDate(mockDate.getDate() + 16));
    store = createStore({
      state() {
        return {
          rangeDates: {
            start: new Date(),
            end: new Date(),
          },
          selectedCity: cities[0],
          currentUnit: 'M',
          weatherData,
        };
      },
      mutations: {
        setWeatherData(state, data) {
          state.weatherData = data;
        },
      },
      getters: {
        dateRanges(state) {
          return state.rangeDates;
        },
        weatherData(state) {
          return state.weatherData;
        },
        currentUnit(state) {
          return state.currentUnit;
        },
        selectedCity(state) {
          return state.selectedCity;
        },
      },
    });
  });

  it('displays current city', () => {
    const wrapper = mount(WeatherGraph, {
      global: { plugins: [store] },
    });
    expect(wrapper.find('.apexcharts-title-text').text()).toMatch(
      'Temperature Forecast Hermosillo',
    );
  });

  it('displays current date range', () => {});
});
