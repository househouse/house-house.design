<template lang="pug">
  div#pageThanks

    section.u-padding-bottom-medium
        div.c-contain.u-color-orange-dark
            h1.c-heading-c--1.u-margin-bottom-small.u-max-width-3of4
                | ↳ Thanks!
    
    section.u-padding-bottom-large
      div.c-contain.u-flexbox--medium-up.u-align-end
        div.u-padding-right-medium--medium-up.u-width-3of4
          div.c-text-content.u-text-size-large.u-baseline-large.u-color-black.u-margin-bottom-medium
            p 📮 Your mail is on it&rsquo;s way to us! We can&rsquo;t wait to read it and hear about what awesome ideas you&rsquo;ve got in mind. 
          div.c-text-content.u-text-family-secondary.u-text-size-medium.u-baseline-medium
            p We&rsquo;ll get in touch in 1–2 business days. In the mean time, you can take a look at some of our past #[router-link(to="/work").u-no-wrap work] or head back to our #[router-link(to="/" exact) homepage]. We look forward to talking to you!
</template>
<script>
export default {
  name: 'Thanks',
  metaInfo: {
    title: 'Thanks! • House House',
  },
};
</script>
<style lang="scss" scoped>
</style>
