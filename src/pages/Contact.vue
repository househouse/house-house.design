<template lang="pug">
div
    section.c-section
        div.c-contain
            h1.c-title We should work together

            div.c-text-content(style="color:var(--grey-dark);")

                div.c-text-content.u-measure-medium.u-margin-bottom-lg--small-only.u-margin-bottom-xl--small-up

                    p.u-flexbox.u-align-middle
                        span.u-block.u-circle.u-margin-right-sm(style='background:var(--green-med); width:0.5rem; height:0.5rem;')
                        span.u-block.u-uppercase.u-text-size-small.u-tracked-loose.u-color-dark Available starting Q2 2018

                    p We’re often head-down, jamming out creating something really cool. But we’ll always make time to hear about your challenges, or if you’re just wanting to say a quick hello. So give us a shout, and let’s make some magic happen.

                    ul
                        li.u-inline-block.u-margin-right-md
                            a(href='https://househouse-hq.slack.com/', target='_blank', rel='noopener') Slack
                        li.u-inline-block.u-margin-right-md
                            a(href='https://github.com/househouse/', target='_blank', rel='noopener') GitHub
                        li.u-inline-block
                            a(href='https://twitter.com/house-house/', target='_blank', rel='noopener') Twitter

            div#contact-us

                    div.u-context

                        form#contact-form.u-block(action='https://formspree.io/ben@house-house.design', method='POST')

                            div.u-flexbox--small-up.u-clip
                                div.u-context.u-border-left-dark.u-border-bottom-dark.u-width-full--small-only.u-width-1of2--small-up.u-float-left.u-margin-right-md--small-up.u-margin-bottom-md(style='height:3rem;')
                                    label.u-position.u-top-halfway.u-realign-center-vert.u-text-size-small.u-color-primary.u-padding-left-md.u-stack-basic(for='form-name')
                                        | Your Name
                                    input.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-md#form-name(required='', type='text', name='_name')
                                div.u-context.u-border-left-dark.u-border-bottom-dark.u-width-full--small-only.u-width-1of2--small-up.u-float-left.u-margin-bottom-md(style='height:3rem;')
                                    label.u-position.u-top-halfway.u-realign-center-vert.u-text-size-small.u-color-primary.u-padding-left-md.u-stack-basic(for='form-email')
                                        | Your Email
                                    input.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-md#form-email(required='', type='text', name='_replyto')


                            div.u-flexbox--small-up.u-clip
                                div.u-context.u-border-left-dark.u-border-bottom-dark.u-width-full.u-float-left.u-margin-bottom-md(style='height:12rem;')
                                    label.u-position.u-bottom-0.u-text-size-small.u-color-primary.u-padding-left-md.u-padding-bottom-md.u-stack-basic(for='form-message' style='pointer-events:none;')
                                        | Your Message
                                    textarea.u-position.u-top-0.u-left-0.u-right-0.u-bottom-0.u-width-full.u-border-0.u-text-size-base.u-padding-left-md.u-padding-top-md.u-padding-bottom-md.u-padding-right-md#form-message(required='', placeholder='e.g. Hello, House House! I have a problem with ________ that I need some guidance on… I think I may need a designer! My budget is $__,____ and I would like a solution in ____ weeks. Can you help?', name='_message')


                            div.u-flexbox--small-up.u-clip
                                button.u-bg-primary.u-border-0.u-width-full--small-only.u-width-1of2--small-up.u-width-1of4--medium-up.u-color-light.u-padding-top-md.u-padding-bottom-md.u-float-right.u-text-size-base#form-submit(name='submit', type='submit')
                                    | Send

                            div(hidden='')
                                input(type='text', name='_gotcha')
                                input(type='hidden', name='_next', value='/thanks')
                                input(type='hidden', name='_subject', value='Hi there, House House!')
                                input(type='hidden', name='_cc', value='sean@house-house.design')
</template>

<script>
export default {};
</script>

<style>
</style>
