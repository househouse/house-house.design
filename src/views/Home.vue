<template>
    <div class="view-home">
        {{ msg }}

        <!--

        //- Template Includes
        include includes/components/_card
        include includes/components/_modal

        //- Template Begin
        include includes/sections/_intro
        include includes/sections/_who-we-are
        include includes/sections/_our-work
        include includes/sections/_portfolio
        include includes/sections/_profiles
        include includes/sections/_contact

        //- Template Modals
        +modal('Design Statement', 'statement')
            include includes/modals/_statement

        +modal('Design Process', 'process')
            include includes/modals/_process

        -->

    </div>
</template>


<script>
import Card from '../components/Card'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to House House Design, a Vue.js App'
    }
  },
  components: {
    Card,
  }
}
</script>


<style scoped>
/* Template-scoped (or view-scoped) styles only */
</style>
