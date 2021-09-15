<template>
  <div>
    <table v-if="data" class="text-center">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data.dates" :key="item">
          <td>{{ item }}</td>
          <td>{{ data.temps[index] }} {{ unit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DateTable',

  methods: {
    ...mapGetters(['weatherData', 'currentUnit']),
  },
  computed: {
    data() {
      const data = this.weatherData();
      if (data) {
        return data;
      }
      return null;
    },
    unit() {
      if (this.currentUnit() === 'M') {
        return 'C';
      }
      return 'F';
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-spacing: 15px;
}
.text-center {
  text-align: center;
  margin: 20px auto;
  padding: 10px;
  border: 2px solid cornflowerblue;
  border-radius: 10px;
}
td {
  margin: 10px;
}
</style>
