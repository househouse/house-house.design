<template lang="pug">
div#pageApproach

    section.u-padding-bottom-medium
        div.c-contain.u-color-black
            h1.c-heading-c--1.u-margin-bottom-small.u-max-width-3of4
                | #[span.u-visually-hidden House House:]
                | Page title for “Approach”

    section.u-padding-bottom-large
        div.c-contain

            div.u-width-3of4
                div.c-text-content.u-color-black.u-text-size-large.u-baseline-large.u-margin-bottom-medium
                    p
                        | We’re organized a bit differently than the last agency you worked with, and we think that’s our biggest strength.
                        | With a tiny full-time staff and a big network, we can adapt to scale and changes—just as your teams and projects must.

                div.c-text-content.u-text-family-secondary.u-text-size-medium.u-baseline-medium
                    p
                        | When filmmakers make movies, characters are portrayed by the actors who best embody the role.
                        | Similarly, we’ll staff your project by choosing the designers who best fit the requirements.
                        | Whether it’s design direction or support, your team acquires the right number of folks handpicked for your specific situation.


    section.u-padding-bottom-xlarge.u-padding-top-xlarge.u-bg-blue-light.u-shadow-thick.u-border-top-blue-medium
        div.c-contain
            div.c-text-content.u-text-size-large.u-baseline-large.u-color-white.u-text-align-center
                p
                    | When you start a project with
                    | #[strong.u-text-family-secondary House House]
                    | you’ll be assigned a Housemate with the right mix of skills and experience who can bring your team
                    | #[span.u-no-wrap up to speed].

                router-link(to='/housemates').c-button-link.c--purple.c--with-icon.u-text-secondary.u-text-size-medium.u-baseline-small
                    <svg width="35" height="32" viewBox="0 0 35 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Icon: Assembling</title>
                        <path d="M0,5.09090909 C0,4.68945455 0.325818182,4.36363636 0.727272727,4.36363636 L4.36363636,4.36363636 L4.36363636,7.27272727 L0.727272727,7.27272727 C0.325818182,7.27272727 0,6.94690909 0,6.54545455 L0,5.09090909 Z M28.3636364,4.36363636 C28.7650909,4.36363636 29.0909091,4.68945455 29.0909091,5.09090909 L29.0909091,6.54545455 L29.0909091,23.2727273 L29.0909091,24.7272727 L29.0909091,27.6363636 L29.0909091,29.0909091 L29.0909091,31.2727273 C29.0909091,31.6741818 28.7650909,32 28.3636364,32 L26.9090909,32 C26.5076364,32 26.1818182,31.6741818 26.1818182,31.2727273 L26.1818182,29.0909091 L26.1818182,27.6363636 L26.1818182,24.7272727 L26.1818182,23.2727273 L26.1818182,7.27272727 L10.1818182,7.27272727 L10.1818182,4.36363636 L26.9090909,4.36363636 L28.3636364,4.36363636 Z" fill="var(--orange-dark)"/>
                        <path d="M8.72727273,8.72727273 L8.72727273,24.7272727 L24.7272727,24.7272727 L24.7272727,27.6363636 L8,27.6363636 L6.54545455,27.6363636 C6.144,27.6363636 5.81818182,27.3105455 5.81818182,26.9090909 L5.81818182,25.4545455 L5.81818182,8.72727273 L5.81818182,7.27272727 L5.81818182,4.36363636 L5.81818182,2.90909091 L5.81818182,0.727272727 C5.81818182,0.325818182 6.144,0 6.54545455,0 L8,0 C8.40145455,0 8.72727273,0.325818182 8.72727273,0.727272727 L8.72727273,2.90909091 L8.72727273,4.36363636 L8.72727273,7.27272727 L8.72727273,8.72727273 Z M34.1818182,24.7272727 C34.5832727,24.7272727 34.9090909,25.0530909 34.9090909,25.4545455 L34.9090909,26.9090909 C34.9090909,27.3105455 34.5832727,27.6363636 34.1818182,27.6363636 L30.5454545,27.6363636 L30.5454545,24.7272727 L34.1818182,24.7272727 Z" fill="currentColor"/>
                    </svg>
                    | Learn about Housemates


            div.u-flexbox--medium-up.u-margin-top-medium
                div.u-flex-expand.u-bg-white.u-shadow-thick.u-padding-top-base.u-padding-bottom-base.u-padding-left-base.u-padding-right-base.u-margin-right-small
                    h3.u-margin-bottom-xsmall
                        | Bricks
                        | #[span.u-color-grey-medium / Flexible Pricing]
                    p To determine the cost of a designer, we look at the problems you’re experiencing, the goals you want to reach, and the context surrounding it all. Only then can we properly figure out the best approaches and set you up for future success. Our first solution is called “#[strong bricks].” — half-days of work, or 3–5 hours; one calendar day is comprised of two bricks. Bricks allow you to slot a designer in when you think they will make the biggest impact.

                div.u-flex-expand.u-bg-white.u-shadow-thick.u-padding-top-base.u-padding-bottom-base.u-padding-left-base.u-padding-right-base.u-margin-left-small
                    h3.u-margin-bottom-xsmall
                        | Campaigns
                        | #[span.u-color-grey-medium / Fixed-Rate Pricing]
                    p Huge scope? Complex requirements? Extended timelines? Depending on the project, it may sometimes be more appropriate to estimate the project as a whole. During a projects’s RFP phase, proposal phase, or discovery phase, we’ll work with you to plan the type and amount of suppert you’ll need. Instead of us delivering your project and parting ways, our Housemates will coach, mentor, support, and work in and on your team, setting you up for long-term success.
</template>

<script>
export default {
  name: 'Approach',
  metaInfo: {
    title: 'Approach • House House', // title will be injected into parent titleTemplate
  },
};
</script>

<style>
</style>
