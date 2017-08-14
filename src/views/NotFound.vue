<template>
    <article lass="view-notfound" style="padding-top:20vh;padding-bottom:25vh">

        <div class="c-text-content u-measure-wide u-margin-horizontal-fill u-padding-left-md u-padding-right-md">

            <h1 class="u-context u-glitch u-align-center" data-glitch="Uh oh!" style="font-size:5rem">
                {{ title }}
            </h1>

            <p class="u-align-center">
                {{ msg }}
            </p>

        </div>

    </article>
</template>


<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'Uh oh!',
      msg: "We’re sorry, we can’t find what you're looking for…"
    }
  }
}
</script>


<style scoped>
/* Template-scoped (or view-scoped) styles only */
</style>
