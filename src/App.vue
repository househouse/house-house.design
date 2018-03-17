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
    .no-js .a-fade-in {
        opacity: 0;
    }
    body {
        background-color: var(--white);
        color: var(--black);
    }
    .c-contain {
        max-width: 30em;
    }
    .c-section.--small {
        padding: 5% 10%;
    }
    .c-section:not(.--small) {
        padding: 10%;
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
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media screen and (min-width:600px) {
        .c-shapes__container {
            top: -35%;
            left: 35%;
            transform: rotate(45deg) scale(2);
        }
    }
    .c-shapes__single {
        fill: currentColor;
        transition: all ease-out 2s 1s;
    }
</style>
