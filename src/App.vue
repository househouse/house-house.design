<template>
    <div id="app">
        <BgParticles/>
        <BgShapes/>
        <main>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/process">Process</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import BgParticles from '@/components/bgParticles';
import BgShapes from '@/components/bgShapes';

export default {
  components: {
    BgParticles,
    BgShapes,
  },
  name: 'app',
};
</script>

<style lang='scss'>
@import 'src/assets/styles/main.scss';

</style>
