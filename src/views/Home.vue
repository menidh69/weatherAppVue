<template>
  <div class="home">
    <MainDashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import MainDashboard from '@/components/MainDashboard.vue';

export default {
  name: 'Home',
  components: {
    MainDashboard,
  },
};
</script>
