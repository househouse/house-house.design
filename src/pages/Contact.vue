<template lang="pug">
div#pageContact

    section.u-padding-bottom-medium
        div.c-contain.u-color-black
            h1.c-heading-c--1.u-margin-bottom-small.u-max-width-3of4
                | #[span.u-visually-hidden House House ]
                | Page title for “Contact”


    section.u-padding-bottom-large
        div.c-contain

            div.u-max-width-2of3
                div.c-text-content.u-text-size-large.u-baseline-large.u-color-black
                    p.u-margin-bottom-medium
                        | We’ve often got our heads down doing important work, but we’ll always make time to hear about your challenges and your ideas. So give us a shout, say a quick hello, and let’s make some magic happen.

                    p.u-flexbox.u-align-middle.u-justify-middle.u-padding-top-base.u-padding-bottom-base.u-color-black.u-uppercase.u-text-size-small.u-tracked-loose.u-bg-grey-light(style='border-radius:0.5rem;')
                        | 👍 We are ready to join your team in&nbsp;
                        | #[strong Q2]&nbsp;and&nbsp;#[strong Q3]&nbsp;2018


    section.u-padding-bottom-large.u-padding-top-medium.u-bg-white.u-shadow-thick
        div.c-contain

            form.u-block#contact-form(action='https://formspree.io/ben@house-house.design' method='POST')

                div.u-flexbox--medium-up.u-clip
                    div.u-border-bottom-grey-medium.u-width-full--narrow-only.u-width-1of2--narrow-up.u-float-left.u-margin-right-base--narrow-up.u-margin-bottom-base.u-flexbox--medium-up

                        div.u-border-left-grey-medium.u-context.u-width-1of2.u-clip(style='height:5rem;')
                            input.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-base.u-bg-white#form-name(required='' type='text' name='_name')
                            label.u-position.u-top-halfway.u-realign-center-vert.u-text-size-base.u-color-green-dark.u-padding-left-base(for='form-name')
                                | Name
                                span.u-color-orange-dark &thinsp;*
                                span.u-margin-left-xsmall.u-color-grey-medium.u-text-family-secondary.u-text-italic.u-tracked-loose
                                    | e.g. Minnie Mouse

                        div.u-border-left-grey-medium.u-context.u-width-1of2(style='height:5rem;').company-field
                            input.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-base.u-bg-white#form-company(required='' type='text' name='_company')
                            label.u-position.u-top-halfway.u-realign-center-vert.u-text-size-base.u-color-blue-light.u-padding-left-base(for='form-company')
                                | Company
                                span.u-color-orange-dark &thinsp;*
                                span.u-margin-left-xsmall.u-color-grey-medium.u-text-family-secondary.u-text-italic.u-tracked-loose
                                    | e.g. Disney


                    div.u-context.u-border-left-grey-medium.u-border-bottom-grey-medium.u-width-full--narrow-only.u-width-1of2--narrow-up.u-float-left.u-margin-bottom-base(style='height:5rem;')
                        input.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-base.u-bg-white#form-email(required='' type='text' name='_replyto')
                        label.u-position.u-top-halfway.u-realign-center-vert.u-text-size-base.u-color-purple-medium.u-padding-left-base.u-stack-over(for='form-email')
                            | Email
                            span.u-color-orange-dark &thinsp;*
                            span.u-margin-left-xsmall.u-color-grey-medium.u-text-family-secondary.u-text-italic.u-tracked-loose
                                | e.g. address@domain.com


                div.u-flexbox--narrow-up.u-clip
                    div.u-context.u-border-left-grey-medium.u-border-bottom-grey-medium.u-width-full.u-float-left.u-margin-bottom-base(style='height:15rem;')
                        textarea.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-base.u-padding-top-base.u-padding-bottom-base.u-padding-right-base.u-bg-white.u-color-black#form-message(required='' placeholder='e.g. Hello, House House! I have a problem with ________ that my team needs some guidance on… I think I may need a designer! My budget is $__,____ and I would like a solution in ____ weeks. Can you help?' name='_message')
                        label.u-position.u-bottom-0.u-text-size-base.u-color-blue-medium.u-padding-left-base.u-padding-bottom-base(for='form-message')
                            | Your Message
                            span.u-color-orange-dark &thinsp;*

                div.u-clip.u-text-align-right
                    button.c-button-block.u-bg-grey-base.u-color-grey-dark#form-expand(name='expand' type='button')
                        | Add Project Details
                    div.u-inline-block.u-margin-right-small--medium-up.u-margin-left-small--medium-up.u-color-grey-medium
                        | or
                    button.c-button-block.u-bg-orange-dark.u-color-white#form-submit(name='submit' type='submit')
                        | Send Message

                div(hidden='')
                    input(type='text' name='_gotcha')
                    input(type='hidden' name='_next' value='/thanks')
                    input(type='hidden' name='_subject' value='Hi there, House House!')
                    input(type='hidden' name='_cc' value='sean@house-house.design')
</template>

<script>
export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact • House House', // title will be injected into parent titleTemplate
  },
};
</script>

<style scoped>
::placeholder {
    color: var(--grey-medium);
    font-family: 'HH Tiempos Text';
    font-style: italic;
}

:-ms-input-placeholder {
    color: var(--grey-medium);
    font-family: 'HH Tiempos Text';
    font-style: italic;
}

::-ms-input-placeholder {
    color: var(--grey-medium);
    font-family: 'HH Tiempos Text';
    font-style: italic;
}

.company-field::before {
    content: '@';
    position: absolute;
    top: calc(50% - 1rem);
    left: -1rem;
    z-index: 200;
    display: block;
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
</style>
