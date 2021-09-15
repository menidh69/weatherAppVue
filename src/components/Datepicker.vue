<template>
  <div>
    <p>Starting date: {{ removeTime(dateRange.start) }}</p>
    <p>End date: {{ removeTime(dateRange.end) }}</p>
    <v-date-picker v-model="dateRange" is-range />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateRange: {
        start: new Date(),
        end: this.setDefaultEndDate(new Date()),
      },
    };
  },
  methods: {
    removeTime(d) {
      console.log(d);
      const date = new Date(d);
      date.setHours(0, 0, 0, 0);
      return date.toDateString();
    },
    setDefaultEndDate(d) {
      const today = new Date();
      d.setDate(today.getDate() + 16);
      return d;
    },
  },
};
</script>

<style lang="scss" scoped></style>
