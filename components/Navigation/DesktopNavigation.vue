<template>
  <nav class="c-nav-crumbs --large">
    <ul class="c-nav-crumbs__major u-context">
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
