<template>
    <main id="app" class="u-context">
        <x-header></x-header>
        <router-view></router-view>
        <x-footer></x-footer>
    </main>
</template>


<script>
import xHeader from '@/components/xHeader/xHeader';
import xFooter from '@/components/xFooter/xFooter';

export default {
  name: 'app',
  components: {
    xHeader,
    xFooter,
  },
};

document.body.classList.remove('no-js');
</script>


<style lang="scss">
@import '~@/assets/styles/main';
@import '~@/assets/styles/animations.scss';
</style>
