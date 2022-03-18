<template>
  <footer class="u-context u-clip u-bg-blue-dark u-bg-center u-bg-cover u-bg-group u-color-white">
    <div class="c-contain--narrow-up u-flexbox--medium-up u-align-middle u-context u-stack-over">
      <div class="u-flex u-margin-bottom-base">
        <div
          class="u-border-white u-padding-top-base u-padding-bottom-base u-padding-left-xsmall--narrow-up u-padding-left-base--medium-up u-padding-right-xsmall--narrow-up u-padding-right-base--medium-up u-context x-question-outer"
          id="question"
        >
          <div class="u-flexbox u-align-middle u-text-align-center x-question-inner">
            <div class="u-flex-none u-margin-right-small--narrow-only x-question-photo">
              <img
                class="u-hidden--narrow-only u-block--narrow-up u-circle u-shadow-thick"
                :src="displayPhoto"
              />
            </div>
            <div class="u-flex">
              <h2 class="c-heading c--2 u-baseline-base u-margin-bottom-small">Questions? Chatty?</h2>
              <p class="u-baseline-small">
                👋 email {{displayName}} at
                <a
                  class="u-no-wrap"
                  href="mailto:hello@house-house.design?subject=Hello+there%21"
                >hello@house-house.design</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="u-flex u-context u-stack-over">
        <h2 class="u-visually-hidden">Navigation</h2>
        <nav
          class="u-flexbox--narrow-up u-margin-bottom-small u-justify-end--medium-up u-text-size-medium u-text-align-center"
        >
          <nuxt-link class="u-block u-padding-top-small" to="/work">Work</nuxt-link>
          <nuxt-link class="u-block u-padding-top-small" to="/approach">Approach</nuxt-link>
          <nuxt-link class="u-block u-padding-top-small" to="/housemates">Housemates</nuxt-link>
          <nuxt-link class="u-block u-padding-top-small" to="/contact">Contact</nuxt-link>
        </nav>
        <h2 class="u-visually-hidden">More Links:</h2>
        <nav
          class="u-flexbox--narrow-up u-margin-bottom-small u-justify-end--medium-up u-text-size-small u-text-align-center u-baseline-small"
        >
          <a class="u-block" href="https://linkedin.com/company/house-house">LinkedIn</a>
          <a class="u-block" href="https://github.com/househouse">GitHub</a>
          <a
            class="u-block"
            href="https://paper.dropbox.com/doc/Our-Code-of-Conduct-j62RafLNgIaUjUsOGeVwA"
          >Our Code of Conduct</a>
        </nav>
        <div
          class="u-margin-bottom-base u-color-grey-medium u-text-align-center u-text-align-left--narrow-up u-text-align-right--medium-up u-text-size-small u-baseline-small"
        >
          <p>
            <span class="u-visually-hidden">This site and its contents copyright</span> © 2016–2019 House House • A Design Studio
          </p>
          <p>Based in Vancouver and London 🇨🇦 🇬🇧 </p>
        </div>
      </div>
    </div>
    <LogoScript class="u-stack-base u-context"></LogoScript>
  </footer>
</template>

<script>
import LogoScript from './logoScript';
import benImage from '../assets/img/-ben.jpg';
import seanImage from '../assets/img/-sean.jpg';

export default {
  name: "GlobalFooter",
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
    padding-bottom: 15%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), var(--blue-dark));
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
.nuxt-link {
  text-decoration-color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: var(--grey-light);
    text-decoration-color: var(--orange-dark);
  }
}

.nuxt-link-active,
.nuxt-link-active:hover {
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
  }

  .x-question-inner {
    transform: skew(-20deg);
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
