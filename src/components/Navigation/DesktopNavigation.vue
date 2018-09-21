<template lang="pug">
    nav.c-nav-crumbs.--large
        ul.c-nav-crumbs__major.u-context
            template(v-for="route in routes")
                li(v-bind:class="{isActive: currentPath === route.path}")
                    router-link.u-block.u-color-blue-dark.u-text-weight-bold.u-text-family-secondary(v-on:click.native='handleNavToggle', v-bind:to='route.path')
                        | {{ route.name }}
        // ul.c-nav-crumbs__minor.u-context.u-text-size-base
            li
                router-link.u-block.u-color-purple-medium(v-on:click.native='handleNavToggle', to='/contact')
                    | Contact us
            li
                router-link.u-block.u-color-green-medium(v-on:click.native='handleNavToggle', to='/vision-values')
                    | Vision &amp; Values
            li
                router-link.u-block.u-color-blue-light(v-on:click.native='handleNavToggle', to='/privacy-security')
                    | Privacy &amp; Security
</template>

<script>
export default {
  name: 'DesktopNavigation',
  props: {
    routes: {
      type: Array,
      required: true,
    },
    currentPath: String,
    handleNavToggle: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="css">
</style>
