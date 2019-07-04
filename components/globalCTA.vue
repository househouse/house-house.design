<template>
  <aside
    class="u-bg-blue-dark u-color-white u-padding-bottom-medium u-padding-bottom-xlarge--medium-up u-padding-top-medium u-padding-top-xlarge--medium-up"
    id="globalCTA"
  >
    <div
      class="c-contain c-text-content u-text-align-center--medium-up u-max-width-2of3--medium-up"
    >
      <p class="u-text-family-secondary u-text-size-medium u-baseline-medium">
        We’re helping innovative teams like yours build apps, create styleguides, scale systems, and reach their goals. Let’s get a conversation going and see if our solution-focused, scalable approach meshes with
        <span
          class="u-no-wrap"
        >your vision</span>.
      </p>
      <nuxt-link class="u-inline-block" to="/contact#start">
        <button class="c-button-block u-bg-orange-dark u-color-white">Start a project</button>
      </nuxt-link>
      <p class="u-text-size-base">
        or,
        <nuxt-link to="/approach">learn more about us</nuxt-link>
      </p>
    </div>
  </aside>
</template>

<script>
export default {
    name: 'GlobalCTA',
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
