<template>
    <div id="app">
        <x-header></x-header>
        <router-view></router-view>
        <x-footer></x-footer>
    </div>
</template>


<script>
import xHeader from './components/xHeader'
import xFooter from './components/xFooter'

export default {
  name: 'app',
  components: {
    xHeader,
    xFooter
  }
}

document.body.classList.remove('no-js');

</script>


<style lang="scss">
@import './assets/styles/main';
</style>
