<template>
  <nav class="c-nav-crumbs" @click='handleNavToggle'>
    <router-link to="/" class="c-nav-crumbs__back u-circle">
      <svg width="16px" height="14px" viewbox="0 0 16 14">
        <path d="M1,7 L15,7"></path>
        <polyline points="7 1 1 7 7 13"></polyline>
      </svg>
      <span class="c-nav-crumbs__home">Home</span>
    </router-link>
    <ul class="c-nav-crumbs__major u-context">
      <li v-bind:class="{isActive: currentPath === 'about'}">
        <router-link to="/about" class="u-color-grey-dark">About</router-link>
      </li>
      <li v-bind:class="{isActive: currentPath === 'process'}">
        <router-link to="/process" class="u-color-grey-dark">Process</router-link>
      </li>
      <li v-bind:class="{isActive: currentPath === 'contact'}">
        <router-link to="/contact" class="u-color-grey-dark">Contact</router-link>
      </li>
    </ul>
    <ul class="c-nav-crumbs__minor u-context">
      <li>
        <router-link to="/about" class="u-color-grey-dark">My Account</router-link>
      </li>
      <li>
        <router-link to="/about" class="u-color-grey-dark">Privacy Policy</router-link>
      </li>
      <li>
        <router-link to="/about" class="u-color-grey-dark">Support / Help</router-link>
      </li>
    </ul>
  </nav>
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
  mounted() {
  },
};
</script>

<style lang="scss">
@import '../assets/css/3-components/_navCrumbs.scss';
</style>
