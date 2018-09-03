<template lang="pug">
nav.c-nav.u-text-size-medium
    MobileNavigation(v-bind:routes="navRoutes", v-bind:current-path="currentPath", v-bind:handle-nav-toggle="handleNavToggle", v-bind:is-expanded="isExpanded")
    DesktopNavigation(v-bind:routes="navRoutes", v-bind:current-path="currentPath", v-bind:handle-nav-toggle="handleNavToggle")
</template>

<script>
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

export default {
  name: 'GlobalNav',
  components: { MobileNavigation, DesktopNavigation },
  data() {
    return {
      isExpanded: false,
      // WARNING — READ ME BEFORE CHANGING NAV ROUTES
      // Navigation links are generated dynamically for both mobile and desktop
      // via this data value. Each route object must have a path and a name.
      // Order matters here
      navRoutes: [
        {
          path: '/work',
          name: 'Work',
        },
        {
          path: '/approach',
          name: 'Approach',
        },
        {
          path: '/housemates',
          name: 'Housemates',
        },
        {
          path: '/contact',
          name: 'Start a project',
        },
      ],
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
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
