<template lang="pug">
div#pageContact

    section
        article.c-contain

            h1.c-title.u-margin-bottom-lg
                | #[span House House]
                | is ready to hear you out

            div.c-text-content.u-color-grey-dark
                p We’ve often got our heads down doing important work, but we’ll always make time to hear about your challenges and your ideas. So give us a shout, say a quick hello, and let’s make some magic happen.

                p.u-flexbox.u-align-middle.u-justify-middle.u-padding-top-md.u-padding-bottom-md.u-color-black.u-uppercase.u-text-size-small.u-tracked-loose.u-bg-grey-light(style='border-radius:0.5rem; border:1px solid var(--grey-medium);')
                    | 👍 We are ready to join your team in&nbsp;
                    | #[strong Q2]&nbsp;and&nbsp;#[strong Q3]&nbsp;2018

    section.u-bg-grey-med

            div#contact-us.u-context

                form#contact-form.u-block(action='https://formspree.io/ben@house-house.design', method='POST')

                    div.u-flexbox--narrow-up.u-clip
                        div.u-context.u-border-left-dark.u-border-bottom-dark.u-width-full--narrow-only.u-width-1of2--narrow-up.u-float-left.u-margin-right-md--narrow-up.u-margin-bottom-md(style='height:3rem;')
                            label.u-position.u-top-halfway.u-realign-center-vert.u-text-size-small.u-color-primary.u-padding-left-md.u-stack-basic(for='form-name')
                                | Your Name
                            input.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-md#form-name(required='', type='text', name='_name')
                        div.u-context.u-border-left-dark.u-border-bottom-dark.u-width-full--narrow-only.u-width-1of2--narrow-up.u-float-left.u-margin-bottom-md(style='height:3rem;')
                            label.u-position.u-top-halfway.u-realign-center-vert.u-text-size-small.u-color-primary.u-padding-left-md.u-stack-basic(for='form-email')
                                | Your Email
                            input.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-md#form-email(required='', type='text', name='_replyto')


                    div.u-flexbox--narrow-up.u-clip
                        div.u-context.u-border-left-dark.u-border-bottom-dark.u-width-full.u-float-left.u-margin-bottom-md(style='height:12rem;')
                            label.u-position.u-bottom-0.u-text-size-small.u-color-primary.u-padding-left-md.u-padding-bottom-md.u-stack-basic(for='form-message' style='pointer-events:none;')
                                | Your Message
                            textarea.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-md.u-padding-top-md.u-padding-bottom-md.u-padding-right-md#form-message(required='', placeholder='e.g. Hello, House House! I have a problem with ________ that I need some guidance on… I think I may need a designer! My budget is $__,____ and I would like a solution in ____ weeks. Can you help?', name='_message')

                    div.u-flexbox--narrow-up.u-clip
                        button.u-bg-primary.u-border-0.u-width-full--narrow-only.u-width-1of2--narrow-up.u-width-1of4--medium-up.u-color-light.u-padding-top-md.u-padding-bottom-md.u-float-right.u-text-size-base.u-color-white#form-submit(name='submit', type='submit')
                            | Send

                    div(hidden='')
                        input(type='text', name='_gotcha')
                        input(type='hidden', name='_next', value='/thanks')
                        input(type='hidden', name='_subject', value='Hi there, House House!')
                        input(type='hidden', name='_cc', value='sean@house-house.design')
</template>

<script>
export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact • House House', // title will be injected into parent titleTemplate
  },
};
</script>

<style>
</style>
