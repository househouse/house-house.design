<template>
    <div class="view-home">

        <home-intro></home-intro>

        {{ msg }}

        <!--

        //- Template Modals
        +modal('Design Statement', 'statement')
            include includes/modals/_statement

        +modal('Design Process', 'process')
            include includes/modals/_process

        -->

    </div>
</template>


<script>
// Reusable, composable component
// ---
// import Modal from '../../components/Modal'
import Card from '../../components/Card'

// Split this view into multiple partials
// ---
// import HomeAbout from './partials/HomeAbout'
// import HomeContact from './partials/HomeContact'
// import HomePortfolio from './partials/HomePortfolio'
// import HomeProfiles from './partials/HomeProfiles'
// import HomeWork from './partials/HomeWork'
import HomeIntro from './partials/HomeIntro'

// Modals!
// ---
// import ModalStatement from './partials/ModalStatement'
// import ModalProcess from './partials/ModalProcess'

// Hook it up!
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to House House Design, a Vue.js App'
    }
  },
  components: {
    Card,
    HomeIntro
  }
}
</script>


<style scoped>
/* Template-scoped (or view-scoped) styles only */
</style>
