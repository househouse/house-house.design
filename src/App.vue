<template>
  <div id="app">
    <global-nav/>
    <global-header/>
    <global-content/>
    <global-c-t-a/>
    <global-footer/>
    <global-background/>
  </div>
</template>

<script>
import GlobalBackground from './components/globalBackground.vue';
import GlobalCTA from './components/globalCTA.vue';
import GlobalContent from './components/globalContent.vue';
import GlobalFooter from './components/globalFooter.vue';
import GlobalHeader from './components/globalHeader.vue';
import GlobalNav from './components/Navigation/globalNav.vue';

// import VScrollLock from 'v-scroll-lock';

export default {
  name: 'app',
  components: {
    GlobalHeader,
    GlobalNav,
    GlobalContent,
    GlobalCTA,
    GlobalFooter,
    GlobalBackground,
    // VScrollLock,
  },
  metaInfo: {
    title: 'House House', // if no subcomponents specify a metaInfo.title, this title will be used
    titleTemplate: '%s • A Design Studio', // all titles will be injected into this template
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'A design studio and freelancer community' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Ben Groulx, Sean Durfee' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
  },
};
</script>

<style lang="scss">
@import "src/assets/css/main.scss";
</style>
