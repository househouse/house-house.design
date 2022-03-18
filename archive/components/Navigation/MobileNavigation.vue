<template>
  <nav v-bind:class="[{isExpanded: isExpanded}, 'c-nav-crumbs --mobile']">
    <div class="c-nav-crumbs__back" v-show="!isExpanded" @click="handleNavToggle">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M1.5 1.5 L14.5 1.5 L14.5 14.5 L1.5 14.5 z" />
      </svg>
      <span class="c-nav-crumbs__home">Navigation</span>
    </div>
    <div class="c-nav-crumbs__back" v-show="isExpanded" @click="handleNavToggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
        <path d="M1.1 1.1 L15 15" />
        <path d="M15 1.1 L1.1 15" />
      </svg>
      <span class="c-nav-crumbs__home">Close</span>
    </div>
    <ul class="c-nav-crumbs__major u-context">
      <li v-bind:class="{isActive: currentPath === '/' }">
        <nuxt-link
          class="u-block u-color-blue-dark u-text-weight-bold u-text-family-secondary"
          v-on:click.native="handleNavToggle"
          to="/"
        >Home</nuxt-link>
      </li>
      <template v-for="route in routes">
        <li v-bind:key="route.name" v-bind:class="{isActive: currentPath === route.path}">
          <nuxt-link
            class="u-block u-color-blue-dark u-text-weight-bold u-text-family-secondary"
            v-on:click.native="handleNavToggle"
            v-bind:to="route.path"
          >{{ route.name }}</nuxt-link>
        </li>
      </template>
    </ul>
  </nav>
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
