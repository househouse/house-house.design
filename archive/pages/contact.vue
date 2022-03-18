<template>
  <div id="pageContact">
    <section class="u-padding-bottom-base u-bg-blue-dark">
      <div class="c-contain">
        <h1 class="c-heading-c--1 u-margin-bottom-small u-max-width-3of4 u-color-white">↳ Start a project</h1>
      </div>
    </section>
    <section class="u-padding-top-medium u-padding-bottom-large u-bg-grey-light">
      <div class="c-contain">
        <div class="u-max-width-2of3">
          <div class="c-text-content u-text-size-large u-baseline-large u-color-black">
            <p
              class="u-margin-bottom-base"
            >👩🏻‍💻 We’ve often got our heads down working, but we’ll always make time to hear about your challenges and your ideas. So give us a shout, say a quick hello, and let’s make some magic happen.</p>
            <p
              class="u-flexbox u-align-middle u-justify-middle u-padding-top-small u-padding-bottom-small u-color-black u-text-uppercase u-text-trackig-loose u-text-size-small u-baseline-small u-border-grey-base"
              style="border-radius:10rem; border-width:0.25rem;"
            >
              <span class="u-block u-text-align-center">
                We are currently taking new projects for
                <strong
                  class="u-color-blue-light u-no-wrap"
                >Q3/Q4 2019</strong>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="u-padding-bottom-large u-padding-top-medium u-bg-white u-shadow-thick"
      id="start"
    >
      <div class="c-contain">
        <form
          class="u-block"
          id="contact-form"
          action="https://formspree.io/ben@house-house.design"
          method="POST"
        >
          <div class="u-flexbox--medium-up u-clip">
            <div
              class="u-border-bottom-grey-medium u-width-full--narrow-only u-width-1of2--narrow-up u-float-left u-margin-right-base--narrow-up u-margin-bottom-base u-flexbox--medium-up"
            >
              <div
                class="u-border-left-grey-medium u-context u-width-1of2 u-clip"
                style="height:5rem;"
              >
                <input
                  class="u-position u-top-0 u-left-0 u-right-0 u-bottom-0 u-width-full u-border-0 u-text-size-base u-padding-left-base u-bg-white"
                  id="form-name"
                  required
                  type="text"
                  name="_name"
                />
                <label
                  class="u-position u-top-halfway u-realign-center-vert u-text-size-base u-color-green-dark u-padding-left-base"
                  for="form-name"
                >
                  Name
                  <span class="u-color-orange-dark">&thinsp;*</span>
                  <span
                    class="u-margin-left-xsmall u-color-grey-medium u-text-family-secondary u-text-italic u-tracked-loose"
                  >e.g. M. Mouse</span>
                </label>
              </div>
              <div
                class="u-border-left-grey-medium u-context u-width-1of2 company-field"
                style="height:5rem;"
              >
                <input
                  class="u-position u-top-0 u-left-0 u-right-0 u-bottom-0 u-width-full u-border-0 u-text-size-base u-padding-left-base u-bg-white"
                  id="form-company"
                  required
                  type="text"
                  name="_company"
                />
                <label
                  class="u-position u-top-halfway u-realign-center-vert u-text-size-base u-color-blue-light u-padding-left-base"
                  for="form-company"
                >
                  Company
                  <span class="u-color-orange-dark">&thinsp;*</span>
                  <span
                    class="u-margin-left-xsmall u-color-grey-medium u-text-family-secondary u-text-italic u-tracked-loose"
                  >e.g. Disney</span>
                </label>
              </div>
            </div>
            <div
              class="u-context u-border-left-grey-medium u-border-bottom-grey-medium u-width-full--narrow-only u-width-1of2--narrow-up u-float-left u-margin-bottom-base"
              style="height:5rem;"
            >
              <input
                class="u-position u-top-0 u-left-0 u-right-0 u-bottom-0 u-width-full u-border-0 u-text-size-base u-padding-left-base u-bg-white"
                id="form-email"
                required
                type="text"
                name="_replyto"
              />
              <label
                class="u-position u-top-halfway u-realign-center-vert u-text-size-base u-color-purple-medium u-padding-left-base u-stack-over"
                for="form-email"
              >
                Email
                <span class="u-color-orange-dark">&thinsp;*</span>
                <span
                  class="u-margin-left-xsmall u-color-grey-medium u-text-family-secondary u-text-italic u-tracked-loose"
                >e.g. address@domain.com</span>
              </label>
            </div>
          </div>
          <div class="u-flexbox--narrow-up u-clip">
            <div
              class="u-context u-border-left-grey-medium u-border-bottom-grey-medium u-width-full u-float-left u-margin-bottom-base"
              style="height:15rem;"
            >
              <textarea
                class="u-position u-top-0 u-left-0 u-right-0 u-bottom-0 u-width-full u-border-0 u-text-size-base u-padding-left-base u-padding-top-base u-padding-bottom-base u-padding-right-base u-bg-white u-color-black"
                id="form-message"
                required
                placeholder="e.g. Hello, House House! I have a problem with ________ that my team needs some guidance on… I think I may need a designer! My budget is $__,____ and I would like a solution in ____ weeks. Can you help?"
                name="_message"
              ></textarea>
              <label
                class="u-position u-bottom-0 u-text-size-base u-color-blue-medium u-padding-left-base u-padding-bottom-base"
                for="form-message"
              >
                Your Message
                <span class="u-color-orange-dark">&thinsp;*</span>
              </label>
            </div>
          </div>
          <!-- div.u-bg-grey-base.u-padding-top-medium.u-padding-bottom-medium-->
          <div class="u-clip u-text-align-right">
            <!-- button.c-button-block.u-bg-grey-base.u-color-grey-dark#form-expand(name='expand' type='button')| Add Project Details-->
            <!-- div.u-inline-block.u-margin-right-small--medium-up.u-margin-left-small--medium-up.u-color-grey-medium| or-->
            <button
              class="c-button-block u-bg-orange-dark u-color-white"
              id="form-submit"
              name="submit"
              type="submit"
            >Send Message</button>
          </div>
          <div hidden>
            <input type="text" name="_gotcha" />
            <input type="hidden" name="_next" value="/thanks" />
            <input type="hidden" name="_subject" value="Hi there, House House!" />
            <input type="hidden" name="_cc" value="sean@house-house.design" />
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: 'Contact • House House', // title will be injected into parent titleTemplate
  },
}
</script>
<style lang="postcss" scoped>
::placeholder {
  color: var(--grey-medium);
  font-family: monospace;
  font-style: normal;
}

:-ms-input-placeholder {
  color: var(--grey-medium);
  font-family: monospace;
  font-style: normal;
}

::-ms-input-placeholder {
  color: var(--grey-medium);
  font-family: monospace;
  font-style: normal;
}

.company-field::before {
  content: '@';
  position: absolute;
  top: calc(50% - 1rem);
  left: -1rem;
  z-index: 200;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--grey-medium);
  background-color: var(--white);
  border-radius: 100%;
  color: var(--grey-medium);
  text-align: center;
}

label {
  white-space: nowrap;
  cursor: text;
}

input[type='checkbox'] {
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}

input[type='checkbox']:checked ~ .c-accordion__content {
  max-height: 0;
  opacity: 0;
}

.c-accordion__content {
  max-height: 800px;
  opacity: 1;
  transform: translate(0, 0);
  transition: all 0.25s ease-in-out;
}
</style>
