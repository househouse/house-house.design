<template lang="pug">

footer.u-bg-black.u-bg-center.u-bg-cover.u-bg-group.u-color-white.u-context.u-clip

    div.c-contain--narrow-up.u-flexbox--medium-up.u-align-middle.u-context.u-stack-over

        div.u-flex.u-margin-bottom-base
            div.u-bg-blue-dark.u-padding-top-base.u-padding-bottom-base.u-padding-left-xsmall--narrow-up.u-padding-left-base--medium-up.u-padding-right-xsmall--narrow-up.u-padding-right-base--medium-up.u-context.x-question-outer#question
                div.u-flexbox.u-align-middle.u-text-align-center.x-question-inner

                    div.u-flex-none.u-margin-right-small--narrow-only.x-question-photo
                        img.u-hidden--narrow-only.u-block--narrow-up.u-circle.u-shadow-thick(:src='displayPhoto')
                    div.u-flex
                        h2.c-heading.c--2.u-baseline-base.u-margin-bottom-small
                            | Questions? Chatty?
                        p.u-baseline-small
                            | 👋 email {{displayName}} at
                            | #[a.u-no-wrap(href='mailto:hello@house-house.design?subject=Hello+there%21') hello@house-house.design]


        div.u-flex.u-context.u-stack-over
            h2.u-visually-hidden Navigation
            nav.u-flexbox--narrow-up.u-margin-bottom-small.u-justify-end--medium-up.u-text-size-medium.u-text-align-center
                router-link.u-block(to='/work')
                    | Work
                router-link.u-block(to='/approach')
                    | Approach
                router-link.u-block(to='/housemates')
                    | Housemates
                router-link.u-block(to='/contact')
                    | Contact

            h2.u-visually-hidden More Links:
            nav.u-flexbox--narrow-up.u-margin-bottom-base.u-justify-end--medium-up.u-text-size-small.u-text-align-center.u-baseline-small
                // router-link.u-block(to='/vision-values')
                    | Vision &amp; Values
                // router-link.u-block(to='/privacy-security')
                    | Privacy &amp; Security
                a.u-block(href='https://linkedin.com/company/house-house')
                    | LinkedIn
                a.u-block(href='https://github.com/househouse')
                    | GitHub
                a.u-block(href='https://paper.dropbox.com/doc/Our-Code-of-Conduct-j62RafLNgIaUjUsOGeVwA')
                    | Our Code of Conduct

            div.u-margin-bottom-base.u-color-grey-medium.u-text-align-left.u-text-align-right--medium-up.u-text-size-small.u-baseline-small
                p
                    | #[span.u-visually-hidden This site and its contents copyright]
                    | © 2016–2018 House House • A Design Studio
                p
                    | Made with love in Vancouver, Canada 🇨🇦

    LogoScript.u-stack-base.u-context
</template>

<script>
import LogoScript from '@/components/logoScript';
import benImage from '@/assets/img/-ben.jpg';
import seanImage from '@/assets/img/-sean.jpg';

export default {
  components: {
    LogoScript,
  },
  data() {
    return {
      ben: benImage,
      sean: seanImage,
      displayPhoto: null,
      displayName: null,
    };
  },
  mounted() {
    const randomNumber = Math.random();

    const selectedPhoto = randomNumber > 0.5 ?
      this.ben :
      this.sean;

    const selectedName = randomNumber > 0.5 ?
      'Ben G' :
      'Sean D';

    this.displayPhoto = selectedPhoto;
    this.displayName = selectedName;
  },
};
</script>

<style lang="scss" scoped>
footer {
    padding-bottom: 30%;

    @media screen and (min-width: 48rem) {
        padding-bottom: 20%;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.5), var(--black));
    }
}

nav a {
    @media screen and (max-width: 45rem) {
      height: 40px;
      margin-right: 2vw;
    }

    @media screen and (min-width: 46rem) {
      margin-left: 2vw;
    }
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

    opacity: 0.2;
}

@media screen and (min-width: 40rem) {

    .x-question-outer {
        transform: skew(20deg);

        &::before,
        &::after {
          content: '';

          position: absolute;
          left: 0;
          bottom: 0;
          top: 0;

          display: block;
        }

        &::after {
            width: 100vw;

            transform: translate(-99%, 0);

            background: var(--blue-dark);
        }
    }

    .x-question-inner {
        transform:skew(-20deg);
    }
}

.x-question-photo {
    width: 5rem;
    height: 5rem;

    @media screen and (max-width: 30rem) {
        display: none;
    }
}
</style>
