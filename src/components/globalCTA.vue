<template lang="pug">
    aside.u-bg-black.u-color-white.u-padding-bottom-medium.u-padding-bottom-xlarge--medium-up.u-padding-top-medium.u-padding-top-xlarge--medium-up#globalCTA

        div.c-contain.c-text-content.u-text-align-center--medium-up.u-max-width-2of3--medium-up

            p.u-text-family-secondary.u-text-size-medium.u-baseline-medium
                | We’re helping innovative teams like yours build apps, create
                | styleguides, scale systems, and reach their goals. Let’s get a
                | conversation going and see if our solution-focused, scalable
                | approach meshes with #[span.u-no-wrap your vision].

            router-link(to='/contact#start').u-inline-block
                button.c-button-block.u-bg-orange-dark.u-color-white
                    | Start a project

            p.u-text-size-base
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
