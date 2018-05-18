<template lang="pug">
    aside.u-bg-black.u-color-white.u-padding-top-xlarge.u-padding-bottom-large
        div.c-contain.c-text-content.u-text-align-center.u-max-width-2of3
            p.u-text-family-secondary.u-text-size-medium.u-baseline-medium.u-margin-bottom-base
                | We’re helping innovative teams like yours build apps, create
                | styleguides, scale systems, and reach their goals. Let’s get a
                | conversation going and see if our solution-focused, scalable
                | approach meshes with your vision.
            button.u-bg-accent.u-text-white
                | Start a project
            p.u-text-size-small.u-text-secondary
                | or,
                | #[a(href='#').u-text-underline learn more about us]
</template>

<script>
export default {
  components: {
  },
};
</script>

<style lang="scss" scoped>
    button {
        border: 0;
        padding: 0 2em;
        min-height: 50px;

        background: var(--orange-dark);
        box-shadow: 0 3px 5px 0 rgba(16,16,48,0.25);
        border-radius: 0.25em;

        color: var(--white);
        font-weight: bold;
        font-size: 0.8rem;
        line-height: 1;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
</style>
