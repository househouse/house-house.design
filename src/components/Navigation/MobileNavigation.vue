<template lang="pug">
    nav(v-bind:class="[{isExpanded: isExpanded}, 'c-nav-crumbs --mobile']")
        div.c-nav-crumbs__back(v-show='!isExpanded', @click='handleNavToggle')
            svg(xmlns="http://www.w3.org/2000/svg", width='18', height='18', viewbox='0 0 18 18')
                path(d="M1.5 1.5 L14.5 1.5 L14.5 14.5 L1.5 14.5 z")
            span.c-nav-crumbs__home
                | Navigation
        div.c-nav-crumbs__back(v-show="isExpanded", @click="handleNavToggle")
            svg(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 18 18", width="18", height="18")
                path(d="M1.1 1.1 L15 15")
                path(d="M15 1.1 L1.1 15")
            span.c-nav-crumbs__home
                | Close
        ul.c-nav-crumbs__major.u-context
            li(v-bind:class="{isActive: currentPath === '/home' }")
                router-link.u-block.u-color-blue-dark.u-text-weight-bold.u-text-family-secondary(v-on:click.native='handleNavToggle', to='/')
                    | Home
            template(v-for="route in routes")
                li(v-bind:class="{isActive: currentPath === route.path}")
                    router-link.u-block.u-color-blue-dark.u-text-weight-bold.u-text-family-secondary(v-on:click.native='handleNavToggle', v-bind:to='route.path')
                        | {{ route.name }}
        // ul.c-nav-crumbs__minor.u-context.u-text-size-base
            li
                router-link.u-color-purple-medium(v-on:click.native='handleNavToggle', to='/contact')
                    | Contact us
            li
                router-link.u-color-blue-light(v-on:click.native='handleNavToggle', to='/privacy-security')
                    | Vision &amp; Values
            li
                router-link.u-color-green-medium(v-on:click.native='handleNavToggle', to='/vision-values')
                    | Privacy &amp; Security
</template>

<script>
export default {
  name: 'MobileNavigation',
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
    isExpanded: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="css">
</style>
