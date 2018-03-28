<template lang="pug">
nav.c-nav-crumbs
    router-link.c-nav-crumbs__back.u-circle(to='/')
        svg(width='16px' height='14px' viewbox='0 0 16 14')
            path(d='M1,7 L15,7')
            polyline(points='7 1 1 7 7 13')
        span.c-nav-crumbs__home Home

    ul.c-nav-crumbs__major.u-context
        li
            router-link.u-color-grey-dark(to='/approach') Approach
        li
            router-link.u-color-grey-dark(to='/work') Work
        li
            router-link.u-color-grey-dark(to='/contact') Contact

    ul.c-nav-crumbs__minor.u-context
        li
            router-link.u-color-grey-dark(to='/about') Privacy Policy
        li
            router-link.u-color-grey-dark(to='/about') Support / Help
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/css/3-components/_navCrumbs.scss';
</style>
