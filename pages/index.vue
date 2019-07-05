<template>
  <div id="pageHome" class="u-bg-blue-dark">

    <section class="u-padding-bottom-medium u-padding-bottom-xlarge--medium-up u-color-white">
      <div class="c-contain u-context">

        <h1 class="c-heading-c--1 u-margin-bottom-small u-max-width-2of3--medium-up">
          <span class="u-visually-hidden">House House</span> A design studio and freelancer community.
        </h1>

        <ul class="u-max-width-1of2--medium-up u-text-list-bullets u-text-family-secondary u-text-size-medium u-baseline-medium">

          <li class="u-margin-top-small">
            Grow your team’s abilities, capacity, and potential by adding some extra Housemate hands to your next project
            <span class="u-no-wrap">or sprint,
              <em class="u-color-grey-medium">or…</em>
            </span>
          </li>

          <li class="u-margin-top-small">
            Hire our team of design and development consultants and producers to turn your digital product ideas into
            <span class="u-no-wrap">a reality</span>.
          </li>
          
        </ul>

        <div class="u-position u-top-0 u-right-0 u-bg-cover u-bg-blancink-device x-device"></div>

        <div class="u-position u-bottom-0 u-right-0 x-device-description u-text-size-small u-baseline-small">
          <p class="u-margin-bottom-xsmall u-color-blue-light u-text-weight-bold u-no-break">◀ blanc ink</p>
          <p class="u-margin-bottom-xsmall u-color-grey-base">We helped the tattoo removal startup explore and build a bespoke web app.</p>
        </div>

      </div>
    </section>

    <section class="u-padding-bottom-medium u-padding-bottom-xlarge--medium-up u-padding-top-medium u-padding-top-xlarge--medium-up u-bg-grey-light u-color-grey-dark u-shadow-thick">
      <div class="c-contain">

        <article class="u-flexbox--medium-up u-align-end u-margin-bottom-medium u-margin-bottom-xlarge--medium-up">
          <div class="u-flex-shrink u-padding-right-medium--medium-up u-padding-right-xlarge--wide-up u-margin-bottom-base--medium-down">
            <IllustrationOne class="u-block" />
          </div>
          <div class="u-flex u-max-width-1of2--medium-up c-text-content">
            <h2 class="c-heading c--3 u-color-black">Flexible, so you don’t have to be</h2>
            <p class="u-text-family-secondary u-text-size-medium u-baseline-medium">
              Working with House House means having access to a community of talented designers, developers, writers, strategists and producers.</p>
            <nuxt-link
              class="c-button-link c--purple c--with-icon u-text-secondary u-text-size-medium u-baseline-small"
              to="/housemates"
            >
              <IconAssemble />Learn how we assemble
            </nuxt-link>
          </div>
        </article>

        <article class="u-flexbox--medium-up u-align-end u-margin-bottom-medium u-margin-bottom-xlarge--medium-up">
          <div class="u-flex-shrink u-order-2--medium-up u-padding-left-medium--medium-up u-padding-left-xlarge--wide-up u-margin-bottom-base--medium-down">
            <IllustrationThree class="u-block" />
          </div>
          <div class="u-flex u-max-width-1of2--medium-up c-text-content">
            <h2 class="c-heading c--3 u-color-black">Launching partnerships</h2>
            <p class="u-text-family-secondary u-text-size-medium u-baseline-medium">
              Startups and enterprises alike go through pivots, shifts, and changes. Hiring the right designer can be a lengthy process, and contracting always leaves you a new set of challenges. Housemates are partnered to your team, ensuring quick
              ramp-up and contextualization.
            </p>
            <nuxt-link
              class="c-button-link c--green c--with-icon u-text-secondary u-text-size-medium u-baseline-small"
              to="/approach"
            >
              <!-- <object data="../assets/img/icons/icon-approach.svg" type="image/svg+xml">Lo</object> -->
              <IconApproach />Discover our approach
            </nuxt-link>
          </div>
        </article>

        <article class="u-flexbox--medium-up u-align-end">
          <div class="u-flex-shrink u-padding-right-medium--medium-up u-padding-right-xlarge--wide-up u-margin-bottom-base--medium-down">
            <IllustrationTwo class="u-block" />
          </div>
          <div class="u-flex u-max-width-1of2--medium-up c-text-content">
            <h2 class="c-heading c--3 u-color-black">Connecting you with the right skills</h2>
            <p class="u-text-family-secondary u-text-size-medium u-baseline-medium">
              We Housemates think in code, in motion, in imagery, in words; from content strategy to JavaScript development to icon animation, there’s a design-thinking person at House House with the right experience and skills who can integrate into your upcoming
              project.
            </p>
            <nuxt-link
              class="c-button-link c--blue c--with-icon u-text-secondary u-text-size-medium u-baseline-small"
              to="/work"
            >
              <IconConnect />See what we can do
            </nuxt-link>
          </div>
        </article>

      </div>
    </section>

  </div>
</template>

<script>
import IconApproach from "../assets/img/icons/icon-approach.svg";
import IconConnect from "../assets/img/icons/icon-connect.svg";
import IconAssemble from "../assets/img/icons/icon-assemble.svg";
import IllustrationOne from '../assets/img/illustration-1.svg'
import IllustrationTwo from '../assets/img/illustration-2.svg';
import IllustrationThree from '../assets/img/illustration-3.svg';

export default {
  metaInfo: {
    title: 'House House', // title will be injected into parent titleTemplate
  },
  components: {
    IconApproach,
    IconConnect,
    IconAssemble,
    IllustrationOne,
    IllustrationTwo,
    IllustrationThree
  }
}
</script>

<style scoped lang="scss">
.x-device,
.x-device-description {
  display: none;
  transition: all ease-in-out 400ms;
}

.x-device {
  width: 21.875rem;
  height: 43.5rem;

  @media screen and (min-width: 47rem) {
    display: block;
    transform: translate(-5vw, 5rem) scale(0.8) rotate(5deg);
  }

  @media screen and (min-width: 53rem) {
    transform: translate(-40%, 3rem) scale(0.8) rotate(-5deg);
  }

  @media screen and (min-width: 63rem) {
    transform: translate(-50%, 5rem) scale(0.7) rotate(-5deg);
  }

  @media screen and (min-width: 73rem) {
    transform: translate(-60%, -5%) scale(0.9) rotate(6deg);
  }

  @media screen and (min-width: 113rem) {
    transform: translate(-50%, -5%) scale(0.95) rotate(6deg);
  }
}

.x-device-description {
  @media screen and (min-width: 53rem) {
    display: block;
    max-width: 10rem;
    transform: translate(0, 0) rotate(-5deg);
  }

  @media screen and (min-width: 63rem) {
    transform: translate(-3rem, 2rem) rotate(-5deg);
  }

  @media screen and (min-width: 73rem) {
    max-width: 12rem;
    transform: translate(-1.5rem, 2rem) rotate(6deg);
  }

  @media screen and (min-width: 113rem) {
    transform: translate(1.5rem, 5rem) rotate(6deg);
  }
}
</style>
