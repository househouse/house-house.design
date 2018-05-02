<template lang="pug">
div
    section.c-section
        article.c-contain

            h1.c-title.u-margin-bottom-lg
                | #[span House House]
                | extends your team

            div.c-text-content.u-color-grey-dark
                p We’re organized a bit differently than the last agency you worked with, and we think that’s our biggest strength. With a tiny full-time staff and a big network, we can adapt to scale and changes — just as your teams and projects do.

    section.c-section.u-bg-black.u-color-white.u-context
        div.u-squiggle.u-position.u-top-0.u-left-halfway(role='presentation' style='transform: translate(-50%, -50%) rotate(45deg);')

        article.c-contain.u-margin-bottom-lg.c-text-content
            p A think a small team like ours can make a big impact when you need it to. We take an iterative design approach to our work, meaning we communicating often, pivoting and adjusting until we get it right. This is a process; as we discover and learn more about you and your business goals, targets may sometime change. By designing iteratively, we can make sure things adapt gracefully along the way.

        img(src='../assets/img/design-braid.png' style='opacity:0.95; width:100%; margin:1rem 0;')

        div.u-flexbox--medium-up.u-margin-bottom-md.u-align-center.u-context(style='line-height:1; margin-top:4rem;')
            div.c-text-content.u-flex.u-margin-bottom-lg.u-context.c-approach(style='z-index:10;')
                h3 Design
                span.u-block 🌀 Interface Design
                span.u-block 🌄 Brand Identity
                span.u-block 👉 Art Direction

            div.c-text-content.u-flex.u-margin-bottom-lg.u-context.c-approach(style='z-index:10;')
                h3 Technology
                span.u-block ⌨️ Front-End Development
                span.u-block 📱 Progressive Web Apps
                span.u-block 💻 Responsive Websites

            div.c-text-content.u-flex.u-margin-bottom-lg.u-context.c-approach(style='z-index:10;')
                h3 Strategy
                span.u-block ⚡️ Experience Strategy
                span.u-block 🗺 Service Design
                span.u-block 🔍 UX Research

            div.c-text-content.u-flex.u-margin-bottom-lg.u-context.c-approach(style='z-index:10;')
                h3 Mentorship
                span.u-block 🤝 Team Building
                span.u-block 🎨 Workshops
                span.u-block 📝 Training

    section.c-section.u-bg-primary.u-color-white.u-context
        div.u-squiggle.u-position.u-top-0.u-right-0(role='presentation' style='transform:translate(-150%, 100%) rotate(100deg);')

        h2.u-margin-bottom-lg Residents

        div.u-flexbox
            article.u-flex.u-margin-right-lg.c-contain.u-width-full.u-width-1of2--small-up
                div.c-text-content
                    p When filmmakers make movies, characters are portrayed by the actors who best embody the role. Similarly, we’ll staff your project by choosing the designer who will best fit the requirements. With our vertality and broad range of skills, the result is your team acquires the right number of folks handpicked for your specific situation.
                    p We residents and housemates are versatile.
                    p Our full-time residents we live and breathe the House House way. Sometimes the addition of a single resident on your team is all you need.

            aside.u-flex.u-width-full.u-width-1of2--small-up
                article.c-resident.c--ben.u-margin-bottom-lg
                    div.c-resident__image
                    div.c-resident__info.c-text-content
                        h3.c-resident__name.u-margin-bottom-sm Ben Groulx
                        p.c-resident__role.u-half-transparent Designer
                        p.c-resident__links.u-text-size-small.u-bold
                            a(href='https://www.linkedin.com/in/bengroulx/' target='_blank' rel='noopener').u-margin-right-md LinkedIn
                            a(href='https://github.com/bengroulx' target='_blank' rel='noopener') GitHub

                article.c-resident.c--sean
                    div.c-resident__image
                    div.c-resident__info.c-text-content
                        h3.c-resident__name.u-margin-bottom-sm Sean Durfee
                        p.c-resident__role.u-half-transparent Designer
                        p.c-resident__links.u-text-size-small.u-bold
                            a(href='https://www.linkedin.com/in/seandurfee' target='_blank' rel='noopener').u-margin-right-md LinkedIn
                            a(href='https://github.com/durfee' target='_blank' rel='noopener') GitHub

    section.c-section.u-bg-grey-dark.u-color-white.u-context
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
