<template lang="pug">
nav.c-nav.u-text-size-medium

    nav(v-bind:class="[{isExpanded: isExpanded}, 'c-nav-crumbs --mobile']")
        div.c-nav-crumbs__back(v-show='!isExpanded', @click='handleNavToggle')
            svg(width='16px', height='14px', viewbox='0 0 16 14')
                path(d='M1,7 L15,7')
                polyline(points='7 1 1 7 7 13')
            span.c-nav-crumbs__home
                | back
        router-link.c-nav-crumbs__back.u-circle(v-on:click.native='handleNavToggle', to='/', v-show='isExpanded')
            svg(width='16px', height='14px', viewbox='0 0 16 14')
                path(d='M1,7 L15,7')
                polyline(points='7 1 1 7 7 13')
            span.c-nav-crumbs__home
                | back

        ul.c-nav-crumbs__major.u-context
            li(v-bind:class="{isActive: currentPath === 'work'}")
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle', to='/work')
                    | Work
            li(v-bind:class="{isActive: currentPath === 'approach'}")
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle', to='/approach')
                    | Approach
            li(v-bind:class="{isActive: currentPath === 'housemates'}")
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle', to='/housemates')
                    | Housemates
            li(v-bind:class="{isActive: currentPath === 'contact'}")
                router-link.u-color-orange-medium(v-on:click.native='handleNavToggle', to='/contact')
                    | Start a project
        ul.c-nav-crumbs__minor.u-context.u-text-size-base
            li
                router-link.u-color-purple-medium(v-on:click.native='handleNavToggle', to='/contact')
                    | Contact us
            li
                router-link.u-color-blue-light(v-on:click.native='handleNavToggle', to='/privacy-security')
                    | Vision &amp; Values
            li
                router-link.u-color-green-medium(v-on:click.native='handleNavToggle', to='/vision-values')
                    | Privacy &amp; Security


    nav.c-nav-crumbs.--large
        router-link.c-nav-crumbs__back.u-circle(to='/')
            svg(width='16px', height='14px', viewbox='0 0 16 14')
                path(d='M1,7 L15,7')
                polyline(points='7 1 1 7 7 13')
            span.c-nav-crumbs__home.u-text-size-base(onclick="window.history.back()")
                | back
        ul.c-nav-crumbs__major.u-context
            li(v-bind:class="{isActive: currentPath === 'work'}")
                router-link.u-block.u-color-blue-dark.u-text-weight-bold.u-text-family-secondary(v-on:click.native='handleNavToggle', to='/work')
                    | Work
            li(v-bind:class="{isActive: currentPath === 'approach'}")
                router-link.u-block.u-color-blue-dark.u-text-weight-bold.u-text-family-secondary(v-on:click.native='handleNavToggle', to='/approach')
                    | Approach
            li(v-bind:class="{isActive: currentPath === 'housemates'}")
                router-link.u-block.u-color-blue-dark.u-text-weight-bold.u-text-family-secondary(v-on:click.native='handleNavToggle', to='/housemates')
                    | Housemates
            li(v-bind:class="{isActive: currentPath === 'contact'}")
                router-link.u-color-orange-dark.u-text-weight-bold.u-text-family-secondary(v-on:click.native='handleNavToggle', to='/contact')
                    | Start a project
        ul.c-nav-crumbs__minor.u-context.u-text-size-base
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
  name: 'nav-crumbs',
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    linkParentIsActive(route) {
      return this.$route.name === route;
    },
    handleNavToggle() {
      this.isExpanded = !this.isExpanded;
    },
  },
  computed: {
    currentPath() {
      return this.$route.name.toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
