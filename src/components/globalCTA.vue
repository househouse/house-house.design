<template lang="pug">
    aside.u-bg-black.u-color-white.u-padding-top-xlarge.u-padding-bottom-large
        div.c-contain.c-text-content.u-text-align-center.u-max-width-1of2
            p.u-text-family-secondary.u-text-size-medium.u-baseline-medium
                | We’re helping innovative teams like yours build apps, create
                | styleguides, scale systems, and reach their goals. Let’s get a
                | conversation going and see if our solution-focused, scalable
                | approach meshes with your vision.
            router-link(to='/start').u-inline-block
                button.c-button-block.u-bg-accent.u-text-white.u-bg-orange-dark.u-color-white.u-text-size-small
                    | Start a project
            p.u-text-size-small.u-text-secondary
                | or,
                | #[router-link(to='/approach') learn more about us]
</template>

<script>
export default {
  components: {
  },
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.4);
}

a:hover {
    color: var(--grey-light);
    text-decoration-color: var(--orange-dark);
}
</style>
