<template>
  <div class="calendarContainer">
    <p>
      Starting date:
      <span id="startDateTag">{{ dateFormat(dateRange.start) }}</span>
    </p>
    <p>
      End date: <span id="endDateTag">{{ dateFormat(dateRange.end) }}</span>
    </p>
    <v-date-picker v-model="dateRange" is-range is-expanded />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import dateFormat from '@/utils/dateFormat';

export default {
  data() {
    return {
      dateRange: {
        start: this.dateRanges().start,
        end: this.setDefaultEndDate(this.dateRanges().end),
      },
    };
  },
  methods: {
    ...mapMutations(['setDateRange']),
    ...mapGetters(['dateRanges']),
    dateFormat,
    setDefaultEndDate(d) {
      d.setDate(d.getDate() + 16);
      return d;
    },
  },
  watch: {
    dateRange() {
      this.setDateRange(this.dateRange);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-weight: bold;
  text-align: left;
}
.calendarContainer {
  margin-top: 50px;
}
</style>
