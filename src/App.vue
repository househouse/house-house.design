<template lang="pug">
div#app
    bgParticles
    bgShapes
    navCrumbs
    main(style='min-height:100vh;')
        transition(name="a-scale-out")
            router-view
    siteFooter
</template>

<script>
import BgParticles from '@/components/bgParticles';
import BgShapes from '@/components/bgShapes';
import NavCrumbs from '@/components/navCrumbs';
import siteFooter from '@/components/footer';

export default {
  name: 'app',
  components: {
    BgParticles,
    BgShapes,
    NavCrumbs,
    siteFooter,
  },
  metaInfo: {
    title: 'House House', // if no subcomponents specify a metaInfo.title, this title will be used
    titleTemplate: '%s • A Design Studio', // all titles will be injected into this template
  },
};
</script>

<style lang="scss">
    @import 'src/assets/css/main.scss';

    .a-fade-in {
        opacity: 0;
    }
    body {
        background-color: var(--white);
        color: var(--black);
    }
    a {
        color: inherit;
    }
    .c-contain {
        max-width: 30em;
    }
    .c-shapes {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    .c-shapes__container {
      position: absolute;
      top: 0;
      left: 0%;
      transform-origin: center center;
      transform: translate(50%, -50%);
    }

    @media screen and (min-width:600px) {
      .c-shapes__container {
        top: -5%;
        left: -25%;
        transform: rotate(55deg) scale(2);
      }
    }

    .c-shapes__single {
      fill: currentColor;
      transition: all ease-out 2s 1s;
    }
</style>
