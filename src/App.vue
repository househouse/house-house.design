<template lang="pug">
div#app
    bgParticles
    bgShapes
    navCrumbs
    main.a-fade-in.--from-bottom(style='min-height:100vh;')
        router-view
    hr
    footer.c-section.u-flexbox
        div.u-flex
            p(style='line-height:1.5;')
                small Made with love in Vancouver, Canada.
            p
                small.u-color-grey-dark © 2016—2018 House House
        div.u-flex-shrink
            p
                small
                    a.u-border-0(href='#') LinkedIn
                    span  
                    a.u-border-0(href='#') Twitter
                    span  
                    a.u-border-0(href='#') GitHub
</template>

<script>
import BgParticles from '@/components/bgParticles';
import BgShapes from '@/components/bgShapes';
import NavCrumbs from '@/components/navCrumbs';

export default {
  components: {
    BgParticles,
    BgShapes,
    NavCrumbs,
  },
  name: 'app',
};
</script>

<style lang="scss">
@import 'src/assets/css/main.scss';

    :root {
        --black: #101030;
        --white: #f3f6fa;

        --grey-dark: #54657f;
        --grey-med: #b0bbcb;
        --grey-light: #e6e9ee;

        --indigo-dark: #4745d1;
        --indigo-med: #3c69d9;
        --indigo-light: #37a1fc;

        --violet-dark: #8b3384;
        --violet-med: #9857ac;
        --violet-light: #b083c8;

        --orange-dark: #f44631;
        --orange-med: #fc6932;
        --orange-light: #fd9a59;

        --green-dark: #419f77;
        --green-med: #60b584;
        --green-light: #72c87c;

        --font--primary: 'UntitledSansTest-Regular', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
        --font--secondary: 'TiemposHeadline-Bold', 'Georgia', serif;
        --font--code: 'Menlo', monospace;
    }
    .a-fade-in {
        opacity: 0;
    }
    body {
        background-color: var(--white);
        color: var(--black);
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
