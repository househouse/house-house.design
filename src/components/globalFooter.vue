<template lang="pug">
footer
    aside.u-padding-top-md.u-padding-bottom-md.u-padding-left-md.u-padding-right-md.u-align-center.u-bg-grey-light.u-text-size-small
        p.c-text-content
            a#designInOpen(href='https://github.com/househouse/house-house.design/pull/21').u-color-grey-dark
                | Things look a bit off? Content missing? We’re designing this website in the open so you can see it progress. Check it out &rarr;

    div.c-section.u-flexbox--small-up.u-align-center--small-only
        div.u-flex.c-text-content
            p.u-text-size-small.u-margin-bottom-sm
                a.u-margin-right-lg(href='https://linkedin.com/company/17940020/')
                    span LinkedIn
                a.u-margin-right-lg(href='https://github.com/househouse/')
                    span GitHub
                a(href='mailto:hello@house-house.design')
                    span hello@
        div.u-flex-shrink.c-text-content
            p.u-text-size-small.u-margin-bottom-sm.u-color-black
                | Made with love in Vancouver, Canada.
            p.u-text-size-small.u-color-grey-dark
                | © 2016—2018 House House
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    a {
        padding-right: 0.25em;
        padding-left: 0.25em;
    }
    #designInOpen:hover {
        opacity: 0.9;
    }
</style>
