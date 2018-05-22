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
                        | With a tiny full-time staff and a big network, we can adapt to scale and changes—just as your teams and projects do.

                div.c-text-content.u-text-family-secondary.u-text-size-medium.u-baseline-medium
                    p
                        | When filmmakers make movies, characters are portrayed by the actors who best embody the role.
                        | Similarly, we’ll staff your project by choosing the designer who will best fit the requirements.
                        | With our vertality and broad range of skills, the result is your team acquires the right number of folks handpicked for your specific situation.
                    p
                        | Our full-time residents we live and breathe the House House way.
                        | Sometimes the addition of a single resident on your team is all you need.


//-
    section.u-bg-grey-dark.u-color-white.u-context
        div.u-squiggle.u-position.u-top-0(role='presentation' style='transform: translate(-50%, -50%) rotate(-45deg);')

        h2.u-margin-bottom-lg Housemates

        article.u-flex.u-margin-right-lg.c-contain.u-context.u-stack-basic
            div.c-text-content

                p Some projects need one highly specialized designer, like a senior user experience researcher, while others may require the hands of many front-end developers.

                p When the tasks are tall, we’ll rise to the challenge by bringing in our #[strong Housemates]. Our talented and trusted freelance friends can be an extra pair of hands needed to get the job done.

                p Some projects need a handful of specialists, like an information architect who has years of experience making sites for kids or a 3D animator who has extensive knowledge of the home improvement industry. Other projects call for an army of variously tenured folks, from junior-level production people to seasoned veterans who call the shots. For every project, we pull together the right people for the job.

        img.c-network.u-position.u-top-0.u-clip(src='../assets/img/network.png')
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
