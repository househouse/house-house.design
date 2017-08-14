// Reusable, composable component
import cButton from '@/components/cButton/c-button'
import cCard from '@/components/cCard/c-card'
import cModal from '@/components/cModal/c-modal'

// Split this view into multiple partials
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
      msg: 'Welcome to House House Design, a Vue.js App',
    }
  },
  components: {
    cButton,
    cCard,
    cModal,
    HomeIntro
  }
}
