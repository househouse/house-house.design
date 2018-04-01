<template lang="pug">
div
    section.c-section
        div.c-contain
            h1.c-title.u-margin-bottom-lg
                | #[span House House]
                | is a multidisciplinary studio that helps teams like yours find success through
                | #[span design]

            div.c-text-content.u-color-grey-dark
                p If your team needs to get organized, launch a service, or build a product, then a designer from House House can help you get there. By combining the strategic and the execution, we’ll push you to build towards a mission, towards user needs, towards inclusivity. It’s part of #[router-link(to='/approach') how we approach projects].

                p Working with House House means having access to our resident group of design thinkers and doers, who will become an extension of your team. Our residents think in code, in motion, in imagery, in words; we do as coaches do, as students do — and #[router-link(to='/work') we’re ready figure out your next challenge].

                p You’ve got a visionary idea on how to make our world a better place; we can help you create that positive impact through design. If your goals jive with our values, and if your needs fit with our approach, then #[router-link(to='/contact') we should connect].
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'House House', // title will be injected into parent titleTemplate
  },
};
</script>

<style>
</style>
