<template lang="pug">
div#particles.u-position.u-top-0.u-right-0.u-left-0.u-stack-shade.a-fade-in.--from-right
</template>

<script>
import 'particles.js';
import config from '@/assets/scripts/bgParticlesData';
/* global particlesJS */

export default {
  mounted() {
    this.$nextTick(() => {
      this.initParticleJS();
    });
  },
  methods: {
    initParticleJS() {
      particlesJS('particles', config);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
