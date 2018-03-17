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

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
