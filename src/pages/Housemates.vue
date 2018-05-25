<template lang="pug">
div#pageWork

    section.u-padding-bottom-medium
        div.c-contain.u-color-black
            h1.c-heading-c--1.u-margin-bottom-small.u-max-width-3of4
                | #[span.u-visually-hidden House House is]
                | Page title for “Housemates”


    section.u-padding-bottom-large
        div.c-contain

            div.c-text-content.u-text-size-large.u-baseline-large.u-color-black.u-width-3of4
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat eu fugiat nulla pariatur.


    section.u-padding-bottom-large.u-padding-top-large.u-bg-blue-dark.u-color-white
        div.c-contain

            div.u-flexbox

                article.c-text-content.u-flex.u-margin-right-medium.u-width-full.u-width-1of2--narrow-up.u-text-family-secondary.u-text-size-medium.u-baseline-medium
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                aside.u-flex.u-width-full.u-width-1of2--narrow-up
                    article.c-resident.c--ben.u-margin-bottom-medium
                        div.c-resident__image
                        div.c-resident__info.c-text-content
                            h3.c-resident__name.u-margin-bottom-sm Ben Groulx
                            p.c-resident__role.u-half-transparent Designer
                            p.c-resident__links.u-text-size-small.u-text-weight-bold
                                a(href='#').u-margin-right-xsmall LinkedIn
                                a(href='#') GitHub

                    article.c-resident.c--sean
                        div.c-resident__image
                        div.c-resident__info.c-text-content
                            h3.c-resident__name.u-margin-bottom-sm Sean Durfee
                            p.c-resident__role.u-half-transparent Designer
                            p.c-resident__links.u-text-size-small.u-text-weight-bold
                                a(href='#').u-margin-right-xsmall LinkedIn
                                a(href='#') GitHub
</template>

<script>
export default {
  name: 'Housemates',
  metaInfo: {
    title: 'Housemates • House House', // title will be injected into parent titleTemplate
  },
};
</script>

<style lang="scss" scoped>
</style>
