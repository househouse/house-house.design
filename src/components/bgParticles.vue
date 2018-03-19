<template lang="pug">
  div#particles.c-particles.a-fade-in
</template>

<script>
import 'particles.js';
import config from '@/assets/scripts/pData';
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

<style lang='css'>
@import '../assets/css/3-components/_bgParticles.scss';
</style>
