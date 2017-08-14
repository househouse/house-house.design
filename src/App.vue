<template>
    <main id="app" class="u-context">
        <x-header></x-header>
        <router-view></router-view>
        <x-footer></x-footer>
    </main>
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
