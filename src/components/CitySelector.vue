<template>
  <div>
    <div class="selectGroup">
      <p>City:</p>
      <select name="cities" id="citySelector" v-model="currentCity">
        <option v-for="city in cities()" :value="city" :key="city.name">{{
          city.name
        }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      currentCity: this.selectedCity(),
    };
  },
  methods: {
    ...mapActions(['getWeatherDataFromApi']),
    ...mapMutations(['setSelectedCity']),
    ...mapGetters(['selectedCity', 'cities']),
  },
  watch: {
    currentCity() {
      this.setSelectedCity(this.currentCity);
      this.getWeatherDataFromApi();
    },
  },
};
</script>

<style lang="scss">
.selectGroup {
  width: 100%;
  text-align: left;
  font-weight: bold;
  select {
    width: 100%;
  }
}
</style>
