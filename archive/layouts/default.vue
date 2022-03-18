<template>
  <div>
    <GlobalNav />
    <GlobalHeader />
    <Nuxt />
    <GlobalCTA />
    <GlobalFooter />
    <GlobalBackground />
  </div>
</template>
<script>
import GlobalBackground from '../components/globalBackground.vue';
import GlobalCTA from '../components/globalCTA.vue';
import GlobalFooter from '../components/globalFooter.vue';
import GlobalHeader from '../components/globalHeader.vue';
import GlobalNav from '../components/Navigation/globalNav.vue';

export default {
  components: {
    GlobalHeader,
    GlobalNav,
    GlobalCTA,
    GlobalFooter,
    GlobalBackground
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
}
</script>

<style lang="scss">
:root {
  --white: #ffffff;
  --grey-light: #f3f6fa;
  --grey-base: #e6e9ee;
  --grey-medium: #b0bbcb;
  --grey-dark: #54657f;
  --black: #101030;
  --blue-light: #37a1fc;
  --blue-medium: #3c69d9;
  --blue-dark: #4745d1;
  --purple-light: #b083c8;
  --purple-medium: #9857ac;
  --purple-dark: #8b3384;
  --orange-light: #fd9a59;
  --orange-medium: #fc6932;
  --orange-dark: #f44631;
  --green-light: #72c87c;
  --green-medium: #60b584;
  --green-dark: #419f77;
}
</style>
