<template lang="pug">

footer.u-bg-black.u-color-white.u-context.u-padding-bottom-xlarge

    div.c-contain.u-flexbox.u-align-middle

        div.u-flex-shrink
            div.u-bg-blue-dark.u-padding-top-base.u-padding-bottom-base.u-padding-right-medium.u-padding-left-base.u-context#question(style='transform:skew(20deg);')
                div.u-flexbox.u-align-middle(style='transform:skew(-20deg);')

                    div.u-flex-shrink.u-margin-right-base
                        img.u-block.u-circle.u-shadow-thick(src='../assets/img/-ben.jpg' style='height:80px;')

                    div.u-flex
                        h2.c-heading.c--2.u-baseline-base.u-margin-bottom-small
                            | Questions? Chatty?
                        p.u-baseline-small
                            | 👋 email Ben at
                            | #[a(href='mailto:hello@house-house.design') hello@house-house.design]


        div.u-flex.u-context.u-stack-over
            ul.u-flexbox.u-margin-bottom-small.u-justify-end.u-text-size-medium
                li #[a(href='') Work]
                li #[a(href='') Approach]
                li #[a(href='') Housemates]
                li #[a(href='') Contact]

            ul.u-flexbox.u-margin-bottom-base.u-justify-end.u-text-size-small.u-baseline-small
                li #[a(href='') Vision & Values]
                li #[a(href='') Privacy]
                li #[a(href='') Security]
                li #[a(href='') Code of Conduct]

            div.u-color-grey-dark.u-text-align-right.u-text-size-small.u-baseline-small
                p © 2016–2018 House House: a design studio
                p Made in Vancouver, Canada 🇨🇦

    LogoScript.u-stack-base.u-context
</template>

<script>
import LogoScript from '@/components/logoScript';

export default {
  components: {
    LogoScript,
  },
};
</script>

<style lang="scss" scoped>
    li a {
        margin-left: 2vw;
        white-space: nowrap;
    }

    a {
        text-decoration-color: rgba(255, 255, 255, 0.4);
    }

    a:hover {
        color: var(--grey-light);
        text-decoration-color: var(--orange-dark);
    }

    svg {
        position: absolute;
        bottom: 0;
        right: 0;

        fill: var(--white);

        opacity: 0.1;
    }

    #question::after {
        content: '';

        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        width: 100vw;

        transform: translate(-99%, 0);

        display: block;

        background: var(--blue-dark);
    }
</style>
