<template lang="pug">
div#app
    globalNav
    globalHeader
    globalContent
    globalCTA
    globalFooter
    globalBackground
</template>

<script>
import GlobalBackground from '@/components/globalBackground';
import GlobalCTA from '@/components/globalCTA';
import GlobalContent from '@/components/globalContent';
import GlobalFooter from '@/components/globalFooter';
import GlobalHeader from '@/components/globalHeader';
import GlobalNav from '@/components/Navigation/globalNav';

import VScrollLock from 'v-scroll-lock';

export default {
  name: 'app',
  components: {
    GlobalBackground,
    GlobalCTA,
    GlobalContent,
    GlobalFooter,
    GlobalHeader,
    GlobalNav,
    VScrollLock,
  },
  metaInfo: {
    title: 'House House', // if no subcomponents specify a metaInfo.title, this title will be used
    titleTemplate: '%s • A Design Studio', // all titles will be injected into this template
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'XQrarlvRzShmAo5O_AzT_Wuinw1JiNI4IXWGltMtxkA' },
      { name: 'description', content: 'A design studio and freelancer community' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Ben Groulx, Sean Durfee' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
  },
};
</script>

<style lang="scss">
@import 'src/assets/css/main.scss';
</style>
