<template>
  <div class="c-nav">
    <nav v-bind:class="[{isExpanded: isExpanded}, 'c-nav-crumbs --mobile']">
      <div class="c-nav-crumbs__back u-circle" v-show="!isExpanded" @click="handleNavToggle">
        <svg width="16px" height="14px" viewbox="0 0 16 14">
          <path d="M1,7 L15,7"></path>
          <polyline points="7 1 1 7 7 13"></polyline>
        </svg>
        <span class="c-nav-crumbs__home">Home</span>
      </div>
      <router-link v-on:click.native="handleNavToggle" to="/" class="c-nav-crumbs__back u-circle" v-show="isExpanded">
        <svg width="16px" height="14px" viewbox="0 0 16 14">
          <path d="M1,7 L15,7"></path>
          <polyline points="7 1 1 7 7 13"></polyline>
        </svg>
        <span class="c-nav-crumbs__home">Home</span>
      </router-link>
      <ul class="c-nav-crumbs__major u-context">
        <li v-bind:class="{isActive: currentPath === 'approach'}">
          <router-link v-on:click.native="handleNavToggle" to="/approach" class="u-color-grey-dark">Approach</router-link>
        </li>
        <li v-bind:class="{isActive: currentPath === 'work'}">
          <router-link v-on:click.native="handleNavToggle" to="/work" class="u-color-grey-dark">Work</router-link>
        </li>
        <li v-bind:class="{isActive: currentPath === 'contact'}">
          <router-link v-on:click.native="handleNavToggle" to="/contact" class="u-color-grey-dark">Contact</router-link>
        </li>
      </ul>
      <ul class="c-nav-crumbs__minor u-context">
        <li>
          <router-link v-on:click.native="handleNavToggle" to="/about" class="u-color-grey-dark">Join our team</router-link>
        </li>
        <li>
          <router-link v-on:click.native="handleNavToggle" to="/about" class="u-color-grey-dark">Privacy Policy</router-link>
        </li>
      </ul>
    </nav>
    <nav class="c-nav-crumbs --large">
      <router-link to="/" class="c-nav-crumbs__back u-circle">
        <svg width="16px" height="14px" viewbox="0 0 16 14">
          <path d="M1,7 L15,7"></path>
          <polyline points="7 1 1 7 7 13"></polyline>
        </svg>
        <span class="c-nav-crumbs__home">Home</span>
      </router-link>
      <ul class="c-nav-crumbs__major u-context">
        <li v-bind:class="{isActive: currentPath === 'approach'}">
          <router-link to="/approach" class="u-color-grey-dark">Approach</router-link>
        </li>
        <li v-bind:class="{isActive: currentPath === 'work'}">
          <router-link to="/work" class="u-color-grey-dark">Work</router-link>
        </li>
        <li v-bind:class="{isActive: currentPath === 'contact'}">
          <router-link to="/contact" class="u-color-grey-dark">Contact</router-link>
        </li>
      </ul>
      <ul class="c-nav-crumbs__minor u-context">
        <li>
          <router-link v-on:click.native="handleNavToggle" to="/about" class="u-color-grey-dark">Join our team</router-link>
        </li>
        <li>
          <router-link v-on:click.native="handleNavToggle" to="https://github.com/househouse/housecss" class="u-color-grey-dark">housecss</router-link>
        </li>
      </ul>
    </nav>
  </div>
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
