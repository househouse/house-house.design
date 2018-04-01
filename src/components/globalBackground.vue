<template lang="pug">
aside(style='pointer-events:none;' role='presentation')
    bgParticles
    bgShapes
</template>

<script>
import BgParticles from '@/components/bgParticles';
import BgShapes from '@/components/bgShapes';

export default {
  components: {
    BgParticles,
    BgShapes,
  },
};
</script>

<style lang="scss" scoped>
</style>
