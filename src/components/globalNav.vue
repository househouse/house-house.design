<template lang="pug">
nav.c-nav
    nav(v-bind:class="[{isExpanded: isExpanded}, 'c-nav-crumbs --mobile']")
        .c-nav-crumbs__back.u-circle(v-show='!isExpanded', @click='handleNavToggle')
            svg(width='16px', height='14px', viewbox='0 0 16 14')
                path(d='M1,7 L15,7')
                polyline(points='7 1 1 7 7 13')
            span.c-nav-crumbs__home
                | Home
        router-link.c-nav-crumbs__back.u-circle(v-on:click.native='handleNavToggle', to='/', v-show='isExpanded')
            svg(width='16px', height='14px', viewbox='0 0 16 14')
                path(d='M1,7 L15,7')
                polyline(points='7 1 1 7 7 13')
            span.c-nav-crumbs__home
                | Home
        ul.c-nav-crumbs__major.u-context
            li(v-bind:class="{isActive: currentPath === 'approach'}")
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle', to='/approach')
                    | Approach
            li(v-bind:class="{isActive: currentPath === 'work'}")
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle', to='/work')
                    | Work
            li(v-bind:class="{isActive: currentPath === 'contact'}")
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle', to='/contact')
                    | Contact
        ul.c-nav-crumbs__minor.u-context
            li
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle' to='mailto:hello@house-house.design')
                    | Join our team
            li
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle' to='https://github.com/househouse/housecss')
                    | housecss

    nav.c-nav-crumbs.--large
        router-link.c-nav-crumbs__back.u-circle(to='/')
            svg(width='16px', height='14px', viewbox='0 0 16 14')
                path(d='M1,7 L15,7')
                polyline(points='7 1 1 7 7 13')
            span.c-nav-crumbs__home
                | Home
        ul.c-nav-crumbs__major.u-context
            li(v-bind:class="{isActive: currentPath === 'approach'}")
                router-link.u-color-grey-dark(to='/approach')
                    | Approach
            li(v-bind:class="{isActive: currentPath === 'work'}")
                router-link.u-color-grey-dark(to='/work')
                    | Work
            li(v-bind:class="{isActive: currentPath === 'contact'}")
                router-link.u-color-grey-dark(to='/contact')
                    | Contact
        ul.c-nav-crumbs__minor.u-context
            li
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle' to='mailto:hello@house-house.design')
                    | Join our team
            li
                router-link.u-color-grey-dark(v-on:click.native='handleNavToggle' to='https://github.com/househouse/housecss')
                    | housecss
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
      if (this.$route.name === route) {
        return true;
      }
      return false;
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
@import '../assets/css/3-components/_navCrumbs.scss';
</style>
