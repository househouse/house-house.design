<template lang="html">
    <section class="u-context u-margin-bottom-lg--small-only u-margin-bottom-xl--small-up u-margin-bottom-xxl--medium-up u-padding-top-md--small-up u-padding-left-md--small-up u-padding-right-md--small-up u-clip" id="intro">

        <div class="u-context u-bg-dark u-gradient u-corners" style="max-height:calc(100vh - 13rem)">

            <div class="u-position u-stack-basic u-bottom-0 u-left-halfway u-realign-center u-padding-bottom-sm u-width-full u-align-center u-uppercase u-text-size-small u-tracked-loose u-color-light">
                👇 See how we do it
            </div>

            <video
                class="u-block u-width-full u-half-transparent u-hidden--small-only"
                playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" poster="assets/img/glitch.jpg">
                <source src="assets/video/house-house--glitch.mp4" type="video/mp4"/>
                <track kind="captions" default="default"/>
            </video>

            <label class="u-color-light u-fully-transparent u-visually-hidden" for="main-video">Glitching/flashing video of people encountering technology.</label>

        </div>

        <div class="u-position u-stack-basic u-top-halfway u-realign-center-vert u-measure-medium">

            <h1 class="u-text-size-large u-padding-left-md u-padding-left-xl--medium-up u-bold" style="line-height:2.5">
                <span class="u-bg-light u-padding-top-sm u-padding-bottom-sm">
                    As <span class="u-color-tertiary">technology</span> becomes increasingly overwhelming, good <span class="u-color-accent">design</span> will us better understand it — and each other. That’s where <span class="u-color-primary u-no-wrap">we can help</span>.
                </span>
            </h1>

        </div>

    </section>
</template>


<script>
export default {
  name: 'vHomeIntro',
};
</script>
