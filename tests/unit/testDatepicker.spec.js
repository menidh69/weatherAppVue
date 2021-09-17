import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import dateFormat from '@/utils/dateFormat';
import Datepicker from '@/components/Datepicker.vue';

describe('Datepicker component', () => {
  let mockDate;
  let expected;
  let expectedEnd;
  let store;

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
        };
      },
      mutations: {
        setDateRange(state) {
          state.rangeDates = state;
        },
      },
      getters: {
        dateRanges(state) {
          return state.rangeDates;
        },
      },
    });
  });

  it('renders start date from store', () => {
    console.log(mockDate);
    const wrapper = mount(Datepicker, {
      global: { plugins: [store] },
    });
    expect(wrapper.find('#startDateTag').text()).toMatch(expected);
  });
  it('renders end date from store', () => {
    const wrapper = mount(Datepicker, {
      global: { plugins: [store] },
    });

    expect(wrapper.find('#endDateTag').text()).toMatch(expectedEnd);
  });
});
