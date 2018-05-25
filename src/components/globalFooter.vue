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
            h2.u-visually-hidden Navigation
            nav.u-flexbox.u-margin-bottom-small.u-justify-end.u-text-size-medium
                router-link.u-block(v-on:click.native='handleNavToggle' to='/work')
                    | Work
                router-link.u-block(v-on:click.native='handleNavToggle' to='/approach')
                    | Approach
                router-link.u-block(v-on:click.native='handleNavToggle' to='/housemates')
                    | Housemates
                router-link.u-block(v-on:click.native='handleNavToggle' to='/contact')
                    | Contact

            h2.u-visually-hidden More Links:
            nav.u-flexbox.u-margin-bottom-base.u-justify-end.u-text-size-small.u-baseline-small
                router-link.u-block(v-on:click.native='handleNavToggle' to='/privacy-security')
                    | Privacy & Security
                router-link.u-block(v-on:click.native='handleNavToggle' to='/vision-values')
                    | Vision & Values
                router-link.u-block(v-on:click.native='handleNavToggle' to='/xxxxx')
                    | Code of Conduct

            div.u-color-grey-dark.u-text-align-right.u-text-size-small.u-baseline-small
                p
                    | #[span.u-visually-hidden This site and its contents copyright]
                    | © 2016–2018 House House • A Design Studio
                p
                    | Made with love in Vancouver, Canada 🇨🇦

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
    nav a {
        margin-left: 2vw;
    }

    a,
    .router-link {
        text-decoration-color: rgba(255, 255, 255, 0.6);

        &:hover {
            color: var(--grey-light);
            text-decoration-color: var(--orange-dark);
        }
    }

    .router-link-active,
    .router-link-active:hover {
        text-decoration: line-through;
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
